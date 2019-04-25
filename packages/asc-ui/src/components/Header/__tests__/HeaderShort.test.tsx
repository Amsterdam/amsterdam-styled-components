import * as React from 'react'
import Header from '../Header'
import { shallowWithTheme } from '../../../utils/withTheme'
import 'jest-styled-components'

describe('Header short', () => {
  it('should render the Header short', () => {
    const component = shallowWithTheme(
      <Header
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
