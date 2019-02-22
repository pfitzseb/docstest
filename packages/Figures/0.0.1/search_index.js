var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Figures.jl-1",
    "page": "Readme",
    "title": "Figures.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url]Figures.jl is a simple package that creates draggable figures in a browser window to display plots from various plotting packages. It currently works with PlotlyJS.jl."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using PlotlyJS, Figures\njulia> Figures.start() # You can enter a port, e.g. Figures.start(3000). Default is 8000.This launches a server on localhost. Opening the browser to http://localhost:8000 will show a blank page.Runningjulia> figure(1)displays a draggable figure in the browser.(Image: Figure 1)Runningjulia> function linescatter1()\n    trace1 = PlotlyJS.scatter(;x = 1:4, y = rand(4), mode = \"markers\")\n    trace2 = PlotlyJS.scatter(;x = 2:5, y = rand(4), mode = \"lines\")\n    trace3 = PlotlyJS.scatter(;x = 1:4, y = rand(4), mode = \"lines+markers\")\n    PlotlyJS.plot([trace1, trace2, trace3]) |> display\nend\njulia> linescatter1()displays the interactive PlotlyJS chart in the figure.(Image: Plotly Chart 1)A second figure can be created by runningjulia> figure(2)\njulia> linescatter1()(Image: Plotly Chart 2)In addition to creating figures, the figure method can make an existing figure active again so that subsequent plots will be rendered on the active figure, e.g.julia> figure(1)\njulia> linescatter1()will display a new chart on the existing figure.You can add as many figures to the browser as you like(Image: Plotly Chart 3)To remove figures, there is the methodjulia> closeall()which closes all figures andjulia> close(1)which closes the specified figure.Alternatively, figures can be closed directly in the browser by double clicking them."
},

{
    "location": "#To-Do-1",
    "page": "Readme",
    "title": "To Do",
    "category": "section",
    "text": "Add support for VegaLite.jl\nAdd support for Plots.jl\nAdd support for resizing figures, etc.[travis-img]: https://travis-ci.org/EricForgy/Figures.jl.svg?branch=master [travis-url]: https://travis-ci.org/EricForgy/Figures.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/EricForgy/Figures.jl?branch=master&svg=true [appveyor-url]: https://ci.appveyor.com/project/EricForgy/figures-jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Figures.DisplayFigures.FiguresFigures.__init__Figures.closeFigures.closeallFigures.currentFigures.evalFigures.figureFigures.includeFigures.startFigures.syncstart"
},

]}
