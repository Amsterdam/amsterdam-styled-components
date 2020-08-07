import React, { HTMLAttributes } from 'react'

// Some props are omitted since they cannot be overwritten.
type OmittedProps = 'role' | 'aria-controls' | 'aria-selected' | 'tabIndex'

export interface TabProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, OmittedProps> {
  id: string
  label: string
}

export const Tab: React.FC<TabProps> = () => {
  return null
}
