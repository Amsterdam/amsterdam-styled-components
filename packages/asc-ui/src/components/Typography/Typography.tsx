import React from 'react'
import { TypographyStyled } from '@datapunt/asc-core'

type Props = {
  element?: TypographyStyled.Variant,
}

const Typography: React.FC<Props> = ({ children, element }) => {
  const TypographyElement = TypographyStyled.default(element || 'p')
  return (
    <TypographyElement>{children}</TypographyElement>
  )
}

export default Typography
