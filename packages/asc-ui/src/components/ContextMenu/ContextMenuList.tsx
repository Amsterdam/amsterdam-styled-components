/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react'
import { Position } from './types'
import ContextMenuListStyle, {
  ContextMenuListWrapperStyle,
} from './ContextMenuListStyle'
import usePassPropsToChildren from '../../utils/usePassPropsToChildren'

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

    const { children } = usePassPropsToChildren(childrenProps, index => ({
      focused: index === selectedChild,
    }))

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
