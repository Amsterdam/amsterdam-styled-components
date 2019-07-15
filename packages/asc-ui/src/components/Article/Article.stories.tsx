import React from 'react'
import { storiesOf } from '@storybook/react'
import articleJSON from '../Blog/article_feed.json'
import { Column, CustomHTMLBlock, Row } from '../..'

/* Blog components */
import BlogContent from '../Blog/BlogContent'
import BlogHeader from '../Blog/BlogHeader'
import BlogMetaList from '../Blog/BlogMetaList'
import BlogSidebar from '../Blog/BlogSidebar/BlogSidebar'

/* Rest components */
import Summary from '../Typography/Summary'
import Heading from '../Typography/Heading'
import LinkList from '../LinkList'
import LinkListItem from '../LinkList/LinkListItem'
import Article from './Article'
import BlogBody from '../Blog/BlogBody/BlogBody'

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
                <Summary hasLongText>{articleJSON.fields.intro}</Summary>
                <CustomHTMLBlock
                  hasLongText
                  dangerouslySetInnerHTML={{
                    __html: articleJSON.body,
                  }}
                />
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
                <Summary hasLongText>{articleJSON.fields.intro}</Summary>
                <CustomHTMLBlock
                  hasLongText
                  dangerouslySetInnerHTML={{
                    __html: articleJSON.body,
                  }}
                />
              </BlogBody>
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
        </BlogContent>
      </Row>
    </Article>
  ))
