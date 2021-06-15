import React from 'react'
import styled, { css } from 'styled-components'
import { Props as CompactPagerProps } from '../CompactPager/CompactPager'
import { svgFill, themeColor } from '../../utils'
import Button from '../Button'

export type Props = CompactPagerProps

export default styled.nav<Props>`
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }

  li {
    display: list-item;
    margin: 0 15px 0 0;
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

export const PageNumber = styled.button.attrs({
  type: 'button',
})<ButtonProps & React.HTMLAttributes<HTMLButtonElement>>`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 0 10px;
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

  &:focus {
    background-color: ${themeColor('support', 'focus')};
  }

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
