import React, { useContext } from 'react'
import ServiceContent from './ServiceContent'
import Cta from './Cta'
import PricingContent from './PricingContent'
import { DevolinContext } from '../../context/DevolinContext'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

const Service = () => {
    const {isServiceOpen,closeServiceSection} = useContext(DevolinContext)
  return (
    <OverlayScrollbarsComponent className={`service section-panel ${isServiceOpen? 'active':''}`} id="service">
        <button className="panel-close-btn" data-close="service" onClick={closeServiceSection}><i className="fa-light fa-xmark"></i></button>
        <ServiceContent/>
        {/* <Cta/> */}
        {/* <PricingContent/> */}
    </OverlayScrollbarsComponent>
  )
}

export default Service