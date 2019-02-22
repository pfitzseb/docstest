var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Schemata.jl-1",
    "page": "Readme",
    "title": "Schemata.jl",
    "category": "section",
    "text": "A Schema is a specification of a data set.It exists independently of any particular data set, and therefore can be constructed and modified in the absence of a data set.This package facilitates 3 use cases:Read/write a schema from/to a yaml file. Thus schemata are portable, and a change to a schema does not require recompilation.\nCompare a data set to a schema and list the non-compliance issues.\nTransform an existing data set in order to comply with a schema as much as possible (then rerun the compare function to see any outstanding issues)."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "# Read in a schema\nusing Schemata\n\nschema = readschema(joinpath(dirname(pathof(Schemata)), \"..\", \"test/schemata/fever.yaml\"))\n\n# Alternatively, construct the schema within the code\npatientid = ColumnSchema(:patientid, \"Patient ID\",  UInt,   !CATEGORICAL, REQUIRED,  UNIQUE, UInt)\nage       = ColumnSchema(:age,       \"Age (years)\", Int,    !CATEGORICAL, REQUIRED, !UNIQUE, Int)\ndose      = ColumnSchema(:dose,      \"Dose size\",   String,  CATEGORICAL, REQUIRED, !UNIQUE, [\"small\", \"medium\", \"large\"])\nfever     = ColumnSchema(:fever,     \"Had fever\",   Bool,    CATEGORICAL, REQUIRED, !UNIQUE, Bool)\nts        = TableSchema(:mytable, \"My table\", [patientid, age, dose, fever], [:patientid])\nschema    = Schema(:fever, \"Fever schema\", Dict(:mytable => ts))\n\n# Import some data\nusing DataFrames\n\ntbl = DataFrame(\n    patientid = [1, 2, 3, 4],\n    age       = [11, 22, 33, 444],\n    dose      = [\"small\", \"medium\", \"large\", \"medium\"],\n    fever     = [false, true, true, false]\n)\n\n# Compare the data to the schema\ndiagnose(tbl, schema.tables[:mytable])\n\n# Modify the data to comply with the schema\ncategorical!(tbl, [:dose, :fever])        # Make these columns categorical\ntbl[:patientid] = UInt.(tbl[:patientid])  # Change the data type from Int to UInt\n\n# Compare again\ndiagnose(tbl, schema.tables[:mytable])\n\n# Modify the schema: Require :age <= 120\nschema.tables[:mytable].columns[:age].valid_values = 0:120\n\n# Compare again\ndiagnose(tbl, schema.tables[:mytable])  # Looks like a data entry error\n\n# Fix the data: Attempt 1 (do not set invalid values to missing)\ntbl, issues = enforce_schema(tbl, schema.tables[:mytable], false);\ntbl\nissues\n\n# Fix the data: Attempt 2 (set invalid values to missing)\ntbl, issues = enforce_schema(tbl, schema.tables[:mytable], true);\ntbl\nissues\n\n# Fix the data: Attempt 3 (manually fix data entry error)\ntbl[4, :age] = 44\ndiagnose(tbl, schema.tables[:mytable])\n\n# Add a new column to the schema\nzipcode = ColumnSchema(:zipcode, \"Zip code\", Int, CATEGORICAL, !REQUIRED, !UNIQUE, 10000:99999)\ninsert_column!(schema.tables[:mytable], zipcode)\n\n# Add a corresponding (non-compliant) column to the data\ntbl[:zipcode] = [\"11111\", \"22222\", \"33333\", \"NULL\"];  # CSV file was supplied with \"NULL\" values, forcing eltype to be String.\ndiagnose(tbl, schema.tables[:mytable])\n\n# Fix the data\ntbl, issues = enforce_schema(tbl, schema.tables[:mytable], true);\ntbl\nissues\n\n# Add a Date column to the schema; note the args in the datatype\nusing Dates\n\ndatatype = Dict(\"type\" => Date, \"args\" => \"Y-m-d\")\ndosedate = ColumnSchema(:date, \"Dose date\", datatype, CATEGORICAL, !REQUIRED, !UNIQUE, datatype)\ninsert_column!(schema.tables[:mytable], dosedate)\n\n# Add a corresponding (compliant) column to the data\ntbl[:date] = [\"2017-12-01\", \"2017-12-01\", \"2017-12-11\", \"2017-12-09\"];\ndiagnose(tbl, schema.tables[:mytable])\ntbl, issues = enforce_schema(tbl, schema.tables[:mytable], true);\nshow(tbl, true)\nissues"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "Remove hard coded Date handling.\nImplement writeschema.\nImplement intrarow_constraints for TableSchema.\nDefine joins between tables within a schema, as well as intrarow_constraints across tables.\nInfer a simple Schema from a given data table.\nReplace dependence on DataFrames with dependence on the Tables interface."
},

{
    "location": "autodocs/#Schemata.determine_eltype",
    "page": "Docstrings",
    "title": "Schemata.determine_eltype",
    "category": "function",
    "text": "Determine ColumnSchema.eltyp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.determine_validvalues",
    "page": "Docstrings",
    "title": "Schemata.determine_validvalues",
    "category": "function",
    "text": "Determine ColumnSchema.validvalues from vv and ColumSchema.eltyp (cseltyp).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.determine_vv",
    "page": "Docstrings",
    "title": "Schemata.determine_vv",
    "category": "function",
    "text": "Returns: An instance of ColumnSchema.valid_values.\n\nvv could be a:\n\nDataType. E.g., \"Int64\"\nRange of a Base type. E.g., \"1:10\"\nRange of a non-Base type, represented with a tuple: \"(val1, val2)\" or \"(val1, stepsize, val2)\"\n\n\n\n\n\nUsed if valid_values is the same as eltyp, and vv != datatype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.diagnose",
    "page": "Docstrings",
    "title": "Schemata.diagnose",
    "category": "function",
    "text": "Returns: Collection containing ways in which the table does not comply with the schema.\n\nDefault collection is a vector of tuples. If DataFrames is defined the collection is a DataFrame.\n\nExample result:\n\n:entity   :id        :issue    col      patientid  Incorrect data type (String)    col      patientid  Missing data not allowed    col      patientid  Values are not unique    col      gender     Invalid values (\'d\')    table    mytable    Primary key not unique\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.diagnose_column!",
    "page": "Docstrings",
    "title": "Schemata.diagnose_column!",
    "category": "function",
    "text": "Append table-level issues into issues.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.diagnose_table!",
    "page": "Docstrings",
    "title": "Schemata.diagnose_table!",
    "category": "function",
    "text": "Modified: issues\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.enforce_schema",
    "page": "Docstrings",
    "title": "Schemata.enforce_schema",
    "category": "function",
    "text": "Returns: table, issues\n\nThe table is as compliant as possible with the schema. If the table is completely compliant with the schema, then the issues table has 0 rows. Otherwise the issues table contains the ways in which the output table does not comply with the schema.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.init_compliant_data",
    "page": "Docstrings",
    "title": "Schemata.init_compliant_data",
    "category": "function",
    "text": "Returns: A table with unpopulated columns with name, type, length and order matching the table schema.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.insert_column!",
    "page": "Docstrings",
    "title": "Schemata.insert_column!",
    "category": "function",
    "text": "Insert a column into the table schema at position n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Schemata.parse_nonbase_range",
    "page": "Docstrings",
    "title": "Schemata.parse_nonbase_range",
    "category": "function",
    "text": "Used to represent ranges for non-Base types.\n\nThe format is: \"(start, stop)\" or \"(start, stepsize, stop)\"\n\nIf vv has 2 entries, these represent the end-points of the range; i.e., start:stop. If vv has 3 entries, the middle entry represents the step size; i.e., start:stepsize:stop.\n\nExample: (2017-10-01 09:00, 2017-12-08 23:00), where the entries have type TimeZones.ZonedDateTime.\n\nFor Base types a stringified range will work, E.g., eval(Meta.parse(\"1:10\")) will return the range 1:10. For non-Base types this approach will fail.   E.g., eval(Meta.parse(\"2017-10-01 09:00:2017-12-08 23:00\")) will fail.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Schemata.CATEGORICALSchemata.ColumnSchemaSchemata.REQUIREDSchemata.SchemaSchemata.SchemataSchemata.TableSchemaSchemata.UNIQUESchemata.construct_intrarow_constraintsSchemata.convert_args_typesSchemata.determine_eltypeSchemata.determine_validvaluesSchemata.determine_vvSchemata.diagnoseSchemata.diagnose_column!Schemata.diagnose_table!Schemata.enforce_schemaSchemata.evalSchemata.get_datatypeSchemata.includeSchemata.init_compliant_dataSchemata.insert_column!Schemata.parse_as_typeSchemata.parse_nonbase_rangeSchemata.readschemaSchemata.value_is_valid"
},

]}
