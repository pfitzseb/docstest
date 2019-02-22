var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#![logo](doc/logo2.png)-Matrix-Depot-1",
    "page": "Readme",
    "title": "(Image: logo) Matrix Depot",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)An extensible test matrix collection for Julia.Documentation\nRelease Notes\nMatrixDepotGive access to a wealth of sample and test matrices and accompanying data. A set of matrices is generated locally (with arguments controlling the special case). Another set is loaded from one of the publicly accessible matrix collections SuiteSparse Matrix Collection (formerly University of Florida Matrix Collection) and the Matrix Market Collection.Access is likeusing MatrixDepot\n\nA = matrixdepot(\"hilb\", 10) # locally generated hilbert matrix dimensions (10,10)\n\nA = (\"HB/1138_bus\")     # named matrix of the SuiteSparse Collectionormd = mdopen(\"*/bfly\")   # named matrix with some extra data\nA = md.A\nco = md.coord\ntx = md(\"Gname_10.txt\")or alsomd = mdopen(\"gravity\", 10, false) # localy generated example with rhs and solution\nA = md.A\nb = md.b\nx = md.x"
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "NOTE: If you use Windows, you need to install MinGW/MSYS or Cygwin in order to use the SuiteSparse sparse and MatrixMarket matrix collection interface.To install the release version, typejulia> Pkg.add(\"MatrixDepot\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Naming-1",
    "page": "Readme",
    "title": "Naming",
    "category": "section",
    "text": ""
},

{
    "location": "#Matrix-Names-1",
    "page": "Readme",
    "title": "Matrix Names",
    "category": "section",
    "text": "Every Matrix type has a unique name, which is a string of one of the forms:\"name\" - used for matrices, which are generated locally.\n\"dir/name\" - for all matrices of the SuiteSparse collection.\n\"dir/subdir/name\" - for all matrices of the MatrixMarket collection.The names are similar to relative path names, separated by a slash character.  The components of the name must not contain any of the characters \"/*[]\"."
},

{
    "location": "#Groups-1",
    "page": "Readme",
    "title": "Groups",
    "category": "section",
    "text": "a set of matrices may be assigned to predefined or user-defined groups. The group names are represented as Julia symbols in the form :symmetric. The group names are therefore restricted to valid Julia identifiers, that means start with a letter and contain only letters, digits, and \'_\'."
},

{
    "location": "#Numeric-Identifiers-1",
    "page": "Readme",
    "title": "Numeric Identifiers",
    "category": "section",
    "text": "Every matrix has a numeric identifier, which is unique for its area:builtin(id) - one of the built-in matrix generators - currently id ∈ 1:59.user(id) - a user-defined matrix generator - starting with 1.\nsp(id) - one of the SuiteSparse collection. The integer ids are the\'official\' ident numbers assigned by the collection. Currently id ∈ 1:3000.mm(id) - one of the MatrixMarket collection. Here id follows the orderingof the index file of the collection."
},

{
    "location": "#Sets-of-Matrix-Names-Pattern-1",
    "page": "Readme",
    "title": "Sets of Matrix Names - Pattern",
    "category": "section",
    "text": "For some functions it makes sense to have lists of matrix names to operate on, for example to select a set matrices with certain properties. These sets are descibed by \'Patterns\', which are applied to matrix names and also to other matrix properties.The following pattern types are supported:\"name\" - a string matching exactly a matrix name\n\"shell-pattern\" - a string with shell wildcards \'?\', \'*\', \"[...]\" included.\nr\"egular expression\" - a regular expression to match the matrix name. \n:group - one of the defined group names; match all matrices in the group\nqualified numeric identifiers - examples builtin(10), sp(1:5, 7), mm(1), sp(:)\npredicate_function - the name of a predefined or user-defined boolean function of the internal data type MatrixData. Example: issymmetric.\nabstract vector of sub-patterns - OR - any of the sub-pattern matches\ntuple of sub-patterns - AND - all of the sub-patterns match\n~pattern - negation of a pattern the \\neg - operator ~ may be applied to all patternsTo express OR and AND, the binary operators | and & and ( / ) are preferred.Examples:    \"gravity\" | \"HB/*\" & ~(ishermitian & iscomplex) & ~sp(20:30)The set of all known matrices can be expressed as empty tuple (). In a shell- pattern the double ** matches also slash characters, in contrast to the single *.A convenient form of a predicate-generator is    @pred(expression)where expression is a valid Julia boolean expression, which may access all  properties of MatrixData as literal variable names.Examples:@pred(author == \"J. Brown\") is translated to: d -> :author in propertynames(d) && d.author == \"J. Brown\"@pred(500_000 <= n * m < 1_000_000) restricts the size of matched matrices.@pred(10^4 <= n <= 2*10^4 && n == m && nnz / n > 10 ) in average more than 10 entries per row There is s set of predefined predicate functions including: (issymmetric, ishermitian, isgeneral, isskew, isreal, iscomplex, isboolean, islocal, isremote, isloaded, isunloaded, isbuiltin, isuser, issparse)Special predicate generators keyword(word...) and hasdata(symbol...) allow to support keyword-search and check for the existence of meta-data. For example: hasdata(:x) & ~keyword(\"fluid\" provides solution (x) and does not mention \"fluid\". "
},

{
    "location": "#Accessing-Data-1",
    "page": "Readme",
    "title": "Accessing Data",
    "category": "section",
    "text": ""
},

{
    "location": "#Listing-matrices-with-certain-properties-1",
    "page": "Readme",
    "title": "Listing matrices with certain properties",
    "category": "section",
    "text": "mdlist(pattern) # array of matrix names according to pattern\nlistdata(pattern) # array of `MatrixData`objects according to pattern\nlistnames(pattern) # MD-formatted listing of all names according to pattern\nlistdir(\"*//*\") # MD-formatted -  group over part before `//` - count matching\nlistgroups(:groupname) # list all matrices in group of that name"
},

{
    "location": "#Information-about-matrices-1",
    "page": "Readme",
    "title": "Information about matrices",
    "category": "section",
    "text": "mdinfo() # overview over database\nmdinfo(pattern) # individual documentation about matrix(es) matching pattern"
},

{
    "location": "#Generating-a-matrix-1",
    "page": "Readme",
    "title": "Generating a matrix",
    "category": "section",
    "text": "A = matrixdepot(\"kahan\", 10) generates a matrix using one of the buit-in generatorsmd = mdopen(\"kahan\", 10) returns a handle md; matrix can be obtained by A = md.A"
},

{
    "location": "#Accessing-Meta-Data-1",
    "page": "Readme",
    "title": "Accessing Meta-Data",
    "category": "section",
    "text": "In general the first form is preferrable, if only the pure matrix is required. For remote collections no arguments are used.The second form allows to access all types of \'meta-data\', which may be available for some local or remote matrices.Examples:md = mdopen(\"spikes\", 5, false); A = md.A; b = md.b; x = md.x  md = mdopen(\"Rommes/bips07_1998\"); A = md.A; v = md.iv; title = md.data.title;  nodenames = md.(\"nodename.txt\")The last example shows, how to access textual meta-data, when the name contains Julia non-word characters. Also if the metadata-name is stored in a varaible,  the last form has to be used.meta = metasymbols(md)[2]; sec_matrix = md.(meta)The function metasymbols returns a list of all symbols denoting metadata provided by md. Wether expressed as symbols or strings does not matter.The system function propertynames(md) returns all data of md. That includes  size information and metadata.propertynames(md.data) gives an overview about all attributes of the data::MatrixData, which can for example be used in the @pred definitions."
},

{
    "location": "#Backoffice-Jobs-1",
    "page": "Readme",
    "title": "Backoffice Jobs",
    "category": "section",
    "text": "The remote data are originally stored at the remote web-site of one of the  matrix collections. Before they are presented to the user, they are downloaded to local disk storage, which serves as a permanent cache.The occasional user needs not bother about downloads, because that is done in the background if matrix files are missing on the local disk.The same is true for the data required by mdinfo(pattern). Actually these are stored in separate files if the full matrix files (which may be huge) are not yet loaded."
},

{
    "location": "#Bulk-Downloads-1",
    "page": "Readme",
    "title": "Bulk Downloads",
    "category": "section",
    "text": ""
},

{
    "location": "#Load-Header-Data-1",
    "page": "Readme",
    "title": "Load Header Data",
    "category": "section",
    "text": "A download job to transmit a subset of remote matrix files may be started to load header data for all files. Header data always include the matrix type according to the matrix-market-format and the size values m row-number, n = columns-number, and dnz number of stored data of the main sparse matrix.MatrixDepot.loadinfo(pattern) where pattern defines the subset.That is possible for the SuiteSparse collection and the NIST MatrixMarket collection. The patterns can always refer to matrix names and id numbers. In the case of SuiteSparse collection, also the metadata \"date\", \"kind\", \"m\", \"n\", \"nnz\" are available and can be used, before individual matrix data have been loaded. They are contained in the index file. For MatrixMarket collection, patterns are restricted to names and id numbers.In general it would be possible to loadinfo(\"**\") to load all header data. That would last maybe an hour and generate some traffic for the remote sites. Nevertheless it is not necessary to do so, if you don\'t need the header data for the following task."
},

{
    "location": "#Load-Complete-Data-Files-1",
    "page": "Readme",
    "title": "Load Complete Data Files",
    "category": "section",
    "text": "MatrixDepot.load(pattern) loads all data files for the patterns. Patterns can only refer to attributes, which are already available. In the case of SuiteSparse that includes the size info \"date\", \"kind\", \"m\", \"n\", and \"nnz\" and all additional attributes loaded in the previous step, which include \"author\", \"title\", \"notes\", and keywords. In the case of MatrixMarket you can only refer to \"m\", \"n\", and \"dnz\", if previously loaded with the header data.Please do not: MatrixDepot.load(\"**\"). That would require some day(s) to finish and include some really big data files (~100GB), which could be more than your disks can hold.Make a reasonable selection, before you start a bulk download. Local and already loaded matrices are skipped automatically.Example:MatrixDepot.load(sp(:) & @pred(nnz < 100_000)) to download only problems with given number of stored entries in the main matrix."
},

{
    "location": "#Sample-Session-1",
    "page": "Readme",
    "title": "Sample Session",
    "category": "section",
    "text": "To see an overview of the matrices in the collection, typejulia> using MatrixDepot\njulia> mdinfo()\n  Currently loaded Matrices\n  –––––––––––––––––––––––––––\n\nbuiltin(#)                                                                                                                \n–––––––––– ––––––––––– ––––––––––– ––––––––––– –––––––––– –––––––––––– ––––––––––– ––––––––––– ––––––––––––– ––––––––––––\n1 baart    7 circul    13 fiedler  19 gravity  25 invhilb 31 magic     37 parter   43 randcorr 49 shaw       55 ursell\n2 binomial 8 clement   14 forsythe 20 grcar    26 invol   32 minij     38 pascal   44 rando    50 smallworld 56 vand\n3 blur     9 companion 15 foxgood  21 hadamard 27 kahan   33 moler     39 pei      45 randsvd  51 spikes     57 wathen\n4 cauchy   10 deriv2   16 frank    22 hankel   28 kms     34 neumann   40 phillips 46 rohess   52 toeplitz   58 wilkinson\n5 chebspec 11 dingdong 17 gilbert  23 heat     29 lehmer  35 oscillate 41 poisson  47 rosser   53 tridiag    59 wing\n6 chow     12 erdrey   18 golub    24 hilb     30 lotkin  36 parallax  42 prolate  48 sampling 54 triw\n\nuser(#)\n–––––––––\n1 randsym\n\nGroups                                                                                      \n–––––– ––––––– ––––– –––– ––––– ––––– ––––––– ––––––– –––––– –––––– ––––––– –––––– –––––––––\nall    builtin local user eigen graph illcond inverse posdef random regprob sparse symmetric\n\nSuite Sparse of\n–––––––––––– ––––\n2770         2833\n\nMatrixMarket of \n–––––––––––– –––\n488          498\nWe can generate a 4-by-4 Hilbert matrix by typingjulia> matrixdepot(\"hilb\", 4)\n4x4 Array{Float64,2}:\n 1.0       0.5       0.333333  0.25    \n 0.5       0.333333  0.25      0.2     \n 0.333333  0.25      0.2       0.166667\n 0.25      0.2       0.166667  0.142857We can type the matrix name to get documentation about the matrix.julia> mdinfo(\"hilb\")\n     Hilbert matrix\n    ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡\n\n  The Hilbert matrix has (i,j) element 1/(i+j-1). It is notorious for being\n  ill conditioned. It is symmetric positive definite and totally positive.\n\n  Input options:\n\n    •  [type,] dim: the dimension of the matrix;\n\n    •  [type,] row_dim, col_dim: the row and column dimensions.\n\n  Groups: [\"inverse\", \"ill-cond\", \"symmetric\", \"pos-def\"]\n\n  References:\n\n  M. D. Choi, Tricks or treats with the Hilbert matrix, Amer. Math. Monthly,\n  90 (1983), pp. 301-312.\n\n  N. J. Higham, Accuracy and Stability of Numerical Algorithms, second\n  edition, Society for Industrial and Applied Mathematics, Philadelphia, PA,\n  USA, 2002; sec. 28.1.We can also specify the data type for locally generated matrices.julia> matrixdepot(\"hilb\", Float16, 5, 3)\n5x3 Array{Float16,2}:\n 1.0      0.5      0.33325\n 0.5      0.33325  0.25   \n 0.33325  0.25     0.19995\n 0.25     0.19995  0.16663\n 0.19995  0.16663  0.14282\n\njulia> matrixdepot(\"hilb\", Rational{Int}, 4)\n4x4 Array{Rational{T<:Integer},2}:\n 1//1  1//2  1//3  1//4\n 1//2  1//3  1//4  1//5\n 1//3  1//4  1//5  1//6\n 1//4  1//5  1//6  1//7Matrices can be accessed by a variety of patterns and composed patterns. Integer numbers i refer to the ident numbers in sp(i), mm(i), builtin(i), user(i). Here sp ... denote the supported matrix collections SuiteSparse (formerly UFL), Matrix Market, built-in, user-defined.julia> mdlist(sp(1))    # here sp(1) is the ident number of the SuiteSparse collection\nlist(1)\n–––––––––––\nHB/1138_bus\n\njulia> listnames(builtin(1, 5:10))    # the internal numbering of the builtin-functions\nlist(7)\n––––––– –––––––– –––– –––––– ––––––– ––––––––– ––––––\nbaart   chebspec chow circul clement companion deriv2\n\njulia> mdlist(builtin(1:4, 6, 10:15) | user(1:10) )\n12-element Array{String,1}:\n \"baart\"\n \"binomial\"\n \"blur\"\n \"cauchy\"\n \"chow\"\n \"deriv2\"\n \"dingdong\"\n \"erdrey\"\n \"fiedler\"\n \"forsythe\"\n \"foxgood\"\n \"randsym\"While the listnames command renders the output as markdown table, the internal mdlist produces an array of valid matrix names.We can type a group name to see all the matrices in that group. Group names are always written as symbols to distinguish them form matrix names and pattern, which are always strings.julia> listnames(:symmetric)\nlist(22)\n–––––––– –––––––– ––––––– –––––– ––––––––– –––––––– ––––––– –––––––––\ncauchy   dingdong hilb    lehmer oscillate poisson  randsym wilkinson\ncircul   fiedler  invhilb minij  pascal    prolate  tridiag\nclement  hankel   kms     moler  pei       randcorr wathen\n"
},

{
    "location": "#Extend-Matrix-Depot-1",
    "page": "Readme",
    "title": "Extend Matrix Depot",
    "category": "section",
    "text": "It is possible to extend the builtin local problems with user defined generators and groups. We can add new matrix generators and define new groups of matrices."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Weijian Zhang and Nicholas J. Higham, \"Matrix Depot: An Extensible Test Matrix Collection for Julia\", PeerJ Comput. Sci., 2:e58 (2016), [pdf]\nNicholas J. Higham, \"Algorithm 694, A Collection of Test Matrices in MATLAB\", ACM Trans. Math. Software, vol. 17. (1991), pp 289-305 [pdf] [doi]\nT.A. Davis and Y. Hu, \"The University of Florida Sparse Matrix Collection\", ACM Transaction on Mathematical Software, vol. 38, Issue 1, (2011), pp 1:1-1:25 [pdf]\nR.F. Boisvert, R. Pozo, K. A. Remington, R. F. Barrett, & J. Dongarra, \" Matrix Market: a web resource for test matrix collections\", Quality of Numerical Software (1996) (pp. 125-137). [pdf]\nPer Christian Hansen, \"Test Matrices for Regularization Methods\", SIAM Journal on Scientific Computing, vol. 16, 2, (1995) pp.506-512. [pdf] [doi]"
},

{
    "location": "autodocs/#MatrixDepot.@addgroup",
    "page": "Docstrings",
    "title": "MatrixDepot.@addgroup",
    "category": "macro",
    "text": "add a group to Matrix Depot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.@modifygroup",
    "page": "Docstrings",
    "title": "MatrixDepot.@modifygroup",
    "category": "macro",
    "text": "add or replace group in Matrix Depot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.@pred",
    "page": "Docstrings",
    "title": "MatrixDepot.@pred",
    "category": "macro",
    "text": "@pred(expression)\n\nGenerate a predicate function using the expression as function body. Variable names within the expression, which are properties of RemoteMatrixData (e.g. title, m, nnz) are used to access data.title etc. Other variable names, are used from the outer scope.\n\nexample: maxnnz = 1_000; listnames(@pred(n <= maxnnz)) would produce a list of all data with less than maxnnz structural non-zeros.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.@rmgroup",
    "page": "Docstrings",
    "title": "MatrixDepot.@rmgroup",
    "category": "macro",
    "text": "remove an added group from Matrix Depot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.MATRIXCLASS",
    "page": "Docstrings",
    "title": "MatrixDepot.MATRIXCLASS",
    "category": "constant",
    "text": "predefined matrix classes (for the generated functions)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.MATRIXDICT",
    "page": "Docstrings",
    "title": "MatrixDepot.MATRIXDICT",
    "category": "constant",
    "text": "Associate names with matrix-generating functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.MATRIX_DB",
    "page": "Docstrings",
    "title": "MatrixDepot.MATRIX_DB",
    "category": "constant",
    "text": "The place to store all matrix data in process\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.MatrixDepot",
    "page": "Docstrings",
    "title": "MatrixDepot.MatrixDepot",
    "category": "module",
    "text": "julia     MatrixDepot\n\nGive access to a wealth of sample and test matrices and accompanying data. A set of matrices is generated locally (with arguments controlling the special case). Another set is loaded from one of the publicly accessible matrix collections SuiteSparse Matrix Collection (formerly University of Florida Matrix Collection) and the Matrix Market Collection.\n\nAccess is like\n\nusing MatrixDepot\n\nA = matrixdepot(\"hilb\", 10) # locally generated hilbert matrix dimensions (10,10)\n\nA = matrixdepot(\"HB/1138_bus\")     # named matrix of the SuiteSparse Collection\nA = matrixdepot(sp(1))             # same matrix using numerical id\nA = matrixdepot(\"Harwell*/*/1138_bus\") # matrix from the Matrix Market Collection \n\nmd = mdopen(\"*/bfly\")   # named matrix with some extra data\nA = md.A\nco = md.coord\ntx = md(\"Gname_10.txt\")\n\nmd = mdopen(\"gravity\", 10, false) # localy generated example with rhs and solution\nA = md.A\nb = md.b\nx = md.x\n\ncommands:\n\nmdinfo, listdir, listgroups, matrixdepot, mdopen, listdata, mdlist,\nmetasymbols, @addgroup, @modifygroup, @rmgroup.\n\nselector patterns:\n\nstrings, string-patterns (using \"*\", \"?\", \"/\", \"**\"), regular expressions: for names\nbuiltin(42), user(3,5), sp(10:11,6,2833), mm(1): to access by integer id\n\npredicate patterns:\n\nisboolean, isinteger, isreal, iscomplex\nisgeneral, issymmetric, ishermitian, isskew\nisbuiltin, isuser, islocal, isremote, isloaded, isunloaded\nkeyword(string expression), logical, hasdata(symbol), @pred(expression)\n\nsee also: \"logical\" for logical combinations of all kinds of patterns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.MatrixDescriptor",
    "page": "Docstrings",
    "title": "MatrixDepot.MatrixDescriptor",
    "category": "type",
    "text": "MatrixDescriptor{T<:MatrixData}\n\nAccess object which is created by a call to mdopen(::Pattern). Several user functions allow to access data according to the unique pattern. Keeps data cache for exactly the same calling arguments (in the case of generated objects). For remote objects the data cache keeps all available metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.USERMATRIXDICT",
    "page": "Docstrings",
    "title": "MatrixDepot.USERMATRIXDICT",
    "category": "constant",
    "text": "user-defined matrix generators\nto be populated with `include_generator` in user source code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.aliasname",
    "page": "Docstrings",
    "title": "MatrixDepot.aliasname",
    "category": "function",
    "text": "aliasname(data::MatrixData)\naliasname(Type{<:MatrixData, id::Integer)\n\nreturn alias name derived from integer id\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.baart",
    "page": "Docstrings",
    "title": "MatrixDepot.baart",
    "category": "function",
    "text": "Fredholm Integral Equation of the First Kind\n\nInput options:\n\n[type,] dim, [matrixonly]: the dimenstion of the matrix is dim.   If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated   (matrixonly = true by default).\n\nGroups: [\"regprob\"]\n\nReferences:\n\nM. L. Baart, The use of auto-correlation for     pesudo-rank determination in noisy ill-conditioned linear-squares     problems, IMA, J. Numer. Anal. 2 (1982), 241-247.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.binomialm",
    "page": "Docstrings",
    "title": "MatrixDepot.binomialm",
    "category": "function",
    "text": "Binomial Matrix\n\nThe matrix is a multiple of an involutory matrix.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.blur",
    "page": "Docstrings",
    "title": "MatrixDepot.blur",
    "category": "function",
    "text": "Image Deblurring Test Problem\n\nThe generated matrix A is an n*n-by-n*n sparse, symmetric,            doubly block Toeplitz matrix that models blurring of an n-by-n            image by a Gaussian point spread function.\n\nInput options:\n\n[type,] dim, band, σ, [matrixonly]: the dimension of the matrix         is dim^2. band is the half-bandwidth, only matrix elements within         a distance band-1 from the diagonal are nonzero. σ controls the         width of the Gaussin point spread function. The larger the σ, the         wider the function and the more ill posed the problem.         If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated             (matrixonly = true by default).\n[type,] dim, [matrixonly]: band = 3, σ = 0.7.\n\nGroups: [\"regprob\", \"sparse\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.buildnametable",
    "page": "Docstrings",
    "title": "MatrixDepot.buildnametable",
    "category": "function",
    "text": "format output list to multi- column table form adapted to display width.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.cauchy",
    "page": "Docstrings",
    "title": "MatrixDepot.cauchy",
    "category": "function",
    "text": "Cauchy Matrix\n\nGiven two vectors x and y, the (i,j) entry of the Cauchy matrix is 1/(x[i]+y[j]).\n\nInput options:\n\n[type,] x, y: two vectors.\n[type,] x: a vector. y defaults to x.\n[type,] dim: the dimension of the matrix. x and y default to  [1:dim;].\n\nGroups: [\"inverse\", \"illcond\", \"symmetric\", \"posdef\"]\n\nReferences:\n\nN. J. Higham, Accuracy and Stability of Numerical Algorithms, second edition, Society for Industrial and Applied Mathematics, Philadelphia, PA, USA, 2002; sec. 28.1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.chebspec",
    "page": "Docstrings",
    "title": "MatrixDepot.chebspec",
    "category": "function",
    "text": "Chebyshev Spectral Differentiation Matrix\n\nIf k = 0,the generated matrix is nilpotent and a vector with         all one entries is a null vector. If k = 1, the generated         matrix is nonsingular and well-conditioned. Its eigenvalues         have negative real parts.\n\nInput options:\n\n[type,] dim, k: dim is the dimension of the matrix and       k = 0 or 1.\n[type,] dim: k=0.\n\nGroups: [\"eigen\"]\n\nReferences:\n\nL. N. Trefethen and M. R. Trummer, An instability         phenomenon in spectral methods, SIAM J. Numer. Anal., 24 (1987), pp. 1008-1023.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.check_symbols",
    "page": "Docstrings",
    "title": "MatrixDepot.check_symbols",
    "category": "function",
    "text": "check_symbols(p::Pattern)\n\nthrow ArgumentError if pattern uses unknown symbol as a group name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.chow",
    "page": "Docstrings",
    "title": "MatrixDepot.chow",
    "category": "function",
    "text": "Chow Matrix\n\nThe Chow matrix is a singular Toeplitz lower Hessenberg matrix.\n\nInput options:\n\n[type,] dim, alpha, delta: dim is dimension of the matrix.           alpha, delta are scalars such that A[i,i] = alpha + delta and           A[i,j] = alpha^(i + 1 -j) for j + 1 <= i.\n[type,] dim: alpha = 1, delta = 0.\n\nGroups: [\"eigen\"]\n\nReferences:\n\nT. S. Chow, A class of Hessenberg matrices with known                 eigenvalues and inverses, SIAM Review, 11 (1969), pp. 391-395.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.circul",
    "page": "Docstrings",
    "title": "MatrixDepot.circul",
    "category": "function",
    "text": "Circulant Matrix\n\nA circulant matrix has the property that each row is obtained by cyclically permuting the entries of the previous row one step forward.\n\nInput options:\n\n[type,] vec, col_dim: a vector and the column dimension.\n[type,] vec: a vector.\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"symmetric\", \"posdef\", \"eigen\"]\n\nReferences:\n\nP. J. Davis, Circulant Matrices, John Wiley, 1977.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.clement",
    "page": "Docstrings",
    "title": "MatrixDepot.clement",
    "category": "function",
    "text": "Clement Matrix\n\nThe Clement matrix is a tridiagonal matrix with zero         diagonal entries. If k = 1, the matrix is symmetric.\n\nInput options:\n\n[type,] dim, k: dim is the dimension of the matrix.       If k = 0, the matrix is of type Tridiagonal.       If k = 1, the matrix is of type SymTridiagonal.\n[type,] dim: k = 0.\n\nGroups: [\"inverse\", \"symmetric\", \"eigen\"]\n\nReferences:\n\nP. A. Clement, A class of triple-diagonal         matrices for test purposes, SIAM Review, 1 (1959), pp. 50-52.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.colval",
    "page": "Docstrings",
    "title": "MatrixDepot.colval",
    "category": "function",
    "text": "colval(A)\n\nreconstruct colum-indices from colptr of SparseMatrixCSC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.companion",
    "page": "Docstrings",
    "title": "MatrixDepot.companion",
    "category": "function",
    "text": "Companion Matrix\n\nThe companion matrix to a monic polynomial     a(x) = a_0 + a_1x + ... + a_{n-1}x^{n-1} + x^n     is the n-by-n matrix with ones on the subdiagonal and     the last column given by the coefficients of a(x).\n\nInput options:\n\n[type,] vec: vec is a vector of coefficients.\n[type,] dim: vec = [1:dim;]. dim is the dimension of the matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.deriv2",
    "page": "Docstrings",
    "title": "MatrixDepot.deriv2",
    "category": "function",
    "text": "Computation of the Second Derivative\n\nA classical test problem for regularization algorithms:     This is a mildly ill-posed problem. It is a discretization     of a first kind Fredholm integral equation whose kernel K     is the Green\'s function for the second derivative.\n\nInput options:\n\n[type,] dim, example, [matrixonly]: the dimension of the       matrix is dim.  One choose between between the following right-hand       g and solution f:\n\n    example = 1 gives g(s) = (s^3 - s)/6, f(t) = t.\n\n    example = 2 gives g(s) = exp(s) + (1 -e)s - 1, f(t) = exp(t)\n\n    example = 3 gives  g(s) = | (4s^3 - 3s)/24,  s < 0.5\n                              | (-4s^3 + 12s^2 - 9s + 1)/24, s>= 0.5\n                       f(t) = | t, t < 0.5\n                       f(t) = | 1- t, t >= 0.5.\n\n    If `matrixonly = false`, the matrix A and vectors b and x in the linear system Ax = b will be\n    generated (`matrixonly = true` by default).\n\n[type,] dim, [matrixonly]: example = 1.\n\nGroups: [\"regprob\"]\n\nReferences:\n\nP. C. Hansen, Regularization tools: A MATLAB pacakge for     analysis and solution of discrete ill-posed problems.     Numerical Algorithms, 6(1994), pp.1-35\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.dingdong",
    "page": "Docstrings",
    "title": "MatrixDepot.dingdong",
    "category": "function",
    "text": "Dingdong Matrix\n\nThe Dingdong matrix is a symmetric Hankel matrix invented by DR. F. N. Ris of IBM, Thomas J Watson Research Centre. The eigenvalues cluster around π/2 and -π/2.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"symmetric\", \"eigen\"]\n\nReferences:\n\nJ. C. Nash, Compact Numerical Methods for Computers: Linear Algebra and Function Minimisation, second edition, Adam Hilger, Bristol, 1990 (Appendix 1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.downloadindices",
    "page": "Docstrings",
    "title": "MatrixDepot.downloadindices",
    "category": "function",
    "text": "MatrixDepot.downloadindices(db)\n\ndownload html files and store matrix data in db. additionally generate aliases for local and loaded matrices. Serialize db object in file db.data. If a file db.data is present in the data directory, deserialize the data instead of downloading and collection data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.erdrey",
    "page": "Docstrings",
    "title": "MatrixDepot.erdrey",
    "category": "function",
    "text": "Erdos-Renyi Random Graph\n\nGenerate an adjacency matrix of an Edros-Renyi random graph: an undirected graph is chosen uniformly at random from the set of all symmetric graphs with n nodes and m edges.\n\nInput options:\n\n[type,] n, m: the dimension of the matrix is n. The number of   1\'s in the matrix is 2*m.\n[type,] n: m = ceil(Int, n*log(n)/2).\n\nGroups: [\"sparse\", \"graph\"]\n\nReferences:\n\nP. Erdos and A. Renyi, On Random Graphs, Publ. Math. Debrecen, 6, 1959, pp. 290-297\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.fiedler",
    "page": "Docstrings",
    "title": "MatrixDepot.fiedler",
    "category": "function",
    "text": "Fiedler Matrix\n\nThe Fiedler matrix is symmetric matrix with a dominant       positive eigenvalue and all the other eigenvalues are negative.\n\nInput options:\n\n[type,] vec: a vector.\n[type,] dim: dim is the dimension of the matrix. vec=[1:dim;].\n\n*Groups: *[\"inverse\", \"symmetric\", \"eigen\"]\n\nReferences:\n\nG. Szego, Solution to problem 3705, Amer. Math.             Monthly, 43 (1936), pp. 246-259.\n\nJ. Todd, Basic Numerical Mathematics, Vol. 2: Numerical Algebra,             Birkhauser, Basel, and Academic Press, New York, 1977, p. 159.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.flatten_pattern",
    "page": "Docstrings",
    "title": "MatrixDepot.flatten_pattern",
    "category": "function",
    "text": "flattenPattern(p::Pattern)\n\nreturn the vector of all elementary patterns, contained in the pattern.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.fname",
    "page": "Docstrings",
    "title": "MatrixDepot.fname",
    "category": "function",
    "text": "return the name of the function f as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.forsythe",
    "page": "Docstrings",
    "title": "MatrixDepot.forsythe",
    "category": "function",
    "text": "Forsythe Matrix\n\nThe Forsythe matrix is a n-by-n perturbed Jordan block. This generator is adapted from N. J. Higham\'s Test Matrix Toolbox.\n\nInput options:\n\n[type,] dim, alpha, lambda: dim is the dimension of the matrix.   alpha and lambda are scalars.\n[type,] dim: alpha = sqrt(eps(type)) and lambda = 0.\n\nGroups: [\"inverse\", \"illcond\", \"eigen\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.foxgood",
    "page": "Docstrings",
    "title": "MatrixDepot.foxgood",
    "category": "function",
    "text": "Severely Ill-posed Problem Suggested by Fox & Goodwin\n\nThis is a model problem discretized by simple quadrature, which does not satifiy the discrete Picard condition for the small singular values.\n\nInput options:\n\n[type,] dim, [matrixonly]: dim is the dimension of the matrix.   If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated   (matrixonly = true by default).\n\nGroups: [\"regprob\"]\n\nReferences:\n\nC. T. H. Baker, The Numerical Treatment of Integral     Equations, Clarendon Press, Oxford, 1977, p. 665.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.frank",
    "page": "Docstrings",
    "title": "MatrixDepot.frank",
    "category": "function",
    "text": "Frank Matrix\n\nThe Frank matrix is an upper Hessenberg matrix with determinant 1. The eigenvalues are real, positive and very ill conditioned.\n\nInput options:\n\n[type,] dim, k: dim is the dimension of the matrix, k = 0 or 1.   If k = 1 the matrix reflect about the anti-diagonal.\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"illcond\", \"eigen\"]\n\nReferences:\n\nW. L. Frank, Computing eigenvalues of complex matrices     by determinant evaluation and by methods of Danilewski and Wielandt,     J. Soc. Indust. Appl. Math., 6 (1958), pp. 378-392 (see pp. 385, 388).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.gilbert",
    "page": "Docstrings",
    "title": "MatrixDepot.gilbert",
    "category": "function",
    "text": "Gilbert Random Graph\n\nGenerate an adjecency matrix of a Gilbert random graph: an undirected graph with pairs of nodes are connected with indepdent probability p.\n\nInput options:\n\n[type,] n, p: the dimension of the matrix is n and the probability that any two nodes   are connected is p.\n[type,] n: p = log(n)/n.\n\nGroups: [\"sparse\", \"graph\"]\n\nReferences:\n\nE.N. Gilbert, Random Graphs, Ann. Math. Statist., 30, (1959) pp. 1141-1144.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.golub",
    "page": "Docstrings",
    "title": "MatrixDepot.golub",
    "category": "function",
    "text": "Golub Matrix\n\nGolub matrix is the product of two random unit lower and upper     triangular matrices respectively. LU factorization without pivoting     fails to reveal that such matrices are badly conditioned.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nReferences:\n\nD. Viswanath and N. Trefethen. Condition Numbers of     Random Triangular Matrices, SIAM J. Matrix Anal. Appl. 19, 564-581,     1998.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.gravity",
    "page": "Docstrings",
    "title": "MatrixDepot.gravity",
    "category": "function",
    "text": "One-dimensional Gravity Surverying Problem\n\nDiscretization of a 1-D model problem in gravity surveying, in     which a mass distribution f(t) is located at depth d, while the     vertical component of the gravity field g(s) is measured at the     surface.\n\nInput options:\n\n[type,] dim, example, a, b, d, [matrixonly]: dim is the dimension       of the matrix. Three examples are implemented.\n\n   (a) example = 1 gives f(t) = sin(π*t) + 0.5*sin(2*π*t).\n\n   (b) example = 2 gives f(t) = piecewise linear function.\n\n   (c) example = 3 gives f(t) = piecewise constant function.\n\n   The t integration interval is fixed to [0, 1], while the s\n   integration interval [a, b] can be specified by the user.\n   The parameter d is the depth at which the magnetic deposit is\n   located. The larger the d, the faster the decay of the singular values.\n\n   If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated\n   (matrixonly = true by default).\n\n[type,] dim, example, [matrixonly]: a = 0, b = 1, d = 0.25;\n[type,] dim, [matrixonly]: example = 1, a = 0, b = 1, d = 0.25.\n\nGroups: [\"regprob\"]\n\nReferences:\n\nG. M. Wing and J. D. Zahrt, A Primer on Integral Equations of the First Kind, Society for Industrial and Applied Mathematics, Philadelphia, 1991, p. 17.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.grcar",
    "page": "Docstrings",
    "title": "MatrixDepot.grcar",
    "category": "function",
    "text": "Grcar Matrix\n\nThe Grcar matrix is a Toeplitz matrix with sensitive eigenvalues.\n\nInput options:\n\n[type,] dim, k: dim is the dimension of the matrix and   k is the number of superdiagonals.\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"eigen\"]\n\nReferences:\n\nJ. F. Grcar, Operator coefficient methods     for linear equations, Report SAND89-8691, Sandia National     Laboratories, Albuquerque, New Mexico, 1989 (Appendix 2).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.hadamard",
    "page": "Docstrings",
    "title": "MatrixDepot.hadamard",
    "category": "function",
    "text": "Hadamard Matrix\n\nThe Hadamard matrix is a square matrix whose entries are 1 or -1. It was named after Jacques Hadamard. The rows of a Hadamard matrix are orthogonal.\n\nInput options:\n\n[type,] dim: the dimension of the matrix, dim is a power of 2.\n\nGroups: [\"inverse\", \"orthogonal\", \"eigen\"]\n\nReferences:\n\nS. W. Golomb and L. D. Baumert, The search for Hadamard matrices, Amer. Math. Monthly, 70 (1963) pp. 12-17\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.hankel",
    "page": "Docstrings",
    "title": "MatrixDepot.hankel",
    "category": "function",
    "text": "Hankel Matrix\n\nA Hankel matrix is a matrix that is symmetric and constant                 across the anti-diagonals.\n\nInput options:\n\n[type,] vc, vr: vc and vc are the first column and last row of the      matrix. If the last element of vc differs from the first element               of vr, the last element of rc prevails.\n[type,] v: vc = vr = v.\n[type,] dim: dim is the dimension of the matrix. v = [1:dim;].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.hasdata",
    "page": "Docstrings",
    "title": "MatrixDepot.hasdata",
    "category": "function",
    "text": "hasdata(meta::Union{Symbol,Tuple,Vector})\n\nPredicate function checks, if matrix data have metadata symbol meta. Tuples and Vectors are interpreted as AND resp. OR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.heat",
    "page": "Docstrings",
    "title": "MatrixDepot.heat",
    "category": "function",
    "text": "Inverse Heat Equation\n\nInput options:\n\n[type,] dim, κ, [matrixonly]: dim is the dimension of the matrix and   dim must be even. κ controls the ill-conditioning of the matrix.   (κ = 5 gives a well-conditioned problem and κ = 1    gives an ill conditoned problem).   If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated   (matrixonly = true by default).\n[type,] n, [matrixonly]: κ = 1.\n\nGroups: [\"regprob\"]\n\nReferences:\n\nA. S. Carasso, Determining surface temperatures     from interior observations, SIAM J. Appl. Math. 42 (1982), 558-574.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.hilb",
    "page": "Docstrings",
    "title": "MatrixDepot.hilb",
    "category": "function",
    "text": "Hilbert Matrix\n\nThe Hilbert matrix has (i,j) element 1/(i+j-1). It is notorious for being ill conditioned. It is symmetric positive definite and totally positive.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n[type,] rowdim, coldim: the row and column dimensions.\n\nGroups: [\"inverse\", \"illcond\", \"symmetric\", \"posdef\"]\n\nReferences:\n\nM. D. Choi, Tricks or treats with the Hilbert matrix, Amer. Math. Monthly, 90 (1983), pp. 301-312.\n\nN. J. Higham, Accuracy and Stability of Numerical Algorithms, second edition, Society for Industrial and Applied Mathematics, Philadelphia, PA, USA, 2002; sec. 28.1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.ilaplace",
    "page": "Docstrings",
    "title": "MatrixDepot.ilaplace",
    "category": "function",
    "text": "Inverse Laplace Transformation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.invhilb",
    "page": "Docstrings",
    "title": "MatrixDepot.invhilb",
    "category": "function",
    "text": "Inverse of the Hilbert Matrix\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"inverse\", \"illcond\", \"symmetric\",\"posdef\"]\n\nReferences:\n\nM. D. Choi, Tricks or treats with the Hilbert matrix,     Amer. Math. Monthly, 90 (1983), pp. 301-312.\n\nN. J. Higham, Accuracy and Stability of Numerical Algorithms, second     edition, Society for Industrial and Applied Mathematics, Philadelphia, PA,     USA, 2002; sec. 28.1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.invol",
    "page": "Docstrings",
    "title": "MatrixDepot.invol",
    "category": "function",
    "text": "Involutory Matrix\n\nAn involutory matrix is a matrix that is its own inverse.\n\nInput options:\n\n[type,] dim: dim is the dimension of the matrix.\n\nGroups: [\"inverse\", \"illcond\", \"eigen\"]\n\nReferences:\n\nA. S. Householder and J. A. Carpenter, The         singular values of involutory and of idempotent matrices,         Numer. Math. 5 (1963), pp. 234-237.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.kahan",
    "page": "Docstrings",
    "title": "MatrixDepot.kahan",
    "category": "function",
    "text": "Kahan Matrix\n\nThe Kahan matrix is an upper trapezoidal matrix, i.e., the (i,j) element is equal to 0 if i > j. The useful range of     θ is 0 < θ < π. The diagonal is perturbed by     pert*eps()*diagm([n:-1:1;]).\n\nInput options:\n\n[type,] rowdim, coldim, θ, pert: rowdim and coldim are the row and column   dimensions of the matrix. θ and pert are scalars.\n[type,] dim, θ, pert: dim is the dimension of the matrix.\n[type,] dim: θ = 1.2, pert = 25.\n\nGroups: [\"inverse\", \"illcond\"]\n\nReferences:\n\nW. Kahan, Numerical linear algebra, Canadian Math.     Bulletin, 9 (1966), pp. 757-801.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.keyword",
    "page": "Docstrings",
    "title": "MatrixDepot.keyword",
    "category": "function",
    "text": "keyword(word::Union{AbstractString,Tuple,Vector})\n\nPredicate function checks, if word is contained in on to the textual metadata fields [:notes, :title, :kind, :author]. Tuples and Vectors are interpreted as AND resp. OR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.kms",
    "page": "Docstrings",
    "title": "MatrixDepot.kms",
    "category": "function",
    "text": "Kac-Murdock-Szego Toeplitz matrix\n\nInput options:\n\n[type,] dim, rho: dim is the dimension of the matrix, rho is a   scalar such that A[i,j] = rho^(abs(i-j)).\n[type,] dim: rho = 0.5.\n\nGroups: [\"inverse\", \"illcond\", \"symmetric\", \"posdef\"]\n\nReferences:\n\nW. F. Trench, Numerical solution of the eigenvalue     problem for Hermitian Toeplitz matrices, SIAM J. Matrix Analysis     and Appl., 10 (1989), pp. 135-146 (and see the references therein).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.lehmer",
    "page": "Docstrings",
    "title": "MatrixDepot.lehmer",
    "category": "function",
    "text": "Lehmer Matrix\n\nThe Lehmer matrix is a symmetric positive definite matrix.             It is totally nonnegative. The inverse is tridiagonal and             explicitly known\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"inverse\", \"symmetric\", \"posdef\"]\n\nReferences:\n\nM. Newman and J. Todd, The evaluation of             matrix inversion programs, J. Soc. Indust. Appl. Math.,             6 (1958), pp. 466-476.             Solutions to problem E710 (proposed by D.H. Lehmer): The inverse             of a matrix, Amer. Math. Monthly, 53 (1946), pp. 534-535.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.listdata",
    "page": "Docstrings",
    "title": "MatrixDepot.listdata",
    "category": "function",
    "text": "listdata([db,] p::Pattern)\n\nReturn an array of MatrixData objects according to matched patterns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.listdir",
    "page": "Docstrings",
    "title": "MatrixDepot.listdir",
    "category": "function",
    "text": "listdir([db,] p::AbstractString)\n\nlist directories and the number of matrices contained in them. get an overview of the count of names down directories. return a list with summary information for directories in matrix name space. The input argument is split into 2 patterns by the first double slash \"//\". The whole string (with multiple slashes reduced to single slashes) determines a subset of all matrix names. They are then grouped by the first pattern and for each different group value the number of names in the subset is counted. A final / is replaced by \"//**\".\n\nE.g.\n\nlistdir(\"/*\")     - count names without a /.\nlistdir(\"/k*\")    - count names without / starting with k*.\nlistdir(\"*//*\")   - count names with one directory part (sp-collection)\nlistdir(\"*/*//*\") - count names with two directory parts (mm-collection)\nlistdir(\"*//*/*\") - count names with two directory parts (mm-collection)\nlistdir(\"Har*//*/*\") - restrict to directories starting with \"Har\"\nlistdir(\"Har*/*//*\") - all subdirectoreis of the previous\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.listgroups",
    "page": "Docstrings",
    "title": "MatrixDepot.listgroups",
    "category": "function",
    "text": "listgroups()\n\nReturn a list of available groups (array of Symbol).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.load",
    "page": "Docstrings",
    "title": "MatrixDepot.load",
    "category": "function",
    "text": "load([db,] pattern)\n\nLoad data from remote repository for all problems matching pattern.\n\nReturn the number of successfully loaded matrices. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.loadinfo",
    "page": "Docstrings",
    "title": "MatrixDepot.loadinfo",
    "category": "function",
    "text": "loadinfo([db,] pattern)\n\n\n\n\n\nloadinfo(data::RemoteDate)\n\nDownload the first part of the data file. Stop reading, as soon as the initial comment an the size values of the main matrix have been finished. Stor this in a file with extension .info in the same directory, where the .mtx file is. If the complete file is already availble, the download is not performed, because the head of the .mtx file contains the same lines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.loadmatrix",
    "page": "Docstrings",
    "title": "MatrixDepot.loadmatrix",
    "category": "function",
    "text": "loadmatrix(data::RemoteMatrixData)\n\nDownload the files backing the data from a remote repository. That is currently the TAMU site for the UFl collection and the NIST site for the MatrixMarket caoolection. The files are uncompressed and un-tar-ed if necessary. The data files containing the matrix data have to be in MatrixMarket format in both cases. Note, that some of the files of the MM collection are not available  in MatrixMarket format. An error message results, if trie to load them.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.logical",
    "page": "Docstrings",
    "title": "MatrixDepot.logical",
    "category": "function",
    "text": "Pattern syntactic sugar\n\nthe logical operators |, &, and ~  may be applied to all kind of Patterns with the usual meaning.\n\n~ : unary negation operator - pattern does not match (highest priority)\n& : binary logical and - both patterns match\n| : binary logical or - any of the pattern match (lowest priority)\nparentheses can be used to overrule operator precedence.\n[p...] is the same as p[1] | p[2] ...\n(p...) is the same as p[1] & p[2] ...\n~(p...) === ~((p...)) - that is ~(p[1] & p[2] ...)\nPrecedence of \'*\' is higher that ~ for character and string objects:\n\nso ~ \"a\" * \"b\"  === ~(\"a\" * \"b\") === ~\"ab\"  also ~\'a\'^2*\"b\" === ~\"aab\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.lotkin",
    "page": "Docstrings",
    "title": "MatrixDepot.lotkin",
    "category": "function",
    "text": "Lotkin Matrix\n\nThe Lotkin matrix is the Hilbert matrix with its first row         altered to all ones. It is unsymmetric, illcond and         has many negative eigenvalues of small magnitude.\n\nInput options:\n\n[type,] dim: dim is the dimension of the matrix.\n\nGroups: [\"inverse\", \"illcond\", \"eigen\"]\n\nReferences:\n\nM. Lotkin, A set of test matrices, MTAC, 9 (1955), pp. 153-161.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.madjoint",
    "page": "Docstrings",
    "title": "MatrixDepot.madjoint",
    "category": "function",
    "text": "madjoint(A)\n\nMaterialized adjoint of sparse Matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.magic",
    "page": "Docstrings",
    "title": "MatrixDepot.magic",
    "category": "function",
    "text": "Magic Square Matrix\n\nThe magic matrix is a matrix with integer entries such that     the row elements, column elements, diagonal elements and     anti-diagonal elements all add up to the same number.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"inverse\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.matrixdepot",
    "page": "Docstrings",
    "title": "MatrixDepot.matrixdepot",
    "category": "function",
    "text": "matrixdepot(p::Pattern, args...)\n\nReturn matrix according to pattern or local matrix according to name and arguments.\n\nIf not loaded, load remote matrix first. p must be a unique pattern (match only one name). The presence of arguments makes sense only if the pattern matches the name of a generated (=local) matrix.\n\nOnly the matrix part is delivered, also in the local cases, where the underlying function returns a structure containing matrix and vectors. Use md = mdopen; md.A, md.b ... to access those objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mdata",
    "page": "Docstrings",
    "title": "MatrixDepot.mdata",
    "category": "function",
    "text": "mdata(db, pattern)\n\nReturn unique MatrixData object according to pattern.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mdinfo",
    "page": "Docstrings",
    "title": "MatrixDepot.mdinfo",
    "category": "function",
    "text": "return information about all matrices selected by pattern\n\n\n\n\n\nmdinfo()\n\nOverview about matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mdlist",
    "page": "Docstrings",
    "title": "MatrixDepot.mdlist",
    "category": "function",
    "text": "mdlist([db,] p::Pattern)\n\nreturn a vector of full matrix names where name or alias match given pattern. p can be one of the following:\n\na plain string (without characters * and ?) which must match exactly\na string containing * and ? acting like a shell path pattern\na regular expression\nan integer matching equivalent to the alias string \"#$p\"\na range of integers\na group name expressed as a symbol e.g. :local, :all, :illcond, posdef\nthe name of a predicate function f(::MatrixData)::Bool, e.g. symmetric, ...\na vector of patterns meaning the union\na tuple of patterns meaning the intersection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mdopen",
    "page": "Docstrings",
    "title": "MatrixDepot.mdopen",
    "category": "function",
    "text": "mdopen([db,] pattern)\nmdopen(f, [db,] pattern)\n\nReturn MatrixDescriptor object, which can be used with data access functions.\n\nMake sure that data files are loaded. Keeps a cache of already delivered matrices and metadata. If the pattern has not a unique resolution, an error is thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.metadata",
    "page": "Docstrings",
    "title": "MatrixDepot.metadata",
    "category": "function",
    "text": "metadata([db, ], Union{MatrixDescriptor,MatrixData})\n\nReturn copy of list of metadata names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.metareader",
    "page": "Docstrings",
    "title": "MatrixDepot.metareader",
    "category": "function",
    "text": "metareader(md::MatrixDescriptor, key::AbstractString)\n\nReturn specific data files (matrix, rhs, solution, or other metadata). The key must be contained in data.metadata or an DataError is thrown. Hint: md.A, md.b, md.x also deliver the matrix, rhs, and solution. So this is needed specifically for other metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.metastring",
    "page": "Docstrings",
    "title": "MatrixDepot.metastring",
    "category": "function",
    "text": "metastring(name, metaname)\n\nIn the standard cases convert full meta name to abbreviated form.\n\ngiven name = \"abc\", then\n\"abc.mtx\" => \"A\"\n\"abc_def.mtx\" => \"def\"\n\"abc_def.txt\" => \"def.txt\"\n\"abc-def.mtx\" => \"abc-def.mtx\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.metastring_reverse",
    "page": "Docstrings",
    "title": "MatrixDepot.metastring_reverse",
    "category": "function",
    "text": "metastring_reverse(data::MatrixData, abbreviation::String)\n\nGiven a MatrixData object and an abbreviation, return a matchingfull metadata name for the abbreviation. If no full name is found, return the abbreviation unchanged.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.metasymbols",
    "page": "Docstrings",
    "title": "MatrixDepot.metasymbols",
    "category": "function",
    "text": "metasymbols(md::MatrixDescriptor)\n\nReturn a vector of symbols, which point to metadata of the problem. These symbols s may be used to access the objects by getproperty(md, s) or by getindex(md, s). The syntax md.S is preferred, if S is a constant Julia word. In any case md[s] is possible.\n\nExample: md = mdopen(\"*/bfly\"); A = md.A; co = md.coord; txt10 = md[\"Gname_10.txt\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.minij",
    "page": "Docstrings",
    "title": "MatrixDepot.minij",
    "category": "function",
    "text": "MIN[I,J] Matrix\n\nA matrix with (i,j) entry min(i,j). It is a symmetric positive      definite matrix. The eigenvalues and eigenvectors are known      explicitly. Its inverse is tridiagonal.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"inverse\", \"symmetric\", \"posdef\", \"eigen\"]\n\nReferences:\n\nJ. Fortiana and C. M. Cuadras, A family of matrices,             the discretized Brownian bridge, and distance-based regression,             Linear Algebra Appl., 264 (1997), 173-188.  (For the eigensystem of A.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mksparse",
    "page": "Docstrings",
    "title": "MatrixDepot.mksparse",
    "category": "function",
    "text": "mksparse(m, n, rowval, colval, nzval)\nmksparse!(m, n, rowval, colval, nzval)\n\nConstruct a SparseMatrixCSC of dimensions (m,n) from the data given in the three input vectors of equal lengths.\n\nmksparse! destoys the content of colval.\n\nA[rowval[i],colval[i]] == nzval[i] for i ∈ 1:length(nzval). All other entries are zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mmread",
    "page": "Docstrings",
    "title": "MatrixDepot.mmread",
    "category": "function",
    "text": "mmread(filename|io)\n\nRead Matrixmarket format file (extension .mtx) and return sparse or dense matrix. Symmetric and Hermitian matrices use the corresponding wrapper types. Patterns result in sparse matrics with element type Bool. They may be converted to numerical types by multiplying with a number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mmreadcomment",
    "page": "Docstrings",
    "title": "MatrixDepot.mmreadcomment",
    "category": "function",
    "text": "mmreadcomment(filename)\n\nreturn info comment strings for MatrixMarket format files\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mmreadheader",
    "page": "Docstrings",
    "title": "MatrixDepot.mmreadheader",
    "category": "function",
    "text": "mmreadheader(filename)\n\nRead header information from mtx file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.moler",
    "page": "Docstrings",
    "title": "MatrixDepot.moler",
    "category": "function",
    "text": "Moler Matrix\n\nThe Moler matrix is a symmetric positive definite matrix. It has one small eigenvalue.\n\nInput options:\n\n[type,] dim, alpha: dim is the dimension of the matrix,       alpha is a scalar.\n[type,] dim: alpha = -1.\n\nGroups: [\"inverse\", \"illcond\", \"symmetric\", \"posdef\"]\n\nReferences:\n\nJ.C. Nash, Compact Numerical Methods for Computers:     Linear Algebra and Function Minimisation, second edition,     Adam Hilger, Bristol, 1990 (Appendix 1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.mtranspose",
    "page": "Docstrings",
    "title": "MatrixDepot.mtranspose",
    "category": "function",
    "text": "mtranspose(A)\n\nMaterialized transpose of a matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.neumann",
    "page": "Docstrings",
    "title": "MatrixDepot.neumann",
    "category": "function",
    "text": "Neumann Matrix\n\nA singular matrix from the discrete Neumann problem.        The matrix is sparse and the null space is formed by a vector of ones\n\nInput options:\n\n[type,] dim: the dimension of the matrix is dim^2.\n\nGroups: [\"eigen\", \"sparse\"]\n\nReferences:\n\nR. J. Plemmons, Regular splittings and the           discrete Neumann problem, Numer. Math., 25 (1976), pp. 153-161.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.oscillate",
    "page": "Docstrings",
    "title": "MatrixDepot.oscillate",
    "category": "function",
    "text": "Oscillating Matrix\n\nA matrix A is called oscillating if A is totally     nonnegative and if there exists an integer q > 0 such that     A^q is totally positive.\n\nInput options:\n\n[type,] Σ: the singular vaule spectrum of the matrix.\n[type,] dim, mode: dim is the dimension of the matrix.       mode = 1: geometrically distributed singular values.       mode = 2: arithmetrically distributed singular values.\n[type,] dim: mode = 1.\n\nGroups: [\'symmetric\',\'posdef\', \'random\', \'eigen\']\n\nReferences:\n\nPer Christian Hansen, Test matrices for     regularization methods. SIAM J. SCI. COMPUT Vol 16,     No2, pp 506-512 (1995).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.overview",
    "page": "Docstrings",
    "title": "MatrixDepot.overview",
    "category": "function",
    "text": "overview([db])\n\nreturn formatted overview about matrices and groups in the collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.parallax",
    "page": "Docstrings",
    "title": "MatrixDepot.parallax",
    "category": "function",
    "text": "Stellar Parallax Problem with 26 Fixed, Real Observations\n\nThe underlying problem is a Fredholm integral equation of the first kind with kernel\n\nK(s,t) = (1/(σ√(2π)))*exp(-0.5*((s-t)/σ)^2),\n\nwith σ = 0.014234, and it is dscretized by means of a Galerkin method with n orthonormal basis functions. The right-hand side b consists of a measured distribution function of stellar parallaxes, and its length is fixed at 26, i.e, the matrix A is 26×n. The exact solution, which represents the true distribution of stellar parallaxes, is unknown.\n\nInput options:\n\n[type,] dim, [matrixonly]: the generated matrix is 26×dim. If   matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated   (matrixonly = true by default).\n\nGroups: [\"regprob\"]\n\nReferences:\n\nW. M. Smart, Stellar Dynamics, Cambridge University Press, Cambridge, (1938), p. 30.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.parter",
    "page": "Docstrings",
    "title": "MatrixDepot.parter",
    "category": "function",
    "text": "Parter Matrix\n\nThe Parter matrix is a Toeplitz and Cauchy matrix             with singular values near π.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"eigen\"]\n\nReferences:\n\nThe MathWorks Newsletter, Volume 1, Issue 1,             March 1986, page 2. S. V. Parter, On the distribution of the             singular values of Toeplitz matrices, Linear Algebra and             Appl., 80 (1986), pp. 115-130.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.pascal",
    "page": "Docstrings",
    "title": "MatrixDepot.pascal",
    "category": "function",
    "text": "Pascal Matrix\n\nThe Pascal matrix’s anti-diagonals form the Pascal’s triangle.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"inverse\", \"illcond\", \"symmetric\", \"posdef\", \"eigen\"]\n\nReferences:\n\nR. Brawer and M. Pirovino, The linear algebra of     the Pascal matrix, Linear Algebra and Appl., 174 (1992),     pp. 13-23 (this paper gives a factorization of L = PASCAL(N,1)                and a formula for the elements of L^k).\n\nN. J. Higham, Accuracy and Stability of Numerical Algorithms, second edition, Society for Industrial and Applied Mathematics, Philadelphia, PA, USA, 2002; sec. 28.4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.pei",
    "page": "Docstrings",
    "title": "MatrixDepot.pei",
    "category": "function",
    "text": "Pei Matrix\n\nThe Pei matrix is a symmetric matrix with known inversion.\n\nInput options:\n\n[type,] dim, α: dim is the dimension of the matrix.   α is a scalar.\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"inverse\", \"illcond\", \"symmetric\", \"posdef\"]\n\nReferences:\n\nM. L. Pei, A test matrix for inversion procedures,     Comm. ACM, 5 (1962), p. 508.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.phillips",
    "page": "Docstrings",
    "title": "MatrixDepot.phillips",
    "category": "function",
    "text": "Phillips\'s \"Famous\" Problem\n\nInput options:\n\n[type,] dim, [matrixonly]: the dimenstion of the matrix is dim.   If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated   (matrixonly = true by default).\n\nGroups: [\"regprob\"]\n\nReferences:\n\nD. L. Phillips, A technique for the numerical     solution of certain integral equations of the first kind, J. ACM     9 (1962), 84-97.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.poisson",
    "page": "Docstrings",
    "title": "MatrixDepot.poisson",
    "category": "function",
    "text": "Poisson Matrix\n\nA block tridiagonal matrix from Poisson’s equation.      This matrix is sparse, symmetric positive definite and      has known eigenvalues. The result is of type SparseMatrixCSC.\n\nInput options:\n\n[type,] dim: the dimension of the matirx is dim^2.\n\nGroups: [\"inverse\", \"symmetric\", \"posdef\", \"eigen\", \"sparse\"]\n\nReferences:\n\nG. H. Golub and C. F. Van Loan, Matrix Computations,           second edition, Johns Hopkins University Press, Baltimore,           Maryland, 1989 (Section 4.5.4).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.prednzdev",
    "page": "Docstrings",
    "title": "MatrixDepot.prednzdev",
    "category": "function",
    "text": "prednzdev(\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.prolate",
    "page": "Docstrings",
    "title": "MatrixDepot.prolate",
    "category": "function",
    "text": "Prolate Matrix\n\nA prolate matrix is a symmetirc, ill-conditioned Toeplitz matrix.\n\nInput options:\n\n[type,] dim, w: dim is the dimension of the matrix. w is a real scalar.\n[type,] dim: the case when w = 0.25.\n\nReferences:\n\nJ. M. Varah. The Prolate Matrix. Linear Algebra and Appl.              187:267–278, 1993.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.randcorr",
    "page": "Docstrings",
    "title": "MatrixDepot.randcorr",
    "category": "function",
    "text": "Random Correlation Matrix\n\nA random correlation matrix is a symmetric positive      semidefinite matrix with 1s on the diagonal.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"symmetric\", \'pos-semidef\', \"random\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.rando",
    "page": "Docstrings",
    "title": "MatrixDepot.rando",
    "category": "function",
    "text": "Random Matrix with Element -1, 0, 1\n\nInput options:\n\n[type,] rowdim, coldim, k: row_dim and col_dim are row and column dimensions,  k = 1: entries are 0 or 1.  k = 2: entries are -1 or 1.  k = 3: entries are -1, 0 or 1.\n[type,] dim, k: row_dim = col_dim = dim.\n[type,] dim: k = 1.\n\nGroups: [\"random\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.randsvd",
    "page": "Docstrings",
    "title": "MatrixDepot.randsvd",
    "category": "function",
    "text": "Random Matrix with Pre-assigned Singular Values\n\nInput options:\n\n[type,] rowdim, coldim, kappa, mode: row_dim and col_dim   are the row and column dimensions. kappa is the condition number of the matrix. mode = 1: one large singular value. mode = 2: one small singular value. mode = 3: geometrically distributed singular values. mode = 4: arithmetrically distributed singular values. mode = 5: random singular values with  unif. dist. logarithm.\n[type,] dim, kappa, mode: row_dim = col_dim = dim.\n[type,] dim, kappa: mode = 3.\n[type,] dim: kappa = sqrt(1/eps()), mode = 3.\n\nGroups: [\"illcond\", \"random\"]\n\nReferences:\n\nN. J. Higham, Accuracy and Stability of Numerical Algorithms, second edition, Society for Industrial and Applied Mathematics, Philadelphia, PA, USA, 2002; sec. 28.3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.rohess",
    "page": "Docstrings",
    "title": "MatrixDepot.rohess",
    "category": "function",
    "text": "Random Orthogonal Upper Hessenberg Matrix\n\nThe matrix is constructed via a product of Givens rotations.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"random\"]\n\nReferences:\n\nW. B. Gragg, The QR algorithm for unitary     Hessenberg matrices, J. Comp. Appl. Math., 16 (1986), pp. 1-8.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.rosser",
    "page": "Docstrings",
    "title": "MatrixDepot.rosser",
    "category": "function",
    "text": "Rosser Matrix\n\nThe Rosser matrix’s eigenvalues are very close together         so it is a challenging matrix for many eigenvalue algorithms.\n\nInput options:\n\n[type,] dim, a, b: dim is the dimension of the matrix.           dim must be a power of 2.           a and b are scalars. For dim = 8, a = 2 and b = 1, the generated           matrix is the test matrix used by Rosser.\n[type,] dim: a = rand(1:5), b = rand(1:5).\n\nGroups: [\"eigen\", \"illcond\", \"random\"]\n\nReferences:\n\nJ. B. Rosser, C. Lanczos, M. R. Hestenes, W. Karush,             Separation of close eigenvalues of a real symmetric matrix,             Journal of Research of the National Bureau of Standards, v(47)             (1951)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.sampling",
    "page": "Docstrings",
    "title": "MatrixDepot.sampling",
    "category": "function",
    "text": "Matrix with Application in Sampling Theory\n\nA nonsymmetric matrix with eigenvalues 0, 1, 2, ... n-1.\n\nInput options:\n\n[type,] vec: vec is a vector with no repeated elements.\n[type,] dim: dim is the dimension of the matrix.           vec = [1:dim;]/dim.\n\nGroups: [\"eigen\"]\n\nReferences:\n\nL. Bondesson and I. Traat, A nonsymmetric matrix             with integer eigenvalues, linear and multilinear algebra, 55(3)             (2007), pp. 239-247\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.shaw",
    "page": "Docstrings",
    "title": "MatrixDepot.shaw",
    "category": "function",
    "text": "One-Dimensional Image Restoration Model\n\nThis test problem uses a first-kind Fredholm integral equation     to model a one-dimentional image restoration situation.\n\nInput options:\n\n[type,] dim, [matrixonly]: the dimesion of the matrix dim must be even.   If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated   (matrixonly = true by default).\n\nGroups: [\"regprob\"]\n\nReferences:\n\nC. B. Shaw, Jr., Improvements of the resolution of     an instrument by numerical solution of an integral equation.     J. Math. Ana. Appl. 37 (1972), 83-112.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.shell_to_regex",
    "page": "Docstrings",
    "title": "MatrixDepot.shell_to_regex",
    "category": "function",
    "text": "shell_to_regex\n\nreturn a regular expression if shell pattern characters \"*?]\" are contained in string, otherwise return string. If no \'/\' is contained in p and p is not \"\", insert `\"(./)?\"` in regular expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.smallworld",
    "page": "Docstrings",
    "title": "MatrixDepot.smallworld",
    "category": "function",
    "text": "Small World Network\n\nGenerate an adjacency matrix for a small world network. We model it by adding shortcuts to a kth nearest neighbour ring network (nodes i and j are connected iff |i -j| <= k or |n - |i -j|| <= k.) with n nodes.\n\nInput options:\n\n[type,] n, k, p: the dimension of the matrix is n. The number of   nearest-neighbours to connect is k. The probability of adding a shortcut   in a given row is p.\n[type,] n: k = 2 and p = 0.1.\n\nReferences:\n\nD. J. Watts and S. H. Strogatz, Collective Dynamics of Small World Networks, Nature 393 (1998), pp. 440-442.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.spikes",
    "page": "Docstrings",
    "title": "MatrixDepot.spikes",
    "category": "function",
    "text": "Test Problem with \"Spike\" Solution\n\nArtifically generated discrete ill-posed problem.\n\nInput options:\n\n[type,] dim, tmax, [matrixonly]: dim is the dimension of the             matrix. `tmaxcontrols the length of the pulse train.             Ifmatrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be             generated (matrixonly = true` by default). The solution x             consists a unit step at t = .5 and a pulse train of spike             of decreasing magnitude at t = .5, 1.5, 2.5, ....\n[type,] dim, [matrixonly]: t_max = 5.\n\nGroups: [\"regprob\"]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.toeplitz",
    "page": "Docstrings",
    "title": "MatrixDepot.toeplitz",
    "category": "function",
    "text": "Toeplitz Matrix\n\nA Toeplitz matrix is a matrix in which each descending        diagonal from left to right is constant.\n\nInput options:\n\n[type,] vc, vr: vc and vr are the first column and row of the matrix.\n[type,] v: symmatric case, i.e., vc = vr = v.\n[type,] dim: dim is the dimension of the matrix. v = [1:dim;] is the first               row and column vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.tridiag",
    "page": "Docstrings",
    "title": "MatrixDepot.tridiag",
    "category": "function",
    "text": "Tridiagonal Matrix\n\nConstruct a tridigonal matrix of type Tridiagonal.\n\nInput options:\n\n[type,] v1, v2, v3: v1 and v3 are vectors of subdiagonal           and superdiagonal elements, respectively, and v2 is a vector           of diagonal elements.\n[type,] dim, x, y, z: dim is the dimension of the matrix,           x, y, z are scalars. x and z are the subdiagonal and           superdiagonal elements, respectively, and y is the diagonal           elements.\n[type,] dim: x = -1, y = 2, z = -1. This matrix is also           known as the second difference matrix.\n\nGroups: [\"inverse\", \"illcond\", \"posdef\", \"eigen\"]\n\nReferences:\n\nJ. Todd, Basic Numerical Mathematics, Vol. 2:             Numerical Algebra, Birkhauser, Basel, and Academic Press,             New York, 1977, p. 155.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.triw",
    "page": "Docstrings",
    "title": "MatrixDepot.triw",
    "category": "function",
    "text": "Triw Matrix\n\nUpper triangular matrices discussed by Wilkinson and others.\n\nInput options:\n\n[type,] rowdim, coldim, α, k: row_dim and col_dim       are row and column dimension of the matrix. α is a       scalar representing the entries on the superdiagonals.       k is the number of superdiagonals.\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"inverse\", \"illcond\"]\n\nReferences:\n\nG. H. Golub and J. H. Wilkinson, Ill-conditioned eigensystems and the computation of the Jordan canonical form, SIAM Review, 18(4), 1976, pp. 578-6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.update",
    "page": "Docstrings",
    "title": "MatrixDepot.update",
    "category": "function",
    "text": "MatrixDepot.update()\n\nupdate database index from the websites\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.ursell",
    "page": "Docstrings",
    "title": "MatrixDepot.ursell",
    "category": "function",
    "text": "Integral Equation with No square Integrable Solution\n\nDiscretization of a first kind Fredholm integral equation with kernel K and right-hand side g given by                     K(s,t) = 1/(s+t+1), g(s) = 1, where both integration intervals are [0, 1]. The matrix A is a Hankel matrix.\n\nInput options:\n\n[type,] dim, [matrixonly]: dim is the dimension of the matrix.             If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will also             be generated (matrixonly = true by default).\n\nGroups: [\"regprob\"]\n\nReferences:\n\nF. Ursell, Introduction to the theory of linear               integral equations., Chapter 1 in L. M. Delves & J. Walsh,               Numerical Solution of Integral Equations, Clarendon Press,               1974.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.vand",
    "page": "Docstrings",
    "title": "MatrixDepot.vand",
    "category": "function",
    "text": "Vandermonde Matrix\n\nThe inverse and determinat are known explicity.\n\nInput options:\n\n[type,] vec, coldim: vec is a vector, `coldim` is the number of columns.\n[type,] vec: col_dim = length(vec)\n[type,] dim: vec = [1:dim;]\n\nGroups: [\"inverse\", \"illcond\"]\n\nReferences:\n\nN. J. Higham, Stability analysis of algorithms     for solving confluent Vandermonde-like systems, SIAM J.         Matrix Anal. Appl., 11 (1990), pp. 23-41.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.wathen",
    "page": "Docstrings",
    "title": "MatrixDepot.wathen",
    "category": "function",
    "text": "Wathen Matrix\n\nWathen Matrix is a sparse, symmetric positive, random matrix arose from the finite element method. The generated matrix is the consistent mass matrix for a regular nx-by-ny grid of 8-nodes.\n\nInput options:\n\n[type,] nx, ny: the dimension of the matrix is equal to   3 * nx * ny + 2 * nx * ny + 1.\n[type,] n: nx = ny = n.\n\nGroups: [\"symmetric\", \"posdef\", \"eigen\", \"random\", \"sparse\"]\n\nReferences:\n\nA. J. Wathen, Realistic eigenvalue bounds for     the Galerkin mass matrix, IMA J. Numer. Anal., 7 (1987),     pp. 449-457.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.wilkinson",
    "page": "Docstrings",
    "title": "MatrixDepot.wilkinson",
    "category": "function",
    "text": "Wilkinson Matrix\n\nThe Wilkinson matrix is a symmetric tridiagonal matrix with pairs of nearly equal eigenvalues. The most frequently used case is matrixdepot(\"wilkinson\", 21). The result is of type Tridiagonal.\n\nInput options:\n\n[type,] dim: the dimension of the matrix.\n\nGroups: [\"symmetric\", \"eigen\"]\n\nReferences:\n\nJ. H. Wilkinson, Error analysis of direct methods of matrix inversion, J. Assoc. Comput. Mach., 8 (1961),  pp. 281-330.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.wing",
    "page": "Docstrings",
    "title": "MatrixDepot.wing",
    "category": "function",
    "text": "A Problem with a Discontinuous Solution\n\nInput options:\n\n[type,] dim, t1, t2, [matrixonly]: the dimension of matrix is dim.   t1 and t2 are two real scalars such that 0 < t1 < t2 < 1.   If matrixonly = false, the matrix A and vectors b and x in the linear system Ax = b will be generated   (matrixonly = true by default).\n[type,] n, [matrixonly]: t1 = 1/3 and t2 = 2/3.\n\nGroups: [\"regprob\"]\n\nReferences:\n\nG. M. Wing, A Primer on Integral Equations of the     First Kind, Society for Industrial and Applied Mathematics, 1991, p. 109.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixDepot.wordlist",
    "page": "Docstrings",
    "title": "MatrixDepot.wordlist",
    "category": "function",
    "text": "wordlist(string)\n\nSeparate words is string by spaces and delimiters. Return list of unique words, which can be used as keywords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MatrixDepot.@addgroupMatrixDepot.@modifygroupMatrixDepot.@predMatrixDepot.@rmgroupMatrixDepot.ALL_PATTERNMatrixDepot.ARRAYMatrixDepot.AbstractNotMatrixDepot.AliasMatrixDepot.AuxiliarMatrixDepot.COMPLEXMatrixDepot.COORDMatrixDepot.DATA_DIRMatrixDepot.DataErrorMatrixDepot.EMPTY_PATTERNMatrixDepot.FunctionNameMatrixDepot.GENERALMatrixDepot.GeneratedMatrixDataMatrixDepot.GroupMatrixDepot.HERMITIANMatrixDepot.INTEGERMatrixDepot.IntOrVecMatrixDepot.MATRIXMatrixDepot.MATRIXCLASSMatrixDepot.MATRIXDICTMatrixDepot.MATRIXMMatrixDepot.MATRIX_DBMatrixDepot.MDMatrixDepot.MMFieldMatrixDepot.MMFieldComplexMatrixDepot.MMFieldIntegerMatrixDepot.MMFieldPatternMatrixDepot.MMFieldRealMatrixDepot.MMFormatMatrixDepot.MMFormatArrayMatrixDepot.MMFormatCoordinateMatrixDepot.MMObjectMatrixDepot.MMObjectMatrixMatrixDepot.MMPropertiesMatrixDepot.MMPropertyMatrixDepot.MMRemoteTypeMatrixDepot.MMSymmetryMatrixDepot.MMSymmetryGeneralMatrixDepot.MMSymmetryHermitianMatrixDepot.MMSymmetrySkewSymmetricMatrixDepot.MMSymmetrySymmetricMatrixDepot.MM_NAME_TO_PROPMatrixDepot.MM_REMOTEMatrixDepot.MY_DEPOT_DIRMatrixDepot.MatrixDataMatrixDepot.MatrixDatabaseMatrixDepot.MatrixDepotMatrixDepot.MatrixDescriptorMatrixDepot.MatrixGeneratorMatrixDepot.MetaInfoMatrixDepot.NotMatrixDepot.PATTERNMatrixDepot.P_blockMatrixDepot.PatternMatrixDepot.REALMatrixDepot.RegProbMatrixDepot.RegProbNoSolutionMatrixDepot.RemoteMatrixDataMatrixDepot.RemoteParametersMatrixDepot.RemoteTypeMatrixDepot.SKEW_SYMMETRICMatrixDepot.SUBSETSMatrixDepot.SYMMETRICMatrixDepot.TA_REMOTEMatrixDepot.TURemoteTypeMatrixDepot.UF_REMOTEMatrixDepot.USERMATRIXDICTMatrixDepot.__init__MatrixDepot._downloadindicesMatrixDepot._flatten_patternMatrixDepot._isfieldMatrixDepot._issymmetryMatrixDepot._loadMatrixDepot._mdheaderMatrixDepot._mdopenMatrixDepot._metareaderMatrixDepot._parsenextMatrixDepot._replMatrixDepot.addmetadata!MatrixDepot.addtogroupMatrixDepot.aliasnameMatrixDepot.aliasresolveMatrixDepot.alternateMatrixDepot.argerrMatrixDepot.baartMatrixDepot.binomialmMatrixDepot.blurMatrixDepot.buildnametableMatrixDepot.buildnametable1MatrixDepot.builtinMatrixDepot.cauchyMatrixDepot.chebspecMatrixDepot.check_symbolsMatrixDepot.chowMatrixDepot.circulMatrixDepot.clementMatrixDepot.colvalMatrixDepot.companionMatrixDepot.data_warnMatrixDepot.dataurlMatrixDepot.daterrMatrixDepot.deriv2MatrixDepot.dingdongMatrixDepot.downloadindexMatrixDepot.downloadindicesMatrixDepot.erdreyMatrixDepot.evalMatrixDepot.extensionMatrixDepot.extract_namesMatrixDepot.extract_symbolsMatrixDepot.extremnnzMatrixDepot.fiedlerMatrixDepot.filenameMatrixDepot.fillcache!MatrixDepot.flatten_patternMatrixDepot.fnameMatrixDepot.forsytheMatrixDepot.foxgoodMatrixDepot.frankMatrixDepot.geoMatrixDepot.getbytesMatrixDepot.gilbertMatrixDepot.golubMatrixDepot.gravityMatrixDepot.grcarMatrixDepot.gunzipMatrixDepot.hadamardMatrixDepot.hankelMatrixDepot.hasdataMatrixDepot.hasinfoMatrixDepot.heatMatrixDepot.hilbMatrixDepot.ilaplaceMatrixDepot.includeMatrixDepot.include_generatorMatrixDepot.indexurlMatrixDepot.initMatrixDepot.insertlocalMatrixDepot.invhilbMatrixDepot.involMatrixDepot.is_allMatrixDepot.is_pure_stringMatrixDepot.is_pure_vectorMatrixDepot.isbooleanMatrixDepot.isbuiltinMatrixDepot.iscomplexMatrixDepot.isgeneralMatrixDepot.ishermitianMatrixDepot.isintegerMatrixDepot.isloadedMatrixDepot.islocalMatrixDepot.isrealMatrixDepot.isremoteMatrixDepot.isskewMatrixDepot.issymmetricMatrixDepot.isunloadedMatrixDepot.isuserMatrixDepot.jordblocMatrixDepot.kahanMatrixDepot.keyforMatrixDepot.keywordMatrixDepot.kmsMatrixDepot.lehmerMatrixDepot.list!MatrixDepot.list_allMatrixDepot.list_builtinMatrixDepot.list_localMatrixDepot.list_userMatrixDepot.listdataMatrixDepot.listdirMatrixDepot.listgroupsMatrixDepot.listnamesMatrixDepot.loadMatrixDepot.loadinfoMatrixDepot.loadmatrixMatrixDepot.localbaseMatrixDepot.localdirMatrixDepot.localfileMatrixDepot.localindexMatrixDepot.logicalMatrixDepot.lotkinMatrixDepot.madjointMatrixDepot.magicMatrixDepot.make_funcMatrixDepot.make_predMatrixDepot.matrixdepotMatrixDepot.matrixfileMatrixDepot.matrixinfofileMatrixDepot.mdataMatrixDepot.mdatavMatrixDepot.mdinfoMatrixDepot.mdlistMatrixDepot.mdopenMatrixDepot.meshgridMatrixDepot.metadataMatrixDepot.metanameMatrixDepot.metareaderMatrixDepot.metastringMatrixDepot.metastring_reverseMatrixDepot.metasymbolsMatrixDepot.minijMatrixDepot.mksparseMatrixDepot.mksparse!MatrixDepot.mmMatrixDepot.mm_property_nameMatrixDepot.mm_property_typeMatrixDepot.mm_short_nameMatrixDepot.mmreadMatrixDepot.mmread_matrixMatrixDepot.mmreadcommentMatrixDepot.mmreadheaderMatrixDepot.modgroupMatrixDepot.molerMatrixDepot.mtransposeMatrixDepot.neumannMatrixDepot.newsignMatrixDepot.oddmagicMatrixDepot.oscillateMatrixDepot.overviewMatrixDepot.parallaxMatrixDepot.parse_headerinfoMatrixDepot.parseintMatrixDepot.parseloop!MatrixDepot.parsenextMatrixDepot.parserrMatrixDepot.parterMatrixDepot.pascalMatrixDepot.peiMatrixDepot.phillipsMatrixDepot.poissonMatrixDepot.predMatrixDepot.prednzdevMatrixDepot.preferredMatrixDepot.prolateMatrixDepot.proplineMatrixDepot.push_hdr!MatrixDepot.qmult!MatrixDepot.randcorrMatrixDepot.randoMatrixDepot.randsvdMatrixDepot.remotetypeMatrixDepot.resall!MatrixDepot.rohessMatrixDepot.rosserMatrixDepot.round_matlabMatrixDepot.samplingMatrixDepot.shawMatrixDepot.shell_to_regexMatrixDepot.shortcutsMatrixDepot.singlist!MatrixDepot.smallworldMatrixDepot.sort_by_typeMatrixDepot.spMatrixDepot.specialsortMatrixDepot.spikesMatrixDepot.sumwidthMatrixDepot.tabMatrixDepot.toeplitzMatrixDepot.toggle_remoteMatrixDepot.tomoMatrixDepot.tridiagMatrixDepot.triwMatrixDepot.uf_remoteMatrixDepot.updateMatrixDepot.ursellMatrixDepot.userMatrixDepot.usermatrixclassMatrixDepot.vandMatrixDepot.vecvecMatrixDepot.verify_loadedMatrixDepot.verify_loadinfoMatrixDepot.wathenMatrixDepot.wilkinsonMatrixDepot.wingMatrixDepot.wordlistMatrixDepot.wrap"
},

]}
