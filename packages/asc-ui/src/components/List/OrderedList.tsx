import React, { FunctionComponent } from 'react'
import OrderedListStyle from './OrderedListStyle'

const OrderedList: FunctionComponent<
  React.HTMLAttributes<HTMLUListElement>
> = ({ children, ...otherProps }) => {
  return <OrderedListStyle {...otherProps}>{children}</OrderedListStyle>
}

export default OrderedList
