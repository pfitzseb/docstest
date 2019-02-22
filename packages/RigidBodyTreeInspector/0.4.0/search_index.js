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
    "location": "autodocs/#RigidBodyTreeInspector.joint_configuration",
    "page": "Docstrings",
    "title": "RigidBodyTreeInspector.joint_configuration",
    "category": "function",
    "text": "joint_configuration maps the slider values to a joint configuration vector. For a quaternion floating joint, this is nontrivial because we create three sliders for the rotational degrees of freedom, which are used to represent the rotation in exponential map form. Those three sliders then have to be converted into a quaternion to set the joint configuration. We do this because interacting with the four components of a quaternion is quite unintuitive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyTreeInspector.manipulate",
    "page": "Docstrings",
    "title": "RigidBodyTreeInspector.manipulate",
    "category": "function",
    "text": "manipulate(callback::Function, mechanism::Mechanism)\n\nCreate Interact sliders to manipulate the state of the mechanism, and call callback(state) each time a slider is changed. This constructs a new MechanismState object to mutate internally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyTreeInspector.manipulate!",
    "page": "Docstrings",
    "title": "RigidBodyTreeInspector.manipulate!",
    "category": "function",
    "text": "manipulate!(callback::Function, state::MechanismState)\n\nCreate Interact sliders to manipulate the state of the mechanism, and call callback(state) each time a slider is changed. This mutates the state in-place.\n\n\n\n\n\n"
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
    "text": "RigidBodyTreeInspector.DrakeVisualizerSinkRigidBodyTreeInspector.InterpolatableArrayRigidBodyTreeInspector.RigidBodyTreeInspectorRigidBodyTreeInspector.SkeletonRigidBodyTreeInspector.URDFVisualsRigidBodyTreeInspector.VisualizerRigidBodyTreeInspector.addgeometry!RigidBodyTreeInspector.animateRigidBodyTreeInspector.apply_scalingRigidBodyTreeInspector.create_geometryRigidBodyTreeInspector.evalRigidBodyTreeInspector.includeRigidBodyTreeInspector.inspectRigidBodyTreeInspector.inspect!RigidBodyTreeInspector.joint_configurationRigidBodyTreeInspector.manipulateRigidBodyTreeInspector.manipulate!RigidBodyTreeInspector.normalize_configuration!RigidBodyTreeInspector.num_slidersRigidBodyTreeInspector.parse_urdfRigidBodyTreeInspector.rbdRigidBodyTreeInspector.remove_infsRigidBodyTreeInspector.remove_scalingRigidBodyTreeInspector.setgeometry!RigidBodyTreeInspector.settransform!RigidBodyTreeInspector.slider_rangeRigidBodyTreeInspector.unique_frame_nameRigidBodyTreeInspector.visual_elements"
},

]}
