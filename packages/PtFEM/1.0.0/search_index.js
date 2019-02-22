var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PtFEM-1",
    "page": "Readme",
    "title": "PtFEM",
    "category": "section",
    "text": "(Image: Project Status: WIP - Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.)(Image: Coverage Status) (Image: codecov)Unix/OSX:  (Image: Travis Build Status)Windows(64bit):  (Image: Build status)Documentation: (Image: )"
},

{
    "location": "#The-\"Programming-the-Finite-Element-Method\"-toolkit-1",
    "page": "Readme",
    "title": "The \"Programming the Finite Element Method\" toolkit",
    "category": "section",
    "text": "This Julia package currently contains the programs in chapters 4, 5 and early sections of 6 as described in \"Programming the Finite Element Method\" by I M Smith, D V Griffiths and L. Margetts (PtFEM).I use PtFEM when referring to the book and PtFEM.jl when referring to the Julia package.  The authors and publisher have given permission to publish the Julia version of the PtFEM toolkit. Please refer to LICENSE for more details."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "PtFEM, the book, will always remain the primary documentation for this package. Additional programming documentation will be available through Julia\'s documenter package, e.g. in-line after installing the package:use PtFEM\n?StructuralElementand full documentation can be found  here."
},

{
    "location": "#Timeline-1",
    "page": "Readme",
    "title": "Timeline",
    "category": "section",
    "text": "Please note that no hard timeline is set when this work in progress will be finished. TODO contains a list of next steps. VERSIONS holds the tagged version history."
},

{
    "location": "#Related-work-1",
    "page": "Readme",
    "title": "Related work",
    "category": "section",
    "text": "Fundamental and great development work related to solving (partial) differential equations is done in several other Julia packages, e.g. ApproxFun.jl, DifferentialEquations.jl, JuliaFEM.jl and  JuaFEM.jl to name a few.Outside of Julia at least 2 other toolkits should be mentioned, i.e.  deal.II and FEniCS."
},

{
    "location": "#Rerences-1",
    "page": "Readme",
    "title": "Rerences",
    "category": "section",
    "text": "References will be kept here."
},

{
    "location": "#Participation-and-feedback-1",
    "page": "Readme",
    "title": "Participation and feedback",
    "category": "section",
    "text": "As always, feedback is welcome, please send me an email, file an issue on Github or generate a pull request (PR).Rob J Goedman July 2018"
},

{
    "location": "autodocs/#PtFEM.Beam",
    "page": "Docstrings",
    "title": "PtFEM.Beam",
    "category": "type",
    "text": "Beam\n\nConcrete structural element with transverse and moment loading.\n\nConstructor\n\nBeam(ndim, nst, nxe, nip, direction, fin_el, axisymmetric)\n\nArguments\n\n* ndim::Int             : Number of dimensions\n* nst::Int              : Number of stress terms\n* nxe::Int              : Number of different property types\n* nip::Int              : Number of integration points\n* direction::Symbol     : Number of integration points\n* fin_el::FiniteElement : Line(nod, nodof)\n* axisymmetric::Bool    : Axisymmetric if true\n\nRelated help\n\n?StructuralElement      : Help on structural elements\n?FiniteElement          : Help on finite element types\n?Line                   : Help on a Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.FEM",
    "page": "Docstrings",
    "title": "PtFEM.FEM",
    "category": "type",
    "text": "FEM\n\nComputational structure used in chapter 5 (Skyline format used)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.FiniteElement",
    "page": "Docstrings",
    "title": "PtFEM.FiniteElement",
    "category": "type",
    "text": "FiniteElement\n\nAbstract finite element type.\n\nType\n\nabstract type FiniteElement end\n\nSubtypes\n\n* Line::FiniteElement          : 1D Line(nod, nodof)\n* Triangle::FiniteElement      : 2D Triangle(nod, nodof)\n* Quadrilateral::FiniteElement : 2D Quadrilateral(nod, nodof)\n* Hexahedron::FiniteElement    : 3D Hexahedron(nod, nodof)\n* Tetrahedron::FiniteElement   : 3D Tetrahedron(nod, nodof)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Frame",
    "page": "Docstrings",
    "title": "PtFEM.Frame",
    "category": "type",
    "text": "Frame\n\nPin- or rigid-jointed structural element.\n\nConstructor\n\nFrame(nels, nn, ndim, finite_element(nod, nodof))\n\nArguments\n\n* nels::Int             : Number of elements\n* nn:Int                : Number of nodes\n* ndim::Int             : Number of dimensions\n* nst::Int              : Number of stress terms\n* nip::Int              : Number of integration points\n* fin_el::FiniteElement : Line(nod, nodof)\n\nRelated help\n\n?StructuralElement  : List structural elements\n?FiniteElement      : List finite element types\n?Line               : Help on a Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.GenericSolid",
    "page": "Docstrings",
    "title": "PtFEM.GenericSolid",
    "category": "type",
    "text": "GenericSolid\n\nSolid structural element.\n\nConstructor\n\nGenericSolid(ndim, nst, nels, nn, nip, finite_element(nod, nodof), axisymmetric)\n\nArguments\n\n* ndim::Int               : Number of dimensions\n* nst::Int                : Number of stress terms\n* nels::Int               : Number of finite elements\n* nn::Int                 : Number of nodes\n* nip::Int                : Number of integration points\n* fin_el::FiniteElement   : Finite element type used\n* axisymmetric::Bool      : Axisymmetric\n\nRelated help\n\n?StructuralElement  : List structural elements\n?FiniteElement      : List finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Hexahedron",
    "page": "Docstrings",
    "title": "PtFEM.Hexahedron",
    "category": "type",
    "text": "hexahedron\n\n3D type finite element\n\nConstructor\n\nHexahedron(nod, nodof)\n\nArguments\n\n* nod::Int       : Number of nodes for finite element (8, 14, 20)\n* nodof::Int     : Number of degrees of freedom per node\n\nRelated help\n\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Line",
    "page": "Docstrings",
    "title": "PtFEM.Line",
    "category": "type",
    "text": "Line (Interval)\n\n1D type finite element\n\nConstructor\n\nLine(nod, nodof)\nLine(nodof)\n\nArguments\n\n* nod::Int       : Number of nodes for finite element, defaults to 2\n* nodof::Int     : Number of degrees of freedom per node\n\nRelated help\n\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Plane",
    "page": "Docstrings",
    "title": "PtFEM.Plane",
    "category": "type",
    "text": "Plane\n\nPlate structural element.\n\nConstructor\n\nPlane(ndim, nst, nxe, nye, nip, dir, finite_element(nod, nodof), axisymmetric)\n\nArguments\n\n* ndim::Int               : Number of dimensions\n* nst::Int                : Number of stress terms\n* nxe::Int                : Number of elements in x direction\n* nye::Int                : Number of elements in y direction\n* nip::Int                : Number of integration points\n* dir::Symbol             : Direction of node numbering\n* fin_el::FiniteElement   : Line(nod, nodof)\n* axisymmetric::Bool      : Axisymmetric\n\nRelated help\n\n?StructuralElement  : List structural elements\n?FiniteElement      : List finite element types\n?Line               : Help on a Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Quadrilateral",
    "page": "Docstrings",
    "title": "PtFEM.Quadrilateral",
    "category": "type",
    "text": "Quadrilateral\n\n2D type finite element\n\nConstructor\n\nQuadrilateral(nod, nodof)\n\nArguments\n\n* nod::Int       : Number of nodes for finite element (4, 8, 9)\n* nodof::Int     : Number of degrees of freedom per node\n\nRelated help\n\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Rod",
    "page": "Docstrings",
    "title": "PtFEM.Rod",
    "category": "type",
    "text": "Rod\n\nConcrete 1D structural element with only axial stresses.\n\nConstructor\n\nRod(nels, np_types, nip, fin_el)\n\nArguments\n\n* nels::Int             : Number of fin_els (stored in field nxe)\n* np_types::Int         : Number of different property types\n* nip::Int              : Number of integration points\n* fin_el::FiniteElement : Line(nod, nodof)\n\nRelated help\n\n?StructuralElement      : Help on structural elements\n?FiniteElement          : Help on finite element types\n?Line                   : Help on a Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Solid",
    "page": "Docstrings",
    "title": "PtFEM.Solid",
    "category": "type",
    "text": "Solid\n\nSolid structural element.\n\nConstructor\n\nSolid(ndim, nst, nxe, nye, nze, nip, finite_element(nod, nodof))\n\nArguments\n\n* ndim::Int             : Number of dimensions\n* nst::Int              : Number of stress terms\n* nxe::Int              : Number of elements in x direction\n* nye::Int              : Number of elements in y direction\n* nze::Int              : Number of elements in z direction\n* nip::Int              : Number of integration points\n* fin_el::FiniteElement : Line(nod, nodof)\n\nRelated help\n\n?StructuralElement  : List structural elements\n?FiniteElement      : List finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.StructuralElement",
    "page": "Docstrings",
    "title": "PtFEM.StructuralElement",
    "category": "type",
    "text": "StructuralElement\n\nAbstract structural element type.\n\nType\n\nabstract type StructuralElement end\n\nSubtypes\n\n* Rod::StructuralElement          : Rod(nxe, np_types, nip, fin_el)\n* Beam::StructuralElement         : Beam(nod, nodof)\n* Frame::StructuralElement        : Frame(nod, nodof)\n* Plane::StructuralElement        : Plane(nod, nodof)\n* Solid::StructuralElement        : Solid(nod, nodof)\n* GenericSolid::StructuralElement : GenericSolid(nod, nodof)\n\nRelated help\n\n?FiniteElement                    : Show all finite elements\n?Rod                              : Help on Rod structural element\n?Beam                             : Help on Beam structural element\n?Frame                            : Help on Frame structural element\n?Plane                            : Help on Plane structural element\n?Solid                            : Help on Solid structural element\n?GenericSolid                     : Help on GenericSolid structural element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Tetrahedron",
    "page": "Docstrings",
    "title": "PtFEM.Tetrahedron",
    "category": "type",
    "text": "Tetrahedron\n\n3D type finite element\n\nConstructor\n\nTetrahedron(nod, nodof)\nTetrahedron(nodof)\n\nArguments\n\n* nod::Int       : Number of nodes for finite element (defaults to 4)\n* nodof::Int     : Number of degrees of freedom per node\n\nRelated help\n\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.Triangle",
    "page": "Docstrings",
    "title": "PtFEM.Triangle",
    "category": "type",
    "text": "Triangle\n\n2D type finite element\n\nConstructor\n\nTriangle(nod, nodof)\n\nArguments\n\n* nod::Int       : Number of nodes for finite element (3, 6, 10, 15)\n* nodof::Int     : Number of degrees of freedom per node\n\nRelated help\n\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.beam_gm",
    "page": "Docstrings",
    "title": "PtFEM.beam_gm",
    "category": "function",
    "text": "beam_gm\n\nThis subroutine forms the beam geometric matrix for stability analysis.\n\nMethod\n\nbeam_gm(ell::Float64)\n\nArguments\n\n* ell::Float64                   : Element length\n\nReturn value\n\n* gm::::Matrix{Float64}(4,4)     : Geometric matrix for beam element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.beam_km",
    "page": "Docstrings",
    "title": "PtFEM.beam_km",
    "category": "function",
    "text": "beam_km\n\nThis subroutine forms the stiffness matrix of a beam element (bending only).\n\nMethod\n\nbeam_km(ei, ell)\n\nArguments\n\n* ei::Float64               : Element stiffness\n* ell::Float64              : Element length\n\nReturn value\n\n* km::::Matrix{Float64}     : Stiiness matrix for beam element (Updated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.beam_mm",
    "page": "Docstrings",
    "title": "PtFEM.beam_mm",
    "category": "function",
    "text": "beam_mm\n\nThis subroutine forms the stiffness matrix of a beam element (bending only).\n\nMethod\n\nbeam_mm(ei, ell)\n\nArguments\n\n* fs::Float64               : Element density\n* ell::Float64              : Element length\n\nReturn value\n\n* mm::::Matrix{Float64}     : Mass matrix for beam elembeam_mmated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.beemat!",
    "page": "Docstrings",
    "title": "PtFEM.beemat!",
    "category": "function",
    "text": "beemat!\n\nThis subroutine forms the strain-displacement matrix for axisymmetric solids subjected to non-axisymmetric loading.\n\nMethod\n\nbeemat!(bee, deriv)\n\nArguments\n\n* bee::Matrix{Float64}         : Bee matrix (Updated)\n* deriv::Matrix{Float64}       : Derivative\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.bmat_nonaxi!",
    "page": "Docstrings",
    "title": "PtFEM.bmat_nonaxi!",
    "category": "function",
    "text": "bmat_nonaxi!\n\nThis subroutine forms the strain-displacement matrix for axisymmetric solids subjected to non-axisymmetric loading.\n\nMethod\n\nbmat_nonaxi!(bee, radius, coord, deriv, fun, iflag, lth)\n\nArguments\n\n* bee::Matrix{Float64}         : Bee matrix (Updated)\n* radius::Float64              : r coordinate of the Gauss point\n* coord::Matrix{Float64}       : Nodal coordinate matrix\n* deriv::Matrix{Float64}       : Derivative\n* fun::Vector{Float64}         : Shape function\n* iflag::Int                 : 1 = symmetric, -1 = anti-symmetric\n* lth::Int                   : Harmonic\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.checon",
    "page": "Docstrings",
    "title": "PtFEM.checon",
    "category": "function",
    "text": "checon\n\nThis subroutine sets converged to .FALSE. if relative change in loads and oldlds is greater than tol and updates oldlds.\n\nMethod\n\nchecon(loads, oldlds, tol)\n\nArguments\n\n* loads::Vector{Float64}        : Displacements vector/OffsetArray\n* oldlds::Vector{Float64}       : Previous displacement vector/OffsetArray\n* tol::Float64                  : Convergence tolerance\n\nReturn value\n\n* ::Bool                        : Convergence achieved\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.deemat!",
    "page": "Docstrings",
    "title": "PtFEM.deemat!",
    "category": "function",
    "text": "deemat!\n\nThis subroutine returns the elastic dee matrix for ih=3 (plane strain), ih=4 (axisymmetry or plane strain elastoplasticity) or ih=6 (three dimensions).\n\nMethod\n\ndeemat!(dee, e, v)\n\nArguments\n\n* dee::Matrix{Float64}         : Dee matrix (Updated)\n* e::Float64                   : Young\'s modulus\n* v::Float64                   : Poisson\'s ratio\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.fkdiag!",
    "page": "Docstrings",
    "title": "PtFEM.fkdiag!",
    "category": "function",
    "text": "fkdiag!\n\nThis subroutine returns the elastic dee matrix for ih=3 (plane strain), ih=4 (axisymmetry or plane strain elastoplasticity) or ih=6 (three dimensions).\n\nMethod\n\nfkdiag!(kdiag, g)\n\nArguments\n\n* kdiag::Vector{Int}      : Bandwidth vector (Updated)\n* g::Vector{Int}          : Element steering vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.fmplat!",
    "page": "Docstrings",
    "title": "PtFEM.fmplat!",
    "category": "function",
    "text": "fmplat!\n\nThis subroutine forms the 2nd derivatives for rectangular plate bending fin_els.\n\nMethod\n\nfmplat!(d2x, d2y, d2xy, points, aa, bb, i)\n\nArguments\n\n* d2x::Vector{Float64}       : x derivative term (Updated)\n* d2y::Vector{Float64}       : y derivative term (Updated)\n* d2xy::Vector{Float64}      : x,y derivative term (Updated)\n* points::Matrix{Float64}    : Location of Gauss points\n* aa::Float64                : Dimension of plate\n* bb::Float64                : Dimension of plate\n* i::Int                   : Gauss point to use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.formm!",
    "page": "Docstrings",
    "title": "PtFEM.formm!",
    "category": "function",
    "text": "formm!\n\nThis subroutine forms the derivatives of the invariants with respect to stress in 2- or 3-d. See equation 6.25.\n\nFunction\n\nformm!(stress, m1, m2, m3)\n\nArguments\n\n* stress::Vector{Float64}    : Stress vector, see eq 6.25\n* m1::Matrix{Float64}        : m1 matrix\n* m2::Matrix{Float64}        : m2 matrix\n* m3::Matrix{Float64}        : m3 matrix\n\nReturn values\n\n* m1::Matrix{Float64}        : m1 matrix\n* m2::Matrix{Float64}        : m2 matrix\n* m3::Matrix{Float64}        : m3 matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.formnf!",
    "page": "Docstrings",
    "title": "PtFEM.formnf!",
    "category": "function",
    "text": "formnf!\n\nReturns nodal freedom numbering array nf\n\nFunction\n\nformnf!(nodof, nn, nf)\n\nArguments\n\n* nodof::Int       : Number of degrees of freedom for each node\n* nn::Int          : Number of nodes in mesh\n* nf::Array{Int,2} : Nodal freedom matrix (updated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.fromSkyline",
    "page": "Docstrings",
    "title": "PtFEM.fromSkyline",
    "category": "function",
    "text": "fromSkyline\n\nHelper function to convert a Skyline vector to a full matrix.\n\nType\n\nfromSkyline(skyline::Vector{Float64}, kdiag::Vector{Int})\n\nArguments\n\n* skyline::Vector{Float64}     : 1D Line(nod, nodof)\n* kdiag::Vector{Int}         : 2D Triangle(nod, nodof)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.fsparm!",
    "page": "Docstrings",
    "title": "PtFEM.fsparm!",
    "category": "function",
    "text": "fsparm!\n\nFunction fsparm assembles fin_el matrices into a Julia sparse global stiffness matrix.\n\nMethod\n\nfsparm!(gsm, g, km)\n\nArguments\n\n* gsm::SparseArrays{Float64, Float64}   : Sparse stiffnes matrix (Updated)\n* g::Vector{Int}                      : Global coordinate vector.\n* km::Matrix{Float64}                   : Stiffness matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.fsparv!",
    "page": "Docstrings",
    "title": "PtFEM.fsparv!",
    "category": "function",
    "text": "fsparv!\n\nFunction fsparv! assembles fin_el matrices into a symmetric skyline global matrix. The Skyline vector kv is updated.\n\nMethod\n\nfsparv!(kv, km, g, km)\n\nArguments\n\n* kv::Vector{Float64}        : Sparse stiffnes matrix (Updated)\n* km::Matrix{Float64}        : Symmetric element stiffnes matrix\n* g::Vector{Int}           : Global steering vector.\n* kdiag::Vector{Int}       : Location of diagoinal terms\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.geom_rect!",
    "page": "Docstrings",
    "title": "PtFEM.geom_rect!",
    "category": "function",
    "text": "geom_rect!\n\nThis subroutine forms the coordinates and connectivity for a rectangular mesh of right angled triangular elements (3, 6, 10 or 15-node) or quadrilateral elements (4, 8 or 9-node) counting in the x- or y-dir. \n\nMethod\n\ngeom_rect!(fin_el, iel, x_coords, y_coords, coord, num, dir)\n\nArguments\n\n* fin_el::FiniteElement            : Shape of finite element\n                                     (Trangle or Quadrilateral)\n* iel::Int                       : Element number\n* x_coords::FloatRange{Float64}    : x coordinates\n* y_coords::FloatRange{Float64}    : y coordinates\n* coord::Matrix{Float64}           : Nodal coordinates (Updated)\n* num::Vector{Int}               : Node numbers (Updated)\n* dir::Symbol                      : Node numbering direction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.glob_to_axial",
    "page": "Docstrings",
    "title": "PtFEM.glob_to_axial",
    "category": "function",
    "text": "globtoaxial\n\nThis subroutine transforms the global end reactions into an axial force for rod fin_els (2- or 3-d).\n\nFunction\n\nglob_to_axial(glob, coord)\n\nArguments\n\n* glob::Vector{Float64}      : Globale forces and moments\n* coord::Matrix{Float64}     : Nodal coordinates\n\nREturn value\n\n* ::Float64                  : Axial force\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.glob_to_loc!",
    "page": "Docstrings",
    "title": "PtFEM.glob_to_loc!",
    "category": "function",
    "text": "globtoloc!\n\nThis subroutine transforms the global end reactions and moments into the local system (2- or 3-d). Called from hinge!().\n\nFunction\n\nglob_to_loc!(loc, glob, gamma, coord)\n\nArguments\n\n* loc::Vector{Float64}       : Local force and momemts (Updated)\n* glob::Vector{Float64}      : Globale forces and moments\n* gamma::Float64             : Element orientation angle (3D)\n* coord::Matrix{Float64}     : Nodal coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.hexahedron_xz!",
    "page": "Docstrings",
    "title": "PtFEM.hexahedron_xz!",
    "category": "function",
    "text": "hexahedron_xz!\n\nThis subroutine generates nodal coordinates and numbering for 8, 14 or 20-node \"bricks\" counting x-z planes in the y-direction. \n\nMethod\n\nhexahedron_xz!(iel, x_coords, y_coords, z_coords, coord, num)\n\nArguments\n\n* iel::Int                       : Element number\n* x_coords::FloatRange{Float64}    : x coordinates\n* y_coords::FloatRange{Float64}    : y coordinates\n* z_coords::FloatRange{Float64}    : y coordinates\n* coord::Matrix{Float64}           : Nodal coordinates (Updated)\n* num::Vector{Int}               : Node numbers (Updated)\n* dir::Symbol                      : Node numbering direction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.hinge!",
    "page": "Docstrings",
    "title": "PtFEM.hinge!",
    "category": "function",
    "text": "hinge!\n\nThis subroutine forms the end forces and moments to be applied to a member if a joint has gone plastic.\n\nFunction\n\nhinge!(coord, holdr, action, react, prop, iel, etype, gamma)\n\nArguments\n\n* coord::Matrix{Float64}     : Nodal coordinates\n* holdr::Matrix{Float64}     : Existing reactions\n* action::Vector{Float64}    : Incremental reactions\n* react::Vector{Float64}     : Correction to reactions (Updated)\n* prop::Matrix{Float64}      : Beam properties\n* iel::Int                 : Element number\n* etype::Vector{Int}       : Element type\n* gamma::Vector{Float64}     : Element orientation (3D)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.invar",
    "page": "Docstrings",
    "title": "PtFEM.invar",
    "category": "function",
    "text": "invar\n\nThis subroutine forms the stress invariants in 2- or 3-d. See equations 6.3 and 6.4\n\nFunction\n\ninvar(stress, sigm, dsbar, theta)\n\nArguments\n\n* stress::Vector{Float64}    : Stress vector\n* sigm::Float64              : Invariant, eq 6.4 (Updated)\n* dsbar::Float64             : Invariant, eq 6.4 (Updated)\n* theta::Float64             : Invariant, eq 6.3 (Updated)\n\nREturn values\n\n* stress::Vector{Float64}    : Stress vector\n* sigm::Float64              : Invariant, eq 6.4 (Updated)\n* dsbar::Float64             : Invariant, eq 6.4 (Updated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.jFEM",
    "page": "Docstrings",
    "title": "PtFEM.jFEM",
    "category": "type",
    "text": "jFEM\n\nComputational structure used in chapter 4 (Julia Sparse matrices used)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.linmul_sky!",
    "page": "Docstrings",
    "title": "PtFEM.linmul_sky!",
    "category": "function",
    "text": "linmul_sky!\n\nThis subroutine forms the product of symmetric matrix stored as a skyline and a vector.\n\nMethod\n\nlinmul_sky!(kv, disps, loads, kdiag)\n\nArguments\n\n* kv::Vector{Float64}       : Sparse stiffnes matrix (Skyline format)\n* disps::Vector{Float64}    : Displacements\n* loads::Vector{Float64}    : Loads vector (Updated)\n* kdiag::Vector{Int}      : Bandwidth vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.loc_to_glob!",
    "page": "Docstrings",
    "title": "PtFEM.loc_to_glob!",
    "category": "function",
    "text": "loctoglob!\n\nThis subroutine transforms the local end reactions and moments into the global system (3-d).\n\nFunction\n\nloc_to_glob!(loc, glob, gamma, coord)\n\nArguments\n\n* loc::Vector{Float64}       : Local force and momemts (Updated)\n* glob::Vector{Float64}      : Globale forces and moments\n* gamma::Float64             : Element orientation angle (3D)\n* coord::Matrix{Float64}     : Nodal coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.mesh_size",
    "page": "Docstrings",
    "title": "PtFEM.mesh_size",
    "category": "function",
    "text": "mesh_size\n\nFunction meshsize returns the number of finels (nels) and the number of nodes (nn) in a 1, 2 or 3-d geometry-created mesh.\n\nMethod\n\n(nels, nn) = mesh_size(fin_el, nxe, [nye[, nze]])\n\nArguments\n\n* fin_el::FiniteElement   : Shape of finite element\n                            1D: Line\n                            2D: Trangle or Quadrilateral\n                            3D: Hexahedron\n* nxe::Int              : Number of fin_els in x direction\n* nye::Int              : Number of fin_els in y direction (for 2D and 3D)\n* nze::Int              : Number of fin_els in z direction (3D only)\n\n\n\n\n\nmesh_size\n\nmeshsize: The function meshsize returns the number of fin_els (nels) and the number of nodes (nn) in a 2-d geometry-created mesh.\n\nMethod\n\n(nels, nn) = mesh_size(fin_el, nxe)\n\nArguments\n\n* `fin_el` : Shape of 2D finite element (Triangle)\n* `nxe` : Number of fin_els in x direction\n* `nxe` : Number of fin_els in y direction\n\n\n\n\n\nmesh_size\n\nmeshsize: The function meshsize returns the number of fin_els (nels) and the number of nodes (nn) in a 2-d geometry-created mesh.\n\nMethod\n\n(nels, nn) = mesh_size(fin_el, nxe, nye)\n\nArguments\n\n* `fin_el` : Shape of 2D finite element (Quadrilateral)\n* `nxe` : Number of fin_els in x direction\n* `nye` : Number of fin_els in y direction\n\n\n\n\n\nmesh_size\n\nmeshsize: The function meshsize returns the number of fin_els (nels) and the number of nodes (nn) in a 3-d geometry-created mesh.\n\nMethod\n\n(nels, nn) = mesh_size(fin_el, nxe, nye, nze)\n\nArguments\n\n* `fin_el` : Shape of 2D finite element (Hexahedron)\n* `nxe` : Number of fin_els in x direction\n* `nye` : Number of fin_els in y direction\n* `nxe` : Number of fin_els in x direction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.mocouf",
    "page": "Docstrings",
    "title": "PtFEM.mocouf",
    "category": "function",
    "text": "mocouf\n\nThis subroutine calculates the value of the yield function for a Mohr-Coulomb material (phi in degrees).\n\nFunction\n\nmocouf(phi, c, sigm, dsbar, theta)\n\nArguments\n\n* psi::Float64              : Local force and momemts (Updated)\n* c::Float64                : Globale forces and moments\n* sigm::Float64             : Element orientation angle (3D)\n* dsbar::Float64            : Globale forces and moments\n* theta::Float64            : Element orientation angle (3D)\n\nReturn value\n\n* ::Float64                 : Value of yield function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.mocouq",
    "page": "Docstrings",
    "title": "PtFEM.mocouq",
    "category": "function",
    "text": "mocouq\n\nThis subroutine forms the derivatives of a Mohr-Coulomb potential function with respect to the three invariants (psi in degrees).\n\nFunction\n\n(dq1,dq2,dq3) = mocouq(psi,dsbar,theta)\n\nArguments\n\n* psi::Float64               : Local force and momemts (Updated)\n* dsbar::Float64             : Globale forces and moments\n* theta::Float64             : Element orientation angle (3D)\n\nReturn values\n\n* dq1::Float64               : Local force and momemts (Updated)\n* dq2::Float64               : Globale forces and moments\n* dq3::Float64               : Element orientation angle (3D)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.num_to_g!",
    "page": "Docstrings",
    "title": "PtFEM.num_to_g!",
    "category": "function",
    "text": "numtog!\n\nReturns the element steering vector g from the element node numbering num and the nodal freedom array nf.\n\nFunction\n\nnum_to_g!(num, nf, g)\n\nArguments\n\n* num::Vector{Int}       : Node numbering vector\n* nf::Matrix{Int}        : Nodal freedom array\n* g::Vector{Int}         : Element steering vector (Updated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p41",
    "page": "Docstrings",
    "title": "PtFEM.p41",
    "category": "function",
    "text": "Method p41\n\nOne dimensional analysis of an axially loaded elastic Rod using 2-node  Line elements. \n\nConstructors\n\np41(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}`  : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural fin_el\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Float64}                        : x-coordinate vector\n\nOptional additional data dictionary keys\n\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}         : Element material vector if np_types > 1\n* eq_nodal_forces_and_moments  : Contribution of distributed loads to loaded_nodes\n\nReturn values\n\n* (jfem, dis_df, fm_df)        : Tuple of jFem, dis_df and fm_df\n                                 where:\n                                    jfem::jFem    : Computational result type\n                                    dis_df        : Displacement data table\n                                    fm_df         : Forces and moments data table\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Rod                           : Help on a Rod structural element\n?FiniteElement                 : List finite element types\n?Line                          : Help on Line finite element\n\n\n\n\n\nMethod p41\n\nOne dimensional analysis of an axially loaded elastic Rod using 2-node  Line elements. \n\nConstructors\n\np41(m, data) # Re-use factored global stiffness matrix\n\nArguments\n\n* `m::jFEM`                  : Previously created jFEM model\n* `data::Dict{Symbol, Any}`  : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural fin_el\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Float64}                        : x-coordinate vector\n\nOptional additional data dictionary keys\n\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}         : Element material vector if np_types > 1\n* eq_nodal_forces_and_moments  : Contribution of distributed loads to loaded_nodes\n\nReturn values\n\n* (jfem, dis_df, fm_df)        : Tuple of jFem, dis_df and fm_df\n                                 where:\n                                    jfem::jFem    : Computational result type\n                                    dis_df        : Displacement data table\n                                    fm_df         : Forces and moments data table\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Rod                           : Help on a Rod structural element\n?FiniteElement                 : List finite element types\n?Line                          : Help on Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p42",
    "page": "Docstrings",
    "title": "PtFEM.p42",
    "category": "function",
    "text": "Method p42\n\nAnalysis of elastic pin-jointed frames using 2-node rod elements in 2- or 3-dimensions.\n\nConstructors\n\np42(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}`  : Dictionary containing all input data\n\nDictionary keys\n\n* struc_el::StructuralElement                          : Type of structural element\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::Vector{Float64}                            : x coordinate vector\n* y_coords::Vector{Float64}                            : y coordinate vector\n* g_num::Array{Int,2}                                : Element node connections\n\nOptional additional dictionary keys\n\n* penalty::Float64             : Penalty for fixed freedoms\n* etype::Vector{Int}         : Element material vector\n* z_coords::Vector{Float64}    : z coordinate vector (3D)\n* eq_nodal_forces_and_moments  : Contribution of distributed loads to loaded_nodes\n\nReturn values\n\n* (jfem, dis_df, fm_df)        : Tuple of jFem, dis_df and fm_df\n                                 where:\n                                    jfem::jFem    : Computational result type\n                                    dis_df        : Displacement data table\n                                    fm_df         : Forces and moments data table\n\nRelated help\n\n?StructuralElement  : List structural element types\n?Frame              : Help on a Rod structural fin_el\n?FiniteElement      : List finite element types\n?Line               : Help on Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p43",
    "page": "Docstrings",
    "title": "PtFEM.p43",
    "category": "function",
    "text": "p43\n\nAnalysis of elastic beams using 2-node Beam structural elements and Line finite elements. Elastic foundation is optional.\n\nConstructors\n\np43(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nDictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural fin_el\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::LinSpace{Float64}                          : x coordinate vector\n* g_num::Array{Int,2}                                : Element node connections\n* fixed_freedoms::Array{Tuple{Vector{Int}}           : Fixed freedoms\n\nOptional additional dictionary keys\n\n* etype::Vector{Int}                                 : Element material vector\n* penalty::Float64                                     : Penalty for fixed freedoms\n* eq_nodal_forces_and_moments                          : Equivalent nodal loads\n\nReturn values\n\n* (jfem, dis_df, fm_df)        : Tuple of jFem, dis_df and fm_df\n                                 where:\n                                    jfem::jFem    : Computational result type\n                                    dis_df        : Displacement data table\n                                    fm_df         : Forces and moments data table\n\nRelated help\n\n?StructuralElement  : Help on structural elements\n?Rod                : Help on a Rod structural fin_el\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p44",
    "page": "Docstrings",
    "title": "PtFEM.p44",
    "category": "function",
    "text": "p44\n\nAnalysis of elastic rigid-jointed frames using a 2-node Frame structural element and Line finite elements in 2 or 3 dimensions.\n\nConstructors\n\np44(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nDictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural fin_el\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Float64}                        : x coordinate vector\n* y_coords::FloatRange{Float64}                        : y coordinate vector\n* g_num::Array{Int,2}                                : Element node connections\n* fixed_freedoms::Array{Tuple{Vector{Int}}           : Fixed freedoms\n\nOptional additional dictionary keys\n\n* etype::Vector{Int}                                 : Element material vector\n* penalty::Float64                                     : Penalty for fixed freedoms\n* z_coords::FloatRange{Float64}                        : z coordinate vector\n* eq_nodal_forces_and_moments                          : Equivalent nodal loads\n\nReturn values\n\n* (jfem, dis_df, fm_df)        : Tuple of jFem, dis_df and fm_df\n                                 where:\n                                    jfem::jFem    : Computational result type\n                                    dis_df        : Displacement data table\n                                    fm_df         : Forces and moments data table\n\nRelated help\n\n?StructuralElement  : Help on structural elements\n?Beam               : Help on a Beam structural fin_el\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p45",
    "page": "Docstrings",
    "title": "PtFEM.p45",
    "category": "function",
    "text": "Method p45\n\nAnalysis of elasto-plastic beams or rigid-jointed frames using a 2-node Frame structural element in 1, 2 or 3 dimensions. \n\nConstructors\n\np45(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}`  : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural element\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Float64}                        : x-coordinate vector\n* dload::FloatRange{Float64}                           : load steps\n\nOptional additional data dictionary keys\n\n* penalty = 1e20                 : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}           : Element material vector if np_types > 1\n* y_coords::FloatRange{Float64}  : y-coordinate vector (2D)\n* z_coords::FloatRange{Float64}  : x-coordinate vector (3D)\n* limit = 250                    : Iteration limit\n* tol = 0.0001                   : Tolerance for iteration convergence\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Frame                         : Help on a Frame structural element\n?FiniteElement                 : List finite element types\n?Line                          : Help on Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p46",
    "page": "Docstrings",
    "title": "PtFEM.p46",
    "category": "function",
    "text": "Method p46\n\nStability (buckling) analysis of elastic beams using a 2-node Beam structural element and Line finite elements. Elastic foundation is optional.\n\nConstructors\n\np46(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural fin_el\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Float64}                        : x-coordinate vector\n\nOptional additional data dictionary keys\n\n* etype::Vector{Int}         : Element material vector if np_types > 1\n* limit = 250                  : Iteration limit\n* tol = 0.0001                 : Tolerance for iteration convergence\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Beam                          : Help on a Beam structural element\n?FiniteElement                 : List finite element types\n?Line                          : Help on Line finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p47",
    "page": "Docstrings",
    "title": "PtFEM.p47",
    "category": "function",
    "text": "Method p47\n\nAnalysis of plates (Plane structural element) using 4-node Quadrilateral finite elements. Homogeneous material with identical elements. Mesh numbered in x or y direction.\n\nConstructors\n\np47(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Structural element\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Floalt64}                       : x-coordinate vector\n* y_coords::FloatRange{Floalt64}                       : y-coordinate vector\n* thickness:: Float64                                  : Thickness of plate\n\nOptional additional data dictionary keys\n\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}         : Element material vector if np_types > 1\n\nReturn values\n\n* (fm_df, sigma_df)            : Tuple of jFem, dis_df and fm_df\n                                  where:\n                                    fm_df         : Forces and moments data table\n                                    sigma_df      : Stresses data table\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Plane                         : Help on a Plane structural element\n?FiniteElement                 : List finite element types\n?Quadrilateral                 : Help on Quadrilateral finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p51",
    "page": "Docstrings",
    "title": "PtFEM.p51",
    "category": "function",
    "text": "Method p51\n\nPlane or axisymmetric strain analysis of an elastic solid (Plane structural element) using 3-, 6-, 10- or 15-node right-angled triangles (Triangle finite elements) or 4-, 8- or 9-node rectangular quadrilaterals (Quadrilateral finite elements). Mesh numbered in x(r)- or y(z)- direction.\n\nConstructors\n\np51(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Structural element\n* support::Array{Tuple{Int,Array{Int,1}},1}            : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1}   : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Floalt64}                       : x-coordinate vector\n* y_coords::FloatRange{Floalt64}                       : y-coordinate vector\n* thickness:: Float64                                  : Thickness of plate\n\nOptional additional data dictionary keys\n\n* penalty = 1e20             : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}         : Element material vector if np_types > 1\n\nReturn values\n\n* (fem, fm_df, sigma_df)     : Tuple of jFem, dis_df and fm_df\n                               where:\n                                 fm_df         : Forces and moments data table\n                                 sigma_df      : Stresses data table\n\nRelated help\n\n?StructuralElement           : List of available structural element types\n?Plane                       : Help on a Plane structural element\n?FiniteElement               : List finite element types\n?Quadrilateral               : Help on Quadrilateral finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p51_skyline",
    "page": "Docstrings",
    "title": "PtFEM.p51_skyline",
    "category": "function",
    "text": "Method p51_skyline\n\nPlane or axisymmetric strain analysis of an elastic solid (Plane structural element) using 3-, 6-, 10- or 15-node right-angled triangles (Triangle finite elements) or 4-, 8- or 9-node rectangular quadrilaterals (Quadrilateral finite elements). Mesh numbered in x(r)- or y(z)- direction.\n\nConstructors\n\np51(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Structural element\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Floalt64}                       : x-coordinate vector\n* y_coords::FloatRange{Floalt64}                       : y-coordinate vector\n* thickness:: Float64                                  : Thickness of plate\n\nOptional additional data dictionary keys\n\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}           : Element material vector if np_types > 1\n\nReturn values\n\n* fem                          : Fem object\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Plane                         : Help on a Plane structural element\n?FiniteElement                 : List finite element types\n?Quadrilateral                 : Help on Quadrilateral finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p61",
    "page": "Docstrings",
    "title": "PtFEM.p61",
    "category": "function",
    "text": "Method p61\n\nPlane strain bearing capacity analysis of an elastic-plastic (von Mises) material using 8-node rectangular quadrilaterals. Viscoplastic strain method.\n\nConstructors\n\np61(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Structural element\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Floalt64}                       : x-coordinate vector\n* y_coords::FloatRange{Floalt64}                       : y-coordinate vector\n* thickness:: Float64                                  : Thickness of plate\n* tol::Float64                                         : Convergence tolerance\n* qincs::Vector{Float64}                               : Incremental load steps\n\nOptional additional data dictionary keys\n\n* limit = 250                  : Iteration limit\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}         : Element material vector if np_types > 1\n\nReturn values\n\n* (g_coord, g_num, disp)        : where:\n                                    g_coord  : Coordinates\n                                    g_num    : Node numbering\n                                    disp     : Matrix of displacements\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Plane                         : Help on a Plane structural element\n?FiniteElement                 : List finite element types\n?Quadrilateral                 : Help on Quadrilateral finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p62",
    "page": "Docstrings",
    "title": "PtFEM.p62",
    "category": "function",
    "text": "Method p62\n\nPlane strain bearing capacity analysis of an elastic-plastic (von Mises) material using 8-node rectangular quadrilaterals.\n\nViscoplastic strain method.\n\nNo global stiffness matrix assembly.\n\nDiagonally preconditioned conjugate gradient solver.\n\nConstructors\n\np62(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Structural element\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Floalt64}                       : x-coordinate vector\n* y_coords::FloatRange{Floalt64}                       : y-coordinate vector\n* thickness:: Float64                                  : Thickness of plate\n* tol::Float64                                         : Convergence tolerance\n* qincs::Vector{Float64}                               : Incremental load steps\n\nOptional additional data dictionary keys\n\n* limit = 250                  : Iteration limit\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}         : Element material vector if np_types > 1\n\nReturn values\n\n* (g_coord, g_num, disp)        : where:\n                                    g_coord  : Coordinates\n                                    g_num    : Node numbering\n                                    disp     : Matrix of displacements\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Plane                         : Help on a Plane structural element\n?FiniteElement                 : List finite element types\n?Quadrilateral                 : Help on Quadrilateral finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p63",
    "page": "Docstrings",
    "title": "PtFEM.p63",
    "category": "function",
    "text": "Method p63\n\nPlane strain bearing capacity analysis of an elastic-plastic (Mohr-Coulomb) material using 8-node rectangular quadrilaterals. Rigid smooth footing. Displacement control. Viscoplastic strain method.\n\nConstructors\n\np63(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Structural element\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Floalt64}                       : x-coordinate vector\n* y_coords::FloatRange{Floalt64}                       : y-coordinate vector\n\nOptional additional data dictionary keys\n\n* tol::Float64                 : Convergence tolerance\n* limit = 250                  : Iteration limit\n* incs::Int                    : Incremental load steps\n* presc::Float64               : Wall displacement increment\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}           : Element material vector if np_types > 1\n\nReturn values\n\n* (g_coord, g_num, disp)        : where:\n                                    g_coord  : Coordinates\n                                    g_num    : Node numbering\n                                    disp     : Matrix of displacements\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Plane                         : Help on a Plane structural element\n?FiniteElement                 : List finite element types\n?Quadrilateral                 : Help on Quadrilateral finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.p63_skyline",
    "page": "Docstrings",
    "title": "PtFEM.p63_skyline",
    "category": "function",
    "text": "Method p63_skyline\n\nPlane strain bearing capacity analysis of an elastic-plastic (Mohr-Coulomb) material using 8-node rectangular quadrilaterals. Rigid smooth footing. Displacement control. Viscoplastic strain method.\n\nConstructors\n\np63_skyline(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nRequired data dictionary keys\n\n* struc_el::StructuralElement                          : Structural element\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Floalt64}                       : x-coordinate vector\n* y_coords::FloatRange{Floalt64}                       : y-coordinate vector\n\nOptional additional data dictionary keys\n\n* tol::Float64                 : Convergence tolerance\n* limit = 250                  : Iteration limit\n* incs::Int                    : Incremental load steps\n* presc::Float64               : Wall displacement increment\n* penalty = 1e20               : Penalty used for fixed degrees of freedoms\n* etype::Vector{Int}           : Element material vector if np_types > 1\n\nReturn values\n\n* (g_coord, g_num, disp)        : where:\n                                    g_coord  : Coordinates\n                                    g_num    : Node numbering\n                                    disp     : Matrix of displacements\n\nRelated help\n\n?StructuralElement             : List of available structural element types\n?Plane                         : Help on a Plane structural element\n?FiniteElement                 : List finite element types\n?Quadrilateral                 : Help on Quadrilateral finite element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.pin_jointed!",
    "page": "Docstrings",
    "title": "PtFEM.pin_jointed!",
    "category": "function",
    "text": "pin_jointed!\n\nThis subroutine forms the global stiffness matrix of a general pin-joionted structural element (1-, 2- or 3-d).\n\nFunction\n\npin_jointed!(km, ea, coord)\n\nArguments\n\n* km::Matrix{Float64}       : Element stiffness matrix (Updated)\n* ea::Float64               : Element stiffness\n* coord::Matrix{Float64}}   : Element nodal coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.rigid_jointed!",
    "page": "Docstrings",
    "title": "PtFEM.rigid_jointed!",
    "category": "function",
    "text": "rigid_jointed!\n\nThis subroutine forms the global stiffness matrix of a general pin-joionted structural element (1-, 2- or 3-d).\n\nFunction\n\nrigid_jointed!(km, prop, gamma, etype, iel, coord)\n\nArguments\n\n* km::Matrix{Float64}       : Element stiffness matrix (Updated)\n* prop::Matrix{Float64}     : Element properties\n* gamma::Vector{Float64}    : Element orientations (3D)\n* etype::Vector{Int}        : Element type vector\n* iel::Int                  : Element number\n* coord::Matrix{Float64}}   : Element nodal coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.rod_km!",
    "page": "Docstrings",
    "title": "PtFEM.rod_km!",
    "category": "function",
    "text": "rod_km!\n\nThis subroutine forms the stiffness matrix of a 1-d \"rod\" fin_el.\n\nFunction\n\nrod_km!(km, ea, length)\n\nArguments\n\n* km::Matrix{Float64}       : Element stiffness matrix (Updated)\n* ea::Float64               : Element stiffness\n* ell::Float64              : Element length\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.rod_mm!",
    "page": "Docstrings",
    "title": "PtFEM.rod_mm!",
    "category": "function",
    "text": "rod_mm!\n\nThis subroutine forms the consistent mass matrix of a 1-d \"rod\" fin_el.\n\nFunction\n\nrod_mm!(km, ell)\n\nArguments\n\n* mm::Matrix{Float64}       : Element mass matrix (Updated)\n* ell::Float64              : Element length\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.sample!",
    "page": "Docstrings",
    "title": "PtFEM.sample!",
    "category": "function",
    "text": "sample!\n\nThis subroutine returns the local coordinates and weighting coefficients of the integrating points.\n\nFunction\n\nsample!(fin_el, s, wt)\n\nArguments\n\n* fin_el::FiniteElement      : Finite element type\n* s::Matrix{Float64}        : Local coordinates (Updated)\n* wt::Vector{Float64}       : Weighting coefficients (Updated)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.shape_der!",
    "page": "Docstrings",
    "title": "PtFEM.shape_der!",
    "category": "function",
    "text": "shape_der!\n\nThis subroutine produces derivatives of shape functions with respect to local coordinates.\n\nFunction\n\nshape_der!(der, point, i)\n\nArguments\n\n* der::Matrix{Float64}       : Function derivative (Updated)\n* points::Matrix{Float64}    : Local coordinates of integration points\n* i::Int                   : Integration point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.shape_fun!",
    "page": "Docstrings",
    "title": "PtFEM.shape_fun!",
    "category": "function",
    "text": "shape_fun!\n\nThis subroutine produces derivatives of shape functions with respect to local coordinates.\n\nFunction\n\nshape_fun!(fun, point, i)\n\nArguments\n\n* fun::Vector{Float64}       : Shape function (Updated)\n* points::Matrix{Float64}    : Local coordinates of integration points\n* i::Int                   : Integration point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.skyline2sparse",
    "page": "Docstrings",
    "title": "PtFEM.skyline2sparse",
    "category": "function",
    "text": "skyline2sparse\n\nConverts a Skyline matrix to a Julia Sparse matrix\n\nFunction\n\nskyline2sparse(skyline, kdiag)\n\nArguments\n\n* skyline::Vector{Float64}         : Skyline matrix\n* kdiag::Vector{Int}             : Element diagonal index vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.spabac!",
    "page": "Docstrings",
    "title": "PtFEM.spabac!",
    "category": "function",
    "text": "spabac!\n\nFunction spabac! performs Cholesky forward and back-substitution on a symmetric skyline global matrix. The loads vector is updated.\n\n###Arguments\n\nspabac!(kv, loads, kdiag)\n\nArguments\n\n* kv::Vector{Float64}       : Skyline vector of global stiffness matrix\n* loads::Vector{Float64}    : Load vector (Updated)\n* kdiag::Vector{Int}      : Diagonal elemnt index vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.sparin!",
    "page": "Docstrings",
    "title": "PtFEM.sparin!",
    "category": "function",
    "text": "sparin!\n\nFunction sparin! performs Cholesky factorisation on a symmetric skyline global matrix. The vector kv is updated.\n\n###Arguments\n\nsparin!(kv, kdiag)\n\nArguments\n\n* kv::Vector{Float64}       : Global stiffness matrix (Updated)\n* kdiag::Vector{Int}      : Diagonal elemnt index vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PtFEM.stability",
    "page": "Docstrings",
    "title": "PtFEM.stability",
    "category": "function",
    "text": "stability\n\nFunction spabac! performs Cholesky forward and back-substitution on a symmetric skyline global matrix. The loads vector is updated.\n\n###Arguments\n\nstability(gsm, ggm, tol, limit)\n\nArguments\n\n* gsm::SparseMatrixCSC{Float64,Int}   : Factored global stiffness matrix\n* ggm::SparseMatrixCSC{Float64,Int}   : Factored geometric matrix\n* tol::Float64                          : Convergence tolerance\n* limit::Int                          : Iteration limit\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PtFEM.BeamPtFEM.FEMPtFEM.FiniteElementPtFEM.FramePtFEM.GenericSolidPtFEM.HexahedronPtFEM.LinePtFEM.OffsetArrayPtFEM.PlanePtFEM.PtFEMPtFEM.QuadrilateralPtFEM.RodPtFEM.SolidPtFEM.StructuralElementPtFEM.TetrahedronPtFEM.TrianglePtFEM.UnknownStructuralElementPtFEM.bc_rect!PtFEM.beam_gmPtFEM.beam_kmPtFEM.beam_mmPtFEM.beemat!PtFEM.bmat_nonaxi!PtFEM.checonPtFEM.deemat!PtFEM.evalPtFEM.fkdiag!PtFEM.fmplat!PtFEM.format_loads_line!PtFEM.format_nf_line!PtFEM.formm!PtFEM.formnf!PtFEM.fromSkylinePtFEM.fsparm!PtFEM.fsparvPtFEM.fsparv!PtFEM.geom_rect!PtFEM.glob_to_axialPtFEM.glob_to_loc!PtFEM.hexahedron_xz!PtFEM.hinge!PtFEM.includePtFEM.invarPtFEM.jFEMPtFEM.linmul_sky!PtFEM.loc_to_glob!PtFEM.meshPtFEM.mesh_sizePtFEM.mocoufPtFEM.mocouqPtFEM.num_to_g!PtFEM.p41PtFEM.p42PtFEM.p43PtFEM.p44PtFEM.p45PtFEM.p46PtFEM.p47PtFEM.p51PtFEM.p51_skylinePtFEM.p52PtFEM.p53PtFEM.p54PtFEM.p55PtFEM.p56PtFEM.p56_skylinePtFEM.p61PtFEM.p62PtFEM.p62aPtFEM.p63PtFEM.p63_skylinePtFEM.pin_jointed!PtFEM.pp62PtFEM.read_loads_filePtFEM.read_nf_filePtFEM.rigid_jointed!PtFEM.rod_km!PtFEM.rod_mm!PtFEM.sample!PtFEM.shape_der!PtFEM.shape_fun!PtFEM.skyline2sparsePtFEM.spabac!PtFEM.sparinPtFEM.sparin!PtFEM.stabilityPtFEM.useplots"
},

]}
