import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Input from '../Input/Input'
import FormLabel from '../FormLabel/FormLabel'

const styles = {
  root: {},
  error: {
    borderColor: 'red',
    color: 'red',
  },
}

const TextField = ({ classes, error }) => {
  const states = { error }
  return (
    <div className={classes.default}>
      <FormLabel {...states}>Labeltje!</FormLabel>
      <Input {...states} />
    </div>
  )
}

FormLabel.defaultProps = {
  error: false,
}

FormLabel.propTypes = {
  error: PropTypes.bool,
}

export default injectSheet(styles)(TextField)
