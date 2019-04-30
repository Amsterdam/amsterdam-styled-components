import * as React from 'react'
import MenuBar from './MenuBar'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('MenuBar', () => {
  let component: Cheerio

  beforeEach(() => {
    component = renderWithTheme(
      <MenuBar backgroundColor="red">MenuBar-content</MenuBar>,
    )
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
