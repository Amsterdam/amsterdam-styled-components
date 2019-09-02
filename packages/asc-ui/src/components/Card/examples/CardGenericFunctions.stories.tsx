import React from 'react'
import {
  Api,
  ChevronRight,
  Data,
  DocumentText,
  Map,
  Pano,
  Table,
} from '@datapunt/asc-assets'
import styled from '@datapunt/asc-core'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import {
  Card,
  CardActions,
  CardContainer,
  CardContent,
  CardMedia,
  Column,
  Heading,
  Icon,
  Link,
  Paragraph,
  Row,
  themeColor,
  breakpoint,
  styles,
} from '../../..'
import { LoadingInterface } from '../../shared/types'

const CardContainerGenericFunctions = styled(CardContainer)`
  position: relative;
  padding: 24px;
  background-color: ${themeColor('support', 'valid')};

  @media screen and ${breakpoint('min-width', 'mobileM')} {
    padding: 24px;
  }

  /* Separate content in two columns on tabletM only */
  @media screen and ${breakpoint('min-width', 'tabletM')} and ${breakpoint(
  'max-width',
  'laptop',
)} {
    margin-top: 40px;
    column-count: 2;
    column-gap: 8px;

    /*
      Fallback in case of having an unequal count of cards
     eg: 5 cards instead of 6
     because that breaks the design in Firefox and Safari
    */
    padding-bottom: calc(24px - 8px); /* Calculate the padding-bottom minus margin-bottom of the card */
    ${/* sc-selector */ styles.CardStyle}, ${styles.LinkStyle} {
      display: inline-flex;
      width: 100%;
      break-inside: avoid;
    }

    ${styles.LinkStyle} {
      display: inline-flex;
    }
  }

  /* Generate the arrow / triangle in the left corner */
  @media screen and ${breakpoint('min-width', 'tabletM')} {
    ::after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      left: 0;
      top: 0;
      border-style: solid;
      border-width: 24px 24px 0 0;
      border-color: #fff transparent transparent transparent;
    }
  }

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    display: block;
    height: 100%;
  }


  ${styles.LinkStyle} {
    position: relative;
    width: 100%;
    margin-bottom: 8px;

    &:hover ${styles.HeadingStyle} {
      color: ${themeColor('secondary')};
      text-decoration: underline;
    }

    &:focus {
      background: none;

      ${/* sc-selector */ styles.CardStyle}::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        ${({ theme }) =>
          `border: 4px solid ${themeColor('support', 'focus')({ theme })};`}
      }
    }
  }

  ${styles.CardMediaWrapperStyle} {
    width: 13%;
    
    @media screen and ${breakpoint('max-width', 'mobileL')} {
      min-width: 50px;

      ${styles.IconStyle} {
        transform: scale(0.85);
      }
    }

    @media screen and ${breakpoint('min-width', 'tabletM')} {
      width: 23%;

      ${styles.IconStyle} {
        transform: scale(1.15);
      }
    }
  }

  ${styles.CardContentStyle} {
    min-height: inherit;
    align-self: flex-start;
    padding: 8px;

    @media screen and ${breakpoint('min-width', 'tabletS')} {
      padding: 6px 12px 6px;
    }
  }

  ${styles.CardActionsStyle} {
    padding-right: 12px;
    padding-left: 0;
  }

  ${styles.IconStyle} {
    @media screen and ${breakpoint('max-width', 'mobileL')} {
      max-width: 36px;
    }
  }

  ${styles.HeadingStyle} {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }

  ${styles.ParagraphStyle} {
    font-size: 14px;
    line-height: 17px;
  }

  ${/* sc-selector */ styles.CardStyle} {
    min-height: 73px;
  }

  ${/* sc-selector */ styles.CardStyle}:last-of-type {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
        margin-bottom: 0;
    }
  }

`

// eslint-disable-next-line import/prefer-default-export
export const DataportaalCardGenericFunctions: React.FC<LoadingInterface> = ({
  loading,
}) => (
  <CardContainerGenericFunctions>
    <Link href="/" linkType="blank">
      <Card horizontal loading={loading}>
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
      <Card horizontal loading={loading}>
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
      <Card horizontal loading={loading}>
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
      <Card horizontal loading={loading}>
        <CardMedia backgroundColor="level2">
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
    </Link>
    <Link href="/" linkType="blank">
      <Card horizontal loading={loading}>
        <CardMedia backgroundColor="level2">
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
    </Link>
    <Link href="/" linkType="blank">
      <Card horizontal loading={loading}>
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
)

storiesOf('Atoms/Card/Implementation', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 0px', background: 'rgb(250,250,250)' }}>
      {storyFn()}
    </div>
  ))
  .addDecorator(withKnobs)
  .add('Dataportaal "Generic functions"', () => (
    <Row hasMargin={false}>
      <Column
        className="column-with-heading"
        span={{ small: 1, medium: 2, big: 6, large: 5, xLarge: 5 }}
        push={{ small: 0, medium: 0, big: 0, large: 7, xLarge: 7 }}
      >
        <DataportaalCardGenericFunctions loading={boolean('laodong', false)} />
      </Column>
    </Row>
  ))
