import { ChevronRight, Download, Menu } from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import React from 'react'
import { color } from '../../utils'
import Icon from '../Icon'
import CardContainer from '.'
import Card from '../Card/Card'
import CardContentStyle from '../Card/CardContentStyle'
import CardActions from '../Card/CardActions'
import CardContent from '../Card/CardContent'
import CardMedia from '../Card/CardMedia'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const CardContentStyled = styled(CardContent)`
  padding-top: 8px;
  padding-bottom: 8px;
`

const CardContainerGreen = styled(CardContainer)`
  position: relative;
  background-color: ${color('support', 'valid')};

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

  // Fallback if card exceeds the maximum character length
  ${CardContentStyle} {
    max-height: 75px;
    overflow: hidden;
  }
`

storiesOf('Composed/CardContainer', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px', background: 'rgb(200,200,200)' }}>
      {storyFn()}
    </div>
  ))
  .add('default', () => (
    <CardContainer maxWidth={460}>
      <Card horizontal>
        <CardMedia backgroundColor="level2">
          <Icon size={25}>
            <Menu />
          </Icon>
        </CardMedia>
        <CardContentStyled>
          <Heading as="h6">This is a card</Heading>
          <Paragraph>One line card copy</Paragraph>
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
          <Paragraph>This is a card that has a two line copy</Paragraph>
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
          <Paragraph>One line copy</Paragraph>
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
            What happens if a copy has more than the maximum characters, because
            the backend does not have a limit?
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
    </CardContainer>
  ))
  .add('green - implementation on Dataportaal', () => (
    <CardContainerGreen maxWidth={460}>
      <Card horizontal>
        <CardMedia backgroundColor="level2">
          <Icon size={25}>
            <Menu />
          </Icon>
        </CardMedia>
        <CardContentStyled>
          <Heading as="h6">This is a card</Heading>
          <Paragraph>One line card copy</Paragraph>
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
          <Paragraph>This is a card that has a two line copy</Paragraph>
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
          <Paragraph>One line copy</Paragraph>
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
            What happens if a copy has more than the maximum characters, because
            the backend does not have a limit?
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
    </CardContainerGreen>
  ))
