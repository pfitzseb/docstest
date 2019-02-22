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
    "text": "![travis][travis-img] ![coveralls][coveralls-img] ![codecov][codecov-img][travis-img]: https://img.shields.io/travis/yakir12/UnitfulAngles.jl/master.svg?label=travis [coveralls-img]: https://img.shields.io/codecov/c/github/yakir12/UnitfulAngles.jl/master.svg?label=coveralls [codecov-img]: https://img.shields.io/codecov/c/github/yakir12/UnitfulAngles.jl/master.svg?label=codecovA supplemental units package for Julia\'s Unitful.jl.UnitfulAngles.jl introduces all the angular units found in Wikipedia\'s articles Angle § Units, Angular unit and Circular sector.In addition to the Radian and Degree units already available in Unitful.jl, the following units are introduced: Turn, HalfTurn, Quadrant, Sextant, Octant, ClockPosition, HourAngle, CompassPoint, Hexacontade, BinaryRadian, DiameterPart, Gradian, Arcminute, and Arcsecond.Because all the trigonometric functions work correctly regardless of the type of their argument, there is no need to convert between the units. However, to specifically convert one unit to the other, use Unitful.jl\'s uconvert function:julia> using Unitful\n\njulia> uconvert(u\"clockPosition\", 128u\"brad\")\n6//1 clockPosition"
},

{
    "location": "#Special-features-1",
    "page": "Readme",
    "title": "Special features",
    "category": "section",
    "text": "All the trigonometric functions (sin, sinc, cos, cosc, tan, sec, csc, and cot) work as expected:julia> using UnitfulAngles\n\njulia> import UnitfulAngles: °, rad, octant\n\njulia> sin(30°)\n0.5\n\njulia> cos(π*rad)\n-1.0\n\njulia> tan(1octant)\n1.0In order to get inverse functions (acos, acot, acsc, asec, asin, atan, and atan2) to return a specific unit, specify the desired unit as the first argument: julia> import UnitfulAngles.turn\n\njulia> asin(turn, 1)\n0.25 τAs a bonus, you can also convert between an angle and Dates.Time:julia> convert(Dates.Time, 200u\"grad\")\n12:00:00\n\njulia> convert(u\"sextant\", Dates.Time(4,0,0))\n1.0 sextant"
},

]}
