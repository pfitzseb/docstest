var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ValidatedNumerics.jl-1",
    "page": "Readme",
    "title": "ValidatedNumerics.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov) (Image: Join the chat at https://gitter.im/dpsanders/ValidatedNumerics.jl)ValidatedNumerics.jl is a suite of Julia packages for performing Validated Numerics in Julia, i.e. rigorous computations with finite-precision floating-point arithmetic, using interval arithmetic: quantities are treated as intervals that are propagated throughout a calculation. The final result is an interval that is guaranteed to contain the correct result, starting from the given initial data.The aims of the package are both correctness and good performance."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, from within Julia dojulia> Pkg.add(\"ValidatedNumerics\")Since version 0.9, ValidatedNumerics.jl is a meta-package that automatically installs and reexports the following packages from the JuliaIntervals GitHub organization:IntervalArithmetic.jl: arithmetic and elementary functions on intervals\nIntervalRootFinding.jl: find roots of functions in a guaranteed way\nIntervalConstraintProgramming.jl: characterization of feasible sets of equations and inequalities\nIntervalContractors.jl: contractors and reverse (or inverse) functions"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Documentation is available separately for each of the above packages."
},

{
    "location": "#IEEE-Standard-1788-2015-IEEE-Standard-for-Interval-Arithmetic-1",
    "page": "Readme",
    "title": "IEEE Standard 1788-2015 - IEEE Standard for Interval Arithmetic",
    "category": "section",
    "text": "The IEEE Std 1788-2015 - IEEE Standard for Interval Arithmetic was published in June 2015. We are working towards having ValidatedNumerics be conformant with this standard.To do so, we have incorporated tests from the excellent ITF1788 test suite, originally written by Marco Nehmeier and Maximilian Kiesner, and converted to a common format and to output tests for Julia by Oliver Heimlich."
},

{
    "location": "#Authors-1",
    "page": "Readme",
    "title": "Authors",
    "category": "section",
    "text": "Luis Benet, Instituto de Ciencias Físicas, Universidad Nacional Autónoma de México (UNAM)\nDavid P. Sanders, Departamento de Física, Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)"
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "Oliver Heimlich\nNikolay Kryukov\nJohn Verzani"
},

{
    "location": "#Bibliography-1",
    "page": "Readme",
    "title": "Bibliography",
    "category": "section",
    "text": "Validated Numerics: A Short Introduction to Rigorous Computations, W. Tucker, Princeton University Press (2010)\nIntroduction to Interval Analysis, R.E. Moore, R.B. Kearfott & M.J. Cloud, SIAM (2009)"
},

{
    "location": "#Related-packages-1",
    "page": "Readme",
    "title": "Related packages",
    "category": "section",
    "text": "MPFI.jl, a Julia wrapper around the MPFI C library, a multiple-precision interval arithmetic library based on MPFR\nIntervals.jl, an alternative implementation of basic interval functions."
},

{
    "location": "#History-1",
    "page": "Readme",
    "title": "History",
    "category": "section",
    "text": "This project was begun during a masters\' course in the postgraduate programs in Physics and in Mathematics at UNAM during the second semester of 2013 (in Python – the ValidiPy package), and was reinitiated – now in Julia – in the first semester of 2015. We thank the participants of the courses for putting up with the half-baked material and contributing energy and ideas."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Financial support is acknowledged from DGAPA-UNAM PAPIME grants PE-105911 and PE-107114, and DGAPA-UNAM PAPIIT grant IN-117214. LB acknowledges support through a Cátedra Marcos Moshinsky (2013). DPS acknowledges a sabbatical fellowship from CONACYT and thanks Alan Edelman and the Julia group at MIT for hosting his sabbatical visit."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ValidatedNumerics...ValidatedNumerics.@I_strValidatedNumerics.@bigintervalValidatedNumerics.@constraintValidatedNumerics.@contractorValidatedNumerics.@decoratedValidatedNumerics.@floatintervalValidatedNumerics.@formatValidatedNumerics.@functionValidatedNumerics.@intervalValidatedNumerics.@make_intervalValidatedNumerics.@separatorValidatedNumerics.AbstractIntervalValidatedNumerics.BisectionValidatedNumerics.DecoratedIntervalValidatedNumerics.FlatASTValidatedNumerics.IntervalValidatedNumerics.IntervalArithmeticValidatedNumerics.IntervalBoxValidatedNumerics.IntervalConstraintProgrammingValidatedNumerics.IntervalContractorsValidatedNumerics.IntervalOptimisationValidatedNumerics.IntervalRootFindingValidatedNumerics.KrawczykValidatedNumerics.NewtonValidatedNumerics.PavingValidatedNumerics.RegionValidatedNumerics.RootValidatedNumerics.RootSearchValidatedNumerics.RoundTiesToAwayValidatedNumerics.RoundTiesToEvenValidatedNumerics.SeparatorValidatedNumerics.SubPavingValidatedNumerics.ValidatedNumericsValidatedNumerics.VolValidatedNumerics.abs_revValidatedNumerics.acos_revValidatedNumerics.acosh_revValidatedNumerics.asin_revValidatedNumerics.asinh_revValidatedNumerics.atan_revValidatedNumerics.atanh_revValidatedNumerics.bisectValidatedNumerics.branch_and_pruneValidatedNumerics.cancelminusValidatedNumerics.cancelplusValidatedNumerics.comValidatedNumerics.contains_zeroValidatedNumerics.cos_revValidatedNumerics.cosh_revValidatedNumerics.dacValidatedNumerics.decorationValidatedNumerics.defValidatedNumerics.derivativeValidatedNumerics.diamValidatedNumerics.displaymodeValidatedNumerics.distValidatedNumerics.div_revValidatedNumerics.dotValidatedNumerics.emptyintervalValidatedNumerics.entireintervalValidatedNumerics.epsValidatedNumerics.evalValidatedNumerics.exp10_revValidatedNumerics.exp2_revValidatedNumerics.exp_revValidatedNumerics.expm1_revValidatedNumerics.extended_divValidatedNumerics.find_rootsValidatedNumerics.flattenValidatedNumerics.gauss_elimination_intervalValidatedNumerics.gauss_elimination_interval!ValidatedNumerics.gauss_seidel_contractorValidatedNumerics.gauss_seidel_contractor!ValidatedNumerics.gauss_seidel_intervalValidatedNumerics.gauss_seidel_interval!ValidatedNumerics.hullValidatedNumerics.illValidatedNumerics.includeValidatedNumerics.infValidatedNumerics.infimumValidatedNumerics.intervalValidatedNumerics.interval_from_midpoint_radiusValidatedNumerics.interval_partValidatedNumerics.inv_revValidatedNumerics.is_uniqueValidatedNumerics.isatomicValidatedNumerics.iscommonValidatedNumerics.isdisjointValidatedNumerics.isemptyValidatedNumerics.isentireValidatedNumerics.isinteriorValidatedNumerics.isnaiValidatedNumerics.isthinValidatedNumerics.isunboundedValidatedNumerics.isuniqueValidatedNumerics.jacobianValidatedNumerics.log10_revValidatedNumerics.log1p_revValidatedNumerics.log2_revValidatedNumerics.log_revValidatedNumerics.magValidatedNumerics.max_revValidatedNumerics.maximiseValidatedNumerics.maximizeValidatedNumerics.midValidatedNumerics.midpoint_radiusValidatedNumerics.migValidatedNumerics.min_revValidatedNumerics.minimiseValidatedNumerics.minimizeValidatedNumerics.minus_revValidatedNumerics.mul_revValidatedNumerics.mul_rev_IEEE1788ValidatedNumerics.naiValidatedNumerics.newton1dValidatedNumerics.parametersValidatedNumerics.paveValidatedNumerics.pi_intervalValidatedNumerics.plus_revValidatedNumerics.powValidatedNumerics.power_revValidatedNumerics.precedesValidatedNumerics.quadratic_rootsValidatedNumerics.radiusValidatedNumerics.recursively_branch_and_pruneValidatedNumerics.refine!ValidatedNumerics.root_statusValidatedNumerics.rootsValidatedNumerics.separatorValidatedNumerics.setformatValidatedNumerics.setindexValidatedNumerics.show_codeValidatedNumerics.showfullValidatedNumerics.sign_revValidatedNumerics.sin_revValidatedNumerics.sinh_revValidatedNumerics.slopeValidatedNumerics.sqr_revValidatedNumerics.sqrt_revValidatedNumerics.step!ValidatedNumerics.strictprecedesValidatedNumerics.supValidatedNumerics.supremumValidatedNumerics.tan_revValidatedNumerics.tanh_revValidatedNumerics.trvValidatedNumerics.widenValidatedNumerics.±ValidatedNumerics.×ValidatedNumerics.∅ValidatedNumerics.∇ValidatedNumerics.∞ValidatedNumerics.≺ValidatedNumerics.⊂ValidatedNumerics.⊃ValidatedNumerics.⊇ValidatedNumerics.⪽"
},

]}
