import { Spinner as SpinnerIcon } from '@amsterdam/asc-assets'
import Icon from '../Icon/Icon'
import type { Props } from './SpinnerStyle'
import SpinnerStyle from './SpinnerStyle'

function Spinner({ size, color, ...otherProps }: Props) {
  return (
    <SpinnerStyle size={size} {...otherProps}>
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
      <Icon size={size} color={color}>
        <SpinnerIcon />
      </Icon>
    </SpinnerStyle>
  )
}

Spinner.defaultProps = {
  size: 20,
}

export default Spinner
