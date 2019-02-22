var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleANOVA.jl-1",
    "page": "Readme",
    "title": "SimpleANOVA.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)Analysis of Variance for Julia, the old-fashioned way.This is a basic attempt to get a simple ANOVA implementation for Julia that works with data directly - no linear models.The goal is to allow one function to do as much for you as possible, automatically choosing the right calculations.Handles ANOVA with up to 3 crossed factors (fixed or random) and arbitrarily many nested factors. Requires equal replication.It uses multidimensional arrays to interpret the structure of the data. Replicates should either be indexed along the first dimension or contained in a vector, with Factor B and Factor A the next available indices.See docstring for usage.Note: Uses parts from InvertedIndices.jlVERY EXPERIMENTAL - NOT READY FOR REAL USE"
},

{
    "location": "autodocs/#SimpleANOVA.AnovaData",
    "page": "Docstrings",
    "title": "SimpleANOVA.AnovaData",
    "category": "type",
    "text": "AnovaData\n\nContainer for the complete results of an ANOVA test.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleANOVA.AnovaEffect",
    "page": "Docstrings",
    "title": "SimpleANOVA.AnovaEffect",
    "category": "type",
    "text": "AnovaEffect\n\nSupertype for all ANOVA data items: AnovaValue, AnovaFactor, AnovaResult\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleANOVA.AnovaFactor",
    "page": "Docstrings",
    "title": "SimpleANOVA.AnovaFactor",
    "category": "type",
    "text": "AnovaFactor <: AnovaEffect\n\nA set of values for an Anova effect which has a mean square.\n\nname - the name of this factor\n\nss - sum of squares\n\ndf - degrees of freedom\n\nms - mean square\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleANOVA.AnovaResult",
    "page": "Docstrings",
    "title": "SimpleANOVA.AnovaResult",
    "category": "type",
    "text": "AnovaResult <: AnovaEffect\n\nA set of values for an Anova factor which has been tested\n\nname - the name of this factor\n\nss - sum of squares\n\ndf - degrees of freedom\n\nms - mean square\n\nf - the F statistic\n\np - the probability of a Type I error (imcorrect rejection of null hypothesis)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleANOVA.AnovaValue",
    "page": "Docstrings",
    "title": "SimpleANOVA.AnovaValue",
    "category": "type",
    "text": "AnovaValue <: AnovaEffect\n\nA set of values for an Anova item for which a mean square is not required.\n\nname - the name of this value\n\nss - sum of squares\n\ndf - degrees of freedom\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleANOVA.FactorType",
    "page": "Docstrings",
    "title": "SimpleANOVA.FactorType",
    "category": "type",
    "text": "FactorType\n\nfixed - A crossed fixed-effects factor\n\nrandom - A crossed random-effects factor\n\nnested - A random factor fully nested within another factor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleANOVA.InvertedIndex",
    "page": "Docstrings",
    "title": "SimpleANOVA.InvertedIndex",
    "category": "type",
    "text": "InvertedIndex(idx)\nNot(idx)\n\nConstruct an inverted index, selecting all indices not in the passed idx.\n\nUpon indexing into an array, the InvertedIndex behaves like a 1-dimensional collection of the indices of the array that are not in idx. Bounds are checked to ensure that all indices in idx are within the bounds of the array — even though they are skipped. The InvertedIndex behaves like a 1-dimensional collection of its inverted indices. If idx spans multiple dimensions (like a multidimensional logical mask or CartesianIndex), then the inverted index will similarly span multiple dimensions.\n\nCopied and trimmed down from InvertedIndices.jl repository\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleANOVA.anova",
    "page": "Docstrings",
    "title": "SimpleANOVA.anova",
    "category": "function",
    "text": "anova(observations::Array{Union{Number, Vector{Number}}}, factortypes = FactorType[]; factornames = String[], hasreplicates = true)\nanova(observations::Vector{Number}, factorassignments::Vector{Vector{Any}}, factortypes = FactorType[]; factornames = String[], hasreplicates = true)\nanova(df::DataFrame, observationscolumn::Symbol, factorcolumns::Vector{Symbol}, factortypes = FactorType[]; factornames = String[])\n\nPerforms an Analysis of Variance (ANOVA) calculation.\n\nOperates on up to 3 crossed factors (fixed or random) and arbitrarily many random nested factors, with or without replicates, on balanced data.\n\nArguments\n\nobservations: Array containing the values to test. For the array, each dimension is a factor level, such that observations[2,5,3] indicates the 2nd level of the first factor, the 5th level of the second factor, and the 3rd level of the third factor. May contain values or vectors of values, where the vector contains replicates. Factors should be ordered with least significant first. For the vector, must provide factorassignments to specify factor levels.\nfactorassignments: Vector of vectors of integers specifying how each observation is assigned to a factor level. Provide this when observations is given as a vector. Factor levels do not have to be consecutive or ordered. Nested factors must reuse factor levels currently.\nfactortypes: Vector indicating the FactorType for each factor. If present, replicates must appear first, any nested after, and then random or fixed in any order. Specify replicates if the first dimension of the observations matrix contains replicate values (vs. contained in vectors). If too few values are provided, remaining are assumed to be fixed.\nfactornames: Vector of names for each factor, excluding the replicate factor. If empty, will be automatically populated alphabetically.\n\nNotes: The last index will be the top factor in the table.\n\nOutput: AnovaData structure containing the test results for each factor.\n\nExamples\n\nanova(observations)                        # N-way fixed-effects ANOVA with replicates (vectors or first dimension)\nanova(observations, hasreplicates = false) # N-way fixed-effects ANOVA without replicates (first dimension)\nanova(observations, [random])              # N-way ANOVA with lower random factor and 1 or 2 upper fixed factors\nanova(observations, [random])              # N-way ANOVA with lower random factor and 1 or 2 upper fixed factors\nanova(observations, [fixed, random])       # N-way ANOVA with 1 lower fixed factor, 1 random factor, and 0 or 1 upper fixed factor\nanova(observations, [nested, random])      # N-way fixed-effects ANOVA with 1 random nested factor, 1 random factor, and 1-2 fixed factors\n\nGlossary\n\nobservation: The dependent variable.\nfactor: An independent variable.\nfactor level: A value of a factor.\nbalanced: All combinations of factor levels have the same number of observations.\ncrossed factor: A factor with levels that combine with the levels of all other crossed factors.\nfixed factor: A factor with fixed effects (e.g. treatment, concentration, exposure time).\nrandom factor: A factor with random effects (e.g. location, individual).\nnested factor: A random factor where the levels are unique to a combination of crossed factor levels (e.g. replicate).\nsum of squares (SS): A measure of variance that is dependent on sample size. Also called \"sum of squared deviations.\"\ndegrees of freedom (DF, ν): The number of bins in which the values could have been moved, if random.\nmean square (MS): SS / DF. Corrects for the larger variance expected if random values can be assigned to more bins. Also called \"mean squared error\" or \"mean squared deviation.\"\nF-statistic: The division of MS values produce a result belonging to the \"F distribution\", the shape of which depends on the DF of the numerator and denominator. The location of this value on the distribution provides the p-value.\np-value: The probability that, if all measurements had been drawn from the same population, you would obtain data at least as extreme as contained in your observations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleANOVA.AnovaDataSimpleANOVA.AnovaEffectSimpleANOVA.AnovaFactorSimpleANOVA.AnovaResultSimpleANOVA.AnovaValueSimpleANOVA.FactorTypeSimpleANOVA.InvertedIndexSimpleANOVA.NotSimpleANOVA.SimpleANOVASimpleANOVA.__init__SimpleANOVA.amongnestedfactorscalcSimpleANOVA.anovaSimpleANOVA.anovakernelSimpleANOVA.cellscalcSimpleANOVA.cellsnameSimpleANOVA.errorcalcSimpleANOVA.errornameSimpleANOVA.evalSimpleANOVA.factorscalcSimpleANOVA.fixedSimpleANOVA.ftestSimpleANOVA.getdenominatorsSimpleANOVA.getnumeratorsSimpleANOVA.includeSimpleANOVA.interactionscalcSimpleANOVA.nestedSimpleANOVA.nestedfactorscalcSimpleANOVA.pairwisecalcSimpleANOVA.plotSimpleANOVA.randomSimpleANOVA.remaindernameSimpleANOVA.spanned_indicesSimpleANOVA.sumfirstdimSimpleANOVA.threewayinteractionSimpleANOVA.threewisecalcSimpleANOVA.totalcalcSimpleANOVA.totalnameSimpleANOVA.validate"
},

]}
