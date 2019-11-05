import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FilterTag from './FilterTag'

interface FilterTagElement {
  id: number
  labelText: string
  ref: React.MutableRefObject<null>
}

storiesOf('Atoms/FilterTag', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
  ))
  .add('default', () => {
    const defaultFilterTagElements: FilterTagElement[] = [
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

    const [filterTagElements, setFilterTagElements] = React.useState(
      defaultFilterTagElements,
    )

    const filterTagHandleClick = (nr: number): void =>
      setFilterTagElements(
        filterTagElements &&
          filterTagElements.filter(el => {
            if (el.id !== nr) {
              return el
            }
            return undefined
          }),
      )

    return (
      <>
        {filterTagElements &&
          filterTagElements.map(element => (
            <FilterTag
              forwardRef={element.ref}
              onClick={() => filterTagHandleClick(element.id)}
              key={`filterTag${element.id}`}
            >
              {element.labelText}
            </FilterTag>
          ))}
      </>
    )
  })
