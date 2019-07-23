import React from 'react'
import styled from '@datapunt/asc-core'
import { storiesOf } from '@storybook/react'
import ImageCard from './ImageCard'
import { ImageCardContent } from './ImageCardContent'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import { breakpoint } from '../../utils'
import { ImageCardWrapperStyle } from './ImageCardStyle'
import TypographyStyle from '../Typography/TypographyStyle'

const ImageCardContainer = styled.section`
  width: calc(100% + 24px);
  margin-left: -12px;
  margin-right: -12px;
  display: flex;
  flex-wrap: wrap;

  @media screen and ${breakpoint('min-width', 'laptop')} {
    width: calc(100% + 4px);
  }
`
const ImageCardWrapperBig = styled.div`
  flex-basis: 100%;
  @media screen and ${breakpoint('min-width', 'tabletM')} {
    flex-basis: ${100 - 100 / 3}%;
  }
`
const ImageCardWrapperSmall = styled.div`
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;

  ${ImageCardWrapperStyle} {
    flex-basis: 100%;
    @media screen and ${breakpoint('min-width', 'mobileL')} {
      flex-basis: calc(50% - 24px);
    }
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      flex-basis: 100%;
    }
  }

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    flex-wrap: nowrap;
    flex-basis: ${100 / 3}%;
    flex-direction: column;

    ${ImageCardWrapperStyle} {
      flex-basis: 100%;
    }
  }

  ${TypographyStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      line-height: inherit;
      font-size: inherit;
    }
    @media screen and ${breakpoint('max-width', 'tabletM')} {
      line-height: 20px;
      font-size: 14px;
    }
  }
`

storiesOf('Atoms/ImageCard', module)
  .add('default state', () => (
    <div style={{ maxWidth: '600px' }}>
      <ImageCard backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg">
        <ImageCardContent>
          <Heading as="h6" styleAs="h2">
            Jeugdwerkloosheid Amsterdam daalt naar 6,2%
          </Heading>
        </ImageCardContent>
      </ImageCard>
    </div>
  ))
  .add('loading state', () => (
    <div style={{ maxWidth: '600px' }}>
      <ImageCard
        loading
        backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg"
      >
        <ImageCardContent>
          <Heading as="h6" styleAs="h2">
            Jeugdwerkloosheid Amsterdam daalt naar 6,2%
          </Heading>
          <Paragraph gutterBottom={0}>
            Amsterdamse jongeren even vaak werkloos als gemiddeld in Nederland
          </Paragraph>
        </ImageCardContent>
      </ImageCard>
    </div>
  ))
  .add('dataportaal implementation', () => (
    <Row>
      <Column wrap span={{ small: 1, medium: 2, big: 6, large: 8, xLarge: 8 }}>
        <div style={{ width: '100%' }}>
          <ImageCardContainer>
            <ImageCardWrapperBig>
              <ImageCard
                margin={12}
                backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg"
              >
                <ImageCardContent>
                  <Heading as="h6" styleAs="h2">
                    Jeugdwerkloosheid Amsterdam daalt naar 6,2%
                  </Heading>
                  <Paragraph gutterBottom={0}>
                    Amsterdamse jongeren even vaak werkloos als gemiddeld in
                    Nederland
                  </Paragraph>
                </ImageCardContent>
              </ImageCard>
            </ImageCardWrapperBig>
            <ImageCardWrapperSmall>
              <ImageCard
                margin={12}
                backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg"
              >
                <ImageCardContent>
                  <Heading as="h6" strong gutterBottom={0} styleAs="p">
                    Jeugdwerk&shy;loosheid Amsterdam daalt naar 6,2%
                  </Heading>
                </ImageCardContent>
              </ImageCard>
              <ImageCard
                margin={12}
                backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg"
              >
                <ImageCardContent>
                  <Heading as="h6" strong gutterBottom={0} styleAs="p">
                    Amsterdammers voelen zich veiliger in het OV
                  </Heading>
                </ImageCardContent>
              </ImageCard>
            </ImageCardWrapperSmall>
          </ImageCardContainer>
        </div>
      </Column>
    </Row>
  ))
