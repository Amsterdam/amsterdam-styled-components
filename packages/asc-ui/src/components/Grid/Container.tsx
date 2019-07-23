import React from 'react'
import { ContainerStyle, ContainerWrapperStyle, Props } from './ContainerStyle'

const Container: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  beamColor,
  children,
  ...otherProps
}) => (
  <ContainerWrapperStyle {...otherProps}>
    <ContainerStyle beamColor={beamColor}>{children}</ContainerStyle>
  </ContainerWrapperStyle>
)

export default Container
