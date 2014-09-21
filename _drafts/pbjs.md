---
layout: post
category: conferences
title: Powered by Java!..script.
tags: [javascript, tech, conferences, node]
---

![Java -- The Future](/images/pbjs.jpg)

The Manning Powered by Javascript workshop was a mini conference of the current state of Javascript.
By the end of the day, it was clear:
> Javascript can live everywhere today.

Dan Shaw (@dshaw) started the day off with an overview of Node.js and it's potential to introduce
Javascript to every level of an application's tech stack.
He described himself as previously being a _"mid-tier"_ developer where he primarily worked on
applications with a Java backend and Javascript front-ends.

Dan described Javascript as a beauty and a beast because it's a approchable language, given that
the cycle time between ideation and realization is very tight, but the time to "level-up" in proficiency is very long.

The meat of Dan's talk focused on one of the biggest engineering challenges we face in building web applications: *dealing with legacy and monolithic services* that are most often written in Java or PHP.

My introduction to the Javascript world and web app development has been with Angular serving data from a legacy APIs.
Dan described this as a big cause of delaying an application launch anywhere from 6 to 24 months. I've also been witness to the evident slow front-end experience these services cause.

### Front-end back-end

What Dan proposes is to build a Node "front-end back-end" as a middle tier between the legacy monolith to deliver front-end assets.
Like most microservices, this middle tier allows us separate concerns between the front-end and backend data.
Given that backend data stores only evolve when the business domain changes, an event that rarely occurs, we have the ability to change the way front-end assets evolve quickly and often.

### Reduced context-switching
My eyes lit up when Dan presented this idea, I know the feeling of context-switching between Java and Javascript all too well.
As a new developer in the industry, it's hard to focus on honing best practices in an object-oriented language one day and then focusing on learning a new framework and the set of unwritten rules of another language.
Switching contexts makes it difficult to keep track of the skills I'm learning on a day to day. Muscle confusion may be beneficial in some cases (#broscience) but, in my opinion, the there should be some time in between switching things up a bit to let things stick.

By having Node in more layers of the stack, full-stack developers get a break from frequent context-switching and front-end engineers have the opportunity to contribute to more of the code base.

### Putting it into practice

Dan's talk set the tone for a lot of what piqued my interest for the rest of the day and several of the Strange Loop sessions I attended.
Javascript can live everywhere. I saw many examples where developers have been creating applications that provide a near-native experience.

For example: my neighbor, Tomomi (@girlie_mac), demo-ed two applications that she created for fun to demonstrate the ability to hook into device APIs to use what's available in the browser.
The first one was [Sushi Compass](http://vimeo.com/92208773) and the second was [CoreMob](https://github.com/coremob/camera).
The major APIs leveraged among both were the phone's camera and GPS, LocalStorage/IndexDB, and File APIs to read and write.
Another exciting example was @jergason's use of the Audio APIs to drop some beats and make [DOMstep](http://youtu.be/QAwbjMdXj-Y).

Caching files locally also brough upon the notion of creating web applications without the need for a server.
[DreamWriter.io](http://dreamwriter.io), for example, manages all user interaction with the client (browser) before ever having to communicate with a server -- and in Robert Feldman's (@rtfeldman) case, the only server he needed to communicate with was Dropbox, a third-party service.
The biggest benefit of these near-native apps is the fact that there's no need to go through an installation process on both mobile and desktop. On desktop, however, Robert Feldman noted that the fluidity of context switching to a web app introduces a few extra steps, this being tabbing to a browser window and THEN a tab versus a native container.
