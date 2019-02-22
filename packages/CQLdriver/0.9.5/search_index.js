var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CQLdriver-1",
    "page": "Readme",
    "title": "CQLdriver",
    "category": "section",
    "text": "This Julia package is an interface to ScyllaDB / Cassandra and is based on the Datastax CPP driver implementing the CQL v3 binary protocol. The package is missing very many features, but it does two things quite well:write very many rows quickly\nread very many rows quicklyNow, it\'s probably easy to extend this package to enable other features, but I haven\'t taken the time to do so. If you find this useful but are missing a small set of features I can probably implement them if you file an issue. CQLdriver depends on DataFrames.Currently the following data-types are supported:Julia Type CQL type\nString TEXT\nString VARCHAR\nDate DATE\nInt8 TINYINT\nInt16 SMALLINT\nInt32 INTEGER\nInt64 BIGINT\nInt64 COUNTER\nBool BOOLEAN\nFloat32 FLOAT\nFloat64 DOUBLE\nDateTime TIMESTAMP"
},

{
    "location": "#Example-use-1",
    "page": "Readme",
    "title": "Example use",
    "category": "section",
    "text": ""
},

{
    "location": "#Starting-/-Closing-a-session-1",
    "page": "Readme",
    "title": "Starting / Closing a session",
    "category": "section",
    "text": "cqlinit() will return a tuple with 2 pointers and a UInt16 error code which you can check.  If the returned value is 0 then you\'re in good shape. It also lets you tune some performance characteristics of your connection.julia> session, cluster, err = cqlinit(\"192.168.1.128, 192.168.1.140\")\njulia> const CQL_OK = 0x0000\njulia> @assert err == CQL_OK\njulia> cqlclose(session, cluster)\n\njulia> session, cluster, err = cqlinit(hosts, threads = 1, connections = 2, queuesize = 4096, bytelimit = 65536, requestlimit = 256)\njulia> cqlclose(session, cluster)The driver tries to be smart about detecting all the nodes in the cluster and keeping the connection alive."
},

{
    "location": "#Writing-data-1",
    "page": "Readme",
    "title": "Writing data",
    "category": "section",
    "text": "cqlwrite() takes a DataFrame with named columns. Make sure that the column names in your DataFrame are the same as those in table you are writing to. By default it will write 1000 rows per batch and will make 5 attemps at writing each batch.For appending new rows to tables:julia> table = \"data.refrigerator\"\njulia> data = DataFrame(veggies = [\"Carrots\", \"Broccoli\"], amount = [3, 5])\njulia> err = cqlwrite(session, table, data)For updating a table you must provide additional arguments.  Consider the following statement which updates a table that uses counters: UPDATE data.car SET speed = speed + ?, temp = temp + ? WHERE partid = ? The query below is analogous to the statement above:julia> table = \"data.car\"\njulia> data = DataFrame(speed=[1,2], temp=[4,5], partid=[\"wheel1\",\"wheel2\"])\njulia> err = cqlwrite(session, \n                      table, \n                      data[:,[:speed, :total]],\n                      update = data[:,[:partid]],\n                      batchsize = 10000,\n                      retries = 6,\n                      counter = true)"
},

{
    "location": "#Reading-data-1",
    "page": "Readme",
    "title": "Reading data",
    "category": "section",
    "text": "cqlread() pulls down data in 10000-row pages by default. It will do 5 retries per page and collate everything into a DataFrame with typed and named columns.julia> query = \"SELECT * FROM data.car\"\njulia> err, output = cqlread(session, query)\n\n(0x0000, 2×3 DataFrames.DataFrame\n│ Row │ speed │ temp │ partid   │\n├┼┼┼┤\n│ 1   │ 1     │ 4    │ \"wheel1\" │\n│ 2   │ 2     │ 5    │ \"wheel2\" │)Changing the page size might affect performance. You can also increase the number of characters allowed for string types.julia> query = \"SELECT * FROM data.bigtable LIMIT 1000000\"\njulia> err, output = cqlread(session, \n                             query, \n                             pgsize = 15000, \n                             retries = 6, \n                             strlen = 1024)You can send in an array of different queries and the driver will execute them asynchronously and return an array of resulting dataframes.julia> query = [\"SELECT * FROM data.bigtable WHERE driver=124\",\"SELECT * FROM data.smalltable WHERE car=144\"]\njulia> err, output = cqlread(session, \n                             query, \n                             concurrency=500, \n                             timeout = 12000)\n"
},

{
    "location": "#Executing-commands-1",
    "page": "Readme",
    "title": "Executing commands",
    "category": "section",
    "text": "cqlexec() runs your command on the database and returns a 0x0000 if everything went OK.julia> cmd = \"CREATE TABLE test.example (id int, data text, PRIMARY KEY (id));\"\njulia> err = cqlexec(session, cmd)"
},

]}
