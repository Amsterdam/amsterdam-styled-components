import styled from '@datapunt/asc-core'
import { ShowHideTypes, showHide } from '../../../utils'

export interface Props extends ShowHideTypes {
  className?: string
  indent?: boolean
}

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ indent }) => (indent ? '28px' : '0')};
  ${showHide}
`
