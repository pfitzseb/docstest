var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JDBC-Julia-interface-to-Java-JDBC-database-drivers-1",
    "page": "Readme",
    "title": "JDBC - Julia interface to Java JDBC database drivers",
    "category": "section",
    "text": "(Image: Build Status)  (Image: Build status)  (Image: JDBC)This package enables the use of Java JDBC drivers to access databases from within Julia. It uses the JavaCall.jl package to call into Java in order to use the JDBC drivers. The API provided by this package consists essentially of two components: a \"direct\" (i.e. minimally wrapped) interface directly to Java JDBC and a minimal Julian interface with support for DataStreams.jl.This package currently supports only Julia v0.6 and later."
},

{
    "location": "#Initialisation-and-Destruction-1",
    "page": "Readme",
    "title": "Initialisation and Destruction",
    "category": "section",
    "text": "To start it up, add the database driver jar file to the classpath, and then initialise the JVM. using JDBC\nJDBC.usedriver(\"/home/me/derby/derby.jar\")\nJDBC.init() # or JavaCall.init()\n ```\nThe JVM remains in memory unless you explicitly destroy it.  This can be done withjulia JDBC.destroy() # or JavaCall.destroy()\n### Low-Level Java Interface\n\nAs described above, this package provides functionality very similar to using a JDBC driver in Java. This allows you to write code very similar to how it would\nlook in Java.\njulia conn = DriverManager.getConnection(\"jdbc:derby:test/juliatest\") stmt = createStatement(conn) rs = executeQuery(stmt, \"select * from firsttable\") for r in rs      println(getInt(r, 1),  getString(r,\"NAME\")) end\nIn JDBC, accessing the data frome a SQL call is done by iterating over a `ResultSet` instance. In Julia therefore, the `ResultSet` is a regular Julia iterator, and can be iterated in the usual fashion. \nTo get each row as a Julia tuple, iterate over the result set using `JDBCRowIterator`.  Values in the tuple will be of Nullable type if they are declared to be nullable in the database.\njulia for r in JDBCRowIterator(rs)     println(r) end\nThe following accessor functions are defined. Each of these functions take two arguments:  the `Resultset`, and either a field index or a field name. The result of these accessor functions is always a pure Julia object. All conversions from Java types are done before they are returned from these functions. julia getInt getFloat getString  getShort  getByte  getTime  getTimeStamp  getDate getBoolean getNString getURL#### Updates (Java Interface)\n\nWhile inserts and updates can be done via a fully specified SQL string using the `Statement` instance above, it is much safer to do so via a `PreparedStatement`. A `PreparedStatement` has setter functions defined for different types, corresponding to the getter functions shown above. \nppstmt = prepareStatement(conn, \"insert into firsttable values (?, ?)\") setInt(ppstmt, 1,10) setString(ppstmt, 2,\"TEN\") executeUpdate(ppstmt)\nSimilary, a `CallableStatement` can be used to run stored procedures. A `CallableStatement` can have both input and output parameters, and thus has both getter and setter functions defined. julia cstmt = JDBC.prepareCall(conn, \"CALL SYSCSUTIL.SYSCSSETDATABASEPROPERTY(?, ?)\") setString(cstmt, 1, \"derby.locks.deadlockTimeout\") setString(cstmt, 2, \"10\") execute(cstmt)\nNote that as per the JDBC API there are two kinds of execute methods defined on a `Statement` : `executeQuery` returns a ResultSet (usually from a `select`), and `executeUpdate` returns an Integer which denotes the number of rows effected by a query (usually an `update` or `insert` or a DDL). For `PreparedStatements` and `CallableStatements`, an additional function `execute` is defined which returns a boolean which specifies whether a ResultSet has been returned from the query. \n\nAlso note that for a `Statement`, the query itself is specified in the corresponding `execute..` call, while for a `PreparedStatement` and a `CallableStatement`, the query itself is specified while creating them. \n\nThe connections and the statements should be closed via their `close(...)` functions. `commit(connection)`, `rollback(connection)` and `setAutoCommit(true|false)` do the obvious things.\n\n#### Metadata (Java Interface)\n\nPass the `JResultSet` object from `executeQuery` to `getTableMetaData` to get an array of `(column_name, column_type)` tuples.\njulia conn = DriverManager.getConnection(\"jdbc:derby:test/juliatest\") stmt = createStatement(conn) rs = executeQuery(stmt, \"select * from firsttable\") metadata = getTableMetaData(rs)\n### Julian Interface\n\nThis package also provides a more Julian interface for interacting with JDBC.  This involves creating `JDBC.Connection` and `JDBC.Cursor` objects to which query\nstrings can be passedjulia cnxn = JDBC.Connection(\"jdbc:derby:test/juliatest\") # create connection csr = cursor(cnxn) # create cursor from connection"
},

{
    "location": "#if-you-don\'t-need-access-to-the-connection-you-can-create-the-cursor-directly-1",
    "page": "Readme",
    "title": "if you don\'t need access to the connection you can create the cursor directly",
    "category": "section",
    "text": "csr = cursor(\"jdbc:derby:test/juliatest\")"
},

{
    "location": "#execute-some-SQL-1",
    "page": "Readme",
    "title": "execute some SQL",
    "category": "section",
    "text": "execute!(csr, \"insert into pitable (pivalue) values (3.14);\") execute!(csr, \"select * from my_table;\")"
},

{
    "location": "#to-iterate-over-rows-1",
    "page": "Readme",
    "title": "to iterate over rows",
    "category": "section",
    "text": "for row ∈ rows(csr)     # do stuff with row endclose(csr)  # closes Connection, can be called on Connection or Cursor\n#### `DataStreams` Interface and Creating `DataFrame`s\n\nJDBC includes a [DataStreams](https://github.com/JuliaData/DataStreams.jl) interface.  A DataStreams `Source` object can be created from a `JDBC.Cursor` or a\n`JDBCRowIterator` simply by doing e.g. `JDBC.Source(csr)`.  This object implements the DataStreams `Data.Source` interface.  It can be useful for retrieving metadata\nwith `Data.schema`.\n\nThis is also useful for loading data from a database into an object that implements the DataStreams `Data.Sink` interface such as a `DataFrame`.  For this we\nprovide also the convenient `JDBC.load` function.\n\nFor example, you can dojulia src = JDBC.Source(csr)  # create a Source from a JDBC.Cursor"
},

{
    "location": "#here-we-load-into-a-DataFrame,-but-can-be-any-Data.Sink-1",
    "page": "Readme",
    "title": "here we load into a DataFrame, but can be any Data.Sink",
    "category": "section",
    "text": "df = JDBC.load(DataFrame, src)"
},

{
    "location": "#you-can-also-load-from-the-cursor-directly-1",
    "page": "Readme",
    "title": "you can also load from the cursor directly",
    "category": "section",
    "text": "df = JDBC.load(DataFrame, csr)Note that in the above we are assuming that a query was already executed.\n\n### Absolute Quickest Way to Get DataBase Data into `DataFrame`\njulia cnxnstr = \"jdbc:derby:test/juliatest\"  # for example df = JDBC.load(DataFrame, cursor(cnxnstr), \"select * from sometable\") ``Note again that this works not only forDataFramebut anyData.Sink`.There are a few more JDBC.load methods we haven\'t listed here, see methods(JDBC.load)."
},

{
    "location": "#Caveats-1",
    "page": "Readme",
    "title": "Caveats",
    "category": "section",
    "text": "BLOB\'s are not yet supported. \nWhile a large part of the JDBC API has been wrapped, not everything is. Please file an issue if you find anything missing that you need. However, it is very easy to call the Java method directly using JavaCall. Please look at the JDBC.jl source for inspiration if you need to do that. \nBoth Julia DateTime and Java java.sql.Date do not store any timezone information within them. I believe we are doing the right thing here, and everything should be consistent. However timezone is easy to get wrong, so please double check if your application depends on accurate times. \nThere are many many different JDBC drivers in Java. This package needs testing with a wide variety of those."
},

{
    "location": "autodocs/#JDBC.Connection",
    "page": "Docstrings",
    "title": "JDBC.Connection",
    "category": "type",
    "text": "Open a JDBC Connection to the specified host.  The username and password can be optionally passed  as a Dictionary props of the form Dict(\"user\" => \"username\", \"passwd\" => \"password\").   The JDBC connector location can be optionally passed as connectorpath, if it is not  added to the java class path.\n\nReturns a JDBCConnection instance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.JDBCConnection",
    "page": "Docstrings",
    "title": "JDBC.JDBCConnection",
    "category": "type",
    "text": "Open a JDBC Connection to the specified host.  The username and password can be optionally passed  as a Dictionary props of the form Dict(\"user\" => \"username\", \"passwd\" => \"password\").   The JDBC connector location can be optionally passed as connectorpath, if it is not  added to the java class path.\n\nReturns a JDBCConnection instance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.JDBCRowIterator",
    "page": "Docstrings",
    "title": "JDBC.JDBCRowIterator",
    "category": "type",
    "text": "Iterator to get rows of tables as array of tuples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.absolute!",
    "page": "Docstrings",
    "title": "JDBC.absolute!",
    "category": "function",
    "text": "absolute!(rs::JResultSet, row::Int)\n\nMove the cursor to the specified row.\n\nArgs\n\nrs: The JResultSet object.\nrow: The row to move to.\n\nReturns\n\nA boolean indicating success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.beforeFirst!",
    "page": "Docstrings",
    "title": "JDBC.beforeFirst!",
    "category": "function",
    "text": "beforeFirst!(rs::JResultSet)\n\nMove the cursor to the front of the JResultSet, before the first row.\n\nArgs\n\nrs: The JResultSet object.\n\nReturns\n\nnothing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.clearParameters",
    "page": "Docstrings",
    "title": "JDBC.clearParameters",
    "category": "function",
    "text": "clearParameters(stmt::Union{JPreparedStatement, JCallableStatement})\n\nClears the currently held parameters in a JPreparedStatement object or a JCallableStatement object\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.commit",
    "page": "Docstrings",
    "title": "JDBC.commit",
    "category": "function",
    "text": "commit(connection::JConnection)\n\nCommits the transaction\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nNone\n\n\n\n\n\nCommit any pending transaction to the database.  Throws a JDBCError if connection is null.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.connection",
    "page": "Docstrings",
    "title": "JDBC.connection",
    "category": "function",
    "text": "Return the corresponding connection for a given cursor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.createStatement",
    "page": "Docstrings",
    "title": "JDBC.createStatement",
    "category": "function",
    "text": "createStatement(connection::JConnection)\n\nInitializes a Statement\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nThe JStatement object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.cursor",
    "page": "Docstrings",
    "title": "JDBC.cursor",
    "category": "function",
    "text": "Create a new database cursor.\n\nReturns a JDBCCursor instance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.execute",
    "page": "Docstrings",
    "title": "JDBC.execute",
    "category": "function",
    "text": "execute(stmt::(Union{JPreparedStatement, JCallableStatement}))\n\nExecutes the auery based on the Prepared Statement or Callable Statement\n\nArgs\n\nstmt: The Prepared Statement or the Callable Statement object\n\nReturns\n\nA boolean indicating whether the execution was successful or not\n\n\n\n\n\nexecute(stmt::JStatement, query::AbstractString)\n\nExecutes the auery based on JStatement or any of its sub-types\n\nArgs\n\nstmt: The JStatement object or any of its sub-types\nquery: The query to be executed\n\nReturns\n\nA boolean indicating whether the execution was successful or not\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.execute!",
    "page": "Docstrings",
    "title": "JDBC.execute!",
    "category": "function",
    "text": "Run a query on a database.\n\nThe results of the query are not returned by this function but are accessible through the cursor.\n\nparameters can be any iterable of positional parameters, or of some T<:Associative for keyword/named parameters.\n\nThrows a JDBCError if query caused an error, cursor is not initialized or  connection is null.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.executeQuery",
    "page": "Docstrings",
    "title": "JDBC.executeQuery",
    "category": "function",
    "text": "executeQuery(stmt::JStatement, query::AbstractString)\n\nExecutes the auery and returns the results as a JResultSet object.\n\nArgs\n\nstmt: The Statement object\nquery: The query to be executed\n\nReturns\n\nThe result set as a JResultSet object\n\n\n\n\n\nexecuteQuery(stmt::Union{JPreparedStatement, JCallableStatement})\n\nExecutes the auery based on a JPreparedStatement object or a JCallableStatement object\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\n\nReturns\n\nThe result set as a JResultSet object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.executeUpdate",
    "page": "Docstrings",
    "title": "JDBC.executeUpdate",
    "category": "function",
    "text": "executeUpdate(stmt::JStatement, query::AbstractString)\n\nExecutes the update auery and returns the status of the execution of the query\n\nArgs\n\nstmt: The Statement object\nquery: The query to be executed\n\nReturns\n\nAn integer representing the status of the execution\n\n\n\n\n\nexecuteUpdate(stmt::Union{JPreparedStatement, JCallableStatement})\n\nExecutes the update auery based on a JPreparedStatement object or a JCallableStatement object\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\n\nReturns\n\nAn integer indicating the status of the execution of the query\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getColumnCount",
    "page": "Docstrings",
    "title": "JDBC.getColumnCount",
    "category": "function",
    "text": "getColumnCount(rsmd::JResultSetMetaData)\n\nReturns the number of columns based on the JResultSetMetaData object\n\nArgs\n\nrsmd: The JResultSetMetaData object\n\nReturns\n\nThe number of columns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getColumnName",
    "page": "Docstrings",
    "title": "JDBC.getColumnName",
    "category": "function",
    "text": "getColumnName(rsmd::JResultSetMetaData, col::Integer)\n\nReturns the column\'s name based on the JResultSetMetaData object and the column number\n\nArgs\n\nrsmd: The JResultSetMetaData object\ncol: The column number\n\nReturns\n\nThe column name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getColumnType",
    "page": "Docstrings",
    "title": "JDBC.getColumnType",
    "category": "function",
    "text": "getColumnType(rsmd::JResultSetMetaData, col::Integer)\n\nReturns the column\'s data type based on the JResultSetMetaData object and the column number\n\nArgs\n\nrsmd: The JResultSetMetaData object\ncol: The column number\n\nReturns\n\nThe column type as an integer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getDate",
    "page": "Docstrings",
    "title": "JDBC.getDate",
    "category": "function",
    "text": "getDate(rs::Union{JResultSet, JCallableStatement}, fld::AbstractString)\n\nReturns the Date object based on the result set or a callable statement. The value is extracted based on the column name.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column name\n\nReturns\n\nThe Date object.\n\n\n\n\n\ngetDate(rs::Union{JResultSet, JCallableStatement}, fld::Integer)\n\nReturns the Date object based on the result set or a callable statement. The value is extracted based on the column number.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column number\n\nReturns\n\nThe Date object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getMetaData",
    "page": "Docstrings",
    "title": "JDBC.getMetaData",
    "category": "function",
    "text": "getMetaData(rs::JResultSet)\n\nReturns information about the types and properties of the columns in the ResultSet object\n\nArgs\n\nstmt: The JResultSet object\n\nReturns\n\nThe JResultSetMetaData object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getResultSet",
    "page": "Docstrings",
    "title": "JDBC.getResultSet",
    "category": "function",
    "text": "getResultSet(stmt::JStatement)\n\nReturns the result set based on the previous execution of the query based on a JStatement\n\nArgs\n\nstmt: The JStatement object\n\nReturns\n\nThe JResultSet object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getTableMetaData",
    "page": "Docstrings",
    "title": "JDBC.getTableMetaData",
    "category": "function",
    "text": "Get the metadata (column name and type) for each column of the table in the  result set rs.\n\nReturns an array of (column name, column type) tuples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getTime",
    "page": "Docstrings",
    "title": "JDBC.getTime",
    "category": "function",
    "text": "getTime(rs::Union{JResultSet, JCallableStatement}, fld::AbstractString)\n\nReturns the Time object based on the result set or a callable statement. The value is extracted based on the column name.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column name\n\nReturns\n\nThe Time object.\n\n\n\n\n\ngetTime(rs::Union{JResultSet, JCallableStatement}, fld::Integer)\n\nReturns the Time object based on the result set or a callable statement. The value is extracted based on the column number.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column number\n\nReturns\n\nThe Time object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.getTimestamp",
    "page": "Docstrings",
    "title": "JDBC.getTimestamp",
    "category": "function",
    "text": "getTimestamp(rs::Union{JResultSet, JCallableStatement}, fld::AbstractString)\n\nReturns the Timestamp object based on the result set or a callable statement. The value is extracted based on the column name.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column name\n\nReturns\n\nThe Timestamp object.\n\n\n\n\n\ngetTimestamp(rs::@Union{JResultSet, JCallableStatement}, fld::Integer)\n\nReturns the Timestamp object based on the result set or a callable statement. The value is extracted based on the column number.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column number\n\nReturns\n\nThe Timestamp object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.isopen",
    "page": "Docstrings",
    "title": "JDBC.isopen",
    "category": "function",
    "text": "Returns a boolean indicating whether connection conn is open.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.prepareCall",
    "page": "Docstrings",
    "title": "JDBC.prepareCall",
    "category": "function",
    "text": "prepareCall(connection::JConnection, query::AbstractString)\n\nPrepares the Callable Statement for the given query\n\nArgs\n\nconnection: The connection object\nquery: The query string\n\nReturns\n\nThe JCallableStatement object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.prepareStatement",
    "page": "Docstrings",
    "title": "JDBC.prepareStatement",
    "category": "function",
    "text": "prepareStatement(connection::JConnection, query::AbstractString)\n\nPrepares the Statement for the given query\n\nArgs\n\nconnection: The connection object\nquery: The query string\n\nReturns\n\nThe JPreparedStatement object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.rollback",
    "page": "Docstrings",
    "title": "JDBC.rollback",
    "category": "function",
    "text": "rollback(connection::JConnection)\n\nRolls back the transactions.\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nNone\n\n\n\n\n\nRoll back to the start of any pending transaction.  Throws a JDBCError if connection is null.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.rows",
    "page": "Docstrings",
    "title": "JDBC.rows",
    "category": "function",
    "text": "Create a row iterator.\n\nThis method returns an instance of an iterator type which returns one row on each iteration. Each row returnes a Tuple{...}.\n\nThrows a JDBCError if execute! was not called on the cursor or connection is null.\n\nReturns a JDBCRowIterator instance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.setAutoCommit",
    "page": "Docstrings",
    "title": "JDBC.setAutoCommit",
    "category": "function",
    "text": "setAutoCommit(connection::JConnection, x::Bool)\n\nSet the Auto Commit flag to either true or false. If set to false, commit has to be called explicitly\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JDBC.setFetchSize",
    "page": "Docstrings",
    "title": "JDBC.setFetchSize",
    "category": "function",
    "text": "setFetchSize(stmt::Union{JStatement, JPreparedStatement, JCallableStatement }, x::Integer)\n\nSets the fetch size in a JStatement or a JPreparedStatement object or a JCallableStatement object. The number of records that are returned in subsequent query executions are determined by what is set here.\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\nx: The number of records to be returned\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JDBC.COLUMN_NO_NULLSJDBC.COLUMN_NULLABLEJDBC.COLUMN_NULLABLE_UNKNOWNJDBC.ConnectionJDBC.CursorJDBC.DriverManagerJDBC.JCallableStatementJDBC.JConnectionJDBC.JDBCJDBC.JDBCConnectionJDBC.JDBCCursorJDBC.JDBCErrorJDBC.JDBCRowIteratorJDBC.JDBC_COLTYPE_ARRAYJDBC.JDBC_COLTYPE_BIGINTJDBC.JDBC_COLTYPE_BINARYJDBC.JDBC_COLTYPE_BITJDBC.JDBC_COLTYPE_BLOBJDBC.JDBC_COLTYPE_BOOLEANJDBC.JDBC_COLTYPE_CHARJDBC.JDBC_COLTYPE_CLOBJDBC.JDBC_COLTYPE_DATALINKJDBC.JDBC_COLTYPE_DATEJDBC.JDBC_COLTYPE_DECIMALJDBC.JDBC_COLTYPE_DISTINCTJDBC.JDBC_COLTYPE_DOUBLEJDBC.JDBC_COLTYPE_FLOATJDBC.JDBC_COLTYPE_INTEGERJDBC.JDBC_COLTYPE_JAVA_OBJECTJDBC.JDBC_COLTYPE_LONGNVARCHARJDBC.JDBC_COLTYPE_LONGVARBINARYJDBC.JDBC_COLTYPE_LONGVARCHARJDBC.JDBC_COLTYPE_NCHARJDBC.JDBC_COLTYPE_NCLOBJDBC.JDBC_COLTYPE_NULLJDBC.JDBC_COLTYPE_NUMERICJDBC.JDBC_COLTYPE_NVARCHARJDBC.JDBC_COLTYPE_OTHERJDBC.JDBC_COLTYPE_REALJDBC.JDBC_COLTYPE_REFJDBC.JDBC_COLTYPE_ROWIDJDBC.JDBC_COLTYPE_SMALLINTJDBC.JDBC_COLTYPE_SQLXMLJDBC.JDBC_COLTYPE_STRUCTJDBC.JDBC_COLTYPE_TIMEJDBC.JDBC_COLTYPE_TIMESTAMPJDBC.JDBC_COLTYPE_TINYINTJDBC.JDBC_COLTYPE_VARBINARYJDBC.JDBC_COLTYPE_VARCHARJDBC.JPreparedStatementJDBC.JResultSetJDBC.JResultSetMetaDataJDBC.JStatementJDBC.SourceJDBC.absolute!JDBC.beforeFirst!JDBC.clearParametersJDBC.colnameJDBC.colnamesJDBC.coltypeJDBC.coltypesJDBC.column_typesJDBC.commitJDBC.connectJDBC.connectionJDBC.createStatementJDBC.createstatementJDBC.cursorJDBC.destroyJDBC.evalJDBC.executeJDBC.execute!JDBC.executeQueryJDBC.executeUpdateJDBC.getBigDecimalJDBC.getBooleanJDBC.getByteJDBC.getColumnCountJDBC.getColumnNameJDBC.getColumnTypeJDBC.getDateJDBC.getDoubleJDBC.getFloatJDBC.getIntJDBC.getLongJDBC.getMetaDataJDBC.getNStringJDBC.getResultSetJDBC.getShortJDBC.getStringJDBC.getTableMetaDataJDBC.getTimeJDBC.getTimestampJDBC.getURLJDBC.get_method_dictJDBC.includeJDBC.initJDBC.isNullableJDBC.isdoneJDBC.isopenJDBC.jdbc_get_methodJDBC.loadJDBC.ncolsJDBC.prepareCallJDBC.prepareStatementJDBC.pullfieldJDBC.rollbackJDBC.rowsJDBC.setAutoCommitJDBC.setBigDecimalJDBC.setBooleanJDBC.setByteJDBC.setDoubleJDBC.setFetchSizeJDBC.setFloatJDBC.setIntJDBC.setLongJDBC.setNStringJDBC.setShortJDBC.setStringJDBC.setURLJDBC.usedriverJDBC.wasNull"
},

]}
