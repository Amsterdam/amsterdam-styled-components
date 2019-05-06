import React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Ellipsis } from '@datapunt/asc-assets/lib/Icons/Ellipsis.svg'
import { ReactComponent as FacebookPadded } from '@datapunt/asc-assets/lib/Icons/FacebookPadded.svg'
import { ReactComponent as Twitter } from '@datapunt/asc-assets/lib/Icons/Twitter.svg'
import { ReactComponent as Linkedin } from '@datapunt/asc-assets/lib/Icons/Linkedin.svg'
import { ReactComponent as Email } from '@datapunt/asc-assets/lib/Icons/Email.svg'
import { ReactComponent as Print } from '@datapunt/asc-assets/lib/Icons/Print.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { AscCore } from '../../styles'
import { ContextMenu, ContextMenuItem, Icon } from '../..'

storiesOf('Composed/ContextMenu', module)
  .add('default', () => (
    <ContextMenu arrowIcon={<ChevronDown />}>
      <ContextMenuItem role="button" onClick={() => {}}>
        One
      </ContextMenuItem>
      <ContextMenuItem role="button" onClick={() => {}}>
        Two
      </ContextMenuItem>
    </ContextMenu>
  ))
  .add('position bottom', () => (
    <ContextMenu
      arrowIcon={<ChevronDown />}
      position={AscCore.ContextMenuTypes.Position.bottom}
    >
      <ContextMenuItem role="button" onClick={() => {}}>
        One
      </ContextMenuItem>
      <ContextMenuItem role="button" onClick={() => {}}>
        Two
      </ContextMenuItem>
    </ContextMenu>
  ))
  .add('with label', () => (
    <ContextMenu arrowIcon={<ChevronDown />} label="I'm a label!">
      <ContextMenuItem role="button" onClick={() => {}}>
        One
      </ContextMenuItem>
      <ContextMenuItem role="button" onClick={() => {}}>
        Two
      </ContextMenuItem>
    </ContextMenu>
  ))
  .add('example of actual usage', () => (
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
  ))
