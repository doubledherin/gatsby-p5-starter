import React from 'react'
import Img from "gatsby-image/withIEPolyfill"

// TODO: Figure out styling / size of images.
const GalleryItem = (props) => {

  return (
    <div className="gallery-item-container" onClick={() => window.location = props.slug}>
      <div className="gallery-item">
        <div className="image">
          <Img fluid={props.fluid} alt={props.alt} />
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  )
}

export default GalleryItem