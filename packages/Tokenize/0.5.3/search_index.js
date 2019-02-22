var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Tokenize-1",
    "page": "Readme",
    "title": "Tokenize",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)  (Image: codecov.io)Tokenize is a Julia package that serves a similar purpose and API as the tokenize module in Python but for Julia. This is to take a string or buffer containing Julia code, perform lexical analysis and return a stream of tokens.The goals of this package is to beFast, it currently lexes all of Julia source files in ~0.3 seconds (295 files, 1.16 million Tokens)\nRound trippable, that is, from a stream of tokens the original string should be recoverable exactly.\nNon error throwing. Instead of throwing errors a certain error token is returned."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": ""
},

{
    "location": "#Tokenization-1",
    "page": "Readme",
    "title": "Tokenization",
    "category": "section",
    "text": "The function tokenize is the main entrypoint for generating Tokens. It takes a string or a buffer and creates an iterator that will sequentially return the next Token until the end of string or buffer. The argument to tokenize can either be a String, IOBuffer or an IOStream.julia> collect(tokenize(\"function f(x) end\"))\n 1,1-1,8          KEYWORD        \"function\"\n 1,9-1,9          WHITESPACE     \" \"\n 1,10-1,10        IDENTIFIER     \"f\"\n 1,11-1,11        LPAREN         \"(\"\n 1,12-1,12        IDENTIFIER     \"x\"\n 1,13-1,13        RPAREN         \")\"\n 1,14-1,14        WHITESPACE     \" \"\n 1,15-1,17        KEYWORD        \"end\"\n 1,18-1,17        ENDMARKER      \"\""
},

{
    "location": "#Tokens-1",
    "page": "Readme",
    "title": "Tokens",
    "category": "section",
    "text": "Each Token is represented by where it starts and ends, what string it contains and what type it is.The API for a Token (non exported from the Tokenize.Tokens module) is.startpos(t)::Tuple{Int, Int} # row and column where the token start\nendpos(t)::Tuple{Int, Int}   # row and column where the token ends\nstartbyte(T)::Int            # byte offset where the token start\nendbyte(t)::Int              # byte offset where the token ends\nuntokenize(t)::String        # string representation of the token\nkind(t)::Token.Kind          # kind of the token\nexactkind(t)::Token.Kind     # exact kind of the tokenThe difference between kind and exactkind is that kind returns OP for all operators and KEYWORD for all keywords while exactkind returns a unique kind for all different operators and keywords, ex;julia> tok = collect(tokenize(\"⇒\"))[1];\n\njulia> Tokens.kind(tok)\nOP::Tokenize.Tokens.Kind = 90\n\njulia> Tokens.exactkind(tok)\nRIGHTWARDS_DOUBLE_ARROW::Tokenize.Tokens.Kind = 128All the different Token.Kind can be seen in the token_kinds.jl file"
},

{
    "location": "autodocs/#Tokenize.Lexers.tokenize",
    "page": "Docstrings",
    "title": "Tokenize.Lexers.tokenize",
    "category": "function",
    "text": "tokenize(x, T = Token)\n\nReturns an Iterable containing the tokenized input. Can be reverted by e.g. join(untokenize.(tokenize(x))). Setting T chooses the type of token produced by the lexer (Token or RawToken).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Tokenize.LexersTokenize.TokenizeTokenize.TokensTokenize._precompile_Tokenize.evalTokenize.includeTokenize.tokenizeTokenize.untokenize"
},

]}
