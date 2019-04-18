/* eslint-disable react/no-multi-comp */
import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import MenuList from './MenuList'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../../utils/ownerDocument'

type Props = {
  focused?: boolean
  onClick?: Function
  role?: string
  label?: string
  divider?: boolean
} & MenuStyleProps.MenuItemStyleProps

const selectedChildInitial = -1

class SubMenu extends React.Component<Props> {
  state = {
    open: false,
    selectedChild: selectedChildInitial,
  }

  list = React.createRef<HTMLDivElement>()
  root = React.createRef<HTMLDivElement>()

  componentDidUpdate() {
    const { focused } = this.props
    const ref = this.getReference('root')
    if (ref && focused) {
      ref.focus()
    }
  }

  onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    this.onToggle()
  }

  onKeyDown = (event: React.KeyboardEvent) => {
    const { children } = this.props
    const { selectedChild, open } = this.state

    const nrOfChildren = React.Children.count(children) + 2

    if (!open) {
      return
    }
    const firstChild = 0
    const lastChild = nrOfChildren

    if (event.key === KeyboardKeys.ArrowUp) {
      event.preventDefault()
      this.setState({
        selectedChild: selectedChild + 1,
      })
    }

    if (event.key === KeyboardKeys.ArrowUp) {
      event.preventDefault()
      this.setState({
        selectedChild:
          selectedChild === firstChild || selectedChild === selectedChildInitial
            ? lastChild
            : selectedChild - 1,
      })
    }
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      this.onToggle()
    }
  }

  onClose = () => {
    setTimeout(() => {
      const element = this.getReference('root') as HTMLInputElement
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          this.setState({
            selectedChild: selectedChildInitial,
            open: false,
          })
        }
      }
    })
  }

  onToggle = () => {
    const { open } = this.state
    this.setState({
      open: !open,
    })
  }

  getReference = (el: string) => {
    if (this[el].current) {
      return this[el].current
    }

    return null
  }

  render() {
    const { id, children, focused, innerRef, label, ...otherProps }: any = this.props
    const { open, selectedChild } = this.state

console.log(innerRef)

    return (
      <>
        <MenuStyle.MenuItemStyle
          focused={focused}
          onClick={this.onClick}
          onKeyDown={this.handleKeyPress}
          tabIndex={-1}
          ref={this.root}
          {...otherProps}
        >
          {label && label}
        </MenuStyle.MenuItemStyle>
        <MenuList
          {...{
            id,
            open,
            selectedChild,
          }}
          ref={innerRef}
          tabIndex={-1}
          onClose={() => {}}
          onKeyDown={this.onToggle}
        >
          {children}
          </MenuList>
      </>
    )
  }
}

export default SubMenu

/* eslint-enable react/no-multi-comp */
