import Typography from 'typography';
import theme from 'typography-theme-fairy-gates';

theme.overrideThemeStyles = ({ rhythm }) => ({
  a: {
    backgroundImage: 'none',
  },
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(0.5),
    marginBottom: rhythm(0.5),
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}
export default typography;
