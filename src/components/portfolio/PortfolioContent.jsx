import React, { useContext } from "react";
import { DevolinContext } from "../../context/DevolinContext";

const PortfolioContent = () => {
  const {activeTab,setActiveTab,filteredItemList} = useContext(DevolinContext)
  return (
    <div className="portfolio-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="section-title title-center">
              Take a look on <span>my work</span>
            </h2>
          </div>
        </div>
        <div className="filter-nav">
          <button 
          className={`filter-btn ${activeTab === "all" ? "active" : ""}`} 
          data-filter="all"
          onClick={() => setActiveTab("all")}
          >
            Show All
          </button>
          <button 
          className={`filter-btn ${activeTab === "Cyber Security" ? "active" : ""}`}
          data-filter="Cyber Security"
          onClick={() => setActiveTab("Cyber Security")}
          >
            Cyber Security
          </button>
          <button 
          className={`filter-btn ${activeTab === "Web Development" ? "active" : ""}`}
          data-filter="Web Development"
          onClick={() => setActiveTab("Web Development")}

          >
            Web Development
          </button>
          <button 
          className={`filter-btn ${activeTab === "Android Development" ? "active" : ""}`}
          data-filter="Android Development"
          onClick={() => setActiveTab("Android Development")}
          >
            Android Development
          </button>
          
          <button 
          className={`filter-btn ${activeTab === "AI & ML" ? "active" : ""}`}
          data-filter="AI & ML"
          onClick={() => setActiveTab("AI & ML")}
          >
            AI & ML
          </button>
        </div>
        <div className="portfolio-row">
          {filteredItemList.length === 0 ? (
            <h3 className="empty-msg d-block">
            Nothing to show in this category &#128549;
            </h3>
          ):(
            filteredItemList.map((item) => (
              <div className="custom-col web" key={item.id}>
             <div className="single-portfolio-box">
              
               <div className="part-txt">
                 <span className="category">{item.category}</span>
                 <h3>{item.title}</h3>
                 <p>{item.intro}</p>
                 {/* <ul className="info">
                   <li>
                     <span>Start:</span> {item.startDate}
                   </li>
                   <li>
                     <span>End:</span> {item.endDate}
                   </li>
                 </ul> */}
                 <div className="bottom">
                   <div className="star">
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp rated"></i>
                     <i className="fa-solid fa-star-sharp"></i>
                   </div>
              {/* <a href="#">
                Visit Site{" "}
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </a> */}
                 </div>
               </div>
             </div>
           </div>
           ))
          )}
         
          
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
