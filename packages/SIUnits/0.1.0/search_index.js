var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SIUnits-1",
    "page": "Readme",
    "title": "SIUnits",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: SIUnits) (Image: SIUnits)This package provides efficient unit-checked computations based for units in the SIUnits systems. To use this package use (after installing it using Pkg.add)using SIUnitsoptionally, you may also useusing SIUnits\nusing SIUnits.ShortUnitsinstead, to load a number of abbreviations into the current namespace (e.g. kg instead of KiloGram). These abbreviations are not loaded by default to avoid flooding the namespace where this is not desired.  Note that all examples in this README assume that the second form was used. To make the examples work with the first form, just substitute the written out names, e.g. Volt for V and Nano*Meter for nm."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "SIUnits.jl integrates into the number promotion system and all the usual arithmetic operations (+,-,*,/,^,sqrt) work as one would expect.  In particular, addition and subtraction is allowed between two quantities with the same units:julia> 1V + 2V\n3 kg m²s⁻³A⁻¹\n\njulia> (1//2)s - 1s\n-1//2 sHowever, you may not add or subtract quantities whose units differ:julia> 1s + 2V\nERROR: Unit mismatch. Got (s ) + (kg m²s⁻³A⁻¹)Consistently, multiplication and division increase or decrease the exponents  of the base units, e.g.:julia> 1N\n1 kg m s⁻²\n\njulia> 1N/m\n1 kg s⁻²\n\njulia> 1N*s^2\n1 kg mYou may also take square roots of quantities with units:julia> sqrt(1s^2)\n1.0 sHowever, currently, the result must have integral exponents. Support for fractional exponents may be added in the future:julia> sqrt(1m)\nERROR: InexactError()"
},

{
    "location": "#Converting-between-unitful-and-unitless-quantities-1",
    "page": "Readme",
    "title": "Converting between unitful and unitless quantities",
    "category": "section",
    "text": "SIUnits.jl does not define implicit convert methods to avoid silently losing unit information where this may be undesirable. Instead, SIUnits.jl extends the various forced type conversions e.g. float, float64 and int. Packages writing generic code should use these where a specific unitless value is  required. "
},

{
    "location": "#Implementation-details-1",
    "page": "Readme",
    "title": "Implementation details",
    "category": "section",
    "text": "Where possible (i.e. where the compiler can reason about the type of a variable), there is no runtime overhead. For example:julia> [1V, 2V, 3V]\n3-element Array{SIQuantity{Int64,2,1,-3,-1,0,0,0},1}:\n 1 kg m²s⁻³A⁻¹\n 2 kg m²s⁻³A⁻¹\n 3 kg m²s⁻³A⁻¹\n\njulia> sizeof(ans)\n24\nthis is the same amount of storage as that taken up by a simple array of three 64bit integers:julia> sizeof([1 2 3])\n24This shows that there is no runtime memory overhead. Similarly, the code  generated to add two 64bit integers:julia> code_native(+,(Uint64,Uint64))\n    .section    __TEXT,__text,regular,pure_instructions\nFilename: int.jl\nSource line: 42\n    push    RBP\n    mov RBP, RSP\nSource line: 42\n    add RDI, RSI\n    mov RAX, RDI\n    pop RBP\n    retis exactly the same as the code two add two 64bit integer quantities with units:julia> code_native(+,typeof((1V,2V)))\n    .section    __TEXT,__text,regular,pure_instructions\nFilename: /Users/kfischer/.julia/SIUnits/src/SIUnits.jl\nSource line: 122\n    push    RBP\n    mov RBP, RSP\nSource line: 122\n    add RDI, RSI\nSource line: 123\n    mov RAX, RDI\n    pop RBP\n    retThis is achieved by keeping track of the exponents as part of the type rather than of the value. An SIQuantity is defined as    immutable SIQuantity{T<:Number,m,kg,s,A,K,mol,cd} <: Number\n        val::T\n    endwhere the m,kg,s,A,K,mol,cd type parameters keep track of the exponents of  the respective base units. This definition is the core of the package. The rest makes it play nicely with the numeric promotion sytem to make sure that generic code will work just fine on SIQuantities."
},

]}
