import type { HTMLAttributes } from 'react'
import type { Props } from './ContainerStyle'
import { ContainerStyle, ContainerWrapperStyle } from './ContainerStyle'

function Container({
  beamColor,
  maxWidth,
  children,
  ...otherProps
}: Props & HTMLAttributes<HTMLDivElement>) {
  return (
    <ContainerWrapperStyle>
      <ContainerStyle beamColor={beamColor} maxWidth={maxWidth} {...otherProps}>
        {children}
      </ContainerStyle>
    </ContainerWrapperStyle>
  )
}

export default Container
