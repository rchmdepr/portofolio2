import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import OrganisationalExperience from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import DownloadCV from "@/components/Download CV ";
import PictActivity from "@/components/Pict Activity";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <OrganisationalExperience />
      <DownloadCV />
      <PictActivity />
      <ContactSection />
    </main>
  );
};

export default Index;