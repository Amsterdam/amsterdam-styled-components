import { ChevronDown } from '@amsterdam/asc-assets'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useUID } from 'react-uid'
import type { ButtonStyleProps } from '../Button/ButtonStyle'
import type { ButtonContentProps, Props as StyleProps } from './AccordionStyle'
import {
  AccordionButton,
  AccordionButtonContent,
  AccordionContent,
} from './AccordionStyle'

type Props = {
  onToggle?: (open: boolean) => void
} & StyleProps &
  ButtonContentProps

function Accordion({
  children,
  title,
  id: idProp,
  isOpen,
  onToggle,
  noMultiline,
  ...otherProps
}: Props &
  ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) {
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
        <AccordionButtonContent noMultiline={noMultiline}>
          {title}
        </AccordionButtonContent>
      </AccordionButton>
      <AccordionContent isOpen={open} aria-labelledby={`label-${id}`} id={id}>
        {children}
      </AccordionContent>
    </>
  )
}

export default Accordion
