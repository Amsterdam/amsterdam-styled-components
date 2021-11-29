import type { FunctionComponent, HTMLAttributes, MouseEvent } from 'react'
import type { Props } from './DayStyle'
import DayStyle from './DayStyle'

const Day: FunctionComponent<Props & HTMLAttributes<HTMLSpanElement>> = ({
  children,
  date,
  outside,
  onSelectDay,
  ...otherProps
}) => {
  return (
    <DayStyle
      href="/"
      variant="blank"
      data-testid="day"
      onClick={(e: MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        e.preventDefault()
        if (onSelectDay) {
          onSelectDay(date)
        }
      }}
      outside={outside}
      date={date}
      {...otherProps}
    >
      {children}
    </DayStyle>
  )
}

export default Day
