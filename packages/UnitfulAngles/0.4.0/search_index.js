var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UnitfulAngles-1",
    "page": "Readme",
    "title": "UnitfulAngles",
    "category": "section",
    "text": "(Image: Build status) (Image: Build Status) (Image: Coverage Status)A supplemental units package for Julia\'s Unitful.jl.UnitfulAngles.jl introduces all the angular units found in Wikipedia\'s articles Angle § Units, Angular unit and Circular sector.In addition to the Radian and Degree units already available in Unitful.jl, the following units are introduced: DoubleTurn, Turn, HalfTurn, Quadrant, Sextant, Octant, ClockPosition, HourAngle, CompassPoint, Hexacontade, BinaryRadian, DiameterPart, Gradian, Arcminute, and Arcsecond.Because all the trigonometric functions work correctly regardless of the type of their argument, there is no need to convert between the units. However, to specifically convert one unit to the other, use Unitful.jl\'s uconvert function:julia> using Unitful\n\njulia> uconvert(u\"clockPosition\", 128u\"brad\")\n6//1 clockPosition"
},

{
    "location": "#Special-features-1",
    "page": "Readme",
    "title": "Special features",
    "category": "section",
    "text": "All the trigonometric functions (sin, sinc, cos, cosc, tan, sec, csc, and cot) work as expected:\njulia> using UnitfulAngles\n\njulia> import UnitfulAngles: °, rad, octant\n\njulia> sin(30°)\n0.5\n\njulia> cos(π*rad)\n-1.0\n\njulia> tan(1octant)\n1.0\nIn order to get inverse functions (acos, acot, acsc, asec, asin, atan, and atan2) to return a specific unit, specify the desired unit as the first argument: \njulia> import UnitfulAngles.turn\n\njulia> asin(turn, 1)\n0.25 τ\nAs a bonus, you can also convert between an angle and Dates.Time:\njulia> convert(Dates.Time, 200u\"grad\")\n12:00:00\n\njulia> convert(u\"sextant\", Dates.Time(4,0,0))\n1.0 sextant"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnitfulAngles.@u_strUnitfulAngles.UnitfulAnglesUnitfulAngles.__init__UnitfulAngles.arcminuteUnitfulAngles.arcsecondUnitfulAngles.bradUnitfulAngles.clockPositionUnitfulAngles.compassPointUnitfulAngles.diameterPartUnitfulAngles.doubleTurnUnitfulAngles.evalUnitfulAngles.gradUnitfulAngles.halfTurnUnitfulAngles.hexacontadeUnitfulAngles.hourAngleUnitfulAngles.includeUnitfulAngles.localunitsUnitfulAngles.octantUnitfulAngles.quadrantUnitfulAngles.sextantUnitfulAngles.turn"
},

]}
