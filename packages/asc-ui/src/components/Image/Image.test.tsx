import React from 'react'
import { shallow } from 'enzyme'
import Image from './Image'

describe('Image', () => {
  it('should render the data attribute for the polyfill', () => {
    const component = shallow(<Image src="source" square />)

    expect(component.props()['data-object-fit']).toBe('cover')
  })
})
