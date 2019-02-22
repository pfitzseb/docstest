var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: License: MIT) (Image: Build Status) (Image: codecov.io) (Image: GitHub contributors) (Image: GitHub issues) (Image: GitHub version)(Image: ForTheBadge built-by-developers)"
},

{
    "location": "#Zabbix.jl-1",
    "page": "Readme",
    "title": "Zabbix.jl",
    "category": "section",
    "text": "Julia bindings for Zabbix API :fire:The package has been tested over version 3.2.11."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Since Zabbix is registered in METADATA.jl, you can directly install it like,julia> Pkg.add(\"Zabbix\")"
},

{
    "location": "#Update-1",
    "page": "Readme",
    "title": "Update",
    "category": "section",
    "text": "julia> Pkg.update(\"Zabbix\")"
},

{
    "location": "#How-it-works?-1",
    "page": "Readme",
    "title": "How it works?",
    "category": "section",
    "text": "Please make sure that you have a valid Zabbix URL available along with the right access levels. In case you have only read access on the zabbix server, you may not be able to use configuration and management operations. Full read & write access is desired."
},

{
    "location": "#Creating-a-ZabbixAPI-instance-1",
    "page": "Readme",
    "title": "Creating a ZabbixAPI instance",
    "category": "section",
    "text": "julia> zabbix = Zabbix.ZabbixAPI(\"http://SERVER_IP/zabbix/api_jsonrpc.php\",\"USERNAME\",\"******\",false)\nZabbix.ZabbixAPI(\"http://SERVER_IP/zabbix/api_jsonrpc.php\", \"USERNAME\",\"******\",false, 0, Dict(\"Content-Type\"=>\"application/json-rpc\"), \"2.0\")Note that I have set verbose=false. However, by default we have, verbose=true.  Hence only set verbose=false if you are okay continuing without the info messages."
},

{
    "location": "#Get-the-Zabbix-API\'s-version-Info-1",
    "page": "Readme",
    "title": "Get the Zabbix API\'s version Info",
    "category": "section",
    "text": "julia> Zabbix.api_version(zabbix)\nv\"3.2.11\"\n\njulia>typeof(Zabbix.api_version(zabbix))\nVersionNumber"
},

{
    "location": "#Get-the-auth-token-1",
    "page": "Readme",
    "title": "Get the auth token",
    "category": "section",
    "text": "julia> Zabbix.auth_token(zabbix)\n\"e8f8354d66f7fac2691f5c7441b8dfa0\""
},

{
    "location": "#Get-all-hosts-for-a-user-1",
    "page": "Readme",
    "title": "Get all hosts for a user",
    "category": "section",
    "text": "julia> Zabbix.get_all_hosts(zabbix)\nDict{String,Any} with 3 entries:\n  \"id\"      => 1\n  \"jsonrpc\" => \"2.0\"\n  \"result\"  => Any[Dict{String,Any}(Pair{String,Any}(\"host\", \"localhost\"),Pair{String,Any}(\"interfaces\", Any[Dict{String,Any}(Pair{String,An…"
},

{
    "location": "#Make-any-request-to-the-zabbix-server-1",
    "page": "Readme",
    "title": "Make any request to the zabbix server",
    "category": "section",
    "text": "The make_request function requires you to pass methods(aka Zabbix methods like hosts.get etc) and params ie. parameters in a form of a Dict() object. A easy sample is given on Zabbix\'s official website\n# another way to get the zabbix version\njulia> Zabbix.make_request(zabbix, \"apiinfo.version\", Dict())\nv\"3.2.11\"\n\n# getting the details of a host given its hostname\njulia> method = \"host.get\"\n\"host.get\"\n\njulia> params = Dict(\"output\"=>\"extend\", \"filter\"=>Dict(\"host\"=>[\"localhost\"]))\nDict{String,Any} with 2 entries:\n  \"output\" => \"extend\"\n  \"filter\" => Dict(\"host\"=>String[\"localhost\"])\n\njulia> Zabbix.make_request(zabbix, method, params)\nDict{String,Any} with 3 entries:\n  \"id\"      => 1\n  \"jsonrpc\" => \"2.0\"\n  \"result\"  => Any[Dict{String,Any}(Pair{String,Any}(\"lastaccess\", \"0\"),Pair{String,Any}(\"ipmi_privilege\", \"2\"),Pair{String,Any}(\"ipmi_error…\n\n julia> Zabbix.make_request(zabbix, method, params)[\"result\"][1]\nDict{String,Any} with 39 entries:\n  \"lastaccess\"         => \"0\"\n  \"ipmi_privilege\"     => \"2\"\n  \"ipmi_errors_from\"   => \"0\"\n  \"snmp_available\"     => \"0\"\n  \"templateid\"         => \"0\"\n  \"disable_until\"      => \"0\"\n  \"jmx_available\"      => \"0\"\n  \"maintenance_from\"   => \"0\"\n  \"tls_psk_identity\"   => \"\"\n  \"available\"          => \"1\"\n  \"ipmi_password\"      => \"\"\n  \"tls_accept\"         => \"1\"\n  \"name\"               => \"localhost\"\n  \"tls_issuer\"         => \"\"\n  \"status\"             => \"0\"\n  \"maintenance_status\" => \"0\"\n  \"hostid\"             => \"10084\"\n  \"tls_connect\"        => \"1\"\n  \"ipmi_available\"     => \"0\"\n  \"description\"        => \"\"\n  \"errors_from\"        => \"0\"\n  \"maintenance_type\"   => \"0\"\n  \"error\"              => \"\"\n  \"ipmi_username\"      => \"\"\n  \"snmp_disable_until\" => \"0\"\n  \"snmp_error\"         => \"\"\n  \"tls_subject\"        => \"\"\n  \"maintenanceid\"      => \"0\"\n  \"host\"               => \"localhost\"\n  \"jmx_error\"          => \"\"\n  \"ipmi_disable_until\" => \"0\"\n  \"snmp_errors_from\"   => \"0\"\n  ⋮                    => ⋮\n\njulia> Zabbix.make_request(zabbix, method, params)[\"result\"][1][\"hostid\"]\n\"10084\""
},

{
    "location": "#Facing-issues?-:scream:-1",
    "page": "Readme",
    "title": "Facing issues? :scream:",
    "category": "section",
    "text": "Open a PR with the detailed expaination of the issue\nReach me out here"
},

{
    "location": "autodocs/#Zabbix.ZabbixAPI",
    "page": "Docstrings",
    "title": "Zabbix.ZabbixAPI",
    "category": "type",
    "text": "Zabbix API\n\ncreate the zabbix object\n\njulia>z = ZabbixAPI(\"http://SERVERURL/zabbix/apijsonrpc.php\",\"USERNAME\",\"PASSWORD\", true) ZabbixAPI(\"http://SERVERURL/zabbix/apijsonrpc.php\", \"USERNAME\", \"PASSWORD\", true, 0, Dict(\"Content-Type\"=>\"application/json-rpc\"), \"2.0\")\n\nNote:\n\nHere the verbosity is set to true by default. You may wish to set up by passing false instead of true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zabbix.api_version",
    "page": "Docstrings",
    "title": "Zabbix.api_version",
    "category": "function",
    "text": "Gets the apiinfo.version data from zabbix server\n\ncreate the zabbix object\n\njulia>z = ZabbixAPI(\"http://SERVERURL/zabbix/apijsonrpc.php\",\"USERNAME\",\"PASSWORD\", true)\n\nget the api version\n\njulia>api_version(z)\n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nv\"3.2.11\"\n\nthe type returned is actually a VersionNumber\n\njulia>typeof(Zabbix.api_version(zabbix))\n\nVersionNumber\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zabbix.auth_token",
    "page": "Docstrings",
    "title": "Zabbix.auth_token",
    "category": "function",
    "text": "Gets the authentication token from zabbix server\n\ncreate the zabbix object\n\njulia>z = ZabbixAPI(\"http://SERVERURL/zabbix/apijsonrpc.php\",\"USERNAME\",\"PASSWORD\", true)\n\nget the auth token\n\njulia> auth_token(z)\n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\n\"bc86891a1c6c9ef5d41d640eb258a81a\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zabbix.get_all_hosts",
    "page": "Docstrings",
    "title": "Zabbix.get_all_hosts",
    "category": "function",
    "text": "Gets all host for a user\n\ncreate the zabbix object\n\njulia>z = ZabbixAPI(\"http://SERVERURL/zabbix/apijsonrpc.php\",\"USERNAME\",\"PASSWORD\", false)\n\nget all hosts for a user\n\njulia>getallhosts(z)\n\nINFO: Getting authentication token ... \n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nDict{String,Any} with 3 entries:   \"id\"      => 1   \"jsonrpc\" => \"2.0\"   \"result\"  => Any[Dict{String,Any}(Pair{String,Any}(\"host\", \"localhost\"),Pair{…\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Zabbix.make_request",
    "page": "Docstrings",
    "title": "Zabbix.make_request",
    "category": "function",
    "text": "Make request to the zabbix server\n\nThe make_request function requires you to pass methods(aka Zabbix methods like hosts.get etc) and params ie. parameters in a form of a Dict() object. A easy sample is given on Zabbix\'s official website For references on various methods available in Zabbix, head over to https://www.zabbix.com/documentation/2.2/manual/api/reference\n\ncreate the zabbix object\n\njulia>z = ZabbixAPI(\"http://SERVERURL/zabbix/apijsonrpc.php\",\"USERNAME\",\"PASSWORD\", true)\n\ncreate the zabbix method\n\njulia> method = \"host.get\"\n\n\"host.get\"\n\nconstruct the params dict object\n\njulia> params = Dict(\"output\"=>\"extend\", \"filter\"=>Dict(\"host\"=>[\"localhost\"]))\n\nDict{String,Any} with 2 entries:   \"output\" => \"extend\"   \"filter\" => Dict(\"host\"=>String[\"localhost\"])\n\ncreate the zabbix object\n\njulia>z = ZabbixAPI(\"http://SERVERURL/zabbix/apijsonrpc.php\",\"USERNAME\",\"PASSWORD\", true)\n\nfinally make request\n\njulia> Zabbix.make_request(z, method, params)\n\nINFO: Getting authentication token ... \n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nINFO: Updating request id for next API call ...\n\nDict{String,Any} with 3 entries:   \"id\"      => 1   \"jsonrpc\" => \"2.0\"   \"result\"  => Any[Dict{String,Any}(Pair{String,Any}(\"lastaccess\", \"0\"),Pair{String,Any}(\"ipmiprivilege\", \"2\"),Pair{String,Any}(\"ipmierror…\n\ndisplay all entries for a host\n\njulia> Zabbix.make_request(z, method, params)[\"result\"][1]\n\nINFO: Getting authentication token ... \n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nINFO: Updating request id for next API call ...\n\nDict{String,Any} with 39 entries:   \"lastaccess\"         => \"0\"   \"ipmiprivilege\"     => \"2\"   \"ipmierrorsfrom\"   => \"0\"   \"snmpavailable\"     => \"0\"   \"templateid\"         => \"0\"   \"disableuntil\"      => \"0\"   \"jmxavailable\"      => \"0\"   \"maintenancefrom\"   => \"0\"   \"tlspskidentity\"   => \"\"   \"available\"          => \"1\"   \"ipmipassword\"      => \"\"   \"tlsaccept\"         => \"1\"   \"name\"               => \"localhost\"   \"tlsissuer\"         => \"\"   \"status\"             => \"0\"   \"maintenancestatus\" => \"0\"   \"hostid\"             => \"10084\"   \"tlsconnect\"        => \"1\"   \"ipmiavailable\"     => \"0\"   \"description\"        => \"\"   \"errorsfrom\"        => \"0\"   \"maintenancetype\"   => \"0\"   \"error\"              => \"\"   \"ipmiusername\"      => \"\"   \"snmpdisableuntil\" => \"0\"   \"snmperror\"         => \"\"   \"tlssubject\"        => \"\"   \"maintenanceid\"      => \"0\"   \"host\"               => \"localhost\"   \"jmxerror\"          => \"\"   \"ipmidisableuntil\" => \"0\"   \"snmperrors_from\"   => \"0\"   ⋮                    => ⋮\n\nget the host id of the zabbix host\n\njulia> Zabbix.make_request(z, method, params)[\"result\"][1][\"hostid\"]\n\nINFO: Getting authentication token ... \n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nINFO: Hitting http://SERVERURL/zabbix/apijsonrpc.php ...\n\nINFO: Updating request id for next API call ...\n\n\"10084\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Zabbix.ZabbixZabbix.ZabbixAPIZabbix.api_versionZabbix.auth_tokenZabbix.evalZabbix.get_all_hostsZabbix.includeZabbix.make_request"
},

]}
