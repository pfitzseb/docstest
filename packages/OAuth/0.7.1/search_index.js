var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OAuth-1",
    "page": "Readme",
    "title": "OAuth",
    "category": "section",
    "text": "Linux: (Image: Build Status) <br> Windows: (Image: Build status) <br> Codecov: (Image: codecov.io) <br> Documentation: (Image: )My interpretation of the OAuth 1.0 protocol, based on my reading of RFC5849, the liboauth C library and factoring out the OAuth authentication code from Twitter.jl. At one point, this package relied on liboauth and was a wrapper of that library\'s functions built using Clang.jl; however, as I cleaned up the auto-generated functions from Clang, I decided that it would be easier and cleaner to re-write the library in Julia rather than require liboauth.This is still a work-in-progress, but works as a replacement for the authentication in the Twitter.jl package, so it should be fairly complete in its implementation."
},

{
    "location": "autodocs/#OAuth.encodeURI",
    "page": "Docstrings",
    "title": "OAuth.encodeURI",
    "category": "function",
    "text": "encodeURI(s)\n\nConvenience function for HTTP.escapeuri.\n\nExamples\n\njulia> encodeURI(\"hello, world!\")\n\"hello%2C%20world%21\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.encodeURI!",
    "page": "Docstrings",
    "title": "OAuth.encodeURI!",
    "category": "function",
    "text": "encodeURI!(dict_of_parameters::Dict)\n\nMutates dictofparameters using encodeURI on strings.\n\nExamples\n\njulia> encodeURI!(Dict(\"iv\" => 10, \"s\" => \"value!\"))\nDict{String,Any} with 2 entries:\n  \"iv\" => 10\n  \"s\"  => \"value%21\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_body_hash_data",
    "page": "Docstrings",
    "title": "OAuth.oauth_body_hash_data",
    "category": "function",
    "text": "oauth_body_hash_data(data::String)\n\nReturns oauth_body_hash= along with base64 encoded SHA-1 from input.\n\nExamples\n\njulia> oauth_body_hash_data(\"Hello, World!\")\n\"oauth_body_hash=CgqfKmdylCVXq1NV12r0Qvj2XgE=\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_body_hash_encode",
    "page": "Docstrings",
    "title": "OAuth.oauth_body_hash_encode",
    "category": "function",
    "text": "oauth_body_hash_encode(data::String)\n\nConvenience function for SHA-1 and base64 encoding.\n\nExamples\n\njulia> oauth_body_hash_encode(\"julialang\")\n\"Lsztg2byou89Y8lBoH3G8v3vjbw=\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_body_hash_file",
    "page": "Docstrings",
    "title": "OAuth.oauth_body_hash_file",
    "category": "function",
    "text": "oauth_body_hash_file(filename::String)\n\nReturns oauth_body_hash= along with base64 encoded SHA-1 from input text file.\n\nExamples\n\njulia> oauth_body_hash_file(joinpath(Pkg.dir(), \"OAuth/test/auth_body_hash_file.txt\"))\n\"oauth_body_hash=CgqfKmdylCVXq1NV12r0Qvj2XgE=\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_header",
    "page": "Docstrings",
    "title": "OAuth.oauth_header",
    "category": "function",
    "text": "function oauth_header(httpmethod, baseurl, options, oauth_consumer_key, oauth_consumer_secret, oauth_token, oauth_token_secret; oauth_signature_method = \"HMAC-SHA1\", oauth_version = \"1.0\")\n\nBuilds OAuth header, defaulting to OAuth 1.0. Function assumes options has already been run through encodeURI!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_nonce",
    "page": "Docstrings",
    "title": "OAuth.oauth_nonce",
    "category": "function",
    "text": "oauth_nonce(length::Int)\n\nReturns a random string of a given length.\n\nExamples\n\njulia> oauth_nonce(10)\n\"aQb2FVkrYi\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_percent_encode_keys!",
    "page": "Docstrings",
    "title": "OAuth.oauth_percent_encode_keys!",
    "category": "function",
    "text": "oauth_percent_encode_keys!(options::Dict)\n\nReturns dict where keys and values are URL-encoded.\n\nExamples\n\njulia> oauth_percent_encode_keys!(Dict(\"key 1\" => \"value1\", \"key    2\" => \"value 2\"))\nDict{String,String} with 2 entries:\n  \"key%20%20%20%202\" => \"value%202\"\n  \"key%201\"          => \"value1\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_request_resource",
    "page": "Docstrings",
    "title": "OAuth.oauth_request_resource",
    "category": "function",
    "text": "oauth_request_resource(endpoint::String, httpmethod::String, options::Dict, oauth_consumer_key::String, oauth_consumer_secret::String, oauth_token::String, oauth_token_secret::String)\n\nMakes GET or POST call to OAuth API.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_serialize_url_parameters",
    "page": "Docstrings",
    "title": "OAuth.oauth_serialize_url_parameters",
    "category": "function",
    "text": "oauth_serialize_url_parameters(options::Dict)\n\nReturns query string by concatenating dictionary keys/values.\n\nExamples\n\njulia> oauth_serialize_url_parameters(Dict(\"foo\" => \"bar\", \"foo 1\" => \"hello!\"))\n\"foo=bar&foo 1=hello!\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_sign_hmac_sha1",
    "page": "Docstrings",
    "title": "OAuth.oauth_sign_hmac_sha1",
    "category": "function",
    "text": "oauth_sign_hmac_sha1(message::String, signingkey::String)\n\nTakes a message and signing key, converts to a SHA-1 digest, then encodes to base64.\n\nExamples\n\njulia> oauth_sign_hmac_sha1(\"foo\", \"bar\")\n\"hdFVxV7ShqMAvRzxJN4I2H6RTzo=\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_signature_base_string",
    "page": "Docstrings",
    "title": "OAuth.oauth_signature_base_string",
    "category": "function",
    "text": "oauth_signature_base_string(httpmethod::String, url::String, parameterstring::String)\n\nReturns encoded HTTP method, url and parameters.\n\nExamples\n\njulia> oauth_signature_base_string(\"POST\", \"https://julialang.org\", \"foo&bar\")\n\"POST&https%3A%2F%2Fjulialang.org&foo%26bar\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_signing_key",
    "page": "Docstrings",
    "title": "OAuth.oauth_signing_key",
    "category": "function",
    "text": "oauth_signing_key(oauth_consumer_secret::String, oauth_token_secret::String)\n\nReturns a signing key based on a consumer secret and token secret.\n\nExamples\n\njulia> oauth_signing_key(\"foo\", \"bar\")\n\"foo&bar\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OAuth.oauth_timestamp",
    "page": "Docstrings",
    "title": "OAuth.oauth_timestamp",
    "category": "function",
    "text": "oauth_timestamp()\n\nReturns current unix timestamp as String.\n\nExamples\n\njulia> oauth_timestamp()\n\"1512235859\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OAuth.OAuthOAuth.encodeURIOAuth.encodeURI!OAuth.evalOAuth.includeOAuth.oauth_body_hash_dataOAuth.oauth_body_hash_encodeOAuth.oauth_body_hash_fileOAuth.oauth_headerOAuth.oauth_nonceOAuth.oauth_percent_encode_keysOAuth.oauth_percent_encode_keys!OAuth.oauth_request_resourceOAuth.oauth_serialize_url_parametersOAuth.oauth_sign_hmac_sha1OAuth.oauth_signature_base_stringOAuth.oauth_signing_keyOAuth.oauth_timestamp"
},

]}
