import { FunctionComponent, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'
import Icon from '../../Icon'
import MonthStyle, {
  Props,
  Weekday,
  Header,
  NextPrev,
  Title,
  Day,
} from './MonthStyle'
import { weekDays, months, daysInMonth } from '../../shared/constants'

const Month: FunctionComponent<Props> = () => {
  const [firstDay, setFirstDay] = useState<any>(new Date())
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [allDays, setAllDays] = useState<any>([])

  useEffect(() => {
    const parts = '14-03-2021'.split('-')
    setFirstDay(new Date(`${parts[2]}/${parts[1]}/01`))
    setMonth(firstDay.getMonth())
    setYear(firstDay.getFullYear())
    renderDays()
  }, [])

  const renderDays = () => {
    const days: any = []

    // @TODO  added support for schrikkeljaar

    for (let i = 0; i < firstDay.getDay() - 1; i++) {
      days.push({ number: '*', key: days.length })
    }

    for (let i = 1; i <= daysInMonth[month]; i++) {
      days.push({ number: i, key: days.length })
    }

    const count = days.length
    if (count !== 28) {
      for (let i = 1; i < 35 - count + 1; i++) {
        days.push({ number: i, key: days.length })
      }
    }
    console.log('renderDays', days)

    setAllDays(days)
  }

  const onPrevious = () => {
    console.log('onPrevious')
    e.preventDefault()
    setMonth(month - 1)
    renderDays()
  }

  const onNext = () => {
    console.log('onNext')
    e.preventDefault()
    setMonth(month + 1)
    renderDays()
  }

  console.log('Month ', allDays)

  return (
    <MonthStyle>
      <Header>
        <NextPrev href="/" variant="blank" onClick={(e: any) => onPrevious(e)}>
          <Icon>
            <ChevronLeft />
          </Icon>
        </NextPrev>
        <Title>
          {months[month]} {year}
        </Title>
        <NextPrev href="/" variant="blank" onClick={(e: any) => onNext(e)}>
          <Icon>
            <ChevronRight />
          </Icon>
        </NextPrev>
      </Header>

      {weekDays.map((day) => (
        <Weekday key={day}>{day}</Weekday>
      ))}
      {allDays.map((day: any) => (
        <Day key={day.key}>{day.number}</Day>
      ))}
    </MonthStyle>
  )
}

export default Month
