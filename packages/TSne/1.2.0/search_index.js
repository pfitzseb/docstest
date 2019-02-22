var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#t-SNE-(t-Stochastic-Neighbor-Embedding)-1",
    "page": "Readme",
    "title": "t-SNE (t-Stochastic Neighbor Embedding)",
    "category": "section",
    "text": "(Image: Julia 0.6 Status) (Image: Julia 0.7 Status)(Image: Build Status) (Image: Coverage Status)Julia implementation of L.J.P. van der Maaten and G.E. Hintons t-SNE visualisation technique.The scripts in the examples folder require Plots, MLDatasets and RDatasets Julia packages."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"TSne\")"
},

{
    "location": "#Basic-API-usage-1",
    "page": "Readme",
    "title": "Basic API usage",
    "category": "section",
    "text": "using TSne, Statistics, MLDatasets\r\n\r\nrescale(A; dims=1) = (A .- mean(A, dims=dims)) ./ max.(std(A, dims=dims), eps())\r\n\r\nalldata, allabels = MNIST.traindata(Float64);\r\ndata = reshape(permutedims(alldata[:, :, 1:2500], (3, 1, 2)),\r\n               2500, size(alldata, 1)*size(alldata, 2));\r\n# Normalize the data, this should be done if there are large scale differences in the dataset\r\nX = rescale(data, dims=1);\r\n\r\nY = tsne(X, 2, 50, 1000, 20.0);\r\n\r\nusing Plots\r\ntheplot = scatter(Y[:,1], Y[:,2], marker=(2,2,:auto,stroke(0)), color=Int.(allabels[1:size(Y,1)]))\r\nPlots.pdf(theplot, \"myplot.pdf\")(Image: )"
},

{
    "location": "#Command-line-usage-1",
    "page": "Readme",
    "title": "Command line usage",
    "category": "section",
    "text": "julia demo-csv.jl haveheader --labelcol=5 iris-headers.csvCreates myplot.pdf with t-SNE result visualized using Gadfly.jl."
},

{
    "location": "#See-also-1",
    "page": "Readme",
    "title": "See also",
    "category": "section",
    "text": "Some tips working with t-SNE\nHow to Use t-SNE Effectively"
},

{
    "location": "autodocs/#TSne.Hbeta!",
    "page": "Docstrings",
    "title": "TSne.Hbeta!",
    "category": "function",
    "text": "Compute the point perplexities P given its squared distances to the other points D and the precision of Gaussian distribution beta.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TSne.pca",
    "page": "Docstrings",
    "title": "TSne.pca",
    "category": "function",
    "text": "pca(X::Matrix, ncols::Integer = 50)\n\nRun PCA on X to reduce the number of its dimensions to ndims.\n\nFIXME use PCA routine from JuliaStats?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TSne.perplexities",
    "page": "Docstrings",
    "title": "TSne.perplexities",
    "category": "function",
    "text": "perplexities(D::AbstractMatrix, tol::Number = 1e-5, perplexity::Number = 30.0;\n             [keyword arguments])\n\nConvert n×n squared distances matrix D into n×n perplexities matrix P. Performs a binary search to get P-values in such a way that each conditional Gaussian has the same perplexity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TSne.tsne",
    "page": "Docstrings",
    "title": "TSne.tsne",
    "category": "function",
    "text": "tsne(X::Union{AbstractMatrix, AbstractVector}, ndims::Integer=2, reduce_dims::Integer=0,\n     max_iter::Integer=1000, perplexity::Number=30.0; [keyword arguments])\n\nApply t-SNE (t-Distributed Stochastic Neighbor Embedding) to X, i.e. embed its points (rows) into ndims dimensions preserving close neighbours.\n\nReturns the points×ndims matrix of calculated embedded coordinates.\n\nDifferent from the orginal implementation, the default is not to use PCA for initialization.\n\nArguments\n\ndistance if true, specifies that X is a distance matrix, if of type Function or Distances.SemiMetric, specifies the function to use for calculating the distances between the rows (or elements, if X is a vector) of X\nreduce_dims the number of the first dimensions of X PCA to use for t-SNE, if 0, all available dimension are used\npca_init whether to use the first ndims of X PCA as the initial t-SNE layout, if false (the default), the method is initialized with the random layout\nmax_iter how many iterations of t-SNE to do\nperplexity the number of \"effective neighbours\" of a datapoint, typical values are from 5 to 50, the default is 30\nverbose output informational and diagnostic messages\nprogress display progress meter during t-SNE optimization\nmin_gain, eta, initial_momentum, final_momentum, momentum_switch_iter, stop_cheat_iter, cheat_scale low-level parameters of t-SNE optimization\nextended_output if true, returns a tuple of embedded coordinates matrix, point perplexities and final Kullback-Leibler divergence\n\nSee also Original t-SNE implementation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TSne.Hbeta!TSne.TSneTSne.evalTSne.includeTSne.kldivelTSne.pairwisesqdistTSne.pcaTSne.perplexitiesTSne.tsne"
},

]}
