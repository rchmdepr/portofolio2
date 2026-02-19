import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
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
  return <section className="min-h-screen bg-zinc-950 pt-20 pb-16 relative overflow-hidden">
      {/* Background Pattern - Minimalist Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4620_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4620_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
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
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <link.icon size={20} />
                </a>
              ))}
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