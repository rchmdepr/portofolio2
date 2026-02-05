import { useState } from "react";
import { Download, Terminal, FileText, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DownloadCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulasi proses download dengan delay agar terlihat seperti proses IT
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      
      // Membuka link Google Drive di tab baru
      // GANTI LINK DI BAWAH INI dengan link Google Drive CV 
      window.open('https://drive.google.com/drive/folders/1xFVP4UihEie3Q0Z_ivMHuhswr0g9XKd_?usp=sharing', '_blank');

      // Reset status tombol setelah 3 detik
      setTimeout(() => setIsDownloaded(false), 3000);
    }, 2000);
  };

  return (
    <section id="download-cv" className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Terminal Card Container - Design ala IT */}
          <div className="relative rounded-xl overflow-hidden bg-[#000000] border border-slate-800 shadow-2xl font-mono group hover:border-primary/50 transition-colors duration-300">
            
            {/* Terminal Header */}
            <div className="bg-[#ffffff] px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-black font-medium">Download CV saya di sini</div>
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>
            

            {/* Terminal Content */}
            <div className="p-6 space-y-6">
              
              {/* Command Line Display */}
              <div className="flex flex-col space-y-2 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300">ls -la ./documents/resume</span>
                </div>
                <div className="pl-6 text-slate-400 grid gap-1">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-yellow-500" />
                    <span>CV_Rachmad_Eka_Putra.pdf</span>
                    <span className="text-slate-600 text-xs">2.4MB</span>
                    <span className="text-green-500 text-xs bg-green-500/10 px-1 rounded">Verified</span>
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-4 border-t border-slate-800 pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-slate-300 text-sm">
                    <p className="mb-1">Siap download?</p>
                    <p className="text-xs text-slate-500">Pastikan internet saudara stabil.</p>
                  </div>

                  {/* Toggle / Download Button */}
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={cn(
                      "relative overflow-hidden min-w-[180px] h-12 font-bold tracking-wide transition-all duration-300",
                      isDownloaded 
                        ? "bg-green-600 hover:bg-green-700 text-white border-green-500" 
                        : "bg-white hover:bg-red-700 text-black" // <-- Ubah warna tombol di sini (contoh: bg-blue-600)
                    )}
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      {isDownloading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>DOWNLOADING...</span>
                        </>
                      ) : isDownloaded ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Done Bang</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          <span>DOWNLOAD CV</span>
                        </>
                      )}
                    </div>
                    
                    {/* Progress Bar Animation Background */}
                    {isDownloading && (
                      <div className="absolute inset-0 bg-white/20 w-full h-full origin-left animate-[progress_2s_ease-in-out_forwards]" />
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Terminal Cursor */}
              <div className="text-slate-500 text-sm pt-2">
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default DownloadCV;