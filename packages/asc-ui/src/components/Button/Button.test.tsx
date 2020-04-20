import React from 'react'
import Button from './Button'
import { renderWithTheme } from '../../utils/withTheme'

describe('Button', () => {
  it('should render the button', () => {
    const component = renderWithTheme(<Button color="primary">Hello</Button>)

    expect(component).toMatchSnapshot()
  })
})
