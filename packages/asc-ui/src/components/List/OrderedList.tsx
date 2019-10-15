import React from 'react'
import OrderedListStyle from './OrderedListStyle'

const OrderedList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => {
  return <OrderedListStyle {...otherProps}>{children}</OrderedListStyle>
}

export default OrderedList
