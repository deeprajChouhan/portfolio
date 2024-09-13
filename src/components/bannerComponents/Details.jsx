const Details = ({
  openAboutSection,
  openFaqSection,
  openServiceSection,
  openContactSection,
  openPortfolioSection,
  openBlogSection
}) => {
  return (
    <div className="col-md-6 nav-col">
      <div className="nav-wrap">
        <div className="nav-grid">
          <div className="single-item">
            <a
              role="button"
              className="section-btn"
              data-section="about"
              onClick={() => openAboutSection()}
            >
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
              onClick={() => openServiceSection()}
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
              onClick={() => openPortfolioSection()}
            >
              <span className="icon">
                <i className="fa-thin fa-folder-open"></i>
              </span>
              <span className="txt">PORTFOLIO</span>
            </a>
          </div>
          <div className="single-item">
            <a
              role="button"
              className="section-btn"
              data-section="faq"
              onClick={() => openFaqSection()}
            >
              <span className="icon">
                <i className="fa-thin fa-copy"></i>
              </span>
              <span className="txt">Research</span>
            </a>
          </div>

          {/* <div className="single-item">
            <a role="button" className="section-btn" data-section="blog" onClick={openBlogSection}>
            <span className="icon">
              <i className="fa-thin fa-file-pen"></i>
            </span>
            <span className="txt">Blogs</span>
            </a>
          </div> */}
          <div className="single-item">
            <a
              role="button"
              className="section-btn"
              data-section="contact"
              onClick={() => openContactSection()}
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
  );
};

export default Details;
