import { Close, Menu } from '@amsterdam/asc-assets'
import type { FunctionComponent, ReactElement } from 'react'
import type { Props as IconProps } from '../../Icon/Icon'
import Icon from '../../Icon/Icon'
import { TOGGLE_BUTTON_SIZE } from '../../shared/constants'
import type { Props as StyleProps } from './ToggleButtonStyle'
import ToggleButtonStyle from './ToggleButtonStyle'

export type Props = {
  iconOpen?: ReactElement
  iconClose?: ReactElement
} & StyleProps &
  IconProps

const ToggleHandlerButton: FunctionComponent<Props> = ({
  iconOpen,
  iconClose,
  open,
  rotate,
  size,
  ...otherProps
}) => {
  const IconOpen = iconOpen || <Menu />
  const IconClose = iconClose || <Close />
  return (
    <ToggleButtonStyle
      variant="blank"
      size={TOGGLE_BUTTON_SIZE}
      open={!!open}
      {...otherProps}
    >
      <Icon {...{ rotate, size }}>
        {open && !rotate ? IconClose : IconOpen}
      </Icon>
    </ToggleButtonStyle>
  )
}

export default ToggleHandlerButton
