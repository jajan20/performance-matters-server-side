checkNetwork = function() {
	if (navigator.onLine === false) {
		let offlineContainer = document.querySelector('.offlineContainer')
		offlineContainer.classList.add('show')
		console.log('Offline')
	} else {
		console.log('Online')
	}
}

module.exports = checkNetwork()