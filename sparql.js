var sparqlquery = `
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    PREFIX sem: <http://semanticweb.cs.vu.nl/2009/11/sem/>
    SELECT * WHERE {
      ?gebouw owl:sameAs <http://bag.basisregistraties.overheid.nl/bag/id/pand/0363100012233435> .
      ?foto dct:spatial ?gebouw .
      ?foto foaf:depiction ?img .
      ?foto dc:title ?title .
      OPTIONAL {?foto sem:hasBeginTimeStamp ?date . }
    }`

var encodedquery = encodeURIComponent(sparqlquery)
exports.queryurl = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/hva2018/sparql?default-graph-uri=&query=' + encodedquery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on'
