import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import 'jest-styled-components'
import TopBar from './TopBar'

jest.useFakeTimers()

describe('TopBar', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(
      <TopBar backgroundColor="red">topbar-content</TopBar>,
    ).dive()
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
