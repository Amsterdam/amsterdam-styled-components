import styled, { css } from 'styled-components'
import { svgFill, themeColor, themeSpacing } from '../../utils'
import Button from '../Button'

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  min-width: 54px;
  display: inline-flex;
  justify-content: center;
`

const baseButtonStyles = css`
  color: ${themeColor('tint', 'level7')};

  &:not(:disabled):hover {
    color: ${themeColor('secondary', 'main')};
    text-decoration: underline;
  }

  ${svgFill(themeColor('tint', 'level7'))}
`

export const PageNumberStyle = styled.button.attrs({
  type: 'button',
})<ButtonProps>`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 0 ${themeSpacing(3)};
  appearance: none;
  border: none;
  background: none;
  text-align: center;
  ${baseButtonStyles}
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      background-color: ${themeColor('tint', 'level5')};
      color: ${themeColor('bright', 'main')};
      &:not(:disabled):hover {
        color: ${themeColor('bright', 'main')};
      }
    `};
`

export interface ButtonProps {
  isCurrent: boolean
}

export const PreviousButton = styled(Button)`
  ${baseButtonStyles}
`

export const NextButton = styled(Button)`
  ${baseButtonStyles}
`
