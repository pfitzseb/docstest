var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Plotly.jl-1",
    "page": "Readme",
    "title": "Plotly.jl",
    "category": "section",
    "text": "(Image: Build Status)A Julia interface to the plot.ly plotting library and cloud services"
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Simply run Pkg.add(\"Plotly\")."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Plotting functions provided by this package are identical to PlotlyJS. Please consult its documentation.For example, this will display a basic scatter plot:my_plot = plot([scatter(x=[1,2], y=[3,4])], Layout(title=\"My plot\"))"
},

{
    "location": "#Using-the-Plotly-cloud-1",
    "page": "Readme",
    "title": "Using the Plotly cloud",
    "category": "section",
    "text": ""
},

{
    "location": "#New-user-signup-1",
    "page": "Readme",
    "title": "New user signup",
    "category": "section",
    "text": "Find your username and API key in the Plotly settings."
},

{
    "location": "#Signin-1",
    "page": "Readme",
    "title": "Signin",
    "category": "section",
    "text": "julia> Plotly.signin(\"username\",\"your api key\")\nPlotlyAccount(\"username\",\"your api key\")Note: you may also specify your session endpoints using sign in as follows:julia> Plotly.signin(\"username\",\"your api key\",Dict(\"plotly_domain\"=> \"your_plotly_base_endpoint\", \"plotly_api_domain\"=> \"your_plotly_api_endpoint\"))"
},

{
    "location": "#Saving-your-credentials-1",
    "page": "Readme",
    "title": "Saving your credentials",
    "category": "section",
    "text": "julia> Plotly.set_credentials_file(Dict(\"username\"=>\"your_user_name\",\"api_key\"=>\"your_api_key\"))Note: your credentials will be saved within /YOURHOMEDIR/.plotly/.credentials"
},

{
    "location": "#Saving-your-endpoint-configuration-1",
    "page": "Readme",
    "title": "Saving your endpoint configuration",
    "category": "section",
    "text": "julia> Plotly.set_config_file(Dict(\"plotly_domain\"=> \"your_plotly_base_endpoint\", \"plotly_api_domain\"=> \"your_plotly_api_endpoint\"))Note: your configuration will be saved within /YOURHOMEDIR/.plotly/.config"
},

{
    "location": "#Saving-a-plot-to-the-cloud-1",
    "page": "Readme",
    "title": "Saving a plot to the cloud",
    "category": "section",
    "text": "Use the post function to upload a local plot to the Plotly cloud:> my_plot  = plot([scatter(y=[1,2])])\n> remote_plot = post(my_plot)\nPlotly.RemotePlot(URI(https://plot.ly/~malmaud/73))Visiting https://plot.ly/~malmaud/73 in a browser will show the plot."
},

{
    "location": "#Download-a-plot-from-the-cloud-1",
    "page": "Readme",
    "title": "Download a plot from the cloud",
    "category": "section",
    "text": "Use the download function with a remote plot object to download a plot stored on the Plotly cloud to a local Plot object:local_plot = download(RemotePlot(\"https://plot.ly/~malmaud/73\"))\n# or equivalently, local_plot = download_plot(\"https://plot.ly/~malmaud/73\")"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "PlotlyJS.jl , which provides the large majority of the functionality of this package, is developed primarily by Spencer Lyon.This package, which adds to PlotlyJS.jl the functionality for interacting with the Plotly cloud, is developed by Jon Malmaud and others."
},

{
    "location": "#Contribute-1",
    "page": "Readme",
    "title": "Contribute",
    "category": "section",
    "text": "Please do! This is an open source project. Check out the issues or open a PR!We want to encourage a warm, welcoming, and safe environment for contributing to this project. See the code of conduct for more information."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "MIT © 2016-2017 Shilei Zheng, Leah Hanson, Bryan A. Knowles, Chris Palmer, Jon Malmaud"
},

{
    "location": "autodocs/#Plotly.RemotePlot",
    "page": "Docstrings",
    "title": "Plotly.RemotePlot",
    "category": "type",
    "text": "Proxy for a plot stored on the Plotly cloud.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.extract_grid_data!",
    "page": "Docstrings",
    "title": "Plotly.extract_grid_data!",
    "category": "function",
    "text": "srcify!(p::Plot; fileopt::Symbol=:overwrite, grid_fn=nothing, kwargs...)\n\nLook through each trace and the Layout for attributes that have a value of type Union{AbstractArray,Tuple} and are able to be set via (attributename)(src) in the plotly.js api. For each of these, do the following:\n\nExtract the value so it can become a column in a Grid\nRemove that key/value pair from the trace/Layout\n\nThis happens in place, so the srcified fields will be removed within the input to this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.fid",
    "page": "Docstrings",
    "title": "Plotly.fid",
    "category": "function",
    "text": "fid(rp::RemotePlot)\n\nReturn the unique plotly fid for rp. Throws an error if the url inside rp is not correctly formed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.get_config",
    "page": "Docstrings",
    "title": "Plotly.get_config",
    "category": "function",
    "text": "get_config()\n\nReturn the session configuration if defined –> otherwise use .config specs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.get_config_file",
    "page": "Docstrings",
    "title": "Plotly.get_config_file",
    "category": "function",
    "text": "get_config_file()\n\nLoad endpoint configuration as a Dict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.get_credentials",
    "page": "Docstrings",
    "title": "Plotly.get_credentials",
    "category": "function",
    "text": "get_credentials()\n\nReturn the session credentials if defined –> otherwise use .credentials specs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.get_credentials_file",
    "page": "Docstrings",
    "title": "Plotly.get_credentials_file",
    "category": "function",
    "text": "get_credentials_file()\n\nLoad user credentials informaiton as a dict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.grid_overwrite!",
    "page": "Docstrings",
    "title": "Plotly.grid_overwrite!",
    "category": "function",
    "text": "grid_overwrite(cols::AbstractDict; fid::String=\"\", path::String=\"\")\n\nReplace the data in the grid assocaited with fid fid or at the path path with data in cols. cols should be an AbstractDict mapping from column names to column data. The output of this function is an AbstractDict mapping from column names to column uids in the updated grid.\n\nThere are three possible scenarios for the data:\n\nThe column appears both in the grid and in cols. In this case the data in that column of the grid will be updated to match the data in cols\nThe column appears only in cols. In this case a new column will be created in the grid\nThe column appears only in the grid. Nothing happens...\n\nNOTE: only one of fid and path can be passed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.post_v2",
    "page": "Docstrings",
    "title": "Plotly.post_v2",
    "category": "function",
    "text": "Post a local Plotly plot to the Plotly cloud using V2 api.\n\nMust be signed in first. See Plotly.signin for details on how to do that\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.set_config_file",
    "page": "Docstrings",
    "title": "Plotly.set_config_file",
    "category": "function",
    "text": "set_config_file(input_config::AbstractDict)\n\nSave Plotly endpoint configuration as JSON key-value pairs in userhome/.plotly/.config. This includes the plotlydomain, and plotlyapi_domain.\n\n\n\n\n\nset_config_file(config::PlotlyConfig)\n\nSet the values in the configuration file to match the values in config\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.set_credentials_file",
    "page": "Docstrings",
    "title": "Plotly.set_credentials_file",
    "category": "function",
    "text": "set_credentials_file(input_creds::AbstractDict)\n\nSave Plotly endpoint configuration as JSON key-value pairs in userhome/.plotly/.credentials. This includes username and api_key.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.signin",
    "page": "Docstrings",
    "title": "Plotly.signin",
    "category": "function",
    "text": "signin(username::String, api_key::String, endpoints=nothing)\n\nDefine session credentials/endpoint configuration, where endpoint is a Dict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.srcify",
    "page": "Docstrings",
    "title": "Plotly.srcify",
    "category": "function",
    "text": "srcify(p::Plot)\n\nAllocating version of srcify! the plot will be deepcopied before passing to srcify!, so the argument passed to this function will not be modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Plotly.srcify!",
    "page": "Docstrings",
    "title": "Plotly.srcify!",
    "category": "function",
    "text": "srcify!(p::Plot; fileopt::Symbol=get_config().fileopt, grid_fn=nothing, kwargs...)\n\nThis function does three things:\n\nCalls extract_grid_data!(p) (see docs) to remove attributes that can be set via (attributename)(src) in the plotly.js api.\nCreates a grid on the plotly server containing the extract data\nMaps the (attributename)(src) attribute to the grid column\n\nIf fileopt is :create and grid_fn exists under the User\'s plotly account, then the changes described above will happen in-place on the grid.\n\nIf either of those conditions are not met, then a new grid will be created.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Plotly.@L_mstrPlotly.@L_strPlotly.API_ROOTPlotly.AbstractLayoutPlotly.AbstractTracePlotly.ApiCallPlotly.CyclerPlotly.DEFAULT_CONFIGPlotly.GenericTracePlotly.LayoutPlotly.PlotPlotly.PlotlyPlotly.PlotlyAPIErrorPlotly.PlotlyBasePlotly.PlotlyConfigPlotly.PlotlyCredentialsPlotly.PlotlyErrorPlotly.PlotlyJSPlotly.RemotePlotPlotly.STYLESPlotly.ShapePlotly.StylePlotly._SRC_ATTRSPlotly._VERSIONPlotly._get_uidPlotly.add_recession_bands!Plotly.addtracesPlotly.addtraces!Plotly.api_urlPlotly.areaPlotly.attrPlotly.barPlotly.basic_authPlotly.boxPlotly.candlestickPlotly.carpetPlotly.choroplethPlotly.circlePlotly.comment_createPlotly.comment_create_rawPlotly.comment_deletePlotly.comment_delete_rawPlotly.conePlotly.contourPlotly.contourcarpetPlotly.dashboard_createPlotly.dashboard_create_rawPlotly.dashboard_listPlotly.dashboard_list_rawPlotly.dashboard_partial_updatePlotly.dashboard_partial_update_rawPlotly.dashboard_permanent_deletePlotly.dashboard_retrievePlotly.dashboard_retrieve_rawPlotly.dashboard_schemaPlotly.dashboard_schema_rawPlotly.dashboard_trashPlotly.dashboard_trash_rawPlotly.dashboard_updatePlotly.dashboard_update_rawPlotly.dashboard_writeable_metadataPlotly.deletetracesPlotly.deletetraces!Plotly.download_imagePlotly.download_plotPlotly.evalPlotly.extendtracesPlotly.extendtraces!Plotly.extra_contentPlotly.extra_content_rawPlotly.extra_createPlotly.extra_create_rawPlotly.extra_deletePlotly.extra_detailPlotly.extra_detail_rawPlotly.extra_partial_updatePlotly.extra_partial_update_rawPlotly.extract_grid_dataPlotly.extract_grid_data!Plotly.fidPlotly.file_contentPlotly.file_content_rawPlotly.file_copyPlotly.file_copy_rawPlotly.file_drop_referencePlotly.file_drop_reference_rawPlotly.file_imagePlotly.file_image_rawPlotly.file_lookupPlotly.file_lookup_rawPlotly.file_partial_updatePlotly.file_partial_update_rawPlotly.file_pathPlotly.file_path_rawPlotly.file_permanent_deletePlotly.file_remove_starPlotly.file_restorePlotly.file_restore_rawPlotly.file_retrievePlotly.file_retrieve_rawPlotly.file_sourcesPlotly.file_sources_rawPlotly.file_starPlotly.file_star_rawPlotly.file_trashPlotly.file_trash_rawPlotly.file_updatePlotly.file_update_rawPlotly.file_writeable_metadataPlotly.folder_allPlotly.folder_all_rawPlotly.folder_createPlotly.folder_create_rawPlotly.folder_detailPlotly.folder_detail_rawPlotly.folder_homePlotly.folder_home_rawPlotly.folder_permanent_deletePlotly.folder_permanent_delete_rawPlotly.folder_restorePlotly.folder_restore_rawPlotly.folder_sharedPlotly.folder_shared_rawPlotly.folder_starredPlotly.folder_starred_rawPlotly.folder_trashPlotly.folder_trash_rawPlotly.folder_trashedPlotly.folder_trashed_rawPlotly.forkPlotly.get_configPlotly.get_config_filePlotly.get_credentialsPlotly.get_credentials_envPlotly.get_credentials_filePlotly.get_headersPlotly.get_jsonPlotly.get_json_dataPlotly.get_req_headersPlotly.grid_contentPlotly.grid_content_rawPlotly.grid_createPlotly.grid_create_rawPlotly.grid_destroyPlotly.grid_drop_referencePlotly.grid_drop_reference_rawPlotly.grid_get_colPlotly.grid_get_col_rawPlotly.grid_lookupPlotly.grid_lookup_rawPlotly.grid_overwrite!Plotly.grid_partial_updatePlotly.grid_partial_update_rawPlotly.grid_permanent_deletePlotly.grid_post_colPlotly.grid_post_col_rawPlotly.grid_put_colPlotly.grid_put_col_rawPlotly.grid_restorePlotly.grid_restore_rawPlotly.grid_retrievePlotly.grid_retrieve_rawPlotly.grid_rowPlotly.grid_trashPlotly.grid_trash_rawPlotly.grid_updatePlotly.grid_update_rawPlotly.grid_writable_metadataPlotly.heatmapPlotly.heatmapglPlotly.histogramPlotly.histogram2dPlotly.histogram2dcontourPlotly.hlinePlotly.html_bodyPlotly.image_generatePlotly.image_generate_rawPlotly.includePlotly.jsonPlotly.linePlotly.make_methodPlotly.mesh3dPlotly.movetracesPlotly.movetraces!Plotly.ohlcPlotly.openurlPlotly.parcoordsPlotly.pathPlotly.piePlotly.plotPlotly.plot_contentPlotly.plot_content_rawPlotly.plot_createPlotly.plot_create_rawPlotly.plot_detailPlotly.plot_detail_rawPlotly.plot_feedPlotly.plot_feed_rawPlotly.plot_listPlotly.plot_list_rawPlotly.plot_partial_updatePlotly.plot_partial_update_rawPlotly.plot_schema_getPlotly.plot_schema_get_rawPlotly.plot_updatePlotly.plot_update_rawPlotly.plotlyconfigPlotly.plotlycredentialsPlotly.pointcloudPlotly.postPlotly.post_v2Plotly.prependtracesPlotly.prependtraces!Plotly.purge!Plotly.reactPlotly.react!Plotly.rectPlotly.redrawPlotly.redraw!Plotly.relayoutPlotly.relayout!Plotly.requestPlotly.request_dataPlotly.restylePlotly.restyle!Plotly.sankeyPlotly.savefigPlotly.savefig_remotePlotly.savejsonPlotly.scatterPlotly.scatter3dPlotly.scattercarpetPlotly.scattergeoPlotly.scatterglPlotly.scattermapboxPlotly.scatterpolarPlotly.scatterpolarglPlotly.scatterternaryPlotly.search_listPlotly.search_list_rawPlotly.set_config_filePlotly.set_credentials_filePlotly.signinPlotly.splomPlotly.srcifyPlotly.srcify!Plotly.stemPlotly.streamtubePlotly.stylePlotly.surfacePlotly.tablePlotly.to_imagePlotly.try_lookupPlotly.try_mePlotly.updatePlotly.update!Plotly.use_style!Plotly.validate_responsePlotly.violinPlotly.vline"
},

]}
