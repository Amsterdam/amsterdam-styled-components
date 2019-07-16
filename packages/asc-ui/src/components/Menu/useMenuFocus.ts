import React from 'react'
import { useMenuContext } from './MenuContext'

export default (
  ref: React.RefObject<{ focus: Function }> | null,
  linkIndex: any,
) => {
  // @ts-ignore
  const { activeChild: activeChildScoped } = useMenuContext()
  React.useEffect(() => {
    if (ref) {
      if (linkIndex && activeChildScoped === linkIndex && ref.current) {
        ref.current.focus()
      }
    }
  }, [ref, linkIndex, activeChildScoped])
}
