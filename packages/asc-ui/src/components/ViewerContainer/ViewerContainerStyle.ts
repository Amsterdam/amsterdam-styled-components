import styled, { css } from '@datapunt/asc-core'

const OFFSET = 10

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
    margin-top: ${OFFSET}px;
  }

  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return css`
          left: ${OFFSET}px;
          top: ${OFFSET}px;
        `
      case 'top-right':
        return css`
          right: ${OFFSET}px;
          top: ${OFFSET}px;
        `
      case 'bottom-right':
        return css`
          bottom: ${OFFSET}px;
          padding-right: ${OFFSET}px;
          right: 0;
        `
      case 'bottom-left':
        return css`
          bottom: ${OFFSET}px;
          left: ${OFFSET}px;
        `
      default:
        return ''
    }
  }}
`
