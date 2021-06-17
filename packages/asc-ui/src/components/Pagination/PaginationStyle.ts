import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { Props as CompactPagerProps } from '../CompactPager/CompactPager'
import { svgFill, themeColor, themeSpacing } from '../../utils'
import Button from '../Button'

export type Props = CompactPagerProps

export default styled.nav<Props & HTMLAttributes<HTMLElement>>`
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }

  li {
    display: list-item;
    margin: 0 ${themeSpacing(4)} 0 0;
  }
`

export type ButtonProps = {
  isCurrent: boolean
}

const baseButtonStyles = css`
  color: ${themeColor('tint', 'level7')};

  &:hover {
    color: ${themeColor('secondary', 'main')};
    text-decoration: underline;
  }

  ${svgFill(themeColor('tint', 'level7'))}
`

export const PageNumberStyle = styled.button.attrs({
  type: 'button',
})<ButtonProps & React.HTMLAttributes<HTMLButtonElement>>`
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
  ${(props) =>
    props.isCurrent &&
    css`
      cursor: default;
      pointer-events: none;
      background-color: ${themeColor('tint', 'level5')};
      color: ${themeColor('bright', 'main')};
    `};

  &:active {
    background: none;
  }
`

export const PreviousButton = styled(Button)`
  ${baseButtonStyles}
`

export const NextButton = styled(Button)`
  ${baseButtonStyles}
`
