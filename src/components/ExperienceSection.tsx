import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Riset perangkat bergerak 3D LPPM UAD",
      location: "Universitas Ahmad Dahlan, Bantul",
      position: "Mahasiswa",
      period: "Dec 2025 - Present",
      summary: "Berfokus pada pengembangan dan optimalisasi teknologi visualisasi tiga dimensi (3D) yang diimplementasikan pada perangkat bergerak.",
      details: [
        "Publikasi ilmiah pada jurnal nasional terakreditasi bereputasi",
        "Pendaftaran Hak Kekayaan Intelektual (HKI) atas perangkat lunak yang dikembangkan"
      ]
    },
    {
      company: "PM BEM FAST",
      location: "Kampus 4 UAD, Bantul",
      position: "Koordinator Humas",
      period: "Jun 2025 - Jan 2026",
      summary: "Pemberdayaan masyarakat Kalurahan Sriharjo melalui implementasi teknologi tas siaga bencana multisensor untuk meningkatkan resiliensi dan mitigasi kebencanaan.",
      details: [
        "Pendaftaran Hak Kekayaan Intelektual (HKI) atas pembuatan media perantara informasi"
      ]
    },
    {
      company: "Joglo Coffe",
      location: "Jambidan, Bantul, DI Yogyakarta",
      position: "Staff Admin Operasional",
      period: "Nov 2024 - Dec 2025",
      summary: "Usaha di bidang Food and Beverage, berperan sebagai tim operasional cafe dalam mengelola ekosistem data transaksi hingga performa penjualan serta mengelola pasok bahan baku.",
      details: [
        "Menganalisis data transaksi mingguan untuk mengidentifikasi produk best-seller dan produk dengan margin rendah",
        "Membangun sistem pengumpulan data pelanggan (CRM sederhana) yang rapi melalui sistem transaksi",
        "Mengembangkan jalur pengadaan bahan baku impor berkualitas tinggi secara mandiri"
      ]
    },
    {
      company: "Galeri Anggrek",
      location: "Nganjuk, Jawa Timur, Indonesia",
      position: "Magang",
      period: "Jan 2023 - Dec 2023",
      summary: "Usaha di bidang teknologi informasi Pertanian Hortikultura, berperan sebagai perancangan pengembangan bisnis ekspor maupun impor dan pengelolaan sistem.",
      details: [
        "Merancang dan mengimplementasikan sistem pengelolaan data yang mengintegrasikan informasi inventaris dari hulu ke hilir",
        "Membangun hubungan dagang lokal pada supplier SEDUDO NGANJUK dengan mengelola sistem dokumentasi dan kepatuhan regulasi"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950 relative overflow-hidden">
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
            Work <span className="text-zinc-500">Experiences</span>
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-800"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot - Minimalist Ring */}
              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-[4px] top-0 w-[9px] h-[9px] bg-zinc-950 border-2 border-white rounded-full z-10 mt-1.5"></div>

              {/* Date/Period (Side) */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-8 md:pl-0 md:pr-12`}>
                 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium tracking-wide uppercase">
                    <Calendar size={12} />
                    {exp.period}
                 </span>
              </div>
              
              {/* Content Card */}
              <div className="md:w-1/2 pl-8 md:pl-12 md:pr-0">
                <div className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl hover:border-zinc-600 transition-all duration-500 hover:bg-zinc-900">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-xl text-white mb-1">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg shrink-0">
                      {exp.company.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-zinc-200 flex items-center gap-2">
                      <Briefcase size={16} className="text-zinc-500" />
                      {exp.position}
                    </h4>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                    {exp.summary}
                  </p>
                  
                  <ul className="space-y-3">
                  {exp.details.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 opacity-50"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;