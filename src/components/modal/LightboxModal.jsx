import React, { useContext } from 'react'
import { DevolinContext } from '../../context/DevolinContext'

const LightboxModal = () => {
  const {isImageLightBoxOpen,imageRef,selectedImageUrl} = useContext(DevolinContext)
  return (
    <div className={`image-lightbox-panel ${isImageLightBoxOpen ? 'active':''}`}>
      <div ref={imageRef}>
        <img className="lightbox-image" src={selectedImageUrl} alt="Image"/>
      </div>
    </div>
  )
}

export default LightboxModal