import React, { useCallback, useEffect, useState } from 'react'
import { ChevronDown } from '@datapunt/asc-assets'
import { useUID } from 'react-uid'
import AccordionStyle, {
  AccordionButton,
  AccordionButtonContent,
  AccordionContent,
  Props as StyleProps,
} from './AccordionStyle'

type Props = {
  onToggle?: (open: boolean) => void
} & StyleProps

const Accordion: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  title,
  id: idProp,
  open: openProp,
  onToggle,
  ...otherProps
}) => {
  const uid = useUID()
  const id = idProp || uid
  const [open, setOpen] = useState(openProp ?? false)

  useEffect(() => {
    if (openProp !== undefined && openProp !== open) {
      setOpen(openProp)
    }
  }, [openProp])

  const handleClick = useCallback(() => {
    const newOpenState = !open
    if (onToggle) {
      onToggle(newOpenState)
    }
    setOpen(newOpenState)
  }, [open, onToggle])

  return (
    <AccordionStyle {...otherProps} open={open}>
      <AccordionButton
        aria-controls={id}
        aria-expanded={open}
        id={`label-${id}`}
        type="button"
        variant="tertiary"
        iconRight={<ChevronDown />}
        open={open}
        title={title}
        onClick={handleClick}
      >
        <AccordionButtonContent>{title}</AccordionButtonContent>
      </AccordionButton>
      <AccordionContent open={open} aria-labelledby={`label-${id}`} id={id}>
        {children}
      </AccordionContent>
    </AccordionStyle>
  )
}

export default Accordion
