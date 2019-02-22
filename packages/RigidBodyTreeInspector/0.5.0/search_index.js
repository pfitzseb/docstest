var documenterSearchIndex = {"docs": [

{
    "location": "autodocs/#RigidBodyTreeInspector.InterpolatableArray",
    "page": "Docstrings",
    "title": "RigidBodyTreeInspector.InterpolatableArray",
    "category": "type",
    "text": "Interpolations.jl requires that one(::Type{T}) be defined for any data type we want to interpolate. Rather than defining one(::Type{Vector}) here, which might have unforeseen consequences in other packages, we\'ll create a very simple wrapper type that just knows one() and *\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DrakeVisualizer.Visualizer",
    "page": "Docstrings",
    "title": "DrakeVisualizer.Visualizer",
    "category": "type",
    "text": "Construct a DrakeVisualizer.Visualizer for the given mechanism by constructing simple geometries just from the structure of the kinematic tree. If show_intertias is true, then also construct equivalent inertial ellipsoids for every link.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyTreeInspector.animate",
    "page": "Docstrings",
    "title": "RigidBodyTreeInspector.animate",
    "category": "function",
    "text": "animate(vis::Visualizer, mechanism::Mechanism{Float64},\n        times::Vector{Float64},\n        configurations::Vector{Vector{Float64}};\n        fps::Float64=60, realtimerate::Float64=1.)\n\nAnimate the given mechanism passing through a time-coded series of configurations by linearly interpolating the configuration vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyTreeInspector.remove_scaling",
    "page": "Docstrings",
    "title": "RigidBodyTreeInspector.remove_scaling",
    "category": "function",
    "text": "The remote tree viewer interface has no notion of scale (only a quaternion and translation), so we have to do some monkey business to push the scaling into the geometry itself.\n\nCurrently, this only works for converting spheres into ellipsoids and assumes the scaling is positive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RigidBodyTreeInspector.DrakeVisualizerSinkRigidBodyTreeInspector.InterpolatableArrayRigidBodyTreeInspector.ManipulateRigidBodyTreeInspector.RigidBodyTreeInspectorRigidBodyTreeInspector.SkeletonRigidBodyTreeInspector.URDFVisualsRigidBodyTreeInspector.VisualizerRigidBodyTreeInspector.addgeometry!RigidBodyTreeInspector.animateRigidBodyTreeInspector.apply_scalingRigidBodyTreeInspector.create_geometryRigidBodyTreeInspector.evalRigidBodyTreeInspector.includeRigidBodyTreeInspector.inspectRigidBodyTreeInspector.inspect!RigidBodyTreeInspector.manipulateRigidBodyTreeInspector.normalize_configuration!RigidBodyTreeInspector.parse_urdfRigidBodyTreeInspector.rbdRigidBodyTreeInspector.remove_scalingRigidBodyTreeInspector.setgeometry!RigidBodyTreeInspector.settransform!RigidBodyTreeInspector.unique_frame_nameRigidBodyTreeInspector.visual_elements"
},

]}
