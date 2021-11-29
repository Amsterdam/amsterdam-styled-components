import styled, { css } from 'styled-components'
import { themeSpacing } from '../../utils'

export interface ShowMoreShowLessProps {
  maxHeight?: string
  showMoreText?: string
  showLessText?: string
}

type StyleProps = {
  showMoreShowLess?: boolean
  isOpen?: boolean
} & ShowMoreShowLessProps

export default styled.div<StyleProps>`
  position: relative;
  ${({ isOpen, maxHeight, showMoreShowLess }) =>
    !isOpen &&
    css`
      overflow: hidden;
      margin-bottom: ${themeSpacing(4)};
      max-height: ${maxHeight};

      ${showMoreShowLess &&
      css`
        mask-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(0, rgba(0, 0, 0, 1)),
          color-stop(0.6, rgba(0, 0, 0, 1)),
          color-stop(1, rgba(0, 0, 0, 0))
        );
      `}
    `}
  ${({ showMoreShowLess }) =>
    // Prevent a FOUC here (showing the long content when it's not supposed to)
    typeof showMoreShowLess !== 'boolean' &&
    css`
      visibility: hidden;
    `}
`
