import React, { Component } from 'react'
import { StyledButton } from './Button.styled'
import PropTypes from 'prop-types'

class Button extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    arrowPos: PropTypes.oneOf([null, 'right', 'left'])
  }

  static defaultProps = {
    arrowPos: null
  }

  render () {

    const { text, arrowPos } = this.props

    return (
      <StyledButton {...this.props}>
        {text}
      </StyledButton>
    )
  }
}

export default Button
