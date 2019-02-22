var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RealNeuralNetworks.jl-1",
    "page": "Readme",
    "title": "RealNeuralNetworks.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)3D neuron models extracted from EM image segmentation"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "run this inside julia package REPL (hit ] to enter package mode):add RealNeuralNetworks"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#commandline-1",
    "page": "Readme",
    "title": "commandline",
    "category": "section",
    "text": "julia skeletonize.jl -h"
},

{
    "location": "#Docker-(recommanded)-1",
    "page": "Readme",
    "title": "Docker (recommanded)",
    "category": "section",
    "text": ""
},

{
    "location": "#build-docker-image-1",
    "page": "Readme",
    "title": "build docker image",
    "category": "section",
    "text": "sudo docker build . -t realneuralnetworksdocker run -v /tmp:/tmp -v /secrets:/secrets --net=host realneuralnetworks julia skeletonize.jl -h"
},

{
    "location": "#REPL-in-Julia-1",
    "page": "Readme",
    "title": "REPL in Julia",
    "category": "section",
    "text": "using RealNeuralNetworks.NodeNets\nusing RealNeuralNetworks.Neurons\nusing RealNeuralNetworks.SWCs\n\nnodeNet = NodeNet(seg::Array{UInt32,3}; obj_id = convert(UInt32,77605))\nneuron = Neuron( nodeNet )\nswc = SWC(neuron)\nSWCs.save(swc, tempname()*\".swc\")"
},

{
    "location": "#Morphological-Features-1",
    "page": "Readme",
    "title": "Morphological Features",
    "category": "section",
    "text": ""
},

{
    "location": "#features-represent-a-whole-neuron-1",
    "page": "Readme",
    "title": "features represent a whole neuron",
    "category": "section",
    "text": "[x] arbor density\n[x] total path length \n[x] number of segment points \n[x] Median segment length is the median dendritic segment length of all the segments starting and ending at irreducible nodes (in μm). Irreducible nodes are the points of the dendritic arbor corresponding to soma, branching points or terminal points.\n[x] 3D sholl analysis. \n[ ] Hull area is the area of the tightest convex hull containing the z-projection of the dendritic arbor (in μm2). \n[ ] volume of the convex hull around all neurites\n[x] Average angle is the mean of the positive angle between (parent node, node) and (node, child node) vectors, where node, parent node and child node are irreducible nodes (in radians).  \n[x] Average tortuosity is the average value of the ratio of the actual dendritic length to the Euclidean distance between irreducible nodes. \n[x] Asymmetry is the distance of the soma node to the dendritic arbor (skeleton) centre of mass (in nm). \n[x] Typical radius (λ) is the root-mean-square distance of dendritic arbor points to the centre of mass (in nm). \n[x] fractal dimension.\n[x] longest neurite length.\n[ ] Strahler number\n[ ] distribution of Euclidian distance of segmentes from soma (third principal component)\n[ ] distribution of Euclidian distance of segmentes from soma as a function of segment order (third principal component)\n[ ] number of segmentes per segment order (second principal component)\n[ ] distribution of morphological distance of segmentes from soma along the skeleton as a function of segment order (first principal component)"
},

{
    "location": "#features-represent-segmentes-in-a-neuron-1",
    "page": "Readme",
    "title": "features represent segmentes in a neuron",
    "category": "section",
    "text": "[x] ratio of tail diameter to head. could be useful to identify spines. \n[x] segment order\n[x] segment length\n[x] branching angle. computation using dot product\n[x] tortuosity / curvature. caa4486b501f936743f781782e6561833da7e413\n[x] distance to root path length\n[ ] segment asymmetry\n[x] average radius. easy to compute with radius list."
},

{
    "location": "#Credit-1",
    "page": "Readme",
    "title": "Credit",
    "category": "section",
    "text": "The skeletonization was originally implemented in Matlab by Alexander Bae using TEASAR algorithm, which was translated to Julia by Nicholas Turner."
},

{
    "location": "#References:-1",
    "page": "Readme",
    "title": "References:",
    "category": "section",
    "text": "Sümbül U, Song S, McCulloch K, Becker M, Lin B, Sanes JR, Masland RH, Seung HS. A genetic and computational approach to structurally classify neuronal types. Nature communications. 2014 Mar 24;5:3512. link\nSchierwagen A, Villmann T, Alpár A, Gärtner U. Cluster analysis of cortical pyramidal neurons using som. InIAPR Workshop on Artificial Neural Networks in Pattern Recognition 2010 Apr 11 (pp. 120-130). Springer, Berlin, Heidelberg.\nCuntz H, Forstner F, Borst A, H\\äusser M. The TREES Toolbox—Probing the Basis of Axonal and Dendritic Segmenting. Neuroinformatics. 2011;1–6. \nSchierwagen A. Neuronal morphology: Shape characteristics and models. Neurophysiology. 2008;40(4):310–315. \nUylings HB., van Pelt J. Measures for quantifying dendritic arborizations. Network: Computation in Neural Systems. 2002;13(3):397–414. a good review paper\nWanner AA, Genoud C, Masudi T, Siksou L, Friedrich RW. Dense EM-based reconstruction of the interglomerular projectome in the zebrafish olfactory bulb. Nature neuroscience. 2016 Jun 1;19(6):816-25. also have clustering methods\nSato, M., I. Bitter, M. A. Bender, A. E. Kaufman, and M. Nakajima. “TEASAR: Tree-Structure Extraction Algorithm for Accurate and Robust Skeletons.” In Proceedings the Eighth Pacific Conference on Computer Graphics and Applications, 281–449, 2000. doi:10.1109/PCCGA.2000.883951."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RealNeuralNetworks.ManifestsRealNeuralNetworks.NBLASTsRealNeuralNetworks.NeuralNetsRealNeuralNetworks.NeuronsRealNeuralNetworks.NodeNetsRealNeuralNetworks.RealNeuralNetworksRealNeuralNetworks.SWCsRealNeuralNetworks.UtilsRealNeuralNetworks.evalRealNeuralNetworks.include"
},

]}
