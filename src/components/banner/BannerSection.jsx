import React, { useContext } from "react";
import { DevolinContext } from "../../context/DevolinContext.jsx";
import Details from "../bannerComponents/Details.jsx";

const BannerSection = () => {
  const {
    openAboutSection,
    openServiceSection,
    openPortfolioSection,
    openFaqSection,
    openGallerySection,
    openBlogSection,
    openContactSection,
  } = useContext(DevolinContext);
  return (
    <div className="banner">
      <div className="main-social">
        <a href="https://github.com/deeprajChouhan" title="Github">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/deepraj-chouhan-265a10165"
          title="Linkedin"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 nav-col">
            {/* <Canvas shadows camera={{ position: [0, 2, 3], fov: 30, scale: 400 }}>
             
              <OrbitControls />

              <Avatar />

              <ambientLight intensity={1} />
            </Canvas> */}
            <Details
              openAboutSection={openAboutSection}
              openFaqSection={openFaqSection}
              openServiceSection={openServiceSection}
              openContactSection={openContactSection}
              openPortfolioSection={openPortfolioSection}
            />
          </div>
          <div className="col-md-6">
            <div className="banner-txt">
              <h3>Hello!</h3>
              <h1>
                <span>I'm</span> Deepraj Chouhan
              </h1>
              <h2>Software Security Engineer</h2>
              <p style={{
                textAlign: "justify"
              }}>
                With five years of experience in the software industry, I am now pursuing a Master's in Applied Cybersecurity. My background in software development and current studies in cyber defense equip me to address the dynamic challenges in cybersecurity effectively.

              </p>
              <div className="btn-box">
                <a
                  className="section-btn def-btn"
                  data-section="about"
                  role="button"
                  onClick={openAboutSection}
                >
                  <i className="fa-light fa-user"></i> About Me
                </a>
                <a href="https://drive.google.com/file/d/1k0xHWofDX5Qver3TjluKyl5bskOPQRRA/view?usp=drive_link" className="def-btn" download target="_blank">
                  <i className="fa-light fa-file-lines"></i> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>{/* &copy; All rights reserved by <span>devolin</span> */}</p>
      </div>
    </div>
  );
};

export default BannerSection;
