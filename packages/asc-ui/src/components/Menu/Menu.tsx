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
  expandedChild: boolean
  expandedChildIndex: number
  selectedChild: number
  nrOfChildren: number
  nrOfChildrenChild: number
}

const selectedChildInitial = -1

export const MenuContext = React.createContext({})

const initialState = {
  open: false,
  expandedChild: false,
  expandedChildIndex: -1,
  selectedChild: selectedChildInitial,
  nrOfChildrenChild: 0,
}

class Menu extends React.Component<Props, State> {
  nrOfChildrenInitial = React.Children.count(this.props.children)

  state = {
    ...initialState,
    nrOfChildren: this.nrOfChildrenInitial,
  }

  static defaultProps = {
    mobile: false,
  }

  wrapper = React.createRef<HTMLDivElement>()

  onKeyDown = (event: React.KeyboardEvent) => {
    const { selectedChild, nrOfChildren, open } = this.state

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
      const element = this.getReference('wrapper') as HTMLInputElement
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          this.setState({
            ...initialState,
            nrOfChildren: this.nrOfChildrenInitial,
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

  setOpenChild = (
    nrOfChildren: number,
    expandedChild: boolean,
    expandedChildIndex: number,
  ) => {
    this.setState(state => ({
      selectedChild: expandedChildIndex,
      nrOfChildren: expandedChild
        ? state.nrOfChildren + nrOfChildren
        : state.nrOfChildren - nrOfChildren,
      nrOfChildrenChild: nrOfChildren,
      expandedChild,
      expandedChildIndex,
    }))
  }

  setSelectedChild = (index: number) => {
    this.setState({ selectedChild: index })
  }

  render() {
    const { id, label, children, mobile, position, icon }: any = this.props
    const {
      open,
      expandedChild,
      expandedChildIndex,
      selectedChild,
      nrOfChildren,
      nrOfChildrenChild,
    } = this.state

    return (
      <MenuContext.Provider
        value={{
          open,
          expandedChild,
          expandedChildIndex,
          selectedChild,
          nrOfChildren,
          setSelectedChild: this.setSelectedChild,
          onKeyDown: this.onKeyDown,
          setOpenChild: this.setOpenChild,
          nrOfChildrenChild,
          mobile,
        }}
      >
        <MenuStyle.MenuWrapperStyle
          id={id}
          ref={this.wrapper}
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
            }}
            onClose={this.onClose}
          >
            {children}
          </MenuList>
        </MenuStyle.MenuWrapperStyle>
      </MenuContext.Provider>
    )
  }
}

export default Menu
