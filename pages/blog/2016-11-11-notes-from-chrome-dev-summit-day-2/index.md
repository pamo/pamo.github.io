---
title: Notes from Chrome Dev Summit Day 2
date: '2016-11-11T18:02:10.758Z'
layout: post
path: "/chrome-dev-summit-day-2/"
readNext: "/chrome-dev-summit-day-1/"
---
Notes from Day 2 of Google's Chrome Dev Summit in November of 2016.
My goal is to annotate points with interesting links to topics I would like to explore later on.
Each primary heading is dedicated to one of the talks on the agenda.

# How they Built It

## Housing.com

* Challenged by low-end phones and cellular connectivity.
* Monolithic desktop and mobile implementation.
* Performance was impacted heavily.

### Mobile Mission: Better Discovery

* Mobile web makes it easier for this.
* Mobile web was cheaper! 5 rupees vs a lot more for native.
* Browser support as a first step.

Built [Housing Go](https://tinyurl.com/housingPWA) and had many Feats
* 30% faster page load
* 10% longer sessions
* 40% lower bounce rate
* 38% conversion increase.

:key: **Key Metrics**
* Time to deliver assets
* Reduced HTML to 15kb!
* Preload Critical JS
* Time to first paint
* Experimented with server side rendering. Measure first before implementation.
* App shell
* First load saw a white screen of death to meaningful content
* Loading screen of purgatory 2.2s to 7s
* Improvement s
* Time to first enabled JS interaction
* Server-side rendering allows for this

### Lazy Loading and Lessen the Amount of JS Code
* Code splitting with Webpack 2
* JS and CSS sharding
* Intent based chunking: when a user performs a specific interaction without route change.
* e.g. A notify view is only loaded when the user clicks on the notify button. No need to load this if the user never makes the interaction.

### PRPL -- "Purple"
* Push notifications
* Render server-side
* Pre-cache assets with service workers
* Lazy Load resources on demand

### Experimenting
* Migrating from React to preact + preact-concat
* PWA + AMP

## Lyft.com
### Why?
* Greater reach to old devices
* 8% iOS and 3% Android will be unsupported on older OSes
* No support for Windows or Amazon Fire
* Less resources necessary to support so many devices
* Reduction friction by not requiring a download
* Highly inefficient process that can lose 20% of users
* They don't have enough storage or don't like the permissions necessary
* deep-linking with other apps (like google maps) is more seamless since there's no need to download an app.
* Faster uploads and experimentation
* Hours not weeks to approve a PWA vs app for production

## Timeline
* 4x less engineers vs native to get up and running in just a month

## Features
* Seamless Web Payments
* Auto sign-in
* Service worker takes care of notifications
* Offline feedback submission with Background Sync

### Javascript Diet
* Remove unused code with tree shaking (40% reduction)
  * Angular specific minification with TypeScript and Closure Compiler.
  * 4kb gzipped!
  * Technologies and techniques: State driven routing, lodash, TypeScript, a little bit of React, etc.

### Downsides
  * StackOverflow answers are lacking
  * limitations with iOS Safari ¯\ _(ツ)_/¯

### Learnings
  * Using CSS Animation for opacity infinitely will crash the browser!

# From PWA to AMP (Accelerated Mobile Pages)
  * Bounce rate is killer. 3 seconds is a long time but it's also a very short time.
  * Load performance budget is actually <1 second with RTT handshakes, etc.
  * Overall landscape is grim. Average mobile page takes 19 seconds and 77% of sites take 10+ to load. Most pages have over 200 HTTP requests (mostly ad related).

## Web Component Library for Highly Portable Content
  * AMP HTML
  * Sped up by caching
  * Faster loading across platforms
  * Common use case is content management system.

## AMP Cache
  * Super fast CDN-like
  * Cheaper to pre-render because position of each element is known.
  * No 3rd party JS is loaded.
  * One less privacy issue.
  * Open source library.
* Sandboxed amp-iframes can include anything (?)

## AMP or PWA?
  The constraints of the AMP Cache are
  * No user-authored JS
  * No custom Service Worker
  * No push notifications
  * etc.
  AMP is
  * Instant delivery
  * Optimized discovery
  * No user scripts
  * Static content
  PWA is
  * Advanced Platform Features
  * Highly Dynamic
  * Slower first delivery
  * Not easily embedded

## AMP as a PWA
  * [AMPByExample.com](http://ampbyexample.com/) -- showcase AMP components.
  * First load is AMP, next interaction on the origin prompts to install Service Worker

# Production PWAs with Frameworks
  Addy Osmani, Developer Programs Engineer

  > Frameworks can be fast if we put the work in.

  But what does it mean to be fast?

## Code Splitting
  * Defer the work that's not needed until the future.
## :eyeglasses: :key: Perceived Key Moments in Modern Loading
  * IS it happening?
  * IS it useful?
  * IS it usable?

## How is the React community shipping out code?
  * JS Module Bundle? 83% using Webpack.
  * Code splitting? 58% thought they _were_, but not really.

## Advice
  * Try out Lighthouse over remote debugging to get a real-world perspective.
  * Don't keep the main thread busy.
* Code Splitting with Webpack can be done in many ways
  * require.ensure
    * [Docs for Webpack 1](https://webpack.github.io/docs/code-splitting.html)
  * bundle-loader (auto wraps your code in a require.ensure)
* [Use the React router](http://moduscreate.com/code-splitting-for-react-router-with-es6-imports/)
* [PRPL Pattern](https://bit.ly/prpl-pattern) for structuring and serving PWAs
* [HTTP/2 with the Aggressive Splitting Plugin](https://bit.ly/webpack-http2)
  * Gets more granular with the chunks you're serving to your users.
> Ask what's in your bundle and question if you need all of those dependencies
* [Webpack Performance Budgets/Insights RFC](https://github.com/webpack/webpack/issues/3216) on github to help identify
    * large chunks
    * large entries
    * patterns that notice areas of improvement
* Try [Preact](https://github.com/developit/preact) for React on a Diet
* [source-map-auditing](https://bit.ly/source-map-explorer)
* [sw-precache with Webpack](https://bit.ly/webpack-precache)
* There are some gotchas with code splitting and Webpack around CORS.

  > Support all target users using progressive enhancement.

## Universal JS has issues
* Makes it easy to get stuck in uncanny valley (empty app shell)
  * `renderToString` is not as fast as we think.
  * Some plugins to consider: `react-dom-stream` `react-ssr-optimization`

  Take a look at [Progressive Web Apps with React series](https://bit.ly/pwa-react)

