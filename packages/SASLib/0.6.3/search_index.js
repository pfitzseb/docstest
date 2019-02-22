var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SASLib.jl-1",
    "page": "Readme",
    "title": "SASLib.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)The goal is to have a fast reader that allows greater interoperability of Julia with the SAS ecosystem.  Only sas7bdat format is supported.  SASLib is licensed under the MIT Expat license.Notes: SASLib v0.5.0 coontains a major breaking change in the results being returned from the readsas or SASLib.read functions.  Please read documentation below about how to use the new SASLib.ResultSet object."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"SASLib\")"
},

{
    "location": "#Read-Performance-1",
    "page": "Readme",
    "title": "Read Performance",
    "category": "section",
    "text": "I did benchmarking mostly on my Macbook Pro laptop.  In general, the Julia implementation is somewhere between 10-100x faster than the Python Pandas.  Test results are documented in the test/perf_results_<version> folders."
},

{
    "location": "#User-Guide-1",
    "page": "Readme",
    "title": "User Guide",
    "category": "section",
    "text": "julia> using SASLib"
},

{
    "location": "#Reading-SAS-Files-1",
    "page": "Readme",
    "title": "Reading SAS Files",
    "category": "section",
    "text": "Use the readsas function to read a SAS7BDAT file.  julia> rs = readsas(\"productsales.sas7bdat\")\nRead productsales.sas7bdat with size 1440 x 10 in 0.00256 seconds\nSASLib.ResultSet (1440 rows x 10 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:COUNTRY, 4:REGION, 5:DIVISION, 6:PRODTYPE, 7:PRODUCT, 8:QUARTER, 9:YEAR, 10:MONTH\n1: 925.0, 850.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-01-01\n2: 999.0, 297.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-02-01\n3: 608.0, 846.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-03-01\n4: 642.0, 533.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 2.0, 1993.0, 1993-04-01\n5: 656.0, 646.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 2.0, 1993.0, 1993-05-01\n⋮"
},

{
    "location": "#Accessing-Results-1",
    "page": "Readme",
    "title": "Accessing Results",
    "category": "section",
    "text": "There are several ways to access the data conveniently without using any third party packages. Each cell value may be retrieved directly via the regular [i,j] index.  Accessing an entire row or column returns a tuple and a vector respectively.julia> rs[4,2]\n533.0\n\njulia> rs[4, :PREDICT]\n533.0\n\njulia> rs[1]\n(925.0, 850.0, \"CANADA\", \"EAST\", \"EDUCATION\", \"FURNITURE\", \"SOFA\", 1.0, 1993.0, 1993-01-01)\n\njulia> rs[:ACTUAL]\n1440-element Array{Float64,1}:\n 925.0\n 999.0\n 608.0\n ⋮You may access a portion of the result set by indexing with unit range and column symbols. julia> rs[2:4]\nSASLib.ResultSet (3 rows x 10 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:COUNTRY, 4:REGION, 5:DIVISION, 6:PRODTYPE, 7:PRODUCT, 8:QUARTER, 9:YEAR, 10:MONTH\n1: 999.0, 297.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-02-01\n2: 608.0, 846.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-03-01\n3: 642.0, 533.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 2.0, 1993.0, 1993-04-01\n\n\njulia> rs[:ACTUAL, :PREDICT, :YEAR, :MONTH]\nSASLib.ResultSet (1440 rows x 4 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:YEAR, 4:MONTH\n1: 925.0, 850.0, 1993.0, 1993-01-01\n2: 999.0, 297.0, 1993.0, 1993-02-01\n3: 608.0, 846.0, 1993.0, 1993-03-01\n4: 642.0, 533.0, 1993.0, 1993-04-01\n5: 656.0, 646.0, 1993.0, 1993-05-01\n⋮"
},

{
    "location": "#Assignments-1",
    "page": "Readme",
    "title": "Assignments",
    "category": "section",
    "text": "You may assign values at the cell level.  Doing so has a side effect.julia> srs = rs[:ACTUAL, :PREDICT, :YEAR, :MONTH][1:2]\nSASLib.ResultSet (2 rows x 4 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:YEAR, 4:MONTH\n1: 925.0, 850.0, 1993.0, 1993-01-01\n2: 999.0, 297.0, 1993.0, 1993-02-01\n\njulia> srs[2,2] = 3\n3\n\njulia> rs[1:2]\nSASLib.ResultSet (2 rows x 10 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:COUNTRY, 4:REGION, 5:DIVISION, 6:PRODTYPE, 7:PRODUCT, 8:QUARTER, 9:YEAR, 10:MONTH\n1: 925.0, 850.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-01-01\n2: 999.0, 3.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-02-01"
},

{
    "location": "#Iteration-1",
    "page": "Readme",
    "title": "Iteration",
    "category": "section",
    "text": "ResultSet implements the usual Base.iteration interface, so it\'s easy to walk through the results:julia> for r in rs\n         r[1] < 10 && println(r)\n       end\n(5.0, 425.0, \"CANADA\", \"EAST\", \"CONSUMER\", \"FURNITURE\", \"SOFA\", 1.0, 1993.0, 1993-01-01)\n(8.0, 957.0, \"CANADA\", \"EAST\", \"CONSUMER\", \"FURNITURE\", \"SOFA\", 3.0, 1993.0, 1993-07-01)\n(6.0, 214.0, \"CANADA\", \"WEST\", \"EDUCATION\", \"OFFICE\", \"TABLE\", 3.0, 1993.0, 1993-08-01)\n(9.0, 814.0, \"CANADA\", \"WEST\", \"EDUCATION\", \"OFFICE\", \"TABLE\", 4.0, 1993.0, 1993-11-01)\n(3.0, 405.0, \"CANADA\", \"WEST\", \"CONSUMER\", \"FURNITURE\", \"SOFA\", 2.0, 1994.0, 1994-05-01)\n(3.0, 938.0, \"GERMANY\", \"WEST\", \"EDUCATION\", \"FURNITURE\", \"BED\", 1.0, 1993.0, 1993-03-01)\n(4.0, 975.0, \"U.S.A.\", \"EAST\", \"EDUCATION\", \"FURNITURE\", \"SOFA\", 1.0, 1993.0, 1993-01-01)\n(9.0, 134.0, \"U.S.A.\", \"EAST\", \"EDUCATION\", \"FURNITURE\", \"BED\", 4.0, 1993.0, 1993-12-01)\n(6.0, 915.0, \"U.S.A.\", \"WEST\", \"EDUCATION\", \"OFFICE\", \"DESK\", 2.0, 1993.0, 1993-04-01)"
},

{
    "location": "#ResultSet-Metadata-1",
    "page": "Readme",
    "title": "ResultSet Metadata",
    "category": "section",
    "text": "There are simple functions to retrieve meta information about a ResultSet.names(rs)\ncolumns(rs)\nsize(rs)"
},

{
    "location": "#Conversion-to-DataFrame-1",
    "page": "Readme",
    "title": "Conversion to DataFrame",
    "category": "section",
    "text": "It may be beneficial to convert the result set to DataFrame for more complex queries and manipulations.  julia> df = DataFrame(columns(rs), names(rs));\n\njulia> head(df)\n6×10 DataFrames.DataFrame\n│ Row │ ACTUAL │ PREDICT │ COUNTRY │ REGION │ DIVISION  │ PRODTYPE  │ PRODUCT │ QUARTER │ YEAR   │ MONTH      │\n├─────┼────────┼─────────┼─────────┼────────┼───────────┼───────────┼─────────┼─────────┼────────┼────────────┤\n│ 1   │ 925.0  │ 850.0   │ CANADA  │ EAST   │ EDUCATION │ FURNITURE │ SOFA    │ 1.0     │ 1993.0 │ 1993-01-01 │\n│ 2   │ 999.0  │ 297.0   │ CANADA  │ EAST   │ EDUCATION │ FURNITURE │ SOFA    │ 1.0     │ 1993.0 │ 1993-02-01 │\n│ 3   │ 608.0  │ 846.0   │ CANADA  │ EAST   │ EDUCATION │ FURNITURE │ SOFA    │ 1.0     │ 1993.0 │ 1993-03-01 │\n│ 4   │ 642.0  │ 533.0   │ CANADA  │ EAST   │ EDUCATION │ FURNITURE │ SOFA    │ 2.0     │ 1993.0 │ 1993-04-01 │\n│ 5   │ 656.0  │ 646.0   │ CANADA  │ EAST   │ EDUCATION │ FURNITURE │ SOFA    │ 2.0     │ 1993.0 │ 1993-05-01 │\n│ 6   │ 948.0  │ 486.0   │ CANADA  │ EAST   │ EDUCATION │ FURNITURE │ SOFA    │ 2.0     │ 1993.0 │ 1993-06-01 │"
},

{
    "location": "#Inclusion/Exclusion-of-Columns-1",
    "page": "Readme",
    "title": "Inclusion/Exclusion of Columns",
    "category": "section",
    "text": "Column InclusionIt is always faster to read only the columns that you need.  The include_columns argument comes in handy:julia> rs = readsas(\"productsales.sas7bdat\", include_columns=[:YEAR, :MONTH, :PRODUCT, :ACTUAL])\nRead productsales.sas7bdat with size 1440 x 4 in 0.00151 seconds\nSASLib.ResultSet (1440 rows x 4 columns)\nColumns 1:ACTUAL, 2:PRODUCT, 3:YEAR, 4:MONTH\n1: 925.0, SOFA, 1993.0, 1993-01-01\n2: 999.0, SOFA, 1993.0, 1993-02-01\n3: 608.0, SOFA, 1993.0, 1993-03-01\n4: 642.0, SOFA, 1993.0, 1993-04-01\n5: 656.0, SOFA, 1993.0, 1993-05-01\n⋮Column ExclusionLikewise, you can read all columns except the ones you don\'t want as specified in exclude_columns argument:julia> rs = readsas(\"productsales.sas7bdat\", exclude_columns=[:YEAR, :MONTH, :PRODUCT, :ACTUAL])\nRead productsales.sas7bdat with size 1440 x 6 in 0.00265 seconds\nSASLib.ResultSet (1440 rows x 6 columns)\nColumns 1:PREDICT, 2:COUNTRY, 3:REGION, 4:DIVISION, 5:PRODTYPE, 6:QUARTER\n1: 850.0, CANADA, EAST, EDUCATION, FURNITURE, 1.0\n2: 297.0, CANADA, EAST, EDUCATION, FURNITURE, 1.0\n3: 846.0, CANADA, EAST, EDUCATION, FURNITURE, 1.0\n4: 533.0, CANADA, EAST, EDUCATION, FURNITURE, 2.0\n5: 646.0, CANADA, EAST, EDUCATION, FURNITURE, 2.0\n⋮Case Sensitivity and Column NumberColumn symbols are matched in a case insensitive manner with SAS column names.  Both include_columns and exclude_columns accept column number.  In fact, you can mixed column symbols and column numbers as such:julia> readsas(\"productsales.sas7bdat\", include_columns=[:actual, :predict, 8, 9, 10])\nRead productsales.sas7bdat with size 1440 x 5 in 0.16378 seconds\nSASLib.ResultSet (1440 rows x 5 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:QUARTER, 4:YEAR, 5:MONTH\n1: 925.0, 850.0, 1.0, 1993.0, 1993-01-01\n2: 999.0, 297.0, 1.0, 1993.0, 1993-02-01\n3: 608.0, 846.0, 1.0, 1993.0, 1993-03-01\n4: 642.0, 533.0, 2.0, 1993.0, 1993-04-01\n5: 656.0, 646.0, 2.0, 1993.0, 1993-05-01\n⋮"
},

{
    "location": "#Incremental-Reading-1",
    "page": "Readme",
    "title": "Incremental Reading",
    "category": "section",
    "text": "If you need to read files incrementally, you can use the SASLib.open function to obtain a handle of the file.  Then, use the SASLib.read function to fetch a number of rows.  Remember to close the handler with SASLib.close to avoid memory leak.julia> handler = SASLib.open(\"productsales.sas7bdat\")\nSASLib.Handler[productsales.sas7bdat]\n\njulia> rs = SASLib.read(handler, 2)\nRead productsales.sas7bdat with size 2 x 10 in 0.06831 seconds\nSASLib.ResultSet (2 rows x 10 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:COUNTRY, 4:REGION, 5:DIVISION, 6:PRODTYPE, 7:PRODUCT, 8:QUARTER, 9:YEAR, 10:MONTH\n1: 925.0, 850.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-01-01\n2: 999.0, 297.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-02-01\n\njulia> rs = SASLib.read(handler, 3)\nRead productsales.sas7bdat with size 3 x 10 in 0.00046 seconds\nSASLib.ResultSet (3 rows x 10 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:COUNTRY, 4:REGION, 5:DIVISION, 6:PRODTYPE, 7:PRODUCT, 8:QUARTER, 9:YEAR, 10:MONTH\n1: 608.0, 846.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-03-01\n2: 642.0, 533.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 2.0, 1993.0, 1993-04-01\n3: 656.0, 646.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 2.0, 1993.0, 1993-05-01\n\njulia> SASLib.close(handler)Note that there is no facility at the moment to jump and read a subset of rows.  Currently, SASLib always read from the beginning."
},

{
    "location": "#String-Column-Constructor-1",
    "page": "Readme",
    "title": "String Column Constructor",
    "category": "section",
    "text": "By default, string columns are read into a special AbstractArray structure called ObjectPool in order to conserve memory space that might otherwise be wasted for duplicate string values.  SASLib tries to be smart – when it encounters too many unique values (> 10%) in a large array (> 2000 rows), it falls back to a regular Julia array.You can use a different array type (e.g. CategoricalArray or PooledArray) for any columns as you wish by specifying a string_array_fn parameter when reading the file.  This argument must be a Dict that maps a column symbol into a function that takes an integer argument and returns any array of that size.Here\'s the normal case:julia> rs = readsas(\"productsales.sas7bdat\", include_columns=[:COUNTRY, :REGION]);\nRead productsales.sas7bdat with size 1440 x 2 in 0.00193 seconds\n\njulia> typeof.(columns(rs))\n2-element Array{DataType,1}:\n SASLib.ObjectPool{String,UInt16}\n SASLib.ObjectPool{String,UInt16}If you really want a regular String array, you can force SASLib to do so as such:julia> rs = readsas(\"productsales.sas7bdat\", include_columns=[:COUNTRY, :REGION],\n                    string_array_fn=Dict(:COUNTRY => (n)->fill(\"\",n)));\nRead productsales.sas7bdat with size 1440 x 2 in 0.00333 seconds\n\njulia> typeof.(columns(rs))\n2-element Array{DataType,1}:\n Array{String,1}                 \n SASLib.ObjectPool{String,UInt16}For convenience, SASLib.REGULAR_STR_ARRAY is a function that does exactly that.  In addition, if you need all columns to be configured the same then the key of the string_array_fn dict may be just the symbol :_all_. julia> rs = readsas(\"productsales.sas7bdat\", include_columns=[:COUNTRY, :REGION],\n                    string_array_fn=Dict(:_all_ => REGULAR_STR_ARRAY));\nRead productsales.sas7bdat with size 1440 x 2 in 0.00063 seconds\n\njulia> typeof.(columns(rs))\n2-element Array{DataType,1}:\n Array{String,1}\n Array{String,1}"
},

{
    "location": "#Numeric-Columns-Constructor-1",
    "page": "Readme",
    "title": "Numeric Columns Constructor",
    "category": "section",
    "text": "In general, SASLib allocates native arrays when returning numerical column data.  However, you can provide a custom constructor so you would be able to either preallcoate the array or construct a different type of array.  The number_array_fn parameter is a Dict that maps  column symbols to the custom constructors.  Similar to string_array_fn, this Dict may be specified with a special symbol :_all_ to indicate such constructor be used for all numeric columns.Example - create SharedArray:julia> rs = readsas(\"productsales.sas7bdat\", include_columns=[:ACTUAL,:PREDICT], \n                          number_array_fn=Dict(:ACTUAL => (n)->SharedArray{Float64}(n)));\nRead productsales.sas7bdat with size 1440 x 2 in 0.00385 seconds\n\njulia> typeof.(columns(rs))\n2-element Array{DataType,1}:\n SharedArray{Float64,1}\n Array{Float64,1}          Example - preallocate arrays:julia> A = zeros(1440, 2);\n\njulia> f1(n) = @view A[:, 1];\n\njulia> f2(n) = @view A[:, 2];\n\njulia> readsas(\"productsales.sas7bdat\", include_columns=[:ACTUAL,:PREDICT], \n               number_array_fn=Dict(:ACTUAL => f1, :PREDICT => f2));\nRead productsales.sas7bdat with size 1440 x 2 in 0.00041 seconds\n\njulia> A[1:5,:]\n5×2 Array{Float64,2}:\n 925.0  850.0\n 999.0  297.0\n 608.0  846.0\n 642.0  533.0\n 656.0  646.0"
},

{
    "location": "#Column-Type-Conversion-1",
    "page": "Readme",
    "title": "Column Type Conversion",
    "category": "section",
    "text": "Often, you want a column to be an integer but the SAS7BDAT stores everything as Float64. Specifying the column_type argument does the conversion for you.julia> rs = readsas(\"productsales.sas7bdat\", column_types=Dict(:ACTUAL=>Int))\nRead productsales.sas7bdat with size 1440 x 10 in 0.08043 seconds\nSASLib.ResultSet (1440 rows x 10 columns)\nColumns 1:ACTUAL, 2:PREDICT, 3:COUNTRY, 4:REGION, 5:DIVISION, 6:PRODTYPE, 7:PRODUCT, 8:QUARTER, 9:YEAR, 10:MONTH\n1: 925, 850.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-01-01\n2: 999, 297.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-02-01\n3: 608, 846.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 1.0, 1993.0, 1993-03-01\n4: 642, 533.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 2.0, 1993.0, 1993-04-01\n5: 656, 646.0, CANADA, EAST, EDUCATION, FURNITURE, SOFA, 2.0, 1993.0, 1993-05-01\n\njulia> typeof(rs[:ACTUAL])\nArray{Int64,1}"
},

{
    "location": "#File-Metadata-1",
    "page": "Readme",
    "title": "File Metadata",
    "category": "section",
    "text": "You may obtain meta data for a SAS data file using the metadata function.julia> md = metadata(\"productsales.sas7bdat\")\nFile: productsales.sas7bdat (1440 x 10)\n1:ACTUAL(Float64)                5:DIVISION(String)               9:YEAR(Float64)\n2:PREDICT(Float64)               6:PRODTYPE(String)               10:MONTH(Date/Missings.Missing)\n3:COUNTRY(String)                7:PRODUCT(String) \n4:REGION(String)                 8:QUARTER(Float64)It\'s OK to access the fields directly.julia> fieldnames(SASLib.Metadata)\n9-element Array{Symbol,1}:\n :filename   \n :encoding   \n :endianness \n :compression\n :pagesize   \n :npages     \n :nrows      \n :ncols      \n :columnsinfo\n\njulia> md = metadata(\"test3.sas7bdat\");\n\njulia> md.compression\n:RDC"
},

{
    "location": "#Related-Packages-1",
    "page": "Readme",
    "title": "Related Packages",
    "category": "section",
    "text": "ReadStat.jl uses the ReadStat C-library.  However, ReadStat-C does not support reading RDC-compressed binary files.StatFiles.jl is a higher-level package built on top of ReadStat.jl and implements the FileIO interface.Python Pandas package has an implementation of SAS file reader that SASLib borrows heavily from."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Jared Hobbs, the author of the SAS reader code from Pandas.  See LICENSE_SAS7BDAT.md.\nEvan Miller, the author of ReadStat C/C++ library.  See LICENSE_READSTAT.md.\nDavid Anthoff, who provided many valuable ideas at the early stage of development.\nTyler Beason\nsusabiI also want to thank all the active members at the Julia Discourse community.  This project wouldn\'t be possible without all the help I got from the community.  That\'s the beauty of open-source development."
},

{
    "location": "autodocs/#SASLib.Metadata",
    "page": "Docstrings",
    "title": "SASLib.Metadata",
    "category": "type",
    "text": "Metadata contains information about a SAS data file.\n\nFields\n\nfilename: file name/path of the SAS data set\nencoding: file encoding e.g. \"ISO8859-1\"\nendianness: either :LittleEndianor:BigEndian`\ncompression: could be :RLE, :RDC, or :none\npagesize: size of each data page in bytes\nnpages: number of pages in the file\nnrows: number of data rows in the file\nncols: number of data columns in the file\ncolumnsinfo: vector of column symbols and their respective types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.ObjectPool",
    "page": "Docstrings",
    "title": "SASLib.ObjectPool",
    "category": "type",
    "text": "ObjectPool is a fixed-size one-dimensional array that does not store  any duplicate copies of the same object.  So the benefit is space-efficiency.  The tradeoff is the time used to maintain the index.   This is useful for denormalized data frames where string values may be repeated many times.\n\nAn ObjectPool must be initialize with a default value and a fixed array size.  If your requirement does not fit such assumptions,  you may want to look into using PooledArrays or  CategoricalArrays package instead.\n\nThe implementation is very primitive and is tailor for application that knows exactly how much memory to allocate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.ResultSet",
    "page": "Docstrings",
    "title": "SASLib.ResultSet",
    "category": "type",
    "text": "ResultSet is the primary object that represents data returned from  reading a SAS data file.  ResultSet implements the Base.Iteration interface as well as the IterableTables.jl interface.\n\nFields\n\ncolumns: a vector of columns, each being a vector itself\nnames: a vector of column symbols\nsize: a tuple (nrows, ncols)\n\nAccessors\n\ncolumns(::ResultSet)\nnames(::ResultSet)\nsize(::ResultSet)\nsize(::ResultSet, dim::Integer)\n\nSingle Row/Column Indexing\n\nrs[i] returns a tuple for row i\nrs[:c] returns a vector for column c\n\nMultiple Row/Column Indexing\n\nrs[i:j] returns a view of ResultSet with rows between i and j\nrs[:c...] returns a view of ResultSet with columns specified e.g. rs[:A, :B]\n\nCell Indexing\n\nrs[i,j] returns a single value for row i column j\nrs[i,:c] returns a single value for row i column c\nSpecific cell can be assigned using the above indexing methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.brstrip",
    "page": "Docstrings",
    "title": "SASLib.brstrip",
    "category": "function",
    "text": "Strip from the right end of the bytes array for any byte that matches the ones specified in the remove argument.  See Python\'s bytes.rstrip function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.close",
    "page": "Docstrings",
    "title": "SASLib.close",
    "category": "function",
    "text": "close(handler::Handler) \n\nClose the handler object.  This function effectively closes the underlying iostream.  It must be called after the program  finished reading data.\n\nThis function is needed only when SASLib.open and SASLib.read  functions are used instead of the more convenient readsas function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.contains",
    "page": "Docstrings",
    "title": "SASLib.contains",
    "category": "function",
    "text": "Find needle in the haystack with both Vector{UInt8} type arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.metadata",
    "page": "Docstrings",
    "title": "SASLib.metadata",
    "category": "function",
    "text": "Return metadata of a SAS data file.  See SASLib.Metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.open",
    "page": "Docstrings",
    "title": "SASLib.open",
    "category": "function",
    "text": "open(filename::AbstractString;          encoding::AbstractString = \"\",         convertdates::Bool = true,         includecolumns::Vector = [],         excludecolumns::Vector = [],         stringarrayfn::Dict = Dict(),         numberarrayfn::Dict = Dict(),         columntypes::Dict = Dict{Symbol,Type}(),         verbose_level::Int64 = 1)\n\nOpen a SAS7BDAT data file.  Returns a SASLib.Handler object that can be used in the subsequent SASLib.read and SASLib.close functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.read",
    "page": "Docstrings",
    "title": "SASLib.read",
    "category": "function",
    "text": "read(handler::Handler, nrows=0) \n\nRead data from the handler (see SASLib.open).  If nrows is not specified,  read the entire file content.  When called again, fetch the next nrows rows.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SASLib.readsas",
    "page": "Docstrings",
    "title": "SASLib.readsas",
    "category": "function",
    "text": "readsas(filename::AbstractString;          encoding::AbstractString = \"\",         convertdates::Bool = true,         includecolumns::Vector = [],         excludecolumns::Vector = [],         stringarrayfn::Dict = Dict(),         numberarrayfn::Dict = Dict(),         columntypes::Dict = Dict{Symbol,Type}(),         verbose_level::Int64 = 1)\n\nRead a SAS7BDAT file.  \n\nEncoding may be used as an override only if the file cannot be read using the encoding specified in the file.  If you receive a warning about unknown encoding then check your system\'s supported encodings from the iconv library e.g. using the iconv --list command.\n\nIf convert_dates == false then no conversion is made and you will get the number of days for Date columns (or number of  seconds for DateTime columns) since 1-JAN-1960.  \n\nBy default, all columns will be read.  If you only need a subset of the  columns, you may specify either include_columns or exclude_columns but not both.  They are just  arrays of columns indices or symbols e.g. [1, 2, 3] or [:employeeid, :firstname, :lastname]\n\nString columns by default are stored in SASLib.ObjectPool, which is an array-like structure that is more space-efficient when there is a high number of duplicate values.  However, if there are too many unique items (> 10%) then it\'s automatically  switched over to a regular Array.\n\nIf you wish to use a different kind of array, you can pass your  array constructor via the string_array_fn dict.  The constructor must take a single integer argument that represents the size of the array. The convenient REGULAR_STR_ARRAY function can be used if you just want to  use the regular Array{String} type.\n\nFor examples, string_array_fn = Dict(:column1 => (n)->CategoricalArray{String}((n,))) or   string_array_fn = Dict(:column1 => REGULAR_STR_ARRAY).\n\nFor numeric columns, you may specify your own array constructors using the number_array_fn parameter.  Perhaps you have a different kind of array to store the values e.g. SharedArray.\n\nSpecify column_type argument if any conversion is required.  It should be a Dict, mapping column symbol to a data type.  \n\nFor debugging purpose, verbose_level may be set to a value higher than 1. Verbose level 0 will output nothing to the console, essentially a total quiet  option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SASLib.CIDictSASLib.ColumnSASLib.ColumnNamePointerSASLib.ConfigErrorSASLib.EMPTY_STRINGSASLib.ENCODINGS_OK_WITH_BASE_TRANSCODERSASLib.FALLBACK_ENCODINGSASLib.FileFormatErrorSASLib.HandlerSASLib.MetadataSASLib.ObjectPoolSASLib.REGULAR_STR_ARRAYSASLib.ReaderConfigSASLib.ResultSetSASLib.SASLibSASLib.SAS_RLE_COMMAND_COPY1SASLib.SAS_RLE_COMMAND_COPY17SASLib.SAS_RLE_COMMAND_COPY33SASLib.SAS_RLE_COMMAND_COPY49SASLib.SAS_RLE_COMMAND_COPY64SASLib.SAS_RLE_COMMAND_INSERT_AT17SASLib.SAS_RLE_COMMAND_INSERT_AT2SASLib.SAS_RLE_COMMAND_INSERT_BLANK17SASLib.SAS_RLE_COMMAND_INSERT_BLANK2SASLib.SAS_RLE_COMMAND_INSERT_BYTE18SASLib.SAS_RLE_COMMAND_INSERT_BYTE3SASLib.SAS_RLE_COMMAND_INSERT_ZERO17SASLib.SAS_RLE_COMMAND_INSERT_ZERO2SASLib.SubHeaderPointerSASLib.VENDOR_SASSASLib.VENDOR_STAT_TRANSFERSASLib._chunk_to_dataframeSASLib._determine_vendorSASLib._get_subheader_indexSASLib._metadataSASLib._openSASLib._process_columnattributes_subheaderSASLib._process_columnlist_subheaderSASLib._process_columnname_subheaderSASLib._process_columnsize_subheaderSASLib._process_columntext_subheaderSASLib._process_format_subheaderSASLib._process_page_metaSASLib._process_page_metadataSASLib._process_rowsize_subheaderSASLib._process_subheaderSASLib._process_subheader_countsSASLib._process_subheader_pointersSASLib._read_bytesSASLib._read_floatSASLib._read_intSASLib._read_next_page_contentSASLib._read_page_headerSASLib._read_subheader_signatureSASLib.align_1_checker_valueSASLib.align_1_lengthSASLib.align_1_offsetSASLib.align_1_valueSASLib.align_2_lengthSASLib.align_2_offsetSASLib.align_2_valueSASLib.block_count_lengthSASLib.block_count_offsetSASLib.brstripSASLib.case_insensitive_inSASLib.check_user_column_typesSASLib.closeSASLib.col_count_p1_multiplierSASLib.col_count_p2_multiplierSASLib.colfmtSASLib.column_data_length_lengthSASLib.column_data_length_offsetSASLib.column_data_offset_offsetSASLib.column_name_length_lengthSASLib.column_name_length_offsetSASLib.column_name_offset_lengthSASLib.column_name_offset_offsetSASLib.column_name_pointer_lengthSASLib.column_name_text_subheader_lengthSASLib.column_name_text_subheader_offsetSASLib.column_type_decimalSASLib.column_type_lengthSASLib.column_type_noneSASLib.column_type_offsetSASLib.column_type_stringSASLib.columnsSASLib.compression_method_noneSASLib.compression_method_rdcSASLib.compression_method_rleSASLib.containsSASLib.convert_column_type_if_needed!SASLib.convertfloat64f!SASLib.convertint64BSASLib.convertint64LSASLib.createnumarraySASLib.createstrarraySASLib.current_page_type_strSASLib.dataset_lengthSASLib.dataset_offsetSASLib.date_created_lengthSASLib.date_created_offsetSASLib.date_from_floatSASLib.date_modified_lengthSASLib.date_modified_offsetSASLib.datetime_from_floatSASLib.decode_stringSASLib.default_chunk_sizeSASLib.default_verbose_levelSASLib.encoding_lengthSASLib.encoding_namesSASLib.encoding_offsetSASLib.endianness_lengthSASLib.endianness_offsetSASLib.evalSASLib.file_type_lengthSASLib.file_type_offsetSASLib.header_size_lengthSASLib.header_size_offsetSASLib.includeSASLib.index_columnAttributesIndexSASLib.index_columnListIndexSASLib.index_columnNameIndexSASLib.index_columnSizeIndexSASLib.index_columnTextIndexSASLib.index_dataSubheaderIndexSASLib.index_end_of_headerSASLib.index_formatAndLabelIndexSASLib.index_rowSizeIndexSASLib.index_subheaderCountsIndexSASLib.init_handlerSASLib.issymSASLib.lastcharposSASLib.lcaseSASLib.logdebugSASLib.magicSASLib.metadataSASLib.my_read_next_pageSASLib.openSASLib.os_maker_lengthSASLib.os_maker_offsetSASLib.os_name_lengthSASLib.os_name_offsetSASLib.os_version_number_lengthSASLib.os_version_number_offsetSASLib.page_amd_typeSASLib.page_bit_offset_x64SASLib.page_bit_offset_x86SASLib.page_comp_typeSASLib.page_count_lengthSASLib.page_count_offsetSASLib.page_data_typeSASLib.page_meta_data_mix_typesSASLib.page_meta_typeSASLib.page_metc_typeSASLib.page_mix_typesSASLib.page_size_lengthSASLib.page_size_offsetSASLib.page_type_lengthSASLib.page_type_offsetSASLib.page_type_strSASLib.platform_lengthSASLib.platform_offsetSASLib.populate_column_indicesSASLib.populate_column_namesSASLib.println1SASLib.println2SASLib.println3SASLib.process_byte_array_with_dataSASLib.rdc_compressionSASLib.rdc_decompressSASLib.readSASLib.read_chunkSASLib.read_dataSASLib.read_file_metadataSASLib.read_first_pageSASLib.read_headerSASLib.read_next_pageSASLib.readlineSASLib.readsasSASLib.rle_compressionSASLib.rle_decompressSASLib.row_count_offset_multiplierSASLib.row_count_on_mix_page_offset_multiplierSASLib.row_length_offset_multiplierSASLib.sas_date_formatsSASLib.sas_date_originSASLib.sas_datetime_formatsSASLib.sas_datetime_originSASLib.sas_release_lengthSASLib.sas_release_offsetSASLib.sas_server_type_lengthSASLib.sas_server_type_offsetSASLib.seven_bit_dataSASLib.sizestrSASLib.subheader_comp_compressedSASLib.subheader_comp_truncatedSASLib.subheader_comp_uncompressedSASLib.subheader_count_lengthSASLib.subheader_count_offsetSASLib.subheader_pointer_length_x64SASLib.subheader_pointer_length_x86SASLib.subheader_pointers_offsetSASLib.subheader_signature_to_indexSASLib.symindexSASLib.text_block_size_lengthSASLib.transcode_dataSASLib.transcode_metadataSASLib.typesfmtSASLib.typesofSASLib.u64_byte_checker_valueSASLib.zero_space"
},

]}
