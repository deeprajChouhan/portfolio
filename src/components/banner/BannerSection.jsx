import React, { useContext } from "react";
import { DevolinContext } from "../../context/DevolinContext";
import Details from "../bannerComponents/details";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "../about/Avatar";

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
              With five years of experience in the software industry, I have honed my skills in various aspects of software development and IT. 
              My professional journey has equipped me with a solid foundation in coding, system architecture, and project management. Currently,
               I am further advancing my expertise by pursuing a Master's degree in Applied Cybersecurity,
                where I am delving into the intricacies of cyber defense, risk management, and digital forensics. 
                This combination of practical experience and academic growth positions me to tackle the evolving challenges in the cybersecurity landscape effectively.
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
