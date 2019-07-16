import React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import { Column, CustomHTMLBlock, Row, BlogHeader } from '../../index'
import Summary from '../Typography/Summary'
import Downloader from '../Downloader'
import Publication from './Publication'
import publicationJSON from './publication_feed.json'
import { BlogMetaList, BlogContent } from '../Blog'

storiesOf('Composed/Blog/Publication', module).add('dataportal version', () => {
  const {
    title,
    body,
    field_publication_intro: intro,
    field_file_size: fileSize,
    field_file_type: fileType,
  } = publicationJSON.data[0].attributes
  const cmsRoot = 'https://acc.cms.data.amsterdam.nl'
  const coverUrl = publicationJSON.included[0].attributes.uri.url
  const downloadUrl = publicationJSON.included[1].attributes.uri.url

  return (
    <>
      <br />
      <br />
      <Publication>
        <Row>
          <Column
            wrap
            span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
          >
            <Column
              span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
            >
              <BlogContent>
                <BlogHeader title={title}></BlogHeader>
                <BlogMetaList
                  fields={[
                    { id: 1, label: fileSize },
                    { id: 2, label: fileType },
                  ]}
                ></BlogMetaList>
              </BlogContent>
            </Column>
            <Column span={{ small: 1, medium: 2, big: 3, large: 6, xLarge: 6 }}>
              <Downloader
                imageSrc={`${cmsRoot}${coverUrl}`}
                description={`Download PDF (${fileSize})`}
                onClick={action(`downloading: ${cmsRoot}${downloadUrl}`)}
              />
            </Column>
            <Column span={{ small: 1, medium: 2, big: 3, large: 6, xLarge: 6 }}>
              <BlogContent>
                {intro && <Summary>{intro}</Summary>}
                <CustomHTMLBlock
                  dangerouslySetInnerHTML={{
                    __html: body.processed,
                  }}
                ></CustomHTMLBlock>
              </BlogContent>
            </Column>
          </Column>
        </Row>
      </Publication>
    </>
  )
})
