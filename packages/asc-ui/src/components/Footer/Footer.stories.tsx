import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import Footer from './Footer'
import { Row, Column } from '../Grid'
import FooterContent from './FooterContent/FooterContent'
import {
  FooterLinkList,
  FooterLinkListItem,
  FooterBottomLinkList,
  FooterBottomLinkListItem,
} from './FooterLinkList'
import { color, breakpoint } from '../../utils'
import { FooterHeading, FooterToggle } from './FooterHeading'

const FooterRow = styled(Row)`
  padding-top: 32px;

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    padding-bottom: 32px;
  }

  background-color: ${color('tint', 'level5')};
`

const ColofonLinks: React.FC<{ indent?: boolean }> = ({ ...otherProps }) => (
  <FooterContent {...otherProps}>
    <FooterLinkList>
      <FooterLinkListItem href="/">Over deze site</FooterLinkListItem>
      <FooterLinkListItem href="/">Over OIS</FooterLinkListItem>
      <FooterLinkListItem href="/">Databeleid</FooterLinkListItem>
      <FooterLinkListItem href="/">Bronnen</FooterLinkListItem>
    </FooterLinkList>
  </FooterContent>
)

const FollowLinks: React.FC<{ indent?: boolean }> = ({ ...otherProps }) => (
  <FooterContent {...otherProps}>
    <FooterLinkList>
      <FooterLinkListItem href="/">Nieuwsbrief OIS</FooterLinkListItem>
      <FooterLinkListItem href="/">Twitter</FooterLinkListItem>
      <FooterLinkListItem href="/">Facerbook</FooterLinkListItem>
      <FooterLinkListItem href="/">Linkedin</FooterLinkListItem>
      <FooterLinkListItem href="/">GitHub</FooterLinkListItem>
    </FooterLinkList>
  </FooterContent>
)

const HelpLinks: React.FC<{ indent?: boolean }> = ({ ...otherProps }) => (
  <FooterContent {...otherProps}>
    <FooterHeading as="p">
      Heeft u een vraag en kunt u het antwoord niet vinden op deze website? Of
      heeft u bevindingen? Neem dan contact met ons op.
    </FooterHeading>
    <FooterLinkList>
      <FooterLinkListItem href="/">Veelgestelde vragen</FooterLinkListItem>
      <FooterLinkListItem href="/">Contact opnemen</FooterLinkListItem>
      <FooterLinkListItem href="/">Feedback geven</FooterLinkListItem>
      <FooterLinkListItem href="/">Uitleg gebruik</FooterLinkListItem>
    </FooterLinkList>
  </FooterContent>
)

storiesOf('Composed/Footer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('Footer implementation for dataportaal', () => (
    <Footer>
      <FooterRow>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterToggle title="Colofon" hideAt="tabletM">
              <ColofonLinks indent />
            </FooterToggle>
            <FooterContent showAt="tabletM">
              <FooterHeading>Colofon</FooterHeading>
              <ColofonLinks />
            </FooterContent>
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterToggle title="Volg de gemeente" hideAt="tabletM">
              <FollowLinks indent />
            </FooterToggle>
            <FooterContent showAt="tabletM">
              <FooterHeading>Volg de gemeente</FooterHeading>
              <FollowLinks />
            </FooterContent>
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterToggle title="Vragen?" hideAt="tabletM">
              <HelpLinks indent />
            </FooterToggle>
            <FooterContent showAt="tabletM">
              <FooterHeading>Vragen?</FooterHeading>
              <HelpLinks />
            </FooterContent>
          </FooterContent>
        </Column>
      </FooterRow>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 10, xLarge: 10 }}
        >
          <FooterBottomLinkList>
            <FooterBottomLinkListItem href="/">
              Privacy en cookies
            </FooterBottomLinkListItem>
            <FooterBottomLinkListItem href="/">
              Over deze site
            </FooterBottomLinkListItem>
          </FooterBottomLinkList>
        </Column>
      </Row>
    </Footer>
  ))
