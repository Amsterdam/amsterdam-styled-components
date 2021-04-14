import { FunctionComponent, HTMLAttributes } from 'react'
import DatepickerStyle from './DatepickerStyle'
import Month from './Month'

const Datepicker: FunctionComponent<HTMLAttributes<HTMLDivElement>> = () => (
  <DatepickerStyle>
    <Month />
  </DatepickerStyle>
)

export default Datepicker
