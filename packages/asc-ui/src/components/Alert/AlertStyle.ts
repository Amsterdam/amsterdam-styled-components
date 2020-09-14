import styled, { css } from 'styled-components'
import { Theme } from '../../types'
import { svgFill, themeColor, themeSpacing } from '../../utils'
import Button from '../Button'
import Heading from '../Heading'

export type Level =
  | 'normal'
  | 'attention'
  | 'warning'
  | 'error'
  | 'valid'
  | 'focus'

export type Props = {
  level?: Level
  heading?: string
  onDismiss?: () => void
  content?: string
  dismissible?: boolean
}

const colorMap: Record<
  Level,
  ({ theme }: { theme: Theme.ThemeInterface }) => string
> = {
  normal: themeColor('tint', 'level3'),
  attention: themeColor('primary'),
  warning: themeColor('tint', 'level1'),
  error: themeColor('secondary'),
  valid: themeColor('support', 'valid'),
  focus: themeColor('support', 'focus'),
}

export const CloseButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`

export const CloseButton = styled(Button)`
  background-color: transparent;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const AlertHeading = styled(Heading)`
  margin: 0;
`

export default styled.div<Props>`
  position: relative;
  width: 100%; /* IE11 fix */

  /* IE11 fix: display 'flex' only when dismissible */
  ${({ dismissible }) =>
    dismissible &&
    css`
      display: flex;
    `}

  ${({ level, theme }) =>
    css`
      padding: ${themeSpacing(4)};

      /* Colors */
      background-color: ${colorMap[level || 'normal']({
        theme,
      })};
      ${(level === 'attention' || level === 'error' || level === 'valid') &&
      css`
        ${svgFill(themeColor('tint', 'level1'))}
        &, & * {
          color: ${themeColor('tint', 'level1')};
        }
      `}
      ${level === 'warning' &&
      css`
        box-shadow: ${themeColor('secondary')} 0px 0px 0px 2px inset;
      `}
    `}
`
