import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ActivityItem {
  id: string;
  name: string;
}

const PictActivity = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- KONFIGURASI ---
  // 1. Masukkan Link Folder Google Drive (Pastikan folder Public / Anyone with the link)
  const FOLDER_LINK = "https://drive.google.com/drive/folders/1HI9c2RacJrY_YREBMYU0bMcKu7tmoThX?usp=sharing";
  
  // 2. Masukkan API Key Google Drive (Wajib untuk membaca isi folder otomatis)
  const API_KEY = "AIzaSyA-YplJem1cC9D6B_-BUeUiTTdy2C6QGNQ"; // Tempel API Key dari Google Cloud Console di sini

  useEffect(() => {
    const fetchImages = async () => {
      // Ekstrak ID Folder dari Link
      const match = FOLDER_LINK.match(/[-\w]{25,}/);
      const folderId = match ? match[0] : null;

      if (API_KEY && folderId) {
        try {
          // Fetch daftar file dari Google Drive API
          const response = await fetch(
            `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name)&key=${API_KEY}`
          );
          const data = await response.json();

          if (data.error) {
            console.error("Google Drive API Error:", data.error);
          }

          if (data.files) {
            setActivities(data.files);
          }
        } catch (error) {
          console.error("Error fetching Drive files:", error);
        }
      } else {
        // FALLBACK: Data Manual jika tidak ada API Key
        // (Browser tidak bisa membaca isi folder Drive otomatis tanpa API Key)
        setActivities([
          { id: '12srt5iBBaA2St2E7lufPV_YqWzM0tjhZ', name: 'Foto 1 (Mode Manual - Butuh API Key untuk Otomatis)' },
          { id: '12srt5iBBaA2St2E7lufPV_YqWzM0tjhZ', name: 'Foto 2 (Mode Manual)' },
        ]);
      }
    };

    fetchImages();
  }, []);

  // Menggunakan lh3.googleusercontent.com agar lebih stabil dan menghindari error 403 Forbidden
  const getImageUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.7; // Geser 70% dari lebar container
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="activities" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern - Minimalist Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4620_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4620_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Activity <span className="text-zinc-500">Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Dokumentasi kegiatan dan aktivitas bersama orang" hebat.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory max-w-5xl mx-auto px-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {activities.map((item, index) => (
            <div key={item.id} className="min-w-[85%] md:min-w-[60%] flex-shrink-0 snap-center group">
              
              {/* Elegant Tech Card */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 shadow-2xl hover:border-zinc-600 transition-all duration-500 relative overflow-hidden group-hover:bg-zinc-900/80">
                
                {/* Window Header (Monochrome) */}
                <div className="flex items-center justify-between px-2 py-2 mb-3 border-b border-zinc-800/60">
                   <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
                   </div>
                   <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">IMG_{String(index + 1).padStart(3, '0')}</div>
                </div>

                {/* Container Foto */}
                <div className="relative overflow-hidden rounded-lg border border-zinc-800 h-56 md:h-80 bg-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <img 
                    src={getImageUrl(item.id)} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Keterangan */}
                <div className="mt-4 flex items-start gap-3 px-1">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                    <p className="text-zinc-400 font-mono text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">
                      {item.name}
                    </p>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Tombol Navigasi Modern */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8"
        >
          <button 
            onClick={() => scroll('left')}
            className="group p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="group p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PictActivity;