import React from 'react'
import { Theme } from '@datapunt/asc-core'
import ColumnStyle from './ColumnStyle'

type Props = {
  children: React.ReactNode
  className?: string
  debug?: boolean
  debugColor?: string
  id?: string
  order?: Theme.TypeSpan
  push?: Theme.TypeSpan
  span: Theme.TypeSpan
  wrap?: boolean
}

type Context = {
  parentSpan?: Theme.TypeSpan
}

const ParentContext = React.createContext<Context>({})

const Column: React.FC<Props> = ({ children, span, ...props }) => {
  const { parentSpan } = React.useContext<Context>(ParentContext)

  return (
    <ParentContext.Provider value={{ parentSpan: span }}>
      <ColumnStyle parentSpan={parentSpan} span={span} {...props}>
        {children}
      </ColumnStyle>
    </ParentContext.Provider>
  )
}

Column.defaultProps = {
  debug: false,
  debugColor: 'rgba(51,102,153,0.5)',
  order: 0,
  push: 0,
  span: 1,
  wrap: false,
}

export default Column
