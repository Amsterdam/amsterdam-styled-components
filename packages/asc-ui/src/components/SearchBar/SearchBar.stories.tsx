import * as React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import styled from '@datapunt/asc-core'
import SearchBar from './SearchBar'
import { svgFill } from '../../utils'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import SearchBarStyle from './SearchBarStyle'

import SearchBarMenu from './SearchBarMenu'
import SearchBarMenuStyle from './SearchBarMenuStyle'

const SearchBarStory: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBar
        placeholder="Enter the search text"
        onTextChanged={(text: string) => {
          setText(text)
          action(`text changed: ${searchText}`)
        }}
        onSearch={() => {
          action(`button clicked: ${searchText}`)
        }}
        text={searchText}
      />
      <p>
        <span>Searching for:</span>
        {searchText}
      </p>
    </>
  )
}

const ChangedSearchBarStyle = styled(SearchBarStyle)`
  align-content: flex-start;
  flex-direction: column;
  max-width: 600px;
  padding: 10px;

  & > ${IconButtonStyle} {
    margin-left: 0px;
    margin-top: 5px;
    padding: 10px;
    width: 100%;
    max-width: 600px;

    & svg {
      ${svgFill('tint', 'level4')};
    }
  }
`

const SearchBarStoryWithChangedStyle: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBar
        styledComponent={ChangedSearchBarStyle}
        onTextChanged={(text: string) => {
          setText(text)
          action(`text changed: ${searchText}`)
        }}
        onSearch={() => action(`button clicked: ${searchText}`)}
        text={searchText}
      />
      <p>
        <span>Searching for:</span>
        {searchText}
      </p>
    </>
  )
}

const ChangedSearchBarMenuStyle = styled(SearchBarMenuStyle)`
  & > ${IconButtonStyle} {
    & svg {
      ${svgFill('tint', 'level3')};
    }
  }
`

const ChangedSearchBarMenuStory: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBarMenu
        styledComponent={ChangedSearchBarMenuStyle}
        onTextChanged={(text: string) => {
          setText(text)
          action(`text changed: ${searchText}`)
        }}
        onSearch={() => action(`button clicked: ${searchText}`)}
        text={searchText}
      />
      <p>
        <span>Searching for:</span>
        {searchText}
      </p>
    </>
  )
}

const SearchBarMenuStory: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBarMenu
        placeholder="Enter the search text"
        onTextChanged={(text: string) => {
          setText(text)
          action(`text changed: ${searchText}`)
        }}
        onSearch={() => {
          action(`button clicked: ${searchText}`)
        }}
        text={searchText}
      />

      <p>
        <span>Searching for:</span>
        {searchText}
      </p>
    </>
  )
}

storiesOf('Composed/SearchBar', module)
  .add('default state', () => <SearchBarStory />)
  .add('with changed style', () => <SearchBarStoryWithChangedStyle />)
  .add('mobile with changed style', () => <ChangedSearchBarMenuStory />)
  .add('example searchbar menu', () => <SearchBarMenuStory />)
