const express = require("express")
const ejs = require("ejs")
const fetch = require('node-fetch')
const sparql = require('./sparql.js')

const app = express()

app.set("view engine, ejs")
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render("index.ejs")
})

app.get("/details", function(req, res) {
	fetch(sparql.queryurl)
	.then((resp) => resp.json()) // transform the data into json
	.then(function(data) { 
		rows = data.results.bindings
		res.render("details.ejs", { rows: rows })
		console.log(rows)
	})
	.catch(function(error) {
    	// if there is any error you will catch them here
    	console.log(error)
	})
})

app.listen(8000)
console.log('App is running on port 8000')