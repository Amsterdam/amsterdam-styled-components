/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'

type Props = {
  onKeyDown?: React.EventHandler<React.KeyboardEvent>
}

const Focus: React.FC<Props> = ({ children, onKeyDown }) => {
  const myRef = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    let renderedTimer: number = 0
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
    <div role="presentation" ref={myRef} onKeyDown={onKeyDown} tabIndex={0}>
      {children}
    </div>
  )
}

export default Focus
