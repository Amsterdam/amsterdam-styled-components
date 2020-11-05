import React, { FunctionComponent } from 'react'
import ColumnStyle, { TypeProps as ColumnStyleProps } from './ColumnStyle'
import { Theme } from '../../types'

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
} & ColumnStyleProps

type Context = {
  parentSpan?: Theme.TypeSpan
}

const ParentContext = React.createContext<Context>({})

const Column: FunctionComponent<Props> = ({ children, span, ...props }) => {
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
