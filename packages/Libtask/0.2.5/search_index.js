var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Libtask-1",
    "page": "Readme",
    "title": "Libtask",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)C shim for task copying in Turing"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "using Libtask\n\n# Stack allocated objects are deep copied.\nfunction f_ct()\n  t = 0;\n  while true\n    produce(t)\n    t = 1 + t\n  end\nend\n\nt = CTask(f_ct)\n# or t = Task(f_ct) |> enable_stack_copying\n\nconsume(t) == 0\nconsume(t) == 1\na = copy(t);\nconsume(a) == 2\nconsume(a) == 3\nconsume(t) == 2\nconsume(t) == 3\n\n# Heap allocated objects are shallow copied.\n\nfunction f_ct2()\n  t = [0 1 2];\n  while true\n    produce(t[1])\n    t[1] = 1 + t[1]\n  end\nend\n\nt = CTask(f_ct2)\n# or t = Task(f_ct2) |> enable_stack_copying\n\n\nconsume(t) == 0\nconsume(t) == 1\na = copy(t);\nconsume(a) == 2\nconsume(a) == 3\nconsume(t) == 4\nconsume(t) == 5\n\n# `TArray` implements a copy-on-write array. This is useful for task copying.\n#  In constrast to standard arrays, which are only shallow copied during task copying,\n#  `TArray` are deep copied after task copying.\n\nfunction f_cta()\n  t = TArray(Int, 1);\n  t[1] = 0;\n  while true\n    produce(t[1])\n    t[1] = 1 + t[1]\n  end\nend\n\nt = Task(f_cta) |> enable_stack_copying\n\nconsume(t) == 0\nconsume(t) == 1\na = copy(t);\nconsume(a) == 2\nconsume(a) == 3\nconsume(t) == 2\nconsume(t) == 3Note: The Turing probabilistic programming language uses this task copying feature in an efficient implementation of the particle filtering sampling algorithm for arbitary order Markov processes.Disclaimer: This feature is still experimental and should only be used with caution. Some discussions on its potential caveats can be found here."
},

{
    "location": "#For-Developer-1",
    "page": "Readme",
    "title": "For Developer",
    "category": "section",
    "text": ""
},

{
    "location": "#Release-a-new-version-1",
    "page": "Readme",
    "title": "Release a new version",
    "category": "section",
    "text": "1. Write the new version number to $PROJECT_ROOT/VERSION;\n2. Commit all the changes;\n3. Tag the current commit with git, the tag name should be version number with a preceding \"v\";\n4. Push the tag to the repo on GitHub."
},

{
    "location": "autodocs/#Libtask.TArray",
    "page": "Docstrings",
    "title": "Libtask.TArray",
    "category": "type",
    "text": "TArray{T}(dims, ...)\n\nImplementation of data structures that automatically perform copy-on-write after task copying.\n\nIf currenttask is an existing key in s, then return `s[currenttask]. Otherwise, returns[currenttask] = s[lasttask]`.\n\nUsage:\n\nTArray(dim)\n\nExample:\n\nta = TArray(4)              # init\nfor i in 1:4 ta[i] = i end  # assign\nArray(ta)                   # convert to 4-element Array{Int64,1}: [1, 2, 3, 4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libtask.tfill",
    "page": "Docstrings",
    "title": "Libtask.tfill",
    "category": "function",
    "text": " tfill(val, dim, ...)\n\nConstruct a TArray of a specified value.\n\ntfill(val, dim)\n\nExample:\n\ntz = tfill(9.0, 4)            # construct\nArray(tz)                     # convert to 4-element Array{Float64,1}:  [9.0  9.0  9.0  9.0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libtask.tzeros",
    "page": "Docstrings",
    "title": "Libtask.tzeros",
    "category": "function",
    "text": " tzeros(dims, ...)\n\nConstruct a distributed array of zeros. Trailing arguments are the same as those accepted by TArray.\n\ntzeros(dim)\n\nExample:\n\ntz = tzeros(4)              # construct\nArray(tz)                   # convert to 4-element Array{Int64,1}: [0, 0, 0, 0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Libtask.CTaskLibtask.LibtaskLibtask.TArrayLibtask.TRefLibtask.check_depsLibtask.consumeLibtask.enable_stack_copyingLibtask.evalLibtask.getLibtask.includeLibtask.libtaskLibtask.libtask_v1_0Libtask.libtask_v1_1Libtask.n_copiesLibtask.produceLibtask.tfillLibtask.tzeros"
},

]}
