import Typography from "typography"
import Theme from "typography-theme-github"

// none for now
Theme.overrideThemeStyles = () => ({})

Theme.headerFontFamily.unshift('Fredoka One')
Theme.bodyFontFamily.unshift('Tittilium Web')
const typography = new Typography(Theme)

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
