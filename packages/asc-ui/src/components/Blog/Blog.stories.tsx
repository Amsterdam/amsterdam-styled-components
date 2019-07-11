import React from 'react'
import { storiesOf } from '@storybook/react/'
import Blog from './Blog'
import { Column, CustomHTMLBlock, Row } from '../../index'
import Summary from '../Typography/Summary'
import Heading from '../Typography/Heading'
import BlogHeader from './BlogHeader/BlogHeader'
import BlogMetaList from './BlogMetaList'
import BlogContent from './BlogContent'
import BlogSidebar from './BlogSidebar'
import LinkListItem from '../LinkList/LinkListItem'
import LinkList from '../LinkList/LinkList'
import articleJSON from './article_feed.json'

storiesOf('Composed/Blog', module)
  .add('with image', () => (
    <Blog image={articleJSON.image}>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
          push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
        >
          <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
            <BlogContent>
              <BlogHeader title={articleJSON.title}>
                <BlogMetaList
                  dateTime={articleJSON.publicationDate}
                  dateFormatted={articleJSON.publicationDateFormatted}
                  fields={[{ id: 1, label: 'Redactie' }]}
                />
              </BlogHeader>
              <Summary hasLongText>{articleJSON.fields.intro}</Summary>
              <CustomHTMLBlock
                hasLongText
                dangerouslySetInnerHTML={{
                  __html: articleJSON.body,
                }}
              />
            </BlogContent>
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
      </Row>
    </Blog>
  ))
  .add('without image', () => (
    <Blog>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
          push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
        >
          <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
            <BlogContent>
              <BlogHeader title={articleJSON.title}>
                <BlogMetaList
                  dateTime={articleJSON.publicationDate}
                  dateFormatted={articleJSON.publicationDateFormatted}
                  fields={[{ id: 1, label: 'Redactie' }]}
                />
              </BlogHeader>
              <Summary hasLongText>{articleJSON.fields.intro}</Summary>
              <CustomHTMLBlock
                hasLongText
                dangerouslySetInnerHTML={{
                  __html: articleJSON.body,
                }}
              />
            </BlogContent>
          </Column>
          <Column
            span={{ small: 1, medium: 2, big: 2, large: 3, xLarge: 3 }}
            push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
          >
            <BlogSidebar>
              <Heading as="h2">Downloads</Heading>
              <LinkList>
                <LinkListItem fileInfo="PDF 40kB" href="/">
                  File
                </LinkListItem>
                <LinkListItem fileInfo="PDF 40kB" href="/">
                  File
                </LinkListItem>
                <LinkListItem fileInfo="PDF 40kB" href="/">
                  File
                </LinkListItem>
              </LinkList>
            </BlogSidebar>
          </Column>
        </Column>
      </Row>
    </Blog>
  ))
