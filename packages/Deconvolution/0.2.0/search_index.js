var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Deconvolution.jl-1",
    "page": "Readme",
    "title": "Deconvolution.jl",
    "category": "section",
    "text": "Documentation [Package Evaluator][pkgeval-link] Build Status Code Coverage\n[![][docs-stable-img]][docs-stable-url] [![][pkg-0.5-img]][pkg-0.5-url] [![Build Status][travis-img]][travis-url] [![][coveral-img]][coveral-url]\n[![][docs-latest-img]][docs-latest-url] [![][pkg-0.6-img]][pkg-0.6-url] [![Build Status][appvey-img]][appvey-url] [![][codecov-img]][codecov-url]"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package provides a set of functions to deconvolve digital signals, like images or time series.  This is written in Julia, a modern high-level, high-performance dynamic programming language designed for technical computing."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Deconvolution.jl is available for Julia 0.6 and later versions, and can be installed with Julia built-in package manager. In a Julia session run the commandjulia> Pkg.update()\njulia> Pkg.add(\"Deconvolution\")Older versions are also available for Julia 0.4 and 0.5."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The complete manual of Deconvolution.jl is available at http://deconvolutionjl.readthedocs.io.  It has more detailed explanation of the methods used and the examples are complemented with pictures.  You can also download the PDF version of the manual from https://media.readthedocs.org/pdf/deconvolutionjl/latest/deconvolutionjl.pdf."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Currently Deconvolution.jl provides only one methd, but others will come in the future."
},

{
    "location": "#wiener-1",
    "page": "Readme",
    "title": "wiener",
    "category": "section",
    "text": "wiener(input, signal, noise[, blurring])The Wiener deconvolution attempts at reducing the noise in a digital signal by suppressing frequencies with low signal-to-noise ratio. The signal is assumed to be degraded by additive noise and a shift-invariant blurring function.The wiener function can be used to apply the Wiener deconvolution method to a digital signal.  The arguments are:input: the digital signal\nsignal: the original signal (or a signal with a luckily similar power spectrum)\nnoise: the noise of the signal (or a noise with a luckily similar power spectrum)\nblurring (optional argument): the blurring kernelAll arguments must be arrays, all with the same size, and all of them in the time/space domain (they will be converted to the frequency domain internally using fft function).  Argument noise can be also a real number, in which case a constant noise with that value will be assumed (this is a good approximation in the case of white noise)."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Wiener-deconvolution-1",
    "page": "Readme",
    "title": "Wiener deconvolution",
    "category": "section",
    "text": "Here is an example of use of wiener function to perform the Wiener deconvolution of an image, degraded with a blurring function and an additive noise.using Images, TestImages, Deconvolution, ImageView\n\n# Open the test image\nimg = float(data(testimage(\"cameraman\")))\'\n# Create the blurring kernel in frequency domain\nx = hcat(ntuple(x -> collect((1:512) - 257), 512)...)\nk = 0.001\nblurring_ft = exp(-k*(x .^ 2 + x\' .^ 2).^(5//6))\n# Create additive noise\nnoise = rand(size(img))\n# Fourier transform of the blurred image, with additive noise\nblurred_img_ft = fftshift(blurring_ft) .* fft(img) + fft(noise)\n# Get the blurred image from its Fourier transform\nblurred_img = real(ifft(blurred_img_ft))\n# Get the blurring kernel in the space domain\nblurring = ifft(fftshift(blurring_ft))\n# Polish the image with Deconvolution deconvolution\npolished = wiener(blurred_img, img, noise, blurring)\n\n# Wiener deconvolution works also when you don\'t have the real image and noise,\n# that is the most common and useful case.  This happens because the Wiener\n# filter only cares about the power spectrum of the signal and the noise, so you\n# don\'t need to have the exact signal and noise but something with a similar\n# power spectrum.\nimg2 = float(data(testimage(\"livingroom\"))) # Load another image\nnoise2 = rand(size(img)) # Create another additive noise\n# Polish the image with Deconvolution deconvolution\npolished2 = wiener(blurred_img, img2, noise2, blurring)\n\n# Compare...\nview(img) # ...the original image\nview(blurred_img) # ...the blurred image\nview(polished) # ...the polished image\nview(polished2) # ...the second polished image"
},

{
    "location": "#Development-1",
    "page": "Readme",
    "title": "Development",
    "category": "section",
    "text": "The package is developed at https://github.com/JuliaDSP/Deconvolution.jl.  There you can submit bug reports, propose new deconvolution methods with pull requests, and make suggestions.  If you would like to take over maintainership of the package in order to further improve it, please open an issue."
},

{
    "location": "#History-1",
    "page": "Readme",
    "title": "History",
    "category": "section",
    "text": "The ChangeLog of the package is available in NEWS.md file in top directory."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The Deconvolution.jl package is licensed under the MIT \"Expat\" License.  The original author is Mosè Giordano.[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://deconvolutionjl.readthedocs.io/en/latest/[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://deconvolutionjl.readthedocs.io/en/stable/[pkgeval-link]: http://pkg.julialang.org/?pkg=Deconvolution[pkg-0.5-img]: http://pkg.julialang.org/badges/Deconvolution0.5.svg [pkg-0.5-url]: http://pkg.julialang.org/detail/Deconvolution.html [pkg-0.6-img]: http://pkg.julialang.org/badges/Deconvolution0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/detail/Deconvolution.html[travis-img]: https://travis-ci.org/JuliaDSP/Deconvolution.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaDSP/Deconvolution.jl[appvey-img]: https://ci.appveyor.com/api/projects/status/8gfd4r6807w93umj/branch/master?svg=true [appvey-url]: https://ci.appveyor.com/project/giordano/deconvolution-jl[coveral-img]: https://coveralls.io/repos/github/JuliaDSP/Deconvolution.jl/badge.svg?branch=master [coveral-url]: https://coveralls.io/github/JuliaDSP/Deconvolution.jl?branch=master[codecov-img]: https://codecov.io/gh/JuliaDSP/Deconvolution.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaDSP/Deconvolution.jl"
},

{
    "location": "autodocs/#Deconvolution.wiener",
    "page": "Docstrings",
    "title": "Deconvolution.wiener",
    "category": "function",
    "text": "wiener(input, signal, noise[, blurring])\n\nReturn the Wiener deconvolution of input, using the power spectrum of signal and noise.  If the input was blurred with a known blurring kernel, pass it as fourth argument, blurring.\n\nAll arguments must be arrays in the time/space domain and all of the same size, they will be converted into the frequency domain internally using the fft function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Deconvolution.DeconvolutionDeconvolution._wiener_no_blurDeconvolution._wiener_with_blurDeconvolution.evalDeconvolution.includeDeconvolution.wiener"
},

]}
