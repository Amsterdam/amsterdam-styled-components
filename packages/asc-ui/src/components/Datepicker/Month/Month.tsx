import { FunctionComponent, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'
import Icon from '../../Icon'
import MonthStyle, {
  Props,
  Weekday,
  Header,
  NextPrev,
  Title,
} from './MonthStyle'
import { weekDays, months } from '../../shared/constants'

const Month: FunctionComponent<Props> = ({ date }) => {
  const [firstDay, setFirstDay] = useState<any>(new Date())
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [year, setYear] = useState<number>(new Date().getFullYear())

  useEffect(() => {
    const parts = '14-03-2021'.split('-')
    setFirstDay(new Date(`${parts[2]}/${parts[1]}/01`))
    setMonth(firstDay.getMonth())
    setYear(firstDay.getFullYear())
  }, [])

  console.log('Month +++ === YO', month, year)

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
          {months[month]} {year}
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
