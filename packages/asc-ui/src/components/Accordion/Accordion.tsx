import React, { useCallback, useEffect, useState } from 'react'
import { ChevronDown } from '@datapunt/asc-assets'
import { useUID } from 'react-uid'
import {
  AccordionButton,
  AccordionButtonContent,
  AccordionContent,
  Props as StyleProps,
} from './AccordionStyle'
import { Props as ButtonStyleProps } from '../Button/ButtonStyle'

type Props = {
  onToggle?: (open: boolean) => void
} & StyleProps

const Accordion: React.FC<
  Props &
    ButtonStyleProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, title, id: idProp, isOpen, onToggle, ...otherProps }) => {
  const uid = useUID()
  const id = idProp || uid
  const [open, setOpen] = useState(isOpen ?? false)

  useEffect(() => {
    if (isOpen !== undefined && isOpen !== open) {
      setOpen(isOpen)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleClick = useCallback(() => {
    const newOpenState = !open
    if (onToggle) {
      onToggle(newOpenState)
    }
    setOpen(newOpenState)
  }, [open, onToggle])

  return (
    <>
      <AccordionButton
        aria-controls={id}
        aria-expanded={open}
        id={`label-${id}`}
        type="button"
        variant="tertiary"
        iconRight={<ChevronDown />}
        isOpen={open}
        title={title}
        onClick={handleClick}
        {...otherProps}
      >
        <AccordionButtonContent>{title}</AccordionButtonContent>
      </AccordionButton>
      <AccordionContent isOpen={open} aria-labelledby={`label-${id}`} id={id}>
        {children}
      </AccordionContent>
    </>
  )
}

export default Accordion
