import styled from '@datapunt/asc-core'
import { showHide, ShowHideTypes, CustomCssPropsType } from '../../utils'

export type Props = {
  align?: 'left' | 'right'
} & ShowHideTypes &
  CustomCssPropsType

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'left' ? 'flex-start' : `flex-end`)};
  ${showHide()};
`
