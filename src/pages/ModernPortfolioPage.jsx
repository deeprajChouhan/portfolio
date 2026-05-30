import { lazy, Suspense } from "react";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from "../components/sections/PortfolioSections";
import "../styles/modern-portfolio.css";

const ThreeHero = lazy(() => import("../components/hero/ThreeHero"));

const ModernPortfolioPage = () => {
  return (
    <main className="modern-portfolio">
      <Suspense
        fallback={
          <section className="modern-hero modern-hero--loading">
            <div className="modern-hero__content">
              <p className="modern-kicker">Portfolio loading</p>
              <h1>Deepraj Chouhan builds secure, usable software systems.</h1>
            </div>
          </section>
        }
      >
        <ThreeHero />
      </Suspense>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default ModernPortfolioPage;
