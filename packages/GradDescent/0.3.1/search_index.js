var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GradDescent-1",
    "page": "Readme",
    "title": "GradDescent",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov)(Image: ) (Image: )Gradient Descent optimizers in Julia. You provide the gradient, this package calculates the appropriate change in parameters, according to one of several gradient descent optimizers."
},

{
    "location": "autodocs/#GradDescent.Adadelta",
    "page": "Docstrings",
    "title": "GradDescent.Adadelta",
    "category": "type",
    "text": "Construct Adadelta optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.Adagrad",
    "page": "Docstrings",
    "title": "GradDescent.Adagrad",
    "category": "type",
    "text": "Construct Adagrad optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.Adam",
    "page": "Docstrings",
    "title": "GradDescent.Adam",
    "category": "type",
    "text": "Construct Adam optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.Adamax",
    "page": "Docstrings",
    "title": "GradDescent.Adamax",
    "category": "type",
    "text": "Construct Adamax optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.GradDescent",
    "page": "Docstrings",
    "title": "GradDescent.GradDescent",
    "category": "module",
    "text": "Gradient Descent optimizers for Julia.\n\nIntroduction\n\nThis package abstracts the \"boilerplate\" code necessary for gradient descent. Gradient descent is \"a way to minimize an objective function J(θ) parameterized by a model\'s parameters θ  Rᵈ\" (Ruder 2017). Gradient descent finds θ which minizes J by iterating over the following update\n\nθ = θ - η J(θ)\n\nuntil convergence of θ. Certainly, the gradient calculation is model specific, however the learning rate η (at a given iteration) is not. Instead there are many different gradient descent variants which determine the learning rate. Each type of gradient descent optimizer has its own pros/cons. For most of these optimizers, the calculation of the learning rate is based on the value of the gradient (evaluated at a particular θ) and a few (unrelated to the model) hyperparameters.\n\nThe purpose of this package is to allow the user to focus on the calculation of the gradients and not worry about the code for the gradient descent optimizer. I envision a user implementing his/her gradients, experimenting with various optimizers, and modifying the gradients as necessary.\n\nExamples\n\nQuadratic Function\n\nHere I demonstrate a very simple example - minimizing x². In this example, I use \"Adagrad\", a common gradient descent optimizer.\n\nusing GradDescent\n\n# objective function and gradient of objective function\nJ(x) = x ^ 2\ndJ(x) = 2 * x\n\n# number of epochs\nepochs = 1000\n\n# instantiation of Adagrad optimizer with learning rate of 1.0\n# note that this learning rate is likely to high for a\n# high dimensional case\nopt = Adagrad(η=1.0)\n\n# initial value for x (usually initialized with a random value)\nx = 20.0\n\nfor i in 1:epochs\n    # calculate the gradient wrt to the current x\n    g = dJ(x)\n\n    # change to the current x\n    δ = update(opt, g)\n    x -= δ\nend\n\nLinear Regression\n\nNext I demonstrate a more common example - determining the coefficients of a linear model. Here I use \"Adam\" an extension of \"Adagrad\". In this example, we minimize the mean squared error of the predicted outcome and the actual outcome. The parameter space is the coefficients of the regression model.\n\nusing GradDescent, Distributions, ReverseDiff\n\nsrand(1) # set seed\nn = 1000 # number of observations\nd = 10   # number of covariates\nX = rand(Normal(), n, d) # simulated covariates\nb = rand(Normal(), d)    # generated coefficients\nϵ = rand(Normal(0.0, 0.1), n) # noise\nY = X * b + ϵ # observed outcome\nobj(Y, X, b) = mean((Y - X * b) .^ 2) # objective to minimize\n\nepochs = 100 # number of epochs\n\nθ = rand(Normal(), d) # initialize model parameters\nopt = Adam(α=1.0)  # initalize optimizer with learning rate 1.0\n\nfor i in 1:epochs\n    # here we use automatic differentiation to calculate\n    # the gradient at a value\n    # an analytically derived gradient is not required\n    g = ReverseDiff.gradient(θ -> obj(Y, X, θ), θ)\n\n    δ = update(opt, g)\n    θ -= δ\nend\n\nVariational Inference\n\nFinally, I end with an example of black box variational inference (which is what initially motivated this package). Variational inference is a framework for approximating Bayesian posterior distributions using optimization. Most recent algorithms involve monte carlo estimation of gradients in conjuction with gradient ascent. Using GradDescent, we can focus on the gradient calculation without worrying too much about tracking learning rate parameters.\n\nIn this example we perform a full bayesian analysis on a simple model - normally distribution data with known variance. We place a \"noninformative\" Normal prior on the mean.\n\nusing Distributions, ForwardDiff, GradDescent, StatsFuns\n\nsrand(1) # set seed\nn = 1000 # number of observations\nμ_true = 3.0  # true mean\nσ_true = 1.0 # true standard deviation\nx = rand(Normal(μ_true, σ_true), n) # simulate data\n\n# prior on mean\nprior = Normal(0.0, 100.0)\n\n# initialize variational parameters\nλ = rand(Normal(), 1, 2)\nλ[2] = softplus(λ[2])\n\n# initialize optimizer\nopt = Adam(α=1.0)\n\nS = 10 # number of monte carlo simulations for gradient estimation\nepochs = 50 # number of epochs\n\nfor i in 1:epochs\n    # draw S samples from q\n    z = rand(Normal(λ[1], softplus(λ[2])), S)\n\n    # joint density calculations\n    log_prior = logpdf(prior, z)\n    log_lik = map(zi -> loglikelihood(Normal(zi, σ_true), x), z)\n    joint = log_prior + log_lik\n\n    # log variational densities\n    entropy = logpdf(Normal(λ[1], softplus(λ[2])), z)\n\n    # score function calculations\n    qg = ForwardDiff.jacobian(x -> logpdf(Normal(x[1], x[2]),\n                                          z),\n                              [λ[1], softplus(λ[2])])\n\n    # construct monte carlo samples st the expected value is the gradient\n    # of the ELBO\n    f = qg .* (joint - entropy)\n    h = qg\n    a = sum(diag(cov(f, h))) / sum(diag(cov(h)))\n    g = mean(f - a * h, 1) # compute gradient\n\n    # perform gradient ascent step\n    δ = update(opt, g)\n    λ += δ\n\n    # truncate variational standard deviation\n    # don\'t allow it to be too close to 0.0\n    λ[2] = λ[2] < invsoftplus(1e-5) ? invsoftplus(1e-5) : λ[2]\nend\n\n# after gradient ascent, apply softplus function\nλ[2] = softplus(λ[2])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.Momentum",
    "page": "Docstrings",
    "title": "GradDescent.Momentum",
    "category": "type",
    "text": "Construct Momentum optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.Nadam",
    "page": "Docstrings",
    "title": "GradDescent.Nadam",
    "category": "type",
    "text": "Construct Nadam optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.RMSprop",
    "page": "Docstrings",
    "title": "GradDescent.RMSprop",
    "category": "type",
    "text": "Construct RMSprop optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.VanillaGradDescent",
    "page": "Docstrings",
    "title": "GradDescent.VanillaGradDescent",
    "category": "type",
    "text": "Construct Vanilla Gradient Descent optimizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.t",
    "page": "Docstrings",
    "title": "GradDescent.t",
    "category": "function",
    "text": "Number of epochs run\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GradDescent.update",
    "page": "Docstrings",
    "title": "GradDescent.update",
    "category": "function",
    "text": "Calculate change in parameters for gradient descent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GradDescent.AdadeltaGradDescent.AdagradGradDescent.AdamGradDescent.AdamaxGradDescent.GradDescentGradDescent.MomentumGradDescent.NadamGradDescent.OptimizerGradDescent.RMSpropGradDescent.VanillaGradDescentGradDescent.evalGradDescent.includeGradDescent.optimizerGradDescent.paramsGradDescent.tGradDescent.update"
},

]}
