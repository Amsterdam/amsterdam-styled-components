import styled from '@datapunt/asc-core'
import { color, svgFill } from '../../../utils'
import Button, { Props as ButtonProps } from '../../Button/Button'
import { MenuFlyOutStyle } from '../MenuFlyOut'
import { MenuListStyle } from '../MenuList'
import { IconStyle } from '../../Icon'

export const MenuButtonTextStyle = styled.span``
export const MenuButtonTextWrapperStyle = styled.span``

export type Props = ButtonProps

export const MenuButtonBaseStyle = styled(Button)<Props>`
  position: relative;
  line-height: 22px;
  padding-left: 7px;
  border-left: 8px solid transparent;
  background-color: transparent;
  height: 100%;
  color: ${color('tint', 'level7')};
  align-items: center;

  &[aria-expanded='true'] {
    background-color: ${color('tint', 'level2')};

    ${MenuButtonTextStyle} {
      border-bottom: 2px solid ${color('secondary')};
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

const MenuButtonStyle = styled(MenuButtonBaseStyle)<Props>`
  &:hover,
  &:focus {
    color: ${color('secondary')};

    ${MenuButtonTextStyle} {
      color: ${color('secondary')};
      border-bottom: 2px solid ${color('secondary')};
    }

    ${svgFill('secondary')}
  }
  

  ${/* sc-selector */ MenuFlyOutStyle} ${/* sc-selector */ MenuListStyle} &,
  ${/* sc-selector */ MenuFlyOutStyle}[aria-expanded='true'] {
    font-weight: 400;
  }
`

export default MenuButtonStyle
