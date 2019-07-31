import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from './Footer'
import { Row, Column } from '../Grid'
import FooterContent from './FooterContent/FooterContent'
import {
  FooterLinkList,
  FooterLinkListItem,
  FooterBottomLinkList,
  FooterBottomLinkListItem,
} from './FooterLinkList'
import { FooterHeading, FooterToggle } from './FooterHeading'
import Paragraph from '../Paragraph'
import { FooterBottom } from './FooterBottom'
import FooterTop from './FooterTop/FooterTop'

const ColofonLinks: React.FC<{ indent?: boolean }> = () => (
  <>
    <FooterLinkList>
      <FooterLinkListItem href="/">Over deze site</FooterLinkListItem>
      <FooterLinkListItem href="/">Over OIS</FooterLinkListItem>
      <FooterLinkListItem href="/">Databeleid</FooterLinkListItem>
      <FooterLinkListItem href="/">Bronnen</FooterLinkListItem>
    </FooterLinkList>
  </>
)

const FollowLinks: React.FC<{ indent?: boolean }> = () => (
  <>
    <FooterLinkList>
      <FooterLinkListItem href="/">Nieuwsbrief OIS</FooterLinkListItem>
      <FooterLinkListItem href="/">Twitter</FooterLinkListItem>
      <FooterLinkListItem href="/">Facerbook</FooterLinkListItem>
      <FooterLinkListItem href="/">Linkedin</FooterLinkListItem>
      <FooterLinkListItem href="/">GitHub</FooterLinkListItem>
    </FooterLinkList>
  </>
)

const HelpLinks: React.FC<{ indent?: boolean }> = () => (
  <>
    <Paragraph gutterBottom={8}>
      Heeft u een vraag en kunt u het antwoord niet vinden op deze website? Of
      heeft u bevindingen? Neem dan contact met ons op.
    </Paragraph>
    <FooterLinkList>
      <FooterLinkListItem href="/">Veelgestelde vragen</FooterLinkListItem>
      <FooterLinkListItem href="/">Contact opnemen</FooterLinkListItem>
      <FooterLinkListItem href="/">Feedback geven</FooterLinkListItem>
      <FooterLinkListItem href="/">Uitleg gebruik</FooterLinkListItem>
    </FooterLinkList>
  </>
)

storiesOf('Composed/Footer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('implementation for dataportaal', () => (
    <Footer>
      <FooterTop>
        <Row>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
          >
            <>
              <FooterToggle title="Colofon" hideAt="tabletM">
                <FooterContent indent>
                  <ColofonLinks />
                </FooterContent>
              </FooterToggle>
              <FooterContent showAt="tabletM">
                <FooterHeading $as="h3">Colofon</FooterHeading>
                <ColofonLinks />
              </FooterContent>
            </>
          </Column>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
          >
            <>
              <FooterToggle title="Volg de gemeente" hideAt="tabletM">
                <FooterContent indent>
                  <FollowLinks />
                </FooterContent>
              </FooterToggle>
              <FooterContent showAt="tabletM">
                <FooterHeading $as="h3">Volg de gemeente</FooterHeading>
                <FollowLinks />
              </FooterContent>
            </>
          </Column>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
          >
            <>
              <FooterToggle title="Vragen?" hideAt="tabletM">
                <FooterContent indent>
                  <HelpLinks />
                </FooterContent>
              </FooterToggle>
              <FooterContent showAt="tabletM">
                <FooterHeading $as="h3" styleAs="h3">
                  Vragen?
                </FooterHeading>
                <HelpLinks />
              </FooterContent>
            </>
          </Column>
        </Row>
      </FooterTop>
      <FooterBottom>
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
      </FooterBottom>
    </Footer>
  ))
