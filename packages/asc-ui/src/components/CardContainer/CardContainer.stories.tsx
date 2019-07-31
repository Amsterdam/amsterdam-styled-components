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

    // Fallback in case of having an unequal count of cards
    // eg: 5 cards instead of 6
    // because that breaks the design in Firefox and Safari
    padding-bottom: calc(24px - 8px); // Calculate the padding-bottom minus margin-bottom of the card
    ${CardStyle} {
      display: inline-flex;
      width: 100%;
      break-inside: avoid;
    }
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
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      ${IconStyle} {
        transform: scale(1.15);
      }
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
    width: inherit;
    padding-right: 12px;
    padding-left: 0px;
  }

  ${IconStyle} {
    @media screen and ${breakpoint('max-width', 'mobileL')} {
      max-width: 36px;
    }
  }

  ${HeadingStyle} {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }

  ${ParagraphStyle} {
    font-size: 14px;
    line-height: 17px;

    // Fallback in case card exceeds the maximum character length
    max-height: 36px;
    overflow: hidden;
  }
`

const CardContainerAboutData = styled(CardContainer)`
  ${ColumnStyle} {
    margin-bottom: 16px;

    &.column-with-heading {
      margin-top: 16px;
      flex-direction: column;

      &:first-of-type {
        margin-top: 0;
      }
    }
  }

  ${CardStyle} {
    width: 100%;
  }

  ${CardContentStyle} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  // The media query below is not using the breakpoint function
  // @media screen and ${breakpoint('min-width', 'tabletM')} {
  // because the Grid changes at exactly 768px, instead of breakpoint which is 768.02px
  // so that means that 768px styles different from 769px...
  @media screen and (min-width: 768px) {
    ${ColumnStyle} {
      margin-bottom: 48px;

      &.column-with-heading {
        margin-top: 0;
        margin-bottom: 24px;
      }
    }
  }
`

const Border = styled.div`
  height: 4px;
  margin-bottom: 16px;
  background-color: ${color('tint', 'level3')};
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
          <Icon size={20}>
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
          <Icon size={30}>
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
          <Icon size={30}>
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
          <Icon size={20}>
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
          <Icon size={25}>
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
          <Icon size={30}>
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
  .add('implementation dataportaal "About Data & About this site"', () => (
    <CardContainerAboutData>
      <Row>
        <Column
          className="column-with-heading"
          span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}
          order={{ small: 1, medium: 1, big: 1, large: 1, xLarge: 1 }}
        >
          <Border />
          <Heading $as="h2" styleAs="h1">
            Header one
          </Heading>
        </Column>
        <Column
          span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}
          order={{ small: 2, medium: 2, big: 2, large: 3, xLarge: 3 }}
        >
          <Card backgroundColor="level2" shadow>
            <CardContent>
              <Heading $as="h4">This is a card</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet.
              </Paragraph>
            </CardContent>
          </Card>
        </Column>
        <Column
          span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}
          order={{ small: 3, medium: 3, big: 3, large: 4, xLarge: 4 }}
        >
          <Card backgroundColor="level2" shadow>
            <CardContent>
              <Heading $as="h4">
                This is a card with very very very long content
              </Heading>
              <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
            </CardContent>
          </Card>
        </Column>

        <Column
          className="column-with-heading"
          span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}
          order={{ small: 4, medium: 4, big: 4, large: 2, xLarge: 2 }}
        >
          <Border />
          <Heading $as="h2" styleAs="h1">
            Header two
          </Heading>
        </Column>

        <Column
          span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}
          order={{ small: 5, medium: 5, big: 5, large: 5, xLarge: 5 }}
        >
          <Card backgroundColor="level2" shadow>
            <CardContent>
              <Heading $as="h4">This is a card</Heading>
              <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
            </CardContent>
          </Card>
        </Column>

        <Column
          span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}
          order={{ small: 6, medium: 6, big: 6, large: 6, xLarge: 6 }}
        >
          <Card backgroundColor="level2" shadow>
            <CardContent>
              <Heading $as="h4">This is a card</Heading>
              <Paragraph>Lorem ipsum dolor sit amet. </Paragraph>
            </CardContent>
          </Card>
        </Column>
      </Row>
    </CardContainerAboutData>
  ))
