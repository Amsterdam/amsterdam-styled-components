import React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Ellipsis } from '@datapunt/asc-assets/lib/Icons/Ellipsis.svg'
import { ReactComponent as FacebookPadded } from '@datapunt/asc-assets/lib/Icons/FacebookPadded.svg'
import { ReactComponent as Twitter } from '@datapunt/asc-assets/lib/Icons/Twitter.svg'
import { ReactComponent as Linkedin } from '@datapunt/asc-assets/lib/Icons/Linkedin.svg'
import { ReactComponent as Email } from '@datapunt/asc-assets/lib/Icons/Email.svg'
import { ReactComponent as Print } from '@datapunt/asc-assets/lib/Icons/Print.svg'
import { AscCore } from '../../styles'
import { ContextMenu, ContextMenuItem, IconStyle } from '../..'

storiesOf('Composed/ContextMenu', module)
  .add('default', () => (
    <ContextMenu>
      <ContextMenuItem role="button" onClick={() => {}}>
        One
      </ContextMenuItem>
      <ContextMenuItem role="button" onClick={() => {}}>
        Two
      </ContextMenuItem>
    </ContextMenu>
  ))
  .add('position bottom', () => (
    <ContextMenu position={AscCore.ContextMenuTypes.Position.bottom}>
      <ContextMenuItem role="button" onClick={() => {}}>
        One
      </ContextMenuItem>
      <ContextMenuItem role="button" onClick={() => {}}>
        Two
      </ContextMenuItem>
    </ContextMenu>
  ))
  .add('with label', () => (
    <ContextMenu label="I'm a label!">
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
      icon={
        <IconStyle padding={4} inline size={24}>
          <Ellipsis />
        </IconStyle>
      }
    >
      <ContextMenuItem
        role="button"
        divider
        onClick={() => {
          window.print()
        }}
        icon={
          <IconStyle padding={4} inline size={24}>
            <Print />
          </IconStyle>
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
          <IconStyle inline size={24}>
            <FacebookPadded />
          </IconStyle>
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
          <IconStyle inline size={24} padding={4}>
            <Twitter />
          </IconStyle>
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
          <IconStyle inline size={24} padding={4}>
            <Linkedin />
          </IconStyle>
        }
      >
        Deel via Linkedin
      </ContextMenuItem>
      <ContextMenuItem
        role="button"
        onClick={() => window.open(`mailto:mail@mail.com`, '_blank')}
        icon={
          <IconStyle inline size={24} padding={4}>
            <Email />
          </IconStyle>
        }
      >
        Deel via E-mail
      </ContextMenuItem>
    </ContextMenu>
  ))
