var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RigidBodyDynamics.jl-1",
    "page": "Readme",
    "title": "RigidBodyDynamics.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: ) (Image: )RigidBodyDynamics.jl is a rigid body dynamics library in pure Julia. It aims to be user friendly and performant, but also generic in the sense that the algorithms can be called with inputs of any (suitable) scalar types. This means that if fast numeric dynamics evaluations are required, a user can supply Float64 or Float32 inputs. However, if symbolic quantities are desired for analysis purposes, they can be obtained by calling the algorithms with e.g. SymPy.Sym inputs. If gradients are required, e.g. the ForwardDiff.Dual type, which implements forward-mode automatic differentiation, can be used.See the latest stable documentation for a list of features, installation instructions, and a quick-start guide. Installation should only take a couple of minutes, including installing Julia itself. See the notebooks directory for some usage examples."
},

{
    "location": "#Related-packages-1",
    "page": "Readme",
    "title": "Related packages",
    "category": "section",
    "text": "RigidBodyDynamics.jl is part of the JuliaRobotics GitHub organization.Packages built on top of RigidBodyDynamics.jl include:RigidBodySim.jl - simulator built on top of RigidBodyDynamics.jl.\nMeshCatMechanisms.jl - 3D visualization of articulated mechanisms using MeshCat.jl (built on top of three.js) and RigidBodyDynamics.jl.\nRigidBodyTreeInspector.jl - 3D visualization of RigidBodyDynamics.jl Mechanisms using Director.\nMotionCaptureJointCalibration.jl - kinematic calibration for robots using motion capture data, built on top of RigidBodyDynamics.jl\nQPControl.jl - quadratic-programming-based robot controllers implemented using RigidBodyDynamics.jl.\nStrandbeestRobot.jl - simulations of a 12-legged parallel walking mechanism inspired by Theo Jansens\'s Strandbeest using RigidBodyDynamics.jl."
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": "August 17, 2018: tagged version 1.0.0. RigidBodyDynamics.jl will adhere to semantic versioning from this point on.\nAugust 10, 2018: Robin Deits gave a talk at JuliaCon 2018 demonstrating RigidBodyDynamics.jl and related packages.\nAugust 4, 2018: tagged version 0.9.0.\nJuly 10, 2018: tagged version 0.8.0. Drops support for Julia 0.6. Supports Julia 0.7 with no deprecation warnings (requires at least Julia 0.7.0-beta.105, does not work on 0.7.0-beta). Note that a few example notebooks don\'t work yet because of additional dependencies that haven\'t been updated for Julia 0.7. Also note the significant performance improvements (e.g., ~32% for mass_matrix!).\nJuly 9, 2018: tagged version 0.7.0. Supports Julia 0.7 (with some deprecation warnings). This is the last version to support Julia 0.6.\nMay 14, 2018: tagged version 0.6.1.\nApril 26, 2018: tagged version 0.6.0.\nMarch 1, 2018: tagged version 0.5.0.\nSeptember 20, 2017: tagged version 0.4.0.\nAugust 23, 2017: a video of a JuliaCon 2017 talk given by Robin Deits and Twan Koolen on using Julia for robotics has been uploaded. It includes a brief demo of RigidBodyDynamics.jl and RigidBodyTreeInspector.jl. Note that RigidBodyDynamics.jl performance has significantly improved since this talk. The margins of the slides have unfortunately been cut off somewhat in the video.\nAugust 22, 2017: tagged version 0.3.0. Drops Julia 0.5 support.\nJune 18, 2017: tagged version 0.2.0. Supports Julia 0.6. This is the last version to support Julia 0.5.\nMarch 20, 2017: tagged version 0.1.0.\nFebruary 16, 2017: tagged version 0.0.6.\nFebruary 14, 2017: tagged version 0.0.5.\nDecember 12, 2016: tagged version 0.0.4.\nDecember 6, 2016: tagged version 0.0.3.\nOctober 28, 2016: tagged version 0.0.2.\nOctober 24, 2016: tagged version 0.0.1."
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.@framecheck",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.@framecheck",
    "category": "macro",
    "text": "Check that CartesianFrame3D f1 is one of f2s.\n\nNote that if f2s is a CartesianFrame3D, then f1 and f2s are simply checked for equality.\n\nThrows an ArgumentError if f1 is not among f2s when bounds checks are enabled. @framecheck is a no-op when bounds checks are disabled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Bounds",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Bounds",
    "category": "type",
    "text": "struct Bounds{T}\n\nBounds is a scalar-like type representing a closed interval from lower to upper. To indicate that a vector of values falls with some range, use a VectorBoundsT.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.CartesianFrame3D",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.CartesianFrame3D",
    "category": "type",
    "text": "struct CartesianFrame3D\n\nA CartesianFrame3D identifies a three-dimensional Cartesian coordinate system.\n\nCartesianFrame3Ds are typically used to annotate the frame in which certain quantities are expressed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.DynamicsResult",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.DynamicsResult",
    "category": "type",
    "text": "mutable struct DynamicsResult{T, M}\n\nStores variables related to the dynamics of a Mechanism, e.g. the Mechanism\'s mass matrix and joint acceleration vector.\n\nType parameters:\n\nT: the scalar type of the dynamics-related variables.\nM: the scalar type of the Mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.DynamicsResultCache",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.DynamicsResultCache",
    "category": "type",
    "text": "struct DynamicsResultCache{M} <: RigidBodyDynamics.AbstractTypeDict\n\nA container that manages the creation and storage of DynamicsResult objects of various scalar types, associated with a given Mechanism. Similar to StateCache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Fixed",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Fixed",
    "category": "type",
    "text": "struct Fixed{T} <: JointType{T}\n\nThe Fixed joint type is a degenerate joint type, in the sense that it allows no motion between its predecessor and successor rigid bodies.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.FreeVector3D",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.FreeVector3D",
    "category": "type",
    "text": "struct FreeVector3D{V<:(AbstractArray{T,1} where T)}\n\nA FreeVector3D represents a free vector.\n\nExamples of free vectors include displacements and velocities of points.\n\nApplying a Transform3D to a FreeVector3D only rotates the FreeVector3D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.GeometricJacobian",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.GeometricJacobian",
    "category": "type",
    "text": "struct GeometricJacobian{A<:(AbstractArray{T,2} where T)}\n\nA geometric Jacobian (also known as basic, or spatial Jacobian) maps a vector of joint velocities to a twist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Joint",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Joint",
    "category": "type",
    "text": "struct Joint{T, JT<:JointType{T}}\n\nA joint represents a kinematic restriction of the relative twist between two rigid bodies to a linear subspace of dimension k.\n\nA joint has a direction. The rigid body before the joint is called the joint\'s predecessor, and the rigid body after the joint is its successor.\n\nThe state related to the joint is parameterized by two sets of variables, namely\n\na vector q in mathcalQ, parameterizing the relative homogeneous transform.\na vector v in mathbbR^k, parameterizing the relative twist.\n\nThe twist of the successor with respect to the predecessor is a linear function of v.\n\nFor some joint types (notably those using a redundant representation of relative orientation, such as a unit quaternion), dotq, the time derivative of q, may not be the same as v. However, an invertible linear transformation exists between dotq and v.\n\nSee also:\n\nDefinition 2.9 in Duindam, \"Port-Based Modeling and Control for Efficient Bipedal Walking Robots\", 2006.\nSection 4.4 of Featherstone, \"Rigid Body Dynamics Algorithms\", 2008.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.JointType",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.JointType",
    "category": "type",
    "text": "abstract type JointType\n\nThe abstract supertype of all concrete joint types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Mechanism",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Mechanism",
    "category": "type",
    "text": "mutable struct Mechanism{T}\n\nA Mechanism represents an interconnection of rigid bodies and joints. Mechanisms store the joint layout and inertia parameters, but no state-dependent information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.MechanismState",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.MechanismState",
    "category": "type",
    "text": "struct MechanismState{X, M, C, JointCollection}\n\nA MechanismState stores state information for an entire Mechanism. It contains the joint configuration and velocity vectors q and v, and a vector of additional states s. In addition, it stores cache variables that depend on q and v and are aimed at preventing double work.\n\nType parameters:\n\nX: the scalar type of the q, v, and s vectors.\nM: the scalar type of the Mechanism\nC: the scalar type of the cache variables (== promote_type(X, M))\nJointCollection: the type of the treejoints and nontreejoints members (a TypeSortedCollection subtype)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.Momentum",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.Momentum",
    "category": "type",
    "text": "struct Momentum{T}\n\nA Momentum is the product of a SpatialInertia and a Twist, i.e.\n\nh^i =\nleft(beginarrayc\nk^i\nl^i\nendarrayright) =\nI^i T^i j_k\n\nwhere I^i is the spatial inertia of a given body expressed in frame i, and T^i j_k is the twist of frame k (attached to the body) with respect to inertial frame j, expressed in frame i. k^i is the angular momentum and l^i is the linear momentum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.MomentumMatrix",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.MomentumMatrix",
    "category": "type",
    "text": "struct MomentumMatrix{A<:(AbstractArray{T,2} where T)}\n\nA momentum matrix maps a joint velocity vector to momentum.\n\nThis is a slight generalization of the centroidal momentum matrix (Orin, Goswami, \"Centroidal momentum matrix of a humanoid robot: Structure and properties.\") in that the matrix (and hence the corresponding total momentum) need not be expressed in a centroidal frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Planar",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Planar",
    "category": "type",
    "text": "struct Planar{T} <: JointType{T}\n\nThe Planar joint type allows translation along two orthogonal vectors, referred to as x and y, as well as rotation about an axis z = x times y.\n\nThe components of the 3-dimensional configuration vector q associated with a Planar joint are the x- and y-coordinates of the translation, and the angle of rotation theta about z, in that order.\n\nThe components of the 3-dimension velocity vector v associated with a Planar joint are the x- and y-coordinates of the linear part of the joint twist, expressed in the frame after the joint, followed by the z-component of the angular part of this joint twist.\n\nwarning: Warning\nFor the Planar joint type, v neq dotq! Although the angular parts of v and dotq are the same, their linear parts differ. The linear part of v is the linear part of dotq, rotated to the frame after the joint. This parameterization was chosen to allow the translational component of the joint transform to be independent of the rotation angle theta (i.e., the rotation is applied after the translation), while still retaining a constant motion subspace expressed in the frame after the joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.Point3D",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.Point3D",
    "category": "type",
    "text": "struct Point3D{V<:(AbstractArray{T,1} where T)}\n\nA Point3D represents a position in a given coordinate system.\n\nA Point3D is a bound vector. Applying a Transform3D to a Point3D both rotates and translates the Point3D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Prismatic",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Prismatic",
    "category": "type",
    "text": "struct Prismatic{T} <: JointType{T}\n\nA Prismatic joint type allows translation along a fixed axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.QuaternionFloating",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.QuaternionFloating",
    "category": "type",
    "text": "struct QuaternionFloating{T} <: JointType{T}\n\nA floating joint type that uses a unit quaternion representation for orientation.\n\nFloating joints are 6-degree-of-freedom joints that are in a sense degenerate, as they impose no constraints on the relative motion between two bodies.\n\nThe full, 7-dimensional configuration vector of a QuaternionFloating joint type consists of a unit quaternion representing the orientation that rotates vectors from the frame \'directly after\' the joint to the frame \'directly before\' it, and a 3D position vector representing the origin of the frame after the joint in the frame before the joint.\n\nThe 6-dimensional velocity vector of a QuaternionFloating joint is the twist of the frame after the joint with respect to the frame before it, expressed in the frame after the joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.QuaternionSpherical",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.QuaternionSpherical",
    "category": "type",
    "text": "struct QuaternionSpherical{T} <: JointType{T}\n\nThe QuaternionSpherical joint type allows rotation in any direction. It is an implementation of a ball-and-socket joint.\n\nThe 4-dimensional configuration vector q associated with a QuaternionSpherical joint is the unit quaternion that describes the orientation of the frame after the joint with respect to the frame before the joint. In other words, it is the quaternion that can be used to rotate vectors from the frame after the joint to the frame before the joint.\n\nThe 3-dimensional velocity vector v associated with a QuaternionSpherical joint is the angular velocity of the frame after the joint with respect to the frame before the joint, expressed in the frame after the joint (body frame).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Revolute",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Revolute",
    "category": "type",
    "text": "struct Revolute{T} <: JointType{T}\n\nA Revolute joint type allows rotation about a fixed axis.\n\nThe configuration vector for the Revolute joint type simply consists of the angle of rotation about the specified axis. The velocity vector consists of the angular rate, and is thus the time derivative of the configuration vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.RigidBody",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.RigidBody",
    "category": "type",
    "text": "mutable struct RigidBody{T}\n\nA non-deformable body.\n\nA RigidBody has inertia (represented as a SpatialInertia), unless it represents a root (world) body. A RigidBody additionally stores a list of definitions of coordinate systems that are rigidly attached to it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.SPQuatFloating",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.SPQuatFloating",
    "category": "type",
    "text": "struct SPQuatFloating{T} <: JointType{T}\n\nA floating joint type that uses a SPQuat representation for orientation.\n\nFloating joints are 6-degree-of-freedom joints that are in a sense degenerate, as they impose no constraints on the relative motion between two bodies.\n\nThe 6-dimensional configuration vector of a SPQuatFloating joint type consists of a SPQuat representing the orientation that rotates vectors from the frame \'directly after\' the joint to the frame \'directly before\' it, and a 3D position vector representing the origin of the frame after the joint in the frame before the joint.\n\nThe 6-dimensional velocity vector of a SPQuatFloating joint is the twist of the frame after the joint with respect to the frame before it, expressed in the frame after the joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.CustomCollections.SegmentedVector",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.CustomCollections.SegmentedVector",
    "category": "type",
    "text": "struct SegmentedVector{K, T, KeyRange<:AbstractRange{K}, P<:AbstractArray{T,1}} <: AbstractArray{T,1}\n\nSegmentedVector is an AbstractVector backed by another AbstractVector (its parent), which additionally stores an IndexDict containing views into the parent. Together, these views cover the parent.\n\nExamples\n\njulia> x = [1., 2., 3., 4.]\n4-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\n 4.0\n\njulia> viewlength(i) = 2\nviewlength (generic function with 1 method)\n\njulia> xseg = SegmentedVector{Int}(x, 1 : 2, viewlength)\n4-element RigidBodyDynamics.CustomCollections.SegmentedVector{Int64,Float64,Base.OneTo{Int64},Array{Float64,1}}:\n 1.0\n 2.0\n 3.0\n 4.0\n\njulia> segments(xseg)[1]\n2-element SubArray{Float64,1,Array{Float64,1},Tuple{UnitRange{Int64}},true}:\n 1.0\n 2.0\n\njulia> yseg = similar(xseg, Int32); yseg .= 1 : 4 # same view ranges, different element type\n4-element RigidBodyDynamics.CustomCollections.SegmentedVector{Int64,Int32,Base.OneTo{Int64},Array{Int32,1}}:\n 1\n 2\n 3\n 4\n\njulia> segments(yseg)[2]\n2-element SubArray{Int32,1,Array{Int32,1},Tuple{UnitRange{Int64}},true}:\n 3\n 4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.SegmentedVectorCache",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.SegmentedVectorCache",
    "category": "type",
    "text": "struct SegmentedVectorCache{K, KeyRange<:AbstractUnitRange{K}} <: RigidBodyDynamics.AbstractTypeDict\n\nA container that manages the creation and storage of heterogeneously typed SegmentedVector objects. Similar to StateCache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.SinCosRevolute",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.SinCosRevolute",
    "category": "type",
    "text": "struct SinCosRevolute{T} <: JointType{T}\n\nA SinCosRevolute joint type allows rotation about a fixed axis.\n\nIn contrast to the Revolute joint type, the configuration vector for the SinCosRevolute joint type consists of the sine and cosine of the angle of rotation about the specified axis (in that order). The velocity vector for the SinCosRevolute joint type is the same as for the Revolute joint type, i.e., the time derivative of the angle about the axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.SpatialAcceleration",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.SpatialAcceleration",
    "category": "type",
    "text": "struct SpatialAcceleration{T}\n\nA spatial acceleration is the time derivative of a twist.\n\nSee Twist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.SpatialInertia",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.SpatialInertia",
    "category": "type",
    "text": "struct SpatialInertia{T}\n\nA spatial inertia, or inertia matrix, represents the mass distribution of a rigid body.\n\nA spatial inertia expressed in frame i is defined as:\n\nI^i =\nint_Brholeft(xright)leftbeginarraycc\nhatp^Tleft(xright)hatpleft(xright)  hatpleft(xright)\nhatp^Tleft(xright)  I\nendarrayrightdx=leftbeginarraycc\nJ  hatc\nhatc^T  mI\nendarrayright\n\nwhere rho(x) is the density of point x, and p(x) are the coordinates of point x expressed in frame i. J is the mass moment of inertia, m is the total mass, and c is the \'cross part\', center of mass position scaled by m.\n\nwarning: Warning\nThe moment field of a SpatialInertia is the moment of inertia about the origin of its frame, not about the center of mass.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.StateCache",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.StateCache",
    "category": "type",
    "text": "struct StateCache{M, JointCollection} <: RigidBodyDynamics.AbstractTypeDict\n\nA container that manages the creation and storage of MechanismState objects of various scalar types, associated with a given Mechanism.\n\nA StateCache can be used to write generic functions that use MechanismState objects, while avoiding overhead due to the construction of a new MechanismState with a given scalar type every time the function is called.\n\nExamples\n\njulia> mechanism = rand_tree_mechanism(Float64, Revolute{Float64}, Prismatic{Float64}, QuaternionFloating{Float64});\n\njulia> cache = StateCache(mechanism)\nStateCache{…}\n\njulia> state32 = cache[Float32]\nMechanismState{Float32, Float64, Float64, …}(…)\n\njulia> cache[Float32] === state32\ntrue\n\njulia> cache[Float64]\nMechanismState{Float64, Float64, Float64, …}(…)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.Transform3D",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.Transform3D",
    "category": "type",
    "text": "struct Transform3D{T}\n\nA homogeneous transformation matrix representing the transformation from one three-dimensional Cartesian coordinate system to another.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.Twist",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.Twist",
    "category": "type",
    "text": "struct Twist{T}\n\nA twist represents the relative angular and linear motion between two bodies.\n\nThe twist of frame j with respect to frame i, expressed in frame k is defined as\n\nT_j^ki=left(beginarrayc\nomega_j^ki\nv_j^ki\nendarrayright)inmathbbR^6\n\nsuch that\n\nleftbeginarraycc\nhatomega_j^ki  v_j^ki\n0  0\nendarrayright=H_i^kdotH_j^iH_k^j\n\nwhere H^beta_alpha is the homogeneous transform from frame alpha to frame beta, and hatx is the 3 times 3 skew symmetric matrix that satisfies hatx y = x times y for all y in mathbbR^3.\n\nHere, omega_j^ki is the angular part and v_j^ki is the linear part. Note that the linear part is not in general the same as the linear velocity of the origin of frame j.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.Wrench",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.Wrench",
    "category": "type",
    "text": "struct Wrench{T}\n\nA wrench represents a system of forces.\n\nThe wrench w^i expressed in frame i is defined as\n\nw^i =\nleft(beginarrayc\ntau^i\nf^i\nendarrayright) =\nsum_jleft(beginarrayc\nr_j^itimes f_j^i\nf_j^i\nendarrayright)\n\nwhere the f_j^i are forces expressed in frame i, exerted at positions r_j^i. tau^i is the total torque and f^i is the total force.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics._point_jacobian!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics._point_jacobian!",
    "category": "function",
    "text": "_point_jacobian!(Jp, state, path, point, transformfun)\n\n\nCompute the Jacobian mapping the Mechanism\'s joint velocity vector v to the velocity of a point fixed to the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.add_contact_point!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.add_contact_point!",
    "category": "function",
    "text": "add_contact_point!(body, point)\n\n\nAdd a new contact point to the rigid body\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.add_frame!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.add_frame!",
    "category": "function",
    "text": "add_frame!(body, transform)\n\n\nAdd a new frame definition to body, represented by a homogeneous transform from the CartesianFrame3D to be added to any other frame that is already attached to body.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.additional_state",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.additional_state",
    "category": "function",
    "text": "additional_state(state)\n\n\nReturn the vector of additional states s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.attach!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.attach!",
    "category": "function",
    "text": "attach!(mechanism, predecessor, successor, joint; joint_pose, successor_pose)\n\n\nAttach successor to predecessor using joint.\n\nSee Joint for definitions of the terms successor and predecessor.\n\nThe Transform3Ds joint_pose and successor_pose define where joint is attached to each body. joint_pose should define frame_before(joint) with respect to any frame fixed to predecessor, and likewise successor_pose should define any frame fixed to successor with respect to frame_after(joint).\n\npredecessor is required to already be among the bodies of the Mechanism.\n\nIf successor is not yet a part of the Mechanism, it will be added to the Mechanism. Otherwise, the joint will be treated as a non-tree edge in the Mechanism, effectively creating a loop constraint that will be enforced using Lagrange multipliers (as opposed to using recursive algorithms).\n\n\n\n\n\nattach!(mechanism, parentbody, childmechanism; child_root_pose)\n\n\nAttach a copy of childmechanism to mechanism. Return mappings from the bodies and joints of the childmechanism to the bodies and joints that were added to mechanism.\n\nEssentially replaces the root body of a copy of childmechanism with parentbody (which belongs to mechanism).\n\nNote: gravitational acceleration for childmechanism is ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.bias_acceleration",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.bias_acceleration",
    "category": "function",
    "text": "bias_acceleration(joint, q, v)\n\n\nReturn the acceleration of the joint\'s successor with respect to its predecessor in configuration q and at velocity v, when the joint acceleration dotv is zero.\n\n\n\n\n\nbias_acceleration(state, joint)\nbias_acceleration(state, joint, safe)\n\n\nReturn the bias acceleration across the given joint, i.e. the spatial acceleration of frame_after(joint) with respect to frame_before(joint), expressed in the root frame of the mechanism when all joint accelerations are zero.\n\n\n\n\n\nbias_acceleration(state, body)\nbias_acceleration(state, body, safe)\n\n\nReturn the bias acceleration of the given body with respect to the world, i.e. the spatial acceleration of default_frame(body) with respect to the root frame of the mechanism, expressed in the root frame, when all joint accelerations are zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.bodies",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.bodies",
    "category": "function",
    "text": "bodies(mechanism)\n\n\nReturn the RigidBodys that are part of the Mechanism as an iterable collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.body_fixed_frame_definition",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.body_fixed_frame_definition",
    "category": "function",
    "text": "body_fixed_frame_definition(mechanism, frame)\n\n\nReturn the definition of body-fixed frame frame, i.e., the Transform3D from frame to the default frame of the body to which it is attached.\n\nNote: this function is linear in the number of bodies and is not meant to be called in tight loops.\n\nSee also default_frame, frame_definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.body_fixed_frame_to_body",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.body_fixed_frame_to_body",
    "category": "function",
    "text": "body_fixed_frame_to_body(mechanism, frame)\n\n\nReturn the RigidBody to which frame is attached.\n\nNote: this function is linear in the number of bodies and is not meant to be called in tight loops.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.center_of_mass",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.center_of_mass",
    "category": "function",
    "text": "center_of_mass(inertia)\n\n\nReturn the center of mass of the SpatialInertia as a Point3D.\n\n\n\n\n\ncenter_of_mass(state, itr)\n\n\nCompute the center of mass of an iterable subset of a Mechanism\'s bodies in the given state. Ignores the root body of the mechanism.\n\n\n\n\n\ncenter_of_mass(state)\n\n\nCompute the center of mass of the whole Mechanism in the given state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.change_default_frame!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.change_default_frame!",
    "category": "function",
    "text": "change_default_frame!(body, new_default_frame)\n\n\nChange the default frame of body to frame (which should already be among body\'s frame definitions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.configuration",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.configuration",
    "category": "function",
    "text": "configuration(state, joint)\n\n\nReturn the part of the configuration vector q associated with joint.\n\n\n\n\n\nconfiguration(state)\n\n\nReturn the configuration vector q.\n\nNote that this returns a reference to the underlying data in state. The user is responsible for calling setdirty! after modifying this vector to ensure that dependent cache variables are invalidated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.configuration_derivative_to_velocity!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.configuration_derivative_to_velocity!",
    "category": "function",
    "text": "configuration_derivative_to_velocity!(v, joint, q, q̇)\n\n\nCompute joint velocity vector v given the joint configuration vector q and its time derivative dotq (in place).\n\nNote that this mapping is linear.\n\nSee also velocity_to_configuration_derivative!, the inverse mapping.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.configuration_derivative_to_velocity_adjoint!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.configuration_derivative_to_velocity_adjoint!",
    "category": "function",
    "text": "configuration_derivative_to_velocity_adjoint!(fq, joint, q, fv)\n\n\nGiven  a linear function\n\nf(v) = langle f_v v rangle\n\nwhere v is the joint velocity vector, return a vector f_q such that\n\nlangle f_v v rangle = langle f_q dotq(v) rangle\n\nNote: since v is a linear function of dotq (see configuration_derivative_to_velocity!), we can write v = J_dotq rightarrow v dotq, so\n\nlangle f_v v rangle = langle f_v J_dotq rightarrow v dotq rangle = langle J_dotq rightarrow v^* f_v dotq rangle\n\nso f_q = J_dotq rightarrow v^* f_v.\n\nTo compute J_dotq rightarrow v see configuration_derivative_to_velocity_jacobian.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.configuration_derivative_to_velocity_jacobian",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.configuration_derivative_to_velocity_jacobian",
    "category": "function",
    "text": "configuration_derivative_to_velocity_jacobian(joint, q)\n\n\nCompute the jacobian J_dotq rightarrow v which maps joint configuration derivative to velocity for the given joint:\n\nv = J_dotq rightarrow v dotq\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.configuration_index_to_joint_id",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.configuration_index_to_joint_id",
    "category": "function",
    "text": "configuration_index_to_joint_id(state, qindex)\n\n\nReturn the JointID of the joint associated with the given index into the configuration vector q.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.configuration_range",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.configuration_range",
    "category": "function",
    "text": "configuration_range(state, joint)\n\n\nReturn the range of indices into the joint configuration vector q corresponding to joint joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.constraint_range",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.constraint_range",
    "category": "function",
    "text": "constraint_range(state, joint)\n\n\nReturn the range of row indices into the constraint Jacobian corresponding to joint joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.constraint_wrench_subspace",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.constraint_wrench_subspace",
    "category": "function",
    "text": "constraint_wrench_subspace(joint, joint_transform)\n\n\nReturn a basis for the constraint wrench subspace of the joint, where joint_transform is the transform from the frame after the joint to the frame before the joint.\n\nThe constraint wrench subspace is a 6 times (6 - k) matrix, where k is the dimension of the velocity vector v, that maps a vector of Lagrange multipliers lambda to the constraint wrench exerted across the joint onto its successor.\n\nThe constraint wrench subspace is orthogonal to the motion subspace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.contact_points",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.contact_points",
    "category": "function",
    "text": "contact_points(body)\n\n\nReturn the contact points attached to the body as an ordered collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.crb_inertia",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.crb_inertia",
    "category": "function",
    "text": "crb_inertia(state, body)\ncrb_inertia(state, body, safe)\n\n\nReturn the composite rigid body inertia body expressed in the root frame of the mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.default_constraint_stabilization_gains",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.default_constraint_stabilization_gains",
    "category": "function",
    "text": "Return the default Baumgarte constraint stabilization gains. These gains result in critical damping, and correspond to T_stab = 01 in Featherstone (2008), section 8.3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.default_frame",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.default_frame",
    "category": "function",
    "text": "default_frame(body)\n\n\nThe CartesianFrame3D with respect to which all other frames attached to body are defined.\n\nSee frame_definitions(body), frame_definition(body, frame).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.dynamics!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.dynamics!",
    "category": "function",
    "text": "dynamics!(result, state)\ndynamics!(result, state, torques)\ndynamics!(result, state, torques, externalwrenches; stabilization_gains)\n\n\nCompute the joint acceleration vector dotv and Lagrange multipliers lambda that satisfy the joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau - K(q)^T lambda\n\nand the constraint equations\n\nK(q) dotv = -k\n\ngiven joint configuration vector q, joint velocity vector v, and (optionally) joint torques tau and external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\nThe stabilization_gains keyword argument can be used to set PD gains for Baumgarte stabilization, which can be used to prevent separation of non-tree (loop) joints. See Featherstone (2008), section 8.3 for more information. There are several options for specifying gains:\n\nnothing can be used to completely disable Baumgarte stabilization.\nGains can be specifed on a per-joint basis using any AbstractDict{JointID, <:RigidBodyDynamics.PDControl.SE3PDGains}, which maps the JointID for the non-tree joints of the mechanism to the gains for that joint.\nAs a special case of the second option, the same gains can be used for all joints by passing in a RigidBodyDynamics.CustomCollections.ConstDict{JointID}.\n\nThe default_constraint_stabilization_gains function is called to produce the default gains, which use the last option.\n\n\n\n\n\ndynamics!(ẋ, result, state, x)\ndynamics!(ẋ, result, state, x, torques)\ndynamics!(ẋ, result, state, x, torques, externalwrenches; stabilization_gains)\n\n\nConvenience function for use with standard ODE integrators that takes a Vector argument\n\nx = left(beginarrayc\nq\nv\nendarrayright)\n\nand returns a Vector dotx.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.dynamics_bias",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.dynamics_bias",
    "category": "function",
    "text": "dynamics_bias(state)\ndynamics_bias(state, externalwrenches)\n\n\nCompute the \'dynamics bias term\', i.e. the term\n\nc(q v w_textext)\n\nin the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.dynamics_bias!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.dynamics_bias!",
    "category": "function",
    "text": "dynamics_bias!(torques, biasaccelerations, wrenches, state)\ndynamics_bias!(torques, biasaccelerations, wrenches, state, externalwrenches)\n\n\nCompute the \'dynamics bias term\', i.e. the term\n\nc(q v w_textext)\n\nin the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.effort_bounds",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.effort_bounds",
    "category": "function",
    "text": "effort_bounds(joint)\n\n\nReturn a Vector{Bounds{T}} giving the upper and lower bounds of the effort for joint\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.fixed_transform",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.fixed_transform",
    "category": "function",
    "text": "fixed_transform(body, from, to)\n\n\nReturn the transform from CartesianFrame3D from to to, both of which are rigidly attached to body.\n\n\n\n\n\nfixed_transform(mechanism, from, to)\n\n\nReturn the transform from CartesianFrame3D from to to, both of which are rigidly attached to the same RigidBody.\n\nNote: this function is linear in the number of bodies and is not meant to be called in tight loops.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.frame_definition",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.frame_definition",
    "category": "function",
    "text": "frame_definition(body, frame)\n\n\nReturn the Transform3D defining frame (attached to body) with respect to default_frame(body).\n\nThrows an error if frame is not attached to body.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.frame_definitions",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.frame_definitions",
    "category": "function",
    "text": "frame_definitions(body)\n\nReturn the list of homogeneous transforms (Transform3Ds) that define the coordinate systems attached to body with respect to a single common frame (default_frame(body)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.geometric_jacobian",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.geometric_jacobian",
    "category": "function",
    "text": "geometric_jacobian(state, path)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\nThe Jacobian is computed in the Mechanism\'s root frame.\n\nSee geometric_jacobian!(out, state, path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.geometric_jacobian!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.geometric_jacobian!",
    "category": "function",
    "text": "geometric_jacobian!(jac, state, path, transformfun)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\ntransformfun is a callable that may be used to transform the individual motion subspaces of each of the joints to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\ngeometric_jacobian!(out, state, path, root_to_desired)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\nroot_to_desired is the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\ngeometric_jacobian!(out, state, path)\n\n\nCompute a geometric Jacobian (also known as a basic, or spatial Jacobian) associated with a directed path in the Mechanism\'s spanning tree, (a collection of Joints and traversal directions) in the given state.\n\nA geometric Jacobian maps the Mechanism\'s joint velocity vector v to the twist of the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nSee also path, GeometricJacobian, Twist.\n\nSee geometric_jacobian!(out, state, path, root_to_desired). Uses state to compute the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.global_coordinates!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.global_coordinates!",
    "category": "function",
    "text": "global_coordinates!(q, joint, q0, ϕ)\n\n\nCompute the global parameterization of the joint\'s configuration, q, given a \'base\' orientation q_0 and a vector of local coordinates ϕ centered around q_0.\n\nSee also local_coordinates!.\n\n\n\n\n\nglobal_coordinates!(state, q0, ϕ)\n\n\nConvert local coordinates phi centered around q_0 to (global) configuration vector q.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.gravitational_potential_energy",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.gravitational_potential_energy",
    "category": "function",
    "text": "gravitational_potential_energy(state, body)\ngravitational_potential_energy(state, body, safe)\n\n\nReturn the gravitational potential energy in the given state, computed as the negation of the dot product of the gravitational force and the center of mass expressed in the Mechanism\'s root frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.has_defined_inertia",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.has_defined_inertia",
    "category": "function",
    "text": "has_defined_inertia(b)\n\n\nWhether the body has a defined inertia.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.has_fixed_subspaces",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.has_fixed_subspaces",
    "category": "function",
    "text": "has_fixed_subspaces(joint)\n\n\nWhether the joint\'s motion subspace and constraint wrench subspace depend on q.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.in_joints",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.in_joints",
    "category": "function",
    "text": "in_joints(body, mechanism)\n\n\nReturn the joints that have body as their successor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.inverse_dynamics",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.inverse_dynamics",
    "category": "function",
    "text": "inverse_dynamics(state, v̇)\ninverse_dynamics(state, v̇, externalwrenches)\n\n\nDo inverse dynamics, i.e. compute tau in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\nThis method implements the recursive Newton-Euler algorithm.\n\nCurrently doesn\'t support Mechanisms with cycles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.inverse_dynamics!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.inverse_dynamics!",
    "category": "function",
    "text": "inverse_dynamics!(torquesout, jointwrenchesout, accelerations, state, v̇)\ninverse_dynamics!(torquesout, jointwrenchesout, accelerations, state, v̇, externalwrenches)\n\n\nDo inverse dynamics, i.e. compute tau in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\ngiven joint configuration vector q, joint velocity vector v, joint acceleration vector dotv and (optionally) external wrenches w_textext.\n\nThe externalwrenches argument can be used to specify additional wrenches that act on the Mechanism\'s bodies.\n\nThis method implements the recursive Newton-Euler algorithm.\n\nCurrently doesn\'t support Mechanisms with cycles.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.is_fixed_to_body",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.is_fixed_to_body",
    "category": "function",
    "text": "is_fixed_to_body(body, frame)\n\n\nWhether frame is attached to body (i.e. whether it is among frame_definitions(body)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.isfloating",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.isfloating",
    "category": "function",
    "text": "isfloating(joint)\n\n\nWhether the joint is a floating joint, i.e., whether it imposes no constraints on the relative motions of its successor and predecessor bodies.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.joint_spatial_acceleration",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.joint_spatial_acceleration",
    "category": "function",
    "text": "joint_spatial_acceleration(joint, q, v, vd)\n\n\nReturn the spatial acceleration of joint\'s  successor with respect to its predecessor, expressed in the frame after the joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.joint_to_parent",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.joint_to_parent",
    "category": "function",
    "text": "joint_to_parent(body, mechanism)\n\n\nReturn the joint that is part of the mechanism\'s kinematic tree and has body as its successor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.joint_torque!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.joint_torque!",
    "category": "function",
    "text": "joint_torque!(τ, joint, q, joint_wrench)\n\n\nGiven the wrench exerted across the joint on the joint\'s successor, compute the vector of joint torques tau (in place), in configuration q.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.joint_transform",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.joint_transform",
    "category": "function",
    "text": "joint_transform(joint, q)\n\n\nReturn a Transform3D representing the homogeneous transform from the frame after the joint to the frame before the joint for joint configuration vector q.\n\n\n\n\n\njoint_transform(state, joint)\njoint_transform(state, joint, safe)\n\n\nReturn the joint transform for the given joint, i.e. the transform from frame_after(joint) to frame_before(joint).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.joint_twist",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.joint_twist",
    "category": "function",
    "text": "joint_twist(joint, q, v)\n\n\nReturn the twist of joint\'s  successor with respect to its predecessor, expressed in the frame after the joint.\n\nNote that this is the same as Twist(motion_subspace(joint, q), v).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.joints",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.joints",
    "category": "function",
    "text": "joints(mechanism)\n\n\nReturn the Joints that are part of the Mechanism as an iterable collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.joints_to_children",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.joints_to_children",
    "category": "function",
    "text": "joints_to_children(body, mechanism)\n\n\nReturn the joints that are part of the mechanism\'s kinematic tree and have body as their predecessor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.kinetic_energy",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.kinetic_energy",
    "category": "function",
    "text": "kinetic_energy(inertia, twist)\n\n\nCompute the kinetic energy of a body with spatial inertia I, which has twist T with respect to an inertial frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.local_coordinates!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.local_coordinates!",
    "category": "function",
    "text": "local_coordinates!(ϕ, ϕ̇, joint, q0, q, v)\n\n\nCompute a vector of local coordinates phi around configuration q_0 corresponding to configuration q (in place). Also compute the time derivative dotphi of phi given the joint velocity vector v.\n\nThe local coordinate vector phi must be zero if and only if q = q_0.\n\nFor revolute or prismatic joint types, the local coordinates can just be phi = q - q_0, but for joint types with configuration vectors that are restricted to a manifold (e.g. when unit quaternions are used to represent orientation), elementwise subtraction may not make sense. For such joints, exponential coordinates could be used as the local coordinate vector phi.\n\nSee also global_coordinates!.\n\n\n\n\n\nlocal_coordinates!(ϕ, ϕd, state, q0)\n\n\nCompute local coordinates phi centered around (global) configuration vector q_0, as well as their time derivatives dotphi.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.log_with_time_derivative",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.log_with_time_derivative",
    "category": "function",
    "text": "log_with_time_derivative(t, twist)\n\n\nCompute exponential coordinates as well as their time derivatives in one shot. This mainly exists because ForwardDiff won\'t work at the singularity of log. It is also ~50% faster than ForwardDiff in this case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.mass",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.mass",
    "category": "function",
    "text": "mass(m)\n\n\nReturn the total mass of the Mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.mass_matrix",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.mass_matrix",
    "category": "function",
    "text": "Compute the joint-space mass matrix (also known as the inertia matrix) of the Mechanism in the given state, i.e., the matrix M(q) in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\nThis method implements the composite rigid body algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.mass_matrix!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.mass_matrix!",
    "category": "function",
    "text": "mass_matrix!(M, state)\n\n\nCompute the joint-space mass matrix (also known as the inertia matrix) of the Mechanism in the given state, i.e., the matrix M(q) in the unconstrained joint-space equations of motion\n\nM(q) dotv + c(q v w_textext) = tau\n\nThis method implements the composite rigid body algorithm.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\nThe out argument must be an n_v times n_v lower triangular Symmetric matrix, where n_v is the dimension of the Mechanism\'s joint velocity vector v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.maximal_coordinates",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.maximal_coordinates",
    "category": "function",
    "text": "maximal_coordinates(mechanism)\n\n\nReturn a dynamically equivalent Mechanism, but with a flat tree structure with all bodies attached to the root body with a quaternion floating joint, and with the \'tree edge\' joints of the input Mechanism transformed into non-tree edge joints (a constraint enforced using Lagrange multipliers in dynamics!). In addition, return:\n\na mapping from bodies in the maximal-coordinate Mechanism to their floating joints.\na mapping from bodies in the input Mechanism to bodies in the returned Mechanism\na mapping from joints in the input Mechanism to joints in the returned Mechanism\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.momentum_matrix",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.momentum_matrix",
    "category": "function",
    "text": "momentum_matrix(state)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nSee momentum_matrix!(out, state).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.momentum_matrix!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.momentum_matrix!",
    "category": "function",
    "text": "momentum_matrix!(mat, state, transformfun)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nThe out argument must be a mutable MomentumMatrix with as many columns as the dimension of the Mechanism\'s joint velocity vector v.\n\ntransformfun is a callable that may be used to transform the individual momentum matrix blocks associated with each of the joints to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\nmomentum_matrix!(mat, state, root_to_desired)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nThe out argument must be a mutable MomentumMatrix with as many columns as the dimension of the Mechanism\'s joint velocity vector v.\n\nroot_to_desired is the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\nmomentum_matrix!(out, state)\n\n\nCompute the momentum matrix A(q) of the Mechanism in the given state.\n\nThe momentum matrix maps the Mechanism\'s joint velocity vector v to its total momentum.\n\nSee also MomentumMatrix.\n\nThe out argument must be a mutable MomentumMatrix with as many columns as the dimension of the Mechanism\'s joint velocity vector v.\n\nSee momentum_matrix!(out, state, root_to_desired). Uses state to compute the transform from the Mechanism\'s root frame to the frame in which out is expressed.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.motion_subspace",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.motion_subspace",
    "category": "function",
    "text": "motion_subspace(joint, q)\n\n\nReturn a basis for the motion subspace of the joint in configuration q.\n\nThe motion subspace basis is a 6 times  k matrix, where k is the dimension of the velocity vector v, that maps v to the twist of the joint\'s successor with respect to its predecessor. The returned motion subspace is expressed in the frame after the joint, which is attached to the joint\'s successor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.newton_euler",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.newton_euler",
    "category": "function",
    "text": "newton_euler(inertia, spatial_accel, twist)\n\n\nApply the Newton-Euler equations to find the external wrench required to make a body with spatial inertia I, which has twist T with respect to an inertial frame, achieve spatial acceleration dotT.\n\nThis wrench is also equal to the rate of change of momentum of the body.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.non_tree_joints",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.non_tree_joints",
    "category": "function",
    "text": "non_tree_joints(mechanism)\n\n\nReturn the Joints that are not part of the Mechanism\'s spanning tree as an iterable collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.normalize_configuration!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.normalize_configuration!",
    "category": "function",
    "text": "normalize_configuration!(q, joint)\n\n\nRenormalize the configuration vector q associated with joint so that it lies on the joint\'s configuration manifold.\n\n\n\n\n\nnormalize_configuration!(state)\n\n\nProject the configuration vector q onto the configuration manifold.\n\nFor example:\n\nfor a part of q corresponding to a revolute joint, this method is a no-op;\nfor a part of q corresponding to a spherical joint that uses a unit quaternion\n\nto parameterize the orientation of its successor with respect to its predecessor, normalize_configuration! will renormalize the quaternion so that it is indeed of unit length.\n\nwarning: Warning\n\n\nThis method does not ensure that the configuration or velocity satisfy joint configuration or velocity limits/bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.num_additional_states",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.num_additional_states",
    "category": "function",
    "text": "num_additional_states(mechanism)\n\n\nReturn the dimension of the vector of additional states s (used for stateful contact models).\n\n\n\n\n\nnum_additional_states(state)\n\n\nReturn the length of the vector of additional states s (currently used for stateful contact models).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.num_constraints",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.num_constraints",
    "category": "function",
    "text": "num_constraints(joint)\n\n\nReturn the number of constraints imposed on the relative twist between the joint\'s predecessor and successor\n\n\n\n\n\nnum_constraints(mechanism)\n\n\nReturn the number of constraints imposed by the mechanism\'s non-tree joints (i.e., the number of rows of the constraint Jacobian).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.num_positions",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.num_positions",
    "category": "function",
    "text": "num_positions(joint)\n\n\nReturn the length of the configuration vector of joint.\n\n\n\n\n\nnum_positions(mechanism)\n\n\nReturn the dimension of the joint configuration vector q.\n\n\n\n\n\nnum_positions(state)\n\n\nReturn the length of the joint configuration vector q.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.num_velocities",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.num_velocities",
    "category": "function",
    "text": "num_velocities(joint)\n\n\nReturn the length of the velocity vector of joint.\n\n\n\n\n\nnum_velocities(mechanism)\n\n\nReturn the dimension of the joint velocity vector v.\n\n\n\n\n\nnum_velocities(state)\n\n\nReturn the length of the joint velocity vector v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.out_joints",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.out_joints",
    "category": "function",
    "text": "out_joints(body, mechanism)\n\n\nReturn the joints that have body as their predecessor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.URDF.parse_urdf",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.URDF.parse_urdf",
    "category": "function",
    "text": "parse_urdf(filename; scalar_type, floating, floating_joint_type, revolute_joint_type, root_joint_type, remove_fixed_tree_joints, gravity)\n\n\nCreate a Mechanism by parsing a URDF file.\n\nKeyword arguments:\n\nscalar_type: the scalar type used to store the Mechanism\'s kinematic and inertial properties. Default: Float64.\nfloating: whether to use a floating joint as the root joint. Default: false.\nfloating_joint_type: what JointType to use for floating joints. Default: QuaternionFloating{scalar_type}.\nrevolute_joint_type: what JointType to use for revolute joints. Default: Revolute{scalar_type}.\nroot_joint_type: the joint type used to connect the parsed Mechanism to the world. Default: floating_joint_type() if floating, Fixed{scalar_type}() otherwise.\nremove_fixed_tree_joints: whether to remove any fixed joints present in the kinematic tree using remove_fixed_tree_joints!. Default: true.\ngravity: gravitational acceleration as a 3-vector expressed in the Mechanism\'s root frame. Default: [0.0, 0.0, -9.81].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.path",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.path",
    "category": "function",
    "text": "path(mechanism, from, to)\n\n\nReturn the path from rigid body from to to along edges of the Mechanism\'s kinematic tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.point_acceleration",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.point_acceleration",
    "category": "function",
    "text": "point_acceleration(twist, accel, point)\n\n\nGiven the twist dotT_j^ki of frame j with respect to frame i, expressed in frame k and its time derivative (a spatial acceleration), as well as the location of a point fixed in frame j, also expressed in frame k, compute the acceleration of the point relative to frame i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.point_jacobian",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.point_jacobian",
    "category": "function",
    "text": "point_jacobian(state, path, point)\n\n\nCompute the Jacobian mapping the Mechanism\'s joint velocity vector v to the velocity of a point fixed to the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.point_jacobian!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.point_jacobian!",
    "category": "function",
    "text": "point_jacobian!(out, state, path, point)\n\n\nCompute the Jacobian mapping the Mechanism\'s joint velocity vector v to the velocity of a point fixed to the target of the joint path (the body succeeding the last joint in the path) with respect to the source of the joint path (the body preceding the first joint in the path).\n\nUses state to compute the transform from the Mechanism\'s root frame to the frame in which out is expressed if necessary.\n\nThis method does its computation in place, performing no dynamic memory allocation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.point_velocity",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.point_velocity",
    "category": "function",
    "text": "point_velocity(twist, point)\n\n\nGiven the twist T_j^ki of frame j with respect to frame i, expressed in frame k, and the location of a point fixed in frame j, also expressed in frame k, compute the velocity of the point relative to frame i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.position_bounds",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.position_bounds",
    "category": "function",
    "text": "position_bounds(joint)\n\n\nReturn a Vector{Bounds{T}} giving the upper and lower bounds of the configuration for joint\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.predecessor",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.predecessor",
    "category": "function",
    "text": "predecessor(joint, mechanism)\n\n\nReturn the body \'before\' the joint, i.e. the \'tail\' of the joint interpreted as an arrow in the Mechanism\'s kinematic graph.\n\nSee Joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.principal_value!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.principal_value!",
    "category": "function",
    "text": "principal_value!(q, joint)\n\n\nApplies the principalvalue functions from [Rotations.jl](https://github.com/FugroRoames/Rotations.jl/blob/d080990517f89b56c37962ad53a7fd24bd94b9f7/src/principalvalue.jl) to joint angles. This currently only applies to SPQuatFloating joints.\n\n\n\n\n\nprincipal_value!(state)\n\n\nApplies the principalvalue functions from [Rotations.jl](https://github.com/FugroRoames/Rotations.jl/blob/d080990517f89b56c37962ad53a7fd24bd94b9f7/src/principalvalue.jl) to joint angles. This currently only applies to SPQuatFloating joints.\n\nFor example:\n\nfor a part of q corresponding to a revolute joint, this method is a no-op;\nfor a part of q corresponding to a SPQuatFloating joint this function applies\n\n`principal_value the orientation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.rand_chain_mechanism",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.rand_chain_mechanism",
    "category": "function",
    "text": "rand_chain_mechanism(?, jointtypes)\n\n\nCreate a random chain Mechanism with the given joint types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.rand_configuration!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.rand_configuration!",
    "category": "function",
    "text": "rand_configuration!(q, joint)\n\n\nSet q to a random configuration. The distribution used depends on the joint type.\n\n\n\n\n\nrand_configuration!(state)\n\n\nRandomize the configuration vector q. The distribution depends on the particular joint types present in the associated Mechanism. The resulting q is guaranteed to be on the Mechanism\'s configuration manifold. Invalidates cache variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.rand_floating_tree_mechanism",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.rand_floating_tree_mechanism",
    "category": "function",
    "text": "Create a random tree Mechanism, with a quaternion floating joint as the first joint (between the root body and the first non-root body).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.rand_tree_mechanism",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.rand_tree_mechanism",
    "category": "function",
    "text": "rand_tree_mechanism(?, parentselector, jointtypes)\n\n\nCreate a random tree Mechanism with the given joint types. Each new body is attached to a parent selected using the parentselector function.\n\n\n\n\n\nCreate a random tree Mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.rand_velocity!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.rand_velocity!",
    "category": "function",
    "text": "rand_velocity!(state)\n\n\nRandomize the velocity vector v. Invalidates cache variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.rebuild_spanning_tree!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.rebuild_spanning_tree!",
    "category": "function",
    "text": "rebuild_spanning_tree!(mechanism)\nrebuild_spanning_tree!(mechanism, flipped_joint_map; next_edge)\n\n\nReconstruct the mechanism\'s spanning tree.\n\nOptionally, the flipped_joint_map keyword argument can be used to pass in an associative container that will be populated with a mapping from original joints to flipped joints, if the rebuilding process required the polarity of some joints to be flipped.\n\nAlso optionally, next_edge can be used to select which joints should become part of the new spanning tree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.relative_transform",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.relative_transform",
    "category": "function",
    "text": "relative_transform(state, from, to)\n\n\nReturn the homogeneous transform from from to to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.relative_twist",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.relative_twist",
    "category": "function",
    "text": "relative_twist(state, body, base)\n\n\nReturn the twist of body with respect to base, expressed in the Mechanism\'s root frame.\n\n\n\n\n\nrelative_twist(state, body_frame, base_frame)\n\n\nReturn the twist of body_frame with respect to base_frame, expressed in the Mechanism\'s root frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.remove_fixed_tree_joints!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.remove_fixed_tree_joints!",
    "category": "function",
    "text": "remove_fixed_tree_joints!(mechanism)\n\n\nRemove any fixed joints present as tree edges in mechanism by merging the rigid bodies that these fixed joints join together into bodies with equivalent inertial properties. Return the fixed joints that were removed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.remove_joint!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.remove_joint!",
    "category": "function",
    "text": "remove_joint!(mechanism, joint; flipped_joint_map, spanning_tree_next_edge)\n\n\nRemove a joint from the mechanism. Rebuilds the spanning tree if the joint is part of the current spanning tree.\n\nOptionally, the flipped_joint_map keyword argument can be used to pass in an associative container that will be populated with a mapping from original joints to flipped joints, if removing joint requires rebuilding the spanning tree of mechanism and the polarity of some joints needed to be changed in the process.\n\nAlso optionally, spanning_tree_next_edge can be used to select which joints should become part of the new spanning tree, if rebuilding the spanning tree is required.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.reset_contact_state!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.reset_contact_state!",
    "category": "function",
    "text": "reset_contact_state!(state)\n\n\nReset all contact state variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.root_body",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.root_body",
    "category": "function",
    "text": "root_body(mechanism)\n\n\nReturn the root (stationary \'world\') body of the Mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.root_frame",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.root_frame",
    "category": "function",
    "text": "root_frame(mechanism)\n\n\nReturn the default frame of the root body.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.set_additional_state!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.set_additional_state!",
    "category": "function",
    "text": "set_additional_state!(state, s)\n\n\nSet the vector of additional states s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.set_configuration!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.set_configuration!",
    "category": "function",
    "text": "set_configuration!(state, joint, config)\n\n\nSet the part of the configuration vector associated with joint. Invalidates cache variables.\n\n\n\n\n\nset_configuration!(state, q)\n\n\nSet the configuration vector q. Invalidates cache variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.set_velocity!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.set_velocity!",
    "category": "function",
    "text": "set_velocity!(state, joint, vel)\n\n\nSet the part of the velocity vector associated with joint. Invalidates cache variables.\n\n\n\n\n\nset_velocity!(state, v)\n\n\nSet the velocity vector v. Invalidates cache variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.setdirty!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.setdirty!",
    "category": "function",
    "text": "setdirty!(state)\n\n\nInvalidate all cache variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.simulate",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.simulate",
    "category": "function",
    "text": "simulate(state0, final_time)\nsimulate(state0, final_time, control!; Δt, stabilization_gains)\n\n\nBasic Mechanism simulation: integrate the state from time 0 to final_time starting from the initial state state0. Return a Vector of times, as well as Vectors of configuration vectors and velocity vectors at these times.\n\nOptionally, a function (or other callable) can be passed in as the third argument (control!). control! will be called at each time step of the simulation and allows you to specify joint torques given the time and the state of the Mechanism. It should look like this:\n\nfunction control!(torques::AbstractVector, t, state::MechanismState)\n    rand!(torques) # for example\nend\n\nThe integration time step can be specified using the Δt keyword argument (defaults to 1e-4).\n\nThe stabilization_gains keyword argument can be used to set PD gains for Baumgarte stabilization, which can be used to prevent separation of non-tree (loop) joints. See Featherstone (2008), section 8.3 for more information. There are several options for specifying gains:\n\nnothing can be used to completely disable Baumgarte stabilization.\nGains can be specifed on a per-joint basis using any AbstractDict{JointID, <:RigidBodyDynamics.PDControl.SE3PDGains}, which maps the JointID for the non-tree joints of the mechanism to the gains for that joint.\nAs a special case of the second option, the same gains can be used for all joints by passing in a RigidBodyDynamics.CustomCollections.ConstDict{JointID}.\n\nThe default_constraint_stabilization_gains function is called to produce the default gains, which use the last option.\n\nUses MuntheKaasIntegrator. See RigidBodyDynamics.OdeIntegrators.MuntheKaasIntegrator for a lower level interface with more options.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.spatial_inertia",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.spatial_inertia",
    "category": "function",
    "text": "Return the spatial inertia of the body. If the inertia is undefined, calling this method will result in an error.\n\n\n\n\n\nspatial_inertia(state, body)\nspatial_inertia(state, body, safe)\n\n\nReturn the spatial inertia of body expressed in the root frame of the mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.spatial_inertia!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.spatial_inertia!",
    "category": "function",
    "text": "spatial_inertia!(body, inertia)\n\n\nSet the spatial inertia of the body.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.submechanism",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.submechanism",
    "category": "function",
    "text": "submechanism(mechanism, submechanismroot)\n\n\nCreate a new Mechanism from the subtree of mechanism rooted at submechanismroot.\n\nAlso return mappings from the bodies and joints of the input mechanism to the bodies and joints of the submechanism.\n\nAny non-tree joint in mechanism will appear in the returned Mechanism if and only if both its successor and its predecessor are part of the subtree.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.subtree_mass",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.subtree_mass",
    "category": "function",
    "text": "subtree_mass(base, mechanism)\n\n\nReturn the mass of a subtree of a Mechanism, rooted at base (including the mass of base).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.successor",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.successor",
    "category": "function",
    "text": "successor(joint, mechanism)\n\n\nReturn the body \'after\' the joint, i.e. the \'head\' of the joint interpreted as an arrow in the Mechanism\'s kinematic graph.\n\nSee Joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.supports",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.supports",
    "category": "function",
    "text": "supports(joint, body, state)\n\n\nReturn whether joint supports body, i.e., joint is a tree joint on the path between body and the root.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.Spatial.transform",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.Spatial.transform",
    "category": "function",
    "text": "transform(x, t)\n\n\nReturn x transformed to CartesianFrame3D t.from.\n\n\n\n\n\ntransform(x, t)\n\n\nReturn x transformed to CartesianFrame3D t.from.\n\n\n\n\n\ntransform(jac, tf)\n\n\nTransform the GeometricJacobian to a different frame.\n\n\n\n\n\ntransform(twist, tf)\n\n\nTransform the Twist to a different frame.\n\n\n\n\n\ntransform(accel, old_to_new, twist_of_current_wrt_new, twist_of_body_wrt_base)\n\n\nTransform the SpatialAcceleration to a different frame.\n\nThe transformation rule is obtained by differentiating the transformation rule for twists.\n\n\n\n\n\ntransform(f, tf)\n\n\nTransform the Momentum to a different frame.\n\n\n\n\n\ntransform(f, tf)\n\n\nTransform the Wrench to a different frame.\n\n\n\n\n\ntransform(inertia, t)\n\n\nTransform the SpatialInertia to a different frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.transform_to_root",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.transform_to_root",
    "category": "function",
    "text": "transform_to_root(state, body)\ntransform_to_root(state, body, safe)\n\n\nReturn the transform from default_frame(body) to the root frame of the mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.tree_joints",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.tree_joints",
    "category": "function",
    "text": "tree_joints(mechanism)\n\n\nReturn the Joints that are part of the Mechanism\'s spanning tree as an iterable collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.twist",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.twist",
    "category": "function",
    "text": "twist(state, joint)\ntwist(state, joint, safe)\n\n\nReturn the joint twist for the given joint, i.e. the twist of frame_after(joint) with respect to frame_before(joint), expressed in the root frame of the mechanism.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.twist_wrt_world",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.twist_wrt_world",
    "category": "function",
    "text": "twist_wrt_world(state, body)\ntwist_wrt_world(state, body, safe)\n\n\nReturn the twist of default_frame(body) with respect to the root frame of the mechanism, expressed in the root frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.velocity",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.velocity",
    "category": "function",
    "text": "velocity(state, joint)\n\n\nReturn the part of the velocity vector v associated with joint.\n\n\n\n\n\nvelocity(state)\n\n\nReturn the velocity vector v.\n\nNote that this function returns a read-write reference to a field in state. The user is responsible for calling setdirty! after modifying this vector to ensure that dependent cache variables are invalidated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.velocity_bounds",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.velocity_bounds",
    "category": "function",
    "text": "velocity_bounds(joint)\n\n\nReturn a Vector{Bounds{T}} giving the upper and lower bounds of the velocity for joint\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.velocity_index_to_joint_id",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.velocity_index_to_joint_id",
    "category": "function",
    "text": "velocity_index_to_joint_id(state, qindex)\n\n\nReturn the JointID of the joint associated with the given index into the velocity vector v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.velocity_range",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.velocity_range",
    "category": "function",
    "text": "velocity_range(state, joint)\n\n\nReturn the range of indices into the joint velocity vector v corresponding to joint joint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.velocity_to_configuration_derivative!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.velocity_to_configuration_derivative!",
    "category": "function",
    "text": "velocity_to_configuration_derivative!(q̇, joint, q, v)\n\n\nCompute the time derivative dotq of the joint configuration vector q given q and the joint velocity vector v (in place).\n\nNote that this mapping is linear.\n\nSee also configuration_derivative_to_velocity!, the inverse mapping.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.velocity_to_configuration_derivative_jacobian",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.velocity_to_configuration_derivative_jacobian",
    "category": "function",
    "text": "velocity_to_configuration_derivative_jacobian(joint, q)\n\n\nCompute the jacobian J_v rightarrow dotq which maps joint velocity to configuration derivative for the given joint:\n\ndotq = J_v rightarrow dotq v\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.URDF.write_urdf",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.URDF.write_urdf",
    "category": "function",
    "text": "Serialize a Mechanism to the URDF file format.\n\nLimitations:\n\nfor <link> tags, only the <inertial> tag is written; there is no support for <visual> and <collision> tags.\nfor <joint> tags, only the <origin>, <parent>, <child>, and <limit> tags are written. There is no support for the <calibration> and <safety_controller> tags.\n\nThese limitations are simply due to the fact that Mechanisms do not store the required information to write these tags.\n\nKeyword arguments:\n\nrobot_name: used to set the name attribute of the root <robot> tag in the URDF. Default: nothing (name attribute will not be set).\ninclude_root: whether to include root_body(mechanism) in the URDF. If false, joints with root_body(mechanism) as their predecessor will also be omitted. Default: true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.zero!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.zero!",
    "category": "function",
    "text": "zero!(state)\n\n\nZero both the configuration and velocity. Invalidates cache variables.\n\nSee zero_configuration!, zero_velocity!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.zero_configuration!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.zero_configuration!",
    "category": "function",
    "text": "zero_configuration!(q, joint)\n\n\nSet q to the \'zero\' configuration, corresponding to an identity joint transform.\n\n\n\n\n\nzero_configuration!(state)\n\n\n\'Zero\' the configuration vector q. Invalidates cache variables.\n\nNote that when the Mechanism contains e.g. quaternion-parameterized joints, q may not actually be set to all zeros; the quaternion part of the configuration vector would be set to identity. The contract is that each of the joint transforms should be an identity transform.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.zero_torque!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.zero_torque!",
    "category": "function",
    "text": "zero_torque!(torques, t, state)\n\n\nA trivial controller that simply sets the torques to zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.zero_velocity!",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.zero_velocity!",
    "category": "function",
    "text": "zero_velocity!(state)\n\n\nZero the velocity vector v. Invalidates cache variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RigidBodyDynamics.@framecheckRigidBodyDynamics.@indextypeRigidBodyDynamics.@modcountcheckRigidBodyDynamics.AbstractTypeDictRigidBodyDynamics.BodyCacheDictRigidBodyDynamics.BodyDictRigidBodyDynamics.BodyIDRigidBodyDynamics.BoundsRigidBodyDynamics.CartesianFrame3DRigidBodyDynamics.ContactRigidBodyDynamics.CustomCollectionsRigidBodyDynamics.DEFAULT_GRAVITATIONAL_ACCELERATIONRigidBodyDynamics.DynamicsResultRigidBodyDynamics.DynamicsResultCacheRigidBodyDynamics.FixedRigidBodyDynamics.FreeVector3DRigidBodyDynamics.GeometricJacobianRigidBodyDynamics.GraphsRigidBodyDynamics.JointRigidBodyDynamics.JointCacheDictRigidBodyDynamics.JointDictRigidBodyDynamics.JointIDRigidBodyDynamics.JointTypeRigidBodyDynamics.MechanismRigidBodyDynamics.MechanismStateRigidBodyDynamics.ModificationCountMismatchRigidBodyDynamics.MomentumRigidBodyDynamics.MomentumMatrixRigidBodyDynamics.OdeIntegratorsRigidBodyDynamics.PDControlRigidBodyDynamics.PlanarRigidBodyDynamics.Point3DRigidBodyDynamics.PointJacobianRigidBodyDynamics.PrismaticRigidBodyDynamics.QuaternionFloatingRigidBodyDynamics.QuaternionSphericalRigidBodyDynamics.RevoluteRigidBodyDynamics.RigidBodyRigidBodyDynamics.RigidBodyDynamicsRigidBodyDynamics.SPQuatFloatingRigidBodyDynamics.SegmentedVectorRigidBodyDynamics.SegmentedVectorCacheRigidBodyDynamics.SinCosRevoluteRigidBodyDynamics.SpatialRigidBodyDynamics.SpatialAccelerationRigidBodyDynamics.SpatialInertiaRigidBodyDynamics.StateCacheRigidBodyDynamics.Transform3DRigidBodyDynamics.TwistRigidBodyDynamics.URDFRigidBodyDynamics.VectorSegmentRigidBodyDynamics.WrenchRigidBodyDynamics.WrenchMatrixRigidBodyDynamics._constraint_wrench_subspaceRigidBodyDynamics._copyjoint!RigidBodyDynamics._motion_subspaceRigidBodyDynamics._point_jacobian!RigidBodyDynamics._update_bias_accelerations_wrt_world!RigidBodyDynamics._update_constraint_wrench_subspaces!RigidBodyDynamics._update_crb_inertias!RigidBodyDynamics._update_joint_bias_accelerations!RigidBodyDynamics._update_joint_twists!RigidBodyDynamics._update_motion_subspaces!RigidBodyDynamics._update_spatial_inertias!RigidBodyDynamics._update_transforms!RigidBodyDynamics._update_twists_wrt_world!RigidBodyDynamics.accelerationRigidBodyDynamics.add_body_fixed_frame!RigidBodyDynamics.add_contact_point!RigidBodyDynamics.add_environment_primitive!RigidBodyDynamics.add_frame!RigidBodyDynamics.additional_stateRigidBodyDynamics.angularRigidBodyDynamics.angular_velocityRigidBodyDynamics.angular_velocity_in_bodyRigidBodyDynamics.attach!RigidBodyDynamics.bias_accelerationRigidBodyDynamics.bias_accelerations!RigidBodyDynamics.bodiesRigidBodyDynamics.body_fixed_frame_definitionRigidBodyDynamics.body_fixed_frame_to_bodyRigidBodyDynamics.cache_eltypeRigidBodyDynamics.cached_downloadRigidBodyDynamics.canonicalize_frame_definitions!RigidBodyDynamics.canonicalize_graph!RigidBodyDynamics.center_of_massRigidBodyDynamics.change_baseRigidBodyDynamics.change_default_frame!RigidBodyDynamics.check_num_positionsRigidBodyDynamics.check_num_velocitiesRigidBodyDynamics.configurationRigidBodyDynamics.configuration_derivativeRigidBodyDynamics.configuration_derivative!RigidBodyDynamics.configuration_derivative_to_velocity!RigidBodyDynamics.configuration_derivative_to_velocity_adjoint!RigidBodyDynamics.configuration_derivative_to_velocity_jacobianRigidBodyDynamics.configuration_derivative_to_velocity_jacobian!RigidBodyDynamics.configuration_index_to_joint_idRigidBodyDynamics.configuration_rangeRigidBodyDynamics.constraint_bias!RigidBodyDynamics.constraint_jacobian!RigidBodyDynamics.constraint_rangeRigidBodyDynamics.constraint_wrench_subspaceRigidBodyDynamics.contact_dynamics!RigidBodyDynamics.contact_pointsRigidBodyDynamics.contact_state_derivativesRigidBodyDynamics.contact_statesRigidBodyDynamics.contact_wrenchRigidBodyDynamics.crb_inertiaRigidBodyDynamics.default_constraint_stabilization_gainsRigidBodyDynamics.default_frameRigidBodyDynamics.dynamics!RigidBodyDynamics.dynamics_biasRigidBodyDynamics.dynamics_bias!RigidBodyDynamics.dynamics_bias_docRigidBodyDynamics.dynamics_solve!RigidBodyDynamics.effort_boundsRigidBodyDynamics.evalRigidBodyDynamics.findbodyRigidBodyDynamics.findjointRigidBodyDynamics.finduniqueRigidBodyDynamics.fixed_transformRigidBodyDynamics.flip_directionRigidBodyDynamics.frame_afterRigidBodyDynamics.frame_beforeRigidBodyDynamics.frame_definitionRigidBodyDynamics.frame_definitionsRigidBodyDynamics.geometric_jacobianRigidBodyDynamics.geometric_jacobian!RigidBodyDynamics.geometric_jacobian_docRigidBodyDynamics.global_coordinates!RigidBodyDynamics.gravitational_potential_energyRigidBodyDynamics.gravitational_spatial_accelerationRigidBodyDynamics.has_defined_inertiaRigidBodyDynamics.has_fixed_subspacesRigidBodyDynamics.has_loopsRigidBodyDynamics.in_jointsRigidBodyDynamics.includeRigidBodyDynamics.inverse_dynamicsRigidBodyDynamics.inverse_dynamics!RigidBodyDynamics.inverse_dynamics_docRigidBodyDynamics.is_configuration_normalizedRigidBodyDynamics.is_fixed_to_bodyRigidBodyDynamics.isfloatingRigidBodyDynamics.isrootRigidBodyDynamics.joint_spatial_accelerationRigidBodyDynamics.joint_to_parentRigidBodyDynamics.joint_to_predecessorRigidBodyDynamics.joint_to_successorRigidBodyDynamics.joint_torque!RigidBodyDynamics.joint_transformRigidBodyDynamics.joint_twistRigidBodyDynamics.joint_typeRigidBodyDynamics.joint_wrenchRigidBodyDynamics.joint_wrenches_and_torques!RigidBodyDynamics.jointsRigidBodyDynamics.joints_to_childrenRigidBodyDynamics.kinetic_energyRigidBodyDynamics.linearRigidBodyDynamics.linear_velocityRigidBodyDynamics.linearized_rodrigues_vecRigidBodyDynamics.local_coordinates!RigidBodyDynamics.log_with_time_derivativeRigidBodyDynamics.lowerRigidBodyDynamics.makevalueRigidBodyDynamics.massRigidBodyDynamics.mass_matrixRigidBodyDynamics.mass_matrix!RigidBodyDynamics.mass_matrix_docRigidBodyDynamics.maximal_coordinatesRigidBodyDynamics.mechanism_eltypeRigidBodyDynamics.modcountRigidBodyDynamics.modcount_check_failRigidBodyDynamics.module_tempdirRigidBodyDynamics.momentumRigidBodyDynamics.momentum_matrixRigidBodyDynamics.momentum_matrix!RigidBodyDynamics.momentum_matrix!_docRigidBodyDynamics.momentum_matrix_docRigidBodyDynamics.momentum_rate_biasRigidBodyDynamics.motion_subspaceRigidBodyDynamics.newton_eulerRigidBodyDynamics.newton_euler!RigidBodyDynamics.noalloc_docRigidBodyDynamics.non_root_bodiesRigidBodyDynamics.non_tree_jointsRigidBodyDynamics.normalize_configuration!RigidBodyDynamics.num_additional_statesRigidBodyDynamics.num_bodiesRigidBodyDynamics.num_constraintsRigidBodyDynamics.num_positionsRigidBodyDynamics.num_velocitiesRigidBodyDynamics.out_jointsRigidBodyDynamics.parse_urdfRigidBodyDynamics.pathRigidBodyDynamics.point_accelerationRigidBodyDynamics.point_jacobianRigidBodyDynamics.point_jacobian!RigidBodyDynamics.point_jacobian_docRigidBodyDynamics.point_velocityRigidBodyDynamics.position_boundsRigidBodyDynamics.predecessorRigidBodyDynamics.predsuccRigidBodyDynamics.principal_value!RigidBodyDynamics.quaternion_derivativeRigidBodyDynamics.quatnormRigidBodyDynamics.rand_chain_mechanismRigidBodyDynamics.rand_configuration!RigidBodyDynamics.rand_floating_tree_mechanismRigidBodyDynamics.rand_tree_mechanismRigidBodyDynamics.rand_velocity!RigidBodyDynamics.rebuild_spanning_tree!RigidBodyDynamics.register_modification!RigidBodyDynamics.relative_accelerationRigidBodyDynamics.relative_transformRigidBodyDynamics.relative_twistRigidBodyDynamics.remove_fixed_tree_joints!RigidBodyDynamics.remove_joint!RigidBodyDynamics.replace_joint!RigidBodyDynamics.reset_contact_state!RigidBodyDynamics.root_bodyRigidBodyDynamics.root_frameRigidBodyDynamics.rotationRigidBodyDynamics.rotation_vector_rateRigidBodyDynamics.segmentsRigidBodyDynamics.set_acceleration!RigidBodyDynamics.set_additional_state!RigidBodyDynamics.set_angular_velocity!RigidBodyDynamics.set_col!RigidBodyDynamics.set_configuration!RigidBodyDynamics.set_contact_wrench!RigidBodyDynamics.set_joint_to_predecessor!RigidBodyDynamics.set_joint_to_successor!RigidBodyDynamics.set_joint_wrench!RigidBodyDynamics.set_linear_velocity!RigidBodyDynamics.set_rotation!RigidBodyDynamics.set_translation!RigidBodyDynamics.set_velocity!RigidBodyDynamics.setdirty!RigidBodyDynamics.simulateRigidBodyDynamics.spatial_accelerations!RigidBodyDynamics.spatial_inertiaRigidBodyDynamics.spatial_inertia!RigidBodyDynamics.spquat_derivativeRigidBodyDynamics.stabilization_gains_docRigidBodyDynamics.state_vector_eltypeRigidBodyDynamics.statesumRigidBodyDynamics.submechanismRigidBodyDynamics.subtree_massRigidBodyDynamics.successorRigidBodyDynamics.successoridRigidBodyDynamics.supportsRigidBodyDynamics.torqueRigidBodyDynamics.torque!RigidBodyDynamics.transformRigidBodyDynamics.transform_to_rootRigidBodyDynamics.translationRigidBodyDynamics.tree_jointsRigidBodyDynamics.twistRigidBodyDynamics.twist_wrt_worldRigidBodyDynamics.update_bias_accelerations_wrt_world!RigidBodyDynamics.update_constraint_wrench_subspaces!RigidBodyDynamics.update_crb_inertias!RigidBodyDynamics.update_joint_bias_accelerations!RigidBodyDynamics.update_joint_twists!RigidBodyDynamics.update_motion_subspaces!RigidBodyDynamics.update_spatial_inertias!RigidBodyDynamics.update_transforms!RigidBodyDynamics.update_twists_wrt_world!RigidBodyDynamics.upperRigidBodyDynamics.valuetypeRigidBodyDynamics.velocityRigidBodyDynamics.velocity_boundsRigidBodyDynamics.velocity_index_to_joint_idRigidBodyDynamics.velocity_jacobianRigidBodyDynamics.velocity_rangeRigidBodyDynamics.velocity_to_configuration_derivative!RigidBodyDynamics.velocity_to_configuration_derivative_jacobianRigidBodyDynamics.velocity_to_configuration_derivative_jacobian!RigidBodyDynamics.write_urdfRigidBodyDynamics.zero!RigidBodyDynamics.zero_configuration!RigidBodyDynamics.zero_torque!RigidBodyDynamics.zero_velocity!"
},

]}
