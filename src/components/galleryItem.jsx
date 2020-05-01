import React from 'react'
import styled from '@emotion/styled'

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
    backdrop-filter: blur(5x) saturate(1.8);
    -webkit-backdrop-filter: blur(5x) saturate(1.8);
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


const GalleryItem = (props) => {
  return (
    <StyledGalleryItem width={props.width} height={props.height}>
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
