import * as React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { mount } from 'enzyme'
import { ThemeProvider } from '../index'
import Button from '../components/Button'
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
