import LogoShort from '@datapunt/asc-assets/static/icons/LogoShort.svg'
import LogoTall from '@datapunt/asc-assets/static/icons/LogoTall.svg'
import styled, { css } from '@datapunt/asc-core'
import { breakpoint, focusStyleOutline } from '../../utils'

export type Props = {
  tall?: boolean
}

export const LogoStyle = styled.span`
  display: block;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url("${LogoShort}");
  `

const tallStyle = css`
  @media screen and ${breakpoint('min-width', 'laptopM')} {
    height: 68px;
    width: 100px;
    margin-right: 40px;
    
    ${LogoStyle} {
      background-image: url("${LogoTall}");
    }
  }
`

const AmsterdamLogoStyle = styled.a<Props>`
  display: inline-block;
  height: 30px;
  width: 68px;
  flex-shrink: 0;
  margin-right: 10px;
  ${focusStyleOutline()}
  ${({ tall }) => tall && tallStyle}
`

export default AmsterdamLogoStyle
