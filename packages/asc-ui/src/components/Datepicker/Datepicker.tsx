import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  HTMLAttributes,
  useState,
} from 'react'
import { Calendar } from '@amsterdam/asc-assets'
import useClickOutside from '../../utils/hooks/useClickOutside'
import DatepickerStyle, {
  Props,
  StyledInput,
  StyledLabel,
} from './DatepickerStyle'
import Month from './Month'

const Datepicker = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, value, placeholder, ...otherProps }, externalRef) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  const wrapperRef = useRef(null)
  useClickOutside(wrapperRef, () => setOpen(false))

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  const onSelectDay = useCallback((date: string) => {
    if (ref.current) {
      ref.current.value = date
      setSelected(date)
    }
    setOpen(false)
  }, [])

  return (
    <DatepickerStyle data-testid="datepicker" ref={wrapperRef}>
      <StyledInput
        id={id}
        data-testid="input"
        autoComplete="off"
        ref={ref}
        placeholder={placeholder || 'dd-mm-jjjj'}
        defaultValue={value}
        onChange={(e) => setSelected(e.target.value)}
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
