var documenterSearchIndex = {"docs": [

{
    "location": "autodocs/#MeshCat.Visualizer",
    "page": "Docstrings",
    "title": "MeshCat.Visualizer",
    "category": "type",
    "text": "vis = Visualizer()\n\nConstruct a new MeshCat visualizer instance.\n\nUseful methods:\n\nvis[:group1] # get a new visualizer representing a sub-tree of the scene\nsetobject!(vis, geometry) # set the object shown by this visualizer\'s sub-tree of the scene\nsettransform!(vis], tform) # set the transformation of this visualizer\'s sub-tree of the scene\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "function",
    "text": "delete!(vis)\n\n\nDelete the geometry at this visualizer\'s path and all of its descendants.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCat.intrinsic_transform",
    "page": "Docstrings",
    "title": "MeshCat.intrinsic_transform",
    "category": "function",
    "text": "intrinsic_transform(g)\n\n\nDifferent tools disagree about what various geometric primitives mean. For example, GeometryTypes.jl considers the \"origin\" of a cube to be its bottom-left corner, where DrakeVisualizer and MeshCat consider its origin to be the center. The intrinsic_transform(g) returns the transform from the GeometryTypes origin to the MeshCat origin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCat.lower",
    "page": "Docstrings",
    "title": "MeshCat.lower",
    "category": "function",
    "text": "Convert a geometry, material, object, or transform into the appropriate plain data structures expected by three.js. Most objects are lowered into Dicts matching the JSON structure used by three.js.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCat.setobject!",
    "page": "Docstrings",
    "title": "MeshCat.setobject!",
    "category": "function",
    "text": "setobject!(vis, obj)\n\n\nSet the object at this visualizer\'s path. This replaces whatever geometry was presently at that path. To draw multiple geometries, place them at different paths by using the slicing notation:\n\nsetobject!(vis[:group1][:box1], geometry1)\nsetobject!(vis[:group1][:box2], geometry2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCat.setprop!",
    "page": "Docstrings",
    "title": "MeshCat.setprop!",
    "category": "function",
    "text": "setprop!(vis, property, value)\n\n\nSet a single property for the object at the given path.\n\n(this is named setprop! instead of setproperty! to avoid confusion with the Base.setproperty! function introduced in Julia v0.7)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCat.settransform!",
    "page": "Docstrings",
    "title": "MeshCat.settransform!",
    "category": "function",
    "text": "settransform!(vis, tform)\n\n\nSet the transform of this visualizer\'s path. This can be done before or after adding an object at that path. The overall transform of an object is the composition of the transforms of all of its parents, so setting the transform of vis[:group1] affects the poses of the objects at vis[:group1][:box1] and vis[:group1][:box2].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MeshCat.@pack_AnimationClipMeshCat.@pack_AnimationClip!MeshCat.@pack_GenericMaterialMeshCat.@pack_GenericMaterial!MeshCat.@pack_PointsMaterialMeshCat.@pack_PointsMaterial!MeshCat.@pack_TextureMeshCat.@pack_Texture!MeshCat.@unpack_AnimationClipMeshCat.@unpack_GenericMaterialMeshCat.@unpack_PointsMaterialMeshCat.@unpack_TextureMeshCat.ASSET_KEYSMeshCat.AbstractCommandMeshCat.AbstractControlMeshCat.AbstractMaterialMeshCat.AbstractObjectMeshCat.AbstractVisualizerMeshCat.AnimationMeshCat.AnimationClipMeshCat.AnimationFrameVisualizerMeshCat.AnimationTrackMeshCat.ButtonMeshCat.ConeMeshCat.CoreVisualizerMeshCat.DeleteMeshCat.GenericMaterialMeshCat.GeometryLikeMeshCat.HyperCylinderMeshCat.HyperEllipsoidMeshCat.IJuliaCellMeshCat.LineMeshCat.LineBasicMaterialMeshCat.LineLoopMeshCat.LineSegmentsMeshCat.MeshMeshCat.MeshBasicMaterialMeshCat.MeshCatMeshCat.MeshLambertMaterialMeshCat.MeshPhongMaterialMeshCat.NumericControlMeshCat.ObjectMeshCat.PackedVectorMeshCat.PngImageMeshCat.PointCloudMeshCat.PointsMeshCat.PointsMaterialMeshCat.SceneTreesMeshCat.SetAnimationMeshCat.SetControlMeshCat.SetObjectMeshCat.SetPropertyMeshCat.SetTransformMeshCat.TextureMeshCat.TriadMeshCat.VIEWER_ROOTMeshCat.ViewerWindowMeshCat.VisualizerMeshCat.__init__MeshCat._setprop!MeshCat.atframeMeshCat.centerMeshCat.convert_frames_to_videoMeshCat.defaultmaterialMeshCat.delete!MeshCat.develop_meshcat_assetsMeshCat.evalMeshCat.extcodeMeshCat.flatten!MeshCat.geometryMeshCat.getclip!MeshCat.includeMeshCat.intrinsic_transformMeshCat.js_array_typeMeshCat.js_positionMeshCat.js_quaternionMeshCat.lowerMeshCat.materialMeshCat.open_urlMeshCat.radiiMeshCat.replace_with_uuid!MeshCat.sendMeshCat.send_sceneMeshCat.setanimation!MeshCat.setcontrol!MeshCat.setobject!MeshCat.setprop!MeshCat.settransform!MeshCat.threejs_typeMeshCat.to_zero_indexMeshCat.update_tree!MeshCat.wider_js_type"
},

]}
