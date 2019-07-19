import * as React from 'react'
import Header from '../Header'
import { renderWithTheme } from '../../../utils/withTheme'
import Typography from '../../Typography'
import 'jest-styled-components'

const setup = (props = {}) =>
  renderWithTheme(
    <Header
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      {...props}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis,
        dicta incidunt maxime necessitatibus voluptatibus.
      </Typography>
    </Header>,
  )

describe('Header', () => {
  it('should render the short version', () => {
    const component = setup()
    expect(component).toMatchSnapshot()
  })

  it('should render the short version without the full width', () => {
    const component = setup({ fullWidth: false })
    expect(component).toMatchSnapshot()
  })

  it('should render the tall version', () => {
    const component = setup({ tall: true })
    expect(component).toMatchSnapshot()
  })

  it('should render the tall version without a title', () => {
    const component = setup({ tall: true, title: null })
    expect(component).toMatchSnapshot()
  })
})

describe('Header short with content', () => {})
