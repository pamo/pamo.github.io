---
layout: post
title:  "Amused by Jest Unit Testing"
categories: technology, testing
---
About a month ago, Pete (@ph1) and I had a conversation about Javascript testing frameworks and we agreed that there's not one right answer. 
You don't have to commit yourself to a magical tool for something as simple as testing, however, a battle of testing frameworks can definitely be had given that there are so many to choose from.

I talked a little bit about [Jest](https://facebook.github.io/jest/) and how it seemed to be beneficial in the fact that it takes care of auto-mocking dependencies. The reason I found this beneficial, or at least time saving, was from experience of having to write a lot of boiler-plate code in order to mock depencencies with Angular in order to do unit testing. So, when you find a testing framework that promises to make test set-up sound easy, there's no reason not to try it out.

So, try it out I did, and I dragged another friend, Dan ([@dc_minutiae](http://twitter.com/dc_minutiae)), along. Our goal was to do a deep dive into React.js, the Flux architecture, and best practices with testing so that we could TDD the design of a web application. In retrospect, maybe our undertaking was a lot to learn at once. 
One of the goals would be to keep track of a music playlist with files uploaded through the browser. We called our pet project [Hyperflux](https://github.com/dgcoffman/hyperflux/) out of our love for [The Hype Machine](http://hypem.com).

We started out by looking for a boilerplate/scaffold that could fit our needs on [Awesome React](https://github.com/enaqx/awesome-react#boilerplates). 
One of the boilerplates we chose had [node-jsx](https://github.com/petehunt/node-jsx) as a dependency which allows you to require jsx from node. However, we quickly started running into problems when node-jsx appeared in the dependency tree and Jest's auto-mocking started losing its luster.

The discovery of node-jsx being a troublesome dependency was not an easy one. We discovered that the require.extensions global is being [deprecated and no longer supported](https://nodejs.org/api/globals.html#globals_require_extensions) and this was causing issues off the bat with running a test that did nothing. The workflow for finding dependencies that cause problem with Jest is cumbersome. You can mark npm dependency paths to be unmocked via [configuration](https://facebook.github.io/jest/docs/api.html#config-unmockedmodulepathpatterns-array-string) but it always seems like a treasure hunt to figure out which ones need to be unmocked. 


Dan and I were also dumbfounded with how slow our tests were running. Over the course of a couple days fighting configuration and writing a handful of tests, we started noticing our test "suite" was taking more than 10 seconds to complete. [Wat](http://i.imgur.com/3ihmNOo.gif). After some reflection, we decided that using a boilerplate with a ton of dependencies we may or may not use was not the best choice. These could cause a lot of overhead with script pre-processing if you're [JSX-transforming non-JSX files](https://github.com/facebook/jest/issues/116) in addition to increasing the breadth and depth of the dependency tree for Jest's [HasteModuleLoader](https://github.com/facebook/jest/blob/master/src/HasteModuleLoader/HasteModuleLoader.js) to handle.

Our Jest config started getting complicated as time went on and it was clear that we had a lot of dev dependencies to be cognizant of to un-mock.
<pre>var jestConfig = {
		rootDir: '.',
		testPathDirs: ['<rootDir>/src/\_\_tests\_\_/client/'],
		scriptPreprocessor: "<rootDir>/node\_modules/babel-jest",
		testFileExtensions: [
			"es6",
			"js"
		],
		moduleFileExtensions: [
			"js",
			"json",
			"es6"
		],
		unmockedModulePathPatterns: [
			"node\_modules/react",
			"node\_modules/object-assign",
			"node\_modules/express",
			"node\_modules/supertest",
			"node\_modules/chai",
			"node\_modules/chai-http",
			"node\_modules/multer"
		]};
</pre>

SuperTest was one dependency that couldn't be used because of Jest's version of Jasmine does not support the [.end()](https://github.com/visionmedia/supertest#api) callback that SuperTest needs in order to make assertions. Without it, our tests had no indication of whether they were done or not.

:confused:

So it's clear, sometimes the tools we pick up to use for a job need a little more understanding before they solve our problems. In this case, we struggled more than we had hoped and my first impression of Jest is not the greatest. However, I'm always open to trying out new things but in this case, it may have been better to choose boring technology in the Javascript space so that we could get to the meat of learning React + Flux.
