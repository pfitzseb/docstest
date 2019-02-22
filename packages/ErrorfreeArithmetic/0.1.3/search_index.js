var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ErrorfreeArithmetic.jl-1",
    "page": "Readme",
    "title": "ErrorfreeArithmetic.jl",
    "category": "section",
    "text": "Error-free transformations are used to get results with extra accuracy."
},

{
    "location": "#Copyright-2016-2017-by-Jeffrey-Sarnoff.-Released-under-the-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright © 2016-2017 by Jeffrey Sarnoff.  Released under the MIT License.",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#exports-1",
    "page": "Readme",
    "title": "exports",
    "category": "section",
    "text": "These are error-free transformations.two_sum, two_diff, two_prod\ntwo_square, two_cube\nthree_sum, three_diff, three_prod\nthree_fmaThese are error-free transformations with magnitude sorted arguments.two_hilo_sum, two_lohi_sum\ntwo_hilo_diff, two_lohi_diff\nthree_hilo_sum, three_lohi_sum\nthree_hilo_diff, three_lohi_diffThese are least-error transformations, as close to error-free as possible.two_inv, two_sqrt\ntwo_div"
},

{
    "location": "#naming-1",
    "page": "Readme",
    "title": "naming",
    "category": "section",
    "text": "The routines named with the prefix two_ return a two-tuple holding (high_order_part, low_order_part).Those named with the prefix three_ return a three-tuple holding (high_part, mid_part, low_part)."
},

{
    "location": "#introduction-1",
    "page": "Readme",
    "title": "introduction",
    "category": "section",
    "text": "Error-free transformations return a tuple of the nominal result and the residual from the result (the left-over part).    Error-free addition sums two floating point values (a, b) and returns two floating point values (hi, lo) such that:    (+)(a, b) == hi \n|hi| > |lo| and (+)(hi, lo) == hi  abs(hi) and abs(lo) do not share significant bitsHere is how it is done:function add_errorfree(a::T, b::T) where T<:Union{Float64, Float32}\n    a_plus_b_hipart = a + b\n    b_asthe_summand = a_plus_b_hipart - a\n    a_plus_b_lopart = (a - (a_plus_b_hipart - b_asthe_summand)) + (b - b_asthe_summand)\n    return a_plus_b_hipart, a_plus_b_lopart\nend\n\na = Float32(1/golden^2)                           #   0.3819_6602f0\nb = Float32(pi^3)                                 #  31.0062_7700f0\na_plus_b = a + b                                  #  31.3882_4300f0\n\nhi, lo = add_errorfree(a,b)                       # (31.3882_4300f0, 3.8743_0270f-7)\n\na_plus_b == hi                                    # true\nabs(hi) > abs(lo) && hi + lo == hi                # true\nThe lo part is a portion of the accurate value, it is (most of) the residuum that the hi part could not represent.     The hi part runs out of significant bits before the all of the accurate value is represented.  We can see this:        a = Float32(1/golden^2)                           #   0.3819_6602f0\nb = Float32(pi^3)                                 #  31.0062_7700f0\n\nhi, lo = add_errorfree(a,b)                       # (31.3882_4300f0, 3.8743_0270f-7)\n\na_plus_b_accurate = BigFloat(a) + BigFloat(b)\nlo_accurate  = Float32(a_plus_b_accurate - hi)\n\nlo == lo_accurate                                 # true"
},

{
    "location": "#use-1",
    "page": "Readme",
    "title": "use",
    "category": "section",
    "text": "This package is intended to be used in the support of other work.     All routines expect Float64 or Float32 or Float16 values."
},

{
    "location": "#compatibility-with-earlier-versions-1",
    "page": "Readme",
    "title": "compatibility with earlier versions",
    "category": "section",
    "text": "Here are the aliasesusing ErrorfreeArithmetic\n\n@inline add_errorfree(a::T, b::T) where {T<:Base.IEEEFloat} = two_sum(a, b)\n@inline subtract_errorfree(a::T, b::T) where {T<:Base.IEEEFloat} = two_diff(a, b)\n@inline multiply_errorfree(a::T, b::T) where {T<:Base.IEEEFloat} = two_prod(a, b)\n@inline square_errorfree(a::T) where {T<:Base.IEEEFloat} = two_square(a)"
},

{
    "location": "#references-1",
    "page": "Readme",
    "title": "references",
    "category": "section",
    "text": "Takeshi Ogita, Siegfried M. Rump, and Shin\'ichi Oishi     Accurate Sum and Dot Product     SIAM J. Sci. Comput., 26(6), 1955–1988.     Published online: 25 July 2006     DOI: 10.1137/030601818  Stef Graillat, Valérie Ménissier-Morain     Error-Free Transformations in Real and Complex Floating Point Arithmetic     International Symposium on Nonlinear Theory and its Applications (NOLTA\'07), Sep 2007, Vancouver, Canada.      Proceedings of International Symposium on Nonlinear Theory and its Applications (NOLTA\'07), pp.341-344.     https://hal.archives-ouvertes.fr/hal-01306229    Sylvie Boldo, Stef Graillat, and Jean-Michel Muller     On the robustness of the 2Sum and Fast2Sum algorithms     ACM Transactions on Mathematical Software, Association for Computing Machinery, 2017     https://hal.inria.fr/ensl-01310023    "
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_cube",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_cube",
    "category": "function",
    "text": "three_cube(a)\n\nComputes s = fl(a*a*a) and e1 = err(a*a*a), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_diff",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_diff",
    "category": "function",
    "text": "three_diff(a, b, c)\n\nComputes s = fl(a-b-c) and e1 = err(a-b-c), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_fma",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_fma",
    "category": "function",
    "text": "three_fma(a, b, c)\n\nComputes s = fl(fma(a,b,c)) and e1 = err(fma(a,b,c)), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_hilo_diff",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_hilo_diff",
    "category": "function",
    "text": "three_hilo_diff(a, b, c)\n\nunchecked requirement |a| ≥ |b| ≥ |c|\n\nComputes s = fl(a-b-c) and e1 = err(a-b-c), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_hilo_sum",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_hilo_sum",
    "category": "function",
    "text": "three_hilo_sum(a, b, c)\n\nunchecked requirement |a| ≥ |b| ≥ |c|\n\nComputes s = fl(a+b+c) and e1 = err(a+b+c), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_lohi_diff",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_lohi_diff",
    "category": "function",
    "text": "three_lohi_diff(a, b, c)\n\nunchecked requirement |c| ≥ |b| ≥ |a|\n\nComputes s = fl(a-b-c) and e1 = err(a-b-c), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_lohi_sum",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_lohi_sum",
    "category": "function",
    "text": "three_lohi_sum(a, b, c)\n\nunchecked requirement |c| ≥ |b| ≥ |a|\n\nComputes s = fl(a+b+c) and e1 = err(a+b+c), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_prod",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_prod",
    "category": "function",
    "text": "three_prod(a, b, c)\n\nComputes s = fl(a*b*c) and e1 = err(a*b*c), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.three_sum",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.three_sum",
    "category": "function",
    "text": "three_sum(a, b, c)\n\nComputes s = fl(a+b+c) and e1 = err(a+b+c), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_cube",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_cube",
    "category": "function",
    "text": "two_cube(a)\n\nComputes s = fl(a*a*a) and e1 = err(a*a*a), e2 = err(e1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_diff",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_diff",
    "category": "function",
    "text": "two_diff(a, b)\n\nComputes s = fl(a-b) and e = err(a-b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_hilo_diff",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_hilo_diff",
    "category": "function",
    "text": "two_hilo_diff(a, b)\n\nunchecked requirement |a| ≥ |b|\n\nComputes s = fl(a-b) and e = err(a-b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_hilo_sum",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_hilo_sum",
    "category": "function",
    "text": "two_hilo_sum(a, b)\n\nunchecked requirement |a| ≥ |b|\n\nComputes s = fl(a+b) and e = err(a+b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_lohi_diff",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_lohi_diff",
    "category": "function",
    "text": "two_lohi_diff(a, b)\n\nunchecked requirement |b| ≥ |a|\n\nComputes s = fl(a-b) and e = err(a-b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_lohi_sum",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_lohi_sum",
    "category": "function",
    "text": "two_lohi_sum(a, b)\n\nunchecked requirement |b| ≥ |a|\n\nComputes s = fl(a+b) and e = err(a+b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_prod",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_prod",
    "category": "function",
    "text": "two_prod(a, b)\n\nComputes s = fl(a*b) and e = err(a*b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_square",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_square",
    "category": "function",
    "text": "two_square(a)\n\nComputes s = fl(a*a) and e = err(a*a).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ErrorfreeArithmetic.two_sum",
    "page": "Docstrings",
    "title": "ErrorfreeArithmetic.two_sum",
    "category": "function",
    "text": "two_sum(a, b)\n\nComputes s = fl(a+b) and e = err(a+b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ErrorfreeArithmetic.ErrorfreeArithmeticErrorfreeArithmetic.evalErrorfreeArithmetic.includeErrorfreeArithmetic.three_cubeErrorfreeArithmetic.three_diffErrorfreeArithmetic.three_fmaErrorfreeArithmetic.three_hilo_diffErrorfreeArithmetic.three_hilo_sumErrorfreeArithmetic.three_lohi_diffErrorfreeArithmetic.three_lohi_sumErrorfreeArithmetic.three_prodErrorfreeArithmetic.three_sumErrorfreeArithmetic.two_cubeErrorfreeArithmetic.two_diffErrorfreeArithmetic.two_divErrorfreeArithmetic.two_hilo_diffErrorfreeArithmetic.two_hilo_sumErrorfreeArithmetic.two_invErrorfreeArithmetic.two_lohi_diffErrorfreeArithmetic.two_lohi_sumErrorfreeArithmetic.two_prodErrorfreeArithmetic.two_sqrtErrorfreeArithmetic.two_squareErrorfreeArithmetic.two_sum"
},

]}
