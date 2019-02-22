var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SortMerge-1",
    "page": "Readme",
    "title": "SortMerge",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#A-Julia-implementation-of-the-Sort-merge-algorithm.-1",
    "page": "Readme",
    "title": "A Julia implementation of the Sort-merge algorithm.",
    "category": "section",
    "text": "The Sort-merge join algorithm allows to quickly find the matching pairs in two separate arrays or collections.  The best performances are obtained when the input data are already sorted, but the package is able to sort the data if they are not.The algorithm works out of the box with arrays of real numbers, but it can also be used with any data type stored in any type of container.  Also, it can handle customized sorting and matching criteria."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"SortMerge\")"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "Consider the following vectors:A = [2,3,2,5,7,2,9,9,10,12]\nB = [2,1,7,7,4,6,10,11]The common elements can be found as follows:using SortMerge\nj = sortmerge(A, B)The value returned by the sortmerge function implements the AbstractArray interface, hence it can be used as a common Matrix{Int} containing the indices of the matching pairs, e.g:println(\"Indices of matched pairs:\")\ndisplay([j[1] j[2]])\nprintln(\"Matched pairs:\")\ndisplay([A[j[1]] B[j[2]]])or, equivalently:println(\"Indices of matched pairs:\")\nfor (i1, i2) in zip(j)\n    println(i1, \"  \", i2)\nend\nprintln(\"Matched pairs:\")\nfor (i1, i2) in zip(j)\n    println(A[i1], \"  \", B[i2])\nendThe number of times each element in the input array has been matched can be retrieved using the countmatch function, returning a Vector{Int} whose length is the same as the input array and whose elements are the multiplicity of the matched entries:cm = countmatch(j, 1)\nfor i in 1:length(A)\n    println(\"Element at index $i ($(A[i])) has been matched $(cm[i]) times\")\nendAnalogously, for the second array:cm = countmatch(j, 2)\nfor i in 1:length(B)\n    println(\"Element at index $i ($(B[i])) has been matched $(cm[i]) times\")\nendThe unmatched entries can be retrieved as follows:println(\"Unmatched entries in array 1:\")\nprintln(A[countmatch(j, 1) .== 0])\nprintln(\"Unmatched entries in array 2:\")\nprintln(B[countmatch(j, 2) .== 0])A more computationally demanding example is as follows:nn = 1_000_000\nA = rand(1:nn, nn);\nB = rand(1:nn, nn);\nj = sortmerge(A, B);\nprintln(\"Check matching: \", sum(abs.(A[j[1]] .- B[j[2]])) == 0)where the purpose of the last line is just to perform a simple check on the matched pairs.Unless the quiet=true keyword is used, the sortmerge function reports a few details of the matching process which may help in finding performance bottlenecks. E.g., for the previous example:Input  1:     632798 /    1000000  ( 63.28%)  -  max mult. 9 | sort : 0.19s\nInput  2:     631539 /    1000000  ( 63.15%)  -  max mult. 8 | sort : 0.188s\nOutput  :    1000414                                         | total: 0.661sThe lines marked with Input 1 and Input 2 report, respectively:the number of indices for which a matching pair has been found;\nthe total number of elements in input array;\nthe fraction of indices for which a matching pair has been found;\nthe maximum multiplicity;\nthe time spent sorting the array (in seconds).The last line reports:the number of matched pairs in the output;\nthe total elapsed time (in seconds).A significant amount of time is spent sorting the input arrays, hence the algorithm will provide much better performances if the arrays are already sorted.  Since the order is so important, and it is calculated during a call to sortmerge, it will not be thrown away but returned in the results.  Hence if we are going to call again sortmerge we can take advantage of the previous calculation to speed up calculations:j = sortmerge(A, B, sort1=sortperm(j, 1), sort2=sortperm(j, 2));The permutation vector that puts A and B in sorted order are retrieved with the sortperm function, and passed through the sort1 and sort2 keywords.Finally, you will get an extra boost performance if the input arrays are already sorted, i.e.sortedA = A[sortperm(j, 1)]\nsortedB = B[sortperm(j, 2)]\nj = sortmerge(sortedA, sortedB, sorted=true);(the sorted=true keyword tells sortmerge that the input arrays are already sorted)."
},

{
    "location": "#Handling-multiple-matched-entries-1",
    "page": "Readme",
    "title": "Handling multiple matched entries",
    "category": "section",
    "text": "The multimatch function allows to extract matching pairs with a given multiplicity.  E.g., to find the matched pairs whose index in the first array occurs twice (multiplicity = 2):m = multimatch(j, 1, 2)\ndisplay([m[1] m[2]])The matched pairs whose index in the second array (rather than first) occur three times (multiplicity = 3) is obtained as follows:for (i1, i2) in zip(multimatch(j, 2, 3))\n    println(i1, \"  \", i2)\nendAnother facility provided by sortmerge is to separate matching pairs into groups, e.g.:for group in multimatch(j, 1, 8, group=true)\n    println(\"The index \", group[1][1], \" in the first table matches the following indices in the second:\")\n    println(group[2])\nend"
},

{
    "location": "#Advanced-usage-1",
    "page": "Readme",
    "title": "Advanced usage",
    "category": "section",
    "text": "As anticipated, the SortMerge package can handle any data type stored in any type of container, as well as customized sorting and matching criteria, by providing customized functions for sorting and matching elements.The following sections will provide a few examples."
},

{
    "location": "#Custom-sorting-function-1",
    "page": "Readme",
    "title": "Custom sorting function",
    "category": "section",
    "text": "The custom sorting functions must accept three arguments:the container;\nthe index of the first element to be compared;\nthe index of the second element to be compared;and must return a boolean value: true if the first element is smaller than the second, false otherwise.  The sortmerge accepts these functions through the lt1, lt2 keywords, to sort the first and second container respectively."
},

{
    "location": "#Custom-matching-function-1",
    "page": "Readme",
    "title": "Custom matching function",
    "category": "section",
    "text": "The custom matching function must accept at least four arguments:the first container;\nthe second container;\nthe index in the first container of the element to be compared;\nthe index in the second container of the element to be compared.If the function accepts more than 4 arguments they must be passed as further arguments in the main sortmerge call.  Note that when this function is called the two input containers are already sorted according to the lt1 and lt2 functions.The return value must be an integer with the following meaning:0: the two elements match;\n-1: the element in the first container do not match with the element in the second container, and will not match with any of the remaining elements in the second container;\n1: the element in the first container do not match with the element in the second container, and will not match with any of the previous elements in the second container;\nany other integer number: none of the above applies (missed match case).The -1 and 1 return values are important hints which allows sortmerge to  avoid checking for a match that will never occur, ultimately resulting in very short execution times.  The missed match case (any integer number different from -1, 0 and 1) allows to deal with partial order relations and complex matching criteria.The sortmerge accept this function through the sd (Sign of the Difference) keyword.  The name stem from the fact that for array of numbers this function should simply return the sign of the difference of two numbers."
},

{
    "location": "#Use-with-[data-frames](https://github.com/JuliaData/DataFrames.jl)-1",
    "page": "Readme",
    "title": "Use with data frames",
    "category": "section",
    "text": "The following example shows how to match two data frames objects, according to the numbers in a specific column:using DataFrames\n\n# Create a data frame with prime numbers\nprimes = DataFrame(:p => [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,\n                          41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])\n\n# ...and another one with random numbers.\nnn = 100\nnumbers = DataFrame(:n => rand(1:100, nn))\n\n# Search for matching elements in the two dataframes, and print the\n# multiplicity of matching prime numbers\nj = sortmerge(numbers, primes,\n             lt1=(v, i, j) -> (v[i,:n] < v[j,:n]),\n             lt2=(v, i, j) -> (v[i,:p] < v[j,:p]),\n             sd=(v1, v2, i1, i2) -> (sign(v1[i1,:n] - v2[i2,:p])))\n\ncm = countmatch(j, 2);\nfor i in 1:nrow(primes)\n    println(\"Prime number $(primes[i,:p]) has been matched $(cm[i]) times\")\nendHere we defined two custom lt1 and lt2 functions to sort the numbers and prime DataFrame respectively, and a custom sd function which uses the appropriate column names (:n and :p) for comparisons."
},

{
    "location": "#Match-arrays-of-complex-numbers-1",
    "page": "Readme",
    "title": "Match arrays of complex numbers",
    "category": "section",
    "text": "The following example shows how to match two arrays of complex numbers, according to their distance in the complex plane.  Unlike real numbers, there is no complete order relation for the complex number, hence we must provide a custom sorting criteria.  Among the many possible ones, here we will simply sort the arrays according to their real part.  Also, we will define a custom sd function accepting a fifth argument, namely the threshold distance below which two numbers match.The code is:nn = 1_000_000\na1 = rand(nn) .+ rand(nn) .* im;\na2 = rand(nn) .+ rand(nn) .* im;\n\nlt(v, i, j) = (real(v[i]) < real(v[j]))\nfunction sd(v1, v2, i1, i2, threshold)\n    d = (real(v1[i1]) - real(v2[i2])) / threshold\n	(abs(d) >= 1)  &&  (return sign(d))\n    d = abs(v1[i1] - v2[i2]) / threshold\n	(d < 1)  &&  (return 0)\n	return 999 # missed match\nend\nj = sortmerge(a1, a2, 10. / nn, lt1=lt, lt2=lt, sd=sd)Note that since the order relation is partial the sd function will sometimes return a number different from -1, 0 and 1, resulting in the so called missed match condition (return value is 999).You may check that the results actually consider all matching pairs by disabling all optimization hints (i.e. the -1 and 1 return values) altoghether, and compare each element in first array with each element in the second:function sd(v1, v2, i1, i2, threshold)\n    d = abs(v1[i1] - v2[i2]) / threshold\n	(d < 1)  &&  (return 0)\n	return 999 # missed match\nend\nj = sortmerge(a1, a2, 10. / nn, sorted=true, sd=sd)but be prepared that the execution time will be really long!Another possible approach is to sort the numbers by their distance from the origin, i.e.lt(v, i, j) = (abs2(v[i]) < abs2(v[j]))\nfunction sd(v1, v2, i1, i2, threshold)\n    d = (abs(v1[i1]) - abs(v2[i2])) / threshold\n	(abs(d) >= 1)  &&  (return sign(d))\n    d = abs(v1[i1] - v2[i2]) / threshold\n	(d < 1)  &&  (return 0)\n	return 999 # missed match\nend\nj = sortmerge(a1, a2, 10. / nn, lt1=lt, lt2=lt, sd=sd)but the performance worsen since abs is slower than real."
},

{
    "location": "#Match-arrays-of-geographical-coordinates-1",
    "page": "Readme",
    "title": "Match arrays of geographical coordinates",
    "category": "section",
    "text": "The following example shows how to match 2D arrays containing geographical coordinates (latitude and longitude).  We will use the gcirc function in the Astrolib package to calculate the great circle arc distances between two points:nn = 1_000_000\nlat1  = rand(nn) .* 180 .- 90.;\nlong1 = rand(nn) .*360;\nlat2  = rand(nn) .* 180 .- 90.;\nlong2 = rand(nn) .* 360;\n\nusing AstroLib\nlt(v, i, j) = (v[i, 2] < v[j, 2])\nfunction sd(v1, v2, i1, i2, threshold_arcsec)\n    threshold_deg = threshold_arcsec / 3600. # [deg]\n    d = (v1[i1, 2] - v2[i2, 2]) / threshold_deg\n    (abs(d) >= 1)  &&  (return sign(d))\n    dd = gcirc(2, v1[i1, 1], v1[i1, 2], v2[i2, 1], v2[i2, 2])\n    (dd < threshold_arcsec)  &&  (return 0)\n    return 999\nend\nj = sortmerge([lat1 long1], [lat2 long2], lt1=lt, lt2=lt, sd=sd, 1.)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SortMerge.MatchedSortMerge.SortMergeSortMerge.SourceSortMerge.countmatchSortMerge.default_ltSortMerge.default_sdSortMerge.evalSortMerge.includeSortMerge.multimatchSortMerge.nmatchSortMerge.sortmergeSortMerge.sortperm"
},

]}
