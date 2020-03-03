import * as React from 'react'
import Heading from './Heading'
import { renderWithTheme } from '../../utils/withTheme'

describe('Heading', () => {
  it('should render', () => {
    const component = renderWithTheme(
      <>
        <Heading forwardedAs="h1">Foo</Heading>
        <Heading forwardedAs="h2">Foo</Heading>
        <Heading forwardedAs="h3">Foo</Heading>
        <Heading forwardedAs="h4">Foo</Heading>
      </>,
    )

    expect(component).toMatchSnapshot()
  })
})
