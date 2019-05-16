import { shallow } from 'enzyme'
import * as React from 'react'
import TextField from './TextField'
import { ThemeProvider } from '../../index'
import 'jest-styled-components'

describe('<TextField />', () => {
  it('should render', () => {
    const mockFn = jest.fn()
    const component = shallow(
      <ThemeProvider>
        <TextField
          id="test-id"
          label="description"
          srOnly={false}
          value="test-value"
          onBlur={mockFn}
          onChange={mockFn}
          onFocus={mockFn}
          onKeyDown={mockFn}
        />
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
