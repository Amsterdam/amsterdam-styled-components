import { FunctionComponent, HTMLAttributes, MouseEvent } from 'react'
import DayStyle, { Props } from './DayStyle'

const Day: FunctionComponent<Props & HTMLAttributes<HTMLSpanElement>> = ({
  children,
  date,
  outside,
  onClickDay,
  ...otherProps
}) => {
  return (
    <DayStyle
      href="/"
      variant="blank"
      onClick={(e: MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        e.preventDefault()
        if (onClickDay) {
          onClickDay(date)
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
