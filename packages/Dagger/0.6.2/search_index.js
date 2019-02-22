var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Dagger-1",
    "page": "Readme",
    "title": "Dagger",
    "category": "section",
    "text": "A framework for out-of-core and parallel computing.(Image: Build Status) (Image: Coverage Status)At the core of Dagger.jl is a scheduler heavily inspired by Dask. It can run computations represented as directed-acyclic-graphs (DAGs) efficiently on many Julia worker processes."
},

{
    "location": "#DAG-creation-interface-1",
    "page": "Readme",
    "title": "DAG creation interface",
    "category": "section",
    "text": "Here is an example DAG:using Dagger\n\np = delayed(f; options...)(42)\nq = delayed(g)(p)\nr = delayed(h)(53)\ns = delayed(combine)(p, q, r)The connections between nodes p, q, r and s is represented by this dependency graph:(Image: graph)delayed(f; options...)Returns a function which when called creates a Thunk object representing a call to function f with the given arguments. If it is called with other thunks as input, then they form a graph with input nodes directed at the output. The function f get the result of evaluating the input thunks.To compute and fetch the result of a thunk (say s), you can call collect(s). collect will fetch the result of the computation to the master process. Alternatively, if you want to compute but not fetch the result you can call compute on the thunk. This will return a Chunk object which references the result. If you pass in a Chunk objects as an input to a delayed function, then the function will get executed with the value of the Chunk – this evaluation will likely happen where the input chunks are, to reduce communication.Options to delayed are:get_result::Bool – return the actual result to the scheduler instead of Chunk objects. Used when f explicitly constructs a Chunk or when return value is small (e.g. in case of reduce)\nmeta::Bool – pass the input “Chunk” objects themselves to f and not the value contained in them - this is always run on the master process\npersist::Bool – the result of this Thunk should not be released after it becomes unused in the DAG\ncache::Bool – cache the result of this Thunk such that if the thunk is evaluated again, one can just reuse the cached value. If it’s been removed from cache, recompute the value."
},

{
    "location": "#Rough-high-level-description-of-scheduling-1",
    "page": "Readme",
    "title": "Rough high level description of scheduling",
    "category": "section",
    "text": "First picks the leaf Thunks and distributes them to available workers. Each worker is given at most 1 task at a time. If input to the node is a Chunk, then workers which already have the chunk are preferred.\nWhen a worker finishes a thunk it will return a Chunk object to the scheduler.\nOnce the worker has returned a Chunk, scheduler picks the next task for the worker – this is usually the task the worker immediately made available (if possible). In the small example above, if worker 2 finished p it will be given q since it will already have the result of p which is input to q.\nThe scheduler also issues \"release\" Commands to chunks that are no longer required by nodes in the DAG: for example, when s is computed all of p, q, r are released to free up memory. This can be prevented by passing persist or cache options to delayed."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "We thank DARPA, Intel, and the NIH for supporting this work at MIT."
},

]}
