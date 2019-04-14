import * as React from 'react'
import { mount } from 'enzyme'
import { AscCore } from '../../styles'
import { ThemeProvider } from '../../index'
import Button from './Button'
import 'jest-styled-components'

describe('Styled components', () => {
  it('should render buttons', () => {
    const component = mount(
      <ThemeProvider>
        <AscCore.ButtonBar>
          <Button color="primary">Hello</Button>
          <Button color="secondary">World</Button>
        </AscCore.ButtonBar>
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
