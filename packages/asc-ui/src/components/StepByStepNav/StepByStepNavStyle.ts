import styled, { css } from 'styled-components'

import { themeColor, themeSpacing } from '../../utils'

type Step = {
  label: string
}

export type StepByStepNavProps = {
  /** 0-based index determining which of the steps is active */
  activeIndex?: number
  className?: string
  indexType?: 'checkmark' | 'numeric' | 'none'
  steps: Array<Step>
}

export const checkmarkIcon = `<svg viewBox="0 0 32 32" width="14" height="14" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.216 27.016L0 14.68l2.91-2.77 9.346 9.837L29.129 4 32 6.8z" /></svg>`

export default styled.div<StepByStepNavProps>`
  ${({ activeIndex, indexType, steps }) => {
    let activeElement: number

    if (!activeIndex || activeIndex < 0) activeElement = 1
    else if (activeIndex >= steps.length) activeElement = steps.length
    else activeElement = activeIndex + 1

    return css`
      ol {
        counter-reset: stepByStep;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        border-left: 2px solid ${themeColor('tint', 'level5')};
        margin-left: ${themeSpacing(5)};
        padding-bottom: ${themeSpacing(10)};
        padding-left: ${themeSpacing(7.5)};
        position: relative;

        &:last-child {
          border-left-color: transparent;
        }

        &:nth-child(-n + ${activeElement}) {
          &:not(:nth-last-of-type(${steps.length - (activeElement - 1)})) {
            border-left: 2px solid ${themeColor('primary', 'main')};
          }

          *:before {
            background-color: ${themeColor('primary', 'main')};
          }
        }

        &:nth-of-type(${activeElement}) {
          & > * {
            font-size: 20px;
            font-weight: 700;

            &:before {
              font-size: 20px;
              height: ${themeSpacing(9)};
              line-height: ${themeSpacing(8.5)};
              top: -${themeSpacing(2)};
              width: ${themeSpacing(9)};
            }
          }
        }

        & > * {
          font-weight: 400;

          &:before {
            background-color: ${themeColor('tint', 'level5')};
            border-radius: 50%;
            content: '';
            display: block;
            height: ${themeSpacing(5)};
            left: 0;
            line-height: ${themeSpacing(5)};
            position: absolute;
            text-align: center;
            top: 0;
            transform: translateX(calc(-50% - 1px));
            width: ${themeSpacing(5)};

            ${indexType === 'numeric' &&
            css`
              color: white;
              content: counter(stepByStep);
              counter-increment: stepByStep;
              font-size: 14px;
              font-weight: 500;
            `}

            ${indexType === 'checkmark' &&
            css`
              background-repeat: no-repeat;
              background-position: center;
              background-image: url('data:image/svg+xml,${checkmarkIcon}');
            `}
          }
        }
      }
    `
  }}
`
