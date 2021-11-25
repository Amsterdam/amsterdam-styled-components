import type { FunctionComponent, HTMLAttributes } from 'react'
import type { StepByStepNavProps } from './StepByStepNavStyle'

import StepByStepNavStyle from './StepByStepNavStyle'
import Typography from '../Typography'

const StepByStepNav: FunctionComponent<
  StepByStepNavProps & HTMLAttributes<HTMLElement>
> = (props) => {
  const { activeItem, steps, stepsCompleted } = props
  let realActiveItem: number

  if (!activeItem || activeItem < 1) {
    realActiveItem = 1
  } else if (stepsCompleted || activeItem > steps.length) {
    realActiveItem = steps.length
  } else {
    realActiveItem = activeItem
  }

  return (
    <StepByStepNavStyle
      {...props}
      activeItem={realActiveItem}
      role="group"
      aria-label="progress"
    >
      <ol>
        {steps.map(({ label }, index) => (
          <li
            key={label}
            aria-current={
              !stepsCompleted && index === realActiveItem - 1 && 'step'
            }
          >
            <Typography as="span">{label}</Typography>
          </li>
        ))}
      </ol>
    </StepByStepNavStyle>
  )
}

StepByStepNav.defaultProps = {
  activeItem: 1,
  className: '',
  itemType: 'none',
}

export default StepByStepNav
