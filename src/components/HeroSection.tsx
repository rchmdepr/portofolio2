import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const socialLinks = [
  {
    name: "Github",
    icon: Github,
    url: "https://github.com/rchmdepr", // Ganti dengan URL profil Github Anda
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/rachmadekaputraramadhan", // Ganti dengan URL profil Linkedin Anda
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/rchmdepr_", // Ganti dengan URL profil Instagram Anda
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
              Hi, let me introduce myself. I'm a 23rd-year Information Systems student at Ahmad Dahlan University.
              During my studies, I've been actively developing my public speaking and web development skills.
               A goal doesn't require words; it only requires tangible evidence.</p>

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