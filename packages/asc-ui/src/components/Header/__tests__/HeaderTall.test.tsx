import * as React from 'react'
import HeaderTall from '../HeaderTall'
import { renderWithTheme } from '../../../utils/withTheme'
import 'jest-styled-components'

describe('Header tall', () => {
  it('should render the Header tall', () => {
    const component = renderWithTheme(
      <HeaderTall
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        search={<div> Search </div>}
        menu={<div> M </div>}
      />,
    )

    expect(component).toMatchSnapshot()
  })
})
