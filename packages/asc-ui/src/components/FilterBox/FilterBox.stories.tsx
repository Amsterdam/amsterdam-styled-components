import React from 'react'
import FilterBox from './FilterBox'
import Checkbox from '../Checkbox/Checkbox'
import Label from '../Label'
import { FilterOption } from '../FilterOption'

export default {
  title: 'Experimental/Composed/FilterBox',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ maxWidth: '360px' }}>{storyFn()}</div>
    ),
  ],
}

export const WithLabelOptions = () => (
  <FilterBox label="Filters">
    <FilterOption active href="#">
      Optie 1
    </FilterOption>
    <FilterOption href="#">Optie 2</FilterOption>
    <FilterOption href="#">Optie 3</FilterOption>
    <FilterOption href="#">Optie 4</FilterOption>
  </FilterBox>
)

export const WithCheckboxes = () => (
  <FilterBox label="Filters">
    <Label
      align="flex-start"
      htmlFor="one"
      label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque earum eum"
    >
      <Checkbox id="one" variant="primary" />
    </Label>
    <Label htmlFor="two" label="Lorem ipsum dolor sit amet">
      <Checkbox checked id="two" variant="primary" />
    </Label>
    <Label htmlFor="three" label="Lorem ipsum dolor sit amet">
      <Checkbox id="three" variant="primary" />
    </Label>
  </FilterBox>
)
