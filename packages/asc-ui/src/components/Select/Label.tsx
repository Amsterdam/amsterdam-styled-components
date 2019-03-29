import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { ReactComponent as Elipsis } from '@datapunt/asc-assets/lib/Icons/Elipsis.svg'
import { ReactComponent as ChevronTop } from '@datapunt/asc-assets/lib/Icons/Chevron-Top.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/Chevron-Down.svg'
import { Icon } from '../..'

const Label = ({ id, label, open, onOpenClose }: any) => {
  return (
    <AscCore.Select.Label.default
      {...{ id }}
      onBlur={() => onOpenClose(false)}
      onClick={() => onOpenClose()}
    >
      {label || (
        <Icon inline>
          <Elipsis />
        </Icon>
      )}
      <Icon inline>{open ? <ChevronDown /> : <ChevronTop />}</Icon>
    </AscCore.Select.Label.default>
  )
}

export default Label
