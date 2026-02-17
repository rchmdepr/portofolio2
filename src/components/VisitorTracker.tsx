import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VisitorTracker = () => {
  const [count, setCount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Konfigurasi
  // Namespace unik agar data tidak bentrok dengan orang lain
  const NAMESPACE = "rachmad.vercel.app";
  const KEY = "visits";
  // URL Google Apps Script Web App
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2aJR-LCVBITKsoji1PuFEgCALzi-IFKMOCxuezJUReatVTtHXEi8HI8mBJ-gab0TB/exec";

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        console.log("VisitorTracker: Memulai tracking...");

        // --- DEBUG MODE: SAYA MATIKAN SESSION STORAGE AGAR DATA SELALU TERKIRIM SAAT REFRESH ---
        // Jika sudah fix, nanti bisa diaktifkan lagi baris di bawah ini:
        // const hasVisited = sessionStorage.getItem("hasVisitedSession");
        const hasVisited = false; // Selalu dianggap pengunjung baru untuk testing

        if (!hasVisited) {
          console.log("VisitorTracker: Pengunjung baru (atau debug mode). Mengambil counter...");
          
          // A. Increment Counter (Naikkan Jumlah)
          const countRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`);
          const countData = await countRes.json();
          console.log("VisitorTracker: Counter API response:", countData);
          
          if (countData && countData.count) {
            setCount(countData.count);
            
            // Coba ambil data lokasi pengunjung
            let locationInfo = "Tidak terdeteksi";
            try {
              const locRes = await fetch("https://ipapi.co/json/");
              const locData = await locRes.json();
              // Format lebih detail: IP - Kota, Wilayah, Negara (ISP/Provider)
              locationInfo = `${locData.ip} - ${locData.city}, ${locData.region}, ${locData.country_name} (${locData.org})`;
              console.log("VisitorTracker: Lokasi didapat:", locationInfo);
            } catch (e) {
              console.error("Gagal mengambil lokasi:", e);
            }

            // B. Kirim Data ke Google Spreadsheet (via Apps Script)
            console.log("VisitorTracker: Mengirim data ke Google Sheet...");
            // Menggunakan URLSearchParams agar lebih stabil diterima Google Apps Script
            const data = new URLSearchParams();
            data.append("timestamp", new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }));
            data.append("visitor_count", countData.count.toString());
            data.append("location", locationInfo);
            data.append("device_info", navigator.userAgent);

            await fetch(GOOGLE_SCRIPT_URL, {
              method: "POST",
              body: data,
              mode: "no-cors" // Penting: mode no-cors agar tidak diblokir browser saat kirim ke Google Script
            });
            console.log("VisitorTracker: Data terkirim (Mode No-CORS - tidak ada respon balik, tapi sukses dikirim).");

            // Tandai sesi ini sudah dihitung
            sessionStorage.setItem("hasVisitedSession", "true");
          }
        } else {
          console.log("VisitorTracker: Pengunjung lama. Hanya ambil data counter.");
          const countRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`);
          const countData = await countRes.json();
          if (countData && countData.count) {
            setCount(countData.count);
          }
        }
        
        // Tampilkan widget
        setIsVisible(true);

      } catch (error) {
        // Ubah error menjadi warn agar tidak terlihat merah/rusak di console saat terkena AdBlock
        console.warn("Visitor Tracker blocked (likely by AdBlock/Extension). Using fallback.");
        // Fallback: Tetap tampilkan widget (angka 1) jika API gagal/kena AdBlock
        setCount(1);
        setIsVisible(true);
      }
    };

    trackVisitor();
  }, []);

  if (!isVisible || count === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 px-3 py-1.5 rounded-full shadow-lg"
      >
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </div>
        <span className="text-xs font-medium text-zinc-400">
          {count.toLocaleString()}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default VisitorTracker;
