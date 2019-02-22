var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<p align=\"center\"> <img width=\"400px\" src=\"https://raw.githubusercontent.com/FluxML/fluxml.github.io/master/logo.png\"/> </p>(Image: Build Status) (Image: ) (Image: ) (Image: DOI)Flux is an elegant approach to machine learning. It\'s a 100% pure-Julia stack, and provides lightweight abstractions on top of Julia\'s native GPU and AD support. Flux makes the easy things easy while remaining fully hackable.julia> Pkg.add(\"Flux\")See the documentation or the model zoo for examples.If you use Flux in research, please cite the following paper:@article{innes:2018,\n  author    = {Mike Innes},\n  title     = {Flux: Elegant Machine Learning with Julia},\n  journal   = {Journal of Open Source Software},\n  year      = {2018},\n  doi       = {10.21105/joss.00602},\n}"
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Flux has powerful high-level features, and common architectures can be defined in a few lines.model = Chain(\n  Dense(768, 128, σ),\n  LSTM(128, 256),\n  LSTM(256, 128),\n  Dense(128, 10),\n  softmax)\n\nloss(x, y) = crossentropy(model(x), y)\n\nFlux.train!(loss, data, ADAM(...))Yet you can easily strip away the layers, and directly write the mathematics for your problem. Flux will seamlessly take gradients of any Julia code, so your model looks just like the paper.W = param(randn(2, 10))\nb = param(randn(2))\n\ny(x) = σ.(W * x .+ b)If that\'s still not enough, you can go as deep as you want, even writing your own CUDA kernels with CUDAnative! All this can be freely mixed-and-matched in a single model or script, and it all runs interactively via Jupyter or Juno.function gpu_add(a, b, c)\n  i = (blockIdx().x-1) * blockDim().x + threadIdx().x\n  c[i] = a[i] + b[i]\n  return nothing\nendUnusual architectures are no problem in Flux, as you can use all the loops, control flow and even macros that you\'re used to. Here\'s a Tree RNN in 4 lines.tree() = rand() < 0.5 ? rand(10) : (tree(), tree()) # dummy data\n\nshrink = Dense(20, 10)\ncombine(a, b) = shrink([a; b])\n\nmodel(x) = x\nmodel(x::Tuple) = combine(model(x[1]), model(x[2]))\n\nmodel(tree()) # Sample outputDespite this flexibility, Julia\'s advanced compiler lets us do some powerful optimisations. For example, this definition of sigmoid automatically gets fused into a single GPU kernel – so it\'s really fast.sigmoid(xs) = 1 ./ (1 .+ exp.(.-xs))Similarly, Flux is the first dynamic framework to support compiling to the browser and model import via formats like ONNX, both of which are thinly-veiled compiler problems.For more on our philosophy on machine learning, check out our article On Machine Learning & Programming Languages."
},

{
    "location": "#Contributing-and-Help-1",
    "page": "Readme",
    "title": "Contributing & Help",
    "category": "section",
    "text": "For general questions and help, check out Julia\'s community forum.Flux development is carried out via our GitHub issues, so feel free to open feature requests or PRs here.For more informal discussions we\'d love to have you on the Julia slack, where we hang out on the #machine-learning channel."
},

{
    "location": "#Related-Packages-1",
    "page": "Readme",
    "title": "Related Packages",
    "category": "section",
    "text": "Check out Metalhead.jl for common computer vision datasets and trained models.MLDatasets.jl provides further common datasets."
},

]}
