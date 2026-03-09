import { useState } from "react";
import { Github, Linkedin, Instagram, ExternalLink, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const heroIllustration = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"; // Gambar sementara

const socialLinks = [
  {
    name: "Github",
    icon: Github,
    url: "https://github.com/rchmdepr", // Ganti dengan URL profil Github 
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/rachmadekaputraramadhan", // Ganti dengan URL profil Linkedin 
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/rchmdepr_", // Ganti dengan URL profil Instagram 
  },
];

const HeroSection = () => {
  const [showGithubLinks, setShowGithubLinks] = useState(false);

  return <section className="min-h-screen bg-zinc-950 flex items-center relative overflow-hidden">
      {/* Background Pattern - Minimalist Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4620_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4620_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
                Hello I'am <br /> <span className="text-zinc-500">Rachmad</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-zinc-400">
                Aut viam inveniam aut faciam.
              </h2>
            </div>
            
            <p className="leading-relaxed max-w-lg text-zinc-400 text-lg">
              Saya Rachmad Eka Putra Ramadhan, orang-orang mengenal saya sebagai Rachmad. Saya seorang 
              mahasiswa IT. Dengan Pengalaman lebih dari 1 tahun dalam manajemen proyek, administrasi,serta koordinasi antar tim internal maupun eksternal 
               dalam manajemen timeline sebuah proyek berjalan. Memiliki latar belakang organisasi lebih 
              dari 2 tahun yang mengasah soft skill kepemimpinan dan komunikasi secara detail dalam sebuah proyek 
              maupun non proyek</p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) =>
                link.name === "Github" ? (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() => setShowGithubLinks(!showGithubLinks)}
                      onBlur={() => setTimeout(() => setShowGithubLinks(false), 200)} // Menutup dropdown saat fokus hilang
                      className={`w-12 h-12 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${showGithubLinks ? 'border-zinc-500 text-white bg-zinc-800' : ''}`}
                    >
                      <link.icon size={20} />
                    </button>
                    <AnimatePresence>
                    {showGithubLinks && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-0 mb-3 w-64 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden ring-1 ring-white/10"
                      >
                        <div className="px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/50">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Pilih Akun</span>
                        </div>
                        <div className="p-1.5 space-y-1">
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-all group"
                            >
                              <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-md group-hover:border-zinc-600 transition-colors">
                                <Github size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium text-xs">Main Github</span>
                                <span className="text-[10px] text-zinc-500">Personal</span>
                              </div>
                              <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                            </a>
                            <a
                              href="https://github.com/rachmadepr"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-all group"
                            >
                              <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-md group-hover:border-zinc-600 transition-colors">
                                <Code2 size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium text-xs">Second Github</span>
                                <span className="text-[10px] text-zinc-500">Study</span>
                              </div>
                              <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
                            </a>
                        </div>
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                    <link.icon size={20} />
                  </a>
                )
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-500/20 to-transparent rounded-full blur-3xl transform scale-90"></div>
              <img src={heroIllustration} alt="Developer working on laptop" className="relative z-10 w-full max-w-lg h-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;