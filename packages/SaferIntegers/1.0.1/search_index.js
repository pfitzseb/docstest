var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#SaferIntegers-1",
    "page": "Overview",
    "title": "SaferIntegers",
    "category": "section",
    "text": ""
},

{
    "location": "#These-integer-types-do-not-ignore-arithmetic-overflows-and-underflows.-1",
    "page": "Overview",
    "title": "These integer types do not ignore arithmetic overflows and underflows.",
    "category": "section",
    "text": "Copyright ©2018-2019 by Jeffrey Sarnoff. This work is made available under The MIT License."
},

{
    "location": "#A-Safer-Way-1",
    "page": "Overview",
    "title": "A Safer Way",
    "category": "section",
    "text": "Using the default Int or UInt types allows overflow and underflow errors to occur silently, without notice. These incorrect values propagate and such errors are difficult to recognize after the fact.This package exports safer versions. These types check for overflow and underflow in each of the basic arithmetic functions. The processing will stop with a message in the event of overflow or underflow.  On one machine, the overhead relative to the built-in integer types is <= 1.2x."
},

{
    "location": "#Background-1",
    "page": "Overview",
    "title": "Background",
    "category": "section",
    "text": "Integer overflow occurs when an integer type is increased beyond its maximum value. Integer underflow occurs when an integer type is decreased below its minimum value.  Signed and Unsigned values are subject to overflow and underflow.  With Julia, you can see the rollover using Int or UInt types:   typemax(Int) + one(Int) < 0\n   typemin(Int) - one(Int) > 0\n   typemax(UInt) + one(UInt) == typemin(UInt)\n   typemin(UInt) - one(UInt) == typemax(UInt)\n   ```\nThere are security implications for integer overflow in certain situations.julia  for i in 1:a     secure(biohazard[i])  enda = Int16(456) * Int16(567)  a == -3592 # and the for loop does not execute ```"
},

{
    "location": "highlights/#",
    "page": "Highlights",
    "title": "Highlights",
    "category": "page",
    "text": ""
},

{
    "location": "highlights/#Highlights-1",
    "page": "Highlights",
    "title": "Highlights",
    "category": "section",
    "text": ""
},

{
    "location": "highlights/#Why-Does-This-Package-Exist?-1",
    "page": "Highlights",
    "title": "Why Does This Package Exist?",
    "category": "section",
    "text": "Your work may require that integer calculations be secure, well-behaved or unsurprising.\nYour clients may expect your package/app/product calculates with care and correctness.\nYour software may become part of a system on which the health or assets of others depends.\nYour prefer to publish research results that are free of error, and you work with integers."
},

{
    "location": "highlights/#What-Does-This-Package-Offer?-1",
    "page": "Highlights",
    "title": "What Does This Package Offer?",
    "category": "section",
    "text": "SaferIntegers lets you work more cleanly and always alerts otherwise silent problems.\nThis package is designed for easy use and written to be performant in many sorts of use.\nUsing SaferIntegers can preclude some known ways that insecure systems are breached.\nSupports Rationals formed of SafeInteger types"
},

{
    "location": "basicguide/#",
    "page": "Basic Guide",
    "title": "Basic Guide",
    "category": "page",
    "text": ""
},

{
    "location": "basicguide/#A-Basic-Guide-1",
    "page": "Basic Guide",
    "title": "A Basic Guide",
    "category": "section",
    "text": "To use safer integers within your computations, where you have been using     explict digit sequences put them inside the safe integer constructors,     SafeInt(11) or SafeUInt(0x015A) and similarly for the bitsize-named versions     SafeInt8, SafeInt16 .. SafeInt128 and SafeUInt8 .. SafeUInt128   Where you had usedInt or UInt now use SafeInt or SafeUInt and similarly with the bitsize-named versions.    SafeInt and SafeUInt give you these arithmetic operators:     +, -, *, div, rem, fld, mod, ^     which have become overflow and underflow aware.The Int and UInt types can fail at simple arithmetic and will continue carrying the incorrectness forward.     So, the validity of values obtained is difficult to ascertain.Most calculations proceed without incident,  and when used SafeInts operate as Ints should a calculation encouter an overflow or underflow,      we are alerted and the calculation does not proceed."
},

{
    "location": "basicguide/#Give-them-a-whirl.-1",
    "page": "Basic Guide",
    "title": "Give them a whirl.",
    "category": "section",
    "text": "Get the package: Pkg.add(\"SaferIntegers\")      Use the package:  using SaferIntegers     These functions check for overflow/underflow automatically:    \nabs, (neg), (-), (+), (*), (^), div, fld, cld, rem (%), mod, divrem, fldmod\nso does (/), before converting to Float64"
},

{
    "location": "basicguide/#Exported-Types-/-Constructors-1",
    "page": "Basic Guide",
    "title": "Exported Types / Constructors",
    "category": "section",
    "text": "SafeInt8, SafeInt16, SafeInt32, SafeInt64, SafeInt128    \nSafeUInt8, SafeUInt16, SafeUInt32, SafeUInt64, SafeUInt128   \nSafeSigned, SafeUnsigned, SafeIntegerThey check for overflow, even when multiplied by the usual Int and UInt types.They do not auto-widen and are type stable. Otherwise, they are as system integers."
},

{
    "location": "supports/#",
    "page": "Supported Operations",
    "title": "Supported Operations",
    "category": "page",
    "text": ""
},

{
    "location": "supports/#Supported-Operations-and-Functions-1",
    "page": "Supported Operations",
    "title": "Supported Operations and Functions",
    "category": "section",
    "text": "signbit, sign, abs, abs2\ncount_ones, count_zeros\nleading_zeros, trailing_zeros, leading_ones, trailing_ones\nndigits0z\nisless, isequal, <=, <, ==, !=, >=, >\n>>>, >>, <<, +, -, *, \\, ^\ndiv, fld, cld, rem, mod\nzero, one\ntypemin, typemax, widen"
},

{
    "location": "supports/#Other-Conversions-1",
    "page": "Supported Operations",
    "title": "Other Conversions",
    "category": "section",
    "text": "Signed(x::SafeSigned) returns an signed integer of the same bitwidth as x     Unsigned(x::SafeUnsigned) returns an unsigned integer of the same bitwidth as x     Integer(x::SafeInteger) returns an Integer of the same bitwidth and either Signed or Unsigned as is xSafeSigned(x::Signed) returns a safe signed integer of the same bitwidth as x     SafeUnsigned(x::Unsigned) returns a safe unsigned integer of the same bitwidth as x     SafeInteger(x::Integer) returns a safe Integer of the same bitwidth and either Signed or Unsigned as is x"
},

{
    "location": "howtouse/#",
    "page": "How To Use",
    "title": "How To Use",
    "category": "page",
    "text": ""
},

{
    "location": "howtouse/#How-To-Use-1",
    "page": "How To Use",
    "title": "How To Use",
    "category": "section",
    "text": ""
},

{
    "location": "howtouse/#Just-use-safe-integer-types-in-place-of-the-usual-integer-types.-The-rest-is-well-handled.-1",
    "page": "How To Use",
    "title": "Just use safe integer types in place of the usual integer types.  The rest is well handled.",
    "category": "section",
    "text": ""
},

{
    "location": "howtouse/#To-Write-Code-With-Safe-Integers-1",
    "page": "How To Use",
    "title": "To Write Code With Safe Integers",
    "category": "section",
    "text": "Use these exported types in place of their built-in counterpartsSafeInt, SafeInt8, SafeInt16, SafeInt32, SafeInt64, SafeInt128\nSafeUInt, SafeUInt8 SafeUInt16, SafeUInt32, SafeUInt64, SafeUInt128"
},

{
    "location": "howtouse/#Operations-with-a-SafeInteger-that-result-in-an-integer-value-will-return-a-SafeInteger-1",
    "page": "How To Use",
    "title": "Operations with a SafeInteger that result in an integer value will return a SafeInteger",
    "category": "section",
    "text": ""
},

{
    "location": "safeshifts/#",
    "page": "Safe Shifts",
    "title": "Safe Shifts",
    "category": "page",
    "text": ""
},

{
    "location": "safeshifts/#Safe-Shifts-1",
    "page": "Safe Shifts",
    "title": "Safe Shifts",
    "category": "section",
    "text": "It is safe to shift (<<, >>) a value of type T where `β = sizeof(T) * 8 (with  SafeUnsigned valueby 0 bits, in which case the result is the value unchanged\nby bitsof(T) bits, in which case the result is zero(T)\nby -bitsof(T) bits, in which case the result is zero(T)\nby ⦃1, .., bitsof(T)-1⦄\nthe result is strictly less than any nonzero value given\nthe result, given a zero value remains zero\nby ⦃-1, .., -(bitsof(T)-1)⦄\nthe result is strictly greater than any nonzero value given\nthe result, given a zero value remains zeroof type T by 0 bits (unchanged) or by ±β bits where β ∈ ⦃0, 1, .., bitsof(T)⦄.An OverflowError occurs when there is an attempt to shift a value of safe type T by a magnitude greater than ±bitsof(T)."
},

{
    "location": "rationals/#",
    "page": "Safer Rationals",
    "title": "Safer Rationals",
    "category": "page",
    "text": ""
},

{
    "location": "rationals/#SaferRationals-1",
    "page": "Safer Rationals",
    "title": "SaferRationals",
    "category": "section",
    "text": ""
},

{
    "location": "rationals/#Construction-1",
    "page": "Safer Rationals",
    "title": "Construction",
    "category": "section",
    "text": "Rational{SafeInt32}(3, 5) === SafeInt32(3) // SafeInt32(5)\n\nRational(SafeInt(3), SafeInt(5)) === SafeInt(3) // SafeInt(5)\n# Rational{SafeInt64}(3, 5) on 64 bit machine\n\na = SafeInt16(3); b = 5;\nRational(a, b)\n# Rational{SafeInt16}(3, 5)"
},

{
    "location": "rationals/#Use-1",
    "page": "Safer Rationals",
    "title": "Use",
    "category": "section",
    "text": "Use just as you would use Julia\'s Rationals.  These will check for overflow, though."
},

{
    "location": "benchmarks/#",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "page",
    "text": ""
},

{
    "location": "benchmarks/#Benchmarks-1",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "section",
    "text": "Relative to the system Integer types, using the Safer Integer types has a time cost of 1.10x..1.25x..2.00x."
},

{
    "location": "references/#",
    "page": "Refs",
    "title": "Refs",
    "category": "page",
    "text": ""
},

{
    "location": "references/#References-1",
    "page": "Refs",
    "title": "References",
    "category": "section",
    "text": ""
},

{
    "location": "references/#Carnegie-Mellon-Software-Engineering-Institute-1",
    "page": "Refs",
    "title": "Carnegie-Mellon Software Engineering Institute",
    "category": "section",
    "text": "Signed Integer Overflow\nUnsigned Integer Wrapping"
},

{
    "location": "references/#Lectures-1",
    "page": "Refs",
    "title": "Lectures",
    "category": "section",
    "text": "Secure Coding (Integer Security)\nInteger Arithmetic and Undefined Behavior"
},

]}
