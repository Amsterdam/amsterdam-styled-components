import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { color, breakpoint } from '../../utils'
import Card from '../Card/Card'
import CardStyle from '../Card/CardStyle'
import CardContent from '../Card/CardContent'
import CardMedia from '../Card/CardMedia'
import { CardMediaWrapperStyle } from '../Card/CardMediaStyle'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import { Row, Column } from '../Grid'
import CardContentStyle from '../Card/CardContentStyle'
import LinkList, { LinkListItem } from '../LinkList'
import CardContainer from './CardContainer'
import ColumnStyle from '../Grid/ColumnStyle'
import HeadingStyle from '../Heading/HeadingStyle'
import LinkListStyle from '../LinkList/LinkListStyle'
import Link from '../Link'
import Tag, { TagStyle } from '../Tag'
import LinkStyle from '../Link/LinkStyle'

const SpecialCard = styled(Card)`
  border-bottom: ${color('tint', 'level3')} 1px solid;
  padding: 0 8px;
  width: 100%;
  align-items: baseline;

  & > ${LinkStyle} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 32px;
    width: 100%;

    ${CardMediaWrapperStyle} {
      max-width: 80px;
      align-self: flex-start;
    }
  }

  & ${TagStyle} {
    margin-right: 5px;
  }

  ${CardContentStyle} {
    padding-left: 0;
    padding-top: 0;
  }

  &:hover {
    ${HeadingStyle} {
      color: ${color('secondary')};
      text-decoration: underline;
    }
  }
`

const SpecialCardContainer = styled(CardContainer)`
  ${LinkListStyle} {
    margin-top: 32px;
  }

  ${/* sc-selector */ ColumnStyle}:first-child > ${CardStyle} {
    border-top: ${color('tint', 'level3')} 1px solid;
  }

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    ${/* sc-selector */ ColumnStyle}:nth-child(2) > ${CardStyle} {
      border-top: ${color('tint', 'level3')} 1px solid;
    }
  }

  @media screen and ${breakpoint('min-width', 'laptop')} {
    ${/* sc-selector */ ColumnStyle}:nth-child(3) > ${CardStyle} {
      border-top: ${color('tint', 'level3')} 1px solid;
    }
  }
`

storiesOf('Composed/CardContainer', module)
  .addDecorator(storyFn => <div style={{ padding: '40px 0' }}>{storyFn()}</div>)
  .add('implementation dataportaal "Specials"', () => (
    <SpecialCardContainer>
      <Row>
        <Heading $as="h1" gutterBottom={32}>
          In Beeld
        </Heading>
      </Row>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <Link href="/" linkType="blank">
              <CardContent>
                <Heading $as="h4" gutterBottom={8}>
                  Veiligheidsindex
                </Heading>
                <Paragraph>
                  <Tag>Dashboard</Tag>
                  Hoe veilig is mijn buurt vergeleken met andere buurten en met
                  voorgaande perioden?
                </Paragraph>
              </CardContent>
              <CardMedia>
                <Image
                  src="https://picsum.photos/100/?random=1"
                  alt="stadsloket"
                />
              </CardMedia>
            </Link>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <Link href="/" linkType="blank">
              <CardContent>
                <Heading $as="h4" gutterBottom={8}>
                  Veiligheidsindex
                </Heading>
                <Paragraph>
                  <Tag>Dashboard</Tag>
                  Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                  vergelek…
                </Paragraph>
              </CardContent>
              <CardMedia>
                <Image
                  src="https://picsum.photos/100/?random=2"
                  alt="stadsloket"
                />
              </CardMedia>
            </Link>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <Link href="/" linkType="blank">
              <CardContent>
                <Heading $as="h4" gutterBottom={8}>
                  Veiligheidsindex titel 16/20
                </Heading>
                <Paragraph>
                  Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                  vergelek…
                </Paragraph>
              </CardContent>
              <CardMedia>
                <Image
                  src="https://picsum.photos/100/?random=3"
                  alt="stadsloket"
                />
              </CardMedia>
            </Link>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <Link href="/" linkType="blank">
              <CardContent>
                <Heading $as="h4" gutterBottom={8}>
                  Veiligheidsindex titel 16/20
                </Heading>
                <Paragraph>
                  <Tag>Dashboard</Tag>
                  Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                  vergelek…
                </Paragraph>
              </CardContent>
              <CardMedia>
                <Image
                  src="https://picsum.photos/100/?random=4"
                  alt="stadsloket"
                />
              </CardMedia>
            </Link>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <Link href="/" linkType="blank">
              <CardContent>
                <Heading $as="h4" gutterBottom={8}>
                  Veiligheidsindex titel 16/20
                </Heading>
                <Paragraph>
                  Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                  vergelek…
                </Paragraph>
              </CardContent>
              <CardMedia>
                <Image
                  src="https://picsum.photos/100/?random=5"
                  alt="stadsloket"
                />
              </CardMedia>
            </Link>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <Link href="/" linkType="blank">
              <CardContent>
                <Heading $as="h4" gutterBottom={8}>
                  Veiligheidsindex titel 16/20
                </Heading>
                <Paragraph>
                  Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                  vergelek…
                </Paragraph>
              </CardContent>
              <CardMedia>
                <Image
                  src="https://picsum.photos/100/?random=6"
                  alt="stadsloket"
                />
              </CardMedia>
            </Link>
          </SpecialCard>
        </Column>
      </Row>
      <Row>
        <LinkList>
          <LinkListItem href="/" linkType="list">
            Bekijk overzicht
          </LinkListItem>
        </LinkList>
      </Row>
    </SpecialCardContainer>
  ))
