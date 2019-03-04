import * as React from 'react'
import { AscCore, Theme } from '@datapunt/asc-core'
import { mount } from 'enzyme'
import ThemeProvider from '../ThemeProvider'
import Button from '../components/Button'
import 'jest-styled-components'

describe('Styled components', () => {
  it('should render buttons', () => {
    const component = mount(
      <ThemeProvider>
        <AscCore.ButtonBar>
          <Button color={Theme.TypeLevel.primary}>Hello</Button>
          <Button color={Theme.TypeLevel.secondary}>World</Button>
        </AscCore.ButtonBar>
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
