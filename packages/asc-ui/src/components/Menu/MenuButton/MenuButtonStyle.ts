import styled, { css } from 'styled-components'
import { svgFill, themeColor } from '../../../utils'
import type { ButtonProps } from '../../Button/Button'
import Button from '../../Button/Button'
import { IconStyle } from '../../Icon'
import MenuFlyOutStyle from '../MenuFlyOut/MenuFlyOutStyle'
import { MenuListStyle } from '../MenuList'

export const MenuButtonTextStyle = styled.span``
export const MenuButtonTextWrapperStyle = styled.span``

export type Props = { active?: boolean } & ButtonProps

export const MenuButtonBaseStyle = styled(Button)<Props>`
  position: relative;
  line-height: 22px;
  padding-left: 7px;
  border-left: 8px solid transparent;
  background-color: transparent;
  height: 100%;
  color: ${themeColor('tint', 'level7')};
  align-items: center;
  white-space: normal;

  &[aria-expanded='true'] {
    background-color: ${themeColor('tint', 'level2')};

    ${MenuButtonTextStyle} {
      border-bottom: 2px solid ${themeColor('secondary')};
    }
  }

  & > ${MenuButtonTextWrapperStyle} {
    flex-grow: 1;
    text-align: left;
  }

  ${IconStyle} {
    transform: rotate(0deg) translateY(3px);
    align-self: flex-start;
  }

  &:not([aria-expanded='true']):hover,
  &:not([aria-expanded='true']):focus {
    background-color: transparent;
  }
`

const activeStyle = css`
  color: ${themeColor('secondary')};
  ${svgFill(themeColor('secondary', 'main'))}

  ${MenuButtonTextStyle} {
    color: ${themeColor('secondary')};
    border-bottom: 2px solid ${themeColor('secondary')};
  }
`

const MenuButtonStyle = styled(MenuButtonBaseStyle)<Props>`
  ${({ active }) =>
    active
      ? activeStyle
      : css`
          &:hover,
          &:focus {
            ${activeStyle}
          }
        `}

  ${MenuFlyOutStyle} ${MenuListStyle} &,
  ${/* sc-selector */ MenuFlyOutStyle}[aria-expanded='true'] {
    font-weight: 400;
  }
`

export default MenuButtonStyle
