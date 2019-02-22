var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CVXOPT.jl-—-Julia-interface-to-CVXOPT-1",
    "page": "Readme",
    "title": "CVXOPT.jl — Julia interface to CVXOPT",
    "category": "section",
    "text": "The package provides Julia wrappers for the following CVXOPT solvers:cvxopt.solvers.conelp\ncvxopt.solvers.coneqp\ncvxopt.solvers.lp\ncvxopt.solvers.qp\ncvxopt.solvers.socp\ncvxopt.solvers.sdp"
},

{
    "location": "#Installation-and-test-(Linux/macOS)-1",
    "page": "Readme",
    "title": "Installation and test (Linux/macOS)",
    "category": "section",
    "text": "CVXOPT.jl requires PyCall to call functions from the CVXOPT Python extension from Julia. If you already have a Python executable in your path, then PyCall will use that version of Python. Alternatively, you can force PyCall to use Conda.jl to install a minimal Python distribution that is private to Julia by setting PYTHON=\"\":ENV[\"PYTHON\"]=\"\"  # Optional: force PyCall to use Conda.jl\nPkg.add(\"CVXOPT\")\nPkg.test(\"CVXOPT\")This will automatically install CVXOPT from the conda-forge channel."
},

{
    "location": "#Build-status-1",
    "page": "Readme",
    "title": "Build status",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "autodocs/#CVXOPT.CVXOPT",
    "page": "Docstrings",
    "title": "CVXOPT.CVXOPT",
    "category": "module",
    "text": "CVXOPT.jl - a Julia interface to CVXOPT\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.conelp",
    "page": "Docstrings",
    "title": "CVXOPT.conelp",
    "category": "function",
    "text": "CVXOPT conelp() interface\n\nSee CVXOPT documentation for more information:\n\nhttp://cvxopt.org/userguide/coneprog.html#linear-cone-programs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.coneqp",
    "page": "Docstrings",
    "title": "CVXOPT.coneqp",
    "category": "function",
    "text": "CVXOPT coneqp() interface\n\nSee CVXOPT documentation for more information:\n\nhttp://cvxopt.org/userguide/coneprog.html#quadratic-cone-programs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.cvxopt_to_julia",
    "page": "Docstrings",
    "title": "CVXOPT.cvxopt_to_julia",
    "category": "function",
    "text": "Convert CVXOPT matrix to Julia array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.julia_to_cvxopt",
    "page": "Docstrings",
    "title": "CVXOPT.julia_to_cvxopt",
    "category": "function",
    "text": "Convert Julia array to CVXOPT matrix or spmatrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.lp",
    "page": "Docstrings",
    "title": "CVXOPT.lp",
    "category": "function",
    "text": "CVXOPT lp() interface\n\nSee CVXOPT documentation for more information:\n\nhttp://cvxopt.org/userguide/coneprog.html#linear-programming\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.qp",
    "page": "Docstrings",
    "title": "CVXOPT.qp",
    "category": "function",
    "text": "CVXOPT qp() interface\n\nSee CVXOPT documentation for more information:\n\nhttp://cvxopt.org/userguide/coneprog.html#quadratic-programming\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.sdp",
    "page": "Docstrings",
    "title": "CVXOPT.sdp",
    "category": "function",
    "text": "CVXOPT sdp() interface\n\nSee CVXOPT documentation for more information:\n\nhttp://cvxopt.org/userguide/coneprog.html#semidefinite-programming\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CVXOPT.socp",
    "page": "Docstrings",
    "title": "CVXOPT.socp",
    "category": "function",
    "text": "CVXOPT socp() interface\n\nSee CVXOPT documentation for more information:\n\nhttp://cvxopt.org/userguide/coneprog.html#second-order-cone-programming\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CVXOPT.CVXOPTCVXOPT.__init__CVXOPT.conelpCVXOPT.coneqpCVXOPT.cvxoptCVXOPT.cvxopt_to_juliaCVXOPT.evalCVXOPT.includeCVXOPT.julia_to_cvxoptCVXOPT.lpCVXOPT.qpCVXOPT.sdpCVXOPT.socpCVXOPT.solvers"
},

]}
