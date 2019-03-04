import React from 'react'
import { AscCore } from '@datapunt/asc-core'

type Props = {
  element?: AscCore.Typography.Variant,
}

const Typography: React.FC<Props> = ({ children, element }) => {
  const TypographyElement = AscCore.Typography.default(element || 'p')
  return (
    <TypographyElement>{children}</TypographyElement>
  )
}

export default Typography
