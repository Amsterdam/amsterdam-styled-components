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
import { Icon } from '../..'
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
import Link from '../Link'
import LinkStyle from '../Link/LinkStyle'

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
    ${CardStyle}, ${LinkStyle} {
      display: inline-flex;
      width: 100%;
      break-inside: avoid;
    }
    ${LinkStyle} {
      display: inline-flex;
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

  ${LinkStyle} {
    position: relative;
    width: 100%;
    min-height: 66px;
    margin-bottom: 8px;

    &:hover ${HeadingStyle} {
      color: ${color('secondary')};
      text-decoration: underline;
    }

    &:focus {
      background: none;

      ${CardStyle}:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        ${({ theme }) =>
          `border: 4px solid ${color('support', 'focus')({ theme })};`}
      }
    }
  }

  ${CardMediaWrapperStyle} {
    width: 13%;

    @media screen and ${breakpoint('min-width', 'tabletM')} {
      width: 23%;

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
      padding: 6px 12px 6px;
    }
  }

  ${CardActionsStyle} {
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
  }
`

storiesOf('Composed/CardContainer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 0px', background: 'rgb(250,250,250)' }}>
      {storyFn()}
    </div>
  ))
  .add('implementation dataportaal "Generic functions"', () => (
    <Row>
      <Column
        className="column-with-heading"
        span={{ small: 1, medium: 2, big: 6, large: 5, xLarge: 5 }}
      >
        <CardContainerGenericFunctions>
          <Link href="/" linkType="blank">
            <Card horizontal>
              <CardMedia backgroundColor="level2">
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
          </Link>
          <Link href="/" linkType="blank">
            <Card horizontal>
              <CardMedia backgroundColor="level2">
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
          </Link>
          <Link href="/" linkType="blank">
            <Card horizontal>
              <CardMedia backgroundColor="level2">
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
          </Link>
          <Link href="/" linkType="blank">
            <Card horizontal>
              <CardMedia backgroundColor="level2">
                <Icon size={20}>
                  <Data />
                </Icon>
              </CardMedia>
              <CardContent>
                <Heading $as="h4">Datasets</Heading>
                <Paragraph>
                  Download cijfers en andere (open) databestanden
                </Paragraph>
              </CardContent>
              <CardActions>
                <Icon size={15}>
                  <ChevronRight />
                </Icon>
              </CardActions>
            </Card>
          </Link>
          <Link href="/" linkType="blank">
            <Card horizontal>
              <CardMedia backgroundColor="level2">
                <Icon size={25}>
                  <Table />
                </Icon>
              </CardMedia>
              <CardContent>
                <Heading $as="h4">Tabellen</Heading>
                <Paragraph>
                  Selecteer data en download als spreadsheet
                </Paragraph>
              </CardContent>
              <CardActions>
                <Icon size={15}>
                  <ChevronRight />
                </Icon>
              </CardActions>
            </Card>
          </Link>
          <Link href="/" linkType="blank">
            <Card horizontal>
              <CardMedia backgroundColor="level2">
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
          </Link>
        </CardContainerGenericFunctions>
      </Column>
    </Row>
  ))
