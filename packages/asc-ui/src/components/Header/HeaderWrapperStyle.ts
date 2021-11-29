import styled, { css } from 'styled-components'
import type { CustomCssPropsInterface } from '../../utils'
import { breakpoint, themeColor, customCss, themeSpacing } from '../../utils'
import HeaderTitleStyle from './HeaderTitleStyle'
import HeaderNavigationStyle from './HeaderNavigationStyle'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import TopBarStyle from '../TopBar/TopBarStyle'
import HeaderStyle from './HeaderStyle'
import { HEADER_HEIGHT_SMALL } from '../shared/constants'

export interface Props extends CustomCssPropsInterface {
  tall?: boolean
}

const shortStyle = css`
  ${HeaderTitleStyle} {
    margin-top: -2px; /* hack to align text with logo */
  }

  ${HeaderStyle} {
    height: 50px;
    padding-right: 0; /* collapse to the right side to align navigation items to the edge */
  }
`

const HeaderWrapperStyle = styled.div<Props>`
  background-color: ${themeColor('tint', 'level1')};
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 4px rgba(0, 0, 0, 0.04);
  box-sizing: content-box;
  position: sticky;
  top: 0;

  ${HeaderNavigationStyle} {
    flex-grow: 1;
    @media screen and ${breakpoint('min-width', 'mobileM')} {
      margin-left: ${themeSpacing(4)};
    }
  }

  ${({ tall }) =>
    tall
      ? css`
          @media screen and ${breakpoint('max-width', 'laptopM')} {
            ${shortStyle}
          }
          @media screen and ${breakpoint('min-width', 'laptopM')} {
            box-shadow: none;
            position: relative;

            &:after {
              content: '';
              display: block;
              left: 0;
              right: 0;
              height: ${HEADER_HEIGHT_SMALL}px;
              margin-top: ${HEADER_HEIGHT_SMALL * -1}px;
              background-color: ${themeColor('tint', 'level2')};
            }

            ${HeaderStyle} {
              flex-wrap: wrap;
            }

            ${TopBarStyle} {
              background-color: transparent;
            }

            ${HeaderTitleStyle} {
              margin-top: 0px;
              align-self: flex-start;
              line-height: 38px;
              font-size: 30px;
            }

            ${HeaderLogoTextStyle} {
              height: 78px;
              padding: 15px 0;
            }

            ${HeaderNavigationStyle} {
              flex-basis: 100%;
              margin-left: 25px;
              margin-right: 25px;
              height: ${HEADER_HEIGHT_SMALL}px;
            }
          }
        `
      : shortStyle}

  ${customCss}
`

export default HeaderWrapperStyle
