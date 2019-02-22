var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Simple-Random-1",
    "page": "Readme",
    "title": "Simple Random",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)This is a collection of Julia functions to make random things. Part of the SimpleWorld collection."
},

{
    "location": "#Random-unit-vector-1",
    "page": "Readme",
    "title": "Random unit vector",
    "category": "section",
    "text": "random_unit_vector(d) returns a random d-dimensional unit vector."
},

{
    "location": "#Random-subsets-1",
    "page": "Readme",
    "title": "Random subsets",
    "category": "section",
    "text": "random_subset creates a random subset with the following variations:random_subset(A): create a random subset of A  with each elementincluded with probability 0.5.random_subset(A,k): create a random k-elementsubset of A.random_subset(n): create a random subset of 1:n.\nrandom_subset(n,k): create a random k-elementsubset of 1:n."
},

{
    "location": "#Random-selection-1",
    "page": "Readme",
    "title": "Random selection",
    "category": "section",
    "text": "random_choice is used to select a number or object at random according to some (finite, discrete distribution). We provide two variants:random_choice(weights) randomly chooses a value from 1 to n,where n is the number of elements in weights. The probability that k is chosen is proportional to weights[k]. The weights must be nonnegative and not all zero.random_choice(dict) choose a random key k from dict with weightproportional to dict[k]. Thus, dict must be of type Dict{S, T<:Real}."
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "No error checking is done on the input. An errormight be raised for bad input, but that\'s not guaranteed.The implementation might be improved. If the sizeof the argument is small, this is efficient enough. But if wts (or d) has many elements, I probably should do some sort of binary search through the vector of cumulative sums."
},

{
    "location": "#Histogram-1",
    "page": "Readme",
    "title": "Histogram",
    "category": "section",
    "text": "The function histplot(x) creates a PyPlot bar chart giving a histogram of the values in the list x. Called as histplot(x,n) creates such a plot with n bins.Note: This function has been moved to a separate file histplot.jl in the src directory. I\'ve been having some issues with PyPlot and this function doesn\'t really apply to creating random things (but   rather to visualizing them)."
},

{
    "location": "#Distributions-1",
    "page": "Readme",
    "title": "Distributions",
    "category": "section",
    "text": "Note: I\'m just wrapping stuff found in  Distributions. Probably better just to use that package directly."
},

{
    "location": "#Binomial-1",
    "page": "Readme",
    "title": "Binomial",
    "category": "section",
    "text": "binom_rv(n,p) generates a random binomial random value. p defaults to 0.5."
},

{
    "location": "#Poisson-1",
    "page": "Readme",
    "title": "Poisson",
    "category": "section",
    "text": "poisson_rv(lambda) returns a Poisson random value with mean lambda (which defaults to 1.0)."
},

{
    "location": "#Exponential-1",
    "page": "Readme",
    "title": "Exponential",
    "category": "section",
    "text": "exp_rv(theta) returns an exponential random value with mean theta (which defaults to 1.0)."
},

{
    "location": "#Random-Variable-Type-1",
    "page": "Readme",
    "title": "Random Variable Type",
    "category": "section",
    "text": "The RV type represents a random variable with finite support; that is, the set of possible values produced by the random variable is finite. This rules out continuous random variables and discrete random variables with infinite support such as Poisson random variables."
},

{
    "location": "#Defining-a-random-variable-1",
    "page": "Readme",
    "title": "Defining a random variable",
    "category": "section",
    "text": "The user needs to specify the value type of the random variable (which needs to be a Number type) and the data type for the probabilities (which needs to be a Real type such as Float64 or Rational{Int}).For example, to define a random variable whose values are integers and whose probabilities are rational numbers, we do this:julia> using SimpleRandom\n\njulia> X = RV{Int, Rational{Int}}()\nRV{Int64,Rational{Int64}} with 0 valuesNow let\'s imagine that we want the values of X to be in the set {1,2,3} with probabilities 1/2, 1/4, and 1/4 respectively. We can specify this in two ways.First, we can directly enter the probabilities like this:julia> X = RV{Int, Rational{Int}}()\nRV{Int64,Rational{Int64}} with 0 values\n\njulia> X[1]=1//2\n1//2\n\njulia> X[2]=1//4\n1//4\n\njulia> X[3]=1//4\n1//4\n\njulia> report(X)\n1   1//2\n2   1//4\n3   1//4Alternatively, we can enter values and have them automatically scaled so that they add to 1.julia> X = RV{Int, Rational{Int}}()\nRV{Int64,Rational{Int64}} with 0 values\n\njulia> X[1] = 2\n2\n\njulia> X[2] = 1\n1\n\njulia> X[3] = 1\n1\n\njulia> report(X)\n1	  1//2\n2	  1//4\n3	  1//4Rescaling happens automatically any time the user/computer wants to access the probability associated with a value. In this case, the report function prints out the probabilities associated with each value so the rescaling took place behind the scenes then it was invoked.Continuing this example, if we now enter X[4]=1//2, the probabilities no longer sum to 1, so if we request the probability associated with a value, the rescaling takes place.julia> X[4] = 1//2\n1//2\n\njulia> X[4]\n1//3\n\njulia> report(X)\n1	 1//3\n2	 1//6\n3	 1//6\n4	 1//3In summary, X[v]=p assigns probability p to the value v. Retrieving a value invokes a rescaling operation (if needed) before the value is returned. Note that if v is a value that has not been assigned a probability, then 0 is returned."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "The following functions are provided:E(X) returns the expected value of X.\nVar(X) returns the variance of X.\nlength(X) returns the number of values to which probabilitieshave been assigned.vals(X) returns an iterator to the values associated with X.\nprobs(X) returns an iterator to the probabilities associatedwith values in X.report(X) prints a table consisting of the values and theirassociated probabilities.random_choice(X) returns a random value v of X at randomwith probability X[v]. This function is not efficient.  Compare these timings for generating an array of ten thousand binomial random values:julia> X = Binomial_RV(20,.5)\nRV{Int64,Float64} with 21 values\n\njulia> tic(); A = [ random_choice(X) for _=1:10_000 ]; toc();\nelapsed time: 0.230939433 seconds\n\njulia> tic(); B = [ binom_rv(20,.5) for _=1:10_000]; toc();\nelapsed time: 0.017233562 seconds"
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "a*X where a is a number creates a new random variableby multiplying the values in X by a.X+Y creates a new random variable that represents the sumof the random variables X and Y considered as independent. Note that 2*X is not the same as X+X.X-Y is the difference of independent X and Y."
},

{
    "location": "#Pre-made-random-variables-1",
    "page": "Readme",
    "title": "Pre-made random variables",
    "category": "section",
    "text": "Uniform_RV(n) creates a random variable whose values arein 1:n each with probability 1//n.Bernoulli_RV(p) creates a random variable whose value is 0with probability 1-p and 1 with probability p.Binomial(n,p) creates a random variable whose values are in 0:nwith probability given by the binomial distribution. That is, the value k has probability binomial(n,k)*p^k*(1-p)^(n-k)."
},

{
    "location": "autodocs/#SimpleRandom.Bernoulli_RV",
    "page": "Docstrings",
    "title": "SimpleRandom.Bernoulli_RV",
    "category": "function",
    "text": "Bernoulli(p) makes a single coin flip RV.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.Binomial_RV",
    "page": "Docstrings",
    "title": "SimpleRandom.Binomial_RV",
    "category": "function",
    "text": "Binomial_RV(n,p) returns a binomial random variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.E",
    "page": "Docstrings",
    "title": "SimpleRandom.E",
    "category": "function",
    "text": "E(X) is the expected value of X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.RV",
    "page": "Docstrings",
    "title": "SimpleRandom.RV",
    "category": "type",
    "text": "RV represents a discrete random variable with finite support.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.Uniform_RV",
    "page": "Docstrings",
    "title": "SimpleRandom.Uniform_RV",
    "category": "function",
    "text": "Uniform_RV(n) returns the uniform distribution on {1,2,...,n}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.Var",
    "page": "Docstrings",
    "title": "SimpleRandom.Var",
    "category": "function",
    "text": "Var(Y) is the variance of Y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.binom_rv",
    "page": "Docstrings",
    "title": "SimpleRandom.binom_rv",
    "category": "function",
    "text": "binom_rv(n,p) generates a random binomial random value. p defaults to 0.5.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.exp_rv",
    "page": "Docstrings",
    "title": "SimpleRandom.exp_rv",
    "category": "function",
    "text": "exp_rv(theta) returns an exponential random value with mean theta (which defaults to 1.0).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.poisson_rv",
    "page": "Docstrings",
    "title": "SimpleRandom.poisson_rv",
    "category": "function",
    "text": "poisson_rv(lambda) generates a Poisson random value with mean lamba (which defaults to 1.0).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.probs",
    "page": "Docstrings",
    "title": "SimpleRandom.probs",
    "category": "function",
    "text": "probs(X::RV) returns an iterator of the probabilities associated with the values in X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.random_choice",
    "page": "Docstrings",
    "title": "SimpleRandom.random_choice",
    "category": "function",
    "text": "random_choice(X) for a random variable X returns a value of X according to its probability distribution. That is, the probability a value v is returned is X[v].\n\n\n\n\n\nrandom_choice(weights) randomly chooses a value from 1 to n, where n is the number of elements in weights. The probability that k is chosen is proportional to weights[k]. The weights must be nonnegative and not all zero.\n\nrandom_choice(dict) choose a random key k from dict with weight proportional to dict[k]. Thus, dict must be of type Dict{S, T<:Real}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.random_subset",
    "page": "Docstrings",
    "title": "SimpleRandom.random_subset",
    "category": "function",
    "text": "random_subset is used to create random subsets as follows:\n\nrandom_subset(A): random subset of A with each element\n\nchosen with probability 1/2.\n\nrandom_subset(A,k): random k-element subset of A.\nrandom_subset(n): random subset of 1:n.\nrandom_subset(n,k): random k-element subset of 1:n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.random_unit_vector",
    "page": "Docstrings",
    "title": "SimpleRandom.random_unit_vector",
    "category": "function",
    "text": "random_unit_vector(d) returns a random d-dimensional unit vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.report",
    "page": "Docstrings",
    "title": "SimpleRandom.report",
    "category": "function",
    "text": "report(X) prints out a list of the values of X and their associated probabilities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.validate!",
    "page": "Docstrings",
    "title": "SimpleRandom.validate!",
    "category": "function",
    "text": "validate!(X) ensures that the probabilies of the values in X sum to one. If not, they are rescaled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleRandom.vals",
    "page": "Docstrings",
    "title": "SimpleRandom.vals",
    "category": "function",
    "text": "vals(X::RV) returns an iterator of the values this random variable can take. Use X[v] to get the associate probability of the value v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleRandom.Bernoulli_RVSimpleRandom.Binomial_RVSimpleRandom.ESimpleRandom.RVSimpleRandom.RV_typesSimpleRandom.SimpleRandomSimpleRandom.Uniform_RVSimpleRandom.VarSimpleRandom.binom_rvSimpleRandom.evalSimpleRandom.exp_rvSimpleRandom.includeSimpleRandom.poisson_rvSimpleRandom.probsSimpleRandom.random_choiceSimpleRandom.random_subsetSimpleRandom.random_unit_vectorSimpleRandom.reportSimpleRandom.validate!SimpleRandom.vals"
},

]}
