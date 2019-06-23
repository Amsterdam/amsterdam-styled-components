import React from 'react'

export default (
  filteredChildren: any,
  activeChild: any,
  setActiveChild: any,
  setMenuOpen: any,
  linkRef = null,
) => {
  return {
    onKeyDown: (event: React.KeyboardEvent) => {
      const nrOrfChildren = React.Children.count(filteredChildren)
      switch (event.key) {
        case 'ArrowDown':
          if (activeChild !== nrOrfChildren) {
            event.stopPropagation()
            console.log('he?', activeChild)
            setActiveChild(activeChild + 1)
          }

          break

        case 'ArrowUp':
          if (activeChild !== 1 && activeChild !== 0) {
            event.stopPropagation()
            setActiveChild(activeChild - 1)
          }

          if (activeChild === 1 && linkRef) {
            if (linkRef) {
              // @ts-ignore
              linkRef.current.focus()
            }
          }
          break

        case 'Escape':
          setMenuOpen(false)
          setActiveChild(0)
          break

        default:
      }
    },
  }
}
