import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { KeyboardKeys } from '../../types'

type Props = {
  focused?: boolean
  onClick?: Function
  role?: string
  icon?: React.ReactNode
  divider?: boolean
}

class ContextMenuItem extends React.Component<Props> {
  root = React.createRef<HTMLDivElement>()

  componentDidUpdate() {
    const { focused } = this.props
    const ref = this.getReference('root')
    if (ref && focused) {
      ref.focus()
    }
  }

  onClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
    const { onClick } = this.props
    if (onClick) {
      onClick(e)
    }
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      this.onClick(e)
    }
  }

  getReference = (el: string) => {
    if (this[el].current) {
      return this[el].current
    }

    return null
  }

  render() {
    const { children, focused, icon, ...otherProps }: any = this.props
    return (
      <AscCore.ContextMenu.MenuItem
        ref={this.root}
        focused={focused}
        onClick={this.onClick}
        onKeyDown={this.handleKeyPress}
        tabIndex={focused ? 0 : -1}
        {...otherProps}
      >
        {icon && icon}
        {children}
      </AscCore.ContextMenu.MenuItem>
    )
  }
}

export default ContextMenuItem
