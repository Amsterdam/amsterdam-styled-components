import type { PropsWithoutRef, ReactElement, ReactNode } from 'react'
import { Children, cloneElement } from 'react'

type Callback = (index?: number) => any

/**
 * Use in case we need to pass props to children.
 * @param childrenProps React children
 * @param propsOrCallback this could be an object or a callback with the index as a parameter
 */
const usePassPropsToChildren = (
  childrenProps: ReactNode,
  propsOrCallback: PropsWithoutRef<any> | Callback,
) => {
  const children = Children.map(childrenProps, (child, index) =>
    cloneElement(
      child as ReactElement<any>,
      typeof propsOrCallback === 'function'
        ? propsOrCallback(index)
        : propsOrCallback,
    ),
  )

  return { children }
}

export default usePassPropsToChildren
