import * as React from 'react'

const SvgEllipsis = (props: any) => (
  <svg viewBox="0 0 16 16" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(-4 -4)">
      <path
        id="Ellipsis_svg__a"
        d="M18.375 13.256H15.83v-2.545h2.545v2.545zm-5.09 0h-2.546v-2.545h2.545v2.545zm-5.115 0H5.625v-2.545H8.17v2.545z"
      />
      <mask id="Ellipsis_svg__b" fill="#fff">
        <use xlinkHref="#Ellipsis_svg__a" />
      </mask>
      <g fill="#000" mask="url(#Ellipsis_svg__b)">
        <path d="M2.813 2.813h18v18h-18z" />
      </g>
    </g>
  </svg>
)

export default SvgEllipsis
