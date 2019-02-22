var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VisualRegressionTests.jl-1",
    "page": "Readme",
    "title": "VisualRegressionTests.jl",
    "category": "section",
    "text": "Easy regression testing for visual packages. Automated tests compare similarity between a newly generated image and a reference image using the Images package. While in interactive mode, the tests can optionally pop up a Gtk GUI window showing a side-by-side comparison of the test and reference image, and then optionally overwrite the reference image with the test image. This allows for straightforward regression testing of image data, even when the \"correct\" images change over time."
},

{
    "location": "#Author:-Thomas-Breloff-(@tbreloff)-1",
    "page": "Readme",
    "title": "Author: Thomas Breloff (@tbreloff)",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "Two macros are provided that can be used to perform visual regression. The first macro is for general visual objects:@visualtest testfun refimg popup tolwhere:testfun is a function that takes a filename as input, produces a visual, and saves it to disk:function testfun(fname)\n  visual = produce() # produce some visual object\n  save(fname, visual) # save visual to file using filename\nendrefimg is the filename where to save the reference image for regression testing\npopup tells whether or not a Gtk popup window should be shown in case of mismatch (default to true)\ntol the tolerance of the comparison (default to 0.02)The second macro is for plots generated with Plots.jl:@plottest plotfun refimg popup tolwhere the only difference is in the plotfun function. In this case, the function should take no argument, and produce a plot, without saving it. The macro will take care of saving the image as a PNG in the disk. Alternatively, the plotfun argument can be an entire sequence of commands (i.e. a function body):@plottest begin\n  plot([1.,2.,3.])\n  plot!([3.,2.,1.])\n  # ...\nend true 0.02"
},

{
    "location": "#Example-GUI-popup:-1",
    "page": "Readme",
    "title": "Example GUI popup:",
    "category": "section",
    "text": "(Image: popup)"
},

{
    "location": "autodocs/#VisualRegressionTests.blurdiff",
    "page": "Docstrings",
    "title": "VisualRegressionTests.blurdiff",
    "category": "function",
    "text": "blur images A and B with sigma and then compute a difference\n\n\n\n\n\n"
},

{
    "location": "autodocs/#VisualRegressionTests.maxabsfinite",
    "page": "Docstrings",
    "title": "VisualRegressionTests.maxabsfinite",
    "category": "function",
    "text": "maximum absolute value in A ignoring Inf or NaN\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "VisualRegressionTests.@plottestVisualRegressionTests.@visualtestVisualRegressionTests.CLOSE_MATCHVisualRegressionTests.DOES_NOT_MATCHVisualRegressionTests.EXACT_MATCHVisualRegressionTests.PROCESSING_ERRORVisualRegressionTests.VisualRegressionTestsVisualRegressionTests.VisualTestVisualRegressionTests.VisualTestResultVisualRegressionTests.VisualTestStatusVisualRegressionTests.__init__VisualRegressionTests.accumVisualRegressionTests.blurdiffVisualRegressionTests.compare_imagesVisualRegressionTests.difftypeVisualRegressionTests.evalVisualRegressionTests.includeVisualRegressionTests.maxabsfiniteVisualRegressionTests.sadVisualRegressionTests.sumdiffVisualRegressionTests.test_images"
},

]}
