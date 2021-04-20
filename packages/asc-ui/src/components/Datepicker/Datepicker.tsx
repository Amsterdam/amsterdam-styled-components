import { FunctionComponent, useCallback, HTMLAttributes, useState } from 'react'
import DatepickerStyle, { Props } from './DatepickerStyle'
import Input from '../Input'
import Month from './Month'

// @TODO add text input element
// @TODO add support date pushing down to Month
// @TODO add ref to Datepicker
// @TODO add open close state in Datepicker

const Datepicker: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({
  value,
  ...otherProps
}) => {
  const [open, setOpen] = useState<boolean>(false)
  console.log('Datepicker', value, open, setOpen)
  // const newDate = '12-03-2021'
  const onClickDay = useCallback((date: string) => {
    console.log('onClickDay =====', date)
    setOpen(false)
  }, [])

  return (
    <DatepickerStyle>
      {open ? 'true' : 'false'}
      <Input {...otherProps} onClick={() => setOpen(true)} />
      <Month open={open} onClickDay={onClickDay} />
    </DatepickerStyle>
  )
}

export default Datepicker
