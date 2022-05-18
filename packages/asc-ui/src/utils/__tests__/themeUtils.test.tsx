import { render } from '@testing-library/react'
import styled from 'styled-components'
import { BACKDROP_Z_INDEX } from '../../components/shared/constants'
import { ascDefaultTheme } from '../../theme'
import ThemeProvider from '../../theme/ThemeProvider'
import {
  breakpoint,
  getTypographyFromTheme,
  getTypographyValueFromProperty,
  getValueFromTheme,
  showAboveBackDrop,
  svgFill,
  themeColor,
  themeSpacing,
} from '../themeUtils'

const { colors, typography } = ascDefaultTheme

describe('getColorFromTheme', () => {
  const theme = {
    ...ascDefaultTheme,
    colors: {
      ...colors,
      primary: {
        main: '#fff',
        dark: '#000',
      },
    },
  }

  it('should return the requested color from theme', () => {
    expect(themeColor('primary', 'main')({ theme })).toBe('#fff')
    expect(themeColor('primary', 'dark')({ theme })).toBe('#000')
    expect(themeColor('primary')({ theme })).toBe('#fff')
  })

  it('should return the default color when the colorType is not provided', () => {
    expect(themeColor()({ theme })).toBe('#ffffff')
  })
})

describe('getTypographyFromTheme', () => {
  it('should return the requested typography from theme', () => {
    const Component = styled.div`
      ${getTypographyFromTheme()}
    `

    const { getByTestId } = render(
      <ThemeProvider>
        <Component data-testid="paragraph" as="p" />
      </ThemeProvider>,
    )

    expect(getByTestId('paragraph')).toHaveStyleRule('font-weight', '400')
  })
})

describe('getTypographyValueFromProperty', () => {
  const theme = {
    ...ascDefaultTheme,
    typography: {
      ...typography,
    },
  }
  it('should the value without a breakpoint', () => {
    expect(
      getTypographyValueFromProperty('h1', 'lineHeight')({ theme }),
    ).toEqual('30px')
  })

  it('should the value with a breakpoint', () => {
    expect(
      getTypographyValueFromProperty('h1', 'lineHeight', 'laptop')({ theme }),
    ).toEqual('38px')
  })

  it('should return an empty string if no results could be found', () => {
    expect(
      getTypographyValueFromProperty('h1', 'lineHeight', 'tabletS')({ theme }),
    ).toEqual('')
  })
})

describe('breakpoint', () => {
  const theme = {
    ...ascDefaultTheme,
  }

  it('should return the right breakpoint', () => {
    expect(breakpoint('max-width', 'desktopL')({ theme })).toEqual(
      '(max-width: 2559px)',
    )
    expect(breakpoint('min-width', 'mobileL')({ theme })).toEqual(
      '(min-width: 414px)',
    )
  })
})

describe('svgFill', () => {
  const theme = {
    ...ascDefaultTheme,
  }

  it('should return the right fill from a literal color', () => {
    expect(svgFill('#004699')({ theme })).toContain('#004699')
  })

  it('should return the right fill from a theme color', () => {
    expect(svgFill(themeColor('primary', 'main'))({ theme })).toContain(
      '#004699',
    )
  })
})

describe('themeSpacing', () => {
  const theme = {
    ...ascDefaultTheme,
  }
  it('should return the result of n * theme spacing', () => {
    expect(themeSpacing(0)({ theme })).toBe('0')
    expect(themeSpacing(1)({ theme })).toBe('8px')
    expect(themeSpacing(2)({ theme })).toBe('16px')
    expect(themeSpacing(3)({ theme })).toBe('24px')
  })

  it('should accept up to 4 parameters and return a spaced separated string with the results', () => {
    expect(themeSpacing(1, 3)({ theme })).toBe('8px 24px')
    expect(themeSpacing(1, 2, 3)({ theme })).toBe('8px 16px 24px')
    expect(themeSpacing(1, 2, 3, 4)({ theme })).toBe('8px 16px 24px 32px')
  })
})

describe('fromTheme', () => {
  const theme = {
    ...ascDefaultTheme,
    colours: { white: '#fff' },
    units: 'px',
    size: 1,
  }

  it('should return a value from the theme object', () => {
    expect(getValueFromTheme('colours.white')({ theme })).toBe(
      theme.colours.white,
    )
    expect(getValueFromTheme('units')({ theme })).toBe(theme.units)
    expect(
      getValueFromTheme('size', (value: number) => value * 2)({ theme }),
    ).toBe(theme.size * 2)
  })

  it('should not throw when a nested key cannot be found', () => {
    expect(() =>
      getValueFromTheme('colours.white.light')({ theme }),
    ).not.toThrow()
  })
})

describe('showAboveBackDrop', () => {
  it('should set the correct z-index when there is a hasBackDrop prop or positive parameter', () => {
    expect(showAboveBackDrop(true)({})[1]).toBeTruthy() // should return an array with the styling rules
    expect(showAboveBackDrop(true)({})[1]).toContain(`${BACKDROP_Z_INDEX + 1}`)

    expect(showAboveBackDrop(true)({ hasBackDrop: false })[1]).toBeTruthy() // should return an array with the styling rules
    expect(showAboveBackDrop(true)({ hasBackDrop: false })[1]).toContain(
      `${BACKDROP_Z_INDEX + 1}`,
    )

    expect(showAboveBackDrop()({ hasBackDrop: true })[1]).toBeTruthy() // should return an array with the styling rules
    expect(showAboveBackDrop()({ hasBackDrop: true })[1]).toContain(
      `${BACKDROP_Z_INDEX + 1}`,
    )

    expect(showAboveBackDrop(false)({ hasBackDrop: true })[1]).toBeTruthy() // should return an array with the styling rules
    expect(showAboveBackDrop(false)({ hasBackDrop: true })[1]).toContain(
      `${BACKDROP_Z_INDEX + 1}`,
    )
  })

  it("should set no correct z-index when there isn't a hasBackDrop prop or positive parameter", () => {
    expect(showAboveBackDrop(false)({})).toBe('')
    expect(showAboveBackDrop()({ hasBackDrop: false })).toBe('')
  })
})
