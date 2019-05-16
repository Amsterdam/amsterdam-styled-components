import React from 'react'
import ButtonBar, { Props as MenuBarProps } from '../ButtonBar'
import MenuStyle from '../../styles/components/MenuStyle'

const { MenuBarStyle } = MenuStyle

export type Props = MenuBarProps

const MenuBar: React.FC<Props> = ({ children, styledComponent, ...otherProps }) => (
  <ButtonBar styledComponent={styledComponent} {...otherProps}>{children}</ButtonBar>
)

MenuBar.defaultProps = {
  styledComponent: MenuBarStyle
}

export default MenuBar
