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

]}
