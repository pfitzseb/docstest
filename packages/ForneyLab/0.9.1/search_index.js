var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ForneyLab.jl-1",
    "page": "Readme",
    "title": "ForneyLab.jl",
    "category": "section",
    "text": "(Image: Build Status)ForneyLab.jl is a Julia package for automatic generation of (Bayesian) inference algorithms. Given a probabilistic model, ForneyLab generates efficient Julia code for message-passing based inference. It uses the model structure to generate an algorithm that consists of a sequence of local computations on a Forney-style factor graph (FFG) representation of the model. For an excellent introduction to message passing and FFGs, see The Factor Graph Approach to Model-Based Signal Processing by Loeliger et al. (2007).We designed ForneyLab with a focus on flexible and modular modeling of time-series data. ForneyLab enables a user to:Conveniently specify a probabilistic model;\nAutomatically generate an efficient inference algorithm;\nCompile the inference algorithm to executable Julia code.The current version supports belief propagation (sum-product message passing), variational message passing and expectation propagation.The ForneyLab project page provides more background on ForneyLab as well as pointers to related literature and talks. For a practical introduction, have a look at the demos."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install ForneyLab through the Julia package manager:] add ForneyLabIf you want to be able to use the graph visualization functions, you will also need to have GraphViz installed. On Linux, just use apt-get install graphviz or yum install graphviz. On Windows, run the installer and afterwards manually add the path of the GraphViz installation to the PATH system variable. On MacOS, use for example brew install graphviz. The dot command should work from the command line.Some demos use the PyPlot plotting module. Install it using ] add PyPlot.Optionally, use ] test ForneyLab to validate the installation by running the test suite."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "There are demos available to get you started. Additionally, the ForneyLab project page contains a talk and other resources that might be helpful."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "(c) 2018 GN Store Nord A/S. Permission to use this software for any non-commercial purpose is granted. See LICENSE.md file for details."
},

{
    "location": "autodocs/#ForneyLab.@RV",
    "page": "Docstrings",
    "title": "ForneyLab.@RV",
    "category": "macro",
    "text": "@RV provides a convenient way to add Variables and FactorNodes to the graph.\n\nExamples:\n\n# Automatically create new Variable x, try to assign x.id = :x if this id is available\n@RV x ~ GaussianMeanVariance(constant(0.0), constant(1.0))\n\n# Explicitly specify the id of the Variable\n@RV [id=:my_y] y ~ GaussianMeanVariance(constant(0.0), constant(1.0))\n\n# Automatically assign z.id = :z if this id is not yet taken\n@RV z = x + y\n\n# Manual assignment\n@RV [id=:my_u] u = x + y\n\n# Just create a variable\n@RV x\n@RV [id=:my_x] x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.@ensureVariables",
    "page": "Docstrings",
    "title": "ForneyLab.@ensureVariables",
    "category": "macro",
    "text": "@ensureVariables(...) casts all non-Variable arguments to Variable through constant(arg).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.@expectationPropagationRule",
    "page": "Docstrings",
    "title": "ForneyLab.@expectationPropagationRule",
    "category": "macro",
    "text": "@expectationPropagationRule registers a expectation propagation update  rule by defining the rule type and the corresponding methods for the outboundType  and isApplicable functions. If no name (type) for the new rule is passed, a  unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.@marginalRule",
    "page": "Docstrings",
    "title": "ForneyLab.@marginalRule",
    "category": "macro",
    "text": "@marginalRule registers a marginal update rule for a (joint) marginal by defining the rule type and the corresponding methods for the isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.@naiveVariationalRule",
    "page": "Docstrings",
    "title": "ForneyLab.@naiveVariationalRule",
    "category": "macro",
    "text": "@naiveVariationalRule registers a variational update rule for the naive (mean-field) factorization by defining the rule type and the corresponding methods for the  outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.@structuredVariationalRule",
    "page": "Docstrings",
    "title": "ForneyLab.@structuredVariationalRule",
    "category": "macro",
    "text": "@structuredVariationalRule registers a variational update rule for the structured factorization by defining the rule type and the corresponding methods for the  outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.@sumProductRule",
    "page": "Docstrings",
    "title": "ForneyLab.@sumProductRule",
    "category": "macro",
    "text": "@sumProductRule registers a sum-product update rule by defining the rule type and the corresponding methods for the outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.@symmetrical",
    "page": "Docstrings",
    "title": "ForneyLab.@symmetrical",
    "category": "macro",
    "text": "Duplicate a method definition with the order of the first two arguments swapped. This macro is used to duplicate methods that are symmetrical in their first two input arguments, but require explicit definitions for the different argument orders. Example:\n\n@symmetrical function prod!(x, y, z)\n    ...\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Addition",
    "page": "Docstrings",
    "title": "ForneyLab.Addition",
    "category": "type",
    "text": "Description:\n\nAn addition constraint factor node\n\nf(out,in1,in2) = δ(in1 + in2 - out)\n\nInterfaces:\n\n1. out\n2. in1\n3. in2\n\nConstruction:\n\nAddition(out, in1, in2, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Bernoulli",
    "page": "Docstrings",
    "title": "ForneyLab.Bernoulli",
    "category": "type",
    "text": "Description:     Bernoulli factor node\n\nout ∈ {0, 1}\np ∈ [0, 1]\n\nf(out, p) = Ber(out|p) = p^out (1 - p)^{1 - out}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Bernoulli(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Beta",
    "page": "Docstrings",
    "title": "ForneyLab.Beta",
    "category": "type",
    "text": "Description:     Beta factor node\n\nReal scalars\na > 0\nb > 0\n\nf(out, a, b) = Beta(out|a, b) = Γ(a + b)/(Γ(a) Γ(b)) out^{a - 1} (1 - out)^{b - 1}\n\nInterfaces:     1. out     2. a     3. b\n\nConstruction:     Beta(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Categorical",
    "page": "Docstrings",
    "title": "ForneyLab.Categorical",
    "category": "type",
    "text": "Description:     Categorical factor node\n\nThe categorical node defines a one-dimensional probability\ndistribution over the normal basis vectors of dimension d\n\nout ∈ {0, 1}^d where Σ_k out_k = 1\np ∈ [0, 1]^d, where Σ_k p_k = 1\n\nf(out, p) = Cat(out | p)\n          = Π_i p_i^{out_i}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Categorical(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Clamp",
    "page": "Docstrings",
    "title": "ForneyLab.Clamp",
    "category": "type",
    "text": "Description:\n\nA factor that clamps a variable to a constant value.\n\nf(out) = δ(out - value)\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nClamp(out, value, id=:some_id)\nClamp(value, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Cluster",
    "page": "Docstrings",
    "title": "ForneyLab.Cluster",
    "category": "type",
    "text": "A Cluster specifies a collection of edges adjacent to node that belong to the same RecognitionFactor. A joint marginal can be computed over a cluster.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Contingency",
    "page": "Docstrings",
    "title": "ForneyLab.Contingency",
    "category": "type",
    "text": "Description:     Contingency factor node\n\nThe contingency distribution is a multivariate generalization of\nthe categorical distribution. As a bivariate distribution, the\ncontingency distribution defines the joint probability\nover two unit vectors. The parameter p encodes a contingency matrix\nthat specifies the probability of co-occurrence.\n\nout1 ∈ {0, 1}^d1 where Σ_j out1_j = 1\nout2 ∈ {0, 1}^d2 where Σ_k out2_k = 1\np ∈ [0, 1]^{d1 × d2}, where Σ_jk p_jk = 1\n\nf(out1, out2, p) = Con(out1, out2 | p)\n                 = Π_jk p_jk^{out1_j * out2_k}\n\nA Contingency distribution over more than two variables requires\nhigher-order tensors as parameters; these are not implemented in ForneyLab.\n\nInterfaces:     1. out1     2. out2     3. p\n\nConstruction:     Contingency(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.DependencyGraph",
    "page": "Docstrings",
    "title": "ForneyLab.DependencyGraph",
    "category": "type",
    "text": "A DependencyGraph is a directed graph in which an edge v -> w represents a dependency of vertex v on vertex w. Dependency graphs are used for example by message scheduling algorithms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Dirichlet",
    "page": "Docstrings",
    "title": "ForneyLab.Dirichlet",
    "category": "type",
    "text": "Description:     Dirichlet factor node\n\nReal vector\na .> 0\n\nMultivariate:\nf(out, a) = Dir(out|a)\n          = Γ(Σ_i a_i)/(Π_i Γ(a_i)) Π_i out_i^{a_i}\n\nMatrix variate with independent rows:\nf(out, a) = Π_j Dir(out|a_j.)\n          = Π_j Γ(Σ_k a_jk)/(Π_k Γ(a_jk)) Π_k out_jk^{a_jk}\n\nInterfaces:     1. out     2. a\n\nConstruction:     Dirichlet(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.DotProduct",
    "page": "Docstrings",
    "title": "ForneyLab.DotProduct",
    "category": "type",
    "text": "Description:\n\nout = in1\'*in2\n\nin1: d-dimensional vector\nin2: d-dimensional vector\nout: scalar\n\n       in2\n       |\n  in1  V   out\n----->[⋅]----->\n\nf(out, in1, in2) =  δ(out - in1\'*in2)\n\nInterfaces:\n\n1 i[:out], 2 i[:in1], 3 i[:in2]\n\nConstruction:\n\nDotProduct(out, in1, in2, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Edge",
    "page": "Docstrings",
    "title": "ForneyLab.Edge",
    "category": "type",
    "text": "An Edge joins two interfaces (half-edges) a and b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Equality",
    "page": "Docstrings",
    "title": "ForneyLab.Equality",
    "category": "type",
    "text": "Description:\n\nAn equality constraint factor node\n\nf([1],[2],[3]) = δ([1] - [2]) δ([1] - [3])\n\nInterfaces:\n\n1, 2, 3\n\nConstruction:\n\nEquality(id=:some_id)\n\nThe interfaces of an Equality node have to be connected manually.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Exponential",
    "page": "Docstrings",
    "title": "ForneyLab.Exponential",
    "category": "type",
    "text": "Description:\n\nMaps a location to a scale parameter by exponentiation\n\nf(out,in1) = δ(out - exp(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nExponential(out, in1, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.FactorGraph",
    "page": "Docstrings",
    "title": "ForneyLab.FactorGraph",
    "category": "type",
    "text": "A factor graph consisting of factor nodes and edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Gamma",
    "page": "Docstrings",
    "title": "ForneyLab.Gamma",
    "category": "type",
    "text": "Description:\n\nA gamma node with shape-rate parameterization:\n\nf(out,a,b) = Gam(out|a,b) = 1/Γ(a) b^a out^{a - 1} exp(-b out)\n\nInterfaces:\n\n1. out\n2. a (shape)\n3. b (rate)\n\nConstruction:\n\nGamma(out, a, b, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.GaussianMeanPrecision",
    "page": "Docstrings",
    "title": "ForneyLab.GaussianMeanPrecision",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-precision parameterization:\n\nf(out,m,w) = 𝒩(out|m,w) = (2π)^{-D/2} |w|^{1/2} exp(-1/2 (out - m)\' w (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. w (precision)\n\nConstruction:\n\nGaussianMeanPrecision(out, m, w, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.GaussianMeanVariance",
    "page": "Docstrings",
    "title": "ForneyLab.GaussianMeanVariance",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-variance parameterization:\n\nf(out,m,v) = 𝒩(out|m,v) = (2π)^{-D/2} |v|^{-1/2} exp(-1/2 (out - m)\' v^{-1} (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. v (covariance)\n\nConstruction:\n\nGaussianMeanVariance(out, m, v, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.GaussianMixture",
    "page": "Docstrings",
    "title": "ForneyLab.GaussianMixture",
    "category": "type",
    "text": "Description:\n\nA Gaussian mixture with mean-precision parameterization:\n\nf(out, z, m1, w1, m2, w2, ...) = 𝒩(out|m1, w1)^z_1 * 𝒩(out|m2, w2)^z_2 * ...\n\nInterfaces:\n\n1. out\n2. z (switch)\n3. m1 (mean)\n4. w1 (precision)\n5. m2 (mean)\n6. w2 (precision)\n...\n\nConstruction:\n\nGaussianMixture(out, z, m1, w1, m2, w2, ..., id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Interface",
    "page": "Docstrings",
    "title": "ForneyLab.Interface",
    "category": "type",
    "text": "An Interface belongs to a FactorNode and represents a half-edge. An Interface has at most one partner interface, with wich it forms an edge.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.LogNormal",
    "page": "Docstrings",
    "title": "ForneyLab.LogNormal",
    "category": "type",
    "text": "Description:\n\nA log-normal node with location-scale parameterization:\n\nf(out,m,s) = logN(out|m, s) = 1/out (2π s)^{-1/2} exp(-1/(2s) (log(out) - m)^2))\n\nInterfaces:\n\n1. out\n2. m (location)\n3. s (squared scale)\n\nConstruction:\n\nLogNormal(out, m, s, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.MarginalRule",
    "page": "Docstrings",
    "title": "ForneyLab.MarginalRule",
    "category": "type",
    "text": "MarginalRule{factortype} specifies a joint marginal update rule with respect to a node of type `factortype`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.MarginalScheduleEntry",
    "page": "Docstrings",
    "title": "ForneyLab.MarginalScheduleEntry",
    "category": "type",
    "text": "A MarginalScheduleEntry defines a marginal computation. The marginal_update_rule <: MarginalUpdateRule defines the rule that is used to calculate the (joint) marginal over target.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.MarginalUpdateRule",
    "page": "Docstrings",
    "title": "ForneyLab.MarginalUpdateRule",
    "category": "type",
    "text": "A MarginalUpdateRule specifies how a (joint) marginal is calculated from incoming messages (and a node function).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Message",
    "page": "Docstrings",
    "title": "ForneyLab.Message",
    "category": "type",
    "text": "Encodes a message, which is a probability distribution with a scaling factor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.MessageUpdateRule",
    "page": "Docstrings",
    "title": "ForneyLab.MessageUpdateRule",
    "category": "type",
    "text": "A MessageUpdateRule specifies how a Message is calculated from the node function and the incoming messages. Use subtypes(MessageUpdateRule) to list the available rules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Multiplication",
    "page": "Docstrings",
    "title": "ForneyLab.Multiplication",
    "category": "type",
    "text": "Description:\n\nFor continuous random variables, the multiplication node acts\nas a (matrix) multiplication constraint, with node function\n\nf(out, in1, a) = δ(out - a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nMultiplication(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Nonlinear",
    "page": "Docstrings",
    "title": "ForneyLab.Nonlinear",
    "category": "type",
    "text": "Description:\n\nNonlinear node modeling a nonlinear relation. Updates for\nthe nonlinear node are computed through local linearization.\n\nf(out, in1) = δ(out - g(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nNonlinear(out, in1, g::Function, J_g::Function, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.PointMass",
    "page": "Docstrings",
    "title": "ForneyLab.PointMass",
    "category": "type",
    "text": "PointMass is an abstract type used to describe point mass distributions. It never occurs in a FactorGraph, but it is used as a probability distribution type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.ProbabilityDistribution",
    "page": "Docstrings",
    "title": "ForneyLab.ProbabilityDistribution",
    "category": "type",
    "text": "Encodes a probability distribution as a FactorNode of type family with fixed interfaces\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.RecognitionFactor",
    "page": "Docstrings",
    "title": "ForneyLab.RecognitionFactor",
    "category": "type",
    "text": "A RecognitionFactor specifies the subset of variables that comprise a joint factor in the recognition factorization.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.RecognitionFactorization",
    "page": "Docstrings",
    "title": "ForneyLab.RecognitionFactorization",
    "category": "type",
    "text": "A RecognitionFactorization holds a collection of (non-overlapping) recognition factors that specify the recognition factorization over a factor graph that is used for variational inference.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.ScheduleEntry",
    "page": "Docstrings",
    "title": "ForneyLab.ScheduleEntry",
    "category": "type",
    "text": "A ScheduleEntry defines a message computation. The msg_update_rule <: MessageUpdateRule defines the rule that is used to calculate the message coming out of interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Sigmoid",
    "page": "Docstrings",
    "title": "ForneyLab.Sigmoid",
    "category": "type",
    "text": "Description:     Constrains a continuous, real-valued variable with a binary (boolean) variable.\n\nf(bin, real) = σ(bin⋅real)\n\nInterfaces:     1. bin     2. real\n\nConstruction:     Sigmoid(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Terminal",
    "page": "Docstrings",
    "title": "ForneyLab.Terminal",
    "category": "type",
    "text": "Description:\n\nTerminal is a special type of node that is only used in the internal\ngraph of a CompositeNode. A Terminal is used to terminate an Edge in the\ninternal graph that is linked to an interface of the CompositeNode.\n\nA Terminal is linked to an interface of the\nCompositeNode containing the Terminal.\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nTerminal(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Transition",
    "page": "Docstrings",
    "title": "ForneyLab.Transition",
    "category": "type",
    "text": "Description:\n\nThe transition node models a transition between discrete\nrandom variables, with node function\n\nf(out, in1, a) = Cat(out | a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nTransition(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Variable",
    "page": "Docstrings",
    "title": "ForneyLab.Variable",
    "category": "type",
    "text": "A Variable encompasses one or more edges in a FactorGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.Wishart",
    "page": "Docstrings",
    "title": "ForneyLab.Wishart",
    "category": "type",
    "text": "Description:\n\nA Wishart node:\n\nf(out,v,nu) = W(out|v, nu) = B(v, nu) |out|^{(nu - D - 1)/2} exp(-1/2 tr(v^{-1} out))\n\nInterfaces:\n\n1. out\n2. v (scale matrix)\n3. nu (degrees of freedom)\n\nConstruction:\n\nWishart(out, v, nu, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.addNode!",
    "page": "Docstrings",
    "title": "ForneyLab.addNode!",
    "category": "function",
    "text": "Add a FactorNode to a FactorGraph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.addVariable!",
    "page": "Docstrings",
    "title": "ForneyLab.addVariable!",
    "category": "function",
    "text": "Add a Variable to a FactorGraph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.approximate",
    "page": "Docstrings",
    "title": "ForneyLab.approximate",
    "category": "function",
    "text": "Find a local linear approximation to the nonlinear vector function g at x_hat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.associate!",
    "page": "Docstrings",
    "title": "ForneyLab.associate!",
    "category": "function",
    "text": "associate!(interface, variable) associates interface with variable by connecting interface to an Edge belonging to variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.breakerTypes",
    "page": "Docstrings",
    "title": "ForneyLab.breakerTypes",
    "category": "function",
    "text": "Constructs breaker types dictionary for breaker sites\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.clusterId",
    "page": "Docstrings",
    "title": "ForneyLab.clusterId",
    "category": "function",
    "text": "Return the id of the cluster/variable that the node-edge combination belongs to \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.collectEPSites",
    "page": "Docstrings",
    "title": "ForneyLab.collectEPSites",
    "category": "function",
    "text": "Find default EP sites present in node_set\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.collectInboundTypes",
    "page": "Docstrings",
    "title": "ForneyLab.collectInboundTypes",
    "category": "function",
    "text": "Find the inbound types that are required to compute a joint marginal over target. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\nFind the inbound types that are required to compute the message for entry. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\nFind the inbound types that are required to compute the message for entry. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.collectInbounds",
    "page": "Docstrings",
    "title": "ForneyLab.collectInbounds",
    "category": "function",
    "text": "Construct the inbound code that computes the marginal for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\nCollect and construct SP update code for each inbound.\n\n\n\n\n\nConstruct argument code for naive VB updates\n\n\n\n\n\nConstruct argument code for structured VB updates\n\n\n\n\n\nFind the inbound types that are required to compute the message for entry. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.collectNaiveVariationalNodeInbounds",
    "page": "Docstrings",
    "title": "ForneyLab.collectNaiveVariationalNodeInbounds",
    "category": "function",
    "text": "Construct the inbound code that computes the message for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.collectStructuredVariationalNodeInbounds",
    "page": "Docstrings",
    "title": "ForneyLab.collectStructuredVariationalNodeInbounds",
    "category": "function",
    "text": "Construct the inbound code that computes the message for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.collectSumProductNodeInbounds",
    "page": "Docstrings",
    "title": "ForneyLab.collectSumProductNodeInbounds",
    "category": "function",
    "text": "Construct the inbound code that computes the message for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.condense",
    "page": "Docstrings",
    "title": "ForneyLab.condense",
    "category": "function",
    "text": "Contruct a condensed schedule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.conditionalDifferentialEntropy",
    "page": "Docstrings",
    "title": "ForneyLab.conditionalDifferentialEntropy",
    "category": "function",
    "text": "Compute conditional differential entropy: H(Y|X) = H(Y, X) - H(X)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.connect!",
    "page": "Docstrings",
    "title": "ForneyLab.connect!",
    "category": "function",
    "text": "Connect loose end of edge to interface b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.constant",
    "page": "Docstrings",
    "title": "ForneyLab.constant",
    "category": "function",
    "text": "constant creates a Variable which is linked to a new Clamp, and returns this variable.\n\ny = constant(3.0, id=:y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.currentGraph",
    "page": "Docstrings",
    "title": "ForneyLab.currentGraph",
    "category": "function",
    "text": "Return currently active FactorGraph. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.currentRecognitionFactorization",
    "page": "Docstrings",
    "title": "ForneyLab.currentRecognitionFactorization",
    "category": "function",
    "text": "Return currently active RecognitionFactorization. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.disconnect!",
    "page": "Docstrings",
    "title": "ForneyLab.disconnect!",
    "category": "function",
    "text": "Disconnect edge from interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.edges",
    "page": "Docstrings",
    "title": "ForneyLab.edges",
    "category": "function",
    "text": "Collect all edges corresponding with variable(s)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.ensureMatrix",
    "page": "Docstrings",
    "title": "ForneyLab.ensureMatrix",
    "category": "function",
    "text": "ensureMatrix: cast input to a Matrix if necessary\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.expectationPropagationAlgorithm",
    "page": "Docstrings",
    "title": "ForneyLab.expectationPropagationAlgorithm",
    "category": "function",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.expectationPropagationSchedule",
    "page": "Docstrings",
    "title": "ForneyLab.expectationPropagationSchedule",
    "category": "function",
    "text": "expectationPropagationSchedule() generates a expectation propagation message passing schedule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.extend",
    "page": "Docstrings",
    "title": "ForneyLab.extend",
    "category": "function",
    "text": "Find the smallest legal subgraph that includes the argument edges. Default setting terminates the search at soft factors and does not constrain the search to a limiting set (as specified by an empty limit_set argument).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.find_vertex_indexes",
    "page": "Docstrings",
    "title": "ForneyLab.find_vertex_indexes",
    "category": "function",
    "text": "children(vertices, graph; allowcycles=false, breakersites=[], restrict_to=[])\n\nReturn a vector consisting of vertices and all their children in graph. v is a child of u iff there exists a path from u to v. The resulting array is sorted in reverse topological order, i.e. for each directed edge u -> v, v (child of u) appears before u.\n\nOptional keyword arguments:\n\nallow_cycles: set to true to accept cycles.\nbreaker_sites: a Set of vertices on which the search will terminate.\nrestrict_to: a Set of vertices to restrict the search to.\n\nThis function can be used to generate message passing schedules if graph is a dependency graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.flatten",
    "page": "Docstrings",
    "title": "ForneyLab.flatten",
    "category": "function",
    "text": "Flatten a schedule by inlining all internal message passing schedules. This yields a simple, linear schedule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.generateId",
    "page": "Docstrings",
    "title": "ForneyLab.generateId",
    "category": "function",
    "text": "Automatically generate a unique id based on the current counter value for the element type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.handle",
    "page": "Docstrings",
    "title": "ForneyLab.handle",
    "category": "function",
    "text": "Return interface handle name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.hasCollider",
    "page": "Docstrings",
    "title": "ForneyLab.hasCollider",
    "category": "function",
    "text": "Return whether the subgraph contains a collider. If a collider is found, this will lead to conditional dependencies in the recognition distribution (posterior).\n\n\n\n\n\nReturn whether connectedcluster contains a collider. This function assumes the graph for connectedcluster is a connected tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.hasNode",
    "page": "Docstrings",
    "title": "ForneyLab.hasNode",
    "category": "function",
    "text": "hasNode(graph, node) checks if node is part of graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.hasVariable",
    "page": "Docstrings",
    "title": "ForneyLab.hasVariable",
    "category": "function",
    "text": "hasVariable(graph, var) checks if var is part of graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.inferMarginalRule",
    "page": "Docstrings",
    "title": "ForneyLab.inferMarginalRule",
    "category": "function",
    "text": "Infer the rule that computes the joint marginal over cluster\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.inferUpdateRule!",
    "page": "Docstrings",
    "title": "ForneyLab.inferUpdateRule!",
    "category": "function",
    "text": "Infer the update rule that computes the message for entry, as dependent on the inbound types\n\n\n\n\n\nInfer the update rule that computes the message for entry, as dependent on the inbound types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.inferUpdateRules!",
    "page": "Docstrings",
    "title": "ForneyLab.inferUpdateRules!",
    "category": "function",
    "text": "inferUpdateRules!(schedule) infers specific message update rules for all schedule entries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.interfaceToScheduleEntryIdx",
    "page": "Docstrings",
    "title": "ForneyLab.interfaceToScheduleEntryIdx",
    "category": "function",
    "text": "Generate a mapping from interface to schedule entry index. Multiple interfaces can map to the same schedule entry if the graph contains composite nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.internalSumProductSchedule",
    "page": "Docstrings",
    "title": "ForneyLab.internalSumProductSchedule",
    "category": "function",
    "text": "internalSumProductSchedule() generates a sum-product message passing schedule for the inner graph of a CompositeNode. This schedule produces the sum-product message out of the specified outbound_interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.isApproxEqual",
    "page": "Docstrings",
    "title": "ForneyLab.isApproxEqual",
    "category": "function",
    "text": "isApproxEqual: check approximate equality\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.isRoundedPosDef",
    "page": "Docstrings",
    "title": "ForneyLab.isRoundedPosDef",
    "category": "function",
    "text": "isRoundedPosDef: is input matrix positive definite? Round to prevent fp precision problems that isposdef() suffers from.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.isValid",
    "page": "Docstrings",
    "title": "ForneyLab.isValid",
    "category": "function",
    "text": "isValid: return true if the parameter field exists and (the first element of) the parameter is not NaN\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.laplace",
    "page": "Docstrings",
    "title": "ForneyLab.laplace",
    "category": "function",
    "text": "Gamma approximation to the log-normal distribution using Laplace\'s method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.leaftypes",
    "page": "Docstrings",
    "title": "ForneyLab.leaftypes",
    "category": "function",
    "text": "leaftypes(datatype) returns all subtypes of datatype that are leafs in the type tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.localClusterIds",
    "page": "Docstrings",
    "title": "ForneyLab.localClusterIds",
    "category": "function",
    "text": "Return the ids of the clusters/variables to which edges connected to node belong\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.localRecognitionFactorIds",
    "page": "Docstrings",
    "title": "ForneyLab.localRecognitionFactorIds",
    "category": "function",
    "text": "Return the ids of the recognition factors to which edges connected to node belong\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.localRecognitionFactorization",
    "page": "Docstrings",
    "title": "ForneyLab.localRecognitionFactorization",
    "category": "function",
    "text": "Return a dictionary from recognition factor-id to variable/cluster-ids local to node\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.mapToBernoulliParameterRange",
    "page": "Docstrings",
    "title": "ForneyLab.mapToBernoulliParameterRange",
    "category": "function",
    "text": "Map m to range of Bernoulli parameter p ∈ [0, 1]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.marginalSchedule",
    "page": "Docstrings",
    "title": "ForneyLab.marginalSchedule",
    "category": "function",
    "text": "marginalSchedule() generates a marginal schedule that computes the marginals for each target entry\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.marginalString",
    "page": "Docstrings",
    "title": "ForneyLab.marginalString",
    "category": "function",
    "text": "Depending on the origin of the Clamp node message, contruct the marginal code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.mat",
    "page": "Docstrings",
    "title": "ForneyLab.mat",
    "category": "function",
    "text": "Helper function to construct 1x1 Matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.matches",
    "page": "Docstrings",
    "title": "ForneyLab.matches",
    "category": "function",
    "text": "Special inheritance rules for parametric Message types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.messageString",
    "page": "Docstrings",
    "title": "ForneyLab.messageString",
    "category": "function",
    "text": "Depending on the origin of the Clamp node message, contruct the outbound message code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.nodesConnectedToExternalEdges",
    "page": "Docstrings",
    "title": "ForneyLab.nodesConnectedToExternalEdges",
    "category": "function",
    "text": "Find the nodes in recognition_factor that are connected to external edges\n\n\n\n\n\nFind the nodes connected to internal_edges that are also connected to external edges\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.pack",
    "page": "Docstrings",
    "title": "ForneyLab.pack",
    "category": "function",
    "text": "This function ensures the argument expression is evaluated at runtime, allowing access to local variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.placeholder",
    "page": "Docstrings",
    "title": "ForneyLab.placeholder",
    "category": "function",
    "text": "placeholder(...) creates a Clamp node and registers this node as a data placeholder with the current graph.\n\n# Link variable y to buffer with id :y,\n# indicate that Clamp will hold Float64 values.\nplaceholder(y, :y, datatype=Float64)\n\n# Link variable y to index 3 of buffer with id :y.\n# Specify the data type by passing a default value for the Clamp.\nplaceholder(y, :y, index=3, default=0.0)\n\n# Indicate that the Clamp will hold an array of size `dims`,\n# with Float64 elements.\nplaceholder(X, :X, datatype=Float64, dims=(3,2))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.recognitionFactorId",
    "page": "Docstrings",
    "title": "ForneyLab.recognitionFactorId",
    "category": "function",
    "text": "Return the id of the RecognitionFactor that edge belongs to\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.sumProductAlgorithm",
    "page": "Docstrings",
    "title": "ForneyLab.sumProductAlgorithm",
    "category": "function",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.sumProductSchedule",
    "page": "Docstrings",
    "title": "ForneyLab.sumProductSchedule",
    "category": "function",
    "text": "sumProductSchedule() generates a sum-product message passing schedule that computes the marginals for each of the argument variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.summaryDependencyGraph",
    "page": "Docstrings",
    "title": "ForneyLab.summaryDependencyGraph",
    "category": "function",
    "text": "summaryDependencyGraph(edgeset)\n\nReturns a DependencyGraph (directed graph) that encodes the dependencies among summary messages (such as sum-product messages) in edgeset. All Interfaces in edgeset are vertices in the dependency graph. The dependency graph can be used for loop detection, scheduling, etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.summaryPropagationSchedule",
    "page": "Docstrings",
    "title": "ForneyLab.summaryPropagationSchedule",
    "category": "function",
    "text": "summaryPropagationSchedule(variables) builds a generic summary propagation Schedule for calculating the marginal distributions of every variable in variables. The message update rule in each schedule entry is set to Nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.trigammaInverse",
    "page": "Docstrings",
    "title": "ForneyLab.trigammaInverse",
    "category": "function",
    "text": "trigammaInverse(x): solve trigamma(y) = x for y.\n\nUses Newton\'s method on the convex function 1/trigramma(y). Iterations converge monotonically. Based on trigammaInverse implementation in R package \"limma\" by Gordon Smyth: https://github.com/Bioconductor-mirror/limma/blob/master/R/fitFDist.R\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.ultimatePartner",
    "page": "Docstrings",
    "title": "ForneyLab.ultimatePartner",
    "category": "function",
    "text": "ultimatePartner(interface) finds the \'ultimate partner\' of interface. If interface.partner does not belong to a Terminal, it simply returns interface.partner. In case of a Terminal node, it finds the first non-Terminal partner on a higher level factor graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.variateType",
    "page": "Docstrings",
    "title": "ForneyLab.variateType",
    "category": "function",
    "text": "Extract VariateType from dist\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.variationalAlgorithm",
    "page": "Docstrings",
    "title": "ForneyLab.variationalAlgorithm",
    "category": "function",
    "text": "Create a variational algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.variationalExpectationPropagationAlgorithm",
    "page": "Docstrings",
    "title": "ForneyLab.variationalExpectationPropagationAlgorithm",
    "category": "function",
    "text": "Create a variational EP algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.variationalExpectationPropagationSchedule",
    "page": "Docstrings",
    "title": "ForneyLab.variationalExpectationPropagationSchedule",
    "category": "function",
    "text": "variationalExpectationPropagationSchedule() generates an expectation propagation message passing schedule that is limited to the recognition_factor. Updates on EP sites are computed with an ExpectationPropagationRule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForneyLab.variationalSchedule",
    "page": "Docstrings",
    "title": "ForneyLab.variationalSchedule",
    "category": "function",
    "text": "variationalSchedule() generates a variational message passing schedule that computes the marginals for each of the recognition distributions in the recognition factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ForneyLab.*ForneyLab.+ForneyLab.==ForneyLab.@RVForneyLab.@compositeForneyLab.@ensureVariablesForneyLab.@expectationPropagationRuleForneyLab.@marginalRuleForneyLab.@naiveVariationalRuleForneyLab.@structuredVariationalRuleForneyLab.@sumProductRuleForneyLab.@symmetricalForneyLab.AbstractClusterForneyLab.AbstractEdgeForneyLab.AbstractVariableForneyLab.AdditionForneyLab.BernoulliForneyLab.BetaForneyLab.CategoricalForneyLab.ClampForneyLab.ClusterForneyLab.CompositeNodeForneyLab.ContingencyForneyLab.DeltaFactorForneyLab.DependencyGraphForneyLab.DirichletForneyLab.DotProductForneyLab.EPSigmoidRealGBForneyLab.EPSigmoidRealGCForneyLab.EPSigmoidRealGPForneyLab.EdgeForneyLab.EqualityForneyLab.ExpectationPropagationRuleForneyLab.ExponentialForneyLab.FactorGraphForneyLab.FactorNodeForneyLab.ForneyLabForneyLab.GammaForneyLab.GaussianForneyLab.GaussianMeanPrecisionForneyLab.GaussianMeanVarianceForneyLab.GaussianMixtureForneyLab.GaussianWeightedMeanPrecisionForneyLab.InferenceAlgorithmForneyLab.InterfaceForneyLab.LinkedListForneyLab.LinkedListElementForneyLab.LogNormalForneyLab.MGaussianMeanPrecisionGGDForneyLab.MTransitionCCDForneyLab.MarginalRuleForneyLab.MarginalScheduleForneyLab.MarginalScheduleEntryForneyLab.MarginalUpdateRuleForneyLab.MatrixVariateForneyLab.MessageForneyLab.MessageUpdateRuleForneyLab.MultiplicationForneyLab.MultivariateForneyLab.NaiveVariationalRuleForneyLab.NonlinearForneyLab.PointMassForneyLab.ProbabilityDistributionForneyLab.ProductForneyLab.RecognitionFactorForneyLab.RecognitionFactorizationForneyLab.SPAdditionIn1GVGForneyLab.SPAdditionIn1GVPForneyLab.SPAdditionIn1PVGForneyLab.SPAdditionIn1PVPForneyLab.SPAdditionIn2GGVForneyLab.SPAdditionIn2GPVForneyLab.SPAdditionIn2PGVForneyLab.SPAdditionIn2PPVForneyLab.SPAdditionOutVGGForneyLab.SPAdditionOutVGPForneyLab.SPAdditionOutVPGForneyLab.SPAdditionOutVPPForneyLab.SPBernoulliOutVPForneyLab.SPBetaOutVPPForneyLab.SPCategoricalOutVPForneyLab.SPClampForneyLab.SPDirichletOutVPForneyLab.SPDotProductIn1GVPForneyLab.SPDotProductIn2GPVForneyLab.SPDotProductOutVGPForneyLab.SPDotProductOutVPGForneyLab.SPEqualityBernoulliForneyLab.SPEqualityBetaForneyLab.SPEqualityCategoricalForneyLab.SPEqualityDirichletForneyLab.SPEqualityGammaWishartForneyLab.SPEqualityGaussianForneyLab.SPEqualityPointMassForneyLab.SPExponentialIn1LVForneyLab.SPExponentialIn1PVForneyLab.SPExponentialOutVGForneyLab.SPExponentialOutVPForneyLab.SPGammaOutVPPForneyLab.SPGaussianMeanPrecisionMGVPForneyLab.SPGaussianMeanPrecisionMPVPForneyLab.SPGaussianMeanPrecisionOutVGPForneyLab.SPGaussianMeanPrecisionOutVPPForneyLab.SPGaussianMeanVarianceMGVPForneyLab.SPGaussianMeanVarianceMPVPForneyLab.SPGaussianMeanVarianceOutVGPForneyLab.SPGaussianMeanVarianceOutVPPForneyLab.SPLogNormalOutVPPForneyLab.SPMultiplicationAGPVForneyLab.SPMultiplicationAPPVForneyLab.SPMultiplicationIn1GVPForneyLab.SPMultiplicationIn1PVPForneyLab.SPMultiplicationOutVGPForneyLab.SPMultiplicationOutVPGForneyLab.SPMultiplicationOutVPPForneyLab.SPNonlinearIn1GVForneyLab.SPNonlinearOutVGForneyLab.SPSigmoidBinVGForneyLab.SPTransitionIn1CVPForneyLab.SPTransitionOutVCPForneyLab.SPWishartOutVPPForneyLab.SVBGaussianMeanPrecisionMGVDForneyLab.SVBGaussianMeanPrecisionOutVGDForneyLab.SVBGaussianMeanPrecisionWForneyLab.SVBTransitionADVForneyLab.SVBTransitionIn1CVDForneyLab.SVBTransitionOutVCDForneyLab.ScheduleForneyLab.ScheduleEntryForneyLab.SigmoidForneyLab.SoftFactorForneyLab.StructuredVariationalRuleForneyLab.SumProductRuleForneyLab.TerminalForneyLab.TransitionForneyLab.UnivariateForneyLab.VBBernoulliIn1ForneyLab.VBBernoulliOutForneyLab.VBBetaOutForneyLab.VBCategoricalIn1ForneyLab.VBCategoricalOutForneyLab.VBDirichletOutForneyLab.VBGammaOutForneyLab.VBGaussianMeanPrecisionMForneyLab.VBGaussianMeanPrecisionOutForneyLab.VBGaussianMeanPrecisionWForneyLab.VBGaussianMeanVarianceMForneyLab.VBGaussianMeanVarianceOutForneyLab.VBGaussianMixtureMForneyLab.VBGaussianMixtureOutForneyLab.VBGaussianMixtureWForneyLab.VBGaussianMixtureZBerForneyLab.VBGaussianMixtureZCatForneyLab.VBLogNormalOutForneyLab.VBTransitionAForneyLab.VBTransitionIn1ForneyLab.VBTransitionOutForneyLab.VBWishartOutForneyLab.VariableForneyLab.VariateTypeForneyLab.WishartForneyLab.^ForneyLab.addEdge!ForneyLab.addNode!ForneyLab.addVariable!ForneyLab.addVertex!ForneyLab.approximateForneyLab.associate!ForneyLab.averageEnergyForneyLab.breakerTypesForneyLab.childrenForneyLab.cholinvForneyLab.clusterIdForneyLab.collectAverageEnergyInboundsForneyLab.collectConditionalDifferentialEntropyInboundsForneyLab.collectEPSitesForneyLab.collectInboundTypesForneyLab.collectInboundsForneyLab.collectMarginalNodeInboundsForneyLab.collectNaiveVariationalNodeInboundsForneyLab.collectStructuredVariationalNodeInboundsForneyLab.collectSumProductNodeInboundsForneyLab.condenseForneyLab.conditionalDifferentialEntropyForneyLab.connect!ForneyLab.constantForneyLab.convertForneyLab.covForneyLab.currentGraphForneyLab.currentRecognitionFactorizationForneyLab.current_graphForneyLab.current_recognition_factorizationForneyLab.diageyeForneyLab.differentialEntropyForneyLab.dimsForneyLab.disconnect!ForneyLab.dotForneyLab.dot2gifForneyLab.dot2pdfForneyLab.dot2pngForneyLab.dot2svgForneyLab.drawForneyLab.drawPdfForneyLab.drawPngForneyLab.edgeDotForneyLab.edgesForneyLab.ensureMatrixForneyLab.equalForneyLab.evalForneyLab.expForneyLab.expectationPropagationAlgorithmForneyLab.expectationPropagationScheduleForneyLab.extendForneyLab.eyeForneyLab.familyForneyLab.find_vertex_indexesForneyLab.flattenForneyLab.formatForneyLab.freeEnergyAlgorithmForneyLab.gaussianQuadratureForneyLab.genDotForneyLab.generateIdForneyLab.graphvizForneyLab.handleForneyLab.hasColliderForneyLab.hasNodeForneyLab.hasVariableForneyLab.hugeForneyLab.includeForneyLab.inferMarginalRuleForneyLab.inferUpdateRule!ForneyLab.inferUpdateRules!ForneyLab.interfaceToScheduleEntryIdxForneyLab.internalSumProductScheduleForneyLab.invalidate!ForneyLab.isApplicableForneyLab.isApproxEqualForneyLab.isProperForneyLab.isRoundedPosDefForneyLab.isValidForneyLab.laplaceForneyLab.leaftypesForneyLab.localClusterIdsForneyLab.localRecognitionFactorIdsForneyLab.localRecognitionFactorizationForneyLab.logMomentMatchingForneyLab.mapToBernoulliParameterRangeForneyLab.marginalScheduleForneyLab.marginalStringForneyLab.matForneyLab.matchPVInputsForneyLab.matchPermutedCanonicalForneyLab.matchesForneyLab.meanForneyLab.messagePassingAlgorithmForneyLab.messageStringForneyLab.modeForneyLab.momentMatchingForneyLab.nameForneyLab.neighborsForneyLab.nodesForneyLab.nodesConnectedToExternalEdgesForneyLab.outboundTypeForneyLab.packForneyLab.placeholderForneyLab.prod!ForneyLab.recognitionFactorIdForneyLab.ruleEPSigmoidRealGBForneyLab.ruleEPSigmoidRealGCForneyLab.ruleEPSigmoidRealGPForneyLab.ruleMGaussianMeanPrecisionGGDForneyLab.ruleMTransitionCCDForneyLab.ruleSPAdditionIn1GVGForneyLab.ruleSPAdditionIn1GVPForneyLab.ruleSPAdditionIn1PVGForneyLab.ruleSPAdditionIn1PVPForneyLab.ruleSPAdditionIn2GGVForneyLab.ruleSPAdditionIn2GPVForneyLab.ruleSPAdditionIn2PGVForneyLab.ruleSPAdditionIn2PPVForneyLab.ruleSPAdditionOutVGGForneyLab.ruleSPAdditionOutVGPForneyLab.ruleSPAdditionOutVPGForneyLab.ruleSPAdditionOutVPPForneyLab.ruleSPBernoulliOutVPForneyLab.ruleSPBetaOutVPPForneyLab.ruleSPCategoricalOutVPForneyLab.ruleSPDirichletOutVPForneyLab.ruleSPDotProductIn1GVPForneyLab.ruleSPDotProductIn2GPVForneyLab.ruleSPDotProductOutVGPForneyLab.ruleSPDotProductOutVPGForneyLab.ruleSPEqualityBernoulliForneyLab.ruleSPEqualityBetaForneyLab.ruleSPEqualityCategoricalForneyLab.ruleSPEqualityDirichletForneyLab.ruleSPEqualityGammaWishartForneyLab.ruleSPEqualityGaussianForneyLab.ruleSPEqualityPointMassForneyLab.ruleSPExponentialIn1LVForneyLab.ruleSPExponentialIn1PVForneyLab.ruleSPExponentialOutVGForneyLab.ruleSPExponentialOutVPForneyLab.ruleSPGammaOutVPPForneyLab.ruleSPGaussianMeanPrecisionMGVPForneyLab.ruleSPGaussianMeanPrecisionMPVPForneyLab.ruleSPGaussianMeanPrecisionOutVGPForneyLab.ruleSPGaussianMeanPrecisionOutVPPForneyLab.ruleSPGaussianMeanVarianceMGVPForneyLab.ruleSPGaussianMeanVarianceMPVPForneyLab.ruleSPGaussianMeanVarianceOutVGPForneyLab.ruleSPGaussianMeanVarianceOutVPPForneyLab.ruleSPLogNormalOutVPPForneyLab.ruleSPMultiplicationAGPVForneyLab.ruleSPMultiplicationAPPVForneyLab.ruleSPMultiplicationIn1GVPForneyLab.ruleSPMultiplicationIn1PVPForneyLab.ruleSPMultiplicationOutVGPForneyLab.ruleSPMultiplicationOutVPGForneyLab.ruleSPMultiplicationOutVPPForneyLab.ruleSPNonlinearIn1GVForneyLab.ruleSPNonlinearOutVGForneyLab.ruleSPSigmoidBinVGForneyLab.ruleSPTransitionIn1CVPForneyLab.ruleSPTransitionOutVCPForneyLab.ruleSPWishartOutVPPForneyLab.ruleSVBGaussianMeanPrecisionMGVDForneyLab.ruleSVBGaussianMeanPrecisionOutVGDForneyLab.ruleSVBGaussianMeanPrecisionWForneyLab.ruleSVBTransitionADVForneyLab.ruleSVBTransitionIn1CVDForneyLab.ruleSVBTransitionOutVCDForneyLab.ruleVBBernoulliIn1ForneyLab.ruleVBBernoulliOutForneyLab.ruleVBBetaOutForneyLab.ruleVBCategoricalIn1ForneyLab.ruleVBCategoricalOutForneyLab.ruleVBDirichletOutForneyLab.ruleVBGammaOutForneyLab.ruleVBGaussianMeanPrecisionMForneyLab.ruleVBGaussianMeanPrecisionOutForneyLab.ruleVBGaussianMeanPrecisionWForneyLab.ruleVBGaussianMeanVarianceMForneyLab.ruleVBGaussianMeanVarianceOutForneyLab.ruleVBGaussianMixtureMForneyLab.ruleVBGaussianMixtureOutForneyLab.ruleVBGaussianMixtureWForneyLab.ruleVBGaussianMixtureZBerForneyLab.ruleVBGaussianMixtureZCatForneyLab.ruleVBLogNormalOutForneyLab.ruleVBTransitionAForneyLab.ruleVBTransitionIn1ForneyLab.ruleVBTransitionOutForneyLab.ruleVBWishartOutForneyLab.sampleForneyLab.setCurrentGraphForneyLab.setCurrentRecognitionFactorizationForneyLab.slugForneyLab.softmaxForneyLab.sumProductAlgorithmForneyLab.sumProductScheduleForneyLab.summaryDependencyGraphForneyLab.summaryPropagationScheduleForneyLab.swap_argumentsForneyLab.tinyForneyLab.trigammaInverseForneyLab.ultimatePartnerForneyLab.unsafeCovForneyLab.unsafeDetLogMeanForneyLab.unsafeInverseMeanForneyLab.unsafeLogCovForneyLab.unsafeLogMeanForneyLab.unsafeLogVarForneyLab.unsafeMeanForneyLab.unsafeMeanCovForneyLab.unsafeMeanVectorForneyLab.unsafeMirroredLogMeanForneyLab.unsafeModeForneyLab.unsafePrecisionForneyLab.unsafeVarForneyLab.unsafeWeightedMeanForneyLab.unsafeWeightedMeanPrecisionForneyLab.vagueForneyLab.validateGraphVizInstalledForneyLab.varForneyLab.variateTypeForneyLab.variationalAlgorithmForneyLab.variationalExpectationPropagationAlgorithmForneyLab.variationalExpectationPropagationScheduleForneyLab.variationalScheduleForneyLab.viewDotExternalForneyLab.viewDotExternalImageForneyLab.viewDotExternalInteractiveForneyLab.viewDotIniTermForneyLab.viewFileForneyLab.writeInitializationBlockForneyLab.writeMarginalsComputationBlockForneyLab.writeMessagePassingBlockForneyLab.Φ"
},

]}
