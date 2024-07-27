import React, { useContext } from "react";
import ContactContent from "./ContactContent";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { DevolinContext } from "../../context/DevolinContext";

const ContactSection = () => {
    const {isContactOpen,closeContactSection} = useContext(DevolinContext)
  return (
    <OverlayScrollbarsComponent className={`contact section-panel ${isContactOpen? 'active':''}`} id="contact">
      <button className="panel-close-btn" data-close="contact" onClick={closeContactSection}>
        <i className="fa-light fa-xmark"></i>
      </button>
      <ContactContent />
    </OverlayScrollbarsComponent>
  );
};

export default ContactSection;
