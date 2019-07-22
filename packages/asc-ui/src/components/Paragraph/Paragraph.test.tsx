import * as React from 'react'
import Paragraph from './Paragraph'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

describe('Paragraph', () => {
  it('should render', () => {
    const component = renderWithTheme(<Paragraph>Foo</Paragraph>)

    expect(component).toMatchSnapshot()
  })
})
