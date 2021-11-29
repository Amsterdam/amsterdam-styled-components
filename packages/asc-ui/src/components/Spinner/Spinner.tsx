import { Spinner as SpinnerIcon } from '@amsterdam/asc-assets'
import type { FunctionComponent } from 'react'
import Icon from '../Icon/Icon'
import type { Props } from './SpinnerStyle'
import SpinnerStyle from './SpinnerStyle'

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
