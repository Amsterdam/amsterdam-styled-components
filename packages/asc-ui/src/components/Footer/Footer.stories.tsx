import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import Footer from './Footer'
import { Row, Column } from '../Grid'
import FooterContent from './FooterContent/FooterContent'
import { FooterLinkList, FooterLinkListItem } from './FooterLinkList'
import { color, breakpoint, ShowHideTypes } from '../../utils'
import { ToggleFooterHeader, FooterHeading } from './FooterHeading'
import { Toggle } from '../Toggle'
import SmallFooterLinkList from './FooterLinkList/SmallFooterLinkList'
import SmallFooterLinkListItem from './FooterLinkList/SmallFooterLinkListItem'

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

type Props = {
  title?: string
} & ShowHideTypes

const FooterToggle: React.FC<Props> = ({ title, children, ...otherProps }) => {
  const StyledFooterToggle = styled(Toggle)`
    margin-bottom: 24px;
  `
  return (
    <StyledFooterToggle
      toggleHeader={ToggleFooterHeader}
      title={title}
      align="left"
      {...otherProps}
    >
      {children}
    </StyledFooterToggle>
  )
}

storiesOf('Composed/Footer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add(' linked list', () => (
    <FooterLinkList>
      <FooterLinkListItem href="/">I am a ListLink!</FooterLinkListItem>
      <FooterLinkListItem href="/">Another one</FooterLinkListItem>
      <FooterLinkListItem href="/">
        A loooooong, very, very, very long link
      </FooterLinkListItem>
      <FooterLinkListItem href="/" meta="PDF 35kb">
        A file!
      </FooterLinkListItem>
    </FooterLinkList>
  ))
  .add('default state', () => (
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
              <FooterHeading as="h3">Colofon</FooterHeading>
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
              <FooterHeading as="h3">Volg de gemeente</FooterHeading>
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
              <FooterHeading as="h3">Vragen?</FooterHeading>
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
          <SmallFooterLinkList>
            <SmallFooterLinkListItem href="/">
              Privacy en cookies
            </SmallFooterLinkListItem>
            <SmallFooterLinkListItem href="/">
              Over deze site
            </SmallFooterLinkListItem>
          </SmallFooterLinkList>
        </Column>
      </Row>
    </Footer>
  ))
