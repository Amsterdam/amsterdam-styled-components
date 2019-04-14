import { Theme } from '../../theme'
import styled from '../../styled-components'
import fillSVG from '../../utils/fillSVG'

export type Props = {
  inline?: boolean
  color?: Theme.TypeLevel
  iconUrl?: string
  size?: number
  padding?: number
  rotate?: number
}

const defaultProps = {
  size: 20,
  padding: 0,
  rotate: 0,
}

const IconStyle = styled.span<Props>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  ${({ iconUrl }) => iconUrl && `background-image: ${iconUrl}`}
  ${({ size = defaultProps.size, padding = defaultProps.padding }) => `
    width: ${size - padding * 2}px;
    height: ${size - padding * 2}px;
  `}
  padding: ${({ padding }) => `${padding}px`};
  box-sizing: content-box;
  ${({ rotate = defaultProps.rotate }) => `transform: rotate(${rotate}deg)`};

  & > svg {
    width: inherit;
    height: inherit;
    ${({ color, theme }) => fillSVG(theme, color)};
`

export default IconStyle
