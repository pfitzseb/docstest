var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Oracle.jl-1",
    "page": "Readme",
    "title": "Oracle.jl",
    "category": "section",
    "text": "This package provides a driver to access Oracle databases using the Julia language, based on ODPI-C bindings."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "Julia v0.6, v0.7 or v1.0.\nOracle\'s Instant Client.\nLinux or macOS.\nC compiler."
},

{
    "location": "#Instant-Client-installation-1",
    "page": "Readme",
    "title": "Instant Client installation",
    "category": "section",
    "text": "This package requires Oracle\'s Instant Client.To install it, follow these instructions:Download instant client.\nUnzip and add instantclient folder to your LDLIBRARYPATH:export LD_LIBRARY_PATH=/path-to-folder/instantclient_XX_Y:$LD_LIBRARY_PATHCheck ODPI-C documentation, or Instant Client documentation for alternative installation methods."
},

{
    "location": "#Package-installation-1",
    "page": "Readme",
    "title": "Package installation",
    "category": "section",
    "text": "julia> Pkg.add(\"Oracle\")"
},

{
    "location": "#Tutorial-1",
    "page": "Readme",
    "title": "Tutorial",
    "category": "section",
    "text": ""
},

{
    "location": "#Getting-a-Connection-1",
    "page": "Readme",
    "title": "Getting a Connection",
    "category": "section",
    "text": "import Oracle\n\nusername = \"my_username\"\npassword = \"my_password\"\nconnect_string = \"//IP_ADDRESS/XE\" # a valid Oracle connect string\n\nconn = Oracle.Connection(username, password, connect_string)Currently, this driver only supports connections using ASCII or UTF-8 encodings. All connections are created using UTF-8 encoding by default, for both CHAR and NCHAR.To connect as SYSDBA, use the appropriate auth_mode parameter.conn = Oracle.Connection(username, password, connect_string, auth_mode=Oracle.ORA_MODE_AUTH_SYSDBA)Connections are closed automatically (by the garbage collector) when they go out of scope. But you can also close a connection using Oracle.close! method.Oracle.close!(conn)"
},

{
    "location": "#Executing-a-Statement-1",
    "page": "Readme",
    "title": "Executing a Statement",
    "category": "section",
    "text": "Oracle.execute!(conn, \"CREATE TABLE TB_TEST ( ID INT NULL )\")\nOracle.execute!(conn, \"INSERT INTO TB_TEST ( ID ) VALUES ( 1 )\")\nOracle.execute!(conn, \"INSERT INTO TB_TEST ( ID ) VALUES ( null )\")\nOracle.commit!(conn) # will commit 2 lines\n\nOracle.execute!(conn, \"INSERT INTO TB_TEST ( ID ) VALUES ( 3 )\")\nOracle.rollback!(conn) # abort insertion of the third line"
},

{
    "location": "#Binding-values-to-a-Statement-1",
    "page": "Readme",
    "title": "Binding values to a Statement",
    "category": "section",
    "text": "Oracle.execute!(conn, \"CREATE TABLE TB_BIND ( ID NUMBER(15,0) NULL, FLT NUMBER(15,4) NULL, STR VARCHAR(255) NULL, DT DATE NULL)\")\n\nstmt = Oracle.Stmt(conn, \"INSERT INTO TB_BIND ( ID, FLT, STR, DT ) VALUES ( :id, :flt, :str, :dt )\")\n\n# will add a single line to TB_BIND\nstmt[:id] = 1\nstmt[:flt] = 10.23\nstmt[:str] = \"a string\"\nstmt[:dt] = Date(2018,12,31)\nOracle.execute!(stmt)\n\nOracle.commit!(conn)\nOracle.close!(stmt)Statements are closed automatically (by the garbage collector) when they go out of scope. But it\'s good practice to close a Statement using Oracle.close! method as soon as you have finished with it, to release database resources."
},

{
    "location": "#Executing-a-Query-1",
    "page": "Readme",
    "title": "Executing a Query",
    "category": "section",
    "text": "Use Oracle.query method with do-syntax to get a reference to a cursor.Oracle.query(conn, \"SELECT * FROM TB_BIND\") do cursor\n    for row in cursor\n        # row values can be accessed using column name or position\n        println( row[\"ID\"]  ) # same as row[1]\n        println( row[\"FLT\"] )\n        println( row[\"STR\"] )\n        println( row[\"DT\"]  ) # same as row[4]\n    end\nendYou can also use a prepared statement to execute a query.stmt = Oracle.Stmt(conn, \"SELECT FLT FROM TB_BIND WHERE ID = :id\")\nstmt[:id] = 1\n\nOracle.query(stmt) do cursor\n    for row in cursor\n      println(row[\"FLT\"])\n    end\nend\n\nOracle.close!(stmt)There is also the possibility to fetch one row at a time.stmt = Oracle.Stmt(conn, \"SELECT FLT FROM TB_BIND\")\nOracle.execute!(stmt)\n\nrow = Oracle.fetch_row!(stmt)\nwhile row != nothing\n    println(row[1])\n    row = Oracle.fetch_row!(stmt)\nend\n\nOracle.close!(stmt)"
},

{
    "location": "#Batch-statement-execution-1",
    "page": "Readme",
    "title": "Batch statement execution",
    "category": "section",
    "text": "If you need to execute the same statement many times but binding different values each time, pass a vector of columns to Oracle.execute! method.This will use the ODPI-C executeMany feature.NUM_ROWS = 1_000\n\ncolumn_1 = [ i for i in 1:NUM_ROWS ]\ncolumn_2 = .5 * column_1\n\nsql = \"INSERT INTO TB_BENCH_EXECUTE_MANY ( ID, FLT ) VALUES ( :1, :2 )\"\nOracle.execute!(conn, sql, [ column_1, column_2 ])"
},

{
    "location": "#Session-Pools-1",
    "page": "Readme",
    "title": "Session Pools",
    "category": "section",
    "text": "A Pool represents a pool of connections, and provides a faster way to acquire connections to the database.# creates a pool for a maximum of 2 sessions\npool = Oracle.Pool(username, password, connect_string, max_sessions=2, session_increment=1)\n\nconn_1 = Oracle.Connection(pool)\nconn_2 = Oracle.Connection(pool) # at this point, we can\'t acquire more connections\n\n# release a connection so that we can acquire another one.\nOracle.close!(conn_1)\n\n# by now, acquiring a new connection should be pretty fast\n# since the new connection will be taken from the pool\nconn_3 = Oracle.Connection(pool)\n\n# release all connections that are still open\nOracle.close!(conn_2)\nOracle.close!(conn_3)\n\nOracle.close!(pool)A Pool is closed automatically (by the garbage collector) when it goes out of scope. You can use Oracle.close! method as soon as you have finished with it, to release database resources."
},

{
    "location": "#LOB-1",
    "page": "Readme",
    "title": "LOB",
    "category": "section",
    "text": "Oracle LOB fields can hold up to 4GB of data.They come in two flavors:Binary LOBs: BLOB or BFILE.\nCharacter LOBs: CLOB or NCLOB.LOB values are represented as a value of type Oracle.Lob in this package.From a LOB value, you can use read and write methods to manipulate whole contents of the LOB value. For incremental reading/writing, you can use open with do-syntax do get an IO stream out of a Oracle.Lob.IO Streams created on Character LOBs use the character index as its position, and only support reading/writing for Char and String data types.A LOB is closed automatically (by the garbage collector) when it goes out of scope. You can use Oracle.close! method as soon as you have finished with it, to release database resources.Currently, BFILE is not supported."
},

{
    "location": "#Reading-from-a-BLOB-1",
    "page": "Readme",
    "title": "Reading from a BLOB",
    "category": "section",
    "text": "lyric = \"hey you. 🎵 🎶 Out there in the cold. getting lonely, getting old. Can you feel me? 📼📼📼📼\"\n\nOracle.execute!(conn, \"CREATE TABLE TB_BLOB ( b BLOB )\")\nOracle.execute!(conn, \"INSERT INTO TB_BLOB ( B ) VALUES ( utl_raw.cast_to_raw(\'$lyric\'))\")\n\nOracle.query(conn, \"SELECT B FROM TB_BLOB\") do cursor\n    for row in cursor\n        blob = row[\"B\"]\n        bytes_vector = read(blob) # Vector{UInt8}\n        println(String(bytes_vector))\n    end\nend"
},

{
    "location": "#Writing-to-a-BLOB-1",
    "page": "Readme",
    "title": "Writing to a BLOB",
    "category": "section",
    "text": "Follow these steps to write to a BLOB field in the database.Create a temporary Lob associated with the connection using Oracle.Lob(connection, oracle_type).\nWrite data to the Lob.\nWrap the Lob into a Variable.\nBind the variable to the statement.\nExecute the statement.Oracle.execute!(conn, \"CREATE TABLE TB_BLOB_VARIABLE ( B BLOB )\")\n\ntest_data = rand(UInt8, 5000)\n\n# creates a temporary Lob bounded to the Connection\nblob = Oracle.Lob(conn, Oracle.ORA_ORACLE_TYPE_BLOB)\n\n# replaces all Lob data with the contents of the array test_data\nwrite(blob, test_data)\n\n# wraps the blob in a Variable\nora_var = Oracle.Variable(conn, blob)\n\nstmt = Oracle.Stmt(conn, \"INSERT INTO TB_BLOB_VARIABLE ( B ) VALUES ( :1 )\")\n\n# binds the variable to the statement\nstmt[1] = ora_var\n\nOracle.execute!(stmt)\nOracle.close!(stmt)"
},

{
    "location": "#ODPI-C-Naming-Conventions-1",
    "page": "Readme",
    "title": "ODPI-C Naming Conventions",
    "category": "section",
    "text": "All enums, constants and structs in ODPI-C library use the prefix DPI or dpi.In Oracle.jl, the Julia implementation of these elements use the prefix ORA or Ora.Examples:The ODPI-C constant DPI_MODE_AUTH_SYSDBA becomes ORA_MODE_AUTH_SYSDBA in Julia.\nThe ODPI-C enum dpiAuthMode becomes OraAuthMode in Julia.\nThe ODPI-C struct dpiTimestamp becomes OraTimestamp in Julia.All julia structs with prefix Ora are raw wrappers around ODPC-C structs and may contain unsafe attributes.Safe equivalent Julia structs drop the Ora prefix.ODPI-C function wrappers have their name preserved, as in dpiContext_create."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The source code for the package Oracle.jl is licensed under the MIT License.During installation, Oracle.jl downloads the source code and compile the library ODPI-C which is licensed under The Universal Permissive License (UPL), Version 1.0 and/or the Apache License."
},

]}
