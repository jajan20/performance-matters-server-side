var sparqlquery = `
  PREFIX hg: <http://rdf.histograph.io/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  PREFIX void: <http://rdfs.org/ns/void#>

  SELECT DISTINCT ?building ?img WHERE {
   
   ?cho dct:spatial ?b .
   ?b a hg:Building .
   ?b rdfs:label ?building .

   ?cho foaf:depiction ?img .
   ?cho void:inDataset ?col .

  }
  GROUP BY ?building
`

var encodedquery = encodeURIComponent(sparqlquery)
exports.queryurl = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/hva2018/sparql?default-graph-uri=&query=' + encodedquery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on'
