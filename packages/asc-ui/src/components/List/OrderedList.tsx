import type { FunctionComponent, HTMLAttributes } from 'react'
import OrderedListStyle from './OrderedListStyle'

const OrderedList: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => {
  return <OrderedListStyle {...otherProps}>{children}</OrderedListStyle>
}

export default OrderedList
