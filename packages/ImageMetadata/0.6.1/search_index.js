var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageMetadata-1",
    "page": "Readme",
    "title": "ImageMetadata",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)ImageMetadata is a simple package providing utilities for working with images that have metadata attached. For example, you might want to associate an image with the date on which the picture was taken, or an MRI scan with patient data, or an astronomical image with sky coordinates and information about the detector used to acquire the image.Read the documentation here:(Image: )"
},

{
    "location": "autodocs/#ImageMetadata.ImageMeta",
    "page": "Docstrings",
    "title": "ImageMetadata.ImageMeta",
    "category": "type",
    "text": "ImageMeta is an AbstractArray that can have metadata, stored in a dictionary.\n\nConstruct an image with ImageMeta(A, props) (for a properties dictionary props), or with ImageMeta(A, prop1=val1, prop2=val2, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMetadata.copyproperties",
    "page": "Docstrings",
    "title": "ImageMetadata.copyproperties",
    "category": "function",
    "text": "copyproperties(img::ImageMeta, data) -> imgnew\n\nCreate a new \"image,\" copying the properties dictionary of img but using the data of the AbstractArray data. Note that changing the properties of imgnew does not affect the properties of img.\n\nSee also: shareproperties.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageAxes.data",
    "page": "Docstrings",
    "title": "ImageAxes.data",
    "category": "function",
    "text": "data(img::ImageMeta) -> array\n\nExtract the data from img, omitting the properties dictionary. array shares storage with img, so changes to one affect the other.\n\nSee also: properties.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMetadata.properties",
    "page": "Docstrings",
    "title": "ImageMetadata.properties",
    "category": "function",
    "text": "properties(imgmeta) -> props\n\nExtract the properties dictionary props for imgmeta. props shares storage with img, so changes to one affect the other.\n\nSee also: data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMetadata.shareproperties",
    "page": "Docstrings",
    "title": "ImageMetadata.shareproperties",
    "category": "function",
    "text": "shareproperties(img::ImageMeta, data) -> imgnew\n\nCreate a new \"image,\" reusing the properties dictionary of img but using the data of the AbstractArray data. The two images have synchronized properties; modifying one also affects the other.\n\nSee also: copyproperties.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMetadata.spatialproperties",
    "page": "Docstrings",
    "title": "ImageMetadata.spatialproperties",
    "category": "function",
    "text": "spatialproperties(img)\n\nReturn a vector of strings, containing the names of properties that have been declared \"spatial\" and hence should be permuted when calling permutedims.  Declare such properties like this:\n\nimg[\"spatialproperties\"] = [\"spacedirections\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImageMetadata.@getImageMetadata.IMNothingImageMetadata.ImageMetaImageMetadata.ImageMetaArrayImageMetadata.ImageMetaAxisImageMetadata.ImageMetadataImageMetadata.ViewIndexImageMetadata._imagemetaImageMetadata.ambigopImageMetadata.batch2ImageMetadata.check_empty_spatialpropertiesImageMetadata.copypropertiesImageMetadata.dataImageMetadata.datatypeImageMetadata.emptysetImageMetadata.evalImageMetadata.imagemetaImageMetadata.includeImageMetadata.kwargs2dictImageMetadata.maybe_wrapImageMetadata.permutedims_props!ImageMetadata.propertiesImageMetadata.sharepropertiesImageMetadata.showdictlinesImageMetadata.showimImageMetadata.spatialproperties"
},

]}
