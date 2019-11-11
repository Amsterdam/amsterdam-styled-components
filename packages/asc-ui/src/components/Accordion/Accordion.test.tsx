import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import { cleanup, render } from '@testing-library/react'
import * as React from 'react'
import Accordion from './Accordion'

const theme = {
  ...ascDefaultTheme,
}

describe('Accordion', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Accordion>
          Accordeon ingeklapt met meer tekst dan dat zichtbaar is in dit
          resolutie
        </Accordion>
      </ThemeProvider>,
    )

    expect(
      queryByText(
        /Accordeon ingeklapt met meer tekst dan dat zichtbaar is in dit resolutie/,
      ),
    ).not.toBeNull()
  })
})
