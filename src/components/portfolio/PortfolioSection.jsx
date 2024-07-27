import React, { useContext } from 'react'
import { DevolinContext } from '../../context/DevolinContext'
import PortfolioContent from './PortfolioContent'
import ClientContent from '../client/ClientContent'
import TestimonialContent from '../testimonial/TestimonialContent'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

const PortfolioSection = () => {
    const {isPortfolioOpen,closePortfolioSection} = useContext(DevolinContext)
  return (
    <OverlayScrollbarsComponent className={`portfolio section-panel ${isPortfolioOpen? 'active' : ''}`} id="portfolio">
        <button className="panel-close-btn" data-close="portfolio" onClick={closePortfolioSection}><i className="fa-light fa-xmark"></i></button>
        <PortfolioContent/>
        {/* <ClientContent/> */}
        <TestimonialContent/>
    </OverlayScrollbarsComponent>
  )
}

export default PortfolioSection