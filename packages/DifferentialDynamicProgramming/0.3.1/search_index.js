var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DifferentialDynamicProgramming-1",
    "page": "Readme",
    "title": "DifferentialDynamicProgramming",
    "category": "section",
    "text": "(Image: DifferentialDynamicProgramming) (Image: DifferentialDynamicProgramming) (Image: DifferentialDynamicProgramming) (Image: Build Status)(Image: Coverage Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered and can be added with   ] add DifferentialDynamicProgramming   To get the latest updates, install using  ] add https://github.com/baggepinnen/LinearTimeVaryingModelsBase.jl\nadd DifferentialDynamicProgramming#master"
},

{
    "location": "#Demo-functions-1",
    "page": "Readme",
    "title": "Demo functions",
    "category": "section",
    "text": "The following demo functions are provideddemo_linear()     To run the iLQG DDP algorithm on a simple linear problem   demoQP            To solve a demo quadratic program   demo_pendcart()   Where a pendulum attached to a cart is simulated."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Demo-linear-1",
    "page": "Readme",
    "title": "Demo linear",
    "category": "section",
    "text": "See demo file demo_linear.jl for a usage example.# make stable linear dynamics\nh = .01         # time step\nn = 10          # state dimension\nm = 2           # control dimension\nA = randn(n,n)\nA = A-A\'        # skew-symmetric = pure imaginary eigenvalues\nA = exp(h*A)    # discrete time\nB = h*randn(n,m)\n\n# quadratic costs\nQ    = h*eye(n)\nR    = .1*h*eye(m)\n\n# control limits\nlims = [] #ones(m,1)*[-1 1]*.6\n\nT    = 1000             # horizon\nx0   = ones(n,1)        # initial state\nu0   = .1*randn(m,T)    # initial controls\n\n# optimization problem\nN    = T+1\nfx   = A\nfu   = B\ncxx  = Q\ncxu  = zeros(size(B))\ncuu  = R\n\n# Specify dynamics functions\nfunction lin_dyn_df(x,u,Q,R)\n    u[isnan(u)] = 0\n    cx  = Q*x\n    cu  = R*u\n    fxx=fxu=fuu = []\n    return fx,fu,fxx,fxu,fuu,cx,cu,cxx,cxu,cuu\nend\nfunction lin_dyn_f(x,u,A,B)\n    u[isnan(u)] = 0\n    xnew = A*x + B*u\n    return xnew\nend\n\nfunction lin_dyn_cost(x,u,Q)\n    c = 0.5*sum(x.*(Q*x)) + 0.5*sum(u.*(R*u))\n    return c\nend\n\nf(x,u,i)     = lin_dyn_f(x,u,A,B,Q,R)\ncostfun(x,u) = lin_dyn_cost(x,u,Q)\ndf(x,u)      = lin_dyn_df(x,u,Q,R)\n\n# run the optimization\n\n@time x, u, L, Vx, Vxx, cost, otrace = iLQG(f, costfun ,df, x0, u0, lims=lims);"
},

{
    "location": "#Demo-pendulum-on-cart-1",
    "page": "Readme",
    "title": "Demo pendulum on cart",
    "category": "section",
    "text": "There is an additional demo function demo_pendcart(), where a pendulum attached to a cart is simulated. In this example, regular LQG control fails in stabilizing the pendulum at the upright position due to control limitations. The DDP-based optimization solves this by letting the pendulum fall, and increases the energy in the pendulum during the fall such that it will stay upright after one revolution.(Image: window) (Image: window)"
},

{
    "location": "#Citing-1",
    "page": "Readme",
    "title": "Citing",
    "category": "section",
    "text": "This code consists of a port and extensions of a MATLAB library provided by the autors ofBIBTeX:\n@INPROCEEDINGS{\n  author    = {Tassa, Y. and Mansard, N. and Todorov, E.},\n  booktitle = {Robotics and Automation (ICRA), 2014 IEEE International Conference on},\n  title     = {Control-Limited Differential Dynamic Programming},\n  year      = {2014}, month={May}, doi={10.1109/ICRA.2014.6907001}}\n  http://www.mathworks.com/matlabcentral/fileexchange/52069-ilqg-ddp-trajectory-optimization\n  http://www.cs.washington.edu/people/postdocs/tassa/The code above was extended with KL-divergence constrained optimization for the thesis Bagge Carlson, F., \"Machine Learning and System Identification for Estimation in Physical Systems\" (PhD Thesis 2018).@thesis{bagge2018,\n  title        = {Machine Learning and System Identification for Estimation in Physical Systems},\n  author       = {Bagge Carlson, Fredrik},\n  keyword      = {Machine Learning,System Identification,Robotics,Spectral estimation,Calibration,State estimation},\n  month        = {12},\n  type         = {PhD Thesis},\n  number       = {TFRT-1122},\n  institution  = {Dept. Automatic Control, Lund University, Sweden},\n  year         = {2018},\n  url          = {https://lup.lub.lu.se/search/publication/ffb8dc85-ce12-4f75-8f2b-0881e492f6c0},\n}"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.GaussianPolicy",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.GaussianPolicy",
    "category": "type",
    "text": "`GaussianPolicy{P}`\n\nFileds:\n\nT::Int          # number of time steps\nn::Int          # State dimension\nm::Int          # Number of control inputs\nK::Array{P,3}   # Time-varying feedback gain ∈ R(n,m,T)\nk::Array{P,2}   # Open loop control signal  ∈ R(m,T)\nΣ::Array{P,3}   # Time-varying controller covariance  ∈ R(m,m,T)\nΣi::Array{P,3}  # The inverses of Σ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.KLmv",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.KLmv",
    "category": "function",
    "text": "This is the inverse of Σₓᵤ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.boxQP",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.boxQP",
    "category": "function",
    "text": "Minimize 0.5*x\'*H*x + x\'*g  s.t. lower<=x<=upper\n\ninputs:      H            - positive definite matrix   (n * n)      g            - bias vector                (n)      lower        - lower bounds               (n)      upper        - upper bounds               (n)\n\noptional inputs:      x0           - initial state              (n)      options      - see below                  (7)\n\noutputs:      x            - solution                   (n)      result       - result type (roughly, higher is better, see below)      Hfree        - subspace cholesky factor   (nfree * nfree)      free         - set of free dimensions     (n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.calc_η",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.calc_η",
    "category": "function",
    "text": "newη, satisfied, divergence = calcη(xnew,xold,sigmanew,η, trajnew, trajprev, kl_step) This Function caluculates the step size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.demo_pendcart",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.demo_pendcart",
    "category": "function",
    "text": "demo_pendcart(;kwargs...)\n\nRun the iLQG Function to find an optimal trajectory For the \"pendulum on a cart system\". Requires package ControlSystems.jl\n\nArguments\n\nx0     = [π-0.6,0,0,0] goal   = [π,0,0,0] Q      = Diagonal([10,1,2,1]) : State weight matrix R      = 1                    : Control weight matrix lims   = 5.0*[-1 1]           : control limits, T      = 600                  : Number of time steps doplot = true                 : Plot results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.forward_pass",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.forward_pass",
    "category": "function",
    "text": "xnew,unew,cnew,sigmanew = forward_pass(traj_new, x0,u,x,α,f,costfun,lims,diff)\n\nArguments\n\nα: step size (αk is applied to old trajectory)\ndiff: function to determine difference diff(xnew[:,i], x[:,i])\nf: forward dynamics x(k+1)  = f(x(k), u(k), k)\ncnew = costfun(xnew, unew)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.iLQG",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.iLQG",
    "category": "function",
    "text": "iLQG - solve the deterministic finite-horizon optimal control problem.\n\nminimize sum_i cost(x[:,i],u[:,i]) + cost(x[:,end]) s.t.  x[:,i+1] = f(x[:,i],u[:,i])\n\nInputs\n\nf, costfun, df\n\nstep:\n\nxnew = f(x,u,i) is called during the forward pass. Here the state x and control u are vectors: size(x)==(n,), size(u)==(m,). The time index i is a scalar.\n\ncost:\n\ncost = costfun(x,u) is called in the forward pass to compute the cost per time-step along the trajectory x,u.\n\nderivatives:\n\nfx,fu,fxx,fxu,fuu,cx,cu,cxx,cxu,cuu = df(x,u) computes the derivatives along a trajectory. In this case size(x)==(n, N) where N is the trajectory length. size(u)==(m, N). The time indexes are I=(1:N). Dimensions match the variable names e.g. size(fxu)==(n, n, m, N) If cost function or system is time invariant, the dimension of the corresponding derivatives can be reduced by dropping the time dimension\n\nx0 - The initial state from which to solve the control problem. Should be a column vector. If a pre-rolled trajectory is available then size(x0)==(n, N) can be provided and cost set accordingly.\n\nu0 - The initial control sequence. A matrix of size(u0)==(m, N) where m is the dimension of the control and N is the number of state transitions.\n\nOutputs\n\nx - the optimal state trajectory found by the algorithm. size(x)==(n, N)\n\nu - the optimal open-loop control sequence. size(u)==(m, N)\n\ntraj_new - A new GaussianPolicy object containing feedforward control trajectory and feedback-gains, these gains multiply the deviation of a simulated trajectory from the nominal trajectory x. See ?GaussianPolicy for more help.\n\nVx - the gradient of the cost-to-go. size(Vx)==(n, N)\n\nVxx - the Hessian of the cost-to-go. size(Vxx)==(n, n N)\n\ncost - the costs along the trajectory. size(cost)==(1, N) the cost-to-go is V = fliplr(cumsum(fliplr(cost)))\n\ntrace - a trace of various convergence-related values. One row for each iteration, the columns of trace are [iter λ α g_norm Δcost z sum(cost) dλ] see below for details.\n\nKeyword arguments\n\nlims,           [],            control limits\n\nα,              logspace(0,-3,11), backtracking coefficients\n\ntol_fun,         1e-7,          reduction exit criterion\n\ntol_grad,        1e-4,          gradient exit criterion\n\nmax_iter,        500,           maximum iterations\n\nλ,         1,             initial value for λ\n\ndλ,        1,             initial value for dλ\n\nλfactor,   1.6,           λ scaling factor\n\nλmax,      1e10,          λ maximum value\n\nλmin,      1e-6,          below this value λ = 0\n\nregType,        1,             regularization type 1: quu+λ*I 2: Vxx+λ*I\n\nreduce_ratio_min,           0,             minimal accepted reduction ratio\n\ndiff_fun,         -,             user-defined diff for sub-space optimization\n\nplot,           1,             0: no  k>0: every k iters k<0: every k iters, with derivs window\n\nverbosity,      2,             0: no  1: final 2: iter 3: iter, detailed\n\nplot_fun,         x->0,          user-defined graphics callback\n\ncost,           [],            initial cost for pre-rolled trajectory\n\nThis code consists of a port and extension of a MATLAB library provided by the autors of INPROCEEDINGS{author={Tassa, Y. and Mansard, N. and Todorov, E.}, booktitle={Robotics and Automation (ICRA), 2014 IEEE International Conference on}, title={Control-Limited Differential Dynamic Programming}, year={2014}, month={May}, doi={10.1109/ICRA.2014.6907001}}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.iLQGkl",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.iLQGkl",
    "category": "function",
    "text": "`x, u, traj_new, Vx, Vxx, cost, trace = iLQGkl(dynamics,costfun,derivs, x0, traj_prev, model;\n    constrain_per_step = false,\n    kl_step            = 0,\n    lims               = [],                    # Control signal limits ::Matrix ∈ R(m,2)\n    tol_fun            = 1e-7,\n    tol_grad           = 1e-4,\n    max_iter           = 50,\n    print_head         = 10,                    # Print headers this often\n    print_period       = 1,                     # Print this often\n    reduce_ratio_min   = 0,                     # Not used ATM\n    diff_fun           = -,\n    verbosity          = 2,                     # ∈ (0,3)\n    plot_fun           = x->0,                  # Not used\n    cost               = [],                    # Supply if pre-rolled trajectory supplied\n    ηbracket           = [1e-8,1,1e16],         # dual variable bracket [min_η, η, max_η]\n    del0               = 0.0001,                # Start of dual variable increase\n    gd_alpha           = 0.01                   # Step size in GD (ADAMOptimizer) when constrain_per_step is true\n    )`\n\nSolves the iLQG problem with constraints on control signals lims and bound on the KL-divergence kl_step from the old trajectory distribution traj_prev::GaussianPolicy.\n\nTo solve the maximum entropy problem, use controller controller(xi,i)  = u[:,i] + K[:,:,i]*(xi-x[:,i]) + chol(Σ)*randn(m) where K comes from traj_new. Note that multiplying the cost by a constant changes the relative weight between the cost term and the entropy term, i.e., higher cost produces less noise through chol(Σ) since (Σ = Qᵤᵤ⁻¹).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.kl_div",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.kl_div",
    "category": "function",
    "text": "This function produces lots of negative values which are clipped by the max(0,kl)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.kl_div_wiki",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.kl_div_wiki",
    "category": "function",
    "text": "This version seems to be symmetric and positive\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DifferentialDynamicProgramming.∇kl",
    "page": "Docstrings",
    "title": "DifferentialDynamicProgramming.∇kl",
    "category": "function",
    "text": "Calculate the Q terms related to the KL-constraint. (Actually, only related to log(p̂(τ)) since the constraint is rewritten as Entropy term and other term dissapears into expectation under p(τ).) Qtt is [Qxx Qxu; Qux Quu] Qt is [Qx; Qu] These terms should be added to the Q terms calculated in the backwards pass to produce the final Q terms. This Function should be called from within the backwards_pass Function or just prior to it to adjust the cost derivative matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DifferentialDynamicProgramming.@end_backward_passDifferentialDynamicProgramming.@setupQTICDifferentialDynamicProgramming.ADAMOptimizerDifferentialDynamicProgramming.DEBUGDifferentialDynamicProgramming.DifferentialDynamicProgrammingDifferentialDynamicProgramming.EmptyMat2DifferentialDynamicProgramming.EmptyMat3DifferentialDynamicProgramming.GaussianPolicyDifferentialDynamicProgramming.KLmvDifferentialDynamicProgramming.QPTraceDifferentialDynamicProgramming.TraceDifferentialDynamicProgramming.__init__DifferentialDynamicProgramming.back_passDifferentialDynamicProgramming.back_pass_gpsDifferentialDynamicProgramming.boxQPDifferentialDynamicProgramming.calc_ηDifferentialDynamicProgramming.careDifferentialDynamicProgramming.choleskyvectensDifferentialDynamicProgramming.debugDifferentialDynamicProgramming.demoQPDifferentialDynamicProgramming.demo_linearDifferentialDynamicProgramming.demo_linear_klDifferentialDynamicProgramming.demo_pendcartDifferentialDynamicProgramming.dirDifferentialDynamicProgramming.emptyMat2DifferentialDynamicProgramming.emptyMat3DifferentialDynamicProgramming.entropyDifferentialDynamicProgramming.evalDifferentialDynamicProgramming.eyeDifferentialDynamicProgramming.forward_covarianceDifferentialDynamicProgramming.forward_passDifferentialDynamicProgramming.geomDifferentialDynamicProgramming.graphicsDifferentialDynamicProgramming.iLQGDifferentialDynamicProgramming.iLQGklDifferentialDynamicProgramming.includeDifferentialDynamicProgramming.kl_divDifferentialDynamicProgramming.kl_div_wikiDifferentialDynamicProgramming.lqrDifferentialDynamicProgramming.plotstuff_linearDifferentialDynamicProgramming.plotstuff_pendcartDifferentialDynamicProgramming.print_timingDifferentialDynamicProgramming.∇kl"
},

]}
