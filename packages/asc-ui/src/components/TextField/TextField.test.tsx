import { shallow } from 'enzyme'
import * as React from 'react'
import TextField from './TextField'
import { ThemeProvider } from '../../index'
import 'jest-styled-components'

describe('<TextField />', () => {
  it('should render', () => {
    const component = shallow(
      <ThemeProvider>
        <TextField />
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
