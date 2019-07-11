import React from 'react'
import { Theme } from '@datapunt/asc-core'
import ColumnStyle from './ColumnStyle'

type Props = {
  children: React.ReactNode
  debug?: boolean
  debugColor?: string
  id?: keyof Theme.GridInterface
  order?: Theme.TypeSpan
  push?: Theme.TypeSpan
  span: Theme.TypeSpan
  wrap?: boolean
}

type Context = {
  parentSpan?: Theme.TypeSpan
}

const ParentContext = React.createContext<Context>({})

const Column: React.FC<Props> = ({ children, span, id, ...props }) => {
  const { parentSpan } = React.useContext<Context>(ParentContext)

  return (
    <ParentContext.Provider value={{ parentSpan: span }}>
      <ColumnStyle parentSpan={parentSpan} span={span} id={id} {...props}>
        {children}
      </ColumnStyle>
    </ParentContext.Provider>
  )
}

Column.defaultProps = {
  debug: false,
  debugColor: 'rgba(51,102,153,1)',
  order: 0,
  push: 0,
  span: 1,
  wrap: false,
}

export default Column
