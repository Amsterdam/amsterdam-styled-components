import { margin } from 'polished'
import styled, { css } from '../../styled-components'
import { getColorFromTheme } from '../../utils'

type Props = {
  gutter?: boolean
  transparent?: boolean
}

const Divider = styled.hr<Props>`
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
        : getColorFromTheme(theme, 'tint', 'level4')};
`

export default Divider
