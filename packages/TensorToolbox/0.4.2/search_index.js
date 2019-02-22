var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TensorToolbox.jl-1",
    "page": "Readme",
    "title": "TensorToolbox.jl",
    "category": "section",
    "text": "(Image: Build Status)Julia package for tensors. Includes functionality fordense tensors, \ntensors in Tucker format,\ntensors in Kruskal (CP) format,\ntensors in Hierarchical Tucker format,\ntensors in Tensor Train format (work in progress).Follows the functionality of MATLAB Tensor toolbox and Hierarchical Tucker Toolbox.Additionally, it contains algorithms from the paper Recompression of Hadamard Products of Tensors in Tucker Format by D. Kressner and L. Periša."
},

{
    "location": "#Basics-1",
    "page": "Readme",
    "title": "Basics",
    "category": "section",
    "text": "Start withusing TensorToolboxDefine tensor as multidimensional array and calculate its norm:X=rand(4,3,2)\nnorm(X)Create identity and diagonal tensor:Id=neye(2,2,2)\nD=diagt([1,2,3,4])For two tensors of same size calculate their inner product:X=rand(3,3,3,3);Y=rand(3,3,3,3);\ninnerprod(X,Y)Matricization of a tensor:X=rand(4,3,2);n=1; \nA=tenmat(X,n) #by mode n\nB=tenmat(X,row=[2,1],col=3) #by row modes [2,1] and column mode 3Fold matrix back to tensor:X=matten(A,n,[4,3,2]) # by mode n\nX=matten(B,[2,1],[3],[4,3,2]) # by row modes [2,1] and column mode 3n-mode product of a tensor and a matrix or an array of matrices:X=rand(5,4,3);\nA=[rand(2,5),rand(2,4),rand(2,3)];\nttm(X,A[1],1)  #X times A[1] by mode 1\nttm(X,[A[1],A[2]],[1,2]) #X times A[1] by mode 1 and times A[2] by mode 2; same as ttm(X,A,-3)\nttm(X,A) #X times matrices from A by each moden-mode (vector) product of a tensor and a vector or an array of vectors:X=rand(5,4,3);\nV=[rand(5),rand(4),rand(3)];\nttv(X,V[1],1)  #X times V[1] by mode 1\nttv(X,[V[1],V[2]],[1,2]) #X times V[1] by mode 1 and times V[2] by mode 2; same as ttm(X,V,-3)\nttv(X,V) #X times vectors from V by each modeOuter product of two tensors: X=rand(5,4,3,2);Y=rand(2,3,4);\n ttt(X,Y)Kronecker product of two tensors (straightforward generalization of Kronecker product of matrices):X=rand(5,4,3);Y=rand(2,2,2);\ntkron(X,Y)The n-rank and the mutlilinear rank of a tensor:X=rand(5,4,3);\nn=2;\nnrank(X,n)\nmrank(X)The HOSVD:X=rand(5,4,3);\nhosvd(X) #same as hosvd(X,eps_abs=1e-8)\nhosvd(X,eps_abs=1e-6) #discard singular values lower than 1e-5\nhosvd(X,eps_rel=1e-3) #discard singular values lower than 1e-3*sigma_{max}\nhosvd(X,reqrank=[2,2,2])The CP decomposition:X=rand(5,4,3);\nR=3; #number of components\ncp_als(X,R)  #same as cp_als(X,R,init=\"rand\",dimorder=1:ndims(X))\ncp_als(X,R,init=[rand(5,3),rand(4,3),rand(3,3)]) #initialize factor matrices \ncp_als(X,R,init=\"nvecs\",dimorder=[2,1,3])"
},

{
    "location": "#Tensors-in-Tucker-format-1",
    "page": "Readme",
    "title": "Tensors in Tucker format",
    "category": "section",
    "text": "Define tensor in Tucker format by its core tensor and factor matrices:F=rand(5,4,3);\nA=[rand(6,5),rand(6,4),rand(6,3)];\nttensor(F,A)Get Tucker format of a tensor by using HOSVD:X=rand(8,9,7);\nhosvd(X) \nhosvd(X,reqrank=[3,3,3]) #HOSVD with predefined multilinear rankCreate random tensor in Tucker format of size 5x4x3 and mulilinear rank (2,2,2): X=randttensor([5,4,3],[2,2,2])Basic functions:size(X) \ncoresize(X)\nndims(X)\nnorm(X)\nfull(X)  #Creates full tensor out of Tucker format\nreorth(X) #Orthogonalize factor matrices\npermutedims(X,[2,1,3]) n-mode matricization of a tensor in Tucker format:n=1;\ntenmat(X,n)Basic operations:X=randttensor([5,4,3],[2,2,2]);Y=randttensor([5,4,3],[3,2,1]);\ninnerprod(X,Y)\nX+Y\nX-Y\nX==Y #same as isequal(X,Y)\n3*X #same as mtimes(3,X)n-mode product of a tensor in Tucker format and a matrix or an array of matrices:X=randttensor([5,4,3],[2,2,2]);\nA=[rand(2,5),rand(2,4),rand(2,3)];\nttm(X,A[1],1)  #X times A[1] by mode 1\nttm(X,[A[1],A[2]],[1,2]) #X times A[1] by mode 1 and times A[2] by mode 2; same as ttm(X,A,-3)\nttm(X,A) #X times matrices from A by each moden-mode (vector) product of a tensor in Tucker format and a vector or an array of vectors:X=randttensor([5,4,3],[2,2,2]);\nV=[rand(5),rand(4),rand(3)];\nttv(X,V[1],1)  #X times V[1] by mode 1\nttv(X,[V[1],V[2]],[1,2]) #X times V[1] by mode 1 and times V[2] by mode 2; same as ttm(X,V,-3)\nttv(X,V) #X times vectors from V by each modeThe n-rank and the mutlilinear rank of a tensor in Tucker format:X=randttensor([9,8,7],[5,4,3]);\nn=2;\nnrank(X,n)\nmrank(X)HOSVD of a tensor in Tucker format:X=randttensor([6,7,5],[4,4,4]);\nhosvd(X)  #same as hosvd(X,eps_abs=1e-8)\nhosvd(X,eps_abs=1e-6) #discard singular values lower than 1e-5\nhosvd(X,eps_rel=1e-3) #discard singular values lower than 1e-3*sigma_{max}\nhosvd(X,reqrank=[3,3,3]) #HOSVD with predefined multilinear rankThe CP decomposition:X=randttensor([6,7,5],[4,4,4]);\nR=3; #number of components\ncp_als(X,R)  #same as cp_als(X,R,init=\"rand\",dimorder=1:ndims(X))\ncp_als(X,R,init=[rand(6,3),rand(7,3),rand(5,3)]) #initialize factor matrices \ncp_als(X,R,init=\"nvecs\",dimorder=[2,1,3])"
},

{
    "location": "#Tensors-in-Kruskal-format-1",
    "page": "Readme",
    "title": "Tensors in Kruskal format",
    "category": "section",
    "text": "Define tensor in Kruskal format by its factor matrices (and vector of weights):lambda=rand(3)\nA=[rand(5,3),rand(4,3),rand(3,3)];\nktensor(A)\nktensor(lambda,A)Create random tensor in Kruskal format of size 5x4x3 and with 2 components: X=randktensor([5,4,3],2)Basic functions:size(X) \nndims(X)\nnorm(X)\nfull(X)  #Creates full tensor out of Kruskal format\npermutedims(X,[2,1,3]) \nncomponents(X) #Number of componentsn-mode matricization of a tensor in Kruskal format:n=1;\ntenmat(X,n)Basic operations:X=randktensor([5,4,3],2);Y=randktensor([5,4,3],3);\ninnerprod(X,Y)\nX+Y\nX-Y\nX==Y #same as isequal(X,Y)\n3*X #same as mtimes(3,X)n-mode product of a tensor in Kruskal format and a matrix or an array of matrices:X=randktensor([5,4,3],2);\nA=[rand(2,5),rand(2,4),rand(2,3)];\nttm(X,A[1],1)  #X times A[1] by mode 1\nttm(X,[A[1],A[2]],[1,2]) #X times A[1] by mode 1 and times A[2] by mode 2; same as ttm(X,A,-3)\nttm(X,A) #X times matrices from A by each moden-mode (vector) product of a tensor in Kruskal format and a vector or an array of vectors:X=randktensor([5,4,3],2);\nV=[rand(5),rand(4),rand(3)];\nttv(X,V[1],1)  #X times V[1] by mode 1\nttv(X,[V[1],V[2]],[1,2]) #X times V[1] by mode 1 and times V[2] by mode 2; same as ttm(X,V,-3)\nttv(X,V) #X times vectors from V by each modeArrange the rank-1 components of a tensor in Kruskal format:X=randktensor([6,5,4,3],3);\narrange(X)\narrange!(X)Fix sign ambiguity of a tensor in Kruskal format:X=randktensor([6,5,4,3,4],3);\nfixsigns(X)\nfixsigns!(X)Distribute weights a tensor in Kruskal format to a specific mode:X=randktensor([3,3,3],3);\nn=2;\nredistribute(X,n)\nredistribute!(X,n)The CP decomposition:X=randktensor([6,7,5],4);\nR=3; #number of components\ncp_als(X,R)  #same as cp_als(X,R,init=\"rand\",dimorder=1:ndims(X))\ncp_als(X,R,init=[rand(6,3),rand(7,3),rand(5,3)]) #initialize factor matrices \ncp_als(X,R,init=\"nvecs\",dimorder=[2,1,3])"
},

{
    "location": "#Tensors-in-Hierarchical-Tucker-format-1",
    "page": "Readme",
    "title": "Tensors in Hierarchical Tucker format",
    "category": "section",
    "text": "Define tensor in Hierarchical Tucker format by dimensional tree T, its transfer tensors and factor matrices:T=dimtree(3)\nB=[rand(2,3,1),rand(4,3,2)]\nA=[rand(5,4),rand(4,3),rand(3,3)]\nhtensor(T,B,A)Define tensor in Hierarchical Tucker format by dimensional tree T, its transfer tensors and factor matrices:T=dimtree(3)\nB=[rand(2,3,1),rand(4,3,2)]\nA=[rand(5,4),rand(4,3),rand(3,3)]\nhtensor(T,B,A)Get Tucker format of a tensor by using htrunc:X=rand(8,9,7);\nhtrunc(X)\nhtrunc(X,maxrank=3) #hrunc with defined maximal rankCreate random tensor in Hierarchical Tucker format of size 5x4x3:X=randhtensor([5,4,3])Basic functions:size(X)\nndims(X)\nnorm(X)\nfull(X)  #Creates full tensor out of Hierarchial Tucker format\nreorth(X) #Orthogonalize factor matricesBasic operations:X=randhtensor([5,4,3]);Y=randhtensor([5,4,3]);\ninnerprod(X,Y)\nX+Y\nX-Y\nX==Y #same as isequal(X,Y)\n3*X #same as mtimes(3,X)n-mode product of a tensor in Hierarchical Tucker format and a matrix or an array of matrices:X=randhtensor([5,4,3]);\nA=[rand(2,5),rand(2,4),rand(2,3)];\nttm(X,A[1],1)  #X times A[1] by mode 1\nttm(X,[A[1],A[2]],[1,2]) #X times A[1] by mode 1 and times A[2] by mode 2; same as ttm(X,A,-3)\nttm(X,A) #X times matrices from A by each moden-mode (vector) product of a tensor in Hierarchical Tucker format and a vector or an array of vectors:X=randhtensor([5,4,3]);\nV=[rand(5),rand(4),rand(3)];\nttv(X,V[1],1)  #X times V[1] by mode 1\nttv(X,[V[1],V[2]],[1,2]) #X times V[1] by mode 1 and times V[2] by mode 2; same as ttm(X,V,-3)\nttv(X,V) #X times vectors from V by each modeThe h-rank of a tensor in Hierarchical Tucker format:X=htrunc(rand(9,8,7),maxrank=X=htrunc(rand(9,8,7),maxrank=2)\nhrank(X)"
},

{
    "location": "#Tensors-in-Tensor-Train-format-1",
    "page": "Readme",
    "title": "Tensors in Tensor Train format",
    "category": "section",
    "text": "Define tensor in TT format by its core tensors:G=TensorCell(undef,3)\nG[1]=rand(1,4,3)\nG[2]=rand(3,6,4)\nG[3]=rand(4,3,1)\nX=TTtensor(G)Get TT format of a tensor by using TTsvd:X=rand(5,4,3,2)\nTTsvd(X)\nTTsvd(X,reqrank=[2,2,2])Create random TT tensor of size 5x4x3 and TT-rank (2,2):X=randTTtensor([5,4,3],[2,2])Basic functions::size(X)\nTTrank(X)\nndims(X)\nnorm(X)\nfull(X)  #Creates full tensor out of Tucker format\nreorth(X)Basic operations:X=randTTtensor([5,4,3],[2,2])\nY=randTTtensor([5,4,3],[3,3])\n\ninnerprod(X,Y)\nX+Y\nX-Y\n3*XTTsvd of a TT tensor:X=randTTtensor([7,6,5],[5,4])\nTTsvd(X,reqrank=[3,3])"
},

{
    "location": "autodocs/#TensorToolbox.MatrixCell",
    "page": "Docstrings",
    "title": "TensorToolbox.MatrixCell",
    "category": "type",
    "text": "MatrixCell(N)\n\nCell of matrices of length N.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.TTrank",
    "page": "Docstrings",
    "title": "TensorToolbox.TTrank",
    "category": "function",
    "text": "TTrank(X::TTtensor,full=false)\nTTrank(X::TensorCell,full=false)\n\nRepresentational TT-rank of X. If cores of X are of size R{n-1} x In x Rn, returns (R1,...,R{n-1}) for full=false or (1,R1,....,Rn) for full=true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.TTsvd",
    "page": "Docstrings",
    "title": "TensorToolbox.TTsvd",
    "category": "function",
    "text": "TTsvd(X;tol=1e-8,reqrank=[])\nTTsvd(X::TTtensor;tol=1e-8,reqrank=[])\n\nDecomposes full tensor X into its TT format. If input is already a TTtensor, recompresses it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.TTtv",
    "page": "Docstrings",
    "title": "TensorToolbox.TTtv",
    "category": "function",
    "text": "TTtv(X::TTtensor,u::VectorCell,mode::Int)\nTTtv(X::TTtensor,U::Matrix,mode::Int)\nTTtv(X::TensorCell,u::VectorCell)\nTTtv(X::TensorCell,U::Matrix)\n\nTT-tensor times vector. For N=ndims(X) and n=[mode,mode+1,...,N] contracts nth core of the TT-tensor with vector u[N-n+1]. If input is a matrix, then vectors u are its columns. Called on a subset of cores, it contracts all given cores to vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.TensorCell",
    "page": "Docstrings",
    "title": "TensorToolbox.TensorCell",
    "category": "type",
    "text": "TensorCell(N)\n\nCell of multidimensional arrays of length N.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.VectorCell",
    "page": "Docstrings",
    "title": "TensorToolbox.VectorCell",
    "category": "type",
    "text": "VectorCell(N)\n\nCell of vectors of length N.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.arrange",
    "page": "Docstrings",
    "title": "TensorToolbox.arrange",
    "category": "function",
    "text": "arrange(X[,n::Integer])\narrange(X[,P::Vector])\n\nArrange the rank-1 components of a ktensor: normalize the columns of the factor matrices and then sort the ktensor components by magnitude, greatest to least.\n\nArguments:\n\nn: Absorb the weights into the nth factor matrix instead of lambda.\nP: Rearrange the components of X according to the permutation P. P should be a permutation of 1 to ncomponents(X).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.arrange!",
    "page": "Docstrings",
    "title": "TensorToolbox.arrange!",
    "category": "function",
    "text": "arrange!(X[,n::Integer])\narrange!(X[,P::Vector])\n\nArrange the rank-1 components of a ktensor: normalize the columns of the factor matrices and then sort the ktensor components by magnitude, greatest to least. Rewrite ktensor.\n\nArguments:\n\nn: Absorb the weights into the nth factor matrix instead of lambda.\nP: Rearrange the components of X according to the permutation P. P should be a permutation of 1 to ncomponents(X).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.blockdiag",
    "page": "Docstrings",
    "title": "TensorToolbox.blockdiag",
    "category": "function",
    "text": "blockdiag(X,Y)\n\nCreate block diagonal tensor where tensors X and Y are block elements. If X and Y are matrices, equal to blkdiag for sparse matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.cat",
    "page": "Docstrings",
    "title": "Base.cat",
    "category": "function",
    "text": "cat(X,Y,n)\n\nConcatente htensors X and Y by mode n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.check_vector_input",
    "page": "Docstrings",
    "title": "TensorToolbox.check_vector_input",
    "category": "function",
    "text": "check_vector_input(input,dim,default_value)\n\nCheck whether input vector is of appropriate size or if input is number create vector out of it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.children",
    "page": "Docstrings",
    "title": "TensorToolbox.children",
    "category": "function",
    "text": "children(T[,node])\n\nMatrix of children for each node of a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.colspace",
    "page": "Docstrings",
    "title": "TensorToolbox.colspace",
    "category": "function",
    "text": "colspace(X; <keyword arguments>)\n\nColumn space basis.\n\nArguments:\n\nX: Matrix.\nmethod ∈ {\"svd\",\"lanczos\",\"randsvd\"} Method for SVD. Default: \"svd\".\nmaxrank::Integer: Maximal rank. Optional.\natol::Number: Drop singular values below atol.  Default: 1e-8.\nrtol::Number: Drop singular values below rtol*sigma_1. Optional.\np::Integer: Oversampling parameter used by lanczos and randsvd methods. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.contract",
    "page": "Docstrings",
    "title": "TensorToolbox.contract",
    "category": "function",
    "text": "contract(X,Y)\ncontract(X,indX,Y,indY[,perm])\ncontract(X::TensorCell)\n\nContracted product of tensors. Contract indX modes of array X to indY modes of array Y and permute the result by vector perm. Default: indX=[ndims(X)], indY=[1].\n\n\n\n\n\n\n\ncontract(T::TTtensor,X::Array,start_mode,modes)\n\nContract modes 1:ndims(X-1) of full tensor X to TTtensor T cores[startmode:startmode+modes-1]. Output: TTtensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.coresize",
    "page": "Docstrings",
    "title": "TensorToolbox.coresize",
    "category": "function",
    "text": "coresize(X)\n\nSize of core tensor of a ttensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.count_leaves",
    "page": "Docstrings",
    "title": "TensorToolbox.count_leaves",
    "category": "function",
    "text": "count_leaves(T,node)\n\nNumber of leaves under a node of a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.cp_als",
    "page": "Docstrings",
    "title": "TensorToolbox.cp_als",
    "category": "function",
    "text": "cp_als(X,R;init,tol,maxit,dimorder)\n\nCompute a CP decomposition with R components of a tensor X .\n\nArguments:\n\ninit ∈ {MatrixCell,\"rand\",\"nvecs\",\"eigs\"}. Initial guess for factor matrices. If init=\"nvecs\" (same as \"eigs\") initialize matrices with function nvecs.\ntol: Tolerance. Defualt: 1e-4.\nmaxit: Maximal number of iterations. Default: 1000.\n`dimorder\': Order of dimensions. Default: 1:ndims(A).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.diagt",
    "page": "Docstrings",
    "title": "TensorToolbox.diagt",
    "category": "function",
    "text": "diagt(v[,dims])\n\nCreate a diagonal tensor for a given vector of diagonal elements. Generalization of diagm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.dims",
    "page": "Docstrings",
    "title": "TensorToolbox.dims",
    "category": "function",
    "text": "dims(T,node)\n\nContent of a node of a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.dimtree",
    "page": "Docstrings",
    "title": "TensorToolbox.dimtree",
    "category": "type",
    "text": "dimtree(leaves::Vector{Int}[,internal_nodes::Vector{Int}])\ndimtree(N[,treetype])\n\nDimension tree. Create from:\n\na vector of leaves (and a vector of internal nodes),\nan order of a tensor N and a type treetype of a dimtree. Default: treetype=\"balanced\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.dirsum",
    "page": "Docstrings",
    "title": "TensorToolbox.dirsum",
    "category": "function",
    "text": "dirsum(X,Y)\n\nDirect sum od tensors. Equal to blockdiag.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Multimedia.display",
    "page": "Docstrings",
    "title": "Base.Multimedia.display",
    "category": "function",
    "text": "\n\nTensorToolbox:\n\ndisplay(X::ttensor[,name])\ndisplay(X::ktensor[,name])\ndisplay(X::htensor[,name])\n\nDisplays a tensor X of a given name.\n\n\n\n\n\ndisplay(T)\n\nDisplay a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.dropdims",
    "page": "Docstrings",
    "title": "Base.dropdims",
    "category": "function",
    "text": "TensorToolbox:\n\ndropdims(X)\n\nRemove singleton dimensions from htensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.ewprod",
    "page": "Docstrings",
    "title": "TensorToolbox.ewprod",
    "category": "function",
    "text": "ewprod(X,Y)\n\nElement-wise product of two ttensors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.extract",
    "page": "Docstrings",
    "title": "TensorToolbox.extract",
    "category": "function",
    "text": "extract(X,factors)\n\nCreate a new ktensor with only the specified factors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.eye",
    "page": "Docstrings",
    "title": "TensorToolbox.eye",
    "category": "function",
    "text": "eye(n::Integer)\n\nIdentity matrix of size nxn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.fixsigns",
    "page": "Docstrings",
    "title": "TensorToolbox.fixsigns",
    "category": "function",
    "text": "fixsign(X)\n\nFix sign ambiguity of a ktensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.fixsigns!",
    "page": "Docstrings",
    "title": "TensorToolbox.fixsigns!",
    "category": "function",
    "text": "fixsign(X)\n\nFix sign ambiguity of a ktensor. Rewrite ktensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.full",
    "page": "Docstrings",
    "title": "TensorToolbox.full",
    "category": "function",
    "text": "\n\nTensorToolbox:\n\nfull(X::ttensor)\nfull(X::ktensor)\nfull(X::htensor)\n\nMake full tensor out of a decomposed tensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.hadcten",
    "page": "Docstrings",
    "title": "TensorToolbox.hadcten",
    "category": "function",
    "text": "hadcten(X,Y,fmat)\n\nCore tensor of Hadamard product of two ttensors with given factor matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.height",
    "page": "Docstrings",
    "title": "TensorToolbox.height",
    "category": "function",
    "text": "height(T)\n\nHeight of a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.hosvd",
    "page": "Docstrings",
    "title": "TensorToolbox.hosvd",
    "category": "function",
    "text": "hosvd(X; <keyword arguments>)\n\nHigher-order singular value decomposition.\n\nArguments:\n\nX: Tensor (multidimensional array) or ttensor.\nmethod ∈ {\"svd\",\"lanczos\",\"randsvd\"} Method for SVD. Default: \"svd\".\nreqrank::Vector: Requested mutlilinear rank. Optional.\neps_abs::Number/Vector: Drop singular values (of mode-n matricization) below eps_abs. Default: 1e-8.\neps_rel::Number/Vector: Drop singular values (of mode-n matricization) below epsrel*sigma1. Optional.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.hosvd1",
    "page": "Docstrings",
    "title": "TensorToolbox.hosvd1",
    "category": "function",
    "text": "hosvd1(X,Y; <keyword arguments>)\n\nHadamard product of ttensors X and Y as ttensor. Creates the product and calls hosvd. See also: hosvd2, hosvd3, hosvd4.\n\nArguments:\n\nmethod ∈ {\"svd\",\"lanczos\",\"randsvd\"}. Method for SVD. Default: \"randsvd\".\nreqrank::Vector: Requested mutlilinear rank. Optional.\neps_abs::Number/Vector: Drop singular values (of mode-n matricization) below eps_abs. Optional.\neps_rel::Number/Vector: Drop singular values (of mode-n matricization) below epsrel*sigma1. Optional.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.hosvd2",
    "page": "Docstrings",
    "title": "TensorToolbox.hosvd2",
    "category": "function",
    "text": "hosvd2(X,Y; <keyword arguments>)\n\nHadamard product of ttensors X and Y as ttensor. Orthogonalizes factor matrices from structure and calls hosvd on updated core tensor. See also: hosvd1, hosvd3, hosvd4.\n\nArguments:\n\nmethod ∈ {\"svd\",\"lanczos\",\"randsvd\"} Method for SVD. Default: \"randsvd\".\nreqrank::Vector: Requested mutlilinear rank. Optional.\neps_abs::Number/Vector: Drop singular values (of mode-n matricization) below eps_abs. Optional.\neps_rel::Number/Vector: Drop singular values (of mode-n matricization) below epsrel*sigma1. Optional.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.hosvd3",
    "page": "Docstrings",
    "title": "TensorToolbox.hosvd3",
    "category": "function",
    "text": "hosvd3(X,Y; <keyword arguments>)\n\nHadamard product of ttensors X and Y as ttensor. Structure exploiting, works with (X ∗ Y)ₙ(X ∗ Y)ₙᵀ matrices. See also: hosvd1, hosvd2, hosvd4.\n\nArguments:\n\nmethod ∈ {\"lanczos\",\"randsvd\"} Structure exploiting method for SVD. Default: \"lanczos\".\nreqrank::Vector: Requested mutlilinear rank. Optional.\nvariant ∈ {\'A\',\'B\'} Variant of multiplication (X ∗ Y)ₙ(X ∗ Y)ₙᵀ. Default: \'B\'.\neps_abs::Number/Vector: Drop singular values (of mode-n matricization) below eps_abs. Optional.\neps_rel::Number/Vector: Drop singular values (of mode-n matricization) below epsrel*sigma1. Optional.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.hosvd4",
    "page": "Docstrings",
    "title": "TensorToolbox.hosvd4",
    "category": "function",
    "text": "hosvd4(X,Y; <keyword arguments>)\n\nHadamard product of ttensors X and Y as ttensor. Uses rank-1 randomized algorithm for finding range of (X ∗ Y)ₙ. If reqrank defined, calls additonal hosvd on updated core tensor. See also: hosvd1, hosvd2, hosvd3.\n\nArguments:\n\nmethod ∈ {\"svd\",\"lanczos\",\"randsvd\"} Method for SVD. Default: \"svd\".\nreqrank::Vector: Requested mutlilinear rank. Optional.\neps_abs::Number/Vector: Drop singular values (of mode-n matricization) below eps_abs. Optional.\neps_rel::Number/Vector: Drop singular values (of mode-n matricization) below epsrel*sigma1. Optional.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.hrank",
    "page": "Docstrings",
    "title": "TensorToolbox.hrank",
    "category": "function",
    "text": "fmat(X)\n\nHierarchical ranks of a htensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.htensor",
    "page": "Docstrings",
    "title": "TensorToolbox.htensor",
    "category": "type",
    "text": "htensor(tree,trten,fmat)\nhtensor(tree,trten,U1,U2,...)\n\nHierarchical Tucker tensor.\n\nArguments:\n\ntree::dimtree: Dimension tree.\ntrten::TensorCell: Transfer tensors. One for each internal node of the tree.\nfmat::MatrixCell: Frame matrices. One for each leaf of the tree.\n\nFor htensor X, X.isorth=true if frame matrices are othonormal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.htrunc",
    "page": "Docstrings",
    "title": "TensorToolbox.htrunc",
    "category": "function",
    "text": "htrunc(X[,tree])\n\nTruncate full tensor X into a htensor for a given tree. If tree not specified use balanced tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.innerprod",
    "page": "Docstrings",
    "title": "TensorToolbox.innerprod",
    "category": "function",
    "text": "innerprod(X,Y)    innerprod(X::ttensor,Y::ttensor)    innerprod(X::ktensor,Y::ktensor)\n\nInner product of two tensors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.is_leaf",
    "page": "Docstrings",
    "title": "TensorToolbox.is_leaf",
    "category": "function",
    "text": "is_leaf(T,node)\n\nTrue if a node is a leaf in a dimtree T. False otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.is_left",
    "page": "Docstrings",
    "title": "TensorToolbox.is_left",
    "category": "function",
    "text": "is_left(T,node)\n\nTrue if a node is a left node of dimtree T. False otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.is_right",
    "page": "Docstrings",
    "title": "TensorToolbox.is_right",
    "category": "function",
    "text": "is_right(T,node)\n\nTrue if a node is a right node of dimtree T. False otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isequal",
    "page": "Docstrings",
    "title": "Base.isequal",
    "category": "function",
    "text": "isequal(X::ttensor,Y::ttensor)\nisequal(X::ktensor,Y::ktensor)\nisequal(X::ktensor,Y::htensor)\n\nTwo tensors in decomposed format are equal if they have equal components. Same as: X==Y.\n\n\n\n\n\nisequal(T1,T2)\n\nTrue if two dimensional trees are equal, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.khatrirao",
    "page": "Docstrings",
    "title": "TensorToolbox.khatrirao",
    "category": "function",
    "text": "khatrirao(M,t=\'n\')\nkhatrirao(M,n,t=\'n\')\n\nKhatri-Rao product of matrices from M:  M₁⊙ ⋯ ⊙ Mₙ. Optionally skip nth matrix. If t=\'t\', compute transpose Khatri-Rao product: M₁⊙ᵀ ⋯ ⊙ᵀ Mₙ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.krank",
    "page": "Docstrings",
    "title": "TensorToolbox.krank",
    "category": "function",
    "text": "krank(X::ktensor)\n\nRepresenation k-rank. Equal to number of columns of factor matrices if ktensor X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.krontkron",
    "page": "Docstrings",
    "title": "TensorToolbox.krontkron",
    "category": "function",
    "text": "krontkron(A,v,t=\'n\')\n\nKronecker product of matrices multiplied by Kronecker product of vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.krontm",
    "page": "Docstrings",
    "title": "TensorToolbox.krontm",
    "category": "function",
    "text": "krontm(X,Y,M[,modes,t=\'n\'])\n\nKronecker product of two tensors times matrix (n-mode product): (X ⊗ Y) x₁ M₁ x₂ M₂ x₃ ⋯ xₙ Mₙ.\n\nArguments:\n\nX::Array\nY::Array\nM::Matrix/MatrixCell\nmodes::Integer/Vector : Modes for multiplication. Default: 1:length(M).\nt=\'t\': Transpose matrices from M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.krontv",
    "page": "Docstrings",
    "title": "TensorToolbox.krontv",
    "category": "function",
    "text": "krontv(A,B,v)\n\nKronecker product times vector: (A ⊗ B)v. If v is a matrix, multiply column by column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.krtv",
    "page": "Docstrings",
    "title": "TensorToolbox.krtv",
    "category": "function",
    "text": "krtv(A,B,v)\n\nKhatri-Rao product times vector: (A ⊙ B)v. If v is a matrix, multiply column by column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.kten2TT",
    "page": "Docstrings",
    "title": "TensorToolbox.kten2TT",
    "category": "function",
    "text": "kten2TT(X::ktensor)\n\nTransform ktensor to TTtensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.ktensor",
    "page": "Docstrings",
    "title": "TensorToolbox.ktensor",
    "category": "type",
    "text": "ktensor(fmat)\nktensor(lambda,fmat)\n\nTensor in Kruskal format defined by its vector of weights lambda and factor matrices. Default lambda: vector of ones. For ktensor X, X.isorth=true if factor matrices are othonormal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.lanczos",
    "page": "Docstrings",
    "title": "TensorToolbox.lanczos",
    "category": "function",
    "text": "lanczos(A; <keyword arguments>)\n\nLanczos based SVD - computes left singular vectors and singular values of a matrix.\n\nArguments:\n\nA::Matrix\ntol: Tolerance - discard singular values below tol. Default: 1e-8.\nmaxit: Maximal number of iterations. Default: 1000.\nreqrank: Number of singular values and singular vectors to compute. Optional.\np: Oversampling parameter. Default: p=10.\n\n\n\n\n\nlanczos(X,Y,n; <keyword arguments>)\n\nStructure exploiting Lanczos based SVD - computes left singular vectors and singular values of n-mode matricization (X ∗ Y)ₙ. Works with matrix (X ∗ Y)ₙ(X ∗ Y)ₙᵀ.\n\nArguments:\n\nreqrank::Integer: Requested rank. Optional.\nvariant ∈ {\'A\',\'B\'} Variant of multiplication (X ∗ Y)ₙ(X ∗ Y)ₙᵀ. Default: \'B\'.\ntol::Number/Vector: Tolerance. Default: 1e-8.\nmaxit: Maximal number of iterations. Default: 1000.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.lanczos_tridiag",
    "page": "Docstrings",
    "title": "TensorToolbox.lanczos_tridiag",
    "category": "function",
    "text": "lanczos_tridiag(A; <keyword arguments>)\n\nLanczos tridiagonalization algorithm - returns orthonormal Q and symmetric tridiagonal T such that A≈QTQ\'.\n\nArguments:\n\nA::Matrix\ntol: Tolerance. Default: 1e-8.\nmaxit: Maximal number of iterations. Default: 1000.\nreqrank: Number of singular values and singular vectors to compute. Optional.\np: Oversampling parameter. Default: p=10.\n\n\n\n\n\nlanczos_tridiag(X,Y,n; <keyword arguments>)\n\nStructure exploiting Lanczos tridiagonalization algorithm for n-mode matricization A=(X ∗ Y)ₙ(X ∗ Y)ₙᵀ. Returns orthonormal Q and symmetric tridiagonal T such that A≈QTQ\'.\n\nArguments:\n\nreqrank::Integer: Requested rank. Optional.\nvariant ∈ {\'A\',\'B\'} Variant of multiplication (X ∗ Y)ₙ(X ∗ Y)ₙᵀ. Default: \'B\'.\ntol::Number/Vector: Tolerance. Default: 1e-8.\nmaxit: Maximal number of iterations. Default: 1000.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.left_child_length",
    "page": "Docstrings",
    "title": "TensorToolbox.left_child_length",
    "category": "function",
    "text": "left_child_length(T[,node])\n\nLength of the left child of a node of a dimtree T. Default: node=1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.lvl",
    "page": "Docstrings",
    "title": "TensorToolbox.lvl",
    "category": "function",
    "text": "lvl(T[,node])\n\nVector of levels for each node of a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.matten",
    "page": "Docstrings",
    "title": "TensorToolbox.matten",
    "category": "function",
    "text": "matten(A,n,dims)\nmatten(A,R,C,dims)\n\nFold matrix A into a tensor of dimension dims by mode n or by row and column vectors R and C.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.mhadtv",
    "page": "Docstrings",
    "title": "TensorToolbox.mhadtv",
    "category": "function",
    "text": "mhadtv(X,Y,v,n,t=\'b\';variant=\'B\')\n\nMode-n matricized Hadamard product of ttensors X and Y times vector v.\n\nt=\'b\':  (X ∗ Y)ₙ(X ∗ Y)ₙᵀv. Variant of multiplication (X ∗ Y)ₙ(X ∗ Y)ₙᵀ can be specified to \'A\' or \'B\'.\nt=\'n\':  (X ∗ Y)ₙᵀv.\nt=\'t\':  (X ∗ Y)ₙᵀv.\n\nIf v is a matrix, multiply column by column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.minus",
    "page": "Docstrings",
    "title": "TensorToolbox.minus",
    "category": "function",
    "text": "minus(X::ttensor,Y::ttensor)\nminus(X::ktensor,Y::ktensor)\nminus(X::htensor,Y::htensor)\n\nSubtraction of two tensors. Same as: X-Y.\n\n\n\n\n\nminus(X::TTtensor,Y::TTtensor)\n\nSubtraction of two TTtensors. Same as: X-Y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.mkrontv",
    "page": "Docstrings",
    "title": "TensorToolbox.mkrontv",
    "category": "function",
    "text": "mkrontv(X,Y,v,n,t=\'n\')\n\nMatricized Kronecker product of tensors X and Y times vector v (n-mode multiplication): (X ⊗ Y)ₙv. If t=\'t\', transpose matricized Kronecker product: (X ⊗ Y)ᵀₙv. If v is a matrix, multiply column by column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.mrank",
    "page": "Docstrings",
    "title": "TensorToolbox.mrank",
    "category": "function",
    "text": "mrank(X[,tol])\nmrank(X::ttensor[,tol])\n\nMultilinear rank of a tensor with optionally given tolerance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.msvdvals",
    "page": "Docstrings",
    "title": "TensorToolbox.msvdvals",
    "category": "function",
    "text": "msvdvals(X,n)\n\nSingular values of mode-n matricization of a ttensor calculated directly. See also: nvecs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.mtimes",
    "page": "Docstrings",
    "title": "TensorToolbox.mtimes",
    "category": "function",
    "text": "mtimes(a,X)\n\nScalar times ttensor. Same as: a*X.\n\n\n\n\n\nmtimes(a,X)\n\nScalar times TTtensor. Same as: a*X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.mttkrp",
    "page": "Docstrings",
    "title": "TensorToolbox.mttkrp",
    "category": "function",
    "text": "mttkrp(X,M,n)\nmttkrp(X::ttensor,M,n)\nmttkrp(X::ktensor,M,n)\n\nMode-n matricized tensor X times Khatri-Rao product of matrices from M (except nth) in reverse order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.ncomponents",
    "page": "Docstrings",
    "title": "TensorToolbox.ncomponents",
    "category": "function",
    "text": "ncomponents(X)\n\nNumber of components of a ktensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.neye",
    "page": "Docstrings",
    "title": "TensorToolbox.neye",
    "category": "function",
    "text": "neye(dims)\n\nIdentity tensor of a given dimension. Generalization of eye.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.node2ind",
    "page": "Docstrings",
    "title": "TensorToolbox.node2ind",
    "category": "function",
    "text": "node2ind(T,nodes)\n\nConvert node numbers to transfer tensor or frames indices in a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.nodes_on_lvl",
    "page": "Docstrings",
    "title": "TensorToolbox.nodes_on_lvl",
    "category": "function",
    "text": "nodes_on_lvl(T,l)\n\nNodes on a level l in a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.non",
    "page": "Docstrings",
    "title": "TensorToolbox.non",
    "category": "function",
    "text": "non(T)\n\nNumber of nodes of a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.normalize",
    "page": "Docstrings",
    "title": "LinearAlgebra.normalize",
    "category": "function",
    "text": "normalize(X[,n;normtype,factor])\n\nNormalize columns of factor matrices of a ktensor. Also ensures that lambda is positive.\n\nArguments:\n\nn: Absorbe the excess weight into nth factor matrix.  If n=0, equally divide the weights across the factor matrices and set lambda to vector of ones.  If n=\"sort\", sort the components by lambda value, from greatest to least.\nnormtype: Default: 2.\nfactor: Just normalize specified factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.normalize!",
    "page": "Docstrings",
    "title": "LinearAlgebra.normalize!",
    "category": "function",
    "text": "normalize!(X[,n,normtype,factor])\n\nNormalize columns of factor matrices of a ktensor. Rewrite ktensor. Also ensures that lambda is positive.\n\nArguments:\n\nn: Absorbe the excess weight into nth factor matrix.  If n=0, equally divide the weights across the factor matrices and set lambda to vector of ones.  If n=\"sort\", sort the components by lambda value, from greatest to least.\nnormtype: Default: 2.\nfactor: Just normalize specified factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.nrank",
    "page": "Docstrings",
    "title": "TensorToolbox.nrank",
    "category": "function",
    "text": "nrank(X,n[,tol])\nnrank(X::ttensor,n[,tol])\n\nRank of the n-mode matricization of a tensor X (n-rank).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.nvecs",
    "page": "Docstrings",
    "title": "TensorToolbox.nvecs",
    "category": "function",
    "text": "nvecs(X,n,r=0;flipsign=false,svds=false)\nnvecs(X::ttensor,n,r=0;flipsign=false)\nnvecs(X::ktensor,n,r=0;flipsign=false)\n\nComputes the r leading singular vectors of mode-n matricization of a tensor X. Works with XₙXₙᵀ.\n\nArguments:\n\nflipsign=true: Make the largest magnitude element be positive.\nsvds=true: Use svds on Xₙ rather than eigs on XₙXₙᵀ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.parent",
    "page": "Docstrings",
    "title": "Base.parent",
    "category": "function",
    "text": "parent(T[,node])\n\nVectors of parents for each node of a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.plus",
    "page": "Docstrings",
    "title": "TensorToolbox.plus",
    "category": "function",
    "text": "plus(X::ttensor,Y::ttensor)\nplus(X::ktensor,Y::ktensor)\nplus(X::htensor,Y::htensor)\n\nAddition of two tensors. Same as: X+Y.\n\n\n\n\n\nplus(X::TTtensor,Y::TTtensor)\n\nAddition of two TTtensors. Same as: X+Y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.positions",
    "page": "Docstrings",
    "title": "TensorToolbox.positions",
    "category": "function",
    "text": "positions(T)\n\nPositions of nodes of a dimtree T in a full binary tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.randTTtensor",
    "page": "Docstrings",
    "title": "TensorToolbox.randTTtensor",
    "category": "function",
    "text": "randTTtensor(I::Vector,R::Vector)\nrandTTtensor(I::Integer,R::Integer,N::Integer)\n\nCreate random TTtensor of size I and TT-rank rank R, or of order N and size I × ⋯ × I and TT-rank (R,...,R).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.randhtensor",
    "page": "Docstrings",
    "title": "TensorToolbox.randhtensor",
    "category": "function",
    "text": "randhtensor(I::Vector,R::Vector)\nrandhtensor(I::Vector,R::Vector,T::dimtree)\n\nCreate random htensor of size I, hierarchical rank R and balanced tree T. If T not specified use balanced tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.randktensor",
    "page": "Docstrings",
    "title": "TensorToolbox.randktensor",
    "category": "function",
    "text": "randktensor(I::Vector,R::Integer)\nrandktensor(I::Integer,R::Integer,N::Integer)\n\nCreate random Kruskal tensor of size I with R components, or of order N and size I × ⋯ × I.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.randrange",
    "page": "Docstrings",
    "title": "TensorToolbox.randrange",
    "category": "function",
    "text": "randrange(X,Y,n; <keyword arguments>)\n\nStructure exploiting randomized range approximation of n-mode matricization of Hadamard product (X ∗ Y)ₙ, where X and Y are ttensors.\n\nArguments:\n\nreqrank::Integer: Requested rank. Optional.\ntol::Number/Vector: Tolerance. Default: 1e-8.\nmaxit: Maximal number of iterations. Default: 1000.\nr: Number of samples for stopping criterion. Default: r=10.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.randsvd",
    "page": "Docstrings",
    "title": "TensorToolbox.randsvd",
    "category": "function",
    "text": "randsvd(A; <keyword arguments>)\n\nRandomized SVD algorithm - returns left singular vectors and singular values of a matrix.\n\nArguments:\n\nA::Matrix\ntol: Tolerance - discard singular values below tol. Default: 1e-8.\nmaxit: Maximal number of iterations. Default: 1000.\nreqrank: Number of singular values and singular vectors to compute. Optional.\nr: Number of samples for stopping criterion. Default: r=10.\np: Oversampling parameter. Default: p=10.\n\n\n\n\n\nrandsvd(X,Y,n; <keyword arguments>)\n\nStructure exploiting randomized SVD - computes left singular vectors and singular values of n-mode matricization (X ∗ Y)ₙ. Works with matrix (X ∗ Y)ₙ(X ∗ Y)ₙᵀ.\n\nArguments:\n\nreqrank::Integer: Requested rank. Optional.\nvariant ∈ {\'A\',\'B\'} Variant of multiplication (X ∗ Y)ₙ(X ∗ Y)ₙᵀ. Default: \'B\'.\ntol::Number/Vector: Tolerance. Default: 1e-8.\nmaxit: Maximal number of iterations. Default: 1000.\nr: Number of samples for stopping criterion. Default: r=10.\np::Integer: Oversampling parameter. Defaul p=10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.randttensor",
    "page": "Docstrings",
    "title": "TensorToolbox.randttensor",
    "category": "function",
    "text": "randttensor(I::Vector,R::Vector)\nrandttensor(I::Integer,R::Integer,N::Integer)\n\nCreate random ttensor of size I and multilinear rank R, or of order N and size I × ⋯ × I and mulilinear rank (R,...,R).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.redistribute",
    "page": "Docstrings",
    "title": "TensorToolbox.redistribute",
    "category": "function",
    "text": "redistribute(X,n)\n\nDistribute lambda values to a mode n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.redistribute!",
    "page": "Docstrings",
    "title": "TensorToolbox.redistribute!",
    "category": "function",
    "text": "redistribute!(X,n)\n\nDistribute lambda values to a mode n. Rewrite ktensor X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.reorth",
    "page": "Docstrings",
    "title": "TensorToolbox.reorth",
    "category": "function",
    "text": "  reorth(X::ttensor)\n  reorth(X::htensor)\n  reorth(X::TTtensor[,direction,full])\n\nOrthogonalize factor matrices of a tensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.reorth!",
    "page": "Docstrings",
    "title": "TensorToolbox.reorth!",
    "category": "function",
    "text": "reorth!(X::ttensor)\nreorth!(X::htensor)\nreorth(X::TTtensor[,direction,full])\n\nOrthogonalize factor matrices of a tensor. Rewrite ttensor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.sibling",
    "page": "Docstrings",
    "title": "TensorToolbox.sibling",
    "category": "function",
    "text": "sibling(T,node)\n\nSibling of a node in a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.sthosvd",
    "page": "Docstrings",
    "title": "TensorToolbox.sthosvd",
    "category": "function",
    "text": "sthosvd(X,reqrank,p)\n\nSequentially truncated HOSVD of a tensor X of predifined rank and processing order p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.structure",
    "page": "Docstrings",
    "title": "TensorToolbox.structure",
    "category": "function",
    "text": "structure(T)\n\nFor each internal node of a given dimtree, returns its representation t, its left child and right child representations tl and tr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.subnodes",
    "page": "Docstrings",
    "title": "TensorToolbox.subnodes",
    "category": "function",
    "text": "subnodes(T,node)\n\nNodes in the subtree of a node in a dimtree T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.subtree",
    "page": "Docstrings",
    "title": "TensorToolbox.subtree",
    "category": "function",
    "text": "subtree(T,node)\n\nDimensional tree with the same structure as a subtree of a node in a dimtree T. See also: subnodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.tenmat",
    "page": "Docstrings",
    "title": "TensorToolbox.tenmat",
    "category": "function",
    "text": "tenmat(X,n)\ntenmat(X,row=[],col=[])\ntenmat(X::ttensor,n)\ntenmat(X::ktensor,n)\n\nMode-n matricization of a tensor or matricization by row and column vectors R and C.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.tkron",
    "page": "Docstrings",
    "title": "TensorToolbox.tkron",
    "category": "function",
    "text": "tkron(X,Y)\n\nKronecker product of two tensors X and Y. Direct generalization of Kronecker product of matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.tkrtv",
    "page": "Docstrings",
    "title": "TensorToolbox.tkrtv",
    "category": "function",
    "text": "tkrtv(A,B,v)\n\nTranspose Khatri-Rao product times vector: (A ⊙ᵀ B)v. If v is a matrix, multiply column by column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.tocell",
    "page": "Docstrings",
    "title": "TensorToolbox.tocell",
    "category": "function",
    "text": "tocell(X[,n])\n\nConverts ktensor X into MatrixCell. If n specified, absorb the weights into the nth factor matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.trten2mat",
    "page": "Docstrings",
    "title": "TensorToolbox.trten2mat",
    "category": "function",
    "text": "trten2mat(B::Array)\ntrten2mat(B::TensorCell)\n\nTransfer tensor to matrix. If transfer tensor is given as a tensor of order 3 and size (r1,r2,r3), reshape it into a matrix of size (r1r2,r3).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.trten2ten",
    "page": "Docstrings",
    "title": "TensorToolbox.trten2ten",
    "category": "function",
    "text": "trten2ten(B::Matrix,r1::Integer,r2::Integer)\ntrten2ten(B::MatrixCell,r1::Vector,r2::Vector)\n\nTransfer tensor to tensor. If transfer tensor is given as a matrix, reshape it into a tensor of order 3 and size r1×r2×r3, where r3=size(B,2).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.ttensor",
    "page": "Docstrings",
    "title": "TensorToolbox.ttensor",
    "category": "type",
    "text": "ttensor(cten,fmat)\n\nTensor in Tucker format defined by its core tensor and factor matrices. For ttensor X, X.isorth=true if factor matrices are othonormal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.ttm",
    "page": "Docstrings",
    "title": "TensorToolbox.ttm",
    "category": "function",
    "text": "ttm(X,M[,modes,t=\'n\'])\nttm(X::ttensor,M[,modes,t=\'n\'])\n\nTensor times matrix (n-mode product):  X x₁ M₁ x₂ M₂ x₃ ⋯ xₙ Mₙ Default modes: 1:length(M). If t=\'t\', transpose matrices from M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.ttt",
    "page": "Docstrings",
    "title": "TensorToolbox.ttt",
    "category": "function",
    "text": "ttv(X,Y)\n\nOuter product of two tensors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.ttv",
    "page": "Docstrings",
    "title": "TensorToolbox.ttv",
    "category": "function",
    "text": "ttv(X,V[,modes])\n\nTensor times vectors (n-mode product):  X x₁ V₁ x₂ V₂ x₃ ⋯ xₙ Vₙ. Default modes: 1:length(M).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TensorToolbox.uminus",
    "page": "Docstrings",
    "title": "TensorToolbox.uminus",
    "category": "function",
    "text": "uminus(X::ttensor)    uminus(X::ktensor)    uminus(X::htensor)\n\nUnary minus. Same as: (-1)*X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TensorToolbox.==TensorToolbox.MatrixCellTensorToolbox.TTrankTensorToolbox.TTsvdTensorToolbox.TTtensorTensorToolbox.TTtvTensorToolbox.TensorCellTensorToolbox.TensorToolboxTensorToolbox.VectorCellTensorToolbox.arrangeTensorToolbox.arrange!TensorToolbox.blockdiagTensorToolbox.catTensorToolbox.check_vector_inputTensorToolbox.childrenTensorToolbox.colspaceTensorToolbox.contractTensorToolbox.coresizeTensorToolbox.count_leavesTensorToolbox.cp_alsTensorToolbox.diagtTensorToolbox.dimsTensorToolbox.dimtreeTensorToolbox.dirsumTensorToolbox.displayTensorToolbox.dropdimsTensorToolbox.evalTensorToolbox.ewprodTensorToolbox.extractTensorToolbox.eyeTensorToolbox.fixsignsTensorToolbox.fixsigns!TensorToolbox.fullTensorToolbox.hadctenTensorToolbox.heightTensorToolbox.hosvdTensorToolbox.hosvd1TensorToolbox.hosvd2TensorToolbox.hosvd3TensorToolbox.hosvd4TensorToolbox.hrankTensorToolbox.htensorTensorToolbox.htruncTensorToolbox.includeTensorToolbox.innerprodTensorToolbox.is_leafTensorToolbox.is_leftTensorToolbox.is_rightTensorToolbox.isequalTensorToolbox.khatriraoTensorToolbox.krankTensorToolbox.kronTensorToolbox.krontkronTensorToolbox.krontmTensorToolbox.krontvTensorToolbox.krtvTensorToolbox.kten2TTTensorToolbox.ktensorTensorToolbox.lanczosTensorToolbox.lanczos_tridiagTensorToolbox.left_child_lengthTensorToolbox.lvlTensorToolbox.mattenTensorToolbox.mhadtmTensorToolbox.mhadtvTensorToolbox.minusTensorToolbox.mkrontmTensorToolbox.mkrontvTensorToolbox.mrankTensorToolbox.msvdvalsTensorToolbox.mtimesTensorToolbox.mtimes!TensorToolbox.mttkrpTensorToolbox.ncomponentsTensorToolbox.ndimsTensorToolbox.next_single_nodeTensorToolbox.neyeTensorToolbox.node2indTensorToolbox.nodes_on_lvlTensorToolbox.nonTensorToolbox.normTensorToolbox.normalizeTensorToolbox.normalize!TensorToolbox.nrankTensorToolbox.nvecsTensorToolbox.parentTensorToolbox.permutedimsTensorToolbox.plusTensorToolbox.positionsTensorToolbox.randTTtensorTensorToolbox.randhtensorTensorToolbox.randktensorTensorToolbox.randrangeTensorToolbox.randsvdTensorToolbox.randttensorTensorToolbox.redistributeTensorToolbox.redistribute!TensorToolbox.reorthTensorToolbox.reorth!TensorToolbox.showTensorToolbox.siblingTensorToolbox.sizeTensorToolbox.sthosvdTensorToolbox.structureTensorToolbox.subnodesTensorToolbox.subtreeTensorToolbox.tenmatTensorToolbox.tkronTensorToolbox.tkrtvTensorToolbox.tocellTensorToolbox.trten2matTensorToolbox.trten2tenTensorToolbox.ttensorTensorToolbox.ttmTensorToolbox.tttTensorToolbox.ttvTensorToolbox.uminus"
},

]}
