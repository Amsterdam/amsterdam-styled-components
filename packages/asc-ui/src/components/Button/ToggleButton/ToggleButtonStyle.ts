import styled from 'styled-components'
import { themeColor } from '../../../utils'
import type { ButtonStyleProps } from '../ButtonStyle'
import ButtonStyle from '../ButtonStyle'

export type Props = {
  open?: boolean
  size?: number
} & ButtonStyleProps

export default styled(ButtonStyle)<Props>`
  background-color: ${({ open, theme }) =>
    themeColor('tint', open ? 'level2' : 'level1')({ theme })};

  &:hover,
  &:focus {
    background-color: ${({ theme, open }) =>
      themeColor('tint', open ? 'level2' : 'level2')({ theme })};
  }
`
