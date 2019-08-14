/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'

type Props = {
  onKeyDown?: React.EventHandler<React.KeyboardEvent>
}

type State = {}

class Focus extends React.Component<Props, State> {
  renderedTimer: any = 0

  myRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    this.focus()
  }

  componentDidUpdate() {
    this.focus()
  }

  componentWillUnmount(): void {
    clearTimeout(this.renderedTimer)
  }

  focus = () => {
    const { current: node } = this.myRef
    if (node) {
      clearTimeout(this.renderedTimer)
      this.renderedTimer = setTimeout(() => {
        const x = window.scrollX
        const y = window.scrollY
        node.focus()

        // Prevent the body from scrolling down
        window.scrollTo(x, y)
      })
    }
  }

  render() {
    const { children, onKeyDown } = this.props

    return (
      <div
        role="presentation"
        ref={this.myRef}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    )
  }
}

export default Focus
