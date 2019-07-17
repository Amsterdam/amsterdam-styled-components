import * as React from 'react'
import Content from './Content'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('TopBar', () => {
  let component: Cheerio

  beforeEach(() => {
    component = renderWithTheme(<Content>tcontent</Content>)
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
