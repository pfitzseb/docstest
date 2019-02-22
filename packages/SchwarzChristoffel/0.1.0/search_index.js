var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SchwarzChristoffel-1",
    "page": "Readme",
    "title": "SchwarzChristoffel",
    "category": "section",
    "text": "Documentation Build Status\n(Image: docs) (Image: Build Status) (Image: Build status) (Image: codecov)"
},

{
    "location": "#About-the-package-1",
    "page": "Readme",
    "title": "About the package",
    "category": "section",
    "text": "The purpose of this package is to enable easy construction and evaluation of the mapping from the region inside or outside the unit circle to the exterior of a closed polygon.The engine for constructing the mapping and its inverse is based on the work of Driscoll and Trefethen, Schwarz-Christoffel Mapping, Cambridge University Press, 2002."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package requires Julia 0.6- and above. It is compatible with Julia 1.0. It is a registered package, so (for Julia 0.6) it should be installed with:julia> Pkg.add(\"SchwarzChristoffel\")For Julia 0.7 and 1.0, use the Pkg REPL mode, e.g.:(v1.0) pkg> add SchwarzChristoffelSince it is still under development, you should runjulia> Pkg.update()to get the most recent version of the library and its dependencies. (In Julia 0.7 or 1.0, this would be just up in the Pkg REPL.Examples can be found in the documentation."
},

{
    "location": "autodocs/#SchwarzChristoffel.MapTypes.DerivativeMap",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.MapTypes.DerivativeMap",
    "category": "type",
    "text": "DerivativeMap(m::ConformalMap)\n\nConstructs new conformal maps from the first and second derivatives of the conformal map m.\n\nThese new conformal maps can be evaluated at a single or vector of points just as  m is. The first entry in the tuple returned is the first derivative, the second entry is the second derivative.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> dm = DerivativeMap(m);\n\njulia> ζ = [0.1,0.5-0.75im,-0.25-0.3im];\n\njulia> dz, ddz = dm(ζ;inside=true);\n\njulia> dz\n3-element Array{Complex{Float64},1}:\n  67.2068+76.6284im\n -1.11666+0.544576im\n  3.99129-5.30641im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.ExteriorMap",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.ExteriorMap",
    "category": "type",
    "text": "ExteriorMap(p::Polygon[;tol::Float64][,ncoeff::Int]) <: ConformalMap\n\nCreate a Schwarz-Christoffel map from the interior or exterior of the unit circle to the exterior of polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p)\nSchwarz-Christoffel map of unit circle to exterior of polygon with 4 vertices\n\nExteriorMap(p;tol=1e-12) manually sets the tolerance to 1e-12 (the default is 1e-8).\n\nExteriorMap(p;ncoeff=200) manually sets the number of coefficients of negative powers of the multipole expansion of the mapping to 200 (the default is 100).\n\nThe resulting map m can be evaluated at a single or vector of points ζ with m(ζ[;inside::Bool]). The points are assumed to lie outside the unit circle, unless the optional argument inside=true, in which case they are assumed to lie inside the circle.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> ζ = [0.1,0.5-0.75im,-0.25-0.3im];\n\njulia> m(ζ;inside=true)\n3-element Array{Complex{Float64},1}:\n   -6.9344-7.68965im\n 0.0439774-1.11249im\n   2.41181-0.044779im\n\njulia> ζ = [1.0+3.0im,-2.0-2.0im,0.0+1.1im];\n\njulia> m(ζ)\n3-element Array{Complex{Float64},1}:\n   0.81614+3.02956im\n  -2.25237-2.08523im\n -0.333104+0.975837im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.MapTypes.InverseMap",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.MapTypes.InverseMap",
    "category": "type",
    "text": "InverseMap(m::ConformalMap)\n\nConstructs the inverse conformal map of the conformal map m.\n\nThis inverse conformal map can be evaluated at a single or vector of points. Points should be outside the body. Whether the resulting point in the circle plane is interpreted inside or outside the circle is determined by the optional argument inside, which defaults to false.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> m⁻¹ = InverseMap(m);\n\njulia> ζ = [1.0+3.0im,-2.0-2.0im,0.1+1.1im];\n\njulia> m⁻¹(m(ζ))\n3-element Array{Complex{Float64},1}:\n  1.0+3.0im\n -2.0-2.0im\n  0.1+1.1im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.Jmoment",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.Jmoment",
    "category": "function",
    "text": "Jmoment(m::ConformalMap) -> Float64\n\nReturns the second area moment of the shape described by the mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> Jmoment(m)\n1.5768333333333333\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.KarmanTrefftzMap",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.KarmanTrefftzMap",
    "category": "type",
    "text": "KarmanTrefftzMap(ν,ϵ,δ,C[;N = 200]) <: ConformalMap\n\nCreate a map from the exterior of the unit circle to the exterior of a Karman-Trefftz airfoil.\n\nThe form of the mapping is\n\nfracz-nu Cz+nu C  =\nleft(fractildezeta-Ctildezeta+Cright)^nu\n\nwhere tildezeta are the coordinates in an intermediate plane, in which the circle is of radius a and centered at epsilon C e^idelta:\n\ntildezeta = epsilon C e^idelta + a zeta\n\nNote that aC geq 1 and is determined by the choices for epsilon and delta.\n\nThe trailing edge angle, (2-nu)pi is specified by nu. The thickness is controlled by epsilon C cosdelta and the camber by epsilon C sindelta. The airfoil chord length is approximately 4C. Generally, epsilon should be much smaller than 1 and delta between pi2 and pi.\n\nThe resulting map m can be evaluated at a single or a vector of points ζ with m(ζ).\n\nExample\n\njulia> ν = 1.9; ϵ = 0.1; δ = π; C = 0.25;\n\njulia> m = KarmanTrefftzMap(ν,ϵ,δ,C)\nKarman-Trefftz map\n\njulia> ζ = [1.0+3.0im,-2.0-2.0im,0.0+1.1im];\n\njulia> m(ζ)\n3-element Array{Complex{Float64},1}:\n   0.268188+0.764722im\n  -0.624265-0.502634im\n -0.0390996+0.126737im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Polygons.Polygon",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Polygons.Polygon",
    "category": "type",
    "text": "Polygon(x::Vector{Float64}, y::Vector{Float64})\n\nA polygon defined by its vertices, which must be provided in counter-clockwise order.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0])\nPolygon with 4 vertices at\n             (-1.0,-1.0) (0.2,-1.0) (1.0,0.5) (-1.0,1.0)\n             interior angles/π = [0.5, 0.656, 0.422, 0.422]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.PowerMap",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.PowerMap",
    "category": "type",
    "text": "PowerMap(c::Vector{ComplexF64}[;N = 200]) <: ConformalMap\n\nCreate a power series map from the exterior of the unit circle to the exterior of a shape defined by the power series coefficients c.\n\nThe form of the mapping is\n\nz(zeta) = c_1zeta + c_0 + sum_j=1^N_c fracc_-jzeta^j\n\nThe entries in c correspond as follows: c[1] rightarrow c_1, c[2] rightarrow c_0, c[3] rightarrow c_-1, etc.\n\nThe resulting map m can be evaluated at a single or a vector of points ζ with m(ζ).\n\nExample\n\njulia> c = ComplexF64[1,0,1/4];\n\njulia> m = PowerMap(c)\nPower series map\n\njulia> ζ = [1.0+3.0im,-2.0-2.0im,0.0+1.1im];\n\njulia> m(ζ)\n3-element Array{Complex{Float64},1}:\n   1.025+2.925im\n -2.0625-1.9375im\n     0.0+0.872727im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.addedmass",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.addedmass",
    "category": "function",
    "text": "addedmass(m::ConformalMap) -> Array{Float64,2}\n\nReturns the added mass matrix of the shape described by the conformal mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> addedmass(m)\n3×3 Array{Float64,2}:\n  0.725129    0.0944902  -1.37387\n  0.0944902   3.67634    -0.255119\n -1.37387    -0.255119    3.59231\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.area",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.area",
    "category": "function",
    "text": "area(m::ConformalMap) -> Float64\n\nReturns the area of the shape described by the mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> area(m)\n2.9\n\njulia> c = ComplexF64[1];\n\njulia> m = PowerMap(c);\n\njulia> area(m)\n3.141592653589793\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.centroid",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.centroid",
    "category": "function",
    "text": "centroid(m::ConformalMap) -> ComplexF64\n\nReturns the complex centroid position of the shape described by the mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> centroid(m)\n-0.20919540229885059 - 0.04022988505747128im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.coefficients",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.coefficients",
    "category": "function",
    "text": "coefficients(m::ConformalMap) -> Tuple{Vector{ComplexF64},Vector{ComplexF64}}\n\nReturns a tuple of vectors of the complex coefficients of the multipole expansion of the mapping z(zeta) described by m as well as the coefficients of the square magnitude of the mapping z(zeta)^2.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> ccoeff, dcoeff = coefficients(m);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Polygons.interiorangle",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Polygons.interiorangle",
    "category": "function",
    "text": "interiorangle(p::Polygon) -> Vector{Float64}\n\nReturns the vector of interior angles (divided by pi) of the polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> interiorangle(p)\n4-element Array{Float64,1}:\n 0.5\n 0.655958\n 0.422021\n 0.422021\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Polygons.isinpoly",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Polygons.isinpoly",
    "category": "function",
    "text": "isinpoly(z::Complex128,p::Polygon) -> Bool\n\nReturns true or false depending on whether z is inside or outside polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> isinpoly(0.0+0.0im,p)\ntrue\n\njulia> isinpoly(1.0+2.0im,p)\nfalse\n\n\n\n\n\nisinpoly(z::Complex128,p::Polygon,tol::Float64) -> Bool\n\nReturns true if z is inside or within distance tol of polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> isinpoly(-1.01+0.0im,p)\nfalse\n\njulia> isinpoly(-1.01+0.0im,p,1e-2)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.moments",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.moments",
    "category": "function",
    "text": "moments(m::ExteriorMap) -> Vector{ComplexF64}\n\nReturn the moments of the prevertices for exterior polygon mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> mom = moments(m);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Polygons.naca4",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Polygons.naca4",
    "category": "function",
    "text": "naca4(cam,pos,t[;np=20][,Zc=0.0+0.0im][,len=1.0]) -> Vector{Complex128}\n\nGenerates the vertices of a NACA 4-digit airfoil of chord length 1. The relative camber is specified by cam, the position of maximum camber (as fraction of chord) by pos, and the relative thickness by t.\n\nThe optional parameter np specifies the number of points on the upper or lower surface. The optional parameter Zc specifies the mean position of the vertices (which is set to the origin by default). The optional parameter len specifies the chord length.\n\nExample\n\njulia> w = naca4(0.0,0.0,0.12);\n\njulia> p = Polygon(w);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Exterior.parameters",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Exterior.parameters",
    "category": "function",
    "text": "parameters(m::ExteriorMap) -> Tuple{Vector{ComplexF64},ComplexF64}\n\nReturns a tuple of a vector of the prevertices and the complex factor of the exterior polygon mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> prev, C = parameters(m);\n\njulia> prev\n4-element Array{Complex{Float64},1}:\n       1.0+0.0im\n  0.376406-0.926455im\n -0.902383-0.430935im\n -0.186756+0.982406im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.summary",
    "page": "Docstrings",
    "title": "Base.summary",
    "category": "function",
    "text": "summary(m::ConformalMap)\n\nReturns a summary of data for a conformal map\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> summary(m)\nSchwarz-Christoffel map of unit circle to exterior of polygon with 4 vertices\n   vertices: (-1.0,-1.0), (0.2,-1.0), (1.0,0.5), (-1.0,1.0),\n   interior angles/π: 0.5, 0.656, 0.422, 0.422,\n   prevertices on circle: (1.0,0.0), (0.3764,-0.9265), (-0.9024,-0.4309), (-0.1868,0.9824),\n   prevertex angles/π: -0.7291, -0.3519, 0.1291, 0.7111,\n   constant = 0.6722 + 0.7669im, accuracy = 1.0e-8,\n   number of multipole coefficients = 100\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SchwarzChristoffel.Polygons.vertex",
    "page": "Docstrings",
    "title": "SchwarzChristoffel.Polygons.vertex",
    "category": "function",
    "text": "vertex(p::Polygon) -> Vector{Complex128}\n\nReturns the vector of vertices of the polygon p, in complex form.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> vertex(p)\n4-element Array{Complex{Float64},1}:\n -1.0-1.0im\n  0.2-1.0im\n  1.0+0.5im\n -1.0+1.0im\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SchwarzChristoffel.@compatSchwarzChristoffel.@dotcompatSchwarzChristoffel.@functorizeSchwarzChristoffel.@recipeSchwarzChristoffel.@seriesSchwarzChristoffel.@shorthandsSchwarzChristoffel.@userplotSchwarzChristoffel.ABGRSchwarzChristoffel.ADIN99SchwarzChristoffel.ADIN99dSchwarzChristoffel.ADIN99oSchwarzChristoffel.AGraySchwarzChristoffel.AGray32SchwarzChristoffel.AHSISchwarzChristoffel.AHSLSchwarzChristoffel.AHSVSchwarzChristoffel.ALCHabSchwarzChristoffel.ALCHuvSchwarzChristoffel.ALMSSchwarzChristoffel.ALabSchwarzChristoffel.ALuvSchwarzChristoffel.ARGBSchwarzChristoffel.ARGB32SchwarzChristoffel.AXYZSchwarzChristoffel.AYCbCrSchwarzChristoffel.AYIQSchwarzChristoffel.AbstractBackendSchwarzChristoffel.AbstractGraySchwarzChristoffel.AbstractLayoutSchwarzChristoffel.AbstractPlotSchwarzChristoffel.AbstractRGBSchwarzChristoffel.AlphaColorSchwarzChristoffel.AxyYSchwarzChristoffel.BGRSchwarzChristoffel.BGRASchwarzChristoffel.ColorSchwarzChristoffel.Color3SchwarzChristoffel.ColorAlphaSchwarzChristoffel.ColorTypesSchwarzChristoffel.ColorantSchwarzChristoffel.ColorantNormedSchwarzChristoffel.CompatSchwarzChristoffel.ConformalMapSchwarzChristoffel.DIN99SchwarzChristoffel.DIN99ASchwarzChristoffel.DIN99dSchwarzChristoffel.DIN99dASchwarzChristoffel.DIN99oSchwarzChristoffel.DIN99oASchwarzChristoffel.DerivativeMapSchwarzChristoffel.ExteriorSchwarzChristoffel.ExteriorMapSchwarzChristoffel.FractionalSchwarzChristoffel.GraySchwarzChristoffel.Gray24SchwarzChristoffel.GrayASchwarzChristoffel.HSBSchwarzChristoffel.HSISchwarzChristoffel.HSIASchwarzChristoffel.HSLSchwarzChristoffel.HSLASchwarzChristoffel.HSVSchwarzChristoffel.HSVASchwarzChristoffel.InverseMapSchwarzChristoffel.JmomentSchwarzChristoffel.JoukowskiMapSchwarzChristoffel.KarmanTrefftzMapSchwarzChristoffel.LCHabSchwarzChristoffel.LCHabASchwarzChristoffel.LCHuvSchwarzChristoffel.LCHuvASchwarzChristoffel.LMSSchwarzChristoffel.LMSASchwarzChristoffel.LabSchwarzChristoffel.LabASchwarzChristoffel.LuvSchwarzChristoffel.LuvASchwarzChristoffel.MapTypesSchwarzChristoffel.PolygonSchwarzChristoffel.PolygonsSchwarzChristoffel.PowerMapSchwarzChristoffel.PowerSeriesSchwarzChristoffel.PowerSeriesDerivativesSchwarzChristoffel.RGBSchwarzChristoffel.RGB1SchwarzChristoffel.RGB24SchwarzChristoffel.RGB4SchwarzChristoffel.RGBASchwarzChristoffel.RecipeDataSchwarzChristoffel.RecipesBaseSchwarzChristoffel.SchwarzChristoffelSchwarzChristoffel.Transparent3SchwarzChristoffel.TransparentColorSchwarzChristoffel.TransparentGraySchwarzChristoffel.TransparentRGBSchwarzChristoffel.XYZSchwarzChristoffel.XYZASchwarzChristoffel.YCbCrSchwarzChristoffel.YCbCrASchwarzChristoffel.YIQSchwarzChristoffel.YIQASchwarzChristoffel.addedmassSchwarzChristoffel.alphaSchwarzChristoffel.alphacolorSchwarzChristoffel.areaSchwarzChristoffel.base_color_typeSchwarzChristoffel.base_colorant_typeSchwarzChristoffel.blueSchwarzChristoffel.ccolorSchwarzChristoffel.centroidSchwarzChristoffel.coefficientsSchwarzChristoffel.colorSchwarzChristoffel.color_typeSchwarzChristoffel.coloralphaSchwarzChristoffel.comp1SchwarzChristoffel.comp2SchwarzChristoffel.comp3SchwarzChristoffel.evalSchwarzChristoffel.gamutmaxSchwarzChristoffel.gamutminSchwarzChristoffel.graySchwarzChristoffel.greenSchwarzChristoffel.includeSchwarzChristoffel.interiorangleSchwarzChristoffel.isinpolySchwarzChristoffel.mapcSchwarzChristoffel.mapreducecSchwarzChristoffel.momentsSchwarzChristoffel.myblueSchwarzChristoffel.mygreenSchwarzChristoffel.mygreen2SchwarzChristoffel.naca4SchwarzChristoffel.parametersSchwarzChristoffel.redSchwarzChristoffel.reducecSchwarzChristoffel.summarySchwarzChristoffel.vertexSchwarzChristoffel.xyYSchwarzChristoffel.xyYA"
},

]}
