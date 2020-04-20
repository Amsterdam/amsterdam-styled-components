import React from 'react'
import { shallow } from 'enzyme'
import { Spinner as SpinnerIcon } from '@datapunt/asc-assets'

import Spinner from './Spinner'
import Icon from '../Icon'

describe('Spinner', () => {
  it('should render the Spinner', () => {
    const component = shallow(<Spinner />).dive()
    const icon = component.find(Icon).at(0)
    expect(component.at(0).exists()).toBeTruthy()

    expect(icon.props().color).toBe('default')

    expect(icon.props().size).toBe(20)

    expect(component.at(0).find(SpinnerIcon).exists()).toBeTruthy()
  })

  it('should set a size for the Spinner', () => {
    const component = shallow(<Spinner size={50} />).dive()

    expect(component.find(Icon).at(0).props().size).toBe(50)
  })

  it('should set a color for the Spinner', () => {
    const component = shallow(<Spinner color="secondary" />).dive()

    expect(component.find(Icon).at(0).props().color).toBe('secondary')
  })
})
