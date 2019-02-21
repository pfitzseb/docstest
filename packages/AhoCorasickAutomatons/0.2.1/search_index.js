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
    "location": "autodocs/#AhoCorasickAutomatons.ACPosition",
    "page": "Docstrings",
    "title": "AhoCorasickAutomatons.ACPosition",
    "category": "type",
    "text": "See ?eachmatch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AhoCorasickAutomatons.AhoCorasickAutomaton",
    "page": "Docstrings",
    "title": "AhoCorasickAutomatons.AhoCorasickAutomaton",
    "category": "type",
    "text": "AhoCorasickAutomaton{T <: Unsigned}\n        s.t.\ntypemax(T) >= maximum(nodes)\n\nA 2-Array implementation of Aho–Corasick automaton(ACA)[1], Most used as an engine to mine a long text string, to get all occurences of substrings interested in the text. ACA is also adequate for unicode strings as a Set{String} or Dict{String, Unsigned} (similar as Trie, but with a far more less space usage).\n\nThe ACA acts as a key data structrue in Aho–Corasick algorithm for multiple consecutive string patterns finding[2]. This particular implementation use no-decreasing base, i.e.,\n\n1. base[node] >= node\n2. children[node] > node\n\nThis choice make it suitable for large-size key set of not-very-long keys, with faster insertion speed and moderate space usage.\n\nExamples\n\nusing Pkg; less(joinpath(Pkg.dir(\"AhoCorasickAutomatons\"), \"test\", \"runtests.jl\"))\n\nNotes\n\nMaybe of much more slower speed than a oridinary tree-based ACA, specially for random generated keys.\nWhen inserting duplicated keys, only the last one will make sense.\nInputing Sorted keys will be of (much) faster speed.\n\n[1]: Jun‐Ichi Aoe, Katsushi Morimoto and Takashi Sato \'An Efficient Implementation of Trie Structures\', September 1992.\n\n[2]: Aho, Alfred V.; Corasick, Margaret J. (June 1975). \"Efficient string matching: An aid to bibliographic search\". Communications of the ACM. 18 (6): 333&ndash, 340. doi:10.1145/360825.360855. MR 0371172.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AhoCorasickAutomatons.ACPositionAhoCorasickAutomatons.AhoCorasickAutomatonAhoCorasickAutomatons.AhoCorasickAutomatonsAhoCorasickAutomatons.addkey!AhoCorasickAutomatons.enlarge!AhoCorasickAutomatons.evalAhoCorasickAutomatons.fillback!AhoCorasickAutomatons.findbaseAhoCorasickAutomatons.includeAhoCorasickAutomatons.rebase!AhoCorasickAutomatons.shrink!AhoCorasickAutomatons.validate"
},

]}
