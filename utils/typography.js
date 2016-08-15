import Typography from 'typography';
import theme from 'typography-theme-fairy-gates';

theme.overrideThemeStyles = () => ({
  a: {
    backgroundImage: 'none',
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}
export default typography;
