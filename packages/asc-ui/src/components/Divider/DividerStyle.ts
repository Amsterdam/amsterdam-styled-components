import { margin } from 'polished'
import styled, { css } from 'styled-components'
import { themeColor } from '../../utils'

interface Props {
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
      : themeColor('tint', 'level4')({ theme })};
`

export default DividerStyle
