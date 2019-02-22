var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FunctionalTables-1",
    "page": "Readme",
    "title": "FunctionalTables",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)Julia package for working with (potentially large) columns of data."
},

{
    "location": "#Design-1",
    "page": "Readme",
    "title": "Design",
    "category": "section",
    "text": "A table is a collection of columns, indexed by Symbols.Columns are immutable, which allows compression and type narrowing when applicable. Columns do not support random access, just iterate.Columns are created by collecting elements into sinks, which are then finalized. While being collected into, sinks can change representation, eg decide whether to use RLE or other compression schemes, mmap to disk for large data, etc –- these can be configured and ideally ignored by the user.NamedTuples are used pervasively throughout the interface."
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "Heavily experimental, API changes radically without warnings or deprecations. This primarily an experiment, the package will be registered if it works out."
},

{
    "location": "autodocs/#FunctionalTables.ColumnOrdering",
    "page": "Docstrings",
    "title": "FunctionalTables.ColumnOrdering",
    "category": "type",
    "text": "struct ColumnOrdering{K, R}\n\nOrdering specification for a column. K::Symbol is a key for ordering by isless, R::Bool == true reverses that for this key. Internal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.ColumnOrderingSpecification",
    "page": "Docstrings",
    "title": "FunctionalTables.ColumnOrderingSpecification",
    "category": "constant",
    "text": "Types accepted as valid column ordering specifications in the user API.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.FunctionalTable",
    "page": "Docstrings",
    "title": "FunctionalTables.FunctionalTable",
    "category": "type",
    "text": "struct FunctionalTable{C<:NamedTuple, O<:Tuple{Vararg{FunctionalTables.ColumnOrdering,N} where N}}\n\nInternal notes\n\nUse accessors length, colums, and ordering to access the fields, property accessors are forwarded to columns.\nThe only inner constructor is the one where both the length and the ordering is trusted (and thus unchecked). Outer constructors should first wrap the ordering rule, then compute/verify length.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.Key",
    "page": "Docstrings",
    "title": "FunctionalTables.Key",
    "category": "type",
    "text": "Type for keys, used internally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.OrderingRule",
    "page": "Docstrings",
    "title": "FunctionalTables.OrderingRule",
    "category": "type",
    "text": "struct OrderingRule{R, O<:Tuple{Vararg{FunctionalTables.ColumnOrdering,N} where N}}\n\nRule for dealing with specified orderings. Verifies key uniqueness.\n\nSee VerifyOrdering, TrustOrdering, and TryOrdering.\n\nThis type and its methods are internal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.RLEVector",
    "page": "Docstrings",
    "title": "FunctionalTables.RLEVector",
    "category": "type",
    "text": "struct RLEVector{C, T, S, anyS}\n\nAn RLE encoded vector, using negative lengths for missing values. Use the RLEVector{S}(C, T) constructor for creating an empty one.\n\nWhen an elemenet in counts is positive, it encodes that many of the corresponding element in data.\n\nNegative counts encode values of type S (has to be a concrete singleton). In this case there is no corresponding value in data, ie data may have fewer elements than counts. Note that 0 values in count are reserved, and currently should not happen.\n\nThe flag anyS::Bool is true iff there are any values of type S in object.\n\nAn RLEVector is iterable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.RepeatRow",
    "page": "Docstrings",
    "title": "FunctionalTables.RepeatRow",
    "category": "type",
    "text": "RepeatRow(row)\n\nA row repeated as many times as needed. Can be merged to a FunctionalTable, or instantiated with FunctionalTable(len, repeat_row).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.RepeatValue",
    "page": "Docstrings",
    "title": "FunctionalTables.RepeatValue",
    "category": "type",
    "text": "RepeatValue(value, len)\n\nEquivalent to a vector containing len instances of value. Used internally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SHOWROWS",
    "page": "Docstrings",
    "title": "FunctionalTables.SHOWROWS",
    "category": "constant",
    "text": "Shows this many values from each column in a FunctionalTable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SINKCONFIG",
    "page": "Docstrings",
    "title": "FunctionalTables.SINKCONFIG",
    "category": "constant",
    "text": "Default sink configuration.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SINKVECTORS",
    "page": "Docstrings",
    "title": "FunctionalTables.SINKVECTORS",
    "category": "constant",
    "text": "Sink configuration that collects to vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SinkConfig",
    "page": "Docstrings",
    "title": "FunctionalTables.SinkConfig",
    "category": "type",
    "text": "struct SinkConfig{useRLE, M}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SplitTable",
    "page": "Docstrings",
    "title": "FunctionalTables.SplitTable",
    "category": "type",
    "text": "struct SplitTable{K<:NamedTuple, B<:NamedTuple, O<:Tuple{Vararg{FunctionalTables.ColumnOrdering,N} where N}, T<:FunctionalTable}\n\nImplements by using an iterator.\n\nInternals\n\nEach rows from the underlying FunctionalTable is split into index and rest.\n\nIterator state is\n\nnothing when the rows of the underlying FunctionalTable have been exhausted,\nindex, rest, itrstate for the next block, where index and rest are the first\n\n(mismatching) row that has not been pushed to the buffers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.TableOrdering",
    "page": "Docstrings",
    "title": "FunctionalTables.TableOrdering",
    "category": "type",
    "text": "Shorthand for table ordering. Internal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.TrustLength",
    "page": "Docstrings",
    "title": "FunctionalTables.TrustLength",
    "category": "type",
    "text": "struct TrustLength\n\nWrapper type to indicate that the length should not be checked.\n\nnote: Note\nThe perfect footgun. Only use when the lengths are known and verified by construction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.TrustOrdering",
    "page": "Docstrings",
    "title": "FunctionalTables.TrustOrdering",
    "category": "type",
    "text": "Accept the specified ordering to hold without any checks (except for verifying that column names are valid).\n\nnote: Note\nThis can lead to incorrect results, use cautiously. VerifyOrdering is recommended instead as it has little overhead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.TryOrdering",
    "page": "Docstrings",
    "title": "FunctionalTables.TryOrdering",
    "category": "type",
    "text": "Try the specified ordering, when necesary degrade to a subset of it that holds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.VerifyOrdering",
    "page": "Docstrings",
    "title": "FunctionalTables.VerifyOrdering",
    "category": "type",
    "text": "Verify that the specified ordering holds. This is the default ordering rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.aggregator",
    "page": "Docstrings",
    "title": "FunctionalTables.aggregator",
    "category": "function",
    "text": "aggregator(f)\n\n\nWrap a function so that it maps columns of a FunctionalTable to a table with a single row, columwise, ignoring the index. Returns a closure.\n\nExample\n\nmap(aggregator(mean), by(ft, :col))\n\nwill calculate means after grouping by :col.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.append1",
    "page": "Docstrings",
    "title": "FunctionalTables.append1",
    "category": "function",
    "text": "append1(v, elt)\n\n\nAppend elt to v, allocating a new vector and copying the contents.\n\nType of new collection is calculated using promote_type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.by",
    "page": "Docstrings",
    "title": "FunctionalTables.by",
    "category": "function",
    "text": "by(ft, splitkeys)\n\n\nAn iterator that groups rows of tables by the columns splitkeys, returning (index::NamedTupe, table::FunctionalTable) for each contiguous block of the index keys.\n\nThe function has a convenience form by(ft, splitkeys...; ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.cancontain",
    "page": "Docstrings",
    "title": "FunctionalTables.cancontain",
    "category": "function",
    "text": "cancontain(T, elt)\n\n\nTest if a collection of element type T can contain a new element elt without any loss of precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.cmp_ordering",
    "page": "Docstrings",
    "title": "FunctionalTables.cmp_ordering",
    "category": "function",
    "text": "cmp_ordering(ordering, a, b)\n\n\nCompare a and b given the ordering.\n\nInternal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.collect_column",
    "page": "Docstrings",
    "title": "FunctionalTables.collect_column",
    "category": "function",
    "text": "collect_column(cfg, itr)\n\n\nCollect results from itr into a sink (using config cfg), then finalize and return the column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.collect_columns",
    "page": "Docstrings",
    "title": "FunctionalTables.collect_columns",
    "category": "function",
    "text": "len, columns, ordering_rule = \n\ncollect_columns(cfg, itr, ordering_rule)\ncollect_columns(cfg, itr, ordering_rule, known_types)\n\n\nCollect results from itr, which are supposed to be NamedTuples with the same names, into sinks (using config cfg), then finalize and return\n\nthe length,\nthe NamedTuple of the columns, and\nthe ordering rule (which is always ::TrustOrdering, by construction).\n\nDetermine the names and types from the first named tuple, using known_types as the narrowest types for the given columns.\n\nSpecial rules for empty iterators\n\nWhen itr is empty, use a known_types will be used to create empty columns, and only the TryOrdering rule will be narrowed to these. Other rule with more column names may cause an error in the callee, which is intentional.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.columns",
    "page": "Docstrings",
    "title": "FunctionalTables.columns",
    "category": "function",
    "text": "columns(ft)\n\n\nReturn the columns in a NamedTuple.\n\nEach column is an iterable, but not necessarily an <: AbstractVector.\n\nnote: Note\nNever mutate columns obtained by this method, as that will violate invariants assumed by the implementation. Use map(collect, columns(ft)) or similar to obtain mutable vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.empty_sinks",
    "page": "Docstrings",
    "title": "FunctionalTables.empty_sinks",
    "category": "function",
    "text": "empty_sinks(cfg, ?)\n\n\nEmpty sinks for a named tuple of elements, using a type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.finalize_sink",
    "page": "Docstrings",
    "title": "FunctionalTables.finalize_sink",
    "category": "function",
    "text": "finalize_sink(?, sink)\n\n\nConvert sink to a column.\n\nsink may share structure with the result and is not supposed to be used for saving any more elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.finalize_sinks",
    "page": "Docstrings",
    "title": "FunctionalTables.finalize_sinks",
    "category": "function",
    "text": "finalize_sinks(cfg, sinks)\n\n\nFinalize a (named) tuple of sinks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.fuse",
    "page": "Docstrings",
    "title": "FunctionalTables.fuse",
    "category": "function",
    "text": "fuse(f, index, tables)\n\n\nPrepend the index as repeated columns to f(index, tables...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.ignoreindex",
    "page": "Docstrings",
    "title": "FunctionalTables.ignoreindex",
    "category": "function",
    "text": "ignoreindex(f)\n\n\nWrap a function returning a closure that ignores the first argument (the index in by mappings).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.is_prefix",
    "page": "Docstrings",
    "title": "FunctionalTables.is_prefix",
    "category": "function",
    "text": "is_prefix(a, b)\n\n\nTest if b starts with a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.key_in",
    "page": "Docstrings",
    "title": "FunctionalTables.key_in",
    "category": "function",
    "text": "key_in(key, keys)\n\n\nCheck if a key is in itr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.make_sink",
    "page": "Docstrings",
    "title": "FunctionalTables.make_sink",
    "category": "function",
    "text": "make_sink(cfg, ?)\n\n\nCreate and return a sink using configuration cfg that stores elements of type T. When T is unkown, use Base.Bottom.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.mask_ordering",
    "page": "Docstrings",
    "title": "FunctionalTables.mask_ordering",
    "category": "function",
    "text": "mask_ordering(ordering, keys)\nmask_ordering(ordering, keys, invert)\n\n\nWhen invert == false, keep the initial part of ordering that has keys in keys. Not having a key in keys invalidates the tail ordering from that point. This is useful for selecting subsets of orderings.\n\nWhen invert == true, having a key in keys invalidates the ordering. This is useful for orderings of merged and dropped columns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.mask_try_ordering",
    "page": "Docstrings",
    "title": "FunctionalTables.mask_try_ordering",
    "category": "function",
    "text": "mask_try_ordering(ordering_rule, keys)\n\n\nFor TryOrdering, return a masked ordering rule that is is defined on keys so that comparisons make sense, otherwise return the original ordering_rule (that will just error for undefined keys).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.merge_default_types",
    "page": "Docstrings",
    "title": "FunctionalTables.merge_default_types",
    "category": "function",
    "text": "merge_default_types(rowtype, defaults)\n\n\nWhenever defaults has a given key, use the corresponding type in rowtype, otherwise Union{}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.narrow",
    "page": "Docstrings",
    "title": "FunctionalTables.narrow",
    "category": "function",
    "text": "narrow(x)\n\n\nConvert the argument to a narrower type if possible without losing precision.\n\n!!! NOTE     This function is not type stable, use only when new container types are determined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.ordering",
    "page": "Docstrings",
    "title": "FunctionalTables.ordering",
    "category": "function",
    "text": "ordering(ft)\n\n\nReturn the ordering of the table, which is a tuple of ColumnOrdering objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.ordering_repr",
    "page": "Docstrings",
    "title": "FunctionalTables.ordering_repr",
    "category": "function",
    "text": "ordering_repr(ordering)\n\n\nA string representation of an ordering, eg for use in show.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.orderkey",
    "page": "Docstrings",
    "title": "FunctionalTables.orderkey",
    "category": "function",
    "text": "Accessor for key. Internal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.picking",
    "page": "Docstrings",
    "title": "FunctionalTables.picking",
    "category": "function",
    "text": "picking(key)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.rename",
    "page": "Docstrings",
    "title": "FunctionalTables.rename",
    "category": "function",
    "text": "rename(ft, changes)\n\n\nRename the columns of a FunctionalTable. The second argument should be a NamedTuple of src = dest pairs, where dest is a symbol.\n\nExample\n\nrename(ft, (α = :a, β = :b)) # rename `α` to `a` and `β` to `b`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.retained_ordering",
    "page": "Docstrings",
    "title": "FunctionalTables.retained_ordering",
    "category": "function",
    "text": "retained_ordering(ordering, a, b)\n\n\nReturn the (initial) part of ordering under which a ≤ b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.split_compatible_ordering",
    "page": "Docstrings",
    "title": "FunctionalTables.split_compatible_ordering",
    "category": "function",
    "text": "split_compatible_ordering(ordering, splitkeys)\n\n\nExtend ordering so that it can be used to split a table with splitkeys.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.split_namedtuple",
    "page": "Docstrings",
    "title": "FunctionalTables.split_namedtuple",
    "category": "function",
    "text": "split_namedtuple(?, nt)\n\n\nSplits a named tuple in two, based on the names in splitter.\n\nReturns two NamedTuples; the first one is ordered as splitter, the second one with the remaining values as in the original argument.\n\njulia> split_namedtuple(NamedTuple{(:a, :c)}, (c = 1, b = 2, a = 3, d = 4))\n((a = 3, c = 1), (b = 2, d = 4))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.split_table",
    "page": "Docstrings",
    "title": "FunctionalTables.split_table",
    "category": "function",
    "text": "split_table(ft, splitkeys)\n\n\nHelper function to set up a SplitTable. Internal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.start_sinks",
    "page": "Docstrings",
    "title": "FunctionalTables.start_sinks",
    "category": "function",
    "text": "start_sinks(cfg, row, known_types)\n\n\nStart sinks using row, using the default known_types when available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.store!_or_reallocate",
    "page": "Docstrings",
    "title": "FunctionalTables.store!_or_reallocate",
    "category": "function",
    "text": "store!_or_reallocate(?, sink, elt)\n\n\nEither store elt in sink (in which case the returned value is ≡ sink), or allocate a new sink that can do this, copy the contents, save elt and return that (then the returned value is ≢ sink).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.store!_or_reallocate_row",
    "page": "Docstrings",
    "title": "FunctionalTables.store!_or_reallocate_row",
    "category": "function",
    "text": "store!_or_reallocate_row(cfg, sinks, elts)\n\n\nBroadcast store!_or_rellocate for a compatible (named) tuple of sinks and elts. Return the (potentially) new sinks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.table_ordering",
    "page": "Docstrings",
    "title": "FunctionalTables.table_ordering",
    "category": "function",
    "text": "table_ordering(column_ordering_specifications)\n\n\nProcess ordering specifications for columns (an iterable or possibly a TableOrdering), return a TableOrdering. Check for uniqueness (but not validity) of keys.\n\nAccepted syntax:\n\n:key, for ordering a column in ascending order,\n:key => reverse, for ordering a column in descending order.\n\nAll functions which accept ordering specifications should use this, but the function itself is not part of the API.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.wrapping",
    "page": "Docstrings",
    "title": "FunctionalTables.wrapping",
    "category": "function",
    "text": "wrapping(key)\n\n\nReturn a callable that wraps its argument in a NamedTuple with a given key.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FunctionalTables.ColumnOrderingFunctionalTables.ColumnOrderingSpecificationFunctionalTables.FunctionalTableFunctionalTables.FunctionalTablesFunctionalTables.KeyFunctionalTables.KeysFunctionalTables.OrderingRuleFunctionalTables.PickingFunctionalTables.RLEVectorFunctionalTables.RepeatRowFunctionalTables.RepeatValueFunctionalTables.SHOWROWSFunctionalTables.SINKCONFIGFunctionalTables.SINKVECTORSFunctionalTables.SinkConfigFunctionalTables.SplitTableFunctionalTables.TableOrderingFunctionalTables.TrustLengthFunctionalTables.TrustOrderingFunctionalTables.TryOrderingFunctionalTables.VerifyOrderingFunctionalTables.WrappingFunctionalTables._cmp_table_orderingFunctionalTables._retained_table_orderingFunctionalTables._showcolcontentsFunctionalTables.aggregatorFunctionalTables.append1FunctionalTables.byFunctionalTables.cancontainFunctionalTables.cmp_orderingFunctionalTables.collect_columnFunctionalTables.collect_column!FunctionalTables.collect_columnsFunctionalTables.collect_columns!FunctionalTables.columnsFunctionalTables.empty_sinksFunctionalTables.evalFunctionalTables.finalize_sinkFunctionalTables.finalize_sinksFunctionalTables.fuseFunctionalTables.ignoreindexFunctionalTables.includeFunctionalTables.is_prefixFunctionalTables.isless_orderingFunctionalTables.key_inFunctionalTables.key_issubsetFunctionalTables.key_setdiffFunctionalTables.make_sinkFunctionalTables.mask_orderingFunctionalTables.mask_try_orderingFunctionalTables.merge_default_typesFunctionalTables.narrowFunctionalTables.orderingFunctionalTables.ordering_reprFunctionalTables.orderkeyFunctionalTables.orderrevFunctionalTables.pickingFunctionalTables.renameFunctionalTables.retained_orderingFunctionalTables.sort_in_memoryFunctionalTables.split_compatible_orderingFunctionalTables.split_namedtupleFunctionalTables.split_tableFunctionalTables.start_sinksFunctionalTables.store!_or_reallocateFunctionalTables.store!_or_reallocate_rowFunctionalTables.table_orderingFunctionalTables.use_rleFunctionalTables.wrapping"
},

]}
