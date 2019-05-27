import * as React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import styled from '@datapunt/asc-core'
import SearchBar, { SearchBarStyle, IconButtonStyle } from './SearchBar'
import { svgFill } from '../../utils'
import SearchBarMobile, { SearchBarMobileStyle } from './SearchBarMobile'

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

const ChangedSearchBarMobileStyle = styled(SearchBarMobileStyle)`
  /* align-content: flex-start;
  flex-direction: column;
  max-width: 600px;
  padding: 10px; */

  & > ${IconButtonStyle} {
    /* margin-left: 0px;
    margin-top: 5px;
    padding: 10px;
    width: 100%;
    max-width: 600px; */

    & svg {
      ${svgFill('tint', 'level1')};
    }
  }
`

const SearchBarMobileStory: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBarMobile
        styledComponent={ChangedSearchBarMobileStyle}
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

storiesOf('Composed/SearchBar', module)
  .add('default state', () => <SearchBarStory />)
  .add('with changed style', () => <SearchBarStoryWithChangedStyle />)
  .add('mobile with changed style', () => <SearchBarMobileStory />)
