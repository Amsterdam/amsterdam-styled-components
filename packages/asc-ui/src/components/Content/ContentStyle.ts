import styled from '@datapunt/asc-core'
import { customCss, CustomCssPropsInterface } from '../../utils'

export interface Props extends CustomCssPropsInterface {
  margin?: string
  padding?: string
}

export default styled.div<Props>`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  ${customCss}
`
