/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react'
import { AscCore } from '@datapunt/asc-core'

type Props = {
  open: boolean
  id: string
  selectedChild: number
  onClose: Function
  position?: AscCore.ContextMenuTypes.Position
  label?: string
  icon?: React.ReactNode
}

export default forwardRef((props: any, ref: React.Ref<any>) => (
  <ContextMenuList {...props} forwardedRef={ref}>
    {props.children}
  </ContextMenuList>
))

class ContextMenuList extends React.Component<Props> {
  state = {}

  myRef = React.createRef<HTMLDivElement>()

  static defaultProps = {
    position: AscCore.ContextMenuTypes.Position.top,
  }

  render() {
    const {
      id,
      children: childrenProps,
      position,
      open,
      selectedChild,
      onClose,
    } = this.props

    const children = React.Children.map(childrenProps, (child, index) =>
      React.cloneElement(child as React.ReactElement<any>, {
        focused: index === selectedChild,
      }),
    )

    return (
      <AscCore.ContextMenu.MenuListWrapper
        ref={this.myRef}
        aria-hidden={!open}
        onBlur={() => onClose()}
        position={position}
      >
        <AscCore.ContextMenu.MenuList labelId={id}>
          {children}
        </AscCore.ContextMenu.MenuList>
      </AscCore.ContextMenu.MenuListWrapper>
    )
  }
}
/* eslint-enable react/no-multi-comp */
