import styled, { css } from '@datapunt/asc-core'
import { breakpoint, getColorFromTheme } from '../../utils'
import HeaderTitleStyle from './HeaderTitleStyle'
import HeaderNavigationStyle from './HeaderNavigationStyle'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import TopBarStyle from '../TopBar/TopBarStyle'
import HeaderStyle from './HeaderStyle'
import { CONTENT_HEIGHT_TALL, WRAPPER_MAX_WIDTH } from './sizes'

export type Props = {
  tall?: boolean
  fullWidth?: boolean
}

const shortStyle = css`
  ${HeaderTitleStyle} {
    margin-top: -2px; /* hack to align text with logo */
  }
`

const HeaderWrapperStyle = styled.div<Props>`
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  margin: 0 auto;
  width: 100%;
  max-width: ${({ fullWidth }) =>
    fullWidth ? 'none' : `${WRAPPER_MAX_WIDTH}px`};
  box-shadow: 0 4px rgba(0, 0, 0, 0.04);
  box-sizing: content-box;
  position: fixed; /* Unfortunately no sticky because IE11 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2; /* Orders the header higher than the content */

  ${HeaderNavigationStyle} {
    flex-grow: 1;
    margin-left: 15px;
  }

  ${({ tall }) =>
    tall
      ? css`
          @media screen and ${breakpoint('max-width', 'laptopM')} {
            ${shortStyle}
          }
          @media screen and ${breakpoint('min-width', 'laptopM')} {
            box-shadow: none;

            &:after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              height: ${CONTENT_HEIGHT_TALL}px;
              margin-top: ${CONTENT_HEIGHT_TALL * -1}px;
              background-color: ${({ theme }) =>
                getColorFromTheme(theme, 'tint', 'level2')};
            }

            ${HeaderStyle} {
              z-index: 100;
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
              height: ${CONTENT_HEIGHT_TALL}px;
            }
          }
        `
      : shortStyle}
`

export default HeaderWrapperStyle
