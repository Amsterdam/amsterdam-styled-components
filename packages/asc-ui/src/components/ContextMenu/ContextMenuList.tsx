/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react'
import { Position } from '../../styles/components/ContextMenuStyle/types'
import ContextMenuListStyle, {
  ContextMenuListWrapperStyle,
} from '../../styles/components/ContextMenuStyle/ContextMenuListStyle'

type Props = {
  open: boolean
  id: string
  selectedChild: number
  onClose: Function
  position?: Position
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
    position: Position.top,
  }

  render() {
    const {
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
      <ContextMenuListWrapperStyle
        ref={this.myRef}
        aria-hidden={!open}
        onBlur={() => onClose()}
        position={position}
      >
        <ContextMenuListStyle>{children}</ContextMenuListStyle>
      </ContextMenuListWrapperStyle>
    )
  }
}
/* eslint-enable react/no-multi-comp */
