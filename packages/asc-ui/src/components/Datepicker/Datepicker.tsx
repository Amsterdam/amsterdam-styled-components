import { FunctionComponent } from 'react'
import DatepickerStyle, { Props } from './DatepickerStyle'
import Month from './Month'

const Datepicker: FunctionComponent<Props> = ({ value }) => {
  console.log('Datepicker')
  const newDate = '14-04-2021'

  return (
    <DatepickerStyle>
      <Month date={value || newDate} />
    </DatepickerStyle>
  )
}

export default Datepicker
