import * as React from 'react'
import { action } from '@storybook/addon-actions'
import MenuBar, { MenuBarItem } from './MenuBar'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

jest.useFakeTimers()

describe('MenuBar', () => {
  let component: Cheerio

  beforeEach(() => {
    component = renderWithTheme(
      <MenuBar>
        <MenuBarItem label="Inhoud" onClick={action('click')} />
        <MenuBarItem label="Over" onClick={action('click')} />
      </MenuBar>,
    )
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })
})
