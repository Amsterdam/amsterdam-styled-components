import * as React from 'react'
import { shallow } from 'enzyme'
import MenuButton from './MenuButton'
import MenuStyle from '../../styles/components/MenuStyle'
import { Icon } from '../..'

describe('MenuButton', () => {
  it('should render the button with a label', () => {
    const label = 'This is a button'

    const component = shallow(<MenuButton label={label} />)

    expect(
      component.find(MenuStyle.MenuItemLabelStyle).props().children,
    ).toEqual(label)
  })

  it('should render the button with an icon', () => {
    const mockIcon = { mockIcon: 'mockIcon' }

    const component = shallow(<MenuButton icon={mockIcon} />)

    expect(component.find(Icon).props().children).toEqual(mockIcon)
  })
})
