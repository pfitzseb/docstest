var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: StringDistances) (Image: Build Status) (Image: Coverage Status)This Julia package computes various distances between strings (UTF-8 encoding)"
},

{
    "location": "#Syntax-1",
    "page": "Readme",
    "title": "Syntax",
    "category": "section",
    "text": "The function compare returns  a similarity score between two strings. The function always returns a score between 0 and 1, with a value of 0 being completely different and a value of 1 being completely similar.using StringDistances\ncompare(Hamming(), \"martha\", \"martha\")\n#> 1.0\ncompare(Hamming(), \"martha\", \"marhta\")\n#> 0.6666666666666667"
},

{
    "location": "#Distances-1",
    "page": "Readme",
    "title": "Distances",
    "category": "section",
    "text": ""
},

{
    "location": "#Edit-Distances-1",
    "page": "Readme",
    "title": "Edit Distances",
    "category": "section",
    "text": "Damerau-Levenshtein Distance DamerauLevenshtein()\nHamming Distance Hamming()\nJaro Distance Jaro()\nLevenshtein Distance Levenshtein()"
},

{
    "location": "#Q-Grams-Distances-1",
    "page": "Readme",
    "title": "Q-Grams Distances",
    "category": "section",
    "text": "Q-gram distances compare the set of all substrings of length q in each string.QGram Distance Qgram(q)\nCosine Distance Cosine(q)\nJaccard Distance Jaccard(q)\nOverlap Distance Overlap(q)\nSorensen-Dice Distance SorensenDice(q)"
},

{
    "location": "#Others-1",
    "page": "Readme",
    "title": "Others",
    "category": "section",
    "text": "RatcliffObershelp Distance RatcliffObershelp()"
},

{
    "location": "#Distance-Modifiers-1",
    "page": "Readme",
    "title": "Distance Modifiers",
    "category": "section",
    "text": "The package includes distance \"modifiers\", that can be applied to any distance.Winkler boosts the similary score of strings with common prefixes.  The Winkler adjustment was originally defined for the Jaro similarity score but this package defines it for any string distance.	compare(Jaro(), \"martha\", \"marhta\")\n	#> 0.9444444444444445\n	compare(Winkler(Jaro()), \"martha\", \"marhta\")\n	#> 0.9611111111111111\n\n	compare(QGram(2), \"william\", \"williams\")\n	#> 0.9230769230769231\n	compare(Winkler(QGram(2)), \"william\", \"williams\")\n	#> 0.9538461538461539\n	```\n\n- Modifiers from the Python library [fuzzywuzzy](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/) .\n\n	- [Partial](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/) returns the maximal similarity score between the shorter string and substrings of the longer string.\n\n		```julia\n		compare(Levenshtein(), \"New York Yankees\", \"Yankees\")\n		#> 0.4375\n		compare(Partial(Levenshtein()), \"New York Yankees\", \"Yankees\")\n		#> 1.0\n		```\n\n	- [TokenSort](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/) adjusts for differences in word orders by reording words alphabetically. \n\n		```julia\n		compare(RatcliffObershelp(), \"mariners vs angels\", \"angels vs mariners\")\n		#> 0.44444\n		compare(TokenSort(RatcliffObershelp()),\"mariners vs angels\", \"angels vs mariners\")\n		#> 1.0\n		```\n\n	- [TokenSet](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/) adjusts for differences in word orders and word numbers by comparing the intersection of two strings with each string.\n\n		```julia\n		compare(Jaro(),\"mariners vs angels\", \"los angeles angels at seattle mariners\")\n		#> 0.559904\n		compare(TokenSet(Jaro()),\"mariners vs angels\", \"los angeles angels at seattle mariners\")\n		#> 0.944444\n		```\n\n\n	- [TokenMax](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/) combines scores using the base distance, the `Partial`, `TokenSort` and `TokenSet` modifiers, with penalty terms depending on string lengths. This is the default distance  in [fuzzywuzzy](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/) .\n\n		```julia\n		compare(TokenMax(RatcliffObershelp()),\"mariners vs angels\", \"los angeles angels at seattle mariners\")\n		#> 0.855\n		```\n## Compare vs Evaluate\nThe function `compare` returns a similarity score: a value of 0 means completely different and a value of 1 means completely similar.\nIn contrast, the function `evaluate` returns the litteral distance between two strings, with a value of 0 being completely similar. some distances are between 0 and 1. Others are unbouded.\njulia compare(Levenshtein(), \"New York\", \"New York\") #> 1.0 evaluate(Levenshtein(), \"New York\", \"New York\") #> 0 ```"
},

{
    "location": "#Which-distance-should-I-use?-1",
    "page": "Readme",
    "title": "Which distance should I use?",
    "category": "section",
    "text": "As a rule of thumb, Standardize strings before comparing them (cases, whitespaces, accents, abbreviations...)\nOnly consider using one of the Edit distances if word order matters.\nThe distance Tokenmax(RatcliffObershelp()) is a good choice to link names or adresses across datasets."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "The stringdist Package for Approximate String Matching Mark P.J. van der Loo\nfuzzywuzzy"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StringDistances.AbstractQGramStringDistances.CosineStringDistances.CountIteratorBinaryStringDistances.CountIteratorDictionaryStringDistances.DamerauLevenshteinStringDistances.HammingStringDistances.JaccardStringDistances.JaroStringDistances.LevenshteinStringDistances.OverlapStringDistances.PartialStringDistances.QGramStringDistances.QGramIteratorStringDistances.RatcliffObershelpStringDistances.SorensenDiceStringDistances.StringDistancesStringDistances.TokenMaxStringDistances.TokenSetStringDistances.TokenSortStringDistances.WinklerStringDistances._separate!StringDistances.common_prefixStringDistances.compareStringDistances.evalStringDistances.evaluateStringDistances.includeStringDistances.longest_common_substringStringDistances.matching_blocksStringDistances.matching_blocks!StringDistances.reorder"
},

]}
