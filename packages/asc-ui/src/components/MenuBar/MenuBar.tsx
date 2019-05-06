import React from 'react'
import styled from '../../styled-components'
import {
  getColorFromTheme,
  getTypographyFromTheme,
  getFocusStyle,
  getBreakpointFromTheme,
} from '../../styles/utils'

const MenuButtonStyle = styled.button<{}>`
  ${({ theme }) => getFocusStyle(theme)}
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
  padding: 15px;

  ${MenuButtonStyle} {
    font-family: 'AvenirNextLTW01-Medium';
    & > span {
      color: ${({ theme }) => getColorFromTheme(theme, 'tint', 'level6')};
      line-height: 22px;
      border: 0;
      margin: 0;
      border-bottom: 2px transparent solid;
      background-color: transparent;

      :hover,
      :focus {
        color: ${({ theme }) => getColorFromTheme(theme, 'tint', 'level6')};
        line-height: 22px;
        border-bottom: 2px solid red;
        outline: none;
      }
    }
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level2')};
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
  cursor: pointer;
  font-size: ${({ theme }) => getTypographyFromTheme(theme, 'fontSize')};

  &:focus {
    outline: none;
  }

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'laptop')} {
    display: none;
  }
`

const MenuBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <MenuBarStyle {...otherProps}>{children}</MenuBarStyle>
)

export default MenuBar
