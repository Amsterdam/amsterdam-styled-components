import React, { Component } from 'react'
import { ButtonStyled } from './Button.styled'
import PropTypes from 'prop-types'

class Button extends Component {
  render () {
    const { text } = this.props

    return (
      <ButtonStyled {...this.props}>
        {text}
      </ButtonStyled>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  arrowPos: PropTypes.oneOf([null, 'right', 'left']),
  color: PropTypes.oneOf([null, 'primary', 'secondary']),
}

Button.defaultProps = {
  arrowPos: null,
  color: null,
}

export default Button
