var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Semaphores-1",
    "page": "Readme",
    "title": "Semaphores",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Semaphores for inter process locking and resource counting. POSIX named semaphores and SysV semaphores are supported. Tested on Linux and MacOS."
},

{
    "location": "#Posix-Named-Semaphores-1",
    "page": "Readme",
    "title": "Posix Named Semaphores",
    "category": "section",
    "text": ""
},

{
    "location": "#Creation-and-deletion-1",
    "page": "Readme",
    "title": "Creation and deletion",
    "category": "section",
    "text": "# create a semaphore (or attach to an existing one)\nsem = NamedSemaphore(\"/testsem\") \n\n# close / detach\nclose(sem)\n\n# delete\ndelete!(sem)\n\n# create (exclusive)\nsem = NamedSemaphore(\"/testsem\", true, true)"
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "# get current value (Not supported on OSX)\ncount(sem)\n\n# lock / decrement value / reserve resource (blocking call)\nlock(sem)\n@test count(sem) == 0\n\n# try to lock / decrement / reserve (non blocking, returns true on success)\ntrylock(sem)\n\n# unlock / increment value / return resource (blocking call)\nunlock(sem)"
},

{
    "location": "#SysV-Semaphores-1",
    "page": "Readme",
    "title": "SysV Semaphores",
    "category": "section",
    "text": ""
},

{
    "location": "#Creation-and-deletion-2",
    "page": "Readme",
    "title": "Creation and deletion",
    "category": "section",
    "text": "# create an array of 2 semaphores\ntok = Semaphores.ftok(pwd(), 0)\nsem = Semaphores.semcreate(tok, 2)\n\n# delete\nSemaphores.semrm(sem)"
},

{
    "location": "#Operations-2",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "# set values of semaphores\na = Cushort[0,0]\nSemaphores.semset(sem, a)\nSemaphores.semget(sem, a)\n@test sum(a) == 0\n\n# atomic operations on semaphore sets\no = [Semaphores.SemBuf(0,1),Semaphores.SemBuf(1,1)]\nSemaphores.semop(sem, o)"
},

{
    "location": "#Resource-Counter-(based-on-SysV-Semaphores)-1",
    "page": "Readme",
    "title": "Resource Counter (based on SysV Semaphores)",
    "category": "section",
    "text": ""
},

{
    "location": "#Counting-single-resources-1",
    "page": "Readme",
    "title": "Counting single resources",
    "category": "section",
    "text": "# create a resoruce counter for a single resource\nrescounter = ResourceCounter(pwd())\n\n# set counter value\nreset(rescounter, 1)\n@test count(rescounter,0) == 1\n\n# change value by amount\nchange(rescounter, 2)\n@test count(rescounter,0) == 3"
},

{
    "location": "#Counting-multiple-resources-1",
    "page": "Readme",
    "title": "Counting multiple resources",
    "category": "section",
    "text": "# create a resource counter for 2 resources\nrescounter = ResourceCounter((pwd(),2), 2)\n\n# set counter values\nreset(rescounter, [1,2])\n@test count(rescounter,0) == 1\n@test count(rescounter,1) == 2\n\n# change values by amount\nchange(rescounter, -1, 0)\n@test count(rescounter,0) == 0\n@test count(rescounter,1) == 2"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Semaphores.CftokSemaphores.GETALLSemaphores.GETNCNTSemaphores.GETPIDSemaphores.GETVALSemaphores.GETZCNTSemaphores.IPC_CREATSemaphores.IPC_EXCLSemaphores.IPC_NOWAITSemaphores.IPC_RMIDSemaphores.IPC_SETSemaphores.IPC_STATSemaphores.NamedSemaphoreSemaphores.PERMSSemaphores.ResourceCounterSemaphores.SEM_INFOSemaphores.SEM_STATSemaphores.SEM_UNDOSemaphores.SETALLSemaphores.SETVALSemaphores.SemBufSemaphores.SemaphoresSemaphores.changeSemaphores.closeSemaphores.countSemaphores.delete!Semaphores.deserializeSemaphores.evalSemaphores.ftokSemaphores.includeSemaphores.lockSemaphores.resetSemaphores.sem_closeSemaphores.sem_getvalueSemaphores.sem_openSemaphores.sem_postSemaphores.sem_trywaitSemaphores.sem_unlinkSemaphores.sem_waitSemaphores.semcreateSemaphores.semgetSemaphores.semopSemaphores.semrmSemaphores.semsetSemaphores.serializeSemaphores.trylockSemaphores.unlockSemaphores.withlock"
},

]}
