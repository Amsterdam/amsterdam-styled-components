import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FilterTag from './FilterTag'

const filterTagHandleClick = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  target.remove()
}

storiesOf('Atoms/FilterTag', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <>
      <FilterTag onClick={filterTagHandleClick}>
        Verkeer en infrastructuur
      </FilterTag>
      <FilterTag onClick={filterTagHandleClick}>Multiselect</FilterTag>
      <br />
      <FilterTag onClick={filterTagHandleClick}>
        Filters over meerdere regels
      </FilterTag>
    </>
  ))
