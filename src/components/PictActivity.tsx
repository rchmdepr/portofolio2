import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const PictActivity = () => {
  const [activities, setActivities] = useState<any[]>([]);
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
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Activity Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi kegiatan dan aktivitas bersama orang" hebat.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory max-w-5xl mx-auto px-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {activities.map((item, index) => (
            <div key={item.id} className="min-w-[85%] md:min-w-[60%] flex-shrink-0 snap-center group">
              
              {/* Tech Card Container */}
              <div className="bg-[#0a0a0a] border border-slate-800 rounded-xl p-3 shadow-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                
                {/* Window Header (Ala Terminal/App) */}
                <div className="flex items-center justify-between px-2 py-2 mb-2 border-b border-slate-800/60 bg-slate-900/30 rounded-t-lg">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                   </div>
                   <div className="text-[10px] font-mono text-slate-500">FOTO KE_{String(index + 1).padStart(2, '0')} / {String(activities.length).padStart(2, '0')}</div>
                </div>

                {/* Container Foto dengan Efek Monitor */}
                <div className="relative overflow-hidden rounded border border-slate-700/50 h-48 md:h-72 bg-black group-hover:border-primary/30 transition-colors">
                  {/* Scanline Overlay (Efek Garis TV) */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10 z-10"></div>
                  
                  <img 
                    src={getImageUrl(item.id)} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                </div>
                
                {/* Keterangan dengan Style Console Log */}
                <div className="mt-4 bg-slate-950 border border-slate-800 rounded p-4 font-mono text-xs md:text-sm relative">
                  <div className="absolute -top-2 left-3 px-2 bg-[#0a0a0a] text-[10px] text-primary/70 border border-slate-800 rounded">
                    LOG_OUTPUT
                  </div>
                  <p className="text-slate-300 leading-relaxed pt-1">
                    <span className="text-green-500 mr-2">$</span>
                    {item.name}
                    <span className="animate-pulse inline-block w-1.5 h-3 bg-green-500 ml-1 align-middle"></span>
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi Modern */}
        <div className="flex justify-center gap-6 mt-2">
          <button 
            onClick={() => scroll('left')}
            className="group p-4 rounded-full bg-background/50 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary hover:bg-slate-900/80 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-primary/20 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="group p-4 rounded-full bg-background/50 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary hover:bg-slate-900/80 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-primary/20 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PictActivity;