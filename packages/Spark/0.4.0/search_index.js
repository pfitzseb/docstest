var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Introduction",
    "title": "Introduction",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Introduction",
    "title": "Overview",
    "category": "section",
    "text": "Spark.jl is the package that allows the execution of Julia programs on the Apache Spark™ platform. It supports running pure Julia scripts on Julia data structures, while utilising the data and code distribution capabalities of Apache Spark. It supports multiple cluster types (in client mode), and can be consider as an analogue to PySpark or RSpark within the Julia ecosystem. It supports running within on-premise installations, as well as hosted instance such as Amazon EMR and Azure HDInsight. "
},

{
    "location": "#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "Spark.jl requires at least Java 7 and Maven to be installed and available in PATH. Pkg.add(\"Spark.jl\")To link against a specific version of Spark, also run:ENV[\"BUILD_SPARK_VERSION\"] = \"2.2.1\"   # version you need\nPkg.build(\"Spark\")"
},

{
    "location": "#Basic-Usage-1",
    "page": "Introduction",
    "title": "Basic Usage",
    "category": "section",
    "text": "The Spark.init() method must to called at the beginning of a session to initialise the JVM. Subsequently a SparkContext is created to serve as the primary reference to a Spark instance.  using Spark\nSpark.init()\nsc = SparkContext(master=\"local\")"
},

{
    "location": "#Cluster-Tyes-1",
    "page": "Introduction",
    "title": "Cluster Tyes",
    "category": "section",
    "text": "This package supports multiple cluster types (in client mode): local, standalone, mesos and yarn. The location of the cluster (in case of mesos or standalone) or the cluster type (in case of local or yarn) must be passed as a parameter master when creating a Spark context. For YARN based clusters, the cluster parameters are picked up from spark-defaults.conf, which must be accessible via a SPARK_HOME environment variable. "
},

{
    "location": "#RDD-Interface-1",
    "page": "Introduction",
    "title": "RDD Interface",
    "category": "section",
    "text": "The primary interface exposed vis this package is the Spark RDD object. RDD\'s may be created from any Julia iterator via the parallelize method. Alternatively, the text_file method may be used to read data from any Spark supported filesystem, such as HDFSJulia functions are passed as parameters to the various Spark operations. These functions must either be anonymous functions defined inline within the spark call, or they must be available on all nodes. Functions may be made available by installing Julia packages on all nodes, or via the @attach macro that will make any julia script file available on all the workder nodes. "
},

{
    "location": "#Example:-Count-lines-in-file-1",
    "page": "Introduction",
    "title": "Example: Count lines in file",
    "category": "section",
    "text": "sc = SparkContext(master=\"local\")\npath = \"file:///var/log/syslog\"\ntxt = text_file(sc, path)\ncount(txt)\nclose(sc)"
},

{
    "location": "#Example:-Map-/-Reduce-on-Standalone-master-1",
    "page": "Introduction",
    "title": "Example: Map / Reduce on Standalone master",
    "category": "section",
    "text": "sc = SparkContext(master=\"spark://spark-standalone:7077\", appname=\"Say \'Hello!\'\")\npath = \"file:///var/log/syslog\"\ntxt = text_file(sc, path)\nrdd = map(txt, line -> length(split(line)))\nreduce(rdd, +)\nclose(sc)"
},

{
    "location": "#Example:-Map-partitions-on-Mesos-and-HDFS-1",
    "page": "Introduction",
    "title": "Example: Map partitions on Mesos and HDFS",
    "category": "section",
    "text": "sc = SparkContext(master=\"mesos://mesos-master:5050\")\npath = \"hdfs://namenode:8020/user/hdfs/test.log\"\ntxt = text_file(sc, path)\nrdd = map_partitions(txt, it -> filter(line -> contains(line, \"a\"), it))\ncollect(rdd)\nclose(sc)"
},

{
    "location": "#SQL-Interface-1",
    "page": "Introduction",
    "title": "SQL Interface",
    "category": "section",
    "text": "A recent addition to this package is a DataFrame+SQL interface to Spark. In the examples below, it is assumed that you have a file people.json with content like this:{\"name\": \"Alice\", \"age\": 27}\n{\"name\": \"Bob\", \"age\": 32}"
},

{
    "location": "#Example:-Read-dataframe-from-JSON-and-collect-to-a-driver-1",
    "page": "Introduction",
    "title": "Example: Read dataframe from JSON and collect to a driver",
    "category": "section",
    "text": "spark = SparkSession()\ndf = read_json(spark, \"/path/to/people.json\")\ncollect(df)"
},

{
    "location": "#Example:-Read-JSON-and-write-Parquet-1",
    "page": "Introduction",
    "title": "Example: Read JSON and write Parquet",
    "category": "section",
    "text": "spark = SparkSession()\ndf = read_json(spark, \"/path/to/people.json\")\nwrite_parquet(df, \"/path/to/people.parquet\")"
},

{
    "location": "#Current-Limitations-1",
    "page": "Introduction",
    "title": "Current Limitations",
    "category": "section",
    "text": "Jobs can be submitted from Julia process attached to the cluster in client deploy mode. Cluster mode is not fully supported, and it is uncertain if it is useful in the Julia context. \nSince records are serialised between Java and Julia at the edges, the maximum size of a single row in an RDD is 2GB, due to Java array indices being limited to 32 bits. "
},

{
    "location": "#Trademarks-1",
    "page": "Introduction",
    "title": "Trademarks",
    "category": "section",
    "text": "Apache®, Apache Spark and Spark are registered trademarks, or trademarks of the Apache Software Foundation in the United States and/or other countries."
},

{
    "location": "api/#Spark.JavaRDD",
    "page": "API Reference",
    "title": "Spark.JavaRDD",
    "category": "type",
    "text": "Pure wrapper around JavaRDD\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.SparkContext",
    "page": "API Reference",
    "title": "Spark.SparkContext",
    "category": "type",
    "text": "Wrapper around JavaSparkContext\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.SparkContext-Tuple{}",
    "page": "API Reference",
    "title": "Spark.SparkContext",
    "category": "method",
    "text": "Params:\n\nmaster - address of application master. Currently only local and standalone modes          are supported. Default is \'local\'\nappname - name of application\n\n\n\n\n\n"
},

{
    "location": "api/#Base.close-Tuple{SparkContext}",
    "page": "API Reference",
    "title": "Base.close",
    "category": "method",
    "text": "Close SparkContext\n\n\n\n\n\n"
},

{
    "location": "api/#Base.collect-Tuple{Spark.PairRDD}",
    "page": "API Reference",
    "title": "Base.collect",
    "category": "method",
    "text": "Collect all elements of rdd on a driver machine\n\n\n\n\n\n"
},

{
    "location": "api/#Base.collect-Tuple{Spark.SingleRDD}",
    "page": "API Reference",
    "title": "Base.collect",
    "category": "method",
    "text": "Collect all elements of rdd on a driver machine\n\n\n\n\n\n"
},

{
    "location": "api/#Base.count-Tuple{RDD}",
    "page": "API Reference",
    "title": "Base.count",
    "category": "method",
    "text": "Count number of elements in this RDD\n\n\n\n\n\n"
},

{
    "location": "api/#Base.map-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Base.map",
    "category": "method",
    "text": "Apply function f to each element of rdd\n\n\n\n\n\n"
},

{
    "location": "api/#Base.reduce-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Base.reduce",
    "category": "method",
    "text": "Reduce elements of rdd using specified function f\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.cache-Tuple{Spark.PairRDD}",
    "page": "API Reference",
    "title": "Spark.cache",
    "category": "method",
    "text": "Persist this RDD with the default storage level (MEMORY_ONLY)\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.cache-Tuple{Spark.SingleRDD}",
    "page": "API Reference",
    "title": "Spark.cache",
    "category": "method",
    "text": "Persist this RDD with the default storage level (MEMORY_ONLY)\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.cartesian-Tuple{Spark.SingleRDD,Spark.SingleRDD}",
    "page": "API Reference",
    "title": "Spark.cartesian",
    "category": "method",
    "text": "Create a pair RDD with every combination of the values of rdd1 and rdd2\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.coalesce-Union{Tuple{T}, Tuple{T,Integer}} where T<:RDD",
    "page": "API Reference",
    "title": "Spark.coalesce",
    "category": "method",
    "text": "Return a new RDD that is reduced into num_partitions partitions.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.flat_map-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.flat_map",
    "category": "method",
    "text": "Similar to map, but each input item can be mapped to 0 or more output items (so f should return an iterator rather than a single item)\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.flat_map_pair-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.flat_map_pair",
    "category": "method",
    "text": "Similar to map, but each input item can be mapped to 0 or more output items (so f should return an iterator of pairs rather than a single item)\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.group_by_key-Tuple{Spark.PairRDD}",
    "page": "API Reference",
    "title": "Spark.group_by_key",
    "category": "method",
    "text": "When called on a dataset of (K, V) pairs, returns a dataset of (K, [V]) pairs.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.id-Tuple{RDD}",
    "page": "API Reference",
    "title": "Spark.id",
    "category": "method",
    "text": "Return the id of the rdd\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.map_pair-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.map_pair",
    "category": "method",
    "text": "Apply function f to each element of rdd\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.map_partitions-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.map_partitions",
    "category": "method",
    "text": "Apply function f to each partition of rdd. f should be of type (iterator) -> iterator\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.map_partitions_pair-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.map_partitions_pair",
    "category": "method",
    "text": "Apply function f to each partition of rdd. f should be of type (iterator) -> iterator\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.map_partitions_with_index-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.map_partitions_with_index",
    "category": "method",
    "text": "Apply function f to each partition of rdd. f should be of type (index, iterator) -> iterator\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.num_partitions-Tuple{Union{PipelinedPairRDD, PipelinedRDD}}",
    "page": "API Reference",
    "title": "Spark.num_partitions",
    "category": "method",
    "text": "Returns the number of partitions of this RDD.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.pipe-Tuple{RDD,String}",
    "page": "API Reference",
    "title": "Spark.pipe",
    "category": "method",
    "text": "Return an RDD created by piping elements to a forked external process.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.reduce_by_key-Tuple{Spark.PairRDD,Function}",
    "page": "API Reference",
    "title": "Spark.reduce_by_key",
    "category": "method",
    "text": "When called on a dataset of (K, V) pairs, returns a dataset of (K, V) pairs where the values for each key are aggregated using the given reduce function func, which must be of type (V,V) => V.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.repartition-Union{Tuple{T}, Tuple{T,Integer}} where T<:RDD",
    "page": "API Reference",
    "title": "Spark.repartition",
    "category": "method",
    "text": "Return a new RDD that has exactly num_partitions partitions.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.share_variable-Tuple{SparkContext,Symbol,Any}",
    "page": "API Reference",
    "title": "Spark.share_variable",
    "category": "method",
    "text": "Makes the value of data available on workers as symbol name\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.text_file-Tuple{SparkContext,AbstractString}",
    "page": "API Reference",
    "title": "Spark.text_file",
    "category": "method",
    "text": "Create RDD from a text file\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.JavaPairRDD",
    "page": "API Reference",
    "title": "Spark.JavaPairRDD",
    "category": "type",
    "text": "Pure wrapper around JavaPairRDD\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.PipelinedPairRDD",
    "page": "API Reference",
    "title": "Spark.PipelinedPairRDD",
    "category": "type",
    "text": "Julia type to handle Pair RDDs. Can handle pipelining of operations to reduce interprocess IO.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.PipelinedPairRDD-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.PipelinedPairRDD",
    "category": "method",
    "text": "Params:\n\nparentrdd - parent RDD\nfunc - function of type (index, iterator) -> iterator to apply to each partition\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.PipelinedRDD",
    "page": "API Reference",
    "title": "Spark.PipelinedRDD",
    "category": "type",
    "text": "Julia type to handle RDDs. Can handle pipelining of operations to reduce interprocess IO.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.PipelinedRDD-Tuple{RDD,Function}",
    "page": "API Reference",
    "title": "Spark.PipelinedRDD",
    "category": "method",
    "text": "Params:\n\nparentrdd - parent RDD\nfunc - function of type (index, iterator) -> iterator to apply to each partition\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.add_file-Tuple{SparkContext,AbstractString}",
    "page": "API Reference",
    "title": "Spark.add_file",
    "category": "method",
    "text": "Add file to SparkContext. This file will be downloaded to each executor\'s work directory\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.add_jar-Tuple{SparkContext,AbstractString}",
    "page": "API Reference",
    "title": "Spark.add_jar",
    "category": "method",
    "text": "Add JAR file to SparkContext. Classes from this JAR will then be available to all tasks\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.chain_function-Tuple{Any,Any}",
    "page": "API Reference",
    "title": "Spark.chain_function",
    "category": "method",
    "text": "chain 2 partion functions together \n\n\n\n\n\n"
},

{
    "location": "api/#Spark.collect_internal-Tuple{RDD,Any,Any}",
    "page": "API Reference",
    "title": "Spark.collect_internal",
    "category": "method",
    "text": "Collects the RDD to the Julia process, by serialising all values via a byte array\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.collect_internal_itr-Tuple{RDD,Any,Any}",
    "page": "API Reference",
    "title": "Spark.collect_internal_itr",
    "category": "method",
    "text": "Collects the RDD to the Julia process, via an Julia iterator that fetches each row at a time. This prevents creation of a byte array containing all rows at a time.\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.collect_itr-Tuple{Spark.PairRDD}",
    "page": "API Reference",
    "title": "Spark.collect_itr",
    "category": "method",
    "text": "Collect all elements of rdd on a driver machine\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.collect_itr-Tuple{Spark.SingleRDD}",
    "page": "API Reference",
    "title": "Spark.collect_itr",
    "category": "method",
    "text": "Collect all elements of rdd on a driver machine\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.context-Tuple{RDD}",
    "page": "API Reference",
    "title": "Spark.context",
    "category": "method",
    "text": "Get SparkContext of this RDD\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.create_map_function-Tuple{Function}",
    "page": "API Reference",
    "title": "Spark.create_map_function",
    "category": "method",
    "text": "creates a function that operates on a partition from an element by element map function\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.deserialized-Tuple{Array{UInt8,1}}",
    "page": "API Reference",
    "title": "Spark.deserialized",
    "category": "method",
    "text": "Return object deserialized from array of bytes\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.readobj-Tuple{IO}",
    "page": "API Reference",
    "title": "Spark.readobj",
    "category": "method",
    "text": "Read data object from a ioet. Returns code and byte array:\n\nif code is negative, it\'s considered as a special command code\nif code is positive, it\'s considered as array length\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.serialized-Tuple{Any}",
    "page": "API Reference",
    "title": "Spark.serialized",
    "category": "method",
    "text": "Return serialized object as an array of bytes\n\n\n\n\n\n"
},

{
    "location": "api/#Spark.writeobj-Tuple{IO,Any}",
    "page": "API Reference",
    "title": "Spark.writeobj",
    "category": "method",
    "text": "Write object to stream\n\n\n\n\n\n"
},

{
    "location": "api/#",
    "page": "API Reference",
    "title": "API Reference",
    "category": "page",
    "text": "Modules = [Spark]\nOrder   = [:type, :function]"
},

]}
