import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import { Icon } from '../..'
import { KeyboardKeys } from '../../types'

type Props = {
  focused?: boolean
  onClick?: Function
  role?: string
  icon?: React.ReactNode
  divider?: boolean
} & MenuStyleProps.MenuItemStyleProps

class MenuItem extends React.Component<Props> {
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
      <MenuStyle.MenuItemStyle
        ref={this.root}
        key={Math.floor(Math.random() * 100)}
        focused={focused}
        onClick={this.onClick}
        onKeyDown={this.handleKeyPress}
        tabIndex={focused ? 0 : -1}
        {...otherProps}
      >
        {icon && <Icon size={14}>{icon}</Icon>}
        <span>{children}</span>
      </MenuStyle.MenuItemStyle>
    )
  }
}

export default MenuItem
