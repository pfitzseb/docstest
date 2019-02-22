var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: DynamicalBilliards v2.0 Logo: The Julia billiard)A Julia package for dynamical billiard systems in two dimensions. The goals of the package is to provide a flexible and intuitive framework for fast implementation of billiard systems of arbitrary construction.Documentation Citation Travis AppVeyor Gitter\n(Image: ), (Image: ) (Image: status) (Image: Build Status) (Image: Build status) (Image: Gitter)If you have used this package for research that resulted in a publication, please be kind enough to cite the paper associated with DynamicalBilliards.jl. The DOI is https://doi.org/10.21105/joss.00458 and you can cite as:G. Datseris, [The Journal of Open Source Software 2, 458(2017)](https://doi.org/10.21105/joss.00458).or if you use BibTeX:@article{Datseris2017,\n  doi = {10.21105/joss.00458},\n  url = {https://doi.org/10.21105/joss.00458},\n  year  = {2017},\n  month = {nov},\n  publisher = {The Open Journal},\n  volume = {2},\n  number = {19},\n  pages = {458},\n  author = {George Datseris},\n  title = {{DynamicalBilliards}.jl: An easy-to-use,  modular and extendable Julia package for Dynamical Billiard systems in two dimensions.},\n  journal = {The Journal of Open Source Software}\n}"
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Please see the documentation for list of features, tutorials and installation instructions."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "This package is mainly developed by George Datseris. However, this development would not have been possible without significant help from other people:Lukas Hupe(@lhupe) Contributed the lyapunov spectrum calculation for magnetic propagation, implemented the boundary map function and did other contributions in bringing this package to version 2.0 (see here).\nDiego Tapias (@dapias) Contributed the lyapunov spectrum calculation method for straight propagation.\nDavid. P. Sanders (@dpsanders) and Ragnar Fleischmann contributed in fruitful discussions about the programming and physics of Billiard systems all-around.\nChristopher Rackauckas (@ChrisRackauckas) helped set-up the continuous integration, testing, documentation publishing and all around package development-related concepts.\nTony Kelman (@tkelman) helped significantly in the package publication process, especially in making it work correctly without destroying METADATA.jl."
},

{
    "location": "autodocs/#DynamicalBilliards.AbstractParticle",
    "page": "Docstrings",
    "title": "DynamicalBilliards.AbstractParticle",
    "category": "type",
    "text": "AbstractParticle\n\nParticle supertype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Antidot",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Antidot",
    "category": "type",
    "text": "Antidot{T<:AbstractFloat} <: Circular{T}\n\nDisk-like obstacle that allows propagation both inside and outside of the disk (mutable type). Used in ray-splitting billiards.\n\nFields:\n\nc::SVector{2,T} : Center.\nr::T : Radius.\npflag::Bool : Flag that keeps track of where the particle is currently propagating (pflag = propagation-flag). true stands for outside the disk, false for inside the disk. Defaults to true.\nname::String : Name of the obstacle given for user convenience. Defaults to \"Antidot\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Billiard",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Billiard",
    "category": "type",
    "text": "Billiard(obstacles...)\n\nConstruct a Billiard from given obstacles (tuple, vector, varargs).\n\nFor functions like boundarymap, it is expected (if possible) that the obstacles of the billiard are sorted, such that the arc-coordinate ξ around the billiard is increasing counter-clockwise.\n\nξ is measured as:\n\nthe distance from start point to end point in Walls\nthe arc length measured counterclockwise from the open face in Semicircles\nthe arc length measured counterclockwise from the rightmost point in Circulars\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Circular",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Circular",
    "category": "type",
    "text": "Circular{T<:AbstractFloat} <: Obstacle{T}\n\nCircular obstacle supertype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Disk",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Disk",
    "category": "type",
    "text": "Disk{T<:AbstractFloat}  <: Circular{T}\n\nDisk-like obstacle with propagation allowed outside of the circle (immutable type).\n\nFields:\n\nc::SVector{2,T} : Center.\nr::T : Radius.\nname::String : Some name given for user convenience. Defaults to \"Disk\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.DynamicalBilliards",
    "page": "Docstrings",
    "title": "DynamicalBilliards.DynamicalBilliards",
    "category": "module",
    "text": "A Julia package for dynamical billiard systems in two dimensions.\n\nThe goals of the package is to provide a flexible, easy-to-use and intuitive framework for fast implementation of billiard systems of arbitrary construction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Ellipse",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Ellipse",
    "category": "type",
    "text": "Ellipse{T<:AbstractFloat}  <: Obstacle{T}\n\nEllipse obstacle that also allows ray-splitting. The ellipse is always oriented on the x and y axis (although you can make whichever you want the major one).\n\nFields:\n\nc::SVector{2,T} : Center.\na::T : x semi-axis.\nb::T : y semi-axis.\npflag::Bool : Flag that keeps track of where the particle is currently propagating. true (default) is associated with being outside the ellipse.\nname::String : Some name given for user convenience. Defaults to \"Ellipse\".\n\nThe ellipse equation is given by\n\nleft(fracx - c1a right)^2+ left(fracy - c2bright)^2 = 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.FiniteWall",
    "page": "Docstrings",
    "title": "DynamicalBilliards.FiniteWall",
    "category": "type",
    "text": "FiniteWall{T<:AbstractFloat} <: Wall{T}\n\nWall obstacle imposing specular reflection during collision (immutable type). Slower than InfiniteWall, meant to be used for non-convex billiards.\n\nGiving a true value to the field isdoor designates this obstacle to be a Door. This is used in escapetime function. A Door is a obstacle of the billiard that the particle can escape from, thus enabling calculations of escape times.\n\nFields:\n\nsp::SVector{2,T} : Starting point of the Wall.\nep::SVector{2,T} : Ending point of the Wall.\nnormal::SVector{2,T} : Normal vector to the wall, pointing to where the particle will come from before a collision (pointing towards the inside of the billiard). The size of the vector is irrelevant since it is internally normalized.\nisdoor::Bool : Flag of whether this FiniteWall instance is a \"Door\".\nname::String : Name of the obstacle, given for user convenience. Defaults to \"Finite Wall\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.InfiniteWall",
    "page": "Docstrings",
    "title": "DynamicalBilliards.InfiniteWall",
    "category": "type",
    "text": "InfiniteWall{T<:AbstractFloat} <: Wall{T}\n\nWall obstacle imposing specular reflection during collision (immutable type). Faster than FiniteWall, meant to be used for convex billiards.\n\nFields:\n\nsp::SVector{2,T} : Starting point of the Wall.\nep::SVector{2,T} : Ending point of the Wall.\nnormal::SVector{2,T} : Normal vector to the wall, pointing to where the particle will come from before a collision (pointing towards the inside of the billiard). The size of the vector is irrelevant since it is internally normalized.\nname::String : Name of the obstacle, given for user convenience. Defaults to \"Wall\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.MagneticParticle",
    "page": "Docstrings",
    "title": "DynamicalBilliards.MagneticParticle",
    "category": "type",
    "text": "MagneticParticle(ic::AbstractVector{T}, ω::Real) # where ic = [x0, y0, φ0]\nMagneticParticle(x0, y0, φ0, ω)\nMagneticParticle(pos::SVector, vel::SVector, ω)\nMagneticParticle(p::AbstractParticle, ω)\n\nCreate a magnetic particle with initial conditions x0, y0, φ0 and angular velocity ω. It propagates as a circle instead of a line, with radius 1/abs(ω).\n\nThe field current_cell shows at which cell of a periodic billiard is the particle currently located.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.MushroomTools",
    "page": "Docstrings",
    "title": "DynamicalBilliards.MushroomTools",
    "category": "module",
    "text": "MushroomTools\n\nModule containing many functions helpful in simulating (perfect) mushroom billiards, see billiard_mushroom. Contains stuff like initializing efficiently regular or chaotic particles and functions that return the corresponding chaotic or regular phase-space volumes or portions. The functions V_3D_tot and V_3D_reg use equations derived in ref. [1].\n\nMade by Lukas Hupe.\n\nReferences\n\n[1] A. Barnett & T. Betcke, Chaos 17, 043125 (2007).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Obstacle",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Obstacle",
    "category": "type",
    "text": "Obstacle{<:AbstractFloat}\n\nObstacle supertype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Particle",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Particle",
    "category": "type",
    "text": "Particle(ic::Vector{T}) #where ic = [x0, y0, φ0]\nParticle(x0, y0, φ0)\nParticle(pos::SVector, vel::SVector)\n\nCreate a particle with initial conditions x0, y0, φ0. It propagates as a straight line.\n\nThe field current_cell shows at which cell of a periodic billiard is the particle currently located.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.PeriodicWall",
    "page": "Docstrings",
    "title": "DynamicalBilliards.PeriodicWall",
    "category": "type",
    "text": "PeriodicWall{T<:AbstractFloat} <: Wall{T}\n\nWall obstacle that imposes periodic boundary conditions upon collision (immutable type).\n\nFields:\n\nsp::SVector{2,T} : Starting point of the Wall.\nep::SVector{2,T} : Ending point of the Wall.\nnormal::SVector{2,T} : Normal vector to the wall, pointing to where the particle will come from (to the inside the billiard). The size of the vector is important! This vector is added to a particle\'s pos during collision. Therefore the size of the normal vector must be correctly associated with the size of the periodic cell.\nname::String : Name of the obstacle, given for user convenience. Defaults to \"Periodic wall\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.RandomDisk",
    "page": "Docstrings",
    "title": "DynamicalBilliards.RandomDisk",
    "category": "type",
    "text": "RandomDisk{T<:AbstractFloat} <: Circular{T}\n\nDisk-like obstacle that randomly (and uniformly) reflects colliding particles. The propagation is allowed outside of the circle.\n\nFields:\n\nc::SVector{2,T} : Center.\nr::T : Radius.\nname::String : Some name given for user convenience. Defaults to \"Random disk\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.RandomWall",
    "page": "Docstrings",
    "title": "DynamicalBilliards.RandomWall",
    "category": "type",
    "text": "RandomWall{T<:AbstractFloat} <: Wall{T}\n\nWall obstacle imposing (uniformly) random reflection during collision (immutable type).\n\nFields:\n\nsp::SVector{2,T} : Starting point of the Wall.\nep::SVector{2,T} : Ending point of the Wall.\nnormal::SVector{2,T} : Normal vector to the wall, pointing to where the particle is expected to come from (pointing towards the inside of the billiard).\nname::String : Name of the obstacle, given for user convenience. Defaults to \"Random wall\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.RaySplitter",
    "page": "Docstrings",
    "title": "DynamicalBilliards.RaySplitter",
    "category": "type",
    "text": "RaySplitter(idxs, transmission, refraction [, newangular]; affect)\n\nReturn a RaySplitter instance, used to perform raysplitting. idxs is a Vector{Int} with the indices of the obstacles that this RaySplitter corresponds to.\n\ntransmission, refraction and newangular are functions. Let φ be the angle of incidence and ω be the angular velocity and pflag the propagation flag (before transmission). The functions have the following signatures:\n\ntransmission(φ, pflag, ω) -> T, transmission probability.\nrefraction(φ, pflag, ω) -> θ, refraction angle. This angle is relative to the normal vector.\nnewangular(ω, pflag) -> newω, new angular velocity after transmission.\n\nThe above three functions use the same convention: the argument pflag is the one the obstacle has before transmission. For example, if a particle is outside an Antidot (with pflag = true here) and is transmitted inside the Antidot (pflag becomes false here), then all three functions will be given their second argument (the Boolean one) as true!\n\naffect is a function, and denotes which obstacles of the billiard are affected when transmission occurs at obstacle i (for which obstacles should the field pflag be reversed). Defaults to idxs = (i) -> i, i.e. only the colliding obstacle is affected. If you want many obstacles to be affected you could write idxs = (i) -> SVector(2,3,5), etc. Keep in mind that the only values of i that can be passed into this function are the ones that are given in the argument idxs!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Semicircle",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Semicircle",
    "category": "type",
    "text": "Semicircle{T<:AbstractFloat} <: Circular{T}\n\nObstacle that represents half a circle. Propagation is allowed only inside the semicircle.\n\nFields:\n\nc::SVector{2,T} : Center.\nr::T : Radius.\nfacedir::SVector{2,T} : Direction where the open face of the Semicircle is facing.\nname::String : Name of the obstacle given for user convenience. Defaults to \"Semicircle\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.SplitterWall",
    "page": "Docstrings",
    "title": "DynamicalBilliards.SplitterWall",
    "category": "type",
    "text": "SplitterWall{T<:AbstractFloat} <: Wall{T}\n\nWall obstacle imposing allowing for ray-splitting (mutable type).\n\nFields:\n\nsp::SVector{2,T} : Starting point of the Wall.\nep::SVector{2,T} : Ending point of the Wall.\nnormal::SVector{2,T} : Normal vector to the wall, pointing to where the particle will come from before a collision. The size of the vector is irrelevant.\npflag::Bool : Flag that keeps track of where the particle is currently propagating (pflag = propagation flag). true is associated with the normal vector the wall is instantiated with. Defaults to true.\nname::String : Name of the obstacle, given for user convenience. Defaults to \"Splitter wall\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.Wall",
    "page": "Docstrings",
    "title": "DynamicalBilliards.Wall",
    "category": "type",
    "text": "Wall{T<:AbstractFloat} <: Obstacle{T}\n\nWall obstacle supertype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.acceptable_raysplitter",
    "page": "Docstrings",
    "title": "DynamicalBilliards.acceptable_raysplitter",
    "category": "function",
    "text": "acceptable_raysplitter(raysplitters, bd::Billiard)\n\nReturn true if the given raysplitters can be used in conjuction with given billiard bd.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.acos1mx",
    "page": "Docstrings",
    "title": "DynamicalBilliards.acos1mx",
    "category": "function",
    "text": "Approximate arccos(1 - x) for x very close to 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.arcintervals",
    "page": "Docstrings",
    "title": "DynamicalBilliards.arcintervals",
    "category": "function",
    "text": "arcintervals(bd::Billiard) -> s\n\nGenerate a vector s, with entries being the delimiters of the arclengths of the obstacles of the billiard. The arclength from s[i] to s[i+1] is the arclength spanned by the ith obstacle.\n\ns is used to transform an arc-coordinate ξ from local to global and vice-versa. A local ξ becomes global by adding s[i] (where i is the index of current obstacle). A global ξ becomes local by subtracting s[i].\n\nSee also boundarymap, to_bcoords, from_bcoords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_bunimovich",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_bunimovich",
    "category": "function",
    "text": "billiard_bunimovich(l=1.0, w=1.0)\n\nReturn a vector of Obstacles that define a Buminovich billiard, also called a stadium. The length is considered without the attached semicircles, meaning that the full length of the billiard is l + w. The left and right edges of the stadium are Semicircles.\n\nbilliard_stadium is an alias of billiard_bunimovich.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_hexagonal_sinai",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_hexagonal_sinai",
    "category": "function",
    "text": "billiard_hexagonal_sinai(r, R, center = [0,0]; setting = \"standard\")\n\nCreate a sinai-like billiard, which is a hexagon of outer radius R, containing at its center (given by center) a disk of radius r. The setting keyword is passed to billiard_polygon.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_iris",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_iris",
    "category": "function",
    "text": "billiard_iris(a=0.2, b=0.4, w=1.0; setting = \"standard\")\n\nReturn a billiard that is a square of side w enclosing at its center an ellipse with semi axes a, b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_logo",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_logo",
    "category": "function",
    "text": "billiard_logo(;h=1.0, α=0.8, r=0.18, off=0.25) -> bd, ray\n\nCreate the billiard used as logo of DynamicalBilliards and return it along with the tuple of raysplitters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_lorentz",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_lorentz",
    "category": "function",
    "text": "billiard_lorentz(r=0.25, x=1.0, y=1.0)\n\nAlias for billiard_sinai(r,x,y; setting = \"periodic\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_mushroom",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_mushroom",
    "category": "function",
    "text": "billiard_mushroom(sl = 1.0, sw = 0.2, cr = 1.0, sloc = 0.0; door = true)\n\nCreate a mushroom billiard with stem length sl, stem width sw and cap radius cr. The center of the cap (which is Semicircle) is always at [0, sl]. The center of the stem is located at sloc.\n\nOptionally, the bottom-most Wall is a Door (see escapetime).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_polygon",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_polygon",
    "category": "function",
    "text": "billiard_polygon(n::Int, R, center = [0,0]; setting = \"standard\")\n\nReturn a vector of obstacles that defines a regular-polygonal billiard with n sides, radius r and given center.\n\nNote: R denotes the so-called outer radius, not the inner one.\n\nSettings\n\n\"standard\" : Specular reflection occurs during collision.\n\"periodic\" : The walls are PeriodicWall type, enforcing periodicity at the boundaries. Only available for n=4 or n=6.\n\"random\" : The velocity is randomized upon collision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_raysplitting_showcase",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_raysplitting_showcase",
    "category": "function",
    "text": "billiard_raysplitting_showcase(x=2.0, y=1.0, r1=0.3, r2=0.2) -> bd, rayspl\n\nShowcase example billiard for ray-splitting processes. A rectangle (x,y) with a SplitterWall at x/2 and two disks at each side, with respective radii r1, r2.\n\nNotice: This function returns a billiard bd as well as a rayspl dictionary!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_rectangle",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_rectangle",
    "category": "function",
    "text": "billiard_rectangle(x=1.0, y=1.0; setting = \"standard\")\n\nReturn a vector of obstacles that defines a rectangle billiard of size (x, y).\n\nSettings\n\n\"standard\" : Specular reflection occurs during collision.\n\"periodic\" : The walls are PeriodicWall type, enforcing periodicity at the boundaries\n\"random\" : The velocity is randomized upon collision.\n\"ray-splitting\" : All obstacles in the billiard allow for ray-splitting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_sinai",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_sinai",
    "category": "function",
    "text": "billiard_sinai(r=0.25, x=1.0, y=1.0; setting = \"standard\")\n\nReturn a vector of obstacles that defines a Sinai billiard of size (x, y) with a disk in its center, of radius r.\n\nIn the periodic case, the system is also known as \"Lorentz Gas\".\n\nSettings\n\n\"standard\" : Specular reflection occurs during collision.\n\"periodic\" : The walls are PeriodicWall type, enforcing periodicity at the boundaries\n\"random\" : The velocity is randomized upon collision.\n\"ray-splitting\" : All obstacles in the billiard allow for ray-splitting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.billiard_stadium",
    "page": "Docstrings",
    "title": "DynamicalBilliards.billiard_stadium",
    "category": "function",
    "text": "billiard_bunimovich(l=1.0, w=1.0)\n\nReturn a vector of Obstacles that define a Buminovich billiard, also called a stadium. The length is considered without the attached semicircles, meaning that the full length of the billiard is l + w. The left and right edges of the stadium are Semicircles.\n\nbilliard_stadium is an alias of billiard_bunimovich.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.bounce!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.bounce!",
    "category": "function",
    "text": "bounce!(p::AbstractParticle, bd::Billiard) → i, t, pos, vel\n\n\"Bounce\" the particle (advance for one collision) in the billiard. Takes care of finite-precision issues.\n\nReturn:\n\nindex of the obstacle that the particle just collided with\nthe time from the previous collision until the current collision t\nposition and velocity of the particle at the current collision (after the collision has been resolved!). The position is given in the unit cell of periodic billiards. Do pos += p.current_cell for the position in real space.\n\nbounce!(p, bd, raysplit) → i, t, pos, vel\n\nRay-splitting version of bounce!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.boundarymap",
    "page": "Docstrings",
    "title": "DynamicalBilliards.boundarymap",
    "category": "function",
    "text": "boundarymap(p, bd, t [,intervals]) → bmap, arclengths\n\nCompute the boundary map of the particle p in the billiard bd by evolving the particle for total amount t (either float for time or integer for collision number).\n\nReturn a vector of 2-vectors bmap and also arclengths(bd). The first entry of each element of bmap is the arc-coordinate at collisions xi, while the second  is the sine of incidence angle sin(phi_n).\n\nThe measurement direction of the arclengths of the individual obstacles is dictated by their order in bd. The sine of the angle is computed after specular reflection has taken place.\n\nThe returned values of this function can be used in conjuction with the function plot_boundarymap (requires using PyPlot) to plot the boundary map in an intuitive way.\n\nNotice - this function only works for normal specular reflection. Random reflections or ray-splitting will give unexpected results.\n\nSee also to_bcoords, boundarymap_portion. See parallelize for a parallelized version.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.boundarymap_portion",
    "page": "Docstrings",
    "title": "DynamicalBilliards.boundarymap_portion",
    "category": "function",
    "text": "boundarymap_portion(bd::Billiard, t, p::AbstractParticle, δξ, δφ = δξ)\n\nCalculate the portion of the boundary map of the billiard bd covered by the particle p when it is evolved for time t (float or integer). Notice that the\n\nThe boundary map is partitioned into boxes of size (δξ, δφ) and as the particle evolves visited boxes are counted. The returned ratio is this count divided by the total boxes of size (δξ, δφ) needed to cover the boundary map.\n\nImportant: This portion does not equate the portion the particle\'s orbit covers on the full, three dimensional phase space. Use the function phasespace_portion for that!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.cellsize",
    "page": "Docstrings",
    "title": "DynamicalBilliards.cellsize",
    "category": "function",
    "text": "cellsize(bd)\n\nReturn the delimiters xmin, ymin, xmax, ymax of the given obstacle/billiard.\n\nUsed in randominside(), error checking and plotting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.collision",
    "page": "Docstrings",
    "title": "DynamicalBilliards.collision",
    "category": "function",
    "text": "collision(p::AbstractParticle, o::Obstacle) → t, cp\n\nFind the collision (if any) between given particle and obstacle. Return the time until collision and the estimated collision point cp.\n\nReturns Inf, SV(0, 0) if the collision is not possible or if the collision happens backwards in time.\n\nIt is the duty of collision to avoid incorrect collisions when the particle is on top of the obstacle (or very close).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.distance",
    "page": "Docstrings",
    "title": "DynamicalBilliards.distance",
    "category": "function",
    "text": "distance(p::AbstractParticle, o::Obstacle)\n\nReturn the signed distance between particle p and obstacle o, based on p.pos. Positive distance corresponds to the particle being on the allowed region of the Obstacle. E.g. for a Disk, the distance is positive when the particle is outside of the disk, negative otherwise.\n\ndistance(p::AbstractParticle, bd::Billiard)\n\nReturn minimum distance(p, obst) for all obst in bd. If the distance(p, bd) is negative this means that the particle is outside the billiard.\n\nAll distance functions can also be given a position (vector) instead of a particle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.ellipse_arclength",
    "page": "Docstrings",
    "title": "DynamicalBilliards.ellipse_arclength",
    "category": "function",
    "text": "ellipse_arclength(θ, e::Ellipse)\n\nReturn the arclength of the ellipse that spans angle θ (in normal coordinates, not in the ellipse parameterization). Expects θ to be in [0, 2π].\n\nAfter properly calculating the\n\nd=bEbigl(tan^-1(abtan(theta))big1-(ab)^2bigr)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.escapetime",
    "page": "Docstrings",
    "title": "DynamicalBilliards.escapetime",
    "category": "function",
    "text": "escapetime([p,] bd, t; warning = false)\n\nCalculate the escape time of a particle p in the billiard bd, which is the time until colliding with any \"door\" in bd. As a \"door\" is considered any FiniteWall with field isdoor = true.\n\nIf the particle evolves for more than t (integer or float) without colliding with the Door (i.e. escaping) the returned result is Inf.\n\nA warning can be thrown if the result is Inf. Enable this using the keyword warning = true.\n\nIf a particle is not given, a random one is picked through randominside. See parallelize for a parallelized version.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.evolve",
    "page": "Docstrings",
    "title": "DynamicalBilliards.evolve",
    "category": "function",
    "text": "evolve(p, args...)\n\nSame as evolve! but copies the particle instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.evolve!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.evolve!",
    "category": "function",
    "text": "evolve!([p::AbstractParticle,] bd::Billiard, t)\n\nEvolve the given particle p inside the billiard bd. If t is of type AbstractFloat, evolve for as much time as t. If however t is of type Int, evolve for as many collisions as t. Return the states of the particle between collisions.\n\nThis function mutates the particle, use evolve otherwise. If a particle is not given, a random one is picked through randominside.\n\nReturn\n\nct::Vector{T} : Collision times.\nposs::Vector{SVector{2,T}} : Positions at the collisions.\nvels::Vector{SVector{2,T}}) : Velocities exactly after the collisions.\nω, either T or Vector{T} : Angular velocity/ies (returned only for magnetic particles).\n\nThe time ct[i+1] is the time necessary to reach state poss[i+1], vels[i+1] starting from the state poss[i], vels[i]. That is why ct[1] is always 0 since poss[1], vels[1] are the initial conditions. The angular velocity ω[i] is the one the particle has while propagating from state poss[i], vels[i] to i+1.\n\nNotice that at any point, the velocity vector vels[i] is the one obdained after the specular reflection of the i-1th collision.\n\nRay-splitting billiards\n\nevolve!(p, bd, t, raysplitters)\n\nTo implement ray-splitting, the evolve! function is supplemented with a fourth argument, raysplitters which is a tuple of RaySplitter instances. Notice that evolve always mutates the billiard if ray-splitting is used! For more information and instructions on using ray-splitting please visit the official documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.find_cyclotron",
    "page": "Docstrings",
    "title": "DynamicalBilliards.find_cyclotron",
    "category": "function",
    "text": "find_cyclotron(p::MagneticParticle)\n\nReturn the center of cyclotron motion of the particle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.from_bcoords",
    "page": "Docstrings",
    "title": "DynamicalBilliards.from_bcoords",
    "category": "function",
    "text": "from_bcoords(ξ, sφ, o::Obstacle) -> pos, vel\n\nConvert the boundary coordinates ξ, sφ on the obstacle to real coordinates pos, vel.\n\nNote that vel always points away from the obstacle.\n\nThis function is the inverse of to_bcoords.\n\n\n\n\n\nfrom_bcoords(ξ, sφ, bd::Billiard, intervals = arcintervals(bd))\n\nSame as above, but now ξ is considered to be the global arclength, parameterizing the entire billiard, instead of a single obstacle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.isphysical",
    "page": "Docstrings",
    "title": "DynamicalBilliards.isphysical",
    "category": "function",
    "text": "isphysical(raysplitter(s))\n\nReturn true if the given raysplitters have physically plausible properties.\n\nSpecifically, check if (φ is the incidence angle, θ the refraction angle):\n\nCritical angle means total reflection: If θ(φ) ≥ π/2 then Tr(φ) = 0\nTransmission probability is even function: Tr(φ) ≈ Tr(-φ) at ω = 0\nRefraction angle is odd function: θ(φ) ≈ -θ(-φ) at ω = 0\nRay reversal is true: θ(θ(φ, pflag, ω), !pflag, ω) ≈ φ\nMagnetic conservation is true: (ωnew(ωnew(ω, pflag), !pflag) ≈ ω\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.ispinned",
    "page": "Docstrings",
    "title": "DynamicalBilliards.ispinned",
    "category": "function",
    "text": "ispinned(p::MagneticParticle, bd::Billiard)\n\nReturn true if the particle is pinned with respect to the billiard. Pinned particles either have no valid collisions (go in circles forever) or all their valid collisions are with periodic walls, which again means that they go in cirles for ever.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.law_of_refraction",
    "page": "Docstrings",
    "title": "DynamicalBilliards.law_of_refraction",
    "category": "function",
    "text": "law_of_refraction(n1, n2 = 1.0) -> t, r\n\nCreate transmission and refraction functions t, r that follow Snell\'s law, i.e. the transmission probability is set to 1.0 except for the case of total internal reflection. \n\nn1 is the index of refraction for the pflag = false side of an obstacle, while n2 is the index of refraction for pflag = true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.lyapunovspectrum",
    "page": "Docstrings",
    "title": "DynamicalBilliards.lyapunovspectrum",
    "category": "function",
    "text": "lyapunovspectrum([p::AbstractParticle,] bd::Billiard, t)\n\nReturns the finite time lyapunov exponents (averaged over time t) for a given particle in a billiard table using the method outlined in [1].\n\nReturns zeros for pinned particles.\n\nIf a particle is not given, a random one is picked through randominside. See parallelize for a parallelized version.\n\n[1] : Ch. Dellago et al, Phys. Rev. E 53 (1996)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.meancollisiontime",
    "page": "Docstrings",
    "title": "DynamicalBilliards.meancollisiontime",
    "category": "function",
    "text": "meancollisiontime([p,] bd, t) → κ\n\nCompute the mean collision time κ of the particle p in the billiard bd by evolving for total amount t (either float for time or integer for collision number).\n\nCollision times are counted only between obstacles that are not PeriodicWall.\n\nIf a particle is not given, a random one is picked through randominside. See parallelize for a parallelized version.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.next_collision",
    "page": "Docstrings",
    "title": "DynamicalBilliards.next_collision",
    "category": "function",
    "text": "next_collision(p::AbstractParticle, bd::Billiard) -> i, tmin, cp\n\nCompute the collision across all obstacles in bd and find the minimum one. Return the index of colliding obstacle, the time and the collision point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.normalvec",
    "page": "Docstrings",
    "title": "DynamicalBilliards.normalvec",
    "category": "function",
    "text": "normalvec(obst::Obstacle, position)\n\nReturn the vector normal to the obstacle\'s boundary at the given position (which is assumed to be very close to the obstacle\'s boundary).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.parallelize",
    "page": "Docstrings",
    "title": "DynamicalBilliards.parallelize",
    "category": "function",
    "text": "parallelize(f, bd::Billiard, t, particles; partype = :threads)\n\nParallelize function f across the available particles. The parallelization type can be :threads or :pmap, which use threads or a worker pool initialized with addprocs before using DynamicalBilliards.\n\nparticles can be:\n\nA Vector of particles.\nAn integer n optionally followed by an angular velocity ω. This uses randominside.\n\nThe functions usable here are:\n\nmeancollisiontime\nescapetime\nlyapunovspectrum (returns only the maximal exponents)\nboundarymap (returns vector of vectors of 2-vectors and arcintervals)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.periodicity!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.periodicity!",
    "category": "function",
    "text": "periodicity!(p::AbstractParticle, w::PeriodicWall)\n\nPerform periodicity conditions of w on p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.perturbationgrowth",
    "page": "Docstrings",
    "title": "DynamicalBilliards.perturbationgrowth",
    "category": "function",
    "text": "perturbationgrowth([p,] bd, t) -> ts, Rs, is\n\nCalculate the evolution of the perturbation vector Δ along the trajectory of p in bd for total time t. Δ is initialised as [1,1,1,1].\n\nIf a particle is not given, a random one is picked through randominside. Returns empty lists for pinned particles.\n\nDescription\n\nThis function safely computes the time evolution of a perturbation vector using the linearized dynamics of the system, as outlined by [1]. Because the dynamics are linear, we can safely re-normalize the perturbation vector after every collision (otherwise the perturbations grow to infinity).\n\nImmediately before and after every collison, this function computes\n\nthe current time.\nthe element-wise ratio of Δ with its previous value\nthe obstacle index of the current obstacle\n\nand returns these in three vectors ts, Rs, is.\n\nTo obtain the actual evolution of the perturbation vector you can use the function perturbationevolution(Rs) which simply does\n\nΔ = Vector{SVector{4,Float64}}(undef, length(R))\nΔ[1] = R[1]\nfor i in 2:length(R)\n    Δ[i] = R[i] .* Δ[i-1]\nend\n\n[1] : Ch. Dellago et al, Phys. Rev. E 53 (1996)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.phasespace_portion",
    "page": "Docstrings",
    "title": "DynamicalBilliards.phasespace_portion",
    "category": "function",
    "text": "phasespace_portion(bd::Billiard, t, p::AbstractParticle, δξ, δφ = δξ)\n\nCalculate the portion of the phase space of the billiard bd covered by the particle p when it is evolved for time t (float or integer).\n\nThis function extends boundarymap_portion using a novel approach. For each visited box of the boundary map, bounce! attributes a third dimension (the collision time, equal to collision distance) which expands the two dimensions of the boundary map to the three dimensions of the phase space.\n\nThe true phase space portion is then the weighted portion of boxes visited by the particle, divided by the total weighted sum of boxes. The weights of the boxes are the collision times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.project_to_line",
    "page": "Docstrings",
    "title": "DynamicalBilliards.project_to_line",
    "category": "function",
    "text": "project_to_line(point, c, n)\n\nProject given point to line that contains point c and has normal vector n.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.propagate!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.propagate!",
    "category": "function",
    "text": "propagate!(p::AbstractParticle, t)\n\nPropagate the particle p for given time t, changing appropriately the the p.pos and p.vel fields.\n\npropagate!(p, position, t)\n\nDo the same, but take advantage of the already calculated position that the particle should end up at.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.propagate_offset!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.propagate_offset!",
    "category": "function",
    "text": "propagate_offset!(offset::MArray{Tuple{4,4},T}, p::AbstractParticle)\n\nComputes the linearized evolution of the offset vectors during propagation for a time interval t\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.psos",
    "page": "Docstrings",
    "title": "DynamicalBilliards.psos",
    "category": "function",
    "text": "psos(bd::Billiard, plane::InfiniteWall, t, particles)\n\nCompute the Poincaré section of the particles with the given plane, by evolving each one for time t (either integer or float) inside bd.\n\nThe plane can be an InfiniteWall of any orientation, however only crossings of the plane such that dot(velocity, normal) < 0 are allowed, with normal the normal unit vector of the plane.\n\nparticles can be:\n\nA single particle.\nA Vector of particles.\nAn integer n optionally followed by an angular velocity ω.\n\nReturn the positions poss and velocities vels at the instances of crossing the plane. If given more than one particle, the result is a vector of vectors of vectors.\n\nNotice - This function can handle pinned particles. If a pinned particle can intersect with the plane, then an intersection is returned. If however it can\'t then empty vectors are returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.randominside",
    "page": "Docstrings",
    "title": "DynamicalBilliards.randominside",
    "category": "function",
    "text": "randominside(bd::Billiard [, ω])\n\nReturn a particle with random allowed initial conditions inside the given billiard. If supplied with a second argument the type of the returned particle is MagneticParticle, with angular velocity ω.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.raysplit_indices",
    "page": "Docstrings",
    "title": "DynamicalBilliards.raysplit_indices",
    "category": "function",
    "text": "raysplit_indices(bd::Billiard, raysplitters::Tuple)\n\nCreate a vector of integers. The ith entry tells you which entry of the raysplitters tuple is associated with the ith obstacle of the billiard.\n\nIf the ith entry is 0, this means that the obstacle does not do raysplitting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.real_pos",
    "page": "Docstrings",
    "title": "DynamicalBilliards.real_pos",
    "category": "function",
    "text": "real_pos(ξ, o::Obstacle)\n\nConverts the arclength coordinate ξ relative to the obstacle o into a real space position vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.realangle",
    "page": "Docstrings",
    "title": "DynamicalBilliards.realangle",
    "category": "function",
    "text": "realangle(p::MagneticParticle, o::Obstacle, I) -> θ\n\nGiven the intersection point I of the trajectory of a magnetic particle p with some obstacle o, find the real angle that will be spanned until the particle collides with the obstacle.\n\nThe function also takes care of problems that may arise when particles are very close to the obstacle\'s boundaries, due to floating-point precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.relocate!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.relocate!",
    "category": "function",
    "text": "relocate!(p::AbstractParticle, o::Obstacle, t, cp)\n\nPropagate the particle to cp and propagate velocities for time t. Check if it is on the correct side of the obstacle. If not, change the particle position by distance along the normalvec of the obstacle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.reset_billiard!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.reset_billiard!",
    "category": "function",
    "text": "reset_billiard!(bd)\n\nSets the pflag field of all ray-splitting obstacles of a billiard table to true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.resolvecollision!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.resolvecollision!",
    "category": "function",
    "text": "resolvecollision!(p::AbstractParticle, o::Obstacle)\n\nResolve the collision between particle p and obstacle o, depending on the type of o (do specular! or periodicity!).\n\nresolvecollision!(p, o, T::Function, θ::Function, new_ω::Function)\n\nThis is the ray-splitting implementation. The three functions given are drawn from the ray-splitting dictionary that is passed directly to evolve!(). For a calculated incidence angle φ, if T(φ) > rand(), ray-splitting occurs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.specular!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.specular!",
    "category": "function",
    "text": "specular!(p::AbstractParticle, o::Obstacle)\n\nPerform specular reflection based on the normal vector of the Obstacle.\n\nIn the case where the given obstacle is a RandomObstacle, the specular reflection randomizes the velocity instead (within -π/2+ε to π/2-ε of the normal vector).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.timeseries",
    "page": "Docstrings",
    "title": "DynamicalBilliards.timeseries",
    "category": "function",
    "text": "timeseries(p, args...; kwargs...)\n\nNon-mutating version of timeseries!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.timeseries!",
    "page": "Docstrings",
    "title": "DynamicalBilliards.timeseries!",
    "category": "function",
    "text": "timeseries!([p::AbstractParticle,] bd::Billiard, t; dt, warning)\n\nEvolves the given particle p inside the billiard bd.  If t is of type AbstractFloat, evolve for as much time as t. If however t is of type Int, evolve for as many collisions as t. Returns the time series for position and velocity as well as the time vector.\n\nThis function mutates the particle, use timeseries otherwise. If a particle is not given, a random one is picked through randominside.\n\nThe keyword argument dt is the time step used for interpolating the time series in between collisions. dt is capped by the collision time, as the interpolation always stops at collisions. For straight propagation dt = Inf, while for magnetic dt = 0.01.\n\nFor pinned magnetic particles, timeseries! issues a warning and returns the trajectory of the particle. If t is integer, the trajectory is evolved for one full circle only\n\nReturn:\n\nx position time-series\ny position time-series\nx velocity time-series\ny velocity time-series\ntime vector\n\nRay-splitting billiards\n\ntimeseries!(p, bd, t, raysplitters; ...)\n\nTo implement ray-splitting, the timeseries! function is supplemented with a fourth argument, raysplitters which is a tuple of RaySplitter instances. Notice that timeseries always mutates the billiard if ray-splitting is used! For more information and instructions on using ray-splitting please visit the official documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.to_bcoords",
    "page": "Docstrings",
    "title": "DynamicalBilliards.to_bcoords",
    "category": "function",
    "text": "to_bcoords(pos, vel, o::Obstacle) -> ξ, sφ\n\nConvert the real coordinates pos, vel to boundary coordinates (also known as Birkhoff coordinates) ξ, sφ, assuming that pos is on the obstacle.\n\nξ is the arc-coordinate, i.e. it parameterizes the arclength of the obstacle. sφ is the sine of the angle between the velocity vector and the vector normal to the obstacle.\n\nThe arc-coordinate ξ is measured as:\n\nthe distance from start point to end point in Walls\nthe arc length measured counterclockwise from the open face in Semicircles\nthe arc length measured counterclockwise from the rightmost point in Circular/Ellipses\n\nNotice that this function returns the local arclength. To get the global arclength parameterizing an entire billiard, simply do ξ += arcintervals(bd)[i] if the index of obstacle o is i.\n\nSee also from_bcoords, which is the inverse function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.totallength",
    "page": "Docstrings",
    "title": "DynamicalBilliards.totallength",
    "category": "function",
    "text": "totallength(o::Obstacle)\n\nReturn the total boundary length of o.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalBilliards.translate",
    "page": "Docstrings",
    "title": "DynamicalBilliards.translate",
    "category": "function",
    "text": "translate(obst::Obstacle, vector)\n\nCreate a copy of the given obstacle with its position translated by vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DynamicalBilliards.AbstractParticleDynamicalBilliards.AntidotDynamicalBilliards.BilliardDynamicalBilliards.CLAMPING_ANGLEDynamicalBilliards.CircularDynamicalBilliards.DiskDynamicalBilliards.DynamicalBilliardsDynamicalBilliards.EllipseDynamicalBilliards.FiniteWallDynamicalBilliards.InfiniteWallDynamicalBilliards.MagneticParticleDynamicalBilliards.MushroomToolsDynamicalBilliards.ObstacleDynamicalBilliards.ParticleDynamicalBilliards.PeriodicWallDynamicalBilliards.RandomDiskDynamicalBilliards.RandomWallDynamicalBilliards.RaySplitterDynamicalBilliards.SVDynamicalBilliards.SVectorDynamicalBilliards.SemicircleDynamicalBilliards.SplitterWallDynamicalBilliards.TestingDynamicalBilliards.WallDynamicalBilliards.__init__DynamicalBilliards._get_nameDynamicalBilliards._getvalDynamicalBilliards._okayDynamicalBilliards._randominsideDynamicalBilliards._reset_ispinnedDynamicalBilliards._retinitDynamicalBilliards._ξDynamicalBilliards.acceptable_raysplitterDynamicalBilliards.accuracyDynamicalBilliards.acos1mxDynamicalBilliards.allaffectedDynamicalBilliards.angleclampDynamicalBilliards.arcintervalsDynamicalBilliards.billiard_bunimovichDynamicalBilliards.billiard_hexagonal_sinaiDynamicalBilliards.billiard_irisDynamicalBilliards.billiard_logoDynamicalBilliards.billiard_lorentzDynamicalBilliards.billiard_mushroomDynamicalBilliards.billiard_polygonDynamicalBilliards.billiard_raysplitting_showcaseDynamicalBilliards.billiard_rectangleDynamicalBilliards.billiard_sinaiDynamicalBilliards.billiard_stadiumDynamicalBilliards.bounce!DynamicalBilliards.boundarymapDynamicalBilliards.boundarymap_portionDynamicalBilliards.cellsizeDynamicalBilliards.collisionDynamicalBilliards.cossinDynamicalBilliards.cross2DDynamicalBilliards.curvatureDynamicalBilliards.cyclotronDynamicalBilliards.default_affectDynamicalBilliards.default_angularDynamicalBilliards.distanceDynamicalBilliards.distance_initDynamicalBilliards.ellipse_arclengthDynamicalBilliards.escapeindDynamicalBilliards.escapetimeDynamicalBilliards.escapetime!DynamicalBilliards.evalDynamicalBilliards.evolveDynamicalBilliards.evolve!DynamicalBilliards.extrapolateDynamicalBilliards.find_cyclotronDynamicalBilliards.from_bcoordsDynamicalBilliards.incidence_angleDynamicalBilliards.includeDynamicalBilliards.increment_counterDynamicalBilliards.isdoorDynamicalBilliards.isperiodicDynamicalBilliards.isphysicalDynamicalBilliards.ispinnedDynamicalBilliards.istransmittedDynamicalBilliards.law_of_refractionDynamicalBilliards.lyapunovspectrumDynamicalBilliards.lyapunovspectrum!DynamicalBilliards.meancollisiontimeDynamicalBilliards.meancollisiontime!DynamicalBilliards.next_collisionDynamicalBilliards.nocollisionDynamicalBilliards.normalvecDynamicalBilliards.parallelizeDynamicalBilliards.periodicity!DynamicalBilliards.pertubationevolutionDynamicalBilliards.perturbationevolutionDynamicalBilliards.perturbationgrowthDynamicalBilliards.perturbationgrowth!DynamicalBilliards.phasespace_portionDynamicalBilliards.pmap_plDynamicalBilliards.project_to_lineDynamicalBilliards.propagate!DynamicalBilliards.propagate_offset!DynamicalBilliards.propagate_posvelDynamicalBilliards.proper_ellipse_arclengthDynamicalBilliards.psosDynamicalBilliards.randominsideDynamicalBilliards.raysplit_indicesDynamicalBilliards.real_posDynamicalBilliards.realangleDynamicalBilliards.relocate!DynamicalBilliards.relocate_rayspl!DynamicalBilliards.reset_billiard!DynamicalBilliards.resolvecollision!DynamicalBilliards.sixsqrtDynamicalBilliards.specular!DynamicalBilliards.supports_raysplittingDynamicalBilliards.threads_plDynamicalBilliards.timeprec_raysplDynamicalBilliards.timeseriesDynamicalBilliards.timeseries!DynamicalBilliards.to_bcoordsDynamicalBilliards.totallengthDynamicalBilliards.translateDynamicalBilliards.δpindDynamicalBilliards.δqind"
},

]}
