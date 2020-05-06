import styled, { css } from 'styled-components'
import { svgFill } from '../../utils'
import { Theme } from '../../types'

export type Props = {
  inline?: boolean
  color?: Theme.ColorType
  iconUrl?: string
  size?: number
  padding?: number
  rotate?: number
}

export const defaultProps = {
  size: 20,
  padding: 0,
  rotate: 0,
}

const IconStyle = styled.span<Props>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${({ iconUrl }) =>
    iconUrl &&
    css`
      background-image: url(${iconUrl});
    `}
  ${({ size = defaultProps.size, padding = defaultProps.padding }) => css`
    width: ${size - padding * 2}px;
    height: ${size - padding * 2}px;
  `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding}px;
    `};
  box-sizing: content-box;
  ${({ rotate = defaultProps.rotate }) => `transform: rotate(${rotate}deg)`};

  & > svg {
    ${({ size = defaultProps.size, padding = defaultProps.padding }) => css`
      width: ${size - padding * 2}px;
      height: ${size - padding * 2}px;
    `}
  }

  ${({ color, theme }) => svgFill(color)({ theme })};
`

export default IconStyle
