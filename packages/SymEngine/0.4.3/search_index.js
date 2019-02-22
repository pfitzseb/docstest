var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SymEngine.jl-1",
    "page": "Readme",
    "title": "SymEngine.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)(Image: SymEngine) (Image: SymEngine)Julia Wrappers for SymEngine, a fast symbolic manipulation library, written in C++."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install SymEngine.jl by giving the following command.julia> Pkg.add(\"SymEngine\")"
},

{
    "location": "#Quick-Start-1",
    "page": "Readme",
    "title": "Quick Start",
    "category": "section",
    "text": ""
},

{
    "location": "#Working-with-scalar-variables-1",
    "page": "Readme",
    "title": "Working with scalar variables",
    "category": "section",
    "text": ""
},

{
    "location": "#Defining-variables-1",
    "page": "Readme",
    "title": "Defining variables",
    "category": "section",
    "text": "One can define variables in a few ways. The following three examples are equivalent.Defining two symbolic variables with the names a and b, and assigning them to julia variables with the same name.julia> a=symbols(:a); b=symbols(:b)\nb\n\njulia> a,b = symbols(\"a b\")\n(a, b)\n\njulia> @vars a b\n(a, b)"
},

{
    "location": "#Simple-expressions-1",
    "page": "Readme",
    "title": "Simple expressions",
    "category": "section",
    "text": "We are going to define an expression using the variables from earlier:julia> ex1 = a + 2(b+2)^2 + 2a + 3(a+1)\n3*a + 3*(1 + a) + 2*(2 + b)^2One can see that values are grouped, but no expansion is done."
},

{
    "location": "#Working-with-vector-and-matrix-variables-1",
    "page": "Readme",
    "title": "Working with vector and matrix variables",
    "category": "section",
    "text": ""
},

{
    "location": "#Defining-matricies-of-variables-1",
    "page": "Readme",
    "title": "Defining matricies of variables",
    "category": "section",
    "text": "Some times one might want to define a matrix of variables. One can use a matrix comprehension, and string interpolation to create a matrix of variables.julia> W = [symbols(\"W_$i$j\") for i in 1:3, j in 1:4]\n3×4 Array{SymEngine.Basic,2}:\n W_11  W_12  W_13  W_14\n W_21  W_22  W_23  W_24\n W_31  W_32  W_33  W_34"
},

{
    "location": "#Matrix-vector-multiplication-1",
    "page": "Readme",
    "title": "Matrix-vector multiplication",
    "category": "section",
    "text": "Now using the matrix we can perform matrix operations:julia> W*[1.0, 2.0, 3.0, 4.0]\n3-element Array{SymEngine.Basic,1}:\n 1.0*W_11 + 2.0*W_12 + 3.0*W_13 + 4.0*W_14\n 1.0*W_21 + 2.0*W_22 + 3.0*W_23 + 4.0*W_24\n 1.0*W_31 + 2.0*W_32 + 3.0*W_33 + 4.0*W_34"
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": ""
},

{
    "location": "#expand-1",
    "page": "Readme",
    "title": "expand",
    "category": "section",
    "text": "julia> expand(a + 2(b+2)^2 + 2a + 3(a+1))\n11 + 6*a + 8*b + 2*b^2"
},

{
    "location": "#subs-1",
    "page": "Readme",
    "title": "subs",
    "category": "section",
    "text": "Performs subsitution.julia> subs(a^2+(b-2)^2, b=>a)\na^2 + (-2 + a)^2\n\njulia> subs(a^2+(b-2)^2, b=>2)\na^2\n\njulia> subs(a^2+(b-2)^2, a=>2)\n4 + (-2 + b)^2\n\njulia> subs(a^2+(b-2)^2, a^2=>2)\n2 + (-2 + b)^2\n\njulia> subs(a^2+(b-2)^2, a=>2, b=>3)\n5"
},

{
    "location": "#diff-1",
    "page": "Readme",
    "title": "diff",
    "category": "section",
    "text": "Peforms differentiationjulia> diff(a + 2(b+2)^2 + 2a + 3(a+1), b)`\n4*(2 + b)"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "SymEngine.jl is licensed under MIT open source license. "
},

{
    "location": "autodocs/#SymEngine.@vars",
    "page": "Docstrings",
    "title": "SymEngine.@vars",
    "category": "macro",
    "text": "Macro to define 1 or more variables in the main workspace.\n\nSymbolic values are defined with _symbol. This is a convenience\n\nExample\n\n@vars x y z\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.AsciiArt",
    "page": "Docstrings",
    "title": "SymEngine.AsciiArt",
    "category": "type",
    "text": "show symengine logo \n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.N",
    "page": "Docstrings",
    "title": "SymEngine.N",
    "category": "function",
    "text": "Convert a SymEngine numeric value into a Julian number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.free_symbols",
    "page": "Docstrings",
    "title": "SymEngine.free_symbols",
    "category": "function",
    "text": "Return free symbols in an expression as a Set\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.get_args",
    "page": "Docstrings",
    "title": "SymEngine.get_args",
    "category": "function",
    "text": "Return arguments of a function call as a vector of Basic objects\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.get_libversion",
    "page": "Docstrings",
    "title": "SymEngine.get_libversion",
    "category": "function",
    "text": "Get libsymengine version\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.get_symbol",
    "page": "Docstrings",
    "title": "SymEngine.get_symbol",
    "category": "function",
    "text": "Helper function to lookup a symbol from libsymengine\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.get_symengine_class",
    "page": "Docstrings",
    "title": "SymEngine.get_symengine_class",
    "category": "function",
    "text": "Get SymEngine class of an object (e.g. 1=>:Integer, 1//2 =:Rational, sin(x) => :Sin, ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.have_component",
    "page": "Docstrings",
    "title": "SymEngine.have_component",
    "category": "function",
    "text": "Check whether libsymengine was compiled with comp\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.lambdify",
    "page": "Docstrings",
    "title": "SymEngine.lambdify",
    "category": "function",
    "text": "lambdify\n\nevaluates a symbolless expression or returns a function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.series",
    "page": "Docstrings",
    "title": "SymEngine.series",
    "category": "function",
    "text": "Series expansion to order n about point x0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.subs",
    "page": "Docstrings",
    "title": "SymEngine.subs",
    "category": "function",
    "text": "subs\n\nSubstitute values into a symbolic expression.\n\nExamples\n\n@vars x y\nex = x^2 + y^2\nsubs(ex, x, 1) # 1 + y^2\nsubs(ex, (x, 1)) # 1 + y^2\nsubs(ex, (x, 1), (y,x)) # 1 + x^2, values are substituted left to right.\nsubs(ex, x=>1)  # alternate to subs(x, (x,1))\nsubs(ex, x=>1, y=>1) # ditto\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SymEngine.symbols",
    "page": "Docstrings",
    "title": "SymEngine.symbols",
    "category": "function",
    "text": "symbols(::Symbol) construct symbolic value\n\nExamples:\n\na = symbols(:a)\nx = symbols(\"x\")\nx,y = symbols(\"x y\")\nx,y,z = symbols(\"x,y,z\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SymEngine.@funsSymEngine.@init_constantSymEngine.@varsSymEngine.AsciiArtSymEngine.BasicSymEngine.BasicComplexNumberSymEngine.BasicNumberSymEngine.BasicOpSymEngine.BasicRealNumberSymEngine.BasicTrigFunctionSymEngine.BasicTypeSymEngine.CDenseMatrixSymEngine.CDenseMatrix_freeSymEngine.CMapBasicBasicSymEngine.CMapBasicBasic_freeSymEngine.CSetBasicSymEngine.CSetBasic_freeSymEngine.CVecBasicSymEngine.CVecBasic_freeSymEngine.CatalanSymEngine.ESymEngine.EulerGammaSymEngine.IMSymEngine.IMPLEMENT_ONE_ARG_FUNCSymEngine.IMPLEMENT_TWO_ARG_FUNCSymEngine.NSymEngine.NANSymEngine.PISymEngine.SymEngineSymEngine.SymFunctionSymEngine.SymbolicTypeSymEngine.__init__SymEngine._convertSymEngine._finalizerSymEngine._flatSymEngine._lambdifySymEngine._symbolSymEngine.as_numer_denomSymEngine.ascii_artSymEngine.basic_freeSymEngine.check_depsSymEngine.complex_number_typesSymEngine.constant_mapSymEngine.cosdSymEngine.cotdSymEngine.cscdSymEngine.cseSymEngine.dense_matrix_FFLDUSymEngine.dense_matrix_FFLUSymEngine.dense_matrix_LDLSymEngine.dense_matrix_LUSymEngine.dense_matrix_LU_solveSymEngine.dense_matrix_add_matrixSymEngine.dense_matrix_add_scalarSymEngine.dense_matrix_colsSymEngine.dense_matrix_detSymEngine.dense_matrix_eqSymEngine.dense_matrix_eyeSymEngine.dense_matrix_get_basicSymEngine.dense_matrix_invSymEngine.dense_matrix_mul_matrixSymEngine.dense_matrix_mul_scalarSymEngine.dense_matrix_onesSymEngine.dense_matrix_rowsSymEngine.dense_matrix_rows_colsSymEngine.dense_matrix_set_basicSymEngine.dense_matrix_submatrixSymEngine.dense_matrix_transposeSymEngine.dense_matrix_zerosSymEngine.deps_fileSymEngine.deps_in_fileSymEngine.doneSymEngine.evalSymEngine.evalfSymEngine.expandSymEngine.fn_mapSymEngine.free_symbolsSymEngine.get_argsSymEngine.get_class_from_idSymEngine.get_errorSymEngine.get_libversionSymEngine.get_symbolSymEngine.get_symengine_classSymEngine.get_typeSymEngine.have_componentSymEngine.have_mpcSymEngine.have_mpfrSymEngine.includeSymEngine.init_constantsSymEngine.lambdifySymEngine.lambertwSymEngine.libgmpSymEngine.libmpcSymEngine.libmpfrSymEngine.libsymengineSymEngine.libversionSymEngine.map_fnSymEngine.nextSymEngine.nextprimeSymEngine.noinitSymEngine.number_typesSymEngine.ooSymEngine.op_typesSymEngine.precSymEngine.real_number_typesSymEngine.secdSymEngine.seriesSymEngine.sindSymEngine.startSymEngine.subsSymEngine.symbolsSymEngine.tandSymEngine.throw_if_errorSymEngine.toStringSymEngine.trig_typesSymEngine.walk_expressionSymEngine.zoo"
},

]}
