import React, { useRef } from 'react'
import useFocusWithArrows from '../../utils/hooks/useFocusWithArrows'

const AccordionWrapper: React.FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { keyDown } = useFocusWithArrows(ref, true)
  return (
    <div role="button" tabIndex={-1} onKeyDown={keyDown} ref={ref}>
      {children}
    </div>
  )
}

export default AccordionWrapper
