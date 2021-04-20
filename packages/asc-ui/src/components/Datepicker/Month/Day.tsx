import { FunctionComponent, HTMLAttributes } from 'react'
import DayStyle, { Props } from './DayStyle'

const Day: FunctionComponent<Props & HTMLAttributes<HTMLSpanElement>> = ({
  children,
  date,
  outside,
  ...otherProps
}) => {
  // const onClick = useCallback(() => {
  //   console.log('Day onClick', date)
  // }, [date])

  return (
    <DayStyle outside={outside} date={date} {...otherProps}>
      {children}
    </DayStyle>
  )
}

export default Day
