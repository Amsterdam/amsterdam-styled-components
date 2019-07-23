import * as React from 'react'

import CardStyle, { Props } from './CardStyle'
import Spinner from '../Spinner'

const Card: React.FC<Props> = ({ children, ...otherProps }) => (
  <CardStyle {...otherProps}>
    {otherProps.loading && <Spinner />}
    {children}
  </CardStyle>
)

export default Card
