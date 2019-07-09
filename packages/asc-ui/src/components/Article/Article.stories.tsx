import React from 'react'
import { storiesOf } from '@storybook/react/'
import Article from './Article'
import { Column, CustomHTMLBlock, Row } from '../../index'
import Summary from '../Typography/Summary'
import Heading from '../Typography/Heading'
import ArticleHeader from './ArticleHeader/ArticleHeader'
import ArticleMetaList from './ArticleMetaList'
import ArticleContent from './ArticleContent'
import ArticleSidebar from './ArticleSidebar'
import LinkListItem from '../LinkList/LinkListItem'
import LinkList from '../LinkList/LinkList'
import articleJSON from './article_feed.json'

storiesOf('Composed/Article', module)
  .add('with image', () => (
    <Article image={articleJSON.image}>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
          push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
        >
          <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
            <ArticleContent>
              <ArticleHeader title={articleJSON.title}>
                <ArticleMetaList
                  dateTime={articleJSON.publicationDate}
                  dateFormatted={articleJSON.publicationDateFormatted}
                  fields={[{ id: 1, label: 'Redactie' }]}
                />
              </ArticleHeader>
              <Summary hasLongText>{articleJSON.fields.intro}</Summary>
              <CustomHTMLBlock
                hasLongText
                dangerouslySetInnerHTML={{
                  __html: articleJSON.body,
                }}
              />
            </ArticleContent>
          </Column>
          <Column
            span={{ small: 1, medium: 2, big: 2, large: 3, xLarge: 3 }}
            push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
          >
            <ArticleSidebar>
              <Heading as="h2">Links</Heading>
              <LinkList>
                <LinkListItem href="/">I am a ListLink!</LinkListItem>
                <LinkListItem href="/">Another one</LinkListItem>
                <LinkListItem href="/">
                  A loooooong, very, very, very long link
                </LinkListItem>
              </LinkList>
            </ArticleSidebar>
          </Column>
        </Column>
      </Row>
    </Article>
  ))
  .add('without image', () => (
    <Article>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 5, large: 11, xLarge: 11 }}
          push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
        >
          <Column span={{ small: 1, medium: 2, big: 4, large: 7, xLarge: 7 }}>
            <ArticleContent>
              <ArticleHeader title={articleJSON.title}>
                <ArticleMetaList
                  dateTime={articleJSON.publicationDate}
                  dateFormatted={articleJSON.publicationDateFormatted}
                  fields={[{ id: 1, label: 'Redactie' }]}
                />
              </ArticleHeader>
              <Summary hasLongText>{articleJSON.fields.intro}</Summary>
              <CustomHTMLBlock
                hasLongText
                dangerouslySetInnerHTML={{
                  __html: articleJSON.body,
                }}
              />
            </ArticleContent>
          </Column>
          <Column
            span={{ small: 1, medium: 2, big: 2, large: 3, xLarge: 3 }}
            push={{ small: 0, medium: 0, big: 1, large: 1, xLarge: 1 }}
          >
            <ArticleSidebar>
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
            </ArticleSidebar>
          </Column>
        </Column>
      </Row>
    </Article>
  ))
