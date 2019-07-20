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
import Heading from '../Heading'
import { color, breakpoint } from '../../utils'
import LinkStyle from '../Link/LinkStyle'

const InvertedRow = styled(Row)`
  padding-top: 32px;
  background-color: ${color('tint', 'level5')};
`

const FooterHeading = styled(Heading)`
  margin-top: 0;
  margin-bottom: 8px;
  color: ${color('tint', 'level1')};
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
            <FooterHeading as="h3">Colofon</FooterHeading>
            <InverterdLinkList>
              <InverterdLinkListItem href="/">
                Over deze site
              </InverterdLinkListItem>
              <InverterdLinkListItem href="/">Over OIS</InverterdLinkListItem>
              <InverterdLinkListItem href="/">Databeleid</InverterdLinkListItem>
              <InverterdLinkListItem href="/">Bronnen</InverterdLinkListItem>
            </InverterdLinkList>
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterHeading as="h3">Volg de gemeente</FooterHeading>
            <InverterdLinkList>
              <InverterdLinkListItem href="/">
                Nieuwsbrief OIS
              </InverterdLinkListItem>
              <InverterdLinkListItem href="/">Twitter</InverterdLinkListItem>
              <InverterdLinkListItem href="/">Facerbook</InverterdLinkListItem>
              <InverterdLinkListItem href="/">Linkedin</InverterdLinkListItem>
              <InverterdLinkListItem href="/">GitHub</InverterdLinkListItem>
            </InverterdLinkList>
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <FooterHeading as="h3">Vragen?</FooterHeading>
            <FooterHeading as="p">
              Hebt u een vraag en kunt u het antwoord niet vinden op deze
              website? Of heeft u bevindingen? Neem dan contact met ons op.
            </FooterHeading>
            <InverterdLinkList>
              <InverterdLinkListItem href="/">
                Veelgestelde vragen
              </InverterdLinkListItem>
              <InverterdLinkListItem href="/">
                Contact opnemen
              </InverterdLinkListItem>
              <InverterdLinkListItem href="/">
                Feedback geven
              </InverterdLinkListItem>
              <InverterdLinkListItem href="/">
                Uitleg gebruik
              </InverterdLinkListItem>
            </InverterdLinkList>
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
