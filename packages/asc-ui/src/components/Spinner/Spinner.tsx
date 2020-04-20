import React from 'react'
import { Spinner as SpinnerIcon } from '@datapunt/asc-assets'
import SpinnerStyle, { Props } from './SpinnerStyle'
import Icon from '../Icon/Icon'

const Spinner: React.FC<Props> = ({ size, color, ...otherProps }) => (
  <SpinnerStyle size={size} {...otherProps}>
    <Icon size={size} color={color}>
      <SpinnerIcon />
    </Icon>
  </SpinnerStyle>
)

Spinner.defaultProps = {
  size: 20,
  color: 'default',
}

export default Spinner
