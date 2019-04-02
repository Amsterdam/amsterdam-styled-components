import React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Ellipsis } from '@datapunt/asc-assets/lib/Icons/Ellipsis.svg'
import { ReactComponent as FacebookPadded } from '@datapunt/asc-assets/lib/Icons/FacebookPadded.svg'
import { ReactComponent as Twitter } from '@datapunt/asc-assets/lib/Icons/Twitter.svg'
import { ReactComponent as Linkedin } from '@datapunt/asc-assets/lib/Icons/Linkedin.svg'
import { ReactComponent as Email } from '@datapunt/asc-assets/lib/Icons/Email.svg'
import { ReactComponent as Print } from '@datapunt/asc-assets/lib/Icons/Print.svg'
import { Menu, MenuItem, Icon } from '../..'

storiesOf('Menu', module)
  .add('default', () => (
    <Menu>
      <MenuItem role="button" onClick={() => {}}>
        One
      </MenuItem>
      <MenuItem role="button" onClick={() => {}}>
        Two
      </MenuItem>
    </Menu>
  ))
  .add('orientation top', () => (
    <Menu orientation="top">
      <MenuItem role="button" onClick={() => {}}>
        One
      </MenuItem>
      <MenuItem role="button" onClick={() => {}}>
        Two
      </MenuItem>
    </Menu>
  ))
  .add('with label', () => (
    <Menu label="I'm a label!">
      <MenuItem role="button" onClick={() => {}}>
        One
      </MenuItem>
      <MenuItem role="button" onClick={() => {}}>
        Two
      </MenuItem>
    </Menu>
  ))
  .add('example of actual usage', () => (
    <Menu
      orientation="top"
      icon={
        <Icon padding={4} inline size={24}>
          <Ellipsis />
        </Icon>
      }
    >
      <MenuItem
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
      </MenuItem>
      <MenuItem
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
      </MenuItem>
      <MenuItem
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
      </MenuItem>
      <MenuItem
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
      </MenuItem>
      <MenuItem
        role="button"
        onClick={() => window.open(`mailto:mail@mail.com`, '_blank')}
        icon={
          <Icon inline size={24} padding={4}>
            <Email />
          </Icon>
        }
      >
        Deel via E-mail
      </MenuItem>
    </Menu>
  ))
