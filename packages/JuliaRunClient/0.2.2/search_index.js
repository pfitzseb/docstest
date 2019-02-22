var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JuliaRunClient-1",
    "page": "Readme",
    "title": "JuliaRunClient",
    "category": "section",
    "text": "A client library to invoke with JuliaRun HTTP APIs."
},

{
    "location": "#APIs-1",
    "page": "Readme",
    "title": "APIs",
    "category": "section",
    "text": ""
},

{
    "location": "#The-API-Context-1",
    "page": "Readme",
    "title": "The API Context",
    "category": "section",
    "text": "All JuliaRun APIs require a context to operate.  A JuliaRun client context consists of:URL of the JuliaRun remote server\nan authentication token\nnamespace to operate inIt can be created simply as:ctx = Context()Default values of all parameters are set to match those inside a JuliaRun cluster.connects to a service endpoint at \"juliarunremote-svc.juliarun\"\nreads the namespace from the default secret\npresents the namespace service token (also read from the default secret) for authenticationPass appropriate values for each when calling from outside the cluster.Apart from the context, some APIs also need a job to work with. A job in JuliaRunClient is an instance of one of the Job types created by passing the job name. The other required and optional parameters of a job type are needed only need to be passed to the job creation API."
},

{
    "location": "#APIs-2",
    "page": "Readme",
    "title": "APIs",
    "category": "section",
    "text": ""
},

{
    "location": "#getSystemStatus(ctx)-1",
    "page": "Readme",
    "title": "getSystemStatus(ctx)",
    "category": "section",
    "text": "Verifies if JuliaRun is running and is connected to a compute cluster. Returns:boolean: true/false indicating success/failure"
},

{
    "location": "#listJobs(ctx)-1",
    "page": "Readme",
    "title": "listJobs(ctx)",
    "category": "section",
    "text": "List all submitted jobs.Returns:dictionary: of the form {\"jobname\": { \"type\": \"JuliaBatch\" }...}"
},

{
    "location": "#getAllJobInfo(ctx)-1",
    "page": "Readme",
    "title": "getAllJobInfo(ctx)",
    "category": "section",
    "text": "List all submitted jobs.Returns:dictionary: of the form {\"jobname\": { \"type\": \"JuliaBatch\", \"status\": [], \"scale\": [], \"endpoint\": [] }...}"
},

{
    "location": "#self()-1",
    "page": "Readme",
    "title": "self()",
    "category": "section",
    "text": "Returns the current Job."
},

{
    "location": "#getJobStatus(ctx,-job)-1",
    "page": "Readme",
    "title": "getJobStatus(ctx, job)",
    "category": "section",
    "text": "Fetch current status of a Job.Parameters:job: A JRunClientJob of appropriate typeReturns tuple/array with:boolean: whether the job completed\ninteger: for a parallel job, number of workers that completed successfully\ninteger: for a parallel job, number of workers started\nboolean: whether the job has been created (vs. scheduled)\nboolean: whether this is a notebook (legacy, likely to be removed in future)"
},

{
    "location": "#getJobScale(ctx,-job)-1",
    "page": "Readme",
    "title": "getJobScale(ctx, job)",
    "category": "section",
    "text": "Get the current scale of a job.Parameters:job: A JRunClientJob of appropriate typeReturns tuple/array with:integer: number of workers running\ninteger: number of workers requested"
},

{
    "location": "#initParallel()-1",
    "page": "Readme",
    "title": "initParallel()",
    "category": "section",
    "text": "Initialize the current job to accept parallel workers.Returns a reference to the Julia cluster manager instance."
},

{
    "location": "#setJobScale(ctx,-job,-parallelism)-1",
    "page": "Readme",
    "title": "setJobScale(ctx, job, parallelism)",
    "category": "section",
    "text": "Request to scale the job up or down to the level of parallelism requested.Parameters:job: A JRunClientJob of appropriate type\nparallelism: number of workers to scale toReturns:boolean: true/false indicating success/failure"
},

{
    "location": "#waitForWorkers(min_workers)-1",
    "page": "Readme",
    "title": "waitForWorkers(min_workers)",
    "category": "section",
    "text": "Wait for a certain number of workers to join."
},

{
    "location": "#getJobEndpoint(ctx,-job)-1",
    "page": "Readme",
    "title": "getJobEndpoint(ctx, job)",
    "category": "section",
    "text": "Get the endpoint exposed by the job/service.Parameters:job: A JRunClientJob of appropriate typeReturns tuple/array of endpoints as URLs or IP and ports"
},

{
    "location": "#deleteJob(ctx,-job;-forcefalse)-1",
    "page": "Readme",
    "title": "deleteJob(ctx, job; force=false)",
    "category": "section",
    "text": "Removes the job entry from the queue.Parameters:job: A JRunClientJob of appropriate type\nforce: whether to remove an incomplete job (optional, default: false)Returns:boolean: true/false indicating success/failure"
},

{
    "location": "#tailJob(ctx,-job;-stream,-count)-1",
    "page": "Readme",
    "title": "tailJob(ctx, job; stream, count)",
    "category": "section",
    "text": "Tail logs from the job.Parameters:job: A JRunClientJob of appropriate type\nstream: the stream to read from (\"stdout\"/\"stdin\"), all streams are read if not specified.\ncount: number of log entries to return (50 by default)Returns a string of log entries separated by new line."
},

{
    "location": "#submitJob(ctx,-job;-kwargs...)-1",
    "page": "Readme",
    "title": "submitJob(ctx, job; kwargs...)",
    "category": "section",
    "text": "Submit a job definition to execute on the cluster.Parameters:job: A JRunClientJob of appropriate type\njob specific parameters, with names as documented for the JobType constructorReturns nothing."
},

{
    "location": "autodocs/#JuliaRunClient.Context",
    "page": "Docstrings",
    "title": "JuliaRunClient.Context",
    "category": "type",
    "text": "A JuliaRun client context.\n\nConsists of:\n\nURL of the JuliaRun remote server\nan authentication token\nnamespace to operate in\n\nDefault values of all parameters are set to match those inside a JuliaRun cluster.\n\nconnects to a service endpoint at \"juliarunremote-svc.juliarun\"\nreads the namespace from the default secret\npresents the namespace service token (also read from the default secret) for authentication\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.Generic",
    "page": "Docstrings",
    "title": "JuliaRunClient.Generic",
    "category": "type",
    "text": "Generic job to run any command in any docker image.\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\nimage: image to run\nrun_volume: a persistent volume to use as the master volume\n\nOptional parameters:\n\ncommand: command in the docker to execute (Docker entrypoint by default)\nargs: arguments to the command as Vector{String} (none by default)\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\ncpu: CPU share to allocate (default: 0.1 core, burstable to 1 core)\nmemory: RAM to allocate (default: 512Mi to 1Gi)\nenvvars: additional environment variables to set\nports: network ports to expose as a Dict{String,Tuple{Int,Int}} of name to container port and service port map (default: none)\nexternal: whether network ports should be exposed to external network (default: false)\nnworkers: number of containers to start\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.JRunClientJob",
    "page": "Docstrings",
    "title": "JuliaRunClient.JRunClientJob",
    "category": "type",
    "text": "Types of Jobs:\n\nJuliaParBatch\nJuliaParBatchWorkers\nNotebook\nJuliaBatch\nPkgBuilder\nWebserver\nMessageQ\nGeneric\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.JuliaBatch",
    "page": "Docstrings",
    "title": "JuliaRunClient.JuliaBatch",
    "category": "type",
    "text": "A Julia Batch Job.\n\nRuns in a single allocation/container restricted to the specified amount of CPUs and memory. The Julia process started in the batch job is allowed to start other worker processes or threads, all within the specified limits. The upper bound of CPUs/memory is determined by the largest cluster node.\n\nScenarios:\n\nnon-parallel\nmulti-threaded parallelism\nmulti-process shared memory parallelism\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\nstart_script: a Julia script to start the master node with\nrun_volume: a persistent volume to use as the master volume\n\nOptional parameters:\n\npkgbundle: a package bundle to set at LOADPATH (none by default)\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\nports: network ports to expose as a Dict{String,Tuple{Int,Int}} of name to container port and service port map (default: nothing)\nexternal: whether network ports should be exposed to external network (default: false)\nimage: the docker image to run (default: julia)\ncpu: CPU share to allocate (default: minimum 0.1 of a core, burstable to 1 core)\ngpu: GPUs to allocate (default: 0)\nmemory: RAM to allocate (default: 512 MiB to 1Gi)\nshell: the script to use for startup shell (default: master.sh)\nenvvars: additional environment variables to set\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.JuliaParBatch",
    "page": "Docstrings",
    "title": "JuliaRunClient.JuliaParBatch",
    "category": "type",
    "text": "A Julia Master-Slave Parallel Batch Job.\n\nA designated master process and an array of worker processes, each of which  runs in a separate allocation/container. All worker processes have a uniform resource allocation. The master process can have a different allocation.\n\nThe job as a whole can use all available CPU/memory in a cluster (within practical limitations imposed networking and such). The upper bound for each master/worker process is determined by the largest node in the cluster.\n\nThe master and worker processes are initialized for Julia parallel constructs. The number of workers can be checked and manipulated with the scale/scale! APIs. The number of worker processes actually running depends on the available cluster resources and may be different from the requested scale. The job is  deemed running when the master process starts, and JuliaRun attempts to match number of worker processes to the requested scale continuously. The master process may check the number of actual workers with the nworkers API and wait for a minimum number of workers if needed by it.\n\nScenario:\n\nmulti-process distributed memory parallelism\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\nstart_script: a Julia script to start the master node with\nrun_volume: a persistent volume to use as the master volume\n\nOptional parameters:\n\npkgbundle: a package bundle to set at LOADPATH (none by default)\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\nports: network ports to expose from the master process as a Dict{String,Tuple{Int,Int}} of name to container port and service port map (default: nothing)\nexternal: whether network ports should be exposed to external network (default: false)\nimage: the docker image to run (default: julia)\ncpu: CPU share to allocate to master process (default: 0.1 of a core, burstable to 1 core)\ngpu: GPUs to allocate (default: 0)\nmemory: RAM to allocate to master process (default: 512 Mi to 1 Gi)\nshell: the script to use for master shell (default: master.sh)\nenvvars: additional environment variables to set for the master\nnworkers: number of worker processes to start (0 by default, can be scaled later)\nworker_cpu: CPU share to allocate to a worker process (default: 0.1 of a core, burstable to 1 core)\nworker_gpu: GPUs to allocate to a worker process(default: 0)\nworker_memory: RAM to allocate to a worker process (default: 512 Mi to 1 Gi)\nworker_shell: the script to use for a worker shell (default: master.sh)\nworker_envvars: additional environment variables to set for the worker\nworkerstartscript: a Julia script to start the worker node with (default: worker.sh)\nrestart: should workers be restarted (RestartAlways by default, can also be RestartOnFailure or Never)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.JuliaParBatchWorkers",
    "page": "Docstrings",
    "title": "JuliaRunClient.JuliaParBatchWorkers",
    "category": "type",
    "text": "A Julia Embarrassingly Parallel Batch Job.\n\nAn array of batch jobs that can be scaled as a single unit. Each unit in the job array can be likened to a JuliaBatch job. Since there is no interlinking between the units, this can be scaled faster and to much higher levels.\n\nAs a whole, the job can use all available CPU/memory in the cluster, but the upper bound for each worker process is determined by the largest node in the cluster.\n\nScenarios:\n\nwork queues\ndistributed memory parallelism\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\nstart_script: a Julia script to start each node with\nrun_volume: a persistent volume to use as the work volume\n\nOptional parameters:\n\npkgbundle: a package bundle to set at LOADPATH (none by default)\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\nports: network ports to expose as a Dict{String,Tuple{Int,Int}} of name to container port and service port map (default: nothing)\nexternal: whether network ports should be exposed to external network (default: false)\nimage: the docker image to run (default: julia)\ncpu: CPU share to allocate to each process (default: 0.1 of a core, burstable to 1 core)\ngpu: GPUs to allocate to each process (default: 0)\nmemory: RAM to allocate to each process (default: 512 Mi to 1Gi)\nshell: the script to use for process shell (default: worker.sh)\nenvvars: additional environment variables to set\nnworkers: number of worker processes to start (0 by default, can be scaled later)\nrestart: should workers be restarted (RestartAlways by default, can also be RestartOnFailure or Never)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.MessageQ",
    "page": "Docstrings",
    "title": "JuliaRunClient.MessageQ",
    "category": "type",
    "text": "Message Queue that can be used for communication between processes within or across jobs. Enables complex routing/broadcast of messages. Uses RabbitMQ as the message queue provider.\n\nScenarios:\n\ninter process communication within / across jobs\ntask queue, used by job arrays\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\ncfg_file: configuration file to start message queue with\nrun_volume: a persistent volume to use as the master volume\n\nOptional parameters:\n\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\nimage: the docker image to run (default: rabbitmq)\ncpu: CPU share to allocate (default: 1 core, burstable to 2 cores)\nmemory: RAM to allocate (default: 4Gi)\nenvvars: additional environment variables to set\nports: network ports to expose as a Dict{String,Tuple{Int,Int}} of name to container port and service port map (default: Dict(\"amqptls\"=>(5671,5671), \"amqp\"=>(5672,5672), \"mgmttls\"=>(15672,15671), \"mgmt\"=>(15672,15672)))\nexternal: whether network ports should be exposed to external network (default: false)\n\nLogging: Use RabbitMQ logging configuration environment variables to configure logging characteristics.\n\nby default logs are written on to stdout / stderr\nlog to /mnt/juliarun/mq/rabbit.log: set environment variable RABBITMQ_LOGS to the file for the job\nlog SASL activity to /mnt/juliarun/mq/rabbit_sasl.log: set environment variable RABBITMQ_SASL_LOGS to the file for the job\n\nEnsure the target volume for log files is specified in additional_volumes parameter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.Notebook",
    "page": "Docstrings",
    "title": "JuliaRunClient.Notebook",
    "category": "type",
    "text": "A Julia Interactive Notebook.\n\nThe notebook is accessible outside the cluster and can be protected by a password (or an external portal/proxy). The master container runs the Jupyter notebook process and the Julia kernels.\n\nThe Julia process running as the kernel is similar to a JuliaBatch. Workers can be provisioned (optionally) as:\n\nslaves to a master Julia process (a Jupyter kernel), similar to JuliaParBatch\na job array, similar to JuliaParBatchWorkers\n\nScenarios:\n\ninteractive/exploratory tasks\nshell access (through Jupyter shell)\nfile transfer (through Jupyter file manager)\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\nrun_volume: a persistent volume to use as the master volume\n\nOptional parameters:\n\npkgbundle: a package bundle to set at LOADPATH (none by default)\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\nimage: the docker image to run (default: julia)\ncpu: CPU share to allocate to master process (default: 0.1 of a core, burstable to 1 core)\ngpu: GPUs to allocate to master process (default: 0)\nmemory: RAM to allocate to master process (default: 512 Mi to 1 Gi)\nshell: the script to use for master shell (default: notebook.sh)\nenvvars: additional environment variables to set for the master\nworker_cpu: CPU share to allocate to a worker process (default: 0.1 of a core, burstable to 1 core)\nworker_gpu: GPUs to allocate to a worker process (default: 0)\nworker_memory: RAM to allocate to a worker process (default: 512 Mi to 1 Gi)\nworker_shell: the script to use for a worker shell (default: master.sh)\nworker_envvars: additional environment variables to set for the worker\nworkerstartscript: a Julia script to start the worker node with (default: worker.sh)\npasswd: password to protect the notebook with (default: no password)\nports: network ports to expose as a Dict{String,Tuple{Int,Int}} of name to container port and service port map (default: Dict(\"nb\"=>(8888,8888)))\nexternal: whether network ports should be exposed to external network (default: false)\nrestart: should workers be restarted (RestartAlways by default, can also be RestartOnFailure or Never)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.PkgBuilder",
    "page": "Docstrings",
    "title": "JuliaRunClient.PkgBuilder",
    "category": "type",
    "text": "Build / update a Julia package bundle.\n\nIt mounts the volume representing the package folder of the bundle in read-write mode, and launches a script to build them. It is similar to a JuilaBatch job.\n\nPackage bundles are a way of making Julia packages accessible to JuliaRun jobs. They are just folders with Julia packages, pre-compiled and along with all their dependencies. Package bundles can be built and tested separately and attached to multiple images, providing a way to dissociate their maintenance.\n\nAttaching a package bundle to a JuliaRun job sets the appropriate environment variables (LOAD_PATH and such) so that Julia code can start using them seamlessly.\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\nbuilder_script: a Julia script that builds packages\nrun_volume: a persistent volume to use as the master volume\npkg_bundle: the package bundle to build\n\nOptional parameters:\n\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\nimage: the docker image to run (default: julia)\ncpu: CPU share to allocate (default: 1 core, burstable to 2 cores)\ngpu: GPUs to allocate (default: 0)\nmemory: RAM to allocate (default: 4Gi to 8 Gi)\nshell: the script to use for startup shell (default: master.sh)\nenvvars: additional environment variables to set for the master\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.Webserver",
    "page": "Docstrings",
    "title": "JuliaRunClient.Webserver",
    "category": "type",
    "text": "Webserver that can be used to serve API/UI/files for jobs. Nginx is used as the underlying service.\n\nScenarios:\n\naccept inputs (file uploads, API calls, ...)\nserve output/log files created by jobs\nsimple user interfaces\n\nRequired parameters:\n\nname: name of the job (must be unique in the system, can be random)\ncfg_file: configuration file to start webserver with\nrun_volume: a persistent volume to use as the master volume\n\nOptional parameters:\n\nadditional_volumes: more persistent volumes to attach at /mnt/<volume name> (none by default)\nimage: the docker image to run (default: nginx)\ncpu: CPU share to allocate (default: 0.1 core, burstable to 1 core)\nmemory: RAM to allocate (default: 512Mi to 1Gi)\nenvvars: additional environment variables to set\nports: network ports to expose as a Dict{String,Tuple{Int,Int}} of name to container port and service port map (default: Dict(\"http\"=>(80,80), \"https\"=>(443,443)))\nexternal: whether network ports should be exposed to external network (default: false)\nnworkers: number of webserver containers to start\n\nLogging: Use Nginx logging configuration to configure logging characteristics. For example:\n\nlog to /mnt/juliarun/webserver/error.log: error_log /mnt/juliarun/webserver/error.log warn;\nlog to stderr (and set level to debug): error_log stderr debug;\nsend access logs to /mnt/juliarun/webserver/access.log: access_log /mnt/juliarun/webserver/access.log;\n\nEnsure the target volume for log files is specified in additional_volumes parameter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.deleteJob",
    "page": "Docstrings",
    "title": "JuliaRunClient.deleteJob",
    "category": "function",
    "text": "Removes the job entry from the queue.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\nforce: whether to remove an incomplete job (optional, default: false)\n\nReturns:\n\nboolean: true/false indicating success/failure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.getAllJobInfo",
    "page": "Docstrings",
    "title": "JuliaRunClient.getAllJobInfo",
    "category": "function",
    "text": "List all submitted jobs.\n\nReturns:\n\ndictionary: of the form {\"jobname\": { \"type\": \"JuliaBatch\", \"status\": [], \"scale\": [], \"endpoint\": [] }...}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.getEncodedURL",
    "page": "Docstrings",
    "title": "JuliaRunClient.getEncodedURL",
    "category": "function",
    "text": "Get encoded URL to job port when using router.\n\nReturns:\n\nThe encoded URL as a String\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.getJobEndpoint",
    "page": "Docstrings",
    "title": "JuliaRunClient.getJobEndpoint",
    "category": "function",
    "text": "Get the endpoint exposed by the job/service.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\n\nReturns tuple/array of endpoints as URLs or IP and ports\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.getJobScale",
    "page": "Docstrings",
    "title": "JuliaRunClient.getJobScale",
    "category": "function",
    "text": "Get the current scale of a job.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\n\nReturns tuple/array with:\n\ninteger: number of workers running\ninteger: number of workers requested\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.getJobStatus",
    "page": "Docstrings",
    "title": "JuliaRunClient.getJobStatus",
    "category": "function",
    "text": "Fetch current status of a Job.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\n\nReturns tuple/array with:\n\nboolean: whether the job completed\ninteger: for a parallel job, number of workers that completed successfully\ninteger: for a parallel job, number of workers started\nboolean: whether the job has been created (vs. scheduled)\nboolean: whether this is a notebook (legacy, likely to be removed in future)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.getSystemStatus",
    "page": "Docstrings",
    "title": "JuliaRunClient.getSystemStatus",
    "category": "function",
    "text": "Verifies if JuliaRun is running and is connected to a compute cluster.\n\nReturns:\n\nboolean: true/false indicating success/failure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.initParallel",
    "page": "Docstrings",
    "title": "JuliaRunClient.initParallel",
    "category": "function",
    "text": "Initialize the cluster manager for parallel mode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.listJobs",
    "page": "Docstrings",
    "title": "JuliaRunClient.listJobs",
    "category": "function",
    "text": "List all submitted jobs.\n\nReturns:\n\ndictionary: of the form {\"jobname\": { \"type\": \"JuliaBatch\" }...}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.self",
    "page": "Docstrings",
    "title": "JuliaRunClient.self",
    "category": "function",
    "text": "Returns a reference to the current job.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.setJobScale",
    "page": "Docstrings",
    "title": "JuliaRunClient.setJobScale",
    "category": "function",
    "text": "Request to scale the job up or down to the level of parallelism requested.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\nparallelism: number of workers to scale to\n\nReturns:\n\nboolean: true/false indicating success/failure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.submitJob",
    "page": "Docstrings",
    "title": "JuliaRunClient.submitJob",
    "category": "function",
    "text": "Submit a job definition to execute on the cluster.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\njob specific parameters, with names as documented for the JobType constructor\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.tailJob",
    "page": "Docstrings",
    "title": "JuliaRunClient.tailJob",
    "category": "function",
    "text": "Tail logs from the job.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\nstream: the stream to read from (\"stdout\"/\"stdin\"), all streams are read if not specified.\ncount: number of log entries to return (50 by default)\n\nReturns a string of log entries separated by new line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.updateJob",
    "page": "Docstrings",
    "title": "JuliaRunClient.updateJob",
    "category": "function",
    "text": "Update a job definition to execute on the cluster.\n\nParameters:\n\njob: A JRunClientJob of appropriate type\njob specific parameters, with names as documented for the JobType constructor\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaRunClient.waitForWorkers",
    "page": "Docstrings",
    "title": "JuliaRunClient.waitForWorkers",
    "category": "function",
    "text": "Wait for a certain number of workers to join.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JuliaRunClient.@resultJuliaRunClient.ApiExceptionJuliaRunClient.ContextJuliaRunClient.GenericJuliaRunClient.JOBTYPEJuliaRunClient.JOBTYPE_LABELSJuliaRunClient.JRunClientJobJuliaRunClient.JuliaBatchJuliaRunClient.JuliaParBatchJuliaRunClient.JuliaParBatchWorkersJuliaRunClient.JuliaRunClientJuliaRunClient.MessageQJuliaRunClient.NotebookJuliaRunClient.PkgBuilderJuliaRunClient.WebserverJuliaRunClient._JuliaClusterManagerJuliaRunClient._http_optsJuliaRunClient._isfileJuliaRunClient._jobtypeJuliaRunClient._simple_queryJuliaRunClient._type_name_queryJuliaRunClient.as_labelJuliaRunClient.deleteJobJuliaRunClient.evalJuliaRunClient.getAllJobInfoJuliaRunClient.getEncodedURLJuliaRunClient.getJobEndpointJuliaRunClient.getJobScaleJuliaRunClient.getJobStatusJuliaRunClient.getSystemStatusJuliaRunClient.includeJuliaRunClient.initParallelJuliaRunClient.initializeClusterJuliaRunClient.listJobsJuliaRunClient.make_queryJuliaRunClient.parse_respJuliaRunClient.releaseClusterJuliaRunClient.selfJuliaRunClient.setJobScaleJuliaRunClient.submitJobJuliaRunClient.tailJobJuliaRunClient.updateJobJuliaRunClient.waitForWorkers"
},

]}
