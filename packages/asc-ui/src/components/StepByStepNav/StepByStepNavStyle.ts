import styled, { css } from 'styled-components'
import type { ReactElement } from 'react'
import Typography from '../Typography'
import { ascDefaultTheme } from '../../theme'
import { breakpoint as mqBreakpoint, themeColor } from '../../utils'

export interface Step {
  label: string
  content?: ReactElement
}

export type ItemType = 'checkmark' | 'numeric' | 'none'

export interface StepByStepNavProps {
  /** 1-based index determining which of the steps is active */
  activeItem?: number
  breakpoint?: ReturnType<typeof mqBreakpoint>
  className?: string
  itemType?: ItemType
  steps: Array<Step>
  stepsCompleted?: boolean
}

type StyledProps = StepByStepNavProps & {
  activeItem: number
}

const checkmarkIcon = `<svg viewBox="0 0 32 32" width="14" height="14" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.216 27.016L0 14.68l2.91-2.77 9.346 9.837L29.129 4 32 6.8z" /></svg>`
const itemSize = 20
const activeItemSize = 36

export const transitionBreakpoint = mqBreakpoint(
  'max-width',
  'laptop',
)({ theme: ascDefaultTheme })

const iconStyle = css`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,${checkmarkIcon}');
`

export const OrderdedList = styled.ol<{
  breakpoint?: StepByStepNavProps['breakpoint']
}>`
  counter-reset: stepByStep;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and ${({ breakpoint }) => breakpoint} {
    display: flex;
    flex-wrap: nowrap;
  }
`

export const ComponentWrapper = styled.div<{
  breakpoint?: StepByStepNavProps['breakpoint']
}>`
  @media screen and ${({ breakpoint }) => breakpoint} {
    display: inline-block;
    height: ${activeItemSize}px;
    visibility: hidden;
    width: ${activeItemSize}px;
  }
`

export const Label = styled(Typography).attrs({
  as: 'span',
})<{
  itemType: StyledProps['itemType']
  breakpoint?: StepByStepNavProps['breakpoint']
}>`
  font-weight: 400;
  line-height: ${itemSize}px;

  &::before {
    background-color: ${themeColor('tint', 'level5')};
    border-radius: 50%;
    content: '';
    display: flex;
    flex-direction: column;
    height: ${itemSize}px;
    left: -${itemSize / 2 + 1}px;
    position: absolute;
    text-align: center;
    top: 0;
    width: ${itemSize}px;
    ${({ itemType }) =>
      itemType === 'numeric' &&
      css`
        color: white;
        content: counter(stepByStep);
        counter-increment: stepByStep;
        font-size: 12px;
        font-weight: 500;
        line-height: ${itemSize}px;
      `}
  }

  @media screen and ${({ breakpoint }) => breakpoint} {
    display: inline-block;
    height: ${activeItemSize}px;
    visibility: hidden;
    width: ${activeItemSize}px;

    &::before {
      top: ${itemSize / 2}px;
      visibility: visible;
    }
  }
`

export const ListItem = styled.li<StyledProps>`
  ${({ activeItem, itemType, steps, stepsCompleted, breakpoint }) => css`
    border-left: 2px solid ${themeColor('tint', 'level5')};
    margin-left: ${itemSize}px;
    padding-bottom: ${itemSize * 2}px;
    padding-left: ${itemSize * 1.5}px;
    position: relative;

    &:last-child {
      border-left-color: transparent;
    }

    /* All list items before and including the active one */
    &:nth-child(-n + ${activeItem}) {
      &:not(:nth-last-of-type(${steps.length - (activeItem - 1)})) {
        border-left: 2px solid ${themeColor('primary', 'main')};

        ${Label}:before {
          ${itemType === 'checkmark' && iconStyle}
        }
      }

      ${Label}:before {
        background-color: ${themeColor('primary', 'main')};
      }
    }

    /* Active list item */
    &:nth-of-type(${activeItem}) {
      ${Label} {
        font-size: ${itemSize}px;
        font-weight: 700;

        &::before {
          font-size: ${itemSize}px;
          height: ${activeItemSize}px;
          left: -${activeItemSize / 2 + 1}px;
          line-height: ${activeItemSize}px;
          top: -${(activeItemSize - itemSize) / 2}px;
          width: ${activeItemSize}px;
        }
      }
    }

    @media screen and ${breakpoint} {
      border: none !important;
      height: ${activeItemSize}px;
      margin: 0;
      padding-left: ${itemSize}px;

      &:last-child > span {
        width: 0;
      }

      &:not(:last-child) {
        background-image: linear-gradient(
          to bottom,
          transparent 0%,
          transparent calc(50% - 1px),
          ${themeColor('tint', 'level5')} calc(50% - 1px),
          ${themeColor('tint', 'level5')} calc(50% + 1px),
          transparent calc(50% + 1px),
          transparent 100%
        );
      }

      &:nth-child(-n + ${activeItem}) {
        &:not(:nth-last-of-type(${steps.length - (activeItem - 1)})) {
          background-image: linear-gradient(
            to bottom,
            transparent 0%,
            transparent calc(50% - 1px),
            ${themeColor('primary', 'main')} calc(50% - 1px),
            ${themeColor('primary', 'main')} calc(50% + 1px),
            transparent calc(50% + 1px),
            transparent 100%
          );
        }
      }

      /* Active list item */
      &:nth-of-type(${activeItem}) ${Label} {
        &:before {
          top: 0;
        }
      }
    }

    ${stepsCompleted &&
    css`
      ${Label}:before {
        background-color: ${themeColor('primary', 'main')};

        ${itemType === 'checkmark' && iconStyle}
      }
    `}
  `}
`

export default styled.div<StyledProps>`
  @media screen and ${mqBreakpoint('max-width', 'mobileS')} {
    display: none;
  }
`
