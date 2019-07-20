import * as React from 'react'
import FooterContent from './FooterContent'
import { renderWithTheme } from '../../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('FooterContent', () => {
  let component: Cheerio

  beforeEach(() => {
    component = renderWithTheme(<FooterContent>FooterContent</FooterContent>)
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
