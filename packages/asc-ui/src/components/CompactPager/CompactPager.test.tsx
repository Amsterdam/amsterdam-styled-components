import { render, fireEvent } from '@testing-library/react'
import CompactPager, { determineTotalPages } from './CompactPager'
import { PREV_BUTTON, NEXT_BUTTON } from './test-ids'
import { ThemeProvider } from '../../theme'

describe('CompactPager', () => {
  function MockComponent(props: any) {
    return (
      <ThemeProvider>
        <CompactPager page={1} pageSize={20} collectionSize={60} {...props} />
      </ThemeProvider>
    )
  }

  it('should change the page when pressing prev button', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(
      <MockComponent page={2} onPageChange={onPageChangeMock} />,
    )

    fireEvent.click(getByTestId(PREV_BUTTON))
    expect(onPageChangeMock).toHaveBeenCalledWith(1)
  })

  it('should not change the page at the bounds when pressing the prev button', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(
      <MockComponent page={1} onPageChange={onPageChangeMock} />,
    )

    fireEvent.click(getByTestId(PREV_BUTTON))
    expect(onPageChangeMock).not.toHaveBeenCalled()
  })

  it('should change the page when pressing next button', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(
      <MockComponent page={1} onPageChange={onPageChangeMock} />,
    )

    fireEvent.click(getByTestId(NEXT_BUTTON))
    expect(onPageChangeMock).toHaveBeenCalledWith(2)
  })

  it('should not change the page at the bounds when pressing the next button', () => {
    const onPageChangeMock = jest.fn()
    const { getByTestId } = render(
      <MockComponent page={3} onPageChange={onPageChangeMock} />,
    )

    fireEvent.click(getByTestId(NEXT_BUTTON))
    expect(onPageChangeMock).not.toHaveBeenCalled()
  })

  describe('determineTotalPages', () => {
    it('should determine the amount of pages', () => {
      const PAGE_SIZE = 20
      const overBound = determineTotalPages(63, PAGE_SIZE)
      const underBound = determineTotalPages(58, PAGE_SIZE)
      const exactBound = determineTotalPages(60, PAGE_SIZE)
      const noCollection = determineTotalPages(0, PAGE_SIZE)
      const negativeCollection = determineTotalPages(-10, PAGE_SIZE)
      const noPageSize = determineTotalPages(60, 0)
      const negativePageSize = determineTotalPages(60, -10)

      expect(overBound).toEqual(4)
      expect(underBound).toEqual(3)
      expect(exactBound).toEqual(3)
      expect(noCollection).toEqual(1)
      expect(negativeCollection).toEqual(1)
      expect(noPageSize).toEqual(1)
      expect(negativePageSize).toEqual(1)
    })
  })
})
