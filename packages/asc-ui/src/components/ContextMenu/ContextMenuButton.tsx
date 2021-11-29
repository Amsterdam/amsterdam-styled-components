import { ChevronDown } from '@amsterdam/asc-assets'
import type { ButtonHTMLAttributes, FunctionComponent } from 'react'
import Icon from '../Icon'
import type { Props } from './ContextMenu'
import ContextMenuButtonStyle from './ContextMenuButtonStyle'

const ContextMenuButton: FunctionComponent<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, position, icon, arrowIcon, open, ...otherProps }) => (
  <ContextMenuButtonStyle type="button" {...otherProps}>
    {icon && icon}
    {label && <span>{label}</span>}
    <Icon
      inline
      size={24}
      padding={4}
      rotate={
        (position === 'bottom' && !open) || (position !== 'bottom' && open)
          ? 180
          : 0
      }
    >
      {arrowIcon}
    </Icon>
  </ContextMenuButtonStyle>
)

ContextMenuButton.defaultProps = {
  arrowIcon: <ChevronDown />,
}

export default ContextMenuButton
