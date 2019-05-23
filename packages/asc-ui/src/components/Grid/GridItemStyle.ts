import styled, { css } from '@datapunt/asc-core'
import { mapToBreakpoints } from '../../utils/themeUtils'

type Props = {
  width?: number | Array<Number>
}

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
