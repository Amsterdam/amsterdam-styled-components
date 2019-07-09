import styled from '@datapunt/asc-core'
import { breakpoint, getColorFromTheme } from '../../utils'

export interface DownloaderStyleProps {
  backgroundColor?: string
}

const DownloaderStyle = styled.div<DownloaderStyleProps>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || getColorFromTheme(theme, 'tint', 'level3')};

  @media screen and ${breakpoint('min-width', 'tabletS')} {
    padding: 0 15px;
  }
`

export default DownloaderStyle
