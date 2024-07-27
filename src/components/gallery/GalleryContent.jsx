import React,{useContext} from "react";
import { DevolinContext } from "../../context/DevolinContext";

const GalleryContent = () => {
  const {openImageLightBoxSection} = useContext(DevolinContext)
  return (
    <div className="gallery-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="section-title title-center">
              my <span>photo</span> gallery
            </h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="single-img">
              <img src="assets/images/gallery-1.jpg" alt="image" />
              <div className="hover">
                <button onClick={() => openImageLightBoxSection("assets/images/gallery-1.jpg")}>                  
                  <i className="fa-light fa-plus"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores eum optio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-img">
              <img src="assets/images/gallery-2.jpg" alt="image" />
              <div className="hover">
                <button onClick={() => openImageLightBoxSection("assets/images/gallery-2.jpg")}>                  
                  <i className="fa-light fa-plus"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores eum optio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-img">
              <img src="assets/images/gallery-3.jpg" alt="image" />
              <div className="hover">
                <button onClick={() => openImageLightBoxSection("assets/images/gallery-3.jpg")}>                  
                  <i className="fa-light fa-plus"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores eum optio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-img">
              <img src="assets/images/gallery-4.jpg" alt="image" />
              <div className="hover">
                <button onClick={() => openImageLightBoxSection("assets/images/gallery-4.jpg")}>                  
                  <i className="fa-light fa-plus"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores eum optio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-img">
              <img src="assets/images/gallery-5.jpg" alt="image" />
              <div className="hover">
                <button onClick={() => openImageLightBoxSection("assets/images/gallery-5.jpg")}>                  
                  <i className="fa-light fa-plus"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores eum optio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-img">
              <img src="assets/images/gallery-6.jpg" alt="image" />
              <div className="hover">
                <button onClick={() => openImageLightBoxSection("assets/images/gallery-6.jpg")}>                  
                  <i className="fa-light fa-plus"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores eum optio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="single-img">
              <img src="assets/images/gallery-7.jpg" alt="image" />
              <div className="hover">
                <button onClick={() => openImageLightBoxSection("assets/images/gallery-7.jpg")}>                  
                  <i className="fa-light fa-plus"></i>
                </button>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores eum optio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;
