import React from 'react'

const GalleryItem = (props) => {

  return (
    <div className={`gallery-item-container ${props.spanClasses}`} onClick={() => window.location = props.slug}>
      <div className="gallery-item">
        <div className="image">
          <img src={props.imageSrc} alt={props.alt} />
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  )
}

export default GalleryItem