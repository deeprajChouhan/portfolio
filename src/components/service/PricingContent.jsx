import React, { useContext } from 'react'
import { pricingList } from '../../data/Data'
import { DevolinContext } from '../../context/DevolinContext'

const PricingContent = () => {
    const {openPriceModalSection} = useContext(DevolinContext)
  return (
    <div className="pricing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-5">
                    <h2 className="section-title title-center"><span>Pricing</span> Plan</h2>
                </div>
            </div>
            <div className="row g-md-4 g-sm-3 g-4 justify-content-center">
                {pricingList.map((item) => (
                    <div className="col-lg-4 col-sm-6" key={item.id}>
                        <div className="single-price">
                            <div className="top">
                                <h3>{item.title}</h3>
                                <div className="part-icon">
                                    <span><i className="fa-light fa-sun"></i></span>
                                </div>
                            </div>
                            <div className="middle">
                                <ul>
                                    <li>Web Designing <span>${item.webDesign}.00 <small>(p/pjct)</small></span></li>
                                    <li>UI Designing <span>${item.uiDesign}.00 <small>(p/pjct)</small></span></li>
                                    <li>Logo Design <span>${item.logoDesign}.00 <small>(p/pjct)</small></span></li>
                                    <li>Photography <span>${item.photography}.00 <small>(p/pjct)</small></span></li>
                                    <li>Video Editing <span>${item.videoEditing}.00 <small>(p/pjct)</small></span></li>
                                    <li>Social Marketing <span>${item.socialMarketing}.00 <small>(p/pjct)</small></span></li>
                                </ul>
                            </div>
                            <div className="bottom">
                                <button 
                                className="def-btn" 
                                data-bs-toggle="modal" 
                                data-bs-target="#pricingModal"
                                onClick={openPriceModalSection}
                                >
                                    Start A Project
                                </button>
                            </div>
                        </div>
                    </div>   
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default PricingContent