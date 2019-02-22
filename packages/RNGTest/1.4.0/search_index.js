var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#The-Crush-test-suite-of-l\'Ecuyer-for-Julia-1",
    "page": "Readme",
    "title": "The Crush test suite of l\'Ecuyer for Julia",
    "category": "section",
    "text": "(Image: RNGTest) (Image: Build Status) (Image: Build status)The package is a Julia interface to the test suite TestU01 of Pierre l\'Ecuyer. All the tests included in the SmallCrush and BigCrush test batteries can be called as Julia functions. The first argument to the test function must be eithera function without arguments, which must return a Float64 between zero and one, or\na wrapped AbstractRNG obtained via the function wrap(rng, T)  where T is the type of the variates produced by rng that one  wants tested (currently T must be one of the standard  finite-precision Julia Integer or FloatingPoint types).The output from the test is a p-value. The package also includes the Small- and the BigCrush batteries. Some examples:julia> using RNGTest\njulia> RNGTest.smallcrushJulia(rand)\njulia> using Distribtions\njulia> gf() = cdf(Gamma(), rand(Gamma()));\njulia> RNGTest.bigcrushJulia(gf)\njulia> rng = RNGTest.wrap(MersenneTwister(), UInt32)\njulia> RNGTest.bigcrushTestU01(rng)Note that the BigCrush test battery takes about twelve hours on a normal computer."
},

{
    "location": "#Homepage-of-the-test-suite-1",
    "page": "Readme",
    "title": "Homepage of the test suite",
    "category": "section",
    "text": "http://simul.iro.umontreal.ca/testu01/tu01.html"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RNGTest.CompResRNGTest.Gotw_TestArrayRNGTest.KnuthRes1RNGTest.KnuthRes2RNGTest.MarsaResRNGTest.MarsaRes2RNGTest.NpairResRNGTest.RNGGeneratorRNGTest.RNGTestRNGTest.ResBasicRNGTest.ResChi2RNGTest.ResPoissonRNGTest.Snpair_StatArrayRNGTest.SpectralResRNGTest.StringResRNGTest.StringRes2RNGTest.StringRes3RNGTest.TestableNumbersRNGTest.Unif01RNGTest.WalkResRNGTest.WrappedRNGRNGTest.__init__RNGTest.bigcrushJuliaRNGTest.bigcrushTestU01RNGTest.check_depsRNGTest.crushTestU01RNGTest.deleteRNGTest.diehardTestU01RNGTest.evalRNGTest.fillcacheRNGTest.fips_140_2TestU01RNGTest.includeRNGTest.libprobdistRNGTest.libtestu01RNGTest.libtestu01extractorsRNGTest.pvalueRNGTest.scomp_LempelZivRNGTest.scomp_LinearCompRNGTest.sknuth_CollisionRNGTest.sknuth_CollisionPermutRNGTest.sknuth_CouponCollectorRNGTest.sknuth_GapRNGTest.sknuth_MaxOftRNGTest.sknuth_PermutationRNGTest.sknuth_RunRNGTest.sknuth_SimpPokerRNGTest.smallcrushJuliaRNGTest.smallcrushTestU01RNGTest.smarsa_BirthdaySpacingsRNGTest.smarsa_CollisionOverRNGTest.smarsa_GCDRNGTest.smarsa_MatrixRankRNGTest.smarsa_Savir2RNGTest.smarsa_SerialOverRNGTest.snpair_ClosePairsRNGTest.sspectral_Fourier3RNGTest.sstring_AutoCorRNGTest.sstring_HammingCorrRNGTest.sstring_HammingIndepRNGTest.sstring_HammingWeight2RNGTest.sstring_LongestHeadRunRNGTest.sstring_PeriodsInStringsRNGTest.sstring_RunRNGTest.svaria_AppearanceSpacingsRNGTest.svaria_SampleCorrRNGTest.svaria_SampleMeanRNGTest.svaria_SampleProdRNGTest.svaria_SumCollectorRNGTest.svaria_WeightDistribRNGTest.swalk_RandomWalk1RNGTest.swriteRNGTest.wrap"
},

]}
