var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ParallelDataTransfer.jl-1",
    "page": "Readme",
    "title": "ParallelDataTransfer.jl",
    "category": "section",
    "text": "(Image: Travis) (Image: AppVeyor) (Image: codecov) (Image: coveralls)A bunch of helper functions for transferring data between worker processes. The functions are robust with safety measures built into the commands, and the package is thoroughly tested to ensure correctness (with an unsafe API coming soon). As such, this commands thus allow for rapid development and prototyping of parallel algorithms. The underlying infrustructure is Julia\'s native multiprocess parallelism, meaning that no dependencies are required for use other than Base Julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, simply use:Pkg.add(\"ParallelDataTransfer\")\naddprocs(n) # Adds n processes\n@everywhere using ParallelDataTransferFor the most up to date version, checkout master by using:Pkg.checkout(\"ParallelDataTransfer\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "For examples of usage, please see the tests.# Creates an integer x and Matrix y on processes 1 and 2\nsendto([1, 2], x=100, y=rand(2, 3))\n\n# Create a variable here, then send it everywhere else\nz = randn(10, 10); sendto(workers(), z=z)\n\n# Create the variable x with a value 3 directly on process 4\n@defineat 4 x=3\n\n# Broadcast a value 3 to x on all workers (not working on Julia 0.7)\n@broadcast x=3\n\n# Note that @broadcast will broadcast the expression, so\n@broadcast name=val\n# Requires val to be defined on the remote process\n# To pass an object to all worker processes, use\n@passobj 1 workers() name\n\n# Get an object from named x from Main module on process 2. Name it y\ny = @getfrom 2 x\n# Or\ny = getfrom(2,:x)\n\n# Get an object from named x from Foo module on process 2. Name it y\ny = @getfrom 2 x Foo\n# Or\ny = getfrom(2,:x,Foo)\n\n# Get an object from named foo.x from Foo module on process 2. Name it y\ny = @getfrom 2 foo.x Foo\n# Using the function will not work!\n\n# pass variable named x from process 2 to all other processes\n@passobj 2  filter(x->x!=2, procs())  x\n# Or\npassobj(2, filter(x->x!=2, procs()), :x)\n\n# pass variables t, u, v from process 3 to process 1\npassobj(3, 1, [:t, :u, :v])\n\n# Pass a variable from the `Foo` module on process 1 to Main on workers\n@passobj 1 workers() Foo.foo\n#Or\npassobj(1, workers(), [:foo]; from_mod=Foo)\n\n# Include a file on a path not available on a remote worker\ninclude_remote(path, 2)"
},

{
    "location": "#Performance-Note-1",
    "page": "Readme",
    "title": "Performance Note",
    "category": "section",
    "text": "Note that this form of passing variables will define the variables in the global namespace of the process. Thus, for performance reasons, it\'s recommended that these variables are acted on inside of a function (just like in the REPL). An example for doing this is:# Send things to process 2\n@defineat 2 a=5\n@defineat 2 function usea(a)\n  # Do your stuff here\n  ans=a\nend\n# Use the function a on process 2\n@defineat 2 ans=usea(a) # this safely uses the usea and a from process 2\n# Get the answer from process 2\n@getfrom 2 ansIn the \"master\" process this will define ans as a global. Once again, you should not work directly with the global since that will degrade the performance. So, since you are working in a function, you should assert the type of the variable so that way it\'s strictly typed. For example:function test()\n  @defineat 2 a=5\n  a = (@getfrom 2 a)::Int64 # This will make a stictly typed if test is type-stable\n\n  # Continue in your code using b\n  a\nendDeclaring the type of a will work as well. If you put these two design principles together (use the passed variables in a function, and type the returns), then your code will be parallel and type-stable.I am interested in suggestions for making this usage more \"automatic\". If you have design ideas / implementations to recommend, feel free to open issues and submit PRs."
},

{
    "location": "#Credit-1",
    "page": "Readme",
    "title": "Credit",
    "category": "section",
    "text": "This library is developed and maintained by Chris Rackauckas. However, kudos go to @spencerlyon2 and @conjectures for developing some of the original solutions which were modified and expanded upon for this library. Special thanks to @TotalVerb and @oxinabox for help via Gitter."
},

{
    "location": "autodocs/#ParallelDataTransfer.include_remote",
    "page": "Docstrings",
    "title": "ParallelDataTransfer.include_remote",
    "category": "function",
    "text": "include_remote(path, [workers=workers()]; module=Main) Includes a file which is not available on a remote worker by reading the file at the main node, parsing the text and evaluating the code on the remote workers listed in workers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ParallelDataTransfer.@broadcastParallelDataTransfer.@defineatParallelDataTransfer.@getfromParallelDataTransfer.@passobjParallelDataTransfer.@sendtoParallelDataTransfer.ParallelDataTransferParallelDataTransfer.evalParallelDataTransfer.getfromParallelDataTransfer.includeParallelDataTransfer.include_remoteParallelDataTransfer.passobjParallelDataTransfer.sendtoParallelDataTransfer.sendtosimple"
},

]}
