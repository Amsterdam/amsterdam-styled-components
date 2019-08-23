import React from 'react'
import styled from '@datapunt/asc-core'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import {
  breakpoint,
  Card,
  CardContainer,
  CardContent,
  color,
  Column,
  Heading,
  Link,
  Paragraph,
  Row,
} from '../../../index'

const StyledCardContainer = styled(CardContainer)`
  border-top: 3px solid;
  padding: 24px 0;
`

const ArticleCardsWrapper = styled.div`
  padding: 40px 0 20px;
  background-color: ${color('tint', 'level3')};

  @media screen and ${breakpoint('max-width', 'mobileL')} {
    padding: 40px 0 16px 0;
    margin-left:-20px;
    margin-right:-20px;
    width: calc(100% + 40px)
  }

  @media screen and ${breakpoint('min-width', 'mobileL')} and  ${breakpoint(
  'max-width',
  'tabletM',
)} {
    padding: 48px 12px 16px 12px;
    margin-left:-24px;
    margin-right:-24px;
    width: calc(100% + 48px);
  }
`

const StyledCard = styled(Card)`
  background-color: inherit;
  align-items: flex-start;
  height: 100%;
`

const StyledLink = styled(Link)`
  margin-top: 24px;
`

const StyledCardContent = styled(CardContent)`
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledRow = styled(Row)`
  @media screen and ${breakpoint('min-width', 'tabletM')} {
    margin-top: 12px;
  }
`

// eslint-disable-next-line import/prefer-default-export
export const DataportaalCardArticles: React.FC<{}> = () => (
  <ArticleCardsWrapper>
    <Row>
      <Heading $as="h2" styleAs="h1" gutterBottom={20}>
        Onderzoek, Informatie en Statistiek
      </Heading>
    </Row>
    <StyledRow>
      <Column span={{ small: 1, medium: 1, big: 3, large: 3, xLarge: 3 }}>
        <StyledCardContainer>
          <StyledCard loading={boolean('loading', false)}>
            <StyledCardContent>
              <div>
                <Heading $as="h4">Over IOS</Heading>
                <Paragraph>
                  De afdeling Onderzoek, Informatie en Statistiek (OIS) doet
                  onderzoek, verzamelt en bewerkt data over de stad en maakt de
                  resultaten daarvan bekend op deze website.
                </Paragraph>
              </div>
              <StyledLink linkType="with-chevron" href="/">
                Lees meer
              </StyledLink>
            </StyledCardContent>
          </StyledCard>
        </StyledCardContainer>
      </Column>
      <Column span={{ small: 1, medium: 1, big: 3, large: 3, xLarge: 3 }}>
        <StyledCardContainer>
          <StyledCard loading={boolean('loading', false)}>
            <StyledCardContent>
              <div>
                <Heading $as="h4">Onderzoek</Heading>
                <Paragraph>
                  We doen jaarlijks honderden onderzoeken, van kleine enquêtes
                  tot uitgebreide monitors.
                </Paragraph>
              </div>
              <StyledLink linkType="with-chevron" href="/">
                Lees meer
              </StyledLink>
            </StyledCardContent>
          </StyledCard>
        </StyledCardContainer>
      </Column>
      <Column span={{ small: 1, medium: 1, big: 3, large: 3, xLarge: 3 }}>
        <StyledCardContainer>
          <StyledCard loading={boolean('loading', false)}>
            <StyledCardContent>
              <div>
                <Heading $as="h4">Panels en enquêtes</Heading>
                <Paragraph>
                  We doen jaarlijks honderden onderzoeken, van kleine enquêtes
                  tot uitgebreide monitors.
                </Paragraph>
              </div>
              <StyledLink linkType="with-chevron" href="/">
                Lees meer
              </StyledLink>
            </StyledCardContent>
          </StyledCard>
        </StyledCardContainer>
      </Column>
      <Column span={{ small: 1, medium: 1, big: 3, large: 3, xLarge: 3 }}>
        <StyledCardContainer>
          <StyledCard loading={boolean('loading', false)}>
            <StyledCardContent>
              <div>
                <Heading $as="h4">Publicaties</Heading>
                <Paragraph>
                  Download onderzoeksrapporten, fasctsheets of het ons jaarboek.
                  Het oudste dateert uit 1895!
                </Paragraph>
              </div>
              <StyledLink linkType="with-chevron" href="/">
                Lees meer
              </StyledLink>
            </StyledCardContent>
          </StyledCard>
        </StyledCardContainer>
      </Column>
    </StyledRow>
  </ArticleCardsWrapper>
)

storiesOf('Atoms/Card/Implementation', module)
  .addDecorator(storyFn => <div style={{ padding: '40px 0' }}>{storyFn()}</div>)
  .addDecorator(withKnobs)
  .add('Dataportaal "Article list"', () => <DataportaalCardArticles />)
