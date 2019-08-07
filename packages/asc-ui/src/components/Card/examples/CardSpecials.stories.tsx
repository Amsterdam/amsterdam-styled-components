import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import {
  Card,
  CardContent,
  CardMedia,
  CardContainer,
  Heading,
  Paragraph,
  Image,
  Row,
  Column,
  Tag,
  Link,
  color,
  breakpoint,
  styles,
} from '../../..'

const SpecialCard = styled(Card)`
  border-bottom: ${color('tint', 'level3')} 1px solid;
  width: 100%;
  align-items: stretch;

  & > ${styles.LinkStyle} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 10px 0;
    margin: 22px 0;

    ${styles.CardMediaWrapperStyle} {
      max-width: 80px;
      align-self: flex-start;
    }
  }

  & ${styles.TagStyle} {
    margin-right: 5px;
  }

  ${styles.CardContentStyle} {
    padding-left: 0;
    padding-top: 0;
  }

  &:hover {
    ${styles.HeadingStyle} {
      color: ${color('secondary')};
      text-decoration: underline;
    }
  }
`

const SpecialCardContainer = styled(CardContainer)`
  ${styles.LinkListStyle} {
    margin-top: 32px;
  }

  ${/* sc-selector */ styles.ColumnStyle}:first-child > ${styles.CardStyle} {
    border-top: ${color('tint', 'level3')} 1px solid;
  }

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    ${/* sc-selector */ styles.ColumnStyle}:nth-child(2) > ${styles.CardStyle} {
      border-top: ${color('tint', 'level3')} 1px solid;
    }
  }

  @media screen and ${breakpoint('min-width', 'laptop')} {
    ${/* sc-selector */ styles.ColumnStyle}:nth-child(3) > ${styles.CardStyle} {
      border-top: ${color('tint', 'level3')} 1px solid;
    }
  }
`

storiesOf('Atoms/Card/Implementation', module)
  .addDecorator(storyFn => <div style={{ padding: '40px 0' }}>{storyFn()}</div>)
  .addDecorator(withKnobs)
  .add('Dataportaal "Specials"', () => (
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
          <SpecialCard horizontal loading={boolean('loading', false)}>
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
          <SpecialCard horizontal loading={boolean('loading', false)}>
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
          <SpecialCard horizontal loading={boolean('loading', false)}>
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
          <SpecialCard horizontal loading={boolean('loading', false)}>
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
          <SpecialCard horizontal loading={boolean('loading', false)}>
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
          <SpecialCard horizontal loading={boolean('loading', false)}>
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
        <Link linkType="with-chevron" href="/">
          Bekijk overzicht
        </Link>
      </Row>
    </SpecialCardContainer>
  ))
