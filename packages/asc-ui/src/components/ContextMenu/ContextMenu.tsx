import React from 'react'
import ContextMenuStyle, { ContextMenuStyleProps } from '../../styles/components/ContextMenuStyle'
import ContextMenuButton from './ContextMenuButton'
import MenuList from './ContextMenuList'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../../utils/ownerDocument'

const selectedChildInitial = -1

type Props = {
  position?: ContextMenuStyleProps.Position
  label?: string
  icon?: React.ReactNode
  open?: boolean
}

type State = {
  open?: boolean
  selectedChild: number
}

class ContextMenu extends React.Component<Props, State> {
  wrapper = React.createRef<HTMLDivElement>()

  list = React.createRef<HTMLDivElement>()

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
    const { open } = this.props

    if (prevProps.open !== open) {
      this.onToggle(open)
    }
  }

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

  onToggle = (open: Props['open'] | State['open']) => {
    this.setState({ open })
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

    return (
      <ContextMenuStyle.ContextMenuWrapperStyle
        id={id}
        ref={this.wrapper}
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
          onClick={() => this.onToggle(!open)}
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
      </ContextMenuStyle.ContextMenuWrapperStyle>
    )
  }
}

export default ContextMenu
