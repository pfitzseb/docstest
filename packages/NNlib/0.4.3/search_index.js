var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NNlib-1",
    "page": "Readme",
    "title": "NNlib",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)This package will provide a library of functions useful for ML, such as softmax, sigmoid, convolutions and pooling. It doesn\'t provide any other \"high-level\" functionality like layers or AD.Other packages can build on these functions as if they were defined in Base Julia; for example, CuArrays provides GPU kernels, and Flux provides automatic differentiation; both can work together without explicitly being aware of each other."
},

{
    "location": "autodocs/#NNlib.elu",
    "page": "Docstrings",
    "title": "NNlib.elu",
    "category": "function",
    "text": "elu(x, α = 1) =\n  x > 0 ? x : α * (exp(x) - 1)\n\nExponential Linear Unit activation function. See Fast and Accurate Deep Network Learning by Exponential Linear Units. You can also specify the coefficient explicitly, e.g. elu(x, 1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.leakyrelu",
    "page": "Docstrings",
    "title": "NNlib.leakyrelu",
    "category": "function",
    "text": "leakyrelu(x) = max(0.01x, x)\n\nLeaky Rectified Linear Unit activation function. You can also specify the coefficient explicitly, e.g. leakyrelu(x, 0.01).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.log_fast",
    "page": "Docstrings",
    "title": "NNlib.log_fast",
    "category": "function",
    "text": "log_fast(x)\n\nCompute the natural logarithm of x. The inverse of the natural logarithm is the natural expoenential function exp(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.logsigmoid",
    "page": "Docstrings",
    "title": "NNlib.logsigmoid",
    "category": "function",
    "text": "logσ(x)\n\nReturn log(σ(x)) which is computed in a numerically stable way.\n\njulia> logσ(0.)\n-0.6931471805599453\njulia> logσ.([-100, -10, 100.])\n3-element Array{Float64,1}:\n -100.0\n  -10.0\n   -0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.logsoftmax",
    "page": "Docstrings",
    "title": "NNlib.logsoftmax",
    "category": "function",
    "text": "logsoftmax(xs) = log.(exp.(xs) ./ sum(exp.(xs)))\n\nlogsoftmax computes the log of softmax(xs) and it is more numerically stable than softmax function in computing the cross entropy loss.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.logσ",
    "page": "Docstrings",
    "title": "NNlib.logσ",
    "category": "function",
    "text": "logσ(x)\n\nReturn log(σ(x)) which is computed in a numerically stable way.\n\njulia> logσ(0.)\n-0.6931471805599453\njulia> logσ.([-100, -10, 100.])\n3-element Array{Float64,1}:\n -100.0\n  -10.0\n   -0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.relu",
    "page": "Docstrings",
    "title": "NNlib.relu",
    "category": "function",
    "text": "relu(x) = max(0, x)\n\nRectified Linear Unit activation function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.selu",
    "page": "Docstrings",
    "title": "NNlib.selu",
    "category": "function",
    "text": "selu(x) = λ * (x ≥ 0 ? x : α * (exp(x) - 1))\n\nλ ≈ 1.0507\nα ≈ 1.6733\n\nScaled exponential linear units. See Self-Normalizing Neural Networks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.sigmoid",
    "page": "Docstrings",
    "title": "NNlib.sigmoid",
    "category": "function",
    "text": "σ(x) = 1 / (1 + exp(-x))\n\nClassic sigmoid activation function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.softmax",
    "page": "Docstrings",
    "title": "NNlib.softmax",
    "category": "function",
    "text": "softmax(xs) = exp.(xs) ./ sum(exp.(xs))\n\nSoftmax takes log-probabilities (any real vector) and returns a probability distribution that sums to 1.\n\nIf given a matrix it will treat it as a batch of vectors, with each column independent.\n\njulia> softmax([1,2,3.])\n3-element Array{Float64,1}:\n  0.0900306\n  0.244728\n  0.665241\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.softplus",
    "page": "Docstrings",
    "title": "NNlib.softplus",
    "category": "function",
    "text": "softplus(x) = log(exp(x) + 1)\n\nSee Deep Sparse Rectifier Neural Networks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.softsign",
    "page": "Docstrings",
    "title": "NNlib.softsign",
    "category": "function",
    "text": "softsign(x) = x / (1 + |x|)\n\nSee Quadratic Polynomials Learn Better Image Features.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.swish",
    "page": "Docstrings",
    "title": "NNlib.swish",
    "category": "function",
    "text": "swish(x) = x * σ(x)\n\nSelf-gated actvation function. See Swish: a Self-Gated Activation Function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NNlib.σ",
    "page": "Docstrings",
    "title": "NNlib.σ",
    "category": "function",
    "text": "σ(x) = 1 / (1 + exp(-x))\n\nClassic sigmoid activation function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NNlib.@fixNNlib.DimsNNlib.MLN2NNlib.NNlibNNlib.__init__NNlib.__inits__NNlib.cdimsNNlib.col2im2d!NNlib.col2im3d!NNlib.col2im_2d!NNlib.col2im_3d!NNlib.convNNlib.conv!NNlib.conv2d!NNlib.conv2d_grad_w!NNlib.conv2d_grad_x!NNlib.conv3d!NNlib.conv3d_grad_w!NNlib.conv3d_grad_x!NNlib.crosscorNNlib.crosscor!NNlib.dcdimsNNlib.depthwiseconvNNlib.depthwiseconv!NNlib.depthwiseconv2d!NNlib.depthwiseconv2d_grad_w!NNlib.depthwiseconv2d_grad_x!NNlib.depthwisecrosscorNNlib.depthwisecrosscor!NNlib.dilation_dimsNNlib.eluNNlib.evalNNlib.expandNNlib.float2integerNNlib.gemm!NNlib.headNNlib.ilogb2kNNlib.im2col2d!NNlib.im2col3d!NNlib.im2col_2d!NNlib.im2col_3d!NNlib.im2col_dimsNNlib.includeNNlib.ldexp3kNNlib.leakyreluNNlib.log_fastNNlib.log_fast_kernelNNlib.logsigmoidNNlib.logsoftmaxNNlib.logsoftmax!NNlib.logσNNlib.max_pooling2d_bwd!NNlib.max_pooling2d_fwd!NNlib.max_pooling3d_bwd!NNlib.max_pooling3d_fwd!NNlib.maxpoolNNlib.maxpool!NNlib.maxpool2d!NNlib.maxpool2d_grad!NNlib.maxpool3d!NNlib.maxpool3d_grad!NNlib.maxpool_cpu!NNlib.mean_pooling2d_bwd!NNlib.mean_pooling2d_fwd!NNlib.mean_pooling3d_bwd!NNlib.mean_pooling3d_fwd!NNlib.meanpoolNNlib.meanpool!NNlib.meanpool2d!NNlib.meanpool2d_grad!NNlib.meanpool3d!NNlib.meanpool3d_grad!NNlib.meanpool_cpu!NNlib.padtupleNNlib.pdimsNNlib.psizeNNlib.reluNNlib.seluNNlib.sigmoidNNlib.softmaxNNlib.softmax!NNlib.softplusNNlib.softsignNNlib.swishNNlib.σNNlib.σ_stableNNlib.∇conv_dataNNlib.∇conv_data!NNlib.∇conv_filterNNlib.∇conv_filter!NNlib.∇depthwiseconv_dataNNlib.∇depthwiseconv_data!NNlib.∇depthwiseconv_filterNNlib.∇depthwiseconv_filter!NNlib.∇logsoftmaxNNlib.∇maxpoolNNlib.∇maxpool!NNlib.∇maxpool_cpu!NNlib.∇meanpoolNNlib.∇meanpool!NNlib.∇meanpool_cpu!NNlib.∇softmaxNNlib.∇softmax!"
},

]}
