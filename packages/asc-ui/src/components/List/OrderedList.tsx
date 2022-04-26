import type { HTMLAttributes } from 'react'
import OrderedListStyle from './OrderedListStyle'

function OrderedList({
  children,
  ...otherProps
}: HTMLAttributes<HTMLUListElement>) {
  return <OrderedListStyle {...otherProps}>{children}</OrderedListStyle>
}

export default OrderedList
