var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Pandas.jl-1",
    "page": "Readme",
    "title": "Pandas.jl",
    "category": "section",
    "text": "(Image: Pandas.jl logo)(Image: Travis status)This package provides a Julia interface to the excellent Pandas package. It sticks closely to the Pandas API. One exception is that integer-based indexing is automatically converted from Python\'s 0-based indexing to Julia\'s 1-based indexing."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You must have Pandas installed. Usually you can do that on the command line by typingsudo pip install pandasIt also comes with the Anaconda and Enthought Python distributions.Then in Julia, typePkg.add(\"Pandas\")\nusing PandasNo-hassle installation is also available via Docker:docker run -it malmaud/julia_pandas"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "In general, if df is a Pandas object (such as a dataframe or series), then the Python command dfx(y w=z) becomes x(df y w=z) in Julia. dflocabc becomes loc(df)abc (same for iloc and ix). Example:>> using Pandas\n>> df = DataFrame(Dict(:age=>[27, 29, 27], :name=>[\"James\", \"Jill\", \"Jake\"]))\n   age   name\n0   27  James\n1   29   Jill\n2   27   Jake\n\n[3 rows x 2 columns]\n>> describe(df)\n             age\ncount   3.000000\nmean   27.666667\nstd     1.154701\nmin    27.000000\n25%    27.000000\n50%    27.000000\n75%    28.000000\nmax    29.000000\n\n[8 rows x 1 columns]\n\ndf[:age]\n0    27\n1    29\n2    27\nName: age, dtype: int64\n\n>> df2 = DataFrame(Dict(:income=>[45, 101, 87]), index=[\"Jake\", \"James\", \"Jill\"])\n>> df3 = merge(df, df2, left_on=\"name\", right_index=true)\n   age   name  income\n0   27  James     101\n1   29   Jill      87\n2   27   Jake      45\n\n[3 rows x 3 columns]\n\n>> iloc(df3)[1:2, 2:3]\n    name  income\n0  James     101\n1   Jill      87\n\n[2 rows x 2 columns]\n\n>> mean(groupby(df3, \"age\")) #Or groupby(df, \"age3\") |> mean\n     income\nage\n27       73\n29       87\n\n[2 rows x 1 columns]\n\n>> query(df3, :(income>85)) # or query(df3, \"income>85\")\n   age   name  income\n0   27  James     101\n1   29   Jill      87\n\n[2 rows x 3 columns]\n\n>> Array(df3)\n3x3 Array{Any,2}:\n 27  \"James\"  101\n 29  \"Jill\"    87\n 27  \"Jake\"    45\n\n >> plot(df3)"
},

{
    "location": "#Input/Output-1",
    "page": "Readme",
    "title": "Input/Output",
    "category": "section",
    "text": "Example:df = read_csv(\"my_csv_file.csv\") # Read in a CSV file as a dataframe\nto_json(df, \"my_json_file.json\") # Save a dataframe to disk in JSON format"
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "Most Pandas operations on medium to large dataframes are very fast, since the overhead of calling into the Python API is small compared to the time spent inside Pandas\' highly efficient C implementation.Setting and getting individual elements of a dataframe or series is slow however, since it requires a round-trip of communication with Python for each operation. Instead, use the values method to get a version of a series or homogeneous dataframe that requires no copying and is as fast to access and write to as a Julia native array. Example:>> x_series = Series(randn(10000))\n>> @time x[1]\nelapsed time: 0.000121945 seconds (2644 bytes allocated)\n>> x_values = values(x_series)\n>> @time x_values[1]\nelapsed time: 2.041e-6 seconds (64 bytes allocated)\n>> x_native = randn(10000)\n>> @time x[1]\nelapsed time: 2.689e-6 seconds (64 bytes allocated)Changes to the values(...) array propogate back to the underlying series/dataframe:>> iloc(x_series)[1]\n-0.38390854447454037\n>> x_values[1] = 10\n>> iloc(x_series)[1]\n10"
},

{
    "location": "#Caveats-1",
    "page": "Readme",
    "title": "Caveats",
    "category": "section",
    "text": "Panels-related functions are still unwrapped, as well as a few other obscure functions. Note that even if a function is not wrapped explicitly, it can still be called using various methods from PyCall."
},

{
    "location": "autodocs/#Pandas.pandas_wrap",
    "page": "Docstrings",
    "title": "Pandas.pandas_wrap",
    "category": "function",
    "text": "pandas_wrap(pyo::PyObject)\n\nWrap an instance of a Pandas python class in the Julia type which corresponds to that class.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pandas.pyattr_set",
    "page": "Docstrings",
    "title": "Pandas.pyattr_set",
    "category": "function",
    "text": "pyattr_set(types, methods...)\n\nFor each Julia type T<:PandasWrapped in types and each method m in methods, define a new function m(t::T, args...) that delegates to the underlying pyobject wrapped by t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Pandas.@>Pandas.@pyasvecPandas.@pyattrPandas.@pytypePandas.@queryPandas.DataFramePandas.GroupByPandas.IlocPandas.IndexPandas.IxPandas.LocPandas.MultiIndexPandas.PandasPandas.PandasWrappedPandas.RollingPandas.SeriesPandas.SeriesGroupByPandas.TPandas.__init__Pandas._construct_pandas_from_iterabletablePandas.absPandas.aggPandas.aggregatePandas.alignPandas.anyPandas.appPandas.applyPandas.argsortPandas.asfreqPandas.asofPandas.bdate_rangePandas.boxplotPandas.clipPandas.clip_lowerPandas.clip_upperPandas.columnsPandas.concatPandas.corrPandas.corrwithPandas.countPandas.covPandas.crosstabPandas.cummaxPandas.cumminPandas.cumprodPandas.cumsumPandas.cutPandas.date_rangePandas.deletecolumn!Pandas.delevelPandas.describePandas.diffPandas.dropPandas.drop_duplicatesPandas.dropnaPandas.duplicatedPandas.evalPandas.ewmaPandas.ewmcorrPandas.ewmcovPandas.ewmstdPandas.ewmvarPandas.expanding_applyPandas.expanding_corrPandas.expanding_corr_pairwisePandas.expanding_countPandas.expanding_covPandas.expanding_kurtPandas.expanding_maxPandas.expanding_meanPandas.expanding_medianPandas.expanding_minPandas.expanding_quantilePandas.expanding_skewPandas.expanding_stdPandas.expanding_sumPandas.expanding_varPandas.fillnaPandas.filterPandas.firstPandas.first_valid_indexPandas.fix_argPandas.from_arraysPandas.from_tuplesPandas.get_dummiesPandas.get_groupPandas.groupbyPandas.groupsPandas.has_named_attrPandas.headPandas.histPandas.idxmaxPandas.idxminPandas.ilocPandas.includePandas.indexPandas.index!Pandas.indicesPandas.isinPandas.joinPandas.kurtPandas.lastPandas.last_valid_indexPandas.locPandas.maxPandas.meanPandas.medianPandas.meltPandas.minPandas.modePandas.namePandas.name!Pandas.named_indexPandas.ndimPandas.npPandas.ohlcPandas.orderPandas.pandas_rawPandas.pandas_wrapPandas.pct_changePandas.period_rangePandas.pivotPandas.pivot_tablePandas.plotPandas.pre_type_mapPandas.pyattrPandas.pyattr_setPandas.qcutPandas.quantilePandas.queryPandas.quotPandas.rankPandas.read_csvPandas.read_excelPandas.read_htmlPandas.read_jsonPandas.read_picklePandas.read_sqlPandas.read_sql_queryPandas.read_sql_tablePandas.read_tablePandas.reindexPandas.reindex_axisPandas.reindex_likePandas.renamePandas.reodrer_levelsPandas.reorder_levelsPandas.replacePandas.resamplePandas.reset_indexPandas.rollingPandas.rolling_applyPandas.rolling_corrPandas.rolling_corr_pairwisePandas.rolling_countPandas.rolling_covPandas.rolling_kurtPandas.rolling_maxPandas.rolling_meanPandas.rolling_medianPandas.rolling_minPandas.rolling_quantilePandas.rolling_skewPandas.rolling_stdPandas.rolling_sumPandas.rolling_varPandas.rolling_windowPandas.samplePandas.savePandas.selectPandas.set_indexPandas.setcolumns!Pandas.setname!Pandas.shiftPandas.should_offsetPandas.sizPandas.skewPandas.sortPandas.sort_indexPandas.sortlevelPandas.stackPandas.statsPandas.stdPandas.sumPandas.swaplevelPandas.tailPandas.takePandas.to_clipboardPandas.to_csvPandas.to_datetimePandas.to_densePandas.to_dictPandas.to_excelPandas.to_gbqPandas.to_hdfPandas.to_htmlPandas.to_jsonPandas.to_latexPandas.to_msgpackPandas.to_numericPandas.to_panelPandas.to_picklePandas.to_recordsPandas.to_sparsePandas.to_sqlPandas.to_stringPandas.to_timedeltaPandas.transformPandas.truncatePandas.type_mapPandas.tz_conertPandas.tz_localizePandas.unstackPandas.validatePandas.valuesPandas.varPandas.weekdayPandas.xs"
},

]}
