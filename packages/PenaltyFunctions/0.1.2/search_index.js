var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PenaltyFunctions-1",
    "page": "Readme",
    "title": "PenaltyFunctions",
    "category": "section",
    "text": "PenaltyFunctions.jl is a Julia package that provides generic implementations for a diverse set of penalty functions that are commonly used for regularization purposes in Machine Learning.Package Status Package Evaluator Build Status\n(Image: License) (Image: Pkg Eval 0.6) (Image: Build Status) (Image: Build status) (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Many popular models in Machine Learning are parameterized by a set of real-valued coefficients θ (theta), which is usually stored in the form of an array. If our data set has k features, then θ would typically be a vector of k or k+1 numeric elements. Each individual feature x_i of our data set is assigned a corresponding coefficient θ_i, which is used to quantify the feature\'s influence on the prediction. The concrete values for the coefficient vector are learned by an optimization algorithm, which tries to select the \"best\" set of coefficients for the given data and model. Without any restriction on their values the optimization algorithm is free to choose the coefficients freely, which may result in overly complex prediction functions. This freedom is known to cause the optimization algorithm to overfit to the noise in the training data. This is where penalties come in!A penalty is a function of the coefficients and only the coefficients. It associates the given set of coefficients with a cost without any regard for their influence on the predictive power of the prediction function. This cost is then is added to the overall cost of the prediction function. This way the optimization algorithm is encouraged to choose \"simpler\" coefficients. What exactly \"simpler\" means depends on the chosen penalty. In general terms: penalties help to reduce the possibility of overfitting."
},

{
    "location": "#Available-Penalties-1",
    "page": "Readme",
    "title": "Available Penalties",
    "category": "section",
    "text": "This package implements a number of carefully crafted penalty functions, as well as an API to query their properties (e.g. convexity). Furthermore, we expose methods to compute their values and derivatives for a single value, coefficient vectors, and even arrays of arbitrary dimensionality. The provided penalty functions fall into one of two main families, namely Element Penalties and Array Penalties."
},

{
    "location": "#Element-Penalties-1",
    "page": "Readme",
    "title": "Element Penalties",
    "category": "section",
    "text": "The first family of penalty functions contains all those that apply to to the individual elements of θ element-wise. The resulting cost of a coefficient array is then the sum of the element-wise results.Univariate Parameter Bivariate Parameter\n(Image: univariate_elem) (Image: bivariate_elem)\nThe cost-values of various penalties as a function of a single coefficient Cross sections of the cost-surfaces. This time for two coefficientsEvery penalty that is of this family is subtype of ElementPenalty. From an implementation perspective these penalties are defined using the element-wise functions. The following table lists the implemented types and their definitions.Penalty value on element\nNoPenalty() g(θ) = 0\nL1Penalty() g(θ) = abs(θ)\nL2Penalty() g(θ) = 0.5 * θ ^ 2\nElasticNetPenalty(α = 0.5) g(θ) = (1 - α) * abs(θ) + α * .5 * θ ^ 2\nSCADPenalty(a = 3.7, γ = 1.0) L1Penalty that blends to constant\nMCPPenalty(γ = 2.0) g(θ) = abs(θ) < γ ? abs(θ) - θ ^ 2 / 2γ : γ / 2\nLogPenalty(η = 1.0) g(θ) = log(1 + η * abs(θ))The total cost for an array of coefficients is then defined as sum(g, θ).using PenaltyFunctions\np = L1Penalty()\nx = randn(5)\ns = randn(5)\nbuffer = zeros(5)\n\n# value\nvalue(p, x[1])        # evaluate on element\nvalue(p, x)           # evaluate on array\nvalue.(p, x)          # broadcast is supported as well\nvalue(p, x[1], s[1])  # evaluate on element, scaled by scalar\nvalue(p, x, s[1])     # evaluate on array, scaled by scalar\nvalue(p, x, s)        # evaluate on array, element-wise scaling\n\n# value via calling the Penalty object\np = L1Penalty()\np([1,2,3])\n\n# derivatives and gradients\nderiv(p, x[1])        # derivative\nderiv(p, x[1], s[1])  # scaled derivative\ngrad(p, x)            # gradient\ngrad(p, x, s[1])      # scaled gradient\ngrad(p, x, s)         # element-wise scaled gradient\ngrad!(buffer, p, x)       # overwrite buffer with gradient\ngrad!(buffer, p, x, s[1]) # overwrite buffer with scaled gradient\ngrad!(buffer, p, x, s)    # overwrite buffer with element-wise scaled gradient\n\n# prox operator\nprox(p, x[1], s[1]) # prox on element\nprox(p, x, s[1])    # prox on array, scaled by scalar\nprox(p, x, s)       # prox on array, element-wise scaling\nprox!(p, x, s[1])   # overwrite x, scaled by scalar\nprox!(p, x, s)      # overwrite x, element-wise scaling"
},

{
    "location": "#Array-Penalties-1",
    "page": "Readme",
    "title": "Array Penalties",
    "category": "section",
    "text": "The second family of penalty functions contains all those that that need to be evaluated on the entire coefficient array θ at once. Every penalty that belongs to this family is subtype of ArrayPenalty. The following table outlines the implemented types and their definitions.Penalty value on array\nNuclearNormPenalty() sum of singular values of x\nMahalanobisPenalty(C) g(x) = x\' * C\' * C * x\nGroupLassoPenalty() g(x) = vecnorm(x)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl.Pkg.add(\"PenaltyFunctions\")"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code is free to use under the terms of the MIT \"Expat\" license."
},

{
    "location": "autodocs/#PenaltyFunctions.ArrayPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.ArrayPenalty",
    "category": "type",
    "text": "Penalties that are applied to the entire parameter array only\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.ElasticNetPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.ElasticNetPenalty",
    "category": "type",
    "text": "ElasticNetPenalty, weighted average of L1Penalty and L2Penalty\n\ng(θ) = α * abs(θ) + (1 - α) * .5 * θ ^ 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.ElementPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.ElementPenalty",
    "category": "type",
    "text": "Penalties that are applied element-wise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.GroupLassoPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.GroupLassoPenalty",
    "category": "type",
    "text": "Group Lasso Penalty.  Able to set the entire vector (group) to 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.L1Penalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.L1Penalty",
    "category": "type",
    "text": "L1Penalty aka LASSO\n\ng(θ) = abs(θ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.L2Penalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.L2Penalty",
    "category": "type",
    "text": "L2Penalty aka Ridge\n\ng(θ) = .5 * θ ^ 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.LogPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.LogPenalty",
    "category": "type",
    "text": "LogPenalty(η)\n\ng(θ) = log(1 + η * θ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.MCPPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.MCPPenalty",
    "category": "type",
    "text": "MCPPenalty(γ) (MC+)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.MahalanobisPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.MahalanobisPenalty",
    "category": "type",
    "text": "MahalanobisPenalty(C)\n\nSupports a Mahalanobis distance penalty (xᵀCᵀCx for a vector x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.NoPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.NoPenalty",
    "category": "type",
    "text": "Unpenalized\n\ng(θ) = 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PenaltyFunctions.SCADPenalty",
    "page": "Docstrings",
    "title": "PenaltyFunctions.SCADPenalty",
    "category": "type",
    "text": "Smoothly Clipped Absolute Deviation Penalty\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PenaltyFunctions.AAPenaltyFunctions.AbstractBatchIteratorPenaltyFunctions.AbstractBatchViewPenaltyFunctions.AbstractDataIteratorPenaltyFunctions.AbstractObsIteratorPenaltyFunctions.AbstractObsViewPenaltyFunctions.AbstractSetPenaltyFunctions.ArrayPenaltyPenaltyFunctions.BatchIteratorPenaltyFunctions.CostPenaltyFunctions.DataIteratorPenaltyFunctions.DataViewPenaltyFunctions.DiscreteSetPenaltyFunctions.DistanceLossPenaltyFunctions.ElasticNetPenaltyPenaltyFunctions.ElementPenaltyPenaltyFunctions.GroupLassoPenaltyPenaltyFunctions.IntervalSetPenaltyFunctions.L1PenaltyPenaltyFunctions.L2PenaltyPenaltyFunctions.LearnBasePenaltyFunctions.LearnablePenaltyFunctions.LogPenaltyPenaltyFunctions.LossPenaltyFunctions.MCPPenaltyPenaltyFunctions.MahalanobisPenaltyPenaltyFunctions.MarginLossPenaltyFunctions.MinimizablePenaltyFunctions.NoPenaltyPenaltyFunctions.NuclearNormPenaltyPenaltyFunctions.ObsDimPenaltyFunctions.ObsIteratorPenaltyFunctions.PenaltyPenaltyFunctions.PenaltyFunctionsPenaltyFunctions.ProxableElementPenaltyPenaltyFunctions.SCADPenaltyPenaltyFunctions.ScaledArrayPenaltyPenaltyFunctions.ScaledElementPenaltyPenaltyFunctions.StochasticTransformationPenaltyFunctions.SupervisedLossPenaltyFunctions.TransformationPenaltyFunctions.TupleSetPenaltyFunctions.UnsupervisedLossPenaltyFunctions._scale_checkPenaltyFunctions.addgradPenaltyFunctions.addgrad!PenaltyFunctions.datasubsetPenaltyFunctions.derivPenaltyFunctions.deriv!PenaltyFunctions.deriv2PenaltyFunctions.evalPenaltyFunctions.fitPenaltyFunctions.fit!PenaltyFunctions.getobsPenaltyFunctions.getobs!PenaltyFunctions.gradPenaltyFunctions.grad!PenaltyFunctions.includePenaltyFunctions.inputdomainPenaltyFunctions.isclasscalibratedPenaltyFunctions.isclipablePenaltyFunctions.isconvexPenaltyFunctions.isdifferentiablePenaltyFunctions.isdistancebasedPenaltyFunctions.isfisherconsPenaltyFunctions.islipschitzcontPenaltyFunctions.islipschitzcont_derivPenaltyFunctions.islocallylipschitzcontPenaltyFunctions.ismarginbasedPenaltyFunctions.isminimizablePenaltyFunctions.isnemitskiPenaltyFunctions.isstrictlyconvexPenaltyFunctions.isstronglyconvexPenaltyFunctions.issymmetricPenaltyFunctions.istwicedifferentiablePenaltyFunctions.isunivfisherconsPenaltyFunctions.learnPenaltyFunctions.learn!PenaltyFunctions.meanderivPenaltyFunctions.meanvaluePenaltyFunctions.namePenaltyFunctions.nobsPenaltyFunctions.obs_dimPenaltyFunctions.paramsPenaltyFunctions.params!PenaltyFunctions.proxPenaltyFunctions.prox!PenaltyFunctions.scaledPenaltyFunctions.soft_threshPenaltyFunctions.soft_thresh!PenaltyFunctions.sumderivPenaltyFunctions.sumvaluePenaltyFunctions.targetdomainPenaltyFunctions.targetsPenaltyFunctions.transformPenaltyFunctions.transform!PenaltyFunctions.updatePenaltyFunctions.update!PenaltyFunctions.valuePenaltyFunctions.value!PenaltyFunctions.value_derivPenaltyFunctions.value_deriv!PenaltyFunctions.value_gradPenaltyFunctions.value_grad!"
},

]}
