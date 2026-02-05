import aboutPortrait from "@/assets/foto-kita.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="text-black w-80 h-80 border-2 border-border rounded-lg overflow-hidden">
              <img 
                src={aboutPortrait} 
                alt="About me portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            
            <div className=" text-black space-y-4 text-muted-foreground leading-relaxed">             
              <p>
                Saya memiliki keterampilan dalam pengembangan web seperti react.js, git, next.js, vercel, node.js, vite.io.
                Saya tertarik dengan teknologi informasi sejak sekolah dasar, terinspirasi oleh permainan PC.
                Saya mulai bertanya-tanya bagaimana sebuah game bisa bergerak, dan bagaimana kita bisa menggerakkannya. Sejak saat itu, saya antusias dengan teknologi informasi dan mendalaminya lebih jauh di perguruan tinggi, menghadapi tantangan baru dan mempelajari hal-hal baru,
                seperti membangun situs web dari awal. Seiring berjalannya waktu, hobi saya berkembang, dan salah satunya saya mulai mengembangkan portofolio ini.
              </p>
              
              <p>
               Saya lebih aktif memperbarui kehidupan sehari-hari saya di Instagram daripada di LinkedIn.
               Oh ya, satu hal lagi, ketika Anda tidak menemukan saya di dunia nyata,
               itu berarti kehidupan saya hari ini berfokus pada memperbaiki kesalahan yang ada karena kesalahan ini sudah tertanam dalam darah saya🗿.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;