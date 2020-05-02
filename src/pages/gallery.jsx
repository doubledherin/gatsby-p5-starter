import React from "react"
import styled from '@emotion/styled'

import Layout from '../components/layout'
import GalleryItem from '../components/galleryItem'

export default () => (
<Layout>
  <StyledGallery className="container">
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?cat" alt="cat" text="Cat" width={3} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?dog" alt="dog" text="Dog" width={3} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?art" alt="art" text="Art"  width={3} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?food" alt="food" text="Food" width={4} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?fashion" alt="fashion" text="Fashion" width={2} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?science" alt="science" text="Science" width={1} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?nature" alt="nature" text="Nature"  width={2} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?people" alt="people" text="People"  width={3} height={2}/>
    <GalleryItem imageSrc="https://source.unsplash.com/1600x900/?travel" alt="travel" text="Travel"  width={3} height={2}/>
  </StyledGallery>
</Layout>
)

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 20px;
  grid-auto-rows: 100px 300px;
  grid-gap: 10px;
  grid-auto-flow: dense;

  @media screen and (max-width:500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

