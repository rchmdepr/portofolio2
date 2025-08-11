const SkillsSection = () => {
  const skills = [
    { name: "Git", icon: "📁" },
    { name: "Next.js", icon: "▲" },
    { name: "Vercel", icon: "📚" },
    { name: "Node.js", icon: "⬢" },
    { name: "Vite.io", icon: "🔌" },

  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-3 font-bold">{skill.icon}</div>
              <h3 className="font-semibold text-card-foreground">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;