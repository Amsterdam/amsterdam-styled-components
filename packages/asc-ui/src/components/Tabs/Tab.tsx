import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react'

// Some props are omitted since they cannot be overwritten.
type OmittedProps = 'role' | 'aria-controls' | 'aria-selected' | 'tabIndex'

export interface TabProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, OmittedProps> {
  id: string
  label: ReactNode
}

export const Tab: FunctionComponent<TabProps> = () => {
  return null
}
