import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    { name: "VS Code", icon: " 💻 ", url: "https://code.visualstudio.com//" },
    { name: "Flutter", icon: " 📱 ", url: "https://flutter.dev/" },
    { name: "Git", icon: "🔶", url: "https://git-scm.com/" },
    { name: "Next.js", icon: "✨ ", url: "https://nextjs.org/" },
    { name: "Vercel", icon: "🛠️", url: "https://vercel.com/" },
    { name: "Node.js", icon: "☕", url: "https://nodejs.org/" },
    { name: "Vite.io", icon: "⚡️", url: "https://vitejs.dev/" },
    { name: "Google Cloud", icon: " ☁️ ", url: "https://cloud.google.com/" },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-800">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beberapa tools yang saya gunakan untuk membuat produk digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 inline-block drop-shadow-sm">{skill.icon}</div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{skill.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;