import Typography from "typography"
import Theme from "typography-theme-github"

Theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  },
  'a.anchor': {
    boxShadow: 'none'
  },
  'a:hover,a:active': {
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  'h2 code,li code': {
    fontSize: '1.5rem'
  },
  'h3 code': {
    fontSize: '1.25rem'
  },
  'p code': {
    fontSize: '1rem',
  }
})

Theme.headerFontFamily.unshift('Fredoka One')
const typography = new Typography(Theme)

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
