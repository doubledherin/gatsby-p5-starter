import React from 'react'
import PropTypes from 'prop-types'

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

GalleryItem.propTypes = {
  alt: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  spanClasses: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default GalleryItem