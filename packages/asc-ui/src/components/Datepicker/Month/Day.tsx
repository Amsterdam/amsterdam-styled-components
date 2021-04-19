import {
  FunctionComponent,
  // MouseEvent,
  HTMLAttributes,
  // useCallback,
} from 'react'
import DayStyle, { Props } from './DayStyle'

const Day: FunctionComponent<Props & HTMLAttributes<HTMLSpanElement>> = ({
  number,
  date,
  outside,
  ...otherProps
}) => {
  // const onClick = useCallback(
  //   (e: MouseEvent<HTMLSpanElement, MouseEvent>, thisDate: string) => {
  //     console.log('Day onClick', thisDate)
  //   },
  //   [],
  // )

  // onClick={(e: MouseEvent<HTMLSpanElement, MouseEvent>) => onClick(e, date)}
  return (
    <DayStyle outside={outside} date={date} {...otherProps}>
      {number}
    </DayStyle>
  )
}

export default Day
