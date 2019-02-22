var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Markovify-1",
    "page": "Readme",
    "title": "Markovify",
    "category": "section",
    "text": "(Image: ) (Image: )Simple text generation in Julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install this package by using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:pkg> add Markovify"
},

{
    "location": "#Usage-examples-1",
    "page": "Readme",
    "title": "Usage examples",
    "category": "section",
    "text": "All functions in this package are documented. You can view the documentation of the public symbols here.Let\'s say we want to build a simplistic Lorem ipsum generator. We can use Markovify for that; the whole process can be split into three main steps:Loading the training texts from a file (or multiple files) and splitting it into tokens.\nTraining the model on the tokens.\nWalking through the model and generating random texts.Let\'s assume we have our training files in the directory files, named src1, src2 and src3.using Markovify\nusing Tokenizer\n\n# For each supplied file, make a model, and return an iterator of all such models\n# This function actually performs both step 1 and step 2\nfunction loadfiles(filenames)\n    return (\n        open(filename) do file\n            text = read(file, String)\n            # Tokenize on words (we could also tokenize on letters/lines etc.)\n            # That means: split the text to sentences and then those sentences to words\n            tokens = tokenize(text; on=words)\n            return Model(tokens; order=1)\n        end\n        for filename in filenames\n    )\nend\n\n# Print n sentences generated with the model\n# This function performs step 3\nfunction gensentences(model, n)\n    sentences = []\n    # Stop only after n sentences were generated\n    # and passed through the length test\n    while length(sentences) < n\n        seq = walk(model)\n        # Add the sentence to the array iff its length is ok\n        if length(seq) > 5 && length(seq) < 15\n            push!(sentences, join(seq, \" \"))\n        end\n    end\nend\n\n# Now we just put them together\nFILENAMES = [\"files/src1.txt\", \"files/src2.txt\", \"files/src3.txt\"]\nMODEL = combine(loadfiles(FILENAMES)...)\ngensentences(MODEL, 4)And the output is 4 lines of random sentences, similar to this example generated from three random French texts on Project Gutenberg.Mais elle exposa froidement le pria quelquun à dîner.\nLes animaux guérissent quelquefois, la duchesse et les mères.\ncest une fortune en souriant ses rivaux.\nMais la spécialité des hommes vraiment forts, évitait de Paris.The most complicated step is 1: tokenizing. The constructor Model expects an array of arrays of tokens, so keep that in mind. There is also another method of Model, which can build a full model object from just the nodes dictionary (read more on nodes in the docs) — you can thus save the nodes of an existing model to a JSON file, for example, and restore it later."
},

{
    "location": "autodocs/#Markovify.Model",
    "page": "Docstrings",
    "title": "Markovify.Model",
    "category": "type",
    "text": "The datastructure of the Markov chain. Encodes all the different states and the probabilities of going from one to another as a dictionary. The keys are the states, the values are the respective TokenOccurences dictionaries. Those are dictionaries which say how many times was a token found immediately after the state.\n\nFields\n\norder is the number of tokens in a State\nnodes is a dictionary pairing State and its respective\n\nTokenOccurences dictionary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.State",
    "page": "Docstrings",
    "title": "Markovify.State",
    "category": "type",
    "text": "State{T} = Vector{Token{T}}\n\nA state is described by a succession of tokens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.Token",
    "page": "Docstrings",
    "title": "Markovify.Token",
    "category": "constant",
    "text": "Token{T} = Union{Symbol, T}\n\nTokens can be of any type. They can also include symbols :begin and :end which are used to denote the beginning and end of a suptoken.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.TokenOccurences",
    "page": "Docstrings",
    "title": "Markovify.TokenOccurences",
    "category": "type",
    "text": "TokenOccurences{T} = Dict{Token{T}, Int}\n\nA dictionary pairing tokens (or special symbols :begin and :end) with the number of their respective occurences.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.append_token",
    "page": "Docstrings",
    "title": "Markovify.append_token",
    "category": "function",
    "text": "append_token(state, token)\n\nDrop the first element in state and append the token at the end of the state array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.begseq",
    "page": "Docstrings",
    "title": "Markovify.begseq",
    "category": "function",
    "text": "begseq(n)\n\nReturn the symbol :begin repeated n times. This array is then used as a starting sequence for all suptokens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.combine",
    "page": "Docstrings",
    "title": "Markovify.combine",
    "category": "function",
    "text": "combine(chain, others)\n\nReturn a Model which is a combination of all of the models provided. All of the arguments should have the same order. The nodes of all the Models are merged using the function merge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.indexin",
    "page": "Docstrings",
    "title": "Markovify.indexin",
    "category": "function",
    "text": "indexin(array)\n\nGiven a sorted array, return the index on which n would be inserted in should the insertion preserve the sorting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.next_token",
    "page": "Docstrings",
    "title": "Markovify.next_token",
    "category": "function",
    "text": "next_token(model, state)\n\nReturn a token which will come after the current state, at random. The probabilities of individual tokens getting choosed are skewed by their individual values in the TokenOccurences dictionary of the current state, that is obtained from the model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.randkey",
    "page": "Docstrings",
    "title": "Markovify.randkey",
    "category": "function",
    "text": "randkey(dict)\n\nReturn a random key from dict. The probabilities of individual keys getting chosen are skewed by their respective values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.state_with_prefix",
    "page": "Docstrings",
    "title": "Markovify.state_with_prefix",
    "category": "function",
    "text": "state_with_prefix(model, prefix; strict=false)\n\nAttempts to return a random valid state of model that begins with tokens. If strict is false and the model doesn\'t have any state that begins with tokens, the function shortens the tokens (cuts the last token) to lower the requirements and tries to find some valid state again.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.states_with_suffix",
    "page": "Docstrings",
    "title": "Markovify.states_with_suffix",
    "category": "function",
    "text": "states_with_suffix(model, init_suffix)\n\nReturn all of the states of model that end with init_suffix. If the number of such states is 1 (or 0), the function shortens the suffix (cuts the first token) in order to lower the requirements, and makes another try.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.stdweight",
    "page": "Docstrings",
    "title": "Markovify.stdweight",
    "category": "function",
    "text": "stdweight(state, token)\n\nA constant 1. Used as a placeholder function in Model to represent unbiased weight function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.walk",
    "page": "Docstrings",
    "title": "Markovify.walk",
    "category": "function",
    "text": "walk(model[, init_state])\n\nReturn an array of tokens obtained by a random walk through the Markov chain. The walk starts at state init_state if supplied, and at state [:begin, :begin...] (the length depends on the order of the supplied model) otherwise. The walk ends once a special token :end is reached.\n\nSee also: walk2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.walk2",
    "page": "Docstrings",
    "title": "Markovify.walk2",
    "category": "function",
    "text": "walk2(model[, init_state])\n\nReturn an array of tokens obtained by a random walk through the Markov chain. When there is only one state following the current one (i.e. there is 100% chance that the state will become the next one), the function shortens the current State as to lower the requirements and obtain more randomness. The State gets shortened until a state with at least two possible successors is found (or until State is only one token long).\n\nThe walk starts at state init_state if supplied, and at state [:begin, :begin...] (the length depends on the order of the supplied model) otherwise. The walk ends once a special token :end is reached.\n\nSee also: walk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Markovify.walker",
    "page": "Docstrings",
    "title": "Markovify.walker",
    "category": "function",
    "text": "walker(model, init_state, init_accum, newstate=append_token)\n\nReturn an array of tokens obtained by a random walk through the Markov chain. The walk starts at state init_state and ends once a special token :end is reached. A function newstate of general type func(::State{T}, ::Token{T})::State{T} where T can be supplied to be used to generate a new state given the old state and the following token.\n\nThis is a general function which is used by all the walk functions.\n\nSee also: walk, walk2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Markovify.MarkovifyMarkovify.ModelMarkovify.StateMarkovify.TokenMarkovify.TokenOccurencesMarkovify.TokenizerMarkovify.append_tokenMarkovify.begseqMarkovify.combineMarkovify.evalMarkovify.includeMarkovify.indexinMarkovify.makefromdictMarkovify.next_tokenMarkovify.randkeyMarkovify.state_with_beginningMarkovify.state_with_prefixMarkovify.states_with_suffixMarkovify.stdweightMarkovify.walkMarkovify.walk2Markovify.walker"
},

]}
