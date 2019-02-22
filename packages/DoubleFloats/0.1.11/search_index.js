var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DoubleFloats.jl-1",
    "page": "Readme",
    "title": "DoubleFloats.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Math-with-85-accurate-bits.-1",
    "page": "Readme",
    "title": "Math with 85+ accurate bits.",
    "category": "section",
    "text": ""
},

{
    "location": "#[![Build-Status](https://travis-ci.org/JuliaMath/DoubleFloats.jl.svg?branchmaster)](https://travis-ci.org/JuliaMath/DoubleFloats.jl)-1",
    "page": "Readme",
    "title": "(Image: Build Status)",
    "category": "section",
    "text": "See here for function specific absolute and relative errors over 0:1 and 1:2."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Current &mdash; most recently tagged version of the documentation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add DoubleFloatsorjulia> using Pkg\njulia> Pkg.add(\"DoubleFloats\")"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Double64,-Double32,-Double16-1",
    "page": "Readme",
    "title": "Double64, Double32, Double16",
    "category": "section",
    "text": "julia> using DoubleFloats\n\njulia> dbl64 = sqrt(Double64(2)); 1 - dbl64 * inv(dbl64)\n0.0\njulia> dbl32 = sqrt(Double32(2)); 1 - dbl32 * inv(dbl32)\n0.0\njulia> dbl16 = sqrt(Double16(2)); 1 - dbl16 * inv(dbl16)\n0.0\n\njulia> typeof(ans) === Double16\ntruenote: floating-point constants must be used with care, they are evaluated as Float64 values before additional processingjulia> Double64(0.2)\n2.0000000000000001110223024625156540e-01\n\njulia> Double64(2)/10\n1.9999999999999999999999999999999937e-01\n\njulia> d64\"0.2\"\n1.9999999999999999999999999999999937e-01"
},

{
    "location": "#show,-string,-parse-1",
    "page": "Readme",
    "title": "show, string, parse",
    "category": "section",
    "text": "julia> using DoubleFloats\n\njulia> x = sqrt(Double64(2)) / sqrt(Double64(6))\n5.7735026918962576450914878050194151e-01\njulia> string(x)\n\"5.7735026918962576450914878050194151e-01\"\n\njulia> showtyped(x)\nDouble64(0.5773502691896257, 3.3450280739356326e-17)\njulia> showtyped(parse(Double64, stringtyped(x)))\nDouble64(0.5773502691896257, 3.3450280739356326e-17)\n\njulia> Meta.parse(stringtyped(x))\n:(Double64(0.5773502691896257, 3.3450280739356326e-17))"
},

{
    "location": "#golden-ratio-1",
    "page": "Readme",
    "title": "golden ratio",
    "category": "section",
    "text": "julia> using DoubleFloats\n\njulia> ϕ = Double32(MathConstants.golden)\n1.61803398874989490\njulia> phi = \"1.61803398874989484820+\"\njulia> ϕ⁻¹ = inv(ϕ)\n6.18033988749894902e-01\n\njulia> ϕ == 1 + ϕ⁻¹\ntrue\njulia> ϕ === ϕ * ϕ⁻¹ + ϕ⁻¹\ntruetyped value computed value ~abs(golden - computed)\nMathConstants.golden 1.6180339887498948482045868+ 0.0\nFloat64(MathConstants.golden) 1.618033988749895 1.5e-16\nDouble32(MathConstants.golden) 1.618033988749894_90 5.2e-17"
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": ""
},

{
    "location": "#Double64-relative-to-BigFloat-1",
    "page": "Readme",
    "title": "Double64 relative to BigFloat",
    "category": "section",
    "text": "op speedup\n+ 11x\n* 18x\n\\ 7x\ntrig 3x-6xresults from testing with BenchmarkTools on one machine\nBigFloat precision was set to 106 bits, for fair comparison"
},

{
    "location": "#Good-Ways-To-Use-This-1",
    "page": "Readme",
    "title": "Good Ways To Use This",
    "category": "section",
    "text": "In addition to simply using DoubleFloats and going from there, these two suggestions are easily managed and will go a long way in increasing the robustness of the work and reliability in the computational results.   If your input values are Float64s, map them to Double64s and proceed with your computation.  Then unmap your output values as Float64s, do additional work using those Float64s. With Float32 inputs, used Double32s similarly. Where throughput is important, and your algorithms are well-understood, this approach be used with the numerically sensitive parts of your computation only.  If you are doing that, be careful to map the inputs to those parts and unmap the outputs from those parts just as described above."
},

{
    "location": "#Questions-and-Contributions-1",
    "page": "Readme",
    "title": "Questions and Contributions",
    "category": "section",
    "text": "Usage questions can be posted on the [Julia Discourse forum][discourse-tag-url].  Use the topic Numerics (a \"Discipline\") and a put the package name, DoubleFloats, in your question (\"topic\").Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems. The [contributing page][contrib-url] has a few guidelines that should be followed when opening pull requests.[contrib-url]: https://juliamath.github.io/DoubleFloats.jl/latest/man/contributing/ [discourse-tag-url]: https://discourse.julialang.org/tags/doublefloats [gitter-url]: https://gitter.im/juliamath/users[docs-current-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-current-url]: https://juliamath.github.io/DoubleFloats.jl[travis-img]: https://travis-ci.org/JuliaMath/DoubleFloats.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaMath/DoubleFloats.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/xx7nimfpnl1r4gx0?svg=true [appveyor-url]: https://ci.appveyor.com/project/JuliaMath/doublefloats-jl[codecov-img]: https://codecov.io/gh/JuliaMath/DoubleFloats.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaMath/DoubleFloats.jl[issues-url]: https://github.com/JuliaMath/DoubleFloats.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/DoubleFloats0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=DoubleFloats&ver=0.6 [pkg-0.7-img]: http://pkg.julialang.org/badges/DoubleFloats0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=DoubleFloats&ver=0.7"
},

{
    "location": "autodocs/#DoubleFloats.DomainGuard",
    "page": "Docstrings",
    "title": "DoubleFloats.DomainGuard",
    "category": "type",
    "text": "DomainGuard{T}\n\nAn easy way to provide mathematical functions guards that disallow out-of-domain processing describes the canonical value-span and offers the manner of reductive domain comprehension.\n\nFor discontinous [gapping} periodic functions, all that spans any of a subdomain collective is included and admissable.  Each evaluand is provisional; quantities with qualities map the domain-reachable onto canonical values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.add2",
    "page": "Docstrings",
    "title": "DoubleFloats.add2",
    "category": "function",
    "text": "add2(x::T, y::T) where {T<:AbstractFloat}\n\nAdd x and y as if they are DoubleFloat{T} numbers. This is more efficient as first converting to DoubleFloat{T} and then adding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.div2",
    "page": "Docstrings",
    "title": "DoubleFloats.div2",
    "category": "function",
    "text": "div(x::T, y::T) where {T<:AbstractFloat}\n\nDivide x and y as if they are DoubleFloat{T} numbers. This is more efficient as first converting to DoubleFloat{T} and then dividing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.mul2",
    "page": "Docstrings",
    "title": "DoubleFloats.mul2",
    "category": "function",
    "text": "mul2(x::T, y::T) where {T<:AbstractFloat}\n\nMultiply x and y as if they are DoubleFloat{T} numbers. This is more efficient as first converting to DoubleFloat{T} and then multiplying.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.mul222",
    "page": "Docstrings",
    "title": "DoubleFloats.mul222",
    "category": "function",
    "text": "mul222( (ahi, alo), (bhi, blo) ) ↦ (chi, clo)\n\nPreconditions\n\nabs(alo) ≤ abs(ahi) * pow(2, -53)\nabs(blo) ≤ abs(bhi) * pow(2, -53)\n\nPostconditions\n\nabs(clo) ≤ abs(ahi) * pow(2, -53)\nchi + clo == ((ahi + alo) * (bhi + blo)) * (1 + ε), abs(ε) ≤ pow(2, -102)\nchi + clo == chi\n\nTripleDouble_BuildingBlocks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.normalize",
    "page": "Docstrings",
    "title": "DoubleFloats.normalize",
    "category": "function",
    "text": "normalize(x,y)\n\nx_normalized^2 + y_normalized^2 == one(promote_type(typeof(x),typeof(y)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.sld",
    "page": "Docstrings",
    "title": "DoubleFloats.sld",
    "category": "function",
    "text": "sld(x, y)\n\nSpread the result of x/y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.spread",
    "page": "Docstrings",
    "title": "DoubleFloats.spread",
    "category": "function",
    "text": " spread(x)\n\nthe nearest integer to x, away from zero spread complements trunc()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.sub2",
    "page": "Docstrings",
    "title": "DoubleFloats.sub2",
    "category": "function",
    "text": "sub2(x::T, y::T) where {T<:AbstractFloat}\n\nSubtract x and y as if they are DoubleFloat{T} numbers. This is more efficient as first converting to DoubleFloat{T} and then subtracting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DoubleFloats.tld",
    "page": "Docstrings",
    "title": "DoubleFloats.tld",
    "category": "function",
    "text": "tld(x, y)\n\nTruncate the result of x/y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DoubleFloats.@d16_strDoubleFloats.@d32_strDoubleFloats.@d64_strDoubleFloats.AccurateDWMinusDWDoubleFloats.AccurateDWPlusDWDoubleFloats.BigFloatBitsDoubleFloats.BigFloatDigitsDoubleFloats.DWDivDW2DoubleFloats.DWDivDW3DoubleFloats.DWDivFP3DoubleFloats.DWInvDW2DoubleFloats.DWInvDW3DoubleFloats.DWMinusFPDoubleFloats.DWPlusFPDoubleFloats.DWTimesDW2DoubleFloats.DWTimesDW3DoubleFloats.DWTimesFP1DoubleFloats.DWTimesFP3DoubleFloats.DomainGuardDoubleFloats.Double16DoubleFloats.Double32DoubleFloats.Double64DoubleFloats.DoubleFloatDoubleFloats.DoubleFloatsDoubleFloats.Fast2MultDoubleFloats.Fast2SumDoubleFloats.FloatSignedDoubleFloats.HIDoubleFloats.HILODoubleFloats.LODoubleFloats.MultipartFloatDoubleFloats.QuadrupleF16DoubleFloats.QuadrupleF32DoubleFloats.QuadrupleF64DoubleFloats.TangentCoeffsDoubleFloats.TwoDiffDoubleFloats.TwoSumDoubleFloats.abs_db_dbDoubleFloats.abs_dd_ddDoubleFloats.abs_fp_ddDoubleFloats.abs_fpdbDoubleFloats.add133DoubleFloats.add2DoubleFloats.add222DoubleFloats.add223DoubleFloats.add313DoubleFloats.add322DoubleFloats.add323DoubleFloats.add332DoubleFloats.add333DoubleFloats.add_dbdb_dbDoubleFloats.add_dbdb_db_nonfiniteDoubleFloats.add_dbfp_dbDoubleFloats.add_dbfp_db_nonfiniteDoubleFloats.add_dddd_ddDoubleFloats.add_ddfp_ddDoubleFloats.add_fpdb_dbDoubleFloats.add_fpdb_db_nonfiniteDoubleFloats.add_fpdd_ddDoubleFloats.add_fpfp_dbDoubleFloats.add_fpfp_ddDoubleFloats.bernoulli_evenDoubleFloats.calc_expDoubleFloats.cbrt_db_dbDoubleFloats.cbrt_dd_ddDoubleFloats.cos_circleDoubleFloats.cos_kernelDoubleFloats.cos_npio32DoubleFloats.cos_pi1o1024_t64DoubleFloats.cos_pi1o128_t64DoubleFloats.cos_pi1o12_t64DoubleFloats.cos_pi1o15_t64DoubleFloats.cos_pi1o16_t64DoubleFloats.cos_pi1o2048_t64DoubleFloats.cos_pi1o24_t64DoubleFloats.cos_pi1o36_t64DoubleFloats.cos_pi1o3_t64DoubleFloats.cos_pi1o48_t64DoubleFloats.cos_pi1o4_t64DoubleFloats.cos_pi1o512_t64DoubleFloats.cos_pi1o5_t64DoubleFloats.cos_pi1o64_t64DoubleFloats.cos_pi1o6_t64DoubleFloats.cos_pi1o7_t64DoubleFloats.cos_pi1o8_t64DoubleFloats.cos_taylorDoubleFloats.cot_pi1o1024_t64DoubleFloats.cot_pi1o128_t64DoubleFloats.cot_pi1o12_t64DoubleFloats.cot_pi1o15_t64DoubleFloats.cot_pi1o16_t64DoubleFloats.cot_pi1o2048_t64DoubleFloats.cot_pi1o24_t64DoubleFloats.cot_pi1o36_t64DoubleFloats.cot_pi1o3_t64DoubleFloats.cot_pi1o48_t64DoubleFloats.cot_pi1o4_t64DoubleFloats.cot_pi1o512_t64DoubleFloats.cot_pi1o5_t64DoubleFloats.cot_pi1o64_t64DoubleFloats.cot_pi1o6_t64DoubleFloats.cot_pi1o7_t64DoubleFloats.cot_pi1o8_t64DoubleFloats.cot_taylorDoubleFloats.csc_pi1o1024_t64DoubleFloats.csc_pi1o128_t64DoubleFloats.csc_pi1o12_t64DoubleFloats.csc_pi1o15_t64DoubleFloats.csc_pi1o16_t64DoubleFloats.csc_pi1o2048_t64DoubleFloats.csc_pi1o24_t64DoubleFloats.csc_pi1o36_t64DoubleFloats.csc_pi1o3_t64DoubleFloats.csc_pi1o48_t64DoubleFloats.csc_pi1o4_t64DoubleFloats.csc_pi1o512_t64DoubleFloats.csc_pi1o5_t64DoubleFloats.csc_pi1o64_t64DoubleFloats.csc_pi1o6_t64DoubleFloats.csc_pi1o7_t64DoubleFloats.csc_pi1o8_t64DoubleFloats.csc_taylorDoubleFloats.cubeDoubleFloats.cube_db_dbDoubleFloats.cube_dd_ddDoubleFloats.cube_fp_ddDoubleFloats.div2DoubleFloats.doubleDoubleFloats.double16DoubleFloats.double16invDoubleFloats.double32DoubleFloats.double32invDoubleFloats.double64DoubleFloats.double64invDoubleFloats.double_invDoubleFloats.dvi_dbdb_dbDoubleFloats.dvi_dbdb_db_nonfiniteDoubleFloats.dvi_dbfp_dbDoubleFloats.dvi_dbfp_db_nonfiniteDoubleFloats.dvi_dddd_ddDoubleFloats.dvi_dddd_dd_fastDoubleFloats.dvi_ddfp_ddDoubleFloats.dvi_fpdb_dbDoubleFloats.dvi_fpdb_db_nonfiniteDoubleFloats.dvi_fpdd_ddDoubleFloats.dvi_fpdd_dd_fastDoubleFloats.dvi_fpfp_dbDoubleFloats.dvi_fpfp_ddDoubleFloats.evalDoubleFloats.exp_half_oneDoubleFloats.exp_intDoubleFloats.exp_taylorDoubleFloats.exp_zero_halfDoubleFloats.exponentDoubleFloats.fma_DoubleFloats.fma_2DoubleFloats.fma_3DoubleFloats.fma_4DoubleFloats.fmodDoubleFloats.fracpartDoubleFloats.halfpiDoubleFloats.halfpi_d64DoubleFloats.halfpi_df64DoubleFloats.halfpi_minusDoubleFloats.hash_0_double_loDoubleFloats.hash_double_loDoubleFloats.inc_pi_1o1024_t64DoubleFloats.includeDoubleFloats.index_npio32DoubleFloats.infDoubleFloats.intpartDoubleFloats.inv_db_dbDoubleFloats.inv_dd_ddDoubleFloats.inv_dd_dd_fastDoubleFloats.inv_factDoubleFloats.inv_fp_dbDoubleFloats.inv_fp_ddDoubleFloats.inv_halfpi_d64DoubleFloats.inv_onepi_d64DoubleFloats.inv_pi_15o32_d64DoubleFloats.inv_pi_15o32_t64DoubleFloats.inv_pi_1o128_d64DoubleFloats.inv_pi_1o128_t64DoubleFloats.inv_pi_1o12_d64DoubleFloats.inv_pi_1o12_t64DoubleFloats.inv_pi_1o16_d64DoubleFloats.inv_pi_1o16_t64DoubleFloats.inv_pi_1o1_d64DoubleFloats.inv_pi_1o1_t64DoubleFloats.inv_pi_1o2048_t64DoubleFloats.inv_pi_1o24_d64DoubleFloats.inv_pi_1o24_t64DoubleFloats.inv_pi_1o256_d64DoubleFloats.inv_pi_1o256_t64DoubleFloats.inv_pi_1o2_d64DoubleFloats.inv_pi_1o2_t64DoubleFloats.inv_pi_1o32_d64DoubleFloats.inv_pi_1o32_t64DoubleFloats.inv_pi_1o3_d64DoubleFloats.inv_pi_1o3_t64DoubleFloats.inv_pi_1o4_d64DoubleFloats.inv_pi_1o4_t64DoubleFloats.inv_pi_1o512_t64DoubleFloats.inv_pi_1o64_d64DoubleFloats.inv_pi_1o64_t64DoubleFloats.inv_pi_1o6_d64DoubleFloats.inv_pi_1o6_t64DoubleFloats.inv_pi_1o8_d64DoubleFloats.inv_pi_1o8_t64DoubleFloats.inv_pi_2o1_d64DoubleFloats.inv_pi_2o1_t64DoubleFloats.inv_pi_4o1_d64DoubleFloats.inv_pi_4o1_t64DoubleFloats.inv_pi_7o16_d64DoubleFloats.inv_pi_7o16_t64DoubleFloats.inv_qrtrpi_d64DoubleFloats.inv_twopi_d64DoubleFloats.isfractionalDoubleFloats.isnegDoubleFloats.isneginfDoubleFloats.isnonnegDoubleFloats.isnonposDoubleFloats.isnonzeroDoubleFloats.isposDoubleFloats.isposinfDoubleFloats.k_pio2DoubleFloats.logtenDoubleFloats.logtwoDoubleFloats.minus_halfpiDoubleFloats.minus_piDoubleFloats.minus_qrtrpiDoubleFloats.minus_twopiDoubleFloats.mod2pi_negDoubleFloats.modhalfpiDoubleFloats.modhalfpi_negDoubleFloats.modhalfpipmDoubleFloats.modpiDoubleFloats.modpi_negDoubleFloats.modpipmDoubleFloats.modqrtrpiDoubleFloats.modqrtrpi_negDoubleFloats.modqrtrpipmDoubleFloats.mul132DoubleFloats.mul133DoubleFloats.mul2DoubleFloats.mul222DoubleFloats.mul223DoubleFloats.mul232DoubleFloats.mul233DoubleFloats.mul312DoubleFloats.mul313DoubleFloats.mul322DoubleFloats.mul323DoubleFloats.mul332DoubleFloats.mul333DoubleFloats.mul_by_halfDoubleFloats.mul_by_twoDoubleFloats.mul_dbdb_dbDoubleFloats.mul_dbdb_db_nonfiniteDoubleFloats.mul_dbfp_dbDoubleFloats.mul_dbfp_db_nonfiniteDoubleFloats.mul_dddd_ddDoubleFloats.mul_ddfp_ddDoubleFloats.mul_fpdb_dbDoubleFloats.mul_fpdb_db_nonfiniteDoubleFloats.mul_fpdd_ddDoubleFloats.mul_fpfp_dbDoubleFloats.mul_fpfp_ddDoubleFloats.mul_pow2DoubleFloats.mul_pwr2DoubleFloats.n_bernoulli_evenDoubleFloats.n_cos_npio32DoubleFloats.n_exp_intDoubleFloats.n_npio32DoubleFloats.n_sin_npio32DoubleFloats.n_tan_coeffDoubleFloats.n_tan_npio32DoubleFloats.nanDoubleFloats.neg_db_dbDoubleFloats.neg_dd_ddDoubleFloats.neg_fp_dbDoubleFloats.neg_fp_ddDoubleFloats.negabsDoubleFloats.negabs_db_dbDoubleFloats.negabs_dd_ddDoubleFloats.negabs_fp_dbDoubleFloats.negabs_fp_ddDoubleFloats.neginfDoubleFloats.ninv_factDoubleFloats.normalizeDoubleFloats.npio32DoubleFloats.nused_inv_factDoubleFloats.one_d64DoubleFloats.one_t64DoubleFloats.onepiDoubleFloats.onepi_d64DoubleFloats.onepi_df64DoubleFloats.pi_15o32_d64DoubleFloats.pi_15o32_t64DoubleFloats.pi_1o1024_t64DoubleFloats.pi_1o128_d64DoubleFloats.pi_1o128_t64DoubleFloats.pi_1o12_d64DoubleFloats.pi_1o12_t64DoubleFloats.pi_1o16_d64DoubleFloats.pi_1o16_t64DoubleFloats.pi_1o1_d64DoubleFloats.pi_1o1_t64DoubleFloats.pi_1o1_t64_hiDoubleFloats.pi_1o1_t64_loDoubleFloats.pi_1o1_t64_mdDoubleFloats.pi_1o2048_t64DoubleFloats.pi_1o24_d64DoubleFloats.pi_1o24_t64DoubleFloats.pi_1o256_d64DoubleFloats.pi_1o256_t64DoubleFloats.pi_1o2_d64DoubleFloats.pi_1o2_t64DoubleFloats.pi_1o32_d64DoubleFloats.pi_1o32_t64DoubleFloats.pi_1o3_d64DoubleFloats.pi_1o3_t64DoubleFloats.pi_1o4_d64DoubleFloats.pi_1o4_t64DoubleFloats.pi_1o4_t64_hiDoubleFloats.pi_1o4_t64_loDoubleFloats.pi_1o4_t64_mdDoubleFloats.pi_1o512_t64DoubleFloats.pi_1o64_d64DoubleFloats.pi_1o64_t64DoubleFloats.pi_1o6_d64DoubleFloats.pi_1o6_t64DoubleFloats.pi_1o8_d64DoubleFloats.pi_1o8_t64DoubleFloats.pi_2o1_d64DoubleFloats.pi_2o1_t64DoubleFloats.pi_4o1_d64DoubleFloats.pi_4o1_t64DoubleFloats.pi_7o16_d64DoubleFloats.pi_7o16_t64DoubleFloats.pi_minusDoubleFloats.posinfDoubleFloats.powr2_fp_dbDoubleFloats.powr2_fp_ddDoubleFloats.powr3_fp_dbDoubleFloats.powr3_fp_ddDoubleFloats.powr4_fp_dbDoubleFloats.powr4_fp_ddDoubleFloats.powr5_fp_dbDoubleFloats.powr5_fp_ddDoubleFloats.powr6_fp_dbDoubleFloats.powr6_fp_ddDoubleFloats.qrtrpiDoubleFloats.qrtrpi_d64DoubleFloats.qrtrpi_df64DoubleFloats.qrtrpi_minusDoubleFloats.renormDoubleFloats.renorm_hiloDoubleFloats.root2_fp_dbDoubleFloats.root2_fp_ddDoubleFloats.root3_fp_dbDoubleFloats.root3_fp_ddDoubleFloats.root4_fp_dbDoubleFloats.root4_fp_ddDoubleFloats.root5_ddsi_ddDoubleFloats.root5_fp_dbDoubleFloats.root5_fp_ddDoubleFloats.root6_fp_dbDoubleFloats.root6_fp_ddDoubleFloats.rootn_dbsi_dbDoubleFloats.rootn_ddsi_ddDoubleFloats.sec_pi1o1024_t64DoubleFloats.sec_pi1o128_t64DoubleFloats.sec_pi1o12_t64DoubleFloats.sec_pi1o15_t64DoubleFloats.sec_pi1o16_t64DoubleFloats.sec_pi1o2048_t64DoubleFloats.sec_pi1o24_t64DoubleFloats.sec_pi1o36_t64DoubleFloats.sec_pi1o3_t64DoubleFloats.sec_pi1o48_t64DoubleFloats.sec_pi1o4_t64DoubleFloats.sec_pi1o512_t64DoubleFloats.sec_pi1o5_t64DoubleFloats.sec_pi1o64_t64DoubleFloats.sec_pi1o6_t64DoubleFloats.sec_pi1o7_t64DoubleFloats.sec_pi1o8_t64DoubleFloats.sec_taylorDoubleFloats.showtypedDoubleFloats.significandDoubleFloats.signsDoubleFloats.sin_circleDoubleFloats.sin_kernelDoubleFloats.sin_npio32DoubleFloats.sin_pi1o1024_t64DoubleFloats.sin_pi1o128_t64DoubleFloats.sin_pi1o12_t64DoubleFloats.sin_pi1o15_t64DoubleFloats.sin_pi1o16_t64DoubleFloats.sin_pi1o2048_t64DoubleFloats.sin_pi1o24_t64DoubleFloats.sin_pi1o36_t64DoubleFloats.sin_pi1o3_t64DoubleFloats.sin_pi1o48_t64DoubleFloats.sin_pi1o4_t64DoubleFloats.sin_pi1o512_t64DoubleFloats.sin_pi1o5_t64DoubleFloats.sin_pi1o64_t64DoubleFloats.sin_pi1o6_t64DoubleFloats.sin_pi1o7_t64DoubleFloats.sin_pi1o8_t64DoubleFloats.sin_taylorDoubleFloats.sincos_circleDoubleFloats.sincos_taylorDoubleFloats.sixteenthpiDoubleFloats.sldDoubleFloats.splitnumstringDoubleFloats.spreadDoubleFloats.sqrt_db_dbDoubleFloats.sqrt_dd_ddDoubleFloats.squareDoubleFloats.square_db_dbDoubleFloats.square_dd_ddDoubleFloats.square_fp_ddDoubleFloats.stringtypedDoubleFloats.sub2DoubleFloats.sub223DoubleFloats.sub232DoubleFloats.sub233DoubleFloats.sub312DoubleFloats.sub313DoubleFloats.sub322DoubleFloats.sub323DoubleFloats.sub332DoubleFloats.sub333DoubleFloats.sub_dbdb_dbDoubleFloats.sub_dbdb_db_nonfiniteDoubleFloats.sub_dbfp_dbDoubleFloats.sub_dbfp_db_nonfiniteDoubleFloats.sub_dddd_ddDoubleFloats.sub_ddfp_ddDoubleFloats.sub_fpdb_dbDoubleFloats.sub_fpdb_db_nonfiniteDoubleFloats.sub_fpdd_ddDoubleFloats.sub_fpfp_dbDoubleFloats.sub_fpfp_ddDoubleFloats.tan0qrtrpiDoubleFloats.tan0qrtrpi_denomcoeffsDoubleFloats.tan0qrtrpi_denompolyDoubleFloats.tan0qrtrpi_numercoeffsDoubleFloats.tan0qrtrpi_numerpolyDoubleFloats.tan_circleDoubleFloats.tan_coeffDoubleFloats.tan_npio32DoubleFloats.tan_pi1o1024_t64DoubleFloats.tan_pi1o128_t64DoubleFloats.tan_pi1o12_t64DoubleFloats.tan_pi1o15_t64DoubleFloats.tan_pi1o16_t64DoubleFloats.tan_pi1o2048_t64DoubleFloats.tan_pi1o24_t64DoubleFloats.tan_pi1o36_t64DoubleFloats.tan_pi1o3_t64DoubleFloats.tan_pi1o48_t64DoubleFloats.tan_pi1o4_t64DoubleFloats.tan_pi1o512_t64DoubleFloats.tan_pi1o5_t64DoubleFloats.tan_pi1o64_t64DoubleFloats.tan_pi1o6_t64DoubleFloats.tan_pi1o7_t64DoubleFloats.tan_pi1o8_t64DoubleFloats.tan_taylorDoubleFloats.thirtysecondpiDoubleFloats.threesixteenthpiDoubleFloats.tldDoubleFloats.tripleDoubleFloats.triple16DoubleFloats.triple16invDoubleFloats.triple32DoubleFloats.triple32invDoubleFloats.triple64DoubleFloats.triple64invDoubleFloats.triple_invDoubleFloats.trytypedparseDoubleFloats.twokminus1DoubleFloats.twopiDoubleFloats.twopi_d64DoubleFloats.twopi_df64DoubleFloats.twopi_minusDoubleFloats.ulpDoubleFloats.value_minus_piDoubleFloats.value_minus_qrtrpiDoubleFloats.⊕DoubleFloats.⊖DoubleFloats.⊗DoubleFloats.⊘"
},

]}
