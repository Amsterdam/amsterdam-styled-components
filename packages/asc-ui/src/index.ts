import { ascDefaultTheme, ServerStyleSheet, Theme } from '@datapunt/asc-core'
import AmsterdamLogo, { AmsterdamLogoStyles } from './components/AmsterdamLogo'
import BackDrop, { BackDropStyles } from './components/BackDrop'
import {
  BlogBody,
  BlogContent,
  BlogHeader,
  BlogMetaList,
  BlogPost,
  BlogSidebar,
  BlogStyles,
} from './components/Blog'
import { Article, ArticleStyle } from './components/Blog/Article'
import Button from './components/Button'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardStyles,
} from './components/Card'
import CardContainer, { CardContainerStyle } from './components/CardContainer'
import ContextMenu from './components/ContextMenu'
import ContextMenuButtonStyle from './components/ContextMenu/ContextMenuButton'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'
import {
  CustomHTMLBlock,
  CustomHTMLBlockStyle,
} from './components/CustomHTMLBlock'
import Divider from './components/Divider'
import DocumentCover from './components/DocumentCover'
import Focus from './components/Focus'
import GlobalStyle from './components/GlobalStyle'
import {
  Column,
  Container,
  GridContainer,
  GridItem,
  Row,
} from './components/Grid'
import Header, { HeaderStyles } from './components/Header'
import Heading from './components/Heading'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
import Image from './components/Image'
import ImageCard, {
  ImageCardContent,
  ImageCardStyles,
} from './components/ImageCard'
import Input, { InputStyles } from './components/Input'
import Link from './components/Link'
import LinkList, { LinkListItem } from './components/LinkList'
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
import Paragraph from './components/Paragraph'
import Portal from './components/Portal'
import Publication from './components/Publication'
import Radio from './components/Radio'
import SearchBar, { SearchBarStyles } from './components/SearchBar'
import SearchBarToggle, {
  SearchBarToggleStyles,
} from './components/SearchBarToggle'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Spinner from './components/Spinner/Spinner'
import TextField, { TextFieldStyles } from './components/TextField'
import TopBar, { TopBarStyles } from './components/TopBar'
import Typography from './components/Typography'
import ThemeProvider from './theme'

export { breakpoint, color } from './utils'
// Components
export {
  LinkList,
  LinkListItem,
  AmsterdamLogo,
  BackDrop,
  CustomHTMLBlock,
  Button,
  Card,
  CardContainer,
  CardActions,
  CardContent,
  CardMedia,
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

export const styles = {
  ...AmsterdamLogoStyles,
  ...BackDropStyles,
  ...CardStyles,
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
  CardContainerStyle,
}
