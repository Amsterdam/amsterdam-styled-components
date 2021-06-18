import styled from 'styled-components'
import { themeColor } from '../../../utils'
import Link from '../../Link'

export interface Props {
  date: string
  outside: boolean
  selected: boolean
  today: boolean
  onSelectDay?: (date: string) => void
}

const getColor = (selected: boolean, outside: boolean) => {
  if (outside) {
    return themeColor('tint', 'level4')
  }

  if (selected) {
    return themeColor('tint', 'level1')
  }

  return themeColor('tint', 'level7')
}

export default styled(Link)<Props>`
  color: ${({ selected, outside }) => getColor(selected, outside)};
  border-color: ${({ today }) =>
    today ? themeColor('tint', 'level5') : 'transparent'};
  background-color: ${({ selected }) =>
    selected ? themeColor('secondary') : 'transparent'};
  border-style: solid;
  border-width: 1px;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 39px;
`
