import * as React from 'react'
import FilterTag from './FilterTag'

type FilterTagElement = {
  id: number
  labelText: string
}

export default {
  title: 'Atoms/FilterTag',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultState = () => {
  const [filterTagElements, setFilterTagElements] = React.useState<
    FilterTagElement[]
  >([
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
  ])

  const filterTagHandleClick = (id: number): void =>
    setFilterTagElements(
      filterTagElements && filterTagElements.filter(el => el.id !== id),
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
}
