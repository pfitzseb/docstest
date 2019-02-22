var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Modia.jl-1",
    "page": "Readme",
    "title": "Modia.jl",
    "category": "section",
    "text": "(Image: Travis) (Image: AppVoyer) (Image: codecov.io) (Image: The MIT License)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Modia is a domain specific extension of Julia for modeling and simulation of physical systems.Papers and presentations about Modia:Overview about Modia (ISoLA conference Oct. 2016; slides in pdf format).\nOverview and new features in Modia (12th International Modelica Conference, May 2017; slides in pdf format).\nNew algorithms in Modia (12th International Modelica Conference, May 2017; slides in pptx and pdf format).\nModia: A Domain Specific Extension of Julia for Modeling and Simulation (juliaCon 2017, June 2017; recording at YouTube and slides in pdf format).Modia is designed to model and simulate physical systems (electrical, mechanical, thermo-dynamical, etc.) described by differential and algebraic equations. A user defines a model on a high level with model components (like a mechanical body, an electrical resistance, or a pipe) that are physically connected together. A model component is constructed by \"expression = expression\" equations. The defined model is symbolically processed (for example, equations might be analytically differentiated), JIT compiled and simulated with Sundials IDA solver with the KLU sparse matrix package. By this approach it\'s possible and convenient to build models with hundred thousands of equations describing the dynamics of a car, an airplane, a power plant, etc. and simulate them. The authors used previous experience from the design of the modeling language Modelica. Modia will also be used to design and evaluate features for future Modelica versions.Component models are defined by @model macros. Such models contain definition of variables with various attributes such as start values, min, max, SI unit, etc. An @equations macro is used to define the equations of such a component. Coupling between components is expressed using a connect statement involving groups of variables. The semantics is either to constrain connected variables to be equal or to constrain a set of variables to sum to zero, for example to model Kirchhoff\'s current law."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Modia is registered in METADATA.jl and can be installed with Pkg.add:# Julia 0.6:\njulia> Pkg.add(\"Modia\")\n\n# Julia 0.7 and 1.0:\njulia> ]add ModiaModia uses PyPlot for plotting. If PyPlot is not available in your current Julia environment an information message is printed and all plot(..) calls are ignored.In order that plot windows are displayed, you need to add PyPlot to your current environment via ]add PyPlot. Often this automatic installation fails and it is recommended to follow the instructions Installing PyPlot in a robust way."
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": ""
},

{
    "location": "#To-define-a-model:-1",
    "page": "Readme",
    "title": "To define a model:",
    "category": "section",
    "text": "  using Modia\n  @model FirstOrder begin\n     x = Variable(start=1)   # start means x(0)\n     T = Parameter(0.5)      # Time constant\n     u = 2.0                 # Same as Parameter(2.0)\n  @equations begin\n     T*der(x) + x = u        # der() means time derivative\n     end\n  end;"
},

{
    "location": "#To-simulate-a-model:-1",
    "page": "Readme",
    "title": "To simulate a model:",
    "category": "section",
    "text": "  result = simulate(FirstOrder, 2);\n  @show result[\"x\"][end];\n  ModiaMath.plot(result, \"x\")"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The schematics below are screenshots of Modelica models. These models have been converted to Modia and the examples below execute these models. Note, in Modia there is not (yet) a graphical definition of models."
},

{
    "location": "#Current-Controller-1",
    "page": "Readme",
    "title": "Current Controller",
    "category": "section",
    "text": "(Image: Current Controller)examples/CurrentController.jl"
},

{
    "location": "#Cauer-Low-Pass-Filter-1",
    "page": "Readme",
    "title": "Cauer Low Pass Filter",
    "category": "section",
    "text": "(Image: Cauer Low Pass Filter)examples/CauerLowPassFilter.jl"
},

{
    "location": "#To-run-examples:-1",
    "page": "Readme",
    "title": "To run examples:",
    "category": "section",
    "text": "  using Modia\n  include(\"$(Modia.ModiaDir)/examples/runexamples.jl\")"
},

{
    "location": "#To-run-tests:-1",
    "page": "Readme",
    "title": "To run tests:",
    "category": "section",
    "text": "  using Modia\n  include(\"$(Modia.ModiaDir)/test/runtests.jl\")"
},

{
    "location": "#Examples-(Jupyter-Notebooks)-1",
    "page": "Readme",
    "title": "Examples (Jupyter Notebooks)",
    "category": "section",
    "text": "Electrical low pass filter.\nRectifier - State Events."
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "The version released now is partial since certain prototype functionalities needs to be generalized and refactored. See below. Such prototype features are enabled by flags in the simulate command. See examples."
},

{
    "location": "#Available-functionalities-1",
    "page": "Readme",
    "title": "Available functionalities",
    "category": "section",
    "text": "Model instantiation (including handling of modifiers and extends)\nModel flattening\nRedeclarations\nHandling of T, size, start, state and flow attributes\nSize deduction of variables and equations\nArray equations\nIndex reduction\nBLT\nSymbolic transformations of equations (solving, differentiating)\nAlgebraic loop handling\nLogging of transformation steps\nSimulation with ModiaMath"
},

{
    "location": "#To-Do-1",
    "page": "Readme",
    "title": "To Do",
    "category": "section",
    "text": ""
},

{
    "location": "#Enhance-and-refactor-prototype-codes-for:-1",
    "page": "Readme",
    "title": "Enhance and refactor prototype codes for:",
    "category": "section",
    "text": "Alias handling\nHandle overdetermined equations\nIntroduction of partial and block attribute to models\nAutomatic state selection\nArrays of components\nComplex data type\nEvent handling\nSynchronous equations\nSparse Jacobian handling\nImpulse handling\nAPI to dynamically change model topology\nMore models converted from Modelica Standard Library"
},

{
    "location": "#To-implement-1",
    "page": "Readme",
    "title": "To implement",
    "category": "section",
    "text": "Tearing of systems of equations\nImproved code generation for really large models\nAllowing change of parameters without recompilation\nTaking min and max attributes into account\nHandling of rotation matrices involved in algebraic loops\nLinearization\n..."
},

{
    "location": "autodocs/#Modia.Instantiation.@model",
    "page": "Docstrings",
    "title": "Modia.Instantiation.@model",
    "category": "macro",
    "text": "@model <Name> begin\n    <declarations>\n    @equations begin\n        <equations>\n    end\nend\n\nFill in a Model instance with the given declarations and equations and assign it to a constant named <Name>.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.BLTandPantelides",
    "page": "Docstrings",
    "title": "Modia.BLTandPantelides",
    "category": "module",
    "text": "Module with graph theoretical methods for maximum matching, Pantelides index reduction and Tarjan\'s strongly connected components.\n\nAuthor: Hilding Elmqvist, Mogram AB  \nDate: July-August 2016 (rewritten). Array version: Spring 2017\nLicense: MIT\n\nA bipartite graph (E, V) is defined by an array of arrays. Each E-entry has an integer array of indices to V-entries. \n\nExample bipartite graph:\n\nG = [\n  [3, 5],\n  [4, 6],  \n  [1, 7, 9],\n  [2, 8, 9],\n  [1, 2]  \n]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.BLTandPantelidesUtilities",
    "page": "Docstrings",
    "title": "Modia.BLTandPantelidesUtilities",
    "category": "module",
    "text": "Module with utility functions for BLTandPantelides.\n\nAuthor: Hilding Elmqvist, Mogram AB  \nDate: July-August 2016\nLicense: MIT\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.BasicStructuralTransform",
    "page": "Docstrings",
    "title": "Modia.BasicStructuralTransform",
    "category": "module",
    "text": "Module for structural analysis of models.\n\nDeveloper: Hilding Elmqvist, Mogram AB  \nFirst version: July-August 2016\nCopyright (c) 2016-2018: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Blocks",
    "page": "Docstrings",
    "title": "Modia.Blocks",
    "category": "module",
    "text": "Modia module with block component models (inspired from Modelica Standard Library).\n\nDeveloper: Hilding Elmqvist, Mogram AB  \nCopyright (c) 2016-2018: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Boolean",
    "page": "Docstrings",
    "title": "Modia.Boolean",
    "category": "function",
    "text": "Create a boolean Variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Electric",
    "page": "Docstrings",
    "title": "Modia.Electric",
    "category": "module",
    "text": "Modia module with electric component models (inspired from Modelica Standard Library).\n\nDeveloper: Hilding Elmqvist, Mogram AB  \nCopyright (c) 2016-2018: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\nThe building blocks for electric components are:\n\nPin - The main connector representing an electrical node with variables v and i.\nOnePort - Base model for an electric device with two Pins with variables    v, i, p, and n.\n\nThe following functions define variables with appropriate units:\n\nVoltage() - Electric potential\nCurrent() - The main flow quantity\nResistance()\nCapacitance()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.ExactlyRemoveSingularities",
    "page": "Docstrings",
    "title": "Modia.ExactlyRemoveSingularities",
    "category": "module",
    "text": "module ExactlyRemoveSingularities - exactly remove singularities from A*v = 0 with A an Integer matrix.\n\nUse this module in the following way:\n\nusing ExactlyRemoveSingularities    result = removeSingularities(A,ix,iy)    # result = (iya, eqr, ix1, ix2, eqx, A1, A2)    printRemoveSingularities(A,result,names)   \n\nwhere A is a dense or sparse Int matrix A[:,:] describing a linear system\n\nA*v = 0\n\nwith\n\nv[ix]: Variables used in the derivative operator, der(v[ix]), so these are the potential states.\nv[iy]: Variables that must be solved from A*v = 0, because these variables do not appear in the remaining part of the model equations (e.g. absolute potentials). If variables v[iy] cannot be uniquely solved from A*v = 0, then in argument iya the variables are listed that must be set arbitrarily so that v[iy] can be uniquely solved from the equations. For example, if v[iy] contains the absolute potentials and no ground object is present, then v[iya] are the absolute potentials that must be explicitly set, e.g., by introducing an equation v[iya]=0, in order that the equations have a unique solution. Additionally, a warning message should be printed that v[iya] was set to 0.)\n\nThe function return arguments are all of type Int and have the following meaning:\n\niya: variables v[iya] can be arbitrarily set (iya is a sub-set of iy)\neqr: equations A[eqr,:]*v = 0 are redundant and should be removed (they do not change the result)\nix1: x[ix1] are the dependent states (ix1 is a sub-set of ix)\nix2: i[ix2] are the independent states (ix2 is a sub-set of ix)\neqx, A1, A2: equations A[eqx,:]*v = 0 should be replaced by the equations A1*x1 + A2*x2 = 0, where A1 is square, upper triangular and has full rank with A1[i,i] != 0. In other words, x1 can be computed explicitely from these equations given x2.\n\nThe calling program should do the following:\n\nRemove equations A[eqr,:]*v = 0, because these are redundant equations.\nReplace equations A[eqx,:]*v = 0 by A1*x1 + A2*x2 = 0, in order that index reduction can be performed by a structural algorithm (e.g. Pantelides algorithm).\nIntroduce equations v[iya] = 0 and print a warning message that these variables have been arbitrarily set to zero. This is needed, in order that the equations have a unique solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Execution",
    "page": "Docstrings",
    "title": "Modia.Execution",
    "category": "module",
    "text": "Modia module for executing a model including code generation and calling DAE solver.\n\nOriginal developer: Toivo Henningsson, Lund\nDeveloper: Hilding Elmqvist, Mogram AB\nCopyright (c) 2016-2018: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Float",
    "page": "Docstrings",
    "title": "Modia.Float",
    "category": "function",
    "text": "Create a floating-point Variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Instantiation",
    "page": "Docstrings",
    "title": "Modia.Instantiation",
    "category": "module",
    "text": "Modia module for instantiation and flattening of models.\n\nOriginal developer: Toivo Henningsson, Lund\nDeveloper: Hilding Elmqvist, Mogram AB\nCopyright (c) 2016-2019: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Integ",
    "page": "Docstrings",
    "title": "Modia.Integ",
    "category": "function",
    "text": "Create an integer Variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.ModelElaboration",
    "page": "Docstrings",
    "title": "Modia.ModelElaboration",
    "category": "module",
    "text": "Modia module for elaboration of models.\n\nDeveloper: Hilding Elmqvist, Mogram AB  \nFirst version: July-August 2016\nCopyright (c) 2016-2018: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Modia",
    "page": "Docstrings",
    "title": "Modia.Modia",
    "category": "module",
    "text": "Modia - Dynamic Modeling and Simulation in Julia\n\nTo define a model:\n\n  @model FirstOrder begin\n     x = Variable(start=1)   # start means x(0)\n     T = Parameter(0.5)      # Time constant\n     u = 2.0                 # Same as Parameter(2.0)\n  @equations begin\n     T*der(x) + x = u        # der() means time derivative\n     end\n  end;\n\nTo simulate a model:\n\n  result = simulate(FirstOrder, 2);\n  @show result[\"x\"][end];\n  ModiaMath.plot(result, \"x\")\n\nTo run examples:\n\n  include(\"/home/pfitzseb/.julia/packages/Modia/k0HTn/examples/runexamples.jl\")\n\nTo run tests:\n\n  include(\"/home/pfitzseb/.julia/packages/Modia/k0HTn/test/runtests.jl\")\n\nFor more information, see (https://github.com/ModiaSim/Modia.jl/blob/master/README.md)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Par",
    "page": "Docstrings",
    "title": "Modia.Par",
    "category": "function",
    "text": "Shortcut for Parameter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Parameter",
    "page": "Docstrings",
    "title": "Modia.Parameter",
    "category": "function",
    "text": "Create a Variable with parameter variability, meaning it  is an input variable that is constant with time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Rotational",
    "page": "Docstrings",
    "title": "Modia.Rotational",
    "category": "module",
    "text": "Modia module with rotational component models (inspired from Modelica Standard Library).\n\nDeveloper: Hilding Elmqvist, Mogram AB  \nCopyright (c) 2016-2018: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Str",
    "page": "Docstrings",
    "title": "Modia.Str",
    "category": "function",
    "text": "Create a string Variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.StructuralTransform",
    "page": "Docstrings",
    "title": "Modia.StructuralTransform",
    "category": "module",
    "text": "Module for structural transformation of models including alias handling and size and type deduction.\n\nDeveloper: Hilding Elmqvist, Mogram AB  \nFirst version: July-August 2016\nCopyright (c) 2016-2019: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.SymbolicTransform",
    "page": "Docstrings",
    "title": "Modia.SymbolicTransform",
    "category": "module",
    "text": "Module for symbolic transformation of models.\n\nDeveloper: Hilding Elmqvist, Mogram AB  \nFirst version: July-September 2016\nLicense: MIT (expat)\n\nReference: For matrix formulas, see: Petersen, K.B, Pedersen M.S.: The Matrix Cookbook https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Utilities",
    "page": "Docstrings",
    "title": "Modia.Utilities",
    "category": "module",
    "text": "Modia module with utility functions.\n\nDeveloper: Hilding Elmqvist, Mogram AB\nFirst version: July 2016\nCopyright (c) 2016-2018: Hilding Elmqvist, Toivo Henningsson, Martin Otter\nLicense: MIT (expat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Var",
    "page": "Docstrings",
    "title": "Modia.Var",
    "category": "function",
    "text": "Shortcut for Variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Instantiation.Variability",
    "page": "Docstrings",
    "title": "Modia.Instantiation.Variability",
    "category": "type",
    "text": "Enum for variability of a variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Instantiation.Variable",
    "page": "Docstrings",
    "title": "Modia.Instantiation.Variable",
    "category": "type",
    "text": "A constructor for a Variable, the main object for a model variable with attributes\n\nKeyword arguments\n\nvalue = undefined: the value of the Variable\ninfo = \"\": documentation string\nunit: unit of measure: defaults to no units unless provided with the value\ndisplayUnit = unit: unit used for display\nmin = undefined: minimum value\nmax = undefined: maximum value\nstart = undefined: starting value\nfixed::Bool = false: fixed value\nnominal = undefined: nominal value\nvariability = continuous: other options include parameter, constant, or discrete\nT: type of the value; taken from value\nsize::Tuple = (): size of the variable\nflow::Bool = false: indicates a flow variable for connectors\nstate::Bool = true: indicates a state Variable\nproperty = general: other options include symmetric, orthogonal, and rotationGroup3D\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.ModelElaboration.checkSimulation",
    "page": "Docstrings",
    "title": "Modia.ModelElaboration.checkSimulation",
    "category": "function",
    "text": "function checkSimulation(mod, stopTime, observer, finalSolution; options...)\n\nSimulates model mod until stopTime and checks that the final value of the observer variable is approximately finalSolution. The following options are available:\n\nlogTranslation: determines if logging of the translation is performed\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Instantiation.constant",
    "page": "Docstrings",
    "title": "Modia.Instantiation.constant",
    "category": "constant",
    "text": "Indicates a constant valued variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Instantiation.continuous",
    "page": "Docstrings",
    "title": "Modia.Instantiation.continuous",
    "category": "constant",
    "text": "Indicates a continuous variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Instantiation.discrete",
    "page": "Docstrings",
    "title": "Modia.Instantiation.discrete",
    "category": "constant",
    "text": "Indicates a discrete variable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.Instantiation.parameter",
    "page": "Docstrings",
    "title": "Modia.Instantiation.parameter",
    "category": "constant",
    "text": "Indicates an input value that stays constant with time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.ModelElaboration.simulateMultiModeModel",
    "page": "Docstrings",
    "title": "Modia.ModelElaboration.simulateMultiModeModel",
    "category": "function",
    "text": "Experimental code for multi-mode handling with impulses.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Modia.undefined",
    "page": "Docstrings",
    "title": "Modia.undefined",
    "category": "constant",
    "text": "A value meant to be filled in later\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Modia.@componentModia.@modelModia.BLTandPantelidesModia.BLTandPantelidesUtilitiesModia.BasicStructuralTransformModia.BlocksModia.BooleanModia.DateModia.ElectricModia.ExactlyRemoveSingularitiesModia.ExecutionModia.FloatModia.InstantiationModia.IntegModia.ModelElaborationModia.ModiaModia.ModiaDirModia.ModiaLoggingModia.ParModia.ParameterModia.PropertyModia.RotationalModia.StateSelectionModia.StrModia.StructuralTransformModia.SymbolicTransformModia.SynchronousModia.UtilitiesModia.VarModia.VariabilityModia.VariableModia.VersionModia.addComponent!Modia.allInstancesModia.checkSimulationModia.constantModia.continuousModia.discreteModia.evalModia.generalModia.includeModia.orthogonalModia.parameterModia.rotationGroup3DModia.simulateModia.simulateModelModia.simulateMultiModeModelModia.skewModia.skewCoordsModia.symmetricModia.undefined"
},

]}
