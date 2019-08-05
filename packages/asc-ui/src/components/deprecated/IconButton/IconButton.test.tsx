import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import IconButton from './IconButton'
import 'jest-styled-components'

describe('IconButton', () => {
  const onClickMock = jest.fn()
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(
      <IconButton onClick={onClickMock}>icon-content</IconButton>,
    ).dive()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should render the IconButton', () => {
    expect(component).toMatchSnapshot()
  })

  it('should trigger onClick', () => {
    component.at(0).simulate('click')

    expect(onClickMock).toHaveBeenCalled()
  })
})
