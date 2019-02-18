import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import TextField from '../TextField'
import ThemeProvider from '../../../ThemeProvider'

describe.skip('<TextField />', () => {
  it('should render', () => {
    const component = mount(<ThemeProvider><TextField /></ThemeProvider>)
    expect(component).toMatchSnapshot()
  })
})
