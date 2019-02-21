var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Alpine,-A-global-solver-for-nonconvex-MINLPs-span-style\"color:black\"/span-1",
    "page": "Readme",
    "title": "Alpine, A global solver for nonconvex MINLPs <span style=\"color:black\"></span>",
    "category": "section",
    "text": "Dev: (Image: Build Status) (Image: codecov) (Image: )\"ALPINE: glob(AL) o(P)timization for mixed-(I)nteger programs with (N)onlinear (E)quations\", formerly POD.jl, is a novel global optimization solver that uses an adaptive, piecewise convexification scheme and constraints programming methods to solve Mixed-Integer Non-Linear Programs (non-convex MINLPs) efficiently. MINLPs are famously known as the \"hard\" programming problems that exist in many applications (see MINLPLibJuMP.jl). Alpine is also a good fit for subsets of the MINLP family, e.g., Mixed-Integer Quadradic Convex Programming (MIQCP), Non-Linear Programming (NLP), etc.Unlike many other state-of-the-art MINLP solvers, Alpine is entirely built upon JuMP and MathProgBase Interface in Julia, which provides incredible flexibility for usage and further development.Alpine globally solves a given MINLP by:Analyzing the problem\'s expressions (objective & constraints) and applies approporite convex relaxations\nPerforming novel adaptive partitioning methods to create piecewise relaxations, bound tightening and polyhedral outer-approximations to guarantee global convergenceAllowable nonlinearities: Alpine can currently handle MINLPs with polynomials in constraints and/or in the objective. <!–   Illustration of Alpine\'s dynamic partitioning and outer-approximation on simple functions (Source)<p align=\"center\"> <img src=\"https://github.com/lanl-ansi/Alpine.jl/blob/master/Dynamicpartitionsgithub.png\" width=\"580\" class=\"centerImage\"> </p> –> Presentation on Alpine.jl at the 2nd Annual JuMP-dev Workshop, held at the Institut de Mathématiques de Bordeaux, June 2018 <img src=\"https://github.com/lanl-ansi/Alpine.jl/blob/master/alpine_slide.png\" width=\"600\" height=\"350\">"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Alpine, with it\'s repository under the LANL-ANSI group, can be installed through the Julia package manager:julia> Pkg.add(\"Alpine\")Developers: Any further development of Alpine can be conducted on a new branch or a forked repo."
},

{
    "location": "#Underlying-solvers-1",
    "page": "Readme",
    "title": "Underlying solvers",
    "category": "section",
    "text": "Though the algorithm implemented in Alpine is quite involved, most of the hard work and computational bottleneck would arise in the underlying solvers. Since every iteration of Alpine solves a subproblem to optimality, which is typically a convex MILP/MIQCQP and solves a nonconvex NLP/MINLP to local optimality, Alpine\'s run time heavily depends on the quality of these solvers. For best performance of Alpine, use commercial solvers such as CPLEX/Gurobi. However, due to the flexibility offered by JuMP/MathProgBase, the following solvers are supported in Alpine: Solver Julia Package\nCPLEX CPLEX.jl\nCbc Cbc.jl\nGurobi Gurobi.jl\nIpopt Ipopt.jl\nBonmin Bonmin.jl\nArtelys KNITRO KNITRO.jlAs the development of Alpine continues, support for solvers like Mosek, Pajarito, GLPK, NLopt, Xpress is in the roadmap."
},

{
    "location": "#Bug-reports-and-support-1",
    "page": "Readme",
    "title": "Bug reports and support",
    "category": "section",
    "text": "Please report any issues via the Github [issue tracker]. All types of issues are welcome and encouraged; this includes bug reports, documentation typos, feature requests, etc. [issue tracker]: https://github.com/lanl-ansi/Alpine.jl/issues"
},

{
    "location": "#Challenging-MINLPs-1",
    "page": "Readme",
    "title": "Challenging MINLPs",
    "category": "section",
    "text": "We are seeking out hard benchmark instances for MINLPs. Please get in touch either by opening an issue or privately if you would like to share any hard instances. Challenging problems will help us determine how to improve Alpine."
},

{
    "location": "#Citing-Alpine-1",
    "page": "Readme",
    "title": "Citing Alpine",
    "category": "section",
    "text": "If you find Alpine useful in your work, we kindly request that you cite the following papers (pdf, pdf)@article{NagarajanLuWangBentSundar2019,\n  author = {Nagarajan, Harsha and Lu, Mowen and Wang, Site and Bent, Russell and Sundar, Kaarthik},\n  title = {An adaptive, multivariate partitioning algorithm for global optimization of nonconvex programs},\n  journal = {Journal of Global Optimization},\n  year = {2019},\n  issn = {1573-2916},\n  doi = {10.1007/s10898-018-00734-1},\n}\n\n@inproceedings{NagarajanLuYamangilBent2016,\n  title = {Tightening {McC}ormick relaxations for nonlinear programs via dynamic multivariate partitioning},\n  author = {Nagarajan, Harsha and Lu, Mowen and Yamangil, Emre and Bent, Russell},\n  booktitle = {International Conference on Principles and Practice of Constraint Programming},\n  pages = {369--387},\n  year = {2016},\n  organization = {Springer},\n  doi = {10.1007/978-3-319-44953-1_24},\n}"
},

]}
