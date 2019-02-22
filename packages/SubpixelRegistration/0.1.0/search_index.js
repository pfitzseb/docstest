var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SubpixelRegistration-1",
    "page": "Readme",
    "title": "SubpixelRegistration",
    "category": "section",
    "text": "(Image: SubpixelRegistration) (Image: SubpixelRegistration) (Image: Build Status) (Image: )Algorithm modified from the Matlab code accompanying   Manuel Guizar-Sicairos, Samuel T. Thurman, and James R. Fienup, \"Efficient subpixel image registration algorithms,\" Opt. Lett. 33, 156-158 (2008) . This implementation allows to register arrays of arbitrary dimensions (not just 2d). Functions are written for AbstractArrays and should work for Images."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using SubpixelRegistration\n\n## Building a simple 4d array\njulia> test4d = zeros(40,40,20,2)\n\njulia> test4d[10:20,10:20,2:10,1] = 1\njulia> test4d[5:15,15:25,5:13,2] = 1\n\n## By using larger ufac one gets to higher subpixel resolution\njulia> dftResults = stackDftReg(test4d,ufac=1)\n2-element Array{Any,1}:\n Dict{ASCIIString,Any}(\"error\"=>4.440892098500626e-16,\"shift\"=>[0.0,0.0,0.0])\n Dict{ASCIIString,Any}(\"error\"=>0.0,\"shift\"=>[5.0,-5.0,-3.0])\n\n## The array can theb be realigned from this dictionary\njulia> back4d = alignFromDict(test4d,dftResults)\n\n"
},

{
    "location": "autodocs/#SubpixelRegistration.alignFromDict",
    "page": "Docstrings",
    "title": "SubpixelRegistration.alignFromDict",
    "category": "function",
    "text": "alignFromDft{T,N}(img2reg::AbstractArray{T,N},dftRegRes::Array{Any,1})\n\nGiven an array and a Dict of translations as returned by dftReg, returns the aligned array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SubpixelRegistration.dftReg",
    "page": "Docstrings",
    "title": "SubpixelRegistration.dftReg",
    "category": "function",
    "text": "dftReg{N}(imgRef::AbstractArray{Complex{Float64},N},imgF::AbstractArray{Complex{Float64},N},usfac)\n\nMain internal function : takes the Fourier transforms of the arrays to register as inputs (imgRef/imgF) and returns a dictionary containing the residual error and the shift along the dimensions of the arrays, with the level of subpixel precision provided by usfac\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SubpixelRegistration.dftups",
    "page": "Docstrings",
    "title": "SubpixelRegistration.dftups",
    "category": "function",
    "text": "dftups{T,N}(inp::AbstractArray{T,N},no,usfac::Int=1,off=zeros(N))\n\nUpsampled DFT by matrix multiplication, computes an upsampled DFT in just a small region. no is the size of the region in pixels, offset the position in the full array, usfac the upsampling parameter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SubpixelRegistration.stackDftReg",
    "page": "Docstrings",
    "title": "SubpixelRegistration.stackDftReg",
    "category": "function",
    "text": "stackDftReg{T,N,N1}(imgser::AbstractArray{T,N};ref::AbstractArray{T,N1}=reshape(slicedim(imgser,N,1),size(imgser)[1:(N-1)]),ufac::Int=10)\n\ndftReg applied to a full array. Each array along the last dimension of imgser is aligned to ref (by default the first image of the series, with precision ufac. Returns an array of Dict containing the translation information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SubpixelRegistration.subPixShift",
    "page": "Docstrings",
    "title": "SubpixelRegistration.subPixShift",
    "category": "function",
    "text": "subPixShift(imgft::AbstractArray{Complex{Float64}},shift::Array{Float64,1})     Shift the image imgft (in Fourier space) by the amount provided in the vector shift.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SubpixelRegistration.SubpixelRegistrationSubpixelRegistration.__init__SubpixelRegistration.alignFromDictSubpixelRegistration.dftRegSubpixelRegistration.dftupsSubpixelRegistration.diffphase_from_resSubpixelRegistration.evalSubpixelRegistration.includeSubpixelRegistration.shifts_from_resSubpixelRegistration.stackDftRegSubpixelRegistration.subPixShift"
},

]}
