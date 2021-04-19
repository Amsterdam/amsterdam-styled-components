import styled from 'styled-components'
import { themeColor } from '../../../utils'
// import Link from '../../Link'

export interface Props {
  number: number
  date: string
  outside: boolean
}

export default styled.span<Props>`
  color: ${({ outside }) => (outside ? themeColor('tint', 'level4') : 'black')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

// export const OutsideDay = styled.span`
//   color: ${themeColor('tint', 'level4')};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 40px;
//   height: 40px;
// `
