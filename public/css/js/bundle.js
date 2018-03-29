(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
if (navigator.onLine === false) {
	
	let offline = document.getElementById('offline')
	offline.style.display = "block"
	console.log('Offline')
}
},{}],2:[function(require,module,exports){
var checkOnlineStatus = require('./navigator')

var search = document.getElementById('search-bar')

search.onkeyup = function(event) {
	var filter = search.value.toUpperCase()
	var ol = document.getElementById('list')
	var li = ol.getElementsByTagName('li')

	for (i=0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0]
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			
			li[i].style.display = ""
		} else {
			
			li[i].style.display = "none"
		}
	}
}

},{"./navigator":1}]},{},[2]);
