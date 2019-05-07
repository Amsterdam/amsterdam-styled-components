import styled, { css } from '../../styled-components'
import { getBreakpointFromTheme, getFocusStyle } from '../../utils'

export type Props = {
  tall?: boolean
  tabindex?: number
}

const tallStyle = css`
  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'min-width', 'laptopM')} {
    height: 68px;
    width: 100px;

    & > svg:first-child {
      display: none;
    }

    & > svg:last-child {
      display: block;
    }
  }
`

const AmsterdamLogoStyle = styled.a<Props>`
  display: inline-block;
  height: 30px;
  width: 64px;

  & > svg:last-child {
    display: none;
  }

  ${({ theme }) => getFocusStyle(theme)}
  ${({ tall }) => tall && tallStyle}
`

export default AmsterdamLogoStyle
