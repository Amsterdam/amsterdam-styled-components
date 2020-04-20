import React from 'react'
import Blockquote from './Blockquote'
import { renderWithTheme } from '../../utils/withTheme'

describe('Blockquote', () => {
  it('should render', () => {
    const component = renderWithTheme(<Blockquote>Foo</Blockquote>)

    expect(component).toMatchSnapshot()
  })
})
