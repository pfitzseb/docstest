var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WignerSymbols-1",
    "page": "Readme",
    "title": "WignerSymbols",
    "category": "section",
    "text": "(Image: Build Status) (Image: License) (Image: Coverage Status) (Image: codecov.io)Compute Wigner\'s 3j and 6j symbols, and related quantities such as Clebsch-Gordan coefficients and Racah\'s symbols."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "Latest version is compatible with Julia v0.7 only, but older versions can be installed on Julia v0.6."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install with the new package manager via ]add WignerSymbols orusing Pkg\nPkg.add(\"WignerSymbols\")"
},

{
    "location": "#Available-functions-1",
    "page": "Readme",
    "title": "Available functions",
    "category": "section",
    "text": "While the following function signatures are probably self-explanatory, you can query help for them in the Julia REPL to get further details.wigner3j(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃, m₁, m₂, m₃ = -m₂-m₁) -> ::T\nwigner6j(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃, j₄, j₅, j₆) -> ::T\nclebschgordan(T::Type{<:AbstractFloat} = Float64, j₁, m₁, j₂, m₂, j₃, m₃ = m₁+m₂) -> ::T\nracahV(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃, m₁, m₂, m₃ = -m₁-m₂) -> ::T\nracahW(T::Type{<:AbstractFloat} = Float64, j₁, j₂, J, j₃, J₁₂, J₂₃) -> ::T\nδ(j₁, j₂, j₃) -> ::Bool\nΔ(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃) -> ::TThe package also defines the HalfInteger type that can be used to represent half-integer values. Construct if as HalfInteger(a::Real) or HalfInteger(numerator::Integer, denominator::Integer). Furthermore, the range operator a:b can be used to create ranges of HalfInteger values (a HalfIntegerRange)."
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "Largely based on reading the paper (but not the code):[1] H. T. Johansson and C. Forssén, SIAM Journal on Scientific Compututing 38 (2016) 376-384 (arXiv:1504.08329)with some additional modifications to further improve efficiency for large j (angular momenta quantum numbers).In particular, 3j and 6j symbols are computed exactly, in the format √(r) * s where r and s are exactly computed as Rational{BigInt}, using an intermediate representation based on prime number factorization. As a consequence thereof, all of the above functions can be called requesting BigFloat precision for the result. There is currently no convenient syntax for obtaining r and s directly (see TODO).Most intermediate calculations (prime factorizations of numbers and their factorials, conversion between prime powers and BigInts) are cached to improve the efficiency, but this can result in large use of memory when querying Wigner symbols for large values of j.Also uses ideas from[2] J. Rasch and A. C. H. Yu, SIAM Journal on Scientific Compututing 25 (2003), 1416–1428for caching the computed 3j and 6j symbols."
},

{
    "location": "#Todo-1",
    "page": "Readme",
    "title": "Todo",
    "category": "section",
    "text": "Wigner 9-j symbols, as explained in [1] and based on\n[3] L. Wei, New formula for 9-j symbols and their direct calculation, Computers in Physics, 12 (1998), 632–634.\nConvenient syntax to get the exact results in the √(r) * s format, but in such a way that it can be used by   the Julia type system and can be converted afterwards."
},

{
    "location": "autodocs/#WignerSymbols.HalfInteger",
    "page": "Docstrings",
    "title": "WignerSymbols.HalfInteger",
    "category": "type",
    "text": "struct HalfInteger <: Real\n\nRepresents half-integer values.\n\n\n\nHalfInteger(numerator::Integer, denominator::Integer)\n\nConstructs a HalfInteger object as a rational number from the given integer numerator and denominator values.\n\nExamples\n\njulia> HalfInteger(1, 2)\n1/2\n\njulia> HalfInteger(-2, 1)\n-2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.HalfIntegerRange",
    "page": "Docstrings",
    "title": "WignerSymbols.HalfIntegerRange",
    "category": "type",
    "text": "struct HalfIntegerRange <: AbstractVector{HalfInteger}\n\nA range of HalfInteger values from start to stop, spaced by 1. The a:b syntax where both a and b are HalfIntegers can also be use to construct this range.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.clebschgordan",
    "page": "Docstrings",
    "title": "WignerSymbols.clebschgordan",
    "category": "function",
    "text": "clebschgordan(T::Type{<:AbstractFloat} = Float64, j₁, m₁, j₂, m₂, j₃, m₃ = m₁+m₂) -> ::T\n\nCompute the value of the Clebsch-Gordan coefficient <j₁, m₁; j₂, m₂ | j₃, m₃ > as a type T floating point number. By default, T = Float64 and m₃ = m₁+m₂.\n\nReturns zero(T) if the triangle condition δ(j₁, j₂, j₃) is not satisfied, but throws a DomainError if the jᵢs and mᵢs are not (half)integer or abs(mᵢ) > jᵢ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.racahV",
    "page": "Docstrings",
    "title": "WignerSymbols.racahV",
    "category": "function",
    "text": "racahV(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃, m₁, m₂, m₃ = -m₁-m₂) -> ::T\n\nCompute the value of Racah\'s V-symbol V(j₁, j₂, j₃; m₁, m₂, m₃) = (-1)^(-j₁+j₂+j₃) * ⎛ j₁  j₂  j₃ ⎞                                                ⎝ m₁  m₂  m₃ ⎠ as a type T floating point number. By default, T = Float64 and m₃ = -m₁-m₂.\n\nReturns zero(T) if the triangle condition δ(j₁, j₂, j₃) is not satisfied, but throws a DomainError if the jᵢs and mᵢs are not (half)integer or abs(mᵢ) > jᵢ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.racahW",
    "page": "Docstrings",
    "title": "WignerSymbols.racahW",
    "category": "function",
    "text": "racahW(T::Type{<:AbstractFloat} = Float64, j₁, j₂, J, j₃, J₁₂, J₂₃) -> ::T\n\nCompute the value of Racah\'s W coefficient W(j₁, j₂, J, j₃; J₁₂, J₂₃) = <(j₁,(j₂j₃)J₂₃)J | ((j₁j₂)J₁₂,j₃)J> / sqrt((2J₁₂+1)*(2J₁₃+1)) as a type T floating point number. By default, T = Float64.\n\nReturns zero(T) if any of triangle conditions δ(j₁, j₂, J₁₂), δ(j₂, j₃, J₂₃), δ(j₁, J₂₃, J), δ(J₁₂, j₃, J) are not satisfied, but throws a DomainError if the jᵢs and Js are not integer or halfinteger.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.wigner3j",
    "page": "Docstrings",
    "title": "WignerSymbols.wigner3j",
    "category": "function",
    "text": "wigner3j(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃, m₁, m₂, m₃ = -m₂-m₁) -> ::T\n\nCompute the value of the Wigner-3j symbol     ⎛ j₁  j₂  j₃ ⎞     ⎝ m₁  m₂  m₃ ⎠ as a type T floating point number. By default, T = Float64 and m₃ = -m₁-m₂.\n\nReturns zero(T) if the triangle condition δ(j₁, j₂, j₃) is not satisfied, but throws a DomainError if the jᵢs and mᵢs are not (half)integer or abs(mᵢ) > jᵢ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.wigner6j",
    "page": "Docstrings",
    "title": "WignerSymbols.wigner6j",
    "category": "function",
    "text": "wigner6j(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃, j₄, j₅, j₆) -> ::T\n\nCompute the value of the Wigner-6j symbol     ⎧ j₁  j₂  j₃ ⎫      ⎩ j₄  j₅  j₆ ⎭ as a type T floating point number. By default, T = Float64.\n\nReturns zero(T) if any of triangle conditions δ(j₁, j₂, j₃), δ(j₁, j₆, j₅), δ(j₂, j₄, j₆), δ(j₃, j₄, j₅) are not satisfied, but throws a DomainError if the jᵢs are not integer or halfinteger.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.Δ",
    "page": "Docstrings",
    "title": "WignerSymbols.Δ",
    "category": "function",
    "text": "Δ(T::Type{<:AbstractFloat} = Float64, j₁, j₂, j₃) -> ::T\n\nComputes the triangle coefficient Δ(j₁, j₂, j₃) = √((j₁+j₂-j₃)!*(j₁-j₂+j₃)!*(j₂+j₃-j₁)! / (j₁+j₂+j₃+1)!) as a type T floating point number.\n\nReturns zero(T) if the triangle condition δ(j₁, j₂, j₃) is not satisfied, but throws a DomainError if the jᵢs are not (half)integer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WignerSymbols.δ",
    "page": "Docstrings",
    "title": "WignerSymbols.δ",
    "category": "function",
    "text": "δ(j₁, j₂, j₃) -> ::Bool\n\nChecks the triangle conditions j₃ <= j₁ + j₂, j₁ <= j₂ + j₃ and j₂ <= j₃ + j₁.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WignerSymbols.HalfIntegerWignerSymbols.HalfIntegerRangeWignerSymbols.PrimeFactorizationWignerSymbols.PrimeIteratorWignerSymbols.Wigner3jWignerSymbols.Wigner6jWignerSymbols.WignerSymbolsWignerSymbols.__init__WignerSymbols._vadd!WignerSymbols._vmax!WignerSymbols._vmin!WignerSymbols._vsub!WignerSymbols.bigoneWignerSymbols.bigprimeWignerSymbols.bigprimetableWignerSymbols.clebschgordanWignerSymbols.commondenominator!WignerSymbols.compute3jseriesWignerSymbols.compute6jseriesWignerSymbols.converthalfintegerWignerSymbols.divgcd!WignerSymbols.evalWignerSymbols.factorialtableWignerSymbols.factortableWignerSymbols.includeWignerSymbols.ishalfintegerWignerSymbols.primeWignerSymbols.primefactorWignerSymbols.primefactorialWignerSymbols.primesWignerSymbols.primetableWignerSymbols.racahVWignerSymbols.racahWWignerSymbols.reorder3jWignerSymbols.reorder6jWignerSymbols.splitsquareWignerSymbols.sumlist!WignerSymbols.wigner3jWignerSymbols.wigner6jWignerSymbols.ΔWignerSymbols.Δ²WignerSymbols.δWignerSymbols.ϵ"
},

]}
