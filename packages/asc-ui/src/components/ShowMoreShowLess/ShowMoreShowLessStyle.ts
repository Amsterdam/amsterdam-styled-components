import styled, { css } from 'styled-components'
import { themeSpacing } from '../../utils'

export type ShowMoreShowLessProps = {
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
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 100px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
          );
          position: absolute;
          bottom: 0;
        }
      `}
    `}
  ${({ showMoreShowLess }) =>
    // Prevent a FOUC here (showing the long content when it's not supposed to)
    typeof showMoreShowLess !== 'boolean' &&
    css`
      visibility: hidden;
    `}
`
