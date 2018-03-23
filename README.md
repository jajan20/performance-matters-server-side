## Assignment
Fork your AdamNet app and make it work server side.

![](https://github.com/jajan20/performance-matters-server-side/blob/master/preview.png)

#### Criteria
- [x] Convert clientside OBA app to serverside.
- [ ] Required tooling.
	- [x] NPM
	- [ ] CommonJS/Browserify
- [ ] Optimize performance

## Installation
For this project I used a couple of npm packages, make sure you install these with ``` npm install``` before running the app.


**Dependencies**

| Package          | Version  |
|:-------------| :-----:|
| ExpressJS | 2.5.7 |
| EJS      |   4.16.3 |
| node-fetch      |    2.1.1 |

## Audits
Since my app uses an API and requests every image asociated with (in my example) with "**Het koninklijk Concertgebouw**" loading all these images on a slow network is really time consuming..

#### Initial state
As you can see, the site loads very slow. We can do a couple of things to increase the performance.
![](https://github.com/jajan20/performance-matters-server-side/blob/master/initialAudit.png)

## Increasing performance
Next week I'll increase performance with the next tools.

- [ ] Lazy loading
- [ ] Browserify + commonJS
- [ ] Minify CSS
- [ ] Minify JS
