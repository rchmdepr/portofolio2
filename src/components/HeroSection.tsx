import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
const HeroSection = () => {
  return <section className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-6 bg-white rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hello I'am <span className="text-primary">Rachmad Eka Putra R.</span>.
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Frontend Developer<br />
                Based In India.
              </h2>
            </div>
            
            <p className="leading-relaxed max-w-md text-zinc-950 text-lg font-medium">Halo, perkenalkan saya adalah mahasiswa Sistem Informasi angkatan 23 di Universitas Ahmad Dahlan. Selama masa perkuliahan, saya aktif mengembangkan kemampuan di bidang public speaking dan web development. Selain itu, saya sangat antusias mengikuti perkembangan teknologi terkini, sehingga selalu berusaha untuk terus belajar dan berinovasi. Dengan kombinasi pengalaman dan minat tersebut, saya berharap dapat memberikan kontribusi positif dalam dunia teknologi dan komunikasi.</p>

            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Github size={20} />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Linkedin size={20} />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
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