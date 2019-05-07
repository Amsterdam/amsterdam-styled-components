import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import ChevronDown from '../../internals/ChevronDown/ChevronDown'
import { KeyboardKeys } from '../../types'
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

class SubMenu extends React.Component<Props> {
  list = React.createRef<HTMLDivElement>()

  componentDidUpdate() {
    const { focused } = this.props
    const ref = this.getReference('list')
    if (ref && focused) {
      ref.focus()
    }
  }

  onKeyDown = (
    e: React.KeyboardEvent,
    expandedChild: boolean,
    setOpenChild: Function,
    onKeyDown: Function,
  ) => {
    if (e.key === KeyboardKeys.Enter) {
      this.handleKeyPress(e, expandedChild, setOpenChild)
    } else {
      onKeyDown(e)
    }
  }

  handleOnClick = (
    e: React.KeyboardEvent | React.MouseEvent,
    expandedChild: boolean,
    setOpenChild: Function,
  ) => {
    e.preventDefault()
    const { children, index } = this.props
    const nrOfChildren = React.Children.count(children)

    setOpenChild(nrOfChildren, !expandedChild, index)
  }

  handleKeyPress = (e: React.KeyboardEvent, expandedChild: boolean, setOpenChild: Function) => {
    if (e.key === KeyboardKeys.Enter) {
      this.handleOnClick(e, expandedChild, setOpenChild)
    }
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

    const clonedChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        index: child.props.onClick ? currentIndex + 1 + index : null,
      })
    })

    return (
      <MenuContext.Consumer>
        {(context: any) => (
          <>
            <MenuStyle.SubMenuButtonStyle
              focused={focused}
              onClick={e => this.handleOnClick(e, context.expandedChild, context.setOpenChild)}
              onKeyDown={
                !context.expandedChild
                  ? e => this.handleKeyPress(e, context.expandedChild, context.setOpenChild)
                  : e =>
                      this.onKeyDown(e, context.expandedChild, context.setOpenChild, context.onKeyDown)
              }
              tabIndex={focused ? 0 : -1}
              ref={this.list}
              {...otherProps}
            >
              {label && <span>{label}</span>}
              {context.mobile && <ChevronDown open={context.expandedChild} />}
            </MenuStyle.SubMenuButtonStyle>
            <MenuStyle.SubMenuListWrapperStyle
              aria-hidden={context.mobile ? !context.expandedChild : false}
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
