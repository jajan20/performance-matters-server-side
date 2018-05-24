let checkNetwork = require('./navigator.js')
let imageSize = require('./imageScript.js')

var search = document.getElementById('search-bar')

search.onkeyup = function(event) {
  var filter = search.value.toUpperCase()
  var ol = document.getElementById('list')
  var li = ol.getElementsByTagName('li')

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0]
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("hideResult")
    } else {
      li[i].classList.add("hideResult")
    }
  }
}

// Calling the functions that are inside these variables.
// Using browserify to use modules.
imageSize
checkNetwork