var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IPNets.jl-1",
    "page": "Readme",
    "title": "IPNets.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)(Image: IPNets) (Image: IPNets) (Image: IPNets) (Image: IPNets)IPNets.jl is a Julia package that provides IP network types. Both IPv4 and IPv6 networks can be described with IPNets.jl using standard, intuitive syntax."
},

{
    "location": "#Main-Features-1",
    "page": "Readme",
    "title": "Main Features",
    "category": "section",
    "text": "An important aspect of IPNets.jl is the ability to treat IP networks as vectors while not actually allocating the memory required to store a full range of addresses. Common vector operations such as membership testing and indexing are fully supported with IPNet types. The following examples should help clarify:create a network with 24-bit netmaskjulia> using IPNets\n\njulia> ip4 = IPv4(\"1.2.3.4\")            # create a standard IPv4 address\nip\"1.2.3.4\"\n\njulia> ip4net = IPv4Net(\"1.2.3.0/24\")\nIPv4Net(\"1.2.3.0/24\")\nmembership testsjulia> ip4 in ip4net\ntruelength, indexing, and iterationjulia> length(ip4net)\n256\n\njulia> ip4net[5]\nip\"1.2.3.4\"\n\njulia> ip4net[4:8]\n5-element Array{IPv4,1}:\n ip\"1.2.3.3\"\n ip\"1.2.3.4\"\n ip\"1.2.3.5\"\n ip\"1.2.3.6\"\n ip\"1.2.3.7\"\n\n julia> [x for x in ip4net[1:4]]\n4-element Array{Any,1}:\n ip\"1.2.3.0\"\n ip\"1.2.3.1\"\n ip\"1.2.3.2\"\n ip\"1.2.3.3\"\n\njulia> [x for x in ip4net][1:4]\n4-element Array{Any,1}:\n ip\"1.2.3.0\"\n ip\"1.2.3.1\"\n ip\"1.2.3.2\"\n ip\"1.2.3.3\"equalityjulia> ip4net[5] == ip4\ntrueminima / maximajulia> ip4net[end]\nip\"1.2.3.255\"\n\njulia> extrema(ip4net)\n(ip\"1.2.3.0\",ip\"1.2.3.255\")alternate construction and subset comparisonjulia> newnet = IPv4Net(\"1.2.3.16\", \"255.255.255.240\")\nIPv4Net(\"1.2.3.16/28\")\n\njulia> newnet ⊆ ip4net\ntruememory usage is minimal (476 bytes to represent the entire IPv4 address space)julia> @time a = IPv4Net(\"0.0.0.0/0\")\nelapsed time: 1.3325e-5 seconds (476 bytes allocated)\nIPNets.IPv4Net(\"0.0.0.0/0\")\n\njulia> size(a)\n(4294967296,)Though these examples use the IPv4Net type, the IPv6Net type is also available with similar behavior:julia> IPNet(\"1.2.3.0/24\")\nIPNets.IPv4Net(\"1.2.3.0/24\")\n\njulia> IPNet(\"2001:1::/64\")\nIPNets.IPv6Net(\"2001:1::/64\")"
},

{
    "location": "#Known-Issues-1",
    "page": "Readme",
    "title": "Known Issues",
    "category": "section",
    "text": "Extrema measurements for IPNets representing the entire IPv4 or IPv6 addressspace will fail due to overrun of the native type used to describe the networks.Non-contiguous subnetting for IPv4 addresses (e.g., a netmask of \"255.240.255.0\")is not supported. Subnets must be able to be represented as a series of contiguous mask bits."
},

{
    "location": "autodocs/#IPNets.IPv4Net",
    "page": "Docstrings",
    "title": "IPNets.IPv4Net",
    "category": "type",
    "text": "Type representing an IPv4 network\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IPNets.IPv6Net",
    "page": "Docstrings",
    "title": "IPNets.IPv6Net",
    "category": "type",
    "text": "Type representing an IPv6 network\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IPNets.contains",
    "page": "Docstrings",
    "title": "IPNets.contains",
    "category": "function",
    "text": "Membership test for an IP address within an IP network\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IPNets.netmask",
    "page": "Docstrings",
    "title": "IPNets.netmask",
    "category": "function",
    "text": "Returns the netmask as an IPv4 address\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IPNets.IPNetIPNets.IPNetsIPNets.IPv4NetIPNets.IPv4broadcastIPNets.IPv6NetIPNets.IPv6broadcastIPNets._contiguousbitcountIPNets._mask2bitsIPNets.containsIPNets.doneIPNets.evalIPNets.includeIPNets.netmaskIPNets.nextIPNets.startIPNets.width"
},

]}
