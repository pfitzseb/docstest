var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Sorting-Algorithms-1",
    "page": "Readme",
    "title": "Sorting Algorithms",
    "category": "section",
    "text": "(Image: SortingAlgorithms) (Image: SortingAlgorithms) (Image: SortingAlgorithms) (Image: Build Status) (Image: Coverage Status)The SortingAlgorithms package provides three sorting algorithms that can be used with Julia\'s standard sorting API:[HeapSort] – an unstable, general purpose, in-place, O(n log n) comparison sort that works by heapifying an array and repeatedly taking the maximal element from the heap.\n[TimSort] – a stable, general purpose, hybrid, O(n log n) comparison sort that adapts to different common patterns of partially ordered input data.\n[RadixSort] – a stable, special case, in-place, O(n) non-comparison sort that works by sorting data with fixed size, one digit at a time.[HeapSort]:  http://en.wikipedia.org/wiki/Heapsort [TimSort]:   http://en.wikipedia.org/wiki/Timsort [RadixSort]: http://en.wikipedia.org/wiki/Radix_sort"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "	julia> using SortingAlgorithms\n\n	julia> words = map(chomp,[readlines(open(\"/usr/share/dict/words\"))...])\n	235886-element Array{ASCIIString,1}:\n	 \"A\"\n	 \"a\"\n	 \"aa\"\n	 \"aal\"\n	 \"aalii\"\n	 ⋮\n	 \"zythem\"\n	 \"Zythia\"\n	 \"zythum\"\n	 \"Zyzomys\"\n	 \"Zyzzogeton\"\n\n	julia> sort!(words, alg=TimSort)\n	235886-element Array{ASCIIString,1}:\n	 \"A\"\n	 \"Aani\"\n	 \"Aaron\"\n	 \"Aaronic\"\n	 \"Aaronical\"\n	 ⋮\n	 \"zymotize\"\n	 \"zymotoxic\"\n	 \"zymurgy\"\n	 \"zythem\"\n	 \"zythum\"\n\n	julia> sort!(words, alg=TimSort, by=length)\n	235886-element Array{ASCIIString,1}:\n	 \"A\"\n	 \"B\"\n	 \"C\"\n	 \"D\"\n	 \"E\"\n	 ⋮\n	 \"formaldehydesulphoxylate\"\n	 \"pathologicopsychological\"\n	 \"scientificophilosophical\"\n	 \"tetraiodophenolphthalein\"\n	 \"thyroparathyroidectomize\"\n\n	julia> sort!(words, alg=HeapSort)\n	235886-element Array{ASCIIString,1}:\n	 \"A\"\n	 \"Aani\"\n	 \"Aaron\"\n	 \"Aaronic\"\n	 \"Aaronical\"\n	 ⋮\n	 \"zymotize\"\n	 \"zymotoxic\"\n	 \"zymurgy\"\n	 \"zythem\"\n	 \"zythum\"\n\n	julia> sort!(words, alg=HeapSort, by=length)\n	235886-element Array{ASCIIString,1}:\n	 \"L\"\n	 \"p\"\n	 \"U\"\n	 \"I\"\n	 \"q\"\n	 ⋮\n	 \"pathologicopsychological\"\n	 \"formaldehydesulphoxylate\"\n	 \"scientificophilosophical\"\n	 \"tetraiodophenolphthalein\"\n	 \"thyroparathyroidectomize\"\n\n	julia> sort!(words, alg=RadixSort)\n	ERROR: Radix sort only sorts bits types (got ASCIIString)\n	 in error at error.jl:21\n	 in sort! at /Users/stefan/.julia/SortingAlgorithms/src/SortingAlgorithms.jl:54\n	 in sort! at sort.jl:328\n	 in sort! at sort.jl:329\n\n	julia> floats = randn(1000)\n	1000-element Array{Float64,1}:\n	  1.729\n	  0.907196\n	  0.461481\n	 -0.204763\n	 -0.16022\n	  ⋮\n	  0.700683\n	 -0.236204\n	 -2.15634\n	 -0.316188\n	 -0.171478\n\n	julia> sort!(floats, alg=RadixSort)\n	1000-element Array{Float64,1}:\n	 -2.86255\n	 -2.72041\n	 -2.58234\n	 -2.57259\n	 -2.53046\n	  ⋮\n	  3.08307\n	  3.12902\n	  3.15075\n	  3.20058\n	  3.23942"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SortingAlgorithms.HeapSortSortingAlgorithms.HeapSortAlgSortingAlgorithms.MIN_GALLOPSortingAlgorithms.MergeStateSortingAlgorithms.RADIX_MASKSortingAlgorithms.RADIX_SIZESortingAlgorithms.RadixSortSortingAlgorithms.RadixSortAlgSortingAlgorithms.RunSortingAlgorithms.SortingAlgorithmsSortingAlgorithms.TimSortSortingAlgorithms.TimSortAlgSortingAlgorithms.evalSortingAlgorithms.gallop_firstSortingAlgorithms.gallop_lastSortingAlgorithms.includeSortingAlgorithms.mergeSortingAlgorithms.merge_atSortingAlgorithms.merge_collapseSortingAlgorithms.merge_compute_minrunSortingAlgorithms.merge_hiSortingAlgorithms.merge_loSortingAlgorithms.next_runSortingAlgorithms.rgallop_firstSortingAlgorithms.rgallop_lastSortingAlgorithms.uint_mapping"
},

]}
