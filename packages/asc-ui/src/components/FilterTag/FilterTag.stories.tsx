import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FilterTag from './FilterTag'

const filterTagHandleClick = (nr: number) => {
  // eslint-disable-next-line no-console
  console.log(nr)
}

storiesOf('Atoms/FilterTag', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
  ))
  .add('default', () => {
    const myArray = [
      {
        id: 1,
        labelText: 'Verkeer en infrastructuur',
        ref: React.useRef(null),
      },
      {
        id: 2,
        labelText: 'Multiselect',
        ref: React.useRef(null),
      },
      {
        id: 3,
        labelText: 'Filters over meerdere regels',
        ref: React.useRef(null),
      },
    ]
    return (
      <>
        {myArray.map(element => (
          <FilterTag
            ref={element.ref}
            onClick={() => filterTagHandleClick(element.id)}
          >
            Verkeer en infrastructuur
          </FilterTag>
        ))}
      </>
    )
  })
