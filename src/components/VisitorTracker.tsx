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
        const hasVisited = sessionStorage.getItem("hasVisitedSession");

        if (!hasVisited) {
          
          // A. Increment Counter (Naikkan Jumlah)
          const countRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`);
          const countData = await countRes.json();
          
          if (countData && countData.count) {
            setCount(countData.count);
            
            // Coba ambil data lokasi pengunjung
            let locationInfo = "Tidak terdeteksi";
            try {
              const locRes = await fetch("https://ipapi.co/json/");
              const locData = await locRes.json();
              
              // Ambil koordinat estimasi dari IP (Tanpa Izin Popup)
              const mapsLink = `https://www.google.com/maps?q=${locData.latitude},${locData.longitude}`;

              // Deteksi tipe koneksi (jika didukung browser) untuk estimasi speed
              const nav = navigator as any;
              const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
              let connectionType = "";
              if (connection) {
                // Menambahkan detail koneksi (Speed & Latency) sebagai info tambahan jaringan
                const speed = connection.effectiveType ? connection.effectiveType.toUpperCase() : 'Unknown';
                const rtt = connection.rtt ? `${connection.rtt}ms` : '';
                connectionType = ` [Conn: ${speed}${rtt ? `, Latency: ${rtt}` : ''}]`;
              }

              // Format lebih detail: IP Address - Kota, Wilayah, Negara | ISP/Provider | Link Maps
              // Note: MAC Address tidak dapat diambil via browser (Security Restriction), jadi kita maksimalkan info IP & Koneksi.
              locationInfo = `IP: ${locData.ip} - ${locData.city}, ${locData.region}, ${locData.country_name} | 📡 ISP: ${locData.org}${connectionType} | 📍 Est: ${mapsLink}`;
            } catch (e) {
              console.error("Gagal mengambil lokasi:", e);
            }

            // --- DETEKSI DEVICE & BROWSER TERPISAH ---
            const ua = navigator.userAgent;
            
            // 1. Deteksi OS & Device Brand
            let os = "Unknown OS";
            let device = "Unknown Device";

            if (ua.includes("Win")) {
                os = "Windows";
                device = "PC/Laptop";
            } else if (ua.includes("Mac") && !ua.includes("iPhone") && !ua.includes("iPad")) {
                os = "MacOS";
                device = "Macbook/iMac";
            } else if (ua.includes("Linux") && !ua.includes("Android")) {
                os = "Linux";
                device = "PC/Laptop";
            } else if (ua.includes("Android")) {
                os = "Android";
                // Coba deteksi brand HP berdasarkan keyword umum di UA
                if (ua.includes("Samsung") || ua.includes("SM-")) device = "Samsung";
                else if (ua.includes("Oppo") || ua.includes("CPH")) device = "Oppo";
                else if (ua.includes("Vivo") || ua.includes("V2")) device = "Vivo";
                else if (ua.includes("Redmi") || ua.includes("Xiaomi")) device = "Xiaomi/Redmi";
                else if (ua.includes("Realme") || ua.includes("RMX")) device = "Realme";
                else if (ua.includes("Infinix")) device = "Infinix";
                else {
                    // Coba ambil model dari string UA: "... Android 10; ModelName Build/..."
                    const match = ua.match(/Android\s[^;]+;\s([^)]+)/);
                    if (match && match[1]) {
                        device = match[1].split(" Build")[0].trim(); 
                    } else {
                        device = "Android Device";
                    }
                }
            } else if (ua.includes("iPhone") || ua.includes("iPad") || ua.includes("iPod")) {
                os = "iOS";
                device = ua.includes("iPad") ? "iPad" : "iPhone";
            }

            // 2. Deteksi Browser (Urutan penting)
            let browser = "Unknown Browser";
            if (ua.includes("SamsungBrowser")) browser = "Samsung Internet";
            else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
            else if (ua.includes("Edg")) browser = "Microsoft Edge";
            else if (ua.includes("Chrome")) browser = "Google Chrome";
            else if (ua.includes("Firefox")) browser = "Mozilla Firefox";
            else if (ua.includes("Safari")) browser = "Safari";
            else if (ua.includes("Trident")) browser = "Internet Explorer";

            const deviceInfoSeparated = `📱 Device: ${device} (${os}) | 🌐 Browser: ${browser}`;

            // B. Kirim Data ke Google Spreadsheet (via Apps Script)
            // Menggunakan URLSearchParams agar lebih stabil diterima Google Apps Script
            const data = new URLSearchParams();
            data.append("timestamp", new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }));
            data.append("visitor_count", countData.count.toString());
            data.append("location", locationInfo);
            data.append("device_info", deviceInfoSeparated);

            await fetch(GOOGLE_SCRIPT_URL, {
              method: "POST",
              body: data,
              mode: "no-cors" // Penting: mode no-cors agar tidak diblokir browser saat kirim ke Google Script
            });

            // Tandai sesi ini sudah dihitung
            sessionStorage.setItem("hasVisitedSession", "true");
          }
        } else {
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
