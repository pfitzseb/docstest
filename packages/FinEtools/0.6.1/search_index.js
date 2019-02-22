var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: codecov.io)  (Image: Build status)  (Image: Coverage Status)"
},

{
    "location": "#FinEtools:-Finite-Element-tools-in-Julia-1",
    "page": "Readme",
    "title": "FinEtools: Finite Element tools in Julia",
    "category": "section",
    "text": ""
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": "10/02/2018: The code-coverage computation seems to be broken. The coverage in the FinEtools package hasn\'t actually changed and it is still at 98%.\n09/20/2018: Separated out examples and tutorials from the FinEtools library itself.\n09/02/2018: Updated all examples for Julia 1.0.Past news"
},

{
    "location": "#Get-FinEtools-1",
    "page": "Readme",
    "title": "Get FinEtools",
    "category": "section",
    "text": "This package is  registered, and hence one can do just] add FinEtoolsOnly version 0.7, 1.0, and the nightly builds of Julia are supported. "
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "] test FinEtools "
},

{
    "location": "#Usage-and-Documentation-1",
    "page": "Readme",
    "title": "Usage and Documentation",
    "category": "section",
    "text": "Tutorials in the form of marked-down Julia source files using the Literate workflow are available and more will  be added in the near future.The package comes with examples  of its use  (heat conduction,  linear deformation,  acoustics,  mesh generation). The documentation  is published as Github pages.  A use-case package explaining how to integrate FinEtools with  the user\'s own code is available here.(Image: Alt Visualization of sample result)"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.ASSEMBLY",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.ASSEMBLY",
    "category": "function",
    "text": "ASSEMBLY(self::AbaqusExporter, NAME::AbstractString)\n\nWrite out the *ASSEMBLY option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.AbaqusExporter",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.AbaqusExporter",
    "category": "type",
    "text": "AbaqusExporter\n\nExport mesh to Abaqus.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AlgoAcoustModule",
    "page": "Docstrings",
    "title": "FinEtools.AlgoAcoustModule",
    "category": "module",
    "text": "AlgoAcoustModule\n\nModule for linear acoustics algorithms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AlgoBaseModule",
    "page": "Docstrings",
    "title": "FinEtools.AlgoBaseModule",
    "category": "module",
    "text": "AlgoBaseModule\n\nModule for base  algorithms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AlgoDeforLinearModule",
    "page": "Docstrings",
    "title": "FinEtools.AlgoDeforLinearModule",
    "category": "module",
    "text": "AlgoDeforLinearModule\n\nModule for algorithms used in linear deformation models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AlgoHeatDiffModule",
    "page": "Docstrings",
    "title": "FinEtools.AlgoHeatDiffModule",
    "category": "module",
    "text": "AlgoHeatDiffModule\n\nModule for algorithms in linear heat conduction/diffusion  models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule",
    "category": "module",
    "text": "AssemblyModule\n\nModule for assemblers  of system matrices and vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.BEGIN_BULK",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.BEGIN_BULK",
    "category": "function",
    "text": "BEGIN_BULK(self::NASTRANExporter)\n\nTerminate the Case Control section by starting the bulk section.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.BOUNDARY",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.BOUNDARY",
    "category": "function",
    "text": "BOUNDARY(self::AbaqusExporter, NSET::AbstractString,\n    is_fixed::AbstractArray{B,2},  fixed_value::AbstractArray{F,2}) where {B, F}\n\nWrite out the *BOUNDARY option.\n\nis_fixed= array of Boolean flags (true means fixed, or prescribed),  one row per node, fixed_value=array of displacements to which the corresponding displacement components is fixed\n\n\n\n\n\nBOUNDARY(self::AbaqusExporter, NSET::AbstractString, dof::Integer)\n\nWrite out the *BOUNDARY option to fix displacements at zero for a node set.\n\nInvoke at Level: Model,  Step\n\nNSET= node set, dof=Degree of freedom, 1, 2, 3\n\n\n\n\n\nBOUNDARY(self::AbaqusExporter, NSET::AbstractString, dof::Integer,\n  value::F) where {F}\n\nWrite out the *BOUNDARY option to fix displacements at nonzero value for a node set.\n\nNSET= node set, dof=Degree of freedom, 1, 2, 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.DeforModelRedModule.Blmat!",
    "page": "Docstrings",
    "title": "FinEtools.DeforModelRedModule.Blmat!",
    "category": "function",
    "text": "Blmat!(MR::Type{DeforModelRed1D}, B::FFltMat,\n  N::FFltMat, gradN::FFltMat, c::FFltMat, Rm::FFltMat)\n\nCompute the strain-displacement matrix for a one-manifold element.\n\nCompute the linear, displacement independent, strain-displacement matrix for a one-manifold element.   The input displacements are in the global Cartesian coordinate system, the output strains are in the material coordinate system.\n\nN =matrix of basis function values\ngradN =matrix of basis function gradients with respect to the Cartesian coordinates in the directions of the material orientation\nc =array of spatial coordinates of the evaluation point in the global Cartesian coordinates.\nRm =orthogonal matrix with the unit basis vectors of the local material orientation coordinate system as columns. size(Rm)= (ndim,mdim), where ndim = number of spatial dimensions of the embedding space (here ndim <=  3), and mdim = number of manifold dimensions (here mdim == 1).\n\nOutput\n\nB = strain-displacement matrix, where  size(B) = (nstressstrain,nnodes*dim); here nstressstrain= number of strains, dim = Number of spatial dimensions of the embedding space, and nnodes = number of finite element nodes on the element. The strain components are ordered as shown  in stresscomponentmap. The matrix is passed in as a buffer, set to zero,  and filled in  with the nonzero components.  It is also returned for convenience.\n\n\n\n\n\nBlmat!(MR::Type{DeforModelRed2DStrain}, B::FFltMat,\n  N::FFltMat, gradN::FFltMat, c::FFltMat, Rm::FFltMat)\n\nCompute the strain-displacement matrix for a two-manifold element for plane-strain models.\n\nCompute the linear, displacement independent, strain-displacement matrix for a two-manifold element in plane-strain setting.   The input displacements are in the global Cartesian coordinate system, the output strains are in the material coordinate system.\n\nN =matrix of basis function values\ngradN =matrix of basis function gradients with respect to the Cartesian coordinates in the directions of the material orientation\nc =array of spatial coordinates of the evaluation point in the global Cartesian coordinates.\nRm =orthogonal matrix with the unit basis vectors of the local material orientation coordinate system as columns. size(Rm)= (ndim,mdim), where ndim = number of spatial dimensions of the embedding space (here ndim <=  3), and mdim = number of manifold dimensions (here mdim == 2).\n\nOutput\n\nB = strain-displacement matrix, where  size(B) = (nstressstrain,nnodes*dim); here nstressstrain= number of strains, dim = Number of spatial dimensions of the embedding space, and nnodes = number of finite element nodes on the element. The strain components are ordered as shown  in stresscomponentmap. The matrix is passed in as a buffer, set to zero,  and filled in  with the nonzero components.  It is also returned for convenience.\n\n\n\n\n\nBlmat!(MR::Type{DeforModelRed2DStress}, B::FFltMat,\n  N::FFltMat, gradN::FFltMat, c::FFltMat, Rm::FFltMat)\n\nCompute the strain-displacement matrix for a two-manifold element for plane-stress models.\n\nCompute the linear, displacement independent, strain-displacement matrix for a two-manifold element in plane-stress setting.   The input displacements are in the global Cartesian coordinate system, the output strains are in the material coordinate system.\n\nN =matrix of basis function values\ngradN =matrix of basis function gradients with respect to the Cartesian coordinates in the directions of the material orientation\nc =array of spatial coordinates of the evaluation point in the global Cartesian coordinates.\nRm =orthogonal matrix with the unit basis vectors of the local material orientation coordinate system as columns. size(Rm)= (ndim,mdim), where ndim = number of spatial dimensions of the embedding space (here ndim <=  3), and mdim = number of manifold dimensions (here mdim == 2).\n\nOutput\n\nB = strain-displacement matrix, where  size(B) = (nstressstrain,nnodes*dim); here nstressstrain= number of strains, dim = Number of spatial dimensions of the embedding space, and nnodes = number of finite element nodes on the element. The strain components are ordered as shown  in stresscomponentmap. The matrix is passed in as a buffer, set to zero,  and filled in  with the nonzero components.  It is also returned for convenience.\n\n\n\n\n\nBlmat!(MR::Type{DeforModelRed2DAxisymm}, B::FFltMat,\n  N::FFltMat, gradN::FFltMat, c::FFltMat, Rm::FFltMat)\n\nCompute the strain-displacement matrix for a two-manifold element for axially symmetric models.\n\nCompute the linear, displacement independent, strain-displacement matrix for a two-manifold element in axially-symmetric setting.   The input displacements are in the global Cartesian coordinate system, the output strains are in the material coordinate system.\n\nN =matrix of basis function values\ngradN =matrix of basis function gradients with respect to the Cartesian coordinates in the directions of the material orientation\nc =array of spatial coordinates of the evaluation point in the global Cartesian coordinates.\nRm =orthogonal matrix with the unit basis vectors of the local material orientation coordinate system as columns. size(Rm)= (ndim,mdim), where ndim = number of spatial dimensions of the embedding space (here ndim <=  3), and mdim = number of manifold dimensions (here mdim == 2).\n\nOutput\n\nB = strain-displacement matrix, where  size(B) = (nstressstrain,nnodes*dim); here nstressstrain= number of strains, dim = Number of spatial dimensions of the embedding space, and nnodes = number of finite element nodes on the element. The strain components are ordered as shown  in stresscomponentmap. The matrix is passed in as a buffer, set to zero,  and filled in  with the nonzero components.  It is also returned for convenience.\n\n\n\n\n\nBlmat!(MR::Type{DeforModelRed3D}, B::FFltMat,\n  N::FFltMat, gradN::FFltMat, c::FFltMat, Rm::FFltMat)\n\nCompute the strain-displacement matrix for a three-manifold element.\n\nCompute the linear, displacement independent, strain-displacement matrix for a three-manifold element.   The input displacements are in the global Cartesian coordinate system, the output strains are in the material coordinate system.\n\nN =matrix of basis function values\ngradN =matrix of basis function gradients with respect to the Cartesian coordinates in the directions of the material orientation\nc =array of spatial coordinates of the evaluation point in the global Cartesian coordinates.\nRm =orthogonal matrix with the unit basis vectors of the local material orientation coordinate system as columns. size(Rm)= (ndim,mdim), where ndim = number of spatial dimensions of the embedding space (here ndim ==   3), and mdim = number of manifold dimensions (here mdim == 3).\n\nOutput\n\nB = strain-displacement matrix, where  size(B) = (nstressstrain,nnodes*dim); here nstressstrain= number of strains, dim = Number of spatial dimensions of the embedding space, and nnodes = number of finite element nodes on the element. The strain components are ordered as shown  in stresscomponentmap. The matrix is passed in as a buffer, set to zero,  and filled in  with the nonzero components.  It is also returned for convenience.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.BoxModule",
    "page": "Docstrings",
    "title": "FinEtools.BoxModule",
    "category": "module",
    "text": "BoxModule\n\nModule for working with bounding boxes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.CEND",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.CEND",
    "category": "function",
    "text": "CEND(self::NASTRANExporter)\n\nTerminate the Executive Control section.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.CLOAD",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.CLOAD",
    "category": "function",
    "text": "CLOAD(self::AbaqusExporter, NSET::AbstractString, dof::Integer,\n  magnitude::F) where {F}\n\nWrite out the *CLOAD option.\n\nNSET=Node set dof= 1, 2, 3, magnitude= signed multiplier\n\n\n\n\n\nCLOAD(self::AbaqusExporter, nodenumber::Integer, dof::Integer,\n  magnitude::F) where {F}\n\nWrite out the *CLOAD option.\n\nnodenumber=Number of node dof= 1, 2, 3, magnitude= signed multiplier\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.COMMENT",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.COMMENT",
    "category": "function",
    "text": "COMMENT(self::AbaqusExporter, Text::AbstractString)\n\nWrite out the ** comment option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.CSysModule.CSys",
    "page": "Docstrings",
    "title": "FinEtools.CSysModule.CSys",
    "category": "type",
    "text": "Type for coordinate system transformations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.CSysModule",
    "page": "Docstrings",
    "title": "FinEtools.CSysModule",
    "category": "module",
    "text": "CSysModule\n\nModule for management of coordinate systems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.DENSITY",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.DENSITY",
    "category": "function",
    "text": "DENSITY(self::AbaqusExporter, rho)\n\nWrite out the *DENSITY option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.DLOAD",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.DLOAD",
    "category": "function",
    "text": "DLOAD(self::AbaqusExporter, ELSET::AbstractString,\n  traction::AbstractVector{F}) where {F}\n\nWrite out the *DLOAD option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.DeforModelRedModule",
    "page": "Docstrings",
    "title": "FinEtools.DeforModelRedModule",
    "category": "module",
    "text": "DeforModelRedModule\n\nModule for  model reduction in models of deformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.ELASTIC",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.ELASTIC",
    "category": "function",
    "text": "ELASTIC(self::AbaqusExporter, E1::F, E2::F, E3::F, nu12::F, nu13::F, nu23::F,\n  G12::F, G13::F, G23::F) where {F}\n\nWrite out the *ELASTIC,TYPE=ENGINEERING CONSTANTS option.\n\n\n\n\n\nELASTIC(self::AbaqusExporter, E::F, nu::F) where {F}\n\nWrite out the *ELASTIC,TYPE=ISOTROPIC option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.ELEMENT",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.ELEMENT",
    "category": "function",
    "text": "ELEMENT(self::AbaqusExporter, TYPE::AbstractString, ELSET::AbstractString,\n  start::Integer, conn::AbstractArray{T, 2}) where {T<:Integer}\n\nWrite out the *ELEMENT option.\n\nTYPE= element type code, ELSET= element set to which the elements belong, start= start the element numbering at this integer, conn= connectivity array for the elements, one row per element\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.ELSET_ELSET",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.ELSET_ELSET",
    "category": "function",
    "text": "ELSET_ELSET(self::AbaqusExporter, ELSET::AbstractString, n::AbstractArray{T, 1}) where {T<:Integer}\n\nWrite out the *ELSET option.\n\nELSET = name of the set, n = array of the node numbers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.EL_PRINT",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.EL_PRINT",
    "category": "function",
    "text": "EL_PRINT(self::AbaqusExporter, ELSET::AbstractString, KEYS::AbstractString)\n\nWrite out the *EL PRINT option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.ENDDATA",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.ENDDATA",
    "category": "function",
    "text": "ENDDATA(self::NASTRANExporter)\n\nTerminate the bulk section.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.END_ASSEMBLY",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.END_ASSEMBLY",
    "category": "function",
    "text": "END_ASSEMBLY(self::AbaqusExporter)\n\nWrite out the *END ASSEMBLY option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.END_INSTANCE",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.END_INSTANCE",
    "category": "function",
    "text": "END_INSTANCE(self::AbaqusExporter)\n\nWrite out the *END INSTANCE option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.END_PART",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.END_PART",
    "category": "function",
    "text": "END_PART(self::AbaqusExporter)\n\nWrite out the *END PART option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.END_STEP",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.END_STEP",
    "category": "function",
    "text": "END_STEP(self::AbaqusExporter)\n\nWrite out the *END STEP option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.ENERGY_PRINT",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.ENERGY_PRINT",
    "category": "function",
    "text": "ENERGY_PRINT(self::AbaqusExporter)\n\nWrite out the *ENERGY PRINT option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.EXPANSION",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.EXPANSION",
    "category": "function",
    "text": "EXPANSION(self::AbaqusExporter, CTE::F) where {F}\n\nWrite out the *EXPANSION option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.ElementalFieldModule.ElementalField",
    "page": "Docstrings",
    "title": "FinEtools.ElementalFieldModule.ElementalField",
    "category": "type",
    "text": "ElementalField{T<:Number}\n\nElemental field.\n\nThe values in the field are indexed by the element number.  This means  that there needs to be one field per finite element set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.ElementalFieldModule",
    "page": "Docstrings",
    "title": "FinEtools.ElementalFieldModule",
    "category": "module",
    "text": "ElementalFieldModule\n\nModule for elemental fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FTypesModule.FDataDict",
    "page": "Docstrings",
    "title": "FinEtools.FTypesModule.FDataDict",
    "category": "type",
    "text": "FDataDict = Dict{String, Any}\n\nType for the model-data packaging system (used by all FinEtools algorithms).  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.FEMMAbstractBase",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.FEMMAbstractBase",
    "category": "type",
    "text": "FEMMAbstractBase\n\nAbstract base type for all finite element models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustModule.FEMMAcoust",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustModule.FEMMAcoust",
    "category": "type",
    "text": "FEMMAcoust{S<:FESet}\n\nType for linear acoustics finite element modeling machine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustModule",
    "category": "module",
    "text": "FEMMAcoustModule\n\nModule for operations on interiors of domains to construct system matrices and system vectors for linear acoustics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustSurfModule.FEMMAcoustSurf",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustSurfModule.FEMMAcoustSurf",
    "category": "type",
    "text": "FEMMAcoustSurf{S<:FESet, F<:Function, M} <: FEMMAbstractBase\n\nClass for linear acoustics finite element modeling machine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustSurfModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustSurfModule",
    "category": "module",
    "text": "FEMMAcoustSurfModule\n\nModule for operations on boundaries of domains to construct system matrices and system vectors for linear acoustics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.FEMMBase",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.FEMMBase",
    "category": "type",
    "text": "FEMMBase\n\nClass for base finite element modeling machine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule",
    "category": "module",
    "text": "FEMMBaseModule\n\nModule for comments/base operations on interiors and boundaries of domains.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearModule.FEMMDeforLinear",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearModule.FEMMDeforLinear",
    "category": "type",
    "text": "FEMMDeforLinear{S<:FESet, F<:Function, P<:PropertyDeformationLinear}\n\nClass for linear deformation finite element modeling machine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearBaseModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearBaseModule",
    "category": "module",
    "text": "FEMMDeforLinearAbstractBaseModule\n\nBase module for operations on interiors of domains to construct system matrices and system vectors for linear deformation models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearESNICEModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearESNICEModule",
    "category": "module",
    "text": "FEMMDeforLinearESNICEModule\n\nFormulation for the small displacement, small strain deformation model for Nodally-Integrated Continuum Elements (NICE).\n\nThe approximation is  originally from Dohrmann et al IJNME 47 (2000). The formulation was subsequently developed in Krysl, P. and Zhu, B. Locking-free continuum displacement finite elements with nodal integration, International Journal for Numerical Methods in Engineering, 76,7,1020-1043,2008.\n\nThe stabilization scheme comes from papers on energy-sampling stabilization for mean-strain elements (Krysl).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearMSModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearMSModule",
    "category": "module",
    "text": "FEMMDeforLinearMSModule\n\nModule for operations on interiors of domains to construct system matrices and system vectors for linear deformation models:  mean-strain  formulation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearModule",
    "category": "module",
    "text": "FEMMDeforLinearModule\n\nModule for operations on interiors of domains to construct system matrices and system vectors for linear deformation models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearNICEModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearNICEModule",
    "category": "module",
    "text": "FEMMDeforLinearNICEModule\n\nFormulation for the small displacement, small strain deformation model for Nodally-Integrated Continuum Elements (NICE).\n\nThe approximation is  originally from Dohrmann et al IJNME 47 (2000). The formulation was subsequently developed in Krysl, P. and Zhu, B. Locking-free continuum displacement finite elements with nodal integration, International Journal for Numerical Methods in Engineering, 76,7,1020-1043,2008.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforSurfaceDampingModule.FEMMDeforSurfaceDamping",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforSurfaceDampingModule.FEMMDeforSurfaceDamping",
    "category": "type",
    "text": "FEMMDeforSurfaceDamping{S<:FESet, F<:Function}\n\nType for surface damping model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforSurfaceDampingModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforSurfaceDampingModule",
    "category": "module",
    "text": "FEMMDeforSurfaceDampingModule\n\nModule for operations on the damping associated with absorbing boundary  conditions (ABC) representation of the effect of infinite extent  of inviscid fluid next to the surface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforWinklerModule.FEMMDeforWinkler",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforWinklerModule.FEMMDeforWinkler",
    "category": "type",
    "text": "FEMMDeforWinkler{S<:FESet, F<:Function}\n\nType for normal spring support  (Winkler).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforWinklerModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforWinklerModule",
    "category": "module",
    "text": "FEMMDeforWinklerModule\n\nModule for operations on boundaries of domains to construct system matrices and system vectors for linear deformation models with distributed-spring supports (Winkler foundation model).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffModule.FEMMHeatDiff",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffModule.FEMMHeatDiff",
    "category": "type",
    "text": "FEMMHeatDiff(integdata::IntegData{S, F}, material::M) where {S<:FESet, F<:Function, M<:MatHeatDiff}\n\nConstruct with the default orientation matrix (identity).  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffModule",
    "category": "module",
    "text": "FEMMHeatDiffModule\n\nModule for operations on interiors of domains to construct system matrices and system vectors for linear heat conduction/diffusion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffSurfModule",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffSurfModule",
    "category": "module",
    "text": "FEMMHeatDiffSurfModule\n\nModule for operations on boundaries of domains to construct system matrices and system vectors for linear heat diffusion/conduction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FENodeSetModule.FENodeSet",
    "page": "Docstrings",
    "title": "FinEtools.FENodeSetModule.FENodeSet",
    "category": "type",
    "text": "Finite element node set type.\n\nxyz =     Array of node locations.     Array of coordinates, the number of rows corresponds to the number of     nodes in the set and the columns corresponds to the space dimensions.     The location of node j is given by x[j,:].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FENodeSetModule",
    "page": "Docstrings",
    "title": "FinEtools.FENodeSetModule",
    "category": "module",
    "text": "FENodeSetModule\n\nModule for the finite element node set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FENodeToFEMapModule.FENodeToFEMap",
    "page": "Docstrings",
    "title": "FinEtools.FENodeToFEMapModule.FENodeToFEMap",
    "category": "type",
    "text": "Map from finite element nodes to the finite elements connecting them.\n\nFor each  node referenced in the connectivity of the finite element set on input, the numbers of the individual finite elements that reference that node is stored in an array in the array map.         Example: fes.conn= [7,6,5;                             4,1,3;                             3,7,5];             The map reads                     map[1] = [2];                     map[2] = [];#  note that node number 2 is not referenced by the connectivity                     map[3] = [2,3];                     map[4] = [2];                     map[5] = [1,3];                     map[6] = [1];                     map[7] = [1,3]; The individual elements from the connectivity that reference node number 5 are 1 and 3, so that fes.conn(map[5],:) includes  all the nodes that are connected to node 5 (including node 5  itself).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FENodeToFEMapModule",
    "page": "Docstrings",
    "title": "FinEtools.FENodeToFEMapModule",
    "category": "module",
    "text": "FENodeToFEMapModule\n\nModule to construct a map from finite element nodes to the finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetH20",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetH20",
    "category": "type",
    "text": "FESetH20\n\nType for sets of volume-like of hexahedral finite elements with 20 nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetH27",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetH27",
    "category": "type",
    "text": "FESetH27\n\nType for sets of volume-like of hexahedral finite elements with 27 nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetH8",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetH8",
    "category": "type",
    "text": "FESetH8\n\nType for sets of volume-like of hexahedral finite elements with eight nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetL2",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetL2",
    "category": "type",
    "text": "FESetL2\n\nType for sets of curve-like of finite elements with two nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetL3",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetL3",
    "category": "type",
    "text": "FESetL3\n\nType for sets of curve-like of finite elements with three nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule",
    "category": "module",
    "text": "FESetModule\n\nModule for finite element sets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetP1",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetP1",
    "category": "type",
    "text": "FESetP1\n\nType for sets of point-like of finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetQ4",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetQ4",
    "category": "type",
    "text": "FESetQ4\n\nType for sets of surface-like of quadrilateral finite elements with four nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetQ8",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetQ8",
    "category": "type",
    "text": "FESetQ8\n\nType for sets of surface-like of quadrilateral finite elements with eight nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetQ9",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetQ9",
    "category": "type",
    "text": "FESetQ9\n\nType for sets of surface-like of quadrilateral finite elements with nine nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetT10",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetT10",
    "category": "type",
    "text": "FESetT10\n\nType for sets of volume-like of tetrahedral finite elements with 10 nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetT3",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetT3",
    "category": "type",
    "text": "FESetT3\n\nType for sets of surface-like of triangular finite elements with three nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetT4",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetT4",
    "category": "type",
    "text": "FESetT4\n\nType for sets of volume-like of tetrahedral finite elements with four nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.FESetT6",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.FESetT6",
    "category": "type",
    "text": "FESetT6\n\nType for sets of surface-like of triangular finite elements with six nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FTypesModule",
    "page": "Docstrings",
    "title": "FinEtools.FTypesModule",
    "category": "module",
    "text": "FTypesModule\n\nModule to define  basic types.\n\nThese are the types of quantities used in FinEtools. They are all exported.\n\nexport FInt, FFlt, FCplxFlt, FFltVec, FIntVec, FFltMat, FIntMat, FMat, FVec export FDataDict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.Field",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.Field",
    "category": "type",
    "text": "Abstract field.\n\nExpected  attributes:\n\nvalues::FMat{T} # Array of degree of freedom parameters,  indexed by node\ndofnums::FIntMat # Array of degree of freedom numbers, indexed by node\nis_fixed::Matrix{Bool} # Array of Boolean flags, indexed by node\nfixed_values::FMat{T} # Array of fixed values, indexed by node\nnfreedofs::FInt # Total number of free degrees of freedom\n\nSee the macro add_Field_fields().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule",
    "category": "module",
    "text": "FieldModule\n\nModule for abstract fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FinEtools",
    "page": "Docstrings",
    "title": "FinEtools.FinEtools",
    "category": "module",
    "text": "FinEtools (C) 2017, Petr Krysl\n\nFinite Element tools.  Julia implementation  of the finite element method for continuum mechanics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.ForceIntensityModule.ForceIntensity",
    "page": "Docstrings",
    "title": "FinEtools.ForceIntensityModule.ForceIntensity",
    "category": "type",
    "text": "ForceIntensity{T<:Number, F<:Function}\n\nDistributed force (force intensity) type. The force intensity class. The physical units are force per unit volume, where volume depends on to which manifold the force is applied:\n\nforce/length^3 (when applied to a 3-D solid),\nforce/length^2 (when applied to a surface),\nforce/length^1 (when applied along a curve), or \nforce/length^0 (when applied at a point).\n\nSignature of the function to compute the value of the force  at any given point XYZ, using the columns of the Jacobian matrix of the element, tangents, and if necessary  also the finite element label, fe_label:\n\ngetforce!(forceout::FFltVec, XYZ::FFltMat, tangents::FFltMat, fe_label::FInt)\n\nThe buffer forceout is filled with the value  of the force.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.ForceIntensityModule",
    "page": "Docstrings",
    "title": "FinEtools.ForceIntensityModule",
    "category": "module",
    "text": "ForceIntensityModule\n\nModule  to manage  distributed force intensity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.GRID",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.GRID",
    "category": "function",
    "text": "GRID(self::NASTRANExporter, n::Int, xyz::Vector{FFlt})\n\nWrite a grid-point statement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule.GaussRule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule.GaussRule",
    "category": "type",
    "text": "GaussRule\n\nThe Gauss rule.\n\nThe rule is applicable for a tensor product of  intervals -1 <=x<= +1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.GeneralFieldModule.GeneralField",
    "page": "Docstrings",
    "title": "FinEtools.GeneralFieldModule.GeneralField",
    "category": "type",
    "text": "GeneralField{T<:Number} <: Field\n\nGeneral field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.GeneralFieldModule",
    "page": "Docstrings",
    "title": "FinEtools.GeneralFieldModule",
    "category": "module",
    "text": "GeneralFieldModule\n\nModule for general fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H20block",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H20block",
    "category": "function",
    "text": "H20block(Length::FFlt, Width::FFlt, Height::FFlt, nL::FInt, nW::FInt, nH::FInt)\n\nCreate mesh of a 3-D block of H20 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H20blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H20blockx",
    "category": "function",
    "text": "H20blockx(xs::FFltVec, ys::FFltVec, zs::FFltVec)\n\nGraded mesh of a 3-D block of H20 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H27block",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H27block",
    "category": "function",
    "text": "H27block(Length::FFlt, Width::FFlt, Height::FFlt, nL::FInt, nW::FInt, nH::FInt)\n\nCreate mesh of a 3-D block of H27 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H27blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H27blockx",
    "category": "function",
    "text": "H27blockx(xs::FFltVec, ys::FFltVec, zs::FFltVec)\n\nGraded mesh of a 3-D block of H27 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8block",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8block",
    "category": "function",
    "text": "H8block(Length::FFlt, Width::FFlt, Height::FFlt, nL::FInt, nW::FInt, nH::FInt)\n\nMake  a mesh  of a 3D block consisting of  eight node hexahedra.\n\nLength, Width, Height= dimensions of the mesh in Cartesian coordinate axes, smallest coordinate in all three directions is  0 (origin) nL, nW, nH=number of elements in the three directions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8blockx",
    "category": "function",
    "text": "H8blockx(xs::FFltVec, ys::FFltVec, zs::FFltVec)\n\nGraded mesh of a 3-D block of H8 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8elliphole",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8elliphole",
    "category": "function",
    "text": "H8elliphole(xradius::FFlt, yradius::FFlt, L::FFlt, H::FFlt, T::FFlt,\n    nL::FInt, nH::FInt, nW::FInt, nT::FInt)\n\nMesh of one quarter of a rectangular plate with an elliptical hole.\n\nxradius,yradius = radii of the ellipse, L,H = dimensions of the plate, T = thickness of the plate nL,nH= numbers of edges along the side of the plate; this is also   the number of edges along the circumference of the elliptical hole nW = number of edges along the remaining straight edge (from the hole   in the radial direction),\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8extrudeQ4",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8extrudeQ4",
    "category": "function",
    "text": "H8extrudeQ4(fens::FENodeSet,  fes::FESetQ4, nLayers::FInt, extrusionh::Function)\n\nExtrude a mesh of quadrilaterals into a mesh of hexahedra (H8).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8hexahedron",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8hexahedron",
    "category": "function",
    "text": "H8hexahedron(xyz::FFltMat, nL::FInt, nW::FInt, nH::FInt; blockfun=nothing)\n\nMesh of a general hexahedron given by the location of the vertices.\n\nxyz = One vertex location per row; Either two rows (for a rectangular      block given by the its corners),  or eight rows (general hexahedron). nL,  nW,  nH = number of elements in each direction blockfun = Optional argument: function of the block-generating mesh function      (having the signature of the function H8block()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8layeredplatex",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8layeredplatex",
    "category": "function",
    "text": "H8layeredplatex(xs::FFltVec, ys::FFltVec, ts::FFltVec, nts::FIntVec)\n\nH8 mesh for a layered block (composite plate) with specified in plane coordinates.\n\nxs,ys =Locations of the individual planes of nodes. ts= Array of layer thicknesses, nts= array of numbers of elements per layer\n\nThe finite elements of each layer are labeled with the layer number, starting from 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8refine",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8refine",
    "category": "function",
    "text": "H8refine(fens::FENodeSet,  fes::FESetH8)\n\nRefine a mesh of H8 hexahedrals by octasection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8sphere",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8sphere",
    "category": "function",
    "text": "H8sphere(radius::FFlt, nrefine::FInt)\n\nCreate a mesh of 1/8 of the sphere of \"radius\". The  mesh will consist of\nfour hexahedral elements if \"nrefine==0\",  or more if \"nrefine>0\".\n\"nrefine\" is the number of bisections applied  to refine the mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8spheren",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8spheren",
    "category": "function",
    "text": "H8spheren(radius::FFlt, nperradius::FInt)\n\nCreate a solid mesh of 1/8 of sphere.\n\nCreate a solid mesh of 1/8 of the sphere of \"radius\",  with nperradius elements per radius.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8toH20",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8toH20",
    "category": "function",
    "text": "H8toH20(fens::FENodeSet,  fes::FESetH8)\n\nConvert a mesh of hexahedra H8 to hexahedra H20.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8toH27",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8toH27",
    "category": "function",
    "text": "H8toH27(fens::FENodeSet,  fes::FESetH8)\n\nConvert a mesh of hexahedra H8 to hexahedra H27.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule.H8voximg",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule.H8voximg",
    "category": "function",
    "text": "H8voximg(img::Array{DataT, 3}, voxdims::FFltVec,\n    voxval::Array{DataT, 1}) where {DataT<:Number}\n\nGenerate a hexahedral mesh  from three-dimensional image.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.HEADING",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.HEADING",
    "category": "function",
    "text": "HEADING(self::AbaqusExporter, Text::AbstractString)\n\nWrite out the *HEADING option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.INSTANCE",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.INSTANCE",
    "category": "function",
    "text": "INSTANCE(self::AbaqusExporter, NAME::AbstractString, PART::AbstractString)\n\nWrite out the *INSTANCE option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelTetMeshingModule.ImageMesher",
    "page": "Docstrings",
    "title": "FinEtools.VoxelTetMeshingModule.ImageMesher",
    "category": "type",
    "text": "ImageMesher{CoordT,DataT}\n\nTetrahedral image mesher.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.IntegData",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.IntegData",
    "category": "type",
    "text": "IntegData{S<:FESet, F<:Function}\n\nIntegration data.\n\nT = type of finite element set.  The type of the FE set will be dependent\n\nupon the operations required. For instance, for interior (volume) integrals such as body load or the stiffness hexahedral H8 may be used, whereas for boundary  (surface) integrals quadrilateral Q4 would be needed.\n\nF = type of function to return the \"other\" dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule",
    "category": "module",
    "text": "IntegDataModule\n\nModule to manage geometry data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule",
    "category": "module",
    "text": "IntegRuleModule Module for numerical integration rules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.Jacobiancurve",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.Jacobiancurve",
    "category": "function",
    "text": "Jacobiancurve(self::IntegData{T}, J::FFltMat,\n    loc::FFltMat, conn::CC,\n    N::FFltMat)::FFlt where {T<:FESet0Manifold, CC}\n\nEvaluate the curve Jacobian.\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\nJacobiancurve(self::IntegData{T}, J::FFltMat,\n          loc::FFltMat, conn::CC,\n          N::FFltMat)::FFlt where {T<:FESet1Manifold, CC}\n\nEvaluate the curve Jacobian.\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.Jacobianmdim",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.Jacobianmdim",
    "category": "function",
    "text": "Jacobianmdim(self::IntegData{T}, J::FFltMat,\n  loc::FFltMat, conn::CC,\n  N::FFltMat, m::FInt)::FFlt where {T<:FESet0Manifold, CC}\n\nEvaluate the manifold Jacobian for an m-dimensional manifold.\n\nFor an 0-dimensional finite element,  the manifold Jacobian is for\n\nm=0: +1\nm=1: Jacobiancurve\nm=2: Jacobiansurface\nm=3: Jacobianvolume\n\n\n\n\n\nJacobianmdim(self::IntegData{T}, J::FFltMat,\nloc::FFltMat, conn::CC,\nN::FFltMat, m::FInt)::FFlt where {T<:FESet1Manifold, CC}\n\nEvaluate the manifold Jacobian for an m-dimensional manifold.\n\nFor an 1-dimensional finite element,  the manifold Jacobian is for\n\nm=1: Jacobiancurve\nm=2: Jacobiansurface\nm=3: Jacobianvolume\n\n\n\n\n\nJacobianmdim(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n            N::FFltMat, m::FInt)::FFlt where {T<:FESet2Manifold, CC}\n\nEvaluate the manifold Jacobian for an m-dimensional manifold.\n\nFor an 2-dimensional finite element,  the manifold Jacobian is for\n\nm=2: Jacobiansurface\nm=3: Jacobianvolume\n\n\n\n\n\nJacobianmdim{T<:FESet3Manifold}(self::IntegData, J::FFltMat,\n            loc::FFltMat, conn::FIntMat, N::FFltMat, m::FInt)\n\nEvaluate the manifold Jacobian for an m-dimensional manifold.\n\nFor an 3-dimensional cell,  the manifold Jacobian is\n\nm=3: Jacobianvolume\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.Jacobianpoint",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.Jacobianpoint",
    "category": "function",
    "text": "Jacobianpoint(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n            N::FFltMat)::FFlt where {T<:FESet0Manifold, CC}\n\nEvaluate the point Jacobian.\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.Jacobiansurface",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.Jacobiansurface",
    "category": "function",
    "text": "Jacobiansurface(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n            N::FFltMat)::FFlt where {T<:FESet0Manifold, CC}\n\nEvaluate the surface Jacobian.\n\nFor the zero-dimensional cell,  the surface Jacobian is (i) the product of the point Jacobian and the other dimension (units of length squared); or,  when used as axially symmetric (ii) the product of the point Jacobian and the circumference of the circle through the point loc times the other dimension (units of length).\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\nJacobiansurface(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n            N::FFltMat)::FFlt where {T<:FESet1Manifold, CC}\n\nEvaluate the surface Jacobian.\n\nFor the one-dimensional cell,  the surface Jacobian is (i) the product of the curve Jacobian and the other dimension (units of length); or,  when used as axially symmetric (ii) the product of the curve Jacobian and the circumference of the circle through the point loc.\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\nJacobiansurface(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n             N::FFltMat)::FFlt where {T<:FESet2Manifold, CC}\n\nEvaluate the surface Jacobian.\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.Jacobianvolume",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.Jacobianvolume",
    "category": "function",
    "text": "Jacobianvolume(self::IntegData{T}, J::FFltMat,\n      loc::FFltMat, conn::CC,\n      N::FFltMat)::FFlt where {T<:FESet0Manifold, CC}\n\nEvaluate the volume Jacobian.\n\nFor the zero-dimensional cell,  the volume Jacobian is (i) the product of the point Jacobian and the other dimension (units of length cubed); or,  when used as axially symmetric (ii) the product of the point Jacobian and the circumference of the circle through the point loc and the other dimension (units of length squared).\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\nJacobianvolume(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n            N::FFltMat)::FFlt where {T<:FESet1Manifold, CC}\n\nEvaluate the volume Jacobian.\n\nFor the one-dimensional cell,  the volume Jacobian is (i) the product of the curve Jacobian and the other dimension (units of length squared); or,  when used as axially symmetric (ii) the product of the curve Jacobian and the circumference of the circle through the point loc and the other dimension (units of length).\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\nJacobianvolume(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n            N::FFltMat)::FFlt where {T<:FESet2Manifold, CC}\n\nEvaluate the volume Jacobian.\n\nFor the two-dimensional cell,  the volume Jacobian is (i) the product of the surface Jacobian and the other dimension (units of length); or,  when used as axially symmetric (ii) the product of the surface Jacobian and the circumference of the circle through the point loc (units of length).\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\nJacobianvolume(self::IntegData{T}, J::FFltMat,\n            loc::FFltMat, conn::CC,\n            N::FFltMat)::FFlt where {T<:FESet3Manifold, CC}\n\nEvaluate the volume Jacobian.\n\nJ = Jacobian matrix\nloc = location of the quadrature point in physical coordinates,\nconn = connectivity of the element,\nN = matrix of basis function values at the quadrature point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshLineModule.L2block",
    "page": "Docstrings",
    "title": "FinEtools.MeshLineModule.L2block",
    "category": "function",
    "text": "L2block(Length::FFlt, nL::FInt)\n\nMesh of a 1-D block of L2 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshLineModule.L2blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshLineModule.L2blockx",
    "category": "function",
    "text": "L2blockx(xs::FFltVec)\n\nGraded mesh of a 1-D block, L2 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshLineModule.L3blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshLineModule.L3blockx",
    "category": "function",
    "text": "L3blockx(xs::FFltVec)\n\nGraded mesh of a 1-D block, L2 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.MAT1",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.MAT1",
    "category": "function",
    "text": "MAT1(self::NASTRANExporter, mid::Int, E::FFlt, G::FFlt, nu::FFlt, rho::FFlt, A::FFlt, TREF::FFlt, GE::FFlt)\n\nWrite a statement for an isotropic elastic material.\n\n\n\n\n\nMAT1(self::NASTRANExporter, mid::Int, E::FFlt, nu::FFlt, rho::FFlt = 0.0, A::FFlt = 0.0, TREF::FFlt = 0.0)\n\nWrite a statement for an isotropic elastic material.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.MATERIAL",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.MATERIAL",
    "category": "function",
    "text": "MATERIAL(self::AbaqusExporter, MATERIAL::AbstractString)\n\nWrite out the *MATERIAL option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatAcoustFluidModule",
    "page": "Docstrings",
    "title": "FinEtools.MatAcoustFluidModule",
    "category": "module",
    "text": "MatAcoustFluidModule\n\nModule for acoustic-fluid  material.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.MatDefor",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.MatDefor",
    "category": "type",
    "text": "MatDefor\n\nAbstract type that represents deformable materials.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforElastIsoModule.MatDeforElastIso",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforElastIsoModule.MatDeforElastIso",
    "category": "type",
    "text": "MatDeforElastIso\n\nLinear isotropic elasticity  material.\n\ntangentmoduli!::MTAN\nupdate!::MUPD\nthermalstrain!::MTHS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforElastOrthoModule.MatDeforElastOrtho",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforElastOrthoModule.MatDeforElastOrtho",
    "category": "type",
    "text": "MatDeforElastOrtho\n\nLinear orthotropic elasticity  material.\n\n  ms::MatDeforElastOrthoMS, D::FFltMat,\n  t::FFlt, dt::FFlt, loc::FFltMat, label::FInt)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforElastOrthoModule",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforElastOrthoModule",
    "category": "module",
    "text": "MatDeforElastOrthoModule\n\nModule for  orthotropic elastic material.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule",
    "category": "module",
    "text": "MatDeforModule\n\nModule to support general operations for deformation material models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatHeatDiffModule",
    "page": "Docstrings",
    "title": "FinEtools.MatHeatDiffModule",
    "category": "module",
    "text": "MatHeatDiffModule\n\nModule for linear heat diffusion material models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatrixUtilityModule",
    "page": "Docstrings",
    "title": "FinEtools.MatrixUtilityModule",
    "category": "module",
    "text": "MatrixUtilityModule\n\nModule for general utility matrix product functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule",
    "category": "module",
    "text": "MeshExportModule\n\nModule for export of meshes and data defined on meshes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshHexahedronModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshHexahedronModule",
    "category": "module",
    "text": "MeshHexahedronModule\n\nModule for generation of  hexahedral meshes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshImportModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshImportModule",
    "category": "module",
    "text": "MeshImportModule\n\nModule for mesh import  functions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshLineModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshLineModule",
    "category": "module",
    "text": "MeshLineModule\n\nModule  for generation of meshes composed of line (curve) elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule",
    "category": "module",
    "text": "MeshModificationModule\n\nModule for mesh modification operations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule",
    "category": "module",
    "text": "MeshQuadrilateralModule\n\nModule  for generation of meshes composed of quadrilaterals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshSelectionModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshSelectionModule",
    "category": "module",
    "text": "MeshSelectionModule\n\nModule for  selection of mesh entities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule",
    "category": "module",
    "text": "MeshTetrahedronModule\n\nModule  for generation of meshes composed of tetrahedra.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule",
    "category": "module",
    "text": "MeshTriangleModule\n\nModule  for generation of meshes composed of triangles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshUtilModule",
    "page": "Docstrings",
    "title": "FinEtools.MeshUtilModule",
    "category": "module",
    "text": "MeshUtilModule\n\nModule for mesh utility functions used in other meshing modules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.NASTRANExporter",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.NASTRANExporter",
    "category": "type",
    "text": "NASTRANExporter\n\nExport mesh to Abaqus.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.NODE",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.NODE",
    "category": "function",
    "text": "NODE(self::AbaqusExporter, xyz::AbstractArray{T, 2}) where {T}\n\nWrite out the *NODE option.\n\nxyz=array of node coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.NODE_PRINT",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.NODE_PRINT",
    "category": "function",
    "text": "NODE_PRINT(self::AbaqusExporter, NSET::AbstractString)\n\nWrite out the *NODE PRINT option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.NSET_NSET",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.NSET_NSET",
    "category": "function",
    "text": "NSET_NSET(self::AbaqusExporter, NSET::AbstractString,\n  n::AbstractVector{T}) where {T<:Integer}\n\nWrite out the *NSET option.\n\nNSET = name of the set, n = array of the node numbers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.NodalFieldModule.NodalField",
    "page": "Docstrings",
    "title": "FinEtools.NodalFieldModule.NodalField",
    "category": "type",
    "text": "NodalField{T<:Number}\n\nNodal field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.NodalFieldModule",
    "page": "Docstrings",
    "title": "FinEtools.NodalFieldModule",
    "category": "module",
    "text": "NodalFieldModule\n\nModule for nodal fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule.NodalSimplexRule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule.NodalSimplexRule",
    "category": "type",
    "text": "NodalSimplexRule\n\nThe nodal-quadrature simplex rule.\n\nThe rule is applicable for line segments, triangles, tetrahedra.\n\nThe quadrature points must be given at the nodes in the order  in which the nodes are used in the definition of the element.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.ORIENTATION",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.ORIENTATION",
    "category": "function",
    "text": "ORIENTATION(self::AbaqusExporter, ORIENTATION::AbstractString,\n  a::AbstractArray{T,1}, b::AbstractArray{T,1})\n\nWrite out the *ORIENTATION option.\n\nInvoke at level: Part,  Part instance,  Assembly\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.PART",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.PART",
    "category": "function",
    "text": "PART(self::AbaqusExporter, NAME::AbstractString)\n\nWrite out the *PART option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.PSOLID",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.PSOLID",
    "category": "function",
    "text": "PSOLID(self::NASTRANExporter, pid::Int, mid::Int)\n\nWrite solid-property statement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.PhysicalUnitModule",
    "page": "Docstrings",
    "title": "FinEtools.PhysicalUnitModule",
    "category": "module",
    "text": "PhysicalUnitModule\n\nModule  to handle use of physical units in constant definitions.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule.PointRule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule.PointRule",
    "category": "type",
    "text": "PointRule\n\nClass of point quadrature rule.\n\nUsed for integration on the standard \"point\" shape.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q4annulus",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q4annulus",
    "category": "function",
    "text": "Q4annulus(rin::FFlt, rex::FFlt, nr::FInt, nc::FInt, Angl::FFlt)\n\nMesh of an annulus segment.\n\nMesh of an annulus segment, centered at the origin, with internal radius rin, and  external radius rex, and  development angle Angl (in radians). Divided into elements: nr, nc in the radial and circumferential direction respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q4block",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q4block",
    "category": "function",
    "text": "Q4block(Length::FFlt, Width::FFlt, nL::FInt, nW::FInt)\n\nMesh of a rectangle, Q4 elements.\n\nDivided into elements: nL, nW in the first, second (x,y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q4blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q4blockx",
    "category": "function",
    "text": "Q4blockx(xs::FFltVec, ys::FFltVec)\n\nGraded mesh  of a rectangle, Q4 finite elements.\n\nMesh of a 2-D block, Q4 finite elements. The nodes are located at the\nCartesian product of the two intervals on the input.  This allows for\nconstruction of graded meshes.\n\nxs,ys - Locations of the individual planes of nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q4elliphole",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q4elliphole",
    "category": "function",
    "text": "Q4elliphole(xradius::FFlt, yradius::FFlt, L::FFlt, H::FFlt,\n  nL::FInt, nH::FInt, nW::FInt)\n\nMesh of one quarter of a rectangular plate with an elliptical hole.\n\nxradius,yradius = radius of the ellipse,\nL,H= and dimensions of the plate,\nnL,nH= numbers of edges along the side of the plate; this also happens\n  to be the number of edges along the circumference of the elliptical\n  hole\nnW= number of edges along the remaining straight edge (from the hole\n  in the direction of the length),\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q4quadrilateral",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q4quadrilateral",
    "category": "function",
    "text": "Q4quadrilateral(xyz::FFltMat, nL::FInt, nW::FInt)\n\nMesh of a general quadrilateral given by the location of the vertices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q4refine",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q4refine",
    "category": "function",
    "text": "Q4refine(fens::FENodeSet, fes::FESetQ4)\n\nRefine a mesh of quadrilaterals by bisection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q4toQ8",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q4toQ8",
    "category": "function",
    "text": "Q4toQ8(fens::FENodeSet, fes::FESetQ4)\n\nConvert a mesh of quadrilateral Q4 to quadrilateral Q8.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule.Q4toT3",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule.Q4toT3",
    "category": "function",
    "text": "Q4toT3(fens::FENodeSet, fes::FESetQ4, orientation::Symbol=:default)\n\nConvert a mesh of quadrilateral Q4\'s to two T3 triangles  each.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q8annulus",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q8annulus",
    "category": "function",
    "text": "Q8annulus(rin::FFlt, rex::FFlt, nr::FInt, nc::FInt, Angl::FFlt)\n\nMesh of an annulus segment.\n\nMesh of an annulus segment, centered at the origin, with internal radius rin, and  external radius rex, and  development angle Angl. Divided into elements: nr, nc in the radial and circumferential direction respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q8block",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q8block",
    "category": "function",
    "text": "Q8block(Length::FFlt, Width::FFlt, nL::FInt, nW::FInt)\n\nMesh of a rectangle of Q8 elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshQuadrilateralModule.Q8blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshQuadrilateralModule.Q8blockx",
    "category": "function",
    "text": "Q8blockx(xs::FFltVec, ys::FFltVec)\n\nGraded mesh of a 2-D block of Q8 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.RotationUtilModule",
    "page": "Docstrings",
    "title": "FinEtools.RotationUtilModule",
    "category": "module",
    "text": "RotationUtilModule\n\nModule to handle two-dimensional and three-dimensional rotations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.SECTION_CONTROLS",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.SECTION_CONTROLS",
    "category": "function",
    "text": "SECTION_CONTROLS(self::AbaqusExporter, NAME::AbstractString,\n  OPTIONAL::AbstractString)\n\nWrite out the *SECTION CONTROLS option.\n\nOPTIONAL = string, for instance                      HOURGLASS=ENHANCED\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.SOLID_SECTION",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.SOLID_SECTION",
    "category": "function",
    "text": "SOLID_SECTION(self::AbaqusExporter, MATERIAL::AbstractString,\n  ORIENTATION::AbstractString, ELSET::AbstractString,\n  CONTROLS::AbstractString)\n\nWrite out the *SOLID SECTION option.\n\nLevel: Part,  Part instance\n\n\n\n\n\nSOLID_SECTION(self::AbaqusExporter, MATERIAL::AbstractString,\n  ORIENTATION::AbstractString, ELSET::AbstractString)\n\nWrite out the *SOLID SECTION option.\n\nLevel: Part,  Part instance\n\n\n\n\n\nSOLID_SECTION(self::AbaqusExporter, MATERIAL::AbstractString,\n  ORIENTATION::AbstractString, ELSET::AbstractString)\n\nWrite out the *SOLID SECTION option.\n\nLevel: Part,  Part instance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.STEP_FREQUENCY",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.STEP_FREQUENCY",
    "category": "function",
    "text": "STEP_FREQUENCY(self::AbaqusExporter, Nmodes::Integer)\n\nWrite out the *STEP,FREQUENCY option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.STEP_PERTURBATION_BUCKLE",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.STEP_PERTURBATION_BUCKLE",
    "category": "function",
    "text": "STEP_PERTURBATION_BUCKLE(self::AbaqusExporter, neigv::Integer)\n\nWrite out the *STEP,PERTURBATION option for linear buckling analysis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.STEP_PERTURBATION_STATIC",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.STEP_PERTURBATION_STATIC",
    "category": "function",
    "text": "STEP_PERTURBATION_STATIC(self::AbaqusExporter)\n\nWrite out the *STEP,PERTURBATION option for linear static analysis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.STLExporter",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.STLExporter",
    "category": "type",
    "text": "STLExporter\n\nExport surface mesh as STL file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.SURFACE_SECTION",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.SURFACE_SECTION",
    "category": "function",
    "text": "SURFACE_SECTION(self::AbaqusExporter, ELSET::AbstractString)\n\nWrite out the *SURFACE SECTION option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule.SimplexRule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule.SimplexRule",
    "category": "type",
    "text": "SimplexRule\n\nSimplex quadrature rule.\n\nUsed for integration on the standard triangle or the standard tetrahedron.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.SurfaceNormalModule.SurfaceNormal",
    "page": "Docstrings",
    "title": "FinEtools.SurfaceNormalModule.SurfaceNormal",
    "category": "type",
    "text": "SurfaceNormal{F<:Function}\n\nExterior surface normal type.\n\nNormalized to unit length. \n\nSignature of the function to compute the value of the unit normal  at any given point XYZ, using the columns of the Jacobian matrix  of the element, tangents, and if necessary  also the finite element label, fe_label:\n\ngetnormal!(normalout::FFltVec, XYZ::FFltMat, tangents::FFltMat, fe_label::FInt)\n\nThe buffer normalout is filled with the value  of the normal vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.SurfaceNormalModule",
    "page": "Docstrings",
    "title": "FinEtools.SurfaceNormalModule",
    "category": "module",
    "text": "SurfaceNormalModule\n\nModule to evaluate surface normal vector. \n\nThe normal is assumed to be the exterior normal, and the vector is normalized to unit length.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule.SysmatAssemblerSparseHRZLumpingSymm",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule.SysmatAssemblerSparseHRZLumpingSymm",
    "category": "type",
    "text": "SysmatAssemblerSparseHRZLumpingSymm{T<:Number} <: SysmatAssemblerBase\n\nAssembler for a SYMMETRIC LUMPED square matrix  assembled from  SYMMETRIC squared matrices. \n\nReference: A note on mass lumping and related processes in the finite element method, E. Hinton, T. Rock, O. C. Zienkiewicz, Earthquake Engineering & Structural Dynamics, volume 4, number 3, 245–249, 1976. }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule.SysmatAssemblerSparseSymm",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule.SysmatAssemblerSparseSymm",
    "category": "type",
    "text": "SysmatAssemblerSparseSymm{T<:Number} <: SysmatAssemblerBase\n\nAssembler for a SYMMETRIC square matrix  assembled from  SYMMETRIC squared matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule.SysvecAssembler",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule.SysvecAssembler",
    "category": "type",
    "text": "SysvecAssembler\n\nAssembler for the system vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T10block",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T10block",
    "category": "function",
    "text": "T10block(Length::FFlt, Width::FFlt, Height::FFlt,\n  nL::FInt, nW::FInt, nH::FInt; orientation::Symbol=:a)\n\nGenerate a tetrahedral  mesh of T10 elements  of a rectangular block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T10blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T10blockx",
    "category": "function",
    "text": "T10blockx(xs::FFltMat, ys::FFltMat, zs::FFltMat, orientation::Symbol = :a)\n\nGenerate a graded 10-node tetrahedral mesh  of a 3D block.\n\n10-node tetrahedra in a regular arrangement, with non-uniform given spacing between the nodes, with a given orientation of the diagonals.\n\nThe mesh is produced by splitting each logical  rectangular cell into six tetrahedra.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T10layeredplatex",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T10layeredplatex",
    "category": "function",
    "text": "T10layeredplatex(xs::FFltVec, ys::FFltVec, ts::FFltVec, nts::FIntVec,\n    orientation::Symbol = :a)\n\nT10 mesh for a layered block (composite plate) with specified in plane coordinates.\n\nxs,ys =Locations of the individual planes of nodes. ts= Array of layer thicknesses, nts= array of numbers of elements per layer\n\nThe finite elements of each layer are labeled with the layer number, starting from 1 at the bottom.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T10toT4",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T10toT4",
    "category": "function",
    "text": "T10toT4(fens::FENodeSet,  fes::FESetT4)\n\nConvert a mesh of tetrahedra of type T10 (quadratic 10-node) to tetrahedra T4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule.T3block",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule.T3block",
    "category": "function",
    "text": "T3block(Length::FFlt, Width::FFlt, nL::FInt, nW::FInt, orientation::Symbol=:a)\n\nT3 Mesh of a rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule.T3blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule.T3blockx",
    "category": "function",
    "text": "T3blockx(xs::FFltVec, ys::FFltVec, orientation::Symbol=:a)\n\nT3 Mesh of a rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule.T3refine",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule.T3refine",
    "category": "function",
    "text": "T3refine(fens::FENodeSet,fes::FESetT3)\n\nRefine a mesh of 3-node tetrahedra by quadrisection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule.T3toT6",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule.T3toT6",
    "category": "function",
    "text": "T3toT6(fens::FENodeSet, fes::FESetT3)\n\nConvert a mesh of triangle T3 (three-node) to triangle T6.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T4block",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T4block",
    "category": "function",
    "text": "T4block(Length::FFlt, Width::FFlt, Height::FFlt,\n   nL::FInt, nW::FInt, nH::FInt, orientation::Symbol)\n\nGenerate a tetrahedral mesh  of the 3D block.\n\nFour-node tetrahedra in a regular arrangement, with uniform spacing between the nodes, with a given orientation of the diagonals.\n\nThe mesh is produced by splitting each logical  rectangular cell into six tetrahedra. Range =<0, Length> x <0, Width> x <0, Height> Divided into elements: nL,  nW,  nH in the first,  second,  and third direction (x, y, z).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T4blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T4blockx",
    "category": "function",
    "text": "T4blockx(xs::FFltMat, ys::FFltMat, zs::FFltMat, orientation::Symbol)\n\nGenerate a graded tetrahedral mesh  of a 3D block.\n\nFour-node tetrahedra in a regular arrangement, with non-uniform given spacing between the nodes, with a given orientation of the diagonals.\n\nThe mesh is produced by splitting each logical  rectangular cell into six tetrahedra.\n\n\n\n\n\nT4blockx(xs::FFltVec, ys::FFltVec, zs::FFltVec, orientation::Symbol)\n\nGenerate a graded tetrahedral mesh  of a 3D block.\n\nFour-node tetrahedra in a regular arrangement, with non-uniform given spacing between the nodes, with a given orientation of the diagonals.\n\nThe mesh is produced by splitting each logical  rectangular cell into six tetrahedra.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T4meshedges",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T4meshedges",
    "category": "function",
    "text": "T4meshedges(t::Array{Int, 2})\n\nCompute all the edges of the 4-node triangulation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T4refine",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T4refine",
    "category": "function",
    "text": "T4refine(fens::FENodeSet, fes::FESetT4)\n\nRefine a mesh of 4-node tetrahedra by octasection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T4toT10",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T4toT10",
    "category": "function",
    "text": "T4toT10(fens::FENodeSet,  fes::FESetT4)\n\nConvert a mesh of tetrahedra of type T4 (four-node) to tetrahedra T10.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTetrahedronModule.T4voximg",
    "page": "Docstrings",
    "title": "FinEtools.MeshTetrahedronModule.T4voximg",
    "category": "function",
    "text": "T4voximg(img::Array{DataT, 3}, voxdims::FFltVec,\n    voxval::Array{DataT, 1}) where {DataT<:Number}\n\nGenerate a tetrahedral mesh  from three-dimensional image.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule.T6block",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule.T6block",
    "category": "function",
    "text": "T6block(Length::FFlt, Width::FFlt, nL::FInt, nW::FInt, orientation::Symbol=:a)\n\nMesh of a rectangle of T6 elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshTriangleModule.T6blockx",
    "page": "Docstrings",
    "title": "FinEtools.MeshTriangleModule.T6blockx",
    "category": "function",
    "text": "T6blockx(xs::FFltVec, ys::FFltVec, orientation::Symbol=:a)\n\nGraded mesh of a 2-D block of T6 finite elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.TEMPERATURE",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.TEMPERATURE",
    "category": "function",
    "text": "TEMPERATURE(self::AbaqusExporter, nlist::AbstractArray{I, 1},\n  tlist::AbstractArray{F, 1}) where {I, F}\n\nWrite out the *TEMPERATURE option.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.TetRemeshingModule",
    "page": "Docstrings",
    "title": "FinEtools.TetRemeshingModule",
    "category": "module",
    "text": "Module for remeshing tetrahedral triangulations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule.TetRule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule.TetRule",
    "category": "type",
    "text": "TetRule\n\nTetrahedral quadrature rule.\n\nUsed for integration on the standard tetrahedron.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule.TrapezoidalRule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule.TrapezoidalRule",
    "category": "type",
    "text": "TrapezoidalRule\n\nThe trapezoidal rule.\n\nThe rule is applicable for a tensor product of  intervals -1 <=x<= +1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegRuleModule.TriRule",
    "page": "Docstrings",
    "title": "FinEtools.IntegRuleModule.TriRule",
    "category": "type",
    "text": "TriRule\n\nTriangular quadrature rule.\n\nUsed for integration on the standard triangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VectorCacheModule.VectorCache",
    "page": "Docstrings",
    "title": "FinEtools.VectorCacheModule.VectorCache",
    "category": "type",
    "text": "VectorCache{T<:Number, F<:Function}\n\nType for caching vectors.\n\nT = type of the entries of the vector, F = type of the function to update the entries of the vector.\n\nSignature of the function to fill the cache with the value of the vector at any given point XYZ, using the columns of the Jacobian matrix of the element, tangents, and if necessary  also the finite element label, fe_label:\n\nfillcache!(cacheout::FFltVec, XYZ::FFltMat, tangents::FFltMat, fe_label::FInt)\n\nThe cache cacheout is filled with the value  of the vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VectorCacheModule",
    "page": "Docstrings",
    "title": "FinEtools.VectorCacheModule",
    "category": "module",
    "text": "VectorCacheModule\n\nModule to manage vector caches.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule",
    "category": "module",
    "text": "Module for generating and manipulating voxel 3-D images (boxes of voxels).\n\nThis module may be helpful when working with CT scan and other medical images in the context of finite element analysis carried out with the package FinEtools.jl .\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelTetMeshingModule",
    "page": "Docstrings",
    "title": "FinEtools.VoxelTetMeshingModule",
    "category": "module",
    "text": "VoxelTetMeshingModule\n\nModule for meshing of voxel data sets with tetrahedra.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustSurfModule.acousticABC",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustSurfModule.acousticABC",
    "category": "function",
    "text": "acousticABC(self::FEMMAcoustSurf, assembler::A,\n  geom::NodalField,\n  Pdot::NodalField{T}) where {T<:Number, A<:SysmatAssemblerBase}\n\nCompute the acoustic ABC (Absorbing Boundary Condition) matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustSurfModule.acousticcouplingpanels",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustSurfModule.acousticcouplingpanels",
    "category": "function",
    "text": "acousticcouplingpanels(self::FEMMAcoustSurf, geom::NodalField, u::NodalField{T}) where {T}\n\nCompute the acoustic pressure-structure coupling matrix.\n\nThe acoustic pressure-nodal force matrix transforms  the pressure distributed along the surface to forces acting on the nodes of the finite element model. Its transpose transforms displacements (or velocities, or accelerations) into the normal component of the displacement (or velocity, or acceleration) along the surface.\n\nArguments geom=geometry field u = displacement field \n\nNotes: – n=outer normal (pointing into the acoustic medium). – The pressures along the surface are assumed constant (uniform) along  each finite element –- panel. The panel pressures are assumed to be given the same numbers as the serial numbers of the finite elements in the block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustModule.acousticmass",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustModule.acousticmass",
    "category": "function",
    "text": "acousticmass(self::FEMMAcoust,\n  assembler::A, geom::NodalField,\n  P::NodalField{T}) where {T<:Number, A<:SysmatAssemblerBase}\n\nCompute the acoustic mass matrix.\n\nReturn K as a matrix. Arguments self   =  acoustics model assembler  =  matrix assembler geom = geometry field P = acoustic (perturbation) pressure field\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustModule.acousticstiffness",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustModule.acousticstiffness",
    "category": "function",
    "text": "acousticstiffness(self::FEMMAcoust, assembler::A,\n  geom::NodalField,\n  Pddot::NodalField{T}) where {T<:Number,\n  A<:SysmatAssemblerBase}\n\nCompute the acoustic stiffness matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.applyebc!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.applyebc!",
    "category": "function",
    "text": "applyebc!(self::Field)\n\nApply EBCs (essential boundary conditions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule.assemble!",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule.assemble!",
    "category": "function",
    "text": "assemble!(self::SysmatAssemblerSparse{T}, mat::FMat{T},\n  dofnums_row::FIntMat, dofnums_col::FIntMat) where {T<:Number}\n\nAssemble a rectangular matrix.\n\n\n\n\n\nassemble!(self::SysmatAssemblerSparseSymm{T}, mat::FMat{T},\n  dofnums::FIntMat, ignore::FIntMat) where {T<:Number}\n\nAssemble a square symmetric matrix.\n\n\n\n\n\nassemble!(self::SysmatAssemblerSparseSymm{T}, mat::FMat{T},   dofnums::FIntMat, ignore::FIntMat) where {T<:Number}\n\nAssemble a square symmetric matrix.\n\n\n\n\n\nassemble!(self::SysvecAssembler{T}, vec::MV,\n  dofnums::D) where {T<:Number, MV<:AbstractArray{T}, D<:AbstractArray{FInt}}\n\nAssemble an elementwise vector.\n\nThe method assembles a column element vector using the vector of degree of freedom numbers for the rows.\n\n\n\n\n\nassemble!(self::SysmatAssemblerSparseHRZLumpingSymm{T}, mat::FMat{T},\n  dofnums::FIntMat, ignore::FIntMat) where {T<:Number}\n\nAssemble a HRZ-lumped square symmetric matrix.\n\n\n\n\n\nassemble!(self::SysmatAssemblerSparseHRZLumpingSymm{T}, mat::FMat{T},\n    dofnums::FIntMat, ignore::FIntMat) where {T<:Number}\n\nAssemble an HRZ-lumped square symmetric matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.associategeometry!",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.associategeometry!",
    "category": "function",
    "text": "associategeometry!(self::FEMMAbstractBase,  geom::NodalField{FFlt})\n\nAssociate geometry field with the FEMM.\n\nCompute the  correction factors to account for  the shape of the  elements.\n\n\n\n\n\nassociategeometry!(self::FEMMAbstractBase,  geom::NodalField{FFlt})\n\nAssociate geometry field with the FEMM.\n\nCompute the  correction factors to account for  the shape of the  elements.\n\n\n\n\n\nassociategeometry!(self::FEMMAbstractBase,  geom::NodalField{FFlt})\n\nAssociate geometry field with the FEMM.\n\nCompute the  correction factors to account for  the shape of the  elements.\n\n\n\n\n\nassociategeometry!(self::FEMMAbstractBase,  geom::NodalField{FFlt})\n\nAssociate geometry field with the FEMM.\n\nThere may be operations that could benefit from pre-computations that involve a geometry field. If so, associating the geometry field gives the FEMM a chance to save on repeated computations.\n\nGeometry field is normally passed into any routine that evaluates some  forms (integrals) over the mesh.  Whenever the geometry passed into a  routine is not consistent with the one for which associategeometry!()  was called before, associategeometry!() needs to be called with  the new geometry field.\n\n\n\n\n\nassociategeometry!(self::FEMMAbstractBase,  geom::NodalField{FFlt})\n\nAssociate geometry field with the FEMM.\n\nCompute the  correction factors to account for  the shape of the  elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.bfun",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.bfun",
    "category": "function",
    "text": "bfun(self::T,  param_coords::FFltVec)::FFltMat where {T<:FESet}\n\nCompute the values of the basis functions at a given parametric coordinate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.bfundpar",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.bfundpar",
    "category": "function",
    "text": "bfundpar(self::T,  param_coords::FFltVec)::FFltMat where {T<:FESet}\n\nCompute the values of the basis function gradients at a given parametric coordinate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.BoxModule.boundingbox",
    "page": "Docstrings",
    "title": "FinEtools.BoxModule.boundingbox",
    "category": "function",
    "text": "boundingbox(x::AbstractArray)\n\nCompute the bounding box of the points in x.\n\nx = holds points, one per row.\n\nReturns box = bounding box     for 1-D box=[minx,maxx], or     for 2-D box=[minx,maxx,miny,maxy], or     for 3-D box=[minx,maxx,miny,maxy,minz,maxz]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.BoxModule.boxesoverlap",
    "page": "Docstrings",
    "title": "FinEtools.BoxModule.boxesoverlap",
    "category": "function",
    "text": "boxesoverlap(box1::AbstractVector, box2::AbstractVector)\n\nDo the given boxes overlap?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.cat",
    "page": "Docstrings",
    "title": "Base.cat",
    "category": "function",
    "text": "cat(self::T,  other::T) where {T<:FESet}\n\nConcatenate the connectivities of two FE sets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.centroidparametric",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.centroidparametric",
    "category": "function",
    "text": "centroidparametric(self::T) where {T<:FESet}\n\nReturn the parametric coordinates  of the centroid of the element.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.close",
    "page": "Docstrings",
    "title": "Base.close",
    "category": "function",
    "text": "close(self::AbaqusExporter)\n\nClose  the stream opened by the exporter.\n\n\n\n\n\nclose(self::NASTRANExporter)\n\nClose  the stream opened by the exporter.\n\n\n\n\n\nclose(self::STLExporter)\n\nClose  the stream opened by the exporter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.compactnodes",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.compactnodes",
    "category": "function",
    "text": "compactnodes(fens::FENodeSet, connected::Vector{Bool})\n\nCompact the finite element node set by deleting unconnected nodes.\n\nfens = array of finite element nodes connected = The array element connected[j] is either 0 (when j is an   unconnected node), or a positive number (when node j is connected to   other nodes by at least one finite element)\n\nOutput:\n\nfens = new set of finite element nodes new_numbering= array which tells where in the new fens array the      connected nodes are (or 0 when the node was unconnected). For instance,      node 5 was connected, and in the new array it is the third node: then      new_numbering[5] is 3.\n\nExamples:\n\nLet us say there are nodes not connected to any finite element that you would like to remove from the mesh: here is how that would be accomplished.\n\nconnected = findunconnnodes(fens, fes);\nfens, new_numbering = compactnodes(fens, connected);\nfes = renumberconn!(fes, new_numbering);\n\nFinally, check that the mesh is valid:\n\nvalidate_mesh(fens, fes);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffModule.conductivity",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffModule.conductivity",
    "category": "function",
    "text": "conductivity(self::FEMMHeatDiff,\n  assembler::A, geom::NodalField{FFlt},\n  temp::NodalField{FFlt}) where {A<:SysmatAssemblerBase}\n\nCompute the conductivity matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.connasarray",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.connasarray",
    "category": "function",
    "text": "connasarray(self::FESet{NODESPERELEM}) where {NODESPERELEM}\n\nReturn the connectivity as an integer array (matrix), where the number of rows matches the number of connectivities in the set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshSelectionModule.connectedelems",
    "page": "Docstrings",
    "title": "FinEtools.MeshSelectionModule.connectedelems",
    "category": "function",
    "text": "connectedelems(fes::FESet, node_list::FIntVec)\n\nExtract the list of numbers for the fes  that are connected to given nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshSelectionModule.connectednodes",
    "page": "Docstrings",
    "title": "FinEtools.MeshSelectionModule.connectednodes",
    "category": "function",
    "text": "connectednodes(fes::FESet)\n\nExtract the node numbers of the nodes  connected by given finite elements.\n\nExtract the list of unique node numbers for the nodes that are connected by the finite element set fes. Note that it is assumed that all the FEs are of the same type (the same number of connected nodes by each cell).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.connectionmatrix",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.connectionmatrix",
    "category": "function",
    "text": "connectionmatrix(self::FEMM, nnodes::FInt) where {FEMM<:FEMMAbstractBase}\n\nCompute the connection matrix.\n\nThe matrix has a nonzero in all the rows and columns which correspond to nodes connected by some finite element.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.copyto!",
    "page": "Docstrings",
    "title": "Base.copyto!",
    "category": "function",
    "text": "copyto!(DEST::F,  SRC::F) where {F<:Field}\n\nCopy data from one field to another.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.count",
    "page": "Docstrings",
    "title": "Base.count",
    "category": "function",
    "text": "count(self::FENodeSet)\n\nGet the number of finite element nodes in the node set.\n\n\n\n\n\ncount(self::T)::FInt where {T<:FESet}\n\nGet the number of individual connectivities in the FE set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforSurfaceDampingModule.dampingABC",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforSurfaceDampingModule.dampingABC",
    "category": "function",
    "text": "dampingABC(self::FEMMDeforSurfaceDamping, assembler::A,\n              geom::NodalField{FFlt}, u::NodalField{T1},\n              impedance::T2, surfacenormal::SurfaceNormal) where {A<:SysmatAssemblerBase, T1<:Number, T2<:Number}\n\nCompute the damping matrix associated with absorbing boundary conditions (ABC) representation of the effect of infinite extent of inviscid fluid next to the surface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.distribloads",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.distribloads",
    "category": "function",
    "text": "distribloads(self::FEMM, assembler::A, geom::NodalField{FFlt}, P::NodalField{T},\n  fi::ForceIntensity,\n  m::FInt) where {FEMM<:FEMMAbstractBase, T<:Number, A<:SysvecAssemblerBase}\n\nCompute the distributed-load vector.\n\nfi=force intensity object m= manifold dimension, 1= curve, 2= surface, 3= volume\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.elemfieldfromintegpoints",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.elemfieldfromintegpoints",
    "category": "function",
    "text": "elemfieldfromintegpoints(self::FEMM,\n  geom::NodalField{FFlt},  u::NodalField{T},\n  dT::NodalField{FFlt},  quantity::Symbol,  component::FInt;\n  context...) where {FEMM<:FEMMAbstractBase, T<:Number}\n\nConstruct nodal field from integration points.\n\nInput arguments geom     - reference geometry field u        - displacement field dT       - temperature difference field quantity   - this is what you would assign to the \'quantity\' argument            of the material update!() method. component- component of the \'quantity\' array: see the material update()            method. Output argument\n\nthe new field that can be used to map values to colors and so on\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.fieldfromintegpoints",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.fieldfromintegpoints",
    "category": "function",
    "text": "fieldfromintegpoints(self::FEMM,\n  geom::NodalField{FFlt},  u::NodalField{T},\n  dT::NodalField{FFlt},  quantity::Symbol,  component::FInt;\n  context...) where {FEMM<:FEMMAbstractBase, T<:Number}\n\nConstruct nodal field from integration points.\n\nInput arguments geom     - reference geometry field u        - displacement field dT       - temperature difference field quantity   - this is what you would assign to the \'quantity\' argument            of the material update!() method. component- component of the \'quantity\' array: see the material update()            method. Keyword arguments nodevalmethod = :invdistance (the default) or :averaging; reportat = at which point should the  element quantities be reported?     This argument is interpreted inside the inspectintegpoints() method. Output argument\n\nthe new field that can be used to map values to colors and so on\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.fillsolid!",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.fillsolid!",
    "category": "function",
    "text": "fillsolid!(V::VoxelBoxVolume,\n    f::SolidCF, fillvalue::DataT) where {DataT<:Number}\n\nFilled a solid using a solid characteristic function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.fillvolume!",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.fillvolume!",
    "category": "function",
    "text": "fillvolume!(V::VoxelBoxVolume, fillvalue::DataT) where {DataT<:Number}\n\nFill the volume with a given value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshSelectionModule.findunconnnodes",
    "page": "Docstrings",
    "title": "FinEtools.MeshSelectionModule.findunconnnodes",
    "category": "function",
    "text": "findunconnnodes(fens::FENodeSet, fes::FESet)\n\nFind nodes that are not connected to any finite element.\n\nconnected = array is returned which is for the node k either true (node k is      connected), or false (node k is not connected).\n\nLet us say there are nodes not connected to any finite element that you would like to remove from the mesh: here is how that would be accomplished.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.fromarray!",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.fromarray!",
    "category": "function",
    "text": "fromarray!(self::FESet{NODESPERELEM}, conn::FIntMat) where {NODESPERELEM}\n\nSet  the connectivity from an integer array.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.fusenodes",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.fusenodes",
    "category": "function",
    "text": "fusenodes(fens1::FENodeSet, fens2::FENodeSet, tolerance:: FFlt)\n\nFuse together nodes from two node sets.\n\nFuse two node sets. If necessary, by gluing together nodes located within tolerance of each other. The two node sets, fens1 and fens2,  are fused together by merging the nodes that fall within a box of size tolerance. The merged node set, fens, and the new  indexes of the nodes in the set fens1 are returned.\n\nThe set fens2 will be included unchanged, in the same order, in the node set fens. The indexes of the node set fens1 will have changed.\n\nExample:\n\nAfter the call to this function we have k=new_indexes_of_fens1_nodes[j] is the node in the node set fens which used to be node j in node set fens1. The finite element set connectivity that used to refer to fens1 needs to be updated to refer to the same nodes in  the set fens as      updateconn!(fes, new_indexes_of_fens1_nodes);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.gatherdofnums!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.gatherdofnums!",
    "category": "function",
    "text": "gatherdofnums!(self::Field, dest::A, conn::CC) where {A, CC}\n\nGather dofnums from the field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.gatherfixedvalues_asmat!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.gatherfixedvalues_asmat!",
    "category": "function",
    "text": "gatherfixedvalues_asmat!(self::Field, dest::AbstractArray{T, 2},\n    conn::CC) where {CC, T}\n\nGather FIXED values from the field into a two-dimensional array.\n\nThe order is: for each node  in the connectivity, copy into the corresponding row of the buffer all the degrees of freedom,  then the next node into the next row and so on.  If a degree of freedom is NOT fixed, the corresponding entry is  set to zero.\n\ndest = destination buffer: overwritten  inside,  must be preallocated in the correct size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.gatherfixedvalues_asvec!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.gatherfixedvalues_asvec!",
    "category": "function",
    "text": "gatherfixedvalues_asvec!(self::Field, dest::AbstractArray{T, 1},\n    conn::CC) where {CC, T}\n\nGather FIXED values from the field into a vector.\n\nThe order is: for each node  in the connectivity, copy into the buffer all the fixed degrees of freedom,  then the next node and so on. If a degree of freedom is NOT fixed, the corresponding entry is  set to zero.\n\ndest = destination buffer: overwritten  inside,  must be preallocated in the correct size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.gathersysvec",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.gathersysvec",
    "category": "function",
    "text": "gathersysvec{F<:Field}(self::F)\n\nGather values from the field for the whole system vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.gathersysvec!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.gathersysvec!",
    "category": "function",
    "text": "gathersysvec!(self::F, vec::FVec{T}) where {F<:Field, T}\n\nGather values from the field for the whole system vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.gathervalues_asmat!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.gathervalues_asmat!",
    "category": "function",
    "text": "gathervalues_asmat!(self::Field, dest::AbstractArray{T, 2},\n    conn::CC) where {CC, T}\n\nGather values from the field into a two-dimensional array.\n\nThe order is: for each node  in the connectivity, copy into the corresponding row of the buffer all the degrees of freedom,  then the next node into the next row and so on.\n\ndest = destination buffer: overwritten  inside,  must be preallocated in the correct size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.gathervalues_asvec!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.gathervalues_asvec!",
    "category": "function",
    "text": "gathervalues_asvec!(self::Field, dest::AbstractArray{T, 1},\n    conn::CC) where {CC, T}\n\nGather values from the field into a vector.\n\nThe order is: for each node  in the connectivity, copy into the buffer all the degrees of freedom,  then the next node and so on.\n\ndest = destination buffer: overwritten  inside,  must be preallocated in the correct size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshUtilModule.gradedspace",
    "page": "Docstrings",
    "title": "FinEtools.MeshUtilModule.gradedspace",
    "category": "function",
    "text": "gradedspace(start::T, stop::T, N::Int)  where {T<:Number}\n\nGenerate quadratic space.\n\nGenerate a quadratic sequence of numbers between start and finish. This sequence corresponds to separation of adjacent numbers that increases linearly from start to finish.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshImportModule.import_ABAQUS",
    "page": "Docstrings",
    "title": "FinEtools.MeshImportModule.import_ABAQUS",
    "category": "function",
    "text": "import_ABAQUS(filename)\n\nImport tetrahedral (4- and 10-node) or hexahedral (8- and 20-node) Abaqus mesh (.inp file).\n\nLimitations:\n\nOnly the *NODE and *ELEMENT  sections are read\nOnly 4-node and 10-node tetrahedra and 8-node or 20-node  hexahedra  are handled.\n\nReturn\n\nData dictionary, with keys fens (finite element nodes), fesets (array of finite element sets).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshImportModule.import_NASTRAN",
    "page": "Docstrings",
    "title": "FinEtools.MeshImportModule.import_NASTRAN",
    "category": "function",
    "text": "import_NASTRAN(filename)\n\nImport tetrahedral (4- and 10-node) NASTRAN mesh (.nas file).\n\nLimitations:\n\nonly the GRID and CTETRA  sections are read.\nOnly 4-node and 10-node tetrahedra  are handled.\nThe file should be free-form (data separated by commas). \n\nSome fixed-format files can also be processed (large-field, but not small-field).\n\nReturn\n\nData dictionary, with keys fens (finite element nodes), fesets (array of finite element sets).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.BoxModule.inbox",
    "page": "Docstrings",
    "title": "FinEtools.BoxModule.inbox",
    "category": "function",
    "text": "inbox(box::AbstractVector, x::AbstractVector)\n\nIs the given location inside the box?\n\nNote: point on the boundary of the box is counted as being inside.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.BoxModule.initbox!",
    "page": "Docstrings",
    "title": "FinEtools.BoxModule.initbox!",
    "category": "function",
    "text": "initbox!(box::AbstractVector, x::AbstractVector)\n\nInitialize a bounding box with a single point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.innerproduct",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.innerproduct",
    "category": "function",
    "text": "innerproduct(self::FEMMHeatDiff,\n  assembler::A, geom::NodalField{FFlt},\n  temp::NodalField{FFlt}) where {A<:SysmatAssemblerBase}\n\nCompute the inner-product (Gram) matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.inparametric",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.inparametric",
    "category": "function",
    "text": "inparametric(self::FESet, param_coords::FFltVec)\n\nAre given parametric coordinates inside the element parametric domain?\n\nReturns a Boolean: is the point inside, true or false?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.inspectintegpoints",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.inspectintegpoints",
    "category": "function",
    "text": "inspectintegpoints(self::FEMMDeforLinear,      geom::NodalField{FFlt},  u::NodalField{T},      dT::NodalField{FFlt},      felist::FIntVec,      inspector::F,  idat, quantity=:Cauchy;      context...) where {T<:Number, F<:Function}\n\nInspect integration point quantities.\n\ngeom - reference geometry field u - displacement field dT - temperature difference field felist - indexes of the finite elements that are to be inspected:     The fes to be included are: fes[felist]. context    - structure: see the update!() method of the material. inspector - functionwith the signature        idat = inspector(idat, j, conn, x, out, loc);   where    idat - a structure or an array that the inspector may           use to maintain some state,  for instance minimum or maximum of           stress, j is the element number, conn is the element connectivity,           out is the output of the update!() method,  loc is the location           of the integration point in the reference configuration.\n\nReturn\n\nThe updated inspector data is returned.\n\n\n\n\n\ninspectintegpoints(self::FEMM, geom::NodalField{FFlt},  u::NodalField{T}, dT::NodalField{FFlt}, felist::FIntVec, inspector::F,  idat, quantity=:Cauchy; context...) where {FEMM<:FEMMAbstractBase, T<:Number, F<:Function}\n\nInspect integration points.  \n\n\n\n\n\ninspectintegpoints(self::FEMMDeforLinearAbstract,\n  geom::NodalField{FFlt},  u::NodalField{T},\n  dT::NodalField{FFlt},\n  felist::FIntVec,\n  inspector::F,  idat, quantity=:Cauchy;\n  context...) where {T<:Number, F<:Function}\n\nInspect integration point quantities.\n\ngeom - reference geometry field u - displacement field dT - temperature difference field felist - indexes of the finite elements that are to be inspected:      The fes to be included are: fes[felist]. context    - structure: see the update!() method of the material. inspector - functionwith the signature         idat = inspector(idat, j, conn, x, out, loc);    where     idat - a structure or an array that the inspector may            use to maintain some state,  for instance minimum or maximum of            stress, j is the element number, conn is the element connectivity,            out is the output of the update!() method,  loc is the location            of the integration point in the reference configuration.\n\nReturn\n\nThe updated inspector data is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.integratefieldfunction",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.integratefieldfunction",
    "category": "function",
    "text": "integratefieldfunction(self::FEMMAbstractBase,\n    geom::NodalField{FFlt},  afield::FL, fh::F,  initial::R;\n    m::FInt=-1) where {T<:Number, FL<:NodalField{T}, R, F<:Function}\n\nIntegrate a nodal-field function over the discrete manifold.\n\nafield = NODAL field to be supply the values  fh = function taking position and the field value as arguments, returning value of type R.\n\nReturns value of type R, which is initialized by initial.    \n\n\n\n\n\nintegratefieldfunction(self::FEMMAbstractBase,\n    geom::NodalField{FFlt},  afield::FL, fh::F, initial::R;\n    m::FInt=-1) where {T<:Number, FL<:ElementalField{T}, R, F<:Function}\n\nIntegrate a elemental-field function over the discrete manifold.\n\nafield = ELEMENTAL field to be supply the values  fh = function taking position and the field value as arguments, returning value of type R.\n\nReturns value of type R, which is initialized by initial. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.integratefunction",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.integratefunction",
    "category": "function",
    "text": "integratefunction(self::FEMMAbstractBase,\n    geom::NodalField{FFlt}, fh::F, m::FInt = -1) where {F<:Function}\n\nIntegrate a function over the discrete manifold.\n\nIntegrate some scalar function over the geometric cells. The function takes a single argument, the position vector.\n\nWhen the scalar function returns just +1 (such as (x) ->  1.0), the result measures the volume (number of points, length, area, 3-D volume, according to the manifold dimension). When the function returns the mass density, the method measures the mass, when the function returns the x-coordinate equal measure the static moment with respect to the y- axis, and so on.\n\nExample:\n\nCompute the volume of the mesh and then its center of gravity:\n\nV = integratefunction(femm, geom, (x) ->  1.0)\nSx = integratefunction(femm, geom, (x) ->  x[1])\nSy = integratefunction(femm, geom, (x) ->  x[2])\nSz = integratefunction(femm, geom, (x) ->  x[3])\nCG = vec([Sx Sy Sz]/V)\n\nCompute the moments of inertia:\n\n% Now compute the moments of inertia\nIxx = =measure(femm,geom,@(x)(norm(x-CG)^2*eye(3)-(x-CG)\'*(x-CG)))\nmass=V*rhos;\nInertia=I*rhos;\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.integrationdata",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.integrationdata",
    "category": "function",
    "text": "integrationdata(self::IntegData)\n\nCalculate the data needed for  numerical quadrature for the integration rule     stored by the integration data.\n\n\n\n\n\nintegrationdata(self::IntegData, integration_rule::T) where {T<:IntegRule}\n\nCalculate the data needed for  numerical quadrature.\n\nFor given integration data (i. e. finite element set of a certain type and a given integration_rule integration rule), compute the quantities needed for numerical integration.\n\nReturn\n\nnpts, Ns, gradNparams, w, pc = number of quadrature points, arrays of basis function values at the quadrature points,  arrays of gradients of basis functions  with respect  to the parametric coordinates, array of weights and array of locations of the quadrature points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.interior2boundary",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.interior2boundary",
    "category": "function",
    "text": "interior2boundary(interiorconn::Array{Int, 2}, extractb::Array{Int, 2})\n\nExtract the boundary connectivity from the connectivity of the interior.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.BoxModule.intersectboxes",
    "page": "Docstrings",
    "title": "FinEtools.BoxModule.intersectboxes",
    "category": "function",
    "text": "intersectboxes(box1::AbstractVector, box2::AbstractVector)\n\nCompute the intersection of two boxes.  \n\nThe function returns an empty box (length(b) == 0) if the intersection is empty; otherwise a box is returned. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshUtilModule.linearspace",
    "page": "Docstrings",
    "title": "FinEtools.MeshUtilModule.linearspace",
    "category": "function",
    "text": "linearspace(start::T, stop::T, N::Int)  where {T<:Number}\n\nGenerate linear space.\n\nGenerate a linear sequence of numbers between start and top (i. e. sequence  of number with uniform intervals inbetween).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule.makematrix!",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule.makematrix!",
    "category": "function",
    "text": "makematrix!(self::SysmatAssemblerSparse)\n\nMake a sparse matrix.\n\n\n\n\n\nmakematrix!(self::SysmatAssemblerSparseSymm)\n\nMake a sparse SYMMETRIC SQUARE matrix.\n\n\n\n\n\nmakematrix!(self::SysmatAssemblerSparseHRZLumpingSymm)\n\nMake a sparse SYMMETRIC SQUARE matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule.makevector!",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule.makevector!",
    "category": "function",
    "text": "makevector!(self::SysvecAssembler)\n\nMake the global vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.manifdim",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.manifdim",
    "category": "function",
    "text": "manifdim(me)\n\nGet the manifold dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.map2parametric",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.map2parametric",
    "category": "function",
    "text": "map2parametric(self::T, x::FFltMat, pt::FFltVec;\n    tolerance = 0.001, maxiter =5) where {T<:FESet}\n\nMap a spatial location to parametric coordinates.\n\nx=array of spatial coordinates of the nodes, size(x) = nbfuns x dim,\nc= spatial location\ntolerance = tolerance in parametric coordinates; default is 0.001.\n\nReturn\n\nsuccess = Boolean flag, true if successful, false otherwise.\npc = Returns a row array of parametric coordinates if the solution was successful, otherwise NaN are returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearBaseModule.mass",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearBaseModule.mass",
    "category": "function",
    "text": "mass(self::FEMMDeforLinearAbstract,  assembler::A,\n  geom::NodalField{FFlt},\n  u::NodalField{T}) where {A<:SysmatAssemblerBase, T<:Number}\n\nCompute the consistent mass matrix\n\nThis is a general routine for the abstract linear-deformation  FEMM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.mergemeshes",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.mergemeshes",
    "category": "function",
    "text": "mergemeshes(fens1::FENodeSet, fes1::T1,\n  fens2::FENodeSet, fes2::T2, tolerance::FFlt) where {T1<:FESet,T2<:FESet}\n\nMerge together two meshes.\n\nMerge two meshes together by gluing together nodes within tolerance. The two meshes, fens1, fes1, and fens2, fes2, are glued together by merging the nodes that fall within a box of size tolerance. If tolerance is set to zero, no merging of nodes is performed; the two meshes are simply concatenated together.\n\nThe merged node set, fens, and the two finite element sets with renumbered  connectivities are returned.\n\nImportant notes: On entry into this function the connectivity of fes1 point into fens1 and the connectivity of fes2 point into fens2. After this function returns the connectivity of both fes1 and fes2 point into fens. The order of the nodes of the node set fens1 in the resulting set fens will have changed, whereas the order of the nodes of the node set fens2 is are guaranteed to be the same. Therefore, the connectivity of fes2 will in fact remain the same.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.mergenmeshes",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.mergenmeshes",
    "category": "function",
    "text": "mergenmeshes(meshes::Array{Tuple{FENodeSet, FESet}}, tolerance::FFlt)\n\nMerge several meshes together.\n\nThe meshes are glued together by merging the nodes that fall within  a box of size tolerance. If tolerance is set to zero, no merging of  nodes is performed; the nodes from the meshes are simply concatenated together.\n\nOutput\n\nThe merged node set, fens, and an array of finite element sets with renumbered  connectivities are returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.mergenodes",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.mergenodes",
    "category": "function",
    "text": "mergenodes(fens::FENodeSet, fes::FESet, tolerance::FFlt)\n\nMerge together  nodes of a single node set.\n\nMerge by gluing together nodes from a single node set located within tolerance of each other. The nodes are glued together by merging the nodes that fall within a box of size tolerance. The merged node set, fens, and the finite element set, fes, with renumbered  connectivities are returned.\n\nWarning: This tends to be an expensive operation!\n\n\n\n\n\nmergenodes(fens::FENodeSet, fes::FESet, tolerance::FFlt, candidates::FIntVec)\n\nMerge together  nodes of a single node set.\n\nSimilar to mergenodes(fens::FENodeSet, fes::FESet, tolerance::FFlt), but only the candidate nodes are considered for merging. This can potentially speed up the operation by orders of magnitude.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelTetMeshingModule.mesh!",
    "page": "Docstrings",
    "title": "FinEtools.VoxelTetMeshingModule.mesh!",
    "category": "function",
    "text": "mesh!(self::ImageMesher, stretch::FFlt = 1.2)\n\nPerform a meshing step.  \n\nIf  no mesh exists,  the initial mesh is created; otherwise a coarsening sequence of coarsen surface -> smooth -> coarsen volume -> smooth is performed.\n\nAfter meshing the vertices, tetrahedra, and material identifiers,  can be retrieved as self.v, self.t, and self.tmid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.meshboundary",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.meshboundary",
    "category": "function",
    "text": "meshboundary(fes::T) where {T<:FESet}\n\nExtract the boundary finite elements from a mesh.\n\nExtract the finite elements of manifold dimension (n-1) from the supplied finite element set of manifold dimension (n).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.meshsmoothing",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.meshsmoothing",
    "category": "function",
    "text": "meshsmoothing(fens::FENodeSet, fes::T; options...) where {T<:FESet}\n\nGeneral smoothing of meshes.\n\nKeyword options:\n\nmethod = :taubin (default) or :laplace fixedv = Boolean array, one entry per vertex: is the vertex immovable (true)     or movable  (false) npass = number of passes (default 2)\n\nReturn\n\nThe modified  node set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.mirrormesh",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.mirrormesh",
    "category": "function",
    "text": "mirrormesh(fens::FENodeSet, fes::T, Normal::FFltVec,\n  Point::FFltVec; kwargs...) where {T<:FESet}\n\nMirror a 2-D mesh in a plane given by its normal and one point.\n\nWarning: The code to relies on the numbering of the cells: to reverse the orientation of the mirrored cells, the connectivity is listed in reverse order.   If the mirrored cells do not follow this rule (for instance hexahedra for quadrilaterals), their areas/volumes will come out negative. In such a case the renumbering function of the connectivity needs to be supplied.\n\nFor instance: H8 elements require  the renumbering function to be supplied as fens1,gcells1 = mirror_mesh(fens, gcells,...           [-1,0,0], [0,0,0], @(c)c([1, 4, 3, 2, 5, 8, 7, 6]));\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.ndofs",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.ndofs",
    "category": "function",
    "text": "ndofs{F<:Field}(self::T)\n\nDimension of the degree of freedom parameters (i. e.  how many degrees of freedom per entity).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.ElementalFieldModule.nelems",
    "page": "Docstrings",
    "title": "FinEtools.ElementalFieldModule.nelems",
    "category": "function",
    "text": "nelems(self::ElementalField)::FInt = nents(self)\n\nProvide the number of elements  in the elemental field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.nents",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.nents",
    "category": "function",
    "text": "nents{F<:Field}(self::F)\n\nNumber of nodes associated with the field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.NodalFieldModule.nnodes",
    "page": "Docstrings",
    "title": "FinEtools.NodalFieldModule.nnodes",
    "category": "function",
    "text": "nnodes(self::NodalField)::FInt = nents(self)\n\nProvide the number of nodes  in the nodal field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.nodepartitioning",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.nodepartitioning",
    "category": "function",
    "text": "nodepartitioning(fens::FENodeSet, nincluded::Vector{Bool}, npartitions)\n\nCompute the inertial-cut partitioning of the nodes.\n\nnincluded = Boolean array: is the node to be included in the partitioning or     not? npartitions = number of partitions, but note that the actual number of     partitions is going to be a power of two.\n\nThe partitioning can be visualized for instance as:\n\npartitioning = nodepartitioning(fens, npartitions)\npartitionnumbers = unique(partitioning)\nfor gp = partitionnumbers\n  groupnodes = findall(k -> k == gp, partitioning)\n  File =  \"partition-nodes-Dollar(gp).vtk\"\n  vtkexportmesh(File, fens, FESetP1(reshape(groupnodes, length(groupnodes), 1)))\nend \nFile =  \"partition-mesh.vtk\"\nvtkexportmesh(File, fens, fes)\n@async run(`\"paraview.exe\" DollarFile`)\n\n\n\n\n\nnodepartitioning(fens::FENodeSet, npartitions)\n\nCompute the inertial-cut partitioning of the nodes.\n\nnpartitions = number of partitions, but note that the actual number of partitions is going to be a power of two.\n\nIn this variant all the nodes are to be included in the partitioning.\n\nThe partitioning can be visualized for instance as:\n\npartitioning = nodepartitioning(fens, npartitions)\npartitionnumbers = unique(partitioning)\nfor gp = partitionnumbers\n  groupnodes = findall(k -> k == gp, partitioning)\n  File =  \"partition-nodes-Dollar(gp).vtk\"\n  vtkexportmesh(File, fens, FESetP1(reshape(groupnodes, length(groupnodes), 1)))\nend \nFile =  \"partition-mesh.vtk\"\nvtkexportmesh(File, fens, fes)\n@async run(`\"paraview.exe\" DollarFile`)\n\n\n\n\n\nnodepartitioning(fens::FENodeSet, fesarr, npartitions::Vector{Int})\n\nCompute the inertial-cut partitioning of the nodes.\n\nfesarr = array of finite element sets that represent regions npartitions = array of the number of partitions in each region. However  note that the actual number of partitions is going to be a power of two.\n\nThe partitioning itself is carried out by nodepartitioning() with  a list of nodes to be included in the partitioning. For each region I the nodes included in the partitioning are those connected to  the elements of that region, but not to elements that belong to  any of the previous regions, 1…I-1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.nodesperelem",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.nodesperelem",
    "category": "function",
    "text": "nodesperelem(fes::FESet{NODESPERELEM}) where {NODESPERELEM}\n\nProvide the number of nodes per element.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.DeforModelRedModule.nstressstrain",
    "page": "Docstrings",
    "title": "FinEtools.DeforModelRedModule.nstressstrain",
    "category": "function",
    "text": "nstressstrain(::Type{DeforModelRed})::FInt\n\nReturn the number of stress components involved in the balance equation (and how many strain components) are there for each model reduction type?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.DeforModelRedModule.nthermstrain",
    "page": "Docstrings",
    "title": "FinEtools.DeforModelRedModule.nthermstrain",
    "category": "function",
    "text": "nthermstrain(::Type{DeforModelRed1D})::FInt\n\nHow many thermal strain components are there for each model reduction type?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.numberdofs!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.numberdofs!",
    "category": "function",
    "text": "numberdofs!(self::Field)\n\nNumber the degrees of freedom.\n\nThe free components in the field are numbered consecutively. No effort is made to optimize the numbering in any way. If you\'d like to optimize the numbering of the degrees of freedom, use the above form that sets the permutation of the degrees of freedom, or the permutation of the nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustModule.nzebcloadsacousticmass",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustModule.nzebcloadsacousticmass",
    "category": "function",
    "text": "nzebcloadsacousticmass(self::FEMMAcoust, assembler::A,\n  geom::NodalField, P::NodalField{T}) where {T<:Number,\n  A<:SysvecAssemblerBase}\n\nCompute load vector for nonzero EBC for fixed pressure..\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustModule.nzebcloadsacousticstiffness",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustModule.nzebcloadsacousticstiffness",
    "category": "function",
    "text": "nzebcloadsacousticstiffness(self::FEMMAcoust, assembler::A,\n  geom::NodalField,\n  Pddot::NodalField{T}) where {T<:Number,\n  A<:SysvecAssemblerBase}\n\nCompute load vector for nonzero EBC for fixed second-order pressure rate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffModule.nzebcloadsconductivity",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffModule.nzebcloadsconductivity",
    "category": "function",
    "text": "nzebcloadsconductivity(self::FEMMHeatDiff,\n  assembler::A,  geom::NodalField{FFlt},\n  temp::NodalField{FFlt}) where {A<:SysvecAssemblerBase}\n\nCompute load vector for nonzero EBC of prescribed temperature.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearBaseModule.nzebcloadsstiffness",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearBaseModule.nzebcloadsstiffness",
    "category": "function",
    "text": "nzebcloadsstiffness(self::FEMMDeforLinearAbstract,  assembler::A,   geom::NodalField{FFlt},   u::NodalField{T}) where {A<:SysvecAssemblerBase, T<:Number}\n\nCompute load vector for nonzero EBC for fixed displacement.\n\n\n\n\n\nnzebcloadsstiffness(self::FEMMDeforLinearAbstract,  assembler::A,   geom::NodalField{FFlt},   u::NodalField{T}) where {A<:SysvecAssemblerBase, T<:Number}\n\nCompute load vector for nonzero EBC for fixed displacement.\n\n\n\n\n\nnzebcloadsstiffness(self::FEMMDeforLinearAbstract,  assembler::A,   geom::NodalField{FFlt},   u::NodalField{T}) where {A<:SysvecAssemblerBase, T<:Number}\n\nCompute load vector for nonzero EBC for fixed displacement.\n\n\n\n\n\nnzebcloadsstiffness(self::FEMMDeforLinearAbstract,  assembler::A,\n  geom::NodalField{FFlt},\n  u::NodalField{T}) where {A<:SysvecAssemblerBase, T<:Number}\n\nCompute load vector for nonzero EBC for fixed displacement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffSurfModule.nzebcsurfacetransferloads",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffSurfModule.nzebcsurfacetransferloads",
    "category": "function",
    "text": "nzebcsurfacetransferloads(self::FEMMHeatDiffSurf, assembler::A,\n  geom::NodalField{FFlt}, temp::NodalField{FFlt}) where {A<:SysvecAssemblerBase}\n\nCompute load vector for nonzero EBC for fixed temperature.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.IntegDataModule.otherdimensionunity",
    "page": "Docstrings",
    "title": "FinEtools.IntegDataModule.otherdimensionunity",
    "category": "function",
    "text": "otherdimensionunity(loc::FFltMat, conn::CC, N::FFltMat)::FFlt\n          where {CC}\n\nEvaluate the other dimension: default is 1.0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.pad",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.pad",
    "category": "function",
    "text": "pad(V::VoxelBoxVolume, ipad, jpad, kpad, padvalue)\n\nPad voxel box with a constant value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.PhysicalUnitModule.phun",
    "page": "Docstrings",
    "title": "FinEtools.PhysicalUnitModule.phun",
    "category": "function",
    "text": "phun(str::String; system_of_units = :SI, base_time_units = :SEC)\n\nEvaluate an expression in physical units.\n\nExample\n\npu = ustring -> phun(ustring; system_of_units = :SIMM)\nE1s = 130.0*pu(\"GPa\")\n\nyields 1.3e+5 (in mega Pascal) whereas\n\n130.0*phun(\"GPa\"; system_of_units = :SI)\n\nyields 1.3e+11 (in Pascal)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustSurfModule.pressure2resultantforce",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustSurfModule.pressure2resultantforce",
    "category": "function",
    "text": "pressure2resultantforce(self::FEMMAcoustSurf, assembler::A,\n  geom::NodalField,\n  P::NodalField{T},\n   Force::Field) where {T<:Number, A<:SysmatAssemblerBase}\n\nCompute the rectangular coupling matrix that transcribes given pressure on the surface into the resultant force acting on the surface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMAcoustSurfModule.pressure2resultanttorque",
    "page": "Docstrings",
    "title": "FinEtools.FEMMAcoustSurfModule.pressure2resultanttorque",
    "category": "function",
    "text": "pressure2resultanttorque(self::FEMMAcoustSurf, assembler::A,\n  geom::NodalField,\n  P::NodalField{T},\n  Torque::GeneralField, CG::FFltVec) where {T<:Number, A<:SysmatAssemblerBase}\n\nCompute the rectangular coupling matrix that transcribes given pressure on the surface into the resultant torque acting on the surface with respect to the CG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshModificationModule.renumberconn!",
    "page": "Docstrings",
    "title": "FinEtools.MeshModificationModule.renumberconn!",
    "category": "function",
    "text": "renumberconn!(fes::FESet, new_numbering::FIntVec)\n\nRenumber the nodes in the connectivity of the finite elements based on a new numbering for the nodes.\n\nfes =finite element set new_numbering = new serial numbers for the nodes.  The connectivity           should be changed as conn[j] –> new_numbering[conn[j]]\n\nLet us say there are nodes not connected to any finite element that you would like to remove from the mesh: here is how that would be accomplished.\n\nconnected = findunconnnodes(fens, fes);\nfens, new_numbering = compactfens(fens, connected);\nfes = renumberconn!(fes, new_numbering);\n\nFinally, check that the mesh is valid:\n\nvalidate_mesh(fens, fes);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.RotationUtilModule.rotmat3!",
    "page": "Docstrings",
    "title": "FinEtools.RotationUtilModule.rotmat3!",
    "category": "function",
    "text": "rotmat3!(Rmout::FFltMat, a::FFltVec)\n\nCompute a 3D rotation matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.rotstressvec",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.rotstressvec",
    "category": "function",
    "text": "rotstressvec(::Type{DeforModelRed3D},  outstress::FFltVec,\n  instress::FFltVec, Rm::FFltMat)\n\nRotate the stress vector by the supplied rotation matrix.\n\nCalculate the rotation of the stress vector to the \'bar\' coordinate system given by the columns of the rotation matrix Rm.\n\nRm = columns are components of \'bar\' basis vectors on the \'plain\'      basis vectors\n\n\n\n\n\nrotstressvec(::Type{DeforModelRed2DStrain},  outstress::FFltVec,\n  instress::FFltVec,  Rm::FFltMat)\n\nRotate the stress vector by the supplied rotation matrix.\n\nCalculate the rotation of the stress vector to the \'bar\' coordinate system given by the columns of the rotation matrix Rm.\n\nRm = columns are components of \'bar\' basis vectors on the \'plain\'      basis vectors\n\n\n\n\n\nrotstressvec(::Type{DeforModelRed2DStress},  outstress::FFltVec,\n  instress::FFltVec,  Rm::FFltMat)\n\nRotate the stress vector by the supplied rotation matrix.\n\nCalculate the rotation of the stress vector to the \'bar\' coordinate system given by the columns of the rotation matrix Rm.\n\nRm = columns are components of \'bar\' basis vectors on the \'plain\'      basis vectors\n\n\n\n\n\nrotstressvec(::Type{DeforModelRed2DAxisymm},  outstress::FFltVec,\n  instress::FFltVec,  Rm::FFltMat)\n\nRotate the stress vector by the supplied rotation matrix.\n\nCalculate the rotation of the stress vector to the \'bar\' coordinate system given by the columns of the rotation matrix Rm.\n\nRm = columns are components of \'bar\' basis vectors on the \'plain\'      basis vectors\n\n\n\n\n\nrotstressvec(::Type{DeforModelRed2DAxisymm},  outstress::FFltVec,\n  instress::FFltVec,  Rm::FFltMat)\n\nRotate the stress vector by the supplied rotation matrix.\n\nCalculate the rotation of the stress vector to the \'bar\' coordinate system given by the columns of the rotation matrix Rm.\n\nRm = columns are components of \'bar\' basis vectors on the \'plain\'      basis vectors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.savecsv",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.savecsv",
    "category": "function",
    "text": "savecsv(name::String; kwargs...)\n\nSave arrays as a CSV file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.scattersysvec!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.scattersysvec!",
    "category": "function",
    "text": "scattersysvec!(self::Field, vec::FVec{T}) where {T<:Number}\n\nScatter values to the field from a system vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshSelectionModule.selectelem",
    "page": "Docstrings",
    "title": "FinEtools.MeshSelectionModule.selectelem",
    "category": "function",
    "text": "selectelem(fens::FENodeSet, fes::T; kwargs...) where {T<:FESet}\n\nSelect finite elements.\n\nSelection criteria\n\nfacing\n\nSelect all \"boundary\" elements that \"face\" a certain direction.\n\nexteriorbfl = selectelem(fens, bdryfes, facing=true, direction=[1.0, 1.0, 0.0]);\n\nor\n\nexteriorbfl = selectelem(fens, bdryfes, facing=true, direction=dout, dotmin = 0.99);\n\nwhere\n\nfunction dout(xyz)\n    return xyz/norm(xyz)\nend\n\nand xyz is the location of the centroid  of  a boundary element. Here the finite element is considered \"facing\" in the given direction if the dot product of its normal and the direction vector is greater than dotmin. The default value for dotmin is 0.01 (this corresponds to  almost 90 degrees between the normal to the finite element  and the given direction).\n\nThis selection method makes sense only for elements that are  surface-like (i. e. for boundary mmeshes).\n\nlabel\n\nSelect elements based on their label.\n\nrl1 = selectelem(fens, fes, label=1)\n\nbox, distance\n\nSelect elements based on some criteria that their nodes satisfy.  See the function selectnode().\n\nExample: Select all  elements whose nodes are closer than R+inflate from the point from.\n\nlinner = selectelem(fens, bfes, distance = R, from = [0.0 0.0 0.0],\n  inflate = tolerance)\n\nExample:\n\nexteriorbfl = selectelem(fens, bdryfes,\n   box=[1.0, 1.0, 0.0, pi/2, 0.0, Thickness], inflate=tolerance);\n\nflood\n\nSelect all FEs connected together, starting from a given node.\n\nExample: Select all FEs connected together (Starting from node 13):\n\nl = selectelem(fens, fes, flood = true, startnode = 13)\n\nOptional keyword arguments\n\nShould we consider the element only if all its nodes are in? allin = Boolean: if true, then all nodes of an element must satisfy the     criterion; otherwise  one is enough.\n\nOutput\n\nfelist = list of finite elements from the set that satisfy the criteria\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshSelectionModule.selectnode",
    "page": "Docstrings",
    "title": "FinEtools.MeshSelectionModule.selectnode",
    "category": "function",
    "text": "selectnode(fens::FENodeSet; kwargs...)\n\nSelect nodes using some criterion.\n\nSee the function vselect() for examples of the criteria.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.setebc!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.setebc!",
    "category": "function",
    "text": "setebc!(self::Field, fenids::FIntVec, is_fixed::Bool, comp::FInt,\n  val::FVec{T}) where {T<:Number}\n\nSet the EBCs (essential boundary conditions).\n\nfenids         - array of N node identifiers is_fixed = scaler Boolean: are the degrees of freedom being fixed (true)              or released (false), comp = integer, which  degree of freedom (component), val = array of N values of type T\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\nsetebc!(self::Field, fenids::FIntVec, is_fixed::Bool, comp::FInt,\n  val::T) where {T<:Number}\n\nSet the EBCs (essential boundary conditions).\n\nfenids         - array of N node identifiers is_fixed = scaler Boolean: are the degrees of freedom being fixed (true)              or released (false), comp = integer, which  degree of freedom (component), val = scalar of type T\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\nsetebc!(self::Field, fenids::FIntVec, comp::FInt,\n  val::FVec{T}) where {T<:Number}\n\nSet the EBCs (essential boundary conditions).\n\nfenids         - array of N node identifiers comp = integer, which  degree of freedom (component), val = array of N values of type T\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\nsetebc!(self::Field, fenids::FIntVec, comp::FInt;\n  val::T=0.0) where {T<:Number}\n\nSet the EBCs (essential boundary conditions).\n\nfenids         - array of N node identifiers comp = integer, which  degree of freedom (component), val = scalar of type T\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\nsetebc!(self::Field, fenids::FIntVec, is_fixed::Bool, comp::FInt;\n  val::T=0.0) where {T<:Number}\n\nSet the EBCs (essential boundary conditions).\n\nfenids         - array of N node identifiers comp = integer, which  degree of freedom (component), val = scalar of type T\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\nsetebc!(self::Field, fenids::FIntVec)\n\nSet the EBCs (essential boundary conditions).\n\nSuppress all degrees of freedom at the given nodes.\n\nfenids         - array of N node identifiers\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\nsetebc!(self::Field, fenid::FInt)\n\nSet the EBCs (essential boundary conditions).\n\nSuppress all degrees of freedom at the given node.\n\nfenid         - One integer as a node identifier\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\nsetebc!(self::Field)\n\nSet the EBCs (essential boundary conditions).\n\nAll essential boundary conditions are CLEARED.\n\nNote:  Any call to setebc!() potentially changes the current assignment which degrees of freedom are free and which are fixed and therefore is presumed to invalidate the current degree-of-freedom numbering. In such a case this method sets nfreedofs = 0; and  dofnums=0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.setlabel!",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.setlabel!",
    "category": "function",
    "text": "setlabel!(self::T, val::FInt) where {T<:FESet}\n\nSet the label of the entire finite elements set.\n\n\n\n\n\nsetlabel!(self::T, val::FIntVec) where {T<:FESet}\n\nSet the labels of individual elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.RotationUtilModule.skewmat!",
    "page": "Docstrings",
    "title": "FinEtools.RotationUtilModule.skewmat!",
    "category": "function",
    "text": "skewmat!(S, theta)\n\nCompute skew-symmetric matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.solidbox",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.solidbox",
    "category": "function",
    "text": "solidbox(corner1::Tuple{CoordT, CoordT, CoordT},\n    corner2::Tuple{CoordT, CoordT, CoordT}) where {CoordT<:Number}\n\nSolid box  with faces aligned with the global Cartesian axes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.solidhalfspace",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.solidhalfspace",
    "category": "function",
    "text": "solidhalfspace(center::Tuple{CoordT, CoordT, CoordT},\n    normal::Tuple{CoordT, CoordT, CoordT}) where {CoordT<:Number}\n\nSolid halfspace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.solidsphere",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.solidsphere",
    "category": "function",
    "text": "solidsphere(center::Tuple{CoordT, CoordT, CoordT}, r::CoordT) where {CoordT<:Number}\n\nSolid sphere.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FENodeSetModule.spacedim",
    "page": "Docstrings",
    "title": "FinEtools.FENodeSetModule.spacedim",
    "category": "function",
    "text": "spacedim(self::FENodeSet)\n\nNumber of dimensions of the space in which the node lives, 1, 2, or 3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.AssemblyModule.startassembly!",
    "page": "Docstrings",
    "title": "FinEtools.AssemblyModule.startassembly!",
    "category": "function",
    "text": "startassembly!(self::SysmatAssemblerSparse{T},\n  elem_mat_nrows::FInt, elem_mat_ncols::FInt, elem_mat_nmatrices::FInt,\n  ndofs_row::FInt, ndofs_col::FInt) where {T<:Number}\n\nStart the assembly of a global matrix.\n\n\n\n\n\nstartassembly!(self::SysmatAssemblerSparseSymm{T},\n  elem_mat_dim::FInt, ignore1::FInt, elem_mat_nmatrices::FInt,\n  ndofs::FInt, ignore2::FInt) where {T<:Number}\n\nStart the assembly of a SYMMETRIC square global matrix.\n\n\n\n\n\nstartassembly!(self::SysvecAssembler{T},\n  ndofs_row::FInt) where {T<:Number}\n\nStart assembly.\n\nThe method makes the buffer for the vector assembly. It must be called before the first call to the method assemble. ndofs_row= Total number of degrees of freedom.\n\n\n\n\n\nstartassembly!(self::SysmatAssemblerSparseHRZLumpingSymm{T},\n  elem_mat_dim::FInt, ignore1::FInt, elem_mat_nmatrices::FInt,\n  ndofs::FInt, ignore2::FInt) where {T<:Number}\n\nStart the assembly of a SYMMETRIC LUMPED square global matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearBaseModule.stiffness",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearBaseModule.stiffness",
    "category": "function",
    "text": "stiffness(self::FEMMDeforLinearAbstractNICE, assembler::A,\n  geom::NodalField{FFlt},\n  u::NodalField{T}) where {A<:SysmatAssemblerBase, T<:Number}\n\nCompute and assemble  stiffness matrix.\n\n\n\n\n\nstiffness(self::FEMMDeforLinearAbstractMS, assembler::A,       geom::NodalField{FFlt},       u::NodalField{T}) where {A<:SysmatAssemblerBase, T<:Number}\n\nCompute and assemble  stiffness matrix.\n\n\n\n\n\nstiffness(self::FEMMDeforLinearAbstractNICE, assembler::A,\n  geom::NodalField{FFlt},\n  u::NodalField{T}) where {A<:SysmatAssemblerBase, T<:Number}\n\nCompute and assemble  stiffness matrix.\n\n\n\n\n\nstiffness(self::FEMMDeforLinearAbstract, assembler::A,\n      geom::NodalField{FFlt},\n      u::NodalField{T}) where {A<:SysmatAssemblerBase, T<:Number}\n\nCompute and assemble  stiffness matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain2x2tto3v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain2x2tto3v!",
    "category": "function",
    "text": "strain2x2tto3v!(v::FFltVec, t::FFltMat)\n\nConvert a matrix of 2x2 strain components  into a 3-component vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain3vto2x2t!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain3vto2x2t!",
    "category": "function",
    "text": "strain3vto2x2t!(t::FFltMat, v::FFltVec)\n\nConvert a strain 3-vector to a  matrix of 2x2 strain components (symmetric tensor).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain3x3tto6v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain3x3tto6v!",
    "category": "function",
    "text": "strain3x3tto6v!(v::FFltVec, t::FFltMat)\n\nConvert a matrix of 3x3 strain components to a 6-component vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain3x3tto9v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain3x3tto9v!",
    "category": "function",
    "text": "strain3x3tto9v!(v::FFltVec, t::FFltMat)\n\nConvert a matrix of 3x3 strain components to a 9-component vector.\n\nThe  strain components are in the order      ex, ey, ez, gxy, gyx, gyz, gzy, gxz, gzx\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain6vto3x3t!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain6vto3x3t!",
    "category": "function",
    "text": "strain6vto3x3t!(t::FFltMat, v::FFltVec)\n\nConvert a strain 6-vector to a  matrix of 3x3 strain components (symmetric tensor)..\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain6vto9v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain6vto9v!",
    "category": "function",
    "text": "strain6vto9v!(t::FFltVec, v::FFltVec)\n\nConvert a strain 6-vector to a  strain 9-vector components (tensor).\n\nThe  strain components are in the order      ex, ey, ez, gxy/2, gxy/2, gyz/2, gyz/2, gxz/2, gxz/2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain9vto3x3t!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain9vto3x3t!",
    "category": "function",
    "text": "strain9vto3x3t!(v::FFltVec, t::FFltMat)\n\nConvert a matrix of 3x3 strain components to a 9-component vector.\n\nThe  strain components are in the order      ex, ey, ez, gxy, gyx, gyz, gzy, gxz, gzx\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.strain9vto6v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.strain9vto6v!",
    "category": "function",
    "text": "strain9vto6v!(t::FFltVec, v::FFltVec)\n\nConvert a strain 9-vector to a  strain 6-vector components (tensor).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress2x2to3v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress2x2to3v!",
    "category": "function",
    "text": "stress2x2to3v!(v::FFltVec, t::FFltMat)\n\nConvert a symmetric matrix of 2x2 stress components to a 3-component vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress3vto2x2t!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress3vto2x2t!",
    "category": "function",
    "text": "stress3vto2x2t!(t::FFltMat, v::FFltVec)\n\nConvert a 3-vector to a  matrix of 2x2 stress components (symmetric tensor).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress3vto3x3t!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress3vto3x3t!",
    "category": "function",
    "text": "stress3vto3x3t!(t::FFltMat, v::FFltVec)\n\nConvert a 3-vector to a matrix of 3x3 stress components (symmetric tensor).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress3x3tto6v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress3x3tto6v!",
    "category": "function",
    "text": "stress3x3tto6v!(v::FFltVec, t::FFltMat)\n\nConvert a matrix of 3x3 stress components to a 6-component vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress4vto3x3t!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress4vto3x3t!",
    "category": "function",
    "text": "stress4vto3x3t!(t::FFltMat, v::FFltVec)\n\nConvert a 4-vector to a  matrix of 3x3 stress components (tensor).\n\nConvert a 4-vector to a symmetric matrix of 3x3 stress components (tensor).  This is conversion routine that would be useful for plane strain or axially symmetric conditions. The stress vector components need to be ordered as:     sigmax, sigmay, tauxy, sigmaz, which is the ordering used for the plane-strain model reduction. Therefore, for axially symmetric analysis the components need to be reordered, as from the constitutive equation they come out as sigmax, sigmay, sigmaz, tauxy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress6vto3x3t!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress6vto3x3t!",
    "category": "function",
    "text": "stress6vto3x3t!(t::FFltMat, v::FFltVec)\n\nConvert a 6-vector to a  matrix of 3x3 stress components (symmetric tensor).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress6vto9v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress6vto9v!",
    "category": "function",
    "text": "stress6vto9v!(t::FFltVec, v::FFltVec)\n\nConvert a stress 6-vector to a  stress 9-vector components (tensor).\n\nThe  stress components are in the order      sigx, sigy, sigz, tauxy, tauxy, tauyz, tauyz, tauxz, tauxz\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MatDeforModule.stress9vto6v!",
    "page": "Docstrings",
    "title": "FinEtools.MatDeforModule.stress9vto6v!",
    "category": "function",
    "text": "stress9vto6v!(t::FFltVec, v::FFltVec)\n\nConvert a stress 9-vector (tensor) to a  stress 6-vector components.\n\nThe  stress components are in the order      sigx, sigy, sigz, tauxy, tauxy, tauyz, tauyz, tauxz, tauxz\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.DeforModelRedModule.stresscomponentmap",
    "page": "Docstrings",
    "title": "FinEtools.DeforModelRedModule.stresscomponentmap",
    "category": "function",
    "text": "stresscomponentmap(::Type{DeforModelRed1D})\n\nConstruct a dictionary to map from stress-component symbols to indexes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.subset",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.subset",
    "category": "function",
    "text": "subset(self::T, L::FIntVec) where {T<:FESet}\n\nExtract a subset of the finite elements from the given finite element set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforWinklerModule.surfacenormalspringstiffness",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforWinklerModule.surfacenormalspringstiffness",
    "category": "function",
    "text": "surfacenormalspringstiffness(self::FEMMDeforWinkler, assembler::A,\n    geom::NodalField{FFlt}, u::NodalField{T},\n    springconstant::FFlt, surfacenormal::SurfaceNormal) where {A<:SysmatAssemblerBase, T<:Number}\n\nCompute the stiffness matrix of surface normal spring. Rationale: consider continuously distributed springs between the surface of the solid body and the \'ground\', in the direction normal to the surface. If the spring coefficient becomes large, we have an approximate method of enforcing the normal displacement to the surface.gas\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffSurfModule.surfacetransfer",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffSurfModule.surfacetransfer",
    "category": "function",
    "text": "surfacetransfer(self::FEMMHeatDiffSurf,  assembler::A,\n  geom::NodalField{FFlt}, temp::NodalField{FFlt}) where {A<:SysmatAssemblerBase}\n\nCompute the surface heat transfer matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMHeatDiffSurfModule.surfacetransferloads",
    "page": "Docstrings",
    "title": "FinEtools.FEMMHeatDiffSurfModule.surfacetransferloads",
    "category": "function",
    "text": "surfacetransferloads(self::FEMMHeatDiffSurf,  assembler::A,\n  geom::NodalField{FFlt}, temp::NodalField{FFlt},\n  ambtemp::NodalField{FFlt}) where {A<:SysvecAssemblerBase}\n\nCompute the load vector corresponding to surface heat transfer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMDeforLinearBaseModule.thermalstrainloads",
    "page": "Docstrings",
    "title": "FinEtools.FEMMDeforLinearBaseModule.thermalstrainloads",
    "category": "function",
    "text": "thermalstrainloads(self::FEMMDeforLinearAbstract, assembler::A,\n    geom::NodalField{FFlt}, u::NodalField{T},\n    dT::NodalField{FFlt}) where {A<:SysvecAssemblerBase, T<:Number}\n\nCompute the thermal-strain load vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.threshold",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.threshold",
    "category": "function",
    "text": "threshold(V, threshold_value, voxel_below, voxel_above)\n\nThreshold the data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FEMMBaseModule.transferfield!",
    "page": "Docstrings",
    "title": "FinEtools.FEMMBaseModule.transferfield!",
    "category": "function",
    "text": "transferfield!(ff::F, fensf::FENodeSet, fesf::FESet,\n    fc::F, fensc::FENodeSet, fesc::FESet, tolerance::FFlt\n    )  where {T<:Number, F<:NodalField{T}}\n\nTransfer a nodal field from a coarse mesh to a finer one.     - ff = the fine-mesh field (modified and also returned)     - fensf = finite element node set for the fine-mesh     - fc = the coarse-mesh field     - fensc = finite element node set for the fine-mesh,     - fesc = finite element set for the coarse mesh     - geometricaltolerance = tolerance in physical space for searches of the adjacent nodes     - parametrictolerance = tolerance in parametric space for for check whether node is inside an element\n\n\n\n\n\ntransferfield!(ff::F, fensf::FENodeSet, fesf::FESet,\n    fc::F, fensc::FENodeSet, fesc::FESet, geometricaltolerance::FFlt; parametrictolerance::FFlt = 0.01\n    )  where {T<:Number, F<:ElementalField{T}}\n\nTransfer a elemental field from a coarse mesh to a finer one. ff = the fine-mesh field (modified and also returned) fensf = finite element node set for the fine-mesh fc = the coarse-mesh field fensc = finite element node set for the fine-mesh, fesc = finite element set for the coarse mesh tolerance = tolerance in physical space for searches of the adjacent nodes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.trim",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.trim",
    "category": "function",
    "text": "trim(V::VoxelBoxVolume, emptyvalue)\n\nTrim off pieces of the volume that consist only of the empty value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.BoxModule.updatebox!",
    "page": "Docstrings",
    "title": "FinEtools.BoxModule.updatebox!",
    "category": "function",
    "text": "updatebox!(box::AbstractVector, x::AbstractArray)\n\nUpdate a box with another location, or create a new box.\n\nIf the  box does not have  the correct dimensions,  it is correctly sized.\n\nbox = bounding box     for 1-D box=[minx,maxx], or     for 2-D box=[minx,maxx,miny,maxy], or     for 3-D box=[minx,maxx,miny,maxy,minz,maxz]     The box is expanded to include the     supplied location x.   The variable x  can hold multiple points in rows.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FESetModule.updateconn!",
    "page": "Docstrings",
    "title": "FinEtools.FESetModule.updateconn!",
    "category": "function",
    "text": "updateconn!(self::T, newids::FIntVec) where {T<:FESet}\n\nUpdate the connectivity after the IDs of nodes changed.\n\nnewids= new node IDs. Note that indexes in the conn array point into the  newids array. After the connectivity was updated this is no longer true!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.CSysModule.updatecsmat!",
    "page": "Docstrings",
    "title": "FinEtools.CSysModule.updatecsmat!",
    "category": "function",
    "text": "function updatecsmat!(self::CSys, XYZ::FFltMat, tangents::FFltMat, fe_label::FInt)\n\nUpdate the coordinate system orientation matrix.\n\nThe  coordinate system matrix is updated based upon the location XYZ of the evaluation point, and possibly on the Jacobian matrix tangents within the element in which the coordinate system matrix is evaluated,  or perhaps on the label fe_label of the finite element.\n\nAfter this function returns, the coordinate system matrix can be retrieved from the buffer as self.csmat.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.ForceIntensityModule.updateforce!",
    "page": "Docstrings",
    "title": "FinEtools.ForceIntensityModule.updateforce!",
    "category": "function",
    "text": "updateforce!(self::ForceIntensity, ndofn::FInt, XYZ::FFltMat, tangents::FFltMat, fe_label::FInt)\n\nUpdate the force intensity vector.\n\nReturns a vector (stored in the cache self.cache).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.SurfaceNormalModule.updatenormal!",
    "page": "Docstrings",
    "title": "FinEtools.SurfaceNormalModule.updatenormal!",
    "category": "function",
    "text": "updatenormal!(self::SurfaceNormal, XYZ::FFltMat, tangents::FFltMat, fe_label::FInt)\n\nUpdate the surface normal vector.\n\nReturns a vector (stored in the cache).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VectorCacheModule.updateretrieve!",
    "page": "Docstrings",
    "title": "FinEtools.VectorCacheModule.updateretrieve!",
    "category": "function",
    "text": "updateretrieve!(self::VectorCache, XYZ::FFltMat, tangents::FFltMat, fe_label::FInt)\n\nUpdate the cache and retrieve the vector.\n\nAfter the return from this function the updated vector can be read from the cache as self.cache (also returned).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelTetMeshingModule.volumes",
    "page": "Docstrings",
    "title": "FinEtools.VoxelTetMeshingModule.volumes",
    "category": "function",
    "text": "volumes(self::ImageMesher)\n\nCompute tetrahedral volumes in the current mesh.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.VoxelBoxModule.vtkexport",
    "page": "Docstrings",
    "title": "FinEtools.VoxelBoxModule.vtkexport",
    "category": "function",
    "text": "vtkexport(theFile::String, V::VoxelBoxVolume{CoordT,DataT}) where {CoordT<:Number,DataT<:Number}\n\nCompute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.MeshExportModule.vtkexportmesh",
    "page": "Docstrings",
    "title": "FinEtools.MeshExportModule.vtkexportmesh",
    "category": "function",
    "text": "vtkexportmesh(theFile::String, fens::FENodeSet, fes::T; opts...) where {T<:FESet}\n\nExport mesh to a VTK 1.0 file as an unstructured grid.\n\nopts = keyword argument list, where scalars = array of tuples, (name, data) vectors = array of tuples, (name, data)\n\nFor the scalars: If data is a vector, that data is exported as a single field. On the other hand, if it is an 2d array, each column is exported  as a separate field.\n\n\n\n\n\nvtkexportmesh(theFile::String, Connectivity, Points, Cell_type;\n    vectors=nothing, scalars=nothing)\n\nExport mesh to a VTK 1.0 file as an unstructured grid.\n\nopts = keyword argument list, where scalars = array of tuples, (name, data) vectors = array of tuples, (name, data)\n\nFor the scalars: If data is a vector, that data is exported as a single field. On the other hand, if it is an 2d array, each column is exported  as a separate field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FieldModule.wipe!",
    "page": "Docstrings",
    "title": "FinEtools.FieldModule.wipe!",
    "category": "function",
    "text": "wipe!(self::Field)\n\nWipe all the data from the field.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinEtools.FENodeSetModule.xyz3",
    "page": "Docstrings",
    "title": "FinEtools.FENodeSetModule.xyz3",
    "category": "function",
    "text": "xyz3(self::FENodeSet)\n\nGet the  3-D coordinate that define the location  of the node. Even if the nodes  were specified in  lower dimension (1-D, 2-D) this function returns  a 3-D coordinate  by padding with zeros.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FinEtools.ASSEMBLYFinEtools.AbaqusExporterFinEtools.AlgoAcoustModuleFinEtools.AlgoBaseModuleFinEtools.AlgoDeforLinearModuleFinEtools.AlgoHeatDiffModuleFinEtools.AssemblyModuleFinEtools.BEGIN_BULKFinEtools.BOUNDARYFinEtools.Blmat!FinEtools.BoxModuleFinEtools.CENDFinEtools.CLOADFinEtools.COMMENTFinEtools.CSysFinEtools.CSysModuleFinEtools.CTETRAFinEtools.DENSITYFinEtools.DLOADFinEtools.DeforModelRedFinEtools.DeforModelRed1DFinEtools.DeforModelRed2DAxisymmFinEtools.DeforModelRed2DStrainFinEtools.DeforModelRed2DStressFinEtools.DeforModelRed3DFinEtools.DeforModelRedModuleFinEtools.ELASTICFinEtools.ELEMENTFinEtools.ELSET_ELSETFinEtools.EL_PRINTFinEtools.ENDDATAFinEtools.END_ASSEMBLYFinEtools.END_INSTANCEFinEtools.END_PARTFinEtools.END_STEPFinEtools.ENERGY_PRINTFinEtools.EXPANSIONFinEtools.ElementSizeWeightFunctionFinEtools.ElementalFieldFinEtools.ElementalFieldModuleFinEtools.FCplxFltFinEtools.FDataDictFinEtools.FEMMAbstractBaseFinEtools.FEMMAcoustFinEtools.FEMMAcoustModuleFinEtools.FEMMAcoustSurfFinEtools.FEMMAcoustSurfModuleFinEtools.FEMMBaseFinEtools.FEMMBaseModuleFinEtools.FEMMDeforLinearFinEtools.FEMMDeforLinearAbstractFinEtools.FEMMDeforLinearBaseModuleFinEtools.FEMMDeforLinearESNICEModuleFinEtools.FEMMDeforLinearESNICET4FinEtools.FEMMDeforLinearMSH8FinEtools.FEMMDeforLinearMSModuleFinEtools.FEMMDeforLinearMST10FinEtools.FEMMDeforLinearModuleFinEtools.FEMMDeforLinearNICEH8FinEtools.FEMMDeforLinearNICEModuleFinEtools.FEMMDeforLinearNICET4FinEtools.FEMMDeforSurfaceDampingFinEtools.FEMMDeforSurfaceDampingModuleFinEtools.FEMMDeforWinklerFinEtools.FEMMDeforWinklerModuleFinEtools.FEMMHeatDiffFinEtools.FEMMHeatDiffModuleFinEtools.FEMMHeatDiffSurfFinEtools.FEMMHeatDiffSurfModuleFinEtools.FENodeSetFinEtools.FENodeSetModuleFinEtools.FENodeToFEMapFinEtools.FENodeToFEMapModuleFinEtools.FESetFinEtools.FESet0ManifoldFinEtools.FESet1ManifoldFinEtools.FESet2ManifoldFinEtools.FESet3ManifoldFinEtools.FESetH20FinEtools.FESetH27FinEtools.FESetH8FinEtools.FESetL2FinEtools.FESetL3FinEtools.FESetModuleFinEtools.FESetP1FinEtools.FESetQ4FinEtools.FESetQ8FinEtools.FESetQ9FinEtools.FESetT10FinEtools.FESetT3FinEtools.FESetT4FinEtools.FESetT6FinEtools.FFltFinEtools.FFltMatFinEtools.FFltVecFinEtools.FIntFinEtools.FIntMatFinEtools.FIntVecFinEtools.FMatFinEtools.FTypesModuleFinEtools.FVecFinEtools.FieldFinEtools.FieldModuleFinEtools.FinEtoolsFinEtools.ForceIntensityFinEtools.ForceIntensityModuleFinEtools.GRIDFinEtools.GaussRuleFinEtools.GeneralFieldFinEtools.GeneralFieldModuleFinEtools.H20blockFinEtools.H20blockxFinEtools.H27blockFinEtools.H27blockxFinEtools.H8blockFinEtools.H8blockxFinEtools.H8ellipholeFinEtools.H8extrudeQ4FinEtools.H8hexahedronFinEtools.H8layeredplatexFinEtools.H8refineFinEtools.H8sphereFinEtools.H8spherenFinEtools.H8toH20FinEtools.H8toH27FinEtools.H8voximgFinEtools.HEADINGFinEtools.INSTANCEFinEtools.ImageMesherFinEtools.IntegDataFinEtools.IntegDataModuleFinEtools.IntegRuleFinEtools.IntegRuleModuleFinEtools.JacobiancurveFinEtools.JacobianmdimFinEtools.JacobianpointFinEtools.JacobiansurfaceFinEtools.JacobianvolumeFinEtools.L2blockFinEtools.L2blockxFinEtools.L3blockxFinEtools.MAT1FinEtools.MATERIALFinEtools.MatAcoustFluidFinEtools.MatAcoustFluidModuleFinEtools.MatDeforFinEtools.MatDeforElastIsoFinEtools.MatDeforElastIsoModuleFinEtools.MatDeforElastOrthoFinEtools.MatDeforElastOrthoModuleFinEtools.MatDeforModuleFinEtools.MatHeatDiffFinEtools.MatHeatDiffModuleFinEtools.MatrixUtilityModuleFinEtools.MeshExportModuleFinEtools.MeshHexahedronModuleFinEtools.MeshImportModuleFinEtools.MeshLineModuleFinEtools.MeshModificationModuleFinEtools.MeshQuadrilateralModuleFinEtools.MeshSelectionModuleFinEtools.MeshTetrahedronModuleFinEtools.MeshTriangleModuleFinEtools.MeshUtilModuleFinEtools.NASTRANExporterFinEtools.NODEFinEtools.NODE_PRINTFinEtools.NSET_NSETFinEtools.NodalFieldFinEtools.NodalFieldModuleFinEtools.NodalSimplexRuleFinEtools.ORIENTATIONFinEtools.PARTFinEtools.PSOLIDFinEtools.PhysicalUnitModuleFinEtools.PointRuleFinEtools.Q4annulusFinEtools.Q4blockFinEtools.Q4blockxFinEtools.Q4ellipholeFinEtools.Q4quadrilateralFinEtools.Q4refineFinEtools.Q4toQ8FinEtools.Q4toT3FinEtools.Q8annulusFinEtools.Q8blockFinEtools.Q8blockxFinEtools.RotationUtilModuleFinEtools.SECTION_CONTROLSFinEtools.SOLID_SECTIONFinEtools.STEP_FREQUENCYFinEtools.STEP_PERTURBATION_BUCKLEFinEtools.STEP_PERTURBATION_STATICFinEtools.STLExporterFinEtools.SURFACE_SECTIONFinEtools.SimplexRuleFinEtools.SurfaceNormalFinEtools.SurfaceNormalModuleFinEtools.SysmatAssemblerBaseFinEtools.SysmatAssemblerSparseFinEtools.SysmatAssemblerSparseHRZLumpingSymmFinEtools.SysmatAssemblerSparseSymmFinEtools.SysvecAssemblerFinEtools.SysvecAssemblerBaseFinEtools.T10blockFinEtools.T10blockxFinEtools.T10layeredplatexFinEtools.T10refineFinEtools.T10toT4FinEtools.T3blockFinEtools.T3blockxFinEtools.T3refineFinEtools.T3toT6FinEtools.T4blockFinEtools.T4blockxFinEtools.T4meshedgesFinEtools.T4refineFinEtools.T4toT10FinEtools.T4voximgFinEtools.T6blockFinEtools.T6blockxFinEtools.TEMPERATUREFinEtools.TetRemeshingModuleFinEtools.TetRuleFinEtools.TrapezoidalRuleFinEtools.TriRuleFinEtools.VectorCacheFinEtools.VectorCacheModuleFinEtools.VoxelBoxModuleFinEtools.VoxelBoxVolumeFinEtools.VoxelTetMeshingModuleFinEtools.acousticABCFinEtools.acousticcouplingpanelsFinEtools.acousticmassFinEtools.acousticstiffnessFinEtools.applyebc!FinEtools.assemble!FinEtools.associategeometry!FinEtools.bfunFinEtools.bfundparFinEtools.boundingboxFinEtools.boxesoverlapFinEtools.catFinEtools.centroidparametricFinEtools.closeFinEtools.compactnodesFinEtools.complementopFinEtools.conductivityFinEtools.connasarrayFinEtools.connectedelemsFinEtools.connectednodesFinEtools.connectionmatrixFinEtools.copyto!FinEtools.countFinEtools.cross2FinEtools.cross3!FinEtools.dampingABCFinEtools.differenceopFinEtools.distribloadsFinEtools.elemfieldfromintegpointsFinEtools.endsolidFinEtools.energyFinEtools.evalFinEtools.facetFinEtools.fieldfromintegpointsFinEtools.fillsolid!FinEtools.fillvolume!FinEtools.findunconnnodesFinEtools.fromarray!FinEtools.fusenodesFinEtools.gatherdofnums!FinEtools.gatherfixedvalues_asmat!FinEtools.gatherfixedvalues_asvec!FinEtools.gathersysvecFinEtools.gathersysvec!FinEtools.gathervalues_asmat!FinEtools.gathervalues_asvec!FinEtools.gradedspaceFinEtools.h2libexporttriFinEtools.import_ABAQUSFinEtools.import_NASTRANFinEtools.inboxFinEtools.includeFinEtools.inflatebox!FinEtools.initbox!FinEtools.innerproductFinEtools.inparametricFinEtools.inspectintegpointsFinEtools.integratefieldfunctionFinEtools.integratefunctionFinEtools.integrationdataFinEtools.interior2boundaryFinEtools.intersectboxesFinEtools.intersectionopFinEtools.linearspaceFinEtools.makematrix!FinEtools.makevector!FinEtools.manifdimFinEtools.map2parametricFinEtools.massFinEtools.mergemeshesFinEtools.mergenmeshesFinEtools.mergenodesFinEtools.mesh!FinEtools.meshboundaryFinEtools.meshsmoothingFinEtools.mirrormeshFinEtools.ndofsFinEtools.nelemsFinEtools.nentsFinEtools.nnodesFinEtools.nodepartitioningFinEtools.nodesperelemFinEtools.nstressstrainFinEtools.nthermstrainFinEtools.numberdofs!FinEtools.nzebcloadsacousticmassFinEtools.nzebcloadsacousticstiffnessFinEtools.nzebcloadsconductivityFinEtools.nzebcloadsstiffnessFinEtools.nzebcsurfacetransferloadsFinEtools.otherdimensionunityFinEtools.padFinEtools.phunFinEtools.pressure2resultantforceFinEtools.pressure2resultanttorqueFinEtools.renumberconn!FinEtools.rotmat3!FinEtools.rotstressvecFinEtools.savecsvFinEtools.scattersysvec!FinEtools.selectelemFinEtools.selectnodeFinEtools.setebc!FinEtools.setlabel!FinEtools.sizeFinEtools.skewmat!FinEtools.solidFinEtools.solidboxFinEtools.solidcylinderFinEtools.solidhalfspaceFinEtools.solidsphereFinEtools.spacedimFinEtools.startassembly!FinEtools.stiffnessFinEtools.strain2x2tto3v!FinEtools.strain3vto2x2t!FinEtools.strain3x3tto6v!FinEtools.strain3x3tto9v!FinEtools.strain6vto3x3t!FinEtools.strain6vto9v!FinEtools.strain9vto3x3t!FinEtools.strain9vto6v!FinEtools.stress2x2to3v!FinEtools.stress3vto2x2t!FinEtools.stress3vto3x3t!FinEtools.stress3x3tto6v!FinEtools.stress4vto3x3t!FinEtools.stress6vto3x3t!FinEtools.stress6vto9v!FinEtools.stress9vto6v!FinEtools.stresscomponentmapFinEtools.subsetFinEtools.surfacenormalspringstiffnessFinEtools.surfacetransferFinEtools.surfacetransferloadsFinEtools.thermalstrainloadsFinEtools.thresholdFinEtools.transferfield!FinEtools.trimFinEtools.unionopFinEtools.updatebox!FinEtools.updateconn!FinEtools.updatecsmat!FinEtools.updateforce!FinEtools.updatenormal!FinEtools.updateretrieve!FinEtools.volumesFinEtools.voxeldimsFinEtools.vtkexportFinEtools.vtkexportmeshFinEtools.wipe!FinEtools.xyz3"
},

]}
