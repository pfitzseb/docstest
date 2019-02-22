var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#HTTPClient.jl-1",
    "page": "Readme",
    "title": "HTTPClient.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: HTTPClient) (Image: HTTPClient)Provides HTTP client functionality based on libcurl."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The exported APIs from module HTTPClient are :get(url::String, options::RequestOptions)\nget(url::String; kw_opts...)\n\npost(url::String, data, options::RequestOptions)\npost(url::String, data; kw_opts...)\n\nput(url::String, data, options::RequestOptions)\nput(url::String, data; kw_opts...)data can be either aString - sent as is.\nIOStream - Content type is set to \"application/octet-stream\" unless specified otherwise\nDict{Name, Value} or Vector{Tuple{Name, Value}} - Content type is set to \"application/x-www-form-urlencoded\" unless specified otherwise\n(:file, filename::String) - The file is read, and the content-type is set automatically unless specified otherwise.head(url::String, options::RequestOptions)\nhead(url::String; kw_opts...)\n\ndelete(url::String, options::RequestOptions)\ndelete(url::String; kw_opts...)\n\ntrace(url::String, options::RequestOptions)\ntrace(url::String; kw_opts...)\n\noptions(url::String, options::RequestOptions)\noptions(url::String; kw_opts...)Each API returns an object of typetype Response\n    body::IOBuffer\n    headers::Dict{String, Vector{String}}\n    http_code::Int\n    total_time::Float64\n    bytes_recd::Integer\nendIf you expecting ascii text as a response, for example, html content, or json, bytestring(r.body) will return the stringified response. For binary data use the functions described in http://docs.julialang.org/en/latest/stdlib/base/#i-o to access the raw data."
},

{
    "location": "#Specifying-Options-1",
    "page": "Readme",
    "title": "Specifying Options",
    "category": "section",
    "text": "Options can specified either as keyword arguments or a single object of type RequestOptionstype RequestOptions\n    blocking::Bool\n    query_params::Vector{Tuple}\n    request_timeout::Float64\n    callback::Union(Function,Bool)\n    content_type::String\n    headers::Vector{Tuple}\n    ostream::Union{IO, Nothing}\n    auto_content_type::Bool\nendoptions can also be specified as named arguments in each of the APIS. The names are field names of RequestOptions. For example, get(url; blocking=false, request_timeout=30.0)By default all APIs block till request completion and return Response objects.\nIf blocking is set to false, then the API returns immediately with a RemoteRef. The request is executed asynchronously in a separate task.\nThe user can specify a complete url in the url parameter of the API, or can set query_params as a Vector of (Name, Value) tuples\nIn the former case, the passed url is executed as is.\nIn the latter case the complete URL if formed by concatenating the url field, a \"?\" and the escaped (name,value) pairs. Both the name and values must be convertible to appropriate ASCIIStrings.\nIn file upload cases, an attempt is made to set the content_type type automatically as derived from the file extension unless auto_content_type is set to false.\nauto_content_type - default is true. If the content_type has not been explicitly specified, the library will try to guess the content type for a PUT/POST from the file extension. For POST it will default to \"application/x-www-form-urlencoded\". Set this parameter to false to override this behaviour\nDefault value for the request_timeout is 0.0 seconds, i.e., never timeout.\nIf a callback is specified, its signature should be  customize_cb(curl) where curl is the libCURL handle. The callback can further customize the request by using libCURL easy* APIs directly\nheaders - additional headers to be set. Vector of {Name, Value} Tuples\nostream - if set as an IO, any returned data to written to ostream. If it is a String, it is treated as a filename and written to the file. In both these cases the data is not returned as part of the Response object"
},

{
    "location": "#Samples-1",
    "page": "Readme",
    "title": "Samples",
    "category": "section",
    "text": "See test/runtests.jl for sample code"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "Change the sleep in a loop to using fdwatcher when support for fdwatcher becomes available in mainline"
},

]}
