import React from 'react'
import RowStyle, { TypeProps } from './RowStyle'

const Container: React.FC<TypeProps> = ({ children, ...props }) => (
  <RowStyle {...props}>
      {props.debug && <span className='layout-label'><span /></span>}
      {children}
  </RowStyle>
)

Container.defaultProps = {
  className: '',
  debug: false,
  debugColor: 'rgba(51,102,153,0.75)',
  halign: 'space-between',
  hasMargin: true,
  valign: 'stretch',
}

export default Container
