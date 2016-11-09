---
title: Progressive Web Apps Roadshow
date: '2016-11-09T17:39:35.965Z'
layout: post
path: "/pwa-roadshow/"
draft: true
---

### Speakers:

* Sam ?? — London — video APIs/web RTC
* Alex — AUS — Web standards
* Michael — Programs Engineer — Service workers and web push

## Keynote

*Pete LePage* Dev advocate on the web team.

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
* Sara Clark — PM 3rd Party web training @google. HTML5 instructor in the past.
Deeper dive into service worker. Make it reliable and fast!

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

*Pete LePage*

* Do it right! The green :lock: is important. (Why don't we have something similar for offline capabilities?)
  * Users know that this just works.
* Fundamentally a core requirement of user experience.

## Principles
* Identity: who are you talking too? Google and not Goggle.com.
* Confidentiality: who can read your data? No one else is spying.
* Integrity: who can modify your data? No data tampering between client and server.

## Excuses, excuses! HTTPS doesn't have to be hard
  * My site doesn't need it!
    * PWA requirement. No HTTPS, no PWA.
    * Other APIs that require (or will) it: getUserMedia (camera access), Push, App Cache, Encrypted Media Extensions, GeoLocation, HTTPS/2
  * It'll cause performance problems and I'll lose money.
    * HTTP Strict Transport Security: include sub-domains. MaxAge can be set to a short number (not 2592000) in the beginning;
    * TLS handshake is slow on mobile devices but you can turn on TLS false start after the first connection to reduce round-trip latency.
    * TLS Session resumption: we know each other, just keep going. Turn on on the server
    * HTTP/2 unlocks massive performance wins. HTTPS will unlock this. Always secure. Supports a lot like multiplexing and server push.
    * Canonical link to help tell servers that there is only _one_ version of the site (HTTP vs HTTPS).
    * Weather.com saw a performance impact when they implemented HTTPS (50ms increase :sad:) but after moving to HTTP/2 negated it by dropping 250ms .
  * It's expensive
    * Cost benefit analysis: Do we pay the certificate price or lose page ranking?
    * Let's Encrypt: Free! Automated CLI tools.
  * Critical 3rd party dependencies don't support HTTPS yet.
    * Hardest one to argue but you can do some advocating to get them to get closer to migration/implementation.
 
Chrome Dev Tools can help identify any mixed content from being served.
