import Typography from 'typography'

const options = {
  baseFontSize: '16px',
  baseLineHeight: '26px',
  modularScales: [{
    scale: 'diminished fourth',
  }, {
    maxWidth: '768px',
    scale: 'minor third',
  }],
  googleFonts: [],
  headerFontFamily: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif',
  bodyFontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif',
  headerGray: 20,
  headerGrayHue: 0,
  bodyGray: 20,
  bodyGrayHue: 0,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  fontFaces: [],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
