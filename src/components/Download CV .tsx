import { useState } from "react";
import { Download, Terminal, FileText, Check, Loader2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <section id="download-cv" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-800">Resume</span>
            </h2>
            <p className="text-muted-foreground">
              Download CV saya di bawah ini
            </p>
          </div>

          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
          {/* Terminal Card Container - Design ala IT */}
          <div className="relative rounded-xl overflow-hidden bg-[#0a0a0a] border border-slate-800 shadow-2xl font-mono">
            
            {/* Terminal Header */}
            <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-2"><Terminal size={12} /> rachmad@portfolio:~/downloads</div>
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>
            

            {/* Terminal Content */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Command Line Display */}
              <div className="flex flex-col space-y-2 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-blue-500">~</span>
                  <span className="text-slate-300">
                    <span className="text-purple-400">sudo</span> apt-get install <span className="text-yellow-400">cv-rachmad-eka</span>
                  </span>
                </div>
                
                <div className="pl-0 md:pl-4 text-slate-400 grid gap-1 text-xs md:text-sm mt-2">
                  <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.5s_forwards]">Reading package lists... Done</div>
                  <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.8s_forwards]">Building dependency tree... Done</div>
                  <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.1s_forwards]">The following NEW packages will be installed:</div>
                  <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.4s_forwards]">  cv-rachmad-eka-v2.0.pdf</div>
                  
                  <div className="mt-4 opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.7s_forwards] p-3 bg-slate-900/50 rounded border border-slate-800 flex items-center gap-3">
                    <FileText size={20} className="text-red-500" />
                    <div className="flex-1">
                      <div className="text-slate-200 font-medium">CV_Rachmad_Eka_Putra.pdf</div>
                      <div className="text-slate-500 text-xs">2.4 GB • PDF Document</div>
                    </div>
                    <div className="text-green-500 text-xs bg-green-500/10 px-2 py-1 rounded border border-green-500/20">Ready</div>
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-4 border-t border-slate-800 pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-slate-400 text-sm hidden sm:block">
                    <p className="flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> Click button to execute download</p>
                  </div>

                  {/* Toggle / Download Button */}
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={cn(
                      "relative overflow-hidden w-full sm:w-auto min-w-[200px] h-12 font-bold tracking-wide transition-all duration-300 border",
                      isDownloaded 
                        ? "bg-green-500/10 text-green-500 border-green-500/50 hover:bg-green-500/20" 
                        : "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary),0.5)]"
                    )}
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      {isDownloading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>EXECUTING...</span>
                        </>
                      ) : isDownloaded ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>DOWNLOAD COMPLETE</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          <span>DOWNLOAD NOW</span>
                        </>
                      )}
                    </div>
                    
                    {/* Progress Bar Animation Background */}
                    {isDownloading && (
                      <div className="absolute inset-0 bg-black/10 w-full h-full origin-left animate-[progress_2s_ease-in-out_forwards]" />
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Terminal Cursor */}
              <div className="text-slate-500 text-sm pt-2 font-mono">
                <span className="text-green-500">➜</span> <span className="text-blue-500">~</span> <span className="animate-pulse inline-block w-2 h-4 bg-slate-500 align-middle ml-1"></span>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default DownloadCV;