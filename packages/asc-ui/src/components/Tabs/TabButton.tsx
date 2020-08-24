import styled, { css } from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

const TabButton = styled.button.attrs({
  role: 'tab',
})<{ isSelected?: boolean }>`
  background-color: transparent;
  padding: ${themeSpacing(3, 0)};
  color: ${themeColor('tint', 'level7')};
  border: none;
  margin-right: ${themeSpacing(7)};
  transition: box-shadow 0.1s ease-in-out, color 0.1s ease-in-out;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    box-shadow: 0 -6px inset ${themeColor('tint', 'level7')};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${themeColor('secondary', 'main')};
      box-shadow: 0 -6px inset ${themeColor('secondary', 'main')};

      &:hover {
        box-shadow: 0 -6px inset ${themeColor('secondary', 'main')};
      }
    `}
`

export default TabButton
