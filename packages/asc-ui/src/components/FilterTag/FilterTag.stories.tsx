import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FilterTag from './FilterTag'

interface FilterTagElement {
  id: number
  labelText: string
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
      },
      {
        id: 2,
        labelText: 'Multiselect',
      },
      {
        id: 3,
        labelText: 'Filters over meerdere regels',
      },
    ]

    const [filterTagElements, setFilterTagElements] = React.useState(
      defaultFilterTagElements,
    )

    const filterTagHandleClick = (nr: number): void =>
      setFilterTagElements(
        filterTagElements &&
          filterTagElements.filter(el => (el.id !== nr ? el : undefined)),
      )

    return (
      <>
        {filterTagElements &&
          filterTagElements.map(element => (
            <FilterTag
              onClick={() => filterTagHandleClick(element.id)}
              key={`filterTag${element.id}`}
            >
              {element.labelText}
            </FilterTag>
          ))}
      </>
    )
  })
