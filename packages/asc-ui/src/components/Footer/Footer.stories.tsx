import React from 'react'
import { storiesOf } from '@storybook/react'
import { css } from '@datapunt/asc-core'
import Footer from './Footer'
import LinkList, { LinkListItem } from '../LinkList'
import { Row, Column } from '../Grid'
import { Content } from '../Content'
import { fromTheme } from '../../utils'
import FlexContentStyle from '../Content/FlexContentStyle'

storiesOf('Composed/Footer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => (
    <Footer>
      <Row hasMargin={false}>
        <Column
          inverted
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
        >
          <Content>
            <LinkList inverted>
              <LinkListItem href="/" inverted>
                I am a ListLink!
              </LinkListItem>
              <LinkListItem href="/" inverted>
                Another one
              </LinkListItem>
              <LinkListItem href="/" inverted>
                A loooooong, very, very, very long link
              </LinkListItem>
              <LinkListItem href="/" meta="PDF 35kb" inverted>
                A file!
              </LinkListItem>
            </LinkList>
          </Content>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
        >
          <Content
            StyledComponent={FlexContentStyle}
            css={css`
              background-color: ${fromTheme('primary')};
            `}
          >
            <LinkList>
              <LinkListItem href="/">I am a ListLink!</LinkListItem>
            </LinkList>
          </Content>
        </Column>
      </Row>
    </Footer>
  ))
