import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'

import { FunctionComponent, useState, useEffect } from 'react'
import Icon from '../../Icon'

import MonthStyle, {
  Props,
  Weekday,
  Header,
  NextPrev,
  Title,
} from './MonthStyle'

const weekDays = ['ma', 'di', 'woe', 'do', 'vrij', 'za', 'zo']
const months = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december',
]

const Month: FunctionComponent<Props> = ({ date }) => {
  const [dateObject, setDate] = useState<any>(new Date())

  useEffect(() => {
    if (date) {
      const parts = date.split('-')
      setDate(new Date(`${parts[2]}/${parts[1]}/${parts[0]}`))
    }
  }, [date])
  console.log('Month', date, months[dateObject.getMonth()])

  return (
    <MonthStyle>
      <Header>
        <NextPrev
          href="/"
          variant="blank"
          onClick={(e: any) => {
            e.preventDefault()
            console.log('previous month')
          }}
        >
          <Icon>
            <ChevronLeft />
          </Icon>
        </NextPrev>
        <Title>
          {months[dateObject.getMonth()]} {dateObject.getFullYear()}
        </Title>
        <NextPrev
          href="/"
          variant="blank"
          onClick={(e: any) => {
            e.preventDefault()
            console.log('next month')
          }}
        >
          <Icon>
            <ChevronRight />
          </Icon>
        </NextPrev>
      </Header>

      {weekDays.map((day) => (
        <Weekday key={day}>{day}</Weekday>
      ))}
    </MonthStyle>
  )
}

export default Month
