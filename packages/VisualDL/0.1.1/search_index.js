var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#VisualDL.jl-1",
    "page": "Readme",
    "title": "VisualDL.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: )This package provides a julia wrapper for VisualDL, which is a deep learning visualization tool that can help design deep learning jobs.Currently, the wrapper is written on top of the Python SDK of VisualDL by PyCall. I have tried to write the wrapper on top of the C++ SDK by leveraging CxxWrap.jl. But unluckily a strange error encountered. Hopefully I\'ll figured it out later and swap the backend into C++."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "First, install the Python client of VisualDL. Checkout here for a detailed guide. \nThen add this package as a dependent.\npkg> add https://github.com/findmyway/VisualDL.jl"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "First, initial the logger.using VisualDL\n\ntrain_logger = VisualDLLogger(\"tmp\", 1, \"train\")\ntest_logger = as_mode(train_logger, \"test\")"
},

{
    "location": "#Scalar-1",
    "page": "Readme",
    "title": "Scalar",
    "category": "section",
    "text": "for i in 1:100\n    with_logger(train_logger) do\n        @log_scalar s0=(i,rand()) s1=(i, rand())\n    end\n\n    with_logger(test_logger) do\n        @log_scalar s0=(i,rand()) s1=(i, rand())\n    end\nend(Image: )"
},

{
    "location": "#Histogram-1",
    "page": "Readme",
    "title": "Histogram",
    "category": "section",
    "text": "for i in 1:100\n    with_logger(train_logger) do\n       @log_histogram h0=(i, randn(100))\n    end\nend(Image: )"
},

{
    "location": "#Text-1",
    "page": "Readme",
    "title": "Text",
    "category": "section",
    "text": "for i in 1:100\n    with_logger(train_logger) do\n       @log_text t0=(i, \"This is test \" * string(i))\n    end\nend(Image: )"
},

{
    "location": "#Image-1",
    "page": "Readme",
    "title": "Image",
    "category": "section",
    "text": "for i in 1:100\n    with_logger(train_logger) do\n       @log_image i0=([3,3,3], rand(27) * 255)\n    end\nend\n\nfor i in 1:100\n    with_logger(test_logger) do\n        @log_image image0=rand(10, 10, 3) * 255\n    end\nend\n\n\n# force save and sync\nsave(train_logger)\nsave(test_logger)(Image: )Finally, run visualDL --logdir ./tmp in current dir. Then launch the visualdl service and watch the above pictures in browser. The default url is http://localhost:8040:"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "[x] More documentation\n[x] ~~Add LogReader~~ and tests\n[x] Precompile\n[x] Travis\n[ ] Make Release\n[ ] Move out the start_sampling and finish_sampling from @log_image and @log_audio"
},

]}
