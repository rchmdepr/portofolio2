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
    <section id="experience" className="py-20 bg-dark-bg text-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experiences</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 border-b border-dark-foreground/10 pb-8 last:border-0">
              {/* Sisi Kiri: Perusahaan dan Periode */}
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {exp.company.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold block">{exp.company}</span>
                    <p className="text-xs text-dark-foreground/60">{exp.location}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-500">{exp.period}</p>
              </div>
              
              {/* Sisi Kanan: Detail Pekerjaan */}
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-1 italic text-dark-foreground/90">{exp.position}</h3>
                <p className="text-sm text-dark-foreground/70 leading-relaxed mb-4">
                  {exp.summary}
                </p>
                <ul className="list-disc list-outside ml-5 space-y-2 text-dark-foreground/80 text-sm">
                  {exp.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;