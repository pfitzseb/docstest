var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Krylov.jl:-A-Julia-basket-of-hand-picked-Krylov-methods-1",
    "page": "Readme",
    "title": "Krylov.jl: A Julia basket of hand-picked Krylov methods",
    "category": "section",
    "text": "(Image: DOI) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Purpose-1",
    "page": "Readme",
    "title": "Purpose",
    "category": "section",
    "text": "This package implements iterative methods for the solution of linear systems of equations <p align=\"center\">   <b><i>Ax = b</i></b>, </p> and linear least-squares problems <p align=\"center\">   minimize ‖<b><i>b</i></b> - <b><i>Ax</i></b>‖. </p>It is appropriate, in particular, in situations where such a problem must be solved but a factorization is not possible, either because:the operator is not available explicitly,\nthe operator is dense, or\nfactors would consume an excessive amount of memory and/or disk space.Iterative methods are particularly appropriate in either of the following situations:the problem is sufficiently large that a factorization is not feasible or would be slower,\nan effective preconditioner is known in cases where the problem has unfavorable spectral structure,\nthe operator can be represented efficiently as a sparse matrix,\nthe operator is fast, i.e., can be applied with far better complexity than if it were materialized as a matrix. Often, fast operators would materialize as dense matrices."
},

{
    "location": "#Objective:-solve-*Ax-b*-1",
    "page": "Readme",
    "title": "Objective: solve Ax ≈ b",
    "category": "section",
    "text": "Given a linear operator A and a right-hand side b, solve Ax ≈ b, which means:when A has full column rank and b lies in the range space of A, find the unique x such that Ax = b; this situation occurs when\nA is square and nonsingular, or\nA is tall and has full column rank and b lies in the range of A,\nwhen A is column-rank deficient but b is in the range of A, find x with minimum norm such that Ax = b; this situation occurs when b is in the range of A and\nA is square but singular, or\nA is short and wide,\nwhen b is not in the range of A, regardless of the shape and rank of A, find x that minimizes the residual ‖b - Ax‖. If there are infinitely many such x (because A is rank deficient), identify the one with minimum norm."
},

{
    "location": "#How-to-Install-1",
    "page": "Readme",
    "title": "How to Install",
    "category": "section",
    "text": "At the Julia prompt, typejulia> Pkg.clone(\"https://github.com/JuliaSmoothOptimizers/Krylov.jl.git\")\njulia> Pkg.build(\"Krylov\")\njulia> Pkg.test(\"Krylov\")"
},

{
    "location": "#Long-Term-Goals-1",
    "page": "Readme",
    "title": "Long-Term Goals",
    "category": "section",
    "text": "provide implementations of certain of the most useful Krylov method for linear systems with special emphasis on methods for linear least-squares problems and saddle-point linear system (including symmetric quasi-definite systems)\nprovide state-of-the-art implementations alongside simple implementations of equivalent methods in exact artithmetic (e.g., LSQR vs. CGLS, MINRES vs. CR, LSMR vs. CRLS, etc.)\nprovide simple, consistent calling signatures and avoid over-typing\nensure those implementations are fast and stable."
},

{
    "location": "autodocs/#Krylov.KrylovStats",
    "page": "Docstrings",
    "title": "Krylov.KrylovStats",
    "category": "type",
    "text": "Abstract type for statistics returned by a solver\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.SimpleStats",
    "page": "Docstrings",
    "title": "Krylov.SimpleStats",
    "category": "type",
    "text": "Type for statistics returned by non-Lanczos solvers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.cg",
    "page": "Docstrings",
    "title": "Krylov.cg",
    "category": "function",
    "text": "The conjugate gradient method to solve the symmetric linear system Ax=b.\n\nThe method does not abort if A is not definite.\n\nA preconditioner M may be provided in the form of a linear operator and is assumed to be symmetric and positive definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.cg_lanczos",
    "page": "Docstrings",
    "title": "Krylov.cg_lanczos",
    "category": "function",
    "text": "The Lanczos version of the conjugate gradient method to solve the symmetric linear system\n\nAx = b\n\nThe method does not abort if A is not definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.cg_lanczos_shift_seq",
    "page": "Docstrings",
    "title": "Krylov.cg_lanczos_shift_seq",
    "category": "function",
    "text": "The Lanczos version of the conjugate gradient method to solve a family of shifted systems\n\n(A + αI) x = b  (α = α₁, α₂, ...)\n\nThe method does not abort if A + αI is not definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.cgls",
    "page": "Docstrings",
    "title": "Krylov.cgls",
    "category": "function",
    "text": "Solve the regularized linear least-squares problem\n\nminimize ‖b - Ax‖₂² + λ ‖x‖₂²\n\nusing the Conjugate Gradient (CG) method, where λ ≥ 0 is a regularization parameter. This method is equivalent to applying CG to the normal equations\n\n(A\'A + λI) x = A\'b\n\nbut is more stable.\n\nCGLS produces monotonic residuals ‖r‖₂ but not optimality residuals ‖A\'r‖₂. It is formally equivalent to LSQR, though can be slightly less accurate, but simpler to implement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.cgne",
    "page": "Docstrings",
    "title": "Krylov.cgne",
    "category": "function",
    "text": "Solve the consistent linear system\n\nAx + √λs = b\n\nusing the Conjugate Gradient (CG) method, where λ ≥ 0 is a regularization parameter. This method is equivalent to applying CG to the normal equations of the second kind\n\n(AA\' + λI) y = b\n\nbut is more stable. When λ = 0, this method solves the minimum-norm problem\n\nmin ‖x‖₂  s.t. Ax = b.\n\nWhen λ > 0, it solves the problem\n\nmin ‖(x,s)‖₂  s.t. Ax + √λs = b.\n\nCGNE produces monotonic errors ‖x-x*‖₂ but not residuals ‖r‖₂. It is formally equivalent to CRAIG, though can be slightly less accurate, but simpler to implement. Only the x-part of the solution is returned.\n\nA preconditioner M may be provided in the form of a linear operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.cgs",
    "page": "Docstrings",
    "title": "Krylov.cgs",
    "category": "function",
    "text": "Solve the consistent linear system Ax = b using conjugate gradient squared algorithm.\n\nFrom \"Iterative Methods for Sparse Linear Systems (Y. Saad)\" :\n\n«The method is based on a polynomial variant of the conjugate gradients algorithm. Although related to the so-called bi-conjugate gradients (BCG) algorithm, it does not involve adjoint matrix-vector multiplications, and the expected convergence rate is about twice that of the BCG algorithm.\n\nThe Conjugate Gradient Squared algorithm works quite well in many cases. However, one difficulty is that, since the polynomials are squared, rounding errors tend to be more damaging than in the standard BCG algorithm. In particular, very high variations of the residual vectors often cause the residual norms computed to become inaccurate.\n\nTFQMR and BICGSTAB were developed to remedy this difficulty.»\n\nThis implementation allows a right preconditioner M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.cr",
    "page": "Docstrings",
    "title": "Krylov.cr",
    "category": "function",
    "text": "A truncated version of Stiefel’s Conjugate Residual method to solve the symmetric linear system Ax=b. The matrix A must be positive semi-definite.\n\nA preconditioner M may be provided in the form of a linear operator and is assumed to be symmetric and positive definite. In a linesearch context, \'linesearch\' must be set to \'true\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.craig",
    "page": "Docstrings",
    "title": "Krylov.craig",
    "category": "function",
    "text": "Find the least-norm solution of the consistent linear system\n\nAx + √λs = b\n\nusing the Golub-Kahan implementation of Craig\'s method, where λ ≥ 0 is a regularization parameter. This method is equivalent to CGNE but is more stable.\n\nFor a system in the form Ax = b, Craig\'s method is equivalent to applying CG to AA\'y = b and recovering x = A\'y. Note that y are the Lagrange multipliers of the least-norm problem\n\nminimize ‖x‖  subject to Ax = b.\n\nIn this implementation, both the x and y-parts of the solution are returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.craigmr",
    "page": "Docstrings",
    "title": "Krylov.craigmr",
    "category": "function",
    "text": "Solve the consistent linear system\n\nAx + √λs = b\n\nusing the CRAIG-MR method, where λ ≥ 0 is a regularization parameter. This method is equivalent to applying the Conjugate Residuals method to the normal equations of the second kind\n\n(AA\' + λI) y = b\n\nbut is more stable. When λ = 0, this method solves the minimum-norm problem\n\nmin ‖x‖₂  s.t.  x ∈ argmin ‖Ax - b‖₂.\n\nWhen λ > 0, this method solves the problem\n\nmin ‖(x,s)‖₂  s.t. Ax + √λs = b.\n\nCRAIGMR produces monotonic residuals ‖r‖₂. It is formally equivalent to CRMR, though can be slightly more accurate, and intricate to implement. Both the x- and y-parts of the solution are returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.crls",
    "page": "Docstrings",
    "title": "Krylov.crls",
    "category": "function",
    "text": "Solve the linear least-squares problem\n\nminimize ‖b - Ax‖₂² + λ ‖x‖₂²\n\nusing the Conjugate Residuals (CR) method. This method is equivalent to applying MINRES to the normal equations\n\n(A\'A + λI) x = A\'b.\n\nThis implementation recurs the residual r := b - Ax.\n\nCRLS produces monotonic residuals ‖r‖₂ and optimality residuals ‖A\'r‖₂. It is formally equivalent to LSMR, though can be slightly less accurate, but simpler to implement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.crmr",
    "page": "Docstrings",
    "title": "Krylov.crmr",
    "category": "function",
    "text": "Solve the consistent linear system\n\nAx + √λs = b\n\nusing the Conjugate Residual (CR) method, where λ ≥ 0 is a regularization parameter. This method is equivalent to applying CR to the normal equations of the second kind\n\n(AA\' + λI) y = b\n\nbut is more stable. When λ = 0, this method solves the minimum-norm problem\n\nmin ‖x‖₂  s.t.  x ∈ argmin ‖Ax - b‖₂.\n\nWhen λ > 0, this method solves the problem\n\nmin ‖(x,s)‖₂  s.t. Ax + √λs = b.\n\nCGMR produces monotonic residuals ‖r‖₂. It is formally equivalent to CRAIG-MR, though can be slightly less accurate, but simpler to implement. Only the x-part of the solution is returned.\n\nA preconditioner M may be provided in the form of a linear operator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.diom",
    "page": "Docstrings",
    "title": "Krylov.diom",
    "category": "function",
    "text": "Solve the consistent linear system Ax = b using direct incomplete orthogonalization method.\n\nDIOM is similar to CG with partial reorthogonalization.\n\nAn advantage of DIOM is that nonsymmetric or symmetric indefinite or both nonsymmetric and indefinite systems of linear equations can be handled by this single algorithm.\n\nThis implementation allows a right preconditioner M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.dqgmres",
    "page": "Docstrings",
    "title": "Krylov.dqgmres",
    "category": "function",
    "text": "Solve the consistent linear system Ax = b using DQGMRES method.\n\nDQGMRES algorithm is based on the incomplete Arnoldi orthogonalization process and computes a sequence of approximate solutions with the quasi-minimal residual property.\n\nThis implementation allows a right preconditioner M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.lslq",
    "page": "Docstrings",
    "title": "Krylov.lslq",
    "category": "function",
    "text": "lslq(A, b, λ=0.0)\n\nSolve the regularized linear least-squares problem\n\nminimize ‖b - Ax‖₂² + λ² ‖x‖₂²\n\nusing the LSLQ method, where λ ≥ 0 is a regularization parameter. LSLQ is formally equivalent to applying SYMMLQ to the normal equations\n\n(A\'A + λ² I) x = A\'b\n\nbut is more stable.\n\nMain features\n\nthe solution estimate is updated along orthogonal directions\nthe norm of the solution estimate ‖xᴸₖ‖₂ is increasing\nthe error ‖eₖ‖₂ := ‖xᴸₖ - x*‖₂ is decreasing\nit is possible to transition cheaply from the LSLQ iterate to the LSQR iterate if there is an advantage (there always is in terms of error)\nif A is rank deficient, identify the minimum least-squares solution\n\nInput arguments\n\nA::AbstractLinearOperator\nb::Vector{Float64}\n\nOptional arguments\n\nM::AbstractLinearOperator=opEye(size(A,1)): a symmetric and positive definite dual preconditioner\nN::AbstractLinearOperator=opEye(size(A,2)): a symmetric and positive definite primal preconditioner\nsqd::Bool=false indicates whether or not we are solving a symmetric and quasi-definite augmented system If sqd = true, we solve the symmetric and quasi-definite system\n[ E   A\' ] [ r ]   [ b ]\n[ A  -F  ] [ x ] = [ 0 ],\nwhere E = M⁻¹  and F = N⁻¹.\nIf sqd = false, we solve the symmetric and indefinite system\n[ E   A\' ] [ r ]   [ b ]\n[ A   0  ] [ x ] = [ 0 ].\nIn this case, N can still be specified and indicates the norm in which x and the forward error should be measured.\nλ::Float64=0.0 is a regularization parameter (see the problem statement above)\nσ::Float64=0.0 is an underestimate of the smallest nonzero singular value of A–-setting σ too large will result in an error in the course of the iterations\natol::Float64=1.0e-8 is a stopping tolerance based on the residual\nbtol::Float64=1.0e-8 is a stopping tolerance used to detect zero-residual problems\netol::Float64=1.0e-8 is a stopping tolerance based on the lower bound on the error\nwindow::Int=5 is the number of iterations used to accumulate a lower bound on the error\nutol::Float64=1.0e-8 is a stopping tolerance based on the upper bound on the error\nitmax::Int=0 is the maximum number of iterations (0 means no imposed limit)\nconlim::Float64=1.0e+8 is the limit on the estimated condition number of A beyond which the solution will be abandoned\nverbose::Bool=false determines verbosity.\n\nReturn values\n\nlslq() returns the tuple (x_lq, x_cg, err_lbnds, err_ubnds_lq, err_ubnds_cg, stats) where\n\nx_lq::Vector{Float64} is the LQ solution estimate\nx_cg::Vector{Float64} is the CG solution estimate (i.e., the LSQR point)\nerr_lbnds::Vector{Float64} is a vector of lower bounds on the LQ error–-the vector is empty if window is set to zero\nerr_ubnds_lq::Vector{Float64} is a vector of upper bounds on the LQ error–-the vector is empty if σ == 0 is left at zero\nerr_ubnds_cg::Vector{Float64} is a vector of upper bounds on the CG error–-the vector is empty if σ == 0 is left at zero\nstats::SimpleStats collects other statistics on the run.\n\nStopping conditions\n\nThe iterations stop as soon as one of the following conditions holds true:\n\nthe optimality residual is sufficiently small (stats.status = \"found approximate minimum least-squares solution\") in the sense that either\n‖Aᵀr‖ / (‖A‖ ‖r‖) ≤ atol, or\n1 + ‖Aᵀr‖ / (‖A‖ ‖r‖) ≤ 1\nan approximate zero-residual solution has been found (stats.status = \"found approximate zero-residual solution\") in the sense that either\n‖r‖ / ‖b‖ ≤ btol + atol ‖A‖ * ‖xᴸ‖ / ‖b‖, or\n1 + ‖r‖ / ‖b‖ ≤ 1\nthe estimated condition number of A is too large in the sense that either\n1/cond(A) ≤ 1/conlim (stats.status = \"condition number exceeds tolerance\"), or\n1 + 1/cond(A) ≤ 1 (stats.status = \"condition number seems too large for this machine\")\nthe lower bound on the LQ forward error is less than etol * ‖xᴸ‖\nthe upper bound on the CG forward error is less than utol * ‖xᶜ‖\n\nReferences\n\nR. Estrin, D. Orban and M. A. Saunders, Estimates of the 2-Norm Forward Error for SYMMLQ and CG, Cahier du GERAD G-2016-70, GERAD, Montreal, 2016. DOI http://dx.doi.org/10.13140/RG.2.2.19581.77288.\nR. Estrin, D. Orban and M. A. Saunders, LSLQ: An Iterative Method for Linear Least-Squares with an Error Minimization Property, Cahier du GERAD G-2017-xx, GERAD, Montreal, 2017.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.lsmr",
    "page": "Docstrings",
    "title": "Krylov.lsmr",
    "category": "function",
    "text": "Solve the regularized linear least-squares problem\n\nminimize ‖b - Ax‖₂² + λ² ‖x‖₂²\n\nusing the LSMR method, where λ ≥ 0 is a regularization parameter. LSQR is formally equivalent to applying MINRES to the normal equations\n\n(A\'A + λ² I) x = A\'b\n\n(and therefore to CRLS) but is more stable.\n\nLSMR produces monotonic residuals ‖r‖₂ and optimality residuals ‖A\'r‖₂. rt is formally equivalent to CRLS, though can be slightly more accurate.\n\nPreconditioners M and N may be provided in the form of linear operators and are assumed to be symmetric and positive definite. If sqd is set to true, we solve the symmetric and quasi-definite system\n\n[ E   A\' ] [ r ]   [ b ]   [ A  -F  ] [ x ] = [ 0 ],\n\nwhere E = M⁻¹  and F = N⁻¹.\n\nIf sqd is set to false (the default), we solve the symmetric and indefinite system\n\n[ E   A\' ] [ r ]   [ b ]   [ A   0  ] [ x ] = [ 0 ].\n\nIn this case, N can still be specified and indicates the norm in which x should be measured.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.lsqr",
    "page": "Docstrings",
    "title": "Krylov.lsqr",
    "category": "function",
    "text": "Solve the regularized linear least-squares problem\n\nminimize ‖b - Ax‖₂² + λ² ‖x‖₂²\n\nusing the LSQR method, where λ ≥ 0 is a regularization parameter. LSQR is formally equivalent to applying CG to the normal equations\n\n(A\'A + λ² I) x = A\'b\n\n(and therefore to CGLS) but is more stable.\n\nLSQR produces monotonic residuals ‖r‖₂ but not optimality residuals ‖A\'r‖₂. It is formally equivalent to CGLS, though can be slightly more accurate.\n\nPreconditioners M and N may be provided in the form of linear operators and are assumed to be symmetric and positive definite. If sqd is set to true, we solve the symmetric and quasi-definite system\n\n[ E   A\' ] [ r ]   [ b ]   [ A  -F  ] [ x ] = [ 0 ],\n\nwhere E = M⁻¹  and F = N⁻¹.\n\nIf sqd is set to false (the default), we solve the symmetric and indefinite system\n\n[ E   A\' ] [ r ]   [ b ]   [ A   0  ] [ x ] = [ 0 ].\n\nIn this case, N can still be specified and indicates the norm in which x should be measured.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.minres",
    "page": "Docstrings",
    "title": "Krylov.minres",
    "category": "function",
    "text": "Solve the shifted linear least-squares problem\n\nminimize ‖b - (A + λ I)x‖₂²\n\nor the shifted linear system\n\n(A + λ I) x = b\n\nusing the MINRES method, where λ ≥ 0 is a shift parameter, where A is square and symmetric.\n\nMINRES is formally equivalent to applying CR to Ax=b when A is positive definite, but is typically more stable and also applies to the case where A is indefinite.\n\nMINRES produces monotonic residuals ‖r‖₂ and optimality residuals ‖A\'r‖₂.\n\nA preconditioner M may be provided in the form of a linear operator and is assumed to be symmetric and positive definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.roots_quadratic",
    "page": "Docstrings",
    "title": "Krylov.roots_quadratic",
    "category": "function",
    "text": "Find the real roots of the quadratic\n\nq(x) = q₂ x² + q₁ x + q₀,\n\nwhere q₂, q₁ and q₀ are real. Care is taken to avoid numerical cancellation. Optionally, nitref steps of iterative refinement may be performed to improve accuracy. By default, nitref=1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.sym_givens",
    "page": "Docstrings",
    "title": "Krylov.sym_givens",
    "category": "function",
    "text": "Numerically stable symmetric Givens reflection. Given a and b, return (c, s, ρ) such that\n\n[ c  s ] [ a ] = [ ρ ]\n[ s -c ] [ b ] = [ 0 ].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.symmlq",
    "page": "Docstrings",
    "title": "Krylov.symmlq",
    "category": "function",
    "text": "Solve the shifted linear system\n\n(A + λ I) x = b\n\nusing the SYMMLQ method, where λ is a shift parameter, and A is square and symmetric.\n\nSYMMLQ produces monotonic errors ‖x*-x‖₂.\n\nA preconditioner M may be provided in the form of a linear operator and is assumed to be symmetric and positive definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Krylov.to_boundary",
    "page": "Docstrings",
    "title": "Krylov.to_boundary",
    "category": "function",
    "text": "Given a trust-region radius radius, a vector x lying inside the trust-region and a direction d, return σ1 and σ2 such that\n\n‖x + σi d‖ = radius, i = 1, 2\n\nin the Euclidean norm. If known, ‖x‖² may be supplied in xNorm2.\n\nIf flip is set to true, σ1 and σ2 are computed such that\n\n‖x - σi d‖ = radius, i = 1, 2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Krylov.@kaxpby!Krylov.@kaxpy!Krylov.@kdotKrylov.@knrm2Krylov.@kscal!Krylov.KrylovKrylov.KrylovStatsKrylov.LanczosStatsKrylov.SimpleStatsKrylov.SymmlqStatsKrylov.cgKrylov.cg_lanczosKrylov.cg_lanczos_shift_seqKrylov.cglsKrylov.cgneKrylov.cgsKrylov.crKrylov.craigKrylov.craigmrKrylov.crlsKrylov.crmrKrylov.diomKrylov.dqgmresKrylov.evalKrylov.includeKrylov.krylov_axpby!Krylov.krylov_axpy!Krylov.krylov_dotKrylov.krylov_norm2Krylov.krylov_scal!Krylov.lslqKrylov.lsmrKrylov.lsqrKrylov.minresKrylov.preallocated_LinearOperatorKrylov.preallocated_symmetric_LinearOperatorKrylov.roots_quadraticKrylov.sym_givensKrylov.symmlqKrylov.to_boundaryKrylov.vec2str"
},

]}
