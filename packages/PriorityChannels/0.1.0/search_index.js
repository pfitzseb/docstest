var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PriorityChannels-1",
    "page": "Readme",
    "title": "PriorityChannels",
    "category": "section",
    "text": "(Image: Build Status)This package provides the type PriorityChannel (the only exported name) that mimics Base.Channel, but where each element is associated with a priority. take! always returns the highest priority element. Internally, a heap is used to keep track of priorities. Example usage:using PriorityChannels, Test\nc  = Channel(50)\npc = PriorityChannel(50)\nfor i = 1:50\n    e = rand(1:500)\n    put!(c,e)\n    put!(pc,e,e) # Assign same priority as element for testing purposes\nend\nelems = [take!(c) for i = 1:50]\npelems = [take!(pc) for i = 1:50]\n@test !issorted(elems) # A regular Channel does not return ordered elements\n@test issorted(pelems) # A PriorityChannel returns elements in priority order"
},

{
    "location": "#Difference-between-Channel-and-PriorityChannel-1",
    "page": "Readme",
    "title": "Difference between Channel and PriorityChannel",
    "category": "section",
    "text": "put!(pc, element, priority::Real) lower number indicates a higher priority (default = 0).\nPriorityChannel can not be unbuffered (of length 0) and must have a positive length.\ntake!(pc) returns the highest priority item, PriorityChannel thus acts like a  priority queue instead of a FIFO queue like Channel does\nPretty much all other functionality should be the same, including all constructors."
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "To get maximum performance, initialize a concretely typed PriorityChannel. The constructor PriorityChannel(N) creates a channel of length N that holds type Any and have integer priorities. These types can be specified with the constructor PriorityChannel{ElemType,PrioType}(N), e.g., PriorityChannel{Int,Int}(N). There is a rather striking difference in performance between these two:using PriorityChannels\nN = 1_000_000\nr = rand(1:1000, N);\nconst c1 = PriorityChannel(N)\nconst c2 = PriorityChannel{Int,Int}(N)\n\n@time map(ri->put!(c1,ri,ri), r);\n@time map(ri->put!(c2,ri,ri), r);\n\n@time map(i->take!(c1), 1:N);\n@time map(i->take!(c2), 1:N);\n\n# Output after pre-compilation\njulia> @time map(ri->put!(c1,ri,ri), r);\n  0.663640 seconds (4.33 M allocations: 150.086 MiB, 55.92% gc time)\n\njulia> @time map(ri->put!(c2,ri,ri), r);\n  0.103298 seconds (60.23 k allocations: 12.643 MiB)\n\njulia> @time map(i->take!(c1), 1:N);\n  3.282501 seconds (20.02 M allocations: 612.583 MiB, 27.25% gc time)\n\njulia> @time map(i->take!(c2), 1:N);\n  0.313285 seconds (63.44 k allocations: 10.791 MiB, 4.67% gc time)"
},

{
    "location": "autodocs/#PriorityChannels.PriorityChannel",
    "page": "Docstrings",
    "title": "PriorityChannels.PriorityChannel",
    "category": "type",
    "text": "PriorityChannel{T}(sz::Int)\n\nConstructs a PriorityChannel with an internal buffer that can hold a maximum of sz objects of type T, each assigned an real-valued priority (low number = higher priority). put! calls on a full channel block until an object is removed with take!.\n\nPriorityChannel(0) constructs an unbuffered channel. put! blocks until a matching take! is called. And vice-versa.\n\nOther constructors:\n\nPriorityChannel(Inf): equivalent to PriorityChannel{Any,Int}(typemax(Int))\nPriorityChannel(sz): equivalent to PriorityChannel{Any,Int}(sz)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PriorityChannels.channeled_tasks",
    "page": "Docstrings",
    "title": "PriorityChannels.channeled_tasks",
    "category": "function",
    "text": "channeled_tasks(n::Int, funcs...; ctypes=fill(Any,n), csizes=fill(0,n))\n\nA convenience method to create n channels and bind them to tasks started from the provided functions in a single call. Each func must accept n arguments which are the created channels. PriorityChannel types and sizes may be specified via keyword arguments ctypes and csizes respectively. If unspecified, all channels are of type Channel{Any}(0).\n\nReturns a tuple, (Array{Channel}, Array{Task}), of the created channels and tasks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PriorityChannels.PriorityChannelPriorityChannels.PriorityChannelsPriorityChannels.PriorityElementPriorityChannels.channeled_tasksPriorityChannels.closed_exceptionPriorityChannels.evalPriorityChannels.includePriorityChannels.isbufferedPriorityChannels.n_availPriorityChannels.ordering"
},

]}
