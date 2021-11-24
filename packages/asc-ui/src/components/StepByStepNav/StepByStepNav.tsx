import type { FunctionComponent, HTMLAttributes } from 'react'
import type { StepByStepNavProps } from './StepByStepNavStyle'

import StepByStepNavStyle from './StepByStepNavStyle'
import Typography from '../Typography'

const StepByStepNav: FunctionComponent<
  StepByStepNavProps & HTMLAttributes<HTMLElement>
> = (props) => {
  const { activeIndex, steps } = props

  return (
    <StepByStepNavStyle {...props} role="group" aria-label="progress">
      <ol>
        {steps.map(({ label }, index) => (
          <li key={label} aria-current={index === activeIndex && 'step'}>
            <Typography as="span">{label}</Typography>
          </li>
        ))}
      </ol>
    </StepByStepNavStyle>
  )
}

StepByStepNav.defaultProps = {
  activeIndex: 1,
  className: '',
  indexType: 'none',
}

export default StepByStepNav
