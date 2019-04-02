import React, { forwardRef } from 'react'
import { AscCore } from '@datapunt/asc-core'

type Props = {
  open: boolean
  id: string
  selectedChild: number
  onClose: Function
  orientation?: 'top'
  label?: string
  icon?: React.ReactNode
}

type State = {}

export default forwardRef((props: any, ref: React.Ref<any>) => (
  <MenuList {...props} forwardedRef={ref}>
    {props.children}
  </MenuList>
))

class MenuList extends React.Component<Props, State> {
  state = {}

  myRef = React.createRef<HTMLDivElement>()

  render() {
    const {
      id,
      children: childrenProps,
      orientation,
      open,
      selectedChild,
      onClose,
    } = this.props

    const children = React.Children.map(childrenProps, (child, index) => {
      if (!React.isValidElement(child)) {
        return null
      }

      return React.cloneElement(child as React.ReactElement<any>, {
        focused: index === selectedChild,
      })
    })

    return (
      <AscCore.Menu.MenuListWrapper
        ref={this.myRef}
        aria-hidden={!open}
        onBlur={() => onClose()}
        orientation={orientation}
      >
        <AscCore.Menu.MenuList labelId={id}>{children}</AscCore.Menu.MenuList>
      </AscCore.Menu.MenuListWrapper>
    )
  }
}
