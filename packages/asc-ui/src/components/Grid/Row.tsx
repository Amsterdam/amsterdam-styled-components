import type { TypeProps } from './RowStyle'
import RowStyle from './RowStyle'

function Row({ children, debug, ...props }: TypeProps) {
  return (
    <RowStyle {...props} debug={debug}>
      {debug && (
        <span className="layout-label">
          <span />
        </span>
      )}
      {children}
    </RowStyle>
  )
}

Row.defaultProps = {
  debug: false,
  debugColor: 'rgba(51,102,153,0.75)',
  hasMargin: true,
}

export default Row
