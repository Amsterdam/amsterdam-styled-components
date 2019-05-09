import { AscCore, ascDefaultTheme, StyledComponents, Theme } from './styles'

import IconButton from './components/IconButton'
import Icon from './components/Icon'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Typography from './components/Typography'
import TopBar from './components/TopBar'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Button from './components/Button'
import Radio from './components/Radio'
import Focus from './components/Focus'
import ContextMenu from './components/ContextMenu'
import ContextMenuButton from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import Header from './components/Header/Header'

import ThemeProvider from './theme'

const { DividerStyle, GlobalStyle, ListItemStyle } = AscCore

// Components
export {
  DividerStyle,
  Icon,
  Button,
  IconButton,
  Modal,
  Portal,
  ListItemStyle,
  Typography,
  Radio,
  TopBar,
  ShareBar,
  ShareButton,
  Focus,
  ContextMenu,
  ContextMenuButton,
  ContextMenuItem,
  Header,
}

export {
  AscCore,
  GlobalStyle,
  StyledComponents,
  Theme,
  ThemeProvider,
  ascDefaultTheme,
}
