var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#The-RiemannComplexNumbers-module-1",
    "page": "Readme",
    "title": "The RiemannComplexNumbers module",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)This Julia module gives an alternative to Complex numbers and their operations to give mathematically more sensible results."
},

{
    "location": "#The-Complex-Problem-1",
    "page": "Readme",
    "title": "The Complex Problem",
    "category": "section",
    "text": "Standard complex field operations in Julia work fine; the problems begin to arise when dividing by zero. It is logical to extend the real numbers with a positive infinity and a negative infinity. And we have both +Inf and -Inf in Julia. However, there are problems with the implementation of infinite values for Julia Complex numbers. Here are some examples.# For real numbers, division by 0 gives an infinite result\njulia> 1/0\nInf\n\n# This division by 0 for complex numbers is fine\njulia> (2+3im)/0\nInf + Inf*im\n\n# But this one doesn\'t make sense\njulia> 2im/0\nNaN + Inf*im\n\n# For real numbers we have the following sensible result\njulia> (Inf + 3) == (Inf + 2)\ntrue\n\n# But it breaks for complex numbers\njulia> (Inf + 3im) == (Inf + 2im)\nfalse"
},

{
    "location": "#This-Solution-1",
    "page": "Readme",
    "title": "This Solution",
    "category": "section",
    "text": "This module defines an alternative to Complex numbers in which there is a single infinite value (we call ComplexInfinity). We introduce a new type called RC (an abbreviation for Riemann Complex number). Let\'s see how the previous calculations work in this new context:julia> using RiemannComplexNumbers\n\njulia> (2+3IM)/0\nComplexInf\n\njulia> 2IM/0\nComplexInf\n\njulia> Inf + 3IM == Inf + 2IM\ntrueThe constant IM is the replacement for im that can be used to construct Riemann Complex numbers. In general, wrapping values in RC will work:julia> RC(2)\n2 + 0IM\n\njulia> RC(3-im)\n3 - 1IMDividing by zero gives the following:julia> (2-3IM)/0\nComplexInf\n\njulia> 3/0IM\nComplexInf\n\njulia> 0/0IM\nComplexNaNTo convert an RC number to a Complex do this:julia> z = 3.5 - 5IM\n3.5 - 5.0IM\n\njulia> Complex(z)\n3.5 - 5.0imBasic arithmetic operations work exactly the same for RC numbers as for Complex but will be slower (to deal with division by zero and operations with ComplexInf and ComplexNaN).Some basic functions (such as sqrt and exp) are provided. See the functions.jl file in the src directory."
},

{
    "location": "#To-Do-1",
    "page": "Readme",
    "title": "To Do",
    "category": "section",
    "text": "Some LinearAlgebra operations don\'t work; I\'m not sure why. For example, evaluating the determinant of an RC matrix throws errors."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RiemannComplexNumbers.ComplexInfRiemannComplexNumbers.ComplexNaNRiemannComplexNumbers.IMRiemannComplexNumbers.RCRiemannComplexNumbers.RiemannComplexNumbersRiemannComplexNumbers.evalRiemannComplexNumbers.include"
},

]}
