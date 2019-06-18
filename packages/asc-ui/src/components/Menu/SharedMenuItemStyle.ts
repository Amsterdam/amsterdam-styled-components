import styled from '@datapunt/asc-core'
import { color, focusStyleOutline } from '../../utils'
import { MenuStyleProps } from './types'

import SharedStyleProps = MenuStyleProps.SharedStyleProps

// eslint-disable-next-line import/prefer-default-export
export const SharedMenuItemStyle = styled.a<SharedStyleProps>`
  padding: 10px 15px 10px 7px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border-left: solid 8px transparent;
  text-decoration: none;
  height: 100%;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${color('tint', 'level2')};
  }

  ${focusStyleOutline()}
`
