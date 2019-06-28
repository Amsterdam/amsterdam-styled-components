import React from 'react'
import MenuItem from './MenuItem'
import MenuFlyOut from './MenuFlyOut'

export default (childrenProps: any) => {
  const isFocussable = (child: React.ReactElement<any>) =>
    child.type === MenuItem || child.type === MenuFlyOut

  const filteredChildren = React.Children.map(childrenProps, child => {
    if (isFocussable(child)) {
      return child
    }
    return null
  })

  let nrOfMenuItems = 0

  const children = React.Children.map(childrenProps, child => {
    if (isFocussable(child)) {
      nrOfMenuItems += 1
      const clonedEl = React.cloneElement(child, {
        linkIndex: nrOfMenuItems,
      })
      return clonedEl
    }
    return child
  })

  return {
    children,
    filteredChildren,
  }
}
