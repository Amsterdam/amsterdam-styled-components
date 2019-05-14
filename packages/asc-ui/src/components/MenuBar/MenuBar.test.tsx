import * as React from 'react'
import { shallow } from 'enzyme'
import MenuBar, { MenuBarItem } from './MenuBar'

describe('MenuBar', () => {
  const mockOnClick = jest.fn()
  const children = (
    <>
      <MenuBarItem label="Inhoud" onClick={mockOnClick} />
      <MenuBarItem label="Over" onClick={mockOnClick} />
    </>
  )
  const component = shallow(<MenuBar>{children}</MenuBar>)
  const menuBarItem = component.find(MenuBarItem)

  it('should render with the correct children', () => {
    expect(component.props().children).toBe(children)
  })

  it('should render with the correct label', () => {
    expect(menuBarItem.at(0).props().label).toBe('Inhoud')
    expect(menuBarItem.at(1).props().label).toBe('Over')
  })

  it('should handle the onclick event', () => {
    menuBarItem.at(0).simulate('click')

    expect(mockOnClick).toHaveBeenCalled()
  })
})
