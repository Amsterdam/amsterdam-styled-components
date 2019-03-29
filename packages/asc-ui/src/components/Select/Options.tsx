import React from 'react'
import { AscCore } from '@datapunt/asc-core'

type Props = {
  children: React.ReactChildren & {
    props: AscCore.Select.Option.Props
  }
  currentTab: string
}

const Options = ({ children: childrenProp, currentTab }: Props) => {
  let childIndex = 0
  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null
    }

    const { label } = child.props
    const childValue = label === undefined ? childIndex : label
    const selected = childValue === currentTab

    childIndex += 1
    return React.cloneElement(child as React.ReactElement<any>, {
      isCurrentTab: selected,
    })
  })
  return <>{children}</>
}

export default Options
