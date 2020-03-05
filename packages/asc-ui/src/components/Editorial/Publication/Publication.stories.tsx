import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  Container,
  Column,
  CustomHTMLBlock,
  Row,
  EditorialHeader,
} from '../../../index'
import DocumentCover from '../../DocumentCover'
import publicationJSON from './publication_feed.json'
import { EditorialMetaList, EditorialContent } from '../index'
import Paragraph from '../../Paragraph'

export default {
  title: 'Dataportaal/Composed/Editorial/Publication',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const ImplementationForDataportal = () => {
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
    <Container>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
        >
          <Column span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}>
            <EditorialContent>
              <EditorialHeader title={title} />
              <EditorialMetaList
                fields={[
                  { id: 1, label: fileSize },
                  { id: 2, label: fileType },
                ]}
              />
            </EditorialContent>
          </Column>
          <Column span={{ small: 1, medium: 2, big: 3, large: 6, xLarge: 6 }}>
            <DocumentCover
              imageSrc={`${coverUrl}`}
              description={`Download PDF (${fileSize})`}
              onClick={action(`downloading: ${downloadUrl}`)}
            />
          </Column>
          <Column span={{ small: 1, medium: 2, big: 3, large: 6, xLarge: 6 }}>
            <EditorialContent>
              {intro && <Paragraph strong>{intro}</Paragraph>}
              <CustomHTMLBlock body={body} />
            </EditorialContent>
          </Column>
        </Column>
      </Row>
    </Container>
  )
}
