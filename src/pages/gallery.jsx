import React from "react"
import styled from '@emotion/styled'

import Layout from '../components/layout'

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 20px;
  grid-auto-rows: 100px 300px;
  grid-gap: 10px;
  grid-auto-flow: dense;
  .text {
    text-align: center;
    padding: 0px;
  }
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
  .w-1 {
    grid-column: span 1;
  }
  .w-2 {
    grid-column: span 2;
  }
  .w-3 {
    grid-column: span 3;
  }
  .w-4 {
    grid-column: span 4;
  }
  .w-5 {
    grid-column: span 5;
  }
  .w-6 {
    grid-column: span 6;
  }
  .h-1 {
    grid-row: span 1;
  }
  .h-2 {
    grid-row: span 2;
  }
  .h-3 {
    grid-row: span 3;
  }
  .h-4 {
    grid-row: span 4;
  }
  .h-5 {
    grid-row: span 5;
  }
  .h-6 {
    grid-row: span 6;
  }
  @media screen and (max-width:500px) {
    grid-template-columns: repeat(1, 1fr);
    .w-1, .w-2, .w-3, .w-4, .w-5, .w-6 {
      grid-column: span 1;
    }
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
export default () => (
<Layout>
  <StyledGallery className="container">
    <div className="gallery-container w-3 h-2">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?cat" alt="cat" />
        </div>
        <div className="text">Cat</div>
      </div>
    </div>
    <div className="gallery-container w-3 h-3">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?dog" alt="dog" />
        </div>
        <div className="text">Dog</div>
      </div>
    </div>
    <div className="gallery-container w-2">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?art" alt="art" />
        </div>
        <div className="text">Art</div>
      </div>
    </div>
    <div className="gallery-container">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?science" alt="science" />
        </div>
        <div className="text">Science</div>
      </div>
    </div>
    <div className="gallery-container h-2">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?food" alt="food" />
        </div>
        <div className="text">Food</div>
      </div>
    </div>
    <div className="gallery-container">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?nature" alt="nature" />
        </div>
        <div className="text">Nature</div>
      </div>
    </div>
    <div className="gallery-container w-4 h-1">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?people" alt="people" />
        </div>
        <div className="text">People</div>
      </div>
    </div>
    <div className="gallery-container">
      <div className="gallery-item">
        <div className="image">
          <img src="https://source.unsplash.com/1600x900/?travel" alt="travel" />
        </div>
        <div className="text">Travel</div>
      </div>
    </div>
  </StyledGallery>
</Layout>
)
