import styled from '@datapunt/asc-core'
import IconStyle from '../Icon/IconStyle'

export type Props = React.HTMLAttributes<HTMLElement>

export default styled.li<Props>`
  position: relative;
  word-break: break-word;
  margin-bottom: 8px;

  ${IconStyle} {
    position: absolute;
    left: 0;
    top: 3px;
  }
`
