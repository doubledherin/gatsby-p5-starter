import React from 'react'
import styled from '@emotion/styled'
import Img from "gatsby-image/withIEPolyfill"

const GalleryItem = (props) => {

  return (
    <StyledGalleryItem width={props.width} height={props.height} onClick={() => window.location = "/"}>
      <div className="gallery-item">
        <div className="image">
          <img src={props.imageSrc} alt={props.alt} />
        </div>
        <div className="text">{props.text}</div>
      </div>
    </StyledGalleryItem>
  )
}

export default GalleryItem


const StyledGalleryItem = styled.div`
  grid-column: span ${props => props.width ? `${props.width}` : `2`};
  grid-row: span ${props => props.height ? `${props.height}` : `2`};
  .gallery-item {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .gallery-item .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .gallery-item .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    cursor: pointer;
    transition: .5s ease-in-out;
  }
  .gallery-item:hover .image img {
    transform: scale(1.5);
  }
  .gallery-item .text {
    text-shadow: 2px 2px #000000;
    text-align: center;
    padding: 0px;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    font-size: 25px;
    pointer-events: none;
    z-index: 4;
    transition: .3s ease-in-out;
    backdrop-filter: blur(5px) saturate(1.2);
    -webkit-backdrop-filter: blur(5px) saturate(1.2);
  }
  .gallery-item:hover .text {
    opacity: 1;
    animation: move-down .3s linear;
    padding: 1em;
    width: 100%;
  }

  @media screen and (max-width:500px) {
    grid-column: span 1;
  }

  @keyframes move-down {
    0% {
      top: 10%;
    }
    50% {
      top: 35%;
    }
    100% {
      top: 50%;
    }
  }
`

