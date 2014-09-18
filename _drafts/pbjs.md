---
layout: post
category: conferences
title: Powered by Java!..script.
---

![Java -- The Future](/images/pbjava.jpg)

The Manning Powered by Javascript workshop was a mini conference of the state of Javascript in today's web.
At the end of the day, it was clear:
> Javascript can live everywhere today.

Dan Shaw (@dshaw) started the day off with an overview of Node.js and it's potential to introduce
Javascript to every level of an application's tech stack.
He described himself as previously being a _"mid-tier"_ developer where he primarily worked on
applications with a Java backend and Javascript front-ends.

However, he covered several instances where Node can create light-weight communication layers that can allow devices to be more responsive -- a key for the growing trend toward an Internet of Things and communicating with embedded devices.

Dan described Javascript as a beauty and a beast because it's a approchable language, given that
the cycle time between ideation and realization is very tight, but the time to "level-up" in proficiency is very long.

The meat of Dan's talk focused on one of the biggest engineering challenges we face in building web applications: *dealing with legacy and monolithic services.*

Legacy APIs provided by Java or PHP systems are one of the
biggest causes of a slow front-end experience and often delay the schedule to ship an application anywhere from 6 to 24 months.

### Front-end Back-end

What Dan proposes is to build a Node "front-end back-end" as a middle tier between the legacy monolith to deliver front-end assets.
This middle tier not only separates concerns -- like most microservices -- but it also gives front-end engineers an opportunity to 
contribute to other layers of the stack and gives full-stack developers a break from having to switch contexts! This is an issue I've faced
in a project where we were writign the middle tier service in Java and the front end application in Angular. Honing my object-oriented design skills
is a on-going goal of mine, but I'm excited by learning more about front-end development and javascript. So although I appreciated the diversity
of the work I was doing and skills I was learning, it got difficult to keep track of WHAT I was learning when I was switching contexts from one day to the
next.

Another motivation: the backend is designed around the business domain, something that rarely evolves and when it does, it does it slowly
However, front-end assets evolve rapidly!

### Putting it into practice

1.  Best to build an application around APIs and not data
2.  Proxies all the way down
3.  Test early and often. Set up a continous integration system -- especially since Javascript has so many quirks

