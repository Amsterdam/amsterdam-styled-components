import {
  ChevronRight,
  DocumentText,
  Api,
  Data,
  Table,
  Pano,
  Map,
} from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import React from 'react'
import { color, breakpoint } from '../../utils'
import Icon from '../Icon'
import IconStyle from '../Icon/IconStyle'
import CardContainer from '.'
import Card from '../Card/Card'
import CardStyle from '../Card/CardStyle'
import CardContentStyle from '../Card/CardContentStyle'
import { CardMediaWrapperStyle } from '../Card/CardMediaStyle'
import CardActions from '../Card/CardActions'
import CardActionsStyle from '../Card/CardActionsStyle'
import CardContent from '../Card/CardContent'
import CardMedia from '../Card/CardMedia'
import Heading from '../Heading'
import HeadingStyle from '../Heading/HeadingStyle'
import Paragraph from '../Paragraph'
import ParagraphStyle from '../Paragraph/ParagraphStyle'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import ColumnStyle from '../Grid/ColumnStyle'

const CardContainerGenericFunctions = styled(CardContainer)`
  position: relative;
  padding: 12px;
  background-color: ${color('support', 'valid')};

  @media screen and ${breakpoint('min-width', 'mobileM')} {
    padding: 24px;
  }

  // Separate content in two columns on tabletM only
  @media screen
  and ${breakpoint('min-width', 'tabletM')}
  and ${breakpoint('max-width', 'laptop')} {
    column-count: 2;
    column-gap: 8px;
  }

  // Generate the arrow / triangle in the left corner
  @media screen and ${breakpoint('min-width', 'tabletM')} {
    ::after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      left: 0px;
      top: 0px;
      border-style: solid;
      border-width: 24px 24px 0 0;
      border-color: #fff transparent transparent transparent;
    }
  }

  ${CardStyle} {
    margin-bottom: 8px;
    height: 73px;
  }

  ${CardMediaWrapperStyle} {
    @media screen and ${breakpoint('max-width', 'mobileL')} {
      max-width: 48px;
        height: 100%;
    }
    @media screen and ${breakpoint('max-width', 'mobileM')} {
      max-width: 40px;
        height: 100%;
    }
  }

  ${CardContentStyle} {
    min-height: inherit;
    align-self: flex-start;
    padding: 8px;

    @media screen and ${breakpoint('min-width', 'tabletS')} {
      height: 73px;
      padding: 6px 12px 6px;
    }
  }

  ${CardActionsStyle} {
    padding-right: 12px;
    padding-left: 0px;
  }

  ${IconStyle} {
    @media screen and ${breakpoint('max-width', 'mobileL')} {
      max-width: 35px;
    }
  }

  ${HeadingStyle} {
    margin-bottom: 0;
    @media screen and ${breakpoint('max-width', 'tabletS')} {
      font-size: 16px;
      line-height: 20px;
    }
  }

  ${ParagraphStyle} {
    line-height: 18px;

    // Fallback if card exceeds the maximum character length
    max-height: 36px;
    overflow: hidden;

    @media screen and ${breakpoint('max-width', 'tabletS')} {
      font-size: 14px;
      line-height: 17px;
    }
  }
`

const CardContainerAboutData = styled(CardContainer)`
  padding-bottom: 24px;

  ${ColumnStyle} > ${HeadingStyle} {
    margin-bottom: 16px;
  }
  ${CardStyle} {
    width: 100%;
  }

  @media screen and ${breakpoint('max-width', 'laptop')} {
    ${CardStyle} {
      margin-bottom: 40px;
    }
  }

  @media screen and ${breakpoint('max-width', 'tabletM')} {
    ${CardStyle} {
      margin-bottom: 24px;
    }
  }

  @media screen and ${breakpoint('min-width', 'laptop')} {
    ${ColumnStyle} > ${HeadingStyle} {
      margin-bottom: 24px;
    }
    ${CardContentStyle} {
      padding-bottom: 56px;
    }
  }
`

const Border = styled.div`
  width: inherit;
  height: 4px;
  margin-bottom: 12px;
  background-color: ${color('tint', 'level3')};

  @media screen and ${breakpoint('min-width', 'laptop')} {
    margin-bottom: 24px;
  }
`

storiesOf('Composed/CardContainer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 0px', background: 'rgb(250,250,250)' }}>
      {storyFn()}
    </div>
  ))
  .add('implementation dataportaal "Generic functions"', () => (
    <CardContainerGenericFunctions maxWidth={415}>
      <Card horizontal>
        <CardMedia backgroundColor="level2" width={73}>
          <Icon size={50}>
            <Map />
          </Icon>
        </CardMedia>
        <CardContent>
          <Heading $as="h4">Kaart</Heading>
          <Paragraph>Zoek en bekijk data op de kaart</Paragraph>
        </CardContent>
        <CardActions>
          <Icon size={15}>
            <ChevronRight />
          </Icon>
        </CardActions>
      </Card>
      <Card horizontal>
        <CardMedia backgroundColor="level2" width={73}>
          <Icon size={50}>
            <Pano />
          </Icon>
        </CardMedia>
        <CardContent>
          <Heading $as="h4">Panoramabeelden</Heading>
          <Paragraph>Kijk 360 graden in het rond</Paragraph>
        </CardContent>
        <CardActions>
          <Icon size={15}>
            <ChevronRight />
          </Icon>
        </CardActions>
      </Card>
      <Card horizontal>
        <CardMedia backgroundColor="level2" width={73}>
          <Icon size={50}>
            <DocumentText />
          </Icon>
        </CardMedia>
        <CardContent>
          <Heading $as="h4">Publicaties</Heading>
          <Paragraph>
            Download onderzoeksrapporten, fasctsheets of het jaarboek
          </Paragraph>
        </CardContent>
        <CardActions>
          <Icon size={15}>
            <ChevronRight />
          </Icon>
        </CardActions>
      </Card>
      <Card horizontal>
        <CardMedia backgroundColor="level2" width={73}>
          <Icon size={50}>
            <Data />
          </Icon>
        </CardMedia>
        <CardContent>
          <Heading $as="h4">Datasets</Heading>
          <Paragraph>Download cijfers en andere (open) databestanden</Paragraph>
        </CardContent>
        <CardActions>
          <Icon size={15}>
            <ChevronRight />
          </Icon>
        </CardActions>
      </Card>
      <Card horizontal>
        <CardMedia backgroundColor="level2" width={73}>
          <Icon size={50}>
            <Table />
          </Icon>
        </CardMedia>
        <CardContent>
          <Heading $as="h4">Tabellen</Heading>
          <Paragraph>Selecteer data en download als spreadsheet</Paragraph>
        </CardContent>
        <CardActions>
          <Icon size={15}>
            <ChevronRight />
          </Icon>
        </CardActions>
      </Card>
      <Card horizontal>
        <CardMedia backgroundColor="level2" width={73}>
          <Icon size={50}>
            <Api />
          </Icon>
        </CardMedia>
        <CardContent>
          <Heading $as="h4">Data services</Heading>
          <Paragraph>Alles over het koppelen van data via APIs</Paragraph>
        </CardContent>
        <CardActions>
          <Icon size={15}>
            <ChevronRight />
          </Icon>
        </CardActions>
      </Card>
    </CardContainerGenericFunctions>
  ))
  .add('implementation dataportaal  "About Data & About this site"', () => (
    <CardContainerAboutData>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}
        >
          <Column span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}>
            <Border />
          </Column>
          <Column span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}>
            <Heading $as="h2">Header one</Heading>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading $as="h6">This is a card</Heading>
                <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
              </CardContent>
            </Card>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading $as="h6">This is a card</Heading>
                <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
              </CardContent>
            </Card>
          </Column>
        </Column>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}
        >
          <Column span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}>
            <Border />
          </Column>
          <Column span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}>
            <Heading $as="h2">Header two</Heading>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading $as="h6">This is a card</Heading>
                <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
              </CardContent>
            </Card>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading $as="h6">This is a card</Heading>
                <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
              </CardContent>
            </Card>
          </Column>
        </Column>
      </Row>
    </CardContainerAboutData>
  ))
