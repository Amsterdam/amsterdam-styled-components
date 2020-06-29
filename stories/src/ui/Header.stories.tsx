import React from 'react'
import { Alert } from '@datapunt/asc-assets'
import { Header, Typography, Icon } from '@datapunt/asc-ui'

export default {
  title: 'UI/Header',
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
    title="Site without logo, but why would you?"
    homeLink="http://data.amsterdam.nl"
    fullWidth={false}
    logo={undefined}
  />
)

export const HeaderTallWithCustomLogo = () => (
  <Header
    tall
    title="Header with custom logo."
    homeLink="/"
    fullWidth={false}
    logo={() => (
      <a href="/">
        <Icon padding={4} size={48}>
          <Alert />
        </Icon>
      </a>
    )}
  />
)
