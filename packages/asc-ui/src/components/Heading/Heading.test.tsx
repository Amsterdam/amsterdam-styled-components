import * as React from 'react'
import Heading from './Heading'
import { renderWithTheme } from '../../utils/withTheme'

describe('Heading', () => {
  it('should render', () => {
    const component = renderWithTheme(
      <>
        <Heading as="h1">Foo</Heading>
        <Heading as="h2">Foo</Heading>
        <Heading as="h3">Foo</Heading>
        <Heading as="h4">Foo</Heading>
      </>,
    )

    expect(component).toMatchSnapshot()
  })
})
