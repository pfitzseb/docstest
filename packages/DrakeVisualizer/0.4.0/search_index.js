var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DrakeVisualizer-1",
    "page": "Readme",
    "title": "DrakeVisualizer",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)Note: While this package should still work, active development has been moved to MeshCat.jl, which offers more features and a much less complicated set of dependencies.This package provides a Julia interface to the Drake Visualizer, part of the Drake project and built on top of Director, a highly customizable 3D interface for robotics visualization and interaction."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "DrakeVisualizer.jl uses BinDeps.jl to try to automatically install an appropriate copy of Director for you. On Ubuntu (14.04 and higher) and macOS, this package will attempt to download the pre-built binaries of Director from http://people.csail.mit.edu/patmarion/software/director/. On other Linux platforms, it will compile Director from source. If you would like to force Director to build from source on any platform, just set the environment variable DIRECTOR_BUILD_FROM_SOURCE=1."
},

{
    "location": "#Dependencies-1",
    "page": "Readme",
    "title": "Dependencies",
    "category": "section",
    "text": "On Ubuntu (14.04 and up) and macOS, all of Director\'s dependencies will automatically be installed using BinDeps.jl. On other platforms, you\'ll need to provide them yourself. The required packages are available via apt-get as:libqt4-dev\nlibqt4-opengl-dev\npython-numpy\npython-dev"
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "If you have issues with the Director application itself (like your geometry not showing up), you may have an out-of-date version of the Director binaries. To clear the downloaded binaries, you can run:julia> DrakeVisualizer.delete_director_binaries()After which you will need to re-download the binaries with:julia> Pkg.build(\"DrakeVisualizer\")"
},

{
    "location": "#Linux:-Configuring-Large-UDP-Packets-1",
    "page": "Readme",
    "title": "Linux: Configuring Large UDP Packets",
    "category": "section",
    "text": "DrakeVisualizer uses LCM for communication, and LCM uses UDP under the hood. Very large LCM messages (like those created when loading a robot with lots of mesh geometries) can result in UDP packets being dropped, which will result in you not seeing anything in the visualizer. If that happens to you, you\'ll need to follow the instructions in this comment. Edit /etc/sysctl.conf and add:net.core.rmem_max=2097152\nnet.core.rmem_default=2097152"
},

{
    "location": "#Launching-the-Viewer-1",
    "page": "Readme",
    "title": "Launching the Viewer",
    "category": "section",
    "text": "You can launch the viewer application withjulia> DrakeVisualizer.new_window()which is just a convenience wrapper around a call to the drake-visualizer executable, included in the director binaries or source installation."
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "This package makes use of GeometryTypes.jl to represent robot geometries and CoordinateTransformations.jl to represent spatial transformations. Check out demo.ipynb for some examples of usage."
},

{
    "location": "#Geometric-Primitives-1",
    "page": "Readme",
    "title": "Geometric Primitives",
    "category": "section",
    "text": "Geometric primitives from GeometryTypes.jl can be visualized directly:using DrakeVisualizer\nusing GeometryTypes\nbox = HyperRectangle(Vec(0.,0,0), Vec(1.,1,1))\nmodel = Visualizer(box)(Image: box)sphere = HyperSphere(Point(0., 0, 0), 1.0)\nmodel = Visualizer(sphere)(Image: sphere)Once a Visualizer model has been created, it can be rendered at arbitrary positions and orientations:using CoordinateTransformations\nsettransform!(model, Translation(1.0, 0.0, 0.0))DrakeVisualizer can also render mesh data:using MeshIO\nusing FileIO\ncat = load(joinpath(Pkg.dir(\"GeometryTypes\"), \"test\", \"data\", \"cat.obj\"))\nVisualizer(cat)(Image: cat mesh)And it can even generate 3D contours from functions:# First, we\'ll define our function:\nf = x -> sum(sin, 5 * x)\n\n# Then we pick a region of interest in which to sample the function.\n# This region starts at (-1, -1, -1) and extends to (1, 1, 1):\nlower_bound = Vec(-1.,-1,-1)\nupper_bound = Vec(1., 1, 1)\n\n# contour_mesh constructs a mesh representing an approximation of\n# the surface in 3D space for which f(x) = 0\nmesh = contour_mesh(f, lower_bound, upper_bound)\nVisualizer(mesh)(Image: custom function contour mesh)For more visualizations, including moving and rotating visualized elements, and visualizing the level sets of functions, check out demo.ipynb."
},

{
    "location": "autodocs/#DrakeVisualizer.MeshFile",
    "page": "Docstrings",
    "title": "DrakeVisualizer.MeshFile",
    "category": "type",
    "text": "A MeshFile is a wrapper around a mesh that indicates that the mesh should be transmitted to the viewer by saving its data to a file and sending that file\'s path to the viewer. This can avoid issues with very large meshes (which cannot otherwise be sent over LCM), but will not work if the viewer is not running locally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DrakeVisualizer.ArrowHeadDrakeVisualizer.CommandQueueDrakeVisualizer.CommsDrakeVisualizer.CoreVisualizerDrakeVisualizer.CylinderDrakeVisualizer.DrakeVisualizerDrakeVisualizer.GeometryDataDrakeVisualizer.HyperCubeDrakeVisualizer.HyperEllipsoidDrakeVisualizer.HyperRectangleDrakeVisualizer.HyperSphereDrakeVisualizer.LazyTreesDrakeVisualizer.LinkDrakeVisualizer.MeshFileDrakeVisualizer.PathDrakeVisualizer.PointDrakeVisualizer.PointCloudDrakeVisualizer.PolyLineDrakeVisualizer.RobotDrakeVisualizer.TriadDrakeVisualizer.VecDrakeVisualizer.VisDataDrakeVisualizer.VisTreeDrakeVisualizer.VisualizerDrakeVisualizer.addgeometry!DrakeVisualizer.any_open_windowsDrakeVisualizer.batchDrakeVisualizer.centerDrakeVisualizer.contour_meshDrakeVisualizer.delete!DrakeVisualizer.delete_director_binariesDrakeVisualizer.drake_visualizer_executable_nameDrakeVisualizer.draw!DrakeVisualizer.evalDrakeVisualizer.includeDrakeVisualizer.intrinsic_transformDrakeVisualizer.load!DrakeVisualizer.new_windowDrakeVisualizer.onresponseDrakeVisualizer.publish!DrakeVisualizer.quaternionDrakeVisualizer.radiiDrakeVisualizer.request_channelDrakeVisualizer.response_channelDrakeVisualizer.serializeDrakeVisualizer.setgeometry!DrakeVisualizer.settransform!DrakeVisualizer.to_lcmDrakeVisualizer.translation"
},

]}
