import React from "react";

const ContactContent = () => {
  return (
    <div className="contact-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-5">
            <h2 className="section-title title-center">
              get in touch with <span>me</span>
            </h2>
          </div>
        </div>
        <div className="row g-0 justify-content-center">
          <div className="col-lg-6 col-md-7 col-sm-6 order-e">
            <form className="contact-form">
              <div className="form-group">
                <label>Your full name</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Your email address</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" required />
              </div>
              <div className="form-group">
                <label>Write your message</label>
                <textarea name="message" required></textarea>
              </div>
              <button className="def-btn">Send Message</button>
            </form>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6">
            <div className="contact-info">
              <div className="single-box">
                <div className="part-icon">
                  <i className="fa-duotone fa-phone"></i>
                </div>
                <div className="part-txt">
                  <a href="callto:07767551504">+44 7767551504</a>
                </div>
              </div>
              <div className="single-box">
                <div className="part-icon">
                  <i className="fa-duotone fa-envelope"></i>
                </div>
                <div className="part-txt">
                  <a href="mailto:deeprajchouhan012@gmail.com">deeprajchouhan012@gmail.com</a>
                </div>
              </div>
              <div className="single-box">
                <div className="part-icon">
                  <i className="fa-duotone fa-map-location-dot"></i>
                </div>
                <div className="part-txt">
                  <p>Wales, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
