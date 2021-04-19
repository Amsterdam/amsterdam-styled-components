import { FunctionComponent, MouseEvent, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'
import Icon from '../../Icon'
import MonthStyle, {
  Props,
  DayProps,
  Weekday,
  Header,
  NextPrev,
  Title,
} from './MonthStyle'
import Day from './Day'
import { weekDays, months, daysInMonth } from '../../shared/constants'

// @TODO add support for click events of Month days
// @TODO use useCallback everywhnere

const Month: FunctionComponent<Props> = () => {
  const [firstDay, setFirstDay] = useState<Date>(new Date())
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [allDays, setAllDays] = useState<Array<DayProps>>([])

  useEffect(() => {
    // const parts = '15-04-2021'.split('-')
    setFirstDay(new Date(new Date(`2021/4/1`)))
    setMonth(firstDay.getMonth() + 1)
    setYear(firstDay.getFullYear())
    renderDays(firstDay.getMonth() + 1, firstDay.getFullYear())
  }, [setMonth, setYear])

  useEffect(() => {
    setMonth(firstDay.getMonth() + 1)
    setYear(firstDay.getFullYear())
    renderDays(firstDay.getMonth() + 1, firstDay.getFullYear())
  }, [firstDay, setMonth, setYear])

  const onPrevious = (e: MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.preventDefault()
    const newYear = year - (month === 1 ? 1 : 0)
    const newMonth = month - 1
    setFirstDay(new Date(`${newYear}/${month === 1 ? 12 : newMonth}/1`))
  }

  const onNext = (e: MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.preventDefault()
    const newYear = year + (month === 12 ? 1 : 0)
    const newMonth = month + 1
    setFirstDay(new Date(`${newYear}/${month === 12 ? 1 : newMonth}/1`))
  }

  const numberOfDays = (mnth: number) => {
    if (mnth === 1 && year % 4 === 0) {
      return 29
    }
    return daysInMonth[mnth]
  }

  const renderDays = (thisMonth: number, thisYear: number) => {
    const days: Array<DayProps> = []
    console.log('renderDays', thisMonth, thisYear)

    // first dates outside current month
    let dayBefore = numberOfDays(thisMonth === 1 ? 11 : thisMonth - 2)
    const monthBefore = thisMonth === 1 ? 12 : thisMonth - 1
    const yearBefore = thisMonth === 1 ? thisYear - 1 : thisYear
    for (let i = 0; i < firstDay.getDay() - 1; i += 1) {
      days.unshift({
        number: dayBefore,
        date: `${dayBefore}-${monthBefore}-${yearBefore}`,
        outside: true,
      })
      dayBefore -= 1
    }

    // add all days of the current month
    for (let i = 1; i <= numberOfDays(thisMonth - 1); i += 1) {
      days.push({
        number: i,
        date: `${i}-${thisMonth}-${thisYear}`,
        outside: false,
      })
    }

    // create outside days after current month
    let emptyDays = 35
    const count = days.length
    if (count === 28) {
      emptyDays = 0
    }
    if (count > 35) {
      emptyDays = 42
    }
    if (emptyDays) {
      for (let i = 1; i < emptyDays - count + 1; i += 1) {
        days.push({
          number: i,
          date: `${i}-${thisMonth === 12 ? 1 : thisMonth + 1}-${
            thisMonth === 12 ? thisYear + 1 : thisYear
          }`,
          outside: true,
        })
      }
    }
    console.log('renderDays days JAA', days)

    setAllDays(days)
  }

  return (
    <MonthStyle>
      <Header>
        <NextPrev
          href="/"
          variant="blank"
          onClick={(e: MouseEvent<HTMLParagraphElement, MouseEvent>) =>
            onPrevious(e)
          }
        >
          <Icon>
            <ChevronLeft />
          </Icon>
        </NextPrev>
        <Title>
          {months[month - 1]} {year}
        </Title>
        <NextPrev
          href="/"
          variant="blank"
          onClick={(e: MouseEvent<HTMLParagraphElement, MouseEvent>) =>
            onNext(e)
          }
        >
          <Icon>
            <ChevronRight />
          </Icon>
        </NextPrev>
      </Header>

      {weekDays.map((day) => (
        <Weekday key={day}>{day}</Weekday>
      ))}

      {allDays.map((day: DayProps) => (
        <>
          <Day outside={day.outside} key={day.date}>
            {day.number}
          </Day>
        </>
      ))}
    </MonthStyle>
  )
}

export default Month
