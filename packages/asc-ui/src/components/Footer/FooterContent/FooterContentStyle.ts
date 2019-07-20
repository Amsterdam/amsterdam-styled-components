import styled from '@datapunt/asc-core'
import { customCss, CustomCssPropsInterface, color } from '../../../utils'
import HeadingStyle from '../../Heading/HeadingStyle'

export interface Props extends CustomCssPropsInterface {
  className?: string
}

export default styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > ${HeadingStyle} {
    color: ${color('tint', 'level1')};
  }

  ${customCss}
`
