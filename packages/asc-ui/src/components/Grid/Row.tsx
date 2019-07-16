import React from 'react'
import RowStyle, { TypeProps } from './RowStyle'

const Row: React.FC<TypeProps> = ({ children, debug, ...props }) => (
  <RowStyle {...props} debug={debug}>
    {debug && (
      <span className="layout-label">
        <span />
      </span>
    )}
    {children}
  </RowStyle>
)

Row.defaultProps = {
  debug: false,
  debugColor: 'rgba(51,102,153,0.75)',
  hasMargin: true,
}

export default Row
