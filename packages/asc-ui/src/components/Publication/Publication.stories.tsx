import React from 'react'
import { storiesOf } from '@storybook/react/'
import { Column, CustomHTMLBlock, Row, ArticleMetaList } from '../../index'
import Summary from '../Typography/Summary'
import ArticleHeader from '../Article/ArticleHeader/ArticleHeader'
import publicationJSON from './publication_feed.json'
import Downloader from '../Downloader'
import PublicationContent from './PublicationContent'
import Publication from './Publication'

storiesOf('Composed/Publication', module).add('with image', () => {
  const {
    title,
    // created,
    body,
    field_file_size: fileSize,
    field_file_type: fileType,
  } = publicationJSON.attributes
  return (
    <>
      <br />
      <br />
      <Publication>
        <Row>
          <Column
            wrap
            span={{ small: 1, medium: 4, big: 6, large: 12, xLarge: 12 }}
          >
            <Column
              span={{ small: 1, medium: 4, big: 6, large: 12, xLarge: 12 }}
            >
              <PublicationContent>
                <ArticleHeader title={title}></ArticleHeader>
                <ArticleMetaList
                  fields={[
                    { id: 1, label: fileSize },
                    { id: 2, label: fileType },
                  ]}
                ></ArticleMetaList>
              </PublicationContent>
            </Column>
            <Column span={{ small: 1, medium: 4, big: 3, large: 6, xLarge: 6 }}>
              <Downloader
                imageSrc="https://acc.cms.data.amsterdam.nl/sites/default/files/images/2019-factsheet-jeugdwerkloosheid-2014-2018.png"
                description={`Download PDF (${fileSize})`}
                onClick={() => console.log('download')}
              />
            </Column>
            <Column span={{ small: 1, medium: 4, big: 3, large: 6, xLarge: 6 }}>
              <PublicationContent>
                <Summary>
                  Optioneel hier kan een kleine omschrijving komen. Van de
                  146.500 Amsterdamse jongeren in de leeftijd van 15 tot en met
                  26 jaar waren er in 2018 gemiddeld 6.100 werkloos, dit komt
                  neer op 6,2% van de beroepsbevolking.
                </Summary>
                <CustomHTMLBlock
                  dangerouslySetInnerHTML={{
                    __html: body.processed,
                  }}
                ></CustomHTMLBlock>
              </PublicationContent>
            </Column>
          </Column>
        </Row>
      </Publication>
    </>
  )
})
