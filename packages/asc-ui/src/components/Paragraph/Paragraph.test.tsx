import React from 'react'
import Paragraph from './Paragraph'
import { renderWithTheme } from '../../utils/withTheme'

describe('Paragraph', () => {
  it('should render', () => {
    const component = renderWithTheme(<Paragraph>Foo</Paragraph>)

    expect(component).toMatchSnapshot()
  })
})
