import { ServerStyleSheet, Theme, ascDefaultTheme } from '@datapunt/asc-core'

import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import IconButton from './components/IconButton'
import Icon from './components/Icon'
import Input, { InputStyles } from './components/Input'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Typography from './components/Typography'
import TopBar, { TopBarStyles } from './components/TopBar'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Button from './components/Button'
import Radio from './components/Radio'
import Focus from './components/Focus'
import ContextMenu from './components/ContextMenu'
import ContextMenuButtonStyle from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import Header, { HeaderStyles } from './components/Header'
import Divider from './components/Divider'
import ListItem from './components/ListItem'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import TextField, { TextFieldStyles } from './components/TextField'
import GlobalStyle from './components/GlobalStyle'
import { GridContainer, GridItem } from './components/Grid'
import {
  MenuItemTitle,
  MenuWrapper,
  MenuItemLink,
  MenuItemLabel,
  MenuItem,
  MenuFlyOut,
  Menu,
  MenuStyles,
} from './components/NewMenu'
import ThemeProvider from './theme'

export { breakpoint } from './utils'

export const styles = {
  ...AmsterdamLogoStyles,
  ...BackDropStyles,
  ...HeaderStyles,
  ...SearchBarStyles,
  ...TextFieldStyles,
  ...TopBarStyles,
  ...InputStyles,
  ...SearchBarToggleStyles,
  ...MenuStyles,
}

// Components
export {
  AmsterdamLogo,
  BackDrop,
  Divider,
  Icon,
  Button,
  IconButton,
  Modal,
  TextField,
  Portal,
  ListItem,
  Typography,
  Radio,
  TopBar,
  Input,
  SearchBarToggle,
  ShareBar,
  ShareButton,
  Focus,
  ContextMenu,
  ContextMenuButtonStyle,
  ContextMenuItem,
  MenuWrapper,
  MenuItemTitle,
  MenuItemLink,
  MenuItemLabel,
  MenuItem,
  MenuFlyOut,
  Menu,
  Header,
  SearchBar,
  GlobalStyle,
  ServerStyleSheet,
  Theme,
  ThemeProvider,
  GridContainer,
  GridItem,
  ascDefaultTheme,
}
