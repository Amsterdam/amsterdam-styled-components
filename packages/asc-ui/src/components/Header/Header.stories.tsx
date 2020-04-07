import React from 'react'
import styled from '@datapunt/asc-core'
import { FacebookPadded } from '@datapunt/asc-assets'
import Header from './Header'
import Typography from '../Typography'
import Icon from '../Icon'
import { themeSpacing } from '../../utils'

/**
 * This is an example of a Custom facebook logo
 * that can be added to the Header
 */
const CustomLogoStyle = styled.a`
  margin-right: ${themeSpacing(3)};
  border: 1px dotted black;
`

export default {
  title: 'Experimental/Composed/Header',
}

export const HeaderShort = () => (
  <Header
    tall={false}
    title="Data en informatie"
    homeLink="http://data.amsterdam.nl"
    fullWidth={false}
  />
)

export const HeaderShortFullWidth = () => (
  <Header
    tall={false}
    title="Data en informatie"
    homeLink="http://data.amsterdam.nl"
    fullWidth
  />
)

HeaderShortFullWidth.story = {
  name: 'Header short, full width',
}

export const HeaderTall = () => (
  <Header
    tall
    title="Data en informatie"
    homeLink="http://data.amsterdam.nl"
    fullWidth={false}
  />
)

HeaderTall.story = {
  name: 'Header tall',
}

export const HeaderTallWithHeaderContent = () => (
  <Header
    tall
    title="Data en informatie"
    homeLink="http://data.amsterdam.nl"
    fullWidth={false}
    navigation={
      <Typography as="span">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis,
        dicta incidunt maxime necessitatibus voluptatibus.
      </Typography>
    }
  />
)

export const HeaderTallWithoutLogo = () => (
  <Header
    tall
    title="Site without logo"
    homeLink="http://data.amsterdam.nl"
    fullWidth={false}
  />
)

export const HeaderTallWithCustomLogo = () => (
  <Header
    tall
    title="Facebook custom header"
    homeLink="http://www.facebook.com"
    fullWidth={false}
    logo={() => (
      <CustomLogoStyle>
        <Icon padding={4} size={48}>
          <FacebookPadded />
        </Icon>
      </CustomLogoStyle>
    )}
  />
)
