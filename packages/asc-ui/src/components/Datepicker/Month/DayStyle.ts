import styled from 'styled-components'
import { themeColor } from '../../../utils'
import Link from '../../Link'

export interface Props {
  date: string
  outside: boolean
  onClickDay?: (thisDate: string) => void
}

export default styled(Link)<Props>`
  color: ${({ outside }) => (outside ? themeColor('tint', 'level4') : 'black')};
  cursor: pointer !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
