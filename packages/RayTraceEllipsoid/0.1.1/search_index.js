var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RayTraceEllipsoid-1",
    "page": "Readme",
    "title": "RayTraceEllipsoid",
    "category": "section",
    "text": "(Image: Build status) (Image: Build Status) (Image: codecov.io)This Julia package allows for geometric ray tracing with ellipsoids (actually domes shaped as ellipsoids). It includes intersection and refraction/reflection of rays with arbitrary ellipsoids. It accomplishes that in about 100 lines of code thanks to heavy use of CoordinateTransformations.jl and StaticArrays.jl.These ellipsoid-domes are defined with Ellipsoid (see details with help?> Ellipsoid). The normal and refractive indices are defined within the Interface type. These two are baked into a single OpticUnit.Rays advance! to intersect with the Ellipsoids and bend! at the Interfaces. The raytrace! function includes these two actions, taking in a Ray and an OpticUnit, updating the location and direction of the ray."
},

{
    "location": "#Todo-1",
    "page": "Readme",
    "title": "Todo",
    "category": "section",
    "text": "add rotated ellipsoids\nadd more shapes, so it\'s not only RayTrace**Ellipsoid**"
},

{
    "location": "autodocs/#RayTraceEllipsoid.Ellipsoid",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.Ellipsoid",
    "category": "type",
    "text": "Ellipsoid(c::Vec, r::Vec, dir::Vec, open::Float64)\n\nAn ellipsoid with a center, `c`, and radii, `r`, as well as a direction (gets automatically normalized), `dir`, and an opening angle, `open`, creating a dome (or window), that the ellipsoid is defined in. Note that `open` is the angle between the dome\'s edge and the direction of the dome (so actually half the opening angle) and is defined in **some angular units** (using UnitfulAngles, for example: u\"°\").\n\nEllipsoid has 6 additional fields all relating to various spatial transformations that convert the ellipsoid to a unit-sphere and back again. These are all CoordinateTransformations.\n\nExamples\n\nFor an ellipsoid upwards-pointing hemisphere with a center at (1,2,3), and radii (4,5,6):\n\njulia> Ellipsoid(Vec(1,2,3), Vec(4,5,6), Vec(0,0,1), 0.0)\nRayden.Ellipsoid([1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [0.0, 0.0, 1.0], 0.0, Translation(-1.0, -2.0, -3.0), LinearMap([0.25 0.0 0.0; 0.0 0.2 0.0; 0.0 0.0 0.166667]), AffineMap([0.25 0.0 0.0; 0.0 0.2 0.0; 0.0 0.0 0.166667], [-0.25, -0.4, -0.5]), Translation(1.0, 2.0, 3.0), LinearMap([4.0 0.0 0.0; 0.0 5.0 0.0; 0.0 0.0 6.0]), AffineMap([4.0 0.0 0.0; 0.0 5.0 0.0; 0.0 0.0 6.0], [1.0, 2.0, 3.0]))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.Interface",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.Interface",
    "category": "type",
    "text": "Interface(normal::AffineMap, n::Float64)\n\nBuild an optical interface from a AffineMap that transforms a point on the ellipsoid of the interface to the normal at that point, normal, and the refractive index ratio between the inside and the outside of the ellipsoid, n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.OpticUnit",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.OpticUnit",
    "category": "type",
    "text": "OpticUnit(body::Ellipsoid, interface::Interface, register::Bool, name::String)\n\nBuild an optical unit. register indicates whether this unit should register intersection points (thus functions as a retina).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.Ray",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.Ray",
    "category": "type",
    "text": "Ray(orig::Vec, dir::Vec)\n\nThe main Ray type with a ray origin, orig, and direction, dir. The ray\'s direction gets normalized.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.Vec",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.Vec",
    "category": "type",
    "text": "Vec = SVector{3,Float64}\n\nPoints and directions are just a point in 3D space best described as a static vector, SVector. Vec is an alias for that.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.advance!",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.advance!",
    "category": "function",
    "text": "advance!(r::Ray, s::Ellipsoid)\n\nFind the shortest point of intersection that is within the ellipsoid\'s dome and reassign the origin of the ray. Returns failure of the intersection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.bend!",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.bend!",
    "category": "function",
    "text": "bend!(r::Ray, i::Interface)\n\nRefract or reflect a ray with an interface. Update the direction of the ray. Returns if event failed, which is always false (see raytrace! for details why that is so).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.distance",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.distance",
    "category": "function",
    "text": "distance(orig::Vec, dir::Vec)\n\nReturn the two distances between a point with origin, orig, and direction, dir, and the two (potentially identical) intersection points with a unit-sphere. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#RayTraceEllipsoid.raytrace!",
    "page": "Docstrings",
    "title": "RayTraceEllipsoid.raytrace!",
    "category": "function",
    "text": "raytrace!(r::Ray, c::OpticUnit)\n\nAdvance a ray to the intersection point with an ellipsoid. If the intersection was successful, bend the ray. Updates the ray accordingly. Returns intersection failure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RayTraceEllipsoid.EllipsoidRayTraceEllipsoid.InterfaceRayTraceEllipsoid.OpticUnitRayTraceEllipsoid.RayRayTraceEllipsoid.RayTraceEllipsoidRayTraceEllipsoid.VecRayTraceEllipsoid.advance!RayTraceEllipsoid.bend!RayTraceEllipsoid.distanceRayTraceEllipsoid.evalRayTraceEllipsoid.includeRayTraceEllipsoid.raytrace!"
},

]}
