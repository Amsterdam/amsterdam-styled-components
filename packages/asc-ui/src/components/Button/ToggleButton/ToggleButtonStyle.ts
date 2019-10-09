import styled from '@datapunt/asc-core'
import { themeColor } from '../../../utils'
import ButtonStyle, { Props as ButtonProps } from '../ButtonStyle'
import { BACKDROP_Z_INDEX } from '../../BackDrop/BackDropStyle'

export type Props = {
  open?: boolean
  size?: number
  hasBackDrop?: boolean
} & ButtonProps

export default styled(ButtonStyle)<Props>`
  background-color: ${({ open, theme }) =>
    themeColor('tint', open ? 'level2' : 'level1')({ theme })};

  &:hover,
  &:focus {
    background-color: ${({ theme, open }) =>
      themeColor('tint', open ? 'level3' : 'level2')({ theme })};
  }

  ${({ hasBackDrop }) =>
    hasBackDrop &&
    `
  position: relative;
  z-index: ${BACKDROP_Z_INDEX + 1};
  `}
`
