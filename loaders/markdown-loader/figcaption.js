const regExPlugin = require('markdown-it-regexp');

export default regExPlugin(
  /~\[([^\]]*)]\(([^)]*)\)/,
  (match) => {
    const caption = match[1];
    const url = match[2];
    return `<figure><img src=${url} /><figcaption>${caption}</figcaption></figure>`;
  }
);
