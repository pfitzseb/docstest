var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SortingLab-1",
    "page": "Readme",
    "title": "SortingLab",
    "category": "section",
    "text": "Experimental implementation of sorting algorithms and APIs. If proven to be useful they will be contributed back to Julia base or SortingAlgorithms.jl in time"
},

{
    "location": "#Faster-String-Sort-and-Sortperm-and-CategoricalArrays-Sort-1",
    "page": "Readme",
    "title": "Faster String Sort and Sortperm & CategoricalArrays Sort",
    "category": "section",
    "text": ""
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using SortingLab;\nimport Test: @test\n\nN = 1_000_000;\nK = 100;\n\n# faster string sort\nsvec = rand(\"id\".*string.(1:N÷K, pad=10), N);\nsvec_sorted = radixsort(svec);\nissorted(svec_sorted) # true\nissorted(svec) # false\n\n# faster string sortperm\nsorted_idx = fsortperm(svec)\nissorted(svec[sorted_idx]) #true\n\n# in place string sort\nradixsort!(svec);\nissorted(svec) # true\n\n# CategoricalArray sort\nusing CategoricalArrays\npools = \"id\".*string.(1:100,3);\nbyvec = CategoricalArray{String, 1}(rand(UInt32(1):UInt32(length(pools)), N), CategoricalPool(pools, false));\nbyvec = compress(byvec);\n\nbyvec_sorted = fsort(byvec);\n@test issorted(byvec_sorted)\n\n# in place CategoricalArray sort\nfsort!(byvec)\n@test issorted(byvec)\n"
},

{
    "location": "#Benchmark-1",
    "page": "Readme",
    "title": "Benchmark",
    "category": "section",
    "text": "(Image: Base.sort vs SortingLab.radixsort)(Image: Base.sort vs SortingLab.radixsort)"
},

{
    "location": "#Benchmarking-code-1",
    "page": "Readme",
    "title": "Benchmarking code",
    "category": "section",
    "text": "using SortingLab;\nusing BenchmarkTools;\nimport Random: randstring\n\nN = 1_000_000;\nK = 100;\n\ntic()\nsvec = rand(\"id\".*string.(1:N÷K, pad=10), N);\nsort_id_1m = @belapsed sort($svec);\nradixsort_id_1m = @belapsed radixsort($svec);\n\nsortperm_id_1m = @belapsed sortperm($svec);\nfsortperm_id_1m = @belapsed fsortperm($svec);\n\nrsvec = rand([randstring(rand(1:32)) for i = 1:N÷K], N);\nsort_r_1m = @belapsed sort($rsvec);\nradixsort_r_1m = @belapsed radixsort($rsvec);\n\nsortperm_r_1m = @belapsed sortperm($rsvec);\nfsortperm_r_1m = @belapsed fsortperm($rsvec);\ntoc()\n\ntic()\nusing Plots\nusing StatPlots\ngroupedbar(\n    repeat([\"IDs\", \"Random len 32\"], inner=2),\n    [sort_id_1m, radixsort_id_1m, sort_r_1m, radixsort_r_1m],\n    group = repeat([\"Base.sort\",\"SortingLab.radixsort\"], outer = 2),\n    title = \"Strings sort (1m rows): Base vs SortingLab\")\nsavefig(\"benchmarks/sort_vs_radixsort.png\")\n\ngroupedbar(\n    repeat([\"IDs\", \"Random len 32\"], inner=2),\n    [sortperm_id_1m, fsortperm_id_1m, sortperm_r_1m, fsortperm_r_1m],\n    group = repeat([\"Base.sortperm\",\"SortingLab.fsortperm\"], outer = 2),\n    title = \"Strings sortperm (1m rows): Base vs SortingLab\")\nsavefig(\"benchmarks/sortperm_vs_fsortperm.png\")\ntoc()"
},

{
    "location": "#Build-status-1",
    "page": "Readme",
    "title": "Build status",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "autodocs/#SortingLab.fsort",
    "page": "Docstrings",
    "title": "SortingLab.fsort",
    "category": "function",
    "text": "radixsort(svec, rev = false)\n\nApplies radix sort to the string vector, svec, and sort it in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SortingLab.fsortperm",
    "page": "Docstrings",
    "title": "SortingLab.fsortperm",
    "category": "function",
    "text": "fsortperm(svec)\n\nFaster sortperm for string vectors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SortingLab.radixsort!",
    "page": "Docstrings",
    "title": "SortingLab.radixsort!",
    "category": "function",
    "text": "radixsort!(svec)\n\nApplies radix sort to the string vector, svec, and sort it in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SortingLab.sorttwo!",
    "page": "Docstrings",
    "title": "SortingLab.sorttwo!",
    "category": "function",
    "text": "sorttwo!(vs, index)\n\nSort both the vs and reorder index at the same. This allows for faster sortperm for radix sort.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SortingLab.uint_hist",
    "page": "Docstrings",
    "title": "SortingLab.uint_hist",
    "category": "function",
    "text": "uint_hist(bits, [RADIX_SIZE = 16, RADIX_MASK = 0xffff])\n\nComputes a histogram (counts) for the vector RADIXSIZE bits at a time. E.g. if eltype(bits) is UInt64 and RADIXSIZE is 16 then 4 histograms are created for each of the 16 bit chunks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SortingLab.Bits104SortingLab.Bits112SortingLab.Bits120SortingLab.Bits24SortingLab.Bits40SortingLab.Bits48SortingLab.Bits56SortingLab.Bits72SortingLab.Bits80SortingLab.Bits88SortingLab.Bits96SortingLab.SortingLabSortingLab.VTSortingLab.VTVSortingLab._fsortperm_msd_hybridSortingLab.evalSortingLab.fsortSortingLab.fsort!SortingLab.fsort2SortingLab.fsort2!SortingLab.fsortandperm_int_range_lsdSortingLab.fsortpermSortingLab.fsortperm_int_range_counting_sortSortingLab.fsortperm_int_range_lsdSortingLab.fsortperm_msd_hybridSortingLab.includeSortingLab.load_bitsSortingLab.load_bits_with_paddingSortingLab.load_uintSortingLab.radixsortSortingLab.radixsort!SortingLab.sort_spointer!SortingLab.sorttwo!SortingLab.uint_hist"
},

]}
