import { navItems, profile } from "../../data/portfolio";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroHUD = () => {
  return (
    <div className="modern-hud" aria-label="Portfolio navigation">
      <div className="modern-hud__brand">
        <span className="modern-hud__signal" aria-hidden="true" />
        <span>{profile.name}</span>
      </div>
      <nav className="modern-hud__nav">
        {navItems.map((item) => (
          <button
            className="modern-hud__button"
            type="button"
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Go to ${item.label}`}
          >
            <i className={`fa-light ${item.icon}`} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default HeroHUD;
