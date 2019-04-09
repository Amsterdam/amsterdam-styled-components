import {
  AscCore,
  AscDefaultThemeProvider as ThemeProvider,
  StyledComponents,
  Theme,
} from '@datapunt/asc-core'

import IconButton from './components/IconButton'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Typography from './components/Typography'
import TopBar from './components/TopBar'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Button from './components/Button'
import Radio from './components/Radio'
import Focus from './components/Focus'

const { Divider, Icon, GlobalStyle, ListItem } = AscCore

// Components
export {
  Divider,
  Icon,
  Button,
  IconButton,
  Modal,
  Portal,
  ListItem,
  Typography,
  Radio,
  TopBar,
  ShareBar,
  ShareButton,
  Focus,
}

// Non-components exports
export { GlobalStyle, StyledComponents, Theme, ThemeProvider }
