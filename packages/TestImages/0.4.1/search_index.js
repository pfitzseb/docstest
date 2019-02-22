var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TestImages-1",
    "page": "Readme",
    "title": "TestImages",
    "category": "section",
    "text": "(Image: Build Status)This package provides a convenient Julia interface for loading standard named test images. This can be used in conjunction with the Images package."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Full documentation and description of the images available in TestImages.jl can be found here."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "On Linux and OSX, this should install automatically. If you find yourself missing most of the images described in the documentation, please try Pkg.build(\"TestImages\"), which should trigger another attempt to download the images.In case you would like to download other images from the repository not in the standard set, you can call the testimage with the image name and it will be downloaded from the repository.On Windows, the download command, used to download images from the archives, is not fully supported. You can manually download the files listed in deps\\build.jl from the images folder of the gh-pages branch of this repository and place them in TestImages\\images."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using TestImages\n\nimg = testimage(\"cameraman\")The standard test images are downloaded to an images/ directory inside this package.  Any image file stored in this directory is accessible through the testimage function.  You can supply the file extension (e.g., \".png\", \".tif\", etc), but it is not required. Indeed, the matching is performed using just the portion of the filename you supply, so testimage(\"cam\") yields the same result.In case the image is not present locally, the testimage function will check the online repository and download it for you."
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "A detailed guide on contributing to TestImages.jl can be found in the documentation mentioned above."
},

{
    "location": "autodocs/#TestImages.testimage",
    "page": "Docstrings",
    "title": "TestImages.testimage",
    "category": "function",
    "text": "testimage(filename, [ops...])\n\nload test image that partially matches filename, the first match is used if there\'re more than one. If ops is specified, it will be passed to load function. use TestImages.remotefiles to get a full list of available images.\n\nExample\n\njulia> using TestImages\njulia> testimage(\"cameraman.tif\")\njulia> testimage(\"cameraman\")\njulia> testimage(\"c\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TestImages.REPO_URLTestImages.TestImagesTestImages.evalTestImages.imagedirTestImages.includeTestImages.remotefilesTestImages.testimage"
},

]}
