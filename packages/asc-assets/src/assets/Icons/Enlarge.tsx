import * as React from 'react'

const SvgEnlarge = (props: any) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path
      fill="#000"
      d="M32 14H18V0h-4v14H0v4h14v14h4V18h14z"
      fillRule="evenodd"
    />
  </svg>
)

export default SvgEnlarge
