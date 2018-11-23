import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
  root: {
    appearance: 'none',
    boxShadow: 'inset 0 0 0 1px #767676',
    fontSize: '1rem',
    border: 0,
    borderRadius: 0,
    boxSizing: 'border-box',
    padding: '11px 10px',
    width: '100%',
  },
  errorState: {
    boxShadow: 'inset 0 0 0 1px #ff0000',
  },
}

const Input = ({ classes: { root, errorState }, error }) => (
  <input
    type={'text'}
    className={classNames(
      root,
      {
        [errorState]: error,
      },
    )}
  />
)

Input.defaultProps = {
  error: false,
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.bool,
}

export default injectSheet(styles)(Input)
