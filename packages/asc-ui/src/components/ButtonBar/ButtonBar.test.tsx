import * as React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'
import ButtonBar from './ButtonBar'
import 'jest-styled-components'

describe('ButtonBar', () => {
  it('should render the buttons in the bar', () => {
    const component = shallow(
      <ButtonBar>
        <Button variant="primary">Hello</Button>
        <Button variant="secondary">World</Button>
      </ButtonBar>,
    ).dive()
    expect(component).toMatchSnapshot()
  })
})
