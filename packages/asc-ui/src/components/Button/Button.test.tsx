import * as React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from '../../index'
import Button from './Button'
import ButtonBar from '../ButtonBar'
import 'jest-styled-components'

describe('Styled components', () => {
  it('should render buttons', () => {
    const component = shallow(
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
