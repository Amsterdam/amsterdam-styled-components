import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  HTMLAttributes,
  useState,
} from 'react'
import DatepickerStyle, { Props, StyledInput } from './DatepickerStyle'
import Month from './Month'

// @TODO add icon to text input element
// @TODO add selected state
// @TODO add support date pushing down to Month
// @TODO add open close state in Datepicker

const Datepicker = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ value, ...otherProps }, externalRef) => {
  const [open, setOpen] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)
  console.log('Datepicker', value, open)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  // const newDate = '12-03-2021'
  const onClickDay = useCallback((date: string) => {
    if (ref.current) {
      ref.current.value = date
    }
    setOpen(false)
  }, [])

  return (
    <DatepickerStyle>
      <StyledInput ref={ref} {...otherProps} onClick={() => setOpen(true)} />
      <Month open={open} onClickDay={onClickDay} />
    </DatepickerStyle>
  )
})

export default Datepicker
