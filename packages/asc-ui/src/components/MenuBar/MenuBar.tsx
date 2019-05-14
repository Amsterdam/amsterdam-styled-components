import React from 'react'
import styled from '../../styled-components'
import { color, breakpoint, focusStyle, fromTheme } from '../../styles/utils'

const MenuButtonStyle = styled.button<{}>`
  ${focusStyle()}
  display: flex;
  background-color: transparent;
  border: 0px;
  align-items: center;
  padding: 0;
`

const MenuButton = ({ id, label, ...otherProps }: any) => {
  return (
    <MenuButtonStyle {...{ id }} {...otherProps}>
      <span>{label && label}</span>
    </MenuButtonStyle>
  )
}

const MenuBarItemStyle = styled.li`
  ${MenuButtonStyle} {
    font-family: 'AvenirNextLTW01-Medium';
    padding: 15px;
    cursor: pointer;

    & > span {
      color: ${color('tint', 'level6')};
      line-height: 22px;
      border: 0;
      margin: 0;
      border-bottom: 2px transparent solid;
      background-color: transparent;
    }

    &:hover > span,
    &:focus > span {
      color: ${color('tint', 'level6')};
      line-height: 22px;
      border-bottom: 2px solid red;
      outline: none;
    }
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: ${color('tint', 'level2')};
  }
`

export const MenuBarItem: React.FC<{
  label?: string
  onClick?: any
  component?: React.Component
}> = ({ label, onClick, component, ...otherProps }) => (
  <MenuBarItemStyle {...otherProps}>
    {component || <MenuButton id="1" label={label} onClick={onClick} />}
  </MenuBarItemStyle>
)

type MenuBarStyleProps = {}
type Props = MenuBarStyleProps

const MenuBarStyle = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: ${fromTheme('typography.fontSize')};
  /* cursor: pointer; */

  &:focus {
    outline: none;
  }

  @media screen and ${breakpoint('max-width', 'laptop')} {
    display: none;
  }
`

const MenuBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <MenuBarStyle {...otherProps}>{children}</MenuBarStyle>
)

export default MenuBar
