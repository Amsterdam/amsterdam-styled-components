import { Spinner as SpinnerIcon } from '@amsterdam/asc-assets'
import React, { FunctionComponent } from 'react'
import Icon from '../Icon/Icon'
import SpinnerStyle, { Props } from './SpinnerStyle'

const Spinner: FunctionComponent<Props> = ({ size, color, ...otherProps }) => (
  <SpinnerStyle size={size} {...otherProps}>
    {/* @ts-ignore */}
    <Icon size={size} color={color}>
      <SpinnerIcon />
    </Icon>
  </SpinnerStyle>
)

Spinner.defaultProps = {
  size: 20,
}

export default Spinner
