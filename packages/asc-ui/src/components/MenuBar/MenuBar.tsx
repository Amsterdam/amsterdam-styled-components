import React from 'react'
import styled from '../../styled-components'
import {
  getColorFromTheme,
  getTypographyFromTheme,
  getFocusStyle,
} from '../../styles/utils'

const MenuButtonStyle = styled.button<{}>`
  ${({ theme }) => getFocusStyle(theme)}
  display: flex;
  background-color: 'transparent';
  border: 0px;
  align-items: center;
  height: 32px;
  padding: 0 6px;
`

const MenuButton = ({ id, label, ...otherProps }: any) => {
  return (
    <MenuButtonStyle {...{ id }} {...otherProps}>
      {label && label}
    </MenuButtonStyle>
  )
}

const MenuBarItemStyle = styled.li`
  padding: 15px;

  & > button {
    color: ${({ theme }) => getColorFromTheme(theme, 'tint', 'level6')};
    line-height: 22px;
    border: 0;
    margin: 0;
    border-bottom: 2px transparent solid;
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level1')};

    :hover,
    :focus {
      color: ${({ theme }) => getColorFromTheme(theme, 'tint', 'level6')};
      line-height: 22px;
      border-bottom: 2px solid red;
      outline: none;
      background-color: ${({ theme }) =>
        getColorFromTheme(theme, 'tint', 'level2')};
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
    {component || (
      // <button type="button" onClick={onClick}>
      //   {label}
      // </button>
      <MenuButton id="1" label={label} onClick={onClick} />
    )}
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
`

const MenuBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <MenuBarStyle {...otherProps}>{children}</MenuBarStyle>
)

export default MenuBar
