/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react'
import { ReactComponent as ChevronRight } from '@datapunt/asc-assets/lib/Icons/ChevronRight.svg'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'

type Props = {
  open: boolean
  id: string
  selectedChild: number
  onClose: Function
  label?: string
  innerRef?: any
  mobile: boolean
} & MenuStyleProps.MenuListStyleProps

export default forwardRef((props: any, ref: React.Ref<any>) => {
  return (
    <MenuList {...props} innerRef={ref}>
      {props.children}
    </MenuList>
  )
})

class MenuList extends React.Component<Props> {
  state = {}

  static defaultProps = {
    position: MenuStyleProps.Position.top,
  }

  render() {
    const {
      id,
      children: childrenProps,
      position,
      open,
      innerRef,
      selectedChild,
      onClose,
      mobile
    } = this.props

    const children = React.Children.map(childrenProps, (child, index) =>
      React.cloneElement(child as React.ReactElement<any>, {
        focused: index === selectedChild,
        icon: !mobile ? <ChevronRight /> : '',
        innerRef,
      }),
    )

    return (
      <MenuStyle.MenuListWrapperStyle
        ref={innerRef}
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
