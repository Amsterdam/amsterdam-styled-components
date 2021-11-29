import styled, { css } from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

export interface Props {
  active?: boolean
}

export default styled.a<Props>`
  display: block;
  padding: ${themeSpacing(3)};
  border-left: 4px solid transparent;
  font-weight: 400;
  color: ${themeColor('tint', 'level7')};
  text-decoration: none;
  font-size: 16px;
  ${({ active }) =>
    active
      ? css`
          font-weight: 700;
          border-color: ${themeColor('primary')};
          &:not(:focus) {
            outline: 1px solid ${themeColor('primary')};
          }
        `
      : css`
          &:hover {
            color: ${themeColor('secondary')};
            border-bottom: 1px solid;
            margin-bottom: -1px; // prevents moving the content below because of border-bottom
          }
        `};
`
