import { Theme } from '../../theme'
import styled, { css } from '../../styled-components'
import fillSVG from '../../utils/fillSVG'

type Props = {
  inline?: boolean
  color?: Theme.TypeLevel
  alignSelf?: 'top' | 'bottom' | 'left' | 'right'
  iconUrl?: string
  size?: number
  padding?: number
}

const Icon = styled.span<Props>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  ${({ iconUrl }) => iconUrl && `background-image: ${iconUrl}`}
  ${({ size = 20, padding = 0 }) => css`
    width: ${size - padding * 2}px;
    height: ${size - padding * 2}px;
  `}
  ${({ alignSelf }) => alignSelf && `position: absolute; ${[alignSelf]}: 0`};
  padding: ${({ padding }) => `${padding}px`}
  box-sizing: content-box;
  
  & > svg {
    width: inherit;
    height: inherit;
    ${({ color, theme }) => fillSVG(theme, color)};
  }
`

export default Icon
