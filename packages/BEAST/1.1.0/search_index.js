var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BEAST-1",
    "page": "Readme",
    "title": "BEAST",
    "category": "section",
    "text": "Boundary Element Analysis and Simulation Toolkit(Image: Build Status) (Image: Coverage Status) (Image: codecov.io) (Image: Documentation)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package contains common basis functions and assembly routines for the implementation of boundary element methods. Examples are included for the 2D and 3D Helmholtz equations and for the 3D Maxwell equations.Support for the space-time Galerkin based solution of time domain integral equations is in place for the 3D Helmholtz and Maxwell equations."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Installing BEAST is done by entering the package manager (enter ] at the julia REPL) and issuing:pkg>add BEASTTo run the examples, the following steps are required in addition:pkg> add CompScienceMeshes # For the creation of scatterer geometries\npkg> add Plots             # For visualising the results\npkg> add GR                # Other Plots compatible back-ends can be chosenExamples can be run by:julia>using BEAST\njulia>d = dirname(pathof(BEAST))\njulia>include(joinpath(d,\"../examples/efie.jl\"))"
},

{
    "location": "#Hello-World-1",
    "page": "Readme",
    "title": "Hello World",
    "category": "section",
    "text": "To solve scattering of a time harmonic electromagnetic plane wave by a perfectly conducting sphere:using CompScienceMeshes, BEAST\n\nΓ = readmesh(joinpath(dirname(pathof(BEAST)),\"../examples/sphere2.in\"))\nX = raviartthomas(Γ)\n\nt = Maxwell3D.singlelayer(wavenumber=1.0)\nE = Maxwell3D.planewave(direction=ẑ, polarization=x̂, wavenumber=1.0)\ne = (n × E) × n\n\n@hilbertspace j\n@hilbertspace k\nefie = @discretise t[k,j]==e[k]  j∈X k∈X\nu = gmres(efie)(Image: )"
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "General framework allowing to easily add support for more kernels, finite element spaces, and excitations.\nAssembly routines that take in symbolic representations of the defining bilinear form. Support for block systems and finite element spaces defined in terms of direct products or tensor products of atomic spaces.\nLU and iterative solution of the resulting system.\nComputation of secondary quantities of interest such as the near field and the limiting far field.\nSupport for space-time Galerkin and convolution quadrature approaches to the solution of time domain boundary integral equations.\nImplementation of Lagrange zeroth and first order space, Raviart-Thomas, Brezzi-Douglas-Marini, and Buffa-Christianssen vector elemenents."
},

{
    "location": "autodocs/#BEAST.@discretise",
    "page": "Docstrings",
    "title": "BEAST.@discretise",
    "category": "macro",
    "text": "discr(eq, pairs...)\n\nThis macro provides syntactical sugar for the definition of a discretisation of a varational formulation. Given a variational equation EQ: Find j ∈ X such that for all k ∈ Y a(k,j) = f(k) can be discretised by stating:\n\neq = @discretise EQ j∈X k∈Y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.Variational.@varform",
    "page": "Docstrings",
    "title": "BEAST.Variational.@varform",
    "category": "macro",
    "text": "@varform <form-definition>\n\nThe Julia form compiler uses the Julia parser and meta-programming based traversal of the AST to create a structure containing all information required for the description of a variational formulation from an Expr that follows closely widespread mathematical convention.\n\nE.g:\n\nEFIE = @varform T[k,j] = e[k]\nMFIE = @varform 0.5*I[k,j] + K[k,j] = h[k]\nPMCH = @varform M[k,j] - η*T[k,m] + 1/η*T[l,j] + M[l,m] = e[k] + h[l]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.HH3DHyperSingularFDBIO",
    "page": "Docstrings",
    "title": "BEAST.HH3DHyperSingularFDBIO",
    "category": "type",
    "text": "∫_Γ dx ∫_Γ dy \\left(α G g(x) n_x ⋅ n_y f(y) + β G \\mbox{curl} g(x) ⋅ \\mbox{curl} f(y) \\right)\n\nwith G(xy) = frace^-γ x-y4 π x-y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.HH3DSingleLayerFDBIO",
    "page": "Docstrings",
    "title": "BEAST.HH3DSingleLayerFDBIO",
    "category": "type",
    "text": "a(uv) = α _ΓΓ u(x) G_γ(x-y) v(y)\n\nwith G_γ(r) = frace^-γr4πr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.MWFarField3D",
    "page": "Docstrings",
    "title": "BEAST.MWFarField3D",
    "category": "type",
    "text": "Operator to compute the far field of a current distribution. In particular, given the current distribution j this operator allows for the computation of\n\nA j = n  _Γ e^γ x  y dy\n\nwhere x is the unit vector in the direction of observation. Note that the assembly routing expects the observation directions to be normalised by the caller.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.MWFarField3DTD",
    "page": "Docstrings",
    "title": "BEAST.MWFarField3DTD",
    "category": "type",
    "text": "Operator to compute the far field of a current distribution in the time domain. In particular, given the current distribution j this operator allows for the computation of\n\nR =  x  y\nffd = n  _Γ j(r t - Rc dy\n\nwhere x is the unit vector in the direction of observation. Note that the assembly routing expects the observation directions to be normalised by the caller.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.MWSingleLayerField3D",
    "page": "Docstrings",
    "title": "BEAST.MWSingleLayerField3D",
    "category": "type",
    "text": "MWSingleLayerField3D(wavenumber = error())\n\nCreate the single layer near field operator, for use with potential.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.Operator",
    "page": "Docstrings",
    "title": "BEAST.Operator",
    "category": "type",
    "text": "Atomic operator: one that assemblechunk can deal with\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.RungeKuttaConvolutionQuadrature",
    "page": "Docstrings",
    "title": "BEAST.RungeKuttaConvolutionQuadrature",
    "category": "type",
    "text": "RungeKuttaConvolutionQuadrature{T,N,NN}\n\nT: the value type of the basis function. N: the number of stages. NN: N*N.\n\nPerforms a convolution quadrature on a laplaceKernel to represent an operator in time domain using an implicit Runge-Kutta method.\n\nlaplaceKernel: function of the Laplace variable s that returns an IntegralOperator. A, b: Coefficient matrix and vectors from the Butcher tableau. Δt: time step. zTransformedTermCount: Number of terms in the inverse Z-transform. contourRadius: radius of circle used as integration contour for the inverse Z-transform.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.SingleLayerTrace",
    "page": "Docstrings",
    "title": "BEAST.SingleLayerTrace",
    "category": "type",
    "text": "Describe a single layer operator from the surface to a line.\n\nv Su = _γ dx v(x) _Γ dy race^-ikR4πR u(y)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.StagedTimeStep",
    "page": "Docstrings",
    "title": "BEAST.StagedTimeStep",
    "category": "type",
    "text": "StagedTimeStep{T,N}\n\nT: the value type of the basis function. N: the number of stages. It corresponds to a time-space basis function where each time step has intermediary stages given by the vertor c in a Butcher tableau (A,b,c)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.TimeBasisDeltaShifted",
    "page": "Docstrings",
    "title": "BEAST.TimeBasisDeltaShifted",
    "category": "type",
    "text": "TimeBasisDeltaShifted{T}\n\nRepresents a TimeBasisDelta{T} retarded by a fraction of the time step.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.TimeBasisFunction",
    "page": "Docstrings",
    "title": "BEAST.TimeBasisFunction",
    "category": "type",
    "text": "TimeBasisFunction{N,D}\n\nT: the value type of the time basis function N: the number of intervals in the support (this included the semi infinite interval     stretching to +∞) D1: the degree of the TBF restricted to each of the intervals plus one\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.assemble",
    "page": "Docstrings",
    "title": "BEAST.assemble",
    "category": "function",
    "text": "assemble(fn, tfs)\n\nAssemble the vector of test coefficients corresponding to functional fn and test functions tfs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.assemble_local_mixed!",
    "page": "Docstrings",
    "title": "BEAST.assemble_local_mixed!",
    "category": "function",
    "text": "assemble_local_mixed(biop::LocalOperator, tfs, bfs)\n\nFor use when basis and test functions are defined on different meshes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.assemblechunk!",
    "page": "Docstrings",
    "title": "BEAST.assemblechunk!",
    "category": "function",
    "text": "assemblechunk!(biop::IntegralOperator, tfs, bfs, store)\n\nComputes the matrix of operator biop wrt the finite element spaces tfs and bfs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.assemblydata",
    "page": "Docstrings",
    "title": "BEAST.assemblydata",
    "category": "function",
    "text": "charts, admap = assemblydata(basis)\n\nGiven a Basis this function returns a data structure containing the information required for matrix assemble. More precise the following expressions are valid for the returned object ad:\n\nad[c,r,i].globalindex\nad[c,r,i].coefficient\n\nHere, c and r are indices in the iterable set of geometric elements and the set of local shape functions on each element. i ranges from 1 to the maximum number of basis functions local shape function r on element r contributes to.\n\nFor a triplet (c,r,i), globalindex is the index in the Basis of the i-th basis function that has a contribution from local shape function r on element r. coefficient is the coefficient of that contribution in the linear combination defining that basis function in terms of local shape function.\n\nNote: the indices c correspond to the position of the corresponding element whilst iterating over geometry(basis).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.blockassembler",
    "page": "Docstrings",
    "title": "BEAST.blockassembler",
    "category": "function",
    "text": "blockassembler(operator, test_space, trial_space) -> assembler\n\nReturn a callable object for the creation of blocks within a BEM matrix.\n\nThis function performs all tasks common to the assembly of several blocks within a single boundary element matrix. The return value can be used to generate blocks by calling it as follows:\n\nassembler(I,J,storefn)\n\nwhere I and J are arrays of indices in test_space and trial_space, respectively, corresponding to the rows and columns of the desired block.\n\nNote that the block will be constructed in compressed form, i.e. the rows and columns of the store that are written into are the positions within I and J (as opposed to the positions within 1:numfunctions(test_space) and 1:numfunctions(trial_space)). In particular the size of the constructed block will be (length(I), length(J)).\n\nThis last property allows the assembly of permutations of the BEM matrix by supplying for I and J permutations of 1:numfunctions(test_space) and 1:numfunctions(trial_space).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.buffachristiansen",
    "page": "Docstrings",
    "title": "BEAST.buffachristiansen",
    "category": "function",
    "text": "buffachristiansen(Γ, γ)\n\nConstruct the set of Buffa-Christiansen functions subject to mesh Γ and only enforcing zero normal components on ∂Γ ∖ γ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.buildhalfbc",
    "page": "Docstrings",
    "title": "BEAST.buildhalfbc",
    "category": "function",
    "text": "buildhalfbc(fine, supp::Array{SVector{3,Int},1}, v, p)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.butcher_tableau_radau_2stages",
    "page": "Docstrings",
    "title": "BEAST.butcher_tableau_radau_2stages",
    "category": "function",
    "text": "butcher_tableau_radau_2stages()\n\nReturns (A,b,c) corresponding to the Butcher tableau for the 2 stage Radau IIA scheme.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.butcher_tableau_radau_3stages",
    "page": "Docstrings",
    "title": "BEAST.butcher_tableau_radau_3stages",
    "category": "function",
    "text": "butcher_tableau_radau_3stages()\n\nReturns (A,b,c) corresponding to the Butcher tableau for the 3 stage Radau IIA scheme.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.curl",
    "page": "Docstrings",
    "title": "BEAST.curl",
    "category": "function",
    "text": "curl(X)\n\nCompute the curl of a finite element basis. The resulting set of functions might be linearly dependent because of the kernel of the curl operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.divergence",
    "page": "Docstrings",
    "title": "BEAST.divergence",
    "category": "function",
    "text": "divergence(x)\n\nCompute the divergence of a finite element space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.duallagrangec0d1",
    "page": "Docstrings",
    "title": "BEAST.duallagrangec0d1",
    "category": "function",
    "text": "duallagrangec0d1(originalmesh, refinedmesh)\n\nIt is the user responsibility to provide two meshes representing the same object. The second mesh needs to be obtained using \"barycentric_refinement(originalmesh)\". This basis function creats the dual Lagrange basis function and return an object that contains array of shapes [fns] It also return a gemoetry containing the refined mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.duallagrangecxd0",
    "page": "Docstrings",
    "title": "BEAST.duallagrangecxd0",
    "category": "function",
    "text": "duallagrangecxd0(mesh, jct) -> basis\n\nBuild dual Lagrange piecewise constant elements. Boundary nodes are only considered if they are in the interior of jct.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.elements",
    "page": "Docstrings",
    "title": "BEAST.elements",
    "category": "function",
    "text": "elements(geo)\n\nCreate an iterable collection of the elements stored in geo. The order in which this collection produces the elements determines the index used for lookup in the data structures returned by assemblydata and quaddata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.facecurrents",
    "page": "Docstrings",
    "title": "BEAST.facecurrents",
    "category": "function",
    "text": "fcr, geo = facecurrents(coeffs, basis)\n\nCompute the value of the function with the given collection of coeffient in the provided basis in all the centroids of the mesh underlying the basis. The mesh is returned together with the currents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.geometry",
    "page": "Docstrings",
    "title": "BEAST.geometry",
    "category": "function",
    "text": "geometry(basis)\n\nReturns an iterable collection of geometric elements on which the functions in basis are defined. The order the elements are encountered needs correspond to the element indices used in the data structure returned by assemblydata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.getcommonedge",
    "page": "Docstrings",
    "title": "BEAST.getcommonedge",
    "category": "function",
    "text": "getcommonedge(cell1, cell2) -> e1, e2, edge\n\nReturns in edge the common vertices of cell1 and cell2. e1 contains the index of the vertex of cell1 opposite to this common edge, and with a plus or minus sign depending on whether the orientation of the common edge is along or against the internal orientation of cell1. Similar for e2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.getindex_rtg",
    "page": "Docstrings",
    "title": "BEAST.getindex_rtg",
    "category": "function",
    "text": "getindex_rtg(RT::RTBasis)\n\nReturns the indices of the global half RWGs present in RT. RT is typically gotten from rt_ports\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.inverse_z_transform",
    "page": "Docstrings",
    "title": "BEAST.inverse_z_transform",
    "category": "function",
    "text": "inverse_z_transform(k, rho, N, X)\n\nReturns the k-th term of the inverse z-transform. X is an array of the z-transform evaluated in the points z=rhoexp(2impin/N) for n in 0:(N-1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.lagdimension",
    "page": "Docstrings",
    "title": "BEAST.lagdimension",
    "category": "function",
    "text": "The dimension of the space of Lagrange shape functions of degree d over a simplex of dimension n is binom(n+d,d) == binom(n+d,n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.lagrangec0d1",
    "page": "Docstrings",
    "title": "BEAST.lagrangec0d1",
    "category": "function",
    "text": "lagrangec0d1(mesh; dirichlet=[true|false]) -> basis\n\nBuild lagrangec0d1 elements, including (dirichlet=false) or excluding (dirichlet=true) those attached to boundary vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.lagrangec0d1_dirichlet",
    "page": "Docstrings",
    "title": "BEAST.lagrangec0d1_dirichlet",
    "category": "function",
    "text": "lagrangec0d1(mesh[, bnd])\n\nConstruct the basis of continuous, piecewise linear basis functions subordinate to mesh mesh. Basis functions are constructed at vertices in the interionr of the mesh and on the closure of \'bnd\'. In particular, leaving out the second argument creates a finite element space subject to homogeneous Dirichlet boundary conditions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.laplace_to_z",
    "page": "Docstrings",
    "title": "BEAST.laplace_to_z",
    "category": "function",
    "text": "laplace_to_z(rho, n, N, dt, A, b)\n\nReturns the complex matrix valued Laplace variable s that correspond to the variable z = rhoexp(2impin/N) for a given Butcher tableau (A,b,c) and a time step dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.marchonintime",
    "page": "Docstrings",
    "title": "BEAST.marchonintime",
    "category": "function",
    "text": "marchonintime(W0,Z,B,I)\n\nSolve by marching-on-in-time the causal convolution problem defined by (W0,Z,B) up to timestep I. Here, Z is an array of order 3 that contains a discretisation of a time translation invariant retarded potential operator. W0 is the inverse of the slice Z[:,:,1].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.momintegrals!",
    "page": "Docstrings",
    "title": "BEAST.momintegrals!",
    "category": "function",
    "text": "regularcellcellinteractions!(biop, tshs, bshs, tcell, bcell, interactions, strat)\n\nFunction for the computation of moment integrals using simple double quadrature.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.move_after!",
    "page": "Docstrings",
    "title": "BEAST.move_after!",
    "category": "function",
    "text": "Move the s-th element right after the d-th\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.ntrace",
    "page": "Docstrings",
    "title": "BEAST.ntrace",
    "category": "function",
    "text": "ntrace(X::Space, γ::Mesh)\n\nCompute the normal trace of basis X on mesh γ. γ is assumed to be part of the boundary of geometry(X).\n\n\n\n\n\nntrace(refspace, element, localindex, face)\n\nCompute the normal trace of all local shape functions on elements belonging to refspace on face. This function returns a matrix expressing the traces of local shape functions in refspace as linear combinations of functions in the local trace space. Cf. restrict. localindex is the index of face in the enumeration of faces of elements. In many special cases knowing this index allows for highly optimised implementations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.numfunctions",
    "page": "Docstrings",
    "title": "BEAST.numfunctions",
    "category": "function",
    "text": "numfunctions(r)\n\nReturn the number of functions in a Space or RefSpace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.planewavemw3d",
    "page": "Docstrings",
    "title": "BEAST.planewavemw3d",
    "category": "function",
    "text": "planewavemw3d(;direction, polarization, wavenumber[, amplitude=1])\n\nCreate a plane wave solution to Maxwell\'s equations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.portcells",
    "page": "Docstrings",
    "title": "BEAST.portcells",
    "category": "function",
    "text": "portcells(Γ::Mesh, γ::Mesh)\n\nreturns an array containing cell pairs of mesh Γ around a boundary edge that overlaps with mesh γ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.qh",
    "page": "Docstrings",
    "title": "BEAST.qh",
    "category": "function",
    "text": "Q = qd(T,dh,::Val{N})\n\nQ[k] is the factor in front resulting from differentiating t^(k-1) dh times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.quaddata",
    "page": "Docstrings",
    "title": "BEAST.quaddata",
    "category": "function",
    "text": "quaddata(operator, test_refspace, trial_refspace, test_elements, trial_elements)\n\nReturns an object cashing data required for the computation of boundary element interactions. It is up to the client programmer to decide what (if any) data is cached. For double numberical quadrature, storing the integration points for example can significantly speed up matrix assembly.\n\noperator is an integration kernel.\ntest_refspace and trial_refspace are reference space objects. quadata\n\nis typically overloaded on the type of these local spaces of shape functions. (See the implementation in maxwell.jl for an example).\n\ntest_elements and trial_elements are iterable collections of the geometric\n\nelements on which the finite element space are defined. These are provided to allow computation of the actual integrations points - as opposed to only their coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.quadrule",
    "page": "Docstrings",
    "title": "BEAST.quadrule",
    "category": "function",
    "text": "quadrule(operator,test_refspace,trial_refspace,p,test_element,q_trial_element, qd)\n\nReturns an object that contains all the dynamic (runtime) information that defines the integration strategy that will be used by momintegrals! to compute the interactions between the local test/trial functions defined on the specified geometric elements. The indices p and q refer to the position of the test and trial elements as encountered during iteration over the output of geometry.\n\nThe last argument qd provides access to all precomputed data required for quadrature. For example it might be desirable to precompute all the quadrature points for all possible numerical quadrature schemes that can potentially be required during matrix assembly. This makes sense, since the number of point is order N (where N is the number of faces) but these points will appear in N^2 computations. Precomputation requires some extra memory but can save a lot on computation time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.raowiltonglisson",
    "page": "Docstrings",
    "title": "BEAST.raowiltonglisson",
    "category": "function",
    "text": "raviartthomas(mesh, cellpairs::Array{Int,2})\n\nConstructs the RT basis on the input mesh. The i-th RT basis function will     represent a current distribution flowing from cell cellpairs[1,i] to     cellpairs[2,i] on the mesh.\n\nReturns an object of type RTBasis, which comprises both the mesh and pairs of     Shape objects which corresponds to the cell pairs, containing the necsessary     coefficients and indices to compute the exact basis functions when required     by the solver.\n\n\n\n\n\nraviartthomas(mesh)\n\nConducts pre-processing on the input mesh by extracting the cell edges, cell pairs     and indices required to construct the RT basis on the mesh.\n\nCalls raviartthomas(mesh::Mesh, cellpairs::Array{Int,2}), which constructs     the RT basis on the mesh, using the cell pairs identified.\n\nReturns the RT basis object.\n\n\n\n\n\nraviartthomas(Γ, γ)\n\nConstructs the RT space relative to boundary γ of an open surface, only     selecting cell pairs whose common edge does not lie on γ . (This prevents     the calculation of physically-impossible surface currents, such as those     flowing \'off the edge\' of a surface.)\n\nCalls raviartthomas(Γ, duals) which constructs     the RT basis on the mesh, using the cell pairs identified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.raviartthomas",
    "page": "Docstrings",
    "title": "BEAST.raviartthomas",
    "category": "function",
    "text": "raviartthomas(mesh, cellpairs::Array{Int,2})\n\nConstructs the RT basis on the input mesh. The i-th RT basis function will     represent a current distribution flowing from cell cellpairs[1,i] to     cellpairs[2,i] on the mesh.\n\nReturns an object of type RTBasis, which comprises both the mesh and pairs of     Shape objects which corresponds to the cell pairs, containing the necsessary     coefficients and indices to compute the exact basis functions when required     by the solver.\n\n\n\n\n\nraviartthomas(mesh)\n\nConducts pre-processing on the input mesh by extracting the cell edges, cell pairs     and indices required to construct the RT basis on the mesh.\n\nCalls raviartthomas(mesh::Mesh, cellpairs::Array{Int,2}), which constructs     the RT basis on the mesh, using the cell pairs identified.\n\nReturns the RT basis object.\n\n\n\n\n\nraviartthomas(Γ, γ)\n\nConstructs the RT space relative to boundary γ of an open surface, only     selecting cell pairs whose common edge does not lie on γ . (This prevents     the calculation of physically-impossible surface currents, such as those     flowing \'off the edge\' of a surface.)\n\nCalls raviartthomas(Γ, duals) which constructs     the RT basis on the mesh, using the cell pairs identified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.real_inverse_z_transform",
    "page": "Docstrings",
    "title": "BEAST.real_inverse_z_transform",
    "category": "function",
    "text": "real_inverse_z_transform(k, rho, N, X)\n\nReturns the k-th term of the inverse z-transform. It is assumed that X[n+1] = conj(X[N-n]) for each n in 1:(N-1) so that Nmax = N/2+1 or (N+1)/2 (resp. if N%2==0 or N%2==1) terms are used in X X is an array of the z-transform evaluated in the points z=rhoexp(2impin/N) for n in 0:(Nmax-1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.refspace",
    "page": "Docstrings",
    "title": "BEAST.refspace",
    "category": "function",
    "text": "refspace(basis)\n\nReturns the ReferenceSpace of local shape functions on which the basis is built.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.restrict",
    "page": "Docstrings",
    "title": "BEAST.restrict",
    "category": "function",
    "text": "restrict(refspace, element1, element2)\n\nComputes the restriction of a set of local shape functions on element1 as linear combinations of the set of local shape functions on element2. More precisely restrict returns an NxM matrix P such that the i-th local shape g_i function on element2 can be written as:\n\ng_i = sum_j=1^M P_ij f_j\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.rt_cedge",
    "page": "Docstrings",
    "title": "BEAST.rt_cedge",
    "category": "function",
    "text": "rt_cedge(cps::Array{Int,2}, weight)\n\nComputes single basis function with equally distributed constant current leaving or entering port defined by cellpairs cps.  weight defines the total current over the port and its direction (+ve = out, -ve = in)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.rt_ports",
    "page": "Docstrings",
    "title": "BEAST.rt_ports",
    "category": "function",
    "text": "rt_ports(Γ::Mesh, γ::Mesh ...)\n\nConstructs the RT space on Γ, relative to boundary pairs in γ. γ expects any number of pairs-of-ports as arguments and accepts tuples, arrays, vectors etc. e.g rt_ports(Γ, a, b ...); where a = [γ₁ γ₂], b = (γ₃,γ₄) etc. rt_ports with no pair of ports supplied i.e rt_ports(Γ) reduces to the raviartthomas(Γ) function. The RT space ensures current continuity in each pair of ports. i.e. current leaving mesh Γ through γ₁ is accounted for in γ₂.\n\nReturns the RT basis object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.rt_vedge",
    "page": "Docstrings",
    "title": "BEAST.rt_vedge",
    "category": "function",
    "text": "rt_vedge(cps::Array{Int,2}, weight)\n\nComputes n-1 basis function with oscillating current in(leaving and entering) pairs of half triangles defined over port specified by cellpairs cps. weight defines the magnitude of individual current in and out the half triangles, and it\'s polarity simply defines whether to start with in or out\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.scalartype",
    "page": "Docstrings",
    "title": "BEAST.scalartype",
    "category": "function",
    "text": "scalartype(x)\n\nThe scalar field over which the values of a global or local basis function, or an operator are defined. This should always be a scalar type, even if the basis or operator takes on values in a vector or tensor space. This data type is used to determine the eltype of assembled discrete operators.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.singleduallagd0",
    "page": "Docstrings",
    "title": "BEAST.singleduallagd0",
    "category": "function",
    "text": "singleduallagd0(fine, F, v)\n\nBuild a single dual constant Lagrange element a mesh fine. F contains the indices to cells in the support and v is the index in the vertex list of the defining vertex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.solve",
    "page": "Docstrings",
    "title": "BEAST.solve",
    "category": "function",
    "text": "Solves a variational equation by simply creating the full system matrix and calling a traditional lu decomposition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.timebasisc0d1",
    "page": "Docstrings",
    "title": "BEAST.timebasisc0d1",
    "category": "function",
    "text": "timebasisc0d1(type, timestep, numfunctions)\n\nBuild the space of continuous, piecewise linear time basis functions. The DoFs are the time steps. numfunctions basis functions will be built in total.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.timebasiscxd0",
    "page": "Docstrings",
    "title": "BEAST.timebasiscxd0",
    "category": "function",
    "text": "timebasiscxd0(timestep, numfunctions, T::Type=Float64)\n\nCreate a temporal basis based on shifted copies of the nodal continuous, piecewise linear interpolant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BEAST.timebasisspline2",
    "page": "Docstrings",
    "title": "BEAST.timebasisspline2",
    "category": "function",
    "text": "timebasisspline2(timestep, numfunctions, T::Type=Float64)\n\nCreate a temporal basis based on shifted copies of the quadratic spline. The spline is the convolution of a cxd0 and a c0d1 basis function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BEAST.@discretiseBEAST.@hilbertspaceBEAST.@varformBEAST.ADIteratorBEAST.AbstractOperatorBEAST.AbstractSpaceBEAST.AbstractTimeBasisFunctionBEAST.AssemblyDataBEAST.AssemblyDataElBEAST.BDMBasisBEAST.BDMRefSpaceBEAST.BEASTBEAST.BernsteinBEAST.ContinuityBEAST.CrossTraceMWBEAST.CurlSingleLayerDP3DBEAST.DiagonalizedMatrixBEAST.DiracBoundaryBEAST.DirectProductSpaceBEAST.DiscreteEquationBEAST.DoubleLayerBEAST.DoubleLayerRotatedMW3DBEAST.DoubleLayerTransposedBEAST.DoubleQuadStrategyBEAST.EmptyRPBEAST.ErrorFunctionBEAST.FunctionalBEAST.GMRESSolverBEAST.GaussianBEAST.HH3DDoubleLayerBEAST.HH3DDoubleLayerTDBIOBEAST.HH3DDoubleLayerTransposedBEAST.HH3DHyperSingularFDBIOBEAST.HH3DPlaneWaveBEAST.HH3DSingleLayerFDBIOBEAST.HH3DSingleLayerRegBEAST.HH3DSingleLayerSngBEAST.HH3DSingleLayerTDBIOBEAST.Helmholtz3DBEAST.Helmholtz3DOpBEAST.Helmholtz3DOpRegBEAST.HelmholtzOperator2DBEAST.HyperSingularBEAST.IdentityBEAST.IntegralOperatorBEAST.KernelValsHelmholtz2DBEAST.KernelValsMaxwell3DBEAST.LagrangeBasisBEAST.LagrangeRefSpaceBEAST.LinearCombinationOfOperatorsBEAST.LinearSpaceBEAST.LocalOperatorBEAST.MWDL3DGenBEAST.MWDL3DIntegrandBEAST.MWDL3DIntegrand2BEAST.MWDoubleLayer3DBEAST.MWDoubleLayer3DRegBEAST.MWDoubleLayer3DSngBEAST.MWDoubleLayerTDIOBEAST.MWFarField3DBEAST.MWFarField3DTDBEAST.MWHyperSingularBEAST.MWOperator3DBEAST.MWSL3DGenBEAST.MWSL3DIntegrandBEAST.MWSL3DIntegrand2BEAST.MWSingleLayer3DBEAST.MWSingleLayer3DRegBEAST.MWSingleLayer3DSngBEAST.MWSingleLayerField3DBEAST.MWSingleLayerPotential3DBEAST.MWSingleLayerTDIOBEAST.MWWeaklySingularBEAST.MatrixConvolutionBEAST.Maxwell3DBEAST.MaxwellOperator3DBEAST.MaxwellOperator3DRegBEAST.MonomialBasisBEAST.MultiQuadStrategyBEAST.NCrossBEAST.NDBasisBEAST.NDRefSpaceBEAST.NDotTraceBEAST.NitscheHH3BEAST.NormalDerivativeBEAST.NormalVectorBEAST.NumQuadStrategyBEAST.OperatorBEAST.PieceWisePolynomialBEAST.PlaneWaveDirichletBEAST.PlaneWaveHH3DTDBEAST.PlaneWaveMWBEAST.PlaneWaveMWTDBEAST.PlaneWaveNeumannBEAST.PolynomialBEAST.RTBasisBEAST.RTRefSpaceBEAST.RefSpaceBEAST.RetardedPotentialBEAST.RungeKuttaConvolutionQuadratureBEAST.ScalarTraceBEAST.ShapeBEAST.SingleLayerBEAST.SingleLayerTraceBEAST.SingleQuadStrategyBEAST.SingleQuadStrategy2BEAST.SingularityExtractionStrategyBEAST.SpaceBEAST.SpaceTimeBasisBEAST.SparseNDBEAST.StagedTimeStepBEAST.TDFunctionalBEAST.TangTraceMWBEAST.TemporalDifferentiationBEAST.TensorOperatorBEAST.TimeBasisDeltaBEAST.TimeBasisDeltaShiftedBEAST.TimeBasisFunctionBEAST.TransposedOperatorBEAST.ValDivBEAST.VariationalBEAST.WiltonInts84StratBEAST.WiltonSEStrategyBEAST._legendreBEAST.add!BEAST.allocatestorageBEAST.assembleBEAST.assemble!BEAST.assemble_local_matched!BEAST.assemble_local_mixed!BEAST.assemble_st!BEAST.assembleblockBEAST.assembleblock!BEAST.assembleblock_body!BEAST.assembleblock_primerBEAST.assemblechunk!BEAST.assemblechunk_body!BEAST.assemblechunk_body_nested_meshes!BEAST.assemblecolBEAST.assemblecol!BEAST.assemblecol_body!BEAST.assemblerowBEAST.assemblerow!BEAST.assemblerow_body!BEAST.assemblyBEAST.assemblydataBEAST.basisfunctionBEAST.blockassemblerBEAST.brezzidouglasmariniBEAST.buffachristiansenBEAST.buildhalfbcBEAST.butcher_tableau_radau_2stagesBEAST.butcher_tableau_radau_3stagesBEAST.cellcellinteractions!BEAST.cellinteractionsBEAST.celltestvaluesBEAST.collapse_shapesBEAST.companionBEAST.convolveBEAST.coordtypeBEAST.creategaussianBEAST.crossBEAST.curlBEAST.degreeBEAST.deriveBEAST.diagonalizedmatrixBEAST.discretiseBEAST.divergenceBEAST.dotBEAST.duallagrangec0d1BEAST.duallagrangecxd0BEAST.elementsBEAST.elementstreeBEAST.evalBEAST.evaluateBEAST.facecurrentsBEAST.facesBEAST.farfieldlocal!BEAST.fouriertransformBEAST.geometryBEAST.get_scatter_parametersBEAST.getcommonedgeBEAST.getindex_rtgBEAST.gmresBEAST.includeBEAST.index_activesBEAST.innerintegrals!BEAST.instantiate_chartsBEAST.integrandBEAST.integrateBEAST.interior_and_junction_verticesBEAST.inverse_z_transformBEAST.isclosedBEAST.kernel_in_baryBEAST.kernelvalsBEAST.lagdimensionBEAST.lagrangec0d1BEAST.lagrangec0d1_dirichletBEAST.lagrangecxd0BEAST.laplace_to_zBEAST.localoperatorBEAST.localoperator2BEAST.make_celltonumBEAST.marchonintimeBEAST.momintegrals!BEAST.momintegrals_nested!BEAST.move_after!BEAST.move_before!BEAST.nBEAST.nedelecBEAST.ntraceBEAST.numfunctionsBEAST.numintervalsBEAST.operatorBEAST.planewaveBEAST.planewavemw3dBEAST.portcellsBEAST.positionsBEAST.potentialBEAST.potential!BEAST.qhBEAST.qrdfBEAST.qribBEAST.qrssBEAST.quaddataBEAST.quadruleBEAST.raowiltonglissonBEAST.raviartthomasBEAST.real_inverse_z_transformBEAST.refspaceBEAST.regularpartBEAST.regularpart_quadruleBEAST.relorientationBEAST.restrictBEAST.rhsBEAST.rt_cedgeBEAST.rt_portsBEAST.rt_vedgeBEAST.scalartypeBEAST.shapevalsBEAST.singleduallagd0BEAST.singularpartBEAST.solveBEAST.sortneighborsBEAST.spatialbasisBEAST.straceBEAST.subReferenceSpaceBEAST.subdBasisBEAST.subdsurfaceBEAST.subsetBEAST.substituteBEAST.sysmatrixBEAST.td_solveBEAST.temporalassemblydataBEAST.temporalbasisBEAST.testfunc1BEAST.timebasisc0d1BEAST.timebasiscxd0BEAST.timebasisdeltaBEAST.timebasisshiftedlagrangeBEAST.timebasisspline2BEAST.timeintegrals!BEAST.timequadruleBEAST.timestepBEAST.tmRoRBEAST.tmRoRfBEAST.valuetypeBEAST.x̂BEAST.×BEAST.ŷBEAST.ẑBEAST.∂nBEAST.⊗"
},

]}
