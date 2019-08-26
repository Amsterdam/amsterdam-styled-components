import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import styled from '@datapunt/asc-core'
import React from 'react'
import {
  Card,
  Heading,
  Paragraph,
  Row,
  Column,
  Link,
  CardContainer,
  CardContent,
  styles,
  themeColor,
  breakpoint,
} from '../../..'
import { LoadingInterface } from '../../shared/types'

const CardContainerAboutData = styled(CardContainer)`
  margin-top: 40px;
  
  ${styles.ColumnStyle} {
    margin-bottom: 16px;

    &.column-with-heading {
      margin-top: 16px;
      flex-direction: column;

      &:first-of-type {
        margin-top: 0;
      }
    }
  }

  ${styles.LinkStyle} {
    width: 100%;
    height: 100%;

    &:focus ${styles.CardStyle} {
      background: none;
    }
  }

  ${styles.CardStyle} {
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover {
      ${({ theme }) =>
        `box-shadow: 2px 2px ${themeColor('secondary')({ theme })};`}

      ${styles.HeadingStyle} {
        color: ${themeColor('secondary')};
        text-decoration: underline;
      }
    }
  }

  ${styles.CardContentStyle} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  /* 
    The media query below is not using the breakpoint function
    @media screen and ${breakpoint('min-width', 'tabletM')} {
    because the Grid changes at exactly 768px, instead of breakpoint which is 768.02px
    so that means that 768px styles different from 769px...
   */
  @media screen and (min-width: 768px) {
    ${styles.ColumnStyle} {
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
  background-color: ${themeColor('tint', 'level3')};
`

// eslint-disable-next-line import/prefer-default-export
export const DataportaalCardAboutData: React.FC<LoadingInterface> = ({
  loading,
}) => (
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
        <Link href="/" linkType="blank">
          <Card backgroundColor="level2" shadow loading={loading}>
            <CardContent>
              <Heading $as="h4">This is a card</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet.
              </Paragraph>
            </CardContent>
          </Card>
        </Link>
      </Column>
      <Column
        span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}
        order={{ small: 3, medium: 3, big: 3, large: 4, xLarge: 4 }}
      >
        <Link href="/" linkType="blank">
          <Card backgroundColor="level2" shadow loading={loading}>
            <CardContent>
              <Heading $as="h4">
                This is a card with very very very long content
              </Heading>
              <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
            </CardContent>
          </Card>
        </Link>
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
        <Link href="/" linkType="blank">
          <Card backgroundColor="level2" shadow loading={loading}>
            <CardContent>
              <Heading $as="h4">This is a card</Heading>
              <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
            </CardContent>
          </Card>
        </Link>
      </Column>

      <Column
        span={{ small: 1, medium: 2, big: 3, large: 3, xLarge: 3 }}
        order={{ small: 6, medium: 6, big: 6, large: 6, xLarge: 6 }}
      >
        <Link href="/" linkType="blank">
          <Card backgroundColor="level2" shadow loading={loading}>
            <CardContent>
              <Heading $as="h4">This is a card</Heading>
              <Paragraph>Lorem ipsum dolor sit amet. </Paragraph>
            </CardContent>
          </Card>
        </Link>
      </Column>
    </Row>
  </CardContainerAboutData>
)

storiesOf('Atoms/Card/Implementation', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 0px', background: 'rgb(250,250,250)' }}>
      {storyFn()}
    </div>
  ))
  .addDecorator(withKnobs)
  .add('implementation dataportaal "About Data & About this site"', () => (
    <DataportaalCardAboutData loading={boolean('loading', false)} />
  ))
