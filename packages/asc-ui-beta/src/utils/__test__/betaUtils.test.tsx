import { render, screen } from '@testing-library/react'
import styled from 'styled-components'
import { ThemeProvider, breakpoint } from '../../../../asc-ui'
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
})

describe('fluidTypoStyle', () => {
  it('should return the correct css for the component from the theme', () => {
    const Button = styled.button`
      ${fluidTypoStyle}
    `

    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Button data-testid="button" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('button')).toHaveStyleRule(
      'font-size',
      'clamp( 1.125rem,1.125rem + 0.375 * (100vw - 20rem) / 100,1.5rem )',
    )
  })
})

describe('typographyStyle', () => {
  const Component = styled.div`
    ${typographyStyle}
  `

  it('should return the correct margin bottom when using a single number', () => {
    render(<Component data-testid="component" gutterBottom={20} />)

    expect(screen.getByTestId('component')).toHaveStyleRule(
      'margin-bottom',
      '20px',
    )
  })

  it('should return the correct margin bottom when using an object', () => {
    render(
      <ThemeProvider theme={ascBetaTheme}>
        <Component
          data-testid="component"
          gutterBottom={{ small: 10, large: 30 }}
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('component')).toHaveStyleRule(
      'margin-bottom',
      '30px',
    )

    expect(screen.getByTestId('component')).toHaveStyleRule(
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
    render(<Component data-testid="component" strong />)

    expect(screen.getByTestId('component')).toHaveStyleRule(
      'font-weight',
      '700',
    )
  })

  it('should return the correct color', () => {
    render(<Component data-testid="component" darkBackground />)

    expect(screen.getByTestId('component')).toHaveStyleRule('color', 'white')
  })
})
