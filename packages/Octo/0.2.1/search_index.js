var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Octo.jl-1",
    "page": "Readme",
    "title": "Octo.jl",
    "category": "section",
    "text": "Documentation Build Status\n[![][docs-latest-img]][docs-latest-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]Octo.jl 🐙 is an SQL Query DSL in Julia. It also comes with a very useful tool called Repo. You could Repo.get, Repo.insert! Repo.update! Repo.delete! for many database drivers without hand-written SQL.It\'s influenced by Ecto."
},

{
    "location": "#SQL-Query-DSL-1",
    "page": "Readme",
    "title": "SQL Query DSL",
    "category": "section",
    "text": "julia> using Octo.Adapters.SQL\n\njulia> struct User\n       end\n\njulia> Schema.model(User, table_name=\"users\")\nUser => Dict(:primary_key=>\"id\",:table_name=>\"users\")\n\njulia> u = from(User)\nFromItem users\n\njulia> [SELECT * FROM u]\nSELECT * FROM users\n\njulia> [SELECT (u.name, u.salary) FROM u]\nSELECT name, salary FROM users\n\njulia> [SELECT * FROM u WHERE u.id == 2]\nSELECT * FROM users WHERE id = 2\n\njulia> to_sql([SELECT * FROM u WHERE u.id == 2])\n\"SELECT * FROM users WHERE id = 2\"(Image: structured.svg)"
},

{
    "location": "#Repo-1",
    "page": "Readme",
    "title": "Repo",
    "category": "section",
    "text": "Current supported database drivers:PostgreSQL(via LibPQ.jl)\nMySQL(via MySQL.jl)\nSQLite(via SQLite.jl\nODBC(via ODBC.jl)\nJDBC(via JDBC.jl)julia> using Octo.Adapters.PostgreSQL\n\njulia> Repo.debug_sql()\nLogLevelDebugSQL::RepoLogLevel = -1\n\njulia> Repo.connect(\n           adapter = Octo.Adapters.PostgreSQL,\n           dbname = \"postgresqltest\",\n           user = \"postgres\",\n       )\nPostgreSQL connection (CONNECTION_OK) with parameters:\n  user = postgres\n  passfile = /Users/wookyoung/.pgpass\n  dbname = postgresqltest\n  port = 5432\n  client_encoding = UTF8\n  application_name = LibPQ.jl\n  sslmode = prefer\n  sslcompression = 1\n  krbsrvname = postgres\n  target_session_attrs = any\n\njulia> struct Employee\n       end\n\njulia> Schema.model(Employee, table_name=\"Employee\", primary_key=\"ID\")\nEmployee => Dict(:primary_key=>\"ID\",:table_name=>\"Employee\")\n\njulia> Repo.execute([DROP TABLE IF EXISTS Employee])\n[ Info: DROP TABLE IF EXISTS Employee\n\njulia> Repo.execute(Raw(\"\"\"\n           CREATE TABLE Employee (\n               ID SERIAL,\n               Name VARCHAR(255),\n               Salary FLOAT(8),\n               PRIMARY KEY (ID)\n           )\"\"\"))\n┌ Info: CREATE TABLE Employee (\n│     ID SERIAL,\n│     Name VARCHAR(255),\n│     Salary FLOAT(8),\n│     PRIMARY KEY (ID)\n└ )\n\njulia> Repo.insert!(Employee, [\n           (Name=\"Jeremy\",  Salary=10000.50),\n           (Name=\"Cloris\",  Salary=20000.50),\n           (Name=\"John\",    Salary=30000.50),\n           (Name=\"Hyunden\", Salary=40000.50),\n           (Name=\"Justin\",  Salary=50000.50),\n           (Name=\"Tom\",     Salary=60000.50),\n       ])\n[ Info: INSERT INTO Employee (Name, Salary) VALUES ($1, $2)   (Name = \"Jeremy\", Salary = 10000.5), (Name = \"Cloris\", Salary = 20000.5), (Name = \"John\", Salary = 30000.5), (Name = \"Hyunden\", Salary = 40000.5), (Name = \"Justin\", Salary = 50000.5), (Name = \"Tom\", Salary = 60000.5)\n\njulia> Repo.get(Employee, 2)\n[ Info: SELECT * FROM Employee WHERE ID = 2\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   20000.5 |\n1 row.\n\njulia> Repo.get(Employee, 2:5)\n[ Info: SELECT * FROM Employee WHERE ID BETWEEN 2 AND 5\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    2 | Cloris    |   20000.5 |\n|    3 | John      |   30000.5 |\n|    4 | Hyunden   |   40000.5 |\n|    5 | Justin    |   50000.5 |\n4 rows.\n\njulia> Repo.get(Employee, (Name=\"Jeremy\",))\n[ Info: SELECT * FROM Employee WHERE Name = \'Jeremy\'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    1 | Jeremy   |   10000.5 |\n1 row.\n\njulia> Repo.query(Employee)\n[ Info: SELECT * FROM Employee\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    1 | Jeremy    |   10000.5 |\n|    2 | Cloris    |   20000.5 |\n|    3 | John      |   30000.5 |\n|    4 | Hyunden   |   40000.5 |\n|    5 | Justin    |   50000.5 |\n|    6 | Tom       |   60000.5 |\n6 rows.\n\njulia> Repo.insert!(Employee, (Name=\"Jessica\", Salary=70000.50))\n[ Info: INSERT INTO Employee (Name, Salary) VALUES ($1, $2)   (Name = \"Jessica\", Salary = 70000.5)\n\njulia> Repo.update!(Employee, (ID=2, Salary=85000))\n[ Info: UPDATE Employee SET Salary = $1 WHERE ID = 2   85000\n\njulia> Repo.delete!(Employee, (ID=3,))\n[ Info: DELETE FROM Employee WHERE ID = 3\n\njulia> Repo.delete!(Employee, 3:5)\n[ Info: DELETE FROM Employee WHERE ID BETWEEN 3 AND 5\n\njulia> em = from(Employee)\nFromItem Employee\n\njulia> Repo.query(em)\n[ Info: SELECT * FROM Employee\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    1 | Jeremy    |   10000.5 |\n|    6 | Tom       |   60000.5 |\n|    7 | Jessica   |   70000.5 |\n|    2 | Cloris    |   85000.0 |\n4 rows.\n\njulia> Repo.query([SELECT * FROM em WHERE em.Name == \"Cloris\"])\n[ Info: SELECT * FROM Employee WHERE Name = \'Cloris\'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row.\n\njulia> Repo.query(em, (Name=\"Cloris\",))\n[ Info: SELECT * FROM Employee WHERE Name = \'Cloris\'\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row.\n\njulia> ❓ = Octo.PlaceHolder\nPlaceHolder\n\njulia> Repo.query([SELECT * FROM em WHERE em.Name == ❓], [\"Cloris\"])\n[ Info: SELECT * FROM Employee WHERE Name = $1   \"Cloris\"\n|   id | name     |    salary |\n| ---- | -------- | --------- |\n|    2 | Cloris   |   85000.0 |\n1 row."
},

{
    "location": "#Subqueries-1",
    "page": "Readme",
    "title": "Subqueries",
    "category": "section",
    "text": "julia> sub = from([SELECT * FROM em WHERE em.Salary > 30000], :sub)\nSubQuery (SELECT * FROM Employee WHERE Salary > 30000) AS sub\n\njulia> Repo.query(sub)\n[ Info: SELECT * FROM Employee WHERE Salary > 30000\n|   id | name      |    salary |\n| ---- | --------- | --------- |\n|    6 | Tom       |   60000.5 |\n|    7 | Jessica   |   70000.5 |\n|    2 | Cloris    |   85000.0 |\n3 rows.\n\njulia> Repo.query([SELECT sub.Name FROM sub])\n[ Info: SELECT sub.Name FROM (SELECT * FROM Employee WHERE Salary > 30000) AS sub\n| name      |\n| --------- |\n| Tom       |\n| Jessica   |\n| Cloris    |\n3 rows."
},

{
    "location": "#Colored-SQL-statements-1",
    "page": "Readme",
    "title": "Colored SQL statements",
    "category": "section",
    "text": "(Image: colored_sql_statements.png)See the CI logs  https://travis-ci.org/wookay/Octo.jl/jobs/388090148#L691."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "You need Julia 1.0.julia> type ] key(v1.0) pkg> add Octo(v1.0) pkg> add LibPQ   # for PostgreSQL (depends on LibPQ.jl v0.5.0)\n(v1.0) pkg> add MySQL   # for MySQL (depends on MySQL.jl v0.7.0)\n(v1.0) pkg> add SQLite  # for SQLite (depends on SQLite.jl v0.7.0)\n(v1.0) pkg> add ODBC    # for ODBC (depends on ODBC.jl v0.8.1)\n(v1.0) pkg> add JDBC    # for JDBC (depends on JDBC.jl v0.4.0)[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://wookay.github.io/docs/Octo.jl/[travis-img]: https://api.travis-ci.org/wookay/Octo.jl.svg?branch=master [travis-url]: https://travis-ci.org/wookay/Octo.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/fkup126yxtfb62f1/branch/master?svg=true [appveyor-url]: https://ci.appveyor.com/project/wookay/octo-jl/branch/master[codecov-img]: https://codecov.io/gh/wookay/Octo.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/wookay/Octo.jl"
},

{
    "location": "autodocs/#Octo.@sql_functions",
    "page": "Docstrings",
    "title": "Octo.@sql_functions",
    "category": "macro",
    "text": "@sql_functions(args...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Octo.@sql_keywords",
    "page": "Docstrings",
    "title": "Octo.@sql_keywords",
    "category": "macro",
    "text": "@sql_keywords(args...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Octo.PlaceHolder",
    "page": "Docstrings",
    "title": "Octo.PlaceHolder",
    "category": "type",
    "text": "Octo.PlaceHolder\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Octo.Pretty",
    "page": "Docstrings",
    "title": "Octo.Pretty",
    "category": "module",
    "text": "Pretty\n\nTablize Vector{<:NamedTuple}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Octo.Raw",
    "page": "Docstrings",
    "title": "Octo.Raw",
    "category": "type",
    "text": "Octo.Raw\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Octo.@sql_functionsOcto.@sql_keywordsOcto.AdapterBaseOcto.AdaptersOcto.BackendsOcto.DepsOcto.EnclosedOcto.FieldOcto.FromItemOcto.KeywordAllKeywordOcto.OctoOcto.PlaceHolderOcto.PlainTypesOcto.PredicateOcto.PredicateValueTypesOcto.PrettyOcto.QueryableOcto.RawOcto.RepoOcto.SQLAliasOcto.SQLElementOcto.SQLExtractOcto.SQLFunctionOcto.SQLFunctionNameOcto.SQLKeywordOcto.SchemaOcto.StructuredOcto.SubQueryOcto.VectorOfTuplesOcto.db_functionnamesOcto.db_keywordsOcto.evalOcto.includeOcto.sql_functionsOcto.sql_keywords"
},

]}
