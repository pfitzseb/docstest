var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Caching.jl-1",
    "page": "Readme",
    "title": "Caching.jl",
    "category": "section",
    "text": "A minimalistic approach to method caching in Julia.(Image: License)  (Image: Build Status)  (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package provides a simple programming interface to caching the function output (i.e. memoization) either to memory or to disk. To this purpose it has a simplistic API that exposes functionality for creating cache structures and accessing, writing and synchronizing these to disk. Compression is supported through TranscodingStreams.jl codecs. Since this a work-in-progress, there are bound to be rough edges and little to no documentation. However, the interface is accessible enough to be productively employed at this stage."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The basic structure is the Cache object that can be easily constructed employed using the @cache macro. It supports reading/writing cached entries from/to memory and to disk.julia> foo(x) = x+1\n#foo (generic function with 1 method)\n\njulia> dc = @cache foo \"somefile.bin\"\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> dc(1)  # add one entry to cache\n# 2\n\njulia> dc\n# foo (cache with 1 entry, 1 in memory 0 on disk)\n\njulia> dc.cache\n# Dict{UInt64,Any} with 1 entry:\n#   0x17aa5f390831e792 => 2\n\njulia> dc.offsets  # disk cache information (hash=>(start byte, end byte))\n# Dict{UInt64,Tuple{Int64,Int64}} with 0 entries\n\njulia> dc.filename  # file information\n# /absolute/path/to/somefile.bin\"\n\njulia> isfile(dc.filename)  # file does not exist\n# falseThe cache can be written to disk using the persist! function or the @persist! macro:julia> @persist! dc  # writes cache to disk and updates offsets \n# foo (cache with 1 entry, 1 in memory 1 on disk)\n\njulia> isfile(dc.filename)\n# true\n\njulia> dc.offsets  # file information\n# Dict{UInt64,Tuple{Int64,Int64}} with 1 entry:\n#   0x17aa5f390831e792 => (19, 28)The cache can be deleted using the empty! function or the @empty! macro:julia> @empty! dc  # delete memory cache\n# foo (cache with 1 entry, 0 in memory 1 on disk)\n\njulia> @empty! dc true  # delete also the disk cache\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> isfile(\"somefile.bin\")\nfalseIf no file name is provided when creating a Cache object, a file name will be automatically generated:julia> dc = @cache foo\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> dc.filename\n# \"/absolute/path/to/current/directory/_c081687ce69ccdaf_.bin\"In case of a Cache memory miss, the cached data is retrieved from disk if available:julia> dc = @cache foo::Int \"somefile.bin\"\n       for i in 1:3 dc(i); end  # add 3 entries\n       @persist! dc\n       @assert isfile(\"somefile.bin\")\n       @empty! dc  # empty memory cache\n       @assert isempty(dc.cache)\n       for i in 4:6 dc(i); end  # add 3 new entries\n       dc\n# foo (cache with 6 entries, 3 in memory 3 on disk)\n\njulia> dc(1)  # only on disk\n# ┌ Warning: Memory cache miss, loading hash=0x17aa5f390831e792...\n# └ @ Caching ../Caching.jl/src/cache.jl:53\n# 2\n\njulia> dc(4)  # in memory\n# 5Cache objects support also a basic form of synchronization between the memory and disk cache contents. This is done with the help of the syncache! function and @syncache! macro:julia> dc = @cache foo \"somefile.bin\"  # make a Cache object\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> for i in 1:5 dc(i); end # populate the memory cache with 5 entries\n\njulia> @persist! dc  # write to disk the cache\n# foo (cache with 5 entries, 5 in memory 5 on disk)\n\njulia> @empty! dc  # delete the memory cache\n# foo (cache with 5 entries, 0 in memory 5 on disk)\n\njulia> @syncache! dc \"disk\"  # load cache from disk\n# foo (cache with 5 entries, 5 in memory 5 on disk)\n\njulia> @empty! dc  # empty memory cache \n#foo (cache with 5 entries, 0 in memory 5 on disk)\n\njulia> for i in 1:3  dc(-i); end  # populate the memory cache with 3 new entries\n\njulia> @syncache! dc \"memory\"  # write memory cache to disk\n# foo (cache with 8 entries, 3 in memory 8 on disk)\n\njulia> @empty! dc\n# foo (cache with 8 entries, 0 in memory 8 on disk)\n\njulia> @syncache! dc \"disk\"  # load cache from disk\n# foo (cache with 8 entries, 8 in memory 8 on disk)\n\njulia> dc.cache  # view the cache\n# Dict{UInt64,Any} with 8 entries:\n#   0xaa9c225ce8a1bd59 => 3\n#   ...\n\njulia> dc.offsets  # view the file offsets\n# Dict{UInt64,Tuple{Int64,Int64}} with 8 entries:\n#   0xaa9c225ce8a1bd59 => (19, 28)\n#   ...Synchronization of disk and memory cache contents can also be performed in one go by passing \"both\" in the @syncache! macro call:julia> dc = @cache foo\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> for i in 1:3 dc(i); end  # populate the memory cache with 3 entries\n\njulia> @syncache! dc \"memory\"  # write to disk\n# foo (cache with 3 entries, 3 in memory 3 on disk)\n\njulia> @empty! dc  # delete the in-memory cache\n# foo (cache with 3 entries, 0 in memory 3 on disk)\n\njulia> for i in 1:5 dc(-i); end  # populate the in-memory cache with 5 new entries\n\njulia> @syncache! dc \"both\"     # sync both memory and disk\n# foo (cache with 8 entries, 8 in memory 8 on disk)\n\njulia> dc.cache\n# Dict{UInt64,Any} with 8 entries:\n#   0xd27248f96ad8691b => -4\n#   ...More usage examples can be found in the test/runtests.jl file."
},

{
    "location": "#Limitations-and-Caveats-1",
    "page": "Readme",
    "title": "Limitations and Caveats",
    "category": "section",
    "text": "Some limitations of this package that will have to be taken into consideration are:no support for a maximum size of the cache or replacement policy; only a full deletion of the cache is supported\nthe cache access is not type-stable unless types are explicitly provided i.e. @cache foo::MyType\nthe caching mechanism is unaware of any syste-wide limitations on either memory or disk (TODO)\nmultithreading/parallelism is not explicitly supported (TODO)\nthe @cache macro does not support entire function definitions i.e. @cache foo(x)=x or @cache x->x+1 (TODO)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The installation can be done through the usual channels (manually by cloning the repository or installing it though the julia REPL)."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code has an MIT license and therefore it is free."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] https://en.wikipedia.org/wiki/Memoization[2] https://en.wikipedia.org/wiki/CachereplacementpoliciesFor other caching solutions,  check out also LRUCache.jl, Memoize.jl and Anamnesis.jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Caching.@cacheCaching.@empty!Caching.@persist!Caching.@syncache!Caching.AbstractCacheCaching.CacheCaching.CachingCaching._check_disk_cacheCaching.arghashCaching.empty!Caching.evalCaching.generate_cache_filenameCaching.get_transcodersCaching.includeCaching.load_disk_cache_entryCaching.persist!Caching.store_disk_cache_entryCaching.syncache!"
},

]}
