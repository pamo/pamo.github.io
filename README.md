Likes Coffee
=============================
[![Build Status](https://app.snap-ci.com/pamo/pamo.github.io/branch/development/build_image)](https://app.snap-ci.com/pamo/pamo.github.io/branch/development)

Codebase for my [statically generated blog](http://likescoffee.com/).
Uses [Gatsby](https://github.com/gatsbyjs/gatsby) as a React framework to generate HTML from Markdown.
Uses [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment and specifies the branch to push to (master).
Github user pages publish from the master branch.

Deployed to [http://pamo.github.io](http://pamo.github.io) and [http://likescoffee.com/](http://likescoffee.com)

The master branch is the generated static content, [development](https://github.com/pamo/pamo.github.io/tree/development) branch contains source codes.

To run a local development server and lint javascript run:
```
yarn start
```

To deploy static content to github:
```
yarn deploy
```

To write a new post:
```
yarn post
```
