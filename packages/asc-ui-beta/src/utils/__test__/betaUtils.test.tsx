import type { ElementType } from 'react'
import { render, screen } from '@testing-library/react'
import styled from 'styled-components'
import { ThemeProvider, breakpoint } from '@amsterdam/asc-ui/es'
import ascBetaTheme from '../../theme/ascBetaTheme'
import {
  calculateFluidStyle,
  fluidTypoStyle,
  typographyStyle,
} from '../betaUtils'

describe('calculateFluidStyle', () => {
  it('should return the correct css clamp rule', () => {
    const rule = calculateFluidStyle(16, 32)

    expect(rule).toEqual(
      `clamp(    1rem,    1rem + 1 *     (100vw - 20rem) / 100,    2rem  )`,
    )
  })

  it('should return the correct css clamp rule when using custom min and max screen width', () => {
    const rule = calculateFluidStyle(16, 32, 100, 200)

    expect(rule).toEqual(
      `clamp(    1rem,    1rem + 1 *     (100vw - 6.25rem) / 6.25,    2rem  )`,
    )
  })
})

interface TestComponent {
  as?: ElementType
  styleAs?: ElementType
  small?: boolean
  intro?: boolean
  gutterBottom?: any
  strong?: boolean
  darkBackground?: boolean
}

const Paragraph = styled.p<TestComponent>`
  ${fluidTypoStyle}
  ${typographyStyle}
`

describe('fluidTypoStyle', () => {
  it('should return the correct css for the component from the theme', () => {
    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Paragraph data-testid="paragraph" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'font-size',
      'clamp( 1.125rem,1.125rem + 0.375 * (100vw - 20rem) / 100,1.5rem )',
    )
  })

  it('should return the correct css for the component from the theme when using as', () => {
    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Paragraph data-testid="paragraph" as="h1" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'font-size',
      'clamp( 2rem,2rem + 3 * (100vw - 20rem) / 100,5rem )',
    )
  })

  it('should return the correct css for the component from the theme when using styleAs', () => {
    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Paragraph data-testid="paragraph" styleAs="h1" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'font-size',
      'clamp( 2rem,2rem + 3 * (100vw - 20rem) / 100,5rem )',
    )
  })

  it('should return the correct css for the component from the theme when using small prop', () => {
    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Paragraph data-testid="paragraph" small />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'font-size',
      'clamp( 1rem,1rem + 0.125 * (100vw - 20rem) / 100,1.125rem )',
    )
  })

  it('should return the correct css for the component from the theme when using intro prop', () => {
    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Paragraph data-testid="paragraph" intro />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'font-size',
      'clamp( 1.125rem,1.125rem + 0.75 * (100vw - 20rem) / 100,1.875rem )',
    )
  })
})

describe('typographyStyle', () => {
  it('should return the correct margin bottom when using a single number', () => {
    render(<Paragraph data-testid="paragraph" gutterBottom={20} />)

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'margin-bottom',
      '20px',
    )
  })

  it('should return the correct margin bottom when using an object', () => {
    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Paragraph
          data-testid="paragraph"
          gutterBottom={{ small: 10, large: 30 }}
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'margin-bottom',
      '30px',
    )

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'margin-bottom',
      '10px',
      {
        media: `screen and ${breakpoint(
          'max-width',
          'laptop',
        )({ theme: ascBetaTheme })}`,
      },
    )
  })

  it('should return the correct font-weight', () => {
    render(<Paragraph data-testid="paragraph" strong />)

    expect(screen.getByTestId('paragraph')).toHaveStyleRule(
      'font-weight',
      '700',
    )
  })

  it('should return the correct color', () => {
    render(<Paragraph data-testid="paragraph" darkBackground />)

    expect(screen.getByTestId('paragraph')).toHaveStyleRule('color', 'white')
  })
})
