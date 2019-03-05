import { margin } from 'polished'
import styled, { css } from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'
import { Theme } from '../..'

type Props = {
  gutter?: boolean,
  color?: Theme.TypeLevel,
}

const Divider = styled.hr<Props>`
  height: 1px;
  margin: 0;
  border: none;
  ${({ gutter }) => gutter && css`${margin(0, '15px')}`}
  background-color: ${({ theme, color }) => getThemeColor(theme, (color || 'tint'), (color ? 'main' : 'level5'))}
  ;
`

export default Divider
