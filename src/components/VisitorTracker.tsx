import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VisitorTracker = () => {
  const [count, setCount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Konfigurasi
  // Namespace unik agar data tidak bentrok dengan orang lain
  const NAMESPACE = "rachmad.vercel.app";
  const KEY = "visits";
  const EMAIL_TARGET = "rachmadekaputraramadhan@gmail.com";

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // 1. Cek Session Storage agar tidak menghitung/spam email saat refresh halaman
        const hasVisited = sessionStorage.getItem("hasVisitedSession");

        if (!hasVisited) {
          // --- PENGUNJUNG BARU (Di Sesi Ini) ---
          
          // A. Increment Counter (Naikkan Jumlah)
          const countRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`);
          const countData = await countRes.json();
          
          if (countData && countData.count) {
            setCount(countData.count);
            
            // B. Kirim Email Notifikasi (Background Process)
            // Menggunakan FormSubmit AJAX endpoint
            await fetch(`https://formsubmit.co/ajax/${EMAIL_TARGET}`, {
              method: "POST",
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                _subject: `🚀 New Visitor! Total: ${countData.count}`,
                _captcha: "false",
                _template: "table",
                message: `Seseorang baru saja membuka website rachmad.vercel.app`,
                total_visitors: countData.count,
                time: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
                device_info: navigator.userAgent
              })
            });

            // Tandai sesi ini sudah dihitung
            sessionStorage.setItem("hasVisitedSession", "true");
          }
        } else {
          // --- PENGUNJUNG LAMA (Refresh Halaman) ---
          // Hanya ambil data counter tanpa menaikkan jumlah atau kirim email
          const countRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`);
          const countData = await countRes.json();
          if (countData && countData.count) {
            setCount(countData.count);
          }
        }
        
        // Tampilkan widget
        setIsVisible(true);

      } catch (error) {
        console.error("Tracker Error:", error);
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
