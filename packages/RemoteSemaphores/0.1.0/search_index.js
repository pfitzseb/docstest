var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RemoteSemaphores-1",
    "page": "Readme",
    "title": "RemoteSemaphores",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: CodeCov)"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "RemoteSemaphore(n::Int, pid=myid())A RemoteSemaphore is a counting semaphore that lives on a particular process in order to control access to a resource from multiple processes. It is implemented using the unexported Base.Semaphore stored inside a Future which is only accessed on the process it was initialized on. Like Base.Semaphore, it implements acquire and release, and is not thread-safe."
},

{
    "location": "autodocs/#RemoteSemaphores.RemoteSemaphore",
    "page": "Docstrings",
    "title": "RemoteSemaphores.RemoteSemaphore",
    "category": "type",
    "text": "RemoteSemaphore(n::Int, pid=myid())\n\nA semaphore living on a specific process. Do not attempt to fetch the future to a different process and use it there, as that will be an isolated, unsynced copy of the semaphore.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RemoteSemaphores.RemoteSemaphoreRemoteSemaphores.RemoteSemaphoresRemoteSemaphores._current_countRemoteSemaphores.acquireRemoteSemaphores.evalRemoteSemaphores.includeRemoteSemaphores.release"
},

]}
