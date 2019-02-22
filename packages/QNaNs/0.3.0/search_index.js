var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#QNaNs.jl-1",
    "page": "Readme",
    "title": "QNaNs.jl",
    "category": "section",
    "text": "Simplifies the use of quiet NaNs to propagate information from within numerical computations.&nbsp;&nbsp; (Image: Build Status)                                                       Jeffrey Sarnoff © 2016-Mar-26 at New York####Quick Look> Pkg.add(\"QNaNs\")> using QNaNs\n> a_qnan = qnan(36)\nNaN\n> payload = qnan(a_qnan)\n36\n\n> typeof(a_qnan)\nFloat64\n> isnan(a_qnan), isnan(NaN)   # quiet NaNs areNaNs\ntrue, true\n\n# works with Float64, Float32 and Float16\n\n> a_qnan32 = qnan(Int32(-77))\nNaN32\n> payload = qnan(a_qnan32); payload, typeof(payload)\n-77, Int32\n\n> qnan16 = qnan(Int16(-77)); payload16 = qnan(qnan16);\n> qnan16, typeof(qnan16), payload16, typeof(payload16)\nNaN16, Float16, -77, Int16\n#####William Kahan on QNaNsNaNs propagate through most computations. Consequently they do get used. ... they are needed only for computation, with temporal sequencing that can be hard to revise, harder to reverse. NaNs must conform to mathematically consistent rules that were deduced, not invented arbitrarily ...NaNs [ give software the opportunity, especially when searching ] to follow an unexceptional path ( no need for exotic control structures ) to a point where an exceptional event can be appraised ... when additional evidence may have accrued ...  NaNs [have] a field of bits into which software can record, say, how and/or where the NaN came into existence. That [can be] extremely helpful [in] “Retrospective Diagnosis.”– IEEE754 Lecture Notes (highly redacted)"
},

{
    "location": "#Quiet-NaNs-were-designed-to-propagate-information-from-within-numerical-computations-1",
    "page": "Readme",
    "title": "Quiet NaNs were designed to propagate information from within numerical computations",
    "category": "section",
    "text": "The payload for a Float64 qnan is an integer [-(2^51-1),(2^51-1)]   The payload for a Float32 qnan is an integer [-(2^22-1),(2^22-1)]   The payload for a Float16 qnan is an integer [-(2^9-1),(2^9-1)]  Julia uses a payload of zero for NaN, NaN32, NaN16.####About QNaN PropogationA QNaN introduced into a numerical processing sequence usually will propogate along the computational path without loss of identity unless another QNaN is substituted or an second QNaN occurs in an arithmetic expression.When two qnans are arguments to the same binary op, Julia propagates the qnan on the left hand side. > using QNaNs\n> function test()\n    lhs = qnan(-64)\n    rhs = qnan(100)\n    (qnan(lhs-rhs)==qnan(lhs), qnan(rhs/lhs)==qnan(rhs))\n  end;\n> test()\n(true, true)References:William Kahan\'s IEEE754 Lecture Notes"
},

{
    "location": "autodocs/#QNaNs.QNaNs",
    "page": "Docstrings",
    "title": "QNaNs.QNaNs",
    "category": "module",
    "text": "qnan(si::{Int64|32|16}) generates a quiet NaN with a payload of si  \n\nqnan(fp::{Float64|32|16}) recovers the signed integer payload from fp  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#QNaNs.qnan",
    "page": "Docstrings",
    "title": "QNaNs.qnan",
    "category": "function",
    "text": "qnan(si::{Int64|32|16}) generates a quiet NaN with a payload of si  \n\nqnan(fp::{Float64|32|16}) recovers the signed integer payload from fp\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "QNaNs.QNaNsQNaNs.evalQNaNs.includeQNaNs.qnan"
},

]}
