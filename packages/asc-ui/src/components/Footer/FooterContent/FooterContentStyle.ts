import styled from '@datapunt/asc-core'
import { customCss, CustomCssPropsInterface } from '../../../utils'

export interface Props extends CustomCssPropsInterface {
  className?: string
}

export default styled.div<Props>`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  ${customCss}
`
