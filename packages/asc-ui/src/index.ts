import { ServerStyleSheet, Theme, ascDefaultTheme } from '@datapunt/asc-core'

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
import Menu from './components/Menu/Menu'
import { MenuStyle } from './components/Menu'
import MenuBar from './components/Menu/MenuBar'
import MenuDropDown from './components/Menu/MenuDropDown'
import MenuItem from './components/Menu/MenuItem'
import MenuLabel from './components/Menu/MenuLabel'
import SubMenu from './components/Menu/SubMenu'
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
import ThemeProvider from './theme'

export { breakpoint } from './utils'

export const styles = {
  ...HeaderStyles,
  ...SearchBarStyles,
  ...TextFieldStyles,
  ...MenuStyle,
  ...TopBarStyles,
  ...InputStyles,
  ...SearchBarToggleStyles,
}

// Components
export {
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
  Menu,
  MenuBar,
  MenuDropDown,
  MenuItem,
  MenuLabel,
  SubMenu,
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
