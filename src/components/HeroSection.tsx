import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
// import heroIllustration from "@/assets/hero-illustration.png"; // Dikomentari agar tidak error jika file belum ada
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
  return <section className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-6 bg-white rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hello I'am <span className="text-primary">Rachmad</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Good things take time<br />
                
              </h2>
            </div>
            
            <p className="leading-relaxed max-w-md text-zinc-950 text-lg font-medium">
              Saya Rachmad Eka Putra Ramadhan, orang-orang mengenal saya sebagai Rachmad. Saya seorang 
              mahasiswa IT, tepatnya, saat ini sedang menempuh program studi Sistem Informasi. Dengan Pengalaman lebih 
              dari 1 tahun dalam manajemen proyek,administrasi,serta koordinasi antar tim internal maupun eksternal dan 
              bukan hal asing lagi dalam manajemen timeline sebuah proyek berjalan. Memiliki latar belakang organisasi lebih 
              dari 2 tahun yang mengasah soft skill kepemimpinan dan komunikasi secara detail dalam sebuah proyek 
              maupun non proyek</p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src={heroIllustration} alt="Developer working on laptop" className="w-full max-w-lg h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;