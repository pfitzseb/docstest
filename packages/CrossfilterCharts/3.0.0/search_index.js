var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CrossfilterCharts.jl-1",
    "page": "Readme",
    "title": "CrossfilterCharts.jl",
    "category": "section",
    "text": "A Julia package for automagical DC.js linked charts in your IJulia notebook - used to be DC.jl.Demonstration IJulia Notebook.(Image: Build Status) (Image: )(Image: Brushing and linking provided by DC.js)"
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Quickly take a data set and make exploratory data visualizations with just a few lines of code. In a Julia terminal run:Pkg.add(\"CrossfilterCharts\")"
},

{
    "location": "#Docs-1",
    "page": "Readme",
    "title": "Docs",
    "category": "section",
    "text": "Documentation is available both via the Documenter.jl badges at the top of this page or in a demonstration IJulia notebook."
},

{
    "location": "autodocs/#CrossfilterCharts.add_bubblechart!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.add_bubblechart!",
    "category": "function",
    "text": "add_bubblechart!\n\nConstruct and append a Bubble Chart to the DCOut object. Requires a previously created dimension. xcol, ycol, and r_col denote the DataFrame fields whose sums will determine the x position, y position, and radius of the bubbles in the final chart.\n\nUse :DCCount to access the count field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.add_chart!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.add_chart!",
    "category": "function",
    "text": "add_chart!\n\nAppend the DCChart to the list of charts in the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.add_datacountwidget!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.add_datacountwidget!",
    "category": "function",
    "text": "add_datacountwidget!\n\nConstruct and append a Data Count Widget to the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.add_datatablewidget!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.add_datatablewidget!",
    "category": "function",
    "text": "add_datatablewidget!\n\nConstruct and append a Data Table Widget to the DCOut object. Requires a previously constructed dimension for the first column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.add_dimension!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.add_dimension!",
    "category": "function",
    "text": "add_dimension!\n\nAppend the Dimension to the list of dimensions in the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.add_group!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.add_group!",
    "category": "function",
    "text": "add_group!\n\nAppend the Group to the list of groups in the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.add_widget!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.add_widget!",
    "category": "function",
    "text": "add_widget!\n\nAppend the DCWidget to the list of widgets in the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.barchart",
    "page": "Docstrings",
    "title": "CrossfilterCharts.barchart",
    "category": "function",
    "text": "barchart\n\nInfer construction of a DC barchart based on the given group.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.bubblechart",
    "page": "Docstrings",
    "title": "CrossfilterCharts.bubblechart",
    "category": "function",
    "text": "bubblechart\n\nConstruct an empty custom DC bubblechart.\n\n\n\n\n\nbubbleChart\n\nConstruct a bubblechart using the given master grouping and sums given by x_col, y_col, and r_col for x position, y position, and radius.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.clear_charts!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.clear_charts!",
    "category": "function",
    "text": "clear_charts!\n\nRemove all charts from the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.clear_widgets!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.clear_widgets!",
    "category": "function",
    "text": "clear_widgets\n\nRemove all widgets from the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.datacountwidget",
    "page": "Docstrings",
    "title": "CrossfilterCharts.datacountwidget",
    "category": "function",
    "text": "datacountwidget\n\nConstruct a DC DataCountWidget.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.datatablewidget",
    "page": "Docstrings",
    "title": "CrossfilterCharts.datatablewidget",
    "category": "function",
    "text": "datatablewidget\n\nConstruct a DC DataTableWidget.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.dc",
    "page": "Docstrings",
    "title": "CrossfilterCharts.dc",
    "category": "function",
    "text": "dc(df::DataFrame)\n\nConstruct a DC.js visualization based on the columns in the given DataFrame. This is the easiest and most straightforward way to use DC.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.get_charts",
    "page": "Docstrings",
    "title": "CrossfilterCharts.get_charts",
    "category": "function",
    "text": "get_charts\n\nReturns all charts constructed from the given column of the given type. chart_type can be: piechart, barchart, linechart, rowchart, bubblechart\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.get_dim_by_col",
    "page": "Docstrings",
    "title": "CrossfilterCharts.get_dim_by_col",
    "category": "function",
    "text": "get_group_by_name\n\nReturns the dimension inside the given DCCout instance created from the given column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.get_group_by_name",
    "page": "Docstrings",
    "title": "CrossfilterCharts.get_group_by_name",
    "category": "function",
    "text": "get_group_by_name\n\nReturns the group inside the given DCCout instance with the given name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.get_groups_by_col",
    "page": "Docstrings",
    "title": "CrossfilterCharts.get_groups_by_col",
    "category": "function",
    "text": "get_groups_by_col\n\nReturns the groups inside the given DCCout instance associated with the given column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.infer_chart",
    "page": "Docstrings",
    "title": "CrossfilterCharts.infer_chart",
    "category": "function",
    "text": "infer_chart(arr::AbstractVector, group::Group)\n\nConstructs a Chart suitable for the type in arr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.infer_dimension",
    "page": "Docstrings",
    "title": "CrossfilterCharts.infer_dimension",
    "category": "function",
    "text": "infer_dimension\n\nConstructs a Dimension suitable for the type in arr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.infer_dimensions!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.infer_dimensions!",
    "category": "function",
    "text": "infer_dimensions!\n\nInfer a dimension for each column in the DCOut DataFrame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.infer_group",
    "page": "Docstrings",
    "title": "CrossfilterCharts.infer_group",
    "category": "function",
    "text": "infer_group\n\nInfer construction of a group based on the array datatype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.infer_groups!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.infer_groups!",
    "category": "function",
    "text": "infer_groups!\n\nInfer a group for each dimension in the DCOut DataFrame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.isna",
    "page": "Docstrings",
    "title": "CrossfilterCharts.isna",
    "category": "function",
    "text": "can_infer_chart(arr::AbstractVector)\n\nWhether chart inference is supported for the given array type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.linechart",
    "page": "Docstrings",
    "title": "CrossfilterCharts.linechart",
    "category": "function",
    "text": "linechart\n\nInfer construction of a DC linechart based on the given group.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.piechart",
    "page": "Docstrings",
    "title": "CrossfilterCharts.piechart",
    "category": "function",
    "text": "piechart\n\nInfer construction of a DC piechart based on the given group.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.quick_add!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.quick_add!",
    "category": "function",
    "text": "quick_add!\n\nA utility function for quickly building a chart and adding it. Works with linechart, barchart, rowchart, piechart. Requires previously a constructed group.\n\n\n\n\n\nquick_add!\n\nQuickly build a chart using the group constructed from column. If multiple groups are found, an error is thrown unless use_first is set, in which case the first group found is used.\n\n\n\n\n\nquick_add!\n\nQuickly build a chart using the group with the given name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.randomize_ids!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.randomize_ids!",
    "category": "function",
    "text": "randomize_ids!\n\nRandomly re-initialize all dcout random ids. These are used when exporting to HTML to prevent charts from referencing one another across IJulia cells.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.reduce_count",
    "page": "Docstrings",
    "title": "CrossfilterCharts.reduce_count",
    "category": "function",
    "text": "reduce_count\n\nA reduction for a Group that is simply reduceCount()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.reduce_master",
    "page": "Docstrings",
    "title": "CrossfilterCharts.reduce_master",
    "category": "function",
    "text": "reduce_sum\n\nA master reduction which sums values from all provided columns and tallies a count.  Useful for making more complex charts like bubble charts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.reduce_sum",
    "page": "Docstrings",
    "title": "CrossfilterCharts.reduce_sum",
    "category": "function",
    "text": "reduce_sum\n\nA reduction for a Group that sums the values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.remove_chart!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.remove_chart!",
    "category": "function",
    "text": "remove_chart!\n\nRemoves the given DCChart from the list of charts in the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.remove_group!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.remove_group!",
    "category": "function",
    "text": "remove_group!\n\nRemoves the given Group from the list of groups in the DCOut object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.round_to_nearest_half_order_of_magnitude",
    "page": "Docstrings",
    "title": "CrossfilterCharts.round_to_nearest_half_order_of_magnitude",
    "category": "function",
    "text": "round_to_nearest_half_order_of_magnitude\n\nRounds a number to the nearest half order of magnitude, {...0.1,0.5,1,5,10,50,100,500...}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.rowchart",
    "page": "Docstrings",
    "title": "CrossfilterCharts.rowchart",
    "category": "function",
    "text": "rowchart\n\nInfer construction of a DC rowchart based on the given group.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CrossfilterCharts.set_elastic_height!",
    "page": "Docstrings",
    "title": "CrossfilterCharts.set_elastic_height!",
    "category": "function",
    "text": "set_elastic_height!\n\nChanges the elasticity of the output div height. A value of true indicates that the div will resize to fit all elements without needing a scrollbar.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CrossfilterCharts.AbstractBubbleChartCrossfilterCharts.AttributeCrossfilterCharts.BarChartCrossfilterCharts.BaseChartCrossfilterCharts.BubbleChartCrossfilterCharts.ChartTypeCrossfilterCharts.ColorChartCrossfilterCharts.CoordinateGridChartCrossfilterCharts.CrossfilterChartsCrossfilterCharts.DCChartCrossfilterCharts.DCOutCrossfilterCharts.DCWidgetCrossfilterCharts.DataCountWidgetCrossfilterCharts.DataTableWidgetCrossfilterCharts.DependencyCrossfilterCharts.DimensionCrossfilterCharts.GroupCrossfilterCharts.LineChartCrossfilterCharts.NULL_ATTRIBUTECrossfilterCharts.PieChartCrossfilterCharts.RowChartCrossfilterCharts.WidgetChartCrossfilterCharts._generate_accessorCrossfilterCharts.add_bubblechart!CrossfilterCharts.add_chart!CrossfilterCharts.add_datacountwidget!CrossfilterCharts.add_datatablewidget!CrossfilterCharts.add_dimension!CrossfilterCharts.add_group!CrossfilterCharts.add_widget!CrossfilterCharts.barchartCrossfilterCharts.bubblechartCrossfilterCharts.can_infer_chartCrossfilterCharts.clear_charts!CrossfilterCharts.clear_widgets!CrossfilterCharts.datacountwidgetCrossfilterCharts.datatablewidgetCrossfilterCharts.dcCrossfilterCharts.evalCrossfilterCharts.get_all_attributesCrossfilterCharts.get_chartsCrossfilterCharts.get_dim_by_colCrossfilterCharts.get_group_by_nameCrossfilterCharts.get_groups_by_colCrossfilterCharts.includeCrossfilterCharts.infer_chartCrossfilterCharts.infer_dimensionCrossfilterCharts.infer_dimensions!CrossfilterCharts.infer_groupCrossfilterCharts.infer_groups!CrossfilterCharts.isnaCrossfilterCharts.linechartCrossfilterCharts.piechartCrossfilterCharts.quick_add!CrossfilterCharts.quote_correctorCrossfilterCharts.randomize_ids!CrossfilterCharts.randomize_parentCrossfilterCharts.reduce_countCrossfilterCharts.reduce_masterCrossfilterCharts.reduce_sumCrossfilterCharts.remove_chart!CrossfilterCharts.remove_group!CrossfilterCharts.round_to_nearest_half_order_of_magnitudeCrossfilterCharts.rowchartCrossfilterCharts.scale_defaultCrossfilterCharts.set_elastic_height!CrossfilterCharts.size_default!CrossfilterCharts.write_dataCrossfilterCharts.write_html_bodyCrossfilterCharts.write_html_chart_entryCrossfilterCharts.write_html_headCrossfilterCharts.write_html_widget_entryCrossfilterCharts.write_json_entryCrossfilterCharts.write_reset_scriptCrossfilterCharts.write_scriptCrossfilterCharts.write_script_dependenciesCrossfilterCharts.write_source_html"
},

]}
