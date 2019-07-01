import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Column from './Column'


const ColumnStory: React.FC<{}> = () => (
  <Column debug span={{ large: 8, big: 6, medium: 5, small: 4 }}>
    <span>children go here</span>
  </Column>
)

storiesOf('Atoms/Column', module)
  .add('Column', () => <ColumnStory />)
