import React from 'react'
import { ContainerStyle, ContainerWrapperStyle, Props } from './ContainerStyle'

const Container: React.FC<Props> = ({ beamColor, children }) => (
  <ContainerWrapperStyle>
    <ContainerStyle beamColor={beamColor}>{children}</ContainerStyle>
  </ContainerWrapperStyle>
)

export default Container
