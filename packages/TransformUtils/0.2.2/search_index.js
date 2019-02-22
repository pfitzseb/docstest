var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TransformUtils.jl-1",
    "page": "Readme",
    "title": "TransformUtils.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: TransformUtils) (Image: TransformUtils) (Image: TransformUtils)Lie groups and algebra, quaternions, Angle Axis and Euler angles; products and compare also available."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package is a growing collection of Lie Group/Algebra, Quaternion, Euler, AxisAngle representations. Including convert functions between each, and overloading operators for those sets. The package already includes exponential, logarithm maps and Jacobians for Lie SO(3). SE(3) mostly complete."
},

{
    "location": "#Interesting-usage-1",
    "page": "Readme",
    "title": "Interesting usage",
    "category": "section",
    "text": "Supports mangle products, for example (using identity constructors):julia> pp = SO3(0) * Quaternion(0) * so3(0.1*randn(3)) * AngleAxis(0)Or maybe you want to compare against another rotationjulia> compare(SO3(0), pp) # returns true or false"
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Pkg.add(\"TransformUtils\")"
},

{
    "location": "#To-do\'s-1",
    "page": "Readme",
    "title": "To do\'s",
    "category": "section",
    "text": "Mangled compare functionscompare(Quaternion(0), SO3(0))Rework SE(2) to type, and not functions"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TransformUtils.*TransformUtils.A_invBTransformUtils.AngleAxisTransformUtils.AxisAngleTransformUtils.EulerTransformUtils.FloatIntTransformUtils.QuaternionTransformUtils.RTransformUtils.SE2TransformUtils.SE3TransformUtils.SO3TransformUtils.TransformUtilsTransformUtils.VectorFloatIntTransformUtils.\\TransformUtils.addPose2Pose2TransformUtils.addPose2Pose2!TransformUtils.compareTransformUtils.convertTransformUtils.convert!TransformUtils.deltaso3veeTransformUtils.doinversetransform!TransformUtils.evalTransformUtils.expmOwnTransformUtils.expmOwn1TransformUtils.expmOwn2TransformUtils.expmOwn3TransformUtils.expmOwn4TransformUtils.expmOwnTTransformUtils.fast_norm_TUTransformUtils.includeTransformUtils.inverseTransformUtils.logmapTransformUtils.matrixTransformUtils.matrix!TransformUtils.normalizeTransformUtils.normalize!TransformUtils.ominusTransformUtils.oplusTransformUtils.q_conjTransformUtils.q_conj!TransformUtils.rightJacExmapTransformUtils.rightJacExmapinvTransformUtils.rotateTransformUtils.rotate!TransformUtils.se2veeTransformUtils.se2vee!TransformUtils.setso3!TransformUtils.skewTransformUtils.so3TransformUtils.transposeTransformUtils.vecTransformUtils.veeTransformUtils.vee!TransformUtils.veeAngleAxisTransformUtils.veeEulerTransformUtils.veeQuaternionTransformUtils.wrapRadTransformUtils.⊕TransformUtils.⊖"
},

]}
