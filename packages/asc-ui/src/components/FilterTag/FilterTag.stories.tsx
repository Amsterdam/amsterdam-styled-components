import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FilterTag from './FilterTag'

storiesOf('Atoms/FilterTag', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <>
      <FilterTag>Verkeer en infrastructuur</FilterTag>
      <FilterTag>Multiselect</FilterTag>
      <FilterTag>Filters over meerdere regels</FilterTag>
    </>
  ))
