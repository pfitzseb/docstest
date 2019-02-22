var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)(Image: ) (Image: )"
},

{
    "location": "#Unitful.jl-1",
    "page": "Readme",
    "title": "Unitful.jl",
    "category": "section",
    "text": "Unitful is a Julia package for physical units. We want to support not only SI units but also any other unit system. We also want to minimize or in some cases eliminate the run-time penalty of units. There should be facilities for dimensional analysis. All of this should integrate easily with the usual mathematical operations and collections that are found in Julia base."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Stable and latest versions available."
},

{
    "location": "#Other-packages-in-the-Unitful-family-1",
    "page": "Readme",
    "title": "Other packages in the Unitful family",
    "category": "section",
    "text": ""
},

{
    "location": "#Units-packages-1",
    "page": "Readme",
    "title": "Units packages",
    "category": "section",
    "text": "UnitfulUS.jl: U.S. customary units. Serves as an example for how to implement a units package.\nUnitfulAstro.jl: Astronomical units.\nUnitfulAngles.jl: More angular units, additional trigonometric functionalities, and clock-angle conversion.\nUnitfulAtomic.jl: Easy conversion from and to atomic units.\nPowerSystemsUnits.jl: Common units for dealing with power systems."
},

{
    "location": "#Feature-additions-1",
    "page": "Readme",
    "title": "Feature additions",
    "category": "section",
    "text": "UnitfulIntegration.jl: Enables use of Unitful quantities with QuadGK.jl. PRs for other integration packages are welcome."
},

{
    "location": "#Related-packages-1",
    "page": "Readme",
    "title": "Related packages",
    "category": "section",
    "text": "Unitful was inspired by:SIUnits.jl\nEngUnits.jl\nUnits.jl"
},

{
    "location": "autodocs/#Unitful.@affineunit",
    "page": "Docstrings",
    "title": "Unitful.@affineunit",
    "category": "macro",
    "text": "@affineunit(symb, abbr, offset)\n\nMacro for easily defining affine units. offset gives the zero of the relative scale in terms of an absolute scale; the scaling is the same as the absolute scale. Example: @affineunit °C \"°C\" (27315//100)K is used internally to define degrees Celsius.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@derived_dimension",
    "page": "Docstrings",
    "title": "Unitful.@derived_dimension",
    "category": "macro",
    "text": "@derived_dimension(name, dims)\n\nCreates type aliases to allow dispatch on Unitful.Quantity, Unitful.Level, and Unitful.Units objects of a derived dimension, like area, which is just length squared. The type aliases are not exported.\n\ndims is a Unitful.Dimensions object.\n\nReturns nothing.\n\nUsage examples:\n\n@derived_dimension Area 𝐋^2 gives Area and AreaUnit type aliases\n@derived_dimension Speed 𝐋/𝐓 gives Speed and SpeedUnit type aliases\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@dimension",
    "page": "Docstrings",
    "title": "Unitful.@dimension",
    "category": "macro",
    "text": "@dimension(symb, abbr, name)\n\nCreates new dimensions. name will be used like an identifier in the type parameter for a Unitful.Dimension object. symb will be a symbol defined in the namespace from which this macro is called that is bound to a Unitful.Dimensions object. For most intents and purposes it is this object that the user would manipulate in doing dimensional analysis. The symbol is not exported.\n\nThis macro extends Unitful.abbr to display the new dimension in an abbreviated format using the string abbr.\n\nType aliases are created that allow the user to dispatch on Unitful.Quantity, Unitful.Level and Unitful.Units objects of the newly defined dimension. The type alias for quantities or levels is simply given by name, and the type alias for units is given by name*\"Units\", e.g. LengthUnits. Note that there is also LengthFreeUnits, for example, which is an alias for dispatching on FreeUnits with length dimensions. The aliases are not exported.\n\nFinally, if you define new dimensions with @dimension you will need to specify a preferred unit for that dimension with Unitful.preferunits, otherwise promotion will not work with that dimension. This is done automatically in the @refunit macro.\n\nReturns the Dimensions object to which symb is bound.\n\nUsage example from src/pkgdefaults.jl: @dimension 𝐋 \"𝐋\" Length\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@logscale",
    "page": "Docstrings",
    "title": "Unitful.@logscale",
    "category": "macro",
    "text": "@logscale(symb,abbr,name,base,prefactor,irp)\n\nDefine a logarithmic scale. Unlike with units, there is no special treatment for power-of-ten prefixes (decibels and bels are defined separately). However, arbitrary bases are possible, and computationally appropriate log and exp functions are used in calculations when available (e.g. log2, log10 for base 2 and base 10, respectively).\n\nThis macro defines a MixedUnits object identified by symbol symb. This can be used to construct Gain types, e.g. 3*dB. Additionally, two other MixedUnits objects are defined, with symbols Symbol(symb,\"_rp\") and Symbol(symb,\"_p\"), e.g. dB_rp and dB_p, respectively. These objects serve nearly the same purpose, but have extra information in their type that indicates whether they should be considered as root-power ratios or power ratios upon conversion to pure numbers.\n\nThis macro also defines another macro available as @symb. For example, @dB in the case of decibels. This can be used to construct Level objects at parse time. Usage is like @dB 3V/1V.\n\nprefactor is the prefactor out in front of the logarithm for this log scale. In all cases it is defined with respect to taking ratios of power quantities. Just divide by two if you want to refer to root-power / field quantities instead.\n\nirp (short for \"is root power?\") specifies whether the logarithmic scale is defined with respect to ratios of power or root-power quantities. In short: use false if your scale is decibel-like, or true if your scale is neper-like.\n\nExamples:\n\njulia> using Unitful: V, W\n\njulia> @logscale dΠ \"dΠ\" Decipies π 10 false\ndΠ\n\njulia> @dΠ π*V/1V\n20.0 dΠ (1 V)\n\njulia> dΠ(π*V, 1V)\n20.0 dΠ (1 V)\n\njulia> @dΠ π^2*V/1V\n40.0 dΠ (1 V)\n\njulia> @dΠ π*W/1W\n10.0 dΠ (1 W)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@logunit",
    "page": "Docstrings",
    "title": "Unitful.@logunit",
    "category": "macro",
    "text": "@logunit(symb, abbr, logscale, reflevel)\n\nDefines a logarithmic unit. For examples see src/pkgdefaults.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@prefixed_unit_symbols",
    "page": "Docstrings",
    "title": "Unitful.@prefixed_unit_symbols",
    "category": "macro",
    "text": "@prefixed_unit_symbols(symb,name,dimension,basefactor)\n\nNot called directly by the user. Given a unit symbol and a unit\'s name, will define units for each possible SI power-of-ten prefix on that unit.\n\nExample: @prefixed_unit_symbols m Meter 𝐋 (1.0,1) results in nm, cm, m, km, ... all getting defined in the calling namespace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@refunit",
    "page": "Docstrings",
    "title": "Unitful.@refunit",
    "category": "macro",
    "text": "@refunit(symb, name, abbr, dimension, tf)\n\nDefine a reference unit, typically SI. Rather than define conversion factors between each and every unit of a given dimension, conversion factors are given between each unit and a reference unit, defined by this macro.\n\nThis macro extends Unitful.abbr so that the reference unit can be displayed in an abbreviated format. If tf == true, this macro generates symbols for every power of ten of the unit, using the standard SI prefixes. A dimension must be given (Unitful.Dimensions object) that specifies the dimension of the reference unit.\n\nIn principle, users can use this macro, but it probably does not make much sense to do so. If you define a new (probably unphysical) dimension using @dimension, then this macro will be necessary. With existing dimensions, you will almost certainly cause confusion if you use this macro. One potential use case would be to define a unit system without reference to SI. However, there\'s no explicit barrier to prevent attempting conversions between SI and this hypothetical unit system, which could yield unexpected results.\n\nNote that this macro will also choose the new unit (no power-of-ten prefix) as the default unit for promotion given this dimension.\n\nReturns the Unitful.FreeUnits object to which symb is bound.\n\nUsage example: @refunit m \"m\" Meter 𝐋 true\n\nThis example, found in src/pkgdefaults.jl, generates km, m, cm, ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@u_str",
    "page": "Docstrings",
    "title": "Unitful.@u_str",
    "category": "macro",
    "text": "@u_str(unit)\n\nString macro to easily recall units, dimensions, or quantities defined in unit modules that have been registered with Unitful.register.\n\nIf the same symbol is used for a Unitful.Units object defined in different modules, then the symbol found in the most recently registered module will be used.\n\nNote that what goes inside must be parsable as a valid Julia expression. In other words, u\"N m\" will fail if you intended to write u\"N*m\".\n\nExamples:\n\njulia> 1.0u\"m/s\"\n1.0 m s^-1\n\njulia> 1.0u\"N*m\"\n1.0 m N\n\njulia> u\"m,kg,s\"\n(m, kg, s)\n\njulia> typeof(1.0u\"m/s\")\nQuantity{Float64,𝐋*𝐓^-1,Unitful.FreeUnits{(m, s^-1),𝐋*𝐓^-1,nothing}}\n\njulia> u\"ħ\"\n1.0545718001391127e-34 J s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@unit",
    "page": "Docstrings",
    "title": "Unitful.@unit",
    "category": "macro",
    "text": "@unit(symb,abbr,name,equals,tf)\n\nDefine a unit. Rather than specifying a dimension like in @refunit, equals should be a Unitful.Quantity equal to one of the unit being defined. If tf == true, symbols will be made for each power-of-ten prefix.\n\nReturns the Unitful.FreeUnits object to which symb is bound.\n\nUsage example: @unit mi \"mi\" Mile (201168//125)*m false\n\nThis example will not generate kmi (kilomiles).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.@unit_symbols",
    "page": "Docstrings",
    "title": "Unitful.@unit_symbols",
    "category": "macro",
    "text": "@unit_symbols(symb,name)\n\nNot called directly by the user. Given a unit symbol and a unit\'s name, will define units without SI power-of-ten prefixes.\n\nExample: @unit_symbols ft Foot 𝐋 results in ft getting defined but not kft.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.AffineError",
    "page": "Docstrings",
    "title": "Unitful.AffineError",
    "category": "type",
    "text": "struct AffineError <: Exception\n\nAn invalid operation was attempted with affine units / quantities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.AffineQuantity",
    "page": "Docstrings",
    "title": "Unitful.AffineQuantity",
    "category": "type",
    "text": "AffineQuantity{T,D,U} = Quantity{T,D,U} where U<:AffineUnits\n\nUseful for dispatching on quantities that affine-transform under unit conversion, like absolute temperatures. Not exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.AffineUnits",
    "page": "Docstrings",
    "title": "Unitful.AffineUnits",
    "category": "type",
    "text": "AffineUnits{N,D,A} = Units{N,D,A} where A<:Affine\n\nUseful for dispatching on unit objects that indicate a quantity should affine-transform under unit conversion, like absolute temperatures. Not exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Bel",
    "page": "Docstrings",
    "title": "Unitful.Bel",
    "category": "type",
    "text": "struct LogInfo{N,B,P}\n\nDescribes a logarithmic unit. Type parameters include:\n\nN: The name of the logarithmic unit, e.g. :Decibel, :Neper.\nB: The base of the logarithm.\nP: A prefactor to multiply the logarithm when the log is of a power ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Centineper",
    "page": "Docstrings",
    "title": "Unitful.Centineper",
    "category": "type",
    "text": "struct LogInfo{N,B,P}\n\nDescribes a logarithmic unit. Type parameters include:\n\nN: The name of the logarithmic unit, e.g. :Decibel, :Neper.\nB: The base of the logarithm.\nP: A prefactor to multiply the logarithm when the log is of a power ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.ContextUnits",
    "page": "Docstrings",
    "title": "Unitful.ContextUnits",
    "category": "type",
    "text": "struct ContextUnits{N,D,P,A} <: Units{N,D,A}\n\nInstances of this object represent units, possibly combinations thereof. It is in most respects like FreeUnits{N,D,A}, except that the type parameter P is again a FreeUnits{M,D} type that specifies a preferred unit for promotion. See Advanced promotion mechanisms in the docs for details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Decibel",
    "page": "Docstrings",
    "title": "Unitful.Decibel",
    "category": "type",
    "text": "struct LogInfo{N,B,P}\n\nDescribes a logarithmic unit. Type parameters include:\n\nN: The name of the logarithmic unit, e.g. :Decibel, :Neper.\nB: The base of the logarithm.\nP: A prefactor to multiply the logarithm when the log is of a power ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Dimension",
    "page": "Docstrings",
    "title": "Unitful.Dimension",
    "category": "type",
    "text": "struct Dimension{D}\n    power::Rational{Int}\nend\n\nDescription of a dimension. The name of the dimension D is a symbol, e.g. :Length, :Time, :Mass, etc.\n\nDimension{D} objects are collected in a tuple, which is used for the type parameter N of a Dimensions{N} object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.DimensionError",
    "page": "Docstrings",
    "title": "Unitful.DimensionError",
    "category": "type",
    "text": "struct DimensionError <: Exception\n\nPhysical dimensions are inconsistent for the attempted operation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.DimensionlessQuantity",
    "page": "Docstrings",
    "title": "Unitful.DimensionlessQuantity",
    "category": "type",
    "text": "DimensionlessQuantity{T,U} = Quantity{T, NoDims, U}\n\nUseful for dispatching on Unitful.Quantity types that may have units but no dimensions. (Units with differing power-of-ten prefixes are not canceled out.)\n\nExample:\n\njulia> isa(1.0u\"mV/V\", DimensionlessQuantity)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.DimensionlessUnits",
    "page": "Docstrings",
    "title": "Unitful.DimensionlessUnits",
    "category": "type",
    "text": "DimensionlessUnits{U}\n\nUseful for dispatching on Unitful.Units types that have no dimensions.\n\nExample: ```jldoctest julia> isa(Unitful.rad, DimensionlessUnits) true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Dimensions",
    "page": "Docstrings",
    "title": "Unitful.Dimensions",
    "category": "type",
    "text": "struct Dimensions{N} <: Unitlike\n\nInstances of this object represent dimensions, possibly combinations thereof.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.FixedUnits",
    "page": "Docstrings",
    "title": "Unitful.FixedUnits",
    "category": "type",
    "text": "struct FixedUnits{N,D,A} <: Units{N,D,A} end\n\nInstances of this object represent units, possibly combinations thereof. These are primarily intended for use when you would like to disable automatic unit conversions. See Advanced promotion mechanisms in the docs for details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.FreeUnits",
    "page": "Docstrings",
    "title": "Unitful.FreeUnits",
    "category": "type",
    "text": "struct FreeUnits{N,D,A} <: Units{N,D,A}\n\nInstances of this object represent units, possibly combinations thereof. These behave like units have behaved in previous versions of Unitful, and provide a basic level of functionality that should be acceptable to most users. See Basic promotion mechanisms in the docs for details.\n\nExample: the unit m is actually a singleton of type Unitful.FreeUnits{(Unitful.Unit{:Meter, 𝐋}(0, 1//1),), 𝐋, nothing}. After dividing by s, a singleton of type Unitful.FreeUnits{(Unitful.Unit{:Meter, 𝐋}(0, 1//1), Unitful.Unit{:Second, 𝐓}(0, -1//1)), 𝐋/𝐓, nothing} is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Gain",
    "page": "Docstrings",
    "title": "Unitful.Gain",
    "category": "type",
    "text": "struct Gain{L, S, T<:Real} <: LogScaled{L}\n\nA logarithmic scale-based gain or attenuation factor. This type has one field, val::T. For example, given a gain of 20dB, we have val===20. This type differs from Unitful.Level in that val is stored after computing the logarithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Level",
    "page": "Docstrings",
    "title": "Unitful.Level",
    "category": "type",
    "text": "struct Level{L, S, T<:Number} <: LogScaled{L}\n\nA logarithmic scale-based level. Details about the logarithmic scale are encoded in L <: LogInfo. S is a reference quantity for the level, not a type. This type has one field, val::T, and the log of the ratio val/S is taken. This type differs from Unitful.Gain in that val is a linear quantity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.LogInfo",
    "page": "Docstrings",
    "title": "Unitful.LogInfo",
    "category": "type",
    "text": "struct LogInfo{N,B,P}\n\nDescribes a logarithmic unit. Type parameters include:\n\nN: The name of the logarithmic unit, e.g. :Decibel, :Neper.\nB: The base of the logarithm.\nP: A prefactor to multiply the logarithm when the log is of a power ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.LogScaled",
    "page": "Docstrings",
    "title": "Unitful.LogScaled",
    "category": "type",
    "text": "abstract type LogScaled{L<:LogInfo} <: Number end\n\nAbstract supertype of Unitful.Level and Unitful.Gain. It is only used in promotion to put levels and gains onto a common log scale.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.MixedUnits",
    "page": "Docstrings",
    "title": "Unitful.MixedUnits",
    "category": "type",
    "text": "struct MixedUnits{T<:LogScaled, U<:Units}\n\nStruct for representing mixed logarithmic / linear units. Primarily useful as an intermediate for uconvert. T is <: Level or <: Gain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Neper",
    "page": "Docstrings",
    "title": "Unitful.Neper",
    "category": "type",
    "text": "struct LogInfo{N,B,P}\n\nDescribes a logarithmic unit. Type parameters include:\n\nN: The name of the logarithmic unit, e.g. :Decibel, :Neper.\nB: The base of the logarithm.\nP: A prefactor to multiply the logarithm when the log is of a power ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Quantity",
    "page": "Docstrings",
    "title": "Unitful.Quantity",
    "category": "type",
    "text": "\"     struct Quantity{T,D,U} <: Number A quantity, which has dimensions and units specified in the type signature. The dimensions and units are allowed to be the empty set, in which case a dimensionless, unitless number results.\n\nThe type parameter T represents the numeric backing type. The type parameters D :: Unitful.Dimensions and U <: Unitful.Units. Of course, the dimensions follow from the units, but the type parameters are kept separate to permit convenient dispatch on dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.ScalarQuantity",
    "page": "Docstrings",
    "title": "Unitful.ScalarQuantity",
    "category": "type",
    "text": "ScalarQuantity{T,D,U} = Quantity{T,D,U} where U<:ScalarUnits\n\nUseful for dispatching on quantities that transform in the usual scalar way under unit conversion. Not exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.ScalarUnits",
    "page": "Docstrings",
    "title": "Unitful.ScalarUnits",
    "category": "type",
    "text": "ScalarUnits{N,D} = Units{N,D,nothing}\n\nUseful for dispatching on unit objects that indicate a quantity should transform in the usual scalar way under unit conversion. Not exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Unit",
    "page": "Docstrings",
    "title": "Unitful.Unit",
    "category": "type",
    "text": "struct Unit{U,D}\n    tens::Int\n    power::Rational{Int}\nend\n\nDescription of a physical unit, including powers-of-ten prefixes and powers of the unit. The name of the unit is encoded in the type parameter U as a symbol, e.g. :Meter, :Second, :Gram, etc. The type parameter D is a Dimensions{N} object, for instance Unit{:Meter, 𝐋} or Unit{:Liter, 𝐋^3}. Note that the dimension information refers to the unit, not powers of the unit.\n\nUnit{U,D} objects are almost never explicitly manipulated by the user. They are collected in a tuple, which is used for the type parameter N of a Units{N,D,A} object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Unitlike",
    "page": "Docstrings",
    "title": "Unitful.Unitlike",
    "category": "type",
    "text": "abstract type Unitlike end\n\nRepresents units or dimensions. Dimensions are unit-like in the sense that they are not numbers but you can multiply or divide them and exponentiate by rationals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.Units",
    "page": "Docstrings",
    "title": "Unitful.Units",
    "category": "type",
    "text": "abstract type Units{N,D,A} <: Unitlike end\n\nAbstract supertype of all units objects, which can differ in their implementation details. A is a translation for affine quantities; for non-affine quantities it is nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful._Quantity",
    "page": "Docstrings",
    "title": "Unitful._Quantity",
    "category": "function",
    "text": "Quantity(x::Number, y::Units)\n\nOuter constructor for Quantitys. This is a generated function to avoid determining the dimensions of a given set of units each time a new quantity is made.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.abbr",
    "page": "Docstrings",
    "title": "Unitful.abbr",
    "category": "function",
    "text": "abbr(x) provides abbreviations for units or dimensions. Since a method should always be defined for each unit and dimension type, absence of a method for a specific unit or dimension type is likely an error. Consequently, we return ❓ for generic arguments to flag unexpected behavior.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.absoluteunit",
    "page": "Docstrings",
    "title": "Unitful.absoluteunit",
    "category": "function",
    "text": "absoluteunit(::Units)\nabsoluteunit(::Quantity)\n\nGiven a unit or quantity, which may or may not be affine (e.g. °C), return the corresponding unit on the absolute temperature scale (e.g. K). Passing a Unitful.ContextUnits object will return another ContextUnits object with the same promotion unit, which may be an affine unit, so take care.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.affineunit",
    "page": "Docstrings",
    "title": "Unitful.affineunit",
    "category": "function",
    "text": "affineunit(x::Quantity)\n\nReturns a Unitful.Units object that can be used to construct affine quantities. Primarily, this is for relative temperatures (as opposed to absolute temperatures, which transform as usual under unit conversion). To use this function, pass the scale offset, e.g. affineunit(273.15K) yields a Celsius unit.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.basefactor",
    "page": "Docstrings",
    "title": "Unitful.basefactor",
    "category": "function",
    "text": "basefactor(x::Unit)\n\nSpecifies conversion factors to reference units. It returns a tuple. The first value is any irrational part of the conversion, and the second value is a rational component. This segregation permits exact conversions within unit systems that have no rational conversion to the reference units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.convfact",
    "page": "Docstrings",
    "title": "Unitful.convfact",
    "category": "function",
    "text": "convfact(s::Units, t::Units)\n\nFind the conversion factor from unit t to unit s, e.g. convfact(m,cm) = 0.01.\n\n\n\n\n\nconvfact{S}(s::Units{S}, t::Units{S})\n\nReturns 1. (Avoids effort when unnecessary.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.dimension",
    "page": "Docstrings",
    "title": "Unitful.dimension",
    "category": "function",
    "text": "dimension(x::Unit)\n\nReturns a Unitful.Dimensions object describing the given unit x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.expfn",
    "page": "Docstrings",
    "title": "Unitful.expfn",
    "category": "function",
    "text": "expfn(x::LogInfo)\n\nReturns the appropriate exponential function to use in calculations involving the logarithmic unit / quantity. For example, decibel-based units yield exp10, Neper-based yield exp, and so on. Returns x->(base)^x as a fallback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.genericunit",
    "page": "Docstrings",
    "title": "Unitful.genericunit",
    "category": "function",
    "text": "genericunit(::Units)\n\nGiven e.g. a FreeUnits{N,D,A}, ContextUnits{N,D,P,A}, or FixedUnits{N,D,A} object, return the type Units{N,D,A}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.linear",
    "page": "Docstrings",
    "title": "Unitful.linear",
    "category": "function",
    "text": "linear(x::Quantity)\nlinear(x::Level)\nlinear(x::Number) = x\n\nReturns a quantity equivalent to x but without any logarithmic scales.\n\nIt is important to note that this operation will error for Quantity{<:Gain} types. This is for two reasons:\n\n20dB could be interpreted as either a power or root-power ratio.\nEven if -20dB/m were interpreted as, say, 0.01/m, this means something fundamentally different than -20dB/m. 0.01/m cannot be used to calculate exponential attenuation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.logfn",
    "page": "Docstrings",
    "title": "Unitful.logfn",
    "category": "function",
    "text": "logfn(x::LogInfo)\n\nReturns the appropriate logarithm function to use in calculations involving the logarithmic unit / quantity. For example, decibel-based units yield log10, Neper-based yield ln, and so on. Returns x->log(base, x) as a fallback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.preferunits",
    "page": "Docstrings",
    "title": "Unitful.preferunits",
    "category": "function",
    "text": "preferunits(u0::Units, u::Units...)\n\nThis function specifies the default fallback units for promotion. Units provided to this function must have a pure dimension of power 1, like 𝐋 or 𝐓 but not 𝐋/𝐓 or 𝐋^2. The function will complain if this is not the case. Additionally, the function will complain if you provide two units with the same dimension, as a courtesy to the user. Finally, you cannot use affine units such as °C with this function.\n\nOnce Unitful.upreferred has been called or quantities have been promoted, this function will appear to have no effect.\n\nUsage example: preferunits(u\"m,s,A,K,cd,kg,mol\"...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.prefix",
    "page": "Docstrings",
    "title": "Unitful.prefix",
    "category": "function",
    "text": "prefix(x::Unit)\n\nReturns a string representing the SI prefix for the power-of-ten held by this particular unit.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.promote_to_derived",
    "page": "Docstrings",
    "title": "Unitful.promote_to_derived",
    "category": "function",
    "text": "Unitful.promote_to_derived()\n\nDefines promotion rules to use derived SI units in promotion for common dimensions of quantities:\n\nJ (joule) for energy\nN (newton) for force\nW (watt) for power\nPa (pascal) for pressure\nC (coulomb) for charge\nV (volt) for voltage\nΩ (ohm) for resistance\nF (farad) for capacitance\nH (henry) for inductance\nWb (weber) for magnetic flux\nT (tesla) for B-field\nJ*s (joule-second) for action\n\nIf you want this as default behavior (it was for versions of Unitful prior to 0.1.0), consider invoking this function in your .juliarc.jl file which is loaded when you open Julia. This function is not exported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.promote_unit",
    "page": "Docstrings",
    "title": "Unitful.promote_unit",
    "category": "function",
    "text": "promote_unit(::Units, ::Units...)\n\nGiven Units objects as arguments, this function returns a Units object appropriate for the result of promoting quantities which have these units. This function is kind of like promote_rule, except that it doesn\'t take types. It also does not return a tuple, but rather just a Unitful.Units object (or it throws an error).\n\nAlthough we had used promote_rule for Units objects in prior versions of Unitful, this was always kind of a hack; it doesn\'t make sense to promote units directly for a variety of reasons.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.reflevel",
    "page": "Docstrings",
    "title": "Unitful.reflevel",
    "category": "function",
    "text": "reflevel(x::Level{L,S})\nreflevel(::Type{Level{L,S}})\nreflevel(::Type{Level{L,S,T}})\n\nReturns the reference level, e.g.\n\njulia> reflevel(3u\"dBm\")\n1 mW\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.register",
    "page": "Docstrings",
    "title": "Unitful.register",
    "category": "function",
    "text": "register(unit_module::Module)\n\nMakes the @u_str macro aware of units defined in new unit modules. By default, Unitful is itself a registered module. Note that Main is not, so if you define new units at the REPL, you will probably want to do Unitful.register(Main).\n\nExample:\n\n# somewhere in a custom units package...\nmodule MyUnitsPackage\nusing Unitful\n\nfunction __init__()\n    ...\n    Unitful.register(MyUnitsPackage)\nend\nend #module\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.showrep",
    "page": "Docstrings",
    "title": "Unitful.showrep",
    "category": "function",
    "text": "showrep(io::IO, x::Unit)\n\nShow the unit, prefixing with any decimal prefix and appending the exponent as formatted by Unitful.superscript.\n\n\n\n\n\nshowrep(io::IO, x::Dimension)\n\nShow the dimension, appending any exponent as formatted by Unitful.superscript.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.sortexp",
    "page": "Docstrings",
    "title": "Unitful.sortexp",
    "category": "function",
    "text": "sortexp(xs)\n\nSort units to show positive exponents first.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.superscript",
    "page": "Docstrings",
    "title": "Unitful.superscript",
    "category": "function",
    "text": "superscript(i::Rational)\n\nPrints exponents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.uconvert",
    "page": "Docstrings",
    "title": "Unitful.uconvert",
    "category": "function",
    "text": "uconvert(a::Units, x::Quantity{T,D,U}) where {T,D,U}\n\nConvert a Unitful.Quantity to different units. The conversion will fail if the target units a have a different dimension than the dimension of the quantity x. You can use this method to switch between equivalent representations of the same unit, like N m and J.\n\nExample:\n\njulia> uconvert(u\"hr\",3602u\"s\")\n1801//1800 hr\njulia> uconvert(u\"J\",1.0u\"N*m\")\n1.0 J\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.uconvertp",
    "page": "Docstrings",
    "title": "Unitful.uconvertp",
    "category": "function",
    "text": "uconvertp(u::Units, x)\nuconvertp(u::MixedUnits, x)\n\nGenerically, this is the same as Unitful.uconvert. In cases where unit conversion would be ambiguous without further information (e.g. uconvert(dB, 10)), uconvertp presumes ratios are of root-power quantities.\n\nIt is important to note that careless use of this function can lead to erroneous calculations. Consider Quantity{<:Gain} types: it is tempting to use this to transform -20dB/m into 0.1/m, however this means something fundamentally different than -20dB/m. Consider what happens when you try to compute exponential attenuation by multiplying 0.1/m by a length.\n\nExamples:\n\njulia> using Unitful\n\njulia> uconvertp(u\"dB\", 10)\n10.0 dB\n\njulia> uconvertp(NoUnits, 20u\"dB\")\n100.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.uconvertrp",
    "page": "Docstrings",
    "title": "Unitful.uconvertrp",
    "category": "function",
    "text": "uconvertrp(u::Units, x)\nuconvertrp(u::MixedUnits, x)\n\nIn most cases, this is the same as Unitful.uconvert. In cases where unit conversion would be ambiguous without further information (e.g. uconvert(dB, 10)), uconvertp presumes ratios are of power quantities.\n\nIt is important to note that careless use of this function can lead to erroneous calculations. Consider Quantity{<:Gain} types: it is tempting to use this to transform -20dB/m into 0.01/m, however this means something fundamentally different than -20dB/m. Consider what happens when you try to compute exponential attenuation by multiplying 0.01/m by a length.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.unit",
    "page": "Docstrings",
    "title": "Unitful.unit",
    "category": "function",
    "text": "unit(x::Quantity{T,D,U}) where {T,D,U}\nunit(x::Type{Quantity{T,D,U}}) where {T,D,U}\n\nReturns the units associated with a Quantity or Quantity type.\n\nExamples:\n\njulia> unit(1.0u\"m\") == u\"m\"\ntrue\n\njulia> unit(typeof(1.0u\"m\")) == u\"m\"\ntrue\n\n\n\n\n\nunit(x::Number)\n\nReturns a Unitful.FreeUnits{(), NoDims} object to indicate that ordinary numbers have no units. This is a singleton, which we export as NoUnits. The unit is displayed as an empty string.\n\nExamples:\n\njulia> typeof(unit(1.0))\nUnitful.FreeUnits{(),NoDims,nothing}\n\njulia> typeof(unit(Float64))\nUnitful.FreeUnits{(),NoDims,nothing}\n\njulia> unit(1.0) == NoUnits\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.upreferred",
    "page": "Docstrings",
    "title": "Unitful.upreferred",
    "category": "function",
    "text": "upreferred(x::Dimensions)\n\nReturn units which are preferred for dimensions x. If you are using the factory defaults, this function will return a product of powers of base SI units (as Unitful.FreeUnits).\n\n\n\n\n\nupreferred(x::Number)\nupreferred(x::Quantity)\n\nUnit-convert x to units which are preferred for the dimensions of x. If you are using the factory defaults, this function will unit-convert to a product of powers of base SI units. If quantity x has Unitful.ContextUnits(y,z), the resulting quantity will have units ContextUnits(z,z).\n\n\n\n\n\nupreferred(x::Units)\n\nReturn units which are preferred for the dimensions of x, which may or may not be equal to x, as specified by the preferunits function. If you are using the factory defaults, this function will return a product of powers of base SI units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Unitful.ustrip",
    "page": "Docstrings",
    "title": "Unitful.ustrip",
    "category": "function",
    "text": "ustrip(x::Number)\nustrip(x::Quantity)\n\nReturns the number out in front of any units. The value of x may differ from the number out front of the units in the case of dimensionless quantities, e.g. 1m/mm != 1. See uconvert and the example below. Because the units are removed, information may be lost and this should be used with some care.\n\nThis function is mainly intended for compatibility with packages that don\'t know how to handle quantities.\n\njulia> ustrip(2u\"μm/m\") == 2\ntrue\n\njulia> uconvert(NoUnits, 2u\"μm/m\") == 2//1000000\ntrue\n\n\n\n\n\nustrip(x::Array{Q}) where {Q <: Quantity}\n\nStrip units from an Array by reinterpreting to type T. The resulting Array is a not a copy, but rather a unit-stripped view into array x. Because the units are removed, information may be lost and this should be used with some care.\n\nThis function is provided primarily for compatibility purposes; you could pass the result to PyPlot, for example.\n\njulia> a = [1u\"m\", 2u\"m\"]\n2-element Array{Quantity{Int64,𝐋,Unitful.FreeUnits{(m,),𝐋,nothing}},1}:\n 1 m\n 2 m\n\njulia> b = ustrip(a)\n2-element reinterpret(Int64, ::Array{Quantity{Int64,𝐋,Unitful.FreeUnits{(m,),𝐋,nothing}},1}):\n 1\n 2\n\njulia> a[1] = 3u\"m\"; b\n2-element reinterpret(Int64, ::Array{Quantity{Int64,𝐋,Unitful.FreeUnits{(m,),𝐋,nothing}},1}):\n 3\n 2\n\n\n\n\n\nustrip(A::Diagonal)\nustrip(A::Bidiagonal)\nustrip(A::Tridiagonal)\nustrip(A::SymTridiagonal)\n\nStrip units from various kinds of matrices by calling ustrip on the underlying vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Unitful.@BUnitful.@NpUnitful.@_doctablesUnitful.@affineunitUnitful.@cNpUnitful.@dBUnitful.@derived_dimensionUnitful.@dimensionUnitful.@logscaleUnitful.@logunitUnitful.@prefixed_unit_symbolsUnitful.@refunitUnitful.@u_strUnitful.@unitUnitful.@unit_symbolsUnitful.AUnitful.AbsoluteScaleTemperatureUnitful.AccelerationUnitful.AccelerationFreeUnitsUnitful.AccelerationUnitsUnitful.ActionUnitful.ActionFreeUnitsUnitful.ActionUnitsUnitful.AffineUnitful.AffineErrorUnitful.AffineQuantityUnitful.AffineUnitsUnitful.AmountUnitful.AmountFreeUnitsUnitful.AmountUnitsUnitful.AreaUnitful.AreaFreeUnitsUnitful.AreaUnitsUnitful.BUnitful.BFieldUnitful.BFieldFreeUnitsUnitful.BFieldUnitsUnitful.B_pUnitful.B_rpUnitful.BaUnitful.BelUnitful.BqUnitful.CUnitful.CapacitanceUnitful.CapacitanceFreeUnitsUnitful.CapacitanceUnitsUnitful.CentineperUnitful.ChargeUnitful.ChargeFreeUnitsUnitful.ChargeUnitsUnitful.ContextUnitsUnitful.CurrentUnitful.CurrentFreeUnitsUnitful.CurrentUnitsUnitful.DFieldUnitful.DFieldFreeUnitsUnitful.DFieldUnitsUnitful.DecibelUnitful.DefaultSymbolsUnitful.DensityUnitful.DensityFreeUnitsUnitful.DensityUnitsUnitful.DimensionUnitful.DimensionErrorUnitful.DimensionlessQuantityUnitful.DimensionlessUnitsUnitful.DimensionsUnitful.DynamicViscosityUnitful.DynamicViscosityFreeUnitsUnitful.DynamicViscosityUnitsUnitful.EAUnitful.EBaUnitful.EBqUnitful.ECUnitful.EFUnitful.EFieldUnitful.EFieldFreeUnitsUnitful.EFieldUnitsUnitful.EGalUnitful.EGyUnitful.EHUnitful.EHzUnitful.EHz2πUnitful.EJUnitful.EKUnitful.ELUnitful.ENUnitful.EPUnitful.EPaUnitful.ESUnitful.EStUnitful.ESvUnitful.ETUnitful.ETorrUnitful.EVUnitful.EWUnitful.EWbUnitful.EbUnitful.EbarUnitful.EcalUnitful.EcdUnitful.EdynUnitful.EeVUnitful.EergUnitful.EgUnitful.EkatUnitful.ElUnitful.ElectricDipoleMomentUnitful.ElectricDipoleMomentFreeUnitsUnitful.ElectricDipoleMomentUnitsUnitful.ElectricQuadrupoleMomentUnitful.ElectricQuadrupoleMomentFreeUnitsUnitful.ElectricQuadrupoleMomentUnitsUnitful.ElectricalConductanceUnitful.ElectricalConductanceFreeUnitsUnitful.ElectricalConductanceUnitsUnitful.ElectricalConductivityUnitful.ElectricalConductivityFreeUnitsUnitful.ElectricalConductivityUnitsUnitful.ElectricalResistanceUnitful.ElectricalResistanceFreeUnitsUnitful.ElectricalResistanceUnitsUnitful.ElectricalResistivityUnitful.ElectricalResistivityFreeUnitsUnitful.ElectricalResistivityUnitsUnitful.ElmUnitful.ElxUnitful.EmUnitful.EmolUnitful.EnergyUnitful.EnergyFreeUnitsUnitful.EnergyUnitsUnitful.EradUnitful.EsUnitful.EsrUnitful.EΩUnitful.FUnitful.FixedUnitsUnitful.ForceUnitful.ForceFreeUnitsUnitful.ForceUnitsUnitful.FreeOrContextUnitsUnitful.FreeUnitsUnitful.FrequencyUnitful.FrequencyFreeUnitsUnitful.FrequencyUnitsUnitful.GUnitful.GAUnitful.GBaUnitful.GBqUnitful.GCUnitful.GFUnitful.GGalUnitful.GGyUnitful.GHUnitful.GHzUnitful.GHz2πUnitful.GJUnitful.GKUnitful.GLUnitful.GNUnitful.GPUnitful.GPaUnitful.GSUnitful.GStUnitful.GSvUnitful.GTUnitful.GTorrUnitful.GVUnitful.GWUnitful.GWbUnitful.GainUnitful.GalUnitful.GbUnitful.GbarUnitful.GcalUnitful.GcdUnitful.GdynUnitful.GeVUnitful.GergUnitful.GgUnitful.GkatUnitful.GlUnitful.GlmUnitful.GlxUnitful.GmUnitful.GmolUnitful.GradUnitful.GsUnitful.GsrUnitful.GyUnitful.GΩUnitful.HUnitful.HFieldUnitful.HFieldFreeUnitsUnitful.HFieldUnitsUnitful.HzUnitful.Hz2πUnitful.InductanceUnitful.InductanceFreeUnitsUnitful.InductanceUnitsUnitful.InvalidOpUnitful.IsRootPowerRatioUnitful.JUnitful.KUnitful.KinematicViscosityUnitful.KinematicViscosityFreeUnitsUnitful.KinematicViscosityUnitsUnitful.LUnitful.LengthUnitful.LengthFreeUnitsUnitful.LengthUnitsUnitful.LevelUnitful.LogInfoUnitful.LogScaledUnitful.LuminosityUnitful.LuminosityFreeUnitsUnitful.LuminosityUnitsUnitful.MAUnitful.MBaUnitful.MBqUnitful.MCUnitful.MFUnitful.MGalUnitful.MGyUnitful.MHUnitful.MHzUnitful.MHz2πUnitful.MJUnitful.MKUnitful.MLUnitful.MNUnitful.MPUnitful.MPaUnitful.MSUnitful.MStUnitful.MSvUnitful.MTUnitful.MTorrUnitful.MVUnitful.MWUnitful.MWbUnitful.MagneticDipoleMomentUnitful.MagneticDipoleMomentFreeUnitsUnitful.MagneticDipoleMomentUnitsUnitful.MagneticFluxUnitful.MagneticFluxFreeUnitsUnitful.MagneticFluxUnitsUnitful.MassUnitful.MassFreeUnitsUnitful.MassUnitsUnitful.MbUnitful.MbarUnitful.McalUnitful.McdUnitful.MdynUnitful.MeVUnitful.MergUnitful.MgUnitful.MixedUnitsUnitful.MkatUnitful.MlUnitful.MlmUnitful.MlxUnitful.MmUnitful.MmolUnitful.MomentumUnitful.MomentumFreeUnitsUnitful.MomentumUnitsUnitful.MradUnitful.MsUnitful.MsrUnitful.MΩUnitful.NUnitful.NaUnitful.NeperUnitful.NoDimsUnitful.NoUnitsUnitful.NpUnitful.Np_pUnitful.Np_rpUnitful.PUnitful.PAUnitful.PBaUnitful.PBqUnitful.PCUnitful.PFUnitful.PGalUnitful.PGyUnitful.PHUnitful.PHzUnitful.PHz2πUnitful.PJUnitful.PKUnitful.PLUnitful.PNUnitful.PPUnitful.PPaUnitful.PSUnitful.PStUnitful.PSvUnitful.PTUnitful.PTorrUnitful.PVUnitful.PWUnitful.PWbUnitful.PaUnitful.PbUnitful.PbarUnitful.PcalUnitful.PcdUnitful.PdynUnitful.PeVUnitful.PergUnitful.PgUnitful.PkatUnitful.PlUnitful.PlmUnitful.PlxUnitful.PmUnitful.PmolUnitful.PowerUnitful.PowerFreeUnitsUnitful.PowerRatioUnitful.PowerUnitsUnitful.PradUnitful.PressureUnitful.PressureFreeUnitsUnitful.PressureUnitsUnitful.PsUnitful.PsrUnitful.PΩUnitful.QuantityUnitful.RUnitful.RaUnitful.RelativeScaleTemperatureUnitful.RootPowerRatioUnitful.R∞Unitful.SUnitful.ScalarQuantityUnitful.ScalarUnitsUnitful.StUnitful.SvUnitful.TUnitful.TAUnitful.TBaUnitful.TBqUnitful.TCUnitful.TFUnitful.TGalUnitful.TGyUnitful.THUnitful.THzUnitful.THz2πUnitful.TJUnitful.TKUnitful.TLUnitful.TNUnitful.TPUnitful.TPaUnitful.TSUnitful.TStUnitful.TSvUnitful.TTUnitful.TTorrUnitful.TVUnitful.TWUnitful.TWbUnitful.TbUnitful.TbarUnitful.TcalUnitful.TcdUnitful.TdynUnitful.TeVUnitful.TemperatureUnitful.TemperatureFreeUnitsUnitful.TemperatureUnitsUnitful.TergUnitful.TgUnitful.TimeUnitful.TimeFreeUnitsUnitful.TimeUnitsUnitful.TkatUnitful.TlUnitful.TlmUnitful.TlxUnitful.TmUnitful.TmolUnitful.TorrUnitful.TradUnitful.TsUnitful.TsrUnitful.TΩUnitful.UnitUnitful.UnitfulUnitful.UnitlikeUnitful.UnitsUnitful.VUnitful.VelocityUnitful.VelocityFreeUnitsUnitful.VelocityUnitsUnitful.VoltageUnitful.VoltageFreeUnitsUnitful.VoltageUnitsUnitful.VolumeUnitful.VolumeFreeUnitsUnitful.VolumeUnitsUnitful.WUnitful.WavenumberUnitful.WavenumberFreeUnitsUnitful.WavenumberUnitsUnitful.WbUnitful.YAUnitful.YBaUnitful.YBqUnitful.YCUnitful.YFUnitful.YGalUnitful.YGyUnitful.YHUnitful.YHzUnitful.YHz2πUnitful.YJUnitful.YKUnitful.YLUnitful.YNUnitful.YPUnitful.YPaUnitful.YSUnitful.YStUnitful.YSvUnitful.YTUnitful.YTorrUnitful.YVUnitful.YWUnitful.YWbUnitful.YbUnitful.YbarUnitful.YcalUnitful.YcdUnitful.YdynUnitful.YeVUnitful.YergUnitful.YgUnitful.YkatUnitful.YlUnitful.YlmUnitful.YlxUnitful.YmUnitful.YmolUnitful.YradUnitful.YsUnitful.YsrUnitful.YΩUnitful.Z0Unitful.ZAUnitful.ZBaUnitful.ZBqUnitful.ZCUnitful.ZFUnitful.ZGalUnitful.ZGyUnitful.ZHUnitful.ZHzUnitful.ZHz2πUnitful.ZJUnitful.ZKUnitful.ZLUnitful.ZNUnitful.ZPUnitful.ZPaUnitful.ZSUnitful.ZStUnitful.ZSvUnitful.ZTUnitful.ZTorrUnitful.ZVUnitful.ZWUnitful.ZWbUnitful.ZbUnitful.ZbarUnitful.ZcalUnitful.ZcdUnitful.ZdynUnitful.ZeVUnitful.ZergUnitful.ZgUnitful.ZkatUnitful.ZlUnitful.ZlmUnitful.ZlxUnitful.ZmUnitful.ZmolUnitful.ZradUnitful.ZsUnitful.ZsrUnitful.ZΩUnitful._QuantityUnitful.__init__Unitful._colonUnitful._dimerrUnitful._fmaUnitful._gconvUnitful._isapproxUnitful._islessUnitful._ltUnitful._muladdUnitful._promote_unitUnitful._rangeUnitful.aUnitful.aAUnitful.aBaUnitful.aBqUnitful.aCUnitful.aFUnitful.aGalUnitful.aGyUnitful.aHUnitful.aHzUnitful.aHz2πUnitful.aJUnitful.aKUnitful.aLUnitful.aNUnitful.aPUnitful.aPaUnitful.aSUnitful.aStUnitful.aSvUnitful.aTUnitful.aTorrUnitful.aVUnitful.aWUnitful.aWbUnitful.abUnitful.abarUnitful.abbrUnitful.abs2_fastUnitful.abs_fastUnitful.absoluteunitUnitful.acUnitful.acalUnitful.acdUnitful.adynUnitful.aeVUnitful.aergUnitful.affinetranslationUnitful.affineunitUnitful.agUnitful.akatUnitful.alUnitful.allowed_funcsUnitful.almUnitful.alxUnitful.amUnitful.amolUnitful.aradUnitful.asUnitful.asrUnitful.atmUnitful.aΩUnitful.bUnitful.barUnitful.baseUnitful.basefactorUnitful.basefactorsUnitful.btuUnitful.cUnitful.c0Unitful.cAUnitful.cBaUnitful.cBqUnitful.cCUnitful.cFUnitful.cGalUnitful.cGyUnitful.cHUnitful.cHzUnitful.cHz2πUnitful.cJUnitful.cKUnitful.cLUnitful.cNUnitful.cNpUnitful.cNp_pUnitful.cNp_rpUnitful.cPUnitful.cPaUnitful.cSUnitful.cStUnitful.cSvUnitful.cTUnitful.cTorrUnitful.cVUnitful.cWUnitful.cWbUnitful.calUnitful.cbUnitful.cbarUnitful.ccalUnitful.ccdUnitful.cdUnitful.cdynUnitful.ceVUnitful.cergUnitful.cgUnitful.ckatUnitful.clUnitful.clmUnitful.clxUnitful.cmUnitful.cmolUnitful.colonUnitful.colonstartstopUnitful.conj_fastUnitful.convertrUnitful.convertrpUnitful.convfactUnitful.cos_fastUnitful.cradUnitful.csUnitful.csrUnitful.cΩUnitful.dUnitful.dAUnitful.dBUnitful.dBFSUnitful.dBHzUnitful.dBSUnitful.dBSPLUnitful.dBVUnitful.dB_pUnitful.dB_rpUnitful.dBaUnitful.dBmUnitful.dBqUnitful.dBuUnitful.dBΩUnitful.dBμVUnitful.dCUnitful.dFUnitful.dGalUnitful.dGyUnitful.dHUnitful.dHzUnitful.dHz2πUnitful.dJUnitful.dKUnitful.dLUnitful.dNUnitful.dPUnitful.dPaUnitful.dSUnitful.dStUnitful.dSvUnitful.dTUnitful.dTorrUnitful.dVUnitful.dWUnitful.dWbUnitful.daAUnitful.daBaUnitful.daBqUnitful.daCUnitful.daFUnitful.daGalUnitful.daGyUnitful.daHUnitful.daHzUnitful.daHz2πUnitful.daJUnitful.daKUnitful.daLUnitful.daNUnitful.daPUnitful.daPaUnitful.daSUnitful.daStUnitful.daSvUnitful.daTUnitful.daTorrUnitful.daVUnitful.daWUnitful.daWbUnitful.dabUnitful.dabarUnitful.dacalUnitful.dacdUnitful.dadynUnitful.daeVUnitful.daergUnitful.dagUnitful.dakatUnitful.dalUnitful.dalmUnitful.dalxUnitful.damUnitful.damolUnitful.daradUnitful.dasUnitful.dasrUnitful.daΩUnitful.dbUnitful.dbarUnitful.dcalUnitful.dcdUnitful.ddynUnitful.deVUnitful.dergUnitful.dgUnitful.dimensionUnitful.dimtypeUnitful.dkatUnitful.dlUnitful.dlmUnitful.dlxUnitful.dmUnitful.dmolUnitful.drUnitful.dradUnitful.dsUnitful.dsrUnitful.dynUnitful.dΩUnitful.eVUnitful.ergUnitful.evalUnitful.expfnUnitful.fAUnitful.fBaUnitful.fBqUnitful.fCUnitful.fFUnitful.fGalUnitful.fGyUnitful.fHUnitful.fHzUnitful.fHz2πUnitful.fJUnitful.fKUnitful.fLUnitful.fNUnitful.fPUnitful.fPaUnitful.fSUnitful.fStUnitful.fSvUnitful.fTUnitful.fTorrUnitful.fVUnitful.fWUnitful.fWbUnitful.fbUnitful.fbarUnitful.fcalUnitful.fcdUnitful.fdynUnitful.feVUnitful.fergUnitful.fgUnitful.fkatUnitful.flUnitful.flmUnitful.flxUnitful.fmUnitful.fmolUnitful.fradUnitful.fromlogUnitful.fsUnitful.fsrUnitful.ftUnitful.fΩUnitful.gUnitful.gaintypeUnitful.geUnitful.genericunitUnitful.get_TUnitful.gnUnitful.grUnitful.hUnitful.hAUnitful.hBaUnitful.hBqUnitful.hCUnitful.hFUnitful.hGalUnitful.hGyUnitful.hHUnitful.hHzUnitful.hHz2πUnitful.hJUnitful.hKUnitful.hLUnitful.hNUnitful.hPUnitful.hPaUnitful.hSUnitful.hStUnitful.hSvUnitful.hTUnitful.hTorrUnitful.hVUnitful.hWUnitful.hWbUnitful.haUnitful.hbUnitful.hbarUnitful.hcalUnitful.hcdUnitful.hdynUnitful.heVUnitful.hergUnitful.hgUnitful.hkatUnitful.hlUnitful.hlmUnitful.hlxUnitful.hmUnitful.hmolUnitful.hrUnitful.hradUnitful.hsUnitful.hsrUnitful.hΩUnitful.inchUnitful.includeUnitful.inv_fastUnitful.isrootpowerUnitful.isrootpower_dimUnitful.isunitlessUnitful.kUnitful.kAUnitful.kBaUnitful.kBqUnitful.kCUnitful.kFUnitful.kGalUnitful.kGyUnitful.kHUnitful.kHzUnitful.kHz2πUnitful.kJUnitful.kKUnitful.kLUnitful.kNUnitful.kPUnitful.kPaUnitful.kSUnitful.kStUnitful.kSvUnitful.kTUnitful.kTorrUnitful.kVUnitful.kWUnitful.kWbUnitful.katUnitful.kbUnitful.kbarUnitful.kcalUnitful.kcdUnitful.kdynUnitful.keVUnitful.kergUnitful.kgUnitful.kkatUnitful.klUnitful.klmUnitful.klxUnitful.kmUnitful.kmolUnitful.kradUnitful.ksUnitful.ksrUnitful.kΩUnitful.lUnitful.lbUnitful.lbfUnitful.leveltypeUnitful.linearUnitful.lmUnitful.logfnUnitful.logunitUnitful.lxUnitful.mUnitful.mAUnitful.mBaUnitful.mBqUnitful.mCUnitful.mFUnitful.mGalUnitful.mGyUnitful.mHUnitful.mHzUnitful.mHz2πUnitful.mJUnitful.mKUnitful.mLUnitful.mNUnitful.mPUnitful.mPaUnitful.mSUnitful.mStUnitful.mSvUnitful.mTUnitful.mTorrUnitful.mVUnitful.mWUnitful.mWbUnitful.mbUnitful.mbarUnitful.mcalUnitful.mcdUnitful.mdynUnitful.meUnitful.meVUnitful.mergUnitful.mgUnitful.miUnitful.milUnitful.minuteUnitful.mkatUnitful.mlUnitful.mlmUnitful.mlxUnitful.mmUnitful.mmolUnitful.mnUnitful.molUnitful.mpUnitful.mradUnitful.msUnitful.msrUnitful.mΩUnitful.nAUnitful.nBaUnitful.nBqUnitful.nCUnitful.nFUnitful.nGalUnitful.nGyUnitful.nHUnitful.nHzUnitful.nHz2πUnitful.nJUnitful.nKUnitful.nLUnitful.nNUnitful.nPUnitful.nPaUnitful.nSUnitful.nStUnitful.nSvUnitful.nTUnitful.nTorrUnitful.nVUnitful.nWUnitful.nWbUnitful.nameUnitful.nbUnitful.nbarUnitful.ncalUnitful.ncdUnitful.ndynUnitful.neVUnitful.nergUnitful.ngUnitful.nkatUnitful.nlUnitful.nlmUnitful.nlxUnitful.nmUnitful.nmolUnitful.nradUnitful.nsUnitful.nsrUnitful.numtypeUnitful.nΩUnitful.ozUnitful.pAUnitful.pBaUnitful.pBqUnitful.pCUnitful.pFUnitful.pGalUnitful.pGyUnitful.pHUnitful.pHzUnitful.pHz2πUnitful.pJUnitful.pKUnitful.pLUnitful.pNUnitful.pPUnitful.pPaUnitful.pSUnitful.pStUnitful.pSvUnitful.pTUnitful.pTorrUnitful.pVUnitful.pWUnitful.pWbUnitful.pbUnitful.pbarUnitful.pcalUnitful.pcdUnitful.pdynUnitful.peVUnitful.percentUnitful.pergUnitful.permilleUnitful.pgUnitful.pkatUnitful.plUnitful.plmUnitful.plxUnitful.pmUnitful.pmolUnitful.powerUnitful.pradUnitful.prefactorUnitful.preferunitsUnitful.prefixUnitful.prefixdictUnitful.promote_to_derivedUnitful.promote_unitUnitful.promotionUnitful.psUnitful.psiUnitful.psrUnitful.pΩUnitful.qUnitful.radUnitful.reflevelUnitful.registerUnitful.replace_valueUnitful.rpmUnitful.rpsUnitful.sUnitful.showrepUnitful.si_no_prefixUnitful.si_prefixesUnitful.sign_fastUnitful.sin_fastUnitful.slugUnitful.sortexpUnitful.srUnitful.superscriptUnitful.tan_fastUnitful.tensUnitful.tensfactorUnitful.tologUnitful.uUnitful.uconvertUnitful.uconvert_affineUnitful.uconvertpUnitful.uconvertrpUnitful.unitUnitful.unitmodulesUnitful.unwrapUnitful.upreferredUnitful.ustrcheck_boolUnitful.ustripUnitful.wkUnitful.yAUnitful.yBaUnitful.yBqUnitful.yCUnitful.yFUnitful.yGalUnitful.yGyUnitful.yHUnitful.yHzUnitful.yHz2πUnitful.yJUnitful.yKUnitful.yLUnitful.yNUnitful.yPUnitful.yPaUnitful.ySUnitful.yStUnitful.ySvUnitful.yTUnitful.yTorrUnitful.yVUnitful.yWUnitful.yWbUnitful.ybUnitful.ybarUnitful.ycalUnitful.ycdUnitful.ydUnitful.ydynUnitful.yeVUnitful.yergUnitful.ygUnitful.ykatUnitful.ylUnitful.ylmUnitful.ylxUnitful.ymUnitful.ymolUnitful.yradUnitful.ysUnitful.ysrUnitful.yΩUnitful.zAUnitful.zBaUnitful.zBqUnitful.zCUnitful.zFUnitful.zGalUnitful.zGyUnitful.zHUnitful.zHzUnitful.zHz2πUnitful.zJUnitful.zKUnitful.zLUnitful.zNUnitful.zPUnitful.zPaUnitful.zSUnitful.zStUnitful.zSvUnitful.zTUnitful.zTorrUnitful.zVUnitful.zWUnitful.zWbUnitful.zbUnitful.zbarUnitful.zcalUnitful.zcdUnitful.zdynUnitful.zeVUnitful.zergUnitful.zgUnitful.zkatUnitful.zlUnitful.zlmUnitful.zlxUnitful.zmUnitful.zmolUnitful.zradUnitful.zsUnitful.zsrUnitful.zΩUnitful.°Unitful.°CUnitful.°FUnitful.ħUnitful.Φ0Unitful.ΩUnitful.ε0Unitful.μ0Unitful.μAUnitful.μBUnitful.μBaUnitful.μBqUnitful.μCUnitful.μFUnitful.μGalUnitful.μGyUnitful.μHUnitful.μHzUnitful.μHz2πUnitful.μJUnitful.μKUnitful.μLUnitful.μNUnitful.μPUnitful.μPaUnitful.μSUnitful.μStUnitful.μSvUnitful.μTUnitful.μTorrUnitful.μVUnitful.μWUnitful.μWbUnitful.μbUnitful.μbarUnitful.μcalUnitful.μcdUnitful.μdynUnitful.μeVUnitful.μergUnitful.μgUnitful.μkatUnitful.μlUnitful.μlmUnitful.μlxUnitful.μmUnitful.μmolUnitful.μradUnitful.μsUnitful.μsrUnitful.μΩUnitful.σUnitful.ϵ0Unitful.𝐈Unitful.𝐉Unitful.𝐋Unitful.𝐌Unitful.𝐍Unitful.𝐓Unitful.𝚯"
},

]}
