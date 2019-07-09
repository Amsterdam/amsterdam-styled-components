import React from 'react'
import { storiesOf } from '@storybook/react/'
import { Download } from '@datapunt/asc-assets'
import Article from './Article'
import { Column, CustomHTMLBlock, Row, ArticleMetaList } from '../../index'
import Summary from '../Typography/Summary'
import ArticleHeader from './ArticleHeader/ArticleHeader'
import ArticleContent from './ArticleContent'
import publicationJSON from './publication_feed.json'
import Button from '../Button'

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
      <Article>
        <Row debug>
          <Column wrap span={{ small: 4, medium: 8, big: 12, large: 12 }}>
            <Column debug span={{ small: 4, medium: 8, big: 12, large: 12 }}>
              <ArticleContent>
                <ArticleHeader title={title}></ArticleHeader>
                <ArticleMetaList
                  fields={[
                    { id: 1, label: fileSize },
                    { id: 2, label: fileType },
                  ]}
                ></ArticleMetaList>
              </ArticleContent>
            </Column>
            <Column debug span={{ small: 4, medium: 4, big: 6, large: 6 }}>
              <ArticleContent>
                <img
                  src="https://data.amsterdam.nl/assets/images/amsterdam-maps.png"
                  alt="voorpagina"
                />
                <Button color="primary" onClick={() => console.log('download')}>
                  <Download />
                  {`Download PDF (${fileSize})`}
                </Button>
              </ArticleContent>
            </Column>
            <Column debug span={{ small: 4, medium: 4, big: 6, large: 6 }}>
              <ArticleContent>
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
              </ArticleContent>
            </Column>
          </Column>
        </Row>
      </Article>
    </>
  )
})
