import aboutPortrait from "@/assets/foto-kita.png";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
              <div className="w-80 h-80 border-4 border-background shadow-xl rounded-2xl overflow-hidden relative z-10">
                <img 
                  src={aboutPortrait} 
                  alt="About me portrait" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-6 relative inline-block"> 
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-800">Me</span>
              <span className="absolute bottom-1 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">             
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;