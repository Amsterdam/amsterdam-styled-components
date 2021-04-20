import { FunctionComponent, HTMLAttributes, MouseEvent } from 'react'
import DayStyle, { Props } from './DayStyle'

const Day: FunctionComponent<Props & HTMLAttributes<HTMLSpanElement>> = ({
  children,
  date,
  outside,
  onClickDay,
  ...otherProps
}) => {
  // const onClick = useCallback(
  //   (e: MouseEvent<HTMLParagraphElement, MouseEvent>, thisDate: string) => {
  //     e.preventDefault()
  //     console.log('Day onClick', thisDate)
  //   },
  //   [],
  // )

  return (
    <DayStyle
      href="/"
      variant="blank"
      onClick={(e: MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        e.preventDefault()
        onClickDay(date)
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
