import React from 'react'
import { storiesOf } from '@storybook/react'
import articleJSON from './article_feed_example.json'
import {
  Column,
  CustomHTMLBlock,
  Row,
  Heading,
  List,
  ListItem,
  Article,
  EditorialBody,
  Paragraph,
} from '../../..'

/* Editorial components */
import EditorialContent from '../EditorialContent'
import EditorialHeader from '../EditorialHeader'
import EditorialMetaList from '../EditorialMetaList'
import EditorialSidebar from '../EditorialSidebar/EditorialSidebar'
import Link from '../../Link/Link'

/* Rest components */
storiesOf('Composed/Editorial/Article', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('with image', () => (
    <Article image={articleJSON.image}>
      <Row>
        <EditorialContent>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
            push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
          >
            <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
              <EditorialBody>
                <EditorialHeader title={articleJSON.title}>
                  <EditorialMetaList
                    dateTime={articleJSON.publicationDate}
                    dateFormatted={articleJSON.publicationDateFormatted}
                    fields={[{ id: 1, label: 'Redactie' }]}
                  />
                </EditorialHeader>
                <Paragraph strong hasLongText>
                  {articleJSON.fields.intro}
                </Paragraph>
                <CustomHTMLBlock body={articleJSON.body} />
              </EditorialBody>
            </Column>
            <Column
              span={{ small: 1, medium: 2, big: 2, large: 3, xLarge: 3 }}
              push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
            >
              <EditorialSidebar>
                <Heading as="h2">Links</Heading>
                <List>
                  <ListItem>
                    <Link href="/">I am a ListLink!</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">Another one</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">
                      A loooooong, very, very, very long link
                    </Link>
                  </ListItem>
                </List>
              </EditorialSidebar>
            </Column>
          </Column>
        </EditorialContent>
      </Row>
    </Article>
  ))
  .add('without image', () => (
    <Article>
      <Row>
        <EditorialContent>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
            push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
          >
            <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
              <EditorialBody>
                <EditorialHeader title={articleJSON.title}>
                  <EditorialMetaList
                    dateTime={articleJSON.publicationDate}
                    dateFormatted={articleJSON.publicationDateFormatted}
                    fields={[{ id: 1, label: 'Redactie' }]}
                  />
                </EditorialHeader>
                <Paragraph strong hasLongText>
                  {articleJSON.fields.intro}
                </Paragraph>
                <CustomHTMLBlock body={articleJSON.body} />
              </EditorialBody>
            </Column>
            <Column
              span={{ small: 1, medium: 2, big: 2, large: 3, xLarge: 3 }}
              push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
            >
              <EditorialSidebar>
                <Heading as="h2">Downloads</Heading>
                <List>
                  <ListItem>
                    <Link href="/">File</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">File</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">File</Link>
                  </ListItem>
                </List>
              </EditorialSidebar>
            </Column>
          </Column>
        </EditorialContent>
      </Row>
    </Article>
  ))
