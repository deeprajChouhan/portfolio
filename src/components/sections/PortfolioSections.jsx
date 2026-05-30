import {
  education,
  experience,
  aiProjects,
  metrics,
  profile,
  skills,
  testimonials,
} from "../../data/portfolio";
import { useState } from "react";

const SectionHeader = ({ kicker, title, children }) => (
  <div className="modern-section__header">
    <p className="modern-kicker">{kicker}</p>
    <h2>{title}</h2>
    {children ? <p>{children}</p> : null}
  </div>
);

export const AboutSection = () => (
  <section className="modern-section" id="about" aria-labelledby="about-title">
    <SectionHeader kicker="About" title="AI engineer with product delivery depth.">
      {profile.summary}
    </SectionHeader>
    <div className="modern-metrics">
      {metrics.map((metric) => (
        <div className="modern-metric" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export const SkillsSection = () => (
  <section className="modern-section modern-section--alt" id="skills" aria-labelledby="skills-title">
    <SectionHeader kicker="Skills" title="The stack behind reliable AI products." />
    <div className="modern-card-grid">
      {skills.map((group) => (
        <article className="modern-card" key={group.title}>
          <h3>{group.title}</h3>
          <div className="modern-tags">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export const ProjectsSection = () => (
  <section className="modern-section" id="projects" aria-labelledby="projects-title">
    <SectionHeader kicker="Selected AI Work" title="LLM systems, ML security, and privacy-focused engineering.">
      Projects from the recent AI resume, shaped for AI Engineer, LLM Engineer,
      Applied AI Engineer, RAG Engineer, and AI Platform roles.
    </SectionHeader>
    <div className="modern-project-grid">
      {aiProjects.map((project) => (
        <article className="modern-project-card" key={project.title}>
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.intro}</p>
        </article>
      ))}
    </div>
  </section>
);

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRole = experience[activeIndex];

  return (
    <section className="modern-section modern-section--alt modern-experience" id="experience" aria-labelledby="experience-title">
      <SectionHeader kicker="Experience" title="AI delivery built on serious engineering foundations.">
        Select a role to see the AI, platform, security, and product evidence
        behind the timeline.
      </SectionHeader>
      <div className="experience-layout">
        <div className="experience-proof-board" aria-label="Experience proof board">
          <div>
            <span>Current focus</span>
            <strong>AI workflow automation</strong>
            <p>LLM-assisted sales operations, Python automation pipelines, service integration, and monitoring.</p>
          </div>
          <div>
            <span>Platform depth</span>
            <strong>Backend + cloud systems</strong>
            <p>API design, scalable services, SQL Server, Oracle Cloud migration, Docker, Redis, and CI/CD foundations.</p>
          </div>
          <div>
            <span>Security layer</span>
            <strong>Secure AI practices</strong>
            <p>Access control, audit logging, protected workflows, application testing, and privacy-aware engineering.</p>
          </div>
          <div className="proof-score">
            <strong>6+</strong>
            <span>years connecting AI ideas to production software delivery</span>
          </div>
        </div>
        <div className="experience-panel">
          <p className="modern-kicker">{activeRole.period}</p>
          <h3>{activeRole.title}</h3>
          <p>{activeRole.company}</p>
          <p className="experience-panel__focus">{activeRole.focus}</p>
          <p className="experience-panel__impact">{activeRole.impact}</p>
          <div className="experience-panel__meta">
            <span>Selected node</span>
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          </div>
          <div className="modern-timeline modern-timeline--compact">
            {experience.map((item, index) => (
              <button
                className={`modern-timeline__item ${activeIndex === index ? "is-active" : ""}`}
                type="button"
                key={`${item.company}-${item.period}`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{item.period}</span>
                <strong>{item.title}</strong>
                <small>{item.company}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="modern-education">
        {education.map((item) => (
          <article key={item.title}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export const ContactSection = () => (
  <section className="modern-section modern-contact" id="contact" aria-labelledby="contact-title">
    <SectionHeader kicker="Contact" title="Ready for clear technical conversations.">
      Send a role, project brief, or security-focused software challenge.
    </SectionHeader>
    <div className="modern-contact__grid">
      <a href={`mailto:${profile.email}`}>
        <i className="fa-light fa-envelope" aria-hidden="true" />
        {profile.email}
      </a>
      <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
        <i className="fa-light fa-phone" aria-hidden="true" />
        {profile.phone}
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true" />
        GitHub
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
        LinkedIn
      </a>
    </div>
    <div className="modern-testimonials" aria-label="Testimonials">
      <div className="modern-testimonials__header">
        <p className="modern-kicker">Testimonials</p>
        <h3>What people say about working with me.</h3>
      </div>
      <div className="modern-testimonials__grid">
        {testimonials.map((testimonial) => (
          <blockquote className="modern-testimonial-card" key={testimonial.id}>
            <p>&quot;{testimonial.review}&quot;</p>
            <cite>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.position}</span>
            </cite>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);
