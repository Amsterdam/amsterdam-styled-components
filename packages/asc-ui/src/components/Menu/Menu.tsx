import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import MenuButton from './MenuButton'
import MenuList from './MenuList'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../../utils/ownerDocument'

type Props = {
  position?: MenuStyleProps.Position
  label?: string
  mobile?: boolean
  icon?: React.ReactNode
}

type State = {
  open: boolean
  openChild: boolean
  selectedChild: number
}

const selectedChildInitial = -1

export const MenuContext = React.createContext({})

class Menu extends React.Component<Props, State> {
  state = {
    open: false,
    openChild: false,
    selectedChild: selectedChildInitial,
  }

  static defaultProps = {
    mobile: false,
  }

  wrapper = React.createRef<HTMLDivElement>()

  list = React.createRef<HTMLDivElement>()

  onKeyDown = (event: React.KeyboardEvent) => {
    const { children } = this.props
    const { selectedChild, open, openChild } = this.state

    const nrOfChildren = React.Children.count(children)

    if (!open || openChild) {
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
      const element = this.getReference('wrapper') as HTMLInputElement
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          this.setState({
            selectedChild: selectedChildInitial,
            open: false,
            openChild: false,
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

  setOpenChild = () => {
    this.setState(state => ({ openChild: !state.openChild }))
  }

  render() {
    const { id, label, children, mobile, position, icon }: any = this.props
    const { open, openChild, selectedChild } = this.state

    return (
      <MenuContext.Provider
        value={{
          open,
          openChild,
          setOpenChild: this.setOpenChild,
          mobile,
        }}
      >
        <MenuContext.Consumer>
          {(context: any) => (
            <MenuStyle.MenuWrapperStyle
              id={id}
              ref={this.wrapper}
              onKeyDown={!context.openChild ? this.onKeyDown : () => {}}
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
          )}
        </MenuContext.Consumer>
      </MenuContext.Provider>
    )
  }
}

export default Menu
