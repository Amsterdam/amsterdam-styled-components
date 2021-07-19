import styled, { css } from 'styled-components'
import { Theme } from '../../types'
import { svgFill, themeColor, themeSpacing } from '../../utils'
import Button from '../Button'
import Heading from '../Heading'

export type AlertLevel = 'error' | 'info' | 'neutral' | 'warning'

export interface AlertProps {
  content?: string
  dismissible?: boolean
  heading?: string
  level?: AlertLevel
  onDismiss?: () => void
  outline?: boolean
}

const colorMap: Record<
  AlertLevel,
  ({ theme }: { theme: Theme.ThemeInterface }) => string
> = {
  error: themeColor('error'),
  info: themeColor('primary'),
  neutral: themeColor('tint', 'level3'),
  warning: themeColor('support', 'focus'),
}

export const CloseButtonWrapper = styled.div`
  float: right;
  margin-left: ${themeSpacing(4)};
`

export const CloseButton = styled(Button)`
  background-color: transparent;
  min-width: initial; /* non-blank buttons have a min-width. This is an exception and need to override this */
`

export const ContentWrapper = styled.div`
  width: 100%;
  overflow-wrap: anywhere;
  overflow: hidden;

  & > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const AlertHeading = styled(Heading)`
  margin: 0;
`

export default styled.div<AlertProps>`
  position: relative;
  width: 100%; /* IE11 fix */

  /* IE11 fix: display 'flex' only when dismissible */
  ${({ dismissible }) =>
    dismissible &&
    css`
      display: flex;
    `}

  ${({ level, outline, theme }) =>
    css`
      padding: ${themeSpacing(4)};

      /* Solid colors */
      ${!outline &&
      css`
        background-color: ${colorMap[level || 'neutral']({
          theme,
        })};
      `}
      ${!outline &&
      (level === 'error' || level === 'info') &&
      css`
        ${svgFill(themeColor('tint', 'level1'))}
        &, & * {
          color: ${themeColor('tint', 'level1')};
        }
      `}
      
      /* Outline color */
      ${outline &&
      css`
        box-shadow: ${colorMap[level || 'neutral']({
            theme,
          })}
          0px 0px 0px 2px inset;
      `}
      ${outline &&
      (level === 'error' || level === 'info') &&
      css`
        ${svgFill(themeColor('tint', 'level7'))}
      `}
    `}
`
