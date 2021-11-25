import styled, { css } from 'styled-components'

import { breakpoint, themeColor } from '../../utils'

type Step = {
  label: string
}

export type StepByStepNavProps = {
  /** 1-based index determining which of the steps is active */
  activeItem?: number
  className?: string
  itemType?: 'checkmark' | 'numeric' | 'none'
  steps: Array<Step>
  stepsCompleted?: boolean
}

type StyledProps = StepByStepNavProps & {
  activeItem: number
}

const checkmarkIcon = `<svg viewBox="0 0 32 32" width="14" height="14" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.216 27.016L0 14.68l2.91-2.77 9.346 9.837L29.129 4 32 6.8z" /></svg>`
const itemSize = 20
const activeItemSize = 36

const iconStyle = css`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,${checkmarkIcon}');
`

export default styled.div<StyledProps>`
  ${({ activeItem, itemType, steps, stepsCompleted }) => {
    return css`
      @media screen and ${breakpoint('max-width', 'mobileS')} {
        display: none;
      }

      ol {
        counter-reset: stepByStep;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        border-left: 2px solid ${themeColor('tint', 'level5')};
        margin-left: ${itemSize}px;
        padding-bottom: ${itemSize * 2}px;
        padding-left: ${itemSize * 1.5}px;
        position: relative;

        &:last-child {
          border-left-color: transparent;
        }

        & > span {
          font-weight: 400;

          &:before {
            background-color: ${themeColor('tint', 'level5')};
            border-radius: 50%;
            content: '';
            display: block;
            height: ${itemSize}px;
            left: -${itemSize / 2 + 1}px;
            position: absolute;
            text-align: center;
            top: 0;
            width: ${itemSize}px;

            ${itemType === 'numeric' &&
            css`
              color: white;
              content: counter(stepByStep);
              counter-increment: stepByStep;
              font-size: 14px;
              font-weight: 500;
              line-height: ${itemSize}px;
            `}
          }
        }

        /* All list items before and including the active one */
        &:nth-child(-n + ${activeItem}) {
          &:not(:nth-last-of-type(${steps.length - (activeItem - 1)})) {
            border-left: 2px solid ${themeColor('primary', 'main')};

            span:before {
              ${itemType === 'checkmark' && iconStyle}
            }
          }

          span:before {
            background-color: ${themeColor('primary', 'main')};
          }
        }

        /* Active list item */
        &:nth-of-type(${activeItem}) {
          & > span {
            font-size: ${itemSize}px;
            font-weight: 700;

            &:before {
              font-size: ${itemSize}px;
              height: ${activeItemSize}px;
              left: -${activeItemSize / 2 + 1}px;
              line-height: ${activeItemSize}px;
              top: -${(activeItemSize - itemSize) / 2}px;
              width: ${activeItemSize}px;
            }
          }
        }

        ${stepsCompleted &&
        css`
          span:before {
            background-color: ${themeColor('primary', 'main')};

            ${itemType === 'checkmark' && iconStyle}
          }
        `}
      }

      @media screen and ${breakpoint('max-width', 'laptop')} {
        ol {
          display: flex;
          flex-wrap: nowrap;
          padding: 0;
        }

        li {
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

          & > span {
            display: inline-block;
            height: ${activeItemSize}px;
            visibility: hidden;
            width: ${activeItemSize}px;

            &:before {
              top: ${itemSize / 2}px;
              visibility: visible;
            }
          }

          /* Active list item */
          &:nth-of-type(${activeItem}) > span:before {
            top: 1px;
          }
        }
      }
    `
  }}
`
