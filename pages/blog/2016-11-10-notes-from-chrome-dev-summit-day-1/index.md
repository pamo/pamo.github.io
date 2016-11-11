---
title: Notes from Chrome Dev Summit Day 1
date: '2016-11-10T18:01:12.066Z'
layout: post
path: "/chrome-dev-summit-day-1/"
readNext: "/chrome-dev-summit-day-2/"
---
Notes from a jam-packed first day of Google's Chrome Dev Summit in November of 2016.
I'll be adding more links to the points I noted. Each primary heading is dedicated to one of the talks on the agenda.

# Move web platform forward
*Darin Fisher, VP, Chrome Engineering*

Last year: over a million Chrome Mobile users. Today: 2 billion active chrome browsers. Both desktop and mobile. The standards apply for both platforms and they have a large reach.

> Links are the web's superpower.
* goo.gl/B5stt8
* polymon.polymer-project.org

The physical web is now possible with Bluetooth. There are contextual capabilities.
Every interaction costs 20% of potential users. 2 vs 3 taps is a big deal.

Mobile has been _awesome_ for the web and has made it easier to reach users, but the web does not come without challenges. The constraints, however, have made us innovate. These include network connectivity, bandwidth, etc. 2G is not going away any time soon. 60% of the web's users are on 2G.

Mobile web usage has eclipsed desktop web usage. **Building for web is a priority**.

Emerging markets are coming online soon. Especially in India. Storage constraints and network constraints are allowing us to innovate and have been working well in these markets (e.g. FlipKart).

**Progressive Web Apps are radically improving the user's web experience. They're just as engaging, immersive, native-feeling that really delight users and give value to businesses.**

## Sharing Demos/Stories
* CNET Tech Today
  * Offline and tapped the home-screen icon. It just works!
* Alibaba saw an 76% increase in conversions when users found interacting with support when they're interested in a product an enjoyable experience.
  * Single's day is a big shopping day in China. Today, November 11th, is the biggest shopping event on the Internet. Bigger than Black Friday.

## such Service Worker, much wow.
**Gold Standard**: The app you build should be ready to interact with in 5 seconds on a 3G connection.

<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">The Monica Perf Test™: if you wouldn&#39;t make eye contact with a stranger for the time it takes your web app to first paint, it&#39;s too slow.✌️💫</p>&mdash; Monica Dinosaurescu (@notwaldorf) <a href="https://twitter.com/notwaldorf/status/778248810371747840">20 de septiembre de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Add to Home-screen is like a light-weight install.
   * Alibaba saw a 4x mor often engagement when users added the app to their home screen. Prompting sooner yields 48% more installs. Still some room for improvement to fine-tune this because users are ignoring the prompts. Chrome Team is working on this. Hopefully this will become the *new* install.

Push notifications are the path to engaging experiences.
  * Carnival cruises allow you to hold a reservation and then send you a notifications hen it's about to expire. More customers followed through the purchase after notifications were implemented.

Less sign-in failures.
* Credential Management API has helped more Alibaba and Pinterest users sign in seamlessly.

Support from development tools to build the right way.
* Lighthouse and Dev tool features have allowed development teams test and simulate experiences the users might have.

A lot of time invested in Polymer to add the sugar on top of Web Components to make it easy to get started building light-weight web experiences.
* Shadow-dom is being adopted by a lot of browser vendors.
* Polymer V2 is much lighter and has better interop.
* Easier to prototype experiences.
* Community is strong: beta.webcomponents.org

## AMP
* Based on web components. Has a markup that uses web components.
* Leads users into your PWA.
* More coming on Day 2 of the summit.

## Predictability
Let's make the web easier to improve.
Make it one platform as much as we can. It should just work. Browser vendors need to collaborate and have been to get better at new feature and standard inclusions.
* [Browser Bug Searcher](https://browser-issue-tracker-search.appspot.com/)

## Looking Ahead
It's on us to explore the possibilities on the web with:
* [OpenGL ES in the browser](http://cdm.link/2011/02/webgl-in-chrome-experiments-shows-opengl-in-the-browser-what-it-is-what-its-not/)
* [WebVR](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API)
* AugmentedReality!
* IoT

# Building Progressive Web Apps Today
Thao Tran, Strategic Partner Development Manager

Not just a fad. FlipKart is not a unicorn :unicorn:. Withstood big billion days.
Developer hot topic. Crossing all industries and blurring lines between mobile web and native.
Unify your web experience. Drop the multiple implementations.amake it indexabe. building one sa journey so heres a framework.

Start witha basekbe and continue to add on more and features over time. more reliavel experience in time. theres a checklist online fpr central resources, dev web.

test on real hardware devices.


## Digging into the impact

Illustrate diversity of approaches, industry, regions.

* Housing.com:
It takes $3.75 to acquire people to download the Android app. 7¢ to get them to the mobile site.

* West Elm
No native app. They've relied on the web. It's no news that we're seeing a growing number of users shopping on mobile devices. Recently released a [beta](https://mobile-beta.westelm.com/) that has a magazine-like experience. Inspirational design.

* Infobae
 Latin American interest in these technologies is increasing. Infobae was inspired by [WaPo PWA](wapo.com/pwa) demo. So they created their own [PWA](https://app.infobae.com/) that's loading in less than a second! **News should be a smooth reading experience.**

* Lyft
 Rolled out an [m-site](https://www.mobify.com/insights/m-dot-responsive-progressive-whats-the-right-solution/) for the first time to test the waters. After the announcement, they saw 5x more rides than expected. **Users want to book a ride before having to download an app**. Lyft went all in after this to build a PWA that has feature parity with native app. [ride.lyft.com](https://www.lyft.com/mobile/signup) will enable Lyft to reduce download size to <1MB from 17MB on Android and 75MB iOS.

## How to get Started

Think about it as a journey and start small. Take the Weather Company as an example.
* Mid 2015 First transition to HTTPS.
* April 2016 Roll out web push notifications in 30 languages and saw a million users opt-in
* Oct 2016 Service Workers in 62 languages and 178 countries
* 2017 plan is to roll out to the US site.

Many ways to go about it.
* Start from scratch. CNET/Housing.com
* Build a beta/demo to try it out and see if it's worthwhile. Lyft/WestElm
* Add new features to an existing site. [MakeMyTrip](http://www.makemytrip.com/)/[Weather Company](https://weather.com/)

**Think about PWA as progressively improving the user experience.**
* AMP can be that landing _acquisition_ mechanism.
* _Engage_ with push notifications.
* _Retain_ with seamless sign-in
* _Convert_ with seamless sign-in and one-tap checkout.



# Sign-in on the Web - Credential Management and Best Practices
Sabine Borsay and Eiji Kitamura

* Forms are hard and ambiguous. Users drop out of complicated registration flows and would rather abandon a service than follow through.

* So now they've signed up, how to keep them signed in?
There's some friction. Too many ways (Email, Facebook, Google sign-in). Do I already have an account?

* [92% of users would rather abandon signing into your site than resetting their log-in details](https://goo.gl/cJMLyb)

## Session management is hard. Especially secure session management.

[Read the Docs](https://g.co/CredentialManagementAPI)

Credential Management API reduces the friction of signing back in.
Launched in Chrome 51. Works across devices. It's being adopted by many organizations.

There are some common gotchas with increasing awareness of what a user gains if they're signed in. Value proposition is to show that the experience is better if they are signed in but this is difficult to show. If sign in is automatic, barrier is removed.

* You can sign in seamlessly among multiple devices (with same Google Account). 
* [Smart Lock for Passwords](https://g.co/SmartLockForPassword).
Developers can synchronize with Google Accounts and allow users to be propagated across devices.
* Login federation. Smart Lock allows you to store these federated logins to the browser.
* Don't need to type anything in order to log in. Truly friction-less.

## Some Benefits of Credential Management API
* auto sign in across devices
* virtual permanent sessions
* remembers federated accounts
* account chooser allows you to skip forms
* No need to remember the password for a specific site anymore

## Implementation
1. Login Form has to have proper attributes (auto-complete).
2. Send request with AJAX
3. Store credential information
4. Update the UI or proceed to the personalized page

## Implement Federated Login
1. Authenticate the user with a 3rd party identity (Google or Facebook library code)
2. Store identity and instantiate the credential. You're storing the identity not the credentials.
3. etc.

## Implement Auto Sign-in
Virtually permanent sessions
1. Get credentials from the user, but make sure they're not already sign in.
    * `unmediated: true` enables hiding UI for auto sign-in
2. Authenticate the user
3. Update UI using a `profile`
* Don't forget to show authentication error messages as to avoid confusing the user if something bad happened.
* Sign out should turn off auto-sign in for the next visit.

## Account chooser
1. Show the chooser
2. Follow the recipes described above but with `unmediated: false`

Account Verification Process is not very clear yet (when the user signs up). It's another thing that is still adding friction.
[Google team is looking forward to feedback on how to make this better](https://goo.gl/JC8o9Q)

# WebPayments API
[Zach Koch](https://twitter.com/zachk), PM on Chrome

* Let the browser help you as a developer and as a user.
* Quiet launch in Chrome M53. API is still young.

* Mission is to bring fast, secure, simple payments to the web platform. Currently there is a 60% less conversion on mobile than desktop. Save the world from annoying web forms.

> Developer call to action: set your Auto-fill complete types on your forms!

## PaymentRequest is a new API built for the web

* It's not a new payment method (web pay, chrome pay, etc.)
* Let users pay the way they wanna pay.
* Not trying to be a processor/gateway (like Stripe or Braintree).

What it is: Standards based API baked into the browser to make it easy for users to pay for things online.

## 2 High Level Goals
1. Build a seamless easy to use checkout experience (on mobile in particular). This means less typing!
2. More secure payments. Our devices hold a lot of information that's sensitive!

## Data Support
* Form of payment: Credit card, android pay are currently supported. Plan is to support more.
* Shipping Address + Shipping Options: allows developers to take the address and propose the options for shipping methods.
* Payer detail support is coming soon. Phone, email, and name will be optional. The previous two are required.
* There is a `data` payload with method request. e.g. Android has a `merchantID`

> Sweet spot is to merge the ways you can get paid as a business and ways users can pay to allow seamless payment experiences.

## Transaction Information
* Transaction details involve a total, amount, underlying currency code.
* Can also contain shipping options. There are the defaults you want to set. Only use if you expect these options to be static (e.g. Always free shipping regardless of the location).
**Caveat**: PaymentRequest does not do math.
* Transaction details can be updated when certain events happen (enabling a dynamic pricing model)

# Code

* Code implementation is event driven with Promises.
* You can pass in these options.
```
var options = {
  requestShipping: true,
  requestPayerEmail: true,
  requestPhone: true,
  requestName: true,
  shippingType: 'shipping' // coming soon to specify delivery or pickup
};
```
* `paymentResponse.complete('success')`? Go ahead and send the payment to the server or gateway.

* Kill the shopping cart! Users on mobile shouldn't have to deal with a clunky payment flow.
* But think of this as a progressive enhancement.
* Make sure you provide a fallback.
* Keep line items at a high level for a good mobile experience.

## Next Steps
* 2017 3rd Party payment app support (PayTM, WebPay, etc).
* Spec and feature enhancements: iFrame support and shipping options
* OCR Scanning


# Debugging like a Boss
[Paul Irish](https://twitter.com/paul_irish), Performance Engineer, Chrome

Debugging is how we understand the execution of Javascript. Chrome Dev tools are getting better to allow stronger debugging for modern Javascript.

## Small features
* Call-stack has been cleaned up and clarified the execution of scripts and have made it clear if you're on a breakpoints or exception or dom breakpoints or sub-tree modification.
    * Now available on Chrome 55+
    * Narrow callstack (responsive pane when you reduce the width).
* Chrome DevTools :heart:s ES6+
    * Supports Promises, Arrow functions, classes aync/wait, const/let.
* Hitting enter on the console allows you to continue your function definitions on a new line. Waits for the end brace.
* Some sublime text-like keyboard shortcuts built in.
* Auto-completions when you're typing, including array indices available!
    * Sub-string completions in both console and elements panel.
* Snippets inside of Sources panel: Persisted in your Chrome profile (propagated across sessions and machines like JSBin).
* Smarter breakpoints inside Promise chains (including when the code is collapsed on one line).
* `console.image` can print a response to the console as a visible image if it's a valid image URL.

# CSS
* Selection copy-paste has existed (copying CSS from the styles tab).
* Some color picker improvements (missed it, should have waited to answer an email).
* **Unused style auditing**: Break-point railing turns red if they're not being used.

## Node Profiling and Inspecting
* Finally, [Chrome Dev Tools for both front and back-end](http://bit.ly/2fGq6nS).
* Inspect flag on the node command-line `node --inspect app.js`
* Returns a [chrome://devtools](http://bit.ly/2fGq6nS) link to open in a new tab.
* Also have the option to connect in the Chrome Threads tab if app is already running in browser

## Service Workers
* Check out the storage and state of a service worker with the Application pane
* **Update on reload** checkbox (like a disable cache for service-worker Javascript code).
* **Bypass for network** checkbox allows you to disable the cache, or rather stop intercepting network requests.

# Polymer and Web Components
Taylor Savage and Monica Dinculescu

Started as an experiment to evolve as Web Components evolved. Journey has been
* Polymer 0.5: Experiment,
* Polymer 1.0 Production Ready,
* Polymer 2.0 Web Native.


## Who's using it in production?
* Comcast
* USA Today
* ING
* Net-A-Porter
* BBVA
* Coca-cola
* Electronic Arts
* Predix
* and of course, Google

## #usetheplatform Mantra
Shadow DOM has been **shipped** on Chrome, making it easier to adopt web components.

The goal is interoperability by creating reusable components.

## Polymer has launched an App Toolbox
Includes
* App level components (like routing).
* Polymer CLI
* PRPL Pattern
* [Example Polymer App](https://shop.polymer-project.org/)

[Jumia](https://www.jumia.com.ng/) PWA developed in 4 weeks with Polymer to demo to the business.

## What's next in Polymer 2.0
* Web component V1 support
* Better interoperability with Web Components and other frameworks by eliminating Polymer-specific leakage
* Minimally breaking transition -- seamless backwards compatibility layer
    * Work on both Polymer 1 and Polymer 2.
    * Slowly upgrade components at a time.
* Whole payload is 12kb and it's getting smaller and smaller.

## Developer Advice


> Using isn't the same as maintaining.

Component paradigm isn't news to developers. Polymer is just helping everyone jump on board and build an app easily.

[MojiBrag](https://mojibrag.firebaseapp.com/global?lang=en)
* Firebase Auth
* Built with app specific web components like login, main-screen, iron-list, new-post, etc

### Properties down, events up.
Use properties and not methods. You can use binding without any Javascript.

### What about element maintainers?
Practice _Fear-Driven-Development_.
* Don't break others applications!
  * TATTOO: Test all the things, over, and over.
* Perf regressions: Don't make apps slower.
  * [polydev](https://chrome.google.com/webstore/detail/polymer-devtools-extensio/mmpfaamodhhlbadloaibpocmcomledcg) allows you to do performance audits and compare across different changes.
* Demo driven development
  * [webcomponents.org](http://webcomponents.org/) community
  * [CustomElements.io](https://customelements.io/) to demo and find new components

**Bottom line**: just make things!

# Progressive Performance: PRPL
Sam Saccone, Software Engineer
* Truth is in the trace. From Chrome Dev Tools with a device connected. Simulator is a LIE.
* [MotionMark](https://browserbench.org/MotionMark) measures a browser’s capability to animate complex scenes at a target frame rate.
* [High Performance Browser Networking](https://hpbn.co) Playbook
* Study: [Adaptive Congestion Control for Unpredictable Cell Networks](https://cs.nyu.edu/~jchen/publications/sigcomm15-zaki.pdf) [PDF]
  * Basically, LTE speed in cities is unpredictable. 
  * "A 4G user isn't a 4G user most of the time." - [Ilya Grigorik](https://twitter.com/igrigorik).
* Tools and techniques we're borrowing from the desktop are not working for us on mobile. We need to practice different ones.
* The time between the view is painted until JS arrives is an _uncanny valley_. Server-side rendering can help, as well as service workers and HTTP2 push to deliver some content from the cache.


# HTTPS Real Talk
Emily Stark, Software Engineer, Chrome
* What's the Omnibox saying? Chrome should be more honest by delivering a warning to the user when they're on an insecure site that doesn't use HTTPS.
  * The web should be secure by default.
* Honest State of HTTPS Usage
  * [Google Transparency Report](https://www.google.com/transparencyreport), more sites supporting HTTPS after this was released. Steady increase ever since.
  * [Metrics](https://www.google.com/transparencyreport/https/metrics) on time spent on sites using HTTPS has also increased. 75% or more time. Reason why is not yet clear.
* What's Chrome doing to help you as a developer?
  * Powerful features are being restricted access from non-secure HTTP.
  * All the things presented today are only available over HTTPS.
  * Giving control to the users, not being mean to developers.
  * [Firefox is also doing this](https://blog.mozilla.org/security/2015/04/30/deprecating-non-secure-http/), for all new features.
  * Performance improvements, enhancements, and general great source of information about HTTPS performance on [Is TLS Fast Yet?](https://istlsfastyet.com/)
  * [Some FAQs on moving to HTTPS.](https://goo.gl/yGn4N4)
  * [Some concerns and answers about HTTPS.](https://goo.gl/d4YPsq)
  * [Let's Encrypt](https://letsencrypt.org/) can help us get to HTTPS everywhere. Free and easy.
  * Ad revenue is a concern. It's a 3rd party resource that might not be secure when you move your site to HTTPS. Google Source Ads are already on HTTPS.
* Omnibox changes
  * Need to have HTTPS everywhere before flipping the switch on Omnibox treatment. Doing it today will cause it to be ignored because it would be *everywhere* and overwhelming.
  * 'Not Secure' gray text in Chrome 56 (coming in January).
    * [Enable it today using chrome flags](chrome://flags/#mark-non-secure-as) and try it on your site to see what users will see come January.
    * Eventual treatment will be more alarming.
