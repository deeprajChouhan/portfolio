import React, { useContext } from "react";
import { Form, Modal } from "react-bootstrap";
import { DevolinContext } from "../../context/DevolinContext";
const PricingModal = () => {
  const {isPriceModalOpen,closePriceModalSection} = useContext(DevolinContext)
  
  return (
    <Modal
      className="modal fade"
      id="pricingModal"
      size="lg"
      show={isPriceModalOpen}
      onHide={closePriceModalSection}
      centered
    >
        <Modal.Header>
          <h5 className="modal-title" id="pricingModalLabel">
            Start a project
          </h5>
          <button type="button" data-bs-dismiss="modal" onClick={closePriceModalSection}>
            <i className="fa-light fa-xmark"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <form className="pricing-form">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Select a subject</label>
                  <Form.Select name="subject" className="my-select" required>
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                      label=""
                    ></option>
                    <option value="1">Web Designing</option>
                    <option value="2">UI Designing</option>
                    <option value="3">Logo Design</option>
                    <option value="4">Photography</option>
                    <option value="5">Video Editing</option>
                    <option value="6">Social Marketing</option>
                  </Form.Select>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Your Meassage...</label>
                  <textarea name="message"></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="btn-box justify-content-end">
                  <button
                    type="button"
                    className="def-btn def-btn-2 border"
                    data-bs-dismiss="modal"
                    onClick={closePriceModalSection}
                  >
                    Close
                  </button>
                  <button type="button" className="def-btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
    </Modal>
  );
};

export default PricingModal;
