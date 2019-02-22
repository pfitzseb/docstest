var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PhotoOrganizer-1",
    "page": "Readme",
    "title": "PhotoOrganizer",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)PhotoOrganizer is designed to organize photos (and videos) into a fixed directory structure archive (since manually managing photos is a waste of time)."
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "organize_photos(src_dirs, dst_root, rm_src, dry_run)Move and rename photos in src_dirs source directories to an organized dst_root destination directory.The destination directory is organized as follows:<root>/YYYY/<season>/YYYYMMDD_HHMMSS.SSS_<camera_model>.<extension>where season is Spring, Summer, Fall or Winter (depending of photo\'s date)."
},

{
    "location": "#Arguments-1",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "src_dirs::Vector{String}: dirctories containing photos to organize.\ndst_root:String: the destination directory of organized photos.\nrm_src::Bool: delete source photo if true.  Useful if coming from SD card.\ndry_run::Bool: if true then don\'t change anything, just print what would happen."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> rm_src=false\njulia> dry_run=true\njulia> organize_photos([\"/media/hertz/NIKON/DCIM\"], \"/home/hertz/Pictures/Pictures\", rm_src, dry_run)"
},

{
    "location": "#Dependencies-1",
    "page": "Readme",
    "title": "Dependencies",
    "category": "section",
    "text": "The binary exiftool is required and it can be installed on Ubuntu with apt-get install libimage-exiftool-perl."
},

{
    "location": "autodocs/#PhotoOrganizer.organize_photos",
    "page": "Docstrings",
    "title": "PhotoOrganizer.organize_photos",
    "category": "function",
    "text": "organize_photos(src_dirs, dst_root, rm_src, dry_run)\n\nMove and rename photos in src_dirs source directories to an organized dst_root destination directory.\n\nThe destination directory is organized as follows:\n\n<root>/YYYY/<season>/YYYYMMDD_HHMMSS.SSS_<camera_model>.<extension>\n\nwhere season is Spring, Summer, Fall or Winter (depending of photo\'s date).\n\nArguments\n\nsrc_dirs::Vector{String}: dirctories containing photos to organize\ndst_root:String: the destination directory of organized photos \nrm_src::Bool: delete source photos if true \ndry_run::Bool: if true then don\'t change anything, just print what would happen\n\nExamples\n\njulia> organize_photos([\"/home/hertz/Documents.local/Pictures\"], \"/home/hertz/Pictures/Pictures\", 9999, true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PhotoOrganizer.MountStatPhotoOrganizer.PhotoPhotoOrganizer.PhotoOrganizerPhotoOrganizer._organize_photosPhotoOrganizer.evalPhotoOrganizer.get_photo_dst_dirPhotoOrganizer.includePhotoOrganizer.organize_photosPhotoOrganizer.report_missing"
},

]}
