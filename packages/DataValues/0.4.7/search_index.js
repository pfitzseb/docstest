var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataValues-1",
    "page": "Readme",
    "title": "DataValues",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: DataValues) (Image: codecov)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides the type DataValue that is used to represent missing data.Currently the main use of this type is in the Query.jl and IterableTables.jl packages.This repo is based on the following principles/ideas:This type is meant to make life for data scientists as easy as possible.That is the main guiding principle.We hook into the dot broadcasting mechanism from julia 0.7 to providelifting functionality for functions that don\'t have specific methods for DataValue arguments.The  and  operators follow the 3VLsemantics for DataValues.Comparison operators like ==,  etc. on DataValues returnBool values, i.e. they are normal predicates.The package provides many lifted methods.\nOne can access or unpack the value within a DataValue either via theget(x) function, or use the x syntax.Any help with this package would be greatly appreciated!"
},

{
    "location": "autodocs/#DataValues.DataValueArray",
    "page": "Docstrings",
    "title": "DataValues.DataValueArray",
    "category": "type",
    "text": "DataValueArray{T, N} is an efficient alternative to Array{DataValue{T}, N}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.dropna",
    "page": "Docstrings",
    "title": "DataValues.dropna",
    "category": "function",
    "text": "dropna(X::AbstractVector)\n\nReturn a vector containing only the non-missing entries of X, unwrapping DataValue entries. A copy is always returned, even when X does not contain any missing values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.dropna!",
    "page": "Docstrings",
    "title": "DataValues.dropna!",
    "category": "function",
    "text": "dropna!(X::AbstractVector)\n\nRemove missing entries of X in-place and return a Vector view of the unwrapped DataValue entries. If no missing values are present, this is a no-op and X is returned.\n\n\n\n\n\ndropna!(X::DataValueVector)\n\nRemove missing entries of X in-place and return a Vector view of the unwrapped DataValue entries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.padna",
    "page": "Docstrings",
    "title": "DataValues.padna",
    "category": "function",
    "text": "padna(X::DataValueVector, front::Integer, back::Integer)\n\nreturn a copy of X with front null entries inserted at the beginning of the copy and back null entries inserted at the end.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.padna!",
    "page": "Docstrings",
    "title": "DataValues.padna!",
    "category": "function",
    "text": "padna!(X::DataValueVector, front::Integer, back::Integer)\n\nInsert front null entries at the beginning of X and add back null entries at the end of X. Returns X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DataValues.DataValueDataValues.DataValueArrayDataValues.DataValueExceptionDataValues.DataValueMatrixDataValues.DataValueVectorDataValues.DataValuehash_seedDataValues.DataValuesDataValues.NADataValues._default_spliceDataValues._nullable_eltypeDataValues._unsafe_get_eltypeDataValues.dropnaDataValues.dropna!DataValues.evalDataValues.hasvalueDataValues.includeDataValues.isnaDataValues.maptoTupleDataValues.nullable_returntypeDataValues.padnaDataValues.padna!DataValues.unsafe_get"
},

]}
