/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react'
import ContextMenuStyle, { ContextMenuStyleProps } from '../../styles/components/ContextMenuStyle'

type Props = {
  open: boolean
  id: string
  selectedChild: number
  onClose: Function
  position?: ContextMenuStyleProps.Position
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
    position: ContextMenuStyleProps.Position.top,
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
      <ContextMenuStyle.ContextMenuListWrapperStyle
        ref={this.myRef}
        aria-hidden={!open}
        onBlur={() => onClose()}
        position={position}
      >
        <ContextMenuStyle.ContextMenuListStyle labelId={id}>
          {children}
        </ContextMenuStyle.ContextMenuListStyle>
      </ContextMenuStyle.ContextMenuListWrapperStyle>
    )
  }
}
/* eslint-enable react/no-multi-comp */
