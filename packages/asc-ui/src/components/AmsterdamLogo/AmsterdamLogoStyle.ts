import { LogoShort, LogoTall } from '@datapunt/asc-assets'
import styled, { css } from 'styled-components'
import { breakpoint, srOnlyStyle, themeSpacing } from '../../utils'

export type Props = {
  tall?: boolean
}

const logoStyle = css`
  display: block;
  height: 100%;
  width: 100%;
`

export const LogoShortStyle = styled(LogoShort)`
  ${logoStyle}
`

export const LogoTallStyle = styled(LogoTall)`
  ${logoStyle}
`

export const LogoTitleStyle = styled.span`
  ${srOnlyStyle}
`

const tallStyle = css`
  @media screen and ${breakpoint('min-width', 'laptopM')} {
    height: 68px;
    width: 100px;
    margin-right: ${themeSpacing(10)};
  }
`

const AmsterdamLogoStyle = styled.a<Props>`
  display: inline-block;
  height: 30px;
  width: 68px;
  flex-shrink: 0;
  margin-right: ${themeSpacing(3)};
  ${({ tall }) => tall && tallStyle};
`

export default AmsterdamLogoStyle
