import styled, { css, Theme } from '@datapunt/asc-core'
import {
  focusStyleOutline,
  svgFill,
  themeColor,
  themeSpacing,
} from '../../utils'
import Button from '../Button'

export type Level = 'normal' | 'attention' | 'error'

type SharedProps = {
  compact?: boolean
}

export type Props = {
  level?: Level
  heading?: string
  onDismiss?: () => void
  content?: string
  dismissible?: boolean
} & SharedProps

const colorMap: Record<
  Level,
  ({ theme }: { theme: Theme.ThemeInterface }) => string
> = {
  normal: themeColor('tint', 'level3'),
  attention: themeColor('primary'),
  error: themeColor('secondary'),
}

const getVPadding = (compact?: boolean) => (compact ? 2 : 5)
const getHPadding = (compact?: boolean) => (compact ? 1 : 6)

export const CloseButtonWrapper = styled.div<SharedProps>`
  display: flex;
  flex-direction: column;
  margin-left: auto;

  &::before,
  &::after {
    content: '';
    height: 100%;
    max-height: ${({ compact, theme }) =>
      themeSpacing(getHPadding(compact))({ theme })};
  }
`

export const CloseButton = styled(Button)`
  background-color: transparent;
`

export const ContentWrapper = styled.div<SharedProps>`
  display: flex;
  flex-direction: column;
  ${({ compact, theme }) =>
    css`
      padding: ${themeSpacing(getHPadding(compact), 0)({ theme })};
    `}

  & > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default styled.div<Props>`
  position: relative;
  display: flex;
  ${focusStyleOutline()}
  ${({ level, compact, theme }) =>
    css`
      padding: ${themeSpacing(0, getVPadding(compact))({ theme })};

      /* Colors */
      background-color: ${colorMap[level || 'normal']({
        theme,
      })};
      ${(level === 'attention' || level === 'error') &&
      css`
        ${svgFill('tint', 'level1')({ theme })}
        &, & * {
          color: ${themeColor('tint', 'level1')};
        }
      `}
    `}
`
