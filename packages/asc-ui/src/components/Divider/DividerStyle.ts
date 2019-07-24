import { margin } from 'polished'
import styled, { css } from '@datapunt/asc-core'
import { color } from '../../utils'

type Props = {
  gutter?: boolean
  transparent?: boolean
}

const DividerStyle = styled.hr<Props>`
  height: 1px;
  margin: 0;
  border: none;
  ${({ gutter }) =>
    gutter &&
    css`
      ${margin(0, '15px')}
    `}
  background-color:
    ${({ theme, transparent }) =>
      transparent
        ? 'background-color: transparent;'
        : color('tint', 'level4')({ theme })};
`

export default DividerStyle
