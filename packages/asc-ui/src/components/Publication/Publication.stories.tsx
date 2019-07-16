import React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import { Column, CustomHTMLBlock, Row, BlogHeader } from '../../index'
import Summary from '../Typography/Summary'
import DocumentCover from '../DocumentCover'
import Publication from './Publication'
import publicationJSON from './publication_feed.json'
import { BlogMetaList, BlogContent } from '../Blog'

storiesOf('Composed/Blog/Publication', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px', width: '250px' }}>{storyFn()}</div>
  ))
  .add('dataportal version', () => {
    const {
      title,
      body,
      field_publication_intro: intro,
      field_file_size: fileSize,
      field_file_type: fileType,
      filecover_url: coverUrl,
      file_url: downloadUrl,
    } = publicationJSON

    return (
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
                <BlogHeader title={title} />
                <BlogMetaList
                  fields={[
                    { id: 1, label: fileSize },
                    { id: 2, label: fileType },
                  ]}
                />
              </BlogContent>
            </Column>
            <Column span={{ small: 1, medium: 2, big: 3, large: 6, xLarge: 6 }}>
              <DocumentCover
                imageSrc={`${coverUrl}`}
                description={`Download PDF (${fileSize})`}
                onClick={action(`downloading: ${downloadUrl}`)}
              />
            </Column>
            <Column span={{ small: 1, medium: 2, big: 3, large: 6, xLarge: 6 }}>
              <BlogContent>
                {intro && <Summary>{intro}</Summary>}
                <CustomHTMLBlock
                  dangerouslySetInnerHTML={{
                    __html: body,
                  }}
                />
              </BlogContent>
            </Column>
          </Column>
        </Row>
      </Publication>
    )
  })
