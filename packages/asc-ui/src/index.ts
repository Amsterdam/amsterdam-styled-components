import { ascDefaultTheme, ServerStyleSheet, Theme } from '@datapunt/asc-core'
import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import Button from './components/Button'
import Card from './components/Card'
import ContextMenu from './components/ContextMenu'
import ContextMenuButtonStyle from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import Divider from './components/Divider'
import Focus from './components/Focus'
import GlobalStyle from './components/GlobalStyle'
import { Column, GridContainer, GridItem, Row } from './components/Grid'
import Header, { HeaderStyles } from './components/Header'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
import Input, { InputStyles } from './components/Input'
import ListItem from './components/ListItem'
import {
  MenuFlyOut,
  MenuInline,
  MenuItem,
  MenuItemLabel,
  MenuItemLink,
  MenuItemTitle,
  MenuStyles,
  MenuToggle,
} from './components/Menu'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Radio from './components/Radio'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Spinner from './components/Spinner'
import TextField, { TextFieldStyles } from './components/TextField'
import TopBar, { TopBarStyles } from './components/TopBar'
import Typography from './components/Typography'
import ThemeProvider from './theme'

export { breakpoint } from './utils'
// Components
export {
  AmsterdamLogo,
  ascDefaultTheme,
  BackDrop,
  Button,
  Card,
  Column,
  ContextMenu,
  ContextMenuButtonStyle,
  ContextMenuItem,
  Divider,
  Focus,
  GlobalStyle,
  GridContainer,
  GridItem,
  Header,
  Icon,
  IconButton,
  Input,
  ListItem,
  MenuFlyOut,
  MenuInline,
  MenuItem,
  MenuItemLabel,
  MenuItemLink,
  MenuItemTitle,
  MenuToggle,
  Modal,
  Portal,
  Radio,
  Row,
  SearchBar,
  SearchBarToggle,
  ServerStyleSheet,
  ShareBar,
  ShareButton,
  Spinner,
  TextField,
  Theme,
  ThemeProvider,
  TopBar,
  Typography,
}

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
