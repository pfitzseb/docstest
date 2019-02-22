var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageHistogram-1",
    "page": "Readme",
    "title": "ImageHistogram",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Implement 2d and 3d histograms of images. Support gray and colored. Include support for plotting and some predefined layouts.Implement 2d and 3d histograms of images. Support gray and colored. Include support for plotting and some predefined layouts."
},

{
    "location": "#Goal-and-purpose-1",
    "page": "Readme",
    "title": "Goal and purpose",
    "category": "section",
    "text": "Main purpose is to have a view to the color sitribution to check the quality of photos. And to have a reasonable sized window and not a little stamp.2d histograms\ngray, red, green, blue\n3d histogram\nx-, y-, z-axis : derive from red, green, blue\nplot using colored dots in RGB24 to get an impression of used color distribution within the image\nidentify which Plt package is best for 3d plotting\ncurrent decison for purpose :  plot ImageHistograms\nPlots : very good for 2D plotting and customitzed layouts\nGnuplot : very good for 3D plotting; in 2D it needs too much typing\nGR : out of the game. Found no syntax for RGB colored dots"
},

{
    "location": "#Used-Packages-1",
    "page": "Readme",
    "title": "Used Packages",
    "category": "section",
    "text": "julia as programming language\nImages.jl\nTestImages.jl\nPlots.jl : as default for 2D plots; easy to use, very good customizable. Currently not the first choice when doing 3D stuff. Too slow to work with several array having ~140000 elements.\nGnuplot.jl : Currently too complex for this purpose in 2D.  But best for 3D stuff. Works fine and within seconds for test picture \"lenacolor512\" which has ~148279 different colors.\nGR.jl : can show 3D. But I have no idea how to plot each marker dot with its own RGB color."
},

{
    "location": "#Package-tree-layout-1",
    "page": "Readme",
    "title": "Package tree layout",
    "category": "section",
    "text": "directory src:\nmodule \"ImageHistogram\" : contains the stable source. No cooked plotting\nmodule \"ImageHistogramTest\" : contains the unstable source; use to try something, add new stuff, change existing, ...\ncooked plotting in 2D using Plots\ncooked plotting in 3D using GnuplotThis way, source and runtime can be compared easily."
},

{
    "location": "#Background-Information-and-related-URLs-[ToDo]-1",
    "page": "Readme",
    "title": "Background Information and related URLs [ToDo]",
    "category": "section",
    "text": "Color to Gray conversions\nColor schemes\nRGB and friends"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Copy ImageHistogram.jl and/or ImageHistogramTest.jl into the load path of julia. Alternatively extend julia\'s load path to contain the directory the module files are located.ImageHistogramTest contains functions trying to plot 3D using Plots."
},

{
    "location": "#use-of-ImageHistogram.jl-1",
    "page": "Readme",
    "title": "use of ImageHistogram.jl",
    "category": "section",
    "text": "using Images, TestImages ; reload(\"ImageHistogram\") ; img_col256 = testimage(\"lena_color_256\");\n\nihR,ihG,ihB = ImageHistogramTest.imhistogramRGB(img_col256);\n\nihgray = ImageHistogramTest.imhistogramGray(img_col256);\n\nplot(ihgray, color=:lightgray, w=3, line=:sticks)\n\nplot(ihR, line=:red, w=2)\n\nplot_red = plot(ihR, line=:red, w=2); plot_green = plot(ihG, line=:green, w=2); plot_blue = plot(ihB, line=:blue, w=2); plot_Gray = plot(ihgray, line=:lightgray, w=2);"
},

{
    "location": "#use-of-ImageHistogramTest.jl-1",
    "page": "Readme",
    "title": "use of ImageHistogramTest.jl",
    "category": "section",
    "text": "using Images, TestImages ; reload(\"ImageHistogramTest\") ; img_col256 = testimage(\"mandril_color\");\n\nihR,ihG,ihB = ImageHistogramTest.imhistogramRGB(img_col256);\n\nihgray = ImageHistogramTest.imhistogramGray(img_col256);\n\nImageHistogramTest.plot_imhi(ihR_cooked=ihR, ihG_cooked=ihG, ihB_cooked=ihB,how=1,bg=1)\n\nImageHistogramTest.plot_imhi(ihR_cooked=ihR, ihG_cooked=ihG, ihB_cooked=ihB,how=4,bg=1)\n\nImageHistogramTest.plot_imhi(ihGray_cooked=ihgray,ihR_cooked=ihR, ihG_cooked=ihG, ihB_cooked=ihB,how=3,bg=1)\n\n\nImageHistogramTest.plot_imhi_GrayRGB(img_col256)\n\nImageHistogramTest.plot_imhi_GrayRGB(img_col256, how=3, bg=0)"
},

{
    "location": "#Plotting-3D:-a-color-cube-1",
    "page": "Readme",
    "title": "Plotting 3D: a color cube",
    "category": "section",
    "text": ""
},

{
    "location": "#...-with-package-Gnuplot-1",
    "page": "Readme",
    "title": "... with package Gnuplot",
    "category": "section",
    "text": "With the new Gnuplot.jl verion 0.2.0, doing splot based stuff is easier, and works well.using Gnuplot;\n\nusing Images, TestImages ; reload(\"ImageHistogram\") ; img_col256 = testimage(\"lena_color_512\");\n\nredv, greenv,bluev, colv = ImageHistogramTest.imhistogramRGB3d_new2(img_col256);\n\nredv=redv*255.0; greenv=greenv*255.0; bluev=bluev*255.0;\n\ngen_pcv(cv24_a)=(pcv24=zeros(length(cv24_a));for i = 1:endof(cv24_a); pcv24[i]=cv24_a[i].color; end;return pcv24)\n\n@gsp(redv[1:10:end],greenv[1:10:end],bluev[1:10:end],gen_pcv(colv[1:10:end]),\"with points pt 13 ps 0.7 lc rgb variable\", xrange=(0,255), yrange=(0,255), zrange=(0,255), xlabel=\"red\", ylabel=\"green\", zlabel=\"blue\", \"set border -1\", \"set tics in mirror\", \"set grid\", \"set zticks out mirror\", \"set grid ztics\", \"set xyplane at 0.0\")After hitting the return-key, be patient for a few seconds. Especially if you use the full range of the color arrays. Each has a size of 148279.Doing the same with \"mandril_color\" has much less colors and color spots than smooth distribution."
},

{
    "location": "#...-with-package-Plots-1",
    "page": "Readme",
    "title": "... with package Plots",
    "category": "section",
    "text": "With GR as backend. Ensure to feed scatter3d() with less than 3000 - 4000 points per color.  It is too slow and it may die.using Plots;\n\nusing Images, TestImages ; reload(\"ImageHistogram\") ; img_col256 = testimage(\"lena_color_512\");\n\nredv, greenv,bluev, colv = ImageHistogramTest.imhistogramRGB3d_new2(img_col256);\n\nredv=redv*255.0; greenv=greenv*255.0; bluev=bluev*255.0;\n\nscatter3d(redv[1:50:end], greenv[1:50:end], bluev[1:50:end],color=colv[1:50:end], markerstrokewidth=0, markersize=2,marker=:circle) ; # set border of marker symbol to zero with \'markerstrokewidth=0\'or just callImageHistogramTest.plot_imhi_3D(img_col256); # with default range_step = 50, i.e. just take each 50s point\n\nImageHistogramTest.plot_imhi_3D(img_col256, range_step = 30); # \nImageHistogramTest.plot_imhi_3D(img_col256, range_step = 1); # take each color value; requires much mem; on Windows best after a re-bootto create a draft 3D histogram.Hints for improvements are welcome via tickets, pull requests, ...PS: My coding style uses \';\' at line ends by intention. I use copy-n-paste from/to REPL and want quiet exec."
},

]}
