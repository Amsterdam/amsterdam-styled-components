import React from 'react'
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

export default {
  title: 'Composed/Footer',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

const ColofonLinks: React.FC<{ indent?: boolean }> = () => (
  <FooterLinkList>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Over deze site
      </Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Over OIS
      </Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Databeleid
      </Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Bronnen
      </Link>
    </FooterLinkListItem>
  </FooterLinkList>
)

const FollowLinks: React.FC<{ indent?: boolean }> = () => (
  <FooterLinkList>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Nieuwsbrief OIS
      </Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Twitter
      </Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Facerbook
      </Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        Linkedin
      </Link>
    </FooterLinkListItem>
    <FooterLinkListItem>
      <Link href="/" variant="with-chevron">
        GitHub
      </Link>
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
        <Link href="/" variant="with-chevron">
          Veelgestelde vragen
        </Link>
      </FooterLinkListItem>
      <FooterLinkListItem>
        <Link href="/" variant="with-chevron">
          Contact opnemen
        </Link>
      </FooterLinkListItem>
      <FooterLinkListItem>
        <Link href="/" variant="with-chevron">
          Feedback geven
        </Link>
      </FooterLinkListItem>
      <FooterLinkListItem>
        <Link href="/" variant="with-chevron">
          Uitleg gebruik
        </Link>
      </FooterLinkListItem>
    </FooterLinkList>
  </>
)

export const ImplementationForDataportaal = () => (
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
              <Link href="/" linkType="with-chevron">
                Privacy en cookies
              </Link>
            </FooterBottomLinkListItem>
            <FooterBottomLinkListItem>
              <Link href="/" linkType="with-chevron">
                Over deze site
              </Link>
            </FooterBottomLinkListItem>
          </FooterBottomLinkList>
        </Column>
      </Row>
    </FooterBottom>
  </Footer>
)
