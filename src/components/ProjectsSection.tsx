import { motion } from "framer-motion";
import { Calendar, MapPin, Terminal, GitBranch } from "lucide-react";

const OrganisationalExperience = () => {
  const experiences = [
    {
      orgName: "COPPALA",
      location: "Nganjuk, Jawa Timur, Indonesia",
      position: "Ketua Umum",
      period: "Sep 2021 - Sep 2022",
      description: "Saya individu pemegang ujung tombak organisasi sekaligus bertanggung jawab untuk merencanakan, mengatur, dan melaksanakan berbagai kegiatan proker yang berfokus pada konservasi lingkungan dan kegiatan luar ruangan.",
      achievements: [
        "Menginisiasi dan mengeksekusi berbagai proyek konservasi (seperti penanaman pohon, restorasi habitat, atau pembersihan kawasan) dengan manajemen sumber daya yang efisien di Gunung Kelud",
        "Memperluas jangkauan dampak organisasi dan mengamankan dukungan sumber daya yang berkelanjutan untuk program-program jangka panjang dengan Madapala UNESA (Universitas Negeri Surabaya)"
      ]
    },
    {
      orgName: "FAJI",
      location: "Mojokerto, Jawa Timur",
      position: "ATLET",
      period: "Sep 2021 - Sep 2022",
      description: "FAJI adalah organisasi yang bergerak di bidang olahraga prestasi, rekreasi/wisata sungai, dan konservasi lingkungan. Membuat kompetisi, sertifikasi pemandu (skipper), standar keselamatan, dan pengembangan potensi olahraga arung jeram.",
      achievements: [
        "Posisi saya di FAJI sebagai atlet arung jeram ganda putra"
      ]
    },
    {
      orgName: "KPUM",
      location: "Universitas Ahmad Dahlan, Yogyakarta, Indonesia",
      position: "KORDINATOR BIRO HUKUM",
      period: "Nov 2024 - Feb 2025",
      description: "Bertugas menyusun, mengelola, dan mengawasi peraturan perundang-undangan, memberikan advokasi hukum, dan memberikan layanan konsultasi terkait masalah hukum di dalam KPUMF.",
      achievements: [
        "Bertanggung jawab dalam merumuskan regulasi, memberikan interpretasi aturan, serta memastikan seluruh tahapan pemilu mahasiswa berjalan sesuai dengan prinsip keadilan dan legalitas yang berlaku"
      ]
    },
    {
      orgName: "BEM FAST",
      location: "Yogyakarta",
      position: "KASTRAD (Kajian Strategis)",
      period: "Feb 2025 - Present",
      description: "Bertugas menganalisis isu-isu penting, memproses data, dan menyiapkan rekomendasi strategis untuk tindakan atau advokasi.",
      achievements: [
        "Memfasilitasi diskusi dalam fakultas untuk meningkatkan kesadaran strategis",
        "Melakukan Advokasi ke Dekanat mengenai isu kebijakan studi dalam fakultas"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern - Minimalist Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4620_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4620_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Organisational <span className="text-zinc-500">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Beberapa pengalaman organisasi yang berkesan yang saya jalani selama sejauh ini.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-500 hover:bg-zinc-900"
            >
              {/* Decorative line on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 md:p-8">
                {/* Header: Nama Org & Periode */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-zinc-400 mb-2">
                      <GitBranch size={18} />
                      <span className="font-mono text-sm font-medium tracking-wider text-zinc-400">
                        {exp.orgName}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {exp.position}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700">
                      <Calendar size={14} className="text-white" />
                      <span className="font-mono text-xs">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Deskripsi & Poin */}
                <div className="space-y-6">
                  <p className="text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Code-like Achievements Block */}
                  <div className="bg-black/40 rounded-xl p-5 border border-zinc-800 font-mono text-sm relative group-hover:border-zinc-700 transition-colors">
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    </div>
                    <h4 className="text-zinc-500 mb-3 flex items-center gap-2 text-xs uppercase tracking-widest">
                      <Terminal size={12} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-zinc-300">
                          <span className="text-white mt-0.5">➜</span>
                          <span className="leading-relaxed opacity-90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganisationalExperience;