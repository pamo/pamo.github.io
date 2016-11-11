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

# Client Storage for Performance
Dru Knox, Product Manager, Chrome

> Client storage is a low-hanging fruit for performance improvements, not just offline functionality
* Deck is stacked against web development when it comes to [network costs](https://bit.ly/network-costs)

## Cache as a performance Optimization
There are different levels of caching.

**Browser cache** 
* Unpredictable only works for network responses
* Not granular

**Optimized browser cache**
* Proactive page improvements
* Repeat visits, but still only for network responses
* Still relying on the browser storing things

**Content caching**
* The point at which better control and value is reached.
* Proactive page load improvements but for all response types.
* Image blobs in cache storage.
* Can control and predict content but still relying on the network.
* Can be granular for content but not for network requests.
* Full cache control.

**Proactive (so good it gives Dru :joy:)**
* Fully predictable
  * Guarantee a performance increase to your users
* All response types
* More granularity for BOTH network and content responses

> Content caching is the sweet spot within reach for most developers today.

### Best practices
Client-side Chunking
  * Pull in an initial bundle and kick off requests for smaller pieces.
    * Saves network bandwidth overall
  * Preload pages user might visit
  * Save commonly repeated components (hero images, etc).

### Technologies to use in the browser
* **Cache Storage** for URL Addressable content
  * Utilities: `sw-toolbox`, `sw-prechace`, offline Webpack plugin
* **indexdb**  for simple structured data
  * Utilities: localForage (with promises), idb, PouchDB..

Keep in mind overall storage footprint. Browsers are limited in capabilities.
* Chrome 6% of free space per origin
* Firefox 10% of free space
* safari at least 10% of free space
* Edge is more complicated but based on other factors.

> Minimum budget available for performance improvements across all devices and browsers is 50MB

**It can mean 16 seconds of load time saved across averaged visits!**

### Browser Eviction
* In Chrome and Firefox, when disk is full, LRU (least-recently-used)
domain in the cache is removed
* Safari never clears it.

### Looking Forward
**In Development**
* [idb observers](https://bit.ly/idb-observers)
* [Async cookies](https://bit.ly/async-cookies)

**Areas to explore**
* [idb-promises](https://bit.ly/idb-promises)
* [writable files](https://bit.ly/writable-files)

# V8 Engine :blue_car:
Seth Thompson, Product Manager, Web Platform
How to measure improvements or performance on loads?
* [Microbenchmarks](https://www.npmjs.com/package/microbenchmark) on language features (like pushing elements to an array in a loop)
* Static Test Suites: Sophisticated benchmarks Game Boy emulator, Raytracer, but not a real picture of all websites. (Octane test suite)
* Real webpages: Instrumentation to analyze _where_ time is being spent to load websites.

> Improvement in V8 has led to a median of 5% performance improvement on the top 25 sites on the web.

## Memory Consumption
Focused on reducing the memory load and found Chrome's overall consumption dropped by 35%.

# Future App Model: Advanced Service Workers
Jake Archibald
[Service Worker Specification](https://github.com/slightlyoff/ServiceWorker)

##  Browser Support
* Considering: Safari
* Implementing: IE
* Shipped: Opera, Chrome, Firefox

## Streams
* Will be able to use Transform [Streams](https://streams.spec.whatwg.org/#ts-model) to handle text or images in a more powerful way.
* Ideally we would want to serve a single HTTP response and combine streams with service workers and caching to dynamically serve files.
  * Kinda complicated to deal with this in code and processing.

## Foreign Fetching
* Service workers can use Foreign Fetching to fetch fonts with their own service.
* [Cross-origin Service Workers](https://developers.google.com/web/updates/2016/09/foreign-fetch)
* **Create REST-like APIs that work offline.**

## Background Fetch
* Vague how this works right now.
* Use case would be like downloading a movie or uploading photos. Notification would be sent once it completes.
* Easily cancel-able, highly transparent (team is keen on keeping this secure).
