const ExperienceSection = () => {
  const experiences = [
    {
      company: "Google",
      position: "Lead Software Engineer",
      period: "Nov 2019 - Present",
      description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing our systems to handle billions of queries daily."
    },
    {
      company: "Youtube",
      position: "Software Engineer",
      period: "Jan 2017 - Oct 2019",
      description: "At YouTube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the world's largest video-sharing platform. Working on projects that directly impacted billions of users, I gained invaluable experience in scalable system architecture and optimization."
    },
    {
      company: "Apple",
      position: "Junior Software Engineer",
      period: "Jan 2016 - Dec 2016",
      description: "During my tenure at Apple, I held the role of Software Engineer, where I played a part in shaping the technology landscape. Working on projects that seamlessly integrated with Apple's ecosystem, I gained a deep appreciation for user-centric design and innovative problem-solving."
    }
  ];

  return (
    <section className="py-20 bg-dark-bg text-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {exp.company.charAt(0)}
                  </div>
                  <span className="font-semibold">{exp.company}</span>
                </div>
                <p className="text-sm text-dark-foreground/70">{exp.period}</p>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-3">{exp.position} at {exp.company}</h3>
                <p className="text-dark-foreground/80 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;