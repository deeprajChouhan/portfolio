import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import React, { useContext } from "react";
import AboutContent from "./AboutContent";
import FunFactContent from "./FunFactContent";
import EducationContent from "./EducationContent";
import { DevolinContext } from "../../context/DevolinContext";

const AboutSection = () => {
    const {isAboutOpen, closeAboutSection} = useContext(DevolinContext)
  return (
    <OverlayScrollbarsComponent className={`about section-panel ${isAboutOpen? 'active':''}`} id="about">
      <button className="panel-close-btn" data-close="about" onClick={closeAboutSection}>
        <i className="fa-light fa-xmark"></i>
      </button>
        <AboutContent/>
        <EducationContent/>
        <FunFactContent/>
    </OverlayScrollbarsComponent>
  );
};

export default AboutSection;
