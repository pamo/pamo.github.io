import Typography from 'typography';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import gray from 'gray-percentage';
import theme from 'typography-theme-fairy-gates';

theme.overrideThemeStyles = ({ rhythm, scale }) => ({
  a: {
    backgroundImage: 'none',
  },
  blockquote: {
    ...scale(0.8),
    fontFamily: 'athelas, georgia, sans-serif',
    lineHeight: rhythm(1.5),
    border: 0,
    color: gray(5),
    paddingLeft: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  'blockquote.twitter-tweet': {
    ...scale(1/6),
    borderColor: '#eee #ddd #bbb',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
    fontWeight: 300,
    fontFamily: 'inherit',
    fontStyle: 'normal',
    padding: rhythm(0.85),
    maxWidth: '468px',
  },
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(0.5),
    marginBottom: rhythm(0.5),
  },
  [MOBILE_MEDIA_QUERY]: {
    blockquote: {
      color: gray(5),
      border: 0,
      paddingLeft: rhythm(9/16),
      marginLeft: rhythm(-3/4),
      marginRight: 0,
    },
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}
export default typography;
