import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import Footer from './Footer'
import LinkList, { LinkListItem } from '../LinkList'
import { Row, Column } from '../Grid'
import FooterContent from './FooterContent/FooterContent'
import {
  InverterdLinkList,
  InverterdLinkListItem,
} from './FooterContent/FooterLinkList'
import { color, breakpoint } from '../../utils'
import LinkStyle from '../Link/LinkStyle'
import ToggleFooterHeader, {
  FooterHeading,
} from './FooterContent/FooterToggle/ToggleFooterHeader'
import { Toggle } from '../Toggle'

const InvertedRow = styled(Row)`
  padding-top: 32px;
  background-color: ${color('tint', 'level5')};
`

const FooterLinkList = styled(LinkList)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  min-height: 44px;
`
const FooterLinkListItem = styled(LinkListItem)`
  margin-right: 52px;
  & > ${LinkStyle} {
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    margin-right: 20px;
  }
`

const ColofonLinks: React.FC<{}> = ({ ...otherProps }) => (
  <InverterdLinkList {...otherProps}>
    <InverterdLinkListItem href="/">Over deze site</InverterdLinkListItem>
    <InverterdLinkListItem href="/">Over OIS</InverterdLinkListItem>
    <InverterdLinkListItem href="/">Databeleid</InverterdLinkListItem>
    <InverterdLinkListItem href="/">Bronnen</InverterdLinkListItem>
  </InverterdLinkList>
)

const FollowLinks: React.FC<{}> = ({ ...otherProps }) => (
  <InverterdLinkList {...otherProps}>
    <InverterdLinkListItem href="/">Nieuwsbrief OIS</InverterdLinkListItem>
    <InverterdLinkListItem href="/">Twitter</InverterdLinkListItem>
    <InverterdLinkListItem href="/">Facerbook</InverterdLinkListItem>
    <InverterdLinkListItem href="/">Linkedin</InverterdLinkListItem>
    <InverterdLinkListItem href="/">GitHub</InverterdLinkListItem>
  </InverterdLinkList>
)

const HelpLinks: React.FC<{}> = ({ ...otherProps }) => (
  <FooterContent {...otherProps}>
    <FooterHeading as="p">
      Heeft u een vraag en kunt u het antwoord niet vinden op deze website? Of
      heeft u bevindingen? Neem dan contact met ons op.
    </FooterHeading>
    <InverterdLinkList>
      <InverterdLinkListItem href="/">
        Veelgestelde vragen
      </InverterdLinkListItem>
      <InverterdLinkListItem href="/">Contact opnemen</InverterdLinkListItem>
      <InverterdLinkListItem href="/">Feedback geven</InverterdLinkListItem>
      <InverterdLinkListItem href="/">Uitleg gebruik</InverterdLinkListItem>
    </InverterdLinkList>
  </FooterContent>
)

type Props = {
  title?: string
}

const FooterToggle: React.FC<Props> = ({ title, children, ...otherProps }) => (
  <Toggle
    toggleHeader={ToggleFooterHeader}
    title={title}
    align="left"
    {...otherProps}
  >
    {children}
  </Toggle>
)

storiesOf('Composed/Footer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add(' linked list', () => (
    <InverterdLinkList>
      <InverterdLinkListItem href="/">I am a ListLink!</InverterdLinkListItem>
      <InverterdLinkListItem href="/">Another one</InverterdLinkListItem>
      <InverterdLinkListItem href="/">
        A loooooong, very, very, very long link
      </InverterdLinkListItem>
      <InverterdLinkListItem href="/" meta="PDF 35kb">
        A file!
      </InverterdLinkListItem>
    </InverterdLinkList>
  ))
  .add('default state', () => (
    <Footer>
      <InvertedRow>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterToggle title="Colofon">
              <ColofonLinks />
            </FooterToggle>
            {/* <FooterHeading as="h3">Colofon</FooterHeading>
            <ColofonLinks /> */}
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterToggle title="Volg de gemeente">
              <FollowLinks />
            </FooterToggle>
            {/* <FooterHeading as="h3">Volg de gemeente</FooterHeading>
            <FollowLinks /> */}
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterToggle title="Vragen?">
              <HelpLinks />
            </FooterToggle>
            {/* <FooterHeading as="h3">Vragen?</FooterHeading>
            <HelpLinks /> */}
          </FooterContent>
        </Column>
      </InvertedRow>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 10, xLarge: 10 }}
        >
          <FooterLinkList>
            <FooterLinkListItem href="/">Privacy en cookies</FooterLinkListItem>
            <FooterLinkListItem href="/">Over deze site</FooterLinkListItem>
          </FooterLinkList>
        </Column>
      </Row>
    </Footer>
  ))
