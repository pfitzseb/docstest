var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JeszenszkiBasis-1",
    "page": "Readme",
    "title": "JeszenszkiBasis",
    "category": "section",
    "text": "Bosonic occupation basis using algorithms from Szabados et al., 2012 (preprint).Tested with Julia 1.0."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add JeszenszkiBasis"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> using JeszenszkiBasis2 sites, 3 particles:julia> basis = Szbasis(2, 3);\njulia> join([to_str(v) for v in basis], \", \")\n\"3 0, 2 1, 1 2, 0 3\"\njulia> length(basis)\n44 sites, 4 particles:julia> basis = Szbasis(4, 4);\njulia> v = basis[8];\njulia> to_str(v)\n\"1 2 1 0\"\njulia> serial_num(basis, v)\n8\njulia> sub_serial_num(basis, v[1:2])\n93 sites, 3 particles, 2 maximum:julia> basis = RestrictedSzbasis(3, 3, 2);\njulia> join([to_str(v) for v in basis], \", \")\n\"2 1 0, 1 2 0, 2 0 1, 1 1 1, 0 2 1, 1 0 2, 0 1 2\"\njulia> sz\"2 1 0\" in basis\ntrue\njulia> sz\"3 0 0\" in basis\nfalse"
},

{
    "location": "#Caveats-1",
    "page": "Readme",
    "title": "Caveats",
    "category": "section",
    "text": "Indexing returns a view into the vector array:\njulia> basis = Szbasis(2, 1);\njulia> join([to_str(v) for v in basis], \", \")\n\"1 0, 0 1\"\njulia> basis[1][1] = 11;\njulia> join([to_str(v) for v in basis], \", \")\n\"11 0, 0 1\""
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "To run all the tests, activate the package before calling test:pkg> activate .\n(JeszenszkiBasis) pkg> test"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Thanks to Roger Melko for getting me up to speed and providing a reference implementation!"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Provided under the terms of the MIT license. See LICENSE for more information."
},

{
    "location": "autodocs/#JeszenszkiBasis.@sz_str",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.@sz_str",
    "category": "macro",
    "text": "Non-standard string literal sz.\n\nConvert a space-separated string to an occupation vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JeszenszkiBasis.RestrictedSzbasis",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.RestrictedSzbasis",
    "category": "type",
    "text": "Basis of occupation vectors with a site occupation restriction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JeszenszkiBasis.Szbasis",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.Szbasis",
    "category": "type",
    "text": "Basis of occupation vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JeszenszkiBasis.num_vectors",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.num_vectors",
    "category": "function",
    "text": "num_vectors(N::Int, K::Int)\n\nCompute the number of vectors in a basis with N particles and K sites.\n\n\n\n\n\nnum_vectors(N::Int, K::Int, M::Int)\n\nCompute the number of vectors in a basis with N particles and K sites, and a limit of M particles per site.\n\n\n\n\n\nnum_vectors(basis::AbstractSzbasis, N::Int, K::Int)\n\nCompute the number of vectors in a basis with N particles and K sites, and a limit of as many particles per site as in basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JeszenszkiBasis.serial_num",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.serial_num",
    "category": "function",
    "text": "serial_num(K::Int, N::Int, v::AbstractVector{Int})\n\nCompute the serial number of occupation vector v in a basis with K sites and N particles.\n\n\n\n\n\nserial_num(K::Int, N::Int, M::Int, v::AbstractVector{Int})\n\nCompute the serial number of occupation vector v in a basis with K sites and N particles, and a limit of M particles per site.\n\n\n\n\n\nserial_num(basis::AbstractSzbasis, v::AbstractVector{Int})\n\nCompute the serial number of occupation vector v in basis.\n\n\n\n\n\nserial_num(basis::AbstractSzbasis, K::Int, N::Int, v::AbstractVector{Int})\n\nCompute the serial number of occupation vector v in a basis with N particles and K sites, and a limit of as many particles per site as in basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JeszenszkiBasis.site_max",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.site_max",
    "category": "function",
    "text": "site_max(basis::AbstractSzbasis)\n\nGet the maximum number of particles on a site in basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JeszenszkiBasis.sub_serial_num",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.sub_serial_num",
    "category": "function",
    "text": "sub_serial_num(basis::AbstractSzbasis, v::AbstractVector{Int})\n\nCompute the serial number of the reduced occupation vector v, which has only a subset of the sites present in basis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JeszenszkiBasis.to_str",
    "page": "Docstrings",
    "title": "JeszenszkiBasis.to_str",
    "category": "function",
    "text": "to_str(v::Vector{Int})\n\nConvert an occupation vector v to a space-separated string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JeszenszkiBasis.@sz_strJeszenszkiBasis.AbstractSzbasisJeszenszkiBasis.JeszenszkiBasisJeszenszkiBasis.RestrictedSzbasisJeszenszkiBasis.SzbasisJeszenszkiBasis.evalJeszenszkiBasis.includeJeszenszkiBasis.num_vectorsJeszenszkiBasis.serial_numJeszenszkiBasis.site_maxJeszenszkiBasis.sub_serial_numJeszenszkiBasis.to_strJeszenszkiBasis.triangles"
},

]}
