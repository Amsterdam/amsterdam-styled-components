import styled, { css } from '@datapunt/asc-core'
import { themeColor, showHide, ShowHideTypes } from '../../../utils'
import { MenuItemTitleStyle } from '../MenuItemTitle'
import { MenuListStyle } from '../MenuList'
import { MenuFlyOutStyle } from '../MenuFlyOut'
import { TOGGLE_BUTTON_SIZE, FLY_OUT_WIDTH } from '../constants'
import MenuButtonStyle from '../MenuButton/MenuButtonStyle'

export type Props = {
  align?: 'left' | 'right'
  onExpand?: Function
} & ShowHideTypes

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'left' ? 'flex-start' : `flex-end`)};
  max-width: ${FLY_OUT_WIDTH}px;

  & > ${MenuListStyle} {
    border-bottom: 5px solid ${themeColor('tint', 'level7')};
  }

  ${MenuListStyle} {
    position: absolute;
    width: ${FLY_OUT_WIDTH}px;
    flex-direction: column;
    top: ${TOGGLE_BUTTON_SIZE}px;
    ${({ align }) =>
      align === 'left'
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `};
  }

  ${MenuButtonStyle} {
    border-bottom: 1px solid ${themeColor('tint', 'level3')};
    background-color: ${themeColor('tint', 'level2')};

    &:hover,
    &:focus {
      background-color: ${themeColor('tint', 'level2')};
    }
  }

  & ${MenuFlyOutStyle} {
    ${MenuButtonStyle} {
      border-left-color: ${themeColor('tint', 'level2')};
    }

    & > ${/* sc-selector */ MenuButtonStyle}[aria-expanded="true"] {
      border-left-color: ${themeColor('secondary')};
    }

    ${MenuListStyle} {
      ${MenuButtonStyle} {
        background-color: ${themeColor('tint', 'level1')};
        &:hover,
        &:focus {
          background-color: ${themeColor('tint', 'level1')};
        }
      }
    }
  }

  ${MenuListStyle} {
    flex-shrink: 0;
    background-color: ${themeColor('tint', 'level2')};
  }

  ${MenuFlyOutStyle} {
    ${MenuItemTitleStyle} {
      border-bottom: 1px solid ${themeColor('tint', 'level3')};
      border-left-color: ${themeColor('tint', 'level2')};
    }
    ${MenuListStyle} {
      background-color: ${themeColor('tint', 'level1')};
      position: relative;
      top: 0;
    }
  }

  ${showHide()}
`
