import { ExternalLink } from "lucide-react";
import projectCrypto from "@/assets/project-crypto.png";
import projectEcommerce from "@/assets/project-ecommerce.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: "01",
      title: "Crypto Screener Application",
      description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image: projectCrypto,
      link: "#"
    },
    {
      id: "02", 
      title: "Euphoria - Ecommerce (Apparel) Website Template",
      description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image: projectEcommerce,
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg text-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="text-6xl font-bold text-dark-foreground/20 mb-4">
                  {project.id}
                </div>
                <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                <p className="text-dark-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-dark-foreground hover:text-dark-foreground/80 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="rounded-lg overflow-hidden border border-dark-foreground/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;