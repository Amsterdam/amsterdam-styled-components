import styled from 'styled-components'
import { themeColor } from '../../../utils'
import Link from '../../Link'

export interface Props {
  date: string
  outside: boolean
  today: boolean
  onClickDay?: (thisDate: string) => void
}

export default styled(Link)<Props>`
  color: ${({ outside }) => (outside ? themeColor('tint', 'level4') : 'black')};
  border-color: ${({ today }) =>
    today ? themeColor('tint', 'level5') : 'transparent'};
  border-style: solid;
  border-width: 1px;
  scursor: pointer !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 39px;
`
