var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#URIParser.jl-1",
    "page": "Readme",
    "title": "URIParser.jl",
    "category": "section",
    "text": "This Julia package provides URI parsing according to RFC 3986.(Image: Build Status) (Image: codecov.io)(Image: URIParser) (Image: URIParser)The main interaction with the package is through the URI constructor, which takes a string argument, e.g.julia> using URIParser\n\njulia> URI(\"hdfs://user:password@hdfshost:9000/root/folder/file.csv\")\nURI(hdfs://user:password@hdfshost:9000/root/folder/file.csv)\n\njulia> URI(\"https://user:password@httphost:9000/path1/path2;paramstring?q=a&p=r#frag\")\nURI(https://user:password@httphost:9000/path1/path2;paramstring?q=a&p=r#frag)\n\njulia> URI(\"news:comp.infosystems.www.servers.unix\")\nURI(news:comp.infosystems.www.servers.unix)Additionally, there is a method for taking the parts of the URI individually, as well as a convenience method taking host and path which constructs a valid HTTP URL:julia> URI(\"hdfs\",\"hdfshost\",9000,\"/root/folder/file.csv\",\"\",\"\",\"user:password\")\nURI(hdfs://user:password@hdfshost:9000/root/folder/file.csv)\n\njulia> URI(\"google.com\",\"/some/path\")\nURI(http://google.com:80/some/path)Afterwards, you may either pass the API struct directly to another package (probably the more common use case) or extract parts of the URI as follows:julia> uri = URI(\"https://user:password@httphost:9000/path1/path2;paramstring?q=a&p=r#frag\")\nURI(https://user:password@httphost:9000/path1/path2;paramstring?q=a&p=r#frag)\n\njulia> uri.scheme\n\"https\"\n\njulia> uri.host\n\"httphost\"\n\njulia> dec(uri.port)\n\"9000\"\n\njulia> uri.path\n\"/path1/path2;paramstring\"\n\njulia> uri.query\n\"q=a&p=r\"\n\njulia> uri.fragment\n\"frag\"\n\njulia> uri.specifies_authority\ntrueThe specifies_authority may need some extra explanation. The reson for its existence is that RFC 3986 differentiates between empty authorities and missing authorities, but there is not way to distinguish these by just looking at the fields. As an example:julia> URI(\"file:///a/b/c\").specifies_authority\ntrue\n\njulia> URI(\"file:///a/b/c\").host\n\"\"\n\njulia> URI(\"file:a/b/c\").specifies_authority\nfalse\n\njulia> URI(\"file:a/b/c\").host\n\"\"Now, while the file scheme consideres these to be equivalent, this may not necessarily be true for all schemes and thus the distinction is necessary."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "URIParser.URIURIParser.URIParserURIParser._precompile_URIParser.controlURIParser.control_arrayURIParser.defragURIParser.delimsURIParser.escapeURIParser.escape_formURIParser.escape_withURIParser.escaped_regexURIParser.evalURIParser.hex_stringURIParser.includeURIParser.is_host_charURIParser.is_markURIParser.is_url_charURIParser.is_userinfo_charURIParser.isalnumURIParser.ishexURIParser.isnumURIParser.isvalidURIParser.non_hierarchicalURIParser.parse_authorityURIParser.parse_urlURIParser.path_paramsURIParser.query_paramsURIParser.reservedURIParser.spaceURIParser.unescapeURIParser.unescape_formURIParser.unescapedURIParser.unescaped_formURIParser.unwiseURIParser.userinfoURIParser.uses_authorityURIParser.uses_fragmentURIParser.uses_paramsURIParser.uses_query"
},

]}
