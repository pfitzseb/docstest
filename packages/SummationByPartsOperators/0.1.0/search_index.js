var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SummationByPartsOperators-1",
    "page": "Readme",
    "title": "SummationByPartsOperators",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)A library of classical summation-by-parts (SBP) operators used in finite difference methods to get provably stable semidiscretisations, paying special attention to boundary conditions."
},

{
    "location": "#Basic-Operators-1",
    "page": "Readme",
    "title": "Basic Operators",
    "category": "section",
    "text": "The following derivative operators are implemented as \"lazy operators\", i.e. no matrix is formed explicitly."
},

{
    "location": "#Periodic-Domains-1",
    "page": "Readme",
    "title": "Periodic Domains",
    "category": "section",
    "text": "periodic_derivative_operator(derivative_order, accuracy_order, xmin, xmax, N)\nThese are classical central finite difference operators using N nodes on the interval [xmin, xmax].\nperiodic_derivative_operator(Holoborodko2008(), derivative_order, accuracy_order, xmin, xmax, N)\nThese are central finite difference operators using N nodes on the interval [xmin, xmax] and the coefficients of Pavel Holoborodko.\nfourier_derivative_operator(xmin, xmax, N)\nFourier derivative operators are implemented using the fast Fourier transform of FFTW.jl."
},

{
    "location": "#Finite/Nonperiodic-Domains-1",
    "page": "Readme",
    "title": "Finite/Nonperiodic Domains",
    "category": "section",
    "text": "derivative_operator(source_of_coefficients, derivative_order, accuracy_order, xmin, xmax, N)\nFinite difference SBP operators for first and second derivatives can be obained by using MattssonNordström2004() as source_of_coefficients. Other sources of coefficients are implemented as well. To obtain a full list for all operators, use subtypes(SourceOfCoefficients).\nlegendre_derivative_operator(xmin, xmax, N)\nUse Lobatto Legendre polynomial collocation schemes on N, i.e. polynomials of degree N-1, implemented via PolynomialBases.jl."
},

{
    "location": "#Dissipation-Operators-1",
    "page": "Readme",
    "title": "Dissipation Operators",
    "category": "section",
    "text": "Additionally, some artificial dissipation/viscosity operators are implemented. The most basic usage is Di = dissipation_operator(D), where D can be a (periodic, Fourier, Legendre, SBP FD) derivative operator. Use ?dissipation_operator for more details."
},

{
    "location": "#Conversion-to-Other-Forms-1",
    "page": "Readme",
    "title": "Conversion to Other Forms",
    "category": "section",
    "text": "Sometimes, it can be convenient to obtain an explicit (sparse, banded) matrix form of the operators. Therefore, some conversion functions are supplied, e.g.julia> using SummationByPartsOperators\n\njulia> D = derivative_operator(MattssonNordström2004(), 1, 2, 0., 1., 5)\nSBP 1st derivative operator of order 2 {T=Float64, Parallel=Val{:serial}}\non a grid in [0.0, 1.0] using 5 nodes\nand coefficients given in\n  Mattsson, Nordström (2004)\n  Summation by parts operators for finite difference approximations of second\n    derivaties.\n  Journal of Computational Physics 199, pp.503-540.\n\n\njulia> Matrix(D)\n5×5 Array{Float64,2}:\n -4.0   4.0   0.0   0.0  0.0\n -2.0   0.0   2.0   0.0  0.0\n  0.0  -2.0   0.0   2.0  0.0\n  0.0   0.0  -2.0   0.0  2.0\n  0.0   0.0   0.0  -4.0  4.0\n\njulia> using SparseArrays\n\njulia> sparse(D)\n5×5 SparseMatrixCSC{Float64,Int64} with 10 stored entries:\n  [1, 1]  =  -4.0\n  [2, 1]  =  -2.0\n  [1, 2]  =  4.0\n  [3, 2]  =  -2.0\n  [2, 3]  =  2.0\n  [4, 3]  =  -2.0\n  [3, 4]  =  2.0\n  [5, 4]  =  -4.0\n  [4, 5]  =  2.0\n  [5, 5]  =  4.0\n\njulia> using BandedMatrices\n\njulia> BandedMatrix(D)\n5×5 BandedMatrix{Float64,Array{Float64,2},Base.OneTo{Int64}}:\n -4.0   4.0    ⋅     ⋅    ⋅\n -2.0   0.0   2.0    ⋅    ⋅\n   ⋅   -2.0   0.0   2.0   ⋅\n   ⋅     ⋅   -2.0   0.0  2.0\n   ⋅     ⋅     ⋅   -4.0  4.0"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Examples can e found in the directory notebooks. In particular, examples of complete discretisations of the linear advection equation, the heat equation, and the wave equation are supplied. Further examples are supplied as tests."
},

{
    "location": "autodocs/#SummationByPartsOperators.BeljaddLeFlochMishraParés2017",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.BeljaddLeFlochMishraParés2017",
    "category": "type",
    "text": "BeljaddLeFlochMishraParés2017\n\nCoefficients of the periodic operators given in   Beljadid, LeFloch, Mishra, Parés (2017)   Schemes with Well-Controlled Dissipation. Hyperbolic Systems in     Nonconservative Form.   Communications in Computational Physics 21.4, pp. 913-946.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.BurgersNonperiodicSemidiscretisation",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.BurgersNonperiodicSemidiscretisation",
    "category": "type",
    "text": "BurgersNonperiodicSemidiscretisation\n\nA semidiscretisation of Burgers\' equation     partial_t u(tx) + partial_x fracu(tx)^22 = 0 with boundary conditions left_bc(t), right_bc(t).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.BurgersPeriodicSemidiscretisation",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.BurgersPeriodicSemidiscretisation",
    "category": "type",
    "text": "BurgersPeriodicSemidiscretisation\n\nA semidiscretisation of Burgers\' equation     partial_t u(tx) + partial_x fracu(tx)^22 = 0 with periodic boundary conditions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.ConstantFilter",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.ConstantFilter",
    "category": "type",
    "text": "ConstantFilter\n\nRepresents the action of a modal filter on values in a nodal basis with fixed strength.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.CubicNonperiodicSemidiscretisation",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.CubicNonperiodicSemidiscretisation",
    "category": "type",
    "text": "CubicNonperiodicSemidiscretisation\n\nA semidiscretisation of the cubic conservation law     partial_t u(tx) + partial_x u(tx)^3 = 0 with nonperiodic boundary conditions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.CubicPeriodicSemidiscretisation",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.CubicPeriodicSemidiscretisation",
    "category": "type",
    "text": "CubicPeriodicSemidiscretisation{T,Derivative,Dissipation}\n\nA semidiscretisation of the cubic conservation law     partial_t u(tx) + partial_x u(tx)^3 = 0 with periodic boundary conditions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.DerivativeCoefficientRow",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.DerivativeCoefficientRow",
    "category": "type",
    "text": "DerivativeCoefficientRow{T,Start,Length}\n\nA struct representing a row in the boundary block of an SBP derivative operator with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.DerivativeCoefficients",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.DerivativeCoefficients",
    "category": "type",
    "text": "DerivativeCoefficients\n\nThe coefficients of a derivative operator on a nonperiodic grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.DerivativeOperator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.DerivativeOperator",
    "category": "type",
    "text": "DerivativeOperator\n\nA derivative operator on a nonperiodic finite difference grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.DissipationOperator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.DissipationOperator",
    "category": "type",
    "text": "DissipationOperator\n\nA dissipation operator on a nonperiodic finite difference grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.ExponentialFilter",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.ExponentialFilter",
    "category": "type",
    "text": "ExponentialFilter\n\nRepresents the exponential filter function σ(η) = exp(-α*η^p).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.FactorisationWrapper",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.FactorisationWrapper",
    "category": "type",
    "text": "FactorisationWrapper\n\nA small wrapper around a a factorisation fact, allowing to represent multiplication with the inverse of fact.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.Fornberg1998",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.Fornberg1998",
    "category": "type",
    "text": "Fornberg1998\n\nCoefficients of the periodic operators given in   Fornberg (1998)   Calculation of Weights in Finite Difference Formulas.   SIAM Rev. 40.3, pp. 685-691.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.FourierConstantViscosity",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.FourierConstantViscosity",
    "category": "type",
    "text": "FourierConstantViscosity\n\nFourier viscosity operator with constant coefficients for the periodic 1st derivative Fourier operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.FourierDerivativeOperator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.FourierDerivativeOperator",
    "category": "type",
    "text": "FourierDerivativeOperator{T<:Real, Grid, RFFT, BRFFT}\n\nA derivative operator on a periodic grid with scalar type T computing the first derivative using a spectral Fourier expansion via real discrete Fourier transforms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.FourierSuperSpectralViscosityCoefficients",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.FourierSuperSpectralViscosityCoefficients",
    "category": "type",
    "text": "Tadmor1993\n\nCoefficients of the Fourier super spectral viscosity given in   Tadmor (1993)   Super Viscosity and Spectral Approximations of Nonlinear Conservation Laws.   Numerical Methods for Fluid Dynamics IV, pp. 69-82.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.Holoborodko2008",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.Holoborodko2008",
    "category": "type",
    "text": "Holoborodko2008\n\nCoefficients of the periodic operators given in   Holoborodko (2008)   Smooth Noise Robust Differentiators.   http://www.holoborodko.com/pavel/numerical-methods/numerical-derivative/smooth-low-noise-differentiators/\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.LegendreDerivativeOperator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.LegendreDerivativeOperator",
    "category": "type",
    "text": "LegendreDerivativeOperator{T<:Real, Grid}\n\nA derivative operator on a nonperiodic Lobatto-Legendre grid with scalar type T computing the first derivative using a Legendre expansion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.MadayTadmor1989",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.MadayTadmor1989",
    "category": "type",
    "text": "MadayTadmor1989\n\nCoefficients of the Fourier spectral viscosity given in   Maday, Tadmor (1989)   Analysis of the Spectral Vanishing Viscosity Method for Periodic Conservation     Laws.   SIAM Journal on Numerical Analysis 26.4, pp. 854-870.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.Mattsson2012",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.Mattsson2012",
    "category": "type",
    "text": "Mattsson2012\n\nCoefficients of the SBP operators given in   Mattsson (2012)   Summation by Parts Operators for Finite Difference Approximations of     Second-Derivatives with Variable Coefficients.   Journal of Scientific Computing 51, pp. 650-682.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.Mattsson2014",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.Mattsson2014",
    "category": "type",
    "text": "Mattsson2014\n\nCoefficients of the SBP operators given in   Mattsson (2014)   Diagonal-norm summation by parts operators for fiite difference approximations     of third and fourth derivatives.   Journal of Computational Physics 274, pp. 432-454.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.MattssonAlmquistCarpenter2014Extended",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.MattssonAlmquistCarpenter2014Extended",
    "category": "type",
    "text": "MattssonAlmquistCarpenter2014Extended\n\nCoefficients of the extended SBP operators given in   Mattsson, Almquist, Carpenter (2014)   Optimal diagonal-norm SBP operators.   Journal of Computational Physics 264, pp. 91-111.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.MattssonAlmquistCarpenter2014Optimal",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.MattssonAlmquistCarpenter2014Optimal",
    "category": "type",
    "text": "MattssonAlmquistCarpenter2014Optimal\n\nCoefficients of the optimal SBP operators with nonuniform grid given in   Mattsson, Almquist, Carpenter (2014)   Optimal diagonal-norm SBP operators.   Journal of Computational Physics 264, pp. 91-111.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.MattssonNordström2004",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.MattssonNordström2004",
    "category": "type",
    "text": "MattssonNordström2004\n\nCoefficients of the SBP operators given in Mattsson, Nordström (2004) Summation by parts operators for finite difference approximations of second   derivatives. Journal of Computational Physics 199, pp.503-540.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.MattssonSvärdNordström2004",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.MattssonSvärdNordström2004",
    "category": "type",
    "text": "MattssonSvärdNordström2004\n\nCoefficients of the SBP operators given in   Mattsson, Svärd, Nordström (2004)   Stable and Accurate Artificial Dissipation.   Journal of Scientific Computing 21.1, pp. 57-79.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.MattssonSvärdShoeybi2008",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.MattssonSvärdShoeybi2008",
    "category": "type",
    "text": "MattssonSvärdShoeybi2008\n\nCoefficients of the SBP operators given in   Mattsson, Svärd, Shoeybi (2008)   Stable and accurate schemes for the compressible Navier-Stokes equations.   Journal of Computational Physics 227, pp. 2293-2316.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.PeriodicDerivativeCoefficients",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.PeriodicDerivativeCoefficients",
    "category": "type",
    "text": "PeriodicDerivativeCoefficients{T,LowerOffset,UpperOffset,Parallel}\n\nThe coefficients of a derivative operator on a periodic grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.PeriodicDerivativeOperator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.PeriodicDerivativeOperator",
    "category": "type",
    "text": "PeriodicDerivativeOperator\n\nA derivative operator on a uniform periodic grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.PeriodicDissipationOperator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.PeriodicDissipationOperator",
    "category": "type",
    "text": "PeriodicDissipationOperator\n\nA dissipation operator on a periodic finite difference grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.SourceOfCoefficients",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.SourceOfCoefficients",
    "category": "type",
    "text": "SourceOfCoefficients\n\nAll sources of coefficients (articles) are subtypes of this abstract type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.SumOfDerivativeOperators",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.SumOfDerivativeOperators",
    "category": "type",
    "text": "SumOfDerivativeOperators\n\nSum several derivative operators lazily.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.Tadmor1989",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.Tadmor1989",
    "category": "type",
    "text": "Tadmor1989\n\nCoefficients of the Fourier spectral viscosity given in   Tadmor (1989)   Convergence of Spectral Methods for Nonlinear Conservation Laws.   SIAM Journal on Numerical Analysis 26.1, pp. 30-44.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.Tadmor1993",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.Tadmor1993",
    "category": "type",
    "text": "Tadmor1993\n\nCoefficients of the Fourier super spectral viscosity given in   Tadmor (1993)   Super Viscosity and Spectral Approximations of Nonlinear Conservation Laws.   Numerical Methods for Fluid Dynamics IV, pp. 69-82.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.TadmorWaagan2012Convergent",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.TadmorWaagan2012Convergent",
    "category": "type",
    "text": "TadmorWaagan2012Convergent\n\nCoefficients of the Fourier spectral viscosity given in   Tadmor, Waagan (2012)   Adaptive Spectral Viscosity for Hyperbolic Conservation Laws.   SIAM Journal on Scientific Computing 34.2, pp. A993-A1009. See also   Schochet (1990)   The Rate of Convergence of Spectral-Viscosity Methods for Periodic Scalar     Conservation Laws.   SIAM Journal on Numerical Analysis 27.5, pp. 1142-1159.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.TadmorWaagan2012Standard",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.TadmorWaagan2012Standard",
    "category": "type",
    "text": "TadmorWaagan2012Standard\n\nCoefficients of the Fourier spectral viscosity given in   Tadmor, Waagan (2012)   Adaptive Spectral Viscosity for Hyperbolic Conservation Laws.   SIAM Journal on Scientific Computing 34.2, pp. A993-A1009.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.VarCoefDerivativeCoefficients",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.VarCoefDerivativeCoefficients",
    "category": "type",
    "text": "VarCoefDerivativeCoefficients\n\nThe coefficients of a variable coefficient derivative operator on a nonperiodic grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.VarCoefDerivativeOperator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.VarCoefDerivativeOperator",
    "category": "type",
    "text": "VarCoefDerivativeOperator\n\nA dissipation operator on a nonperiodic finite difference grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.VariableLinearAdvectionNonperiodicSemidiscretisation",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.VariableLinearAdvectionNonperiodicSemidiscretisation",
    "category": "type",
    "text": "VariableLinearAdvectionNonperiodicSemidiscretisation\n\nA semidiscretisation of the linear advection equation     partial_t u(tx) + partial_x ( a(x) u(tx) ) = 0 with boundary conditions left_bc(t), right_bc(t).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.WaveEquationNonperiodicSemidiscretisation",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.WaveEquationNonperiodicSemidiscretisation",
    "category": "type",
    "text": "WaveEquationNonperiodicSemidiscretisation\n\nA semidiscretisation of the linear wave equation     partial_t^2 u(tx) = partial_x^2 u(tx).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.add_transpose_derivative_left!",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.add_transpose_derivative_left!",
    "category": "function",
    "text": "addtransposederivativeleft!(u, D::DerivativeOperator, derorder::Val{N})\n\nCompute the transposed N-th derivative to the function given by the coefficients u at the left boundary of the grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.add_transpose_derivative_right!",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.add_transpose_derivative_right!",
    "category": "function",
    "text": "addtransposederivativeright!(u, D::DerivativeOperator, derorder::Val{N})\n\nCompute the transposed N-th derivative to the function given by the coefficients u at the right boundary of the grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.compute_coefficients",
    "page": "Docstrings",
    "title": "PolynomialBases.compute_coefficients",
    "category": "function",
    "text": "compute_coefficients(u, D::AbstractDerivativeOperator)\n\nCompute the nodal values of the function u at the grid associated to the derivative operator D.\n\n\n\n\n\ncompute_coefficients(u, D::AbstractPeriodicDerivativeOperator)\n\nCompute the nodal values of the function u at the grid associated to the derivative operator D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.compute_coefficients!",
    "page": "Docstrings",
    "title": "PolynomialBases.compute_coefficients!",
    "category": "function",
    "text": "compute_coefficients!(uval::AbstractVector, u, D::AbstractDerivativeOperator)\n\nCompute the nodal values of the function u at the grid associated to the derivative operator D and stores the result in uval.\n\n\n\n\n\ncompute_coefficients!(uval::AbstractVector, u, D::AbstractPeriodicDerivativeOperator)\n\nCompute the nodal values of the function u at the grid associated to the derivative operator D and stores the result in uval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.derivative_left",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.derivative_left",
    "category": "function",
    "text": "derivative_left(D::DerivativeOperator, u, der_order::Val{N})\n\nCompute the N-th derivative of the function given by the coefficients u at the left boundary of the grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.derivative_operator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.derivative_operator",
    "category": "function",
    "text": "derivative_operator(source_of_coefficients, derivative_order, accuracy_order,\n                    xmin, xmax, N, parallel=Val{:serial}())\n\nCreate a DerivativeOperator approximating the derivative_order-th derivative on a grid between xmin and xmax with N grid points up to order of accuracy accuracy_order. with coefficients given by source_of_coefficients. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.derivative_right",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.derivative_right",
    "category": "function",
    "text": "derivative_right(D::DerivativeOperator, u, der_order::Val{N})\n\nCompute the N-th derivative of the function given by the coefficients u at the right boundary of the grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.dissipation_operator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.dissipation_operator",
    "category": "function",
    "text": "dissipation_operator(D::PeriodicDerivativeOperator;\n                     strength=one(eltype(D)),\n                     order=accuracy_order(D),\n                     parallel=D.coefficients.parallel)\n\nCreate a negative semidefinite DissipationOperator using undivided differences approximating a order-th derivative with strength strength adapted to the derivative operator D. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\ndissipation_operator(source_of_coefficients, order, xmin, xmax, N, \n                     left_weights, right_weights, parallel=Val{:serial}())\n\nCreate a negative semidefinite DissipationOperator using undivided differences approximating a weighted order-th derivative on a grid between xmin and  xmax with N grid points up to order of accuracy 2 with coefficients given by source_of_coefficients.  The norm matrix is given by left_weights and right_weights. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\ndissipation_operator(source_of_coefficients, D::DerivativeOperator{T};\n                     strength=one(T),\n                     order::Int=accuracy_order(D), \n                     parallel=D.coefficients.parallel)\n\nCreate a negative semidefinite DissipationOperator using undivided differences approximating a weighted order-th derivative adapted to the derivative operator D with coefficients given in source_of_coefficients. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\ndissipation_operator(D::DerivativeOperator; kwargs...)\n\nCreate a negative semidefinite DissipationOperator using undivided differences approximating a weighted order-th derivative adapted to the derivative operator D. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.evaluate_coefficients",
    "page": "Docstrings",
    "title": "PolynomialBases.evaluate_coefficients",
    "category": "function",
    "text": "evaluate_coefficients(u, D::AbstractDerivativeOperator)\n\nEvaluates the nodal coefficients u at a grid associated to the derivative operator D. Returns xplot, uplot, where xplot contains the nodes and uplot the corresponding values of u.\n\n\n\n\n\nevaluate_coefficients(u, D::AbstractPeriodicDerivativeOperator)\n\nEvaluates the nodal coefficients u at a grid including both endpoints associated to the derivative periodic operator D. Returns xplot, uplot, where xplot contains the equally spaced nodes and uplot the corresponding values of u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.evaluate_coefficients!",
    "page": "Docstrings",
    "title": "PolynomialBases.evaluate_coefficients!",
    "category": "function",
    "text": "evaluate_coefficients!(xplot, uplot, u, D::AbstractDerivativeOperator)\n\nEvaluates the nodal coefficients u at a grid associated to the derivative operator D and stores the result in xplot, uplot. Returns xplot, uplot, where xplot contains the nodes and uplot the corresponding values of u.\n\n\n\n\n\nevaluate_coefficients!(xplot, uplot, u, D::AbstractPeriodicDerivativeOperator)\n\nEvaluates the nodal coefficients u at a grid including both endpoints associated to the derivative periodic operator D and stores the result in xplot, uplot. Returns xplot, uplot, where xplot contains the equally spaced nodes and uplot the corresponding values of u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.fornberg",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.fornberg",
    "category": "function",
    "text": "fornberg(x::Vector{T}, m::Int) where {T}\n\nCalculate the weights of a finite difference approximation of the mth derivative with maximal order of accuracy at 0 using the nodes x, see Fornberg (1998) Calculation of Weights in Finite Difference Formulas SIAM Rev. 40.3, pp. 685-691.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.fourier_derivative_matrix",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.fourier_derivative_matrix",
    "category": "function",
    "text": "fourier_derivative_matrix(N, xmin::Real=0.0, xmax::Real=2π)\n\nCompute the Fourier derivative matrix with respect to the corresponding nodal basis using N nodes, see Kopriva (2009) Implementing Spectral Methods for PDEs, Algorithm 18.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialBases.integrate",
    "page": "Docstrings",
    "title": "PolynomialBases.integrate",
    "category": "function",
    "text": "integrate(func, u, D::AbstractPeriodicDerivativeOperator)\n\nMap the function func to the coefficients u and integrate with respect to the quadrature rule associated with the derivative operator D.\n\n\n\n\n\nintegrate(func, u, D::PeriodicDerivativeOperator)\n\nMap the function func to the coefficients u and integrate with respect to the quadrature rule associated with the periodic derivative operator D.\n\n\n\n\n\nintegrate(func, u, D::DerivativeOperator)\n\nMap the function func to the coefficients u and integrate with respect to the quadrature rule associated with the SBP derivative operator D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.mass_matrix",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.mass_matrix",
    "category": "function",
    "text": "mass_matrix(D::Union{DerivativeOperator,VarCoefDerivativeOperator})\n\nCreate the diagonal mass matrix for the SBP derivative operator D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.mul!",
    "page": "Docstrings",
    "title": "LinearAlgebra.mul!",
    "category": "function",
    "text": "mul!(dest::AbstractVector, coefficients::PeriodicDerivativeCoefficients, u::AbstractVector, α, β)\n\nCompute α*D*u + β*dest and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, coefficients::PeriodicDerivativeCoefficients, u::AbstractVector, α)\n\nCompute α*D*u and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::PeriodicDerivativeOperator, u::AbstractVector, α, β)\n\nCompute α*D*u + β*dest and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::PeriodicDerivativeOperator, u::AbstractVector, α)\n\nCompute α*D*u and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::PeriodicDissipationOperator, u::AbstractVector, α, β)\n\nCompute α*D*u + β*dest and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::PeriodicDissipationOperator, u::AbstractVector, α)\n\nCompute α*D*u and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, coefficients::DerivativeCoefficients, u::AbstractVector, α, β)\n\nCompute α*D*u + β*dest and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, coefficients::DerivativeCoefficients, u::AbstractVector, α)\n\nCompute α*D*u and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::DerivativeOperator, u::AbstractVector, α, β)\n\nCompute α*D*u + β*dest and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::DerivativeOperator, u::AbstractVector, α)\n\nCompute α*D*u and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, coefficients::VarCoefDerivativeCoefficients, u::AbstractVector, b::AbstractVector, α, β)\n\nCompute α*D*u + β*dest using the coefficients b and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, coefficients::VarCoefDerivativeCoefficients, u::AbstractVector, b::AbstractVector, α)\n\nCompute α*D*u using the coefficients b and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::DissipationOperator, u::AbstractVector, α, β)\n\nCompute α*D*u + β*dest and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::DissipationOperator, u::AbstractVector, α)\n\nCompute α*D*u and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::VarCoefDerivativeOperator, u::AbstractVector, α, β)\n\nCompute α*D*u + β*dest and store the result in dest.\n\n\n\n\n\nmul!(dest::AbstractVector, D::VarCoefDerivativeOperator, u::AbstractVector, α)\n\nCompute α*D*u and store the result in dest.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.periodic_central_derivative_coefficients",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.periodic_central_derivative_coefficients",
    "category": "function",
    "text": "periodic_central_derivative_coefficients(derivative_order, accuracy_order, T=Float64, parallel=Val{:serial}())\n\nCreate the PeriodicDerivativeCoefficients approximating the derivative_order-th derivative with an order of accuracy accuracy_order and scalar type T. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.periodic_central_derivative_operator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.periodic_central_derivative_operator",
    "category": "function",
    "text": "periodic_central_derivative_operator(derivative_order, accuracy_order, xmin, xmax, N, parallel=Val{:serial}())\n\nCreate a PeriodicDerivativeOperator approximating the derivative_order-th derivative on a uniform grid between xmin and xmax with N grid points up to order of accuracy accuracy_order. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\nperiodic_central_derivative_operator(derivative_order, accuracy_order, grid, parallel=Val{:serial}())\n\nCreate a PeriodicDerivativeOperator approximating the derivative_order-th derivative on the uniform grid up to order of accuracy accuracy_order. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.periodic_derivative_coefficients",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.periodic_derivative_coefficients",
    "category": "function",
    "text": "function periodic_derivative_coefficients(derivative_order, accuracy_order, left_offset=-(accuracy_order+1)÷2, T=Float64, parallel=Val{:serial}())\n\nCreate the PeriodicDerivativeCoefficients approximating the derivative_order-th derivative with an order of accuracy accuracy_order and scalar type T where the leftmost grid point used is determined by left_offset. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}())`.\n\n\n\n\n\nperiodic_derivative_coefficients(source::Holoborodko2008, derivative_order, accuracy_order;\n                                 T=Float64, parallel=Val{:serial}(),\n                                 stencil_width=accuracy_order+3)\n\nCreate the PeriodicDerivativeCoefficients approximating the derivative_order-th derivative with an order of accuracy accuracy_order and scalar type T given by Holoborodko2008. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}())`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.periodic_derivative_operator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.periodic_derivative_operator",
    "category": "function",
    "text": "periodic_derivative_operator(derivative_order, accuracy_order, xmin, xmax, N, left_offset=-(accuracy_order+1)÷2, parallel=Val{:serial}())\n\nCreate a PeriodicDerivativeOperator approximating the derivative_order-th derivative on a uniform grid between xmin and xmax with N grid points up to order of accuracy accuracy_order where the leftmost grid point used is determined by left_offset. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\nperiodic_derivative_operator(source::Holoborodko2008, derivative_order, accuracy_order,\n                             xmin, xmax, N; parallel=Val{:serial}(), kwargs...)\n\nCreate a PeriodicDerivativeOperator approximating the derivative_order-th derivative on a uniform grid between xmin and xmax with N grid points up to order of accuracy accuracy_order where the leftmost grid point used is determined by left_offset. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\nperiodic_derivative_operator(derivative_order, accuracy_order, grid, left_offset=-(accuracy_order+1)÷2, parallel=Val{:serial}())\n\nCreate a PeriodicDerivativeOperator approximating the derivative_order-th derivative on thr uniform grid up to order of accuracy accuracy_order where the leftmost grid point used is determined by left_offset. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.semidiscretise",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.semidiscretise",
    "category": "function",
    "text": "semidiscretise(u0func, semidisc::AbstractSemidiscretisation, tspan)\n\nApply the semidiscretisation semidisc to the initial data given by u0func and return an ODEProblem with time span tspan.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SummationByPartsOperators.var_coef_derivative_operator",
    "page": "Docstrings",
    "title": "SummationByPartsOperators.var_coef_derivative_operator",
    "category": "function",
    "text": "var_coef_derivative_operator(source_of_coefficients, derivative_order, accuracy_order, xmin, xmax, N, left_weights, right_weights, bfunc, parallel=Val{:serial}())\n\nCreate a VarCoefDerivativeOperator approximating a derivative_order-th derivative with variable coefficients bfunc on a grid between xmin and xmax with N grid points up to order of accuracy accuracy_order with coefficients given by source_of_coefficients. The evaluation of the derivative can be parallised using threads by chosing parallel=Val{:threads}()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SummationByPartsOperators.AbstractAnalyticalProblemSummationByPartsOperators.AbstractCoefficientCacheSummationByPartsOperators.AbstractDerivativeCoefficientsSummationByPartsOperators.AbstractDerivativeOperatorSummationByPartsOperators.AbstractFilterSummationByPartsOperators.AbstractFilterFunctionSummationByPartsOperators.AbstractFourierViscositySummationByPartsOperators.AbstractMassMatrixSummationByPartsOperators.AbstractPeriodicDerivativeOperatorSummationByPartsOperators.AbstractSemidiscretisationSummationByPartsOperators.AbstractVariableCoefficientDerivativeOperatorSummationByPartsOperators.AffineDiffEqOperatorSummationByPartsOperators.AnalyticalProblemSummationByPartsOperators.BVProblemSummationByPartsOperators.BeljaddLeFlochMishraParés2017SummationByPartsOperators.BurgersNonperiodicSemidiscretisationSummationByPartsOperators.BurgersPeriodicSemidiscretisationSummationByPartsOperators.CallbackSetSummationByPartsOperators.ClenshawCurtisSummationByPartsOperators.ClosedNewtonCotesSummationByPartsOperators.ConstantFilterSummationByPartsOperators.ContinuousCallbackSummationByPartsOperators.CubicNonperiodicSemidiscretisationSummationByPartsOperators.CubicPeriodicSemidiscretisationSummationByPartsOperators.DAEFunctionSummationByPartsOperators.DAEProblemSummationByPartsOperators.DAESolutionSummationByPartsOperators.DDEFunctionSummationByPartsOperators.DDEProblemSummationByPartsOperators.DEDataArraySummationByPartsOperators.DEDataMatrixSummationByPartsOperators.DEDataVectorSummationByPartsOperators.DEFAULT_LINSOLVESummationByPartsOperators.DESolutionSummationByPartsOperators.DerivativeCoefficientRowSummationByPartsOperators.DerivativeCoefficientsSummationByPartsOperators.DerivativeOperatorSummationByPartsOperators.DiffEqBaseSummationByPartsOperators.DiscreteCallbackSummationByPartsOperators.DiscreteFunctionSummationByPartsOperators.DiscreteProblemSummationByPartsOperators.DissipationOperatorSummationByPartsOperators.DynamicalODEFunctionSummationByPartsOperators.DynamicalODEProblemSummationByPartsOperators.ExponentialFilterSummationByPartsOperators.FactorisationWrapperSummationByPartsOperators.FilterCallbackSummationByPartsOperators.Fornberg1998SummationByPartsOperators.FourierConstantViscositySummationByPartsOperators.FourierDerivativeOperatorSummationByPartsOperators.FourierSpectralViscosityCoefficientsSummationByPartsOperators.FourierSuperSpectralViscosityCoefficientsSummationByPartsOperators.GaussJacobiSummationByPartsOperators.GaussLegendreSummationByPartsOperators.Holoborodko2008SummationByPartsOperators.LegendreDerivativeOperatorSummationByPartsOperators.LinSolveFactorizeSummationByPartsOperators.LobattoLegendreSummationByPartsOperators.MadayTadmor1989SummationByPartsOperators.Mattsson2012SummationByPartsOperators.Mattsson2012Cache2SummationByPartsOperators.Mattsson2012Cache4SummationByPartsOperators.Mattsson2012Cache6SummationByPartsOperators.Mattsson2014SummationByPartsOperators.MattssonAlmquistCarpenter2014ExtendedSummationByPartsOperators.MattssonAlmquistCarpenter2014OptimalSummationByPartsOperators.MattssonAlmquistCarpenter2014OptimalGridSummationByPartsOperators.MattssonNordström2004SummationByPartsOperators.MattssonSvärdNordström2004SummationByPartsOperators.MattssonSvärdNordström2004Cache2SummationByPartsOperators.MattssonSvärdNordström2004Cache4SummationByPartsOperators.MattssonSvärdNordström2004Cache6SummationByPartsOperators.MattssonSvärdNordström2004Cache8SummationByPartsOperators.MattssonSvärdShoeybi2008SummationByPartsOperators.MonteCarloProblemSummationByPartsOperators.MonteCarloSolutionSummationByPartsOperators.MonteCarloSummarySummationByPartsOperators.MonteCarloTestSolutionSummationByPartsOperators.NodalBasisSummationByPartsOperators.NoiseProblemSummationByPartsOperators.ODEFunctionSummationByPartsOperators.ODEProblemSummationByPartsOperators.ODESolutionSummationByPartsOperators.PeriodicDerivativeCoefficientsSummationByPartsOperators.PeriodicDerivativeOperatorSummationByPartsOperators.PeriodicDissipationOperatorSummationByPartsOperators.PolynomialBasesSummationByPartsOperators.RODEFunctionSummationByPartsOperators.RODEProblemSummationByPartsOperators.RODESolutionSummationByPartsOperators.SDEFunctionSummationByPartsOperators.SDEProblemSummationByPartsOperators.ScalarIntegralQuantitiesSummationByPartsOperators.SecondOrderODEProblemSummationByPartsOperators.SourceOfCoefficientsSummationByPartsOperators.SplitFunctionSummationByPartsOperators.SplitODEProblemSummationByPartsOperators.SplitSDEFunctionSummationByPartsOperators.SplitSDEProblemSummationByPartsOperators.SteadyStateProblemSummationByPartsOperators.SteadyStateSolutionSummationByPartsOperators.SumOfDerivativeOperatorsSummationByPartsOperators.SummationByPartsOperatorsSummationByPartsOperators.Tadmor1989SummationByPartsOperators.Tadmor1993SummationByPartsOperators.TadmorWaagan2012ConvergentSummationByPartsOperators.TadmorWaagan2012StandardSummationByPartsOperators.TimeChoiceIteratorSummationByPartsOperators.TwoPointBVProblemSummationByPartsOperators.VarCoefDerivativeCoefficientsSummationByPartsOperators.VarCoefDerivativeOperatorSummationByPartsOperators.VariableLinearAdvectionNonperiodicSemidiscretisationSummationByPartsOperators.WaveEquationNonperiodicSemidiscretisationSummationByPartsOperators.__init__SummationByPartsOperators.accuracy_orderSummationByPartsOperators.add_saveat!SummationByPartsOperators.add_transpose_derivative_left!SummationByPartsOperators.add_transpose_derivative_right!SummationByPartsOperators.add_tstop!SummationByPartsOperators.addat!SummationByPartsOperators.addat_non_user_cache!SummationByPartsOperators.addsteps!SummationByPartsOperators.auto_dt_reset!SummationByPartsOperators.change_basisSummationByPartsOperators.change_basis!SummationByPartsOperators.change_t_via_interpolation!SummationByPartsOperators.check_errorSummationByPartsOperators.check_keywordsSummationByPartsOperators.compute_coefficientsSummationByPartsOperators.compute_coefficients!SummationByPartsOperators.construct_gridSummationByPartsOperators.convolve_boundary_coefficients!SummationByPartsOperators.convolve_boundary_coefficients!_unrolled_expansion_SummationByPartsOperators.convolve_interior_coefficients!SummationByPartsOperators.convolve_interior_coefficients_loopbodySummationByPartsOperators.convolve_left_rowSummationByPartsOperators.convolve_periodic_boundary_coefficients!SummationByPartsOperators.convolve_right_rowSummationByPartsOperators.deleteat!SummationByPartsOperators.deleteat_non_user_cache!SummationByPartsOperators.derivative_atSummationByPartsOperators.derivative_at!SummationByPartsOperators.derivative_leftSummationByPartsOperators.derivative_matrixSummationByPartsOperators.derivative_matrix!SummationByPartsOperators.derivative_operatorSummationByPartsOperators.derivative_orderSummationByPartsOperators.derivative_rightSummationByPartsOperators.dissipation_coefficientsSummationByPartsOperators.dissipation_operatorSummationByPartsOperators.du_cacheSummationByPartsOperators.evalSummationByPartsOperators.evaluate_coefficientsSummationByPartsOperators.evaluate_coefficients!SummationByPartsOperators.first_derivative_coefficientsSummationByPartsOperators.fornbergSummationByPartsOperators.fourier_derivative_matrixSummationByPartsOperators.fourier_derivative_operatorSummationByPartsOperators.fourth_derivative_coefficientsSummationByPartsOperators.full_cacheSummationByPartsOperators.gegenbauerSummationByPartsOperators.get_dtSummationByPartsOperators.get_duSummationByPartsOperators.get_du!SummationByPartsOperators.get_parametersSummationByPartsOperators.get_proposed_dtSummationByPartsOperators.get_tmp_cacheSummationByPartsOperators.godunov_flux_burgersSummationByPartsOperators.godunov_flux_cubicSummationByPartsOperators.godunov_flux_variablelinearadvectionSummationByPartsOperators.gridSummationByPartsOperators.hahnSummationByPartsOperators.has_expSummationByPartsOperators.has_expmvSummationByPartsOperators.has_expmv!SummationByPartsOperators.has_ldivSummationByPartsOperators.has_ldiv!SummationByPartsOperators.has_mulSummationByPartsOperators.has_mul!SummationByPartsOperators.hermiteSummationByPartsOperators.includeSummationByPartsOperators.includes_boundariesSummationByPartsOperators.initSummationByPartsOperators.initialize!SummationByPartsOperators.integrateSummationByPartsOperators.interpolateSummationByPartsOperators.interpolate!SummationByPartsOperators.interpolation_matrixSummationByPartsOperators.interpolation_matrix!SummationByPartsOperators.intervalsSummationByPartsOperators.is_constantSummationByPartsOperators.isdiscreteSummationByPartsOperators.isinplaceSummationByPartsOperators.jacobiSummationByPartsOperators.jacobi_vandermondeSummationByPartsOperators.laguerreSummationByPartsOperators.left_boundary_weightSummationByPartsOperators.left_lengthSummationByPartsOperators.legendreSummationByPartsOperators.legendre_DSummationByPartsOperators.legendre_MSummationByPartsOperators.legendre_derivative_operatorSummationByPartsOperators.legendre_vandermondeSummationByPartsOperators.lower_bandwidthSummationByPartsOperators.map_from_canonicalSummationByPartsOperators.map_from_canonical!SummationByPartsOperators.map_to_canonicalSummationByPartsOperators.map_to_canonical!SummationByPartsOperators.mass_matrixSummationByPartsOperators.mul!SummationByPartsOperators.mul!_unrolled_expansion_SummationByPartsOperators.offsetSummationByPartsOperators.periodic_central_derivative_coefficientsSummationByPartsOperators.periodic_central_derivative_operatorSummationByPartsOperators.periodic_derivative_coefficientsSummationByPartsOperators.periodic_derivative_operatorSummationByPartsOperators.rand_cacheSummationByPartsOperators.ratenoise_cacheSummationByPartsOperators.reeval_internals_due_to_modification!SummationByPartsOperators.reinit!SummationByPartsOperators.remakeSummationByPartsOperators.resize!SummationByPartsOperators.resize_non_user_cache!SummationByPartsOperators.right_boundary_weightSummationByPartsOperators.right_lengthSummationByPartsOperators.satisfies_sbpSummationByPartsOperators.savevalues!SummationByPartsOperators.second_derivative_coefficientsSummationByPartsOperators.semidiscretiseSummationByPartsOperators.set_abstol!SummationByPartsOperators.set_filter_coefficients!SummationByPartsOperators.set_proposed_dt!SummationByPartsOperators.set_reltol!SummationByPartsOperators.set_t!SummationByPartsOperators.set_u!SummationByPartsOperators.solveSummationByPartsOperators.solve!SummationByPartsOperators.source_of_coeffcientsSummationByPartsOperators.source_of_coefficientsSummationByPartsOperators.spectral_viscosity_operatorSummationByPartsOperators.step!SummationByPartsOperators.super_spectral_viscosity_operatorSummationByPartsOperators.terminate!SummationByPartsOperators.third_derivative_coefficientsSummationByPartsOperators.tuplesSummationByPartsOperators.u_cacheSummationByPartsOperators.u_modified!SummationByPartsOperators.update_coefficientsSummationByPartsOperators.update_coefficients!SummationByPartsOperators.upper_bandwidthSummationByPartsOperators.user_cacheSummationByPartsOperators.utility_matricesSummationByPartsOperators.var_coef_derivative_coefficientsSummationByPartsOperators.var_coef_derivative_operatorSummationByPartsOperators.warn_compat"
},

]}
