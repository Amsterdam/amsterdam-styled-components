import type { HTMLAttributes, MouseEvent } from 'react'
import type { Props } from './DayStyle'
import DayStyle from './DayStyle'

function Day({
  children,
  date,
  outside,
  onSelectDay,
  ...otherProps
}: Props & HTMLAttributes<HTMLSpanElement>) {
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
