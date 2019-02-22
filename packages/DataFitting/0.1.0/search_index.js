var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataFitting.jl-1",
    "page": "Readme",
    "title": "DataFitting.jl",
    "category": "section",
    "text": "DataFitting is a general purpose data-driven model fitting framework for Julia.(Image: Build Status)(works both on Julia v0.6 and v0.7/1.0)(previous name of this package was ModelFit.jl)"
},

{
    "location": "#Key-features-1",
    "page": "Readme",
    "title": "Key features",
    "category": "section",
    "text": "it handles data of any dimensionality;\nthe fitting model is evaluated on a user provided (Cartesian or Linear) domain;\nthe fitting model is built up by individual components, either provided by the companion package DataFittingBasics.jl or implemented by the user.  All components are combined to evaluate the final model with a standard Julia mathematical expression;\nall components results are cached, so that repeated evaluations with the same parameters do not involve further calculations.  This is very important to speed up the fitting process when many components are involved;\nUser provided components can pre-compute quantities based on the model domain before running the fitting process, and store them in a private structure for future re-use;\nModel parameters can be fixed to a specific value, limited in a interval, or be dynamically calculated using a mathematical expression involving the other parameters;\nit allows fitting multiple data sets;\nit easily allows to use different minimizers, and compare their results and performances.  Currently two minimizers are supported (LsqFit and CMPFit);\nprovides several facilities for interactive fitting and results displaying."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "On Julia v0.6:Pkg.clone(\"https://github.com/gcalderone/DataFitting.jl.git\")On Julia v0.7/v1.0:] dev https://github.com/gcalderone/DataFitting.jl"
},

{
    "location": "#Simple-example-1",
    "page": "Readme",
    "title": "Simple example",
    "category": "section",
    "text": "Assume the model to be compared with empirical data has 5 parameters and the foolowing analytical formula:f(x, p1, p2, p3, p4, p5) = @. (p1  +  p2 * x  +  p3 * x^2  +  p4 * sin(p5 * x))  *  cos(x)To simulate a measurement process we\'ll evaluate the model on a domain and add some random noise to a model realization:# Actual model parameters:\nparams = [1, 1.e-3, 1.e-6, 4, 5]\n\n# Domain for model evaluation\nx = 1:0.05:10000\n\n# Evaluated model\ny = f(x, params...);\n\n# Random noise\nrng = MersenneTwister(0);\nnoise = randn(rng, length(x));In order to use the DataFitting framework we must create a Domain and a Measures objects to encapsulate the model domain and empirical data:using DataFitting\ndom = Domain(x)\ndata = Measures(y + noise, 1.)The second argument to the Measures function is the (1 sigma Gaussian) uncertainty associated to each data sample.  It can either be an array with the same shape as the first argument or a scalar.  In the latter case all data samples are assumed to have the same uncertainty.Also, we must create a Model object containing a reference to the analytical formula, and prepare it for evaluation on the domain dommodel1 = Model(:comp1 => FuncWrap(f, params...))\nprepare!(model1, dom, :comp1)The comp1 symbol is the name we chose to identify the component in the model.  Any other valid symbol could have been used.The parameter initial values are those given in the component constructors.  Such values can be changed as follows:model1[:comp1].p[1].val = 1\nmodel1[:comp1].p[2].val = 1.e-3\n ```\n etc.\n\n\nFinally, we are ready to fit the model against empirical data:julia result1 = fit!(model1, data)Note that the `fit!` function modifies the `model1` objects as follows:\n- it updates the model parameter with the best fit ones;\n- it updates the internal cache of component evaluations with those resulting from best fit parameters;\n- it updates the evaluation counter for each component (see below);\n\nThe procedure outlined above may seem cumbersome at first, however it is key to define very complex models and to improve performances, as shown below.\n\n\n\n## Multiple components\n\nA model is typically made up of many *components*, joined toghether with a standard mathematical expression.  The previous example can easily be re-implemented by splitting the analytical formula in 3 parts:julia f1(x, p1, p2, p3) = @.  p1  +  p2 * x  +  p3 * x^2 f2(x, p4, p5) = @. p4 * sin(p5 * x) f3(x) = cos.(x)model2 = Model(:comp1 => FuncWrap(f1, params[1], params[2], params[3]),                :comp2 => FuncWrap(f2, params[4], params[5]),                :comp3 => FuncWrap(f3)) prepare!(model2, dom, :((comp1 + comp2) * comp3)) result2 = fit!(model2, data)Now we used 3 components (named `comp1`, `comp2` and `comp3`) and combined them with the mathematical expression in the last argument of the call to `prepare!`. **Any** valid mathematical expression is allowed.\n\nNote that we obtained exactly the same result as before, but we **gained a factor ~2** in execution time.  Such perfromance improvement is due to the fact that the component evaluations are internally cached, and are re-evaluated only if necessary, i.e. when one of the parameter value is modified by the minimzer algorithm. In this particular case the `comp3` component, having no free parameter, is evaluated only once.\n\nTo check how many time each component and the model are evaluated simply type the name of the `Model` object in the REPL or call the `show` method, i.e.: `show(model2)`, and look at the `Counter` column.  To reset the counters type:julia resetcounters!(model2)\n\n## Fitting multiple data sets\n`DataFitting` allows to fit multiple data sets simultaneously.\n\nSuppose you observe the same phenomenon with two different instruments and wish to use both data sets to constrain the model parameters.  Here we will simulate a second data sets by adding random noise to the previously calculated model, and creating a second `Measures` object: julia noise = randn(rng, length(x)); data2 = Measures(1.3 * (y + noise), 1.3)Note that we multiplied all data by a factor 1.3, to simulate a different calibration between the instruments.  To take into account such calibration we push a further component into the model, named `calib`:julia push!(model2, :calib, SimpleParam(1))and prepare the model to evaluate a second expression:julia prepare!(model2, dom, :(calib * ((comp1 + comp2) * comp3)))Note that a call to `prepare!` modifies the `Model` object by adding a new (possibly different) expression to be evaluated.  If needed, also the `Domain` object used for the second expression may be different from the first one.  The latter posssibility allows, for instance, to fit multiple data sets each observed with different instruments.\n\nNow we can fit both data sets as follows:julia result2 = fit!(model2, [data, data2])\n## Retrieve results\nThe results of the fitting are available as a `FitResult` structure, as returned by the `fit!` fuction.  The structure dump for the `result2` in the example above is as follows:julia dump(result2) DataFitting.FitResult   fitter: DataFitting.Minimizer DataFitting.Minimizer()   param: DataFitting.HashVector{DataFitting.FitParameter}     keys: Array{Symbol}((6,))       1: Symbol comp1p1       2: Symbol comp1p2       3: Symbol comp1p3       4: Symbol comp2p1       5: Symbol comp2p2       6: Symbol calibval     values: Array{DataFitting.FitParameter}((6,))       1: DataFitting.FitParameter         val: Float64 1.0034771773408524         unc: Float64 0.0029174421450895533       2: DataFitting.FitParameter         val: Float64 0.0010022369285940917         unc: Float64 1.3473265492873467e-6       3: DataFitting.FitParameter         val: Float64 9.996494571427457e-7         unc: Float64 1.3148179368867407e-10       4: DataFitting.FitParameter         val: Float64 4.005022216534921         unc: Float64 0.0013760967902191378       5: DataFitting.FitParameter         val: Float64 4.999999879104177         unc: Float64 5.998373321161513e-8       6: DataFitting.FitParameter         val: Float64 1.299996982192236         unc: Float64 4.979637254678212e-5   ndata: Int64 399962   dof: Int64 399956   cost: Float64 400117.9725389123   status: Symbol Optimal   elapsed: Float64 1.736617397From this structure the user can retrieve the parameter best fit values and uncertainties, the number of data samples, the number of degrees of freedom, the total chi-squared (`cost`) and the fitting elapsed time in seconds.\n\nIn particular, the best fit value and uncertanty for `p1` can be retrieved as follows:julia println(result2.param[:comp1p1].val) println(result2.param[:comp1p1].unc)Note that the parameter is identified by using both the component name and parameter name, separated by a double underscore `__`.\n\nTo plot the results use the following arrays:\n- Abscissa: `dom[1]`.  For multi dimensional domains you can use `dom[2]`, `dom[3]`, etc.;\n- Ordinate:\n  - expression 1, i.e. `(comp1 + comp2) * comp3`: `model()` or `model2(1)`;\n  - expression 2, i.e. `calib * ((comp1 + comp2) * comp3)`: `model2(2)`;\n  - `comp1` component: `model2(:comp1)`;\n  - `comp2` component: `model2(:comp2)`;\n  - `comp3` component: `model2(:comp3)`;\n  - `calib` component: `model2(:calib)`;\n\nIn the following example I will use the [Gnuplot.jl](https://github.com/gcalderone/Gnuplot.jl) package, but the user can choose any other package:julia using Gnuplot @gp xr=(1000, 1010) :- @gp :- dom[1] model2(:comp1) \"w l tit \'comp1\'\" :- @gp :- dom[1] model2(:comp2) \"w l tit \'comp2\'\" :- @gp :- dom[1] model2() \"w lines tit \'Model\' lw 3\"\nTo evaluate the model with a different parameter value you can pass one (or more) `Pair{Symbol,Number}` to `model2()`,i.e.:julia @gp :- dom[1] model2(:comp2__p1=>0.) \"w lines tit \'p4=0\' lw 3\"\n\n## The `FuncWrap` and `SimpleParam` components\n\n`FuncWrap` and `SimpleParam` are the only built-in components of the `DataFitting` package.  Further components are available in the [`DataFittingBasics.jl`](https://github.com/gcalderone/DataFittingBasics.jl) package.\n\n### `Funcwrap`\nThe `FuncWrap` is simply a wrapper to a user defined function of the form `f(x, [y], [z], [further dimensions...], p1, p2, [further parameters...])`.  The `x`, `y`, `z` arguments will be `Vector{Float64}` with the same number of elements, while `p1`, `p2`, etc. will be scalar floats.  The function must return a `Vector{Float64}` (regardless of thenumber of dimensions) with the same number of elements as `x`.  This components works with domains of any dimensionality.\n\nThe constructor is defined as follows:julia FuncWrap(func::Function, args...)where `args...` is a list of numbers.\n\nThe parameters are:\n- `p::Vector{Parameter}`: vector of parameters for the user defined function.\n\n### `SimpleParam` \nThe `SimpleParam` represent a scalar component in the model, whose value is given by the `val` parameter.  This components works with domains of any dimensionality.\n\nThe constructor is defined as follows:julia SimpleParam(val::Number)\nThe parameters are:\n- `val::Parameter`: the scalar value.\n\n\n## Profile a component\nThe `DataFitting` framework provides an effective way to check a component performance by means of the `test_component` function.\n\nFor instance, you may wonder if the `FuncWrap` component used in the previous example as a wrapper to the `f` function introduces any performance penalty.  With `test_component` you may simply compare the wrapper performance with that of a simple loop, i.e.:julia test_component(dom, FuncWrap(f, params...), 1000) @time for i in 1:1000     dummy = f(x, params...) endAs you can see there is no significant difference in looping 1000 times on model evaluations or using a simple loop on `f`.\n\n\n\n## Using the `CMPFit` minimizer\n\nThe `DataFitting` package uses the [LsqFit](https://github.com/JuliaNLSolvers/LsqFit.jl) minimizer by default, but it allows to use the [CMPFit](https://github.com/gcalderone/CMPFit.jl) as well.  The latter typically provides better performances with respect to the former, but since `CMPFit` is a wrapper to a C library it is not a pure-Julia solution.   The better performances are due to a different minimization strategy, not to C vs. Julia differences.\n\nTo use the `CMPFit` minimzer (after having installed the package):julia using CMPFit result2 = fit!(model2, [data, data2], minimizer=CMPFit.Minimizer())\n\n## Multidimensional domains\n\n**IMPORTANT NOTE**: by default `the `DataFitting` package defines structure only for 1D and 2D fitting.  To handle higher dimensional cases you should generate the appropriate code with, e.g.:julia DataFitting.@code_ndim 3\n`N`-dimensional `Domain` objects comes in two flavours: linear and cartesian ones:\n- Linear domain: contains a `N`-dimensional tuple of coordinates, one for each data sample.  It is analogous to `Vector{NTuple{N, Number}}`;\n- Cartesian domain: contains `N` arrays of coordinates, one for each dimension. Optionally contains a 1D list of index to select a subset of all possible combinations of coordinates. It is analogous to `Vector{Vector{Number}}`, whose length of outer vector is `N`;\n\nLinear domains are created using the `Domain` function, providing as many arguments as the number of dimensions. Each argument can either be an integer (specifying how many samples are defined along each axis), or a vector of `float`s.  **The length of all dimensions must be exactly the same.**  Examples:julia"
},

{
    "location": "#D-1",
    "page": "Readme",
    "title": "1D",
    "category": "section",
    "text": "dom = Domain(5) dom = Domain(1.:5) dom = Domain([1,2,3,4,5.])"
},

{
    "location": "#D-2",
    "page": "Readme",
    "title": "2D",
    "category": "section",
    "text": "dom = Domain(5, 5) dom = Domain(1.:5, [1,2,3,4,5.])Note that the length of all the above domains is 5.\n\nCartesian domains are created using the `CartesianDomain` function, providing as many arguments as the number of dimensions.  There is no 1-dimensional cartesian domain, hence `CartesianDomain` requires at least two arguments.  Each argument can either be an integer (specifying how many samples are defined along each axis), or a vector of `float`s.  **The length of dimensions may be different.**  Examples:julia"
},

{
    "location": "#D-3",
    "page": "Readme",
    "title": "2D",
    "category": "section",
    "text": "dom = CartesianDomain(5, 6) dom = CartesianDomain(1.:5, [1,2,3,4,5,6.])The length of all the above domains is 30, i.e. it is equal to the product of the lengths of all dimensions.\n\nTypically, the model can be evaluated over the cartesian product of all dimensions.  However, there can be specific locations of the domain for which there is not empirical data to compare with, making the model evaluation useless.  In these cases it is possible to select a subset of the cartesian domain using a 1D linear index, e.g.:julia dom = CartesianDomain(1.:5, [1,2,3,4,5,6.], index=collect(0:4) .* 6 .+ 1)The length of such domain is 5, equal to the length of the vector passed as `index` keyword.\n\n\nA cartesian domain can always be transformed into a linear domain, while the inverse is usually not possible.  To check how a \"flattened\" version of a cartesian domain looks like you can use the `DataFitting.flatten` function, i.e.:julia dom = CartesianDomain(1.:5, [1,2,3,4,5,6.], index=collect(0:4) .* 6 .+ 1) lin = DataFitting.flatten(dom)Actually, all models are always evaluated on \"flattened\", i.e. linear, domains.\n\nTo get the vector of coordinates for dimensions 1, 2, etc. of the `dom` object use the `dom[1]`, `dom[2]`, etc. syntax.  For linear domains all such vectors have the same length, for cartesian domains the lengths may differ.\n\n\n## Multidimensional fitting\n\nAs an example we will fit a 2D plane.  The analytic function will accept two vectors for coordinates x and y, and 2 parameters.julia f(x, y, p1, p2) = @.  p1 * x  +  p2 * yThis function will be called during model evaluation, where only linear domains are involved, hence we are sure that both the `x` and `y` vectors will have the same lengths.\n\nTo create a multidimensional `Measures` object we will populate a 2D array and use it as argument to the `Measures` function:julia dom = CartesianDomain(30, 40) d = fill(0., size(dom)); for i in 1:length(dom[1])     for j in 1:length(dom[2])         d[i,j] = f(dom[1][i], dom[2][j], 1.2, 2.4)     end end data = Measures(d + randn(rng, size(d)), 1.)\nTo fit the model proceed in the usual way:julia model = Model(:comp1 => FuncWrap(f, 1, 2)) prepare!(model, dom, :comp1) result = fit!(model, data)\n## Interactive Use\n`DataFitting.jl` provides several facilities for interactive use on the REPL:\n- all the types (i.e. `Domain`, `Measures`, `Model` and `FitResult`) have a dedicated `show` method to quickly and easily inspect their contents.  Simply type the name of the object to run this method; \n- To get the list of currently defined components in a model simply type `model[:<TAB>`;\n- To get a list of parameter for a component simply type `model[:<COMPONENT NAME>]`, e.g. `model[:comp1]`.  Remember that the component parameter can either be scalar `Parameter` or `Vector{Parameter}`.  In the latter case the parameter name shown in the REPL has an integer index appended;\n- To get the list of model parameter in a result simply type `result.param[:<TAB>`;\n\n\n\n## Parameter settings\nEach model parameter has a few settings that can be tweaked by the user before running the actul fit:\n- `.val` (float): guess initial value;\n- `.low` (float): lower limit for the value (default: `-Inf`);\n- `.high` (float): upper limit for the value (default: `+Inf`);\n- `.fixed` (bool): false for free parameters, true for fixed ones (default: `false`);\n- `.expr` (string): a mathematical expression to bind the parameter value to other parameters (default: `\"\"`);\n\n**Important note**: the default minimizer ([LsqFit](https://github.com/JuliaNLSolvers/LsqFit.jl) do not supports bounded parameters, while  [CMPFit](https://github.com/gcalderone/CMPFit.jl)) supports them.\n\nConsidering the previous example we can limit the interval for `p1`, and fix the value for `p2` as follows:julia model.comp[:comp1].p[1].val  = 1   # guess initial value model.comp[:comp1].p[1].low  = 0.5 # lower limit model.comp[:comp1].p[1].high = 1.5 # upper limit model.comp[:comp1].p[2].val  = 2.4 model.comp[:comp1].p[2].fixed = true result = fit!(model, data, minimizer=CMPFit.Minimizer())\nTo remove the limits on `p1` simply set their bounds to +/- Inf:julia model.comp[:comp1].p[1].low  = -Inf model.comp[:comp1].p[1].high = +Inf\nAs another example we may constrain `p2` to always be twice the value of `p1`:julia model.comp[:comp1].p[2].expr = \"comp1p1 + comp1p2\" model.comp[:comp1].p[2].fixed = false\n**Important note:** each time you change one (or more) parameter expression(s) you should call `prepare!` passing just the model as argument.  This is required to recompile the model:julia prepare!(model) result = fit!(model, data)Note that in the example above we had to fix the `p2` parameter otherwise the minizer will try to find a best fit for a parameter which has no influence on the final model, since its value will always be overwritten by the expression.  The only situation where the parameter should be left free is when the expression involves the parameter itself, e.g.:julia model.comp[:comp1].p2.expr = \"comp1p1 + comp1p2\" model.comp[:comp1].p2.fixed = false prepare!(model) result = fit!(model, data)\n\n## Component settings\nA model component can be disabled altoghether and its evaluation fixed to a specific value  by calling `setcompvalue!`, e.g.:julia setcompvalue!(model, :comp1, 10)In further evaluation the `comp1` component will always evaluate to 10.  Note thet the component parameters are completely ignored in this case, so be sure to have at least one free parameter before running the fit.\n\nTo restore the normal component behaviour simply set its value to `NaN`, i.e.:julia setcompvalue!(model, :comp1, NaN) ```"
},

{
    "location": "autodocs/#DataFitting.Model",
    "page": "Docstrings",
    "title": "DataFitting.Model",
    "category": "type",
    "text": "Model\n\nConstructor for the Model structure.\n\n\n\n\n\nReturns a component evaluation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.domain",
    "page": "Docstrings",
    "title": "DataFitting.domain",
    "category": "function",
    "text": "domain\n\nReturn the domain associated to a model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.evalcounter",
    "page": "Docstrings",
    "title": "DataFitting.evalcounter",
    "category": "function",
    "text": "evalcounter\n\nReturn the number of times the model has been evaluated.\n\n\n\n\n\nevalcounter\n\nReturn the number of times a component has been evaluated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.evaluate!",
    "page": "Docstrings",
    "title": "DataFitting.evaluate!",
    "category": "function",
    "text": "evaluate!\n\nEvaluate the model(s)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.fit!",
    "page": "Docstrings",
    "title": "DataFitting.fit!",
    "category": "function",
    "text": "fit!\n\nFit a model against data, using the specified minimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.nparams",
    "page": "Docstrings",
    "title": "DataFitting.nparams",
    "category": "function",
    "text": "nparams\n\nReturns number of params in a component.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.prepare!",
    "page": "Docstrings",
    "title": "DataFitting.prepare!",
    "category": "function",
    "text": "prepare!\n\nRecompile the expressions after one (or more) parameter expressions have been changed\n\n\n\n\n\nprepare!\n\nPrepare a model to be evaluated on the given domain, with the given mathematical expression to join the components.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.resetcounters!",
    "page": "Docstrings",
    "title": "DataFitting.resetcounters!",
    "category": "function",
    "text": "resetcounters!\n\nReset model and components evaluation counters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFitting.setcompvalue!",
    "page": "Docstrings",
    "title": "DataFitting.setcompvalue!",
    "category": "function",
    "text": "setcompvalue!\n\nSet a component value in the model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DataFitting.@code_ndimDataFitting.AbstractCartesianDomainDataFitting.AbstractComponentDataFitting.AbstractComponentDataDataFitting.AbstractCountsDataFitting.AbstractDataDataFitting.AbstractDomainDataFitting.AbstractLinearDomainDataFitting.AbstractMeasuresDataFitting.AbstractMinimizerDataFitting.CartesianDomainDataFitting.CartesianDomain_2DDataFitting.CompiledExpressionDataFitting.ComponentEvaluationDataFitting.CountsDataFitting.Counts_1DDataFitting.Counts_2DDataFitting.DataFittingDataFitting.DomainDataFitting.Domain_1DDataFitting.Domain_2DDataFitting.FitParameterDataFitting.FitResultDataFitting.FuncWrapDataFitting.FuncWrap_cdataDataFitting.HashVectorDataFitting.MeasuresDataFitting.Measures_1DDataFitting.Measures_2DDataFitting.Meta_parseDataFitting.MinimizerDataFitting.ModelDataFitting.ParameterDataFitting.SimpleParamDataFitting.SimpleParam_cdataDataFitting.checkIDDataFitting.compdataDataFitting.domainDataFitting.evalDataFitting.evalcounterDataFitting.evaluate!DataFitting.fit!DataFitting.flattenDataFitting.getaxisextremaDataFitting.getaxismaxDataFitting.getaxisminDataFitting.getparamsDataFitting.getsetparams!DataFitting.includeDataFitting.keyToIndexDataFitting.minimizeDataFitting.nparamsDataFitting.oldverDataFitting.prepare!DataFitting.resetcounters!DataFitting.setcompvalue!DataFitting.support_param_limitsDataFitting.test_componentDataFitting.values"
},

]}
