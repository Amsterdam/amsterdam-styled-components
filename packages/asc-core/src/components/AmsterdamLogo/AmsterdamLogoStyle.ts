import LogoShort from '@datapunt/asc-assets/lib/Icons/LogoShort.svg'
import LogoTall from '@datapunt/asc-assets/lib/Icons/LogoTall.svg'
import styled, { css } from '../../styled-components'
import { getBreakpointFromTheme, getFocusStyle } from '../../utils'

export type Props = {
  tall?: boolean
  tabindex?: number
}

export const LogoStyle = styled.span`
  display: block;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url("${LogoShort}");
`

const tallStyle = css`
@media screen and ${({ theme }) =>
  getBreakpointFromTheme(theme, 'min-width', 'laptopM')} {
    height: 68px;
    width: 100px;

    ${LogoStyle} {
      background-image: url("${LogoTall}");
    }
  }
`

const AmsterdamLogoStyle = styled.a<Props>`
  display: inline-block;
  height: 30px;
  width: 64px;

  ${({ theme }) => getFocusStyle(theme)}
  ${({ tall }) => tall && tallStyle}
`

export default AmsterdamLogoStyle
