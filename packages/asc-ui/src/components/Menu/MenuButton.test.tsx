import * as React from 'react'
import { shallow } from 'enzyme'
import MenuButton from './MenuButton'
import MenuStyle from '../../styles/components/MenuStyle'
import { Icon } from '../..'

describe('MenuButton', () => {
  const label = 'This is a button'
  const mockIcon = { mockIcon: 'mockIcon' }
  const component = shallow(<MenuButton icon={mockIcon} label={label} />)

  it('should render the button with a label', () => {
    expect(
      component.find(MenuStyle.MenuItemLabelStyle).props().children,
    ).toEqual(label)
  })

  it('should render the button with an icon', () => {
    expect(component.find(Icon).props().children).toEqual(mockIcon)
  })
})
