import { FunctionComponent, HTMLAttributes } from 'react'
import DayStyle, { Props } from './DayStyle'

const Day: FunctionComponent<Props & HTMLAttributes<HTMLSpanElement>> = ({
  number,
  date,
  outside,
}) => {
  // const onClick = useCallback(() => {
  //   console.log('Day onClick', date)
  // }, [date])

  return (
    <DayStyle outside={outside} date={date}>
      {number}
    </DayStyle>
  )
}

export default Day
