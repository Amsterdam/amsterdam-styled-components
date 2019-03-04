import { margin } from 'polished'
import styled, { css } from '../../styled-components'
import { Theme } from '../../theme'
import getThemeColor from '../../utils/getThemeColor'

type Props = {
  gutter?: boolean
}

const Divider = styled.hr<Props>`
  height: 1px;
  margin: 0;
  border: none;
  ${({ gutter }) => gutter && css`${margin(0, '15px')}`}
  background-color: ${({ theme }) => getThemeColor(theme, Theme.TypeLevel.primary)};
`

export default Divider
