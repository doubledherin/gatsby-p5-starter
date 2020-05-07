import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Modal = ({ show, children }) => {

  const [ shouldShow, setshouldShow ] = useState('')

  const toggleShow = () => setshouldShow(!shouldShow)

  return show && (
    <div className="modal">
      <input type="checkbox" className="close-btn" id="close-btn" />
      <label htmlFor="close-btn" className="close-icon">
        <span className="close-icon__line"></span>
      </label>

      {children}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal
