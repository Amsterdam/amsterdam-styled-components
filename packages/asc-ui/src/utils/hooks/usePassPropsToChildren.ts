import React from 'react'

type Callback = (index?: number) => any

/**
 * Use in case we need to pass props to children.
 * @param childrenProps React children
 * @param propsOrCallback this could be an object or a callback with the index as a parameter
 */
const usePassPropsToChildren = (
  childrenProps: React.ReactNode,
  propsOrCallback: React.PropsWithoutRef<any> | Callback,
) => {
  const children = React.Children.map(childrenProps, (child, index) =>
    React.cloneElement(
      child as React.ReactElement<any>,
      typeof propsOrCallback === 'function'
        ? propsOrCallback(index)
        : propsOrCallback,
    ),
  )

  return { children }
}

export default usePassPropsToChildren
