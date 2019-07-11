import styled from '@datapunt/asc-core'
import { getColorFromTheme, breakpoint } from '../../utils'

const DownloaderStyle = styled.div<{}>`
  width: 100%;

  @media screen and ${breakpoint('max-width', 'tabletM')} {
    margin-bottom: 20px;
  }

  & > div:first-child {
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level2')};
  }
`

export default DownloaderStyle
