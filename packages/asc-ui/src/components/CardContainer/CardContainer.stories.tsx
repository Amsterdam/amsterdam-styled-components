import { ChevronRight, Download, Menu } from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import React from 'react'
import { color, breakpoint } from '../../utils'
import Icon from '../Icon'
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
import Paragraph from '../Paragraph'
import HeadingStyle from '../Heading/HeadingStyle'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import ColumnStyle from '../Grid/ColumnStyle'

const CardContentStyled = styled(CardContent)`
  padding-top: 8px;
  padding-bottom: 8px;
`

const CardContainerGreen = styled(CardContainer)`
  position: relative;
  background-color: ${color('support', 'valid')};

  @media screen and ${breakpoint('min-width', 'laptop')} {
    ::after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      left: 0px;
      top: 0px;
      border-style: solid;
      border-width: 48px 48px 0 0;
      border-color: #fff transparent transparent transparent;
    }
  }

  ${CardContentStyle} {
    padding: 8px 12px;
    // Fallback if card exceeds the maximum character length
    max-height: 80px;
    overflow: hidden;

    @media screen and ${breakpoint('min-width', 'laptop')} {
      padding: 12px;
    }
  }

  @media screen and ${breakpoint('max-width', 'laptop')} {
    ${CardMediaWrapperStyle} {
      max-width: 48px;
    }
    ${CardActionsStyle} {
      padding-left: 0;
    }
  }
`

const cards = (
  <>
    <Card horizontal>
      <CardMedia backgroundColor="level2">
        <Icon size={25}>
          <Menu />
        </Icon>
      </CardMedia>
      <CardContentStyled>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContentStyled>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
    <Card horizontal>
      <CardMedia backgroundColor="level2">
        <Icon size={25}>
          <Download />
        </Icon>
      </CardMedia>
      <CardContentStyled>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          quisquam!
        </Paragraph>
      </CardContentStyled>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
    <Card horizontal>
      <CardMedia backgroundColor="level2">
        <Icon size={25}>
          <Download />
        </Icon>
      </CardMedia>
      <CardContentStyled>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          provident quasi.
        </Paragraph>
      </CardContentStyled>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
    <Card horizontal>
      <CardMedia backgroundColor="level2">
        <Icon size={25}>
          <Download />
        </Icon>
      </CardMedia>
      <CardContentStyled>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          provident quasi voluptate fuga nulla. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Explicabo, provident quasi voluptate
          fuga nulla.
        </Paragraph>
      </CardContentStyled>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
    <Card horizontal>
      <CardMedia backgroundColor="level2">
        <Icon size={25}>
          <Download />
        </Icon>
      </CardMedia>
      <CardContentStyled>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContentStyled>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  </>
)
const CardContainerOverData = styled(CardContainer)`
  padding-bottom: 24px;

  ${ColumnStyle} > ${HeadingStyle} {
    margin-bottom: 16px;
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
    <div style={{ padding: '40px 10px', background: 'rgb(200,200,200)' }}>
      {storyFn()}
    </div>
  ))
  .add('default', () => <CardContainer>{cards}</CardContainer>)
  .add('green - implementation on Dataportaal', () => (
    <CardContainerGreen maxWidth={460}>{cards}</CardContainerGreen>
  ))
  .add('segment "Over Data & Over deze site"', () => (
    <CardContainerOverData>
      <Row>
        <Column
          wrap
          span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}
        >
          <Column span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}>
            <Border />
          </Column>
          <Column span={{ small: 1, medium: 2, big: 6, large: 6, xLarge: 6 }}>
            <Heading as="h2">Header one</Heading>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading as="h6">This is a card</Heading>
                <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
              </CardContent>
            </Card>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading as="h6">This is a card</Heading>
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
            <Heading as="h2">Header two</Heading>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading as="h6">This is a card</Heading>
                <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
              </CardContent>
            </Card>
          </Column>

          <Column span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}>
            <Card backgroundColor="level2" shadow>
              <CardContent>
                <Heading as="h6">This is a card</Heading>
                <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
              </CardContent>
            </Card>
          </Column>
        </Column>
      </Row>
    </CardContainerOverData>
  ))
