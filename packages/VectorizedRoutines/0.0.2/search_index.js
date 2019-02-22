var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VectorizedRoutines.jl-1",
    "page": "Readme",
    "title": "VectorizedRoutines.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)VectorizedRoutines.jl provides a library of familiar and useful vectorized routines. This package hopes to include high-performance, tested, and documented  Julia implementations  of routines which MATLAB/Python/R users would be familiar with. We also welcome generally useful routines for operating on vectors/arrays."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, simply use:Pkg.add(\"VectorizedRoutines\")\nusing VectorizedRoutinesFor the latest features, switch to the master branch via:Pkg.checkout(\"VectorizedRoutines\")"
},

{
    "location": "#Using-the-Package-1",
    "page": "Readme",
    "title": "Using the Package",
    "category": "section",
    "text": "The functions from R/Python/MATLAB are implemented in order to match the functionality of their appropriate packages. In order to not have namespace issues, they are contained in appropriate modules, so you would call the MATLAB functions like:mgrid = Matlab.meshgrid(0:1//4:1,0:1//8:1)and the R functions like:v1=1:5\nv2 = 5:-1:1\nrepped = R.rep(v1,v2)Although these look like they are calling some outside package from these languages, they are bonafide Julia implementations and thus can handle Julia specific issues (like using Rational numbers in the meshgrid).If you want to export the functions to the main namespace, simply use the commands like this:using VectorizedRoutines.R\nrpois(1,[5.2;3.3]) # Same as R.rpois(1,[5.2;3.3])"
},

{
    "location": "#Current-Functions-and-Macros-1",
    "page": "Readme",
    "title": "Current Functions and Macros",
    "category": "section",
    "text": "MATLAB\nngrid\nmeshgrid\naccumarray (fast)\naccumarray2 (more functionality)\nCompatibility Functions:\ndisp\nstrcat\nnum2str\nmax\nnumel\nPython\n@vcomp (vector comprehension) macro based on Python\'s list comprehensionswith a conditional clause to filter elements in a succinct way, ie: @vcomp Int[i^2 for i in 1:10] when i % 2 == 0    # Int[4, 16, 36, 64, 100]R\nrep\nrep!\nfindinterval\nrpois (fast on vectors)\nrpois!\nJulia\nmultireshape (a reshape which can produce views to multiple arrays)"
},

]}
