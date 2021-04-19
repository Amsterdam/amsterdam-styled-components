import { FunctionComponent, useCallback } from 'react'
import DayStyle, { Props } from './DayStyle'

const Day: FunctionComponent<Props> = ({ number, date, outside }) => {
  const onClick = useCallback(() => {
    console.log('Day onClick', date)
  }, [])

  return (
    <DayStyle outside={outside} onClick={onClick}>
      {number}
    </DayStyle>
  )
}

export default Day
