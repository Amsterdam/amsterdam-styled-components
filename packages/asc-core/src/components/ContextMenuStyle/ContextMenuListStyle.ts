import styled from '../../styled-components'
import { ContextMenuStyleProps } from './types'
import { getColorFromTheme } from '../../utils'

const ContextMenuListStyle = styled.ul<
  ContextMenuStyleProps.ContextMenuListStyleProps
>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`
export default ContextMenuListStyle

export const ContextMenuListWrapperStyle = styled.div.attrs(() => ({
  role: 'menu',
  tabIndex: -1,
}))<ContextMenuStyleProps.ContextMenuListStyleProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  border: 1px solid ${({ theme }) => getColorFromTheme(theme, 'tint', 'level7')};
  max-width: 250px;
  width: 100%;
  &:focus {
    outline: none;
  }
`
