const express = require("express")
const ejs = require("ejs")
const fetch = require('node-fetch')
const sparql = require('./sparql.js')

const app = express()

let rows

// Credits go to Randy Huls for helping me write this bit of code.
// I couldn't get the sparql query to do as I wanted, so this was something I needed help with.
let mapData = function(data) {
	let rootObject = []
	for (let i = 0; i < data.length; i++) {
		let d = data[i]
		
		// If rootObject is empty, fill it straight away with first hit
		if (rootObject.length == 0) {
			rootObject.push({ building: d.building.value, img: [d.img.value] })
		} else {
			for (let j = 0; j < rootObject.length; j++) {
				let r = rootObject[j]

				if(d.building.value == r.building) {
					r.img.push(d.img.value)
					break
				} else if (j == rootObject.length-1) {
					rootObject.push({ building: d.building.value, img: [d.img.value] })
					break
				} 
			}
		}
	}  
	return rootObject
}

app.set("view engine, ejs")
app.use(express.static('public'))

app.get("/", function(req, res) {
	fetch(sparql.queryurl)
	.then((resp) => resp.json()) // transform the data into json
	.then(function(data) { 
		rows = mapData(data.results.bindings)
		res.render("index.ejs", { rows: rows })
		// console.log(rows)
	})
	.catch(function(error) {
    	// if there is any error you will catch them here
    	console.log(error)
	})
})

app.get('./offline', function(req, res) {
	res.render('/index.html')
})

app.get("/:id", function(req, res) {

	// If rows exist, use the known data
	if (rows) {
		res.render("details.ejs", { detail: rows[req.params.id] })
	} else {
		fetch(sparql.queryurl)
		.then((resp) => resp.json()) // transform the data into json
		.then(function(data) { 
			rows = mapData(data.results.bindings)
			for (let i = 0; i < rows.length; i++) {
				if (req.params.id == i) {
					res.render("details.ejs", { detail: rows[i] })
					// console.log(rows[i])
					break
				}
			}
		})
		.catch(function(error) {
	    	// if there is any error you will catch them here
	    	console.log(error)
		})
	}

})

app.listen(8000)
console.log('App is running on port 8000')