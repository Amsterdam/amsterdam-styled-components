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

  onKeyDown = (event: React.KeyboardEvent, setOpenChild: Function) => {
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
      if (selectedChild === lastChild) {
        this.setState({ open: false, selectedChild: firstChild })
        setOpenChild()
      } else {
        this.setState({
          selectedChild: selectedChild + 1,
        })
      }
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

  onClick = (e: React.MouseEvent, setOpenChild: Function) => {
    e.preventDefault()
    setOpenChild()
    this.onToggle()
  }

  handleKeyPress = (e: React.KeyboardEvent, setOpenChild: Function) => {
    if (e.key === KeyboardKeys.Enter) {
      this.onToggle()
      setOpenChild()
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
      children: childrenProps,
      focused,
      label,
      mobile,
      ...otherProps
    }: any = this.props
    const { open, selectedChild } = this.state

    const children = React.Children.map(childrenProps, (child, index) =>
      React.cloneElement(child as React.ReactElement<any>, {
        focused: index === selectedChild,
        mobile,
      }),
    )

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
                  : e => this.onKeyDown(e, context.setOpenChild)
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
                {children}
              </MenuStyle.SubMenuListStyle>
            </MenuStyle.SubMenuListWrapperStyle>
          </>
        )}
      </MenuContext.Consumer>
    )
  }
}

export default SubMenu
