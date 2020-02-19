import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { FacebookPadded } from '@datapunt/asc-assets'
import Header from './Header'
import Typography from '../Typography'
import AmsterdamLogo from '../AmsterdamLogo'
import Icon from '../Icon'
import { LogoProps } from './HeaderLogoText'
import { themeSpacing } from '../../utils'

/**
 * This is an example of a Custom facebook logo
 * that can be added to the Header
 */
const CustomLogoStyle = styled.a`
  margin-right: ${themeSpacing(3)};
  border: 1px dotted black;
`
const CustomLogo: React.FC<LogoProps> = props => (
  <CustomLogoStyle {...props}>
    <Icon padding={4} size={48}>
      <FacebookPadded />
    </Icon>
  </CustomLogoStyle>
)

storiesOf('Composed/Header', module)
  .add('Header short', () => (
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
      logo={AmsterdamLogo}
    />
  ))
  .add('Header short, full width', () => (
    <Header
      tall={false}
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth
      logo={AmsterdamLogo}
    />
  ))
  .add('Header tall', () => (
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
      logo={AmsterdamLogo}
    />
  ))
  .add('Header tall with header content', () => (
    <Header
      tall
      title="Data en informatie"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
      logo={AmsterdamLogo}
      navigation={
        <Typography as="span">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          debitis, dicta incidunt maxime necessitatibus voluptatibus.
        </Typography>
      }
    />
  ))
  .add('Header tall with no logo', () => (
    <Header
      tall
      title="Site without logo"
      homeLink="http://data.amsterdam.nl"
      fullWidth={false}
    />
  ))
  .add('Header tall with custom logo', () => (
    <Header
      tall
      title="Facebook custom header"
      homeLink="http://www.facebook.com"
      fullWidth={false}
      logo={CustomLogo}
    />
  ))
