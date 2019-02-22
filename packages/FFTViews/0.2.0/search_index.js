var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FFTViews-1",
    "page": "Readme",
    "title": "FFTViews",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)A package for simplifying operations that involve Fourier transforms. An FFTView of an array uses periodic boundary conditions for indexing, and shifts all indices of the array downward by 1."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Let\'s create a random signal:\n\njulia> using FFTViews\n\njulia> a = rand(8)\n8-element Array{Float64,1}:\n 0.720657\n 0.42337\n 0.207867\n 0.959567\n 0.371366\n 0.907781\n 0.852526\n 0.689934Now let\'s take its Fourier transform, and wrap the result as an FFTView:julia> afft = fft(a)\n8-element Array{Complex{Float64},1}:\n   5.13307+0.0im\n -0.183898+0.796529im\n   0.03163+0.31835im\n   0.88248-0.492787im\n -0.828236+0.0im\n   0.88248+0.492787im\n   0.03163-0.31835im\n -0.183898-0.796529im\n\njulia> v = FFTView(afft)\nFFTViews.FFTView{Complex{Float64},1,Array{Complex{Float64},1}} with indices FFTViews.URange(0,7):\n   5.13307+0.0im\n -0.183898+0.796529im\n   0.03163+0.31835im\n   0.88248-0.492787im\n -0.828236+0.0im\n   0.88248+0.492787im\n   0.03163-0.31835im\n -0.183898-0.796529imNow we can easily look at the zero-frequency bin:julia> v[0]\n5.133068739504999 + 0.0im\n\njulia> sum(a)\n5.133068739504998or negative as well as positive frequencies:julia> v[-4:3]\n8-element Array{Complex{Float64},1}:\n -0.828236+0.0im\n   0.88248+0.492787im\n   0.03163-0.31835im\n -0.183898-0.796529im\n   5.13307+0.0im\n -0.183898+0.796529im\n   0.03163+0.31835im\n   0.88248-0.492787imPerhaps even more interestingly, one can also simplify the process of convolution. Let\'s create a \"delta-function\" signal:julia> b = zeros(8); b[3] = 1; b  # the signal\n8-element Array{Float64,1}:\n 0.0\n 0.0\n 1.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0and then create the kernel using an FFTView:julia> kernel = FFTView(zeros(8))\nFFTViews.FFTView{Float64,1,Array{Float64,1}} with indices FFTViews.URange(0,7):\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n\njulia> kernel[-1:1] = rand(3)\n3-element Array{Float64,1}:\n 0.16202\n 0.446872\n 0.649135\n\njulia> kernel\nFFTViews.FFTView{Float64,1,Array{Float64,1}} with indices FFTViews.URange(0,7):\n 0.446872\n 0.649135\n 0.0\n 0.0\n 0.0\n 0.0\n 0.0\n 0.16202Now compute the convolution via the FFT:julia> real(ifft(fft(b).*fft(kernel)))\n8-element Array{Float64,1}:\n  0.0\n  0.16202\n  0.446872\n  0.649135\n  0.0\n -5.55112e-17\n  0.0\n -6.93889e-17or alternativelyjulia> irfft(rfft(b).*rfft(kernel),8)\n8-element Array{Float64,1}:\n  0.0\n  0.16202\n  0.446872\n  0.649135\n  0.0\n -2.77556e-17\n  0.0\n -5.55112e-17This simplifies the process of remembering how to pack your kernel."
},

{
    "location": "#Caution:-FFTViews-are-not-composable-1",
    "page": "Readme",
    "title": "Caution: FFTViews are not composable",
    "category": "section",
    "text": "In Julia, almost all other view types are composable: you can make a ReshapedArray of a SubArray of a StaticArray of a .... In contrast, FFTViews are not safe when placed inside other containers. The reason is that the *fft methods are specialized for FFTViews, and strip off the outer container; this does not happen if you wrap an FFTView inside of some other array type.  If you do wrap FFTViews, you might see strange off-by-1 bugs due to the FFTView translating the indices.Another way of saying the same thing is the following: for a general vector x, its FFT is defined as(Image: eq1)Here x[n] is defined with periodic boundary conditions, so that if the indices of x are not naturally from 1 to N, this formula still holds.However, if y = FFTView(x), then in terms of y we have(Image: eq1)which is shifted by 1. Since FFTViews use a different definition of the FFT compared to all other array types, they need to be used with caution. It\'s recommended that the FFTView wrapper be applied only for the process of setting up or analyzing the result of the transform; for all other operations, pass the parent array (obtainable from parent(y) or just by reference to x itself)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FFTViews.AbstractFFTViewFFTViews.FFTVRangeFFTViews.FFTViewFFTViews.FFTViewsFFTViews.URangeFFTViews._reindexFFTViews.evalFFTViews.includeFFTViews.indrangeFFTViews.modrangeFFTViews.reindexFFTViews.urange_last"
},

]}
