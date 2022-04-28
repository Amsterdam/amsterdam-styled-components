import type { ReactNode } from 'react'
import { useRef } from 'react'
import useFocusWithArrows from '../../utils/hooks/useFocusWithArrows'

interface Props {
  children?: ReactNode
}

function AccordionWrapper({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { keyDown } = useFocusWithArrows(ref, true, true)
  return (
    <div role="button" tabIndex={-1} onKeyDown={keyDown} ref={ref}>
      {children}
    </div>
  )
}

export default AccordionWrapper
