import styled, { css } from 'styled-components'
import { themeColor } from '../../utils'
import type { Position } from './types'

export interface ContextMenuListProps {
  labelId?: string
  position?: Position
  open?: boolean
}

const ContextMenuListStyle = styled.ul<ContextMenuListProps>`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`
export default ContextMenuListStyle

export const ContextMenuListWrapperStyle = styled.div<ContextMenuListProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${themeColor('tint', 'level1')};
  border: 1px solid ${themeColor('tint', 'level7')};
  max-width: 250px;
  width: auto;
  position: absolute;
  ${({ position }) =>
    position === 'bottom'
      ? css`
          bottom: calc(100% - 1px);
        `
      : css`
          top: calc(100% - 1px);
        `};

  &:focus {
    outline: none;
  }

  ${({ open }) =>
    !open &&
    css`
      display: none;
    `}
`
