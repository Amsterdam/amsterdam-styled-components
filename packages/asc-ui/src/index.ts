import { ascDefaultTheme, ServerStyleSheet, Theme } from '@datapunt/asc-core'
import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import IconButton from './components/IconButton'
import Icon from './components/Icon'
import Input, { InputStyles } from './components/Input'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Heading from './components/Heading'
import Link from './components/Link'
import Paragraph from './components/Paragraph'
import TopBar, { TopBarStyles } from './components/TopBar'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Button from './components/Button'
import Card from './components/Card'
import {
  CustomHTMLBlock,
  CustomHTMLBlockStyle,
} from './components/CustomHTMLBlock'
import Radio from './components/Radio'
import Focus from './components/Focus'
import ContextMenu from './components/ContextMenu'
import ContextMenuButtonStyle from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import Divider from './components/Divider'
import Header, { HeaderStyles } from './components/Header'
import Image from './components/Image'
import ListItem from './components/ListItem'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import TextField, { TextFieldStyles } from './components/TextField'
import GlobalStyle from './components/GlobalStyle'
import ImageCard, {
  ImageCardContent,
  ImageCardStyles,
} from './components/ImageCard'
import {
  GridContainer,
  GridItem,
  Column,
  Row,
  Container,
} from './components/Grid'
import {
  BlogBody,
  BlogPost,
  BlogStyles,
  BlogMetaList,
  BlogContent,
  BlogHeader,
  BlogSidebar,
} from './components/Blog'
import Typography from './components/Typography'
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
import ThemeProvider from './theme'
import Spinner from './components/Spinner/Spinner'
import LinkList, { LinkListItem } from './components/LinkList'
import Publication from './components/Publication'
import DocumentCover from './components/DocumentCover'
import { Article, ArticleStyle } from './components/Blog/Article'

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
  ...BlogStyles,
  ...ImageCardStyles,
  CustomHTMLBlockStyle,
  ArticleStyle,
}

// Components
export {
  LinkList,
  LinkListItem,
  AmsterdamLogo,
  BackDrop,
  CustomHTMLBlock,
  Button,
  Card,
  Column,
  ContextMenu,
  ContextMenuButtonStyle,
  ContextMenuItem,
  Focus,
  GlobalStyle,
  Container,
  GridContainer,
  GridItem,
  Header,
  Icon,
  Divider,
  IconButton,
  Image,
  Input,
  ImageCard,
  ImageCardContent,
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
  Typography,
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
  BlogPost,
  Article,
  Publication,
  Link,
  Paragraph,
  Heading,
  BlogBody,
  BlogMetaList,
  BlogContent,
  BlogHeader,
  BlogSidebar,
  ascDefaultTheme,
  DocumentCover,
}
