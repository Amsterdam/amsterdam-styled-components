import styled, { css } from '../../styled-components'
import { getBreakpointFromTheme, getColorFromTheme } from '../../utils'
import HeaderTitleStyle from './HeaderTitleStyle'
import HeaderContentStyle from './HeaderContentStyle'
import HeaderShortTitleStyle from './HeaderLogoTextStyle'
import AmsterdamLogo from '../AmsterdamLogo/AmsterdamLogoStyle'
import TopBarStyle from '../TopBarStyle'
import HeaderStyle from './HeaderStyle'
import { HEADER_SIZES } from './headerSizes'

export type Props = {
  tall?: boolean
  fullWidth?: boolean
}

const shortStyle = css`
  position: fixed; // Unfortunately no sticky because IE11 :(
  left: 50%;
  transform: translateX(-50%);

  ${HeaderTitleStyle} {
    margin-top: -2px; // hack to align text with logo
  }
`

const HeaderWrapperStyle = styled.div<Props>`
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  margin: 0 auto;
  width: 100%;

  max-width: ${({ fullWidth }) => (fullWidth ? 'none' : '1800px')};
  box-shadow: 0 4px rgba(0, 0, 0, 0.04);

  ${HeaderContentStyle} {
    flex-grow: 1;
  }

  ${AmsterdamLogo} {
    margin-right: 10px;
  }

  ${({ tall }) =>
    tall
      ? css`
          @media screen and ${({ theme }) =>
              getBreakpointFromTheme(theme, 'max-width', 'laptopM')} {
            ${shortStyle}
          }
          @media screen and ${({ theme }) =>
              getBreakpointFromTheme(theme, 'min-width', 'laptopM')} {
            box-shadow: none;
            position: relative;

            &:after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              height: ${HEADER_SIZES.CONTENT_HEIGHT_TALL}px;
              margin-top: ${HEADER_SIZES.CONTENT_HEIGHT_TALL * -1}px;
              background-color: ${({ theme }) =>
                getColorFromTheme(theme, 'tint', 'level2')};
            }

            ${HeaderStyle} {
              z-index: 100;
            }

            ${TopBarStyle} {
              background-color: transparent;
            }

            ${AmsterdamLogo} {
              margin-right: 40px;
            }

            ${HeaderTitleStyle} {
              margin-top: 0px;
              align-self: flex-start;
              line-height: 38px;
              font-size: 30px;
            }

            ${HeaderShortTitleStyle} {
              height: 78px;
              padding: 15px 0;
            }

            ${HeaderContentStyle} {
              flex-basis: 100%;
              margin-left: 25px;
              margin-right: 25px;
              height: ${HEADER_SIZES.CONTENT_HEIGHT_TALL}px;
            }
          }
        `
      : shortStyle}
`

export default HeaderWrapperStyle
