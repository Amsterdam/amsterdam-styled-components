import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import type { ItemType, Step } from './StepByStepNavStyle'

import { transitionBreakpoint } from './StepByStepNavStyle'
import { ThemeProvider, ascDefaultTheme } from '../../theme'
import { breakpoint } from '../../utils'
import StepByStepNav from './StepByStepNav'

const steps: Step[] = [
  { label: 'item #1' },
  { label: 'item #2' },
  { label: 'item #3' },
  { label: 'Lorem ipsum dolor sit amet. Hic sunt dracones' },
  { label: 'item #4' },
]

describe('StepByStepNav', () => {
  it('renders correctly', () => {
    const types: Array<ItemType> = ['none', 'numeric', 'checkmark']

    types.forEach((itemType) => {
      ;[true, false].forEach((stepsCompleted) => {
        const { unmount } = render(
          <StepByStepNav
            steps={steps}
            itemType={itemType}
            stepsCompleted={stepsCompleted}
          />,
        )

        expect(screen.getByText(steps[0].label)).toBeInTheDocument()
        expect(screen.getByText(steps[1].label)).toBeInTheDocument()
        expect(screen.getByText(steps[2].label)).toBeInTheDocument()
        expect(screen.getByText(steps[3].label)).toBeInTheDocument()
        expect(screen.getByText(steps[4].label)).toBeInTheDocument()

        if (stepsCompleted) {
          expect(
            screen
              .getAllByRole('listitem')
              .filter((item) => item.getAttribute('aria-current') === 'step'),
          ).toHaveLength(0)
        } else {
          expect(screen.getAllByRole('listitem')[0]).toHaveAttribute(
            'aria-current',
            'step',
          )
        }

        unmount()
      })
    })
  })

  it('renders the active step', () => {
    const { rerender } = render(<StepByStepNav steps={steps} activeItem={3} />)

    expect(screen.getAllByRole('listitem')[2]).toHaveAttribute(
      'aria-current',
      'step',
    )

    expect(screen.getAllByRole('listitem')[1]).toHaveAttribute(
      'aria-current',
      'false',
    )

    expect(screen.getAllByRole('listitem')[3]).toHaveAttribute(
      'aria-current',
      'false',
    )

    // negative index
    rerender(<StepByStepNav steps={steps} activeItem={-1} />)

    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute(
      'aria-current',
      'step',
    )

    // index bigger than available steps
    rerender(<StepByStepNav steps={steps} activeItem={99} />)

    expect(screen.getAllByRole('listitem')[4]).toHaveAttribute(
      'aria-current',
      'step',
    )
  })

  it('applies the correct breakpoints', () => {
    const { rerender } = render(
      <ThemeProvider>
        <StepByStepNav steps={steps} />
      </ThemeProvider>,
    )

    expect(screen.getByLabelText('progress')).toHaveStyleRule(
      'display',
      'none',
      {
        media: `screen and ${breakpoint(
          'max-width',
          'mobileS',
        )({ theme: ascDefaultTheme })}`,
      },
    )

    expect(screen.getByRole('list')).toHaveStyleRule('display', 'flex', {
      media: `screen and ${transitionBreakpoint}`,
    })

    const newBreakpoint = breakpoint(
      'max-width',
      'laptop',
    )({ theme: ascDefaultTheme })

    rerender(
      <ThemeProvider>
        <StepByStepNav steps={steps} breakpoint={newBreakpoint} />
      </ThemeProvider>,
    )

    expect(screen.getByRole('list')).toHaveStyleRule('display', 'flex', {
      media: `screen and ${newBreakpoint}`,
    })
  })
})
