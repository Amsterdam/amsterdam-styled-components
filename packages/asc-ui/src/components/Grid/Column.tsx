import type { ReactNode } from 'react'
import { createContext, useContext, useMemo } from 'react'
import type { TypeProps as ColumnStyleProps } from './ColumnStyle'
import ColumnStyle from './ColumnStyle'
import type { Theme } from '../../types'

type Props = {
  children: ReactNode
  className?: string
  debug?: boolean
  debugColor?: string
  id?: string
  order?: Theme.TypeSpan
  push?: Theme.TypeSpan
  span: Theme.TypeSpan
  wrap?: boolean
} & ColumnStyleProps

interface Context {
  parentSpan?: Theme.TypeSpan
}

const ParentContext = createContext<Context>({})

function Column({ children, span, ...props }: Props) {
  const { parentSpan } = useContext<Context>(ParentContext)

  const value = useMemo(() => ({ parentSpan: span }), [span])

  return (
    <ParentContext.Provider value={value}>
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
