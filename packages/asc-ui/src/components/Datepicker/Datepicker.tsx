import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  HTMLAttributes,
  useState,
} from 'react'
import { Calendar } from '@amsterdam/asc-assets'

import DatepickerStyle, {
  Props,
  StyledInput,
  StyledLabel,
} from './DatepickerStyle'
import Month from './Month'

const Datepicker = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, value, ...otherProps }, externalRef) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  const onSelectDay = useCallback((date: string) => {
    if (ref.current) {
      ref.current.value = date
      setSelected(date)
    }
    setOpen(false)
  }, [])

  return (
    <DatepickerStyle>
      <StyledInput
        id={id}
        autoComplete="off"
        ref={ref}
        defaultValue={value}
        {...otherProps}
        onClick={() => setOpen(true)}
      />
      <StyledLabel htmlFor={id}>
        <Calendar />
      </StyledLabel>
      <Month open={open} date={selected || value} onSelectDay={onSelectDay} />
    </DatepickerStyle>
  )
})

export default Datepicker
