var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Author: Guilherme Gomes Haetinger Title: KelvinletsImage.jl Date: Nov. 8th, 2018 –-"
},

{
    "location": "#KelvinletsImage.jl-1",
    "page": "Readme",
    "title": "KelvinletsImage.jl",
    "category": "section",
    "text": "Implementation for Kelvinlets Deformations presented on  Regularized Kelvinlets: Sculpting Brushes based on Fundamental Solutions of Elasticity  from Fernando De Goes and Doug L. James on Julia v1.0.Deformations for the Grab, Scale and Pinch brushes. "
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Initialization-1",
    "page": "Readme",
    "title": "Initialization",
    "category": "section",
    "text": "You must first initialize the structure KelvinletsObject to start deforming a given image. To do that you must first select an image end define a poisson ratio ν and an elastic shear modulus μ (both of them are explained on the above paper).    using KelvinletsImage, TestImages\n\n    ν = 0.4\n    μ = 1.0\n    image = testimages(\"mandrill\")\n\n    object = KelvinletsObject(image, ν, μ)(Image: original image)After initializing the presented object, you will use ir for further operations."
},

{
    "location": "#Grab-Brush-1",
    "page": "Readme",
    "title": "Grab Brush",
    "category": "section",
    "text": "    using KelvinletsImage\n\n    pressurePosition = [256, 256]\n    forceVector = [200., 0.]\n    ϵ = 70. # Brush Size\n    grabbedImage = grab(object, pressurePosition, forceVector, ϵ)(Image: grabbed image)    using KelvinletsImage\n\n    frames = 20\n    grabbedImageGIF = makeVideo(object, grab, pressurePosition, forceVector, ϵ, frames)(Image: grabbed image GIF)"
},

{
    "location": "#Scale-Brush-1",
    "page": "Readme",
    "title": "Scale Brush",
    "category": "section",
    "text": "    using KelvinletsImage\n\n    pressurePosition = [256, 256]\n    scale = -200000. # Negative value = inflates .. Positive Value = Contracts\n    ϵ = 70. # Brush Size\n    scaledImage = scale(object, pressurePosition, forceVector, ϵ)(Image: grabbed image)    using KelvinletsImage\n\n    frames = 20\n    grabbedImageGIF = makeVideo(object, scale, pressurePosition, scale, ϵ, frames)(Image: grabbed image GIF)"
},

{
    "location": "#Pinch-Brush-1",
    "page": "Readme",
    "title": "Pinch Brush",
    "category": "section",
    "text": "    using KelvinletsImage\n\n    pressurePosition = [256, 256]\n    forceVector = [0. 0.; 0. 300000.]\n    ϵ = 300. # Brush Size\n    grabbedImage = pinch(object, pressurePosition, forceVector, ϵ)(Image: grabbed image)    using KelvinletsImage\n\n    frames = 20\n    grabbedImageGIF = makeVideo(object, pinch, pressurePosition, forceVector, ϵ, frames)(Image: grabbed image GIF)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "KelvinletsImage.KelvinletsImageKelvinletsImage.KelvinletsObjectKelvinletsImage.__applyVariation__KelvinletsImage.__interpolateVariation__KelvinletsImage.evalKelvinletsImage.grabKelvinletsImage.includeKelvinletsImage.makeVideoKelvinletsImage.pinchKelvinletsImage.scaleKelvinletsImage.triangleInterpolator"
},

]}
