import { FunctionComponent, useCallback, HTMLAttributes } from 'react'
import DatepickerStyle, { Props } from './DatepickerStyle'
import Month from './Month'

// @TODO add text input element
// @TODO add support date pushing down to Month

const Datepicker: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({
  value,
}) => {
  console.log('Datepicker', value)
  // const newDate = '12-03-2021'
  const onClickDay = useCallback((thisDate: string) => {
    console.log('onClickDay =====', thisDate)
  }, [])
  console.log('Datepicker', onClickDay)

  return (
    <DatepickerStyle>
      <Month onClickDay={onClickDay} />
    </DatepickerStyle>
  )
}

export default Datepicker
