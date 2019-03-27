import {
  AscCore,
  ASCDefaultThemeProvider as ThemeProvider,
  StyledComponents,
  Theme,
} from '@datapunt/asc-core'

import IconButton from './components/IconButton'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Typography from './components/Typography'
import TopBar from './components/TopBar'
import SocialBar from './components/SocialBar'
import SocialButton from './components/SocialButton'
import Button from './components/Button'
import Radio from './components/Radio'
import Focus from './components/Focus'

const { Divider, Icon, ButtonBar, GlobalStyle, ListItem } = AscCore

// Components
export {
  Divider,
  Icon,
  Button,
  ButtonBar,
  IconButton,
  Modal,
  Portal,
  ListItem,
  Typography,
  Radio,
  TopBar,
  SocialBar,
  SocialButton,
  Focus,
}

// Non-components exports
export { GlobalStyle, StyledComponents, Theme, ThemeProvider }
