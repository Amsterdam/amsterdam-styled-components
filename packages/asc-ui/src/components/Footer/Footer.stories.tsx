import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from './Footer'
import LinkList, { LinkListItem } from '../LinkList'
import { Row, Column } from '../Grid'
import FooterContent from './FooterContent/FooterContent'
import {
  InverterdLinkList,
  InverterdLinkListItem,
} from './FooterContent/FooterLinkList'
import Heading from '../Heading'

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
      <Row hasMargin={false}>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <Heading as="h2">Colofon</Heading>
            <LinkList>
              <LinkListItem href="/">Over deze site</LinkListItem>
              <LinkListItem href="/">Over OIS</LinkListItem>
              <LinkListItem href="/">Databeleid</LinkListItem>
              <LinkListItem href="/">Bronnen</LinkListItem>
            </LinkList>
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <Heading as="h2">Volg de gemeente</Heading>
            <LinkList>
              <LinkListItem href="/">Nieuwsbrief OIS</LinkListItem>
              <LinkListItem href="/">Twitter</LinkListItem>
              <LinkListItem href="/">Facerbook</LinkListItem>
              <LinkListItem href="/">Linkedin</LinkListItem>
              <LinkListItem href="/">GitHub</LinkListItem>
            </LinkList>
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 2, large: 4, xLarge: 4 }}
        >
          <FooterContent>
            <Heading as="h2">Vragen?</Heading>
            <Heading as="p">
              Hebt u een vraag en kunt u het antwoord niet vinden op deze
              website? Of heeft u bevindingen? Neem dan contact met ons op.
            </Heading>
            <LinkList>
              <LinkListItem href="/">Veelgestelde vragen</LinkListItem>
              <LinkListItem href="/">Contact opnemen</LinkListItem>
              <LinkListItem href="/">Feedback geven</LinkListItem>
              <LinkListItem href="/">Uitleg gebruik</LinkListItem>
            </LinkList>
          </FooterContent>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
        >
          <FooterContent>
            <LinkList>
              <LinkListItem href="/">Privacy en cookies</LinkListItem>
            </LinkList>
          </FooterContent>
        </Column>
      </Row>
    </Footer>
  ))
