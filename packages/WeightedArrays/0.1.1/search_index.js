var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Weighted-Arrays-.jl-1",
    "page": "Readme",
    "title": "Weighted Arrays .jl",
    "category": "section",
    "text": "(Image: Build Status)This simple package defines a WeightedMatrix, a struct with vector of weights corresponding to the columns of a matrix. By default the weights(x) add up to 1. The array(x) values may have a box constraint:julia> Weighted(randn(3,5))\nWeighted 3×5 Array{Float64,2}, of unclamped θ:\n -0.264476   -1.83297      0.0669732  -0.340433  -1.87672\n  0.0461253  -0.330401     0.0215189   2.3129    -1.78839\n  0.461376    0.00486523  -0.819182   -1.43221   -0.855756\nwith normalised weights p(θ), 5-element Array{Float64,1}:\n 0.2  0.2  0.2  0.2  0.2\n\njulia> Weighted(rand(2,4), ones(4), 0, 1)\nWeighted 2×4 Array{Float64,2}, clamped 0.0 ≦ θ ≦ 1.0:\n 0.7842    0.257179  0.483388  0.780996\n 0.138967  0.748165  0.387104  0.167825\nwith normalised weights p(θ), 4-element Array{Float64,1}:\n 0.25  0.25  0.25  0.25These examples are roughly wrandn(3,5) and wrand(2,4), there are also sub-random sobol(3,7) and regular wgrid(2, 0:0.1:1). Their values are mutable, clamp!(x) will enforce the box constraint, and normalise!(x) (with an s) the weights.They are not subtypes of AbstractArray, but many functions will work. For instance x[1:2, :] keeps only the first two rows (and the weights), hcat(x,y) will concatenate the weights, and mapslices(f,x) will act with f on columns & then restore weights. sort(x) re-arranges columns to order by the weights, sortcols(x) orders by the array instead, unique(x) will accumulate the weights of identical columns. A few functions like log(x) and tanh(x) act element-wise but update the box constraints appropriately.Most of this will work for any N-dimensional Array, not just a Matrix. The weights then belong to the last dimension.<img src=\"deps/red.png?raw=true\" width=\"440\" height=\"400\" alt=\"Plot example\" align=\"right\" padding=\"5\">Plot recipes are defined, in which the area of points indicating weight. The example shown is a grid plus a bivariate sub-random normal distribution:julia> using Plots\n\njulia> plot(wgrid(2, -5:5), m=:+)\n\njulia> plot!(soboln(2, 2000), m=:diamond, c=:red)With more than three rows e.g. plot(wrandn(4,50)), it will plot the first two principal components (and attempt to scale these correctly). There is a function pplot(x) which saves the PCA function (see help for wPCA(x)) in a global variable, so that pplot!(t) can add more points on the same axes.The package is now registered, so can be installed by typing ] and:pkg> add WeightedArrays\n\njulia> using WeightedArrays"
},

{
    "location": "autodocs/#CatViews.CatView",
    "page": "Docstrings",
    "title": "CatViews.CatView",
    "category": "type",
    "text": "CatView(x::Weighted)\n\nGives a vector-like view of both x.array and x.weights, the last d components are weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.Weighted",
    "page": "Docstrings",
    "title": "WeightedArrays.Weighted",
    "category": "type",
    "text": "x = Weighted(array, weights)\n\nCreated a Weighted Array, with given weights associated to the last dimension of array, e.g. to columns of a matrix. Keyword norm=true specifies that weights(x) sum to 1 always; this is enforced on construction. Calling normalise!(x) will re-enforce this, after scaling 2x or hcat()-ing x + y or mutating.\n\nx = Weighted(array, weights, lo, hi)\n\nHere every θ ∈ array is constrained lo ≦ θ ≦ hi, the same for all dimensions. (Weights are similarly 0 ≦ λ < ∞.) Calling clamp!(x) will re-enforce these box constraints, for instance after mutating x[1,2] *= 3 or on y = x .+ 0.4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.clip",
    "page": "Docstrings",
    "title": "WeightedArrays.clip",
    "category": "function",
    "text": "clip(x, ϵ=1.0e-100)\nclip!(x)\n\nSets to zero all entries abs(x[i]) < ϵ. When x::Weighted this acts on x.array only; see also trim().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.clip!",
    "page": "Docstrings",
    "title": "WeightedArrays.clip!",
    "category": "function",
    "text": "clip(x, ϵ=1.0e-100)\nclip!(x)\n\nSets to zero all entries abs(x[i]) < ϵ. When x::Weighted this acts on x.array only; see also trim().\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.flatcopy",
    "page": "Docstrings",
    "title": "WeightedArrays.flatcopy",
    "category": "function",
    "text": "flatten(x::Weighted)\n\nMakes a vector [ reshaped(x.array,:) ; x.weights ].\n\nflatcopy!(x, v::Vector)\n\nCopies numbers from v = flatten(x) back into x.\n\nflatcopy(x, v)\n\nUses only size(x) to know what shape ::Weighted to make out of v (and x.opt for details).\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.flatcopy!",
    "page": "Docstrings",
    "title": "WeightedArrays.flatcopy!",
    "category": "function",
    "text": "flatten(x::Weighted)\n\nMakes a vector [ reshaped(x.array,:) ; x.weights ].\n\nflatcopy!(x, v::Vector)\n\nCopies numbers from v = flatten(x) back into x.\n\nflatcopy(x, v)\n\nUses only size(x) to know what shape ::Weighted to make out of v (and x.opt for details).\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.flatten",
    "page": "Docstrings",
    "title": "WeightedArrays.flatten",
    "category": "function",
    "text": "flatten(x::Weighted)\n\nMakes a vector [ reshaped(x.array,:) ; x.weights ].\n\nflatcopy!(x, v::Vector)\n\nCopies numbers from v = flatten(x) back into x.\n\nflatcopy(x, v)\n\nUses only size(x) to know what shape ::Weighted to make out of v (and x.opt for details).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.load",
    "page": "Docstrings",
    "title": "WeightedArrays.load",
    "category": "function",
    "text": "save(Π, \"file.csv\") = writecsv(\"file.csv\", Π)\nsave(Π, \"file.json\")\nsave(Π, \"file.jld\") = JLD.save(file, \"Π\", Π)\n\nSave Π::Weighted to disk, in one of several formats:\n\nCSV: weights are rightmost column, as in [Π.array\' Π.weights]. Options aren\'t saved, and load() will try to guess them from the numbers. Mathematica: arr = Import[\"file.csv\"][[;; , 1 ;; -2]]; wei = Import[\"file.csv\"][[;; , -1]]\nJSON: saves a dictionary, but dict[\"array\"] is a nested Vector{Vector{Any}} for now, which load() converts to Float64. Includes dict[\"opt\"] == String(Π.opt). Mathematica: arr = Import[\"file.json\"][[1, 2]]; wei = Import[\"file.json\"][[3, 2]] ... and then maybe Style @@@ Thread[{arr, PointSize /@ (0.3*Sqrt[wei]), Opacity[0.5]}] // ListPlot ?\nJLD: built-in HDF5 format binary saving, fast & neat but perhaps fragile. Removed for now!\n\nΠ = load(\"file.csv\") = readcsv(\"file.csv\", Π)\nΠ = load(\"file.json\")\nΠ = load(\"file.jld\") = JLD.load(file, \"Π\")\n\nReverse the above.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.maxcol",
    "page": "Docstrings",
    "title": "WeightedArrays.maxcol",
    "category": "function",
    "text": "maxcol(x)\nmaxcol(x, weights)\n\nReturns the column of x with the largest weight, as the same type. If x::Weighted{Matrix} then weights need not be given.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.normalise",
    "page": "Docstrings",
    "title": "WeightedArrays.normalise",
    "category": "function",
    "text": "normalise(x) ## with an s, NB!\nnormalise!(x)\n\nEnsures weights are positive and sum to 1. On x::Weighted... the mutating form checks whether norm=true in x.opt; the copying (!) form sets this flag first.\n\nunnormalise(x)\nunnormalise!(x)\n\nJust alters the flag x.opt.norm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.normalise!",
    "page": "Docstrings",
    "title": "WeightedArrays.normalise!",
    "category": "function",
    "text": "normalise(x) ## with an s, NB!\nnormalise!(x)\n\nEnsures weights are positive and sum to 1. On x::Weighted... the mutating form checks whether norm=true in x.opt; the copying (!) form sets this flag first.\n\nunnormalise(x)\nunnormalise!(x)\n\nJust alters the flag x.opt.norm.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.pairwise2",
    "page": "Docstrings",
    "title": "WeightedArrays.pairwise2",
    "category": "function",
    "text": "pairwise2(x, y=x) = Distances.pairwise(SqEuclidean(), x, y)\n\nResulting mat[i,j] is distance sqared from x[:,i] to y[:,j]. Implementation varies.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.rPCA",
    "page": "Docstrings",
    "title": "WeightedArrays.rPCA",
    "category": "function",
    "text": "f = wPCA(x::Weighted, d=2)\nf(x)::Weighted\n\nWorks out the MultivariateStats.PCA to project x into d dimensions. To ignore weights, use wPCA(array(x), d) instead. Returned object can be used as a function f(y) ≈ transform(f,array(y)), preserving weights(y).\n\nsPCA(x, d=2)\nrPCA(y)\n\nVersion with s saves the function above to a global variable, and also applies it, returning f(x). Then you can recall it, and apply it to some other data, with rPCA(y). For example:\n\njulia> xx = wrandn(7,50); yy = xx[:, 1:10] |> normalise\njulia> plot(xx, sPCA); plot!(yy, rPCA)\n\nNow equivalent to using PCA-plot function: pplot(xx); pplot!(yy). \n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.rpca",
    "page": "Docstrings",
    "title": "WeightedArrays.rpca",
    "category": "function",
    "text": "f = wPCA(x::Weighted, d=2)\nf(x)::Weighted\n\nWorks out the MultivariateStats.PCA to project x into d dimensions. To ignore weights, use wPCA(array(x), d) instead. Returned object can be used as a function f(y) ≈ transform(f,array(y)), preserving weights(y).\n\nsPCA(x, d=2)\nrPCA(y)\n\nVersion with s saves the function above to a global variable, and also applies it, returning f(x). Then you can recall it, and apply it to some other data, with rPCA(y). For example:\n\njulia> xx = wrandn(7,50); yy = xx[:, 1:10] |> normalise\njulia> plot(xx, sPCA); plot!(yy, rPCA)\n\nNow equivalent to using PCA-plot function: pplot(xx); pplot!(yy). \n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.sPCA",
    "page": "Docstrings",
    "title": "WeightedArrays.sPCA",
    "category": "function",
    "text": "f = wPCA(x::Weighted, d=2)\nf(x)::Weighted\n\nWorks out the MultivariateStats.PCA to project x into d dimensions. To ignore weights, use wPCA(array(x), d) instead. Returned object can be used as a function f(y) ≈ transform(f,array(y)), preserving weights(y).\n\nsPCA(x, d=2)\nrPCA(y)\n\nVersion with s saves the function above to a global variable, and also applies it, returning f(x). Then you can recall it, and apply it to some other data, with rPCA(y). For example:\n\njulia> xx = wrandn(7,50); yy = xx[:, 1:10] |> normalise\njulia> plot(xx, sPCA); plot!(yy, rPCA)\n\nNow equivalent to using PCA-plot function: pplot(xx); pplot!(yy). \n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.save",
    "page": "Docstrings",
    "title": "WeightedArrays.save",
    "category": "function",
    "text": "save(Π, \"file.csv\") = writecsv(\"file.csv\", Π)\nsave(Π, \"file.json\")\nsave(Π, \"file.jld\") = JLD.save(file, \"Π\", Π)\n\nSave Π::Weighted to disk, in one of several formats:\n\nCSV: weights are rightmost column, as in [Π.array\' Π.weights]. Options aren\'t saved, and load() will try to guess them from the numbers. Mathematica: arr = Import[\"file.csv\"][[;; , 1 ;; -2]]; wei = Import[\"file.csv\"][[;; , -1]]\nJSON: saves a dictionary, but dict[\"array\"] is a nested Vector{Vector{Any}} for now, which load() converts to Float64. Includes dict[\"opt\"] == String(Π.opt). Mathematica: arr = Import[\"file.json\"][[1, 2]]; wei = Import[\"file.json\"][[3, 2]] ... and then maybe Style @@@ Thread[{arr, PointSize /@ (0.3*Sqrt[wei]), Opacity[0.5]}] // ListPlot ?\nJLD: built-in HDF5 format binary saving, fast & neat but perhaps fragile. Removed for now!\n\nΠ = load(\"file.csv\") = readcsv(\"file.csv\", Π)\nΠ = load(\"file.json\")\nΠ = load(\"file.jld\") = JLD.load(file, \"Π\")\n\nReverse the above.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.sigmoid",
    "page": "Docstrings",
    "title": "WeightedArrays.sigmoid",
    "category": "function",
    "text": "sigmoid(Π)\n\nCompactifies all entries to [0,1], approximately == sigmoid.(Π) but with nice labels etc. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.sobol",
    "page": "Docstrings",
    "title": "WeightedArrays.sobol",
    "category": "function",
    "text": "sobol(d, k)\n\nFirst k entries from the d-dimensional Sobol sequence, as columns of a Weighted{Matrix}. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.soboln",
    "page": "Docstrings",
    "title": "WeightedArrays.soboln",
    "category": "function",
    "text": "soboln(d, k)\n\nNormally distributed d-vectors, of mean zero and std. dev. π, generated from Sobol sequence, as columns of a Weighted{Matrix}. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.sortcols",
    "page": "Docstrings",
    "title": "WeightedArrays.sortcols",
    "category": "function",
    "text": "sortcols(x::WeightedMatrix)\n\nSorts according to θ₁, i.e. the first row of array(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.spca",
    "page": "Docstrings",
    "title": "WeightedArrays.spca",
    "category": "function",
    "text": "f = wPCA(x::Weighted, d=2)\nf(x)::Weighted\n\nWorks out the MultivariateStats.PCA to project x into d dimensions. To ignore weights, use wPCA(array(x), d) instead. Returned object can be used as a function f(y) ≈ transform(f,array(y)), preserving weights(y).\n\nsPCA(x, d=2)\nrPCA(y)\n\nVersion with s saves the function above to a global variable, and also applies it, returning f(x). Then you can recall it, and apply it to some other data, with rPCA(y). For example:\n\njulia> xx = wrandn(7,50); yy = xx[:, 1:10] |> normalise\njulia> plot(xx, sPCA); plot!(yy, rPCA)\n\nNow equivalent to using PCA-plot function: pplot(xx); pplot!(yy). \n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.trim",
    "page": "Docstrings",
    "title": "WeightedArrays.trim",
    "category": "function",
    "text": "trim(x::Weighted)\ntrim!(x::Weighted)\n\nRemoves points with weight less than cutoff cut=1.0e-10, either copying or mutating.\n\ntrim!(Π::Weighted, L::Weighted)\n\nRemoves the same columns from both, using the first one\'s weights. Mutates both arguments! Returns tuple (Π,L).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.trim!",
    "page": "Docstrings",
    "title": "WeightedArrays.trim!",
    "category": "function",
    "text": "trim(x::Weighted)\ntrim!(x::Weighted)\n\nRemoves points with weight less than cutoff cut=1.0e-10, either copying or mutating.\n\ntrim!(Π::Weighted, L::Weighted)\n\nRemoves the same columns from both, using the first one\'s weights. Mutates both arguments! Returns tuple (Π,L).\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.wPCA",
    "page": "Docstrings",
    "title": "WeightedArrays.wPCA",
    "category": "function",
    "text": "f = wPCA(x::Weighted, d=2)\nf(x)::Weighted\n\nWorks out the MultivariateStats.PCA to project x into d dimensions. To ignore weights, use wPCA(array(x), d) instead. Returned object can be used as a function f(y) ≈ transform(f,array(y)), preserving weights(y).\n\nsPCA(x, d=2)\nrPCA(y)\n\nVersion with s saves the function above to a global variable, and also applies it, returning f(x). Then you can recall it, and apply it to some other data, with rPCA(y). For example:\n\njulia> xx = wrandn(7,50); yy = xx[:, 1:10] |> normalise\njulia> plot(xx, sPCA); plot!(yy, rPCA)\n\nNow equivalent to using PCA-plot function: pplot(xx); pplot!(yy). \n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.wpca",
    "page": "Docstrings",
    "title": "WeightedArrays.wpca",
    "category": "function",
    "text": "f = wPCA(x::Weighted, d=2)\nf(x)::Weighted\n\nWorks out the MultivariateStats.PCA to project x into d dimensions. To ignore weights, use wPCA(array(x), d) instead. Returned object can be used as a function f(y) ≈ transform(f,array(y)), preserving weights(y).\n\nsPCA(x, d=2)\nrPCA(y)\n\nVersion with s saves the function above to a global variable, and also applies it, returning f(x). Then you can recall it, and apply it to some other data, with rPCA(y). For example:\n\njulia> xx = wrandn(7,50); yy = xx[:, 1:10] |> normalise\njulia> plot(xx, sPCA); plot!(yy, rPCA)\n\nNow equivalent to using PCA-plot function: pplot(xx); pplot!(yy). \n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.wrand",
    "page": "Docstrings",
    "title": "WeightedArrays.wrand",
    "category": "function",
    "text": "wrand(d, k) = Weighted(rand(d, k))\n\nUniformly distributed vectors in [0,1]^d, as columns of a Weighted{Matrix} which knows to clamp them to this box. Keyword weights=true gives weights ∝ 1 .+ rand(k) rather than constant. Default is now k=1, making a one-column matrix.\n\nwrandn(d, k) = π .* Weighted(randn(d, k))\n\nNormally distributed d-vectors, of mean zero and std. dev. scale=π by default. Keyword max=10 clamps absolute values to be less than this. \n\nwrandnp(d, k)\n\nAbsolute value of normally distributed...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.wrandn",
    "page": "Docstrings",
    "title": "WeightedArrays.wrandn",
    "category": "function",
    "text": "wrand(d, k) = Weighted(rand(d, k))\n\nUniformly distributed vectors in [0,1]^d, as columns of a Weighted{Matrix} which knows to clamp them to this box. Keyword weights=true gives weights ∝ 1 .+ rand(k) rather than constant. Default is now k=1, making a one-column matrix.\n\nwrandn(d, k) = π .* Weighted(randn(d, k))\n\nNormally distributed d-vectors, of mean zero and std. dev. scale=π by default. Keyword max=10 clamps absolute values to be less than this. \n\nwrandnp(d, k)\n\nAbsolute value of normally distributed...\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.wrandnp",
    "page": "Docstrings",
    "title": "WeightedArrays.wrandnp",
    "category": "function",
    "text": "wrand(d, k) = Weighted(rand(d, k))\n\nUniformly distributed vectors in [0,1]^d, as columns of a Weighted{Matrix} which knows to clamp them to this box. Keyword weights=true gives weights ∝ 1 .+ rand(k) rather than constant. Default is now k=1, making a one-column matrix.\n\nwrandn(d, k) = π .* Weighted(randn(d, k))\n\nNormally distributed d-vectors, of mean zero and std. dev. scale=π by default. Keyword max=10 clamps absolute values to be less than this. \n\nwrandnp(d, k)\n\nAbsolute value of normally distributed...\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WeightedArrays.xgrid",
    "page": "Docstrings",
    "title": "WeightedArrays.xgrid",
    "category": "function",
    "text": "xgrid(d, 0:0.1:5)\n\nGives the matrix whose colums are d-vectors, forming a grid of the given range in all dimensions. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WeightedArrays.@pack_WeightOptWeightedArrays.@pack_WeightOpt!WeightedArrays.@unpack_WeightOptWeightedArrays.ALPHAWeightedArrays.AbsArrayWeightedArrays.AbsMatWeightedArrays.AbsVecWeightedArrays.CatViewWeightedArrays.ClampedWeightedWeightedArrays.DIGITSWeightedArrays.GroupSlicesWeightedArrays.MINPROBWeightedArrays.MINWEIGHTWeightedArrays.MaybeWeightedArrayWeightedArrays.MaybeWeightedMatrixWeightedArrays.MaybeWeightedVectorWeightedArrays.PLOTSIZEWeightedArrays.SAVED_PCAWeightedArrays.UnClampedWeightedWeightedArrays.WeightOptWeightedArrays.WeightedWeightedArrays.WeightedArrayWeightedArrays.WeightedArraysWeightedArrays.WeightedMatrixWeightedArrays.WeightedVectorWeightedArrays.__init__WeightedArrays.addlnameWeightedArrays.addnameWeightedArrays.anameWeightedArrays.arrayWeightedArrays.clampdocWeightedArrays.clipWeightedArrays.clip!WeightedArrays.evalWeightedArrays.flatcopyWeightedArrays.flatcopy!WeightedArrays.flattenWeightedArrays.flipzeroWeightedArrays.grsafeWeightedArrays.includeWeightedArrays.lastlengthWeightedArrays.loadWeightedArrays.maxcolWeightedArrays.maxweightWeightedArrays.myroundWeightedArrays.nearWeightedArrays.normaliseWeightedArrays.normalise!WeightedArrays.pairwise2WeightedArrays.pcaylimWeightedArrays.pointsizeWeightedArrays.positiveWeightedArrays.pplotWeightedArrays.pplot!WeightedArrays.rPCAWeightedArrays.readcsvWeightedArrays.readjsonWeightedArrays.rpcaWeightedArrays.sPCAWeightedArrays.saveWeightedArrays.shadowxyWeightedArrays.sigmoidWeightedArrays.sobolWeightedArrays.sobolnWeightedArrays.sobolnpWeightedArrays.sortcolsWeightedArrays.spcaWeightedArrays.sureweightsWeightedArrays.svecsWeightedArrays.totweightWeightedArrays.trimWeightedArrays.trim!WeightedArrays.trim_WeightedArrays.unclampWeightedArrays.unique_WeightedArrays.uniquedocWeightedArrays.unnormaliseWeightedArrays.unnormalise!WeightedArrays.wPCAWeightedArrays.wcopyWeightedArrays.wcopy!WeightedArrays.weightsWeightedArrays.wglueWeightedArrays.wgridWeightedArrays.wnameWeightedArrays.wpcaWeightedArrays.wrandWeightedArrays.wrandnWeightedArrays.wrandnpWeightedArrays.writecsvWeightedArrays.writejsonWeightedArrays.wsobolWeightedArrays.xaxis_grbugWeightedArrays.xgridWeightedArrays.yaxis_grbug"
},

]}
