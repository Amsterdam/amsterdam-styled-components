/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'

type Props = {
  open: boolean
  id: string
  selectedChild: number
  onClose: Function
  label?: string
  icon?: React.ReactNode
  ref?: any
} & MenuStyleProps.MenuListStyleProps

export default forwardRef((props: any, ref: React.Ref<any>) => {

  console.log('forwardedRef', ref)

  return (
  <MenuList {...props} forwardedRef={ref}>
    {props.children}
  </MenuList>
)})

class MenuList extends React.Component<Props> {
  state = {}

  list = React.createRef<HTMLDivElement>()

  static defaultProps = {
    position: MenuStyleProps.Position.top,
  }

  render() {
    const {
      id,
      children: childrenProps,
      position,
      open,
      ref,
      selectedChild,
      onClose,
    } = this.props

    console.log(this.props)

    const children = React.Children.map(childrenProps, (child, index) =>
      React.cloneElement(child as React.ReactElement<any>, {
        focused: index === selectedChild,
      }),
    )

    return (
      <MenuStyle.MenuListWrapperStyle
        ref={ref ? ref : this.list}
        aria-hidden={!open}
        onBlur={() => onClose()}
        position={position}
      >
        <MenuStyle.MenuListStyle labelId={id}>
          {children}
        </MenuStyle.MenuListStyle>
      </MenuStyle.MenuListWrapperStyle>
    )
  }
}
/* eslint-enable react/no-multi-comp */
