import React from 'react'
import { AscCore } from '../../styles'
import ContextMenuButton from './ContextMenuButton'
import MenuList from './ContextMenuList'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../../utils/ownerDocument'

const selectedChildInitial = -1

type Props = {
  position?: AscCore.ContextMenuTypes.Position
  label?: string
  icon?: React.ReactNode
  open?: boolean
}

type State = {
  open?: boolean
  selectedChild: number
}

class ContextMenu extends React.Component<Props, State> {
  static defaultProps = {
    open: false,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      open: props.open,
      selectedChild: selectedChildInitial,
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { open } = this.props;

    if (prevProps.open !== open) {
      this.setState({ open })
    }
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

    console.log('open', open, this.props.open)

    return (
      <AscCore.ContextMenu.MenuWrapper
        id={id}
        ref={this.root}
        onKeyDown={this.onKeyDown}
        onBlur={this.onClose}
      >
        <ContextMenuButton
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
      </AscCore.ContextMenu.MenuWrapper>
    )
  }
}

export default ContextMenu
