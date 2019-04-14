import * as React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from '../../index'
import Button from './Button'
import ButtonBar from '../ButtonBar'
import 'jest-styled-components'

describe('Styled components', () => {
  it('should render buttons', () => {
    const component = mount(
      <ThemeProvider>
        <ButtonBar>
          <Button color="primary">Hello</Button>
          <Button color="secondary">World</Button>
        </ButtonBar>
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
