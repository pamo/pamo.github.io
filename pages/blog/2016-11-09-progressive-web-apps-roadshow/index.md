---
title: Progressive Web Apps Roadshow
date: '2016-11-09T17:39:35.965Z'
layout: post
path: "/pwa-roadshow/"
draft: true
---

[Agenda](https://events.withgoogle.com/pwa-roadshow-north-america/agenda/)
[Google Web documentation](https://developers.google.com/web)

## Speakers:

* Sam ??
* Alex — AUS — Web standards
* Michael — Programs Engineer — Service workers and web push

## Keynote

*[Pete LePage](https://twitter.com/petele)*: Developer Advocate on the Web team at Google.

The web is:
* One platform for all devices.
* Democratizing.
* Accessible.

### Beginnings
* Ajax was transformative. Dynamic interactions.
* Today: Mobile web is not a thing. Apps for users are more predictable.
* No one goes to the google maps website on their chrome browser in mobile context. More on the desktop.
* Launch-able
* Push notifications — hey com back and look at us!
* 13% vs 87%
* 80% of time is spent in top 3 apps but going to hundreds of different sites within those apps.
* Web is a little bit safer. More predictable. You don't get warnings about getting access to things like contacts.
* Native apps have a lot of capabilities, but web has a lot more reach.
* Average user installs 0 apps per month. Why install another messaging app when you already have the service available? e.g. Separation of Facebook and Messenger.


### :key: Key thing to keep in mind
* PWA are a new level of caring about the quality of the user experience. Stepping up the experience.

### In order to do this, we need to focus on 3 big things:
* Reliable:
  * Get rid of the dinosaur. This never happens in a native app, even in :airplane: mode. It will give you some feedback. We also expect native apps to load instantly.
  * Ajax got us to good enough because we were always connected.
  * Mobile phones are frequently offline. e.g. NYC Metro when you get off the train. a.k.a "Lie-Fi"
* Fast:
  * No jank!
  * Scrolling, load instantly.
  * Time is money. It's not just some esoteric thing. 53% of users abandon sites that take longer than 3 seconds to load. More than half of your users are gonna bounce!
* Engaging:
  * Placement on the home screen.
  * Feel like an immersive full screen app. Developers should have control of manipulating how the app will behave in full screen, how they will be themed, and what the orientation will look like, etc.
  * Push notifications to incentivise the users to come back. Unlock new use cases with weekly vs daily engagement.

### Case study: [Washington Post](http://wapo.com/pwa)
* Treated like a first class citizen when you flip through app "tabs" on android.
* 80 ms story loading improvement!
* Possible with Service Workers.

Other examples: AliExpress. FlipKart.
## Service Workers
* Don't necessarily need to traverse the network every time
* Client-side proxy that is controlled by the developer to manage assets and caching.
* Runs once the PWA is installed.
* Can do more than just intercept network requests: push is built on Service Workers by responding to *Push subscription endpoints*.

> Progressive Web Apps are progressive: End to end. Start at great and then build upon that initial experience.

# How to get started?
* Start secure. This means HTTPS. 
* Geolocation API requires HTTPS.
* Users can trust that the site they're on is your site. No one has intercepted the service worker and the service worker isn't being snooped on.

## 3 Approaches
1. From the ground up. Greenfield
      * App Shell Pattern
      * Konga.com: 92% less data for initial load, 82% less data used for the initial transaction when the user is purchasing.
2. A little bit: "the light approach"
      * AirBerlin: Boarding pass only instead of booking flow. Ready to go at check-in. Don't even need an internet connection.
3. One feature at a time:
      * The Weather Company wanted to offer the same level of push notifications on the web as they do in their native app. Did it in over 30 languages globally.

# Instant loading and offline.
*[Sarah Clark](https://developers.googleblog.com/2015/11/introducing-senior-web-developer.html)*: Program Manager, Google Developer Training. Previous experience: HTML5 instructor around the globe.

A deeper dive into service worker to make it reliable and fast!

> Lie-Fi is a Killer: Loading a webpage is not a single network request. Page might hang somewhere in the load.

> 60% of the world is relying on 2G. We should stop relying on the network because of this.

## More into Service Worker

> Service Workers are the core underpinning of Progressive Web Apps

They allow you you to programmatically intercept network requests to build a cache of files (build your on caching strategy) and even implement partial caching techniques.

There's now an app-like life-cycle to a page with Service Workers. They only wake up when the OS says and only respond to system events.

## Life Cycle
* Service Worker is for the SECOND load.
* Not a get out of jail free card. Still be frugal.
* Install --> Idle
* 2nd load --> Activated --> Idle
* Updating a service worker --> Activated
    * Checks for update, i.e. is the install script different? Yes? Install again and sit idle.

### Heavily Event Driven (Event Handlers)
* Install
  * Required to build the caches or update a cache. Happens every time.
* Activate
  * Garbage collection
* Idle
  * Host for push messages from the OS.
* Active
* Terminated

## Implementation Tips
* **Service worker is at the root level of your app.**
  * Location of the script controls how much of the app is available to control for offline.
  * Possible to scope the app based on the location of the Service Worker
* It needs to be registered and it will return a promise once it's registered.
* Install EventHandler. This will enable you to skip waiting.
* Pre-fetch app resources: here we can specify which files to cache on the install event.
  * Make sure the proper capture is done to avoid losing the whole cache. This was a downside of the AppCache.
  * *event.waitUntil*; Basically a setTimeout to allow everything to complete.
* self.client.claim() -- all the open tabs.
* self.addListener('fetch', ()=>{}); here is where we intercept network requests.
  * Get what you can from the cache and then do the rest.
* A good thing to let the user know is that the app is available offline, otherwise they won't know.

## Caching Strategies
* **Cache First, Fallback to the Network** is not the only strategy.
* **Network, fall back to the cache**. Try to fetch a new version from the network, if it's there, great, otherwise give them the old. Cache and revalidate.
* **Cache then Network**. Give the old, go try to get the new one, update the page if the new one is available. This can be disrupting experience. Let the user opt into getting the new updates.
* **Generic Fallback**. The dinosaur game is not a bad strategy.
* **Cache and network race** (ping both at once). We might thing the cache will win but it might actually be really slow. Slow hardware. Network requests are not free for all users. Don't do this frivolously.

## Tools of the trade

### Chrome Dev Tools now has an Applications Tab
* Service Worker management.
* Inspect the cache.
* Clear the cache.

### Service Worker Toolbox
* [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) on github packaged library.
Grunt/Gulp Generators will write all of the code for you!

# HTTPS: with great power comes great responsibility
*[Pete LePage](https://twitter.com/petele)*

* Do it right! The green :lock: is important. (Why don't we have something similar for offline capabilities?)
  * Users know that this just works.
* Fundamentally a core requirement of user experience.

## Principles
* Identity: who are you talking too? Google and not Goggle dot com.
* Confidentiality: who can read your data? No one else is spying.
* Integrity: who can modify your data? No data tampering between client and server.

## Excuses, excuses! HTTPS doesn't have to be hard
  * My site doesn't need it!
    * PWA requirement. No HTTPS, no PWA.
    * Other APIs that require (or will) it: [getUserMedia](https://developer.mozilla.org/es/docs/Web/API/Navigator/getUserMedia) (camera access), [Push](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), [Encrypted Media Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API), [GeoLocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation), [HTTP/2](https://http2.github.io/faq/).
  * It'll cause performance problems and I'll lose money.
    * Configure HTTP Strict Transport Security to include sub-domains.
        * MaxAge can be set to a short number (not 2592000) in the beginning to make sure it is set ASAP.
    * TLS handshake is slow on mobile devices but you can turn on TLS false start after the first connection to reduce round-trip latency.
    * TLS Session resumption: we know each other, just keep going. Turn on on the server
    * HTTP/2 unlocks massive performance wins. HTTPS will unlock this. Always secure. Supports a lot like multiplexing and server push.
    * Canonical link to help tell servers that there is only _one_ version of the site (HTTP vs HTTPS).
    * Weather.com saw a performance impact when they implemented HTTPS (50ms increase :pensive:) but after moving to HTTP/2 the increase was negated by dropping total load time to 250ms! :tada:
  * It's expensive :dollar:
    * Cost benefit analysis: Pay the certificate price or lose page ranking?
    * [Let's Encrypt](https://letsencrypt.org/getting-started/): Free! Automated CLI tools.
  * Critical 3rd party dependencies don't support HTTPS yet.
    * Hardest one to argue but you can do some advocating to get them to get closer to migration/implementation.
 
Chrome Dev Tools can help identify any security issues (like serving mixed content) with the [Security Panel](https://developers.google.com/web/tools/chrome-devtools/security).

# User Engagement
[Sam Dutton](https://twitter.com/sw12): Google London — Video APIs, Web RTC advocate.

> Crucial idea is that apps work really well no matter the network environment. Smooth and responsive experience builds trust and a connection with the user.

## Experiences that Increase Engagement

* Add to Home Screen
    * People have no incentive to do this because it's broken. Option is buried in menus. Not clear that the app will start where it was bookmarked. Users don't expect this to work offline.
    * [App Manifest](https://developer.chrome.com/extensions/manifest) now allows us to better control the Add to Home Screen capability.
      * JSON Configuration
      * Allows us to set a splash screen.
      * Define start url.
      * Can limit orientation.
      * Specify background color and theme color.
* Install Prompt
  * Rules to automatically prompt create a contract that we promise to the user.
    * Only if the app has an **offline experience**.
    * Manifest defines **what to launch** and how to launch.
    * **User is engaged** and uses the app frequently. There are some heuristics around this topic.
* Web Push Notifications
  * Timely (when), precise (what), relevant (relevant).
  * Browser not needing to be open is a big deal when it comes to CPU performance!
  * Don't send random things to your users. Always ask: is it enough to warrant an interruption?
  > Unwanted interruptions run the risk of being completely blocked. Don't blow it. You'll have plenty of other opportunities to engage with your user.
  * Built on Service Workers.
    * Push Messaging Service allows you to handle incoming messages from the server to wake up the Worker. Only awake when it needs to be. Minimal use of :battery: power and :computer: memory.
  * Make it easy to complete tasks without having to open the app! e.g. Tweeting or Sharing.

## Subscribing Users

There is a simple flow: 
1. In the browser, check if the user is subscribed. 
2. Ask the user to subscribe. 
3. After the subscription is done, send the subscription details (JSON Object with authentication keys) to the server. 
4. Finally save the details on the server.

**Some points**: 
* There are different ways to subscribe: Specific/contextual or user initiated (e.g. Settings or preferences).
* Users can unsubscribe when they want to and this event can be handled programmatically.
* userVisibleOnly: true -- always use a notification when a push notification is received. (can't use this as a message bus to send data to the app without the user knowing).


## End-point Setup
* Web Push Protocol standardizes messaging.

## Sending Messages
* Message payload is a HTTP PUT
* TTL is the value for time to live or attempt to send the message (e.g. 120 seconds).

### VAPID (Voluntary Application Service Identification)
* Enables signed messaging and encryption of the payload/content.
* Public and Private Keys to subscribe and send messages.
* Enables payloads to be sent. Previously you could only notify that here was a new notification, now you can send the message in the notification.
* To generate them, you can do it on your own using the API or using a node library web-push-libs (recommended).

## Listening for Messages
* Straightforward: Handle a push event.
* Get data out of the message (JSON object) and then display the notification.

Bottom line: add a manifest.json, follow the notification heuristics, ask for permission to notify _in context_.

Resources:

# Demo of Tooling for Progressive Web Apps
[Journey of a SPA to PWA](https://goo.gl/4EhFAC).

Change an app powered by the iFixIt API and React to render DOM manipulation that happens to use the App Shell and Dynamic Content Model.

* [Lighthouse](https://github.com/GoogleChrome/lighthouse) Chrome extension (and node command line tool) helps one _establish a PWA baseline_.
* Utilizes Chrome debugger protocol to simulate network conditions to generate a report card.
* It should not be used to _establish a destination_. No need to try to meet 100% on the report-card. It's just **one** tool in your tool-belt.

**Initial Lighthouse Recommendations:**
* Implement server-side rendering to improve first time to paint.
* Implement service workers to let the app work offline.
  * Treat them as a progressive enhancement! Not all browsers support them and the first load won't use them.
* Provide a web app manifest.
* [sw-precache](https://github.com/GoogleChrome/sw-precache) can help us be lazy and generate service worker code that will precache specific resources so they work offline.

Make sure you're using the Chrome Dev tools to validate that your changes are being applied.

[Application Pane](https://developers.google.com/web/tools/chrome-devtools/progressive-web-apps) is a good place to start. In addition, re-run Lighthouse and check in other browsers.


# Exciting Upcoming Browser Features
* [Payment Request API](https://developers.google.com/web/updates/2016/07/payment-request)
* [Credential Management API](https://developers.google.com/web/updates/2016/04/credential-management-api)
  * One tap sign-in to handle sign-in flow without 1Password or other password managers.
