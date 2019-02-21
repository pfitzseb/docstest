var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AhoCorasickAutomatons.jl-1",
    "page": "Readme",
    "title": "AhoCorasickAutomatons.jl",
    "category": "section",
    "text": "A 2-Array implementation of Aho–Corasick automaton.For more detail, type ?AhoCorasickAutomaton in Julia REPL."
},

{
    "location": "autodocs/#AhoCorasickAutomatons.ACMatch",
    "page": "Docstrings",
    "title": "AhoCorasickAutomatons.ACMatch",
    "category": "type",
    "text": "ACMatch has 3 fields:\n\n1. s : start of match\n2. t : stop of match, using text[s, t] to get matched patterns\n3. i : index of the key in *obj*, which is the original insertion order of keys to *obj*\n\nThe field i may be use as index of external property arrays, i.e., the AhoCorasickAutomaton can act as a Map{String, Any}.\n\nSee also\n\neachmatch, getindex, setindex!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AhoCorasickAutomatons.AhoCorasickAutomaton",
    "page": "Docstrings",
    "title": "AhoCorasickAutomatons.AhoCorasickAutomaton",
    "category": "type",
    "text": "AhoCorasickAutomaton{T}(keys::Vector{Pair{String, Ti}}; sort = false) where {T, Ti}\nAhoCorasickAutomaton{T}(keys::AbstractDict{String, Ti}; sort = false) where {T, Ti}\nAhoCorasickAutomaton{T}(keys::Vector{String}; sort = false) where T\nAhoCorasickAutomaton(keys::Vector{String}; sort = false) = AhoCorasickAutomaton{UInt32}(keys; sort = sort)\nAhoCorasickAutomaton(keys::Vector{Pair{String, Ti}}; sort = false) where Ti = AhoCorasickAutomaton{UInt32}(keys; sort = sort)\n\nT s.t. typemax(T) >= length(keys)\n\nA 2-Array implementation of Aho–Corasick automaton(ACA)[1], Most used as an engine to mine a long text string, to get all occurences of substrings interested in the text. ACA is also adequate for unicode strings as a Set{String} or Dict{String, Unsigned} (similar as Trie, but with a far more less space usage).\n\nThe ACA acts as a key data structrue in Aho–Corasick algorithm for multiple consecutive string patterns finding[2]. This particular implementation use no-decreasing base, i.e.,\n\n1. base[node] >= node\n2. children[node] > node\n\nThis choice make it suitable for large-size key set of not-very-long keys, with faster insertion speed and moderate space usage.\n\nNotes\n\nMaybe of slower speed than a oridinary tree-based ACA, specially for random generated keys.\nWhen inserting duplicated keys, only the last one will make sense.\nInputing Sorted keys will be of (much) faster speed. Just turn the sort option on!\n\nExamples\n\njulia> v = [\"A\", \"B\"]; obj1 = AhoCorasickAutomaton{UInt8}(v; sort = true) # constructor\ntype  AhoCorasickAutomaton{UInt8}\n––––– –––––––––––––––––––––––––––\nkeys                            2\nnodes                          67\nnnz                             3\nsize                    623 bytes\n\njulia> for key in v @assert key ∈ obj1 end\n\njulia> @assert sort!(keys(obj1)) == v\n\njulia> d = Dict(\"A\" => 1, \"B\" => 2); obj2 = AhoCorasickAutomaton{UInt8}(d; sort = true); obj1 == obj2 # constructor\ntrue\n\njulia> obj3 = AhoCorasickAutomaton{UInt8}(collect(d); sort = true); obj2 == obj3 # constructor\ntrue\n\njulia> s = \"AABDB\"; matches = eachmatch(obj1, s) # eachmatch\n4-element Array{ACMatch,1}:\n ACMatch(1, 1, 1)\n ACMatch(2, 2, 1)\n ACMatch(3, 3, 2)\n ACMatch(5, 5, 2)\n\njulia> matches == eachmatch(obj1, codeunits(s)) # eachmatch\ntrue\n\njulia> map(x -> s[x], matches) # getindex\n4-element Array{String,1}:\n \"A\"\n \"A\"\n \"B\"\n \"B\"\n\njulia> ss = collect(codeunits(s)); foreach(x -> ss[x] = ss[x], matches); String(ss) == s # setindex!\ntrue\n\njulia> io = IOBuffer(); write(io, obj1); seek(io, 0); obj11 = read(io, AhoCorasickAutomaton); obj1 == obj11 # read & write\ntrue\n\nFor more : using Pkg; less(joinpath(Pkg.dir(\"AhoCorasickAutomatons\"), \"test\", \"runtests.jl\"))\n\nSee also\n\nACMatch, eachmatch, getindex, setindex!, in, get, length, read, write, collect, keys, values.\n\nReferences\n\n[1]: Jun‐Ichi Aoe, Katsushi Morimoto and Takashi Sato \'An Efficient Implementation of Trie Structures\', September 1992.\n\n[2]: Aho, Alfred V.; Corasick, Margaret J. (June 1975). \"Efficient string matching: An aid to bibliographic search\". Communications of the ACM. 18 (6): 333&ndash, 340. doi:10.1145/360825.360855. MR 0371172.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AhoCorasickAutomatons.ACMatchAhoCorasickAutomatons.AhoCorasickAutomatonAhoCorasickAutomatons.AhoCorasickAutomatonsAhoCorasickAutomatons.addkey!AhoCorasickAutomatons.enlarge!AhoCorasickAutomatons.evalAhoCorasickAutomatons.fillback!AhoCorasickAutomatons.findbaseAhoCorasickAutomatons.includeAhoCorasickAutomatons.rebase!AhoCorasickAutomatons.shrink!AhoCorasickAutomatons.validate"
},

]}
