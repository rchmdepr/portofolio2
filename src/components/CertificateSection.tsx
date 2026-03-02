import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Shield } from "lucide-react";

// Helper untuk mendapatkan URL thumbnail/preview dari Google Drive (Support Gambar & PDF)
const getDriveThumbnail = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const CertificateSection = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- KONFIGURASI GOOGLE DRIVE ---
  // Gunakan API Key yang sama dengan PictActivity atau buat baru di Google Cloud Console
  const API_KEY = "AIzaSyA-YplJem1cC9D6B_-BUeUiTTdy2C6QGNQ"; 
  // GANTI DENGAN ID FOLDER GOOGLE DRIVE YANG BERISI SERTIFIKAT (Pastikan akses "Anyone with the link")
  const FOLDER_ID = "1Pr9gENzAfaNKUgk0x6hv2sbyPjMfQlb3"; 

  useEffect(() => {
    const fetchCertificates = async () => {
      if (!API_KEY || FOLDER_ID.includes("GANTI")) {
        // Data Dummy jika konfigurasi belum diisi agar layout tidak rusak
        setCertificates([
          { id: "1_DUMMY_ID_1", name: "Dicoding - Sertifikat Web Dasar.pdf", webViewLink: "#" },
          { id: "1_DUMMY_ID_2", name: "Dicoding - Sertifikat React Expert.pdf", webViewLink: "#" },
        ]);
        return;
      }

      try {
        // Query untuk mengambil file dari folder tertentu (tidak termasuk folder sampah)
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+trashed=false&fields=files(id,name,webViewLink)&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.files) {
          setCertificates(data.files);
        } else if (data.error) {
          console.error("Drive API Error:", data.error);
        }
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, []);

  // Helper untuk membersihkan nama file (menghapus ekstensi .pdf/.png)
  const formatTitle = (filename: string) => {
    return filename.replace(/\.(pdf|png|jpg|jpeg)$/i, "");
  };

  // Helper untuk menebak penerbit dari nama file (Opsional: Format nama file "Penerbit - Judul")
  const getIssuer = (filename: string) => {
    if (filename.includes("-")) return filename.split("-")[0].trim();
    return "Professional Certification";
  };

  // Helper untuk render kartu (diekstrak agar bisa dipakai di 2 baris marquee)
  const renderCertificateCard = (cert: any, index: number) => {
    const issuer = getIssuer(cert.name);
    return (
      <div
        key={`${cert.id}-${index}`}
        className="snap-center group relative w-[300px] md:w-[360px] flex-shrink-0 transition-all duration-500"
      >
        {/* Main Card Container with Asymmetric Shape */}
        <div className="relative h-full bg-zinc-900/80 backdrop-blur-md border-2 border-zinc-800 rounded-tl-[2.5rem] rounded-br-[2.5rem] overflow-hidden hover:border-zinc-600 transition-all duration-500">
            
            {/* --- IT BORDER DESIGN --- */}
            {/* Top Left Curve Accent (Tech Rail) */}
            <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none z-20" viewBox="0 0 100 100">
                <path d="M 2 40 Q 2 2 40 2" fill="none" stroke="currentColor" strokeWidth="4" className="text-zinc-600 group-hover:text-primary transition-colors duration-500" />
            </svg>
            
            {/* Bottom Right Curve Accent (Tech Rail) */}
            <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none z-20" viewBox="0 0 100 100">
                <path d="M 98 60 Q 98 98 60 98" fill="none" stroke="currentColor" strokeWidth="4" className="text-zinc-600 group-hover:text-primary transition-colors duration-500" />
            </svg>

            {/* Sharp Corner Brackets (Tech Corners) */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-zinc-700 group-hover:border-primary transition-colors duration-500 z-20"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-zinc-700 group-hover:border-primary transition-colors duration-500 z-20"></div>

            {/* Image Section */}
            <div className="relative h-48 overflow-hidden bg-zinc-950">
                {/* Diagonal Slice Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-zinc-900/90 to-transparent z-10"></div>
                
                <div className="absolute top-4 right-0 z-20 bg-black/80 backdrop-blur-md px-3 py-1 rounded-l-full border-l border-y border-zinc-700 flex items-center gap-2 shadow-lg translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                    <Shield size={12} className="text-green-500" /> 
                    <span className="text-[10px] font-mono text-zinc-300 font-bold tracking-wider">VERIFIED</span>
                </div>

                <img
                    src={getDriveThumbnail(cert.id)}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 relative">

                <h3 className="text-lg font-bold text-zinc-100 mb-1 line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
                    {formatTitle(cert.name)}
                </h3>

                <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
                    <Award size={14} className="text-zinc-500" />
                    <span className="font-mono text-xs">{issuer || "Unknown Issuer"}</span>
                </div>

                <a
                    href={cert.webViewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden block w-full group/btn"
                >
                    <div className="absolute inset-0 w-full h-full bg-zinc-800/50 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-lg"></div>
                    <div className="relative flex items-center justify-between px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg group-hover/btn:border-zinc-600 transition-colors">
                        <span className="text-xs font-mono text-zinc-300 group-hover/btn:text-white tracking-wider">VIEW_CERTIFICATE</span>
                        <ExternalLink size={14} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
                    </div>
                </a>
            </div>
        </div>
        
        {/* Background Glow Element */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
    );
  };

  // Logic Infinite Scroll Manual
  // Kita buat 3 set data: [Set A] [Set B (Start)] [Set C]
  const infiniteCertificates = [...certificates, ...certificates, ...certificates];

  useEffect(() => {
    // Saat data dimuat, langsung posisikan scroll di tengah (Awal Set B)
    if (scrollRef.current && certificates.length > 0) {
      const container = scrollRef.current;
      const totalWidth = container.scrollWidth;
      const oneSetWidth = totalWidth / 3;
      
      container.scrollLeft = oneSetWidth;
    }
  }, [certificates]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || certificates.length === 0) return;

    const totalWidth = container.scrollWidth;
    const oneSetWidth = totalWidth / 3;
    const scrollLeft = container.scrollLeft;

    // Jika user scroll terlalu ke kiri (masuk ke Set A), lempar balik ke Set B
    if (scrollLeft < oneSetWidth * 0.1) {
      container.scrollLeft = scrollLeft + oneSetWidth;
    }
    // Jika user scroll terlalu ke kanan (masuk ke Set C), lempar balik ke Set B
    else if (scrollLeft > oneSetWidth * 2.5) {
       container.scrollLeft = scrollLeft - oneSetWidth;
    }
  };

  return (
    <section id="certificates" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-[5%] left-[10%] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-800">
              Certificates
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sedikit Koleksi Dari Saya.
          </p>
        </motion.div>

        <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none' }}
        >
          {infiniteCertificates.map((cert, index) => renderCertificateCard(cert, index))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;