var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<img src=\"wavelets.png\" alt=\"Wavelets\">(Image: Build Status) (Image: Coverage Status)A Julia package for fast wavelet transforms (1-D, 2-D, 3-D, by filtering or lifting). The package includes discrete wavelet transforms, column-wise discrete wavelet transforms, and wavelet packet transforms.1st generation wavelets using filter banks (periodic and orthogonal). Filters are included for the following types: Haar, Daubechies, Coiflet, Symmlet, Battle-Lemarie, Beylkin, Vaidyanathan.\n2nd generation wavelets by lifting (periodic and general type including orthogonal and biorthogonal). Included lifting schemes are currently only for Haar and Daubechies (under development). A new lifting scheme can be easily constructed by users. The current implementation of the lifting transforms is 2x faster than the filter transforms.\nThresholding, best basis and denoising functions, e.g. TI denoising by cycle spinning, best basis for WPT, noise estimation, matching pursuit. See example code and image below.\nWavelet utilities e.g. indexing and size calculation, scaling and wavelet functions computation, test functions, up and down sampling, filter mirrors, coefficient counting, inplace circshifts, and more.\nPlotting/visualization utilities for 1-D and 2-D signals.See license (MIT) in LICENSE.md."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Install via the package manager and load with usingjulia> Pkg.add(\"Wavelets\")\njulia> using Wavelets"
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": ""
},

{
    "location": "#Wavelet-Transforms-1",
    "page": "Readme",
    "title": "Wavelet Transforms",
    "category": "section",
    "text": "The functions dwt and wpt (and their inverses) are linear operators. See wavelet below for construction of the type wt.Discrete Wavelet Transform# DWT\ndwt(x, wt, L=maxtransformlevels(x))\nidwt(x, wt, L=maxtransformlevels(x))\ndwt!(y, x, filter, L=maxtransformlevels(x))\nidwt!(y, scheme, L=maxtransformlevels(x))Wavelet Packet Transform# WPT (tree can also be an integer, equivalent to maketree(length(x), L, :full))\nwpt(x, wt, tree::BitVector=maketree(x, :full))\niwpt(x, wt, tree::BitVector=maketree(x, :full))\nwpt!(y, x, filter, tree::BitVector=maketree(x, :full))\niwpt!(y, scheme, tree::BitVector=maketree(y, :full))"
},

{
    "location": "#Wavelet-Types-1",
    "page": "Readme",
    "title": "Wavelet Types",
    "category": "section",
    "text": "The function wavelet is a type contructor for the transform functions. The transform type t can be either WT.Filter or WT.Lifting.wavelet(c, t=WT.Filter, boundary=WT.Periodic)"
},

{
    "location": "#Wavelet-Classes-1",
    "page": "Readme",
    "title": "Wavelet Classes",
    "category": "section",
    "text": "The module WT contains the types for wavelet classes. The module defines constants of the form e.g. WT.coif4 as shortcuts for WT.Coiflet{4}(). The numbers for orthogonal wavelets indicate the number vanishing moments of the wavelet function.Class Type Namebase Supertype Numbers\nHaar haar OrthoWaveletClass \nCoiflet coif OrthoWaveletClass 2:2:8\nDaubechies db OrthoWaveletClass 1:Inf\nSymlet sym OrthoWaveletClass 4:10\nBattle batt OrthoWaveletClass 2:2:6\nBeylkin beyl OrthoWaveletClass \nVaidyanathan vaid OrthoWaveletClass \nCDF cdf BiOrthoWaveletClass (9,7)Class informationWT.class(::WaveletClass) ::String              # class full name\nWT.name(::WaveletClass) ::String               # type short name\nWT.vanishingmoments(::WaveletClass)            # vanishing moments of wavelet functionTransform type informationWT.name(wt)                                     # type short name\nWT.length(f::OrthoFilter)                       # length of filter\nWT.qmf(f::OrthoFilter)                          # quadrature mirror filter\nWT.makeqmfpair(f::OrthoFilter, fw=true)\nWT.makereverseqmfpair(f::OrthoFilter, fw=true)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The simplest way to transform a signal x isxt = dwt(x, wavelet(WT.db2))The transform type can be more explicitly specified (filter, Periodic, Orthogonal, 4 vanishing moments)wt = wavelet(WT.Coiflet{4}(), WT.Filter, WT.Periodic)For a periodic biorthogonal CDF 9/7 lifting scheme:wt = wavelet(WT.cdf97, WT.Lifting)Perform a transform of vector x# 5 level transform\nxt = dwt(x, wt, 5)\n# inverse tranform\nxti = idwt(xt, wt, 5)\n# a full transform\nxt = dwt(x, wt)Other examples:# scaling filters is easy\nwt = wavelet(WT.haar)\nwt = WT.scale(wt, 1/sqrt(2))\n# signals can be transformed inplace with a low-level command\n# requiring very little memory allocation (especially for L=1 for filters)\ndwt!(x, wt, L)      # inplace (lifting)\ndwt!(xt, x, wt, L)  # write to xt (filter)\n\n# denoising with default parameters (VisuShrink hard thresholding)\nx0 = testfunction(128, \"HeaviSine\")\nx = x0 + 0.3*randn(128)\ny = denoise(x)\n\n# plotting utilities 1-d (see images and code in /example)\nx = testfunction(128, \"Bumps\")\ny = dwt(x, wavelet(WT.cdf97, WT.Lifting))\nd,l = wplotdots(y, 0.1, 128)\nA = wplotim(y)\n# plotting utilities 2-d\nimg = imread(\"lena.png\")\nx = permutedims(img.data, [ndims(img.data):-1:1])\nL = 2\nxts = wplotim(x, L, wavelet(WT.db3))See Bumps and Lena for plot images."
},

{
    "location": "#Thresholding-1",
    "page": "Readme",
    "title": "Thresholding",
    "category": "section",
    "text": "The Wavelets.Threshold module includes the following utilitiesdenoising (VisuShrink, translation invariant (TI))\nbest basis for WPT\nnoise estimator\nmatching pursuit\nthreshold functions (see table for types)"
},

{
    "location": "#API-2",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "# threshold types with parameter\nthreshold!(x::AbstractArray, TH::THType, t::Real)\nthreshold(x::AbstractArray, TH::THType, t::Real)\n# without parameter (PosTH, NegTH)\nthreshold!(x::AbstractArray, TH::THType)\nthreshold(x::AbstractArray, TH::THType)\n# denoising\ndenoise(x::AbstractArray,\n        wt=DEFAULT_WAVELET;\n        L::Int=min(maxtransformlevels(x),6),\n        dnt=VisuShrink(size(x,1)),\n        estnoise::Function=noisest,\n        TI=false,\n        nspin=tuple([8 for i=1:ndims(x)]...) )\n# entropy\ncoefentropy(x, et::Entropy, nrm)\n# best basis for WPT limited to active inital tree nodes\nbestbasistree(y::AbstractVector, wt::DiscreteWavelet,\n        L::Integer=nscales(y), et::Entropy=ShannonEntropy() )\nbestbasistree(y::AbstractVector, wt::DiscreteWavelet,\n        tree::BitVector, et::Entropy=ShannonEntropy() )Type Details\nThresholding <: THType\nHardTH hard thresholding\nSoftTH soft threshold\nSemiSoftTH semisoft thresholding\nSteinTH stein thresholding\nPosTH positive thresholding\nNegTH negative thresholding\nBiggestTH biggest m-term (best m-term) approx.\nDenoising <: DNFT\nVisuShrink VisuShrink denoising\nEntropy <: Entropy\nShannonEntropy -v^2*log(v^2) (Coifman-Wickerhauser)\nLogEnergyEntropy -log(v^2)"
},

{
    "location": "#Examples-2",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Find best basis tree for wpt, and compare to dwt using biggest m-term approximations.wt = wavelet(WT.db4)\nx = sin(4*range(0, stop=2*pi-eps(), length=1024))\ntree = bestbasistree(x, wt)\nxtb = wpt(x, wt, tree)\nxt = dwt(x, wt)\n# get biggest m-term approximations\nm = 50\nthreshold!(xtb, BiggestTH(), m)\nthreshold!(xt, BiggestTH(), m)\n# compare sparse approximations in ell_2 norm\nnorm(x - iwpt(xtb, wt, tree), 2) # best basis wpt\nnorm(x - idwt(xt, wt), 2)        # regular dwtjulia> norm(x - iwpt(xtb, wt, tree), 2)\n0.008941070750964843\njulia> norm(x - idwt(xt, wt), 2)\n0.05964431178940861Denoising:n = 2^11;\nx0 = testfunction(n,\"Doppler\")\nx = x0 + 0.05*randn(n)\ny = denoise(x,TI=true)(Image: Doppler)"
},

{
    "location": "#Benchmarks-1",
    "page": "Readme",
    "title": "Benchmarks",
    "category": "section",
    "text": "Timing of dwt (using db2 filter of length 4) and fft. The lifting wavelet transforms are faster and use less memory than fft in 1-D and 2-D. dwt by lifting is currently 2x faster than by filtering.# 10 iterations\ndwt by filtering (N=1048576), 20 levels\nelapsed time: 0.247907616 seconds (125861504 bytes allocated, 8.81% gc time)\ndwt by lifting (N=1048576), 20 levels\nelapsed time: 0.131240966 seconds (104898544 bytes allocated, 17.48% gc time)\nfft (N=1048576), (FFTW)\nelapsed time: 0.487693289 seconds (167805296 bytes allocated, 8.67% gc time)For 2-D transforms (using a db4 filter and CDF 9/7 lifting scheme):# 10 iterations\ndwt by filtering (N=1024x1024), 10 levels\nelapsed time: 0.773281141 seconds (85813504 bytes allocated, 2.87% gc time)\ndwt by lifting (N=1024x1024), 10 levels\nelapsed time: 0.317705928 seconds (88765424 bytes allocated, 3.44% gc time)\nfft (N=1024x1024), (FFTW)\nelapsed time: 0.577537263 seconds (167805888 bytes allocated, 5.53% gc time)By using the low-level function dwt! and pre-allocating temporary arrays, significant gains can be made in terms of memory usage (and some speedup). This is useful when transforming multiple times."
},

{
    "location": "#To-do-list-1",
    "page": "Readme",
    "title": "To-do list",
    "category": "section",
    "text": "Transforms for non-square 2-D signals\nBoundary extensions (other than periodic)\nBoundary orthogonal wavelets\nDefine more lifting schemes\nWPT in 2-D\nStationary transform\nContinuous wavelets\nWavelet scalogram"
},

{
    "location": "autodocs/#Wavelets.WT.GLS",
    "page": "Docstrings",
    "title": "Wavelets.WT.GLS",
    "category": "type",
    "text": "Wavelet type for discrete general (bi)orthogonal transforms by using a lifting scheme.\n\nSee also: OrthoFilter, wavelet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.WT.OrthoFilter",
    "page": "Docstrings",
    "title": "Wavelets.WT.OrthoFilter",
    "category": "type",
    "text": "Wavelet type for discrete orthogonal transforms by filtering.\n\nSee also: GLS, wavelet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.dwt",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.dwt",
    "category": "function",
    "text": "dwt(x, wt[, L=maxtransformlevels(x)])\n\nPerform a discrete wavelet transform of the array x. The wavelet type wt determines the transform type (filter or lifting) and the wavelet class, see wavelet.\n\nThe number of transformation levels L can be any non-negative integer such that the size of x is divisible by L. Performs the identity transformation if L==0.\n\nExamples\n\ndwt(x, wavelet(WT.coif6))\n\nSee also: idwt, dwt!, wavelet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.dwt!",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.dwt!",
    "category": "function",
    "text": "dwt!(y, x, wt::OrthoFilter[, L=maxtransformlevels(x)])\n\ndwt!(y, wt::GLS[, L=maxtransformlevels(x)])\n\nSame as dwt but without array allocation. Perform \"out of place\" transform with a filter, or a inplace transform with a lifting scheme. The difference between the filter and lifting methods is due to the structure of the transform algorithms.\n\nSee also: idwt!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.idwt",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.idwt",
    "category": "function",
    "text": "idwt(x, wt[, L=maxtransformlevels(x)])\n\nPerform an inverse discrete wavelet transform of the array x, the inverse of dwt(x, wt, L).\n\nSee also: dwt, idwt!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.idwt!",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.idwt!",
    "category": "function",
    "text": "idwt!(y, x, wt::OrthoFilter[, L=maxtransformlevels(x)])\n\nidwt!(y, wt::GLS[, L=maxtransformlevels(x)])\n\nThe inverse of dwt!.\n\nSee also: dwt!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.imodwt",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.imodwt",
    "category": "function",
    "text": "Perform an inverse maximal overlap discrete wavelet transform (MODWT) of xw, the inverse of modwt(x, wt, L).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.iwpt",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.iwpt",
    "category": "function",
    "text": "iwpt\n\nPerform an inverse discrete wavelet packet transform of the array x. See also: idwt, wavelet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.iwpt!",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.iwpt!",
    "category": "function",
    "text": "iwpt!\n\nSame as iwpt but without array allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.modwt",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.modwt",
    "category": "function",
    "text": "Perform a maximal overlap discrete wavelet transform (MODWT) of the array x.  The wavelet type wt determines the transform type and the wavelet class, see wavelet. (Note that the wavelet filter coefficients are scaled by 1/√2 for the MODWT so that the transform maintains unit energy).\n\nThe number of transform levels L can be any number <= maxmodwttransformlevels(x) (the default value).\n\nReturns an n × L+1 matrix (where n is the length of x) with the wavelet coefficients for level j in column j.  The scaling coefficients are in the last (L+1th) column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.WT.wavelet",
    "page": "Docstrings",
    "title": "Wavelets.WT.wavelet",
    "category": "function",
    "text": "wavelet(c[, t=WT.Filter][, boundary=WT.Periodic])\n\nConstruct wavelet type where c is a wavelet class, t is the transformation type (WT.Filter or WT.Lifting), and boundary is the type of boundary treatment.\n\nExamples\n\nwavelet(WT.coif6)\nwavelet(WT.db1, WT.Lifting)\n\nSee also: WT.WaveletClass\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.wpt",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.wpt",
    "category": "function",
    "text": "wpt\n\nPerform a discrete wavelet packet transform of the array x. See also: dwt, wavelet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Wavelets.Transforms.wpt!",
    "page": "Docstrings",
    "title": "Wavelets.Transforms.wpt!",
    "category": "function",
    "text": "wpt!\n\nSame as wpt but without array allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Wavelets.BiggestTHWavelets.DNFTWavelets.DiscreteWaveletWavelets.EntropyWavelets.FilterWaveletWavelets.GLSWavelets.HardTHWavelets.LSWaveletWavelets.LogEnergyEntropyWavelets.NegTHWavelets.OrthoFilterWavelets.PlotWavelets.PosTHWavelets.SemiSoftTHWavelets.ShannonEntropyWavelets.SoftTHWavelets.SteinTHWavelets.ThresholdWavelets.TransformsWavelets.UtilWavelets.VisuShrinkWavelets.WTWavelets.WaveletsWavelets.bestbasistreeWavelets.coefentropyWavelets.denoiseWavelets.detailindexWavelets.detailnWavelets.detailrangeWavelets.downsampleWavelets.dwtWavelets.dwt!Wavelets.dyadicdetailindexWavelets.dyadicdetailnWavelets.dyadicdetailrangeWavelets.dyadiclevel2tlWavelets.dyadicscalingrangeWavelets.evalWavelets.idwtWavelets.idwt!Wavelets.imodwtWavelets.includeWavelets.iscubeWavelets.isdyadicWavelets.isvalidtreeWavelets.iwptWavelets.iwpt!Wavelets.maketreeWavelets.makewaveletWavelets.matchingpursuitWavelets.maxdyadiclevelWavelets.maxmodwttransformlevelsWavelets.maxtransformlevelsWavelets.mirrorWavelets.modwtWavelets.ndyadicscalesWavelets.noisestWavelets.stridedcopy!Wavelets.sufficientpoweroftwoWavelets.testfunctionWavelets.thresholdWavelets.threshold!Wavelets.tl2dyadiclevelWavelets.upsampleWavelets.waveletWavelets.wcountWavelets.wplotdotsWavelets.wplotimWavelets.wptWavelets.wpt!"
},

]}
