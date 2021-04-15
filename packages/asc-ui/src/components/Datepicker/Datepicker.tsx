import { FunctionComponent } from 'react'
import DatepickerStyle, { Props } from './DatepickerStyle'
import Month from './Month'

const Datepicker: FunctionComponent<Props> = ({ value }) => {
  console.log('Datepicker', value)
  // const newDate = '12-03-2021'

  return (
    <DatepickerStyle>
      <Month />
    </DatepickerStyle>
  )
}

export default Datepicker
