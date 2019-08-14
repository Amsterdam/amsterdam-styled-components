import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Column } from '../Grid'
import {
  Footer,
  FooterContent,
  FooterLinkList,
  FooterLinkListItem,
  FooterBottomLinkList,
  FooterBottomLinkListItem,
  FooterHeading,
  FooterToggle,
  FooterBottom,
  FooterTop,
} from '../../index'
import Paragraph from '../Paragraph'
import Link from '../Link'

const ColofonLinks: React.FC<{ indent?: boolean }> = () => (
  <FooterLinkList>
    <FooterLinkListItem>
      <Link href="/">Over deze site</Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/">Over OIS</Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/">Databeleid</Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/">Bronnen</Link>
    </FooterLinkListItem>
  </FooterLinkList>
)

const FollowLinks: React.FC<{ indent?: boolean }> = () => (
  <FooterLinkList>
    <FooterLinkListItem>
      <Link href="/">Nieuwsbrief OIS</Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/">Twitter</Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/">Facerbook</Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/">Linkedin</Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/">GitHub</Link>
    </FooterLinkListItem>
  </FooterLinkList>
)

const HelpLinks: React.FC<{ indent?: boolean }> = () => (
  <>
    <Paragraph gutterBottom={8}>
      Heeft u een vraag en kunt u het antwoord niet vinden op deze website? Of
      heeft u bevindingen? Neem dan contact met ons op.
    </Paragraph>
    <FooterLinkList>
      <FooterLinkListItem>
        <Link href="/">Veelgestelde vragen</Link>
      </FooterLinkListItem>
      <FooterLinkListItem>
        <Link href="/">Contact opnemen</Link>
      </FooterLinkListItem>
      <FooterLinkListItem>
        <Link href="/">Feedback geven</Link>
      </FooterLinkListItem>
      <FooterLinkListItem>
        <Link href="/">Uitleg gebruik</Link>
      </FooterLinkListItem>
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
              <FooterBottomLinkListItem>
                <Link href="/">Privacy en cookies</Link>
              </FooterBottomLinkListItem>
              <FooterBottomLinkListItem>
                <Link href="/">Over deze site</Link>
              </FooterBottomLinkListItem>
            </FooterBottomLinkList>
          </Column>
        </Row>
      </FooterBottom>
    </Footer>
  ))
