## Performance-matters
-  **[Deployed on Heroku](https://amsterdam-buildings.herokuapp.com/)**
-  **[Original OBA prototype](https://oege.ie.hva.nl/~jansenj031/src/)**

#### Criteria
Fork your AdamNet app and make it work server side.

- [x] Convert clientside OBA app to serverside.
- [x] Required tooling.
	- [x] NPM
	- [x] CommonJS/Browserify
	- [x] ExpressJS
- [x] Optimize performance

![](https://github.com/jajan20/performance-matters-server-side/blob/master/assets/a-buildings-preview.png?raw=true)

## Table of contents
- [Performance Matters](#performance-matters)
	- [Criteria](#criteria) 
- [Feedback](#feedback)
	- [Browserify CommonJS](#browserify-commonjs) 
	- [Inline styling in Javascript](#inline-styling-in-javascript)
- [Other changes](#other-changes)
- [Installation](#installation)
- [Features](#features)
- [Audits](#audits)
	- [Browserify](#browserify)
	- [Minify JS and CSS](#minify-js-and-css)

## Feedback
### Browserify CommonJS
> Correct use of browserify/CommonJS

Even though my app is rather simple, I've included all my clientside javascript inside a bundle.js.

- script.js *the main script*
- navigator.js *script to check if the user is connected to the internet*

### Inline styling in Javascript
#### Offline element
> No inline styling inside Javascript.

My navigator script added a style to my footer instead of adding a class with Javascript.

``` js
offline.style.display = "block"
```
**to**

``` js
offline.classList.add('hide')
```

#### Search function
For the search function I also used inline styling. Hiding elements that didn't match the input. I've changed this in such a way that there is no inline stlying.

```
if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ""
    } else {
      li[i].style.display = "none"
    }
```

**to**

```
if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("hideResult")
    } else {
      li[i].classList.add("hideResult")
    }
```

## Other Changes
### Details page
This page wasn't styled at all, now when the user selects a building. All the images are loaded. They are clickable and link to the full image.

```
<a href="<%= detail.img[i] %>"><img src="<%= detail.img[i] %>"></a>
```



- [x] Implementeer de Service Worker in de Adamnet / WAFS app
- [x] Issues aanmaken en fixen
- [x] Documentatie in orde maken
- [x] Installeer je app op een online omgeving

## Installation
For this project I used a couple of npm packages, make sure you install these with ``` npm install``` before running the app.

**Dependencies**

| Package          | Version  |
|:-------------| :-----:|
| ExpressJS | 2.5.7 |
| EJS      |   4.16.3 |
| node-fetch      |    2.1.1 |
| browserify      |    16.1.1 |

## Features
A couple of features for this website.

- Still works when Javascript is disabled. (Gives notification)
- Uses a service worker to save visited pages to localstorage.
- When connection is lost you can still browse previously visited pages.
- When offline, footer shows the user that there's no connection

![](https://github.com/jajan20/performance-matters-server-side/blob/master/assets/no-js.png?raw=true)
![](https://github.com/jajan20/performance-matters-server-side/blob/master/assets/no-internet.png?raw=true)


## Audits
Since my app uses an API and requests every image asociated with (in my example) with "**Het koninklijk Concertgebouw**" loading all these images on a slow network is really time consuming. 

**Initial Audit**
![](https://github.com/jajan20/performance-matters-server-side/blob/master/assets/audit_01.png?raw=true)

Nevertheless I tried a couple of techniques to increase performace.

#### Browserify
With browserify I combined all the clientside javascript into one ``` bundle.js``` This increased the performace with two points.

![](https://github.com/jajan20/performance-matters-server-side/blob/master/assets/audit_02.png?raw=true)

#### Minify JS and CSS
By compressing my Javascript and CSS I tried to make the site load faster.

![](https://github.com/jajan20/performance-matters-server-side/blob/master/assets/audit_03.png?raw=true)

#### Critical CSS
As a final increase, I've added some critical CSS in the head of my file. 
Critical CSS is meant for the bare mininum CSS styling, so that the site feels like it loads faster

![](https://github.com/jajan20/performance-matters-server-side/blob/master/assets/audit_04.png?raw=true)

## Increased Performance
Checklist of possible ways to increase performance.

- [ ] Lazy loading
- [x] Browserify + commonJS
- [x] Minify CSS
- [x] Minify JS
- [x] Critical CSS

## Sources
- https://cssminifier.com/
- https://www.minifier.org/
