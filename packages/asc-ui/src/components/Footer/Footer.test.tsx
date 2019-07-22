import * as React from 'react'
import Footer from './Footer'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

describe('Footer', () => {
  let component: Cheerio

  beforeEach(() => {
    component = renderWithTheme(<Footer>Footer</Footer>)
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
