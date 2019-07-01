import React from 'react'
import { Color } from 'csstype'
import ColumnStyle from '../../styles/components/ColumnStyle'
import { Theme } from '../../styles'

type Props = {
  children: React.ReactNode
  debug?: boolean
  debugColor?: Color
  id?: keyof Theme.GridInterface
  order?: number
  push?: Theme.TypeSpan
  span: Theme.TypeSpan
}

type Context = {
  parentSpan?: Theme.TypeSpan
}

const ParentContext = React.createContext<Context>({})

const Column: React.FC<Props> = ({ children, span, id, ...props }) => {
  const { parentSpan } = React.useContext(ParentContext)

  return (
    <ColumnStyle parentSpan={parentSpan} span={span} id={id} {...props}>
      {children}
    </ColumnStyle>
  )
}

Column.defaultProps = {
  debug: false,
  debugColor: 'rgba(51,102,153,1)',
  order: 0,
  push: 0,
  span: 1,
}

export default Column
