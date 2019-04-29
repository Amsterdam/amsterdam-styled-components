import React from 'react'
import { ReactComponent as ChevronDownIcon } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { Icon } from '../..'

type Props = {
  position?: string
  open?: boolean
}

const ChevronDown: React.FC<Props> = ({ position, open }) => (
  <Icon
    inline
    size={24}
    padding={4}
    rotate={
      (position === 'bottom' && !open) || (position !== 'bottom' && open)
        ? 180
        : 0
    }
  >
    <ChevronDownIcon />
  </Icon>
)

ChevronDown.defaultProps = {
  position: 'top',
  open: false,
}

export default ChevronDown
