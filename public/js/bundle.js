(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){function GetOrigSize(){var images=document.querySelectorAll("img")
for(i=0;i<images.length;i++){if('naturalHeight' in images[i]){var message="The original size of the image:"
message+="\n width: "+images[i].naturalWidth+"px"
message+="\n height: "+images[i].naturalHeight+"px"
console.log(message)}else{}}}
module.exports=GetOrigSize()},{}],2:[function(require,module,exports){checkNetwork=function(){if(navigator.onLine===!1){let offlineContainer=document.querySelector('.offlineContainer')
offlineContainer.classList.add('show')
console.log('Offline')}else{console.log('Online')}}
module.exports=checkNetwork()},{}],3:[function(require,module,exports){let checkNetwork=require('./navigator.js')
let imageSize=require('./imageScript.js')
var search=document.getElementById('search-bar')
if(window.location.href.substr(0,5)!=='https'){window.location.href=window.location.href.replace('http','https')}
search.onkeyup=function(event){var filter=search.value.toUpperCase()
var ol=document.getElementById('list')
var li=ol.getElementsByTagName('li')
for(i=0;i<li.length;i++){a=li[i].getElementsByTagName("a")[0]
if(a.innerHTML.toUpperCase().indexOf(filter)>-1){li[i].classList.remove("hideResult")}else{li[i].classList.add("hideResult")}}}
imageSize
checkNetwork},{"./imageScript.js":1,"./navigator.js":2}]},{},[3])
