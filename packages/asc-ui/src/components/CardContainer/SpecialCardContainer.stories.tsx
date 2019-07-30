import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { color, breakpoint } from '../../utils'
import Card from '../Card/Card'
import CardStyle from '../Card/CardStyle'
import CardContent from '../Card/CardContent'
import CardMedia from '../Card/CardMedia'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import { Row, Column } from '../Grid'
import ImageStyle from '../Image/ImageStyle'
import ParagraphStyle from '../Paragraph/ParagraphStyle'
import CardContentStyle from '../Card/CardContentStyle'
import LinkList, { LinkListItem } from '../LinkList'
import CardContainer from './CardContainer'
import ColumnStyle from '../Grid/ColumnStyle'
import HeadingStyle from '../Heading/HeadingStyle'
import LinkListStyle from '../LinkList/LinkListStyle'

const SpecialCard = styled(Card)`
  border-bottom: ${color('tint', 'level3')} 1px solid;
  width: 100%;
  padding: 0 8px;
  cursor: pointer;

  & > ${ImageStyle} {
    max-width: 56px;
  }

  ${CardContentStyle} {
    padding-left: 0;
    ${HeadingStyle} {
      cursor: pointer;
    }

    ${ParagraphStyle} {
      max-height: 66px;
      overflow-y: hidden;
    }
  }

  &:hover {
    ${HeadingStyle} {
      color: ${color('secondary')};
      text-decoration: underline;
    }
  }
`

const CardType = styled.span`
  background-color: ${color('tint', 'level3')};
  padding: 1px 3px;
  margin-right: 5px;
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

storiesOf('Composed/CardContainer(special)', module)
  .addDecorator(storyFn => <div style={{ padding: '40px 0' }}>{storyFn()}</div>)
  .add('default', () => (
    <SpecialCardContainer>
      <Row>
        <Heading $as="h3" gutterBottom={32}>
          In Beeld
        </Heading>
      </Row>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex
              </Heading>
              <Paragraph>
                <CardType>Dashbord</CardType>
                Hoe veilig is mijn buurt vergeleken met andere buurten en met
                voorgaande perioden?
              </Paragraph>
            </CardContent>
            <CardMedia backgroundColor="level2">
              <Image
                src="https://lorempixel.com/100/100/sports/1"
                alt="stadsloket"
              />
            </CardMedia>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                <CardType>Dashbord</CardType>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia backgroundColor="level2">
              <Image
                src="https://lorempixel.com/100/100/sports/2"
                alt="stadsloket"
              />
            </CardMedia>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia backgroundColor="level2">
              <Image
                src="https://lorempixel.com/100/100/sports/3"
                alt="stadsloket"
              />
            </CardMedia>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                <CardType>Dashbord</CardType>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia backgroundColor="level2">
              <CardMedia backgroundColor="level2">
                <Image
                  src="https://lorempixel.com/100/100/sports/4"
                  alt="stadsloket"
                />
              </CardMedia>
            </CardMedia>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia backgroundColor="level2">
              <Image
                src="https://lorempixel.com/100/100/sports/5"
                alt="stadsloket"
              />
            </CardMedia>
          </SpecialCard>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}
        >
          <SpecialCard horizontal>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia backgroundColor="level2">
              <Image
                src="https://lorempixel.com/100/100/sports/6"
                alt="stadsloket"
              />
            </CardMedia>
          </SpecialCard>
        </Column>
      </Row>
      <Row>
        <LinkList>
          <LinkListItem href="/">Bekijk overzicht</LinkListItem>
        </LinkList>
      </Row>
    </SpecialCardContainer>
  ))
