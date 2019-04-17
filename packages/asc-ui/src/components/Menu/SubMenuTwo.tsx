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

class MenuItem extends React.Component<Props> {
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

    if (event.key === 'Arrow') {
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
    console.log('selectedChildFunction', e)
    if (e.key === KeyboardKeys.ArrowDown) {
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
    const { selectedChild } = this.state
    console.log(selectedChild, selectedChild + 1, 'selectedChildFunction')
    this.setState({
      open: true,
      selectedChild: selectedChild + 1
    })
  }

  getReference = (el: string) => {
    if (this[el].current) {
      return this[el].current
    }

    return null
  }

  render() {
    const { id, children, focused, label, ...otherProps }: any = this.props
    const { open, selectedChild } = this.state
    return (
      <>
        <MenuStyle.MenuItemStyle
          focused={focused}
          onClick={this.onClick}
          onKeyDown={this.handleKeyPress}
          tabIndex={focused ? 0 : -1}
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
          onClose={() => {}}
          onKeyDown={this.onToggle}
        >
          {children}
          </MenuList>
      </>
    )
  }
}

export default MenuItem
