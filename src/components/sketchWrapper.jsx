import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import p5 from '../scripts/p5.min'

const SketchWrapper = (props) => {
  const sketchRef = useRef()
  useEffect(() => {
    new p5(props.sketch, sketchRef.current)
  }, [])
  return <div ref={sketchRef} />
}

SketchWrapper.propTypes = {
  sketch: PropTypes.func.isRequired
}

export default SketchWrapper