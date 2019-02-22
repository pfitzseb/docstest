var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TaylorModels-1",
    "page": "Readme",
    "title": "TaylorModels",
    "category": "section",
    "text": "[![travis badge][travisbadge]][travisurl] [![appveyor badge][appveyorbadge]][appveyorurl] [![codecov badge][codecovbadge]][codecovurl]"
},

{
    "location": "#Documentation-[here][documenter_latest]-1",
    "page": "Readme",
    "title": "Documentation [here][documenter_latest]",
    "category": "section",
    "text": "<!– Change documentation link to documenter_stable once published! –>[travisbadge]: https://travis-ci.org/dpsanders/TaylorModels.jl.svg?branch=master [travisurl]: https://travis-ci.org/dpsanders/TaylorModels.jl[appveyorbadge]: https://ci.appveyor.com/api/projects/status/github/dpsanders/TaylorModels.jl?svg=true&branch=master [appveyorurl]: https://ci.appveyor.com/project/dpsanders/taylormodels-jl[codecovbadge]: http://codecov.io/github/dpsanders/TaylorModels.jl/coverage.svg?branch=master [codecovurl]: http://codecov.io/github/dpsanders/TaylorModels.jl?branch=master[documenterstable]: https://dpsanders.github.io/TaylorModels.jl/stable [documenterlatest]: https://dpsanders.github.io/TaylorModels.jl/latestThis package combines the IntervalArithmetic.jl and TaylorSeries.jl packages to provide Taylor models, i.e. Taylor polynomials with guaranteed error bounds to approximate functions.An introduction is available in this video from JuliaCon 2018."
},

{
    "location": "#Authors-1",
    "page": "Readme",
    "title": "Authors",
    "category": "section",
    "text": "Luis Benet, Instituto de Ciencias Físicas, Universidad Nacional Autónoma de México (UNAM)\nDavid P. Sanders, Departamento de Física, Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)"
},

{
    "location": "#Bibliography-1",
    "page": "Readme",
    "title": "Bibliography",
    "category": "section",
    "text": ""
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Financial support is acknowledged from DGAPA-UNAM PAPIIT grants IN-117117, IG-100616 and IG-100819. DPS acknowledges support through a Cátedra Marcos Moshinsky (2018)."
},

{
    "location": "autodocs/#TaylorModels.RTaylorModel1",
    "page": "Docstrings",
    "title": "TaylorModels.RTaylorModel1",
    "category": "type",
    "text": "RTaylorModel1{T,S}\n\nTaylor model in 1 variable, providing a rigurous polynomial approximation (around x_0) and a relative remainder \\delta for a function f(x) in one variable, valid in the interval I. Corresponds to definition 2.3.2 of Mioara Joldes\' thesis.\n\nFields:\n\npol: polynomial approximation, represented as TaylorSeries.Taylor1\nrem: the interval bound\nx0: expansion point\nI: interval over which the Taylor model is defined / valid\n\nThe approximation f(x) = \\sum_i p_i (x - x_0)^i + \\delta (x - x_0)^{n+1} is satisfied for all x\\in I; n is the order (degree) of the polynomial p(x).\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.TaylorModel1",
    "page": "Docstrings",
    "title": "TaylorModels.TaylorModel1",
    "category": "type",
    "text": "TaylorModel1{T,S}\n\nTaylor model in 1 variable, providing a rigurous polynomial approximation (around x_0) and an absolute remainder \\Delta for a function f(x) in one variable, valid in the interval I. Corresponds to definition 2.1.3 of Mioara Joldes\' thesis.\n\nFields:\n\npol: polynomial approximation, represented as TaylorSeries.Taylor1\nrem: the interval bound\nx0: expansion point\nI: interval over which the Taylor model is defined / valid\n\nThe approximation f(x) = \\sum_{i=0}^n p_i (x - x_0)^i + \\Delta is satisfied for all x\\in I (0\\in\\Delta); n is the order (degree) of the polynomial p(x).\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.TaylorModelN",
    "page": "Docstrings",
    "title": "TaylorModels.TaylorModelN",
    "category": "type",
    "text": "TaylorModelN{N,T,S}\n\nTaylor Models with absolute remainder for N independent variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels._rpaar",
    "page": "Docstrings",
    "title": "TaylorModels._rpaar",
    "category": "function",
    "text": "_rpaar(f::Function, x0::Interval, I::Interval, _order::Integer)\n\nRigurous polynomial approximation (RPA) with absolute remainder for the function f on the interval I,  using a Taylor expansion around the interval x0 of order _order. The bound is computed by bound_absrem(@ref) exploiting monotonicity if possible, otherwise, it uses Lagrange bound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels._rparr",
    "page": "Docstrings",
    "title": "TaylorModels._rparr",
    "category": "function",
    "text": "_rparr(f::Function, x0::Interval, I::Interval, _order::Integer)\n\nRigurous polynomial approximation (RPA) with relative remainder for the function f on the interval I,  using a Taylor expansion around the interval x0 of order _order. The bound is computed by bound_relrem(@ref) exploiting monotonicity if possible, otherwise, it uses the Lagrange coefficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.bound_absrem",
    "page": "Docstrings",
    "title": "TaylorModels.bound_absrem",
    "category": "function",
    "text": "bound_absrem(f::Function, polf::Taylor1, polfI::Taylor1, x0::Interval, I::Interval)\n\nBound the absolute remainder of the polynomial approximation of f given by the Taylor polynomial polf around x0 on the interval I. It requires the interval extension polfI of the polynomial that approximates f for the whole interval I, in order to compute the Lagrange remainder.\n\nIf polfI[end] has a definite sign, then it is monotonic in the intervals [I.lo, x0] and [x0.hi, I.hi], which is exploited; otherwise, it is used to compute the Lagrange remainder.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.bound_relrem",
    "page": "Docstrings",
    "title": "TaylorModels.bound_relrem",
    "category": "function",
    "text": "bound_relrem(f::Function, polf::Taylor1, polfI::Taylor1, x0::Interval, I::Interval)\n\nBound the relative remainder of the polynomial approximation of f given by the Taylor polynomial polf around x0 on the interval I. It requires an the interval extension polfI of a polynomial that approximates f for the whole interval I, in order to compute the Lagrange remainder.\n\nIf polfI[end] has a definite sign, then it is monotonic in the interval I, which is exploited; otherwise, the last coefficients bounds the relative remainder.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.bound_taylor1",
    "page": "Docstrings",
    "title": "TaylorModels.bound_taylor1",
    "category": "function",
    "text": "bound_taylor1(fT::Taylor1, I::Interval)\n\nCompute a tight polynomial bound for the Taylor polynomial fT in the interval I.\n\nNote: Algorithm 2.1.1 corresponds to evaluate(fT, I) or simply fT(I). This function uses the roots of the derivative offt` to obtain a tighter bound.\n\n\n\n\n\nbound_taylor1(fT::Taylor1, fTd::Taylor1, I::Interval)\n\nCompute a tight polynomial bound for the Taylor polynomial fT in the interval I, considering whether its derivative ftd has a definite sign.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.check_existence",
    "page": "Docstrings",
    "title": "TaylorModels.check_existence",
    "category": "function",
    "text": "check_existence(f, tm::T, xm::T, x0::Interval, x_test::Interval)\n\nChecks that the range of one iterate of the Picard-Lindelöf operator is contained in the a-priori interval x_test (of the dependent variable) that bounds the solution of the ODE defined by f. This function returns an interval of the independent variable where the a-priori solution is warranted to exist; see shrink_for_existance. Here, tm and xm are Taylor Models (TaylorModel1 or RTaylorModel1) defined for the independent and dependent variables, and x0 is the initial condition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.fp_rpa",
    "page": "Docstrings",
    "title": "TaylorModels.fp_rpa",
    "category": "function",
    "text": "fp_rpa(tm::TaylorModel1{Interval{T},T})\nfp_rpa(tm::RTaylorModel1{Interval{T},T})\n\nConvert a tm TaylorModel to a TaylorModel whose polynomial coefficients of type T<:Real. The accumulated error is added to the remainder. The mid point of the expansion interval is preferentially rounded down if it is not an exactly representable value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorSeries.integrate",
    "page": "Docstrings",
    "title": "TaylorSeries.integrate",
    "category": "function",
    "text": "integrate(a::T, c0::Interval)\n\nIntegrates the one-variable Taylor Model (TaylorModel1 or RTaylorModel1) with respect to the independent variable; c0 is the interval representing the integration constant; if omitted it is considered as the zero interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.picard_lindelöf",
    "page": "Docstrings",
    "title": "TaylorModels.picard_lindelöf",
    "category": "function",
    "text": "picard_lindelöf(f, tm::T, xm::T, x0::Interval)\n𝒫(f, tm::T, xm::T, x0::Interval)\n\nReturns the application of the Picard-Lindelöf operator associated to the ODE dotx = f(tx), with initial condition x0. Here, tm and xm are (one-variable) Taylor Models (TaylorModel1 or RTaylorModel1).\n\n𝒫 is an abbreviation of this operator, which is obtained as \\mscrP<TAB>.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.reducetoorder",
    "page": "Docstrings",
    "title": "TaylorModels.reducetoorder",
    "category": "function",
    "text": "reducetoorder(a::RTaylorModel1, m::Integer)\n\nFrom a::RTaylorModel1, it returns a RTaylorModel1 of order m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.rpa",
    "page": "Docstrings",
    "title": "TaylorModels.rpa",
    "category": "function",
    "text": "rpa(g::Function, tmf::TaylorModel1)    rpa(g::Function, tmf::TaylorModelN)\n\nRigurous polynomial approximation (RPA) for the function g using the Taylor Model with absolute remainder tmf. The bound is computed exploiting monotonicity if possible, otherwise, it uses Lagrange bound.\n\n\n\n\n\nrpa(g::Function, tmf::RTaylorModel1)\n\nRigurous polynomial approximation (RPA) for the function g using the Taylor Model with absolute remainder tmf. The bound is computed exploiting monotonicity if possible, otherwise, it uses Lagrange bound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.shrink_for_existance",
    "page": "Docstrings",
    "title": "TaylorModels.shrink_for_existance",
    "category": "function",
    "text": "shrink_for_existance(xm::T, t_interval, x_test, max_steps::Integer=20)\n\nShrinks the a-priori independent-variable interval t_interval so the range of xm, the Taylor Model (TaylorModel1 or RTaylorModel1) associated with the dependent variable, is contained in the a-priori interval x_test. The method used is some sort of bisection. If no independent-variable interval is found within max_steps, an empty interval is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.tight_remainder",
    "page": "Docstrings",
    "title": "TaylorModels.tight_remainder",
    "category": "function",
    "text": "tight_remainder(f, tm::T, xm::T, x0::Interval, max_steps::Integer=20)\n\nReturns a Taylor Model for the dependent variable, with a tighter remainder, which is obtained after successive iteration of the Picard-Lindelöf. If the remainder is not tighter (and identity with the former iterate is not obtained) a Taylor Model with an empty interval is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TaylorModels.𝒫",
    "page": "Docstrings",
    "title": "TaylorModels.𝒫",
    "category": "function",
    "text": "picard_lindelöf(f, tm::T, xm::T, x0::Interval)\n𝒫(f, tm::T, xm::T, x0::Interval)\n\nReturns the application of the Picard-Lindelöf operator associated to the ODE dotx = f(tx), with initial condition x0. Here, tm and xm are (one-variable) Taylor Models (TaylorModel1 or RTaylorModel1).\n\n𝒫 is an abbreviation of this operator, which is obtained as \\mscrP<TAB>.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TaylorModels...TaylorModels.@I_strTaylorModels.@bigintervalTaylorModels.@decoratedTaylorModels.@floatintervalTaylorModels.@formatTaylorModels.@intervalTaylorModels.@make_intervalTaylorModels.AbstractIntervalTaylorModels.AbstractSeriesTaylorModels.DecoratedIntervalTaylorModels.HomogeneousPolynomialTaylorModels.IntervalTaylorModels.IntervalArithmeticTaylorModels.IntervalBoxTaylorModels.NumberNotSeriesTaylorModels.RTaylorModel1TaylorModels.RegionTaylorModels.RoundTiesToAwayTaylorModels.RoundTiesToEvenTaylorModels.Taylor1TaylorModels.TaylorModel1TaylorModels.TaylorModelNTaylorModels.TaylorModelsTaylorModels.TaylorNTaylorModels.TaylorSeriesTaylorModels._evaluateTaylorModels._rpaarTaylorModels._rparrTaylorModels.basedivTaylorModels.bisectTaylorModels.bound_absremTaylorModels.bound_relremTaylorModels.bound_taylor1TaylorModels.cancelminusTaylorModels.cancelplusTaylorModels.check_existenceTaylorModels.comTaylorModels.constant_termTaylorModels.contains_zeroTaylorModels.dacTaylorModels.decorationTaylorModels.defTaylorModels.derivativeTaylorModels.diamTaylorModels.differentiateTaylorModels.displayBigOTaylorModels.displaymodeTaylorModels.distTaylorModels.dotTaylorModels.emptyintervalTaylorModels.entireintervalTaylorModels.epsTaylorModels.evalTaylorModels.evaluateTaylorModels.evaluate!TaylorModels.extended_divTaylorModels.fnlistTaylorModels.fp_rpaTaylorModels.get_numvarsTaylorModels.get_orderTaylorModels.get_variable_namesTaylorModels.get_variable_symbolsTaylorModels.get_variablesTaylorModels.getcoeffTaylorModels.hullTaylorModels.illTaylorModels.includeTaylorModels.infTaylorModels.infimumTaylorModels.integrateTaylorModels.intervalTaylorModels.interval_from_midpoint_radiusTaylorModels.interval_partTaylorModels.inverseTaylorModels.isatomicTaylorModels.iscommonTaylorModels.isdisjointTaylorModels.isemptyTaylorModels.isentireTaylorModels.isinteriorTaylorModels.isnaiTaylorModels.isthinTaylorModels.isunboundedTaylorModels.magTaylorModels.midTaylorModels.midpoint_radiusTaylorModels.migTaylorModels.naiTaylorModels.parametersTaylorModels.pi_intervalTaylorModels.picard_lindelöfTaylorModels.polynomialTaylorModels.powTaylorModels.precedesTaylorModels.radiusTaylorModels.reducetoorderTaylorModels.remainderTaylorModels.rpaTaylorModels.set_variablesTaylorModels.setformatTaylorModels.setindexTaylorModels.show_monomialsTaylorModels.show_params_TaylorNTaylorModels.showfullTaylorModels.shrink_for_existanceTaylorModels.strictprecedesTaylorModels.supTaylorModels.supremumTaylorModels.taylor_expandTaylorModels.tight_remainderTaylorModels.tmdataTaylorModels.trvTaylorModels.tupleTMsTaylorModels.update!TaylorModels.use_show_defaultTaylorModels.widenTaylorModels.±TaylorModels.×TaylorModels.α_midTaylorModels.∅TaylorModels.∇TaylorModels.∞TaylorModels.≺TaylorModels.⊂TaylorModels.⊃TaylorModels.⊇TaylorModels.⪽TaylorModels.𝒫"
},

]}
