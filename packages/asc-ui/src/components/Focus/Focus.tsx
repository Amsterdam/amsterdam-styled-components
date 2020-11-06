/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import {
  createRef,
  EventHandler,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
} from 'react'
import styled from 'styled-components'

type Props = {
  onKeyDown?: EventHandler<KeyboardEvent>
}

const FocusStyle = styled.div``

const Focus: FunctionComponent<Props> = ({
  children,
  onKeyDown,
  ...otherProps
}) => {
  const myRef = createRef<HTMLDivElement>()

  useEffect(() => {
    let renderedTimer = 0
    const { current: node } = myRef
    if (node) {
      clearTimeout(renderedTimer)
      renderedTimer = setTimeout(() => {
        const x = window.scrollX
        const y = window.scrollY
        node.focus()

        // Prevent the body from scrolling down
        window.scrollTo(x, y)
      })
    }
    return () => {
      clearTimeout(renderedTimer)
    }
  }, [myRef])

  return (
    <FocusStyle
      {...otherProps}
      role="presentation"
      ref={myRef}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {children}
    </FocusStyle>
  )
}

export default Focus
