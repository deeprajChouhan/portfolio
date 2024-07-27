import React, { useContext } from 'react'
import GalleryContent from './GalleryContent'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { DevolinContext } from '../../context/DevolinContext'

const GallerySection = () => {
    const {isGalleryOpen,closeGallerySection} = useContext(DevolinContext)
  return (
    <OverlayScrollbarsComponent className={`gallery section-panel ${isGalleryOpen? 'active':''}`} id="gallery">
        <button className="panel-close-btn" data-close="gallery" onClick={closeGallerySection}><i className="fa-light fa-xmark"></i></button>
        <GalleryContent/>
    </OverlayScrollbarsComponent>
  )
}

export default GallerySection