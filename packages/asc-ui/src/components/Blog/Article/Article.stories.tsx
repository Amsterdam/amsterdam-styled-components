import React from 'react'
import { storiesOf } from '@storybook/react'
import articleJSON from './article_feed_example.json'
import {
  Column,
  CustomHTMLBlock,
  Row,
  Heading,
  LinkList,
  LinkListItem,
  Article,
  BlogBody,
  Paragraph,
} from '../../..'

/* Blog components */
import BlogContent from '../BlogContent'
import BlogHeader from '../BlogHeader'
import BlogMetaList from '../BlogMetaList'
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import Typography from '../../Typography'

/* Rest components */

storiesOf('Composed/Blog/Article', module)
  .add('with image', () => (
    <Article image={articleJSON.image}>
      <Row>
        <BlogContent>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
            push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
          >
            <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
              <BlogBody>
                <BlogHeader title={articleJSON.title}>
                  <BlogMetaList
                    dateTime={articleJSON.publicationDate}
                    dateFormatted={articleJSON.publicationDateFormatted}
                    fields={[{ id: 1, label: 'Redactie' }]}
                  />
                </BlogHeader>
                <Paragraph strong hasLongText>
                  {articleJSON.fields.intro}
                </Paragraph>
                <CustomHTMLBlock body={articleJSON.body} />
              </BlogBody>
            </Column>
            <Column
              span={{ small: 1, medium: 2, big: 2, large: 3, xLarge: 3 }}
              push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
            >
              <BlogSidebar>
                <Heading as="h2">Links</Heading>
                <LinkList>
                  <LinkListItem href="/">I am a ListLink!</LinkListItem>
                  <LinkListItem href="/">Another one</LinkListItem>
                  <LinkListItem href="/">
                    A loooooong, very, very, very long link
                  </LinkListItem>
                </LinkList>
              </BlogSidebar>
            </Column>
          </Column>
        </BlogContent>
      </Row>
    </Article>
  ))
  .add('without image', () => (
    <Article>
      <Row>
        <BlogContent>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
            push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
          >
            <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
              <BlogBody>
                <BlogHeader title={articleJSON.title}>
                  <BlogMetaList
                    dateTime={articleJSON.publicationDate}
                    dateFormatted={articleJSON.publicationDateFormatted}
                    fields={[{ id: 1, label: 'Redactie' }]}
                  />
                </BlogHeader>
                <Paragraph strong hasLongText>
                  {articleJSON.fields.intro}
                </Paragraph>
                <CustomHTMLBlock body={articleJSON.body} />
              </BlogBody>
            </Column>
            <Column
              span={{ small: 1, medium: 2, big: 2, large: 3, xLarge: 3 }}
              push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
            >
              <BlogSidebar>
                <Heading as="h2">Downloads</Heading>
                <LinkList>
                  <LinkListItem href="/">
                    File
                    <Typography as="small">PDF 40kB</Typography>
                  </LinkListItem>
                  <LinkListItem href="/">
                    File
                    <Typography as="small">PDF 40kB</Typography>
                  </LinkListItem>
                  <LinkListItem href="/">
                    File
                    <Typography as="small">PDF 40kB</Typography>
                  </LinkListItem>
                </LinkList>
              </BlogSidebar>
            </Column>
          </Column>
        </BlogContent>
      </Row>
    </Article>
  ))
