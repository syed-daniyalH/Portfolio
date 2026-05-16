import Navigation from "@/components/Navigation";
import HeroEnhanced from "@/components/HeroEnhanced";
import MetricsBanner from "@/components/MetricsBanner";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import About from "@/components/About";
import SkillsDetailed from "@/components/SkillsDetailed";
import ProjectsEnhanced from "@/components/ProjectsEnhanced";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <section id="home">
          <HeroEnhanced />
        </section>

        <MetricsBanner />

        <section id="summary">
          <ProfessionalSummary />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <SkillsDetailed />
        </section>

        <section id="projects">
          <ProjectsEnhanced />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
