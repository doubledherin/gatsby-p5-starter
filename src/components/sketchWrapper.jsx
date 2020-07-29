import React, { Component } from 'react'
import PropTypes from 'prop-types'
import p5 from '../scripts/p5.min'

class SketchWrapper extends Component {
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
    return <div ref={this.sketchRef} />
  }
}

SketchWrapper.propTypes = {
  sketch: PropTypes.func.isRequired
}

export default SketchWrapper
