import styled from 'styled-components'
import type { CustomCssPropsType, ShowHideTypes } from '../../utils'
import { showHide } from '../../utils'

export type Props = {
  align?: 'left' | 'right'
  hasBackDrop?: boolean
} & ShowHideTypes &
  CustomCssPropsType

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'left' ? 'flex-start' : `flex-end`)};
  ${showHide()};

  [aria-hidden='true'] {
    display: none !important;
  }
`
