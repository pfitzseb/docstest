var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "HeatTransfer.jl",
    "title": "HeatTransfer.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#HeatTransfer.jl-1",
    "page": "HeatTransfer.jl",
    "title": "HeatTransfer.jl",
    "category": "section",
    "text": "HeatTransfer.jl extends JuliaFEM functionalities to solve heat transfer problems."
},

{
    "location": "#Theory-1",
    "page": "HeatTransfer.jl",
    "title": "Theory",
    "category": "section",
    "text": "The heat equation is a parabolic partial differential equation that describes the distribution of heat (or variation in temperature) in a given region over time. The state equation, given by the first law of thermodynamics (i.e. conservation of energy), is written in the following form (assuming no mass transfer or radiation). This form is more general and particularly useful to recognize which property (e.g. c_p or rho) influences which term. State equations isrho c_pfracpartial Tpartial t-nablacdotleft(knabla Tright)=dotq_Vwhere dotq_V is the volumetric heat source."
},

{
    "location": "#Features-1",
    "page": "HeatTransfer.jl",
    "title": "Features",
    "category": "section",
    "text": "PlaneHeat. Thermal conductivity k can be set using field thermal conductivity. Volumetric heat source dotq_V can be set using field heat source. Heat flux for boundary can be set using field heat flux. "
},

{
    "location": "#References-1",
    "page": "HeatTransfer.jl",
    "title": "References",
    "category": "section",
    "text": "Heat equation. (2018, January 5). In Wikipedia, The Free Encyclopedia. Retrieved 00:49, January 30, 2018, from https://en.wikipedia.org/w/index.php?title=Heat_equation&oldid=818847673\nHeat transfer. (2018, January 26). In Wikipedia, The Free Encyclopedia. Retrieved 00:48, January 30, 2018, from https://en.wikipedia.org/w/index.php?title=Heat_transfer&oldid=822415173"
},

{
    "location": "tests/test_heat_exchange_bc/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"This file is a part of JuliaFEM. License is MIT: see https://github.com/JuliaFEM/HeatTransfer.jl/blob/master/LICENSE# Use of heat exchange boundary conditionBoundary conditions needs fields heat transfer coefficient and external temperature defined. Boundary condition is of typef = hleft(T-T_mathrmuright)using FEMBase, Test, HeatTransfer, SparseArraysSet up initial dataX = Dict(\n    1 => [0.0,0.0],\n    2 => [1.0,0.0])\n\nT = Dict(\n    1 => 0.0,\n    2 => 0.0)Create element and update fieldselement = Element(Seg2, [1, 2])\nupdate!(element, \"geometry\", X)\nupdate!(element, \"temperature\", 0.0 => T)\nupdate!(element, \"heat transfer coefficient\", 6.0)\nupdate!(element, \"external temperature\", 1.0)Create problem, add elements to problem and assemble at time t=0:problem = Problem(PlaneHeat, \"test problem\", 1)\nadd_elements!(problem, [element])\nassemble!(problem, 0.0)Test for stiffness matrix boldsymbolK and force vector boldsymbolf:K = Matrix(sparse(problem.assembly.K))\nf = Vector(sparse(problem.assembly.f)[:])\n@test isapprox(K, [2.0 1.0; 1.0 2.0])\n@test isapprox(f, [3.0; 3.0])This page was generated using Literate.jl."
},

{
    "location": "tests/test_heat_flux_bc_2d/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"This file is a part of JuliaFEM. License is MIT: see https://github.com/JuliaFEM/HeatTransfer.jl/blob/master/LICENSE# Use of flux boundary condition in 2d heat problem\n\nusing FEMBase, Test, HeatTransfer, SparseArrays\n\nX = Dict(\n    1 => [0.0,0.0],\n    2 => [1.0,0.0])\n\nT = Dict(\n    1 => 0.0,\n    2 => 0.0)\n\nelement = Element(Seg2, [1, 2])\nupdate!(element, \"geometry\", X)\nupdate!(element, \"temperature\", 0.0 => T)\nupdate!(element, \"heat flux\", 2.0)\nproblem = Problem(PlaneHeat, \"test problem\", 1)\nadd_elements!(problem, [element])\nassemble!(problem, 0.0)\nf = Vector(sparse(problem.assembly.f)[:])\nf_expected = [1.0; 1.0]\n@test isapprox(f, f_expected)This page was generated using Literate.jl."
},

{
    "location": "tests/test_heat_flux_bc_3d/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"This file is a part of JuliaFEM. License is MIT: see https://github.com/JuliaFEM/HeatTransfer.jl/blob/master/LICENSE# Use of flux boundary condition in 3d heat problem\n\nusing FEMBase, Test, HeatTransfer, SparseArrays\n\nX = Dict(\n    1 => [0.0,0.0,0.0],\n    2 => [1.0,0.0,0.0],\n    3 => [0.0,1.0,0.0])\n\nT = Dict(\n    1 => 0.0,\n    2 => 0.0,\n    3 => 0.0)\n\nelement = Element(Tri3, [1, 2, 3])\nupdate!(element, \"geometry\", X)\nupdate!(element, \"temperature\", T)\nupdate!(element, \"heat flux\", 6.0)\nproblem = Problem(Heat, \"test problem\", 1)\nadd_elements!(problem, [element])\nassemble!(problem, 0.0)\nf = Vector(sparse(problem.assembly.f)[:])\nf_expected = [1.0; 1.0; 1.0]\n@test isapprox(f, f_expected)This page was generated using Literate.jl."
},

{
    "location": "tests/test_stiffness_matrix_and_heat_source_2d/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"This file is a part of JuliaFEM. License is MIT: see https://github.com/JuliaFEM/HeatTransfer.jl/blob/master/LICENSE# Assembling stiffness matrix and force vector for 2d heat problem\n\nusing FEMBase, HeatTransfer, Test, SparseArrays\n\nX = Dict(\n    1 => [0.0,0.0],\n    2 => [1.0,0.0],\n    3 => [1.0,1.0],\n    4 => [0.0,1.0])\n\nT = Dict(\n    1 => 0.0,\n    2 => 0.0,\n    3 => 0.0,\n    4 => 0.0)\n\nelement = Element(Quad4, [1, 2, 3, 4])\nupdate!(element, \"geometry\", X)\nupdate!(element, \"temperature\", 0.0 => T)\nupdate!(element, \"thermal conductivity\", 6.0)\nupdate!(element, \"heat source\", 4.0)\n\nproblem = Problem(PlaneHeat, \"test problem\", 1)\nadd_elements!(problem, [element])\nassemble!(problem, 0.0)\nK = Matrix(sparse(problem.assembly.K))\nf = Vector(sparse(problem.assembly.f)[:])\nK_expected = [\n               4.0 -1.0 -2.0 -1.0\n              -1.0  4.0 -1.0 -2.0\n              -2.0 -1.0  4.0 -1.0\n              -1.0 -2.0 -1.0  4.0\n             ]\nf_expected = [1.0; 1.0; 1.0; 1.0]\n@test isapprox(K, K_expected)\n@test isapprox(f, f_expected)\n@test get_unknown_field_name(problem) == \"temperature\"This page was generated using Literate.jl."
},

]}
