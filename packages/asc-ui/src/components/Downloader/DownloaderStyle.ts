import styled from '@datapunt/asc-core'
import { getColorFromTheme } from '../../utils'

export interface DownloaderStyleProps {
  backgroundColor?: string
}

const DownloaderStyle = styled.div<DownloaderStyleProps>`
  width: 100%;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || getColorFromTheme(theme, 'tint', 'level2')};
`

export default DownloaderStyle
