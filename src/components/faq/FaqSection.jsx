import React, { useContext } from "react";
import FaqContent from "./FaqContent";
import { DevolinContext } from "../../context/DevolinContext";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const FaqSection = () => {
    const {isFaqOpen,closeFaqSection} = useContext(DevolinContext)
  return (
    <OverlayScrollbarsComponent className={`faq section-panel ${isFaqOpen? 'active':''}`} id="faq">
      <button className="panel-close-btn" data-close="faq" onClick={closeFaqSection}>
        <i className="fa-light fa-xmark"></i>
      </button>
      <FaqContent/>
    </OverlayScrollbarsComponent>
  );
};

export default FaqSection;
