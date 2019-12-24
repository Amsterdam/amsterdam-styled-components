import styled, { css } from '@datapunt/asc-core'
import { themeSpacing } from '../../utils/themeUtils'

const OFFSET_UNIT = 4

export const ViewerContainerWrapper = styled.div`
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`

type ViewerContainerItemProps = {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const ViewerContainerItem = styled.div<ViewerContainerItemProps>`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  pointer-events: all;
  position: absolute;

  & > * + * {
    margin-top: ${themeSpacing(OFFSET_UNIT)}px;
  }

  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return css`
          left: ${themeSpacing(OFFSET_UNIT)}px;
          top: ${themeSpacing(OFFSET_UNIT)}px;
        `
      case 'top-right':
        return css`
          right: ${themeSpacing(OFFSET_UNIT)}px;
          top: ${themeSpacing(OFFSET_UNIT)}px;
        `
      case 'bottom-right':
        return css`
          bottom: ${themeSpacing(OFFSET_UNIT)}px;
          padding-right: ${themeSpacing(OFFSET_UNIT)}px;
          right: 0;
        `
      case 'bottom-left':
        return css`
          bottom: ${themeSpacing(OFFSET_UNIT)}px;
          left: ${themeSpacing(OFFSET_UNIT)}px;
        `
      default:
        return ''
    }
  }}
`
