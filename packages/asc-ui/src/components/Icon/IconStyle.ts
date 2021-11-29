import styled, { css } from 'styled-components'
import { svgFill } from '../../utils'
import type { ThemeFn } from '../../utils/themeUtils'

export interface Props {
  inline?: boolean
  color?: string | ThemeFn<string>
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

const IconStyle = styled.span.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['size', 'rotate', 'padding', 'inline', 'color'].includes(prop) &&
    defaultValidatorFn(prop),
})<Props>`
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

  ${({ color }) => color && svgFill(color)};
`

export default IconStyle
