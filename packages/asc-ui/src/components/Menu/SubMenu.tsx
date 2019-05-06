import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import ChevronDown from '../../internals/ChevronDown/ChevronDown'
import { KeyboardKeys } from '../../types'
import ownerDocument from '../../utils/ownerDocument'
import { MenuContext } from './Menu'

type Props = {
  focused?: boolean
  onClick?: Function
  role?: string
  label?: string
  divider?: boolean
  mobile?: boolean
  index?: number
} & MenuStyleProps.MenuItemStyleProps

type State = {
  open: boolean
  selectedChild: number
}

const selectedChildInitial = -1

class SubMenu extends React.Component<Props, State> {
  list = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)

    this.state = {
      open: false,
      selectedChild: selectedChildInitial,
    }
  }

  componentDidUpdate() {
    const { focused } = this.props
    const ref = this.getReference('list')
    if (ref && focused) {
      ref.focus()
    }
  }

  onKeyDown = (
    e: React.KeyboardEvent,
    setOpenChild: Function,
    onKeyDown: Function,
  ) => {
    if (e.key === KeyboardKeys.Enter) {
      this.handleKeyPress(e, setOpenChild)
    } else {
      onKeyDown(e)
    }
  }

  onClick = (e: React.MouseEvent, setOpenChild: Function) => {
    e.preventDefault()
    const { children, index } = this.props

    const nrOfChildren = React.Children.count(children)
    const { open } = this.state

    this.setState(
      {
        open: !open,
      },
      () => setOpenChild(nrOfChildren, !open, this.props.index),
    )
  }

  handleKeyPress = (e: React.KeyboardEvent, setOpenChild: Function) => {
    if (e.key === KeyboardKeys.Enter) {
      const { children } = this.props
      const nrOfChildren = React.Children.count(children)

      const { open } = this.state

      this.setState(
        {
          open: !open,
        },
        () => setOpenChild(nrOfChildren, !open, this.props.index),
      )
    }
  }

  onClose = () => {
    setTimeout(() => {
      const element = this.getReference('list') as HTMLInputElement
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
    const {
      id,
      children,
      focused,
      label,
      mobile,
      index: currentIndex,
      ...otherProps
    }: any = this.props
    const { open, selectedChild } = this.state

    const clonedChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        focused: index === selectedChild,
        index: child.props.onClick ? currentIndex + 1 + index : null,
      })
    })

    return (
      <MenuContext.Consumer>
        {(context: any) => (
          <>
            <MenuStyle.SubMenuButtonStyle
              focused={focused}
              onClick={e => this.onClick(e, context.setOpenChild)}
              onKeyDown={
                !open
                  ? e => this.handleKeyPress(e, context.setOpenChild)
                  : e =>
                      this.onKeyDown(e, context.setOpenChild, context.onKeyDown)
              }
              tabIndex={focused ? 0 : -1}
              ref={this.list}
              {...otherProps}
            >
              {label && <span>{label}</span>}
              {context.mobile && <ChevronDown open={open} />}
            </MenuStyle.SubMenuButtonStyle>
            <MenuStyle.SubMenuListWrapperStyle
              aria-hidden={context.mobile ? !open : false}
              onBlur={this.onClose}
            >
              <MenuStyle.SubMenuListStyle labelId={id}>
                {clonedChildren}
              </MenuStyle.SubMenuListStyle>
            </MenuStyle.SubMenuListWrapperStyle>
          </>
        )}
      </MenuContext.Consumer>
    )
  }
}

export default SubMenu
