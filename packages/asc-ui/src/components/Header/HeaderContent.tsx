import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import HeaderContentStyle from './HeaderContentStyle'

type HeaderContentProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const HeaderContent: FunctionComponent<HeaderContentProps> = ({
  children,
  ...otherProps
}) => <HeaderContentStyle {...otherProps}>{children}</HeaderContentStyle>

export default HeaderContent
