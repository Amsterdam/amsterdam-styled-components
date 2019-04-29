import * as React from 'react'
import HeaderShort from '../HeaderShort'
import { renderWithTheme } from '../../../utils/withTheme'
import 'jest-styled-components'

describe('Header short', () => {
  it('should render the Header short', () => {
    const component = renderWithTheme(
      <HeaderShort
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        search={<div> Search </div>}
        menu={<div> M </div>}
        headerSize="short"
      />,
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Header short with content', () => {
  it('should render the Header short', () => {
    const component = renderWithTheme(
      <HeaderShort
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        search={<div> Search </div>}
        menu={<div> M </div>}
        headerSize="short-content"
      />,
    )
    expect(component).toMatchSnapshot()
  })
})
