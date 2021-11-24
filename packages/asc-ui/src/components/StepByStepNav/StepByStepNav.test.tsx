import StepByStepNav from './StepByStepNav'

describe('StepByStepNav', () => {
  it('should render', () => {
    const { container } = render(<StepByStepNav>Foo</StepByStepNav>)
    expect(container.firstChild).toBeDefined()
  })
})
