import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MenuBar, { MenuBarItem } from './MenuBar'
import { ThemeProvider } from '../../index'

const MenuBarStory: React.FC<{}> = () => (
  <ThemeProvider>
      <MenuBar>
        <MenuBarItem label="MenuItem1" onClick={action('click on MenuItem1')} />
        <MenuBarItem label="MenuItem2" onClick={action('click on MenuItem2')} />
      </MenuBar>
  </ThemeProvider>
)

storiesOf('Atoms/MenuBar', module).add('default state', () => <MenuBarStory />)
