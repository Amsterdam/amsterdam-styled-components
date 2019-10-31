import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FilterTag from './FilterTag'

storiesOf('Atoms/FilterTag', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
  ))
  .add('default onClick', () => (
    <>
      <FilterTag>Verkeer en infrastructuur</FilterTag>
      <FilterTag>Multiselect</FilterTag>
      <FilterTag>Filters over meerdere regels</FilterTag>
    </>
  ))
  .add('custom onClick', () => (
    <>
      <FilterTag onClick={() => {}}>Verkeer en infrastructuur alt</FilterTag>
      <FilterTag onClick={() => {}}>Multiselect alt</FilterTag>
      <FilterTag onClick={() => {}}>Filters over meerdere regels alt</FilterTag>
    </>
  ))
