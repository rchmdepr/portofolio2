import aboutPortrait from "@/assets/about-portrait.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="w-80 h-80 border-2 border-border rounded-lg overflow-hidden">
              <img 
                src={aboutPortrait} 
                alt="About me portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in full stack 
                development (React.js & Node.js). I am very enthusiastic about bringing 
                the technical and visual aspects of digital products to life. User 
                experience, pixel perfect design, and writing clear, readable, highly 
                performant code matters to me.
              </p>
              
              <p>
                I began my journey as a web developer in 2015, and since then, I've 
                continued to grow and evolve as a developer, taking on new challenges 
                and learning the latest technologies along the way. Now, in my early 
                thirties, 7 years after starting my web development journey, I'm 
                building cutting-edge web applications using modern technologies such 
                as Next.js, TypeScript, Nestjs, TailwindCSS, Supabase and much more.
              </p>
              
              <p>
                When I'm not in full-on developer mode, you can find me hovering around 
                on twitter or on indie hacker, witnessing the journey of early 
                startups or enjoying some free time. You can follow me on Twitter where 
                I share tech-related bites and build in public, or you can follow me on 
                GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;