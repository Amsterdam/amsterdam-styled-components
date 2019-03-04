import { Theme, THEME_NAME } from '../theme'

function getThemeColor(
  theme: Theme.ThemeInterface,
  color: Theme.TypeLevel = Theme.TypeLevel.primary,
  variant: string = 'main',
) {
  return (color ? theme[THEME_NAME].colors[color][variant] : '#ff0000')
}

export default getThemeColor
