var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Rsvg.jl-1",
    "page": "Readme",
    "title": "Rsvg.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Rsvg)Adaptation of the librsvg.This is a subset of the full API, but the main pointsOpen an svg file and render to a Cairo Context (surface)\nRead svg data from a string and render to a Cairo Contextare available.(To be correct at this point: A full binding/adaptation should be done via GObject Introspection - which might be available in the future. This here is just ccalls to solve sv to cairo import problems...)Note on API: nothing is exported, you need to prefix Rsvg.callsomething"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using Rsvg\nusing Cairo\n\nfilename_in = \"a4.svg\"\nfilename_out = \"a4.png\"\n\nr = Rsvg.handle_new_from_file(filename_in);\nd = Rsvg.handle_get_dimensions(r);\ncs = Cairo.CairoImageSurface(d.width,d.height,Cairo.FORMAT_ARGB32);\nc = Cairo.CairoContext(cs);\nRsvg.handle_render_cairo(c,r);\nCairo.write_to_png(cs,filename_out);"
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "handle_get_dimensions(handle::RsvgHandle, dimension_data::RsvgDimensionData)\ndimension_data = handle_get_dimensions(handle::RsvgHandle)\nset_default_dpi(dpi::Float64)\nhandle_set_dpi(handle::RsvgHandle, dpi::Float64)\nhandle_render_cairo(cr::CairoContext, handle::RsvgHandle)\nhandle_new_from_file(filename::AbstractString,error::GError)\nhandle_new_from_file(filename::AbstractString)\nhandle_new_from_data(data::AbstractString,error::GError)\nhandle_new_from_data(data::AbstractString)"
},

{
    "location": "#Some-Notes-on-Error-Handling-1",
    "page": "Readme",
    "title": "Some Notes on Error Handling",
    "category": "section",
    "text": "There is none. You\'ll get all kinds of errors (missing something) via the GLib internals. "
},

{
    "location": "#Interaction-with-other-GLib-based-libraries-1",
    "page": "Readme",
    "title": "Interaction with other GLib based libraries",
    "category": "section",
    "text": "librsvg is usually used in a Gnome/GLib context. Some of the features therefore depend on availability of a GLib as shared resource, especially memory management. This package e.g. depends for destroying RsvgHandles on GLib infrastructure and strange things can happen if you manage to load 2 different GLib instances. As long as you use Rsvg along Gtk.jl and Cairo.jl you should be fine."
},

{
    "location": "autodocs/#Rsvg.RsvgDimensionData",
    "page": "Docstrings",
    "title": "Rsvg.RsvgDimensionData",
    "category": "type",
    "text": "RsvgDimensionData is a simple struct of      width::Int32     height::Int32     em::Float64     ex::Float64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.RsvgHandle",
    "page": "Docstrings",
    "title": "Rsvg.RsvgHandle",
    "category": "type",
    "text": "RsvgHandle is a container for the actual GLib pointer to datastructure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.handle_free",
    "page": "Docstrings",
    "title": "Rsvg.handle_free",
    "category": "function",
    "text": "handle_free(handle::RsvgHandle)\n\n\n\n\n\nhandle_free(handle::GInputStream)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.handle_get_dimensions",
    "page": "Docstrings",
    "title": "Rsvg.handle_get_dimensions",
    "category": "function",
    "text": "handlegetdimensions(handle::RsvgHandle, dimension_data::RsvgDimensionData)\n\n\n\n\n\ndimensiondata = handleget_dimensions(handle::RsvgHandle)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.handle_new_from_data",
    "page": "Docstrings",
    "title": "Rsvg.handle_new_from_data",
    "category": "function",
    "text": "handlenewfrom_data(data::AbstractString,error::GError)\n\n\n\n\n\nhandlenewfrom_data(data::AbstractString)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.handle_new_from_file",
    "page": "Docstrings",
    "title": "Rsvg.handle_new_from_file",
    "category": "function",
    "text": "handlenewfrom_file(filename::AbstractString,error::GError)\n\n\n\n\n\nhandlenewfrom_file(filename::AbstractString)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.handle_render_cairo",
    "page": "Docstrings",
    "title": "Rsvg.handle_render_cairo",
    "category": "function",
    "text": "handlerendercairo(cr::CairoContext, handle::RsvgHandle)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.handle_set_dpi",
    "page": "Docstrings",
    "title": "Rsvg.handle_set_dpi",
    "category": "function",
    "text": "handlesetdpi(handle::RsvgHandle, dpi::Float64)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rsvg.set_default_dpi",
    "page": "Docstrings",
    "title": "Rsvg.set_default_dpi",
    "category": "function",
    "text": "setdefaultdpi(dpi::Float64)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Rsvg.@checked_libRsvg.GErrorRsvg.GInputStreamRsvg.RsvgRsvg.RsvgDimensionDataRsvg.RsvgHandleRsvg.__init__Rsvg.depsjlRsvg.destroyRsvg.evalRsvg.glib_memory_input_stream_new_from_dataRsvg.handle_freeRsvg.handle_get_dimensionsRsvg.handle_new_from_dataRsvg.handle_new_from_fileRsvg.handle_render_cairoRsvg.handle_set_dpiRsvg.includeRsvg.libgioRsvg.librsvgRsvg.set_default_dpi"
},

]}
