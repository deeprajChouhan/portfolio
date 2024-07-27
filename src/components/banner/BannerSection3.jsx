import React, { useContext } from "react";
import { DevolinContext } from "../../context/DevolinContext";

const BannerSection3 = () => {
  const {
    openAboutSection,
    openServiceSection,
    openPortfolioSection,
    openFaqSection,
    openGallerySection,
    openBlogSection,
    openContactSection
  } = useContext(DevolinContext)
  return (
    <div className="banner banner-3">
      <div className="main-social">
        <a href="#" title="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" title="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" title="Linkedin">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" title="Skype">
          <i className="fa-brands fa-skype"></i>
        </a>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-10">
            <div className="banner-txt text-center">
              <h3>Hello!</h3>
              <h1>
                <span>I'm</span> Daisy Moore.
              </h1>
              <h2>Front End Developer</h2>
              <p>
                I am Daisy Moore. I am a simple , creative, enthusiastic and
                fun-loving person. I always like to create something on my own
                which is helpful for others.
              </p>
              <div className="btn-box justify-content-center">
                <a
                  className="section-btn def-btn"
                  data-section="about"
                  role="button"
                  onClick={openAboutSection}
                >
                  <i className="fa-light fa-user"></i> About Me
                </a>
                <a href="#" className="def-btn">
                  <i className="fa-light fa-file-lines"></i> Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-10 col-lg-8 col-md-9 col-sm-10 col-11">
            <div className="nav-wrap-3">
              <div className="nav-grid">
                <div className="single-item">
                <a role="button" className="section-btn" data-section="about" onClick={openAboutSection}>
                    <span className="icon">
                      <i className="fa-thin fa-circle-user"></i>
                    </span>
                    <span className="txt">ABOUT</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="service"
                    onClick={openServiceSection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-gear"></i>
                    </span>
                    <span className="txt">SERVICE</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="portfolio"
                    onClick={openPortfolioSection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-folder-open"></i>
                    </span>
                    <span className="txt">PORTFOLIO</span>
                  </a>
                </div>
                <div className="single-item">
                <a role="button" className="section-btn" data-section="faq" onClick={openFaqSection}>
                    <span className="icon">
                      <i className="fa-thin fa-circle-question"></i>
                    </span>
                    <span className="txt">FAQ</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="gallery"
                    onClick={openGallerySection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-image"></i>
                    </span>
                    <span className="txt">GALLERY</span>
                  </a>
                </div>
                <div className="single-item">
                <a role="button" className="section-btn" data-section="blog" onClick={openBlogSection}>
                    <span className="icon">
                      <i className="fa-thin fa-file-pen"></i>
                    </span>
                    <span className="txt">BLOG</span>
                  </a>
                </div>
                <div className="single-item">
                  <a
                    role="button"
                    className="section-btn"
                    data-section="contact"
                    onClick={openContactSection}
                  >
                    <span className="icon">
                      <i className="fa-thin fa-user-plus"></i>
                    </span>
                    <span className="txt">CONTACT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; All rights reserved by <span>devolin</span>
        </p>
      </div>
    </div>
  );
};

export default BannerSection3;
