import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBarStyled } from './ButtonBar.styled'

const ButtonBar = (props) => {
  return (
    <ButtonBarStyled>
      {props.children}
    </ButtonBarStyled>
  )
}

ButtonBar.propTypes = {
  children: PropTypes.array,
}

export default ButtonBar
