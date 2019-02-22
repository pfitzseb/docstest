var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LevelDB-1",
    "page": "Readme",
    "title": "LevelDB",
    "category": "section",
    "text": "LevelDB is Google\'s open source on-disk key-value storage library that provides an ordered mapping from string keys to binary values. In many applications where only key based accesses are needed, it tends to be a faster alternative than databases.  LevelDB was written in C++ with a C calling API included. This module provides a Julia interface to LevelDB using Julia\'s  ccall mechanism."
},

{
    "location": "#Install-LevelDB-1",
    "page": "Readme",
    "title": "Install LevelDB",
    "category": "section",
    "text": "You can build LevelDB from its source code at https://github.com/google/leveldb. Please install the final dynamic library into a system directory such as /usr/lib or make sure libleveldb.so is in one of your LDLIBRARYPATH directories."
},

{
    "location": "#Run-Testing-Code-1",
    "page": "Readme",
    "title": "Run Testing Code",
    "category": "section",
    "text": "julia test/runtests.jlThis will exercise batched and non-batched writes and reads for string and float array values."
},

{
    "location": "#Create/Open/Close-a-LevelDB-database-1",
    "page": "Readme",
    "title": "Create/Open/Close a LevelDB database",
    "category": "section",
    "text": "function open_db(file_path, create_if_missing)Here filepath is the full path to a directory that hosts a LevelDB database, createif_missing is a boolean flag when true the database will be created if it does not exist.  The return value is a database object for passing to read/write calls.function close_db(db)Close a database, db is the object returned from a open_db call."
},

{
    "location": "#Read-and-Write-Operations-1",
    "page": "Readme",
    "title": "Read and Write Operations",
    "category": "section",
    "text": "function db_put(db, key, value, val_len)key is a string, value is a pointer to a byte array, val_len is its lengthfunction db_get(db, key)Return value is a UInt8 array, one can use the reinterpret Julia function to cast it into the right array type (see test code).function db_delete(db, key)"
},

{
    "location": "#Batched-Write-1",
    "page": "Readme",
    "title": "Batched Write",
    "category": "section",
    "text": "LevelDB supports grouping a number of put operations into a WriteBatch, the batch will either succeed as a whole or fail altogether, behaving like an atomic update.function create_write_batch()Create a WriteBatch object.function batch_put(batch, key, value, val_len)Add one key value Put operation into a WriteBatchfunction write_batch(db, batch)Commit the WriteBatch into the database as an atomic write."
},

{
    "location": "#General-for-loop-1",
    "page": "Readme",
    "title": "General for loop",
    "category": "section",
    "text": "range = db_range(db, \"key_start\", \"key_end\")\nfor (k, v) in range\n  #do something\nendNote: if you break the loop, you had to manually close the range by range_close(range)."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "Jerry Zhenlei Cai ( jpenguin@gmail dot com )"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LevelDB.@checked_libLevelDB.DBLevelDB.LevelDBLevelDB.RangeLevelDB.batch_putLevelDB.close_dbLevelDB.create_iterLevelDB.create_write_batchLevelDB.db_deleteLevelDB.db_getLevelDB.db_putLevelDB.db_rangeLevelDB.depsfileLevelDB.evalLevelDB.includeLevelDB.isdoneLevelDB.iter_keyLevelDB.iter_nextLevelDB.iter_prevLevelDB.iter_seekLevelDB.iter_seek_to_firstLevelDB.iter_seek_to_lastLevelDB.iter_validLevelDB.iter_valueLevelDB.libleveldbjlLevelDB.open_dbLevelDB.range_closeLevelDB.readoptions_createLevelDB.write_batch"
},

]}
