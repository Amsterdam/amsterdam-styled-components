import React from 'react'
import styled from 'styled-components'
import { Facebook } from '@datapunt/asc-assets'
import Header from './Header'
import { renderWithTheme } from '../../utils/withTheme'
import Typography from '../Typography'
import AmsterdamLogo from '../AmsterdamLogo'
import Icon from '../Icon'

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
    const component = setup({ logo: AmsterdamLogo })
    expect(component).toMatchSnapshot()
  })

  it('should render the short version without the full width', () => {
    const component = setup({ fullWidth: false, logo: AmsterdamLogo })
    expect(component).toMatchSnapshot()
  })

  it('should render the tall version', () => {
    const component = setup({ tall: true, logo: AmsterdamLogo })
    expect(component).toMatchSnapshot()
  })

  it('should render the tall version without a title', () => {
    const component = setup({ tall: true, title: null, logo: AmsterdamLogo })
    expect(component).toMatchSnapshot()
  })

  it('should render the tall version without logo', () => {
    const component = setup({ tall: true })
    expect(component).toMatchSnapshot()
  })

  it('should render the tall version with a custom logo', () => {
    const CustomLogoStyle = styled.a``
    const CustomLogo: React.FC = (props) => (
      <CustomLogoStyle {...props}>
        <Icon padding={4} size={40}>
          <Facebook />
        </Icon>
      </CustomLogoStyle>
    )

    const component = setup({ tall: true, logo: CustomLogo })
    expect(component).toMatchSnapshot()
  })
})

describe('Header short with content', () => {})
