import styled, { css } from 'styled-components'
import { mapToBreakpoints } from '../../utils/themeUtils'

interface Props {
  width?: string[]
}

/**
 * @deprecated, use Row with Column instead
 */
const GridItemStyle = styled.div<Props>`
  position: relative;
  ${({ width, theme }) =>
    width &&
    (Array.isArray(width)
      ? css`
          ${mapToBreakpoints(width, 'max-width', theme)}
          ${mapToBreakpoints(width, 'flex-basis', theme)}
        `
      : css`
          flex-basis: ${width}%;
        `)}
`

export default GridItemStyle
