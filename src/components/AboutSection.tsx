// import aboutPortrait from "@/assets/about-portrait.png"; // Dikomentari agar tidak error jika file belum ada
const aboutPortrait = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"; // Gambar sementara

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
                I'm an information systems student with a passion and a strong desire to become a project manager.
                 I have skills in web development (not all) such as react.js, git, next.js, vercel, node.js, vite.io.
              </p>
              
              <p>
                I've been interested in information technology since elementary school, inspired by playing PC games (Point Blank). 
                I began to wonder how a game could move, and how we could move it. Since then, I've been enthusiastic 
                about information technology and have delved deeper into it in college, facing new challenges and learning new things, 
                such as building websites from scratch. As time went on, my hobby expanded, and I began to develop this portfolio.
              </p>
              
              <p>
                I am more active in updating my day to day life on Instagram than on LinkedIn. Oh yes, one more thing, when you don't find 
                me in the real world, it means that my life today is focused on fixing existing errors because this error is 
                already ingrained in my blood🗿.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;