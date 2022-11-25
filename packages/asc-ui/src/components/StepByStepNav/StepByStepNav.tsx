import type { HTMLAttributes } from 'react'
import type { StepByStepNavProps } from './StepByStepNavStyle'

import StepByStepNavStyle, {
  OrderdedList,
  Label,
  ListItem,
  transitionBreakpoint,
  ComponentWrapper,
} from './StepByStepNavStyle'

function StepByStepNav({
  activeItem,
  className,
  breakpoint,
  ...props
}: StepByStepNavProps & HTMLAttributes<HTMLElement>) {
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
        {steps.map(({ label, component }, index) => {
          const isActive = index === realActiveItem - 1
          return (
            <ListItem
              activeItem={realActiveItem}
              aria-current={!stepsCompleted && isActive ? 'step' : 'false'}
              breakpoint={breakpoint}
              key={label}
              {...props}
            >
              <Label itemType={props.itemType} breakpoint={breakpoint}>
                {label}
              </Label>
              {component && isActive && (
                <ComponentWrapper breakpoint={breakpoint}>
                  {component}
                </ComponentWrapper>
              )}
            </ListItem>
          )
        })}
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
