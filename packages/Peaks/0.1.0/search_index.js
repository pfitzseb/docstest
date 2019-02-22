var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Peaks.jl-1",
    "page": "Readme",
    "title": "Peaks.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov)Peaks.jl is a repository of many (soon) different methods of peak finding for vector data. Contributions welcome."
},

{
    "location": "autodocs/#Peaks.maxima",
    "page": "Docstrings",
    "title": "Peaks.maxima",
    "category": "function",
    "text": "maxima(x[, w=1, includebounds=false])\n\nFind the local maxima of x.\n\nw sets the minimum allowed distance between maxima. If includebounds is true, maxima are allowed to be less than w away from the bounds of x, otherwise, maxima may not be located any closer to the ends of x than w.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Peaks.minima",
    "page": "Docstrings",
    "title": "Peaks.minima",
    "category": "function",
    "text": "minima(x[, w=1, includebounds=false])\n\nFind the local minima of x.\n\nw sets the minimum allowed distance between minima. If includebounds is true, minima are allowed to be less than w away from the bounds of x, otherwise, minima may not be located any closer to the ends of x than w.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Peaks.peakprom",
    "page": "Docstrings",
    "title": "Peaks.peakprom",
    "category": "function",
    "text": "peakprom(x, ::Maxima[, w=1, minprom=0])\n\nFind all local maxima and maxima prominences in x matching the conditions w and minprom. w sets the minimum allowed distance between maxima. minprom sets the minimum prominence (inclusive) of returned maxima.\n\nPeak prominence is calculated as the distance between the current maxima and the highest of the minimums of the lower and upper bounds. Bounds extend from the next index from the current maxima to the next maxima higher than the current maxima, or the end of the signal, which ever comes first.\n\nExamples\n\njulia> x = rand(1000);\n\njulia> ma, pa = peakprom(x, Maxima());\n\njulia> mi, pi = peakprom(-x, Minima());\n\njulia> @assert (mi == ma) && (pa == pi)\n\n\nSee also: maxima, minima\n\n\n\n\n\npeakprom(x, ::Minima[, w=1, minprom=0])\n\nFind all local minima and minima prominences in x matching the conditions w and minprom. w sets the minimum allowed distance between minima. minprom sets the minimum prominence (inclusive) of returned minima.\n\nPeak prominence is calculated as the distance between the current minima and the lowest of the maximums of the lower and upper bounds. Bounds extend from the next index from the current minima to the next minima lower than the current minima, or the end of the signal, which ever comes first.\n\nSee also: maxima, minima\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Peaks.MaximaPeaks.MinimaPeaks.PeaksPeaks.evalPeaks.includePeaks.maximaPeaks.minimaPeaks.peakprom"
},

]}
