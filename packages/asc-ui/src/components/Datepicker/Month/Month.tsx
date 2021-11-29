import type { FunctionComponent, MouseEvent, HTMLAttributes } from 'react'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from '@amsterdam/asc-assets'
import Icon from '../../Icon'
import type { Props, DayProps } from './MonthStyle'
import MonthStyle, {
  Wrapper,
  Weekday,
  Header,
  NextPrev,
  Title,
} from './MonthStyle'
import Day from './Day'
import { weekDays, months, daysInMonth } from '../../shared/constants'

const Month: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({
  date,
  open,
  onSelectDay,
  ...otherProps
}) => {
  const [firstDay, setFirstDay] = useState<Date>(new Date())
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [allDays, setAllDays] = useState<Array<DayProps>>([])

  useEffect(() => {
    if (date && date.length === 10) {
      const parts = date.split('-')
      setFirstDay(new Date(`${parts[2]}/${parts[1]}/1`))
    } else {
      setFirstDay(
        new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/1`),
      )
    }
  }, [date, setMonth, setYear])

  const onPrevious = useCallback(
    (e: MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      e.preventDefault()
      const newYear = year - (month === 1 ? 1 : 0)
      const newMonth = month - 1
      setFirstDay(new Date(`${newYear}/${month === 1 ? 12 : newMonth}/1`))
    },
    [month, year, setFirstDay],
  )

  const onNext = useCallback(
    (e: MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      e.preventDefault()
      const newYear = year + (month === 12 ? 1 : 0)
      const newMonth = month + 1
      setFirstDay(new Date(`${newYear}/${month === 12 ? 1 : newMonth}/1`))
    },
    [month, year, setFirstDay],
  )

  const numberOfDays = useCallback(
    (thisMonth: number) => {
      if (thisMonth === 1 && year % 4 === 0) {
        return 29
      }
      return daysInMonth[thisMonth]
    },
    [year],
  )

  const formatDate = useCallback(
    (day: number, thisMonth: number, thisYear: number) => {
      const newday = `${day}`.length === 1 ? `0${day}` : day
      const newMonth = `${thisMonth}`.length === 1 ? `0${thisMonth}` : thisMonth

      return `${newday}-${newMonth}-${thisYear}`
    },
    [],
  )

  const renderDays = useCallback(
    (thisMonth: number, thisYear: number) => {
      const days: Array<DayProps> = []

      // first dates outside current month
      let dayBefore = numberOfDays(thisMonth === 1 ? 11 : thisMonth - 2)
      const monthBefore = thisMonth === 1 ? 12 : thisMonth - 1
      const yearBefore = thisMonth === 1 ? thisYear - 1 : thisYear
      for (let i = 0; i < firstDay.getDay() - 1; i += 1) {
        days.unshift({
          number: dayBefore,
          date: formatDate(dayBefore, monthBefore, yearBefore),
          outside: true,
          selected: false,
          today: false,
        })
        dayBefore -= 1
      }

      const today = new Date()

      // add all days of the current month
      for (let i = 1; i <= numberOfDays(thisMonth - 1); i += 1) {
        const thisDate = formatDate(i, thisMonth, thisYear)
        days.push({
          number: i,
          date: thisDate,
          outside: false,
          selected: thisDate === date,
          today:
            today.getDate() === i &&
            today.getMonth() === thisMonth - 1 &&
            today.getFullYear() === thisYear,
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
            date: formatDate(
              i,
              thisMonth === 12 ? 1 : thisMonth + 1,
              thisMonth === 12 ? thisYear + 1 : thisYear,
            ),
            selected: false,
            outside: true,
            today: false,
          })
        }
      }

      setAllDays(days)
    },
    [date, firstDay, formatDate, numberOfDays],
  )

  useEffect(() => {
    setMonth(firstDay.getMonth() + 1)
    setYear(firstDay.getFullYear())
    renderDays(firstDay.getMonth() + 1, firstDay.getFullYear())
  }, [firstDay, renderDays, setMonth, setYear])

  return (
    <Wrapper {...otherProps}>
      {open && (
        <MonthStyle data-testid="month">
          <Header>
            <NextPrev
              href="/"
              variant="blank"
              data-testid="previous"
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
              data-testid="next"
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
            <Weekday key={day} data-testid="weekday">
              {day}
            </Weekday>
          ))}

          {allDays.map((day: DayProps) => (
            <Day
              data-testid="day"
              onSelectDay={onSelectDay}
              date={day.date}
              outside={day.outside}
              today={day.today}
              selected={day.selected}
              key={day.date}
            >
              {day.number}
            </Day>
          ))}
        </MonthStyle>
      )}
    </Wrapper>
  )
}

export default Month
