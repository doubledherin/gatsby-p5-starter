import React, { Component } from 'react'
import styled from '@emotion/styled'
import p5 from '../scripts/p5.min'

const SketchWrapper = styled.div``

class Sketch extends Component {
  constructor(props) {
    super(props)
    this.sketchRef = React.createRef()
    this.canvas = null
  }

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchRef.current) 
  }

  componentDidUpdate() {
    this.canvas.remove()
    this.canvas = new p5(this.props.sketch, this.sketchRef.current)
  }

  componentWillUnmount() {
    this.canvas.remove()
  }

  render() {
    return <SketchWrapper ref={this.sketchRef} />
  }
}

export default Sketch
