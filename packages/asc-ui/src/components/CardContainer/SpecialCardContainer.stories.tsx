import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { color } from '../../utils'
import Card from '../Card/Card'
// import CardStyle from '../Card/CardStyle'
// import CardContentStyle from '../Card/CardContentStyle'
// import { CardMediaWrapperStyle } from '../Card/CardMediaStyle'
// import CardActions from '../Card/CardActions'
// import CardActionsStyle from '../Card/CardActionsStyle'
import CardContent from '../Card/CardContent'
import CardMedia from '../Card/CardMedia'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import { Row, Column } from '../Grid'
import ImageStyle from '../Image/ImageStyle'
// import HeadingStyle from '../Heading/HeadingStyle'
// import ColumnStyle from '../Grid/ColumnStyle'

const SpecialCard = styled(Card)`
  border-top: ${color('tint', 'level3')} 1px solid;

  & > ${ImageStyle} {
    max-width: 56px;
  }
`
const CardType = styled.span`
  background-color: ${color('tint', 'level3')};
  padding: 1px 3px;
  margin-right: 5px;
`

storiesOf('Composed/CardContainer(special)', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 0px', background: 'rgb(250,250,250)' }}>
      {storyFn()}
    </div>
  ))
  .add('default', () => (
    <Row>
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <SpecialCard horizontal>
          <CardContent>
            <Heading $as="h6" gutterBottom={8}>
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
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <SpecialCard horizontal>
          <CardContent>
            <Heading $as="h6" gutterBottom={8}>
              Veiligheidsindex titel 16/20
            </Heading>
            <Paragraph>
              <CardType>Dashbord</CardType>
              Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt vergelek…
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
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <SpecialCard horizontal>
          <CardContent>
            <Heading $as="h6" gutterBottom={8}>
              Veiligheidsindex titel 16/20
            </Heading>
            <Paragraph>
              Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt vergelek…
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
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <SpecialCard horizontal>
          <CardContent>
            <Heading $as="h6" gutterBottom={8}>
              Veiligheidsindex titel 16/20
            </Heading>
            <Paragraph>
              <CardType>Dashbord</CardType>
              Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt vergelek…
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
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <SpecialCard horizontal>
          <CardContent>
            <Heading $as="h6" gutterBottom={8}>
              Veiligheidsindex titel 16/20
            </Heading>
            <Paragraph>
              Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt vergelek…
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
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <SpecialCard horizontal>
          <CardContent>
            <Heading $as="h6" gutterBottom={8}>
              Veiligheidsindex titel 16/20
            </Heading>
            <Paragraph>
              Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt vergelek…
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
  ))
