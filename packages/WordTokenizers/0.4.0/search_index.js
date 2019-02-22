var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WordTokenizers-1",
    "page": "Readme",
    "title": "WordTokenizers",
    "category": "section",
    "text": "Some basic tokenizers for Natural Language Processing:The normal way to used this package is to call tokenize(str) to split up a string into words; or split_sentences(str) to split up a string into sentences. Maybe even tokenize.(split_sentences(str)) to do both.tokenize and split_sentences, are configurable functions that call one of the tokenizers or sentence splitters defined below. They have sensible defaults set, but you can override the method used by calling set_tokenizer(func) or set_sentence_splitter(func) passing in your preferred function func from the list below (or from else where) Configuring them this way will throw up a method overwritten warning, and trigger recompilation of any methods that use them.This means if you are using a package that uses WordTokenizers.jl to do tokenization/sentence splitting via the default methods; changing the tokenizer/splitter will change the behavior of that package. This is a feature of CorpusLoaders.jl. If as a package author you don\'t want to allow the user to change the tokenizer in this way, you should use the tokenizer you want explicitly, rather than using the  tokenize method."
},

{
    "location": "#Example-Setting-Tokenizer-(Revtok.jl)-1",
    "page": "Readme",
    "title": "Example Setting Tokenizer  (Revtok.jl)",
    "category": "section",
    "text": "You might like to, for example use Revtok.jl\'s tokenizer. We do not include Revtok in this package, because making use of it with-in WordTokenizers.jl is trival. Just import Revtok; set_tokenizer(Revtok.tokenize).Full example:julia> using WordTokenizers\n\njulia> text = \"I cannot stand when they say \\\"Enough is enough.\\\"\";\n\njulia> tokenize(text) |> print # Default tokenizer\nSubString{String}[\"I\", \"can\", \"not\", \"stand\", \"when\", \"they\", \"say\", \"``\", \"Enough\", \"is\", \"enough\", \".\", \"\'\'\"]\n\njulia> import Revtok\n\njulia> set_tokenizer(Revtok.tokenize)\nWARNING: Method definition tokenize(AbstractString) in module WordTokenizers overwritten\ntokenize (generic function with 1 method)\n\n\njulia> tokenize(text) |> print # Revtok\'s tokenizer\nString[\" I \", \" cannot \", \" stand \", \" when \", \" they \", \" say \", \" \\\"\", \" Enough \", \" is \", \" enough \", \".\\\" \"]"
},

{
    "location": "#(Word)-Tokenizers-1",
    "page": "Readme",
    "title": "(Word) Tokenizers",
    "category": "section",
    "text": "The word tokenizers basically assume sentence splitting has already been done.Poorman\'s tokenizer: (poormans_tokenize) Deletes all punctuation, and splits on spaces. (In some ways worse than just using split)\nPunctuation space tokenize: (punctuation_space_tokenize) Marginally improved version of the poorman\'s tokenizer, only deletes punctuation occurring outside words.\nPenn Tokenizer: (penn_tokenize) This is Robert MacIntyre\'s orginal tokenizer used for the Penn Treebank. Splits contractions.\nImproved Penn Tokenizer: (improved_penn_tokenize) NLTK\'s improved Penn Treebank Tokenizer. Very similar to the original, some improvements on punctuation and contractions. This matches to NLTK\'s nltk.tokenize.TreeBankWordTokenizer.tokenize\nNLTK Word tokenizer: (nltk_word_tokenize) NLTK\'s even more improved version of the Penn Tokenizer. This version has better unicode handling and some other changes. This matches to the most commonly used nltk.word_tokenize, minus the sentence tokenizing step. (default tokenizer)\nReversible Tokenizer: (rev_tokenize and rev_detokenize) This tokenizer splits on punctuations, space and special symbols. The generated tokens can be de-tokenized by using the rev_detokenizer function into the state before tokenization. (To me it seems like a weird historical thing that NLTK has 2 successive variation on improving the Penn tokenizer, but for now I am matching it and having both.  See [NLTK#2005])"
},

{
    "location": "#Sentence-Splitters-1",
    "page": "Readme",
    "title": "Sentence Splitters",
    "category": "section",
    "text": "We currently only have one sentence splitter.Rule Based Sentence Spitter: (rulebased_split_sentences), uses a rule that periods, question marks, and exclamation marks, followed by white-space end sentences. With a large list of exceptions.split_sentences is exported as an alias for the most useful sentence splitter currently implemented.  (Which ATM is the only sentence splitter: rulebased_split_sentences) (default sentence_splitter)"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> tokenize(\"The package\'s tokenizers range from simple (e.g. poorman\'s), to complex (e.g. Penn).\") |> print\nSubString{String}[\"The\", \"package\", \"\'s\", \"tokenizers\", \"range\", \"from\", \"simple\", \"(\", \"e.g.\", \"poorman\", \"\'s\", \")\",\",\", \"to\", \"complex\", \"(\", \"e.g.\", \"Penn\", \")\", \".\"]julia> text = \"The leatherback sea turtle is the largest, measuring six or seven feet (2 m) in length at maturity, and three to five feet (1 to 1.5 m) in width, weighing up to 2000 pounds (about 900 kg). Most other species are smaller, being two to four feet in length (0.5 to 1 m) and proportionally less wide. The Flatback turtle is found solely on the northerncoast of Australia.\";\n\njulia> split_sentences(text)\n3-element Array{SubString{String},1}:\n \"The leatherback sea turtle is the largest, measuring six or seven feet (2 m) in length at maturity, and three to five feet (1 to 1.5 m) in width, weighing up to 2000 pounds (about900 kg). \"\n \"Most other species are smaller, being two to four feet in length (0.5 to 1 m) and proportionally less wide. \"\n \"The Flatback turtle is found solely on the northern coast of Australia.\"\n\njulia> tokenize.(split_sentences(text))\n3-element Array{Array{SubString{String},1},1}:\n SubString{String}[\"The\", \"leatherback\", \"sea\", \"turtle\", \"is\", \"the\", \"largest\", \",\", \"measuring\", \"six\"  …  \"up\", \"to\", \"2000\", \"pounds\", \"(\", \"about\", \"900\", \"kg\", \")\", \".\"]\n SubString{String}[\"Most\", \"other\", \"species\", \"are\", \"smaller\", \",\", \"being\", \"two\", \"to\", \"four\"  …  \"0.5\", \"to\", \"1\", \"m\", \")\", \"and\", \"proportionally\", \"less\", \"wide\", \".\"]\n SubString{String}[\"The\", \"Flatback\", \"turtle\", \"is\", \"found\", \"solely\", \"on\", \"the\", \"northern\", \"coast\", \"of\", \"Australia\", \".\"]"
},

{
    "location": "#Experimental-API-1",
    "page": "Readme",
    "title": "Experimental API",
    "category": "section",
    "text": "I am trying out an experimental API where these are added as dispatches to Base.splitSo    split(foo, Words) is the same as tokenize(foo),   and   split(foo, Sentences) is the same as split_sentences(foo)."
},

{
    "location": "autodocs/#WordTokenizers.MERGESYMBOL",
    "page": "Docstrings",
    "title": "WordTokenizers.MERGESYMBOL",
    "category": "constant",
    "text": "A simple reversible tokenizer\n\ntokenized = rev_tokenize(instring)\nde_tokenized = rev_detokenize(token)\n\nThe revtokenize tokenizer splits into token based on space, punctuations and special symbols and in  addition it leaves some merge-symbols (\'\') for the tokens to be re-arranged when needed  using the revdetokenize. It uses a character based approach for splitting and re-merging.\n\nParameters:\n\ninstring: Input string to be tokenized \ntoken: Collection to tokens i.e String Array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.TokenBuffer",
    "page": "Docstrings",
    "title": "WordTokenizers.TokenBuffer",
    "category": "type",
    "text": "TokenBuffer(\"foo bar\")\n\nTurns a string into a readable stream, used for building tokenisers. Utility parsers such as spaces and number read characters from the stream and into an array of tokens.\n\nParsers return true or false to indicate whether they matched anything in the input stream. They can therefore be combined easily, e.g.\n\nspacesornumber(ts) = spaces(ts) || number(ts)\n\neither skips whitespace or parses a number token, if possible.\n\nThe simplest possible tokeniser accepts any character with no token breaks:\n\nfunction tokenise(input)\n  ts = TokenBuffer(input)\n  while !isdone(ts)\n    character(ts)\n  end\n  return ts.tokens\nend\n\ntokenise(\"foo bar baz\") # [\"foo bar baz\"]\n\nThe second simplest splits only on spaces:\n\nfunction tokenise(input)\n  ts = TokenBuffer(input)\n  while !isdone(ts)\n    spaces(ts) || character(ts)\n  end\n  return ts.tokens\nend\n\ntokenise(\"foo bar baz\") # [\"foo\", \"bar\", \"baz\"]\n\nSee nltk_word_tokenize for a more advanced example.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.atoms",
    "page": "Docstrings",
    "title": "WordTokenizers.atoms",
    "category": "function",
    "text": "atoms(::TokenBuffer, [\"--\", \"...\", ...])\n\nMatches a set of atomic tokens, such as ..., which should always be treated as a single token, regardless of word boundaries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.character",
    "page": "Docstrings",
    "title": "WordTokenizers.character",
    "category": "function",
    "text": "character(::TokenBuffer)\n\nPush the next character in the input into the buffer\'s current token.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.closingquote",
    "page": "Docstrings",
    "title": "WordTokenizers.closingquote",
    "category": "function",
    "text": "openquote(::TokenBuffer)\n\nMatches \" used as a closing quote, and tokenises it as \'\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.flush!",
    "page": "Docstrings",
    "title": "WordTokenizers.flush!",
    "category": "function",
    "text": "flush!(::TokenBuffer, tokens...)\n\nTokenBuffer builds the current token as characters are read from the input. When the end of the current token is detected, call flush! to finish it and append it to the token stream. Optionally, give additional tokens to be added to the stream after the current one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.generate_tokenizer_from_sed",
    "page": "Docstrings",
    "title": "WordTokenizers.generate_tokenizer_from_sed",
    "category": "function",
    "text": "generate_tokenizer_from_sed(sed_script_path)\n\nThis returns Julia code, that is the translation of a simple sed script for tokenizing. This doesn\'t fully cover all the functionality of sed, but it covers enough for many purposes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.improved_penn_tokenize",
    "page": "Docstrings",
    "title": "WordTokenizers.improved_penn_tokenize",
    "category": "function",
    "text": "improved_penn_tokenize(input::AbstractString)\n\nThe Improved Penn Treebank tokenizer. This is a port of NLTK\'s modified Penn Tokenizer. It has a bundle of minor changes, that I don\'t think are actually documented anywhere. But things like cannot cannot become can not can not where as the original would produce can not cannot.\n\nThe tokenizer still seperates out contractions: \"shouldn\'t\" becomes [\"should\", \"n\'t\"]\n\nThe input should be a single sentence; but again it will likely be relatively fine if it isn\'t. Depends exactly what you want it for.\n\nThis matches NLTK\'s nltk.tokenize.TreeBankWordTokenizer.tokenize\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.lookahead",
    "page": "Docstrings",
    "title": "WordTokenizers.lookahead",
    "category": "function",
    "text": "lookahead(::TokenBuffer, s; boundary = false)\n\nPeek at the input to see if s is coming up next. boundary specifies whether a word boundary should follow s.\n\njulia> lookahead(TokenBuffer(\"foo bar\"), \"foo\")\ntrue\n\njulia> lookahead(TokenBuffer(\"foo bar\"), \"bar\")\nfalse\n\njulia> lookahead(TokenBuffer(\"foo bar\"), \"foo\", boundary = true)\ntrue\n\njulia> lookahead(TokenBuffer(\"foobar\"), \"foo\", boundary = true)\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.nltk_word_tokenize",
    "page": "Docstrings",
    "title": "WordTokenizers.nltk_word_tokenize",
    "category": "function",
    "text": "nltk_word_tokenize(input)\n\nNLTK\'s word tokenizer. It is an extension on the Punctuation Preserving Penn Treebank tokenizer, mostly to better handle unicode.\n\nPunctuation is still preserved as its own token. This includes periods which will be stripped from words.\n\nThe tokenizer still seperates out contractions: \"shouldn\'t\" becomes [\"should\", \"n\'t\"]\n\nThe input should be a single sentence; but again it will likely be relatively fine if it isn\'t. Depends exactly what you want it for.\n\nThis matches to the most commonly used nltk.word_tokenize, minus the sentence tokenizing step.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.number",
    "page": "Docstrings",
    "title": "WordTokenizers.number",
    "category": "function",
    "text": "number(::TokenBuffer)\n\nMatches numbers such as 10,000.5, preserving formatting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.openquote",
    "page": "Docstrings",
    "title": "WordTokenizers.openquote",
    "category": "function",
    "text": "openquote(::TokenBuffer)\n\nMatches \" used as an opening quote, and tokenises it as ``.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.penn_tokenize",
    "page": "Docstrings",
    "title": "WordTokenizers.penn_tokenize",
    "category": "function",
    "text": "penn_tokenize(input::AbstractString)\n\n\"... to produce Penn Treebank tokenization on arbitrary raw text. Yeah, sure\" quote Robert MacIntyre\n\nTokenization does a number of things like seperate out contractions: \"shouldn\'t\" becomes [\"should\", \"n\'t\"] Most other punctuation becomes &\'s. Exception is periods which are not touched. The input should be a single sentence; but it will likely be relatively fine if it isn\'t. Depends exactly what you want it for.\n\nThis is a direct (automatic) translation of the original sed script.\n\nIf you want to mess with exactly what it does it is actually really easy. copy the penn.sed file from this repo, modify it to your hearts content. There are some lines you can uncomment out. You can generate a new tokenizer using:\n\n@generated function custom_tokenizer(input::AbstractString)\n    generate_tokenizer_from_sed(joinpath(@__DIR__, \"custom.sed\"))\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.poormans_tokenize",
    "page": "Docstrings",
    "title": "WordTokenizers.poormans_tokenize",
    "category": "function",
    "text": "poormans_tokenize\n\nTokenizes by removing punctuation and splitting on spaces\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.postproc_splits",
    "page": "Docstrings",
    "title": "WordTokenizers.postproc_splits",
    "category": "function",
    "text": " postproc_splits(sentences)\n\nApplies heuristic rules to repair sentence splitting errors. Developed for use as postprocessing for the GENIA sentence splitter on PubMed abstracts, with minor tweaks for full-text documents.\n\nsentences should be a string, with line breaks on sentence boundaries. Returns a similar string, but more correct.\n\nBased on https://github.com/ninjin/geniass/blob/master/geniass-postproc.pl Which is (c) 2010 Sampo Pyysalo. No rights reserved, i.e. do whatever you like with this. Which draws in part on heuristics included in Yoshimasa Tsuruoka\'s medss.pl script.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.punctuation_space_tokenize",
    "page": "Docstrings",
    "title": "WordTokenizers.punctuation_space_tokenize",
    "category": "function",
    "text": "punctuation_space_tokenize\n\nTokenizes by removing punctuation, unless it occurs inside of a word.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.set_sentence_splitter",
    "page": "Docstrings",
    "title": "WordTokenizers.set_sentence_splitter",
    "category": "function",
    "text": "set_sentence_splitter(fun)\n\nCall this to set the default sentence splitter to invoke the passed in function fun It will be used by split_sentences. Calling this will trigger recompilation of any functions that use split_sentences.\n\nCalling set_sentence_splitter  will give method overwritten warnings. They are expected, be worried if they do not occur\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.set_tokenizer",
    "page": "Docstrings",
    "title": "WordTokenizers.set_tokenizer",
    "category": "function",
    "text": "set_tokenizer(fun)\n\nCall this to set the default tokenizer to invoke the passed in function fun It will be used by tokenize. Calling this will trigger recompilation of any functions that use tokenize.\n\nCalling set_tokenizer  will give method overwritten warnings. They are expected, be worried if they do not occur\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.spaces",
    "page": "Docstrings",
    "title": "WordTokenizers.spaces",
    "category": "function",
    "text": "spaces(::TokenBuffer)\n\nIf there is whitespace in the input, skip it, and flush the current token.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.splits",
    "page": "Docstrings",
    "title": "WordTokenizers.splits",
    "category": "function",
    "text": "splits(::TokenBuffer, [(\"cannot\", 3), (\"gimme\", 3), ...])\n\nMatches tokens that should be split at the given index. For example, cannot would be split into can and not.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WordTokenizers.suffixes",
    "page": "Docstrings",
    "title": "WordTokenizers.suffixes",
    "category": "function",
    "text": "suffixes(::TokenBuffer, [\"\'ll\", \"\'re\", ...])\n\nMatches tokens with suffixes, such as you\'re, that should be treated as separate tokens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WordTokenizers.MERGESYMBOLWordTokenizers.SentencesWordTokenizers.TokenBufferWordTokenizers.WordTokenizersWordTokenizers.WordsWordTokenizers.atomsWordTokenizers.characterWordTokenizers.closingquoteWordTokenizers.evalWordTokenizers.flush!WordTokenizers.generate_tokenizer_from_sedWordTokenizers.improved_penn_tokenizeWordTokenizers.includeWordTokenizers.is_weirdWordTokenizers.isdoneWordTokenizers.lookaheadWordTokenizers.nltk_atomsWordTokenizers.nltk_splitsWordTokenizers.nltk_suffixesWordTokenizers.nltk_word_tokenizeWordTokenizers.nth_indWordTokenizers.numberWordTokenizers.openquoteWordTokenizers.penn_tokenizeWordTokenizers.poormans_tokenizeWordTokenizers.postproc_splitsWordTokenizers.punctuation_space_tokenizeWordTokenizers.replace_til_no_changeWordTokenizers.rev_detokenizeWordTokenizers.rev_tokenizeWordTokenizers.rulebased_split_sentencesWordTokenizers.sentence_splittersWordTokenizers.set_sentence_splitterWordTokenizers.set_tokenizerWordTokenizers.spacesWordTokenizers.split_sentencesWordTokenizers.splitsWordTokenizers.suffixesWordTokenizers.tokenizeWordTokenizers.tokenizers"
},

]}
