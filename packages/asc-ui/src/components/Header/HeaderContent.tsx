import type { HTMLAttributes, ReactNode } from 'react'
import HeaderContentStyle from './HeaderContentStyle'

type HeaderContentProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

function HeaderContent({ children, ...otherProps }: HeaderContentProps) {
  return <HeaderContentStyle {...otherProps}>{children}</HeaderContentStyle>
}

export default HeaderContent
