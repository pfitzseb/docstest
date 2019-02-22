var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageInpainting.jl-1",
    "page": "Readme",
    "title": "ImageInpainting.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: CodeCov)Image inpainting algorithms in Julia.For those situations where we need to remove undesired elements from the scene...(Image: trump) (Image: lighthouse)Obs: Currently, only single channel N-dimensional images are supported. For example, zeros(100,100) and zeros(50,50,50) are valid 2D and 3D input images. zeros(100,100,3) is not a 2D image with 3 channels."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:Pkg.add(\"ImageInpainting\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ImageInpainting\n\n# inpaint image within mask using algorithm\ninpaint(img, mask, algo)"
},

{
    "location": "#Algorithms-1",
    "page": "Readme",
    "title": "Algorithms",
    "category": "section",
    "text": "Algorithm type References\nCrimisini Crimisini, A., Pérez, P., Toyama, K., 2004. Region Filling and Object Removal by Examplar-based Image Inpainting."
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions.Please open an issue if you encounter any problems."
},

{
    "location": "autodocs/#ImageInpainting.Crimisini",
    "page": "Docstrings",
    "title": "ImageInpainting.Crimisini",
    "category": "type",
    "text": "Crimisini(tilesize)\n\nExamplar-based inpainting based on confidence and isophote maps. tilesize is the patch size as a tuple of integers.\n\nReferences\n\nCrimisini, A., Pérez, P., Toyama, K., 2004. Region Filling and Object Removal by Examplar-based Image Inpainting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInpainting.InpaintAlgo",
    "page": "Docstrings",
    "title": "ImageInpainting.InpaintAlgo",
    "category": "type",
    "text": "InpaintAlgo\n\nAn inpainting algorithm with given parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInpainting.convdist",
    "page": "Docstrings",
    "title": "ImageInpainting.convdist",
    "category": "function",
    "text": "convdist(img, kern; [weights])\n\nCompute distance between all subimages of img and kern. Optionally, activate/deactivate pixels in the kern using weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInpainting.imfilter_cpu",
    "page": "Docstrings",
    "title": "ImageInpainting.imfilter_cpu",
    "category": "function",
    "text": "imfilter_cpu(img, kern)\n\nPerform filtering on img with kernel kern using the FFT algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInpainting.inpaint",
    "page": "Docstrings",
    "title": "ImageInpainting.inpaint",
    "category": "function",
    "text": "inpaint(img, mask, algo)\n\nInpaint img on pixels marked as true in mask using algorithm algo.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInpainting.pointgradients",
    "page": "Docstrings",
    "title": "ImageInpainting.pointgradients",
    "category": "function",
    "text": "pointgradients(img, points; [method])\n\nCompute the gradients along all dimensions of N-dimensional img at points using method. Default method is :ando3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInpainting.selectpatch",
    "page": "Docstrings",
    "title": "ImageInpainting.selectpatch",
    "category": "function",
    "text": "selectpatch(imgs, tilesize, center)\n\nHelper function to extract a patch of size tilesize from imgs centered at Cartesian index center.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImageInpainting.CrimisiniImageInpainting.ImageInpaintingImageInpainting.InpaintAlgoImageInpainting.convdistImageInpainting.evalImageInpainting.imfilter_cpuImageInpainting.includeImageInpainting.inpaintImageInpainting.inpaint_implImageInpainting.pointgradientsImageInpainting.selectpatch"
},

]}
