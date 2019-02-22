var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<div align=\"center\"> <img src=\"https://raw.githubusercontent.com/JuliaPlots/Makie.jl/sd/abstract/docs/src/assets/logo.png\" alt=\"Makie.jl\" width=\"480\"> </div>Build status: [![][gitlab-img]][gitlab-url][gitlab-img]: https://gitlab.com/JuliaGPU/MakieGallery-jl/badges/master/pipeline.svg [gitlab-url]: https://gitlab.com/JuliaGPU/MakieGallery-jl/pipelinesGallery Generated With this Package"
},

{
    "location": "#Examples-for-Makie:-1",
    "page": "Readme",
    "title": "Examples for Makie:",
    "category": "section",
    "text": "(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )"
},

{
    "location": "#Mouse-interaction:-1",
    "page": "Readme",
    "title": "Mouse interaction:",
    "category": "section",
    "text": "<img src=\"https://user-images.githubusercontent.com/1010467/31519651-5992ca62-afa3-11e7-8b10-b66e6d6bee42.png\" width=\"489\">"
},

{
    "location": "#Animating-a-surface:-1",
    "page": "Readme",
    "title": "Animating a surface:",
    "category": "section",
    "text": "<img src=\"https://user-images.githubusercontent.com/1010467/31519521-fd67907e-afa2-11e7-8c43-5f125780ae26.png\" width=\"489\">"
},

{
    "location": "#Complex-examples-1",
    "page": "Readme",
    "title": "Complex examples",
    "category": "section",
    "text": "<a href=\"https://github.com/JuliaPlots/Makie.jl/blob/master/examples/bigdata.jl#L2\"><img src=\"https://user-images.githubusercontent.com/1010467/48002153-fc15a680-e10a-11e8-812d-a5d717c47288.gif\" width=\"480\"/></a>"
},

{
    "location": "autodocs/#MakieGallery.@block",
    "page": "Docstrings",
    "title": "MakieGallery.@block",
    "category": "macro",
    "text": "@block(Author, tags, block)\n\nUsage:\n\n```example\n@block SimonDanisch [\"2D\"] begin\n    # shared setup code\n    using Makie, GeometryTypes, Colors\n\n    # a cell with additional tags. The tags will get merged with tags from outer block\n    @cell \"Sample 1\" [\"heatmap\"] begin\n        scene = Scene()\n        hm = heatmap(rand(32, 32))\n        center!(scene)\n        io = VideoStream(scene, @file) # creates a tmpfile for this\n        for _ in 1:30\n            hm[:heatmap] = rand(32, 32)\n            recordframe!(io, 1//24) # record at 24 frames per second\n        end\n        io # last returned value will get inlined\n    end\n\n    @cell \"Sample 2\" [\"image\", \"subscene\", \"scatter\"] begin\n        ...\n    end\nend\n```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.@substep",
    "page": "Docstrings",
    "title": "MakieGallery.@substep",
    "category": "macro",
    "text": "Makes a code section linkeable inside of a cell, with separate media output\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.download_reference",
    "page": "Docstrings",
    "title": "MakieGallery.download_reference",
    "category": "function",
    "text": "Downloads the reference images from ReferenceImages for a specific version\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.embed_image",
    "page": "Docstrings",
    "title": "MakieGallery.embed_image",
    "category": "function",
    "text": "embed_image(path::AbstractString)\n\nReturns the html to embed an image\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.embed_media",
    "page": "Docstrings",
    "title": "MakieGallery.embed_media",
    "category": "function",
    "text": "Embeds the most common media types as html\n\n\n\n\n\nEmbeds a vector of media files as HTML\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.embed_video",
    "page": "Docstrings",
    "title": "MakieGallery.embed_video",
    "category": "function",
    "text": "embed_video(path::AbstractString)\n\nGenerates a html formatted string for embedding video into Documenter Markdown files (since Documenter.jl doesn\'t support directly embedding mp4\'s using (Image: ) syntax).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.enumerate_examples",
    "page": "Docstrings",
    "title": "MakieGallery.enumerate_examples",
    "category": "function",
    "text": "Walks through every example matching tags, and calls f on the example. Merges groups of examples into one example entry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.eval_examples",
    "page": "Docstrings",
    "title": "MakieGallery.eval_examples",
    "category": "function",
    "text": "Walks through examples and evaluates them. Returns the evaluated value and calls f(entry, value).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.example_database",
    "page": "Docstrings",
    "title": "MakieGallery.example_database",
    "category": "function",
    "text": "example_database(input_tags...; title = nothing, author = nothing, match_all = true)\n\nReturns the entries in examples database that match the input search pattern.\n\ninput_tags are plot tags to be searched for. title and author are optional and are used to filter the search results by title and author. match_all specifies if the result has to match all input tags, or just any.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.examples2source",
    "page": "Docstrings",
    "title": "MakieGallery.examples2source",
    "category": "function",
    "text": "Walks through all examples matching tags and calls f(entry, source), with source being the source of the example as a string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.extract_source",
    "page": "Docstrings",
    "title": "MakieGallery.extract_source",
    "category": "function",
    "text": "We could just use the AST of the macro, but since we\'re interested to also capture comments and formatting for e.g. docs, we need to extract the source directly from the file!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.find_indices",
    "page": "Docstrings",
    "title": "MakieGallery.find_indices",
    "category": "function",
    "text": "find_indices(input_tags...; title = nothing, author = nothing, match = all)\n\nReturns the indices for the entries in examples database that match the input search pattern.\n\ninput_tags are plot tags to be searched for. title and author are optional and are used to filter the search results by title and author. match specifies a matching function, e.g. any/all which gets applied to the input tags.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.gallery_from_recordings",
    "page": "Docstrings",
    "title": "MakieGallery.gallery_from_recordings",
    "category": "function",
    "text": "Creates a Gallery in html_out from already recorded examples in folder.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.generate_preview",
    "page": "Docstrings",
    "title": "MakieGallery.generate_preview",
    "category": "function",
    "text": "Embedds all produced media in one big html file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.generate_thumbnail",
    "page": "Docstrings",
    "title": "MakieGallery.generate_thumbnail",
    "category": "function",
    "text": "generate_thumbnail(path::AbstractString, target_path, thumb_size::Int = 200)\n\nGenerates a (proportionally-scaled) thumbnail with maximum side dimension sz. sz must be an integer, and the default value is 200 pixels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.get_video_duration",
    "page": "Docstrings",
    "title": "MakieGallery.get_video_duration",
    "category": "function",
    "text": "get_video_duration(path::AbstractString)\n\nReturns the duration of the video in seconds (Float32). Accepted file types: mp4, mkv, and gif.\n\nRequires ffprobe (usually comes installed with ffmpeg).\n\nNote that while this accepts gif, it will not work to get duration of the gif (ffprobe doesn\'t support that), so it will just fallback to return 0.5 sec.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.load_database",
    "page": "Docstrings",
    "title": "MakieGallery.load_database",
    "category": "function",
    "text": "Loads the example database and returns it!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.maxabsfinite",
    "page": "Docstrings",
    "title": "MakieGallery.maxabsfinite",
    "category": "function",
    "text": "m = maxabsfinite(A) calculates the maximum absolute value in A, ignoring any values that are not finite (Inf or NaN).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.maxfinite",
    "page": "Docstrings",
    "title": "MakieGallery.maxfinite",
    "category": "function",
    "text": "m = maxfinite(A) calculates the maximum value in A, ignoring any values that are not finite (Inf or NaN).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.preprocess!",
    "page": "Docstrings",
    "title": "MakieGallery.preprocess!",
    "category": "function",
    "text": "Replaces raw html code nodes with an actual RawHTML node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.print_code",
    "page": "Docstrings",
    "title": "MakieGallery.print_code",
    "category": "function",
    "text": "Prints the source of an entry in the database at idx. This puts entries of a group into one local scope\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.print_source",
    "page": "Docstrings",
    "title": "MakieGallery.print_source",
    "category": "function",
    "text": "print_source(io::IO, idx::Int; style = nothing, example_counter = NaN)\n\nPrint source code of database (hard coded internally) at given index idx. style options are:\n\nnothing -> default, prints a quoted code block\n\"source\" -> same behaviour as default\n\"julia\" -> prints a julia code block (i.e. ```julia)\n\"example\" -> prints an example code block (i.e. ```example)\n\nexample_counter can optionally print an example number (useful for Documenter example blocks), e.g.:\n\n```example 1\n```example 2\nsome explanation text\n```example 2 # continuation of the same example - more code to be evaluated\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.print_table",
    "page": "Docstrings",
    "title": "MakieGallery.print_table",
    "category": "function",
    "text": "print_table(io::IO, dict::Dict)\n\nPrint a Markdown-formatted table with the entries from dict to specified io.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.record_examples",
    "page": "Docstrings",
    "title": "MakieGallery.record_examples",
    "category": "function",
    "text": "record_examples(folder = \"\"; resolution = (500, 500), resume = false)\n\nRecords all examples in the database. If error happen, you can fix them and start record with resume = true, to start at the last example that errored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.run_comparison",
    "page": "Docstrings",
    "title": "MakieGallery.run_comparison",
    "category": "function",
    "text": "Compares all media recursively in two recorded folders!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.sad",
    "page": "Docstrings",
    "title": "MakieGallery.sad",
    "category": "function",
    "text": "s = sad(A, B) computes the sum-of-absolute differences over arrays/images A and B\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.save_markdown",
    "page": "Docstrings",
    "title": "MakieGallery.save_markdown",
    "category": "function",
    "text": "save_markdown(mdpath::String, example::CellEntry, media::Vector{String})\n\nCreates a Markdown representation from an example at mdpath. media is a vector of media output files belonging to the example\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.set_last_evaled!",
    "page": "Docstrings",
    "title": "MakieGallery.set_last_evaled!",
    "category": "function",
    "text": "set_last_evaled!(database_idx::Int)\n\nSet\'s last evaled for resume\n\n\n\n\n\nset_last_evaled!(database_idx::Int)\n\nSet\'s last evaled for resume\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MakieGallery.ssd",
    "page": "Docstrings",
    "title": "MakieGallery.ssd",
    "category": "function",
    "text": "s = ssd(A, B) computes the sum-of-squared differences over arrays/images A and B\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MakieGallery.@blockMakieGallery.@cellMakieGallery.@groupMakieGallery.@replace_with_a_pathMakieGallery.@resolutionMakieGallery.@substepMakieGallery.CellEntryMakieGallery.DatabaseLookupMakieGallery.MakieGalleryMakieGallery.MediaItemMakieGallery.NO_GROUPMakieGallery._print_sourceMakieGallery._sentinel_maxMakieGallery._sentinel_minMakieGallery.accumMakieGallery.approx_differenceMakieGallery.compare_mediaMakieGallery.create_itemMakieGallery.create_pageMakieGallery.databaseMakieGallery.difftypeMakieGallery.download_referenceMakieGallery.embed_imageMakieGallery.embed_mediaMakieGallery.embed_videoMakieGallery.enumerate_examplesMakieGallery.evalMakieGallery.eval_exampleMakieGallery.eval_examplesMakieGallery.event_pathMakieGallery.example2sourceMakieGallery.example_databaseMakieGallery.examples2sourceMakieGallery.extract_cellMakieGallery.extract_framesMakieGallery.extract_sourceMakieGallery.extract_tagsMakieGallery.find_indicesMakieGallery.find_lastlineMakieGallery.find_startendMakieGallery.findspaceMakieGallery.flatten2blockMakieGallery.gallery_from_recordingsMakieGallery.generate_previewMakieGallery.generate_thumbnailMakieGallery.generate_thumbnailsMakieGallery.get_video_durationMakieGallery.global_styleMakieGallery.globaly_shared_codeMakieGallery.includeMakieGallery.is_cellMakieGallery.is_groupMakieGallery.is_image_fileMakieGallery.is_linenumberMakieGallery.isgroupMakieGallery.last_evaledMakieGallery.load_databaseMakieGallery.look_up_sourceMakieGallery.makiegallery_dirMakieGallery.master_urlMakieGallery.match_kwMakieGallery.maxabsfiniteMakieGallery.maxfiniteMakieGallery.maxfinite_scalarMakieGallery.md2htmlMakieGallery.minfinite_scalarMakieGallery.module_cacheMakieGallery.output_fallbackMakieGallery.plotting_backendsMakieGallery.preprocess!MakieGallery.print_codeMakieGallery.print_sourceMakieGallery.print_tableMakieGallery.printlineMakieGallery.record_examplesMakieGallery.regex_patternMakieGallery.remove_toplevelMakieGallery.rescale_imageMakieGallery.run_comparisonMakieGallery.sadMakieGallery.save_markdownMakieGallery.save_mediaMakieGallery.sentinel_maxMakieGallery.sentinel_minMakieGallery.set_last_evaled!MakieGallery.ssdMakieGallery.sumdiffMakieGallery.tags_listMakieGallery.to_tagMakieGallery.unique_name!MakieGallery.unique_names"
},

]}
