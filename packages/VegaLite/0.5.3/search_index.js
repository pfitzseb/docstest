var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#VegaLite.jl-1",
    "page": "Home",
    "title": "VegaLite.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "VegaLite.jl is a plotting package for the julia programming language. The package is based on Vega-Lite, which extends a traditional grammar of graphics API into a grammar of interactive graphics.VegaLite.jl allows you to create a wide range of statistical plots. It exposes the full functionality of the underlying Vega-Lite and is a the same time tightly integrated into the julia ecosystem. Here is an example of a scatter plot:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(\n    :point,\n    x=:Horsepower,\n    y=:Miles_per_Gallon,\n    color=:Origin,\n    width=400,\n    height=400\n)"
},

{
    "location": "gettingstarted/installation/#",
    "page": "Installation",
    "title": "Installation",
    "category": "page",
    "text": ""
},

{
    "location": "gettingstarted/installation/#Installation-1",
    "page": "Installation",
    "title": "Installation",
    "category": "section",
    "text": "To install VegaLite.jl, run the following command in the julia Pkg REPL-mode:(v1.0) pkg> add VegaLite"
},

{
    "location": "gettingstarted/installation/#REPL-frontends-1",
    "page": "Installation",
    "title": "REPL frontends",
    "category": "section",
    "text": "If you create plots from the standard julia REPL, they will show up in a browser window when displayed.As an alternative you can install ElectronDisplay.jl with Pkg.add(\"ElectronDisplay\"). Whenever you load that package with using ElectronDisplay, any plot you display will then show up in an electron based window instead of a browser window."
},

{
    "location": "gettingstarted/installation/#Notebook-frontends-1",
    "page": "Installation",
    "title": "Notebook frontends",
    "category": "section",
    "text": "VegaLite.jl works with Jupyter Lab, Jupyter Notebook and nteract.The first step to use any of these notebooks frontends is to install them. The second step is to install the general julia integration by running the following julia code:Pkg.add(\"IJulia\")At that point you should be able to use VegaLite.jl in notebooks that have a julia kernel.We recommend that you use either Jupyter Lab or nteract for the best VegaLite.jl experience: you will get the full interactive experience of Vega-Lite in those two frontends without any further installations. While you can display plots in the classic Jupyter Notebook, you won\'t get interactive plots in that environment without further setup steps."
},

{
    "location": "gettingstarted/installation/#VS-Code-and-Juno/Atom-1",
    "page": "Installation",
    "title": "VS Code and Juno/Atom",
    "category": "section",
    "text": "If you plot from within VS Code with the julia extension or Juno/Atom, plots will show up in a plot pane in those editors.Neither of the plot panes currently support the interactive features of VegaLite.jl. There are plans to add support for interactive charts for both editors."
},

{
    "location": "gettingstarted/installation/#Example-Datasets-1",
    "page": "Installation",
    "title": "Example Datasets",
    "category": "section",
    "text": "Many of the examples in the documentation use data from the Vega Datasets repository. You can access these datasets easily with the julia package VegaDatasets.jl. To install that package, run the following julia code:Pkg.add(\"VegaDatasets\")"
},

{
    "location": "gettingstarted/tutorial/#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "gettingstarted/tutorial/#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "This tutorial will show you how to create plots with VegaLite.jl."
},

{
    "location": "gettingstarted/tutorial/#Data-1",
    "page": "Tutorial",
    "title": "Data",
    "category": "section",
    "text": "Plots are a way to visualize data, and therefore every plot starts with some dataset. VegaLite.jl expects data to be in tabular form, and it works best if you pass it tidy data.The definition of tabular data we are using here is very simple: think of a table that has a header and consists of a number of columns and rows. The header gives each column a name. The rows correspond to the actual data. Columns don\'t have to be of the same data type, i.e. you can have one column that contains Strings, and another that contains Float64 values.VegaLite.jl can digest many different julia types that store tabular data. You can, for example, plot data that is stored in a DataFrame, JuliaDB.jl or loaded from disc with CSVFiles.jl. In this tutorial we will plot data that ships in the package VegaDatasets.jl.The dataset we will use for this tutorial is the cars dataset from the VegaDatasets.jl. The dataset contains information about a couple hundred cars. We can load the dataset with the dataset function:using VegaDatasets\n\ndata = dataset(\"cars\")We are storing the dataset in the variable data, so that we can access it more easily in the following examples."
},

{
    "location": "gettingstarted/tutorial/#Simple-Scatter-Plot-1",
    "page": "Tutorial",
    "title": "Simple Scatter Plot",
    "category": "section",
    "text": "We will start out with a very simple scatter plot. The minimum steps for creating a plot are to 1) pass the data we want to plot to the plot macro, and 2) specify what kind of visual shape, or \"mark\" in Vega-Lite terminology, we want to use to visualize our data. We \"pipe\" the data into the plot macro using the pipe operator |>. The actual plot is created by a call to the @vlplot macro. The first argument to the @vlplot macro specifies what kind of mark we want to use for our plot. We pass the name of the mark as a symbol. In our example we want to use points for our plot. The following code shows this minimal plot:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |> @vlplot(:point)While this code produces a plot, it is not a very useful plot. Vega-Lite is actually drawing a point for every row in our input dataset. But it is drawing all these points on top of each other, which makes the plot so uninteresting.By the way, the code above is based on the premise that it is executed in the Julia command line (REPL). When the code is executed from within a script (or a function), the plot needs to be explicitly displayed asusing VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |> @vlplot(:point) |> displayTo create a more interesting plot, we next need to specify how Vega-Lite should connect key properties of the points (for example their position) with the data that we passed it. These connections are called \"encodings\" in Vega-Lite. We will start out by specifying how both the x and y position encoding channel for the points should take values from the data we passed:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |> @vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower)This code now produces a nice scatter plot. We specify these encodings by using keyword arguments inside the @vlplot macro that correspond to the names of the encoding channels, in our example the x and y channel. We pass the names of the columns in our dataset that we want to use for these channels as symbols, e.g. as :Miles_per_Gallon and :Horsepower."
},

{
    "location": "gettingstarted/tutorial/#Encoding-1",
    "page": "Tutorial",
    "title": "Encoding",
    "category": "section",
    "text": "Vega-Lite provides many different encoding channels beyond the x and y channel we saw in the previous section. This section will introduce a few more encoding channels and how you can configure their details. You can read about the full list of encoding channels in the original Vega-Lite documentation."
},

{
    "location": "gettingstarted/tutorial/#Channels-1",
    "page": "Tutorial",
    "title": "Channels",
    "category": "section",
    "text": "As our next step we will encode the color channel. The following code will use the Origin column in our dataset for the color channel, so that the points in our plot use a different color for each unique value in the Origin column:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |> @vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower, color=:Origin)If we want to produce a separate plot for each of the three unique Origin values, we can instead encode the columns channel so that we create a facet plot:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |> @vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower, column=:Origin)We can now use the color channel to visualize yet another column from our dataset. The following code uses the color encoding channel to visualize the Cylinders column in our dataset:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |>\n@vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower, column=:Origin, color=:Cylinders)"
},

{
    "location": "gettingstarted/tutorial/#Channel-types-1",
    "page": "Tutorial",
    "title": "Channel types",
    "category": "section",
    "text": "Before we introduce channel types, we will go back to a more simple plot without faceting.using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |>\n@vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower, color=\"Cylinders\")We are still encoding the color channel, but note that we are now passing the name of the column as a String, not as a Symbol (i.e. we are writing color=\"Cylinders\" instead of color=:Cylinders). This is a general pattern in VegaLite.jl: you can generally use Symbols and Strings interchangeably. Using a Symbol saves you one extra character (the closing \"), so we tend to use those when possible, but sometimes you need to use characters that can\'t be used in Julia\'s literal Symbolsyntax, and then we use Strings.The legend that was automatically generated for the color channel in the previous plot uses a continuous scale, i.e. it shows a smooth range of colors. VegaLite.jl automatically encodes any numeric column in the source data as such a \"quantitative\" channel. Sometimes that is not a good automatic default, though. For example, in our example case there are only a handful of distinct integer values used in the Cylinders column, and in such a case we might prefer a more discrete legend.We can tell VegaLite.jl to change the type of a channel from say the default quantitative type to an ordinal channel by slightly changing the channel encoding to color=\"Cylinders:ordinal\". In this case we specify the type of the encoding as a second argument in the string that is separated from the column name by a :. We can further shorten this by writing color=\"Cylinders:o\", i.e. we can only use the first character of the type of encoding we want to use.Using this new syntax we can generate the following plot:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |>\n@vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower, color=\"Cylinders:o\")Values in an ordinal channel are still ordered, so Vega-Lite automatically picks a color scheme that can showcase such an order.What if we don\'t want to use a color scheme that signals any order? In that case we can change the type of the encoding to nominal by using the syntax color=\"Cylinders:n\", generating the following plot:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |>\n@vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower, color=\"Cylinders:n\")You can also use the same encoding type specification for any other encoding channel. The following example puts the Cylinders column on the x axis of the plot and specifies it as an ordinal encoding:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |> @vlplot(:point, x=\"Cylinders:o\", y=:Miles_per_Gallon)"
},

{
    "location": "gettingstarted/tutorial/#Channel-properties-1",
    "page": "Tutorial",
    "title": "Channel properties",
    "category": "section",
    "text": "Our previous plots looked quite decent, but in many cases we probably still want to customize a whole range of features of our plots. One simple example in the previous plots might be the label of the axis that encoded the Miles_per_Gallon column. The axis automatically got labeled by the column name, and we might want to remove the underscores from the actual axis label.Whenever we want to specify more properties for a channel than just the name or type, we have to assign a composite value to the name of the channel by using curly brackets {}. Note that this use of {} is specific to the @vlplot macro, i.e. it is not a generic Julia language feature. For example, to specify an alternative title for an axis, we would write x={:Miles_per_Gallon, title=\"MPG\"}. Note that within the composite value we can still pass the name of the field to be encoded as a first positional argument, followed by arbitrary many named arguments. We can use similar syntax to also adjust the title of the legend, as shown in the following code example:using VegaLite, VegaDatasets\n\ndata = dataset(\"cars\")\n\ndata |>\n@vlplot(\n    :point,\n    x={\n        :Miles_per_Gallon,\n        title=\"MPG\"\n    },\n    y=:Horsepower,\n    color={\n        \"Cylinders:n\",\n        legend={title=\"No of Cylinders\"}\n    }\n)Channels have a large number of properties that you can customize in this way, they are all explained in the original Vega-Lite documentation."
},

{
    "location": "gettingstarted/tutorial/#Marks-1",
    "page": "Tutorial",
    "title": "Marks",
    "category": "section",
    "text": "Our examples all used a point mark so far, but Vega-Lite supports many more types of marks. The following example uses a line mark instead of the point mark we have used so far:using VegaLite, VegaDatasets, Query\n\ndataset(\"stocks\") |>\n@filter(_.symbol==\"GOOG\") |>\n@vlplot(:line, x={\"date:t\", axis={format=\"%Y\"}}, y=:price)Note how we specify the line mark type as the first positional argument to the @vlplot macro call. This examples also showcases a number of other features. First, it uses Query.jl to filter the dataset before we plot it (we only want to plot the stock price for Google). The example also introduces a encoding channel type we haven\'t seen before: we are using a temporal channel type here (configured with the :t part in \"date:t\"). The temporal type is specifically designed for date and time information. We are also changing how the values of the x axis are displayed in the plot by specifying a custom format string for the x axis.Sometimes we will need to configure more aspects of the mark than just the type of mark. In that case we can pass additional properties by using the composite syntax we have seen before. In the following example we are using a line mark, and we are customizing the color of the line and are also configuring it to show points on top of the line itself:using VegaLite, VegaDatasets, Query\n\ndataset(\"stocks\") |>\n@filter(_.symbol==\"GOOG\") |>\n@vlplot(\n    mark={\n        :line,\n        point=true,\n        color=:red\n    },\n    x={\n        \"date:t\",\n        axis={\n            format=\"%Y\"\n        }\n    },\n    y=:price\n)Note how we have to use the more explicit named keyword syntax mark={} when we want to specify more mark properties inside the @vlplot macro call. We can still pass the mark type as a positional first argument inside the value we assign to mark, though.There are many different mark types in Vega-Lite, with many different options to customize their appearance. The original Vega-Lite documentation describes all these options in detail."
},

{
    "location": "gettingstarted/tutorial/#Aggregations-1",
    "page": "Tutorial",
    "title": "Aggregations",
    "category": "section",
    "text": "The following graph shows many individual data points for each x axis value:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |> @vlplot(:point, x=:Origin, y=:Miles_per_Gallon)In such situations it can often be more interesting to compute an aggregate value for each x axis value, for example the mean miles per gallon number for each region:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |> @vlplot(:point, x=:Origin, y=\"average(Miles_per_Gallon)\")Here we are making use of another shorthand syntax option in VegaLite.jl. We can specify an aggregation operation in the form of a function call (e.g. average(...)) and then pass the name of the column for which we want to compute the aggregation as an argument (e.g. average(Miles_per_Gallon)). Vega-Lite supports many different aggregations. For example the next plot shows the minimum miles per gallon per region:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |> @vlplot(:bar, x=:Origin, y=\"min(Miles_per_Gallon)\")This example also uses a different mark, namely the bar mark to create a bar plot.There is one aggregation operator that works slightly different, namely the count aggregation. It simply counts the number of rows in each group, so one does not have to specify a column to be aggregated:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |> @vlplot(:bar, x=:Origin, y=\"count()\")Aggregations can of course be used for any encoding channel, we can for example easily create a horizontal bar chart:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |> @vlplot(:bar, x=\"count()\", y=:Origin)"
},

{
    "location": "gettingstarted/tutorial/#Config-1",
    "page": "Tutorial",
    "title": "Config",
    "category": "section",
    "text": "Almost all aspects of a Vega-Lite plot can be configured and customized. Many of these choices can be set by using the config keyword in the @vlplot macro call. For example, the following plot adds a title to the plot and the configures the title to use a red font:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(\n    :point,\n    x=:Miles_per_Gallon,\n    y=:Acceleration,\n    title=\"Cars\",\n    config={\n        title={\n            color=:red\n        }\n    }\n)The original Vega-Lite documentation describes all config options in great detail."
},

{
    "location": "gettingstarted/tutorial/#File-IO-1",
    "page": "Tutorial",
    "title": "File IO",
    "category": "section",
    "text": "Plots that are created with VegaLite.jl can be saved to disc in a number of formats (PNG, SVG, PDF, ESP). To save a plot, simply call the save function:using VegaLite, VegaDatasets\n\np = dataset(\"cars\") |> @vlplot(:bar, x=\"count()\", y=:Origin)\n\nsave(\"myplot.png\", p)You can also pipe a plot into the save function:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:bar, x=\"count()\", y=:Origin) |>\nsave(\"myplot.pdf\")"
},

{
    "location": "gettingstarted/tutorial/#Next-steps-1",
    "page": "Tutorial",
    "title": "Next steps",
    "category": "section",
    "text": "There are two main sources of information if you want to learn more about plotting with VegaLite.jl. The first is the excellent Vega-Lite documentation. The documentation describes the JSON original Vega-Lite version, but it should be fairly easy to understand how those examples translate into the Julia equivalent. The second source is are the remaining sections in this documentation of VegaLite.jl. The section about the @vlplot macro should be especially useful for understanding how the JSON Vega-Lite syntax can be translated into the equivalent julia version."
},

{
    "location": "userguide/vlspec/#",
    "page": "Vega-lite specifications",
    "title": "Vega-lite specifications",
    "category": "page",
    "text": ""
},

{
    "location": "userguide/vlspec/#Vega-lite-specifications-1",
    "page": "Vega-lite specifications",
    "title": "Vega-lite specifications",
    "category": "section",
    "text": "A Vega-Lite plot specification is represented as a VLSpec object in julia. There are multiple ways to create a VLSpec object:The @vlplot macro is the main way to create VLSpec instances in code.\nUsing the vl string macro, you can write Vega-Lite specifications as JSON in your julia code.\nYou can load Vega-Lite specifications from disc with the load function.\nThe DataVoyager.jl package provides a graphical user interface that you can use to create Vega-Lite specification.There are two main things one can do with a VLSpec object:One can display it in various front ends.\nOne can save the plot to disc in various formats using the save function.This section will give a brief overview of these options. Other sections will describe each option in more detail."
},

{
    "location": "userguide/vlspec/#The-@vlplot-macro-1",
    "page": "Vega-lite specifications",
    "title": "The @vlplot macro",
    "category": "section",
    "text": "The @vlplot macro is the main way to specify plots in VegaLite.jl. The macro uses a syntax that is closely aligned with the JSON format of the original Vega-Lite specification. It is very simple to take a vega-lite specification and \"translate\" it into a corresponding @vlplot macro call. In addition, the macro provides a number of convenient syntax features that allow for a concise expression of common vega-lite patterns. These shorthand give VegaLite.jl a syntax that can be used in a productive way for exploratory data analysis.A very simple Vega-Lite JSON specification looks like this:{\n  \"data\": {\n    \"values\": [\n      {\"a\": \"A\",\"b\": 28}, {\"a\": \"B\",\"b\": 55}, {\"a\": \"C\",\"b\": 43},\n      {\"a\": \"D\",\"b\": 91}, {\"a\": \"E\",\"b\": 81}, {\"a\": \"F\",\"b\": 53},\n      {\"a\": \"G\",\"b\": 19}, {\"a\": \"H\",\"b\": 87}, {\"a\": \"I\",\"b\": 52}\n    ]\n  },\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"a\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"b\", \"type\": \"quantitative\"}\n  }\n}This can be directly translated into the following @vlplot macro call:using VegaLite\n\n@vlplot(\n    data={\n        values=[\n            {a=\"A\",b=28},{a=\"B\",b=55},{a=\"C\",b=43},\n            {a=\"D\",b=91},{a=\"E\",b=81},{a=\"F\",b=53},\n            {a=\"G\",b=19},{a=\"H\",b=87},{a=\"I\",b=52}\n        ]\n    },\n    mark=\"bar\",\n    encoding={\n        x={field=\"a\", typ=\"ordinal\"},\n        y={field=\"b\", typ=\"quantitative\"}\n    }\n)The main difference between JSON and the @vlplot macro is that keys are not surrounded by quotation marks in the macro, and key-value pairs are separate by a = (instead of a :). The second important change is that whenever a key is named type in the JSON version, one has to translate that into typ in the macro (type is a reserved keyword in julia and therefore can\'t be used in this context).While these literal translations of JSON work, they are also quite verbose. The @vlplot macro provides a number of shorthands so that the same plot can be expressed in a much more concise manner. The following example creates the same plot, but uses a number of alternative syntaxes provided by the @vlplot macro:using VegaLite, DataFrames\n\ndata = DataFrame(\n    a=[\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\",\"H\",\"I\"],\n    b=[28,55,43,91,81,53,19,87,52]\n)\n\ndata |> @vlplot(:bar, x=:a, y=:b)Typically you should use these shorthands so that you can express your plots in a concise way. The various shorthands are described in more detail in a different chapter."
},

{
    "location": "userguide/vlspec/#The-vl-string-macro-1",
    "page": "Vega-lite specifications",
    "title": "The vl string macro",
    "category": "section",
    "text": "One can embed a JSON vega-lite specification directly in julia code by using the vl string macro:using VegaLite\n\nspec = vl\"\"\"\n{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v2.json\",\n  \"description\": \"A simple bar chart with embedded data.\",\n  \"data\": {\n    \"values\": [\n      {\"a\": \"A\",\"b\": 28}, {\"a\": \"B\",\"b\": 55}, {\"a\": \"C\",\"b\": 43},\n      {\"a\": \"D\",\"b\": 91}, {\"a\": \"E\",\"b\": 81}, {\"a\": \"F\",\"b\": 53},\n      {\"a\": \"G\",\"b\": 19}, {\"a\": \"H\",\"b\": 87}, {\"a\": \"I\",\"b\": 52}\n    ]\n  },\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"a\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"b\", \"type\": \"quantitative\"}\n  }\n}\n\"\"\"The resulting VLSpec object is indistinguishable from one that is created via the @vlplot macro.The main benefit of this approach is that one can directly leverage JSON vega-lite examples and code."
},

{
    "location": "userguide/vlspec/#Loading-and-saving-vega-lite-specifications-1",
    "page": "Vega-lite specifications",
    "title": "Loading and saving vega-lite specifications",
    "category": "section",
    "text": "The load and save functions can be used to load and save vega-lite specifications to and from disc. The following example loads a vega-lite specification from a file named myfigure.vegalite:using VegaLite\n\nspec = load(\"myfigure.vegalite\")To save a VLSpec to a file on disc, use the save function:using VegaLite\n\nspec = ... # Aquire a spec from somewhere\n\nsavespec(\"myfigure.vegalite\", spec)note: Note\nUsing the load and save function will be enabled in a future release. For now you should use loadspec and savespec instead (both of these functions will be deprecated once load and save are enabled)."
},

{
    "location": "userguide/vlspec/#[DataVoyager.jl](https://github.com/queryverse/DataVoyager.jl)-1",
    "page": "Vega-lite specifications",
    "title": "DataVoyager.jl",
    "category": "section",
    "text": "The DataVoyager.jl package provides a graphical UI for data exploration that is based on vega-lite. One can use that tool to create a figure in the UI, and then export the corresponding vega-lite specification for use with this package here."
},

{
    "location": "userguide/vlspec/#Displaying-plots-1",
    "page": "Vega-lite specifications",
    "title": "Displaying plots",
    "category": "section",
    "text": "VegaLite.jl integrates into the default julia multimedia system for viewing plots. This means that in order to show a plot p you would simply call the display(p) function. Most interactive julia environments (REPL, IJulia, Jupyter Lab, nteract etc.) automatically call display on the value of the last interactive command for you.Simply viewing plots should work out of the box in all known julia environments. If you plan to use the interactive features of VegaLite.jl the story becomes slightly more nuanced: while many environments (REPL, Jupyter Lab, nteract, ElectronDisplay.jl) support interactive VegaLite.jl plots by default, there are others that either need some extra configuration work (Jupyter Notebook), or don\'t support interactive plots."
},

{
    "location": "userguide/vlspec/#Saving-plots-1",
    "page": "Vega-lite specifications",
    "title": "Saving plots",
    "category": "section",
    "text": "VegaLite.jl plots can be saved as PNG, SVG, PDF and EPS files. You can save a plot by calling the save function:using VegaLite, VegaDatasets\n\np = dataset(\"cars\") |> @vlplot(:point, x=:Horsepower, y=:Miles_per_Gallon)\n\n# Save as PNG file\nsave(\"figure.png\", p)\n\n# Save as SVG file\nsave(\"figure.svg\", p)\n\n# Save as PDF file\nsave(\"figure.pdf\", p)\n\n# Save EPS PNG file\nsave(\"figure.eps\", p)You can also use the |> operator with the save function:using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n    @vlplot(:point, x=:Horsepower, y=:Miles_per_Gallon) |>\n    save(\"figure.png\")"
},

{
    "location": "userguide/vlplotmacro/#",
    "page": "The @vlplot command",
    "title": "The @vlplot command",
    "category": "page",
    "text": ""
},

{
    "location": "userguide/vlplotmacro/#The-@vlplot-command-1",
    "page": "The @vlplot command",
    "title": "The @vlplot command",
    "category": "section",
    "text": "The @vlplot macro is the main method to create Vega-Lite plots from julia. The macro accepts arguments that look almost identical to the original Vega-Lite JSON syntax. It should therefore be very easy to take any given Vega-Lite JSON example and translate it into a corresponding @vlplot macro call. The macro also provides a number of shorthands that make it easy to create very compact plot specifications. This section will first review the difference between the original JSON Vega-Lite syntax and the @vlplot macro, and then discuss the various shorthands that users will typically use."
},

{
    "location": "userguide/vlplotmacro/#JSON-syntax-vs-@vlplot-macro-1",
    "page": "The @vlplot command",
    "title": "JSON syntax vs @vlplot macro",
    "category": "section",
    "text": "A very simple Vega-Lite JSON specification looks like this:{\n  \"data\": {\n    \"values\": [\n      {\"a\": \"A\",\"b\": 28}, {\"a\": \"B\",\"b\": 55}, {\"a\": \"C\",\"b\": 43},\n      {\"a\": \"D\",\"b\": 91}, {\"a\": \"E\",\"b\": 81}, {\"a\": \"F\",\"b\": 53},\n      {\"a\": \"G\",\"b\": 19}, {\"a\": \"H\",\"b\": 87}, {\"a\": \"I\",\"b\": 52}\n    ]\n  },\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"a\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"b\", \"type\": \"quantitative\"}\n  }\n}This can be directly translated into the following @vlplot macro call:using VegaLite\n\n@vlplot(\n    data={\n        values=[\n            {a=\"A\",b=28},{a=\"B\",b=55},{a=\"C\",b=43},\n            {a=\"D\",b=91},{a=\"E\",b=81},{a=\"F\",b=53},\n            {a=\"G\",b=19},{a=\"H\",b=87},{a=\"I\",b=52}\n        ]\n    },\n    mark=\"bar\",\n    encoding={\n        x={field=\"a\", typ=\"ordinal\"},\n        y={field=\"b\", typ=\"quantitative\"}\n    }\n)We had to make the following adjustments to the original JSON specification:The outer pair of {} brackets was removed, the parenthesis () of the macro call instead deliminate the beginning and end of the specification.\nThe quotation marks \" around keys like mark are removed.\nThe JSON key-value separator : was replaced with =.\nAny key that is named type in the JSON specification has to be renamed to typ in the @vlplot macro (type is a reserved keyword in julia and can therefore not be used here).\nAny null value in the JSON specification should be replaced with nothing in the @vlplot call.These five rules should be sufficient to translate any valid JSON Vega-Lite specification into a corresponding @vlplot macro call."
},

{
    "location": "userguide/vlplotmacro/#Symbols-instead-of-Strings-1",
    "page": "The @vlplot command",
    "title": "Symbols instead of Strings",
    "category": "section",
    "text": "A first shorthand provided by the @vlplot macro is that you can use a Symbol on the right hand side of any key-value pair instead of a String. For example, instead of writing mark=\"bar\", you can write mark=:bar.The following example demonstrates this in the context of a full plotting example:data |>\n@vlplot(\n    mark=:point, # Note how we use :point instead of \"point\" here\n    encoding={\n        x={\n            field=:a, # Note how we use :a instead of \"a\" here\n            typ=:ordinal # Note how we use :ordinal instead of \"ordinal\" here\n        },\n        y={\n            field=:b, # Note how we use :b instead of \"b\" here\n            typ=:quantitative # Note how we use :quantitative instead of \"quantitative\" here\n        }\n    }\n)"
},

{
    "location": "userguide/vlplotmacro/#Shorthand-string-syntax-for-encodings-1",
    "page": "The @vlplot command",
    "title": "Shorthand string syntax for encodings",
    "category": "section",
    "text": "VegaLite.jl provides a similar string shorthand syntax for encodings as Altair (the Python wrapper around Vega-Lite).Almost any channel encoding in a specification will have the keys field and typ, as in x={field=:a, typ=:ordinal}. Because these patterns are so common, we provide a shorthand string syntax for this case. Using the shorthand one can write the channel encoding as x={\"a:o\"}. These string shorthands have to appear as the first positional argument inside the curly brackets {} for the encoding channel. The pattern inside the string is that one specifies the name of the field before the :, and then the first letter of the type of encoding (o for ordinal, q for quantitative etc.).The string shorthand also extends to the timeUnit and aggregate key in encodings. Aggregation functions and time units can be specified using a function call syntax inside the string shorthand. For example, x={\"mean(foo)\"} is equivalent to x={field=:foo, aggregate=:mean, typ=:quantitative} (note that we don\'t have to specify the type explicitly when we use aggregations, the default assumption is that the result of an aggregation is quantitative). An example that uses the shorthand for a time unit is x={\"year(foo):t\"}, which is equivalent to x={field=:foo, timeUnit=:year, typ=:quantitative}. For aggregations that don\'t require a field name (e.g. the count aggregation), you can just write x=\"count()\".String shorthands can be combined with any other attributes. For example, the following example shows how one can specify an axis title and still use the string shorthand notation:x={\"foo:q\", axis={title=\"some title\"}}In cases where you don\'t want to specify any other attributes than what can be expressed in the string shorthand you don\'t have to use the surrounding curly brackets {} for the encoding: x=\"foo:q\" is equivalent to x={field=:foo, typ=:quantitative}. If you only want to specify the field and not even the type, you can resort to using a Symbol: x=:foo is also a valid encoding.The shorthand string syntax allows us to write the specification of the plot from the previous section in this much more concise format:data |>\n@vlplot(\n    mark=:point,\n    encoding={\n        x=\"a:o\",\n        y=:b\n    }\n)"
},

{
    "location": "userguide/vlplotmacro/#Shorthands-for-the-encoding-element-1",
    "page": "The @vlplot command",
    "title": "Shorthands for the encoding element",
    "category": "section",
    "text": "There are two shorthands for the encoding element in a plot specification.The first is to simply write enc instead of encoding. For example, the previous specification can be written asdata |>\n@vlplot(\n    mark=:point,\n    enc={\n        x=\"a:o\",\n        y=:b\n    }\n)An even shorter notation is to just leave the level of the encoding element away and place the channel encodings directly into the top level specification. With that option you would write the previous example as:data |>\n@vlplot(mark=:point, x=\"a:o\", y=:b)"
},

{
    "location": "userguide/vlplotmacro/#Mark-shorthands-1",
    "page": "The @vlplot command",
    "title": "Mark shorthands",
    "category": "section",
    "text": "There are two shorthands for the mark attribute in a specification. The first option is to use the first positional argument in a @vlplot call to specify the mark type. This only works if you don\'t want to specify any other mark attributes. For example, the previous plot can now be written asdata |> @vlplot(:point, x=\"a:o\", y=:b)If you want to specify more mark attributes, you can reintroduce curly brackets {}, and then specify the type of the mark as the first positional argument inside the mark block. For example, the following code specifies that the mark color should be red, in addition to picking points as the mark type:data |>\n@vlplot(\n    mark={:point, color=:red},\n    x=\"a:o\",\n    y=:b\n)"
},

{
    "location": "userguide/data/#",
    "page": "Data sources",
    "title": "Data sources",
    "category": "page",
    "text": ""
},

{
    "location": "userguide/data/#Data-1",
    "page": "Data sources",
    "title": "Data",
    "category": "section",
    "text": "VegaLite.jl accepts data to be plotted in a variety of different formats and provides a number of different ways to reference that data. The most typical way to plot data is that you have your data in some julia data structure, and then add this data to the Vega-Lite specification itself for plotting. As an alternative, Vega-Lite also accepts URLs that point to data sources either on disc or on the web for plotting. Data that you want to plot will typically be in a tabular form."
},

{
    "location": "userguide/data/#Inline-data-1",
    "page": "Data sources",
    "title": "Inline data",
    "category": "section",
    "text": "Any julia data structure data supports the iterable tables interface from the TableTraits.jl package can be used as an inline data source with VegaLite.jl. In practice that covers most tabular data structures in the julia ecosystem: DataFrames.jl, JuliaDB.jl, IndexedTables.jl, various file IO packages (CSVFiles.jl, FeatherFiles.jl, ExcelFiles.jl, StatFiles.jl, ParquetFiles.jl) and any Query.jl result that has a tabular form.There are two ways to add an inline data source to a Vega-Lite plot: 1) by piping the data source into a plot, or 2) by using the data keyword from within a @vlplot call."
},

{
    "location": "userguide/data/#Piping-inline-data-1",
    "page": "Data sources",
    "title": "Piping inline data",
    "category": "section",
    "text": "Any tabular data can be piped into a plot by using the |> operator. For example, to create a scatter plot of a DataFrame called df you can pipe that DataFrame into a specification like this:df |> @vlplot(:point, x=:a, y=:b)As mentioned above, you are not restricted to piping DataFrames into a plot, but can in fact plot any iterable table. The following example loads some data from a CSV file using CSVFiles.jl, filters it with Query.jl and then plots it with VegaLite.jl:load(\"my_data.csv\") |> @filter(_.a>30) |> @vlplot(:point, x=:a, y=:b)"
},

{
    "location": "userguide/data/#Using-inline-data-with-the-data-keyword-1",
    "page": "Data sources",
    "title": "Using inline data with the data keyword",
    "category": "section",
    "text": "You can also specify the inline data for a plot by using the standard data keyword from the Vega-Lite language. The following example creates a plot based on a DataFrame named df:@vlplot(:point, data=df, x=:a, y=:b)This method also accepts any iterable table."
},

{
    "location": "userguide/data/#Referencing-external-data-1",
    "page": "Data sources",
    "title": "Referencing external data",
    "category": "section",
    "text": "note: Note\nNote that some of the techniques described in this section are not yet implemented.Sometimes it can be convenient to not embed the source data in the actual Vega-Lite specification, but instead just embed a link to some data in a file. Vega-Lite can read data in a variety of formats (CSV, TSV, JSON etc.), and you can again either pipe a reference into a plot or use the data keyword to specify an external link.VegaLite.jl uses the URI type from the URIParser.jl package to represent URIs, and the FilePaths.jl package to represent filesystem paths. For example, to create a path, you can use the p string macro:using FilePaths\n\npath = p\"folder/filename.csv\"The following example creates a URI instance:using URIParser\n\nuri = URI(\"https://www.foo.com/bar.csv\")"
},

{
    "location": "userguide/data/#Piping-paths-and-URIs-1",
    "page": "Data sources",
    "title": "Piping paths and URIs",
    "category": "section",
    "text": "Piping either a path or a URI into a Vega-Lite specification works the same way as piping inline data into a plot. You first have to create a path or URI, and then use the pipe operator |>. The following code shows examples of piping both a path and a URI into a plot:# Piping a path into a plot\n\np\"subfolder/myfile.csv\" |> @vlplot(:point, x=:a, y=:b)\n\n# Piping a URI into a plot\n\nURI(\"https://www.foo.com/bar.json\") |> @vlplot(:point, x=:a, y=:b)"
},

{
    "location": "userguide/data/#Using-paths-and-URIs-with-the-data-keyword-1",
    "page": "Data sources",
    "title": "Using paths and URIs with the data keyword",
    "category": "section",
    "text": "You can directly pass a path or URI to the data keyword in a @vlplot call, similar to how you can pass inline data:# Plotting data from a local file\n@vlplot(:point, data=p\"subfolder/file.csv\", x=:a, y=:b)\n\n# Plotting data from a URI\n@vlplot(:point, data=URI(\"https://www.foo.com/bar.json\"), x=:a, y=:b)Sometimes you need to specify additional configuration parameters for an external data source that are supported by the Vega-Lite specification. In that case you can also pass the path or URI instance to the url sub-key in the data part of a plot specification:@vlplot(\n    :point,\n    data={\n        url=p\"subfolder/foo.txt\",\n        format={\n            typ=:csv\n        }\n    },\n    x=:a,\n    y=:b\n)"
},

{
    "location": "examples/examples_simplecharts/#",
    "page": "Simple Charts",
    "title": "Simple Charts",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_simplecharts/#Simple-Charts-1",
    "page": "Simple Charts",
    "title": "Simple Charts",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_simplecharts/#Simple-Bar-Chart-1",
    "page": "Simple Charts",
    "title": "Simple Bar Chart",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\ndata = DataFrame(\n    a=[\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\",\"H\",\"I\"],\n    b=[28,55,43,91,81,53,19,87,52]\n)\n\ndata |> @vlplot(:bar, x=:a, y=:b)"
},

{
    "location": "examples/examples_simplecharts/#Simple-Heatmap-1",
    "page": "Simple Charts",
    "title": "Simple Heatmap",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\nx = [j for i in -5:4, j in -5:4]\ny = [i for i in -5:4, j in -5:4]\nz = x.^2 .+ y.^2\ndata = DataFrame(x=vec(x\'),y=vec(y\'),z=vec(z\'))\n\ndata |> @vlplot(:rect, x=\"x:o\", y=\"y:o\", color=:z)"
},

{
    "location": "examples/examples_simplecharts/#Simple-Histogram-1",
    "page": "Simple Charts",
    "title": "Simple Histogram",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"movies\") |>\n@vlplot(:bar, x={:IMDB_Rating, bin=true}, y=\"count()\")"
},

{
    "location": "examples/examples_simplecharts/#Simple-Line-Chart-1",
    "page": "Simple Charts",
    "title": "Simple Line Chart",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\nx = 0:100\ndata = DataFrame(x=x,sin=sin.(x./5))\n\ndata |> @vlplot(:line, x=:x, y={:sin, title=\"sin(x)\"})"
},

{
    "location": "examples/examples_simplecharts/#Simple-Scatter-Plot-1",
    "page": "Simple Charts",
    "title": "Simple Scatter Plot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"iris\") |>\n@vlplot(:point, x=:petalWidth, y=:petalLength, color=:species)TODO Add interactivity"
},

{
    "location": "examples/examples_simplecharts/#Simple-Stacked-Area-Chart-1",
    "page": "Simple Charts",
    "title": "Simple Stacked Area Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"unemployment-across-industries\") |>\n@vlplot(:area, x=\"date:t\", y=:count, color=:series)"
},

{
    "location": "examples/examples_simplecharts/#Strip-Plot-1",
    "page": "Simple Charts",
    "title": "Strip Plot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:tick, x=:Horsepower, y=\"Cylinders:o\")"
},

{
    "location": "examples/examples_barchartshistograms/#",
    "page": "Bar Charts & Histograms",
    "title": "Bar Charts & Histograms",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_barchartshistograms/#Bar-Charts-and-Histograms-1",
    "page": "Bar Charts & Histograms",
    "title": "Bar Charts & Histograms",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_barchartshistograms/#Simple-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Simple Bar Chart",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\ndata = DataFrame(\n    a=[\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\",\"H\",\"I\"],\n    b=[28,55,43,91,81,53,19,87,52]\n)\n\ndata |> @vlplot(:bar, x=\"a:o\", y=:b)"
},

{
    "location": "examples/examples_barchartshistograms/#Histogram-1",
    "page": "Bar Charts & Histograms",
    "title": "Histogram",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"movies\") |>\n@vlplot(:bar, x={:IMDB_Rating, bin=true}, y=\"count()\")"
},

{
    "location": "examples/examples_barchartshistograms/#Aggregate-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Aggregate Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"population\") |>\n@vlplot(\n    :bar,\n    transform=[{filter=\"datum.year == 2000\"}],\n    y={\"age:o\", scale={rangeStep=17}},\n    x={\"sum(people)\", axis={title=\"population\"}}\n)"
},

{
    "location": "examples/examples_barchartshistograms/#Grouped-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Grouped Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"population\") |>\n@vlplot(\n    :bar,\n    transform=[\n        {filter=\"datum.year == 2000\"},\n        {calculate=\"datum.sex == 2 ? \'Female\' : \'Male\'\", as=\"gender\"}\n    ],\n    enc={\n        column=\"age:o\",\n        y={\"sum(people)\", axis={title=\"population\", grid=false}},\n        x={\"gender:n\", scale={rangeStep=12}, axis={title=\"\"}},\n        color={\"gender:n\", scale={range=[\"#EA98D2\", \"#659CCA\"]}},\n    },\n    config={\n        view={stroke=:transparent},\n        axis={domainWidth=1}\n    }\n)"
},

{
    "location": "examples/examples_barchartshistograms/#Stacked-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Stacked Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"seattle-weather\") |>\n@vlplot(\n    :bar,\n    x={\"month(date):o\", axis={title=\"Month of the year\"}},\n    y=\"count()\",\n    color={\n        :weather,\n        scale={\n            domain=[\"sun\",\"fog\",\"drizzle\",\"rain\",\"snow\"],\n            range=[\"#e7ba52\",\"#c7c7c7\",\"#aec7e8\",\"#1f77b4\",\"#9467bd\"]\n        },\n        legend={\n            title=\"Weather type\"\n        }\n    }\n)"
},

{
    "location": "examples/examples_barchartshistograms/#Horizontal-Stacked-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Horizontal Stacked Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"barley\") |>\n@vlplot(:bar, x=\"sum(yield)\", y=:variety, color=:site)"
},

{
    "location": "examples/examples_barchartshistograms/#Normalized-Stacked-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Normalized Stacked Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"population\") |>\n@vlplot(\n    :bar,\n    transform=[\n        {filter=\"datum.year == 2000\"},\n        {calculate=\"datum.sex==2 ? \'Female\' : \'Male\'\",as=\"gender\"}\n    ],\n    enc={\n        y={\n            \"sum(people)\",\n            axis={title=\"population\"},\n            stack=:normalize\n        },\n        x={\n            \"age:o\",\n            scale={rangeStep=17}\n        },\n        color={\n            \"gender:n\",\n            scale={range=[\"#EA98D2\", \"#659CCA\"]}\n        }\n    }\n)"
},

{
    "location": "examples/examples_barchartshistograms/#Gantt-Chart-(Ranged-Bar-Marks)-1",
    "page": "Bar Charts & Histograms",
    "title": "Gantt Chart (Ranged Bar Marks)",
    "category": "section",
    "text": "using VegaLite\n\n@vlplot(\n    :bar,\n    data={\n        values=[\n            {task=\"A\",start=1,stop=3},\n            {task=\"B\",start=3,stop=8},\n            {task=\"C\",start=8,stop=10}\n        ]\n    },\n    enc={\n        y=\"task:o\",\n        x=\"start:q\",\n        x2=\"stop:q\"\n    }\n)"
},

{
    "location": "examples/examples_barchartshistograms/#A-bar-chart-encoding-color-names-in-the-data-1",
    "page": "Bar Charts & Histograms",
    "title": "A bar chart encoding color names in the data",
    "category": "section",
    "text": "using VegaLite\n\n@vlplot(\n    :bar,\n    data={\n        values=[\n            {color=\"red\",b=28},\n            {color=\"green\",b=55},\n            {color=\"blue\",b=43}\n        ]\n    },\n    x=\"color:n\",\n    y=\"b:q\",\n    color={\"color:n\",scale=nothing}\n)"
},

{
    "location": "examples/examples_barchartshistograms/#Layered-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Layered Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"population\") |>\n@vlplot(\n    :bar,\n    transform=[\n        {filter=\"datum.year==2000\"},\n        {calculate=\"datum.sex==2 ? \'Female\' : \'Male\'\",as=\"gender\"}\n    ],\n    enc={\n        x={\"age:o\", scale={rangeStep=17}},\n        y={\"sum(people)\", axis={title=\"population\"}, stack=nothing},\n        color={\"gender:n\", scale={range=[\"#e377c2\", \"#1f77b4\"]}},\n        opacity={value=0.7}\n    }\n)"
},

{
    "location": "examples/examples_barchartshistograms/#Diverging-Stacked-Bar-Chart-1",
    "page": "Bar Charts & Histograms",
    "title": "Diverging Stacked Bar Chart",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\ndata = DataFrame(\n    question=[\"Question $(div(i,5)+1)\" for i in 0:39],\n    typ=repeat([\"Strongly disagree\", \"Disagree\", \"Neither agree nor disagree\",\n        \"Agree\", \"Strongly agree\"],outer=8),\n    value=[24, 294, 594, 1927, 376, 2, 2, 0, 7, 11, 2, 0, 2, 4, 2, 0, 2, 1, 7,\n        6, 0, 1, 3, 16, 4, 1, 1, 2, 9, 3, 0, 0, 1, 4, 0, 0, 0, 0, 0, 2],\n    percentage=[0.7, 9.1, 18.5, 59.9, 11.7, 18.2, 18.2, 0, 63.6, 0, 20, 0, 20,\n        40, 20, 0, 12.5, 6.3, 43.8, 37.5, 0, 4.2, 12.5, 66.7, 16.7, 6.3, 6.3,\n        12.5, 56.3, 18.8, 0, 0, 20, 80, 0, 0, 0, 0, 0, 100],\n    percentage_start=[-19.1, -18.4, -9.2, 9.2, 69.2, -36.4, -18.2, 0, 0, 63.6,\n        -30, -10, -10, 10, 50, -15.6, -15.6, -3.1, 3.1, 46.9, -10.4, -10.4,\n        -6.3, 6.3, 72.9, -18.8, -12.5, -6.3, 6.3, 62.5, -10, -10, -10, 10, 90,\n        0, 0, 0, 0, 0],\n    percentage_end=[-18.4, -9.2, 9.2, 69.2, 80.9, -18.2, 0, 0, 63.6, 63.6, -10,\n        -10, 10, 50, 70, -15.6, -3.1, 3.1, 46.9, 84.4, -10.4, -6.3, 6.3, 72.9,\n        89.6, -12.5, -6.3, 6.3, 62.5, 81.3, -10, -10, 10, 90, 90, 0, 0, 0, 0, 100]\n)\n\ndata |> @vlplot(\n    :bar,\n    x={:percentage_start, axis={title=\"Percentage\"}},\n    x2=:percentage_end,\n    y={\n        :question, axis={\n            title=\"Question\",\n            offset=5,\n            ticks=false,\n            minExtent=60,\n            domain=false\n        }\n    },\n    color={\n        :typ,\n        legend={title=\"Response\"},\n        scale={\n            domain=[\n                \"Strongly disagree\",\n                \"Disagree\",\n                \"Neither agree nor disagree\",\n                \"Agree\",\n                \"Strongly agree\"\n            ],\n            range=[\"#c30d24\", \"#f3a583\", \"#cccccc\", \"#94c6da\", \"#1770ab\"],\n            typ=:ordinal\n        }\n    }\n)"
},

{
    "location": "examples/examples_barchartshistograms/#Simple-Bar-Chart-with-Labels-1",
    "page": "Bar Charts & Histograms",
    "title": "Simple Bar Chart with Labels",
    "category": "section",
    "text": "using VegaLite\n\n@vlplot(\n    data={\n        values=[\n            {a=\"A\",b=28},\n            {a=\"B\",b=55},\n            {a=\"C\",b=43}\n        ]\n    },\n    y=\"a:o\",\n    x=\"b:q\"\n) +\n@vlplot(:bar) +\n@vlplot(\n    mark={\n        :text,\n        align=:left,\n        baseline=:middle,\n        dx=3\n    },\n    enc={\n        text=\"b:q\"\n    }\n)"
},

{
    "location": "examples/examples_scatter_strip_plots/#",
    "page": "Scatter & Strip Plots",
    "title": "Scatter & Strip Plots",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_scatter_strip_plots/#Scatter-and-Strip-Plots-1",
    "page": "Scatter & Strip Plots",
    "title": "Scatter & Strip Plots",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_scatter_strip_plots/#Scatterplot-1",
    "page": "Scatter & Strip Plots",
    "title": "Scatterplot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:point, x=:Horsepower, y=:Miles_per_Gallon)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Dot-Plot-1",
    "page": "Scatter & Strip Plots",
    "title": "Dot Plot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"seattle-weather\") |>\n@vlplot(:tick, x=:precipitation)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Strip-Plot-1",
    "page": "Scatter & Strip Plots",
    "title": "Strip Plot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:tick, x=:Horsepower, y=\"Cylinders:o\")"
},

{
    "location": "examples/examples_scatter_strip_plots/#Colored-Scatterplot-1",
    "page": "Scatter & Strip Plots",
    "title": "Colored Scatterplot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:point, x=:Horsepower, y=:Miles_per_Gallon, color=:Origin, shape=:Origin)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Binned-Scatterplot-1",
    "page": "Scatter & Strip Plots",
    "title": "Binned Scatterplot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"movies\") |>\n@vlplot(\n    :circle,\n    x={:IMDB_Rating, bin={maxbins=10}},\n    y={:Rotten_Tomatoes_Rating, bin={maxbins=10}},\n    size=\"count()\"\n)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Bubble-Plot-1",
    "page": "Scatter & Strip Plots",
    "title": "Bubble Plot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:point, x=:Horsepower, y=:Miles_per_Gallon, size=:Acceleration)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Scatterplot-with-NA-Values-in-Grey-1",
    "page": "Scatter & Strip Plots",
    "title": "Scatterplot with NA Values in Grey",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"movies\") |>\n@vlplot(\n    :point,\n    x=:IMDB_Rating,\n    y=:Rotten_Tomatoes_Rating,\n    color={\n        condition={\n            test=\"datum.IMDB_Rating === null || datum.Rotten_Tomatoes_Rating === null\",\n            value=\"#aaa\"\n        }\n    },\n    config={invalidValues=nothing}\n)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Scatterplot-with-Filled-Circles-1",
    "page": "Scatter & Strip Plots",
    "title": "Scatterplot with Filled Circles",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:circle, x=:Horsepower, y=:Miles_per_Gallon)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Bubble-Plot-(Gapminder)-1",
    "page": "Scatter & Strip Plots",
    "title": "Bubble Plot (Gapminder)",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"gapminder-health-income\") |>\n@vlplot(\n    :circle,\n    width=500,height=300,\n    selection={\n        view={typ=:interval, bind=:scales}\n    },\n    y={:health, scale={zero=false}},\n    x={:income, scale={typ=:log}},\n    size=:population,\n    color={value=\"#000\"}\n)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Bubble-Plot-(Natural-Disasters)-1",
    "page": "Scatter & Strip Plots",
    "title": "Bubble Plot (Natural Disasters)",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"disasters\") |>\n@vlplot(\n    width=600,height=400,\n    transform=[\n        {filter=\"datum.Entity !== \'All natural disasters\'\"}\n    ],\n    mark={\n        :circle,\n        opacity=0.8,\n        stroke=:black,\n        strokeWidth=1\n    },\n    enc={\n        x={\"Year:o\", axis={labelAngle=0}},\n        y={:Entity, axis={title=\"\"}},\n        size={\n            :Deaths,\n            legend={title=\"Annual Global Deaths\"},\n            scale={range=[0,5000]}\n        },\n        color={:Entity, legend=nothing}\n    }\n)"
},

{
    "location": "examples/examples_scatter_strip_plots/#Scatter-Plot-with-Text-Marks-1",
    "page": "Scatter & Strip Plots",
    "title": "Scatter Plot with Text Marks",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(\n    :text,\n    transform=[\n        {\n            calculate=\"datum.Origin[0]\",\n            as=\"OriginInitial\"\n        }\n    ],\n    x=:Horsepower,\n    y=:Miles_per_Gallon,\n    color=:Origin,\n    text=\"OriginInitial:n\"\n)"
},

{
    "location": "examples/examples_line_charts/#",
    "page": "Line Charts",
    "title": "Line Charts",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_line_charts/#Line-Charts-1",
    "page": "Line Charts",
    "title": "Line Charts",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_line_charts/#Line-Chart-1",
    "page": "Line Charts",
    "title": "Line Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    :line,\n    transform=[\n        {filter=\"datum.symbol==\'GOOG\'\"}\n    ],\n    x={\"date:t\", axis={format=\"%Y\"}},\n    y=:price\n)"
},

{
    "location": "examples/examples_line_charts/#Line-Chart-with-Overlaying-Point-Markers-1",
    "page": "Line Charts",
    "title": "Line Chart with Overlaying Point Markers",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    transform=[{filter=\"datum.symbol===\'GOOG\'\"}],\n    mark={\n        :line,\n        color=:green,\n        point={\n            color=:red\n        }\n    },\n    x=\"date:t\",\n    y=:price\n)"
},

{
    "location": "examples/examples_line_charts/#Multi-Series-Line-Chart-1",
    "page": "Line Charts",
    "title": "Multi Series Line Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    :line,\n    x={\"date:t\", axis={format=\"%Y\"}},\n    y=:price,\n    color=:symbol\n)"
},

{
    "location": "examples/examples_line_charts/#Slope-Graph-1",
    "page": "Line Charts",
    "title": "Slope Graph",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"barley\") |>\n@vlplot(\n    :line,\n    x={\n        \"year:o\",\n        scale={\n            rangeStep=50,\n            padding=0.5\n        }\n    },\n    y=\"median(yield)\",\n    color=:site\n)"
},

{
    "location": "examples/examples_line_charts/#Step-Chart-1",
    "page": "Line Charts",
    "title": "Step Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    transform=[{filter=\"datum.symbol===\'GOOG\'\"}],\n    mark={\n        :line,\n        interpolate=\"step-after\"\n    },\n    x=\"date:t\",\n    y=:price\n)"
},

{
    "location": "examples/examples_line_charts/#Line-Chart-with-Monotone-Interpolation-1",
    "page": "Line Charts",
    "title": "Line Chart with Monotone Interpolation",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    transform=[{filter=\"datum.symbol===\'GOOG\'\"}],\n    mark={\n        :line,\n        interpolate=\"monotone\"\n    },\n    x=\"date:t\",\n    y=:price\n)"
},

{
    "location": "examples/examples_line_charts/#Connected-Scatterplot-(Lines-with-Custom-Paths)-1",
    "page": "Line Charts",
    "title": "Connected Scatterplot (Lines with Custom Paths)",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"driving\") |>\n@vlplot(\n    mark={\n        :line,\n        point=true\n    },\n    x={\n        :miles,\n        scale={zero=false}\n    },\n    y={\n        :gas,\n        scale={zero=false}\n    },\n    order=\"year:t\"\n)"
},

{
    "location": "examples/examples_line_charts/#Line-Chart-with-Varying-Size-(using-the-trail-mark)-1",
    "page": "Line Charts",
    "title": "Line Chart with Varying Size (using the trail mark)",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    :trail,\n    x={\n        \"date:t\",\n        axis={format=\"%Y\"}\n    },\n    y=:price,\n    size=:price,\n    color=:symbol\n)"
},

{
    "location": "examples/examples_line_charts/#Line-Chart-with-Markers-and-Invalid-Values-1",
    "page": "Line Charts",
    "title": "Line Chart with Markers and Invalid Values",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\ndata = DataFrame(\n    x=[1,2,3,4,5,6,7],\n    y=[10,30,missing,15,missing,40,20]\n)\n\ndata |>\n@vlplot(\n    mark={\n        :line,\n        point=true\n    },\n    x=:x,\n    y=:y\n)"
},

{
    "location": "examples/examples_line_charts/#Carbon-Dioxide-in-the-Atmosphere-1",
    "page": "Line Charts",
    "title": "Carbon Dioxide in the Atmosphere",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\n@vlplot(\n    data={\n        url=dataset(\"co2-concentration\").path,\n        format={\n            parse={Date=\"utc:\'%Y-%m-%d\'\"}\n        }\n    },\n    width=800,\n    height=500,\n    transform=[\n        {\n            calculate=\"year(datum.Date)\",\n            as=:year\n        },\n        {\n            calculate=\"month(datum.Date)\",\n            as=:month\n        },\n        {\n            calculate=\"floor(datum.year / 10) + \'x\'\",\n            as=:decade\n        },\n        {\n            calculate=\"(datum.year % 10) + (datum.month/12)\",\n            as=:scaled_date\n        }\n    ]\n) +\n@vlplot(\n    :line,\n    x={\n        \"scaled_date:q\",\n        axis={\n            title=\"Year into Decade\",\n            tickCount=11\n        }\n    },\n    y={\n        \"CO2:q\",\n        axis={title=\"CO2 concentration in ppm\"},\n        scale={zero=false}\n    },\n    detail=\"decade:o\",\n    color={\"decade:n\", legend={offset=40}}\n) +\n(\n    @vlplot(\n        transform=[\n            {\n                aggregate=[{\n                    op=\"argmin\",\n                    field=\"scaled_date\",\n                    as=\"start\"\n                }, {\n                    op=\"argmax\",\n                    field=\"scaled_date\",\n                    as=\"end\"\n                }],\n                groupby=[\"decade\"]\n            },\n            {\n                calculate=\"datum.start.scaled_date\",\n                as=\"scaled_date_start\"\n            },\n            {\n                calculate=\"datum.start.CO2\",\n                as=\"CO2_start\"\n            },\n            {\n                calculate=\"datum.start.year\",\n                as=\"year_start\"\n            },\n            {\n                calculate=\"datum.end.scaled_date\",\n                as=\"scaled_date_end\"\n            },\n            {\n                calculate=\"datum.end.CO2\",\n                as=\"CO2_end\"\n            },\n            {\n                calculate=\"datum.end.year\",\n                as=\"year_end\"\n            }\n        ]\n    ) +\n    @vlplot(\n        mark={\n            :text,\n            aligh=:left,\n            baseline=:top,\n            dx=3,\n            dy=1\n        },\n        x=\"scaled_date_start:q\",\n        y=\"CO2_start:q\",\n        text=\"year_start:n\"\n    ) +\n    @vlplot(\n        mark={\n            :text,\n            align=:left,\n            baseline=:bottom,\n            dx=3,\n            dy=1\n        },\n        x=\"scaled_date_end:q\",\n        y=\"CO2_end:q\",\n        text=\"year_end:n\"\n    )\n)"
},

{
    "location": "examples/examples_line_charts/#Line-Charts-Showing-Ranks-Over-Time-1",
    "page": "Line Charts",
    "title": "Line Charts Showing Ranks Over Time",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\ndata = DataFrame(\n    team=[\"Man Utd\", \"Chelsea\", \"Man City\", \"Spurs\", \"Man Utd\", \"Chelsea\",\n        \"Man City\", \"Spurs\", \"Man Utd\", \"Chelsea\", \"Man City\", \"Spurs\"],\n    matchday=[1,1,1,1,2,2,2,2,3,3,3,3],\n    point=[3,1,1,0,6,1,0,3,9,1,0,6]\n)\n\ndata |>\n@vlplot(\n    transform=[{\n        sort=[{field=\"point\", order=\"descending\"}],\n        window=[{\n            op=\"rank\",\n            as=\"rank\"\n        }],\n        groupby=[\"matchday\"]\n    }],\n    mark={\n        :line,\n        orient=\"vertical\"\n    },\n    x=\"matchday:o\",\n    y=\"rank:o\",\n    color={\n        :team,\n        scale={\n            domain=[\"Man Utd\", \"Chelsea\", \"Man City\", \"Spurs\"],\n            range=[\"#cc2613\", \"#125dc7\", \"#8bcdfc\", \"#d1d1d1\"]\n        }\n    }\n)"
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#",
    "page": "Area Charts & Streamgraphs",
    "title": "Area Charts & Streamgraphs",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#Area-Charts-and-Streamgraphs-1",
    "page": "Area Charts & Streamgraphs",
    "title": "Area Charts & Streamgraphs",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#Area-Chart-1",
    "page": "Area Charts & Streamgraphs",
    "title": "Area Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"unemployment-across-industries\") |>\n@vlplot(\n    :area,\n    width=300, height=200,\n    x={\n        \"yearmonth(date):t\",\n        axis={format=\"%Y\"}\n    },\n    y={\n        \"sum(count)\",\n        axis={title=\"count\"}\n    }    \n)"
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#Area-Chart-with-Overlaying-Lines-and-Point-Markers-1",
    "page": "Area Charts & Streamgraphs",
    "title": "Area Chart with Overlaying Lines and Point Markers",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    transform=[{filter=\"datum.symbol===\'GOOG\'\"}],\n    mark={\n        :area,\n        line=true,\n        point=true\n    },\n    x=\"date:t\",\n    y=:price\n)"
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#Stacked-Area-Chart-1",
    "page": "Area Charts & Streamgraphs",
    "title": "Stacked Area Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"unemployment-across-industries\") |>\n@vlplot(\n    :area,\n    width=300, hieght=200,\n    x={\n        \"yearmonth(date):t\",\n        axis={format=\"%Y\"}\n    },\n    y=\"sum(count)\",\n    color={\n        :series,\n        scale={scheme=\"category20b\"}\n    }\n)"
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#Normalized-Stacked-Area-Chart-1",
    "page": "Area Charts & Streamgraphs",
    "title": "Normalized Stacked Area Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"unemployment-across-industries\") |>\n@vlplot(\n    :area,\n    width=300, height=200,\n    x={\n        \"yearmonth(date)\",\n        axis={\n            domain=false,\n            format=\"%Y\"\n        }\n    },\n    y={\n        \"sum(count)\",\n        axis=nothing,\n        stack=:normalize\n    },\n    color={\n        :series,\n        scale={scheme=\"category20b\"}\n    }\n)"
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#Streamgraph-1",
    "page": "Area Charts & Streamgraphs",
    "title": "Streamgraph",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"unemployment-across-industries\") |>\n@vlplot(\n    :area,\n    width=300, height=200,\n    x={\n        \"yearmonth(date)\",\n        axis={\n            domain=false,\n            format=\"%Y\",\n            tickSize=0\n        }\n    },\n    y={\n        \"sum(count)\",\n        axis=nothing,\n        stack=:center\n    },\n    color={\n        :series,\n        scale={scheme=\"category20b\"}\n    }\n)"
},

{
    "location": "examples/examples_area_Charts_streamgraphs/#Horizon-Graph-1",
    "page": "Area Charts & Streamgraphs",
    "title": "Horizon Graph",
    "category": "section",
    "text": "using VegaLite, DataFrames\n\ndata = DataFrame(\n    x=1:20,\n    y=[28,55,43,91,81,53,19,87,52,48,24,49,87,66,17,27,68,16,49,15]\n)\n\ndata |>\n@vlplot(width=300, height=50, config={area={interpolate=:monotone}}) +\n@vlplot(\n    mark={\n        :area,\n        clip=true,\n        orient=:vertical\n    },\n    x={:x, scale={zero=false, nice=false}},\n    y={:y, scale={domain=[0,50]}},\n    opacity={value=0.6}\n) +\n@vlplot(\n    transform=[{calculate=\"datum.y-50\", as=:ny}],\n    mark={\n        :area,\n        clip=true,\n        orient=:vertical\n    },\n    x=:x,\n    y={\n        \"ny:q\",\n        scale={domain=[0,50]},\n        axis={title=\"y\"}\n    },\n    opacity={value=0.3}\n)"
},

{
    "location": "examples/examples_table_based_plots/#",
    "page": "Table-based Plots",
    "title": "Table-based Plots",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_table_based_plots/#Table-based-Plots-1",
    "page": "Table-based Plots",
    "title": "Table-based Plots",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_table_based_plots/#Table-Heatmap-1",
    "page": "Table-based Plots",
    "title": "Table Heatmap",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(:rect, y=:Origin, x=\"Cylinders:o\", color=\"mean(Horsepower)\")"
},

{
    "location": "examples/examples_table_based_plots/#Table-Binned-heatmap-1",
    "page": "Table-based Plots",
    "title": "Table Binned heatmap",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"movies\") |>\n@vlplot(\n    :rect,\n    width=300, height=200,\n    x={:IMDB_Rating, bin={maxbins=60}},\n    y={:Rotten_Tomatoes_Rating, bin={maxbins=40}},\n    color=\"count()\",\n    config={\n        range={\n            heatmap={\n                scheme=\"greenblue\"\n            }\n        },\n        view={\n            stroke=\"transparent\"\n        }\n    }\n)"
},

{
    "location": "examples/examples_table_based_plots/#Table-Bubble-Plot-(Github-Punch-Card)-1",
    "page": "Table-based Plots",
    "title": "Table Bubble Plot (Github Punch Card)",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"github\") |>\n@vlplot(\n    :circle,\n    y=\"day(time):o\",\n    x=\"hours(time):o\",\n    size=\"sum(count)\"\n)"
},

{
    "location": "examples/examples_table_based_plots/#Layering-text-over-heatmap-1",
    "page": "Table-based Plots",
    "title": "Layering text over heatmap",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ncars = dataset(\"cars\")\n\n@vlplot(\n    data=cars,\n    y=\"Origin:o\",\n    x=\"Cylinders:o\",\n    config={\n        scale={bandPaddingInner=0, bandPaddingOuter=0},\n        text={baseline=:middle}\n    }\n) +\n@vlplot(:rect, color=\"count()\") +\n@vlplot(\n    :text,\n    text=\"count()\",\n    color={\n        condition={\n            test=\"datum[\'count_*\'] > 100\",\n            value=:black\n        },\n        value=:white\n    }\n)"
},

{
    "location": "examples/examples_error_bars_bands/#",
    "page": "Error Bars & Error Bands",
    "title": "Error Bars & Error Bands",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_error_bars_bands/#Error-Bars-and-Error-Bands-1",
    "page": "Error Bars & Error Bands",
    "title": "Error Bars & Error Bands",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_error_bars_bands/#Error-Bars-showing-Confidence-Interval-1",
    "page": "Error Bars & Error Bands",
    "title": "Error Bars showing Confidence Interval",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"barley\") |>\n@vlplot() +\n@vlplot(\n    mark={\n        :point,\n        filled=true\n    },\n    x={\n        \"mean(yield)\",\n        scale={zero=false},\n        axis={title=\"Barley Yield\"}\n    },\n    y={\n        \"variety:o\",\n        color={value=:black}\n    }\n) +\n@vlplot(:rule, x=\"ci0(yield)\", x2=\"ci1(yield)\", y=\"variety:o\")"
},

{
    "location": "examples/examples_error_bars_bands/#Error-Bars-showing-Standard-Deviation-1",
    "page": "Error Bars & Error Bands",
    "title": "Error Bars showing Standard Deviation",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"barley\") |>\n@vlplot(\n    transform=[\n        {\n            aggregate=[\n                {op=:mean, field=:yield, as=:mean},\n                {op=:stdev, field=:yield, as=:stdev}\n            ],\n            groupby=[:variety]\n        },\n        {calculate=\"datum.mean-datum.stdev\", as=:lower},\n        {calculate=\"datum.mean+datum.stdev\", as=:upper}\n    ]\n) +\n@vlplot(\n    mark={\n        :point,\n        filled=true\n    },\n    x={\n        \"mean:q\",\n        scale={zero=false},\n        axis={title=\"Barley Yield\"}\n    },\n    y=\"variety:o\",\n    color={value=:black}\n) +\n@vlplot(:rule, x=\"upper:q\", x2=\"lower:q\", y=\"variety:o\")"
},

{
    "location": "examples/examples_error_bars_bands/#Line-Chart-with-Confidence-Interval-Band-1",
    "page": "Error Bars & Error Bands",
    "title": "Line Chart with Confidence Interval Band",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot() +\n@vlplot(\n    :area,\n    x=\"year(Year):t\",\n    y={\n        \"ci0(Miles_per_Gallon)\",\n        axis={title=\"Mean of Miles per Gallon (95% CIs)\"}\n    },\n    y2=\"ci1(Miles_per_Gallon)\",\n    opacity={value=0.3}\n) +\n@vlplot(\n    :line,\n    x=\"year(Year)\",\n    y=\"mean(Miles_per_Gallon)\"\n)"
},

{
    "location": "examples/examples_error_bars_bands/#Scatterplot-with-Mean-and-Standard-Deviation-Overlay-1",
    "page": "Error Bars & Error Bands",
    "title": "Scatterplot with Mean and Standard Deviation Overlay",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot() +\n@vlplot(\n    :point,\n    x=:Horsepower,\n    y=:Miles_per_Gallon\n) +\n(\n    @vlplot(\n        transform=[\n            {aggregate=[\n                {op=:mean, field=:Miles_per_Gallon, as=:mean_MPG},\n                {op=:stdev, field=:Miles_per_Gallon, as=:dev_MPG}\n                ],\n                groupby=[]\n            },\n            {calculate=\"datum.mean_MPG - datum.dev_MPG\", as=:lower},\n            {calculate=\"datum.mean_MPG + datum.dev_MPG\", as=:upper}\n        ]) +\n    @vlplot(:rule,y={\"mean_MPG:q\",axis=nothing}) +\n    @vlplot(\n        :rect,\n        y={\"lower:q\",axis=nothing},\n        y2=\"upper:q\",\n        opacity={value=0.2}\n    )\n)"
},

{
    "location": "examples/examples_box_plots/#",
    "page": "Box Plots",
    "title": "Box Plots",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_box_plots/#Box-Plots-1",
    "page": "Box Plots",
    "title": "Box Plots",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_box_plots/#Box-Plot-with-Min/Max-Whiskers-1",
    "page": "Box Plots",
    "title": "Box Plot with Min/Max Whiskers",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"population\") |>\n@vlplot(\n    transform=[{\n        aggregate=[\n            {op=:q1, field=:people, as=:lowerBox},\n            {op=:q3, field=:people, as=:upperBox},\n            {op=:median, field=:people, as=:midBox},\n            {op=:min, field=:people, as=:lowerWhisker},\n            {op=:max, field=:people, as=:upperWhisker}\n        ],\n        groupby=[:age]\n    }]\n) +\n@vlplot(\n    mark={:rule, style=:boxWhisker},\n    y={\"lowerWhisker:q\", axis={title=\"population\"}},\n    y2=\"lowerBox:q\",\n    x=\"age:o\"\n) +\n@vlplot(\n    mark={:rule, style=:boxWhisker},\n    y=\"upperBox:q\",\n    y2=\"upperWhisker:q\",\n    x=\"age:o\"\n) +\n@vlplot(\n    mark={:bar, style=:box},\n    y=\"lowerBox:q\",\n    y2=\"upperBox:q\",\n    x=\"age:o\",\n    size={value=5}\n) +\n@vlplot(\n    mark={:tick, style=:boxMid},\n    y=\"midBox:q\",\n    x=\"age:o\",\n    color={value=:white},\n    size={value=5}\n)"
},

{
    "location": "examples/examples_box_plots/#Tukey-Box-Plot-(1.5-IQR)-1",
    "page": "Box Plots",
    "title": "Tukey Box Plot (1.5 IQR)",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"population\") |>\n@vlplot(\n    transform=[\n        {\n            aggregate=[\n                {op=:q1, field=:people, as=:lowerBox},\n                {op=:q3, field=:people, as=:upperBox},\n                {op=:median, field=:people, as=:midBox}\n            ],\n            groupby=[:age]\n        },\n        {\n            calculate=\"datum.upperBox - datum.lowerBox\",\n            as=:IQR\n        },\n        {\n            calculate=\"datum.lowerBox - datum.IQR * 1.5\",\n            as=:lowerWhisker\n        },\n        {\n            calculate=\"datum.upperBox + datum.IQR * 1.5\",\n            as=:upperWhisker\n        }\n    ]\n) +\n@vlplot(\n    mark={:rule, style=:boxWhisker},\n    y={\"lowerWhisker:q\", axis={title=\"population\"}},\n    y2=\"lowerBox:q\",\n    x=\"age:o\"\n) +\n@vlplot(\n    mark={:rule, style=:boxWhisker},\n    y=\"upperBox:q\",\n    y2=\"upperWhisker:q\",\n    x=\"age:o\"\n) +\n@vlplot(\n    mark={:bar, style=:box},\n    y=\"lowerBox:q\",\n    y2=\"upperBox:q\",\n    x=\"age:o\",\n    size={value=5}\n) +\n@vlplot(\n    mark={:tick, style=:boxMid},\n    y=\"midBox:q\",\n    x=\"age:o\",\n    color={value=:white},\n    size={value=5}\n)"
},

{
    "location": "examples/examples_faceting/#",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Faceting (Trellis Plot / Small Multiples)",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_faceting/#Faceting-(Trellis-Plot-/-Small-Multiples)-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Faceting (Trellis Plot / Small Multiples)",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_faceting/#Trellis-Bar-Chart-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Trellis Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"population\") |>\n@vlplot(\n    :bar,\n    transform=[\n        {filter=\"datum.year==2000\"},\n        {calculate=\"datum.sex==2 ? \'Female\' : \'Male\'\",as=:gender}\n    ],\n    row=\"gender:n\",\n    y={\"sum(people)\", axis={title=\"population\"}},\n    x={\"age:o\", scale={rangeStep=17}},\n    color={\"gender:n\", scale={range=[\"#EA98D2\", \"#659CCA\"]}}\n)"
},

{
    "location": "examples/examples_faceting/#Trellis-Stacked-Bar-Chart-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Trellis Stacked Bar Chart",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"barley\") |>\n@vlplot(:bar, column=\"year:o\", x=\"sum(yield)\", y=:variety, color=:site)"
},

{
    "location": "examples/examples_faceting/#Trellis-Scatter-Plot-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Trellis Scatter Plot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"movies\") |>\n@vlplot(:point, column=\"MPAA_Rating:o\", x=:Worldwide_Gross, y=:US_DVD_Sales)"
},

{
    "location": "examples/examples_faceting/#Trellis-Histograms-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Trellis Histograms",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(\n    :bar,\n    x={\n        :Horsepower,\n        bin={maxbins=15}\n    },\n    y=\"count()\",\n    row=:Origin\n)"
},

{
    "location": "examples/examples_faceting/#Trellis-Scatter-Plot-showing-Anscombe\'s-Quartet-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Trellis Scatter Plot showing Anscombe\'s Quartet",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"anscombe\") |>\n@vlplot(\n    :circle,\n    column=:Series,\n    x={:X, scale={zero=false}},\n    y={:Y, scale={zero=false}},\n    opacity={value=1}\n)"
},

{
    "location": "examples/examples_faceting/#Becker\'s-Barley-Trellis-Plot-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Becker\'s Barley Trellis Plot",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"barley\") |>\n@vlplot(\n    :point,\n    row=\"site:o\",\n    x={\"median(yield)\", scale={zero=false}},\n    y={\n        \"variety:o\",\n        sort={\n            \"yield\",\n            op=:median,\n            order=:descending\n        },\n        scale={rangeStep=12}},\n    color=:year\n)"
},

{
    "location": "examples/examples_faceting/#Trellis-Area-1",
    "page": "Faceting (Trellis Plot / Small Multiples)",
    "title": "Trellis Area",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"stocks\") |>\n@vlplot(\n    :area,\n    width=300,height=40,\n    transform=[{filter=\"datum.symbol !== \'GOOG\'\"}],\n    x={\n        \"date:t\",\n        axis={format=\"%Y\",title=\"Time\",grid=false}\n    },\n    y={\n        :price,\n        axis={title=\"Price\",grid=false}\n    },\n    color={\n        :symbol,\n        legend=nothing\n    },\n    row={\n        :symbol,\n        header={title=\"Symbol\"}\n    }\n)"
},

{
    "location": "examples/examples_repeat_concatenation/#",
    "page": "Repeat & Concatenation",
    "title": "Repeat & Concatenation",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_repeat_concatenation/#Repeat-and-Concatenation-1",
    "page": "Repeat & Concatenation",
    "title": "Repeat & Concatenation",
    "category": "section",
    "text": ""
},

{
    "location": "examples/examples_repeat_concatenation/#Repeat-and-layer-to-show-different-weather-measures-1",
    "page": "Repeat & Concatenation",
    "title": "Repeat and layer to show different weather measures",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"weather.csv\") |>\n@vlplot(repeat={column=[:temp_max,:precipitation,:wind]}) +\n(\n    @vlplot() +\n    @vlplot(\n        :line,\n        y={field={repeat=:column},aggregate=:mean,typ=:quantitative},\n        x=\"month(date):o\",\n        detail=\"year(date):t\",\n        color=:location,\n        opacity={value=0.2}\n    ) +\n    @vlplot(\n        :line,\n        y={field={repeat=:column},aggregate=:mean,typ=:quantitative},\n        x=\"month(date):o\",\n        color=:location\n    )\n)"
},

{
    "location": "examples/examples_repeat_concatenation/#Vertically-concatenated-charts-that-show-precipitation-in-Seattle-1",
    "page": "Repeat & Concatenation",
    "title": "Vertically concatenated charts that show precipitation in Seattle",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"weather.csv\") |>\n@vlplot(transform=[{filter=\"datum.location === \'Seattle\'\"}]) +\n[\n    @vlplot(:bar,x=\"month(date):o\",y=\"mean(precipitation)\");\n    @vlplot(:point,x={:temp_min, bin=true}, y={:temp_max, bin=true}, size=\"count()\")\n]"
},

{
    "location": "examples/examples_repeat_concatenation/#Horizontally-repeated-charts-1",
    "page": "Repeat & Concatenation",
    "title": "Horizontally repeated charts",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |>\n@vlplot(repeat={column=[:Horsepower, :Miles_per_Gallon, :Acceleration]}) +\n@vlplot(\n    :bar,\n    x={field={repeat=:column},bin=true,typ=:quantitative},\n    y=\"count()\",\n    color=:Origin\n)"
},

{
    "location": "examples/examples_repeat_concatenation/#Interactive-Scatterplot-Matrix-1",
    "page": "Repeat & Concatenation",
    "title": "Interactive Scatterplot Matrix",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"cars\") |> \n@vlplot(\n    repeat={\n        row=[:Horsepower, :Acceleration, :Miles_per_Gallon],\n        column=[:Miles_per_Gallon, :Acceleration, :Horsepower]\n    }\n) +\n@vlplot(\n    :point,\n    selection={\n        brush={\n            typ=:interval,\n            resolve=:union,\n            on=\"[mousedown[event.shiftKey], window:mouseup] > window:mousemove!\",\n            translate=\"[mousedown[event.shiftKey], window:mouseup] > window:mousemove!\",\n            zoom=\"wheel![event.shiftKey]\"\n        },\n        grid={\n            typ=:interval,\n            resolve=:global,\n            bind=:scales,\n            translate=\"[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!\",\n            zoom=\"wheel![!event.shiftKey]\"\n        }\n    },\n    x={field={repeat=:column}, typ=:quantitative},\n    y={field={repeat=:row}, typ=:quantitative},\n    color={\n        condition={\n            selection=:brush,\n            field=:Origin,\n            typ=:nominal\n        },\n        value=:grey\n    }\n)"
},

{
    "location": "examples/examples_maps/#",
    "page": "Maps (Geographic Displays)",
    "title": "Maps (Geographic Displays)",
    "category": "page",
    "text": ""
},

{
    "location": "examples/examples_maps/#Choropleth-of-unemployment-rate-per-county-1",
    "page": "Maps (Geographic Displays)",
    "title": "Choropleth of unemployment rate per county",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\nus10m = dataset(\"us-10m\").path\nunemployment = dataset(\"unemployment.tsv\").path\n\n@vlplot(\n    :geoshape,\n    width=500, height=300,\n    data={\n        url=us10m,\n        format={\n            typ=:topojson,\n            feature=:counties\n        }\n    },\n    transform=[{\n        lookup=:id,\n        from={\n            data=unemployment,\n            key=:id,\n            fields=[\"rate\"]\n        }\n    }],\n    projection={\n        typ=:albersUsa\n    },\n    color=\"rate:q\"\n)"
},

{
    "location": "examples/examples_maps/#One-dot-per-zipcode-in-the-U.S.-1",
    "page": "Maps (Geographic Displays)",
    "title": "One dot per zipcode in the U.S.",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\ndataset(\"zipcodes\").path |>\n@vlplot(\n    :circle,\n    width=500, height=300,\n    transform=[{calculate=\"substring(datum.zip_code, 0, 1)\", as=:digit}],\n    projection={typ=:albersUsa},\n    longitude=\"longitude:q\",\n    latitude=\"latitude:q\",\n    size={value=1},\n    color=\"digit:n\"\n)\n\nVegaLite.MimeWrapper{MIME\"image/png\"}(dataset(\"zipcodes\").path |> @vlplot(:circle,width=500,height=300,transform=[{calculate=\"substring(datum.zip_code, 0, 1)\", as=:digit}],projection={typ=:albersUsa},longitude=\"longitude:q\",latitude=\"latitude:q\",size={value=1},color=\"digit:n\")) # hide"
},

{
    "location": "examples/examples_maps/#One-dot-per-airport-in-the-US-overlayed-on-geoshape-1",
    "page": "Maps (Geographic Displays)",
    "title": "One dot per airport in the US overlayed on geoshape",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\nus10m = dataset(\"us-10m\").path\nairports = dataset(\"airports\")\n\n@vlplot(width=500, height=300) +\n@vlplot(\n    mark={\n        :geoshape,\n        fill=:lightgray,\n        stroke=:white\n    },\n    data={\n        url=us10m,\n        format={typ=:topojson, feature=:states}\n    },\n    projection={typ=:albersUsa},\n) +\n@vlplot(\n    :circle,\n    data=airports,\n    projection={typ=:albersUsa},\n    longitude=\"longitude:q\",\n    latitude=\"latitude:q\",\n    size={value=10},\n    color={value=:steelblue}\n)"
},

{
    "location": "examples/examples_maps/#Rules-(line-segments)-connecting-SEA-to-every-airport-reachable-via-direct-flight-1",
    "page": "Maps (Geographic Displays)",
    "title": "Rules (line segments) connecting SEA to every airport reachable via direct flight",
    "category": "section",
    "text": "TODO"
},

{
    "location": "examples/examples_maps/#Three-choropleths-representing-disjoint-data-from-the-same-table-1",
    "page": "Maps (Geographic Displays)",
    "title": "Three choropleths representing disjoint data from the same table",
    "category": "section",
    "text": "TODO"
},

{
    "location": "examples/examples_maps/#U.S.-state-capitals-overlayed-on-a-map-of-the-U.S-1",
    "page": "Maps (Geographic Displays)",
    "title": "U.S. state capitals overlayed on a map of the U.S",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\nus10m = dataset(\"us-10m\").path\nusstatecapitals = dataset(\"us-state-capitals\").path\n\np = @vlplot(width=800, height=500, projection={typ=:albersUsa}) +\n@vlplot(\n    data={\n        url=us10m,\n        format={\n            typ=:topojson,\n            feature=:states\n        }\n    },\n    mark={\n        :geoshape,\n        fill=:lightgray,\n        stroke=:white\n    }\n) +\n(\n    @vlplot(\n        data={url=usstatecapitals},\n        enc={\n            longitude=\"lon:q\",\n            latitude=\"lat:q\"\n        }\n    ) +\n    @vlplot(mark={:circle, color=:orange}) +\n    @vlplot(mark={:text, dy=-6}, text=\"city:n\")\n)"
},

{
    "location": "examples/examples_maps/#Line-drawn-between-airports-in-the-U.S.-simulating-a-flight-itinerary-1",
    "page": "Maps (Geographic Displays)",
    "title": "Line drawn between airports in the U.S. simulating a flight itinerary",
    "category": "section",
    "text": "TODO"
},

{
    "location": "examples/examples_maps/#Income-in-the-U.S.-by-state,-faceted-over-income-brackets-1",
    "page": "Maps (Geographic Displays)",
    "title": "Income in the U.S. by state, faceted over income brackets",
    "category": "section",
    "text": "TODO"
},

{
    "location": "examples/examples_maps/#London-Tube-Lines-1",
    "page": "Maps (Geographic Displays)",
    "title": "London Tube Lines",
    "category": "section",
    "text": "using VegaLite, VegaDatasets\n\n@vlplot(\n    width=700, height=500,\n    config={\n        view={\n            stroke=:transparent\n        }\n    }\n) +\n@vlplot(\n    data={\n        url=dataset(\"londonBoroughs\").path,\n        format={\n            typ=:topojson,\n            feature=:boroughs\n        }\n    },\n    mark={\n        :geoshape,\n        stroke=:white,\n        strokeWidth=2\n    },\n    color={value=\"#eee\"}\n) +\n@vlplot(\n    data={\n        url=dataset(\"londonCentroids\").path,\n        format={\n            typ=:json\n        }\n    },\n    transform=[{\n        calculate=\"indexof (datum.name,\' \') > 0  ? substring(datum.name,0,indexof(datum.name, \' \')) : datum.name\",\n        as=:bLabel\n    }],\n    mark=:text,\n    longitude=\"cx:q\",\n    latitude=\"cy:q\",\n    text=\"bLabel:n\",\n    size={value=8},\n    opacity={value=0.6}\n) +\n@vlplot(\n    data={\n        url=dataset(\"londonTubeLines\").path,\n        format={\n            typ=:topojson,\n            feature=:line\n        }\n    },\n    mark={\n        :geoshape,\n        filled=false,\n        strokeWidth=2\n    },\n    color={\n        \"id:n\",\n        legend={\n            title=nothing,\n            orient=\"bottom-right\",\n            offset=0\n        },\n        scale={\n            domain=[\n                \"Bakerloo\",\n                \"Central\",\n                \"Circle\",\n                \"District\",\n                \"DLR\",\n                \"Hammersmith & City\",\n                \"Jubilee\",\n                \"Metropolitan\",\n                \"Northern\",\n                \"Piccadilly\",\n                \"Victoria\",\n                \"Waterloo & City\"\n            ],\n            range=[\n                \"rgb(137,78,36)\",\n                \"rgb(220,36,30)\",\n                \"rgb(255,206,0)\",\n                \"rgb(1,114,41)\",\n                \"rgb(0,175,173)\",\n                \"rgb(215,153,175)\",\n                \"rgb(106,114,120)\",\n                \"rgb(114,17,84)\",\n                \"rgb(0,0,0)\",\n                \"rgb(0,24,168)\",\n                \"rgb(0,160,226)\",\n                \"rgb(106,187,170)\"\n            ]\n        }\n    }\n)"
},

{
    "location": "referencemanual/global/#",
    "page": "Global settings",
    "title": "Global settings",
    "category": "page",
    "text": ""
},

{
    "location": "referencemanual/global/#VegaLite.renderer",
    "page": "Global settings",
    "title": "VegaLite.renderer",
    "category": "function",
    "text": "renderer()\n\nshow current rendering mode (svg or canvas)\n\nrenderer(::Symbol)\n\nset rendering mode (svg or canvas)\n\n\n\n\n\n"
},

{
    "location": "referencemanual/global/#VegaLite.actionlinks",
    "page": "Global settings",
    "title": "VegaLite.actionlinks",
    "category": "function",
    "text": "actionlinks()::Bool\n\nshow if plots will have (true) or not (false) the action links displayed\n\nactionlinks(::Bool)\n\nindicate if actions links should be dislpayed under the plot\n\n\n\n\n\n"
},

{
    "location": "referencemanual/global/#Global-settings-1",
    "page": "Global settings",
    "title": "Global settings",
    "category": "section",
    "text": "rendereractionlinks"
},

{
    "location": "referencemanual/output/#",
    "page": "Outputs",
    "title": "Outputs",
    "category": "page",
    "text": ""
},

{
    "location": "referencemanual/output/#Output-1",
    "page": "Outputs",
    "title": "Output",
    "category": "section",
    "text": ""
},

{
    "location": "referencemanual/output/#Saving-to-a-file-1",
    "page": "Outputs",
    "title": "Saving to a file",
    "category": "section",
    "text": "pdf\npng\nsvgIn addition you can also use the save (reexported from VegaLite.jl) function from the FileIO.jl package to save plots"
},

]}
