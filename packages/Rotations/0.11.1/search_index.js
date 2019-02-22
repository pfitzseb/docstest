var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Rotations.jl-1",
    "page": "Readme",
    "title": "Rotations.jl",
    "category": "section",
    "text": "3D rotations made easy in Julia(Image: Build Status)This package implements various 3D rotation parameterizations and defines conversions between them. At their heart, each rotation parameterization is a 3×3 unitary (orthogonal) matrix (based on the StaticArrays.jl package), and acts to rotate a 3-vector about the origin through matrix-vector multiplication.While the RotMatrix type is a dense representation of a 3×3 matrix, we also have sparse (or computed, rather) representations such as quaternions, angle-axis parameterizations, and Euler angles.For composing rotations about the origin with other transformations, see also the CoordinateTransformations.jl or AffineTransforms.jl packages."
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "using Rotations, StaticArrays\n\n# create the null rotation (identity matrix)\nid = one(RotMatrix{3, Float64})\n\n# create a random rotation matrix (uniformly distributed over all 3D rotations)\nr = rand(RotMatrix{3}) # uses Float64 by default\n\n# create a point\np = SVector(1.0, 2.0, 3.0) # from StaticArrays.jl, but could use any AbstractVector...\n\n# convert to a quaternion (Quat) and rotate the point\nq = Quat(r)\np_rotated = q * p\n\n# Compose rotations\nq2 = rand(Quat)\nq3 = q * q2\n\n# Take the inverse (equivalent to transpose)\nq_inv = transpose(q)\nq_inv == inv(q)\np ≈ q_inv * (q * p)\nq4 = q3 / q2  # q4 = q3 * inv(q2)\nq5 = q3 \\ q2  # q5 = inv(q3) * q2\n\n# convert to a Stereographic quaternion projection (recommended for applications with differentiation)\nspq = SPQuat(r)\n\n# convert to the Angle-axis parameterization, or related Rodrigues vector\naa = AngleAxis(r)\nrv = RodriguesVec(r)\nϕ = rotation_angle(r)\nv = rotation_axis(r)\n\n# convert to Euler angles, composed of X/Y/Z axis rotations (Z applied first)\n# (all combinations of \"RotABC\" are defined)\nr_xyz = RotXYZ(r)\n\n# Rotation about the X axis by 0.1 radians\nr_x = RotX(0.1)\n\n# Composing axis rotations together automatically results in Euler parameterization\nRotX(0.1) * RotY(0.2) * RotZ(0.3) === RotXYZ(0.1, 0.2, 0.3)\n\n# Can calculate Jacobian - derivatives of rotations with respect to parameters\nj1 = Rotations.jacobian(RotMatrix, q) # How does the matrix change w.r.t the 4 Quat parameters?\nj2 = Rotations.jacobian(q, p) # How does the rotated point q*p change w.r.t. the 4 Quat parameters?\n# ... all Jacobian\'s involving RotMatrix, SPQuat and Quat are implemented\n# (SPQuat is ideal for optimization purposes - no constaints/singularities)"
},

{
    "location": "#Rotation-Parameterizations-1",
    "page": "Readme",
    "title": "Rotation Parameterizations",
    "category": "section",
    "text": "Rotation Matrix RotMatrix{N, T}\nAn N x N rotation matrix storing the rotation.  This is a simple wrapper for  a StaticArrays SMatrix{N,N,T}.  A rotation matrix R should have the property I = R * R\', but this isn\'t  enforced by the constructor. On the other hand, all the types below are  guaranteed to be \"proper\" rotations for all input parameters (equivalently:  parity conserving, in SO(3), det(r) = 1, or a rotation without  reflection).\nArbitrary Axis Rotation AngleAxis{T}\nA 3D rotation with fields theta, axis_x, axis_y, and  axis_z to store the rotation angle and axis of the rotation.  Like all other types in this package, once it is constructed it acts and  behaves as a 3×3 AbstractMatrix. The axis will be automatically  renormalized by the constructor to be a unit vector, so that theta always  represents the rotation angle in radians.\nQuaternions Quat{T}\nA 3D rotation parameterized by a unit quaternion. Note that the constructor  will renormalize the quaternion to be a unit quaternion, and that although  they follow the same multiplicative algebra as quaternions, it is better  to think of Quat as a 3×3 matrix rather than as a quaternion number.\nRodrigues Vector RodriguesVec{T}\nA 3D rotation encoded by an angle-axis representation as angle * axis.  This type is used in packages such as OpenCV.\nNote: If you\'re differentiating a Rodrigues Vector check the result is what  you expect at theta = 0.  The first derivative of the rotation should  behave, but higher-order derivatives of it (as well as parameterization  conversions) should be tested.  The Stereographic Quaternion Projection is  the recommended three parameter format for differentiation.\nStereographic Projection of a unit Quaternion SPQuat{T}\nA 3D rotation encoded by the stereographic projection of a unit quaternion.  This projection can be visualized as a pin hole camera, with the pin hole matching the quaternion [-1,0,0,0] and the image plane containing the origin and having normal direction [1,0,0,0].  The \"null rotation\" Quaternion(1.0,0,0,0) then maps to the SPQuat(0,0,0)\nThese are similar to the Rodrigues vector in that the axis direction is stored in an unnormalized form, and the rotation angle is encoded in the length of the axis.  This type has the nice property that the derivatives of the rotation matrix w.r.t. the SPQuat parameters are rational functions, making the SPQuat type a good choice for differentiation / optimization.\nCardinal axis rotations RotX{T}, RotY{T}, RotZ{T}\nSparse representations of 3D rotations about the X, Y, or Z axis, respectively.\nTwo-axis rotations RotXY{T}, etc\nConceptually, these are compositions of two of the cardinal axis rotations above,  so that RotXY(x, y) == RotX(x) * RotY(y) (note that the order of application to  a vector is right-to-left, as-in matrix-matrix-vector multiplication: RotXY(x, y) * v == RotX(x) * (RotY(y) * v)).\nEuler Angles - Three-axis rotations RotXYZ{T}, RotXYX{T}, etc\nA composition of 3 cardinal axis rotations is typically known as a Euler  angle parameterization of a 3D rotation. The rotations with 3 unique axes,  such as RotXYZ, are said to follow the Tait Byran angle ordering,  while those which repeat (e.g. EulerXYX) are said to use Proper Euler angle ordering.\nLike the two-angle versions, read the application of the rotations along the  static cardinal axes to a vector from right-to-left, so that RotXYZ(x, y, z) * v == RotX(x) * (RotY(y) * (RotZ(z) * v)).  This is the \"extrinsic\" representation of an Euler-angle rotation, though  if you prefer the \"intrinsic\" form it is easy to use the corresponding  RotZYX(z, y, x)."
},

{
    "location": "#Import-/-Export-1",
    "page": "Readme",
    "title": "Import / Export",
    "category": "section",
    "text": "All parameterizations can be converted to and from (mutable or immutable) 3×3 matrices, e.g.using StaticArrays, Rotations\n\n# export\nq = Quat(1.0,0,0,0)\nmatrix_mutable = Array(q)\nmatrix_immutable = SMatrix{3,3}(q)\n\n# import\nq2 = Quaternion(matrix_mutable)\nq3 = Quaternion(matrix_immutable)"
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "This package assumes active (right handed) rotations where applicable."
},

{
    "location": "#Why-use-immutables-/-StaticArrays?-1",
    "page": "Readme",
    "title": "Why use immutables / StaticArrays?",
    "category": "section",
    "text": "They\'re faster (Julia\'s Array and BLAS aren\'t great for 3x3 matrices) and don\'t need preallocating or garbage collection. For example, see this benchmark case where we get a 20× speedup:julia> cd(Pkg.dir(\"Rotations\") * \"/test\")\n\njulia> include(\"benchmark.jl\")\n\njulia > BenchMarkRotations.benchmark_mutable()\nRotating using mutables (Base.Matrix and Base.Vector):\n  0.124035 seconds (2 allocations: 224 bytes)\nRotating using immutables (Rotations.RotMatrix and StaticArrays.SVector):\n  0.006006 seconds"
},

{
    "location": "autodocs/#Rotations.Angle2d",
    "page": "Docstrings",
    "title": "Rotations.Angle2d",
    "category": "type",
    "text": "struct Angle2d{T} <: Rotation{2,T}\n    theta::T\nend\n\nA 2×2 rotation matrix parameterized by a 2D rotation by angle. Only the angle is stored inside the Angle2d type, values of getindex etc. are computed on the fly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.AngleAxis",
    "page": "Docstrings",
    "title": "Rotations.AngleAxis",
    "category": "type",
    "text": "struct AngleAxis{T} <: Rotation{3,T}\nAngleAxis(Θ, x, y, z)\n\nA 3×3 rotation matrix parameterized by a 3D rotation by angle θ about an arbitrary axis [x, y, z].\n\nNote that the axis is not unique for θ = 0, and that this parameterization does not continuously map the neighbourhood of the null rotation (and therefore might not be suitable for autodifferentation and optimization purposes).\n\nNote: by default, the constructor will renormalize the input so that the axis has length 1 (x² + y² + z² = 1).\n\nRenormalization can be skipped by passing false as an additional constructor argument, in which case the user provides the guarantee that the input arguments represent a normalized rotation axis. Operations on an AngleAxis with a rotation axis that does not have unit norm, created by skipping renormalization in this fashion, are not guaranteed to do anything sensible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.Quat",
    "page": "Docstrings",
    "title": "Rotations.Quat",
    "category": "type",
    "text": "struct Quat{T} <: Rotation{3,T}\nQuat(w, x, y, z)\n\nThe Quat type is a 3×3 matrix representation of a normalized quaternion. They allow you to transparently use (fast) quaternion algebra to store, compose and invert 3D rotations, while at the same time letting you apply rotations through matrix-vector multiplication.\n\nNote: by default, the constructor will renormalize the input so that the quaternion has length 1 (w² + x² + y² + z² = 1), and the rotation matrix is orthogonal.\n\nRenormalization can be skipped by passing false as an additional constructor argument, in which case the user provides the guarantee that the input arguments represent a unit quaternion. Operations on an unnormalized Quat, created by skipping renormalization in this fashion, are not guaranteed to do anything sensible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RodriguesVec",
    "page": "Docstrings",
    "title": "Rotations.RodriguesVec",
    "category": "type",
    "text": "struct RodriguesVec{T} <: Rotation{3,T}\nRodriguesVec(sx, sy, sz)\n\nRodrigues vector parameterization of a 3×3 rotation matrix. The direction of the vector [sx, sy, sz] defines the axis of rotation, and the rotation angle is given by its norm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotMatrix",
    "page": "Docstrings",
    "title": "Rotations.RotMatrix",
    "category": "type",
    "text": "struct RotMatrix{N,T} <: Rotation{N,T}\n\nA statically-sized, N×N unitary (orthogonal) matrix.\n\nNote: the orthonormality of the input matrix is not checked by the constructor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotX",
    "page": "Docstrings",
    "title": "Rotations.RotX",
    "category": "type",
    "text": "struct RotX{T} <: Rotation{3,T}\nRotX(theta)\n\nA 3×3 rotation matrix which represents a rotation by theta about the X axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotXY",
    "page": "Docstrings",
    "title": "Rotations.RotXY",
    "category": "type",
    "text": "struct RotXY{T} <: Rotation{3,T}\nRotXY(theta_x, theta_y)\n\nA 3×3 rotation matrix which represents a rotation by theta_y about the Y axis, followed by a rotation by theta_x about the X axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotXYX",
    "page": "Docstrings",
    "title": "Rotations.RotXYX",
    "category": "type",
    "text": "struct RotXYX{T} <: Rotation{3,T}\nRotXYX(theta1, theta2, theta3)\n\nA 3×3 rotation matrix parameterized by the \"proper\" XYX Euler angle convention, consisting of first a rotation about the X axis by theta3, followed by a rotation about the Y axis by theta2, and finally a rotation about the X axis by theta1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotXYZ",
    "page": "Docstrings",
    "title": "Rotations.RotXYZ",
    "category": "type",
    "text": "struct RotXYZ{T} <: Rotation{3,T}\nRotXYZ(theta1, theta2, theta3)\nRotXYZ(roll=r, pitch=p, yaw=y)\n\nA 3×3 rotation matrix parameterized by the \"Tait-Bryant\" XYZ Euler angle convention, consisting of first a rotation about the Z axis by theta3, followed by a rotation about the Y axis by theta2, and finally a rotation about the X axis by theta1.\n\nThe keyword argument form applies roll, pitch and yaw to the X, Y and Z axes respectively, in XYZ order. (Because it is a right-handed coordinate system, note that positive pitch is heading in the negative Z axis).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotXZ",
    "page": "Docstrings",
    "title": "Rotations.RotXZ",
    "category": "type",
    "text": "struct RotXZ{T} <: Rotation{3,T}\nRotXZ(theta_x, theta_z)\n\nA 3×3 rotation matrix which represents a rotation by theta_z about the Z axis, followed by a rotation by theta_x about the X axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotXZX",
    "page": "Docstrings",
    "title": "Rotations.RotXZX",
    "category": "type",
    "text": "struct RotXZX{T} <: Rotation{3,T}\nRotXZX(theta1, theta2, theta3)\n\nA 3×3 rotation matrix parameterized by the \"proper\" XZX Euler angle convention, consisting of first a rotation about the X axis by theta3, followed by a rotation about the Z axis by theta2, and finally a rotation about the X axis by theta1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotXZY",
    "page": "Docstrings",
    "title": "Rotations.RotXZY",
    "category": "type",
    "text": "struct RotXZY{T} <: Rotation{3,T}\nRotXZY(theta1, theta2, theta3)\nRotXZY(roll=r, pitch=p, yaw=y)\n\nA 3×3 rotation matrix parameterized by the \"Tait-Bryant\" XZY Euler angle convention, consisting of first a rotation about the Y axis by theta3, followed by a rotation about the Z axis by theta2, and finally a rotation about the X axis by theta1.\n\nThe keyword argument form applies roll, pitch and yaw to the X, Y and Z axes respectively, in XZY order. (Because it is a right-handed coordinate system, note that positive pitch is heading in the negative Z axis).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotY",
    "page": "Docstrings",
    "title": "Rotations.RotY",
    "category": "type",
    "text": "struct RotY{T} <: Rotation{3,T}\nRotY(theta)\n\nA 3×3 rotation matrix which represents a rotation by theta about the Y axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotYX",
    "page": "Docstrings",
    "title": "Rotations.RotYX",
    "category": "type",
    "text": "struct RotYX{T} <: Rotation{3,T}\nRotYX(theta_y, theta_x)\n\nA 3×3 rotation matrix which represents a rotation by theta_x about the X axis, followed by a rotation by theta_y about the Y axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotYXY",
    "page": "Docstrings",
    "title": "Rotations.RotYXY",
    "category": "type",
    "text": "struct RotYXY{T} <: Rotation{3,T}\nRotYXY(theta1, theta2, theta3)\n\nA 3×3 rotation matrix parameterized by the \"proper\" YXY Euler angle convention, consisting of first a rotation about the Y axis by theta3, followed by a rotation about the X axis by theta2, and finally a rotation about the Y axis by theta1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotYXZ",
    "page": "Docstrings",
    "title": "Rotations.RotYXZ",
    "category": "type",
    "text": "struct RotYXZ{T} <: Rotation{3,T}\nRotYXZ(theta1, theta2, theta3)\nRotYXZ(roll=r, pitch=p, yaw=y)\n\nA 3×3 rotation matrix parameterized by the \"Tait-Bryant\" YXZ Euler angle convention, consisting of first a rotation about the Z axis by theta3, followed by a rotation about the X axis by theta2, and finally a rotation about the Y axis by theta1.\n\nThe keyword argument form applies roll, pitch and yaw to the X, Y and Z axes respectively, in YXZ order. (Because it is a right-handed coordinate system, note that positive pitch is heading in the negative Z axis).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotYZ",
    "page": "Docstrings",
    "title": "Rotations.RotYZ",
    "category": "type",
    "text": "struct RotYZ{T} <: Rotation{3,T}\nRotYZ(theta_y, theta_z)\n\nA 3×3 rotation matrix which represents a rotation by theta_z about the Z axis, followed by a rotation by theta_y about the Y axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotYZX",
    "page": "Docstrings",
    "title": "Rotations.RotYZX",
    "category": "type",
    "text": "struct RotYZX{T} <: Rotation{3,T}\nRotYZX(theta1, theta2, theta3)\nRotYZX(roll=r, pitch=p, yaw=y)\n\nA 3×3 rotation matrix parameterized by the \"Tait-Bryant\" YZX Euler angle convention, consisting of first a rotation about the X axis by theta3, followed by a rotation about the Z axis by theta2, and finally a rotation about the Y axis by theta1.\n\nThe keyword argument form applies roll, pitch and yaw to the X, Y and Z axes respectively, in YZX order. (Because it is a right-handed coordinate system, note that positive pitch is heading in the negative Z axis).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotYZY",
    "page": "Docstrings",
    "title": "Rotations.RotYZY",
    "category": "type",
    "text": "struct RotYZY{T} <: Rotation{3,T}\nRotYZY(theta1, theta2, theta3)\n\nA 3×3 rotation matrix parameterized by the \"proper\" YXY Euler angle convention, consisting of first a rotation about the Y axis by theta3, followed by a rotation about the Z axis by theta2, and finally a rotation about the Y axis by theta1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotZ",
    "page": "Docstrings",
    "title": "Rotations.RotZ",
    "category": "type",
    "text": "struct RotZ{T} <: Rotation{3,T}\nRotZ(theta)\n\nA 3×3 rotation matrix which represents a rotation by theta about the Z axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotZX",
    "page": "Docstrings",
    "title": "Rotations.RotZX",
    "category": "type",
    "text": "struct RotZX{T} <: Rotation{3,T}\nRotZX(theta_z, theta_x)\n\nA 3×3 rotation matrix which represents a rotation by theta_x about the X axis, followed by a rotation by theta_z about the Z axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotZXY",
    "page": "Docstrings",
    "title": "Rotations.RotZXY",
    "category": "type",
    "text": "struct RotZXY{T} <: Rotation{3,T}\nRotZXY(theta1, theta2, theta3)\nRotZXY(roll=r, pitch=p, yaw=y)\n\nA 3×3 rotation matrix parameterized by the \"Tait-Bryant\" ZXY Euler angle convention, consisting of first a rotation about the Y axis by theta3, followed by a rotation about the X axis by theta2, and finally a rotation about the Z axis by theta1.\n\nThe keyword argument form applies roll, pitch and yaw to the X, Y and Z axes respectively, in ZXY order. (Because it is a right-handed coordinate system, note that positive pitch is heading in the negative Z axis).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotZXZ",
    "page": "Docstrings",
    "title": "Rotations.RotZXZ",
    "category": "type",
    "text": "struct RotZXZ{T} <: Rotation{3,T}\nRotZXZ(theta1, theta2, theta3)\n\nA 3×3 rotation matrix parameterized by the \"proper\" ZXZ Euler angle convention, consisting of first a rotation about the Z axis by theta3, followed by a rotation about the X axis by theta2, and finally a rotation about the Z axis by theta1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotZY",
    "page": "Docstrings",
    "title": "Rotations.RotZY",
    "category": "type",
    "text": "struct RotZY{T} <: Rotation{3,T}\nRotZY(theta_z, theta_y)\n\nA 3×3 rotation matrix which represents a rotation by theta_y about the Y axis, followed by a rotation by theta_z about the Z axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotZYX",
    "page": "Docstrings",
    "title": "Rotations.RotZYX",
    "category": "type",
    "text": "struct RotZYX{T} <: Rotation{3,T}\nRotZYX(theta1, theta2, theta3)\nRotZYX(roll=r, pitch=p, yaw=y)\n\nA 3×3 rotation matrix parameterized by the \"Tait-Bryant\" ZYX Euler angle convention, consisting of first a rotation about the X axis by theta3, followed by a rotation about the Y axis by theta2, and finally a rotation about the Z axis by theta1.\n\nThe keyword argument form applies roll, pitch and yaw to the X, Y and Z axes respectively, in ZYX order. (Because it is a right-handed coordinate system, note that positive pitch is heading in the negative Z axis).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.RotZYZ",
    "page": "Docstrings",
    "title": "Rotations.RotZYZ",
    "category": "type",
    "text": "struct RotZYZ{T} <: Rotation{3,T}\nRotZYZ(theta1, theta2, theta3)\n\nA 3×3 rotation matrix parameterized by the \"proper\" ZXZ Euler angle convention, consisting of first a rotation about the Z axis by theta3, followed by a rotation about the Y axis by theta2, and finally a rotation about the Z axis by theta1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.Rotation",
    "page": "Docstrings",
    "title": "Rotations.Rotation",
    "category": "type",
    "text": "abstract type Rotation{N,T} <: StaticMatrix{N,N,T}\n\nAn abstract type representing N-dimensional rotations. More abstractly, they represent unitary (orthogonal) N×N matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.SPQuat",
    "page": "Docstrings",
    "title": "Rotations.SPQuat",
    "category": "type",
    "text": "struct SPQuat{T} <: Rotation{3,T}\nSPQuat(x, y, z)\n\nAn SPQuat is a 3D rotation matrix represented by the \"stereographic projection\" of a normalized quaternion (shortened to \"SPQuat\"), which is a 3-element parametrization of a unit quaternion Q formed by the intersection of a line from [-1,0,0,0] to Q, with a plane containing the origin and with normal direction [1,0,0,0]. This is a compact representation of rotations where the derivatives of the rotation matrix\'s elements w.r.t. the SPQuat parameters are rational functions (making them useful for optimization).\n\nSee:\n\n[1] \"A Recipe on the Parameterization of Rotation Matrices for Non-Linear Optimization using Quaternions\",\nTerzakis, Culverhouse, Bugmann, Sharma, Sutton,\nMIDAS technical report, 2011\nhttp://www.tech.plymouth.ac.uk/sme/springerusv/2011/publications_files/Terzakis%20et%20al%202012,%20A%20Recipe%20on%20the%20Parameterization%20of%20Rotation%20Matrices...MIDAS.SME.2012.TR.004.pdf\n\nNote 1: the singularity (origin) has been moved from [0,0,0,-1] in Ref[1] to [-1,0,0,0], so the 0 rotation quaternion [1,0,0,0] maps to [0,0,0] as opposed of to [1,0,0].\nNote 2: the quaternion rotation ambiguity q = -q means there will be a rotation with ||SPQuat|| <= 1 and an equivilent rotation with ||SPQuat|| > 1.  This package\n        uses the solution with ||SPQuat|| <= 1\nNote 3: it is safe to assume that the corresponding matrix is orthogonal/unitary for any input x, y, z.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.isrotation",
    "page": "Docstrings",
    "title": "Rotations.isrotation",
    "category": "function",
    "text": "isrotation(r)\nisrotation(r, tol)\n\nCheck whether r is a 3×3 rotation matrix, where r * r\' is within tol of the identity matrix (using the Frobenius norm). (tol defaults to 1000 * eps(eltype(r)).)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.jacobian",
    "page": "Docstrings",
    "title": "Rotations.jacobian",
    "category": "function",
    "text": "jacobian(::Type{output_param}, R::input_param)\n\nReturns the jacobian for transforming from the input rotation parameterization to the output parameterization, centered at the value of R.\n\njacobian(R::rotation_type, X::AbstractVector)\n\nReturns the jacobian for rotating the vector X by R.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.perpendicular_vector",
    "page": "Docstrings",
    "title": "Rotations.perpendicular_vector",
    "category": "function",
    "text": "perpendicular_vector(vec)\n\nCompute a vector perpendicular to vec by switching the two elements with largest absolute value, flipping the sign of the second largest, and setting the remaining element to zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.principal_value",
    "page": "Docstrings",
    "title": "Rotations.principal_value",
    "category": "function",
    "text": "principal_value(R::Rotation{3})\n\nBackground: All non RotMatrix rotation types can represent the same RotMatrix in two or more ways. Sometimes a particular set of numbers is better conditioned (e.g. SPQuat) or obeys a particular convention (e.g. AngleAxis has non-negative rotation). In order to preserve differentiability it is necessary to allow rotation representations to travel slightly away from the nominal domain; this is critical for applications such as optimization or dynamics.\n\nThis function takes a rotation type (e.g. Quat, RotXY) and outputs a new rotation of the same type that corresponds to the same RotMatrix, but that obeys certain conventions or is better conditioned. The outputs of the function have the following properties:\n\nall angles are between between -pi to pi (except for AngleAxis which is between 0 and pi).\nall Quat have non-negative real part\nthe components of all SPQuat have a norm that is at most 1.\nthe RodriguesVec rotation is at most pi\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Rotations.rotation_between",
    "page": "Docstrings",
    "title": "Rotations.rotation_between",
    "category": "function",
    "text": "rotation_between(from, to)\n\nCompute the quaternion that rotates vector from so that it aligns with vector to, along the geodesic (shortest path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Rotations.Angle2dRotations.AngleAxisRotations.QuatRotations.RodriguesVecRotations.RotMatrixRotations.RotMatrix2Rotations.RotMatrix3Rotations.RotXRotations.RotXYRotations.RotXYXRotations.RotXYZRotations.RotXZRotations.RotXZXRotations.RotXZYRotations.RotYRotations.RotYXRotations.RotYXYRotations.RotYXZRotations.RotYZRotations.RotYZXRotations.RotYZYRotations.RotZRotations.RotZXRotations.RotZXYRotations.RotZXZRotations.RotZYRotations.RotZYXRotations.RotZYZRotations.RotationRotations.RotationsRotations.SPQuatRotations.d_crossRotations.evalRotations.includeRotations.isrotationRotations.jacobianRotations.perpendicular_vectorRotations.principal_valueRotations.rotation_angleRotations.rotation_axisRotations.rotation_between"
},

]}
