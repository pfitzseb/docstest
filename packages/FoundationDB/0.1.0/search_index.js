var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FoundationDB-Julia-Client-1",
    "page": "Readme",
    "title": "FoundationDB Julia Client",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)The current implementation covers all of the C-APIs, and provides an easy to use Julia API layer over it for simple key-value pairs.The Julia APIs are quite easy to follow, with this example:using FoundationDB\n\nopen(FDBCluster()) do cluster                        # Read cluster configuration\n    open(FDBDatabase(cluster)) do db                 # Open the database\n        key = UInt8[0,1,2]                           # This is a key, and ...\n        val = UInt8[9, 9, 9]                         # this is a value. Both are byte arrays.\n        open(FDBTransaction(db)) do tran             # Start a transaction\n            @test clearkey(tran, key) == nothing     # Delete a key if present\n            @test getval(tran, key) == nothing       # Get value for a key (nothing if not present)\n            @test setval(tran, key, val) == nothing  # Set value for a key\n            @test getval(tran, key) == val           # We get the value, once it has been set\n            @test commit(tran)                       # Commit changes we made in our snapshot\n            @test_throws FDBError commit(tran)       # We can only commit once.\n        end\n\n        open(FDBTransaction(db)) do tran             # Open a new transaction \n            @test clearkey(tran, key) == nothing     # Delete a key\n            @test getval(tran, key) == nothing\n        end                                          # Transactions are auto-committed by default!\n                                                     # And also retried automatically when possible\n\n        open(FDBTransaction(db)) do tran             # Need a transaction even for read operation\n            @test getval(tran, key) == nothing\n        end                                          # Reads don\'t have to be committed\n    end\nendNote: The Julia implementation makes use of Julia threading APIs. Make sure you have enabled threading and have at least two threads configured for Julia. E.g.:$> JULIA_NUM_THREADS=2\n$> export JULIA_NUM_THREADS\n$> julia -e \'using Pkg; Pkg.test(\"FoundationDB\")\'"
},

]}
