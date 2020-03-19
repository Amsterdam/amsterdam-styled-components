import React from 'react'
import {
  ChevronDown,
  Print,
  Email,
  Linkedin,
  FacebookPadded,
  Ellipsis,
  Twitter,
} from '@datapunt/asc-assets'
import { ContextMenu, ContextMenuItem, Icon } from '../..'
import { Position } from './types'

export default {
  title: 'Experimental/Composed/ContextMenu',
}

export const Default = () => (
  <ContextMenu arrowIcon={<ChevronDown />}>
    <ContextMenuItem role="button" onClick={() => {}}>
      One
    </ContextMenuItem>
    <ContextMenuItem role="button" onClick={() => {}}>
      Two
    </ContextMenuItem>
  </ContextMenu>
)

export const PositionBottom = () => (
  <ContextMenu arrowIcon={<ChevronDown />} position={Position.bottom}>
    <ContextMenuItem role="button" onClick={() => {}}>
      One
    </ContextMenuItem>
    <ContextMenuItem role="button" onClick={() => {}}>
      Two
    </ContextMenuItem>
  </ContextMenu>
)

export const WithLabel = () => (
  <ContextMenu arrowIcon={<ChevronDown />} label="I'm a label!">
    <ContextMenuItem role="button" onClick={() => {}}>
      One
    </ContextMenuItem>
    <ContextMenuItem role="button" onClick={() => {}}>
      Two
    </ContextMenuItem>
  </ContextMenu>
)

export const ImplementationForDataportaal = () => (
  <ContextMenu
    arrowIcon={<ChevronDown />}
    icon={
      <Icon padding={4} inline size={24}>
        <Ellipsis />
      </Icon>
    }
  >
    <ContextMenuItem
      role="button"
      divider
      onClick={() => {
        window.print()
      }}
      icon={
        <Icon padding={4} inline size={24}>
          <Print />
        </Icon>
      }
    >
      Printen
    </ContextMenuItem>
    <ContextMenuItem
      role="button"
      onClick={() => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=` +
            `${window.location.href}&title=${window.document.title}`,
          '_blank',
        )
      }}
      icon={
        <Icon inline size={24}>
          <FacebookPadded />
        </Icon>
      }
    >
      Deel via Facebook
    </ContextMenuItem>
    <ContextMenuItem
      role="button"
      onClick={() =>
        window.open(
          `https://twitter.com/intent/tweet?url=${window.location.href}` +
            `&text=${window.document.title}`,
          '_blank',
        )
      }
      icon={
        <Icon inline size={24} padding={4}>
          <Twitter />
        </Icon>
      }
    >
      Deel via Twitter
    </ContextMenuItem>
    <ContextMenuItem
      role="button"
      onClick={() =>
        window.open(
          `
          https://www.linkedin.com/shareArticle?url=${window.location.href}` +
            `&mini=true&title=${window.document.title}`,
          '_blank',
        )
      }
      icon={
        <Icon inline size={24} padding={4}>
          <Linkedin />
        </Icon>
      }
    >
      Deel via Linkedin
    </ContextMenuItem>
    <ContextMenuItem
      role="button"
      onClick={() => window.open(`mailto:mail@mail.com`, '_blank')}
      icon={
        <Icon inline size={24} padding={4}>
          <Email />
        </Icon>
      }
    >
      Deel via E-mail
    </ContextMenuItem>
  </ContextMenu>
)
