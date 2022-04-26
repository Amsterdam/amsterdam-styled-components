import { useRef } from 'react'
import useFocusWithArrows from '../../utils/hooks/useFocusWithArrows'

function AccordionWrapper({ children }) {
  const ref = useRef<HTMLDivElement>(null)
  const { keyDown } = useFocusWithArrows(ref, true, true)
  return (
    <div role="button" tabIndex={-1} onKeyDown={keyDown} ref={ref}>
      {children}
    </div>
  )
}

export default AccordionWrapper
