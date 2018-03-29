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
