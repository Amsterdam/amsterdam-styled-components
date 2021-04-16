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

// @TODO add support for schrikkeljaar
// @TODO add numbers of prev month

const Month: FunctionComponent<Props> = ({ date }) => {
  const [firstDay, setFirstDay] = useState<any>(new Date())
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [allDays, setAllDays] = useState<any>([])

  useEffect(() => {
    // const parts = '15-04-2021'.split('-')
    setFirstDay(new Date(new Date(`2021/4/1`)))
    setMonth(firstDay.getMonth() + 1)
    setYear(firstDay.getFullYear())
    renderDays()
  }, [])

  useEffect(() => {
    setMonth(firstDay.getMonth() + 1)
    setYear(firstDay.getFullYear())
    renderDays()
  }, [firstDay])

  const onPrevious = (e: any) => {
    e.preventDefault()
    const newMonth = month - 1
    console.log('onPrevious', newMonth, new Date(`${year}/${newMonth}/1`))
    setFirstDay(new Date(`${year}/${newMonth}/1`))
    // setMonth(newMonth)
    // renderDays()
  }

  const onNext = (e: any) => {
    e.preventDefault()
    const newMonth = month + 1
    console.log('onNext', newMonth, new Date(`${year}/${newMonth}/1`))
    setFirstDay(new Date(`${year}/${newMonth}/1`))
    // setMonth(newMonth)
    // renderDays()
  }

  const renderDays = () => {
    const days: any = []
    console.log('firstDay', firstDay)

    for (let i = 0; i < firstDay.getDay() - 1; i++) {
      days.push({ number: '*', key: days.length })
    }

    for (let i = 1; i <= daysInMonth[month - 1]; i++) {
      days.push({ number: i, key: days.length })
    }

    const count = days.length
    if (count !== 28) {
      for (let i = 1; i < 35 - count + 1; i++) {
        days.push({ number: i, key: days.length })
      }
    }
    console.log('renderDays', firstDay.getDay())

    setAllDays(days)
  }

  console.log('Month ', month, year, firstDay)

  return (
    <MonthStyle>
      <Header>
        <NextPrev href="/" variant="blank" onClick={(e: any) => onPrevious(e)}>
          <Icon>
            <ChevronLeft />
          </Icon>
        </NextPrev>
        <Title>
          {months[month - 1]} {year}
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
