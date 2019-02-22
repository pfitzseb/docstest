var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)This package (abbreviated UNSflow) is a library of low-order solvers for unsteady aerodynamics and aeroelasticity managed by Dr. Kiran Ramesh at the University of Glasgow. The solvers are written in Julia, are based on the discrete-vortex method and cater to various applications.This project is currently supported by EPSRC grant EP/R008035/1.Julia is a new high-level, high-performance dynamic programming language for technical computing. Julia’s novel features are a sophisticated compiler, distributed parallel execution, numerical accuracy, and an extensive mathematical function library. Julia is fully open-source under the MIT license, and integrates mature, best-of-breed open source C and Fortran libraries for various computing algorithms."
},

{
    "location": "#Installing-Julia-and-UNSflow-1",
    "page": "Readme",
    "title": "Installing Julia and UNSflow",
    "category": "section",
    "text": "Download and install the latest stable version of Julia.At the prompt type, ]add UnsteadyFlowSolversThis will install UnsteadyFlowSolvers and dependent packages."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "Tutorials demonstrating the code with detailed READMEs are available in the UNSflowTutorials repository. "
},

{
    "location": "autodocs/#UnsteadyFlowSolvers.TwoDVort",
    "page": "Docstrings",
    "title": "UnsteadyFlowSolvers.TwoDVort",
    "category": "type",
    "text": "TwoDVort(x,z,s,vc,vx,vz)\n\nDefines a 2D vortex at (x,z) with vorticity s and vortex-core radius vc.\n\nvx and vz are induced velocity at centroid used in vortex interaction calculations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsteadyFlowSolvers.cleanWrite",
    "page": "Docstrings",
    "title": "UnsteadyFlowSolvers.cleanWrite",
    "category": "function",
    "text": "cleanWrite()\n\nClears all timestamp directories in the current folder\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsteadyFlowSolvers.controlVortCount",
    "page": "Docstrings",
    "title": "UnsteadyFlowSolvers.controlVortCount",
    "category": "function",
    "text": "controlVortCount(delvort, surf, curfield)\n\nPerforms merging or deletion operation on free vortices in order to control computational cost according to algorithm specified.\n\nAlgorithms for parameter delvort\n\ndelNone\nDoes nothing, no vortex count control.\ndelSpalart(limit=500, dist=10, tol=1e-6)\nMerges vortices according to algorithm given in Spalart,  P. R. (1988). Vortex methods for separated flows.\nlimit: min number of vortices present for merging to occur\ndist: small values encourage mergin near airfoil, large values in   wake (see paper)\ntol: tolerance for merging, merging is less likely to occur for low  values (see paper)\n\nThere is no universal set of parameters that work for all problem. If using vortex control, test and calibrate choice of parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsteadyFlowSolvers.find_tstep",
    "page": "Docstrings",
    "title": "UnsteadyFlowSolvers.find_tstep",
    "category": "function",
    "text": "find_tstep([kin])\n\nkin is a definition of either Sin / Cos / Ramp kinematics\n\nA suitable time-step is calculated based on the values of amplitude and frequency\n\nFor Sin / Cos kinematics, time step for amp*k = 0.2 is 0.015\n\nFor Eldredge ramp kinematics, time step for K = 0.2 is 0.015\n\nFor Constant kinematics, time step is 0.015\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsteadyFlowSolvers.lautat",
    "page": "Docstrings",
    "title": "UnsteadyFlowSolvers.lautat",
    "category": "function",
    "text": "lautat(surf, curfield, nsteps=500, dtstar=0.015, startflag=0,\n\nwriteflag=0, writeInterval=1000., delvort=delNone(), maxwrite=100, nround=6)\n\nSimulates potential flow for an airfoil undergoing unsteady motion     using Large-Angle Unsteady Thin-Airfoil Theory.\n\nInputs required:\n- `TwoDSurf` : based on airfoil geometry and kinematics\n- `TwoDFlowField` : initial flowfield\n\n`dtstar` should be in accordance with the kinematics; see `?find_tstep`.\n\n`nsteps` should be calculated according to total run time required and\ndtstar.\n\n`startflag=1` can be used to continue a simulation using the\n*resultsSummary* file in current directory.\n\n`writeflag=1` along with a suitable writeInterval is used to write flow\ndata at intervals. These can be used to create plots and movies of the\nflowfield.\n\n`delvort` is used to control the vortex count. The simulation cost\nincreases as O(n``^2``) with number of vortices in the flow field and so\nlong run times can get very computationally expensive. Look at\n`?delVortDef` for algorthims to control vortex count.\n\n`maxwrite` is the maximum number of timestamps/directories that may be\nwritten.\n\n`nround` is the number of digits to which the output timestamps are\nrounded off to.\n\nThe Large-Angle Unsteady Thin-Airfoil theory is described in: Ramesh,\nK. et al., \"An unsteady airfoil theory applied to pitching motions\nvalidated against experiment and computation\", Theor. Comput. Fluid\nDyn. (2013) 27: 843. [Weblink](https://doi.org/10.1007/s00162-012-0292-8)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#UnsteadyFlowSolvers.simpleInterp",
    "page": "Docstrings",
    "title": "UnsteadyFlowSolvers.simpleInterp",
    "category": "function",
    "text": "simpleInterp(x1, x2, y1, y2, x)\n\nPerforms a linear interpolation between points (x1,y1) and (x2,y2) to find the value of y at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UnsteadyFlowSolvers.BendingDefUnsteadyFlowSolvers.ConstDefUnsteadyFlowSolvers.CosDefUnsteadyFlowSolvers.EldRampReturnDefUnsteadyFlowSolvers.EldUpDefUnsteadyFlowSolvers.EldUpIntDefUnsteadyFlowSolvers.EldUpInttstartDefUnsteadyFlowSolvers.EldUptstartDefUnsteadyFlowSolvers.KelvinConditionUnsteadyFlowSolvers.KelvinConditionMultUnsteadyFlowSolvers.KelvinKuttaUnsteadyFlowSolvers.KelvinKuttaMultUnsteadyFlowSolvers.KinemDefUnsteadyFlowSolvers.KinemParUnsteadyFlowSolvers.KinemPar2DOFUnsteadyFlowSolvers.LinearDefUnsteadyFlowSolvers.MotionDefUnsteadyFlowSolvers.SinDefUnsteadyFlowSolvers.StepGustDefUnsteadyFlowSolvers.TwoDFlowFieldUnsteadyFlowSolvers.TwoDOFParUnsteadyFlowSolvers.TwoDSurfUnsteadyFlowSolvers.TwoDVortUnsteadyFlowSolvers.UnsteadyFlowSolversUnsteadyFlowSolvers.add_indbound_bUnsteadyFlowSolvers.calc_delcpUnsteadyFlowSolvers.calc_edgeVelUnsteadyFlowSolvers.calc_forcesUnsteadyFlowSolvers.camber_calcUnsteadyFlowSolvers.camber_thick_calcUnsteadyFlowSolvers.checkConvergeUnsteadyFlowSolvers.cleanWriteUnsteadyFlowSolvers.controlVortCountUnsteadyFlowSolvers.delNoneUnsteadyFlowSolvers.delSpalartUnsteadyFlowSolvers.delVortDefUnsteadyFlowSolvers.evalUnsteadyFlowSolvers.find_tstepUnsteadyFlowSolvers.getEndCycleUnsteadyFlowSolvers.includeUnsteadyFlowSolvers.ind_velUnsteadyFlowSolvers.lautatUnsteadyFlowSolvers.ldvmUnsteadyFlowSolvers.ldvm2DOFUnsteadyFlowSolvers.ldvmLinUnsteadyFlowSolvers.makeForcePlots2DUnsteadyFlowSolvers.makeKinemClVortPlots2DUnsteadyFlowSolvers.makeKinemVelVortPlots2DUnsteadyFlowSolvers.makeVortPlots2DUnsteadyFlowSolvers.mutual_indUnsteadyFlowSolvers.place_levUnsteadyFlowSolvers.place_tevUnsteadyFlowSolvers.simpleInterpUnsteadyFlowSolvers.simpleTrapzUnsteadyFlowSolvers.update_a0anda1UnsteadyFlowSolvers.update_a2a3adotUnsteadyFlowSolvers.update_a2toanUnsteadyFlowSolvers.update_adotUnsteadyFlowSolvers.update_atermdotUnsteadyFlowSolvers.update_boundposUnsteadyFlowSolvers.update_bvUnsteadyFlowSolvers.update_downwashUnsteadyFlowSolvers.update_externalvelUnsteadyFlowSolvers.update_indboundUnsteadyFlowSolvers.update_kinemUnsteadyFlowSolvers.update_kinem2DOFUnsteadyFlowSolvers.viewVort2DUnsteadyFlowSolvers.viewVortConnect2DUnsteadyFlowSolvers.wakerollUnsteadyFlowSolvers.writeStamp"
},

]}
