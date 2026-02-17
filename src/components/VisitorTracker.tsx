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
        // 1. Cek Session Storage agar tidak menghitung/spam data saat refresh halaman
        // Menggunakan sessionStorage agar izin lokasi tidak muncul terus menerus setiap refresh
        const hasVisited = sessionStorage.getItem("hasVisitedSession");

        if (!hasVisited) {
          
          // A. Increment Counter (Naikkan Jumlah)
          const countRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`);
          const countData = await countRes.json();
          
          if (countData && countData.count) {
            setCount(countData.count);
            
            // --- DETEKSI LOKASI (GPS REAL) ---
            let locationInfo = "Tidak terdeteksi";
            
            // Helper: Promise untuk mendapatkan GPS
            const getGPSLocation = () => new Promise<string | null>((resolve) => {
              if (!navigator.geolocation) {
                resolve(null);
                return;
              }
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  // Buat link Google Maps
                  resolve(`https://www.google.com/maps?q=${latitude},${longitude}`);
                },
                (error) => {
                  console.warn("GPS ditolak/error:", error.message);
                  resolve(null);
                },
                { enableHighAccuracy: true, timeout: 5000 }
              );
            });

            try {
              // 1. Coba ambil GPS dulu
              const gpsLink = await getGPSLocation();
              
              if (gpsLink) {
                locationInfo = `📍 GPS Real: ${gpsLink}`;
              } else {
                // 2. Fallback ke IP Address jika GPS ditolak
                const locRes = await fetch("https://ipapi.co/json/");
                const locData = await locRes.json();
                locationInfo = `🌐 IP Location: ${locData.ip} - ${locData.city}, ${locData.region}, ${locData.country_name} (${locData.org})`;
              }
            } catch (e) {
              console.error("Gagal mengambil lokasi:", e);
            }

            // --- DETEKSI DEVICE & BROWSER TERPISAH ---
            const ua = navigator.userAgent;
            let os = "Unknown OS";
            if (ua.includes("Win")) os = "Windows";
            else if (ua.includes("Mac")) os = "MacOS";
            else if (ua.includes("Linux")) os = "Linux";
            else if (ua.includes("Android")) os = "Android";
            else if (ua.includes("like Mac")) os = "iOS";

            let browser = "Unknown Browser";
            if (ua.includes("Firefox")) browser = "Firefox";
            else if (ua.includes("SamsungBrowser")) browser = "Samsung Internet";
            else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
            else if (ua.includes("Trident")) browser = "Internet Explorer";
            else if (ua.includes("Edge")) browser = "Edge";
            else if (ua.includes("Chrome")) browser = "Chrome";
            else if (ua.includes("Safari")) browser = "Safari";

            // Format string agar terpisah jelas di Excel
            const deviceInfoSeparated = `📱 Device: ${os} | 🌐 Browser: ${browser}`;

            // B. Kirim Data ke Google Spreadsheet (via Apps Script)
            // Menggunakan URLSearchParams agar lebih stabil diterima Google Apps Script
            const data = new URLSearchParams();
            data.append("timestamp", new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }));
            data.append("visitor_count", countData.count.toString());
            data.append("location", locationInfo);
            data.append("device_info", deviceInfoSeparated); // Mengirim info yang sudah dipisah

            await fetch(GOOGLE_SCRIPT_URL, {
              method: "POST",
              body: data,
              mode: "no-cors" // Penting: mode no-cors agar tidak diblokir browser saat kirim ke Google Script
            });

            // Tandai sesi ini sudah dihitung
            sessionStorage.setItem("hasVisitedSession", "true");
          }
        } else {
          // Pengunjung lama (Refresh) - Hanya ambil data counter
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
