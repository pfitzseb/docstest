var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Metalhead-1",
    "page": "Readme",
    "title": "Metalhead",
    "category": "section",
    "text": "(Image: Build Status)Pkg.add(\"Metalhead\")This package provides computer vision models that run on top of the Flux machine learning library.(Image: IJulia Screenshot)Each model (like VGG19) is a Flux layer, so you can do anything you would normally do with a model; like moving it to the GPU, training or freezing components, and extending it to carry out other tasks (such as neural style transfer).# Run with dummy image data\njulia> x = rand(Float32, 224, 224, 3, 1)\n224×224×3×1 Array{Float32,4}:\n[:, :, 1, 1] =\n 0.353337   0.252493    0.444695   0.767193    …  0.107599   0.424298   0.218889    0.377959\n 0.247294   0.039822    0.829367   0.832303       0.582103   0.359319   0.259342    0.12293\n  ⋮\n\njulia> vgg(x)\n1000×1 Array{Float32,2}:\n 0.000851723\n 0.00079913\n  ⋮\n\n# See the underlying model structure\njulia> vgg.layers\nChain(Conv2D((3, 3), 3=>64, NNlib.relu), Conv2D((3, 3), 64=>64, NNlib.relu), Metalhead.#3, Conv2D((3, 3), 64=>128, NNlib.relu), Conv2D((3, 3), 128=>128, NNlib.relu), Metalhead.#4, Conv2D((3, 3), 128=>256, NNlib.relu), Conv2D((3, 3), 256=>256, NNlib.relu), Conv2D((3, 3), 256=>256, NNlib.relu), Conv2D((3, 3), 256=>256, NNlib.relu), Metalhead.#5, Conv2D((3, 3), 256=>512, NNlib.relu), Conv2D((3, 3), 512=>512, NNlib.relu), Conv2D((3, 3), 512=>512, NNlib.relu), Conv2D((3, 3), 512=>512, NNlib.relu), Metalhead.#6, Conv2D((3, 3), 512=>512, NNlib.relu), Conv2D((3, 3), 512=>512, NNlib.relu), Conv2D((3, 3), 512=>512, NNlib.relu), Conv2D((3, 3), 512=>512, NNlib.relu), Metalhead.#7, Metalhead.#8, Dense(25088, 4096, NNlib.relu), Flux.Dropout{Float32}(0.5f0, false), Dense(4096, 4096, NNlib.relu), Flux.Dropout{Float32}(0.5f0, false), Dense(4096, 1000), NNlib.softmax)\n\n# Run the model up to the last convolution/pooling layer\njulia> vgg.layers[1:21](x)\n7×7×512×1 Array{Float32,4}:\n[:, :, 1, 1] =\n 0.657502  0.598338  0.594517  0.594425  0.594522  0.597183  0.59534\n 0.663341  0.600874  0.596379  0.596292  0.596385  0.598204  0.590494\n  ⋮"
},

{
    "location": "#Working-with-common-datasets-1",
    "page": "Readme",
    "title": "Working with common datasets",
    "category": "section",
    "text": "Metalhead includes support for wokring with several common object recognition datasets. The datasets() function will attempt to auto-detect any common dataset placed in the datasets/. The Metalhead.download function can be used to download these datasets (where such automatic download is possible - for other data sets, see datasets/README.md), e.g.:MetalHead.download(CIFAR10)Once a dataset is load, it\'s training, validation, and test images are available using the trainimgs, valimgs, and testimgs functions. E.g.julia> valimgs(dataset(ImageNet))[rand(1:50000, 10)]will fetch 10 random validation images from the ImageNet data set."
},

{
    "location": "#Inline-Images-at-the-REPL-1",
    "page": "Readme",
    "title": "Inline Images at the REPL",
    "category": "section",
    "text": "If you are using OS X, it is recommended that you use iTerm2 and install the TerminalExtensions.jl package. This will allow you to see inference results as well as the corresponding images directly in your terminal:(Image: REPL Screenshot)"
},

{
    "location": "autodocs/#Metalhead.dataset",
    "page": "Docstrings",
    "title": "Metalhead.dataset",
    "category": "function",
    "text": "Get the appropriate dataset from anywhere we can find. Available options: ImageNet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Metalhead.BottleneckMetalhead.CIFAR10Metalhead.ClassificationModelMetalhead.DataSetMetalhead.DenseNetMetalhead.GoogleNetMetalhead.ImageNetMetalhead.InceptionBlockMetalhead.MetalheadMetalhead.ObjectClassMetalhead.PredictionMetalhead.PredictionFrameMetalhead.ResNetMetalhead.ResidualBlockMetalhead.SqueezeNetMetalhead.TestDataMetalhead.TrainDataMetalhead.TrainingImageMetalhead.TransitionMetalhead.VGG19Metalhead.ValDataMetalhead.ValidationImageMetalhead.__init__Metalhead._densenetMetalhead._googlenetMetalhead._make_dense_layersMetalhead.block_eightsMetalhead.center_cropMetalhead.classifyMetalhead.confidence_barMetalhead.datasetMetalhead.datasetsMetalhead.densenet_layersMetalhead.depsMetalhead.downloadMetalhead.evalMetalhead.forwardMetalhead.getweightsMetalhead.googlenet_layersMetalhead.ground_truthMetalhead.includeMetalhead.inner_linerMetalhead.inner_widthMetalhead.labelsMetalhead.loadMetalhead.load_imgMetalhead.make_fnameMetalhead.predictMetalhead.preprocessMetalhead.print_frame_tableMetalhead.print_prediction_rowMetalhead.resize_smallest_dimensionMetalhead.resnet50Metalhead.resnet_layersMetalhead.squeezenet_layersMetalhead.testimgsMetalhead.topkMetalhead.trainimgsMetalhead.urlMetalhead.valimgsMetalhead.vgg19_layersMetalhead.weights"
},

]}
