// var image = document.images[0];
// var downloadingImage = new Image();
// downloadingImage.onload = function(){
//     image.src = this.src;   
// }
// downloadingImage.src = "http://an.image/to/aynchrounously/download.jpg";



function GetOrigSize () {
    var images = document.querySelectorAll("img")
    // console.log(images)
    for (i = 0; i < images.length; i++) {
    	if ('naturalHeight' in images[i]) {
        	
        	var message = "The original size of the image:"
        	message += "\n width: " + images[i].naturalWidth + "px"
        	message += "\n height: " + images[i].naturalHeight + "px"
        	console.log(message)
    
    	} else {
        	console.log("Your browser doesn't support this example!")
    	}
    }
}

GetOrigSize()