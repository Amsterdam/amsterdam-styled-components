import * as React from 'react'
import Header from '../Header'
import { renderWithTheme } from '../../../utils/withTheme'
import 'jest-styled-components'
import HeaderSearch from '../HeaderSearch'
import CenteredElement from '../../../internals/CenteredElement/CenteredElement'
import HeaderMenu from '../HeaderMenu'

describe('Header short', () => {
  it('should render the Header short', () => {
    const component = renderWithTheme(
      <Header
        tall={false}
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        fullWidth
      >
        <HeaderSearch>Search</HeaderSearch>
        <HeaderMenu>
          <CenteredElement> M </CenteredElement>
        </HeaderMenu>
      </Header>,
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Header short with content', () => {
  it('should render the Header short', () => {
    const component = renderWithTheme(
      <Header
        tall={false}
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        fullWidth={false}
      >
        <HeaderSearch>
          <CenteredElement> Search </CenteredElement>
        </HeaderSearch>
        <HeaderMenu>
          <CenteredElement> M </CenteredElement>
        </HeaderMenu>
      </Header>,
    )
    expect(component).toMatchSnapshot()
  })
})
