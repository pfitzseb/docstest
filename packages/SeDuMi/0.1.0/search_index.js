var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SeDuMi-1",
    "page": "Readme",
    "title": "SeDuMi",
    "category": "section",
    "text": "SeDuMi.jl is an interface to the SeDuMi solver. It exports the sedumi function that is a thin wrapper on top of the sedumi MATLAB function and uses it to define the SeDuMi.Optimizer object that implements the solver-independent MathOptInterface API.To use it with JuMP, simply dousing JuMP\nusing SeDuMi\nmodel = Model(with_optimizer(SeDuMi.Optimizer))To suppress output, domodel = Model(with_optimizer(SeDuMi.Optimizer, fid=0))"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install SeDuMi.jl through the Julia package manager:] add https://github.com/blegat/SeDuMi.jl.gitbut you first need to make sure that you satisfy the requirements of the MATLAB.jl Julia package and that the SeDuMi software is installed in your MATLAB™ installation."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SeDuMi.CISeDuMi.ConeSeDuMi.ConeDataSeDuMi.MOISeDuMi.MOIUSeDuMi.ModelDataSeDuMi.OptimizerSeDuMi.SFSeDuMi.SSSeDuMi.SeDuMiSeDuMi.SolutionSeDuMi.VISeDuMi._allocate_constraintSeDuMi._scale_coefficientsSeDuMi.coefficientSeDuMi.constraint_offsetSeDuMi.constraint_rowsSeDuMi.copy_upper_triangleSeDuMi.dimensionSeDuMi.evalSeDuMi.includeSeDuMi.output_indexSeDuMi.scale_coefficientsSeDuMi.sedumiSeDuMi.square_mapSeDuMi.square_side_dimensionSeDuMi.square_to_triangleSeDuMi.to_vecSeDuMi.triangle_mapSeDuMi.triangle_side_dimensionSeDuMi.triangle_to_squareSeDuMi.triangle_to_square_indicesSeDuMi.unscale_coefficientsSeDuMi.variable_index_value"
},

]}
