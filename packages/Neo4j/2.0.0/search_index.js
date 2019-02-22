var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Neo4j.jl-1",
    "page": "Readme",
    "title": "Neo4j.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)(Image: Neo4j) (Image: Neo4j) (Image: Neo4j)A Julia client for the Neo4j graph database.Really easy to use, have a look at test/runtests.jl for the available methods."
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "c = Connection(\"localhost\"; user=\"neo4j\", password=\"neo4j\")\ntx = transaction(c)\ntx(\"CREATE (n:Lang) SET n.name = \\$name\", \"name\" => \"Julia\")\ntx(\"MATCH (n:Lang) RETURN n LIMIT {limit}\", \"limit\" => 10)\nresults = commit(tx)You can also submit a transaction to the server without committing it. This will return a result set but will keep the transaction open both on the client and server:results = tx(\"MATCH (n) RETURN n\"; submit=true)Rollbacks are also supported:rollback(tx)If the goal is to simply run a MATCH query and get the result in the form of a DataFrames.DataFrame object, the cypherQuery function can be used. The cypherQuery implementation performs the query in a single transaction which automatically opens and closes the transaction:results = cypherQuery(\"MATCH (n) RETURN n.property AS Property\")"
},

{
    "location": "autodocs/#Neo4j.Connection",
    "page": "Docstrings",
    "title": "Neo4j.Connection",
    "category": "type",
    "text": "Connection()\n\nExamples\n\njulia> con = Neo4j.Connection(\"localhost\")\nNeo4j.Connection(false, \"localhost\", 7474, \"/db/data/\", \"http://localhost:7474/db/data/\", \"\", \"\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Neo4j.cypherQuery",
    "page": "Docstrings",
    "title": "Neo4j.cypherQuery",
    "category": "function",
    "text": "cypherQuery(conn, cypher, params; elTypes, nRowsElTypeCheck)\n\n\nRetrieve molecular identifier from other databases, targetDb, for single or mulitple query IDs, queryId, and moreover information on Ensembl gene, transcript and peptide IDs, such as ID and genomic loation.\n\nArguments\n\nconn::Neo4j.Connection : a valid connection to a Neo4j graph DB instance.\ncypher::String : Cypher MATCH query returning tabular data.\nparams::Pair : parameters which are passed on to the cypher query.\nelTypes::Vector{Type} : column types can be provided manually as a Vector{Type}\nnRowsElTypeCheck::Int : Number of rows which are used to determine column datatypes (defaults to 1000)\n\nExamples\n\njulia> cypherQuery(\n         Neo4j.Connection(\"localhost\"),\n         \"MATCH (p :Person {name: {name}}) RETURN p.name AS Name, p.age AS Age;\",\n         \"name\" => \"John Doe\")\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Neo4j.ConnectionNeo4j.DEFAULT_HOSTNeo4j.DEFAULT_PORTNeo4j.DEFAULT_URINeo4j.GraphNeo4j.JSONArrayNeo4j.JSONDataNeo4j.JSONObjectNeo4j.Neo4jNeo4j.NodeNeo4j.QueryDataNeo4j.RelationshipNeo4j.ResultNeo4j.StatementNeo4j.TransactionNeo4j.addnodelabelNeo4j.addnodelabelsNeo4j.commitNeo4j.connheadersNeo4j.connurlNeo4j.createnodeNeo4j.createrelNeo4j.cypherQueryNeo4j.deletenodeNeo4j.deletenodelabelNeo4j.deletenodepropertiesNeo4j.deletenodepropertyNeo4j.deleterelNeo4j.evalNeo4j.getElTypesNeo4j.getgraphNeo4j.getlabelsNeo4j.getneighborsNeo4j.getnodeNeo4j.getnodelabelsNeo4j.getnodepropertiesNeo4j.getnodepropertyNeo4j.getnodesforlabelNeo4j.getrelNeo4j.getrelpropertiesNeo4j.getrelpropertyNeo4j.getrelsNeo4j.includeNeo4j.parseResultsNeo4j.requestNeo4j.rollbackNeo4j.setnodepropertyNeo4j.transactionNeo4j.updatenodelabelsNeo4j.updatenodepropertiesNeo4j.updaterelpropertiesNeo4j.version"
},

]}
