var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ControlSystems.jl-1",
    "page": "Readme",
    "title": "ControlSystems.jl",
    "category": "section",
    "text": "(Image: ControlSystems) (Image: Build Status) (Image: Coverage Status) (Image: Latest)A control systems design toolbox for Julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install, in the Julia REPL:Pkg.add(\"ControlSystems\")"
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": ""
},

{
    "location": "#09-30-1",
    "page": "Readme",
    "title": "2018-09-30",
    "category": "section",
    "text": "Support for Julia 0.7/1.0 added."
},

{
    "location": "#09-01-1",
    "page": "Readme",
    "title": "2018-09-01",
    "category": "section",
    "text": "LTISystem types are now more generic and can hold matrices/vectors of arbitrary type. Examples (partly pseudo-code):ss(1)\nss(1.)\nss(1im)\nss(ForwardDiff.Dual(1.))\nss(GPUArray([1]))\nss(SparseMatrix([1])Similar for tf,zpk etc.Continuous time systems are simulated with continuous time solvers from OrdinaryDiffEq.jl\nFreqresp now returns frequencies in the first dimension.\nBreaking: lsim(sys, u::Function) syntax has changed from u(t,x) to u(x,t) to be consistent with OrdinaryDiffEq\nBreaking: feedback(P,C) no longer returns feedback(P*C). The behavior is changed to feedback(P1, P2) = P1/(1+P1*P2).\nType Simulator provides lower level interface to continuous time simulation.\nExample autodiff.jl provides an illustration of how the new generic types can be used for automatic differentiation of a cost function through the continuous-time solver, which allows for optimization of the cost function w.r.t. PID parameters."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "All functions have docstrings, which can be viewed from the REPL, using for example ?tf.A documentation website under developement is available at http://juliacontrol.github.io/ControlSystems.jl/latest/.Some of the available commands are:"
},

{
    "location": "#Constructing-systems-1",
    "page": "Readme",
    "title": "Constructing systems",
    "category": "section",
    "text": "ss, tf, zpk, ss2tf"
},

{
    "location": "#Analysis-1",
    "page": "Readme",
    "title": "Analysis",
    "category": "section",
    "text": "pole, tzero, norm, norminf, ctrb, obsv, gangoffour, margin, markovparam, damp, dampreport, zpkdata, dcgain, covar, gram, sigma, sisomargin"
},

{
    "location": "#Synthesis-1",
    "page": "Readme",
    "title": "Synthesis",
    "category": "section",
    "text": "care, dare, dlyap, lqr, dlqr, place, pid, leadlink, laglink, leadlinkat, rstd, rstc, dab"
},

{
    "location": "#Time-and-Frequency-response-1",
    "page": "Readme",
    "title": "Time and Frequency response",
    "category": "section",
    "text": "step, impulse, lsim, freqresp, evalfr, bode, nyquist"
},

{
    "location": "#Plotting-1",
    "page": "Readme",
    "title": "Plotting",
    "category": "section",
    "text": "lsimplot, stepplot, impulseplot, bodeplot, nyquistplot, sigmaplot, marginplot, gangoffourplot, pidplots, pzmap, nicholsplot, pidplots, rlocus, leadlinkcurve"
},

{
    "location": "#Other-1",
    "page": "Readme",
    "title": "Other",
    "category": "section",
    "text": "minreal, sminreal, c2d"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This toolbox works similar to that of other major computer-aided control systems design (CACSD) toolboxes. Systems can be created in either a transfer function or a state space representation. These systems can then be combined into larger architectures, simulated in both time and frequency domain, and analyzed for stability/performance properties."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Here we create a simple position controller for an electric motor with an inertial load.using ControlSystems\n\n# Motor parameters\nJ = 2.0\nb = 0.04\nK = 1.0\nR = 0.08\nL = 1e-4\n\n# Create the model transfer function\ns = tf(\"s\")\nP = K/(s*((J*s + b)*(L*s + R) + K^2))\n# This generates the system\n# TransferFunction:\n#                1.0\n# ---------------------------------\n# 0.0002s^3 + 0.160004s^2 + 1.0032s\n#\n#Continuous-time transfer function model\n\n# Create an array of closed loop systems for different values of Kp\nCLs = TransferFunction[kp*P/(1 + kp*P) for kp = [1, 5, 15]];\n\n# Plot the step response of the controllers\n# Any keyword arguments supported in Plots.jl can be supplied\nstepplot(CLs, label=[\"Kp = 1\", \"Kp = 5\", \"Kp = 15\"])(Image: StepResponse)"
},

{
    "location": "autodocs/#ControlSystems.LQG",
    "page": "Docstrings",
    "title": "ControlSystems.LQG",
    "category": "type",
    "text": "G = LQG(A,B,C,D, Q1, Q2, R1, R2; qQ=0, qR=0, integrator=false)\nG = LQG(sys, args...; kwargs...)\n\nReturn an LQG object that describes the closed control loop around the process sys=ss(A,B,C,D) where the controller is of LQG-type. The controller is specified by weight matrices R1,R2 that penalizes state deviations and control signal variance respectively, and covariance matrices Q1,Q2 which specify state drift and measurement covariance respectively. This constructor calls lqr and kalman and forms the closed-loop system.\n\nIf integrator=true, the resulting controller will have intregral action. This is achieved by adding a model of a constant disturbance on the inputs to the system described by A,B,C,D.\n\nqQ and qR can be set to incorporate loop transfer recovery, i.e.,\n\nL = lqr(A, B, Q1+qQ*C\'C, Q2)\nK = kalman(A, C, R1+qR*B*B\', R2)\n\nFields\n\nWhen the LQG-object is populated by the lqg-function, the following fields have been made available\n\nL is the feedback matrix, such that A-BL is stable. Note that the length of the state vector (and the width of L) is increased by the number of inputs if the option integrator=true.\nK is the kalman gain such that A-KC is stable\nsysc is a dynamical system describing the controller u=L*inv(A-BL-KC+KDL)Ky\n\nFunctions\n\nSeveral other properties of the object are accessible with the indexing function getindex() and are called with the syntax G[:function]. The available functions are (some have many alternative names, separated with / )\n\n-G[:cl] / G[:closedloop] is the closed-loop system, including observer, from reference to output, precompensated to have static gain 1 (u = −Lx + lᵣr). -G[:S] / G[:Sin] Input sensitivity function -G[:T] / G[:Tin] Input complementary sensitivity function -G[:Sout] Output sensitivity function -G[:Tout] Output complementary sensitivity function -G[:CS] The transfer function from measurement noise to control signal -G[:DS] The transfer function from input load disturbance to output -G[:lt] / G[:looptransfer] / G[:loopgain]  =  PC -G[:rd] / G[:returndifference]  =  I + PC -G[:sr] / G[:stabilityrobustness]  =  I + inv(PC) -G[:sysc] / G[:controller] Returns the controller as a StateSpace-system\n\nIt is also possible to access all fileds using the G[:symbol] syntax, the fields are P ,Q1,Q2,R1,R2,qQ,qR,sysc,L,K,integrator\n\nExample\n\neye(n) = Matrix{Float64}(I,n,n) # For convinience\n\nqQ = 1\nqR = 1\nQ1 = 10eye(4)\nQ2 = 1eye(2)\nR1 = 1eye(6)\nR2 = 1eye(2)\n\nG = LQG(sys, Q1, Q2, R1, R2, qQ=qQ, qR=qR, integrator=true)\n\nGcl = G[:cl]\nT = G[:T]\nS = G[:S]\nsigmaplot([S,T],exp10.(range(-3, stop=3, length=1000)))\nstepplot(Gcl)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.Simulator",
    "page": "Docstrings",
    "title": "ControlSystems.Simulator",
    "category": "type",
    "text": "Simulator\n\nFields:\n\nP::StateSpace\nf = (x,p,t) -> x\ny = (x,t)   -> y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.TransferFunction",
    "page": "Docstrings",
    "title": "ControlSystems.TransferFunction",
    "category": "type",
    "text": "F(s), F(omega, true), F(z, false)\n\nNotation for frequency response evaluation.\n\nF(s) evaluates the continuous-time transfer function F at s.\nF(omega,true) evaluates the discrete-time transfer function F at exp(iTsomega)\nF(z,false) evaluates the discrete-time transfer function F at z\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems._fix_conjugate_pairs!",
    "page": "Docstrings",
    "title": "ControlSystems._fix_conjugate_pairs!",
    "category": "function",
    "text": "Typically LAPACK returns a vector with, e.g., eigenvalues to a real matrix, they are paired up in exact conjugate pairs. This fact is used in some places for working with zpk representations of LTI systems. eigvals(A) returns a on this form, however, for generalized eigenvalues there is a small numerical discrepancy, which breaks some functions. This function fixes small discrepancies in the conjugate pairs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems._printcoefficient",
    "page": "Docstrings",
    "title": "ControlSystems._printcoefficient",
    "category": "function",
    "text": "Heurisitc function that tries to add parentheses when printing the coeffcient for systems on zpk form. Should at least handle the following types Measurment, Dual, Sym. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.append",
    "page": "Docstrings",
    "title": "ControlSystems.append",
    "category": "function",
    "text": "append(systems::StateSpace...), append(systems::TransferFunction...)\n\nAppend systems in block diagonal form\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.balance",
    "page": "Docstrings",
    "title": "ControlSystems.balance",
    "category": "function",
    "text": "T, B = balance(A[, perm=true])\n\nCompute a similarity transform T resulting in B = T\\A*T such that the row and column norms of B are approximately equivalent. If perm=false, the transformation will only scale, and not permute A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.balance_statespace",
    "page": "Docstrings",
    "title": "ControlSystems.balance_statespace",
    "category": "function",
    "text": "A, B, C, T = balance_statespace{S}(A::Matrix{S}, B::Matrix{S}, C::Matrix{S}, perm::Bool=false)\n\nsys, T = balance_statespace(sys::StateSpace, perm::Bool=false)\n\nComputes a balancing transformation T that attempts to scale the system so that the row and column norms of [TA/T TB; C/T 0] are approximately equal. If perm=true, the states in A are allowed to be reordered.\n\nThis is not the same as finding a balanced realization with equal and diagonal observability and reachability gramians, see balreal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.balance_transform",
    "page": "Docstrings",
    "title": "ControlSystems.balance_transform",
    "category": "function",
    "text": "T = balance_transform{R}(A::Matrix{R}, B::Matrix{R}, C::Matrix{R}, perm::Bool=false)\n\nT = balance_transform(sys::StateSpace, perm::Bool=false) = balance_transform(A,B,C,perm)\n\nComputes a balancing transformation T that attempts to scale the system so that the row and column norms of [TA/T TB; C/T 0] are approximately equal. If perm=true, the states in A are allowed to be reordered.\n\nNo balancing will be done if A, B C are not BLAS compatible\n\nThis is not the same as finding a balanced realization with equal and diagonal observability and reachability gramians, see balreal See also balance_statespace, balance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.balreal",
    "page": "Docstrings",
    "title": "ControlSystems.balreal",
    "category": "function",
    "text": "sysr, G = balreal(sys::StateSpace)\n\nCalculates a balanced realization of the system sys, such that the observability and reachability gramians of the balanced system are equal and diagonal G\n\nSee also gram, baltrunc\n\nGlad, Ljung, Reglerteori: Flervariabla och Olinjära metoder\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.baltrunc",
    "page": "Docstrings",
    "title": "ControlSystems.baltrunc",
    "category": "function",
    "text": "sysr, G = baltrunc(sys::StateSpace, atol = √ϵ, rtol=1e-3, unitgain=true)\n\nReduces the state dimension by calculating a balanced realization of the system sys, such that the observability and reachability gramians of the balanced system are equal and diagonal G, and truncating it such that all states corresponding to singular values less than atol and less that rtol σmax are removed. If unitgain=true, the matrix D is chosen such that unit static gain is achieved.\n\nSee also gram, balreal\n\nGlad, Ljung, Reglerteori: Flervariabla och Olinjära metoder\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.bode",
    "page": "Docstrings",
    "title": "ControlSystems.bode",
    "category": "function",
    "text": "mag, phase, w = bode(sys[, w])\n\nCompute the magnitude and phase parts of the frequency response of system sys at frequencies w\n\nmag and phase has size (length(w), ny, nu)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.bodeplot",
    "page": "Docstrings",
    "title": "ControlSystems.bodeplot",
    "category": "function",
    "text": "fig = bodeplot(sys, args...), bodeplot(LTISystem[sys1, sys2...], args...; plotphase=true, kwargs...)\n\nCreate a Bode plot of the LTISystem(s). A frequency vector w can be optionally provided.\n\nkwargs is sent as argument to Plots.plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.c2d",
    "page": "Docstrings",
    "title": "ControlSystems.c2d",
    "category": "function",
    "text": "[sysd, x0map] = c2d(sys, Ts, method=:zoh)\n\nConvert the continuous system sys into a discrete system with sample time Ts, using the provided method. Currently only :zoh and :foh are provided.\n\nReturns the discrete system sysd, and a matrix x0map that transforms the initial conditions to the discrete domain by x0_discrete = x0map*[x0; u0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.c2d_poly2poly",
    "page": "Docstrings",
    "title": "ControlSystems.c2d_poly2poly",
    "category": "function",
    "text": "c2d_poly2poly(ro,h)\n\nreturns the polynomial coefficients in discrete time given polynomial coefficients in continuous time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.c2d_roots2poly",
    "page": "Docstrings",
    "title": "ControlSystems.c2d_roots2poly",
    "category": "function",
    "text": "c2d_roots2poly(ro,h)\n\nreturns the polynomial coefficients in discrete time given a vector of roots in continuous time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.care",
    "page": "Docstrings",
    "title": "ControlSystems.care",
    "category": "function",
    "text": "care(A, B, Q, R)\n\nCompute \'X\', the solution to the continuous-time algebraic Riccati equation, defined as A\'X + XA - (XB)R^-1(B\'X) + Q = 0, where R is non-singular.\n\nAlgorithm taken from: Laub, \"A Schur Method for Solving Algebraic Riccati Equations.\" http://dspace.mit.edu/bitstream/handle/1721.1/1301/R-0859-05666488.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.check_real",
    "page": "Docstrings",
    "title": "ControlSystems.check_real",
    "category": "function",
    "text": "If TR is Complex and T is Real, check that every pole is matched to its conjugate this assumes that the compelx poles are ordered as they are output by the LAPACK routines that return complex-conjugated values, i.e., (x+iy) is followed by (x-iy)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.covar",
    "page": "Docstrings",
    "title": "ControlSystems.covar",
    "category": "function",
    "text": "P = covar(sys, W)\n\nCalculate the stationary covariance P = E[y(t)y(t)\'] of an lti-model sys, driven by gaussian white noise \'w\' of covariance E[w(t)w(τ)]=W*δ(t-τ) where δ is the dirac delta.\n\nThe ouput is if Inf if the system is unstable. Passing white noise directly to the output will result in infinite covariance in the corresponding outputs (DWD\' .!= 0) for contunuous systems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.ctrb",
    "page": "Docstrings",
    "title": "ControlSystems.ctrb",
    "category": "function",
    "text": "ctrb(A, B) or ctrb(sys)\n\nCompute the controllability matrix for the system described by (A, B) or sys.\n\nNote that checking for controllability by computing the rank from ctrb is not the most numerically accurate way, a better method is checking if gram(sys, :c) is positive definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.dab",
    "page": "Docstrings",
    "title": "ControlSystems.dab",
    "category": "function",
    "text": "DAB   Solves the Diophantine-Aryabhatta-Bezout identity\n\nX,Y = DAB(A,B,C)\n\nAX + BY = C, where A, B, C, X and Y are polynomials and deg Y = deg A - 1.\n\nSee Computer-Controlled Systems: Theory and Design, Third Edition Karl Johan Åström, Björn Wittenmark\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.damp",
    "page": "Docstrings",
    "title": "ControlSystems.damp",
    "category": "function",
    "text": "Wn, zeta, ps = damp(sys)\n\nCompute the natural frequencies, Wn, and damping ratios, zeta, of the poles, ps, of sys\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.dampreport",
    "page": "Docstrings",
    "title": "ControlSystems.dampreport",
    "category": "function",
    "text": "dampreport(sys)\n\nDisplay a report of the poles, damping ratio, natural frequency, and time constant of the system sys\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.dare",
    "page": "Docstrings",
    "title": "ControlSystems.dare",
    "category": "function",
    "text": "dare(A, B, Q, R)\n\nCompute X, the solution to the discrete-time algebraic Riccati equation, defined as A\'XA - X - (A\'XB)(B\'XB + R)^-1(B\'XA) + Q = 0, where A and R are non-singular.\n\nAlgorithm taken from: Laub, \"A Schur Method for Solving Algebraic Riccati Equations.\" http://dspace.mit.edu/bitstream/handle/1721.1/1301/R-0859-05666488.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.dcgain",
    "page": "Docstrings",
    "title": "ControlSystems.dcgain",
    "category": "function",
    "text": "dcgain(sys)\n\nCompute the dcgain of system sys.\n\nequal to G(0) for continuous-time systems and G(1) for discrete-time systems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.delaymargin",
    "page": "Docstrings",
    "title": "ControlSystems.delaymargin",
    "category": "function",
    "text": "dₘ = delaymargin(G::LTISystem)\n\nOnly supports SISO systems\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.diagonalize",
    "page": "Docstrings",
    "title": "ControlSystems.diagonalize",
    "category": "function",
    "text": "dsys = diagonalize(s::StateSpace, digits=12) Diagonalizes the system such that the A-matrix is diagonal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.dkalman",
    "page": "Docstrings",
    "title": "ControlSystems.dkalman",
    "category": "function",
    "text": "dkalman(A, C, R1, R2) kalman(sys, R1, R2)`\n\nCalculate the optimal Kalman gain for discrete time systems\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.dlqr",
    "page": "Docstrings",
    "title": "ControlSystems.dlqr",
    "category": "function",
    "text": "dlqr(A, B, Q, R), dlqr(sys, Q, R)\n\nCalculate the optimal gain matrix K for the state-feedback law u[k] = K*x[k] that minimizes the cost function:\n\nJ = sum(x\'Qx + u\'Ru, 0, inf).\n\nFor the discrte time model x[k+1] = Ax[k] + Bu[k].\n\nSee also lqg\n\nUsage example:\n\nusing LinearAlgebra # For identity matrix I\nh = 0.1\nA = [1 h; 0 1]\nB = [0;1]\nC = [1 0]\nsys = ss(A,B,C,0, h)\nQ = I\nR = I\nL = dlqr(A,B,Q,R) # lqr(sys,Q,R) can also be used\n\nu(t,x) = -L*x # Form control law,\nt=0:h:5\nx0 = [1,0]\ny, t, x, uout = lsim(sys,u,t,x0)\nplot(t,x, lab=[\"Position\", \"Velocity\"]\', xlabel=\"Time [s]\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.dlyap",
    "page": "Docstrings",
    "title": "ControlSystems.dlyap",
    "category": "function",
    "text": "dlyap(A, Q)\n\nCompute the solution X to the discrete Lyapunov equation AXA\' - X + Q = 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.evalfr",
    "page": "Docstrings",
    "title": "ControlSystems.evalfr",
    "category": "function",
    "text": "evalfr(sys, x) Evaluate the transfer function of the LTI system sys at the complex number s=x (continuous-time) or z=x (discrete-time).\n\nFor many values of x, use freqresp instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.feedback",
    "page": "Docstrings",
    "title": "ControlSystems.feedback",
    "category": "function",
    "text": "feedback(L) Returns L/(1+L) feedback(P1,P2) Returns P1/(1+P1*P2)\n\n\n\n\n\nfeedback(sys)\n\nfeedback(sys1,sys2)\n\nForms the negative feedback interconnection\n\n>-+ sys1 +-->\n  |      |\n (-)sys2 +\n\nIf no second system is given, negative identity feedback is assumed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.feedback2dof",
    "page": "Docstrings",
    "title": "ControlSystems.feedback2dof",
    "category": "function",
    "text": "feedback2dof(P,R,S,T) Return BT/(AR+ST) where B and A are the numerator and denomenator polynomials of P respectively feedback2dof(B,A,R,S,T) Return BT/(AR+ST)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.freqresp",
    "page": "Docstrings",
    "title": "ControlSystems.freqresp",
    "category": "function",
    "text": "sys_fr = freqresp(sys, w)\n\nEvaluate the frequency response of a linear system\n\nw -> C*((iw*im -A)^-1)*B + D\n\nof system sys over the frequency vector w.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.gangoffour",
    "page": "Docstrings",
    "title": "ControlSystems.gangoffour",
    "category": "function",
    "text": "S,D,N,T = gangoffour(P,C), gangoffour(P::AbstractVector,C::AbstractVector)\n\nGiven a transfer function describing the Plant P and a transferfunction describing the controller C, computes the four transfer functions in the Gang-of-Four.\n\nS = 1/(1+PC) Sensitivity function\n\nD = P/(1+PC)\n\nN = C/(1+PC)\n\nT = PC/(1+PC) Complementary sensitivity function\n\nOnly supports SISO systems\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.gangoffourplot",
    "page": "Docstrings",
    "title": "ControlSystems.gangoffourplot",
    "category": "function",
    "text": "fig = gangoffourplot(P::LTISystem, C::LTISystem), gangoffourplot(P::Union{Vector, LTISystem}, C::Vector; plotphase=false)\n\nGang-of-Four plot.\n\nkwargs is sent as argument to Plots.plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.gangofseven",
    "page": "Docstrings",
    "title": "ControlSystems.gangofseven",
    "category": "function",
    "text": "S, D, N, T, RY, RU, RE = gangofseven(P,C,F)\n\nGiven transfer functions describing the Plant P, the controller C and a feed forward block F, computes the four transfer functions in the Gang-of-Four and the transferfunctions corresponding to the feed forward.\n\nS = 1/(1+PC) Sensitivity function\n\nD = P/(1+PC)\n\nN = C/(1+PC)\n\nT = PC/(1+PC) Complementary sensitivity function\n\nRY = PCF/(1+PC)\n\nRU = CF/(1+P*C)\n\nRE = F/(1+P*C)\n\nOnly supports SISO systems\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.getlims",
    "page": "Docstrings",
    "title": "ControlSystems.getlims",
    "category": "function",
    "text": "Get atributes from xlims or ylims default to extrema(wmag) if xlims/ylims not defined or empty\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.gram",
    "page": "Docstrings",
    "title": "ControlSystems.gram",
    "category": "function",
    "text": "gram(sys, opt)\n\nCompute the grammian of system sys. If opt is :c, computes the controllability grammian. If opt is :o, computes the observability grammian.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.impulse",
    "page": "Docstrings",
    "title": "ControlSystems.impulse",
    "category": "function",
    "text": "y, t, x = impulse(sys[, Tf]) or y, t, x = impulse(sys[, t])\n\nCalculate the impulse response of system sys. If the final time Tf or time vector t is not provided, one is calculated based on the system pole locations.\n\ny has size (length(t), ny, nu), x has size (length(t), nx, nu)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.impulseplot",
    "page": "Docstrings",
    "title": "ControlSystems.impulseplot",
    "category": "function",
    "text": "impulseplot(sys[, Tf[,  Ts]])\n\nPlot step response of sys with optional final time Tf and discretization time Ts. If not defined, suitable values are chosen based on sys.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.index2range",
    "page": "Docstrings",
    "title": "ControlSystems.index2range",
    "category": "function",
    "text": "outs = index2range(ind1, ind2) Helper function to convert indexes with scalars to ranges. Used to avoid dropping dimensions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.iscontinuous",
    "page": "Docstrings",
    "title": "ControlSystems.iscontinuous",
    "category": "function",
    "text": "iscontinuous(sys)\n\nReturns true if sys is continuous, else returns false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.isproper",
    "page": "Docstrings",
    "title": "ControlSystems.isproper",
    "category": "function",
    "text": "isproper(tf)\n\nReturns true if the TransferFunction is proper. This means that order(den)\n\n= order(num))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.issiso",
    "page": "Docstrings",
    "title": "ControlSystems.issiso",
    "category": "function",
    "text": "issiso(sys)\n\nReturns true if sys is SISO, else returns false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.isstable",
    "page": "Docstrings",
    "title": "ControlSystems.isstable",
    "category": "function",
    "text": "isstable(sys)\n\nReturns true if sys is stable, else returns false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.kalman",
    "page": "Docstrings",
    "title": "ControlSystems.kalman",
    "category": "function",
    "text": "kalman(A, C, R1, R2) kalman(sys, R1, R2)`\n\nCalculate the optimal Kalman gain\n\nSee also LQG\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.laglink",
    "page": "Docstrings",
    "title": "ControlSystems.laglink",
    "category": "function",
    "text": "laglink(a, M; h=0)\n\nReturns a phase retarding link, the rule of thumb a = 0.1ωc guarantees less than 6 degrees phase margin loss. The bode curve will go from M, bend down at a/M and level out at 1 for frequencies > a\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.leadlink",
    "page": "Docstrings",
    "title": "ControlSystems.leadlink",
    "category": "function",
    "text": "leadlink(b, N, K; h=0)\n\nReturns a phase advancing link, the top of the phase curve is located at ω = b√(N) where the link amplification is K√(N) The bode curve will go from K, bend up at b and level out at KN for frequencies > bN\n\nThe phase advance at ω = b√(N) can be plotted as a function of N with leadlinkcurve()\n\nValues of N < 1 will give a phase retarding link.\n\nSee also leadlinkat laglink\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.leadlinkat",
    "page": "Docstrings",
    "title": "ControlSystems.leadlinkat",
    "category": "function",
    "text": "leadlinkat(ω, N, K; h=0)\n\nReturns a phase advancing link, the top of the phase curve is located at ω where the link amplification is K√(N) The bode curve will go from K, bend up at ω/√(N) and level out at KN for frequencies > ω√(N)\n\nThe phase advance at ω can be plotted as a function of N with leadlinkcurve()\n\nValues of N < 1 will give a phase retarding link.\n\nSee also leadlink laglink\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.leadlinkcurve",
    "page": "Docstrings",
    "title": "ControlSystems.leadlinkcurve",
    "category": "function",
    "text": "Plot the phase advance as a function of N for a lead link (phase advance link)\n\nIf an input argument s is given, the curve is plotted from s to 10, else from 1 to 10.\n\nSee also Leadlink, leadlinkat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.loopshapingPI",
    "page": "Docstrings",
    "title": "ControlSystems.loopshapingPI",
    "category": "function",
    "text": "kp,ki,C = loopshapingPI(P,ωp; ϕl,rl, phasemargin)\n\nSelects the parameters of a PI-controller such that the Nyquist curve of P at the frequency ωp is moved to rl exp(i ϕl)\n\nIf phasemargin is supplied, ϕl is selected such that the curve is moved to an angle of phasemargin - 180 degrees\n\nIf no rl is given, the magnitude of the curve at ωp is kept the same and only the phase is affected, the same goes for ϕl if no phasemargin is given.\n\nSee also pidplots, stabregionPID\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.lqr",
    "page": "Docstrings",
    "title": "ControlSystems.lqr",
    "category": "function",
    "text": "lqr(A, B, Q, R)\n\nCalculate the optimal gain matrix K for the state-feedback law u = K*x that minimizes the cost function:\n\nJ = integral(x\'Qx + u\'Ru, 0, inf).\n\nFor the continuous time model dx = Ax + Bu.\n\nlqr(sys, Q, R)\n\nSolve the LQR problem for state-space system sys. Works for both discrete and continuous time systems.\n\nSee also LQG\n\nUsage example:\n\nusing LinearAlgebra # For identity matrix I\nA = [0 1; 0 0]\nB = [0;1]\nC = [1 0]\nsys = ss(A,B,C,0)\nQ = I\nR = I\nL = lqr(sys,Q,R)\n\nu(t,x) = -L*x # Form control law,\nt=0:0.1:5\nx0 = [1,0]\ny, t, x, uout = lsim(sys,u,t,x0)\nplot(t,x, lab=[\"Position\", \"Velocity\"]\', xlabel=\"Time [s]\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.lsim",
    "page": "Docstrings",
    "title": "ControlSystems.lsim",
    "category": "function",
    "text": "y, t, x = lsim(sys, u, t; x0, method])\n\ny, t, x, uout = lsim(sys, u::Function, t; x0, method)\n\nCalculate the time response of system sys to input u. If x0 is ommitted, a zero vector is used.\n\ny, x, uout has time in the first dimension. Initial state x0 defaults to zero.\n\nContinuous time systems are simulated using an ODE solver if u is a function. If u is an array, the system is discretized before simulation. For a lower level inteface, see ?Simulator and ?solve\n\nu can be a function or a matrix/vector of precalculated control signals. If u is a function, then u(x,i) (u(x,t)) is called to calculate the control signal every iteration (time instance used by solver). This can be used to provide a control law such as state feedback u(x,t) = -L*x calculated by lqr. To simulate a unit step, use (x,i)-> 1, for a ramp, use (x,i)-> i*h, for a step at t=5, use (x,i)-> (i*h >= 5) etc.\n\nUsage example:\n\nusing LinearAlgebra # For identity matrix I\nA = [0 1; 0 0]\nB = [0;1]\nC = [1 0]\nsys = ss(A,B,C,0)\nQ = I\nR = I\nL = lqr(sys,Q,R)\n\nu(x,t) = -L*x # Form control law,\nt=0:0.1:5\nx0 = [1,0]\ny, t, x, uout = lsim(sys,u,t,x0)\nplot(t,x, lab=[\"Position\", \"Velocity\"]\', xlabel=\"Time [s]\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.lsima",
    "page": "Docstrings",
    "title": "ControlSystems.lsima",
    "category": "function",
    "text": "[y, t, x] = lsima(sys, t[, x0, method])\n\nCalculate the time response of adaptive controller. If x0 is ommitted, a zero vector is used.\n\nContinuous time systems are discretized before simulation. By default, the method is chosen based on the smoothness of the input signal. Optionally, the method parameter can be specified as either :zoh or :foh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.lsimplot",
    "page": "Docstrings",
    "title": "ControlSystems.lsimplot",
    "category": "function",
    "text": "fig = lsimplot(sys::LTISystem, u, t; x0=0, method)\n\nlsimplot(LTISystem[sys1, sys2...], u, t; x0, method)\n\nCalculate the time response of the LTISystem(s) to input u. If x0 is not specified, a zero vector is used.\n\nContinuous time systems are discretized before simulation. By default, the method is chosen based on the smoothness of the input signal. Optionally, the method parameter can be specified as either :zoh or :foh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.ltitr",
    "page": "Docstrings",
    "title": "ControlSystems.ltitr",
    "category": "function",
    "text": "ltitr(A, B, u[,x0])\n\nltitr(A, B, u::Function, iters[,x0])\n\nSimulate the discrete time system x[k + 1] = A x[k] + B u[k], returning x. If x0 is not provided, a zero-vector is used.\n\nIf u is a function, then u(x,i) is called to calculate the control signal every iteration. This can be used to provide a control law such as state feedback u=-Lx calculated by lqr. In this case, an integrer iters must be provided that indicates the number of iterations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.margin",
    "page": "Docstrings",
    "title": "ControlSystems.margin",
    "category": "function",
    "text": "ωgₘ, gₘ, ωϕₘ, ϕₘ = margin{S<:Real}(sys::LTISystem, w::AbstractVector{S}; full=false, allMargins=false)\n\nreturns frequencies for gain margins, gain margins, frequencies for phase margins, phase margins\n\nIf !allMargins, return only the smallest margin\n\nIf full return also fullPhase\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.marginplot",
    "page": "Docstrings",
    "title": "ControlSystems.marginplot",
    "category": "function",
    "text": "fig = marginplot(sys::LTISystem [,w::AbstractVector];  kwargs...), marginplot(sys::Vector{LTISystem}, w::AbstractVector;  kwargs...)\n\nPlot all the amplitude and phase margins of the system(s) sys. A frequency vector w can be optionally provided.\n\nkwargs is sent as argument to Plots.plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.markovparam",
    "page": "Docstrings",
    "title": "ControlSystems.markovparam",
    "category": "function",
    "text": "markovparam(sys, n)\n\nCompute the nth markov parameter of state-space system sys. This is defined as the following:\n\nh(0) = D\n\nh(n) = C*A^(n-1)*B\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.minreal",
    "page": "Docstrings",
    "title": "ControlSystems.minreal",
    "category": "function",
    "text": "tf = minreal(tf::TransferFunction, eps=sqrt(eps()))\n\nCreate a minimial representation of each transfer function in tf by cancelling poles and zeros will promote system to an appropriate numeric type\n\n\n\n\n\nminsys = minreal(s::StateSpace, tol=sqrt(eps())) is implemented via baltrunc and returns a system on diagonal form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.nicholsplot",
    "page": "Docstrings",
    "title": "ControlSystems.nicholsplot",
    "category": "function",
    "text": "fig = nicholsplot{T<:LTISystem}(systems::Vector{T}, w::AbstractVector; kwargs...)\n\nCreate a Nichols plot of the LTISystem(s). A frequency vector w can be optionally provided.\n\nKeyword arguments:\n\ntext = true\nGains = [12, 6, 3, 1, 0.5, -0.5, -1, -3, -6, -10, -20, -40, -60]\npInc = 30\nsat = 0.4\nval = 0.85\nfontsize = 10\n\npInc determines the increment in degrees between phase lines.\n\nsat ∈ [0,1] determines the saturation of the gain lines\n\nval ∈ [0,1] determines the brightness of the gain lines\n\nAdditional keyword arguments are sent to the function plotting the systems and can be used to specify colors, line styles etc. using regular Plots.jl syntax\n\nThis function is based on code subject to the two-clause BSD licence Copyright 2011 Will Robertson Copyright 2011 Philipp Allgeuer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.norm",
    "page": "Docstrings",
    "title": "LinearAlgebra.norm",
    "category": "function",
    "text": "..  norm(sys, p=2; tol=1e-6)\n\nnorm(sys) or norm(sys,2) computes the H2 norm of the LTI system sys.\n\nnorm(sys, Inf) computes the L∞ norm of the LTI system sys. The H∞ norm is the same as the L∞ for stable systems, and Inf for unstable systems. If the peak gain frequency is required as well, use the function norminf instead.\n\ntol is an optional keyword argument, used only for the computation of L∞ norms. It represents the desired relative accuracy for the computed L∞ norm (this is not an absolute certificate however).\n\nsys is first converted to a state space model if needed.\n\nThe L∞ norm computation implements the \'two-step algorithm\' in: N.A. Bruinsma and M. Steinbuch, \'A fast algorithm to compute the H∞-norm of a transfer function matrix\', Systems and Control Letters 14 (1990), pp. 287-293. For the discrete-time version, see, e.g.,: P. Bongers, O. Bosgra, M. Steinbuch, \'L∞-norm calculation for generalized state space systems in continuous and discrete time\', American Control Conference, 1991.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.norminf",
    "page": "Docstrings",
    "title": "ControlSystems.norminf",
    "category": "function",
    "text": ".. (peakgain, peakgainfrequency) = norminf(sys; tol=1e-6)\n\nCompute the L∞ norm of the LTI system sys, together with the frequency peakgainfrequency (in rad/TimeUnit) at which the gain achieves its peak value peakgain. The H∞ norm is the same as the L∞ for stable systems, and Inf for unstable systems.\n\ntol is an optional keyword argument representing the desired relative accuracy for the computed L∞ norm (this is not an absolute certificate however).\n\nsys is first converted to a state space model if needed.\n\nThe L∞ norm computation implements the \'two-step algorithm\' in: N.A. Bruinsma and M. Steinbuch, \'A fast algorithm to compute the H∞-norm of a transfer function matrix\', Systems and Control Letters 14 (1990), pp. 287-293. For the discrete-time version, see, e.g.,: P. Bongers, O. Bosgra, M. Steinbuch, \'L∞-norm calculation for generalized state space systems in continuous and discrete time\', American Control Conference, 1991.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.nyquist",
    "page": "Docstrings",
    "title": "ControlSystems.nyquist",
    "category": "function",
    "text": "re, im, w = nyquist(sys[, w])\n\nCompute the real and imaginary parts of the frequency response of system sys at frequencies w\n\nre and im has size (length(w), ny, nu)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.nyquistplot",
    "page": "Docstrings",
    "title": "ControlSystems.nyquistplot",
    "category": "function",
    "text": "fig = nyquistplot(sys; gaincircles=true, kwargs...), nyquistplot(LTISystem[sys1, sys2...]; gaincircles=true, kwargs...)\n\nCreate a Nyquist plot of the LTISystem(s). A frequency vector w can be optionally provided.\n\ngaincircles plots the circles corresponding to |S(iω)| = 1 and |T(iω)| = 1, where S and T are the sensitivity and complementary sensitivity functions.\n\nkwargs is sent as argument to plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.obsv",
    "page": "Docstrings",
    "title": "ControlSystems.obsv",
    "category": "function",
    "text": "obsv(A, C) or obsv(sys)\n\nCompute the observability matrix for the system described by (A, C) or sys.\n\nNote that checking for observability by computing the rank from obsv is not the most numerically accurate way, a better method is checking if gram(sys, :o) is positive definite.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.parallel",
    "page": "Docstrings",
    "title": "ControlSystems.parallel",
    "category": "function",
    "text": "series(sys1::LTISystem, sys2::LTISystem)\n\nConnect systems in parallel, equivalent to sys2+sys1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.pid",
    "page": "Docstrings",
    "title": "ControlSystems.pid",
    "category": "function",
    "text": "Calculates and returns a PID controller on transfer function form. time indicates whether or not the parameters are given as gains (default) or as time constants series indicates  whether or not the series form or parallel form (default) is desired\n\nC = pid(; kp=0, ki=0; kd=0, time=false, series=false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.pidplots",
    "page": "Docstrings",
    "title": "ControlSystems.pidplots",
    "category": "function",
    "text": "Plots interesting figures related to closing the loop around process P with a PID controller Send in a bunch of PID-parameters in any of the vectors kp, ki, kd. The vectors must be the same length.\n\ntime indicates whether or not the parameters are given as gains (default) or as time constants\n\nseries indicates  whether or not the series form or parallel form (default) is desired\n\nAvailable plots are :gof for Gang of four, :nyquist, :controller for a bode plot of the controller TF and :pz for pole-zero maps\n\nOne can also supply a frequency vector ω to be used in Bode and Nyquist plots\n\npidplots(P, args...; kps=0, kis=0, kds=0, time=false, series=false, ω=0)\n\nSee also loopshapingPI, stabregionPID\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.place",
    "page": "Docstrings",
    "title": "ControlSystems.place",
    "category": "function",
    "text": "place(A, B, p), place(sys::StateSpace, p)\n\nCalculate gain matrix K such that the poles of (A-BK) in are in p\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.pole",
    "page": "Docstrings",
    "title": "ControlSystems.pole",
    "category": "function",
    "text": "pole(sys)\n\nCompute the poles of system sys.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.printpolydesc",
    "page": "Docstrings",
    "title": "ControlSystems.printpolydesc",
    "category": "function",
    "text": "Prints polynomial in descending order, with variable var\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.pzmap",
    "page": "Docstrings",
    "title": "ControlSystems.pzmap",
    "category": "function",
    "text": "fig = pzmap(fig, system, args...; kwargs...)\n\nCreate a pole-zero map of the LTISystem(s) in figure fig, args and kwargs will be sent to the scatter plot command.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.reduce_sys",
    "page": "Docstrings",
    "title": "ControlSystems.reduce_sys",
    "category": "function",
    "text": "Implements REDUCE in the Emami-Naeini & Van Dooren paper. Returns transformed A, B, C, D matrices. These are empty if there are no zeros.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.rlocus",
    "page": "Docstrings",
    "title": "ControlSystems.rlocus",
    "category": "function",
    "text": "rlocusplot(P::LTISystem, K)\n\nComputes and plots the root locus of the SISO LTISystem P with a negative feedback loop and feedback gains K, if K is not provided, range(1e-6,stop=500,length=10000) is used. If OrdinaryDiffEq.jl is installed and loaded by the user (using OrdinaryDiffEq), rlocusplot will use an adaptive step-size algorithm to select values of K. A scalar Kmax can then be given as second argument.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.rstc",
    "page": "Docstrings",
    "title": "ControlSystems.rstc",
    "category": "function",
    "text": "See ?rstd for the discerte case\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.rstd",
    "page": "Docstrings",
    "title": "ControlSystems.rstd",
    "category": "function",
    "text": "rstd  Polynomial synthesis in discrete time.\n\nR,S,T=rstd(BPLUS,BMINUS,A,BM1,AM,AO,AR,AS)\n\nR,S,T=rstd(BPLUS,BMINUS,A,BM1,AM,AO,AR)\n\nR,S,T=rstd(BPLUS,BMINUS,A,BM1,AM,AO)\n\nPolynomial synthesis according to CCS ch 10 to design a controller R(q) u(k) = T(q) r(k) - S(q) y(k)\n\nInputs:  BPLUS  : Part of open loop numerator BMINUS : Part of open loop numerator A      : Open loop denominator BM1    : Additional zeros AM     : Closed loop denominator AO     : Observer polynomial AR     : Pre-specified factor of R, e.g integral part [1, -1]^k AS     : Pre-specified factor of S, e.g notch filter [1, 0, w^2]\n\nOutputs: R,S,T  : Polynomials in controller\n\nSee function DAB how the solution to the Diophantine- Aryabhatta-Bezout identity is chosen.\n\nSee Computer-Controlled Systems: Theory and Design, Third Edition Karl Johan Åström, Björn Wittenmark\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.series",
    "page": "Docstrings",
    "title": "ControlSystems.series",
    "category": "function",
    "text": "series(sys1::LTISystem, sys2::LTISystem)\n\nConnect systems in series, equivalent to sys2*sys1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.setPlotScale",
    "page": "Docstrings",
    "title": "ControlSystems.setPlotScale",
    "category": "function",
    "text": "setPlotScale(str)\n\nSet the default scale of magnitude in bodeplot and sigmaplot. str should be either \"dB\" or \"log10\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.sigma",
    "page": "Docstrings",
    "title": "ControlSystems.sigma",
    "category": "function",
    "text": "sv, w = sigma(sys[, w])\n\nCompute the singular values of the frequency response of system sys at frequencies w\n\nsv has size (length(w), max(ny, nu))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.sigmaplot",
    "page": "Docstrings",
    "title": "ControlSystems.sigmaplot",
    "category": "function",
    "text": "sigmaplot(sys, args...), sigmaplot(LTISystem[sys1, sys2...], args...)\n\nPlot the singular values of the frequency response of the LTISystem(s). A frequency vector w can be optionally provided.\n\nkwargs is sent as argument to Plots.plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.siso_ss_to_zpk",
    "page": "Docstrings",
    "title": "ControlSystems.siso_ss_to_zpk",
    "category": "function",
    "text": "Convert get zpk representation of sys from input j to output i\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.sisomargin",
    "page": "Docstrings",
    "title": "ControlSystems.sisomargin",
    "category": "function",
    "text": "ωgₘ, gₘ, ωϕₘ, ϕₘ = sisomargin{S<:Real}(sys::LTISystem, w::AbstractVector{S}; full=false, allMargins=false)\n\nreturns frequencies for gain margins, gain margins, frequencies for phase margins, phase margins\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.sminreal",
    "page": "Docstrings",
    "title": "ControlSystems.sminreal",
    "category": "function",
    "text": "sminreal(sys)\n\nCompute the structurally minimal realization of the state-space system sys. A structurally minimal realization is one where only states that can be determined to be uncontrollable and unobservable based on the location of 0s in sys are removed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.solve",
    "page": "Docstrings",
    "title": "DiffEqBase.solve",
    "category": "function",
    "text": "sol = solve(s::AbstractSimulator, x0, tspan,  args...; kwargs...)\n\nSimulate the system represented by s from initial state x0 over time span tspan = (t0,tf). args and kwargs are sent to the solve function from OrdinaryDiffEq, e.g., solve(s, x0, tspan,  Tsit5(), reltol=1e-5) solves the problem with solver Tsit5() and relative tolerance 1e-5.\n\nSee also Simulator lsim\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.ss",
    "page": "Docstrings",
    "title": "ControlSystems.ss",
    "category": "function",
    "text": "sys = ss(A, B, C, D, Ts=0) -> sys\n\nCreate a state-space model sys::StateSpace{T, MT<:AbstractMatrix{T}} where MT is the type of matrixes A,B,C,D and T the element type.\n\nThis is a continuous-time model if Ts is omitted or set to 0. Otherwise, this is a discrete-time model with sampling period Ts. Set Ts=-1 for a discrete-time model with unspecified sampling period.\n\nsys = ss(D[, Ts, ...]) specifies a static gain matrix D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.stabregionPID",
    "page": "Docstrings",
    "title": "ControlSystems.stabregionPID",
    "category": "function",
    "text": "fig, kp, ki = stabregionPID(P, [ω]; kd=0, doplot = true)\n\nSegments of the curve generated by this program is the boundary of the stability region for a process with transfer function P(s) The PID controller is assumed to be on the form kp +ki/s +kd s\n\nThe curve is found by analyzing P(s)*C(s) = -1 ⟹ |PC| = |P| |C| = 1 arg(P) + arg(C) = -π\n\nIf P is a function (e.g. s -> exp(-sqrt(s)) ), the stability of feedback loops using PI-controllers can be analyzed for processes with models with arbitrary analytic functions\n\nSee also stabregionPID, loopshapingPI, pidplots\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.step",
    "page": "Docstrings",
    "title": "Base.step",
    "category": "function",
    "text": "y, t, x = step(sys[, Tf]) or y, t, x = step(sys[, t])\n\nCalculate the step response of system sys. If the final time Tf or time vector t is not provided, one is calculated based on the system pole locations.\n\ny has size (length(t), ny, nu), x has size (length(t), nx, nu)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.stepplot",
    "page": "Docstrings",
    "title": "ControlSystems.stepplot",
    "category": "function",
    "text": "stepplot(sys[, Tf[,  Ts]])\n\nPlot step response of sys with optional final time Tf and discretization time Ts. If not defined, suitable values are chosen based on sys.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.tf",
    "page": "Docstrings",
    "title": "ControlSystems.tf",
    "category": "function",
    "text": "sys = tf(num, den, Ts=0), sys = tf(gain, Ts=0)\n\nCreate as a fraction of polynomials:\n\nsys::TransferFunction{SisoRational{T,TR}} = numerator/denominator where T is the type of the coefficients in the polynomial.\n\nnum: the coefficients of the numerator polynomial. Either scalar or vector to create SISO systems or an array of vectors to create MIMO system.\n\nden: the coefficients of the denominator polynomial. Either vector to create SISO systems or an array of vectors to create MIMO system.\n\nTs: Sample time or 0 for continuous system.\n\nOther uses: tf(sys): Convert sys to tf form. tf(\"s\"), tf(\"z\"): Create the continous transferfunction s.\n\nSee also: zpk, ss\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.tzero",
    "page": "Docstrings",
    "title": "ControlSystems.tzero",
    "category": "function",
    "text": "tzero(sys)\n\nCompute the invariant zeros of the system sys. If sys is a minimal realization, these are also the transmission zeros.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.zpconv",
    "page": "Docstrings",
    "title": "ControlSystems.zpconv",
    "category": "function",
    "text": "zpc(a,r,b,s) form conv(a,r) + conv(b,s) where the lengths of the polynomials are equalized by zero-padding such that the addition can be carried out\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.zpk",
    "page": "Docstrings",
    "title": "ControlSystems.zpk",
    "category": "function",
    "text": "zpk(gain, Ts=0), zpk(num, den, k, Ts=0), zpk(sys)\n\nCreate transfer function on zero pole gain form. The numerator and denominator are represented by their poles and zeros.\n\nsys::TransferFunction{SisoZpk{T,TR}} = k*numerator/denominator where T is the type of k and TR the type of the zeros/poles, usually Float64 and Complex{Float64}.\n\nnum: the roots of the numerator polynomial. Either scalar or vector to create SISO systems or an array of vectors to create MIMO system.\n\nden: the roots of the denominator polynomial. Either vector to create SISO systems or an array of vectors to create MIMO system.\n\nk: The gain of the system. Obs, this is not the same as dcgain.\n\nTs: Sample time or 0 for continuous system.\n\nOther uses:\n\nzpk(sys): Convert sys to zpk form.\n\nzpk(\"s\"): Create the transferfunction s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ControlSystems.zpkdata",
    "page": "Docstrings",
    "title": "ControlSystems.zpkdata",
    "category": "function",
    "text": "z, p, k = zpkdata(sys)\n\nCompute the zeros, poles, and gains of system sys.\n\nReturns\n\nz : Matrix{Vector{ComplexF64}}, (ny x nu)\n\np : Matrix{Vector{ComplexF64}}, (ny x nu)\n\nk : Matrix{Float64}, (ny x nu)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ControlSystems.AbstractSimulatorControlSystems.AbstractSystemControlSystems.BodeplotControlSystems.ControlSystemsControlSystems.ImpulseplotControlSystems.LQGControlSystems.LTISystemControlSystems.LsimplotControlSystems.NicholsplotControlSystems.NyquistplotControlSystems.PlotsControlSystems.PzmapControlSystems.RlocusplotControlSystems.SigmaplotControlSystems.SimulatorControlSystems.SisoRationalControlSystems.SisoTfControlSystems.SisoZpkControlSystems.StateSpaceControlSystems.StepplotControlSystems.TransferFunctionControlSystems._LQGControlSystems._LQGiControlSystems._PlotScaleControlSystems._PlotScaleFuncControlSystems._PlotScaleStrControlSystems.__CONTROLSYSTEMS_SOURCE_DIR__ControlSystems._allGainCrossingsControlSystems._allPhaseCrossingsControlSystems._bounds_and_featuresControlSystems._check_consistent_sampling_timeControlSystems._default_TsControlSystems._default_freq_vectorControlSystems._default_time_dataControlSystems._default_time_vectorControlSystems._findCrossingsControlSystems._fix_conjugate_pairs!ControlSystems._issmoothControlSystems._preprocess_for_freqrespControlSystems._printcoefficientControlSystems._same_io_dimsControlSystems._string_mat_with_headersControlSystems.ackerControlSystems.appendControlSystems.balanceControlSystems.balance_statespaceControlSystems.balance_transformControlSystems.balrealControlSystems.baltruncControlSystems.blockdiagControlSystems.bodeControlSystems.bodeplotControlSystems.bodeplot!ControlSystems.c2dControlSystems.c2d_poly2polyControlSystems.c2d_roots2polyControlSystems.careControlSystems.charpolyControlSystems.check_realControlSystems.covarControlSystems.cswap!ControlSystems.ctrbControlSystems.dabControlSystems.dampControlSystems.dampreportControlSystems.dareControlSystems.dcgainControlSystems.delaymarginControlSystems.denControlSystems.denpolyControlSystems.denvecControlSystems.diagonalizeControlSystems.dkalmanControlSystems.dlqrControlSystems.dlyapControlSystems.evalControlSystems.evalfrControlSystems.fastrankControlSystems.feedbackControlSystems.feedback2dofControlSystems.freqrespControlSystems.gangoffourControlSystems.gangoffourplotControlSystems.gangofsevenControlSystems.getColorSysControlSystems.getLogTicksControlSystems.getStyleSysControlSystems.get_AControlSystems.get_BControlSystems.get_CControlSystems.get_DControlSystems.get_TsControlSystems.getlimsControlSystems.getpolesControlSystems.gramControlSystems.impulseControlSystems.impulseplotControlSystems.impulseplot!ControlSystems.includeControlSystems.index2rangeControlSystems.indirect_strControlSystems.interpolateControlSystems.iscontinuousControlSystems.isproperControlSystems.issisoControlSystems.isstableControlSystems.kalmanControlSystems.laglinkControlSystems.leadlinkControlSystems.leadlinkatControlSystems.leadlinkcurveControlSystems.loopshapingPIControlSystems.lqgControlSystems.lqgiControlSystems.lqrControlSystems.lsimControlSystems.lsimaControlSystems.lsimplotControlSystems.lsimplot!ControlSystems.ltitrControlSystems.lyapControlSystems.marginControlSystems.marginplotControlSystems.markovparamControlSystems.minrealControlSystems.nicholsplotControlSystems.nicholsplot!ControlSystems.ninputsControlSystems.normControlSystems.normLinf_twoSteps_ctControlSystems.normLinf_twoSteps_dtControlSystems.norminfControlSystems.noutputsControlSystems.nstatesControlSystems.numControlSystems.numeric_typeControlSystems.numpolyControlSystems.numvecControlSystems.nyquistControlSystems.nyquistplotControlSystems.nyquistplot!ControlSystems.obsvControlSystems.parallelControlSystems.pidControlSystems.pidplotsControlSystems.placeControlSystems.plotControlSystems.poleControlSystems.poly2vecControlSystems.poly_factors2stringControlSystems.primitivetypeControlSystems.print_compactControlSystems.print_sisoControlSystems.printpoly2ControlSystems.printpolydescControlSystems.printpolyfunControlSystems.pzmapControlSystems.pzmap!ControlSystems.reduce_sysControlSystems.rlocusControlSystems.rlocusplotControlSystems.rlocusplot!ControlSystems.roots2poly_factorsControlSystems.roots2real_poly_factorsControlSystems.rstControlSystems.rstcControlSystems.rstdControlSystems.seriesControlSystems.setPlotScaleControlSystems.showterm2ControlSystems.sigmaControlSystems.sigmaplotControlSystems.sigmaplot!ControlSystems.siso_ss_to_zpkControlSystems.siso_tf_to_ssControlSystems.sisomarginControlSystems.sminrealControlSystems.solveControlSystems.ssControlSystems.ss2tfControlSystems.ssdataControlSystems.stabregionPIDControlSystems.stepControlSystems.stepplotControlSystems.stepplot!ControlSystems.struct_ctrb_obsvControlSystems.struct_ctrb_statesControlSystems.tfControlSystems.to_matrixControlSystems.toeplitzControlSystems.tzeroControlSystems.unwrapControlSystems.unwrap!ControlSystems.zpconvControlSystems.zpkControlSystems.zpkdata"
},

]}
