import * as React from 'react'
import { mount, shallow } from 'enzyme'
import MenuList from './MenuList'
import MenuItem from './MenuItem'
import { MenuContext } from './Menu'

describe('MenuList', () => {
  it('should clone the children with the correct index', () => {
    let mockContext = {
      expandedChild: true,
      expandedChildIndex: 2,
      nrOfChildrenChild: 4,
    }

    const component = mount(
      <MenuContext.Provider value={mockContext}>
        <MenuList open={true} id="id" onClose={jest.fn()}>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </MenuList>
      </MenuContext.Provider>,
    )

    expect(
      component
        .find(MenuItem)
        .at(2)
        .props().index,
    ).toBe(2)
    expect(
      component
        .find(MenuItem)
        .at(3)
        .props().index,
    ).toBe(7)
  })

  it('should handle the onBlur event', () => {
    const mockOnBlur = jest.fn()

    const component = shallow(
      <MenuList open={true} id="id" onClose={mockOnBlur} />,
    )

    component.simulate('blur')

    expect(mockOnBlur).toHaveBeenCalled()
  })
})
