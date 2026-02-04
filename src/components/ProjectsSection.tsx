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
    <section id="projects" className="py-20 bg-dark-bg text-dark-foreground font-sans">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b-2 border-dark-foreground pb-2">
            <h2 className="text-3xl font-bold tracking-tight">Organisational Experience</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Header: Nama Org & Periode */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold">
                    {exp.orgName} <span className="text-dark-foreground/50 font-normal mx-2">- {exp.location}</span>
                  </h3>
                  <span className="text-sm font-semibold text-dark-foreground/80">{exp.period}</span>
                </div>

                {/* Jabatan */}
                <p className="text-lg italic font-medium mb-3 text-dark-foreground/90">{exp.position}</p>

                {/* Deskripsi & Poin */}
                <div className="space-y-4">
                  <p className="text-sm text-dark-foreground/70 leading-relaxed text-justify">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-dark-foreground/80 text-sm">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationalExperience;