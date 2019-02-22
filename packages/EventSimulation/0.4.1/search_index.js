var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EventSimulation-1",
    "page": "Readme",
    "title": "EventSimulation",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)(Image: ) (Image: )An event based Discrete Event Simulation engine for Julia.Intended as a support library for teaching basic principles of Discrete Event Simulation.The last package version that supports Julia 0.6.2 is 0.3.3. Versions starting with 0.4.0 support Julia 0.7+."
},

{
    "location": "autodocs/#EventSimulation.AbstractReservoir",
    "page": "Docstrings",
    "title": "EventSimulation.AbstractReservoir",
    "category": "type",
    "text": "Abstract class for reservoirs. SimQueue and SimResource are concrete types implementing it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.AbstractState",
    "page": "Docstrings",
    "title": "EventSimulation.AbstractState",
    "category": "type",
    "text": "Abstract type for holding state of the simulation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.Action",
    "page": "Docstrings",
    "title": "EventSimulation.Action",
    "category": "type",
    "text": "Structure holding an information that what should be executed by scheduler at time when; what should accept one argument of type Scheduler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.EmptyState",
    "page": "Docstrings",
    "title": "EventSimulation.EmptyState",
    "category": "type",
    "text": "Simplest concrete type implementing AbstractState that does not hold any data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.EventSimulation",
    "page": "Docstrings",
    "title": "EventSimulation.EventSimulation",
    "category": "module",
    "text": "EventSimulation is an event-based discrete event simulation engine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.PriorityTime",
    "page": "Docstrings",
    "title": "EventSimulation.PriorityTime",
    "category": "type",
    "text": "Subtype of Real defining a lexicographically comparable pair of Real. It is designed to be used by Scheduler where standard real numbers run to a problem of undefined order of undefined order of removal from priority queue.\n\nPriorityTime two fields time and priority may have different types, but both have to be subtypes of Real. priority should be used to determine order of execution of Actions that have the same time. Two actions with identical time and priority have undefined oreder of execution so this should be avoided.\n\nPriorityTime type has defined lexicographic order and +, -. It is immutable, has a custom hash function and conversions from Real types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.ResourceRequest",
    "page": "Docstrings",
    "title": "EventSimulation.ResourceRequest",
    "category": "type",
    "text": "Internal structure that remembers that quantity was requested by request.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.Scheduler",
    "page": "Docstrings",
    "title": "EventSimulation.Scheduler",
    "category": "type",
    "text": "Holds information about current simulation state Contains the following fields:\n\nnow         current simulation time\nevent_queue priority queue of Actions planned to be executed\nstate       user defined subtype of AbstractState of the simulation\nmonitor     function that is called before event is triggered               must accept two arguments Scheduler and Δ, a difference               between time of event to be executed and time of last executed event\n\nIf two Actions have identical when time in event_queue then the order of their execution is undefined\n\nWhen monitor is executed the event to happen is still on event_queue, but time is updated to time when the event is to be executed (i.e. monitor sees the state of the simulation just before the event is triggered). Therefore for calculating summary statistics monitor may assume that the simulation spent Δ time in this state. Function monitor should not modify event_queue[1] as EventSimulation assumes that the event to be triggered after monitor executes will not be modified. Additionally it it not guaranteed that event_queue[1] will be executed after monitor finishes because simulation might terminate earlier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.SimQueue",
    "page": "Docstrings",
    "title": "EventSimulation.SimQueue",
    "category": "type",
    "text": "SimQueue type for holding arbitrary objects O. It allows objects to be waiting in a queue with optional maximum queue size. Servers can get objects from the queue with optional maximum number of requests pending for fulfillment.\n\nFields:\n\nfifo_queue    if true queue is FIFO, otherwise LIFO\nmax_queue     maximum queue size\nqueue         vector of objects in a queue\nfifo_requests if true requests is FIFO, otherwise LIFO\nmax_requests  maximum requests size\nrequests      vector of request functions\n\nFunctions in requests must accept two arguments Scheduler and O. When O arrives to a queue there is a try to immediately feed it to pending requests. When new request arrives there is a try to immediately provide it with O.\n\nInitially an empty SimQueue with no requests is constructed. By default queue and requests have FIFO policy and are unbounded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.SimResource",
    "page": "Docstrings",
    "title": "EventSimulation.SimResource",
    "category": "type",
    "text": "Resource type for holding numeric values (like amount of liquid). It stores current quantity of matter and its allowed lo and hi amounts. Servers can get matter from the resource with optional maximum number of requests pending for fulfillment.\n\nFields:\n\nquantity       current quantity in resource\nlo            minimum quantity of resource\nhi            maximum quantity of resource\nfifo_requests if true requests is FIFO, otherwise LIFO\nmax_requests  maximum requests size\nrequests      vector of request and requested quantity\n\nFunctions in requests must accept one argument Scheduler, so they should know the amount they requested. When resource arrives to a queue there is a try to immediately dispatch it to pending requests. When new request arrives there is a try to immediately fulfill it.\n\nInitially an empty SimResource with no requests is constructed. Initial quantity, lo and hi may be provided. By default SimResource is empty, and has minimum quantity of zero and unbounded maximum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.bulk_register!",
    "page": "Docstrings",
    "title": "EventSimulation.bulk_register!",
    "category": "function",
    "text": "bulk_register!(s, who, what, Δ, randomize)\n\nPut event at time s.now+Δ to s.event_queue that will execute what(scheduler, w) for all w in who. If randomize is false then who is traversed in natural order otherwise it is traversed in random order. what must accept exactly two arguments of type Scheduler and eltype(who). The function does not check if Δ is a valid (finite) number. Returns inserted bulk Action.\n\nFunction is designed to efficiently handle case when the same action has to be executed at the same simulation time by many agents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.dispatch!",
    "page": "Docstrings",
    "title": "EventSimulation.dispatch!",
    "category": "function",
    "text": "dispatch!(s, r)\ndispatch!(s, q)\n\nInternal function used for dispatching requests in SimResource and SimQueue. Puts appropriate Actions in s immediately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.go!",
    "page": "Docstrings",
    "title": "EventSimulation.go!",
    "category": "function",
    "text": "go!(s, until)\n\nRuns simulation defined by s until s.now is greater or equal than until or s.event_queue is empty (i.e. nothing is left to be done). By default until equals Inf.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.interrupt!",
    "page": "Docstrings",
    "title": "EventSimulation.interrupt!",
    "category": "function",
    "text": "interrupt!(s, a)\n\nFirst occurrence of Action a is replaced by no-op in event queue. This way there is no need to fix heap in this operation and it is fast. Returns true if a was found in queue and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.pq_insert!",
    "page": "Docstrings",
    "title": "EventSimulation.pq_insert!",
    "category": "function",
    "text": "pq_insert!(pq, what, when)\n\nSpecialized core Julia code for insertion to priority queue pq Not exported Put Action(what, when) to pq. Return inserted Action\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.pq_remove!",
    "page": "Docstrings",
    "title": "EventSimulation.pq_remove!",
    "category": "function",
    "text": "pq_remove!(pq)\n\nSpecialized core Julia code for getting top element from priority queue pq Not exported Return Action\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.provide!",
    "page": "Docstrings",
    "title": "EventSimulation.provide!",
    "category": "function",
    "text": "provide!(s, r, quantity)\nprovide!(s, q, object)\n\nAllows to fill SimResource with quantity or SimQueue with object.\n\nIn SimResource changes the balance of r.quantity. Given quantity may be any number, but the balance of SimResource will be changed only in lo-hi range. Returns the actual change in SimResource balance.\n\nIn SimQueue adds object to q.queue. Returns true on success and false if there were too many objects in queue already.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.register!",
    "page": "Docstrings",
    "title": "EventSimulation.register!",
    "category": "function",
    "text": "register!(s, what, Δ)\n\nPut what at time s.now+Δ to s.event_queue. what must accept exactly one argument of type Scheduler. The function does not check if Δ is a valid (finite) number. Returns inserted Action.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.repeat_bulk_register!",
    "page": "Docstrings",
    "title": "EventSimulation.repeat_bulk_register!",
    "category": "function",
    "text": "repeat_bulk_register!(s, who, what, interval, randomize)\n\nRepeat bulk_register! at time intervals specified by interval function, which must accept Scheduler argument. interval function is called after the previous event was executed. what must accept exactly two arguments of type Scheduler and typeof(who). Returns nothing. Calling terminate! in function interval will not stop the simulation. Instead, if interval returns nothing the action is not scheduled and repeat_register will effectively terminate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.repeat_register!",
    "page": "Docstrings",
    "title": "EventSimulation.repeat_register!",
    "category": "function",
    "text": "repeat_register!(s, what, interval)\n\nPut what to s.event_queue repeatedly in time intervals specified by interval function, which must accept one argument of type Scheduler. what must accept exactly one argument of type Scheduler. interval function is called after the previous event was executed. Returns nothing. Calling terminate! in function interval will not stop the simulation. Instead, if interval returns nothing the action is not scheduled and repeat_register will effectively terminate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.request!",
    "page": "Docstrings",
    "title": "EventSimulation.request!",
    "category": "function",
    "text": "request!(s, r, quantity, request)\nrequest!(s, q, request)\n\nFunction used to register request for resource in SimResource or object from SimQueue.\n\nIn SimResource requested quantity must be provided and request accepts only Scheduler argument (it must know what it wanted). Returns tuple of:\n\ntrue if successfull and false when too many requests were made\nResourceRequest object created\n\nIn SimResource function request must accept one argument Scheduler. In SimQueue function request must accept two arguments Scheduler and object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.terminate!",
    "page": "Docstrings",
    "title": "EventSimulation.terminate!",
    "category": "function",
    "text": "terminate!(s)\n\nEmpties s.event_queue which will lead to termination of simulation unless it is refilled before execution returns to go!. Useful for event-triggered termination of simulation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.waive!",
    "page": "Docstrings",
    "title": "EventSimulation.waive!",
    "category": "function",
    "text": "waive!(r, res_request)\nwaive!(q, request)\n\nAllows to remove first occurence that would be served of res_request from SimResource or request from SimQueue.\n\nReturns true on success and false if res_request or request respectively was not found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EventSimulation.withdraw!",
    "page": "Docstrings",
    "title": "EventSimulation.withdraw!",
    "category": "function",
    "text": "withdraw!(q, object)\n\nAllows to remove first occurrence that would be served of object from SimQueue.\n\nReturns true on success and false if object was not found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EventSimulation.AbstractReservoirEventSimulation.AbstractStateEventSimulation.ActionEventSimulation.EmptyStateEventSimulation.EventSimulationEventSimulation.PriorityTimeEventSimulation.ResourceRequestEventSimulation.SchedulerEventSimulation.SimQueueEventSimulation.SimResourceEventSimulation.bulk_register!EventSimulation.dispatch!EventSimulation.evalEventSimulation.go!EventSimulation.includeEventSimulation.interrupt!EventSimulation.pq_insert!EventSimulation.pq_remove!EventSimulation.provide!EventSimulation.register!EventSimulation.repeat_bulk_register!EventSimulation.repeat_register!EventSimulation.request!EventSimulation.terminate!EventSimulation.waive!EventSimulation.withdraw!"
},

]}
