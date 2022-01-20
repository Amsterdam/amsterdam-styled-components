import type { FunctionComponent, HTMLAttributes } from 'react'
import type { StepByStepNavProps } from './StepByStepNavStyle'

import StepByStepNavStyle, {
  OrderdedList,
  Label,
  ListItem,
  transitionBreakpoint,
} from './StepByStepNavStyle'

const StepByStepNav: FunctionComponent<
  StepByStepNavProps & HTMLAttributes<HTMLElement>
> = ({ activeItem, className, breakpoint, ...props }) => {
  const { steps, stepsCompleted } = props
  let realActiveItem = 0

  if (!activeItem || activeItem < 1) {
    realActiveItem = 1
  } else if (stepsCompleted || activeItem > steps.length) {
    realActiveItem = steps.length
  } else {
    realActiveItem = activeItem
  }

  return (
    <StepByStepNavStyle
      activeItem={realActiveItem}
      aria-label="progress"
      className={className}
      role="group"
      {...props}
    >
      <OrderdedList breakpoint={breakpoint}>
        {steps.map(({ label }, index) => (
          <ListItem
            activeItem={realActiveItem}
            aria-current={
              !stepsCompleted && index === realActiveItem - 1 ? 'step' : 'false'
            }
            breakpoint={breakpoint}
            key={label}
            {...props}
          >
            <Label itemType={props.itemType} breakpoint={breakpoint}>
              {label}
            </Label>
          </ListItem>
        ))}
      </OrderdedList>
    </StepByStepNavStyle>
  )
}

StepByStepNav.defaultProps = {
  activeItem: 1,
  breakpoint: transitionBreakpoint,
  className: '',
  itemType: 'none',
}

export default StepByStepNav
