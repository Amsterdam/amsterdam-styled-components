import styled, { css } from 'styled-components'
import { breakpoint, themeColor, getValueFromTheme } from '../../utils'
import type { Theme } from '../../types'

export interface Props {
  beamColor?: keyof Theme.SupportPaletteInterface

  // this property defaults to the maxGridWidth of the current grid layout
  maxWidth?: number
}

const ContainerWrapperStyle = styled.div`
  display: flex;
  justify-content: center;
`
const ContainerStyle = styled.div<Props>`
  width: 100%;
  max-width: ${({ maxWidth, theme }) =>
    `${maxWidth || getValueFromTheme('maxContainerWidth')({ theme })}px`};
  flex-grow: 1;
  position: relative;

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    margin: 0 24px;
    ${({ beamColor }) =>
      beamColor &&
      css`
        &::after {
          content: '';
          background-color: ${themeColor('support', beamColor)};
          bottom: 0;
          display: block;
          position: absolute;
          right: -24px;
          top: 0;
          width: 24px;
        }
      `}
  }
`

export { ContainerWrapperStyle, ContainerStyle }
