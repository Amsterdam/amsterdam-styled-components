import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import MenuButton from './MenuButton'
import MenuList from './MenuList'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../../utils/ownerDocument'

type Props = {
  position?: MenuStyleProps.Position
  label?: string
  icon?: React.ReactNode
}

type State = {}

const selectedChildInitial = -1

class Menu extends React.Component<Props, State> {
  state = {
    open: false,
    selectedChild: selectedChildInitial,
  }

  list = React.createRef<HTMLDivElement>()
  root = React.createRef<HTMLDivElement>()

  onKeyDown = (event: React.KeyboardEvent) => {
    const { children } = this.props
    const { selectedChild, open } = this.state

    const nrOfChildren = React.Children.count(children)

    if (!open) {
      return
    }
    const firstChild = 0
    const lastChild = nrOfChildren - 1

    if (event.key === KeyboardKeys.ArrowDown) {
      event.preventDefault()
      this.setState({
        selectedChild:
          selectedChild === lastChild ? firstChild : selectedChild + 1,
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

  onToggle = () => {
    const { open } = this.state
    this.setState({
      open: !open,
    })
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

  getReference = (el: string) => {
    if (this[el].current) {
      return this[el].current
    }

    return null
  }

  render() {
    const { id, label, children, position, icon }: any = this.props
    const { open, selectedChild } = this.state

    console.log('selectedChild', children.length, selectedChild)

    return (
      <MenuStyle.MenuWrapperStyle
        id={id}
        ref={this.root}
        onKeyDown={this.onKeyDown}
        onBlur={this.onClose}
      >
        <MenuButton
          {...{
            icon,
            open,
            position,
            label,
          }}
          onClick={this.onToggle}
        />
        <MenuList
          {...{
            position,
            id,
            open,
            selectedChild,
          }}
          onClose={this.onClose}
          ref={this.list}
        >
          {children}
        </MenuList>
      </MenuStyle.MenuWrapperStyle>
    )
  }
}

export default Menu
