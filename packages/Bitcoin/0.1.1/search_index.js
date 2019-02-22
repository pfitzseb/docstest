var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#Bitcoin.jl-Documentation-1",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.jl Documentation",
    "category": "section",
    "text": "A Bitcoin library for Julia"
},

{
    "location": "#Functions-1",
    "page": "Bitcoin.jl Documentation",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Bitcoin.address",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.address",
    "category": "function",
    "text": "adress(P::ECC.S256Point, compressed::Bool, testnet::Bool) -> String\n\nReturns the Base58 Bitcoin address given an S256Point Compressed is set to true if not provided. Testnet is set to false by default.\n\n\n\n\n\n"
},

{
    "location": "#Bitcoin.wif",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.wif",
    "category": "function",
    "text": "wif(pk::PrivateKey, compressed::Bool=true, testnet::Bool=false) -> String\n\nReturns a PrivateKey in Wallet Import Format Compressed is set to true if not provided. Testnet is set to false by default.\n\n\n\n\n\n"
},

{
    "location": "#Address-1",
    "page": "Bitcoin.jl Documentation",
    "title": "Address",
    "category": "section",
    "text": "address\nwif"
},

{
    "location": "#Bitcoin.txparse",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.txparse",
    "category": "function",
    "text": "txparse(s::Base.GenericIOBuffer, testnet::Bool=false) -> Tx\n\nReturns a Tx object given a byte stream\n\n\n\n\n\n"
},

{
    "location": "#Bitcoin.txserialize",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.txserialize",
    "category": "function",
    "text": "txserialize(tx::Tx) -> Array{UInt8,1}\n\nReturns the byte serialization of the transaction\n\n\n\n\n\n"
},

{
    "location": "#Bitcoin.txfetch",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.txfetch",
    "category": "function",
    "text": "txfetch(tx_id::String) -> Tx\n\nReturns the bitcoin transaction given its ID as an hexadecimal string.\n\n\n\n\n\n"
},

{
    "location": "#Bitcoin.txid",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.txid",
    "category": "function",
    "text": "txid(tx::Tx) -> String\n\nReturns an hexadecimal string of the transaction hash\n\n\n\n\n\n"
},

{
    "location": "#Bitcoin.txfee",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.txfee",
    "category": "function",
    "text": "txfee(tx::Tx) -> Integer\n\nReturns the fee of this transaction in satoshi\n\n\n\n\n\n"
},

{
    "location": "#Bitcoin.txsighash",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.txsighash",
    "category": "function",
    "text": "txsighash(tx::Tx, input_index::Integer) -> Integer\n\nReturns the integer representation of the hash that needs to get signed for index input_index\n\n\n\n\n\n"
},

{
    "location": "#Transaction-1",
    "page": "Bitcoin.jl Documentation",
    "title": "Transaction",
    "category": "section",
    "text": "txparse\ntxserialize\ntxfetch\ntxid\ntxfee\ntxsighash"
},

{
    "location": "#Bitcoin.scriptevaluate",
    "page": "Bitcoin.jl Documentation",
    "title": "Bitcoin.scriptevaluate",
    "category": "function",
    "text": "scriptevaluate(s::Script, z::Integer) -> Bool\n\nEvaluate if Script is valid given the transaction signature hash\n\n\n\n\n\n"
},

{
    "location": "#Script-1",
    "page": "Bitcoin.jl Documentation",
    "title": "Script",
    "category": "section",
    "text": "scriptevaluate"
},

{
    "location": "#Buy-me-a-cup-of-coffee-1",
    "page": "Bitcoin.jl Documentation",
    "title": "Buy me a cup of coffee",
    "category": "section",
    "text": "Donate Bitcoin Donate Litecoin"
},

{
    "location": "#Index-1",
    "page": "Bitcoin.jl Documentation",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}
