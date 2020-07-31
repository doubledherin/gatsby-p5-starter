import React from "react"
import { graphql, Link } from 'gatsby'

import PropTypes from 'prop-types'
import Img from "gatsby-image/withIEPolyfill"

import Layout from '../components/layout'

const About = ({ data }) => {
  const { allFile: { nodes } } = data

  return (
    <Layout>
      <div className="about-content-container">
        <h1>About the Gallery</h1>
        <p>Many of the works are interactive via click and drag. For &ldquo;Kaleidoscopia,&rdquo; change the line color by hitting 1, 2, or 3.</p>
        <p>To take a screenshot of a gallery item, hit the &lsquo;s&rsquo; key. It will be automatically downloaded.</p>
        <p>Read the p5.js <a href="https://github.com/doubledherin/gatsby-p5-starter/tree/master/src/scripts/sketches" target="_blank" rel="noreferrer" >scripts</a> to know all of the details on how to interact with the works.</p>
        <p><strong>Licensing note:</strong> Except for &ldquo;<Link to="http://localhost:8000/p5/perlin-noise-flower/" target="_blank" rel="noreferrer">Perlin Noise Flower</Link>,&rdquo; which is mine, the works displayed in the gallery are taken from a book called <a href="https://benedikt-gross.de/projects/generative-design-visualize-program-create-with-javascript-in-p5-js" target="_blank" rel="noreferrer"><i>Generative Design</i></a> and have been slightly modified, mostly for technical reasons. This is fair use according to the works&rsquo; Apache licenses, which are included in the works&rsquo; scripts in the codebase. I came up with the names of the works from the <i>Generative Design</i> book for demo purposes only.</p>
        <h1>About This Site</h1>
        <p>This site was created using <a href="https://github.com/doubledherin/gatsby-p5-starter" target="_blank" rel="noreferrer">this Gatsby starter</a>, which I built so that it&rsquo;s easy to create and deploy a snazzy responsive gallery website that features p5.js works. You can duplicate this site for your own p5.js works! To learn how check out the <a href="https://github.com/doubledherin/gatsby-p5-starter/blob/master/README.md" target="_blank" rel="noreferrer">readme of my starter</a>.</p>
        <h1>About Me</h1>
        { data && nodes && <Img className="round" fluid={ nodes[0].childImageSharp.fluid } /> }
        <p>My name is Wendy Dherin, and I&rsquo;m a full stack developer with a passion for making beautiful audio and visual artworks and building physics engines with <a href="https://p5js.org/" target="_blank" rel="noreferrer">p5.js</a>.</p>
        <p>In 2014 I built <a href="https://www.audiosnowflake.com" target="_blank" rel="noreferrer">Audio Snowflake</a>, a music-visualizer that creates unique spirographs for songs based on their musical properties, using a predecessor of p5.js, <a href="https://www.processing.org/" target="_blank" rel="noreferrer">Processing</a>. <strong><i>Update on Audio Snowflake:</i></strong> It&rsquo;s currently not fully functional because the Echonest API it relies on has gone the way of the dodo; only songs that are already in the database are searchable. So you can try to search and you might get lucky and get a snowflake, otherwise, search just on the artists, and you might get a different song by them. I hope to soon update the app to use the Spotify API, which has replaced the Echonest one.</p>
        <p>I&rsquo;m originally from California, but I currently reside in Ireland.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/static/images/about/"}}) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }  
`

About.propTypes = {
  data: PropTypes.object
}

export default About