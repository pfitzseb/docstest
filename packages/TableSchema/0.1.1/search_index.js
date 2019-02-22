var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TableSchema.jl-1",
    "page": "Readme",
    "title": "TableSchema.jl",
    "category": "section",
    "text": "(Image: Travis) (Image: Coveralls) (Image: SemVer) (Image: Gitter)(Image: Julia Pkg)A library for working with Table Schema in Julia:Table Schema is a simple language- and implementation-agnostic way to declare a schema for tabular data. Table Schema is well suited for use cases around handling and validating tabular data in text formats such as CSV, but its utility extends well beyond this core usage, towards a range of applications where data benefits from a portable schema format."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Table class for working with data and schema\nSchema class for working with schemata\nField class for working with schema fields\nvalidate function for validating schema descriptors\ninfer function that creates a schema based on a data sample"
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": ":construction: This package is pre-release and under heavy development. Please see DESIGN.md for a detailed overview of our goals, and visit the issues page to contribute and make suggestions. For questions that need to a real time response, reach out via Gitter. Thanks! :construction:We aim to make this library compatible with all widely used approaches to work with tabular data in Julia.Please visit our wiki for a list of related projects that we are tracking, and contibute use cases there or as enhancement issues."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "See examples folder and unit tests in runtests.jl for current usage."
},

{
    "location": "#Table-1",
    "page": "Readme",
    "title": "Table",
    "category": "section",
    "text": "using TableSchema\n\ntable = Table(\"cities.csv\")\ntable.headers\n# [\'city\', \'location\']\ntable.read(keyed=True)\n# [\n#   {city: \'london\', location: \'51.50,-0.11\'},\n#   {city: \'paris\', location: \'48.85,2.30\'},\n#   {city: \'rome\', location: \'N/A\'},\n# ]\nrows = table.source\n# 6×5 Array{Any,2}:\n#   \"id\"    \"height\"   \"age\"  \"name\"     \"occupation\"         \n#  1      10.0        1       \"string1\"  \"2012-06-15 00:00:00\"\n#  2      10.1        2       \"string2\"  \"2013-06-15 01:00:00\"\n# ...\nerr = table.errors # handle errors\n..."
},

{
    "location": "#Schema-1",
    "page": "Readme",
    "title": "Schema",
    "category": "section",
    "text": "schema = Schema(\"schema.json\")\nschema.fields\n# <Field1, Field2...>\nerr = schema.errors # handle errors"
},

{
    "location": "#Field-1",
    "page": "Readme",
    "title": "Field",
    "category": "section",
    "text": "Add fields to create or expand your schema like this:schema = Schema()\nfield = Field()\nfield.descriptor._name = \"A column\"\nfield.descriptor.typed = \"Integer\"\nadd_field(schema, field)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": ":construction: Work In Progress. The following documentation is relevant only after package release. In the interim, please see DataPackage.jlThe package use semantic versioning, meaning that major versions could include breaking changes. It is highly recommended to specify a version range in your REQUIRE file e.g.:v\"1.0-\" <= TableSchema < v\"2.0-\"At the Julia REPL, install the package with:(v1.0) pkg> add \"https://github.com/loleg/TableSchema.jl\""
},

{
    "location": "#Development-1",
    "page": "Readme",
    "title": "Development",
    "category": "section",
    "text": "Code examples here require Julia 0.7, as we are now migrating to Julia 1.0. See Pkg documentation for further information.Clone this repository, enter the REPL (press ] at the Julia prompt) to activate and test it using:cd <path-to-my-folder>/TableSchema.jl\njulia\n# Press ]\n(v1.0) pkg> activate .\n(TableSchema) pkg> testFrom your console, you can also run the unit tests with:julia -L src/TableSchema.jl test/runtests.jlYou should see a test summary displayed.Alternatively, put include(\"src/TableSchema.jl\") in your IDE\'s console before running runtests.jl."
},

{
    "location": "autodocs/#TableSchema.ConstraintError",
    "page": "Docstrings",
    "title": "TableSchema.ConstraintError",
    "category": "type",
    "text": "Common exceptions https://github.com/frictionlessdata/tableschema-jl#exceptions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TableSchema.Constraints",
    "page": "Docstrings",
    "title": "TableSchema.Constraints",
    "category": "type",
    "text": "Table Schema field constraints https://github.com/frictionlessdata/tableschema-jl#constraints\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TableSchema.Field",
    "page": "Docstrings",
    "title": "TableSchema.Field",
    "category": "type",
    "text": "Table Schema field https://github.com/frictionlessdata/tableschema-jl#field\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TableSchema.Schema",
    "page": "Docstrings",
    "title": "TableSchema.Schema",
    "category": "type",
    "text": "Table Schema main type https://github.com/frictionlessdata/tableschema-jl#schema\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TableSchema.Table",
    "page": "Docstrings",
    "title": "TableSchema.Table",
    "category": "type",
    "text": "Table Schema generic data structure https://github.com/frictionlessdata/tableschema-jl#table\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TableSchema.TableSchema",
    "page": "Docstrings",
    "title": "TableSchema.TableSchema",
    "category": "module",
    "text": "TableSchema module https://github.com/frictionlessdata/tableschema-jl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TableSchema.checkrow",
    "page": "Docstrings",
    "title": "TableSchema.checkrow",
    "category": "function",
    "text": "Table Schema validators https://github.com/frictionlessdata/tableschema-jl#validators\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TableSchema.CastErrorTableSchema.ConstraintErrorTableSchema.ConstraintsTableSchema.DEFAULT_FORMATTableSchema.DEFAULT_TYPETableSchema.FieldTableSchema.FieldErrorTableSchema.MAX_ROWS_INFERTableSchema.OPTION_KEYSTableSchema.SchemaTableSchema.SchemaErrorTableSchema.TableTableSchema.TableSchemaTableSchema.TableValidationExceptionTableSchema._DEFAULT_BARE_NUMBERTableSchema._DEFAULT_DECIMAL_CHARTableSchema._DEFAULT_GROUP_CHARTableSchema._FALSE_VALUESTableSchema._TRUE_VALUESTableSchema.add_fieldTableSchema.buildTableSchema.cast_by_typeTableSchema.cast_rowTableSchema.cast_valueTableSchema.checkrowTableSchema.commitTableSchema.evalTableSchema.fetch_jsonTableSchema.field_namesTableSchema.get_fieldTableSchema.get_field_indexTableSchema.get_headersTableSchema.guess_typeTableSchema.has_fieldTableSchema.includeTableSchema.inferTableSchema.is_emptyTableSchema.is_validTableSchema.readTableSchema.read_remote_csvTableSchema.remove_fieldTableSchema.saveTableSchema.set_foreign_keyTableSchema.set_primary_keyTableSchema.validate"
},

]}
