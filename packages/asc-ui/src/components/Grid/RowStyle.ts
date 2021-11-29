import styled, { css } from 'styled-components'
import type { ReactNode } from 'react'
import { getValueFromTheme, valueFromObject } from '../../utils'
import {
  mediaQuery,
  min,
  max,
  margin,
  columns,
  spacerWidth,
  gutter,
} from '../../utils/grid'
import type { TypeFlexPosition } from '.'
import type { Theme } from '../../types'

type FlexJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface TypeProps {
  children: ReactNode
  className?: string
  debug?: boolean
  debugColor?: string
  halign?: FlexJustify
  hasMargin?: boolean
  hasMaxWidth?: boolean
  valign?: TypeFlexPosition
}

const RowStyle = styled.div<TypeProps>`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ halign }: { halign?: string }) => halign};
  align-items: ${({ valign }: { valign?: string }) => valign};
  max-width: ${({ hasMaxWidth, theme }) =>
    hasMaxWidth ? `${getValueFromTheme('maxGridWidth')({ theme })}px` : '100%'};
  flex-wrap: wrap;

  .layout-label {
    position: absolute;
    top: -20px;
    width: 100%;
  }

  .layout-label::before {
    position: absolute;
    padding: 2px 4px;
    font: 12px sans-serif;
    background: white;
    height: 20px;
  }

  ${({ debug }: { debug?: boolean }) =>
    debug &&
    css`
      position: relative;
    `}
  ${({
    debug,
    debugColor,
    hasMargin,
    theme,
  }: {
    debug?: boolean
    debugColor?: string
    hasMargin?: boolean
    theme: Theme.ThemeInterface
  }) =>
    Object.keys(theme.layouts).map(
      (layoutId) => css`
        @media ${mediaQuery(layoutId)} {
          ${debug &&
          css`
            .layout-label::before {
              content: '${layoutId} (${min(layoutId)({ theme }) || 0} - ${max(
                layoutId,
              )({ theme }) || '∞'})';
            }

            background-image: repeating-linear-gradient(
              to right,
              ${debugColor},
              ${debugColor}
                calc(
                  (100% - ${spacerWidth(layoutId, true)}) / ${columns(layoutId)}
                ),
              transparent
                calc(
                  (100% - ${spacerWidth(layoutId, true)}) / ${columns(layoutId)}
                ),
              transparent
                calc(
                  (
                      (100% - ${spacerWidth(layoutId, true)}) /
                        ${columns(layoutId)}
                    ) + ${gutter(layoutId, true)}
                )
            );
            background-clip: content-box;
          `};

          ${valueFromObject(`layouts.${layoutId}.margin`, theme) > 0 &&
          hasMargin &&
          css`
            padding-left: ${margin(layoutId, true)};
            padding-right: ${margin(layoutId, true)};
          `}

          ${debug &&
          valueFromObject(`layouts.${layoutId}.margin`, theme) > 0 &&
          css`
            background-position: ${margin(layoutId)}px;
          `}

      ${debug &&
          valueFromObject(`layouts.${layoutId}.margin`, theme) > 0 &&
          hasMargin &&
          css`
            &::before,
            &::after {
              box-sizing: border-box;
              position: absolute;
              top: 0;
              bottom: 0;
              height: 100%;
              width: ${margin(layoutId, true)};
              content: '${margin(layoutId)}';
              font: 10px sans-serif;
              z-index: 1;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            &::before {
              left: 0;
              border-right: 1px solid white;
            }
            &::after {
              right: 0;
              border-left: 1px solid white;
            }
          `}
        }
      `,
    )}
`

RowStyle.defaultProps = {
  halign: 'space-between',
  hasMaxWidth: true,
  valign: 'stretch',
}

export default RowStyle
