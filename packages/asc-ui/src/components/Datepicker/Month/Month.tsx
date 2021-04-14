import { FunctionComponent } from 'react'
import MonthStyle, { Props, Weekday } from './MonthStyle'

const Month: FunctionComponent<Props> = ({ date }) => {
  const weekDays = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo']
  console.log('Month', date)

  return (
    <MonthStyle>
      {weekDays.map((day) => (
        <Weekday key={day}>{day}</Weekday>
      ))}
    </MonthStyle>
  )
}

export default Month
