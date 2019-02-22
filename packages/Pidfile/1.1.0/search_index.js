var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Pidfile.jl-1",
    "page": "Home",
    "title": "Pidfile.jl",
    "category": "section",
    "text": "CurrentModule = PidfileDocumentation for Pidfile.jl:A simple utility tool for creating advisory pidfiles (lock files)."
},

{
    "location": "#Pidfile.mkpidlock",
    "page": "Home",
    "title": "Pidfile.mkpidlock",
    "category": "function",
    "text": "mkpidlock(at::String, [pid::Cint, proc::Process]; kwopts...)\n\nCreate a pidfile lock for the path \"at\" for the current process or the process identified by pid or proc.\n\nOptional keyword arguments:\n\nmode: file access mode (modified by the process umask). Defaults to world-readable.\npollinterval: Specify the maximum time to between attempts (if watchfile doesn\'t work)\nstaleage: Delete an existing pidfile (ignoring the lock) if its mtime is older than this.   The file won\'t be deleted until 25x longer than this if the pid in the file appears that it may be valid.   By default this is disabled (staleage = 0), but a typical recommended value would be about 3-5x an   estimated normal completion time.\n\n\n\n\n\n"
},

{
    "location": "#Base.close",
    "page": "Home",
    "title": "Base.close",
    "category": "function",
    "text": "close(lock::LockMonitor)\n\nRelease a pidfile lock.\n\n\n\n\n\n"
},

{
    "location": "#Primary-Functions-1",
    "page": "Home",
    "title": "Primary Functions",
    "category": "section",
    "text": "mkpidlock\nclose"
},

{
    "location": "#Pidfile.open_exclusive",
    "page": "Home",
    "title": "Pidfile.open_exclusive",
    "category": "function",
    "text": "open_exclusive(path::String; mode, poll_interval, stale_age) :: File\n\nCreate a new a file for read-write advisory-exclusive access, blocking until it can succeed.\n\nFor a description of the keyword arguments, see mkpidlock.\n\n\n\n\n\n"
},

{
    "location": "#Pidfile.tryopen_exclusive",
    "page": "Home",
    "title": "Pidfile.tryopen_exclusive",
    "category": "function",
    "text": "tryopen_exclusive(path::String, mode::Integer = 0o444) :: Union{Void, File}\n\nTry to create a new file for read-write advisory-exclusive access, return nothing if it already exists.\n\n\n\n\n\n"
},

{
    "location": "#Pidfile.write_pidfile",
    "page": "Home",
    "title": "Pidfile.write_pidfile",
    "category": "function",
    "text": "write_pidfile(io, pid)\n\nWrite our pidfile format to an open IO descriptor.\n\n\n\n\n\n"
},

{
    "location": "#Pidfile.parse_pidfile",
    "page": "Home",
    "title": "Pidfile.parse_pidfile",
    "category": "function",
    "text": "parse_pidfile(file::Union{IO, String}) => (pid, hostname, age)\n\nAttempt to parse our pidfile format, replaced an element with (0, \"\", 0.0), respectively, for any read that failed.\n\n\n\n\n\n"
},

{
    "location": "#Pidfile.stale_pidfile",
    "page": "Home",
    "title": "Pidfile.stale_pidfile",
    "category": "function",
    "text": "stale_pidfile(path::String, stale_age::Real) :: Bool\n\nHelper function for open_exclusive for deciding if a pidfile is stale.\n\n\n\n\n\n"
},

{
    "location": "#Pidfile.isvalidpid",
    "page": "Home",
    "title": "Pidfile.isvalidpid",
    "category": "function",
    "text": "isvalidpid(hostname::String, pid::Cuint) :: Bool\n\nAttempt to conservatively estimate whether pid is a valid process id.\n\n\n\n\n\n"
},

{
    "location": "#Helper-Functions-1",
    "page": "Home",
    "title": "Helper Functions",
    "category": "section",
    "text": "Pidfile.open_exclusive\nPidfile.tryopen_exclusive\nPidfile.write_pidfile\nPidfile.parse_pidfile\nPidfile.stale_pidfile\nPidfile.isvalidpid"
},

]}
