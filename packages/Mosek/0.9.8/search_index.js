var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": "CurrentModule = Mosek"
},

{
    "location": "#MOSEK-Solver-API-Reference-1",
    "page": "Index",
    "title": "MOSEK Solver API Reference",
    "category": "section",
    "text": ""
},

{
    "location": "#Mosek.makeenv",
    "page": "Index",
    "title": "Mosek.makeenv",
    "category": "function",
    "text": "makeenv()\n\nCreate a MOSEK environment.\n\n\n\n\n\nmakeenv(func::Function)\n\nCreate a MOSEK environment for use with do-syntax.\n\n\n\n\n\n"
},

{
    "location": "#Mosek.maketask",
    "page": "Index",
    "title": "Mosek.maketask",
    "category": "function",
    "text": "maketask(env:Env)\nmaketask()\n\nCreate a task that belongs to either the given env or to the global env.\n\nmaketask(task::Task)\n\nCreate a clone of task.\n\nmaketask(func::Function, env::Env)\nmaketask(func::Function)\n\nCreate a task that either longs to the given env or to the global env. The func parameter is a function\n\nfunc(task :: Task) :: Any\n\nThis can be used with the do-syntax:\n\nmaketask(env) do task\n    readdata(task,\"MyFile.task\")\nend\n\n\n\n\n\n"
},

{
    "location": "#Mosek.deleteenv",
    "page": "Index",
    "title": "Mosek.deleteenv",
    "category": "function",
    "text": "deleteenv(t::Env)\n\nDestroy the task object.\n\n\n\n\n\n"
},

{
    "location": "#Mosek.deletetask",
    "page": "Index",
    "title": "Mosek.deletetask",
    "category": "function",
    "text": "deletetask(t::Task)\n\nDestroy the task object.\n\n\n\n\n\n"
},

{
    "location": "#Create-and-destroy-MOSEK-objects-1",
    "page": "Index",
    "title": "Create and destroy MOSEK objects",
    "category": "section",
    "text": "makeenv\nmaketask\ndeleteenv\ndeletetask"
},

{
    "location": "#Function-reference-1",
    "page": "Index",
    "title": "Function reference",
    "category": "section",
    "text": ""
},

{
    "location": "Mosek-Functions/#",
    "page": "API Reference",
    "title": "API Reference",
    "category": "page",
    "text": "CurrentModule = MosekThis page lists all MOSEK functions available from Julia. Please note that the documentation was generated from the documentation for the MOSEK C API, so in some cases it may be slightly invalid. Specifically,Index arguments may not be displayed or documented as starting at 1 (indexes in C start at 0). Nevertheless, in the MOSEK Julia API all indexes are 1-based.\nValues that are returned from functions may be documented as if they appeared in the argument list for functions.\nProbably a lot of other stuff. I will be trying to improve all this when I can.For most functions there are two alternatives; one where all arguments are structly typed, and one where most arguments are untyped. The latter will convert arguments as necessary and call the former, but there appears to be a significant overhead in doing this. To improve efficiency it may be a good idea to  make sure that arguments have the correct types so the typed function is called.For more verbose descriptions of the individual functions, it is a good idea to look at e.g. the Python documentation at MOSEK docs."
},

{
    "location": "Mosek-Functions/#Mosek.analyzenames",
    "page": "API Reference",
    "title": "Mosek.analyzenames",
    "category": "function",
    "text": "analyzenames(task_:: MSKtask,whichstream_:: Streamtype,nametype_:: Nametype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\nnametype :: Nametype. The type of names e.g. valid in MPS or LP files.\n\nThe function analyzes the names and issues an error if a name is invalid.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.analyzeproblem",
    "page": "API Reference",
    "title": "Mosek.analyzeproblem",
    "category": "function",
    "text": "analyzeproblem(task_:: MSKtask,whichstream_:: Streamtype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\n\nThe function analyzes the data of a task and writes out a report.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.analyzesolution",
    "page": "API Reference",
    "title": "Mosek.analyzesolution",
    "category": "function",
    "text": "analyzesolution(task_:: MSKtask,whichstream_:: Streamtype,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\nwhichsol :: Soltype. Selects a solution.\n\nPrint information related to the quality of the solution and other solution statistics.\n\nBy default this function prints information about the largest infeasibilites in the solution, the primal (and possibly dual) objective value and the solution status.\n\nFollowing parameters can be used to configure the printed statistics:\n\nMSK_IPAR_ANA_SOL_BASIS` enables or disables printing of statistics specific to the basis solution (condition number, number of basic variables etc.). Default is on.\nMSK_IPAR_ANA_SOL_PRINT_VIOLATED` enables or disables listing names of all constraints (both primal and dual) which are violated by the solution. Default is off.\nMSK_DPAR_ANA_SOL_INFEAS_TOL` is the tolerance defining when a constraint is considered violated. If a constraint is violated more than this, it will be listed in the summary.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.appendbarvars",
    "page": "API Reference",
    "title": "Mosek.appendbarvars",
    "category": "function",
    "text": "appendbarvars{T1}(task:: MSKtask,dim:: Vector{T1})\nappendbarvars(task_:: MSKtask,dim_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\ndim :: Vector{Int32}. Dimensions of symmetric matrix variables to be added.\n\nAppends positive semidefinite matrix variables of dimensions given by dim to the problem.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.appendcone",
    "page": "API Reference",
    "title": "Mosek.appendcone",
    "category": "function",
    "text": "appendcone{T2,T3}(task:: MSKtask,ct:: Conetype,conepar:: T2,submem:: Vector{T3})\nappendcone(task_:: MSKtask,ct_:: Conetype,conepar_:: Float64,submem_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nct :: Conetype. Specifies the type of the cone.\nconepar :: Float64. This argument is currently not used. It can be set to 0\nsubmem :: Vector{Int32}. Variable subscripts of the members in the cone.\n\nAppends a new conic constraint to the problem. Hence, add a constraint\n\n hatx in mathcalK\n\nto the problem where mathcalK is a convex cone. hatx is a subset of the variables which will be specified by the argument submem.\n\nDepending on the value of ct this function appends a normal (MSK_CT_QUAD) or rotated quadratic cone (MSK_CT_RQUAD).\n\nDefine \n\n hatx = x_mathttsubmem0ldotsx_mathttsubmemmathttnummem-1\n\nDepending on the value of ct this function appends one of the constraints:\n\nQuadratic cone (MSK_CT_QUAD) : \n\n hatx_0 geq sqrtsum_i=1^imathttnummem hatx_i^2\n\nRotated quadratic cone (MSK_CT_RQUAD) : \n\n 2 hatx_0 hatx_1 geq sum_i=2^imathttnummem hatx^2_i mathcalC_q hatx_0 hatx_1 geq 0\n\nPlease note that the sets of variables appearing in different conic constraints must be disjoint.\n\nFor an explained code example see Section :ref:doc.tutorial_cqo.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.appendconeseq",
    "page": "API Reference",
    "title": "Mosek.appendconeseq",
    "category": "function",
    "text": "appendconeseq{T2,T3,T4}(task:: MSKtask,ct:: Conetype,conepar:: T2,nummem:: T3,j:: T4)\nappendconeseq(task_:: MSKtask,ct_:: Conetype,conepar_:: Float64,nummem_:: Int32,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nct :: Conetype. Specifies the type of the cone.\nconepar :: Float64. This argument is currently not used. It can be set to 0\nnummem :: Int32. Number of member variables in the cone.\nj :: Int32. Index of the first variable in the conic constraint.\n\nAppends a new conic constraint to the problem, as in Mosek.appendcone. The function assumes the members of cone are sequential where the first member has index j and the last j+nummem-1.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.appendconesseq",
    "page": "API Reference",
    "title": "Mosek.appendconesseq",
    "category": "function",
    "text": "appendconesseq{T2,T3,T4}(task:: MSKtask,ct:: Vector{Conetype},conepar:: Vector{T2},nummem:: Vector{T3},j:: T4)\nappendconesseq(task_:: MSKtask,ct_:: Vector{Conetype},conepar_:: Vector{Float64},nummem_:: Vector{Int32},j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nct :: Vector{Int32}. Specifies the type of the cone.\nconepar :: Vector{Float64}. This argument is currently not used. It can be set to 0\nnummem :: Vector{Int32}. Numbers of member variables in the cones.\nj :: Int32. Index of the first variable in the first cone to be appended.\n\nAppends a number of conic constraints to the problem, as in Mosek.appendcone. The k th cone is assumed to be of dimension nummem[k]. Moreover, it is assumed that the first variable of the first cone has index j and starting from there the sequentially following variables belong to the first cone, then to the second cone and so on.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.appendcons",
    "page": "API Reference",
    "title": "Mosek.appendcons",
    "category": "function",
    "text": "appendcons{T1}(task:: MSKtask,num:: T1)\nappendcons(task_:: MSKtask,num_:: Int32)\n\ntask :: MSKtask. An optimization task.\nnum :: Int32. Number of constraints which should be appended.\n\nAppends a number of constraints to the model. Appended constraints will be declared free. Please note that MOSEK will automatically expand the problem dimension to accommodate the additional constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.appendsparsesymmat",
    "page": "API Reference",
    "title": "Mosek.appendsparsesymmat",
    "category": "function",
    "text": "idx = appendsparsesymmat{T1,T2,T3,T4}(task:: MSKtask,dim:: T1,subi:: Vector{T2},subj:: Vector{T3},valij:: Vector{T4})\nidx = appendsparsesymmat(task_:: MSKtask,dim_:: Int32,subi_:: Vector{Int32},subj_:: Vector{Int32},valij_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\ndim :: Int32. Dimension of the symmetric matrix that is appended.\nsubi :: Vector{Int32}. Row subscript in the triplets.\nsubj :: Vector{Int32}. Column subscripts in the triplets.\nvalij :: Vector{Float64}. Values of each triplet.\nidx :: Int64. Unique index assigned to the inputted matrix.\n\nMOSEK maintains a storage of symmetric data matrices that is used to build bar C and bar A. The storage can be thought of as a vector of symmetric matrices denoted E. Hence, E_i is a symmetric matrix of certain dimension.\n\nThis function appends a general sparse symmetric matrix on triplet form to the vector E of symmetric matrices.  The vectors subi, subj, and valij contains the row subscripts, column subscripts and values of each element in the symmetric matrix to be appended.  Since the matrix that is appended is symmetric, only the lower triangular part should be specified. Moreover, duplicates are not allowed.\n\nObserve the function reports the index (position) of the appended matrix in E. This index should be used for later references to the appended matrix.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.appendvars",
    "page": "API Reference",
    "title": "Mosek.appendvars",
    "category": "function",
    "text": "appendvars{T1}(task:: MSKtask,num:: T1)\nappendvars(task_:: MSKtask,num_:: Int32)\n\ntask :: MSKtask. An optimization task.\nnum :: Int32. Number of variables which should be appended.\n\nAppends a number of variables to the model. Appended variables will be fixed at zero. Please note that MOSEK will automatically expand the problem dimension to accommodate the additional variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.basiscond",
    "page": "API Reference",
    "title": "Mosek.basiscond",
    "category": "function",
    "text": "(nrmbasis,nrminvbasis) = basiscond(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnrmbasis :: Float64. An estimate for the 1-norm of the basis.\nnrminvbasis :: Float64. An estimate for the 1-norm of the inverse of the basis.\n\nIf a basic solution is available and it defines a nonsingular basis, then this function computes the 1-norm estimate of the basis matrix and a 1-norm estimate for the inverse of the basis matrix. The 1-norm estimates are computed using the method outlined in :cite:STEWART:98:A, pp. 388-391.\n\nBy definition the 1-norm condition number of a matrix B is defined as\n\n kappa_1(B) = B_1 B^-1_1\n\nMoreover, the larger the condition number is the harder it is to solve linear equation systems involving B.  Given estimates for B_1 and B^-1_1 it is also possible to estimate kappa_1(B).\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.bktostr",
    "page": "API Reference",
    "title": "Mosek.bktostr",
    "category": "function",
    "text": "str = bktostr(task_:: MSKtask,bk_:: Boundkey)\n\ntask :: MSKtask. An optimization task.\nbk :: Boundkey. Bound key.\nstr :: AbstractString. String corresponding to the bound key.\n\nObtains an identifier string corresponding to a bound key.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.callbackcodetostr",
    "page": "API Reference",
    "title": "Mosek.callbackcodetostr",
    "category": "function",
    "text": "callbackcodestr = callbackcodetostr(code_:: Callbackcode)\n\ncode :: Callbackcode. A callback code.\ncallbackcodestr :: AbstractString. String corresponding to the callback code.\n\nObtains the string representation of a callback code.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.checkconvexity",
    "page": "API Reference",
    "title": "Mosek.checkconvexity",
    "category": "function",
    "text": "checkconvexity(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\n\nThis function checks if a quadratic optimization problem is convex. The amount of checking is controlled by MSK_IPAR_CHECK_CONVEXITY`.\n\nThe function reports an error if the problem is not convex.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.checkinall",
    "page": "API Reference",
    "title": "Mosek.checkinall",
    "category": "function",
    "text": "checkinall(env_:: MSKenv)\n\nenv :: MSKenv. The MOSEK environment.\n\nCheck in all unused license features to the license token server.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.checkinlicense",
    "page": "API Reference",
    "title": "Mosek.checkinlicense",
    "category": "function",
    "text": "checkinlicense(env_:: MSKenv,feature_:: Feature)\n\nenv :: MSKenv. The MOSEK environment.\nfeature :: Feature. Feature to check in to the license system.\n\nCheck in a license feature to the license server. By default all licenses consumed by functions using a single environment are kept checked out for the lifetime of the MOSEK environment. This function checks in a given license feature back to the license server immediately.\n\nIf the given license feature is not checked out at all, or it is in use by a call to Mosek.optimize, calling this function has no effect.\n\nPlease note that returning a license to the license server incurs a small overhead, so frequent calls to this function should be avoided.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.checkmem",
    "page": "API Reference",
    "title": "Mosek.checkmem",
    "category": "function",
    "text": "checkmem{T2}(task:: MSKtask,file:: AbstractString,line:: T2)\ncheckmem(task_:: MSKtask,file_:: AbstractString,line_:: Int32)\n\ntask :: MSKtask. An optimization task.\nfile :: String. File from which the function is called.\nline :: Int32. Line in the file from which the function is called.\n\nChecks the memory allocated by the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.checkoutlicense",
    "page": "API Reference",
    "title": "Mosek.checkoutlicense",
    "category": "function",
    "text": "checkoutlicense(env_:: MSKenv,feature_:: Feature)\n\nenv :: MSKenv. The MOSEK environment.\nfeature :: Feature. Feature to check out from the license system.\n\nChecks out a license feature from the license server. Normally the required license features will be automatically checked out the first time they are needed by the function Mosek.optimize. This function can be used to check out one or more features ahead of time.\n\nThe feature will remain checked out until the environment is deleted or the function Mosek.checkinlicense is called.\n\nIf a given feature is already checked out when this function is called, the call has no effect.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.chgbound",
    "page": "API Reference",
    "title": "Mosek.chgbound",
    "category": "function",
    "text": "chgbound{T2,T3,T4,T5}(task:: MSKtask,accmode:: Accmode,i:: T2,lower:: T3,finite:: T4,value:: T5)\nchgbound(task_:: MSKtask,accmode_:: Accmode,i_:: Int32,lower_:: Int32,finite_:: Int32,value_:: Float64)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines if operations are performed row-wise (constraint-oriented) or column-wise (variable-oriented).\ni :: Int32. Index of the constraint or variable for which the bounds should be changed.\nlower :: Int32. If non-zero, then the lower bound is changed, otherwise the upper bound is changed.\nfinite :: Int32. If non-zero, then the given value is assumed to be finite.\nvalue :: Float64. New value for the bound.\n\nChanges a bound for one constraint or variable. If accmode equals MSK_ACC_CON, a constraint bound is changed, otherwise a variable bound is changed.\n\nIf lower is non-zero, then the lower bound is changed as follows:\n\nmboxnew lower bound =\n    left\n        beginarrayll\n            - infty      mathttfinite=0 \n            mathttvalue  mboxotherwise \n        endarray\n    right\n\nOtherwise if lower is zero, then\n\nmboxnew upper bound = \n    left \n        beginarrayll\n            infty      mathttfinite=0 \n            mathttvalue  mboxotherwise \n        endarray\n    right\n\nPlease note that this function automatically updates the bound key for bound, in particular, if the lower and upper bounds are identical, the bound key is changed to fixed.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.chgconbound",
    "page": "API Reference",
    "title": "Mosek.chgconbound",
    "category": "function",
    "text": "chgconbound{T1,T2,T3,T4}(task:: MSKtask,i:: T1,lower:: T2,finite:: T3,value:: T4)\nchgconbound(task_:: MSKtask,i_:: Int32,lower_:: Int32,finite_:: Int32,value_:: Float64)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the constraint for which the bounds should be changed.\nlower :: Int32. If non-zero, then the lower bound is changed, otherwise the upper bound is changed.\nfinite :: Int32. If non-zero, then the given value is assumed to be finite.\nvalue :: Float64. New value for the bound.\n\nChanges a bound for one constraint.\n\nIf lower is non-zero, then the lower bound is changed as follows:\n\nmboxnew lower bound =\n  left\n    beginarrayll\n      - infty        mathttfinite=0 \n      mathttvalue   mboxotherwise \n    endarray\n  right\n\nOtherwise if lower is zero, then\n\nmboxnew upper bound = \n  left\n    beginarrayll\n      infty         mathttfinite=0 \n      mathttvalue  mboxotherwise \n    endarray\n  right\n\nPlease note that this function automatically updates the bound key for the  bound, in particular, if the lower and upper bounds are identical, the bound key is changed to fixed.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.chgvarbound",
    "page": "API Reference",
    "title": "Mosek.chgvarbound",
    "category": "function",
    "text": "chgvarbound{T1,T2,T3,T4}(task:: MSKtask,j:: T1,lower:: T2,finite:: T3,value:: T4)\nchgvarbound(task_:: MSKtask,j_:: Int32,lower_:: Int32,finite_:: Int32,value_:: Float64)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable for which the bounds should be changed.\nlower :: Int32. If non-zero, then the lower bound is changed, otherwise the upper bound is changed.\nfinite :: Int32. If non-zero, then the given value is assumed to be finite.\nvalue :: Float64. New value for the bound.\n\nChanges a bound for one variable.\n\nIf lower is non-zero, then the lower bound is changed as follows:\n\nmboxnew lower bound =\n  left\n    beginarrayll\n      - infty      mathttfinite=0 \n      mathttvalue  mboxotherwise \n    endarray\n  right\n\nOtherwise if lower is zero, then\n\nmboxnew upper bound = \n  left\n    beginarrayll\n      infty      mathttfinite=0 \n      mathttvalue  mboxotherwise \n    endarray\n  right\n\nPlease note that this function automatically updates the bound key for the bound, in particular, if the lower and upper bounds are identical, the bound key is changed to fixed.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.commitchanges",
    "page": "API Reference",
    "title": "Mosek.commitchanges",
    "category": "function",
    "text": "commitchanges(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\n\nCommits all cached problem changes to the task. It is usually not necessary to call this function explicitly since changes will be committed automatically when required.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.conetypetostr",
    "page": "API Reference",
    "title": "Mosek.conetypetostr",
    "category": "function",
    "text": "str = conetypetostr(task_:: MSKtask,ct_:: Conetype)\n\ntask :: MSKtask. An optimization task.\nct :: Conetype. Specifies the type of the cone.\nstr :: AbstractString. String corresponding to the cone type.\n\nObtains the cone string identifier corresponding to a cone type.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.deletesolution",
    "page": "API Reference",
    "title": "Mosek.deletesolution",
    "category": "function",
    "text": "deletesolution(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\n\nUndefine a solution and free the memory it uses.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.dualsensitivity",
    "page": "API Reference",
    "title": "Mosek.dualsensitivity",
    "category": "function",
    "text": "(leftpricej,rightpricej,leftrangej,rightrangej) = dualsensitivity{T1}(task:: MSKtask,subj:: Vector{T1})\n(leftpricej,rightpricej,leftrangej,rightrangej) = dualsensitivity(task_:: MSKtask,subj_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nsubj :: Vector{Int32}. Indexes of objective coefficients to analyze.\nleftpricej :: Vector{Float64}. Left shadow prices for requested coefficients.\nrightpricej :: Vector{Float64}. Right shadow prices for requested coefficients.\nleftrangej :: Vector{Float64}. Left range for requested coefficients.\nrightrangej :: Vector{Float64}. Right range for requested coefficients.\n\nCalculates sensitivity information for objective coefficients. The indexes of the coefficients to analyze are\n\n mathttsubji  i = 0ldotsmathttnumj-1\n\nThe type of sensitivity analysis to perform (basis or optimal partition) is controlled by the parameter MSK_IPAR_SENSITIVITY_TYPE`.\n\nFor an example, please see Section :ref:doc.shared.sensitivity_example.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.echointro",
    "page": "API Reference",
    "title": "Mosek.echointro",
    "category": "function",
    "text": "echointro{T1}(env:: MSKenv,longver:: T1)\nechointro(env_:: MSKenv,longver_:: Int32)\n\nenv :: MSKenv. The MOSEK environment.\nlongver :: Int32. If non-zero, then the intro is slightly longer.\n\nPrints an intro to message stream.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getacol",
    "page": "API Reference",
    "title": "Mosek.getacol",
    "category": "function",
    "text": "(nzj,subj,valj) = getacol{T1}(task:: MSKtask,j:: T1)\n(nzj,subj,valj) = getacol(task_:: MSKtask,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the column.\nnzj :: Int32. Number of non-zeros in the column obtained.\nsubj :: Vector{Int32}. Row indices of the non-zeros in the column obtained.\nvalj :: Vector{Float64}. Numerical values in the column obtained.\n\nObtains one column of A in a sparse format.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getacolnumnz",
    "page": "API Reference",
    "title": "Mosek.getacolnumnz",
    "category": "function",
    "text": "nzj = getacolnumnz{T1}(task:: MSKtask,i:: T1)\nnzj = getacolnumnz(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the column.\nnzj :: Int32. Number of non-zeros in the j\'th column of (A).\n\nObtains the number of non-zero elements in one column of A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getacolslicetrip",
    "page": "API Reference",
    "title": "Mosek.getacolslicetrip",
    "category": "function",
    "text": "(subi,subj,val) = getacolslicetrip{T1,T2}(task:: MSKtask,first:: T1,last:: T2)\n(subi,subj,val) = getacolslicetrip(task_:: MSKtask,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. Index of the first column in the sequence.\nlast :: Int32. Index of the last column in the sequence plus one.\nsubi :: Vector{Int32}. Constraint subscripts.\nsubj :: Vector{Int32}. Column subscripts.\nval :: Vector{Float64}. Values.\n\nObtains a sequence of columns from A in sparse triplet format. The function returns the content of all columns whose index j satisfies first <= j < last. The triplets corresponding to nonzero entries are stored in the arrays subi, subj and val.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getaij",
    "page": "API Reference",
    "title": "Mosek.getaij",
    "category": "function",
    "text": "aij = getaij{T1,T2}(task:: MSKtask,i:: T1,j:: T2)\naij = getaij(task_:: MSKtask,i_:: Int32,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Row index of the coefficient to be returned.\nj :: Int32. Column index of the coefficient to be returned.\naij :: Float64. Returns the requested coefficient.\n\nObtains a single coefficient in A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getapiecenumnz",
    "page": "API Reference",
    "title": "Mosek.getapiecenumnz",
    "category": "function",
    "text": "numnz = getapiecenumnz{T1,T2,T3,T4}(task:: MSKtask,firsti:: T1,lasti:: T2,firstj:: T3,lastj:: T4)\nnumnz = getapiecenumnz(task_:: MSKtask,firsti_:: Int32,lasti_:: Int32,firstj_:: Int32,lastj_:: Int32)\n\ntask :: MSKtask. An optimization task.\nfirsti :: Int32. Index of the first row in the rectangular piece.\nlasti :: Int32. Index of the last row plus one in the rectangular piece.\nfirstj :: Int32. Index of the first column in the rectangular piece.\nlastj :: Int32. Index of the last column plus one in the rectangular piece.\nnumnz :: Int32. Number of non-zero elements in the rectangular piece of the linear constraint matrix.\n\nObtains the number non-zeros in a rectangular piece of A, i.e. the number of elements in the set\n\n  (ij) a_ij neq 0 mathttfirsti leq i leq mathttlasti-1 mathttfirstj leq j leq mathttlastj-1\n\nThis function is not an efficient way to obtain the number of non-zeros in one row or column. In that case use the function Mosek.getarownumnz or Mosek.getacolnumnz.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getarow",
    "page": "API Reference",
    "title": "Mosek.getarow",
    "category": "function",
    "text": "(nzi,subi,vali) = getarow{T1}(task:: MSKtask,i:: T1)\n(nzi,subi,vali) = getarow(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the row.\nnzi :: Int32. Number of non-zeros in the row obtained.\nsubi :: Vector{Int32}. Column indices of the non-zeros in the row obtained.\nvali :: Vector{Float64}. Numerical values of the row obtained.\n\nObtains one row of A in a sparse format.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getarownumnz",
    "page": "API Reference",
    "title": "Mosek.getarownumnz",
    "category": "function",
    "text": "nzi = getarownumnz{T1}(task:: MSKtask,i:: T1)\nnzi = getarownumnz(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the row.\nnzi :: Int32. Number of non-zeros in the i\'th row of A.\n\nObtains the number of non-zero elements in one row of A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getarowslicetrip",
    "page": "API Reference",
    "title": "Mosek.getarowslicetrip",
    "category": "function",
    "text": "(subi,subj,val) = getarowslicetrip{T1,T2}(task:: MSKtask,first:: T1,last:: T2)\n(subi,subj,val) = getarowslicetrip(task_:: MSKtask,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. Index of the first row in the sequence.\nlast :: Int32. Index of the last row in the sequence plus one.\nsubi :: Vector{Int32}. Constraint subscripts.\nsubj :: Vector{Int32}. Column subscripts.\nval :: Vector{Float64}. Values.\n\nObtains a sequence of rows from A in sparse triplet format. The function returns the content of all rows whose index i satisfies first <= i < last.  The triplets corresponding to nonzero entries are stored in the arrays subi, subj and val.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getaslice",
    "page": "API Reference",
    "title": "Mosek.getaslice",
    "category": "function",
    "text": "(ptrb,ptre,sub,val) = getaslice{T2,T3}(task:: MSKtask,accmode:: Accmode,first:: T2,last:: T3)\n(ptrb,ptre,sub,val) = getaslice(task_:: MSKtask,accmode_:: Accmode,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines whether a column slice or a row slice is requested.\nfirst :: Int32. Index of the first row or column in the sequence.\nlast :: Int32. Index of the last row or column in the sequence plus one.\nptrb :: Vector{Int64}. Row or column start pointers.\nptre :: Vector{Int64}. Row or column end pointers.\nsub :: Vector{Int32}. Contains the row or column subscripts.\nval :: Vector{Float64}. Contains the coefficient values.\n\nObtains a sequence of rows or columns from A in sparse format.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getaslicenumnz",
    "page": "API Reference",
    "title": "Mosek.getaslicenumnz",
    "category": "function",
    "text": "numnz = getaslicenumnz{T2,T3}(task:: MSKtask,accmode:: Accmode,first:: T2,last:: T3)\nnumnz = getaslicenumnz(task_:: MSKtask,accmode_:: Accmode,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines whether non-zeros are counted in a column slice or a row slice.\nfirst :: Int32. Index of the first row or column in the sequence.\nlast :: Int32. Index of the last row or column plus one in the sequence.\nnumnz :: Int64. Number of non-zeros in the slice.\n\nObtains the number of non-zeros in a slice of rows or columns of A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarablocktriplet",
    "page": "API Reference",
    "title": "Mosek.getbarablocktriplet",
    "category": "function",
    "text": "(num,subi,subj,subk,subl,valijkl) = getbarablocktriplet(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnum :: Int64. Number of elements in the block triplet form.\nsubi :: Vector{Int32}. Constraint index.\nsubj :: Vector{Int32}. Symmetric matrix variable index.\nsubk :: Vector{Int32}. Block row index.\nsubl :: Vector{Int32}. Block column index.\nvalijkl :: Vector{Float64}. The numerical value associated with each block triplet.\n\nObtains bar A in block triplet form.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbaraidx",
    "page": "API Reference",
    "title": "Mosek.getbaraidx",
    "category": "function",
    "text": "(i,j,num,sub,weights) = getbaraidx{T1}(task:: MSKtask,idx:: T1)\n(i,j,num,sub,weights) = getbaraidx(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. Position of the element in the vectorized form.\ni :: Int32. Row index of the element at position idx.\nj :: Int32. Column index of the element at position idx.\nnum :: Int64. Number of terms in weighted sum that forms the element.\nsub :: Vector{Int64}. A list indexes of the elements from symmetric matrix storage that appear in the weighted sum.\nweights :: Vector{Float64}. The weights associated with each term in the weighted sum.\n\nObtains information about an element in bar A. Since bar A is a sparse matrix of symmetric matrices, only the nonzero elements in bar A are stored in order to save space. Now bar A is stored vectorized i.e. as one long vector. This function makes it possible to obtain information such as the row index and the column index of a particular element of the vectorized form of bar A.\n\nPlease observe if one element of bar A is inputted multiple times then it may be stored several times in vectorized form. In that case the element with the highest index is the one that is used.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbaraidxij",
    "page": "API Reference",
    "title": "Mosek.getbaraidxij",
    "category": "function",
    "text": "(i,j) = getbaraidxij{T1}(task:: MSKtask,idx:: T1)\n(i,j) = getbaraidxij(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. Position of the element in the vectorized form.\ni :: Int32. Row index of the element at position idx.\nj :: Int32. Column index of the element at position idx.\n\nObtains information about an element in bar A. Since bar A is a sparse matrix of symmetric matrices, only the nonzero elements in bar A are stored in order to save space. Now bar A is stored vectorized i.e. as one long vector.  This function makes it possible to obtain information such as the row index and the column index of a particular element of the vectorized form of bar A.\n\nPlease note that if one element of bar A is inputted multiple times then it may be stored several times in vectorized form. In that case the element with the highest index is the one that is used.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbaraidxinfo",
    "page": "API Reference",
    "title": "Mosek.getbaraidxinfo",
    "category": "function",
    "text": "num = getbaraidxinfo{T1}(task:: MSKtask,idx:: T1)\nnum = getbaraidxinfo(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. The internal position of the element for which information should be obtained.\nnum :: Int64. Number of terms in the weighted sum that form the specified element in barA.\n\nEach nonzero element in bar A_ij is formed as a weighted sum of symmetric matrices. Using this function the number of terms in the weighted sum can be obtained. See description of Mosek.appendsparsesymmat for details about the weighted sum.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarasparsity",
    "page": "API Reference",
    "title": "Mosek.getbarasparsity",
    "category": "function",
    "text": "(numnz,idxij) = getbarasparsity(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumnz :: Int64. Number of nonzero elements in barA.\nidxij :: Vector{Int64}. Position of each nonzero element in the vector representation of barA.\n\nThe matrix bar A is assumed to be a sparse matrix of symmetric matrices. This implies that many of the elements in bar A are likely to be zero matrices. Therefore, in order to save space, only nonzero elements in bar A are stored on vectorized form. This function is used to obtain the sparsity pattern of bar A and the position of each nonzero element in the vectorized form of bar A. From the index detailed information about each nonzero bar A_ij can be obtained using Mosek.getbaraidxinfo and Mosek.getbaraidx.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarcblocktriplet",
    "page": "API Reference",
    "title": "Mosek.getbarcblocktriplet",
    "category": "function",
    "text": "(num,subj,subk,subl,valjkl) = getbarcblocktriplet(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnum :: Int64. Number of elements in the block triplet form.\nsubj :: Vector{Int32}. Symmetric matrix variable index.\nsubk :: Vector{Int32}. Block row index.\nsubl :: Vector{Int32}. Block column index.\nvaljkl :: Vector{Float64}. The numerical value associated with each block triplet.\n\nObtains bar C in block triplet form.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarcidx",
    "page": "API Reference",
    "title": "Mosek.getbarcidx",
    "category": "function",
    "text": "(j,num,sub,weights) = getbarcidx{T1}(task:: MSKtask,idx:: T1)\n(j,num,sub,weights) = getbarcidx(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. Index of the element for which information should be obtained.\nj :: Int32. Row index in barc.\nnum :: Int64. Number of terms in the weighted sum.\nsub :: Vector{Int64}. Elements appearing the weighted sum.\nweights :: Vector{Float64}. Weights of terms in the weighted sum.\n\nObtains information about an element in bar C.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarcidxinfo",
    "page": "API Reference",
    "title": "Mosek.getbarcidxinfo",
    "category": "function",
    "text": "num = getbarcidxinfo{T1}(task:: MSKtask,idx:: T1)\nnum = getbarcidxinfo(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. Index of the element for which information should be obtained. The value is an index of a symmetric sparse variable.\nnum :: Int64. Number of terms that appear in the weighted sum that forms the requested element.\n\nObtains the number of terms in the weighted sum that forms a particular element in bar C.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarcidxj",
    "page": "API Reference",
    "title": "Mosek.getbarcidxj",
    "category": "function",
    "text": "j = getbarcidxj{T1}(task:: MSKtask,idx:: T1)\nj = getbarcidxj(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. Index of the element for which information should be obtained.\nj :: Int32. Row index in barc.\n\nObtains the row index of an element in bar C.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarcsparsity",
    "page": "API Reference",
    "title": "Mosek.getbarcsparsity",
    "category": "function",
    "text": "(numnz,idxj) = getbarcsparsity(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumnz :: Int64. Number of nonzero elements in barc.\nidxj :: Vector{Int64}. Internal positions of the nonzeros elements in barc.\n\nInternally only the nonzero elements of bar C are stored  in a vector. This function is used to obtain the nonzero elements of bar C and their indexes in the internal vector representation (in idx). From the index detailed information about each nonzero bar C_j can be obtained using Mosek.getbarcidxinfo and Mosek.getbarcidx.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarsj",
    "page": "API Reference",
    "title": "Mosek.getbarsj",
    "category": "function",
    "text": "barsj = getbarsj{T2}(task:: MSKtask,whichsol:: Soltype,j:: T2)\nbarsj = getbarsj(task_:: MSKtask,whichsol_:: Soltype,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nj :: Int32. Index of the semidefinite variable.\nbarsj :: Vector{Float64}. Value of the j\'th dual variable of barx.\n\nObtains the dual solution for a semidefinite variable. Only the lower triangular part of bar S_j is returned because the matrix by construction is symmetric. The format is that the columns are stored sequentially in the natural order.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarvarname",
    "page": "API Reference",
    "title": "Mosek.getbarvarname",
    "category": "function",
    "text": "name = getbarvarname{T1}(task:: MSKtask,i:: T1)\nname = getbarvarname(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the variable.\nname :: AbstractString. The requested name is copied to this buffer.\n\nObtains the name of a semidefinite variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarvarnameindex",
    "page": "API Reference",
    "title": "Mosek.getbarvarnameindex",
    "category": "function",
    "text": "(asgn,index) = getbarvarnameindex(task_:: MSKtask,somename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nsomename :: String. The name of the variable.\nasgn :: Int32. Non-zero if the name somename is assigned to some semidefinite variable.\nindex :: Int32. The index of a semidefinite variable with the name somename (if one exists).\n\nObtains the index of semidefinite variable from its name.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarvarnamelen",
    "page": "API Reference",
    "title": "Mosek.getbarvarnamelen",
    "category": "function",
    "text": "len = getbarvarnamelen{T1}(task:: MSKtask,i:: T1)\nlen = getbarvarnamelen(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the variable.\nlen :: Int32. Returns the length of the indicated name.\n\nObtains the length of the name of a semidefinite variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbarxj",
    "page": "API Reference",
    "title": "Mosek.getbarxj",
    "category": "function",
    "text": "barxj = getbarxj{T2}(task:: MSKtask,whichsol:: Soltype,j:: T2)\nbarxj = getbarxj(task_:: MSKtask,whichsol_:: Soltype,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nj :: Int32. Index of the semidefinite variable.\nbarxj :: Vector{Float64}. Value of the j\'th variable of barx.\n\nObtains the primal solution for a semidefinite variable. Only the lower triangular part of bar X_j is returned because the matrix by construction is symmetric. The format is that the columns are stored sequentially in the natural order.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getbound",
    "page": "API Reference",
    "title": "Mosek.getbound",
    "category": "function",
    "text": "(bk,bl,bu) = getbound{T2}(task:: MSKtask,accmode:: Accmode,i:: T2)\n(bk,bl,bu) = getbound(task_:: MSKtask,accmode_:: Accmode,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines if operations are performed row-wise (constraint-oriented) or column-wise (variable-oriented).\ni :: Int32. Index of the constraint or variable for which the bound information should be obtained.\nbk :: Boundkey. Bound keys.\nbl :: Float64. Values for lower bounds.\nbu :: Float64. Values for upper bounds.\n\nObtains bound information for one constraint or variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getboundslice",
    "page": "API Reference",
    "title": "Mosek.getboundslice",
    "category": "function",
    "text": "(bk,bl,bu) = getboundslice{T2,T3}(task:: MSKtask,accmode:: Accmode,first:: T2,last:: T3)\n(bk,bl,bu) = getboundslice(task_:: MSKtask,accmode_:: Accmode,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines if operations are performed row-wise (constraint-oriented) or column-wise (variable-oriented).\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nbk :: Vector{Boundkey}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nObtains bounds information for a slice of variables or constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getc",
    "page": "API Reference",
    "title": "Mosek.getc",
    "category": "function",
    "text": "c = getc(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nc :: Vector{Float64}. Linear terms of the objective as a dense vector. The length is the number of variables.\n\nObtains all objective coefficients c.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getcfix",
    "page": "API Reference",
    "title": "Mosek.getcfix",
    "category": "function",
    "text": "cfix = getcfix(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\ncfix :: Float64. Fixed term in the objective.\n\nObtains the fixed term in the objective.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getcj",
    "page": "API Reference",
    "title": "Mosek.getcj",
    "category": "function",
    "text": "cj = getcj{T1}(task:: MSKtask,j:: T1)\ncj = getcj(task_:: MSKtask,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable for which the c coefficient should be obtained.\ncj :: Float64. The c coefficient value.\n\nObtains one coefficient of c.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getcodedesc",
    "page": "API Reference",
    "title": "Mosek.getcodedesc",
    "category": "function",
    "text": "(symname,str) = getcodedesc(code_:: Rescode)\n\ncode :: Rescode. A valid response code.\nsymname :: AbstractString. Symbolic name corresponding to the code.\nstr :: AbstractString. Obtains a short description of a response code.\n\nObtains a short description of the meaning of the response code given by code.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconbound",
    "page": "API Reference",
    "title": "Mosek.getconbound",
    "category": "function",
    "text": "(bk,bl,bu) = getconbound{T1}(task:: MSKtask,i:: T1)\n(bk,bl,bu) = getconbound(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the constraint for which the bound information should be obtained.\nbk :: Boundkey. Bound keys.\nbl :: Float64. Values for lower bounds.\nbu :: Float64. Values for upper bounds.\n\nObtains bound information for one constraint.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconboundslice",
    "page": "API Reference",
    "title": "Mosek.getconboundslice",
    "category": "function",
    "text": "(bk,bl,bu) = getconboundslice{T1,T2}(task:: MSKtask,first:: T1,last:: T2)\n(bk,bl,bu) = getconboundslice(task_:: MSKtask,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nbk :: Vector{Boundkey}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nObtains bounds information for a slice of the constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getcone",
    "page": "API Reference",
    "title": "Mosek.getcone",
    "category": "function",
    "text": "(ct,conepar,nummem,submem) = getcone{T1}(task:: MSKtask,k:: T1)\n(ct,conepar,nummem,submem) = getcone(task_:: MSKtask,k_:: Int32)\n\ntask :: MSKtask. An optimization task.\nk :: Int32. Index of the cone.\nct :: Conetype. Specifies the type of the cone.\nconepar :: Float64. This argument is currently not used. It can be set to 0\nnummem :: Int32. Number of member variables in the cone.\nsubmem :: Vector{Int32}. Variable subscripts of the members in the cone.\n\nObtains a cone.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconeinfo",
    "page": "API Reference",
    "title": "Mosek.getconeinfo",
    "category": "function",
    "text": "(ct,conepar,nummem) = getconeinfo{T1}(task:: MSKtask,k:: T1)\n(ct,conepar,nummem) = getconeinfo(task_:: MSKtask,k_:: Int32)\n\ntask :: MSKtask. An optimization task.\nk :: Int32. Index of the cone.\nct :: Conetype. Specifies the type of the cone.\nconepar :: Float64. This argument is currently not used. It can be set to 0\nnummem :: Int32. Number of member variables in the cone.\n\nObtains information about a cone.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconename",
    "page": "API Reference",
    "title": "Mosek.getconename",
    "category": "function",
    "text": "name = getconename{T1}(task:: MSKtask,i:: T1)\nname = getconename(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the cone.\nname :: AbstractString. The required name.\n\nObtains the name of a cone.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconenameindex",
    "page": "API Reference",
    "title": "Mosek.getconenameindex",
    "category": "function",
    "text": "(asgn,index) = getconenameindex(task_:: MSKtask,somename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nsomename :: String. The name which should be checked.\nasgn :: Int32. Is non-zero if the name somename is assigned to some cone.\nindex :: Int32. If the name somename is assigned to some cone, this is the index of the cone.\n\nChecks whether the name somename has been assigned to any cone. If it has been assigned to a cone, then the index of the cone is reported.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconenamelen",
    "page": "API Reference",
    "title": "Mosek.getconenamelen",
    "category": "function",
    "text": "len = getconenamelen{T1}(task:: MSKtask,i:: T1)\nlen = getconenamelen(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the cone.\nlen :: Int32. Returns the length of the indicated name.\n\nObtains the length of the name of a cone.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconname",
    "page": "API Reference",
    "title": "Mosek.getconname",
    "category": "function",
    "text": "name = getconname{T1}(task:: MSKtask,i:: T1)\nname = getconname(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the constraint.\nname :: AbstractString. The required name.\n\nObtains the name of a constraint.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconnameindex",
    "page": "API Reference",
    "title": "Mosek.getconnameindex",
    "category": "function",
    "text": "(asgn,index) = getconnameindex(task_:: MSKtask,somename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nsomename :: String. The name which should be checked.\nasgn :: Int32. Is non-zero if the name somename is assigned to some constraint.\nindex :: Int32. If the name somename is assigned to a constraint, then return the index of the constraint.\n\nChecks whether the name somename has been assigned to any constraint. If so, the index of the constraint is reported.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getconnamelen",
    "page": "API Reference",
    "title": "Mosek.getconnamelen",
    "category": "function",
    "text": "len = getconnamelen{T1}(task:: MSKtask,i:: T1)\nlen = getconnamelen(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the constraint.\nlen :: Int32. Returns the length of the indicated name.\n\nObtains the length of the name of a constraint.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getcslice",
    "page": "API Reference",
    "title": "Mosek.getcslice",
    "category": "function",
    "text": "c = getcslice{T1,T2}(task:: MSKtask,first:: T1,last:: T2)\nc = getcslice(task_:: MSKtask,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nc :: Vector{Float64}. Linear terms of the requested slice of the objective as a dense vector.\n\nObtains a sequence of elements in c.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdimbarvarj",
    "page": "API Reference",
    "title": "Mosek.getdimbarvarj",
    "category": "function",
    "text": "dimbarvarj = getdimbarvarj{T1}(task:: MSKtask,j:: T1)\ndimbarvarj = getdimbarvarj(task_:: MSKtask,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the semidefinite variable whose dimension is requested.\ndimbarvarj :: Int32. The dimension of the j\'th semidefinite variable.\n\nObtains the dimension of a symmetric matrix variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdouinf",
    "page": "API Reference",
    "title": "Mosek.getdouinf",
    "category": "function",
    "text": "dvalue = getdouinf(task_:: MSKtask,whichdinf_:: Dinfitem)\n\ntask :: MSKtask. An optimization task.\nwhichdinf :: Dinfitem. Specifies a double information item.\ndvalue :: Float64. The value of the required double information item.\n\nObtains a double information item from the task information database.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdouparam",
    "page": "API Reference",
    "title": "Mosek.getdouparam",
    "category": "function",
    "text": "parvalue = getdouparam(task_:: MSKtask,param_:: Dparam)\n\ntask :: MSKtask. An optimization task.\nparam :: Dparam. Which parameter.\nparvalue :: Float64. Parameter value.\n\nObtains the value of a double parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdualobj",
    "page": "API Reference",
    "title": "Mosek.getdualobj",
    "category": "function",
    "text": "dualobj = getdualobj(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\ndualobj :: Float64. Objective value corresponding to the dual solution.\n\nComputes the dual objective value associated with the solution. Note that if the solution is a primal infeasibility certificate, then the fixed term in the objective value is not included. \n\nMoreover, since there is no dual solution associated with an integer solution, an error will be reported if the dual objective value is requested for the integer solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdualsolutionnorms",
    "page": "API Reference",
    "title": "Mosek.getdualsolutionnorms",
    "category": "function",
    "text": "(nrmy,nrmslc,nrmsuc,nrmslx,nrmsux,nrmsnx,nrmbars) = getdualsolutionnorms(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nnrmy :: Float64. The norm of the y vector.\nnrmslc :: Float64. The norm of the slc vector.\nnrmsuc :: Float64. The norm of the suc vector.\nnrmslx :: Float64. The norm of the slx vector.\nnrmsux :: Float64. The norm of the sux vector.\nnrmsnx :: Float64. The norm of the snx vector.\nnrmbars :: Float64. The norm of the bars vector.\n\nCompute norms of the dual solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdviolbarvar",
    "page": "API Reference",
    "title": "Mosek.getdviolbarvar",
    "category": "function",
    "text": "viol = getdviolbarvar{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getdviolbarvar(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of barx variables.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nLet (bar S_j)^* be the value of variable bar S_j for the specified solution.  Then the dual violation of the solution associated with variable bar S_j is given by\n\n max(-lambda_min(bar S_j) 00)\n\nBoth when the solution is a certificate of primal infeasibility and when it is dual feasible solution the violation should be small.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdviolcon",
    "page": "API Reference",
    "title": "Mosek.getdviolcon",
    "category": "function",
    "text": "viol = getdviolcon{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getdviolcon(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of constraints.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nThe violation of the dual solution associated with the i-th constraint is computed as follows\n\n max( rho( (s_l^c)_i^*(b_l^c)_i ) rho( (s_u^c)_i^* -(b_u^c)_i ) -y_i+(s_l^c)_i^*-(s_u^c)_i^* )\n\nwhere\n\nrho(xl) =\n  left\n    beginarrayll\n       -x    l  -infty  \n       x   mboxotherwise\n    endarray\n  right\n\nBoth when the solution is a certificate of primal infeasibility or it is a dual feasible solution the violation should be small.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdviolcones",
    "page": "API Reference",
    "title": "Mosek.getdviolcones",
    "category": "function",
    "text": "viol = getdviolcones{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getdviolcones(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of conic constraints.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nLet (s_n^x)^* be the value of variable (s_n^x) for the specified solution. For simplicity let us assume that s_n^x is a member of a quadratic cone, then the violation is computed as follows\n\nleft\n  beginarrayll\n    max(0(s_n^x_2n^*-(s_n^x)_1^*)  sqrt2  (s_n^x)^* geq -(s_n^x)_2n^* \n    (s_n^x)^*  mboxotherwise\n  endarray\nright\n\nBoth when the solution is a certificate of primal infeasibility or when it is a dual feasible solution the violation should be small.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getdviolvar",
    "page": "API Reference",
    "title": "Mosek.getdviolvar",
    "category": "function",
    "text": "viol = getdviolvar{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getdviolvar(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of x variables.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nThe violation of the dual solution associated with the j-th variable is computed as follows\n\n max left(rho((s_l^x)_j^*(b_l^x)_j) rho((s_u^x)_j^*-(b_u^x)_j) sum_i=1^+1numcon a_ij y_i+(s_l^x)_j^*-(s_u^x)_j^* - tau c_j right)\n\nwhere\n\nrho(xl) =\n  left\n    beginarrayll\n       -x    l  -infty  \n       x   mboxotherwise\n    endarray\n  right\n\nand tau=0 if the solution is a certificate of primal infeasibility and tau=1 otherwise. The formula for computing the violation is only shown for the linear case but is generalized appropriately for the more general problems. Both when the solution is a certificate of primal infeasibility or when it is a dual feasible solution the violation should be small.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getinfeasiblesubproblem",
    "page": "API Reference",
    "title": "Mosek.getinfeasiblesubproblem",
    "category": "function",
    "text": "inftask = getinfeasiblesubproblem(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Which solution to use when determining the infeasible subproblem.\ninftask :: MSKtask. A new task containing the infeasible subproblem.\n\nGiven the solution is a certificate of primal or dual infeasibility then a primal or dual infeasible subproblem is obtained respectively.  The subproblem tends to be much smaller than the original problem and hence it is easier to locate the infeasibility inspecting the subproblem than the original problem.\n\nFor the procedure to be useful it is important to assign meaningful names to constraints, variables etc. in the original task because those names will be duplicated in the subproblem.\n\nThe function is only applicable to linear and conic quadratic optimization problems.\n\nFor more information see Section :ref:doc.shared.feas_repair.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getinfname",
    "page": "API Reference",
    "title": "Mosek.getinfname",
    "category": "function",
    "text": "infname = getinfname{T2}(task:: MSKtask,inftype:: Inftype,whichinf:: T2)\ninfname = getinfname(task_:: MSKtask,inftype_:: Inftype,whichinf_:: Int32)\n\ntask :: MSKtask. An optimization task.\ninftype :: Inftype. Type of the information item.\nwhichinf :: Int32. An information item.\ninfname :: AbstractString. Name of the information item.\n\nObtains the name of an information item.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getintinf",
    "page": "API Reference",
    "title": "Mosek.getintinf",
    "category": "function",
    "text": "ivalue = getintinf(task_:: MSKtask,whichiinf_:: Iinfitem)\n\ntask :: MSKtask. An optimization task.\nwhichiinf :: Iinfitem. Specifies an integer information item.\nivalue :: Int32. The value of the required integer information item.\n\nObtains an integer information item from the task information database.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getintparam",
    "page": "API Reference",
    "title": "Mosek.getintparam",
    "category": "function",
    "text": "parvalue = getintparam(task_:: MSKtask,param_:: Iparam)\n\ntask :: MSKtask. An optimization task.\nparam :: Iparam. Which parameter.\nparvalue :: Int32. Parameter value.\n\nObtains the value of an integer parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getlenbarvarj",
    "page": "API Reference",
    "title": "Mosek.getlenbarvarj",
    "category": "function",
    "text": "lenbarvarj = getlenbarvarj{T1}(task:: MSKtask,j:: T1)\nlenbarvarj = getlenbarvarj(task_:: MSKtask,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the semidefinite variable whose length if requested.\nlenbarvarj :: Int64. Number of scalar elements in the lower triangular part of the semidefinite variable.\n\nObtains the length of the j-th semidefinite variable i.e. the number of elements in the lower triangular part.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getlintinf",
    "page": "API Reference",
    "title": "Mosek.getlintinf",
    "category": "function",
    "text": "ivalue = getlintinf(task_:: MSKtask,whichliinf_:: Liinfitem)\n\ntask :: MSKtask. An optimization task.\nwhichliinf :: Liinfitem. Specifies a long information item.\nivalue :: Int64. The value of the required long integer information item.\n\nObtains a long integer information item from the task information database.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getmaxnumanz",
    "page": "API Reference",
    "title": "Mosek.getmaxnumanz",
    "category": "function",
    "text": "maxnumanz = getmaxnumanz(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nmaxnumanz :: Int64. Number of preallocated non-zero linear matrix elements.\n\nObtains number of preallocated non-zeros in A. When this number of non-zeros is reached MOSEK will automatically allocate more space for A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getmaxnumbarvar",
    "page": "API Reference",
    "title": "Mosek.getmaxnumbarvar",
    "category": "function",
    "text": "maxnumbarvar = getmaxnumbarvar(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nmaxnumbarvar :: Int32. Maximum number of symmetric matrix variables for which space is currently preallocated.\n\nObtains maximum number of symmetric matrix variables for which space is currently preallocated.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getmaxnumcon",
    "page": "API Reference",
    "title": "Mosek.getmaxnumcon",
    "category": "function",
    "text": "maxnumcon = getmaxnumcon(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nmaxnumcon :: Int32. Number of preallocated constraints in the optimization task.\n\nObtains the number of preallocated constraints in the optimization task. When this number of constraints is reached MOSEK will automatically allocate more space for constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getmaxnumcone",
    "page": "API Reference",
    "title": "Mosek.getmaxnumcone",
    "category": "function",
    "text": "maxnumcone = getmaxnumcone(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nmaxnumcone :: Int32. Number of preallocated conic constraints in the optimization task.\n\nObtains the number of preallocated cones in the optimization task. When this number of cones is reached MOSEK will automatically allocate space for more cones.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getmaxnumqnz",
    "page": "API Reference",
    "title": "Mosek.getmaxnumqnz",
    "category": "function",
    "text": "maxnumqnz = getmaxnumqnz(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nmaxnumqnz :: Int64. Number of non-zero elements preallocated in quadratic coefficient matrices.\n\nObtains the number of preallocated non-zeros for Q (both objective and constraints). When this number of non-zeros is reached MOSEK will automatically allocate more space for Q.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getmaxnumvar",
    "page": "API Reference",
    "title": "Mosek.getmaxnumvar",
    "category": "function",
    "text": "maxnumvar = getmaxnumvar(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nmaxnumvar :: Int32. Number of preallocated variables in the optimization task.\n\nObtains the number of preallocated variables in the optimization task. When this number of variables is reached MOSEK will automatically allocate more space for variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getmemusage",
    "page": "API Reference",
    "title": "Mosek.getmemusage",
    "category": "function",
    "text": "(meminuse,maxmemuse) = getmemusage(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nmeminuse :: Int64. Amount of memory currently used by the task.\nmaxmemuse :: Int64. Maximum amount of memory used by the task until now.\n\nObtains information about the amount of memory used by a task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnadouinf",
    "page": "API Reference",
    "title": "Mosek.getnadouinf",
    "category": "function",
    "text": "dvalue = getnadouinf(task_:: MSKtask,infitemname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\ninfitemname :: String. The name of a double information item.\ndvalue :: Float64. The value of the required double information item.\n\nObtains a named double information item from task information database.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnadouparam",
    "page": "API Reference",
    "title": "Mosek.getnadouparam",
    "category": "function",
    "text": "parvalue = getnadouparam(task_:: MSKtask,paramname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparamname :: String. Name of a parameter.\nparvalue :: Float64. Parameter value.\n\nObtains the value of a named double parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnaintinf",
    "page": "API Reference",
    "title": "Mosek.getnaintinf",
    "category": "function",
    "text": "ivalue = getnaintinf(task_:: MSKtask,infitemname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\ninfitemname :: String. The name of an integer information item.\nivalue :: Int32. The value of the required integer information item.\n\nObtains a named integer information item from the task information database.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnaintparam",
    "page": "API Reference",
    "title": "Mosek.getnaintparam",
    "category": "function",
    "text": "parvalue = getnaintparam(task_:: MSKtask,paramname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparamname :: String. Name of a parameter.\nparvalue :: Int32. Parameter value.\n\nObtains the value of a named integer parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnastrparam",
    "page": "API Reference",
    "title": "Mosek.getnastrparam",
    "category": "function",
    "text": "(len,parvalue) = getnastrparam{T2}(task:: MSKtask,paramname:: AbstractString,sizeparamname:: T2)\n(len,parvalue) = getnastrparam(task_:: MSKtask,paramname_:: AbstractString,sizeparamname_:: Int32)\n\ntask :: MSKtask. An optimization task.\nparamname :: String. Name of a parameter.\nsizeparamname :: Int32. Size of the name buffer.\nlen :: Int32. Returns the length of the parameter value.\nparvalue :: AbstractString. Parameter value.\n\nObtains the value of a named string parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumanz",
    "page": "API Reference",
    "title": "Mosek.getnumanz",
    "category": "function",
    "text": "numanz = getnumanz(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumanz :: Int32. Number of non-zero elements in the linear constraint matrix.\n\nObtains the number of non-zeros in A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumanz64",
    "page": "API Reference",
    "title": "Mosek.getnumanz64",
    "category": "function",
    "text": "numanz = getnumanz64(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumanz :: Int64. Number of non-zero elements in the linear constraint matrix.\n\nObtains the number of non-zeros in A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumbarablocktriplets",
    "page": "API Reference",
    "title": "Mosek.getnumbarablocktriplets",
    "category": "function",
    "text": "num = getnumbarablocktriplets(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnum :: Int64. An upper bound on the number of elements in the block triplet form of bara.\n\nObtains an upper bound on the number of elements in the block triplet form of bar A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumbaranz",
    "page": "API Reference",
    "title": "Mosek.getnumbaranz",
    "category": "function",
    "text": "nz = getnumbaranz(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnz :: Int64. The number of nonzero block elements in barA.\n\nGet the number of nonzero elements in bar A.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumbarcblocktriplets",
    "page": "API Reference",
    "title": "Mosek.getnumbarcblocktriplets",
    "category": "function",
    "text": "num = getnumbarcblocktriplets(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnum :: Int64. An upper bound on the number of elements in the block triplet form of barc.\n\nObtains an upper bound on the number of elements in the block triplet form of bar C.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumbarcnz",
    "page": "API Reference",
    "title": "Mosek.getnumbarcnz",
    "category": "function",
    "text": "nz = getnumbarcnz(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnz :: Int64. The number of nonzero elements in barc.\n\nObtains the number of nonzero elements in bar C.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumbarvar",
    "page": "API Reference",
    "title": "Mosek.getnumbarvar",
    "category": "function",
    "text": "numbarvar = getnumbarvar(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumbarvar :: Int32. Number of semidefinite variables in the problem.\n\nObtains the number of semidefinite variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumcon",
    "page": "API Reference",
    "title": "Mosek.getnumcon",
    "category": "function",
    "text": "numcon = getnumcon(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumcon :: Int32. Number of constraints.\n\nObtains the number of constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumcone",
    "page": "API Reference",
    "title": "Mosek.getnumcone",
    "category": "function",
    "text": "numcone = getnumcone(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumcone :: Int32. Number of conic constraints.\n\nObtains the number of cones.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumconemem",
    "page": "API Reference",
    "title": "Mosek.getnumconemem",
    "category": "function",
    "text": "nummem = getnumconemem{T1}(task:: MSKtask,k:: T1)\nnummem = getnumconemem(task_:: MSKtask,k_:: Int32)\n\ntask :: MSKtask. An optimization task.\nk :: Int32. Index of the cone.\nnummem :: Int32. Number of member variables in the cone.\n\nObtains the number of members in a cone.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumintvar",
    "page": "API Reference",
    "title": "Mosek.getnumintvar",
    "category": "function",
    "text": "numintvar = getnumintvar(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumintvar :: Int32. Number of integer variables.\n\nObtains the number of integer-constrained variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumparam",
    "page": "API Reference",
    "title": "Mosek.getnumparam",
    "category": "function",
    "text": "numparam = getnumparam(task_:: MSKtask,partype_:: Parametertype)\n\ntask :: MSKtask. An optimization task.\npartype :: Parametertype. Parameter type.\nnumparam :: Int32. Returns the number of parameters of the requested type.\n\nObtains the number of parameters of a given type.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumqconknz",
    "page": "API Reference",
    "title": "Mosek.getnumqconknz",
    "category": "function",
    "text": "numqcnz = getnumqconknz{T1}(task:: MSKtask,k:: T1)\nnumqcnz = getnumqconknz(task_:: MSKtask,k_:: Int32)\n\ntask :: MSKtask. An optimization task.\nk :: Int32. Index of the constraint for which the number quadratic terms should be obtained.\nnumqcnz :: Int64. Number of quadratic terms.\n\nObtains the number of non-zero quadratic terms in a constraint.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumqobjnz",
    "page": "API Reference",
    "title": "Mosek.getnumqobjnz",
    "category": "function",
    "text": "numqonz = getnumqobjnz(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumqonz :: Int64. Number of non-zero elements in the quadratic objective terms.\n\nObtains the number of non-zero quadratic terms in the objective.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumsymmat",
    "page": "API Reference",
    "title": "Mosek.getnumsymmat",
    "category": "function",
    "text": "num = getnumsymmat(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnum :: Int64. The number of symmetric sparse matrices.\n\nObtains the number of symmetric matrices stored in the vector E.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getnumvar",
    "page": "API Reference",
    "title": "Mosek.getnumvar",
    "category": "function",
    "text": "numvar = getnumvar(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumvar :: Int32. Number of variables.\n\nObtains the number of variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getobjname",
    "page": "API Reference",
    "title": "Mosek.getobjname",
    "category": "function",
    "text": "objname = getobjname(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nobjname :: AbstractString. Assigned the objective name.\n\nObtains the name assigned to the objective function.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getobjnamelen",
    "page": "API Reference",
    "title": "Mosek.getobjnamelen",
    "category": "function",
    "text": "len = getobjnamelen(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nlen :: Int32. Assigned the length of the objective name.\n\nObtains the length of the name assigned to the objective function.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getobjsense",
    "page": "API Reference",
    "title": "Mosek.getobjsense",
    "category": "function",
    "text": "sense = getobjsense(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nsense :: Objsense. The returned objective sense.\n\nGets the objective sense of the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getparamname",
    "page": "API Reference",
    "title": "Mosek.getparamname",
    "category": "function",
    "text": "parname = getparamname{T2}(task:: MSKtask,partype:: Parametertype,param:: T2)\nparname = getparamname(task_:: MSKtask,partype_:: Parametertype,param_:: Int32)\n\ntask :: MSKtask. An optimization task.\npartype :: Parametertype. Parameter type.\nparam :: Int32. Which parameter.\nparname :: AbstractString. Parameter name.\n\nObtains the name for a parameter param of type partype.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getprimalobj",
    "page": "API Reference",
    "title": "Mosek.getprimalobj",
    "category": "function",
    "text": "primalobj = getprimalobj(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nprimalobj :: Float64. Objective value corresponding to the primal solution.\n\nComputes the primal objective value for the desired solution. Note that if the solution is an infeasibility certificate, then the fixed term in the objective is not included.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getprimalsolutionnorms",
    "page": "API Reference",
    "title": "Mosek.getprimalsolutionnorms",
    "category": "function",
    "text": "(nrmxc,nrmxx,nrmbarx) = getprimalsolutionnorms(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nnrmxc :: Float64. The norm of the xc vector.\nnrmxx :: Float64. The norm of the xx vector.\nnrmbarx :: Float64. The norm of the barX vector.\n\nCompute norms of the primal solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getprobtype",
    "page": "API Reference",
    "title": "Mosek.getprobtype",
    "category": "function",
    "text": "probtype = getprobtype(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nprobtype :: Problemtype. The problem type.\n\nObtains the problem type.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getprosta",
    "page": "API Reference",
    "title": "Mosek.getprosta",
    "category": "function",
    "text": "prosta = getprosta(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nprosta :: Prosta. Problem status.\n\nObtains the problem status.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getpviolbarvar",
    "page": "API Reference",
    "title": "Mosek.getpviolbarvar",
    "category": "function",
    "text": "viol = getpviolbarvar{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getpviolbarvar(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of barX variables.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nComputes the primal solution violation for a set of semidefinite variables.  Let (bar X_j)^* be the value of the variable bar X_j for the specified solution.  Then the primal violation of the solution associated with variable bar X_j is given by\n\n max(-lambda_min(bar X_j) 00)\n\nBoth when the solution is a certificate of dual infeasibility or when it is primal feasible the violation should be small.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getpviolcon",
    "page": "API Reference",
    "title": "Mosek.getpviolcon",
    "category": "function",
    "text": "viol = getpviolcon{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getpviolcon(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of constraints.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nComputes the primal solution violation for a set of constraints.  The primal violation of the solution associated with the i-th constraint is given by\n\n max(tau l_i^c - (x_i^c)^* (x_i^c)^* - tau u_i^c) sum_j=1^+1numvar a_ij x_j^* - x_i^c)\n\nwhere tau=0 if the solution is a certificate of dual infeasibility and tau=1 otherwise. Both when the solution is a certificate of dual infeasibility and when it is primal feasible the violation should be small. The above formula applies for the linear case but is appropriately generalized in other cases.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getpviolcones",
    "page": "API Reference",
    "title": "Mosek.getpviolcones",
    "category": "function",
    "text": "viol = getpviolcones{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getpviolcones(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of conic constraints.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nComputes the primal solution violation for a set of conic constraints.  Let x^* be the value of the variable x for the specified solution. For simplicity let us assume that x is a member of a quadratic cone, then the violation is computed as follows\n\nleft\n  beginarrayll\n    max(0x_2n-x_1)  sqrt2  x_1 geq -x_2n \n    x  mboxotherwise\n  endarray\nright\n\nBoth when the solution is a certificate of dual infeasibility or when it is primal feasible the violation should be small.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getpviolvar",
    "page": "API Reference",
    "title": "Mosek.getpviolvar",
    "category": "function",
    "text": "viol = getpviolvar{T2}(task:: MSKtask,whichsol:: Soltype,sub:: Vector{T2})\nviol = getpviolvar(task_:: MSKtask,whichsol_:: Soltype,sub_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsub :: Vector{Int32}. An array of indexes of x variables.\nviol :: Vector{Float64}. List of violations corresponding to sub.\n\nComputes the primal solution violation associated to a set of variables.  Let x_j^* be the value of x_j for the specified solution.  Then the primal violation of the solution associated with variable x_j is given by\n\n max( tau l_j^x - x_j^* x_j^* - tau u_j^x 0)\n\nwhere tau=0 if the solution is a certificate of dual infeasibility and tau=1 otherwise. Both when the solution is a certificate of dual infeasibility and when it is primal feasible the violation should be small.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getqconk",
    "page": "API Reference",
    "title": "Mosek.getqconk",
    "category": "function",
    "text": "(numqcnz,qcsubi,qcsubj,qcval) = getqconk{T1}(task:: MSKtask,k:: T1)\n(numqcnz,qcsubi,qcsubj,qcval) = getqconk(task_:: MSKtask,k_:: Int32)\n\ntask :: MSKtask. An optimization task.\nk :: Int32. Which constraint.\nnumqcnz :: Int64. Number of quadratic terms.\nqcsubi :: Vector{Int32}. Row subscripts for quadratic constraint matrix.\nqcsubj :: Vector{Int32}. Column subscripts for quadratic constraint matrix.\nqcval :: Vector{Float64}. Quadratic constraint coefficient values.\n\nObtains all the quadratic terms in a constraint. The quadratic terms are stored sequentially in qcsubi, qcsubj, and qcval.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getqobj",
    "page": "API Reference",
    "title": "Mosek.getqobj",
    "category": "function",
    "text": "(numqonz,qosubi,qosubj,qoval) = getqobj(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nnumqonz :: Int64. Number of non-zero elements in the quadratic objective terms.\nqosubi :: Vector{Int32}. Row subscripts for quadratic objective coefficients.\nqosubj :: Vector{Int32}. Column subscripts for quadratic objective coefficients.\nqoval :: Vector{Float64}. Quadratic objective coefficient values.\n\nObtains the quadratic terms in the objective. The required quadratic terms are stored sequentially in qosubi, qosubj, and qoval.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getqobjij",
    "page": "API Reference",
    "title": "Mosek.getqobjij",
    "category": "function",
    "text": "qoij = getqobjij{T1,T2}(task:: MSKtask,i:: T1,j:: T2)\nqoij = getqobjij(task_:: MSKtask,i_:: Int32,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Row index of the coefficient.\nj :: Int32. Column index of coefficient.\nqoij :: Float64. The required coefficient.\n\nObtains one coefficient q_ij^o in the quadratic term of the objective.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getreducedcosts",
    "page": "API Reference",
    "title": "Mosek.getreducedcosts",
    "category": "function",
    "text": "redcosts = getreducedcosts{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nredcosts = getreducedcosts(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. The index of the first variable in the sequence.\nlast :: Int32. The index of the last variable in the sequence plus 1.\nredcosts :: Vector{Float64}. Returns the requested reduced costs.\n\nComputes the reduced costs for a slice of variables and returns them in the array redcosts i.e.\n\nlabel ais-eq-redcost\n\nmathttredcostsj-mathttfirst = (s_l^x)_j-(s_u^x)_j j=mathttfirstldotsmathttlast-1\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getskc",
    "page": "API Reference",
    "title": "Mosek.getskc",
    "category": "function",
    "text": "skc = getskc(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nskc :: Vector{Stakey}. Status keys for the constraints.\n\nObtains the status keys for the constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getskcslice",
    "page": "API Reference",
    "title": "Mosek.getskcslice",
    "category": "function",
    "text": "skc = getskcslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nskc = getskcslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nskc :: Vector{Stakey}. Status keys for the constraints.\n\nObtains the status keys for a slice of the constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getskx",
    "page": "API Reference",
    "title": "Mosek.getskx",
    "category": "function",
    "text": "skx = getskx(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nskx :: Vector{Stakey}. Status keys for the variables.\n\nObtains the status keys for the scalar variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getskxslice",
    "page": "API Reference",
    "title": "Mosek.getskxslice",
    "category": "function",
    "text": "skx = getskxslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nskx = getskxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nskx :: Vector{Stakey}. Status keys for the variables.\n\nObtains the status keys for a slice of the scalar variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getslc",
    "page": "API Reference",
    "title": "Mosek.getslc",
    "category": "function",
    "text": "slc = getslc(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nslc :: Vector{Float64}. Dual variables corresponding to the lower bounds on the constraints.\n\nObtains the s_l^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getslcslice",
    "page": "API Reference",
    "title": "Mosek.getslcslice",
    "category": "function",
    "text": "slc = getslcslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nslc = getslcslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nslc :: Vector{Float64}. Dual variables corresponding to the lower bounds on the constraints.\n\nObtains a slice of the s_l^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getslx",
    "page": "API Reference",
    "title": "Mosek.getslx",
    "category": "function",
    "text": "slx = getslx(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nslx :: Vector{Float64}. Dual variables corresponding to the lower bounds on the variables.\n\nObtains the s_l^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getslxslice",
    "page": "API Reference",
    "title": "Mosek.getslxslice",
    "category": "function",
    "text": "slx = getslxslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nslx = getslxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nslx :: Vector{Float64}. Dual variables corresponding to the lower bounds on the variables.\n\nObtains a slice of the s_l^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsnx",
    "page": "API Reference",
    "title": "Mosek.getsnx",
    "category": "function",
    "text": "snx = getsnx(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsnx :: Vector{Float64}. Dual variables corresponding to the conic constraints on the variables.\n\nObtains the s_n^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsnxslice",
    "page": "API Reference",
    "title": "Mosek.getsnxslice",
    "category": "function",
    "text": "snx = getsnxslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nsnx = getsnxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nsnx :: Vector{Float64}. Dual variables corresponding to the conic constraints on the variables.\n\nObtains a slice of the s_n^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsolsta",
    "page": "API Reference",
    "title": "Mosek.getsolsta",
    "category": "function",
    "text": "solsta = getsolsta(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsolsta :: Solsta. Solution status.\n\nObtains the solution status.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsolution",
    "page": "API Reference",
    "title": "Mosek.getsolution",
    "category": "function",
    "text": "(prosta,solsta,skc,skx,skn,xc,xx,y,slc,suc,slx,sux,snx) = getsolution(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nprosta :: Prosta. Problem status.\nsolsta :: Solsta. Solution status.\nskc :: Vector{Stakey}. Status keys for the constraints.\nskx :: Vector{Stakey}. Status keys for the variables.\nskn :: Vector{Stakey}. Status keys for the conic constraints.\nxc :: Vector{Float64}. Primal constraint solution.\nxx :: Vector{Float64}. Primal variable solution.\ny :: Vector{Float64}. Vector of dual variables corresponding to the constraints.\nslc :: Vector{Float64}. Dual variables corresponding to the lower bounds on the constraints.\nsuc :: Vector{Float64}. Dual variables corresponding to the upper bounds on the constraints.\nslx :: Vector{Float64}. Dual variables corresponding to the lower bounds on the variables.\nsux :: Vector{Float64}. Dual variables corresponding to the upper bounds on the variables.\nsnx :: Vector{Float64}. Dual variables corresponding to the conic constraints on the variables.\n\nObtains the complete solution.\n\nConsider the case of linear programming. The primal problem is given by\n\nbeginarraylccccl\n  mboxminimize                           c^T x+c^f               \n  mboxsubject to   l^c  leq  A x        leq  u^c     \n    l^x  leq  x          leq  u^x   \nendarray\n\nand the corresponding dual problem is\n\nbeginarraylccl\n  mboxmaximize    (l^c)^T s_l^c - (u^c)^T s_u^c           \n   + (l^x)^T s_l^x - (u^x)^T s_u^x + c^f   \n  mboxsubject to  A^T y + s_l^x - s_u^x                  =  c \n   -y    + s_l^c - s_u^c                  =  0 \n   s_l^cs_u^cs_l^xs_u^x geq 0              \nendarray\n\nA conic optimization problem has the same primal variables as in the linear case. Recall that the dual of a conic optimization problem is given by:\n\nbeginarraylccccc\n  mboxmaximize    (l^c)^T s_l^c - (u^c)^T s_u^c                   \n   +(l^x)^T s_l^x - (u^x)^T s_u^x + c^f            \n  mboxsubject to  A^T y + s_l^x - s_u^x + s_n^x          =     c \n   -y + s_l^c - s_u^c                     =     0 \n   s_l^cs_u^cs_l^xs_u^x                geq  0 \n   s_n^x in mathcalK^*                                  \nendarray\n\nThe mapping between variables and arguments to the function is as follows:\n\nxx : Corresponds to variable x (also denoted x^x).\nxc : Corresponds to x^c=Ax.\ny  : Corresponds to variable y.\nslc: Corresponds to variable s_l^c.\nsuc: Corresponds to variable s_u^c.\nslx: Corresponds to variable s_l^x.\nsux: Corresponds to variable s_u^x.\nsnx: Corresponds to variable s_n^x.\n\nThe meaning of the values returned by this function depend on the solution status returned in the argument solsta. The most important possible values  of solsta are:\n\nMSK_SOL_STA_OPTIMAL : An optimal solution satisfying the optimality criteria for continuous problems is returned.\nMSK_SOL_STA_INTEGER_OPTIMAL : An optimal solution satisfying the optimality criteria for integer problems is returned.\nMSK_SOL_STA_PRIM_FEAS : A solution satisfying the feasibility criteria.\nMSK_SOL_STA_PRIM_INFEAS_CER : A primal certificate of infeasibility is returned.\nMSK_SOL_STA_DUAL_INFEAS_CER : A dual certificate of infeasibility is returned.\n\nIn order to retrieve the primal and dual values of semidefinite variables see Mosek.getbarxj and Mosek.getbarsj.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsolutioni",
    "page": "API Reference",
    "title": "Mosek.getsolutioni",
    "category": "function",
    "text": "(sk,x,sl,su,sn) = getsolutioni{T2}(task:: MSKtask,accmode:: Accmode,i:: T2,whichsol:: Soltype)\n(sk,x,sl,su,sn) = getsolutioni(task_:: MSKtask,accmode_:: Accmode,i_:: Int32,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines whether solution information for a constraint or for a variable is retrieved.\ni :: Int32. Index of the constraint or variable.\nwhichsol :: Soltype. Selects a solution.\nsk :: Stakey. Status key of the constraint of variable.\nx :: Float64. Solution value of the primal variable.\nsl :: Float64. Solution value of the dual variable associated with the lower bound.\nsu :: Float64. Solution value of the dual variable associated with the upper bound.\nsn :: Float64. Solution value of the dual variable associated with the cone constraint.\n\nObtains the primal and dual solution information for a single constraint or variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsolutioninfo",
    "page": "API Reference",
    "title": "Mosek.getsolutioninfo",
    "category": "function",
    "text": "(pobj,pviolcon,pviolvar,pviolbarvar,pviolcone,pviolitg,dobj,dviolcon,dviolvar,dviolbarvar,dviolcone) = getsolutioninfo(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\npobj :: Float64. The primal objective value.\npviolcon :: Float64. Maximal primal bound violation for a xc variable.\npviolvar :: Float64. Maximal primal bound violation for a xx variable.\npviolbarvar :: Float64. Maximal primal bound violation for a barx variable.\npviolcone :: Float64. Maximal primal violation of the solution with respect to the conic constraints.\npviolitg :: Float64. Maximal violation in the integer constraints.\ndobj :: Float64. Dual objective value.\ndviolcon :: Float64. Maximal dual bound violation for a xc variable.\ndviolvar :: Float64. Maximal dual bound violation for a xx variable.\ndviolbarvar :: Float64. Maximal dual bound violation for a bars variable.\ndviolcone :: Float64. Maximum violation of the dual solution in the dual conic constraints.\n\nObtains information about a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsolutionslice",
    "page": "API Reference",
    "title": "Mosek.getsolutionslice",
    "category": "function",
    "text": "values = getsolutionslice{T3,T4}(task:: MSKtask,whichsol:: Soltype,solitem:: Solitem,first:: T3,last:: T4)\nvalues = getsolutionslice(task_:: MSKtask,whichsol_:: Soltype,solitem_:: Solitem,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsolitem :: Solitem. Which part of the solution is required.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nvalues :: Vector{Float64}. The values of the requested solution elements.\n\nObtains a slice of one item from the solution. The format of the solution is exactly as in Mosek.getsolution. The parameter solitem determines which of the solution vectors should be returned.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsparsesymmat",
    "page": "API Reference",
    "title": "Mosek.getsparsesymmat",
    "category": "function",
    "text": "(subi,subj,valij) = getsparsesymmat{T1}(task:: MSKtask,idx:: T1)\n(subi,subj,valij) = getsparsesymmat(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. Index of the matrix to retrieve.\nsubi :: Vector{Int32}. Row subscripts of the matrix non-zero elements.\nsubj :: Vector{Int32}. Column subscripts of the matrix non-zero elements.\nvalij :: Vector{Float64}. Coefficients of the matrix non-zero elements.\n\nGet a single symmetric matrix from the matrix store.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getstrparam",
    "page": "API Reference",
    "title": "Mosek.getstrparam",
    "category": "function",
    "text": "(len,parvalue) = getstrparam(task_:: MSKtask,param_:: Sparam)\n\ntask :: MSKtask. An optimization task.\nparam :: Sparam. Which parameter.\nlen :: Int32. The length of the parameter value.\nparvalue :: AbstractString. If this is not a null pointer, the parameter value is stored here.\n\nObtains the value of a string parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getstrparamlen",
    "page": "API Reference",
    "title": "Mosek.getstrparamlen",
    "category": "function",
    "text": "len = getstrparamlen(task_:: MSKtask,param_:: Sparam)\n\ntask :: MSKtask. An optimization task.\nparam :: Sparam. Which parameter.\nlen :: Int32. The length of the parameter value.\n\nObtains the length of a string parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsuc",
    "page": "API Reference",
    "title": "Mosek.getsuc",
    "category": "function",
    "text": "suc = getsuc(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsuc :: Vector{Float64}. Dual variables corresponding to the upper bounds on the constraints.\n\nObtains the s_u^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsucslice",
    "page": "API Reference",
    "title": "Mosek.getsucslice",
    "category": "function",
    "text": "suc = getsucslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nsuc = getsucslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nsuc :: Vector{Float64}. Dual variables corresponding to the upper bounds on the constraints.\n\nObtains a slice of the s_u^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsux",
    "page": "API Reference",
    "title": "Mosek.getsux",
    "category": "function",
    "text": "sux = getsux(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsux :: Vector{Float64}. Dual variables corresponding to the upper bounds on the variables.\n\nObtains the s_u^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsuxslice",
    "page": "API Reference",
    "title": "Mosek.getsuxslice",
    "category": "function",
    "text": "sux = getsuxslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nsux = getsuxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nsux :: Vector{Float64}. Dual variables corresponding to the upper bounds on the variables.\n\nObtains a slice of the s_u^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getsymmatinfo",
    "page": "API Reference",
    "title": "Mosek.getsymmatinfo",
    "category": "function",
    "text": "(dim,nz,type) = getsymmatinfo{T1}(task:: MSKtask,idx:: T1)\n(dim,nz,type) = getsymmatinfo(task_:: MSKtask,idx_:: Int64)\n\ntask :: MSKtask. An optimization task.\nidx :: Int64. Index of the matrix for which information is requested.\ndim :: Int32. Returns the dimension of the requested matrix.\nnz :: Int64. Returns the number of non-zeros in the requested matrix.\ntype :: Symmattype. Returns the type of the requested matrix.\n\nMOSEK maintains a vector denoted by E of symmetric data matrices. This function makes it possible to obtain important information about a single matrix in E.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.gettaskname",
    "page": "API Reference",
    "title": "Mosek.gettaskname",
    "category": "function",
    "text": "taskname = gettaskname(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\ntaskname :: AbstractString. Returns the task name.\n\nObtains the name assigned to the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.gettasknamelen",
    "page": "API Reference",
    "title": "Mosek.gettasknamelen",
    "category": "function",
    "text": "len = gettasknamelen(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nlen :: Int32. Returns the length of the task name.\n\nObtains the length the task name.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getvarbound",
    "page": "API Reference",
    "title": "Mosek.getvarbound",
    "category": "function",
    "text": "(bk,bl,bu) = getvarbound{T1}(task:: MSKtask,i:: T1)\n(bk,bl,bu) = getvarbound(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the variable for which the bound information should be obtained.\nbk :: Boundkey. Bound keys.\nbl :: Float64. Values for lower bounds.\nbu :: Float64. Values for upper bounds.\n\nObtains bound information for one variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getvarboundslice",
    "page": "API Reference",
    "title": "Mosek.getvarboundslice",
    "category": "function",
    "text": "(bk,bl,bu) = getvarboundslice{T1,T2}(task:: MSKtask,first:: T1,last:: T2)\n(bk,bl,bu) = getvarboundslice(task_:: MSKtask,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nbk :: Vector{Boundkey}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nObtains bounds information for a slice of the variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getvarname",
    "page": "API Reference",
    "title": "Mosek.getvarname",
    "category": "function",
    "text": "name = getvarname{T1}(task:: MSKtask,j:: T1)\nname = getvarname(task_:: MSKtask,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of a variable.\nname :: AbstractString. Returns the required name.\n\nObtains the name of a variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getvarnameindex",
    "page": "API Reference",
    "title": "Mosek.getvarnameindex",
    "category": "function",
    "text": "(asgn,index) = getvarnameindex(task_:: MSKtask,somename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nsomename :: String. The name which should be checked.\nasgn :: Int32. Is non-zero if the name somename is assigned to a variable.\nindex :: Int32. If the name somename is assigned to a variable, then return the index of the variable.\n\nChecks whether the name somename has been assigned to any variable. If so, the index of the variable is reported.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getvarnamelen",
    "page": "API Reference",
    "title": "Mosek.getvarnamelen",
    "category": "function",
    "text": "len = getvarnamelen{T1}(task:: MSKtask,i:: T1)\nlen = getvarnamelen(task_:: MSKtask,i_:: Int32)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of a variable.\nlen :: Int32. Returns the length of the indicated name.\n\nObtains the length of the name of a variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getvartype",
    "page": "API Reference",
    "title": "Mosek.getvartype",
    "category": "function",
    "text": "vartype = getvartype{T1}(task:: MSKtask,j:: T1)\nvartype = getvartype(task_:: MSKtask,j_:: Int32)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable.\nvartype :: Variabletype. Variable type of variable index j.\n\nGets the variable type of one variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getvartypelist",
    "page": "API Reference",
    "title": "Mosek.getvartypelist",
    "category": "function",
    "text": "vartype = getvartypelist{T1}(task:: MSKtask,subj:: Vector{T1})\nvartype = getvartypelist(task_:: MSKtask,subj_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nsubj :: Vector{Int32}. A list of variable indexes.\nvartype :: Vector{Variabletype}. Returns the variables types corresponding the variable indexes requested.\n\nObtains the variable type of one or more variables. Upon return vartype[k] is the variable type of variable subj[k].\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getversion",
    "page": "API Reference",
    "title": "Mosek.getversion",
    "category": "function",
    "text": "(major,minor,build,revision) = getversion()\n\nmajor :: Int32. Major version number.\nminor :: Int32. Minor version number.\nbuild :: Int32. Build number.\nrevision :: Int32. Revision number.\n\nObtains MOSEK version information.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getxc",
    "page": "API Reference",
    "title": "Mosek.getxc",
    "category": "function",
    "text": "xc = getxc(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nxc :: Vector{Float64}. Primal constraint solution.\n\nObtains the x^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getxcslice",
    "page": "API Reference",
    "title": "Mosek.getxcslice",
    "category": "function",
    "text": "xc = getxcslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nxc = getxcslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nxc :: Vector{Float64}. Primal constraint solution.\n\nObtains a slice of the x^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getxx",
    "page": "API Reference",
    "title": "Mosek.getxx",
    "category": "function",
    "text": "xx = getxx(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nxx :: Vector{Float64}. Primal variable solution.\n\nObtains the x^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getxxslice",
    "page": "API Reference",
    "title": "Mosek.getxxslice",
    "category": "function",
    "text": "xx = getxxslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\nxx = getxxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nxx :: Vector{Float64}. Primal variable solution.\n\nObtains a slice of the x^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.gety",
    "page": "API Reference",
    "title": "Mosek.gety",
    "category": "function",
    "text": "y = gety(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\ny :: Vector{Float64}. Vector of dual variables corresponding to the constraints.\n\nObtains the y vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.getyslice",
    "page": "API Reference",
    "title": "Mosek.getyslice",
    "category": "function",
    "text": "y = getyslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3)\ny = getyslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\ny :: Vector{Float64}. Vector of dual variables corresponding to the constraints.\n\nObtains a slice of the y vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.initbasissolve",
    "page": "API Reference",
    "title": "Mosek.initbasissolve",
    "category": "function",
    "text": "basis = initbasissolve(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\nbasis :: Vector{Int32}. The array of basis indexes to use.\n\nPrepare a task for use with the Mosek.solvewithbasis function.\n\nThis function should be called\n\nimmediately before the first call to Mosek.solvewithbasis, and\nimmediately before any subsequent call to Mosek.solvewithbasis if the task has been modified. \n\nIf the basis is singular i.e. not invertible, then the error :msk:res:err_basis_singular is reported.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.inputdata",
    "page": "API Reference",
    "title": "Mosek.inputdata",
    "category": "function",
    "text": "inputdata{T1,T2,T3,T4,T5,T6,T7,T8,T10,T11,T13,T14}(task:: MSKtask,maxnumcon:: T1,maxnumvar:: T2,c:: Vector{T3},cfix:: T4,aptrb:: Vector{T5},aptre:: Vector{T6},asub:: Vector{T7},aval:: Vector{T8},bkc:: Vector{Boundkey},blc:: Vector{T10},buc:: Vector{T11},bkx:: Vector{Boundkey},blx:: Vector{T13},bux:: Vector{T14})\ninputdata{T1,T2,T3,T4,T10,T11,T13,T14}(task:: MSKtask,maxnumcon:: T1,maxnumvar:: T2,c:: Vector{T3},cfix:: T4,A:: SparseMatrixCSC{Float64},bkc:: Vector{Boundkey},blc:: Vector{T10},buc:: Vector{T11},bkx:: Vector{Boundkey},blx:: Vector{T13},bux:: Vector{T14})\ninputdata(task_:: MSKtask,maxnumcon_:: Int32,maxnumvar_:: Int32,c_:: Vector{Float64},cfix_:: Float64,aptrb_:: Vector{Int64},aptre_:: Vector{Int64},asub_:: Vector{Int32},aval_:: Vector{Float64},bkc_:: Vector{Boundkey},blc_:: Vector{Float64},buc_:: Vector{Float64},bkx_:: Vector{Boundkey},blx_:: Vector{Float64},bux_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nmaxnumcon :: Int32. Number of preallocated constraints in the optimization task.\nmaxnumvar :: Int32. Number of preallocated variables in the optimization task.\nc :: Vector{Float64}. Linear terms of the objective as a dense vector. The length is the number of variables.\ncfix :: Float64. Fixed term in the objective.\naptrb :: Vector{Int64}. Row or column start pointers.\naptre :: Vector{Int64}. Row or column end pointers.\nasub :: Vector{Int32}. Coefficient subscripts.\naval :: Vector{Float64}. Coefficient values.\nbkc :: Vector{Int32}. Bound keys for the constraints.\nblc :: Vector{Float64}. Lower bounds for the constraints.\nbuc :: Vector{Float64}. Upper bounds for the constraints.\nbkx :: Vector{Int32}. Bound keys for the variables.\nblx :: Vector{Float64}. Lower bounds for the variables.\nbux :: Vector{Float64}. Upper bounds for the variables.\nA :: SparseMatrixCSC{Float64}. Sparse matrix defining the column values\n\nInput the linear part of an optimization problem.\n\nThe non-zeros of A are inputted column-wise in the format described in Section :ref:doc.optimizer.cmo_rmo_matrix.\n\nFor an explained code example see Section :ref:doc.tutorial_lo and Section :ref:doc.optimizer.matrix_formats.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.isdouparname",
    "page": "API Reference",
    "title": "Mosek.isdouparname",
    "category": "function",
    "text": "param = isdouparname(task_:: MSKtask,parname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparname :: String. Parameter name.\nparam :: Dparam. Returns the parameter corresponding to the name, if one exists.\n\nChecks whether parname is a valid double parameter name.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.isintparname",
    "page": "API Reference",
    "title": "Mosek.isintparname",
    "category": "function",
    "text": "param = isintparname(task_:: MSKtask,parname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparname :: String. Parameter name.\nparam :: Iparam. Returns the parameter corresponding to the name, if one exists.\n\nChecks whether parname is a valid integer parameter name.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.isstrparname",
    "page": "API Reference",
    "title": "Mosek.isstrparname",
    "category": "function",
    "text": "param = isstrparname(task_:: MSKtask,parname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparname :: String. Parameter name.\nparam :: Sparam. Returns the parameter corresponding to the name, if one exists.\n\nChecks whether parname is a valid string parameter name.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.licensecleanup",
    "page": "API Reference",
    "title": "Mosek.licensecleanup",
    "category": "function",
    "text": "licensecleanup()\n\nStops all threads and deletes all handles used by the license system. If this function is called, it must be called as the last MOSEK API call. No other MOSEK API calls are valid after this.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.linkfiletostream",
    "page": "API Reference",
    "title": "Mosek.linkfiletostream",
    "category": "function",
    "text": "linkfiletostream{T3}(task:: MSKtask,whichstream:: Streamtype,filename:: AbstractString,append:: T3)\nlinkfiletostream(task_:: MSKtask,whichstream_:: Streamtype,filename_:: AbstractString,append_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\nfilename :: String. A valid file name.\nappend :: Int32. If this argument is 0 the output file will be overwritten, otherwise it will be appended to.\n\nDirects all output from a task stream whichstream to a file filename.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.onesolutionsummary",
    "page": "API Reference",
    "title": "Mosek.onesolutionsummary",
    "category": "function",
    "text": "onesolutionsummary(task_:: MSKtask,whichstream_:: Streamtype,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\nwhichsol :: Soltype. Selects a solution.\n\nPrints a short summary of a specified solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.optimize",
    "page": "API Reference",
    "title": "Mosek.optimize",
    "category": "function",
    "text": "trmcode = optimize(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\ntrmcode :: Rescode. Is either OK or a termination response code.\n\nCalls the optimizer. Depending on the problem type and the selected optimizer this will call one of the optimizers in MOSEK. By default the interior point optimizer will be selected for continuous problems.  The optimizer may be selected manually by setting the parameter MSK_IPAR_OPTIMIZER`.\n\n.. msk_only:: c\n\nThis function is equivalent to Mosek.optimize except for the handling of return values. This function returns errors on the left hand side. Warnings are not returned and termination codes are returned through the separate argument trmcode.\n\n.. msk_only:: java and dotnet and python\n\nThis function throws an exception if an error has occurred during the optimization, e.g the optimizer has run out of memory. Moreover it provides a termination code, relaying information about the conditions under which the optimizer terminated. For example MSK_RES_TRM_MAX_ITERATIONS indicates that the optimizer finished because it reached the maximum number of iterations specified by the user.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.optimizersummary",
    "page": "API Reference",
    "title": "Mosek.optimizersummary",
    "category": "function",
    "text": "optimizersummary(task_:: MSKtask,whichstream_:: Streamtype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\n\nPrints a short summary with optimizer statistics from last optimization.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.primalrepair",
    "page": "API Reference",
    "title": "Mosek.primalrepair",
    "category": "function",
    "text": "primalrepair{T1,T2,T3,T4}(task:: MSKtask,wlc:: Vector{T1},wuc:: Vector{T2},wlx:: Vector{T3},wux:: Vector{T4})\nprimalrepair(task_:: MSKtask,wlc_:: Vector{Float64},wuc_:: Vector{Float64},wlx_:: Vector{Float64},wux_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwlc :: Vector{Float64}. Weights associated with relaxing lower bounds on the constraints.\nwuc :: Vector{Float64}. Weights associated with relaxing the upper bound on the constraints.\nwlx :: Vector{Float64}. Weights associated with relaxing the lower bounds of the variables.\nwux :: Vector{Float64}. Weights associated with relaxing the upper bounds of variables.\n\nThe function repairs a primal infeasible optimization problem by adjusting the bounds on the constraints and variables where the adjustment is computed as the minimal weighted sum of relaxations to the bounds on the constraints and variables. Observe the function only repairs the problem but does not solve it. If an optimal solution is required the problem should be optimized after the repair.\n\nThe function is applicable to linear and conic problems possibly with integer variables.\n\nObserve that when computing the minimal weighted relaxation the termination tolerance specified by the parameters of the task is employed. For instance the parameter MSK_IPAR_MIO_MODE` can be used to make MOSEK ignore the integer constraints during the repair which usually leads to a much faster repair. However, the drawback is of course that the repaired problem may not have an integer feasible solution.\n\nNote the function modifies the task in place. If this is not desired, then apply the function to a cloned task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.primalsensitivity",
    "page": "API Reference",
    "title": "Mosek.primalsensitivity",
    "category": "function",
    "text": "(leftpricei,rightpricei,leftrangei,rightrangei,leftpricej,rightpricej,leftrangej,rightrangej) = primalsensitivity{T1,T3}(task:: MSKtask,subi:: Vector{T1},marki:: Vector{Mark},subj:: Vector{T3},markj:: Vector{Mark})\n(leftpricei,rightpricei,leftrangei,rightrangei,leftpricej,rightpricej,leftrangej,rightrangej) = primalsensitivity(task_:: MSKtask,subi_:: Vector{Int32},marki_:: Vector{Mark},subj_:: Vector{Int32},markj_:: Vector{Mark})\n\ntask :: MSKtask. An optimization task.\nsubi :: Vector{Int32}. Indexes of constraints to analyze.\nmarki :: Vector{Int32}. Mark which constraint bounds to analyze.\nsubj :: Vector{Int32}. Indexes of variables to analyze.\nmarkj :: Vector{Int32}. Mark which variable bounds to analyze.\nleftpricei :: Vector{Float64}. Left shadow price for constraints.\nrightpricei :: Vector{Float64}. Right shadow price for constraints.\nleftrangei :: Vector{Float64}. Left range for constraints.\nrightrangei :: Vector{Float64}. Right range for constraints.\nleftpricej :: Vector{Float64}. Left shadow price for variables.\nrightpricej :: Vector{Float64}. Right shadow price for variables.\nleftrangej :: Vector{Float64}. Left range for variables.\nrightrangej :: Vector{Float64}. Right range for variables.\n\nCalculates sensitivity information for bounds on variables and constraints. For details on sensitivity  analysis, the definitions of shadow price and linearity interval and an example see Section :ref:doc.sensitivity_analysis.\n\nThe type of sensitivity analysis to be performed (basis or optimal partition) is controlled by the parameter MSK_IPAR_SENSITIVITY_TYPE`.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.printdata",
    "page": "API Reference",
    "title": "Mosek.printdata",
    "category": "function",
    "text": "printdata{T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15}(task:: MSKtask,whichstream:: Streamtype,firsti:: T2,lasti:: T3,firstj:: T4,lastj:: T5,firstk:: T6,lastk:: T7,c:: T8,qo:: T9,a:: T10,qc:: T11,bc:: T12,bx:: T13,vartype:: T14,cones:: T15)\nprintdata(task_:: MSKtask,whichstream_:: Streamtype,firsti_:: Int32,lasti_:: Int32,firstj_:: Int32,lastj_:: Int32,firstk_:: Int32,lastk_:: Int32,c_:: Int32,qo_:: Int32,a_:: Int32,qc_:: Int32,bc_:: Int32,bx_:: Int32,vartype_:: Int32,cones_:: Int32)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\nfirsti :: Int32. Index of first constraint for which data should be printed.\nlasti :: Int32. Index of last constraint plus 1 for which data should be printed.\nfirstj :: Int32. Index of first variable for which data should be printed.\nlastj :: Int32. Index of last variable plus 1 for which data should be printed.\nfirstk :: Int32. Index of first cone for which data should be printed.\nlastk :: Int32. Index of last cone plus 1 for which data should be printed.\nc :: Int32. If non-zero the linear objective terms are printed.\nqo :: Int32. If non-zero the quadratic objective terms are printed.\na :: Int32. If non-zero the linear constraint matrix is printed.\nqc :: Int32. If non-zero q\'th     quadratic constraint terms are printed for the relevant constraints.\nbc :: Int32. If non-zero the constraint bounds are printed.\nbx :: Int32. If non-zero the variable bounds are printed.\nvartype :: Int32. If non-zero the variable types are printed.\ncones :: Int32. If non-zero the  conic data is printed.\n\nPrints a part of the problem data to a stream. This function is normally used for debugging purposes only, e.g. to verify that the correct data has been inputted.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.printparam",
    "page": "API Reference",
    "title": "Mosek.printparam",
    "category": "function",
    "text": "printparam(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\n\nPrints the current parameter settings to the message stream.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putacol",
    "page": "API Reference",
    "title": "Mosek.putacol",
    "category": "function",
    "text": "putacol{T1,T2,T3}(task:: MSKtask,j:: T1,subj:: Vector{T2},valj:: Vector{T3})\nputacol(task_:: MSKtask,j_:: Int32,subj_:: Vector{Int32},valj_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Column index.\nsubj :: Vector{Int32}. Row indexes of non-zero values in column.\nvalj :: Vector{Float64}. New non-zero values of column.\n\nChange one column of the linear constraint matrix A. Resets all the elements in column j to zero and then sets\n\n a_mathttsubjkmathttj = mathttvaljk mathcalC_q k=0ldotsmathttnzj-1\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putacollist",
    "page": "API Reference",
    "title": "Mosek.putacollist",
    "category": "function",
    "text": "putacollist{T1,T2,T3,T4,T5}(task:: MSKtask,sub:: Vector{T1},ptrb:: Vector{T2},ptre:: Vector{T3},asub:: Vector{T4},aval:: Vector{T5})\nputacollist{T1}(task:: MSKtask,sub:: Vector{T1},A:: SparseMatrixCSC{Float64})\nputacollist(task_:: MSKtask,sub_:: Vector{Int32},ptrb_:: Vector{Int64},ptre_:: Vector{Int64},asub_:: Vector{Int32},aval_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nsub :: Vector{Int32}. Indexes of columns that should be replaced.\nptrb :: Vector{Int64}. Array of pointers to the first element in the columns.\nptre :: Vector{Int64}. Array of pointers to the last element plus one in the columns.\nasub :: Vector{Int32}. Row indexes\naval :: Vector{Float64}. Coefficient values.\nA :: SparseMatrixCSC{Float64}. Sparse matrix defining the column values\n\nChange a set of columns in the linear constraint matrix A with data in sparse triplet format. The requested columns are set to zero and then updated with:\n\nbeginarrayrl\n  mathttfor  i=1ldots+1num\n               a_mathttasubkmathttsubi = mathttavalkmathcalC_q k=mathttptrbildotsmathttptrei-1 \nendarray\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putacolslice",
    "page": "API Reference",
    "title": "Mosek.putacolslice",
    "category": "function",
    "text": "putacolslice{T1,T2,T3,T4,T5,T6}(task:: MSKtask,first:: T1,last:: T2,ptrb:: Vector{T3},ptre:: Vector{T4},asub:: Vector{T5},aval:: Vector{T6})\nputacolslice{T1,T2}(task:: MSKtask,first:: T1,last:: T2,A:: SparseMatrixCSC{Float64})\nputacolslice(task_:: MSKtask,first_:: Int32,last_:: Int32,ptrb_:: Vector{Int64},ptre_:: Vector{Int64},asub_:: Vector{Int32},aval_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First column in the slice.\nlast :: Int32. Last column plus one in the slice.\nptrb :: Vector{Int64}. Array of pointers to the first element in the columns.\nptre :: Vector{Int64}. Array of pointers to the last element plus one in the columns.\nasub :: Vector{Int32}. Row indexes\naval :: Vector{Float64}. Coefficient values.\nA :: SparseMatrixCSC{Float64}. Sparse matrix defining the column values\n\nChange a slice of columns in the linear constraint matrix A with data in sparse triplet format. The requested columns are set to zero and then updated with: \n\nbeginarrayrl\n  mathttfor  i=mathttfirstldotsmathttlast-1\n               a_mathttasubki = mathttavalkmathcalC_q k=mathttptrbildotsmathttptrei-1 \nendarray\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putaij",
    "page": "API Reference",
    "title": "Mosek.putaij",
    "category": "function",
    "text": "putaij{T1,T2,T3}(task:: MSKtask,i:: T1,j:: T2,aij:: T3)\nputaij(task_:: MSKtask,i_:: Int32,j_:: Int32,aij_:: Float64)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Constraint (row) index.\nj :: Int32. Variable (column) index.\naij :: Float64. New coefficient.\n\nChanges a coefficient in the linear coefficient matrix A using the method\n\n a_ij = mathttaij\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putaijlist",
    "page": "API Reference",
    "title": "Mosek.putaijlist",
    "category": "function",
    "text": "putaijlist{T1,T2,T3}(task:: MSKtask,subi:: Vector{T1},subj:: Vector{T2},valij:: Vector{T3})\nputaijlist(task_:: MSKtask,subi_:: Vector{Int32},subj_:: Vector{Int32},valij_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nsubi :: Vector{Int32}. Constraint (row) indices.\nsubj :: Vector{Int32}. Variable (column) indices.\nvalij :: Vector{Float64}. New coefficient values.\n\nChanges one or more coefficients in A using the method\n\n a_mathttsubikmathttsubjk = mathttvalijk mathcalC_q k=1ldots+1num\n\nDuplicates are not allowed.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putarow",
    "page": "API Reference",
    "title": "Mosek.putarow",
    "category": "function",
    "text": "putarow{T1,T2,T3}(task:: MSKtask,i:: T1,subi:: Vector{T2},vali:: Vector{T3})\nputarow(task_:: MSKtask,i_:: Int32,subi_:: Vector{Int32},vali_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Row index.\nsubi :: Vector{Int32}. Column indexes of non-zero values in row.\nvali :: Vector{Float64}. New non-zero values of row.\n\nChange one row of the linear constraint matrix A. Resets all the elements in row i to zero and then sets\n\n a_mathttimathttsubik = mathttvalik mathcalC_q k=0ldotsmathttnzi-1\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putarowlist",
    "page": "API Reference",
    "title": "Mosek.putarowlist",
    "category": "function",
    "text": "putarowlist{T1,T2,T3,T4,T5}(task:: MSKtask,sub:: Vector{T1},ptrb:: Vector{T2},ptre:: Vector{T3},asub:: Vector{T4},aval:: Vector{T5})\nputarowlist{T1}(task:: MSKtask,sub:: Vector{T1},At:: SparseMatrixCSC{Float64})\nputarowlist(task_:: MSKtask,sub_:: Vector{Int32},ptrb_:: Vector{Int64},ptre_:: Vector{Int64},asub_:: Vector{Int32},aval_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nsub :: Vector{Int32}. Indexes of rows or columns that should be replaced.\nptrb :: Vector{Int64}. Array of pointers to the first element in the rows.\nptre :: Vector{Int64}. Array of pointers to the last element plus one in the rows.\nasub :: Vector{Int32}. Variable indexes.\naval :: Vector{Float64}. Coefficient values.\nAt :: SparseMatrixCSC{Float64}. Transposed matrix defining the row values. Note that for efficiency reasons the columns of this matrix defines the rows to be replaced\n\nChange a set of rows in the linear constraint matrix A with data in sparse triplet format. The requested rows are set to zero and then updated with:  \n\nbeginarrayrl\n  mathttfor  i=1ldots+1num \n                a_mathttsubimathttasubk = mathttavalkmathcalC_q k=mathttptrbildotsmathttptrei-1 \nendarray\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putarowslice",
    "page": "API Reference",
    "title": "Mosek.putarowslice",
    "category": "function",
    "text": "putarowslice{T1,T2,T3,T4,T5,T6}(task:: MSKtask,first:: T1,last:: T2,ptrb:: Vector{T3},ptre:: Vector{T4},asub:: Vector{T5},aval:: Vector{T6})\nputarowslice{T1,T2}(task:: MSKtask,first:: T1,last:: T2,At:: SparseMatrixCSC{Float64})\nputarowslice(task_:: MSKtask,first_:: Int32,last_:: Int32,ptrb_:: Vector{Int64},ptre_:: Vector{Int64},asub_:: Vector{Int32},aval_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First row in the slice.\nlast :: Int32. Last row plus one in the slice.\nptrb :: Vector{Int64}. Array of pointers to the first element in the rows.\nptre :: Vector{Int64}. Array of pointers to the last element plus one in the rows.\nasub :: Vector{Int32}. Column indexes of new elements.\naval :: Vector{Float64}. Coefficient values.\nAt :: SparseMatrixCSC{Float64}. Transposed matrix defining the row values. Note that for efficiency reasons the columns of this matrix defines the rows to be replaced\n\nChange a slice of rows in the linear constraint matrix A with data in sparse triplet format. The requested columns are set to zero and then updated with:\n\nbeginarrayrl\n  mathttfor  i=mathttfirstldotsmathttlast-1 \n                a_mathttsubimathttasubk = mathttavalkmathcalC_q k=mathttptrbildotsmathttptrei-1 \nendarray\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbarablocktriplet",
    "page": "API Reference",
    "title": "Mosek.putbarablocktriplet",
    "category": "function",
    "text": "putbarablocktriplet{T1,T2,T3,T4,T5,T6}(task:: MSKtask,num:: T1,subi:: Vector{T2},subj:: Vector{T3},subk:: Vector{T4},subl:: Vector{T5},valijkl:: Vector{T6})\nputbarablocktriplet(task_:: MSKtask,num_:: Int64,subi_:: Vector{Int32},subj_:: Vector{Int32},subk_:: Vector{Int32},subl_:: Vector{Int32},valijkl_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nnum :: Int64. Number of elements in the block triplet form.\nsubi :: Vector{Int32}. Constraint index.\nsubj :: Vector{Int32}. Symmetric matrix variable index.\nsubk :: Vector{Int32}. Block row index.\nsubl :: Vector{Int32}. Block column index.\nvalijkl :: Vector{Float64}. The numerical value associated with each block triplet.\n\nInputs the bar A matrix in block triplet form.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbaraij",
    "page": "API Reference",
    "title": "Mosek.putbaraij",
    "category": "function",
    "text": "putbaraij{T1,T2,T3,T4}(task:: MSKtask,i:: T1,j:: T2,sub:: Vector{T3},weights:: Vector{T4})\nputbaraij(task_:: MSKtask,i_:: Int32,j_:: Int32,sub_:: Vector{Int64},weights_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Row index of barA.\nj :: Int32. Column index of barA.\nsub :: Vector{Int64}. Element indexes in matrix storage.\nweights :: Vector{Float64}. Weights in the weighted sum.\n\nThis function sets one element in the bar A matrix.\n\nEach element in the bar A matrix is a weighted sum of symmetric matrices from the symmetric matrix storage E, so bar A_ij is a symmetric matrix. By default all elements in bar A are 0, so only non-zero elements need be added. Setting the same element again will overwrite the earlier entry. \n\nThe symmetric matrices from E are defined separately using the function Mosek.appendsparsesymmat.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbarcblocktriplet",
    "page": "API Reference",
    "title": "Mosek.putbarcblocktriplet",
    "category": "function",
    "text": "putbarcblocktriplet{T1,T2,T3,T4,T5}(task:: MSKtask,num:: T1,subj:: Vector{T2},subk:: Vector{T3},subl:: Vector{T4},valjkl:: Vector{T5})\nputbarcblocktriplet(task_:: MSKtask,num_:: Int64,subj_:: Vector{Int32},subk_:: Vector{Int32},subl_:: Vector{Int32},valjkl_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nnum :: Int64. Number of elements in the block triplet form.\nsubj :: Vector{Int32}. Symmetric matrix variable index.\nsubk :: Vector{Int32}. Block row index.\nsubl :: Vector{Int32}. Block column index.\nvaljkl :: Vector{Float64}. The numerical value associated with each block triplet.\n\nInputs the bar C matrix in block triplet form.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbarcj",
    "page": "API Reference",
    "title": "Mosek.putbarcj",
    "category": "function",
    "text": "putbarcj{T1,T2,T3}(task:: MSKtask,j:: T1,sub:: Vector{T2},weights:: Vector{T3})\nputbarcj(task_:: MSKtask,j_:: Int32,sub_:: Vector{Int64},weights_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the element in barc` that should be changed.\nsub :: Vector{Int64}. sub is list of indexes of those symmetric matrices appearing in sum.\nweights :: Vector{Float64}. The weights of the terms in the weighted sum.\n\nThis function sets one entry in the bar C vector.\n\nEach element in the bar C vector is a weighted sum of symmetric matrices from the symmetric matrix storage E, so bar C_j is a symmetric matrix. By default all elements in bar C are 0, so only non-zero elements need be added. Setting the same element again will overwrite the earlier entry. \n\nThe symmetric matrices from E are defined separately using the function Mosek.appendsparsesymmat.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbarsj",
    "page": "API Reference",
    "title": "Mosek.putbarsj",
    "category": "function",
    "text": "putbarsj{T2,T3}(task:: MSKtask,whichsol:: Soltype,j:: T2,barsj:: Vector{T3})\nputbarsj(task_:: MSKtask,whichsol_:: Soltype,j_:: Int32,barsj_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nj :: Int32. Index of the semidefinite variable.\nbarsj :: Vector{Float64}. Value of the j\'th variable of barx.\n\nSets the dual solution for a semidefinite variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbarvarname",
    "page": "API Reference",
    "title": "Mosek.putbarvarname",
    "category": "function",
    "text": "putbarvarname{T1}(task:: MSKtask,j:: T1,name:: AbstractString)\nputbarvarname(task_:: MSKtask,j_:: Int32,name_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable.\nname :: String. The variable name.\n\nSets the name of a semidefinite variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbarxj",
    "page": "API Reference",
    "title": "Mosek.putbarxj",
    "category": "function",
    "text": "putbarxj{T2,T3}(task:: MSKtask,whichsol:: Soltype,j:: T2,barxj:: Vector{T3})\nputbarxj(task_:: MSKtask,whichsol_:: Soltype,j_:: Int32,barxj_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nj :: Int32. Index of the semidefinite variable.\nbarxj :: Vector{Float64}. Value of the j\'th variable of barx.\n\nSets the primal solution for a semidefinite variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putbound",
    "page": "API Reference",
    "title": "Mosek.putbound",
    "category": "function",
    "text": "putbound{T2,T4,T5}(task:: MSKtask,accmode:: Accmode,i:: T2,bk:: Boundkey,bl:: T4,bu:: T5)\nputbound(task_:: MSKtask,accmode_:: Accmode,i_:: Int32,bk_:: Boundkey,bl_:: Float64,bu_:: Float64)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines whether the bound for a constraint or a variable is changed.\ni :: Int32. Index of the constraint or variable.\nbk :: Boundkey. New bound key.\nbl :: Float64. New lower bound.\nbu :: Float64. New upper bound.\n\nChanges the bound for either one constraint or one variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putboundlist",
    "page": "API Reference",
    "title": "Mosek.putboundlist",
    "category": "function",
    "text": "putboundlist{T2,T4,T5}(task:: MSKtask,accmode:: Accmode,sub:: Vector{T2},bk:: Vector{Boundkey},bl:: Vector{T4},bu:: Vector{T5})\nputboundlist(task_:: MSKtask,accmode_:: Accmode,sub_:: Vector{Int32},bk_:: Vector{Boundkey},bl_:: Vector{Float64},bu_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines whether to access bounds on variables or constraints.\nsub :: Vector{Int32}. Subscripts of the constraints or variables that should be changed.\nbk :: Vector{Int32}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nChanges the bounds of constraints or variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putboundslice",
    "page": "API Reference",
    "title": "Mosek.putboundslice",
    "category": "function",
    "text": "putboundslice{T2,T3,T5,T6}(task:: MSKtask,con:: Accmode,first:: T2,last:: T3,bk:: Vector{Boundkey},bl:: Vector{T5},bu:: Vector{T6})\nputboundslice(task_:: MSKtask,con_:: Accmode,first_:: Int32,last_:: Int32,bk_:: Vector{Boundkey},bl_:: Vector{Float64},bu_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\ncon :: Accmode. Determines whether variables or constraints are modified.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nbk :: Vector{Int32}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nChanges the bounds for a slice of constraints or variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putcfix",
    "page": "API Reference",
    "title": "Mosek.putcfix",
    "category": "function",
    "text": "putcfix{T1}(task:: MSKtask,cfix:: T1)\nputcfix(task_:: MSKtask,cfix_:: Float64)\n\ntask :: MSKtask. An optimization task.\ncfix :: Float64. Fixed term in the objective.\n\nReplaces the fixed term in the objective by a new one.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putcj",
    "page": "API Reference",
    "title": "Mosek.putcj",
    "category": "function",
    "text": "putcj{T1,T2}(task:: MSKtask,j:: T1,cj:: T2)\nputcj(task_:: MSKtask,j_:: Int32,cj_:: Float64)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable whose objective coefficient should be changed.\ncj :: Float64. New coefficient value.\n\nModifies one coefficient in the linear objective vector c, i.e.\n\n c_mathttj = mathttcj\n\nIf the absolute value exceeds MSK_DPAR_DATA_TOL_C_HUGEan error is generated. If the absolute value exceedsMSKDPARDATATOLCJ_LARGE``, a warning is generated, but the coefficient is inputted as specified.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putclist",
    "page": "API Reference",
    "title": "Mosek.putclist",
    "category": "function",
    "text": "putclist{T1,T2}(task:: MSKtask,subj:: Vector{T1},val:: Vector{T2})\nputclist(task_:: MSKtask,subj_:: Vector{Int32},val_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nsubj :: Vector{Int32}. Indices of variables for which objective coefficients should be changed.\nval :: Vector{Float64}. New numerical values for the objective coefficients that should be modified.\n\nModifies the coefficients in the linear term c in the objective using the principle\n\n c_mathttsubjt = mathttvalt mathcalC_q t=1ldots+1num\n\nIf a variable index is specified multiple times in subj only the last entry is used. Data checks are performed as in Mosek.putcj.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putconbound",
    "page": "API Reference",
    "title": "Mosek.putconbound",
    "category": "function",
    "text": "putconbound{T1,T3,T4}(task:: MSKtask,i:: T1,bk:: Boundkey,bl:: T3,bu:: T4)\nputconbound(task_:: MSKtask,i_:: Int32,bk_:: Boundkey,bl_:: Float64,bu_:: Float64)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the constraint.\nbk :: Boundkey. New bound key.\nbl :: Float64. New lower bound.\nbu :: Float64. New upper bound.\n\nChanges the bounds for one constraint.\n\nIf the bound value specified is numerically larger than MSK_DPAR_DATA_TOL_BOUND_INFit is considered infinite and the bound key is changed accordingly. If a bound value is numerically larger thanMSKDPARDATATOLBOUND_WRN``, a warning will be displayed, but the bound is inputted as specified.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putconboundlist",
    "page": "API Reference",
    "title": "Mosek.putconboundlist",
    "category": "function",
    "text": "putconboundlist{T1,T3,T4}(task:: MSKtask,sub:: Vector{T1},bk:: Vector{Boundkey},bl:: Vector{T3},bu:: Vector{T4})\nputconboundlist(task_:: MSKtask,sub_:: Vector{Int32},bk_:: Vector{Boundkey},bl_:: Vector{Float64},bu_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nsub :: Vector{Int32}. List of constraint indexes.\nbk :: Vector{Int32}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nChanges the bounds for a list of constraints. If multiple bound changes are specified for a constraint, then only the last change takes effect. Data checks are performed as in Mosek.putconbound.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putconboundslice",
    "page": "API Reference",
    "title": "Mosek.putconboundslice",
    "category": "function",
    "text": "putconboundslice{T1,T2,T4,T5}(task:: MSKtask,first:: T1,last:: T2,bk:: Vector{Boundkey},bl:: Vector{T4},bu:: Vector{T5})\nputconboundslice(task_:: MSKtask,first_:: Int32,last_:: Int32,bk_:: Vector{Boundkey},bl_:: Vector{Float64},bu_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nbk :: Vector{Int32}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nChanges the bounds for a slice of the constraints. Data checks are performed as in Mosek.putconbound.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putcone",
    "page": "API Reference",
    "title": "Mosek.putcone",
    "category": "function",
    "text": "putcone{T1,T3,T4}(task:: MSKtask,k:: T1,ct:: Conetype,conepar:: T3,submem:: Vector{T4})\nputcone(task_:: MSKtask,k_:: Int32,ct_:: Conetype,conepar_:: Float64,submem_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nk :: Int32. Index of the cone.\nct :: Conetype. Specifies the type of the cone.\nconepar :: Float64. This argument is currently not used. It can be set to 0\nsubmem :: Vector{Int32}. Variable subscripts of the members in the cone.\n\nReplaces a conic constraint.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putconename",
    "page": "API Reference",
    "title": "Mosek.putconename",
    "category": "function",
    "text": "putconename{T1}(task:: MSKtask,j:: T1,name:: AbstractString)\nputconename(task_:: MSKtask,j_:: Int32,name_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the cone.\nname :: String. The name of the cone.\n\nSets the name of a cone.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putconname",
    "page": "API Reference",
    "title": "Mosek.putconname",
    "category": "function",
    "text": "putconname{T1}(task:: MSKtask,i:: T1,name:: AbstractString)\nputconname(task_:: MSKtask,i_:: Int32,name_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the constraint.\nname :: String. The name of the constraint.\n\nSets the name of a constraint.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putcslice",
    "page": "API Reference",
    "title": "Mosek.putcslice",
    "category": "function",
    "text": "putcslice{T1,T2,T3}(task:: MSKtask,first:: T1,last:: T2,slice:: Vector{T3})\nputcslice(task_:: MSKtask,first_:: Int32,last_:: Int32,slice_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First element in the slice of c.\nlast :: Int32. Last element plus 1 of the slice in c to be changed.\nslice :: Vector{Float64}. New numerical values for the objective coefficients that should be modified.\n\nModifies a slice in the linear term c in the objective using the principle\n\n c_mathttj = mathttslicej-first mathcalC_q j=first+1last\n\nData checks are performed as in Mosek.putcj.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putdouparam",
    "page": "API Reference",
    "title": "Mosek.putdouparam",
    "category": "function",
    "text": "putdouparam{T2}(task:: MSKtask,param:: Dparam,parvalue:: T2)\nputdouparam(task_:: MSKtask,param_:: Dparam,parvalue_:: Float64)\n\ntask :: MSKtask. An optimization task.\nparam :: Dparam. Which parameter.\nparvalue :: Float64. Parameter value.\n\nSets the value of a double parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putintparam",
    "page": "API Reference",
    "title": "Mosek.putintparam",
    "category": "function",
    "text": "putintparam{T2}(task:: MSKtask,param:: Iparam,parvalue:: T2)\nputintparam(task_:: MSKtask,param_:: Iparam,parvalue_:: Int32)\n\ntask :: MSKtask. An optimization task.\nparam :: Iparam. Which parameter.\nparvalue :: Int32. Parameter value.\n\nSets the value of an integer parameter.\n\n.. msk_only:: java\n\nPlease notice that some parameters take values that are defined in Enum    classes. This function accepts only integer values, so to use e.g. the value    MSK_ON, is necessary to use the member .value. For example: ::\n\n   task.putintparam(mosek.iparam.opf_write_problem, mosek.onoffkey.on.value)\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putlicensecode",
    "page": "API Reference",
    "title": "Mosek.putlicensecode",
    "category": "function",
    "text": "putlicensecode{T1}(env:: MSKenv,code:: Vector{T1})\nputlicensecode(env_:: MSKenv,code_:: Vector{Int32})\n\nenv :: MSKenv. The MOSEK environment.\ncode :: Vector{Int32}. A license key string.\n\nInput a runtime license code.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putlicensedebug",
    "page": "API Reference",
    "title": "Mosek.putlicensedebug",
    "category": "function",
    "text": "putlicensedebug{T1}(env:: MSKenv,licdebug:: T1)\nputlicensedebug(env_:: MSKenv,licdebug_:: Int32)\n\nenv :: MSKenv. The MOSEK environment.\nlicdebug :: Int32. Enable output of license check-out debug information.\n\nEnables debug information for the license system. If licdebug is non-zero, then MOSEK will print debug info regarding the license checkout.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putlicensepath",
    "page": "API Reference",
    "title": "Mosek.putlicensepath",
    "category": "function",
    "text": "putlicensepath(env_:: MSKenv,licensepath_:: AbstractString)\n\nenv :: MSKenv. The MOSEK environment.\nlicensepath :: String. A path specifying where to search for the license.\n\nSet the path to the license file.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putlicensewait",
    "page": "API Reference",
    "title": "Mosek.putlicensewait",
    "category": "function",
    "text": "putlicensewait{T1}(env:: MSKenv,licwait:: T1)\nputlicensewait(env_:: MSKenv,licwait_:: Int32)\n\nenv :: MSKenv. The MOSEK environment.\nlicwait :: Int32. Enable waiting for a license.\n\nControl whether MOSEK should wait for an available license if no license is available. If licwait is non-zero, then MOSEK will wait for licwait-1 milliseconds between each check for an available license.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putmaxnumanz",
    "page": "API Reference",
    "title": "Mosek.putmaxnumanz",
    "category": "function",
    "text": "putmaxnumanz{T1}(task:: MSKtask,maxnumanz:: T1)\nputmaxnumanz(task_:: MSKtask,maxnumanz_:: Int64)\n\ntask :: MSKtask. An optimization task.\nmaxnumanz :: Int64. New size of the storage reserved for storing the linear coefficient matrix.\n\nSets the number of preallocated non-zero entries in A. \n\nMOSEK stores only the non-zero elements in the linear coefficient matrix A and it  cannot predict how much storage is required to store A. Using this function it is possible to specify the number of non-zeros to preallocate for storing A.\n\nIf the number of non-zeros in the problem is known, it is a good idea to set maxnumanz slightly larger than this number, otherwise a rough estimate can be used. In general, if A is inputted in many small chunks, setting this value may speed up the data input phase.\n\nIt is not mandatory to call this function, since MOSEK will reallocate internal structures whenever it is necessary.\n\nThe function call has no effect if both maxnumcon and maxnumvar are zero.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putmaxnumbarvar",
    "page": "API Reference",
    "title": "Mosek.putmaxnumbarvar",
    "category": "function",
    "text": "putmaxnumbarvar{T1}(task:: MSKtask,maxnumbarvar:: T1)\nputmaxnumbarvar(task_:: MSKtask,maxnumbarvar_:: Int32)\n\ntask :: MSKtask. An optimization task.\nmaxnumbarvar :: Int32. Number of preallocated symmetric matrix variables.\n\nSets the number of preallocated symmetric matrix variables in the optimization task. When this number of variables is reached MOSEK will automatically allocate more space for variables.\n\nIt is not mandatory to call this function. It only gives a hint about the amount of data to preallocate for efficiency reasons.\n\nPlease note that maxnumbarvar must be larger than the current number of symmetric matrix variables in the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putmaxnumcon",
    "page": "API Reference",
    "title": "Mosek.putmaxnumcon",
    "category": "function",
    "text": "putmaxnumcon{T1}(task:: MSKtask,maxnumcon:: T1)\nputmaxnumcon(task_:: MSKtask,maxnumcon_:: Int32)\n\ntask :: MSKtask. An optimization task.\nmaxnumcon :: Int32. Number of preallocated constraints in the optimization task.\n\nSets the number of preallocated constraints in the optimization task. When this number of constraints is reached MOSEK will automatically allocate more space for constraints.\n\nIt is never mandatory to call this function, since MOSEK will reallocate any internal structures whenever it is required.\n\nPlease note that maxnumcon must be larger than the current number of constraints in the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putmaxnumcone",
    "page": "API Reference",
    "title": "Mosek.putmaxnumcone",
    "category": "function",
    "text": "putmaxnumcone{T1}(task:: MSKtask,maxnumcone:: T1)\nputmaxnumcone(task_:: MSKtask,maxnumcone_:: Int32)\n\ntask :: MSKtask. An optimization task.\nmaxnumcone :: Int32. Number of preallocated conic constraints in the optimization task.\n\nSets the number of preallocated conic constraints in the optimization task. When this number of conic constraints is reached MOSEK will automatically allocate more space for conic constraints.\n\nIt is not mandatory to call this function, since MOSEK will reallocate any internal structures whenever it is required.\n\nPlease note that maxnumcon must be larger than the current number of conic  constraints in the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putmaxnumqnz",
    "page": "API Reference",
    "title": "Mosek.putmaxnumqnz",
    "category": "function",
    "text": "putmaxnumqnz{T1}(task:: MSKtask,maxnumqnz:: T1)\nputmaxnumqnz(task_:: MSKtask,maxnumqnz_:: Int64)\n\ntask :: MSKtask. An optimization task.\nmaxnumqnz :: Int64. Number of non-zero elements preallocated in quadratic coefficient matrices.\n\nSets the number of preallocated non-zero entries in quadratic terms.\n\nMOSEK stores only the non-zero elements in Q. Therefore, MOSEK cannot predict how much storage is required to store Q. Using this function it is possible to specify the number non-zeros to preallocate for storing Q (both objective and constraints).\n\nIt may be advantageous to reserve more non-zeros for Q than actually needed since it may improve the internal efficiency of MOSEK, however, it is never worthwhile to specify more than the double of the anticipated number of non-zeros in Q.\n\nIt is not mandatory to call this function, since MOSEK will reallocate internal structures whenever it is necessary.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putmaxnumvar",
    "page": "API Reference",
    "title": "Mosek.putmaxnumvar",
    "category": "function",
    "text": "putmaxnumvar{T1}(task:: MSKtask,maxnumvar:: T1)\nputmaxnumvar(task_:: MSKtask,maxnumvar_:: Int32)\n\ntask :: MSKtask. An optimization task.\nmaxnumvar :: Int32. Number of preallocated variables in the optimization task.\n\nSets the number of preallocated variables in the optimization task. When this number of variables is reached MOSEK will automatically allocate more space for variables.\n\nIt is not mandatory to call this function. It only gives  a hint about the amount of data to preallocate for efficiency reasons.\n\nPlease note that maxnumvar must be larger than the current number of variables in the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putnadouparam",
    "page": "API Reference",
    "title": "Mosek.putnadouparam",
    "category": "function",
    "text": "putnadouparam{T2}(task:: MSKtask,paramname:: AbstractString,parvalue:: T2)\nputnadouparam(task_:: MSKtask,paramname_:: AbstractString,parvalue_:: Float64)\n\ntask :: MSKtask. An optimization task.\nparamname :: String. Name of a parameter.\nparvalue :: Float64. Parameter value.\n\nSets the value of a named double parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putnaintparam",
    "page": "API Reference",
    "title": "Mosek.putnaintparam",
    "category": "function",
    "text": "putnaintparam{T2}(task:: MSKtask,paramname:: AbstractString,parvalue:: T2)\nputnaintparam(task_:: MSKtask,paramname_:: AbstractString,parvalue_:: Int32)\n\ntask :: MSKtask. An optimization task.\nparamname :: String. Name of a parameter.\nparvalue :: Int32. Parameter value.\n\nSets the value of a named integer parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putnastrparam",
    "page": "API Reference",
    "title": "Mosek.putnastrparam",
    "category": "function",
    "text": "putnastrparam(task_:: MSKtask,paramname_:: AbstractString,parvalue_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparamname :: String. Name of a parameter.\nparvalue :: String. Parameter value.\n\nSets the value of a named string parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putobjname",
    "page": "API Reference",
    "title": "Mosek.putobjname",
    "category": "function",
    "text": "putobjname(task_:: MSKtask,objname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nobjname :: String. Name of the objective.\n\nAssigns a new name to the objective.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putobjsense",
    "page": "API Reference",
    "title": "Mosek.putobjsense",
    "category": "function",
    "text": "putobjsense(task_:: MSKtask,sense_:: Objsense)\n\ntask :: MSKtask. An optimization task.\nsense :: Objsense. The objective sense of the task\n\nSets the objective sense of the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putparam",
    "page": "API Reference",
    "title": "Mosek.putparam",
    "category": "function",
    "text": "putparam(task_:: MSKtask,parname_:: AbstractString,parvalue_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparname :: String. Parameter name.\nparvalue :: String. Parameter value.\n\nChecks if parname is valid parameter name. If it is, the parameter is assigned the value specified by parvalue.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putqcon",
    "page": "API Reference",
    "title": "Mosek.putqcon",
    "category": "function",
    "text": "putqcon{T1,T2,T3,T4}(task:: MSKtask,qcsubk:: Vector{T1},qcsubi:: Vector{T2},qcsubj:: Vector{T3},qcval:: Vector{T4})\nputqcon(task_:: MSKtask,qcsubk_:: Vector{Int32},qcsubi_:: Vector{Int32},qcsubj_:: Vector{Int32},qcval_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nqcsubk :: Vector{Int32}. Constraint subscripts for quadratic coefficients.\nqcsubi :: Vector{Int32}. Row subscripts for quadratic constraint matrix.\nqcsubj :: Vector{Int32}. Column subscripts for quadratic constraint matrix.\nqcval :: Vector{Float64}. Quadratic constraint coefficient values.\n\nReplace all quadratic entries in the constraints. The list of constraints has the form\n\n l_k^c leq  frac12 sum_i=0^+1numvar sum_j=0^+1numvar q_ij^k x_i x_j + sum_j=0^+1numvar a_kj x_j leq u_k^c   k=0ldotsm-1\n\nThis function sets all the quadratic terms to zero and then performs the update:\n\n q_mathttqcsubitmathttqcsubjt^mathttqcsubkt = q_mathttmathttqcsubjtqcsubit^mathttqcsubkt = q_mathttmathttqcsubjtqcsubit^mathttqcsubkt  + mathttqcvalt\n\nfor t=1ldots+1numqcnz.\n\nPlease note that:\n\nFor large problems it is essential for the efficiency that the function Mosek.putmaxnumqnz is employed to pre-allocate space.\nOnly the lower triangular parts should be specified because the Q matrices are symmetric. Specifying entries where i  j will result in an error. \nOnly non-zero elements should be specified.\nThe order in which the non-zero elements are specified is insignificant.\nDuplicate elements are added together as shown above. Hence, it is usually not recommended to specify the same entry multiple times.\n\nFor a code example see Section :ref:doc.tutorial_qo\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putqconk",
    "page": "API Reference",
    "title": "Mosek.putqconk",
    "category": "function",
    "text": "putqconk{T1,T2,T3,T4}(task:: MSKtask,k:: T1,qcsubi:: Vector{T2},qcsubj:: Vector{T3},qcval:: Vector{T4})\nputqconk{T1}(task:: MSKtask,k:: T1,Qk:: SparseMatrixCSC{Float64})\nputqconk(task_:: MSKtask,k_:: Int32,qcsubi_:: Vector{Int32},qcsubj_:: Vector{Int32},qcval_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nk :: Int32. The constraint in which the new quadratic elements are inserted.\nqcsubi :: Vector{Int32}. Row subscripts for quadratic constraint matrix.\nqcsubj :: Vector{Int32}. Column subscripts for quadratic constraint matrix.\nqcval :: Vector{Float64}. Quadratic constraint coefficient values.\nQk :: SparseMatrixCSC{Float64}. The symmetric matrix 1/2 (Qk\' + Qk) is used\n\nReplaces all the quadratic entries in one constraint. This function performs the same operations as Mosek.putqcon but only with respect to constraint number k and it does not modify the other constraints. See the description of Mosek.putqcon for definitions and important remarks.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putqobj",
    "page": "API Reference",
    "title": "Mosek.putqobj",
    "category": "function",
    "text": "putqobj{T1,T2,T3}(task:: MSKtask,qosubi:: Vector{T1},qosubj:: Vector{T2},qoval:: Vector{T3})\nputqobj(task:: MSKtask,Qk:: SparseMatrixCSC{Float64})\nputqobj(task_:: MSKtask,qosubi_:: Vector{Int32},qosubj_:: Vector{Int32},qoval_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nqosubi :: Vector{Int32}. Row subscripts for quadratic objective coefficients.\nqosubj :: Vector{Int32}. Column subscripts for quadratic objective coefficients.\nqoval :: Vector{Float64}. Quadratic objective coefficient values.\nQk :: SparseMatrixCSC{Float64}. The symmetric matrix 1/2 (Qk\' + Qk) is used\n\nReplace all quadratic terms in the objective. If the objective has the form\n\n frac12 sum_i=0^+1numvar sum_j=0^+1numvar q_ij^o x_i x_j + sum_j=0^+1numvar c_j x_j + c^f\n\nthen this function sets all the quadratic terms to zero and then performs the update:\n\n q_mathttqosubitmathttqosubjt^o = q_mathttmathttqosubjtqosubit^o = q_mathttmathttqosubjtqosubit^o  + mathttqovalt\n\nfor t=1ldots+1numqonz.\n\nSee the description of Mosek.putqcon for important remarks and example.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putqobjij",
    "page": "API Reference",
    "title": "Mosek.putqobjij",
    "category": "function",
    "text": "putqobjij{T1,T2,T3}(task:: MSKtask,i:: T1,j:: T2,qoij:: T3)\nputqobjij(task_:: MSKtask,i_:: Int32,j_:: Int32,qoij_:: Float64)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Row index for the coefficient to be replaced.\nj :: Int32. Column index for the coefficient to be replaced.\nqoij :: Float64. The new coefficient value.\n\nReplaces one coefficient in the quadratic term in the objective. The function performs the assignment\n\n q_ij^o = q_ji^o = mathttqoij\n\nOnly the elements in the lower triangular part are accepted. Setting q_ij with ji will cause an error.\n\nPlease note that replacing all quadratic elements one by one is more computationally expensive than replacing them all at once. Use Mosek.putqobj instead whenever possible.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putskc",
    "page": "API Reference",
    "title": "Mosek.putskc",
    "category": "function",
    "text": "putskc(task_:: MSKtask,whichsol_:: Soltype,skc_:: Vector{Stakey})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nskc :: Vector{Int32}. Status keys for the constraints.\n\nSets the status keys for the constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putskcslice",
    "page": "API Reference",
    "title": "Mosek.putskcslice",
    "category": "function",
    "text": "putskcslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,skc:: Vector{Stakey})\nputskcslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,skc_:: Vector{Stakey})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nskc :: Vector{Int32}. Status keys for the constraints.\n\nSets the status keys for a slice of the constraints.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putskx",
    "page": "API Reference",
    "title": "Mosek.putskx",
    "category": "function",
    "text": "putskx(task_:: MSKtask,whichsol_:: Soltype,skx_:: Vector{Stakey})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nskx :: Vector{Int32}. Status keys for the variables.\n\nSets the status keys for the scalar variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putskxslice",
    "page": "API Reference",
    "title": "Mosek.putskxslice",
    "category": "function",
    "text": "putskxslice{T2,T3}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,skx:: Vector{Stakey})\nputskxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,skx_:: Vector{Stakey})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nskx :: Vector{Int32}. Status keys for the variables.\n\nSets the status keys for a slice of the variables.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putslc",
    "page": "API Reference",
    "title": "Mosek.putslc",
    "category": "function",
    "text": "putslc{T2}(task:: MSKtask,whichsol:: Soltype,slc:: Vector{T2})\nputslc(task_:: MSKtask,whichsol_:: Soltype,slc_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nslc :: Vector{Float64}. Dual variables corresponding to the lower bounds on the constraints.\n\nSets the s_l^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putslcslice",
    "page": "API Reference",
    "title": "Mosek.putslcslice",
    "category": "function",
    "text": "putslcslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,slc:: Vector{T4})\nputslcslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,slc_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nslc :: Vector{Float64}. Dual variables corresponding to the lower bounds on the constraints.\n\nSets a slice of the s_l^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putslx",
    "page": "API Reference",
    "title": "Mosek.putslx",
    "category": "function",
    "text": "putslx{T2}(task:: MSKtask,whichsol:: Soltype,slx:: Vector{T2})\nputslx(task_:: MSKtask,whichsol_:: Soltype,slx_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nslx :: Vector{Float64}. Dual variables corresponding to the lower bounds on the variables.\n\nSets the s_l^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putslxslice",
    "page": "API Reference",
    "title": "Mosek.putslxslice",
    "category": "function",
    "text": "putslxslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,slx:: Vector{T4})\nputslxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,slx_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nslx :: Vector{Float64}. Dual variables corresponding to the lower bounds on the variables.\n\nSets a slice of the s_l^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsnx",
    "page": "API Reference",
    "title": "Mosek.putsnx",
    "category": "function",
    "text": "putsnx{T2}(task:: MSKtask,whichsol:: Soltype,sux:: Vector{T2})\nputsnx(task_:: MSKtask,whichsol_:: Soltype,sux_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsux :: Vector{Float64}. Dual variables corresponding to the upper bounds on the variables.\n\nSets the s_n^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsnxslice",
    "page": "API Reference",
    "title": "Mosek.putsnxslice",
    "category": "function",
    "text": "putsnxslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,snx:: Vector{T4})\nputsnxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,snx_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nsnx :: Vector{Float64}. Dual variables corresponding to the conic constraints on the variables.\n\nSets a slice of the s_n^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsolution",
    "page": "API Reference",
    "title": "Mosek.putsolution",
    "category": "function",
    "text": "putsolution{T5,T6,T7,T8,T9,T10,T11,T12}(task:: MSKtask,whichsol:: Soltype,skc:: Vector{Stakey},skx:: Vector{Stakey},skn:: Vector{Stakey},xc:: Vector{T5},xx:: Vector{T6},y:: Vector{T7},slc:: Vector{T8},suc:: Vector{T9},slx:: Vector{T10},sux:: Vector{T11},snx:: Vector{T12})\nputsolution(task_:: MSKtask,whichsol_:: Soltype,skc_:: Vector{Stakey},skx_:: Vector{Stakey},skn_:: Vector{Stakey},xc_:: Vector{Float64},xx_:: Vector{Float64},y_:: Vector{Float64},slc_:: Vector{Float64},suc_:: Vector{Float64},slx_:: Vector{Float64},sux_:: Vector{Float64},snx_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nskc :: Vector{Int32}. Status keys for the constraints.\nskx :: Vector{Int32}. Status keys for the variables.\nskn :: Vector{Int32}. Status keys for the conic constraints.\nxc :: Vector{Float64}. Primal constraint solution.\nxx :: Vector{Float64}. Primal variable solution.\ny :: Vector{Float64}. Vector of dual variables corresponding to the constraints.\nslc :: Vector{Float64}. Dual variables corresponding to the lower bounds on the constraints.\nsuc :: Vector{Float64}. Dual variables corresponding to the upper bounds on the constraints.\nslx :: Vector{Float64}. Dual variables corresponding to the lower bounds on the variables.\nsux :: Vector{Float64}. Dual variables corresponding to the upper bounds on the variables.\nsnx :: Vector{Float64}. Dual variables corresponding to the conic constraints on the variables.\n\nInserts a solution into the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsolutioni",
    "page": "API Reference",
    "title": "Mosek.putsolutioni",
    "category": "function",
    "text": "putsolutioni{T2,T5,T6,T7,T8}(task:: MSKtask,accmode:: Accmode,i:: T2,whichsol:: Soltype,sk:: Stakey,x:: T5,sl:: T6,su:: T7,sn:: T8)\nputsolutioni(task_:: MSKtask,accmode_:: Accmode,i_:: Int32,whichsol_:: Soltype,sk_:: Stakey,x_:: Float64,sl_:: Float64,su_:: Float64,sn_:: Float64)\n\ntask :: MSKtask. An optimization task.\naccmode :: Accmode. Defines whether solution information for a constraint or for a variable is modified.\ni :: Int32. Index of the constraint or variable.\nwhichsol :: Soltype. Selects a solution.\nsk :: Stakey. Status key of the constraint or variable.\nx :: Float64. Solution value of the primal constraint or variable.\nsl :: Float64. Solution value of the dual variable associated with the lower bound.\nsu :: Float64. Solution value of the dual variable associated with the upper bound.\nsn :: Float64. Solution value of the dual variable associated with the conic constraint.\n\nSets the primal and dual solution information for a single constraint or variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsolutionyi",
    "page": "API Reference",
    "title": "Mosek.putsolutionyi",
    "category": "function",
    "text": "putsolutionyi{T1,T3}(task:: MSKtask,i:: T1,whichsol:: Soltype,y:: T3)\nputsolutionyi(task_:: MSKtask,i_:: Int32,whichsol_:: Soltype,y_:: Float64)\n\ntask :: MSKtask. An optimization task.\ni :: Int32. Index of the dual variable.\nwhichsol :: Soltype. Selects a solution.\ny :: Float64. Solution value of the dual variable.\n\nInputs the dual variable of a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putstrparam",
    "page": "API Reference",
    "title": "Mosek.putstrparam",
    "category": "function",
    "text": "putstrparam(task_:: MSKtask,param_:: Sparam,parvalue_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nparam :: Sparam. Which parameter.\nparvalue :: String. Parameter value.\n\nSets the value of a string parameter.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsuc",
    "page": "API Reference",
    "title": "Mosek.putsuc",
    "category": "function",
    "text": "putsuc{T2}(task:: MSKtask,whichsol:: Soltype,suc:: Vector{T2})\nputsuc(task_:: MSKtask,whichsol_:: Soltype,suc_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsuc :: Vector{Float64}. Dual variables corresponding to the upper bounds on the constraints.\n\nSets the s_u^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsucslice",
    "page": "API Reference",
    "title": "Mosek.putsucslice",
    "category": "function",
    "text": "putsucslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,suc:: Vector{T4})\nputsucslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,suc_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nsuc :: Vector{Float64}. Dual variables corresponding to the upper bounds on the constraints.\n\nSets a slice of the s_u^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsux",
    "page": "API Reference",
    "title": "Mosek.putsux",
    "category": "function",
    "text": "putsux{T2}(task:: MSKtask,whichsol:: Soltype,sux:: Vector{T2})\nputsux(task_:: MSKtask,whichsol_:: Soltype,sux_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nsux :: Vector{Float64}. Dual variables corresponding to the upper bounds on the variables.\n\nSets the s_u^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putsuxslice",
    "page": "API Reference",
    "title": "Mosek.putsuxslice",
    "category": "function",
    "text": "putsuxslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,sux:: Vector{T4})\nputsuxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,sux_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nsux :: Vector{Float64}. Dual variables corresponding to the upper bounds on the variables.\n\nSets a slice of the s_u^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.puttaskname",
    "page": "API Reference",
    "title": "Mosek.puttaskname",
    "category": "function",
    "text": "puttaskname(task_:: MSKtask,taskname_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\ntaskname :: String. Name assigned to the task.\n\nAssigns a new name to the task.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putvarbound",
    "page": "API Reference",
    "title": "Mosek.putvarbound",
    "category": "function",
    "text": "putvarbound{T1,T3,T4}(task:: MSKtask,j:: T1,bk:: Boundkey,bl:: T3,bu:: T4)\nputvarbound(task_:: MSKtask,j_:: Int32,bk_:: Boundkey,bl_:: Float64,bu_:: Float64)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable.\nbk :: Boundkey. New bound key.\nbl :: Float64. New lower bound.\nbu :: Float64. New upper bound.\n\nChanges the bounds for one variable.\n\nIf the bound value specified is numerically larger than MSK_DPAR_DATA_TOL_BOUND_INFit is considered infinite and the bound key is changed accordingly. If a bound value is numerically larger thanMSKDPARDATATOLBOUND_WRN``, a warning will be displayed, but the bound is inputted as specified.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putvarboundlist",
    "page": "API Reference",
    "title": "Mosek.putvarboundlist",
    "category": "function",
    "text": "putvarboundlist{T1,T3,T4}(task:: MSKtask,sub:: Vector{T1},bkx:: Vector{Boundkey},blx:: Vector{T3},bux:: Vector{T4})\nputvarboundlist(task_:: MSKtask,sub_:: Vector{Int32},bkx_:: Vector{Boundkey},blx_:: Vector{Float64},bux_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nsub :: Vector{Int32}. List of variable indexes.\nbkx :: Vector{Int32}. Bound keys for the variables.\nblx :: Vector{Float64}. Lower bounds for the variables.\nbux :: Vector{Float64}. Upper bounds for the variables.\n\nChanges the bounds for one or more variables. If multiple bound changes are specified for a variable, then only the last change takes effect. Data checks are performed as in Mosek.putvarbound.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putvarboundslice",
    "page": "API Reference",
    "title": "Mosek.putvarboundslice",
    "category": "function",
    "text": "putvarboundslice{T1,T2,T4,T5}(task:: MSKtask,first:: T1,last:: T2,bk:: Vector{Boundkey},bl:: Vector{T4},bu:: Vector{T5})\nputvarboundslice(task_:: MSKtask,first_:: Int32,last_:: Int32,bk_:: Vector{Boundkey},bl_:: Vector{Float64},bu_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nbk :: Vector{Int32}. Bound keys.\nbl :: Vector{Float64}. Values for lower bounds.\nbu :: Vector{Float64}. Values for upper bounds.\n\nChanges the bounds for a slice of the variables. Data checks are performed as in Mosek.putvarbound.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putvarname",
    "page": "API Reference",
    "title": "Mosek.putvarname",
    "category": "function",
    "text": "putvarname{T1}(task:: MSKtask,j:: T1,name:: AbstractString)\nputvarname(task_:: MSKtask,j_:: Int32,name_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable.\nname :: String. The variable name.\n\nSets the name of a variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putvartype",
    "page": "API Reference",
    "title": "Mosek.putvartype",
    "category": "function",
    "text": "putvartype{T1}(task:: MSKtask,j:: T1,vartype:: Variabletype)\nputvartype(task_:: MSKtask,j_:: Int32,vartype_:: Variabletype)\n\ntask :: MSKtask. An optimization task.\nj :: Int32. Index of the variable.\nvartype :: Variabletype. The new variable type.\n\nSets the variable type of one variable.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putvartypelist",
    "page": "API Reference",
    "title": "Mosek.putvartypelist",
    "category": "function",
    "text": "putvartypelist{T1}(task:: MSKtask,subj:: Vector{T1},vartype:: Vector{Variabletype})\nputvartypelist(task_:: MSKtask,subj_:: Vector{Int32},vartype_:: Vector{Variabletype})\n\ntask :: MSKtask. An optimization task.\nsubj :: Vector{Int32}. A list of variable indexes for which the variable type should be changed.\nvartype :: Vector{Int32}. A list of variable types.\n\nSets the variable type for one or more variables. If the same index is specified multiple times in subj only the last entry takes effect.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putxc",
    "page": "API Reference",
    "title": "Mosek.putxc",
    "category": "function",
    "text": "xc = putxc(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nxc :: Vector{Float64}. Primal constraint solution.\n\nSets the x^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putxcslice",
    "page": "API Reference",
    "title": "Mosek.putxcslice",
    "category": "function",
    "text": "putxcslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,xc:: Vector{T4})\nputxcslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,xc_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nxc :: Vector{Float64}. Primal constraint solution.\n\nSets a slice of the x^c vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putxx",
    "page": "API Reference",
    "title": "Mosek.putxx",
    "category": "function",
    "text": "putxx{T2}(task:: MSKtask,whichsol:: Soltype,xx:: Vector{T2})\nputxx(task_:: MSKtask,whichsol_:: Soltype,xx_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nxx :: Vector{Float64}. Primal variable solution.\n\nSets the x^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putxxslice",
    "page": "API Reference",
    "title": "Mosek.putxxslice",
    "category": "function",
    "text": "putxxslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,xx:: Vector{T4})\nputxxslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,xx_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\nxx :: Vector{Float64}. Primal variable solution.\n\nObtains a slice of the x^x vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.puty",
    "page": "API Reference",
    "title": "Mosek.puty",
    "category": "function",
    "text": "puty{T2}(task:: MSKtask,whichsol:: Soltype,y:: Vector{T2})\nputy(task_:: MSKtask,whichsol_:: Soltype,y_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\ny :: Vector{Float64}. Vector of dual variables corresponding to the constraints.\n\nSets the y vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.putyslice",
    "page": "API Reference",
    "title": "Mosek.putyslice",
    "category": "function",
    "text": "putyslice{T2,T3,T4}(task:: MSKtask,whichsol:: Soltype,first:: T2,last:: T3,y:: Vector{T4})\nputyslice(task_:: MSKtask,whichsol_:: Soltype,first_:: Int32,last_:: Int32,y_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfirst :: Int32. First index in the sequence.\nlast :: Int32. Last index plus 1 in the sequence.\ny :: Vector{Float64}. Vector of dual variables corresponding to the constraints.\n\nSets a slice of the y vector for a solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.readdata",
    "page": "API Reference",
    "title": "Mosek.readdata",
    "category": "function",
    "text": "readdata(task_:: MSKtask,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\n\nReads an optimization problem and associated data from a file.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.readdataformat",
    "page": "API Reference",
    "title": "Mosek.readdataformat",
    "category": "function",
    "text": "readdataformat(task_:: MSKtask,filename_:: AbstractString,format_:: Dataformat,compress_:: Compresstype)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\nformat :: Dataformat. File data format.\ncompress :: Compresstype. File compression type.\n\nReads an optimization problem and associated data from a file.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.readparamfile",
    "page": "API Reference",
    "title": "Mosek.readparamfile",
    "category": "function",
    "text": "readparamfile(task_:: MSKtask,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\n\nReads MOSEK parameters from a file. Data is read from the file filename if it is a nonempty string. Otherwise data is read from the file specified by :msk:sparam:param_read_file_name.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.readsolution",
    "page": "API Reference",
    "title": "Mosek.readsolution",
    "category": "function",
    "text": "readsolution(task_:: MSKtask,whichsol_:: Soltype,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfilename :: String. A valid file name.\n\nReads a solution file and inserts it as a specified solution in the task. Data is read from the file filename if it is a nonempty string. Otherwise data is read from one of the files specified by :msk:sparam:bas_sol_file_name, :msk:sparam:itr_sol_file_name or :msk:sparam:int_sol_file_name depending on which solution is chosen.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.readsummary",
    "page": "API Reference",
    "title": "Mosek.readsummary",
    "category": "function",
    "text": "readsummary(task_:: MSKtask,whichstream_:: Streamtype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\n\nPrints a short summary of last file that was read.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.readtask",
    "page": "API Reference",
    "title": "Mosek.readtask",
    "category": "function",
    "text": "readtask(task_:: MSKtask,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\n\nLoad task data from a file, replacing any data that already exists in the task object. All problem data, parameters and other settings are resorted, but if the file contains solutions, the solution status after loading a file is set to unknown, even if it was optimal or otherwise well-defined when the file was dumped.\n\nSee section :ref:doc.shared.taskformat for a description of the Task format.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.removebarvars",
    "page": "API Reference",
    "title": "Mosek.removebarvars",
    "category": "function",
    "text": "removebarvars{T1}(task:: MSKtask,subset:: Vector{T1})\nremovebarvars(task_:: MSKtask,subset_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nsubset :: Vector{Int32}. Indexes of symmetric matrices which should be removed.\n\nThe function removes a subset of the symmetric matrices  from the optimization task. This implies that the remaining symmetric matrices are renumbered.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.removecones",
    "page": "API Reference",
    "title": "Mosek.removecones",
    "category": "function",
    "text": "removecones{T1}(task:: MSKtask,subset:: Vector{T1})\nremovecones(task_:: MSKtask,subset_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nsubset :: Vector{Int32}. Indexes of cones which should be removed.\n\nRemoves a number of conic constraints from the problem. This implies that the remaining conic constraints are renumbered. In general, it is much more efficient to remove a cone with a high index than a low index.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.removecons",
    "page": "API Reference",
    "title": "Mosek.removecons",
    "category": "function",
    "text": "removecons{T1}(task:: MSKtask,subset:: Vector{T1})\nremovecons(task_:: MSKtask,subset_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nsubset :: Vector{Int32}. Indexes of constraints which should be removed.\n\nThe function removes a subset of the constraints  from the optimization task. This implies that the remaining constraints are renumbered.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.removevars",
    "page": "API Reference",
    "title": "Mosek.removevars",
    "category": "function",
    "text": "removevars{T1}(task:: MSKtask,subset:: Vector{T1})\nremovevars(task_:: MSKtask,subset_:: Vector{Int32})\n\ntask :: MSKtask. An optimization task.\nsubset :: Vector{Int32}. Indexes of variables which should be removed.\n\nThe function removes a subset of the variables  from the optimization task. This implies that the remaining variables are renumbered.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.resizetask",
    "page": "API Reference",
    "title": "Mosek.resizetask",
    "category": "function",
    "text": "resizetask{T1,T2,T3,T4,T5}(task:: MSKtask,maxnumcon:: T1,maxnumvar:: T2,maxnumcone:: T3,maxnumanz:: T4,maxnumqnz:: T5)\nresizetask(task_:: MSKtask,maxnumcon_:: Int32,maxnumvar_:: Int32,maxnumcone_:: Int32,maxnumanz_:: Int64,maxnumqnz_:: Int64)\n\ntask :: MSKtask. An optimization task.\nmaxnumcon :: Int32. New maximum number of constraints.\nmaxnumvar :: Int32. New maximum number of variables.\nmaxnumcone :: Int32. New maximum number of cones.\nmaxnumanz :: Int64. New maximum number of linear non-zero elements.\nmaxnumqnz :: Int64. New maximum number of quadratic non-zeros elements.\n\nSets the amount of preallocated space assigned for each type of data in an optimization task.\n\nIt is never mandatory to call this function, since it only gives  a hint about the amount of data to preallocate for efficiency reasons.\n\nPlease note that the procedure is destructive in the sense that all existing data stored in the task is destroyed.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.sensitivityreport",
    "page": "API Reference",
    "title": "Mosek.sensitivityreport",
    "category": "function",
    "text": "sensitivityreport(task_:: MSKtask,whichstream_:: Streamtype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\n\nReads a sensitivity format file from a location given by :msk:sparam:sensitivity_file_name and writes the result to the stream whichstream. If :msk:sparam:sensitivity_res_file_name is set to a non-empty string, then the sensitivity report is also written to a file of this name.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.setdefaults",
    "page": "API Reference",
    "title": "Mosek.setdefaults",
    "category": "function",
    "text": "setdefaults(task_:: MSKtask)\n\ntask :: MSKtask. An optimization task.\n\nResets all the parameters to their default values.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.solutiondef",
    "page": "API Reference",
    "title": "Mosek.solutiondef",
    "category": "function",
    "text": "isdef = solutiondef(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nisdef :: Bool. Is non-zero if the requested solution is defined.\n\nChecks whether a solution is defined.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.solutionsummary",
    "page": "API Reference",
    "title": "Mosek.solutionsummary",
    "category": "function",
    "text": "solutionsummary(task_:: MSKtask,whichstream_:: Streamtype)\n\ntask :: MSKtask. An optimization task.\nwhichstream :: Streamtype. Index of the stream.\n\nPrints a short summary of the current solutions.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.solvewithbasis",
    "page": "API Reference",
    "title": "Mosek.solvewithbasis",
    "category": "function",
    "text": "numnz = solvewithbasis{T1,T2,T3,T4}(task:: MSKtask,transp:: T1,numnz:: T2,sub:: Vector{T3},val:: Vector{T4})\nnumnz = solvewithbasis(task_:: MSKtask,transp_:: Int32,numnz_:: Int32,sub_:: Vector{Int32},val_:: Vector{Float64})\n\ntask :: MSKtask. An optimization task.\ntransp :: Int32. Controls which problem formulation is solved.\nnumnz :: Int32. Input (number of non-zeros in right-hand side) and output (number of non-zeros in solution vector).\nsub :: Vector{Int32}. Input (indexes of non-zeros in right-hand side) and output (indexes of non-zeros in solution vector).\nval :: Vector{Float64}. Input (right-hand side values) and output (solution vector values).\n\nIf a basic solution is available, then exactly numcon basis variables are defined.  These numcon basis variables are denoted the basis.  Associated with the basis is a basis matrix denoted B.  This function solves either the linear equation system\n\nlabel ais-eq-Bxb\n\nB bar X = b                       \n\nor the system\n\nlabel ais-eq-Btxb\n\nB^T bar X = b\n\nfor the unknowns bar X, with b being a user-defined  vector.                     In order to make sense of the solution bar X it is important to know the ordering of the variables in the basis because the ordering specifies how B is constructed. When calling Mosek.initbasissolve an ordering of the basis variables is obtained, which can be used to deduce how MOSEK has constructed B. Indeed if the k-th basis variable is variable x_j it implies that\n\n B_ik = A_ij i=1ldots+1numcon\n\nOtherwise if the k-th basis variable is variable x_j^c it implies that\n\nB_ik = left beginarrayll\n                        -1  i = j \n                        0   i neq j \n                    endarray \n            right\n\nThe function Mosek.initbasissolve must be called before a call to this function. Please note that this function exploits the sparsity in the vector b to speed up the computations.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.strtoconetype",
    "page": "API Reference",
    "title": "Mosek.strtoconetype",
    "category": "function",
    "text": "conetype = strtoconetype(task_:: MSKtask,str_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nstr :: String. String corresponding to the cone type code.\nconetype :: Conetype. The cone type corresponding to str.\n\nObtains cone type code corresponding to a cone type string.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.strtosk",
    "page": "API Reference",
    "title": "Mosek.strtosk",
    "category": "function",
    "text": "sk = strtosk(task_:: MSKtask,str_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nstr :: String. Status key string.\nsk :: Int32. Status key corresponding to the string.\n\nObtains the status key corresponding to an explanatory string.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.updatesolutioninfo",
    "page": "API Reference",
    "title": "Mosek.updatesolutioninfo",
    "category": "function",
    "text": "updatesolutioninfo(task_:: MSKtask,whichsol_:: Soltype)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\n\nUpdate the information items related to the solution.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.writedata",
    "page": "API Reference",
    "title": "Mosek.writedata",
    "category": "function",
    "text": "writedata(task_:: MSKtask,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\n\nWrites problem data associated with the optimization task to a file in one of the supported formats. See Section :ref:doc.shared.file_formats for the complete list.\n\nBy default the data file format is determined by the file name extension. This behaviour can be overridden by setting the MSK_IPAR_WRITE_DATA_FORMATparameter. To write in compressed format append the extension.gz.  E.g to write a gzip compressed MPS file use the extensionmps.gz`.\n\nPlease note that MPS, LP and OPF files require all variables to have unique names. If a task contains no names, it is possible to write the file with automatically generated anonymous names by setting the MSK_IPAR_WRITE_GENERIC_NAMESparameter toMSK_ON`.\n\nData is written to the file filename if it is a nonempty string. Otherwise data is written to the file specified by :msk:sparam:data_file_name.\n\nPlease note that if a general nonlinear function appears in the problem then such function cannot be written to file and MOSEK will issue a warning.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.writejsonsol",
    "page": "API Reference",
    "title": "Mosek.writejsonsol",
    "category": "function",
    "text": "writejsonsol(task_:: MSKtask,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\n\nSaves the current solutions and solver information items in a JSON file.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.writeparamfile",
    "page": "API Reference",
    "title": "Mosek.writeparamfile",
    "category": "function",
    "text": "writeparamfile(task_:: MSKtask,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\n\nWrites all the parameters to a parameter file.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.writesolution",
    "page": "API Reference",
    "title": "Mosek.writesolution",
    "category": "function",
    "text": "writesolution(task_:: MSKtask,whichsol_:: Soltype,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nwhichsol :: Soltype. Selects a solution.\nfilename :: String. A valid file name.\n\nSaves the current basic, interior-point, or integer solution to a file.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.writetask",
    "page": "API Reference",
    "title": "Mosek.writetask",
    "category": "function",
    "text": "writetask(task_:: MSKtask,filename_:: AbstractString)\n\ntask :: MSKtask. An optimization task.\nfilename :: String. A valid file name.\n\nWrite a binary dump of the task data. This format saves all problem data, coefficients and parameter settings but does not save callback functions and general non-linear terms.\n\nSee section :ref:doc.shared.taskformat for a description of the Task format.\n\n\n\n\n\n"
},

{
    "location": "Mosek-Functions/#Mosek.jl-Functions-1",
    "page": "API Reference",
    "title": "Mosek.jl Functions",
    "category": "section",
    "text": "analyzenames\nanalyzeproblem\nanalyzesolution\nappendbarvars\nappendcone\nappendconeseq\nappendconesseq\nappendcons\nappendsparsesymmat\nappendvars\nbasiscond\nbktostr\ncallbackcodetostr\ncheckconvexity\ncheckinall\ncheckinlicense\ncheckmem\ncheckoutlicense\nchgbound\nchgconbound\nchgvarbound\ncommitchanges\nconetypetostr\ndeletesolution\ndualsensitivity\nechointro\ngetacol\ngetacolnumnz\ngetacolslicetrip\ngetaij\ngetapiecenumnz\ngetarow\ngetarownumnz\ngetarowslicetrip\ngetaslice\ngetaslicenumnz\ngetbarablocktriplet\ngetbaraidx\ngetbaraidxij\ngetbaraidxinfo\ngetbarasparsity\ngetbarcblocktriplet\ngetbarcidx\ngetbarcidxinfo\ngetbarcidxj\ngetbarcsparsity\ngetbarsj\ngetbarvarname\ngetbarvarnameindex\ngetbarvarnamelen\ngetbarxj\ngetbound\ngetboundslice\ngetc\ngetcfix\ngetcj\ngetcodedesc\ngetconbound\ngetconboundslice\ngetcone\ngetconeinfo\ngetconename\ngetconenameindex\ngetconenamelen\ngetconname\ngetconnameindex\ngetconnamelen\ngetcslice\ngetdimbarvarj\ngetdouinf\ngetdouparam\ngetdualobj\ngetdualsolutionnorms\ngetdviolbarvar\ngetdviolcon\ngetdviolcones\ngetdviolvar\ngetinfeasiblesubproblem\ngetinfname\ngetintinf\ngetintparam\ngetlenbarvarj\ngetlintinf\ngetmaxnumanz\ngetmaxnumbarvar\ngetmaxnumcon\ngetmaxnumcone\ngetmaxnumqnz\ngetmaxnumvar\ngetmemusage\ngetnadouinf\ngetnadouparam\ngetnaintinf\ngetnaintparam\ngetnastrparam\ngetnumanz\ngetnumanz64\ngetnumbarablocktriplets\ngetnumbaranz\ngetnumbarcblocktriplets\ngetnumbarcnz\ngetnumbarvar\ngetnumcon\ngetnumcone\ngetnumconemem\ngetnumintvar\ngetnumparam\ngetnumqconknz\ngetnumqobjnz\ngetnumsymmat\ngetnumvar\ngetobjname\ngetobjnamelen\ngetobjsense\ngetparamname\ngetprimalobj\ngetprimalsolutionnorms\ngetprobtype\ngetprosta\ngetpviolbarvar\ngetpviolcon\ngetpviolcones\ngetpviolvar\ngetqconk\ngetqobj\ngetqobjij\ngetreducedcosts\ngetskc\ngetskcslice\ngetskx\ngetskxslice\ngetslc\ngetslcslice\ngetslx\ngetslxslice\ngetsnx\ngetsnxslice\ngetsolsta\ngetsolution\ngetsolutioni\ngetsolutioninfo\ngetsolutionslice\ngetsparsesymmat\ngetstrparam\ngetstrparamlen\ngetsuc\ngetsucslice\ngetsux\ngetsuxslice\ngetsymmatinfo\ngettaskname\ngettasknamelen\ngetvarbound\ngetvarboundslice\ngetvarname\ngetvarnameindex\ngetvarnamelen\ngetvartype\ngetvartypelist\ngetversion\ngetxc\ngetxcslice\ngetxx\ngetxxslice\ngety\ngetyslice\ninitbasissolve\ninputdata\nisdouparname\nisintparname\nisstrparname\nlicensecleanup\nlinkfiletostream\nonesolutionsummary\noptimize\noptimizersummary\nprimalrepair\nprimalsensitivity\nprintdata\nprintparam\nputacol\nputacollist\nputacolslice\nputaij\nputaijlist\nputarow\nputarowlist\nputarowslice\nputbarablocktriplet\nputbaraij\nputbarcblocktriplet\nputbarcj\nputbarsj\nputbarvarname\nputbarxj\nputbound\nputboundlist\nputboundslice\nputcfix\nputcj\nputclist\nputconbound\nputconboundlist\nputconboundslice\nputcone\nputconename\nputconname\nputcslice\nputdouparam\nputintparam\nputlicensecode\nputlicensedebug\nputlicensepath\nputlicensewait\nputmaxnumanz\nputmaxnumbarvar\nputmaxnumcon\nputmaxnumcone\nputmaxnumqnz\nputmaxnumvar\nputnadouparam\nputnaintparam\nputnastrparam\nputobjname\nputobjsense\nputparam\nputqcon\nputqconk\nputqobj\nputqobjij\nputskc\nputskcslice\nputskx\nputskxslice\nputslc\nputslcslice\nputslx\nputslxslice\nputsnx\nputsnxslice\nputsolution\nputsolutioni\nputsolutionyi\nputstrparam\nputsuc\nputsucslice\nputsux\nputsuxslice\nputtaskname\nputvarbound\nputvarboundlist\nputvarboundslice\nputvarname\nputvartype\nputvartypelist\nputxc\nputxcslice\nputxx\nputxxslice\nputy\nputyslice\nreaddata\nreaddataformat\nreadparamfile\nreadsolution\nreadsummary\nreadtask\nremovebarvars\nremovecones\nremovecons\nremovevars\nresizetask\nsensitivityreport\nsetdefaults\nsolutiondef\nsolutionsummary\nsolvewithbasis\nstrtoconetype\nstrtosk\nupdatesolutioninfo\nwritedata\nwritejsonsol\nwriteparamfile\nwritesolution\nwritetask"
},

{
    "location": "geco/#",
    "page": "General Convex API",
    "title": "General Convex API",
    "category": "page",
    "text": "CurrentModule = Mosek"
},

{
    "location": "geco/#Mosek.putnlcallbacks",
    "page": "General Convex API",
    "title": "Mosek.putnlcallbacks",
    "category": "function",
    "text": "putnlcallbacks(task::MSKtask,\n               grdobjsub :: Vector{Int},\n               grdconsub :: Vector{Int},\n               grdconptr :: Vector{Int},\n               hessubi   :: Vector{Int},\n               hessubj   :: Vector{Int},\n               evalobj   :: Function,\n               evalconi  :: Function,\n               grdlag    :: Function,\n               grdobj    :: Function,\n               grdconi   :: Function,\n               heslag    :: Function)\n\nThis sets up the structure of the non-linear terms and sets the non-linear callback functions.\n\ngrdobjsub The subscripts of the variables that appear in non-linear terms in the objective.\ngrdconsub The subscripts of the variables that appear in constraints. \ngrdconptr Defines the positions in grdconsub where rows begin, so that grdconsub[grdconptr[i]] is the index of the first non-linear variable in constraint i. \nhessubi Row subscripts of the non-zero elements of the Hessian of the Lagrangian. This matrix is symmetrix and only elements in the lower triangular should be inputted.\nhessubj Column subscripts of the non-zero elements of the Hessian of the Lagrangian. This matrix is symmetrix and only elements in the lower triangular should be inputted.\nevalobj Function that evaluates the non-linear part of the objective at a given point. See below.\nevalconi Function that evaluates the non-linear part of a constraint at a given point. See below.\ngrdlag Function that evaluates the gradient of the Lagrangian at a given point. See below.\ngrdobj Function that evluates the gradient of the objective at a given point. See below.\ngrdconi Function that evaluates the gradient of a constraint at a given point. See below.\nheslag Function that evaluates the Hessian of the Lagrangian at a given point. See below.\n\nThe Lagrangian of the non-linear part of the problem has the following form:\n\nmathcalL(xyoyc) = mboxyocdot f_0(x) + sum^m_i=1 mboxyc_icdot f_i(x)\n\nIt is the first and second derivatives of this that should be computed. The following sections show the form of the callback functions. \n\nevalobj\n\nfunction evalobj(x::Vector{Float64}) -> Float64\n\nEvaluate the non-linear part of the objective at the point x.\n\nevalconi\n\nfunction evalconi(x:: Vector{Float64},i:: Int32) -> Float64\n\nEvaluate the non-linear part of constraint i at the point x.\n\ngrdlag\n\nfunction grdlag\n( x   :: Vector{Float64},\n  yo  :: Float64,\n  yc  :: Vector{Float64},\n  subi:: Vector{Int32},\n  val :: Vector{Float64} )\n\nEvaluate the gradient of the Lagrangian\n\nmboxyocdot f_0(x) + sum_i mboxyc_i f_mboxsubii(x)\n\nEvaluate the gradient of the Lagrangian at the point x. Here\n\nx is the point where the function should be evaluated.\nyo the multiplier for the objective gradient\nsubi the indexes of the constraints that should be included in the Lagrangian\nyc the multipliers for the constraints that should be included in the Lagrangian\nval a vector of length numvar where the gradient values are returned. Only the non-zero places should be overwritten.\n\ngrdobj\n\nfunction grdobj\n( x  :: Vector{Float64},\n  sub:: Vector{Int32}, \n  val:: Vector{Float64} )\n\nEvaluate the gradient of f_0:\n\nmboxvalk leftarrow fracddx_mboxsubk f_0(x)\n\nx is the point where the function should be evaluated\nsub the variable subscripts corresponding to the non-zero places in the objective\nval the array that return the gradient values\n\ngrdconi\n\nfunction grdconi\n( x  :: Vector{Float64},\n  i  :: Int32, \n  sub:: Vector{Int32}, \n  val:: Vector{Float64})\n\nEvaluate the gradient of :math:f_i:\n\nmboxvalk leftarrow fracddx_mboxsubk f_i(x)\n\nx is the point where the function should be evaluated\ni the constraint index \nsub the variable subscripts corresponding to the non-zero places in the constraint\nval the array that return the gradient values\n\nheslag\n\nfunction heslag\n( x ::      Vector{Float64},\n  yo::      Float64,\n  yc::      Vector{Float64},\n  subi::    Vector{Int32},\n  hessubi:: Vector{Int32},\n  hessubj:: Vector{Int32},\n  hesval::  Vector{Float64})\n\nEvaluate the Hessian of the Lagrangian:\n\nfracd^2dx^2 mathcalL(xyoyc)\n\nNote that the Hessian is symmetric. Only elements from the lower triangular part should be inputted, i.e. all elements\n\nfracd^2dx_idx_j mathcalL(xyoyc) jleq i\n\nx is the point where the function should be evaluated.\nyo the multiplier for the objective gradient\nsubi the indexes of the constraints that should be included in the Lagrangian\nyc the multipliers for the constraints that should be included in the Lagrangian\nhessubi row subscripts of the non-zeros\nhessubj column subscripts of the non-zeros\nhesval non-zero values of the Hessian\n\n\n\n\n\n"
},

{
    "location": "geco/#Mosek.clearnlcallbacks",
    "page": "General Convex API",
    "title": "Mosek.clearnlcallbacks",
    "category": "function",
    "text": "clearnlcallbacks(task::MSKtask)\n\nRemove all non-linear callbacks from the problem.\n\n\n\n\n\n"
},

{
    "location": "geco/#General-Convex-interface-1",
    "page": "General Convex API",
    "title": "General Convex interface",
    "category": "section",
    "text": "putnlcallbacks\nclearnlcallbacks"
},

{
    "location": "parameters/#",
    "page": "Solver parameters",
    "title": "Solver parameters",
    "category": "page",
    "text": "CurrentModule = Mosek"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_ANA_SOL_BASIS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_ANA_SOL_BASIS",
    "category": "constant",
    "text": "Controls whether the basis matrix is analyzed in solution analyzer.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_ANA_SOL_PRINT_VIOLATED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_ANA_SOL_PRINT_VIOLATED",
    "category": "constant",
    "text": "Controls whether a list of violated constraints is printed.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_AUTO_SORT_A_BEFORE_OPT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_AUTO_SORT_A_BEFORE_OPT",
    "category": "constant",
    "text": "Controls whether the elements in each column of A are sorted before an optimization is performed.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_AUTO_UPDATE_SOL_INFO",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_AUTO_UPDATE_SOL_INFO",
    "category": "constant",
    "text": "Controls whether the solution information items are automatically updated after an optimization is performed.\n\nDefault value: off\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_BASIS_SOLVE_USE_PLUS_ONE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_BASIS_SOLVE_USE_PLUS_ONE",
    "category": "constant",
    "text": "Controls the sign of the columns in the basis matrix corresponding to slack variables.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_BI_CLEAN_OPTIMIZER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_BI_CLEAN_OPTIMIZER",
    "category": "constant",
    "text": "Controls which simplex optimizer is used in the clean-up phase.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_OPTIMIZER_FREE. The optimizer is chosen automatically.\nMSK_OPTIMIZER_INTPNT. The interior-point optimizer is used.\nMSK_OPTIMIZER_CONIC. The optimizer for problems having conic constraints.\nMSK_OPTIMIZER_PRIMAL_SIMPLEX. The primal simplex optimizer is used.\nMSK_OPTIMIZER_DUAL_SIMPLEX. The dual simplex optimizer is used.\nMSK_OPTIMIZER_FREE_SIMPLEX. One of the simplex optimizers is used.\nMSK_OPTIMIZER_MIXED_INT. The mixed-integer optimizer.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_BI_IGNORE_MAX_ITER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_BI_IGNORE_MAX_ITER",
    "category": "constant",
    "text": "Turns on basis identification in case the interior-point optimizer is terminated due to maximum number of iterations.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_BI_IGNORE_NUM_ERROR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_BI_IGNORE_NUM_ERROR",
    "category": "constant",
    "text": "Turns on basis identification in case the interior-point optimizer is terminated due to a numerical problem.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_BI_MAX_ITERATIONS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_BI_MAX_ITERATIONS",
    "category": "constant",
    "text": "Maximum number of iterations after basis identification.\n\nDefault value: 1000000\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_CACHE_LICENSE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_CACHE_LICENSE",
    "category": "constant",
    "text": "Control license caching.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_CHECK_CONVEXITY",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_CHECK_CONVEXITY",
    "category": "constant",
    "text": "Specify the level of convexity check on quadratic problems.\n\nDefault value: FULL\n\nPossible values:\n\nMSK_CHECK_CONVEXITY_NONE. No convexity check.\nMSK_CHECK_CONVEXITY_SIMPLE. Perform simple and fast convexity check.\nMSK_CHECK_CONVEXITY_FULL. Perform a full convexity check.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_COMPRESS_STATFILE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_COMPRESS_STATFILE",
    "category": "constant",
    "text": "Control compression of stat files.\n\nDefault value: on\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INFEAS_GENERIC_NAMES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INFEAS_GENERIC_NAMES",
    "category": "constant",
    "text": "Controls the contents of the infeasibility report.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INFEAS_PREFER_PRIMAL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INFEAS_PREFER_PRIMAL",
    "category": "constant",
    "text": "Controls which certificate is used if both primal- and dual- certificate of infeasibility is available.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INFEAS_REPORT_AUTO",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INFEAS_REPORT_AUTO",
    "category": "constant",
    "text": "Turns the feasibility report on or off.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INFEAS_REPORT_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INFEAS_REPORT_LEVEL",
    "category": "constant",
    "text": "Controls the contents of the infeasibility report.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_BASIS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_BASIS",
    "category": "constant",
    "text": "Controls whether basis identification is performed.\n\nDefault value: ALWAYS\n\nPossible values:\n\nMSK_BI_NEVER. Never do basis identification.\nMSK_BI_ALWAYS. Basis identification is always performed even if the interior-point optimizer terminates abnormally.\nMSK_BI_NO_ERROR. Basis identification is performed if the interior-point optimizer terminates without an error.\nMSK_BI_IF_FEASIBLE. Basis identification is not performed if the interior-point optimizer terminates with a problem status saying that the problem is primal or dual infeasible.\nMSK_BI_RESERVERED. Not currently in use.\n\nSee also:\n\nMSK_IPAR_BI_IGNORE_MAX_ITER. Turns on basis identification in case the interior-point optimizer is terminated due to maximum number of iterations.\nMSK_IPAR_BI_IGNORE_NUM_ERROR. Turns on basis identification in case the interior-point optimizer is terminated due to a numerical problem.\nMSK_IPAR_BI_MAX_ITERATIONS. Maximum number of iterations after basis identification.\nMSK_IPAR_BI_CLEAN_OPTIMIZER. Controls which simplex optimizer is used in the clean-up phase.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_DIFF_STEP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_DIFF_STEP",
    "category": "constant",
    "text": "Controls whether different step sizes are allowed in the primal and dual space.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_HOTSTART",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_HOTSTART",
    "category": "constant",
    "text": "Currently not in use.\n\nDefault value: none\n\nPossible values:\n\nMSK_INTPNT_HOTSTART_NONE. The interior-point optimizer performs a coldstart.\nMSK_INTPNT_HOTSTART_PRIMAL. The interior-point optimizer exploits the primal solution only.\nMSK_INTPNT_HOTSTART_DUAL. The interior-point optimizer exploits the dual solution only.\nMSK_INTPNT_HOTSTART_PRIMAL_DUAL. The interior-point optimizer exploits both the primal and dual solution.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_MAX_ITERATIONS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_MAX_ITERATIONS",
    "category": "constant",
    "text": "Controls the maximum number of iterations allowed in the interior-point optimizer.\n\nDefault value: 400\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_MAX_NUM_COR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_MAX_NUM_COR",
    "category": "constant",
    "text": "Maximum number of correction steps.\n\nDefault value: -1\n\nPossible Values: Any number between -1 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_MAX_NUM_REFINEMENT_STEPS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_MAX_NUM_REFINEMENT_STEPS",
    "category": "constant",
    "text": "Maximum number of steps to be used by the iterative search direction refinement.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_MULTI_THREAD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_MULTI_THREAD",
    "category": "constant",
    "text": "Controls whether the interior-point optimizers are allowed to employ multiple threads if more threads is available.\n\nDefault value: on\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_OFF_COL_TRH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_OFF_COL_TRH",
    "category": "constant",
    "text": "Controls the aggressiveness of the offending column detection.\n\nDefault value: 40\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_ORDER_METHOD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_ORDER_METHOD",
    "category": "constant",
    "text": "Controls the ordering strategy.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_ORDER_METHOD_FREE. The ordering method is chosen automatically.\nMSK_ORDER_METHOD_APPMINLOC. Approximate minimum local fill-in ordering is employed.\nMSK_ORDER_METHOD_EXPERIMENTAL. This option should not be used.\nMSK_ORDER_METHOD_TRY_GRAPHPAR. Always try the graph partitioning based ordering.\nMSK_ORDER_METHOD_FORCE_GRAPHPAR. Always use the graph partitioning based ordering even if it is worse than the approximate minimum local fill ordering.\nMSK_ORDER_METHOD_NONE. No ordering is used.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_REGULARIZATION_USE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_REGULARIZATION_USE",
    "category": "constant",
    "text": "Controls whether regularization is allowed.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_SCALING",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_SCALING",
    "category": "constant",
    "text": "Controls how the problem is scaled before the interior-point optimizer is used.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SCALING_FREE. The optimizer chooses the scaling heuristic.\nMSK_SCALING_NONE. No scaling is performed.\nMSK_SCALING_MODERATE. A conservative scaling is performed.\nMSK_SCALING_AGGRESSIVE. A very aggressive scaling is performed.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_SOLVE_FORM",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_SOLVE_FORM",
    "category": "constant",
    "text": "Controls whether the primal or the dual problem is solved.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SOLVE_FREE. The optimizer is free to solve either the primal or the dual problem.\nMSK_SOLVE_PRIMAL. The optimizer should solve the primal problem.\nMSK_SOLVE_DUAL. The optimizer should solve the dual problem.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_INTPNT_STARTING_POINT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_INTPNT_STARTING_POINT",
    "category": "constant",
    "text": "Starting point used by the interior-point optimizer.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_STARTING_POINT_FREE. The starting point is chosen automatically.\nMSK_STARTING_POINT_GUESS. The optimizer guesses a starting point.\nMSK_STARTING_POINT_CONSTANT. The optimizer constructs a starting point by assigning a constant value to all primal and dual variables. This starting point is normally robust.\nMSK_STARTING_POINT_SATISFY_BOUNDS. The starting point satisfies all the simple bounds on nonlinear variables.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LICENSE_DEBUG",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LICENSE_DEBUG",
    "category": "constant",
    "text": "Controls the license manager client debugging behavior.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LICENSE_PAUSE_TIME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LICENSE_PAUSE_TIME",
    "category": "constant",
    "text": "Controls license manager client behavior.\n\nDefault value: 100\n\nPossible Values: Any number between 0 and 1000000.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LICENSE_SUPPRESS_EXPIRE_WRNS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LICENSE_SUPPRESS_EXPIRE_WRNS",
    "category": "constant",
    "text": "Controls license manager client behavior.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LICENSE_TRH_EXPIRY_WRN",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LICENSE_TRH_EXPIRY_WRN",
    "category": "constant",
    "text": "Controls when expiry warnings are issued.\n\nDefault value: 7\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LICENSE_WAIT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LICENSE_WAIT",
    "category": "constant",
    "text": "Controls if MOSEK should queue for a license if none is available.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG",
    "category": "constant",
    "text": "Controls the amount of log information.\n\nDefault value: 10\n\nPossible Values: Any number between 0 and +inf.\n\nSee also:\n\nMSK_IPAR_LOG_CUT_SECOND_OPT. Controls the reduction in the log levels for the second and any subsequent optimizations.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_ANA_PRO",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_ANA_PRO",
    "category": "constant",
    "text": "Controls amount of output from the problem analyzer.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_BI",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_BI",
    "category": "constant",
    "text": "Controls the amount of output printed by the basis identification procedure. A higher level implies that more information is logged.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_BI_FREQ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_BI_FREQ",
    "category": "constant",
    "text": "Controls the logging frequency.\n\nDefault value: 2500\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_CHECK_CONVEXITY",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_CHECK_CONVEXITY",
    "category": "constant",
    "text": "Controls logging in convexity check on quadratic problems.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_CUT_SECOND_OPT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_CUT_SECOND_OPT",
    "category": "constant",
    "text": "Controls the reduction in the log levels for the second and any subsequent optimizations.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\nSee also:\n\nMSK_IPAR_LOG. Controls the amount of log information.\nMSK_IPAR_LOG_INTPNT. Controls the amount of log information from the interior-point optimizers.\nMSK_IPAR_LOG_MIO. Controls the amount of log information from the mixed-integer optimizers.\nMSK_IPAR_LOG_SIM. Controls the amount of log information from the simplex optimizers.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_EXPAND",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_EXPAND",
    "category": "constant",
    "text": "Controls the amount of logging when a data item such as the maximum number constrains is expanded.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_FEAS_REPAIR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_FEAS_REPAIR",
    "category": "constant",
    "text": "Controls the amount of output printed when performing feasibility repair. A value higher than one means extensive logging.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_FILE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_FILE",
    "category": "constant",
    "text": "If turned on, then some log info is printed when a file is written or read.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_INFEAS_ANA",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_INFEAS_ANA",
    "category": "constant",
    "text": "Controls log level for the infeasibility analyzer.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_INTPNT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_INTPNT",
    "category": "constant",
    "text": "Controls the amount of log information from the interior-point optimizers.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_MIO",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_MIO",
    "category": "constant",
    "text": "Controls the amount of log information from the mixed-integer optimizers.\n\nDefault value: 4\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_MIO_FREQ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_MIO_FREQ",
    "category": "constant",
    "text": "The mixed-integer optimizer logging frequency.\n\nDefault value: 10\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_ORDER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_ORDER",
    "category": "constant",
    "text": "If turned on, then factor lines are added to the log.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_PRESOLVE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_PRESOLVE",
    "category": "constant",
    "text": "Controls amount of output printed by the presolve procedure. A higher level implies that more information is logged.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_RESPONSE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_RESPONSE",
    "category": "constant",
    "text": "Controls amount of output printed when response codes are reported. A higher level implies that more information is logged.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_SENSITIVITY",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_SENSITIVITY",
    "category": "constant",
    "text": "Control logging in sensitivity analyzer.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_SENSITIVITY_OPT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_SENSITIVITY_OPT",
    "category": "constant",
    "text": "Control logging in sensitivity analyzer.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_SIM",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_SIM",
    "category": "constant",
    "text": "Controls the amount of log information from the simplex optimizers.\n\nDefault value: 4\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_SIM_FREQ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_SIM_FREQ",
    "category": "constant",
    "text": "Controls simplex logging frequency.\n\nDefault value: 1000\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_SIM_MINOR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_SIM_MINOR",
    "category": "constant",
    "text": "Currently not in use.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_LOG_STORAGE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_LOG_STORAGE",
    "category": "constant",
    "text": "Controls the memory related log information.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MAX_NUM_WARNINGS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MAX_NUM_WARNINGS",
    "category": "constant",
    "text": "Each warning is shown a limit number times controlled by this parameter. A negative value is identical to infinite number of times.\n\nDefault value: 10\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_BRANCH_DIR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_BRANCH_DIR",
    "category": "constant",
    "text": "Controls whether the mixed-integer optimizer is branching up or down by default.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_BRANCH_DIR_FREE. The mixed-integer optimizer decides which branch to choose.\nMSK_BRANCH_DIR_UP. The mixed-integer optimizer always chooses the up branch first.\nMSK_BRANCH_DIR_DOWN. The mixed-integer optimizer always chooses the down branch first.\nMSK_BRANCH_DIR_NEAR. Branch in direction nearest to selected fractional variable.\nMSK_BRANCH_DIR_FAR. Branch in direction farthest from selected fractional variable.\nMSK_BRANCH_DIR_ROOT_LP. Chose direction based on root lp value of selected variable.\nMSK_BRANCH_DIR_GUIDED. Branch in direction of current incumbent.\nMSK_BRANCH_DIR_PSEUDOCOST. Branch based on the pseudocost of the variable.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_CONSTRUCT_SOL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_CONSTRUCT_SOL",
    "category": "constant",
    "text": "Controls if an initial mixed integer solution should be constructed from the values of the integer variables.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_CUT_CLIQUE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_CUT_CLIQUE",
    "category": "constant",
    "text": "Controls whether clique cuts should be generated.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_CUT_CMIR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_CUT_CMIR",
    "category": "constant",
    "text": "Controls whether mixed integer rounding cuts should be generated.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_CUT_GMI",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_CUT_GMI",
    "category": "constant",
    "text": "Controls whether GMI cuts should be generated.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_CUT_IMPLIED_BOUND",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_CUT_IMPLIED_BOUND",
    "category": "constant",
    "text": "Controls whether implied bound cuts should be generated.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_CUT_KNAPSACK_COVER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_CUT_KNAPSACK_COVER",
    "category": "constant",
    "text": "Controls whether knapsack cover cuts should be generated.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_CUT_SELECTION_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_CUT_SELECTION_LEVEL",
    "category": "constant",
    "text": "Controlls how aggresively generated cuts are selected to be inluded in the relaxation.\n\nDefault value: -1\n\nPossible Values: Any number between -1 and +1.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_HEURISTIC_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_HEURISTIC_LEVEL",
    "category": "constant",
    "text": "Controls the heuristic employed by the mixed-integer optimizer to locate an initial integer feasible solution.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_MAX_NUM_BRANCHES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_MAX_NUM_BRANCHES",
    "category": "constant",
    "text": "Maximum number of branches allowed during the branch and bound search.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\nSee also:\n\nMSK_DPAR_MIO_DISABLE_TERM_TIME. Certain termination criteria is disabled within the mixed-integer optimizer for period time specified by the parameter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_MAX_NUM_RELAXS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_MAX_NUM_RELAXS",
    "category": "constant",
    "text": "Maximum number of relaxations in branch and bound search.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\nSee also:\n\nMSK_DPAR_MIO_DISABLE_TERM_TIME. Certain termination criteria is disabled within the mixed-integer optimizer for period time specified by the parameter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_MAX_NUM_SOLUTIONS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_MAX_NUM_SOLUTIONS",
    "category": "constant",
    "text": "Controls how many feasible solutions the mixed-integer optimizer investigates.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\nSee also:\n\nMSK_DPAR_MIO_DISABLE_TERM_TIME. Certain termination criteria is disabled within the mixed-integer optimizer for period time specified by the parameter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_MODE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_MODE",
    "category": "constant",
    "text": "Turns on/off the mixed-integer mode.\n\nDefault value: SATISFIED\n\nPossible values:\n\nMSK_MIO_MODE_IGNORED. The integer constraints are ignored and the problem is solved as a continuous problem.\nMSK_MIO_MODE_SATISFIED. Integer restrictions should be satisfied.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_MT_USER_CB",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_MT_USER_CB",
    "category": "constant",
    "text": "If true user callbacks are called from each thread used by mixed-integer optimizer. Otherwise it is only called from a single thread.\n\nDefault value: off\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_NODE_OPTIMIZER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_NODE_OPTIMIZER",
    "category": "constant",
    "text": "Controls which optimizer is employed at the non-root nodes in the mixed-integer optimizer.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_OPTIMIZER_FREE. The optimizer is chosen automatically.\nMSK_OPTIMIZER_INTPNT. The interior-point optimizer is used.\nMSK_OPTIMIZER_CONIC. The optimizer for problems having conic constraints.\nMSK_OPTIMIZER_PRIMAL_SIMPLEX. The primal simplex optimizer is used.\nMSK_OPTIMIZER_DUAL_SIMPLEX. The dual simplex optimizer is used.\nMSK_OPTIMIZER_FREE_SIMPLEX. One of the simplex optimizers is used.\nMSK_OPTIMIZER_MIXED_INT. The mixed-integer optimizer.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_NODE_SELECTION",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_NODE_SELECTION",
    "category": "constant",
    "text": "Controls the node selection strategy employed by the mixed-integer optimizer.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_MIO_NODE_SELECTION_FREE. The optimizer decides the node selection strategy.\nMSK_MIO_NODE_SELECTION_FIRST. The optimizer employs a depth first node selection strategy.\nMSK_MIO_NODE_SELECTION_BEST. The optimizer employs a best bound node selection strategy.\nMSK_MIO_NODE_SELECTION_WORST. The optimizer employs a worst bound node selection strategy.\nMSK_MIO_NODE_SELECTION_HYBRID. The optimizer employs a hybrid strategy.\nMSK_MIO_NODE_SELECTION_PSEUDO. The optimizer employs selects the node based on a pseudo cost estimate.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_PERSPECTIVE_REFORMULATE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_PERSPECTIVE_REFORMULATE",
    "category": "constant",
    "text": "Enables or disables perspective reformulation in presolve.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_PROBING_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_PROBING_LEVEL",
    "category": "constant",
    "text": "Controls the amount of probing employed by the mixed-integer optimizer in presolve.\n\nDefault value: -1\n\nPossible Values: Any number between -1 and 3.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_RINS_MAX_NODES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_RINS_MAX_NODES",
    "category": "constant",
    "text": "Maximum number of nodes in each call to RINS.\n\nDefault value: -1\n\nPossible Values: Any number between -1 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_ROOT_OPTIMIZER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_ROOT_OPTIMIZER",
    "category": "constant",
    "text": "Controls which optimizer is employed at the root node in the mixed-integer optimizer.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_OPTIMIZER_FREE. The optimizer is chosen automatically.\nMSK_OPTIMIZER_INTPNT. The interior-point optimizer is used.\nMSK_OPTIMIZER_CONIC. The optimizer for problems having conic constraints.\nMSK_OPTIMIZER_PRIMAL_SIMPLEX. The primal simplex optimizer is used.\nMSK_OPTIMIZER_DUAL_SIMPLEX. The dual simplex optimizer is used.\nMSK_OPTIMIZER_FREE_SIMPLEX. One of the simplex optimizers is used.\nMSK_OPTIMIZER_MIXED_INT. The mixed-integer optimizer.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_ROOT_REPEAT_PRESOLVE_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_ROOT_REPEAT_PRESOLVE_LEVEL",
    "category": "constant",
    "text": "Controls whether presolve can be repeated at root node.\n\nDefault value: -1\n\nPossible Values: Any number between -1 and 1.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MIO_VB_DETECTION_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MIO_VB_DETECTION_LEVEL",
    "category": "constant",
    "text": "Controls how much effort is put into detecting variable bounds.\n\nDefault value: -1\n\nPossible Values: Any number between -1 and +2.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_MT_SPINCOUNT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_MT_SPINCOUNT",
    "category": "constant",
    "text": "Set the number of iterations to spin before sleeping.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and 1000000000.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_NUM_THREADS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_NUM_THREADS",
    "category": "constant",
    "text": "The number of threads employed by the optimizer.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_MAX_TERMS_PER_LINE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_MAX_TERMS_PER_LINE",
    "category": "constant",
    "text": "The maximum number of terms (linear and quadratic) per line when an OPF file is written.\n\nDefault value: 5\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_HEADER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_HEADER",
    "category": "constant",
    "text": "Write a text header with date and MOSEK version in an OPF file.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_HINTS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_HINTS",
    "category": "constant",
    "text": "Write a hint section with problem dimensions in the beginning of an OPF file.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_PARAMETERS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_PARAMETERS",
    "category": "constant",
    "text": "Write a parameter section in an OPF file.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_PROBLEM",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_PROBLEM",
    "category": "constant",
    "text": "Write objective, constraints, bounds etc. to an OPF file.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_SOL_BAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_SOL_BAS",
    "category": "constant",
    "text": "Controls what is written to the OPF files.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_SOL_ITG",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_SOL_ITG",
    "category": "constant",
    "text": "Controls what is written to the OPF files.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_SOL_ITR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_SOL_ITR",
    "category": "constant",
    "text": "Controls what is written to the OPF files.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPF_WRITE_SOLUTIONS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPF_WRITE_SOLUTIONS",
    "category": "constant",
    "text": "Enable inclusion of solutions in the OPF files.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_OPTIMIZER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_OPTIMIZER",
    "category": "constant",
    "text": "Controls which optimizer is used to optimize the task.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_OPTIMIZER_FREE. The optimizer is chosen automatically.\nMSK_OPTIMIZER_INTPNT. The interior-point optimizer is used.\nMSK_OPTIMIZER_CONIC. The optimizer for problems having conic constraints.\nMSK_OPTIMIZER_PRIMAL_SIMPLEX. The primal simplex optimizer is used.\nMSK_OPTIMIZER_DUAL_SIMPLEX. The dual simplex optimizer is used.\nMSK_OPTIMIZER_FREE_SIMPLEX. One of the simplex optimizers is used.\nMSK_OPTIMIZER_MIXED_INT. The mixed-integer optimizer.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PARAM_READ_CASE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PARAM_READ_CASE_NAME",
    "category": "constant",
    "text": "If turned on, then names in the parameter file are case sensitive.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PARAM_READ_IGN_ERROR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PARAM_READ_IGN_ERROR",
    "category": "constant",
    "text": "If turned on, then errors in parameter settings is ignored.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_ELIMINATOR_MAX_FILL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_ELIMINATOR_MAX_FILL",
    "category": "constant",
    "text": "Maximum amount of fill-in created in one pivot during the elimination phase.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_ELIMINATOR_MAX_NUM_TRIES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_ELIMINATOR_MAX_NUM_TRIES",
    "category": "constant",
    "text": "Control the maximum number of times the eliminator is tried.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_LEVEL",
    "category": "constant",
    "text": "Currently not used.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_LINDEP_ABS_WORK_TRH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_LINDEP_ABS_WORK_TRH",
    "category": "constant",
    "text": "Controls linear dependency check in presolve.\n\nDefault value: 100\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_LINDEP_REL_WORK_TRH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_LINDEP_REL_WORK_TRH",
    "category": "constant",
    "text": "Controls linear dependency check in presolve.\n\nDefault value: 100\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_LINDEP_USE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_LINDEP_USE",
    "category": "constant",
    "text": "Controls whether the linear constraints are checked for linear dependencies.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_MAX_NUM_REDUCTIONS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_MAX_NUM_REDUCTIONS",
    "category": "constant",
    "text": "Controls the maximum number of reductions performed by the presolve.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRESOLVE_USE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRESOLVE_USE",
    "category": "constant",
    "text": "Controls whether the presolve is applied to a problem before it is optimized.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_PRESOLVE_MODE_OFF. The problem is not presolved before it is optimized.\nMSK_PRESOLVE_MODE_ON. The problem is presolved before it is optimized.\nMSK_PRESOLVE_MODE_FREE. It is decided automatically whether to presolve before the problem is optimized.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_PRIMAL_REPAIR_OPTIMIZER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_PRIMAL_REPAIR_OPTIMIZER",
    "category": "constant",
    "text": "Controls which optimizer that is used to find the optimal repair.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_OPTIMIZER_FREE. The optimizer is chosen automatically.\nMSK_OPTIMIZER_INTPNT. The interior-point optimizer is used.\nMSK_OPTIMIZER_CONIC. The optimizer for problems having conic constraints.\nMSK_OPTIMIZER_PRIMAL_SIMPLEX. The primal simplex optimizer is used.\nMSK_OPTIMIZER_DUAL_SIMPLEX. The dual simplex optimizer is used.\nMSK_OPTIMIZER_FREE_SIMPLEX. One of the simplex optimizers is used.\nMSK_OPTIMIZER_MIXED_INT. The mixed-integer optimizer.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_DATA_COMPRESSED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_DATA_COMPRESSED",
    "category": "constant",
    "text": "Controls the input file decompression.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_COMPRESS_NONE. No compression is used.\nMSK_COMPRESS_FREE. The type of compression used is chosen automatically.\nMSK_COMPRESS_GZIP. The type of compression used is gzip compatible.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_DATA_FORMAT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_DATA_FORMAT",
    "category": "constant",
    "text": "Format of the data file to be read.\n\nDefault value: EXTENSION\n\nPossible values:\n\nMSK_DATA_FORMAT_EXTENSION. The file extension is used to determine the data file format.\nMSK_DATA_FORMAT_MPS. The data file is MPS formatted.\nMSK_DATA_FORMAT_LP. The data file is LP formatted.\nMSK_DATA_FORMAT_OP. The data file is an optimization problem formatted file.\nMSK_DATA_FORMAT_XML. The data file is an XML formatted file.\nMSK_DATA_FORMAT_FREE_MPS. The data a free MPS formatted file.\nMSK_DATA_FORMAT_TASK. Generic task dump file.\nMSK_DATA_FORMAT_CB. Conic benchmark format,\nMSK_DATA_FORMAT_JSON_TASK. JSON based task format.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_DEBUG",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_DEBUG",
    "category": "constant",
    "text": "Turns on additional debugging information when reading files.\n\nDefault value: off\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_KEEP_FREE_CON",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_KEEP_FREE_CON",
    "category": "constant",
    "text": "Controls whether the free constraints are included in the problem.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_LP_DROP_NEW_VARS_IN_BOU",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_LP_DROP_NEW_VARS_IN_BOU",
    "category": "constant",
    "text": "Controls how the LP files are interpreted.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_LP_QUOTED_NAMES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_LP_QUOTED_NAMES",
    "category": "constant",
    "text": "If a name is in quotes when reading an LP file, the quotes will be removed.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_MPS_FORMAT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_MPS_FORMAT",
    "category": "constant",
    "text": "Controls how strictly the MPS file reader interprets the MPS format.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_MPS_FORMAT_STRICT. It is assumed that the input file satisfies the MPS format strictly.\nMSK_MPS_FORMAT_RELAXED. It is assumed that the input file satisfies a slightly relaxed version of the MPS format.\nMSK_MPS_FORMAT_FREE. It is assumed that the input file satisfies the free MPS format. This implies that spaces are not allowed in names. Otherwise the format is free.\nMSK_MPS_FORMAT_CPLEX. The CPLEX compatible version of the MPS format is employed.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_MPS_WIDTH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_MPS_WIDTH",
    "category": "constant",
    "text": "Controls the maximal number of characters allowed in one line of the MPS file.\n\nDefault value: 1024\n\nPossible Values: Any number between 80 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_READ_TASK_IGNORE_PARAM",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_READ_TASK_IGNORE_PARAM",
    "category": "constant",
    "text": "Controls what information is used from the task files.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_REMOVE_UNUSED_SOLUTIONS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_REMOVE_UNUSED_SOLUTIONS",
    "category": "constant",
    "text": "Removes unsued solutions before the optimization is performed.\n\nDefault value: off\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SENSITIVITY_ALL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SENSITIVITY_ALL",
    "category": "constant",
    "text": "Controls sensitivity report behavior.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SENSITIVITY_OPTIMIZER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SENSITIVITY_OPTIMIZER",
    "category": "constant",
    "text": "Controls which optimizer is used for optimal partition sensitivity analysis.\n\nDefault value: FREE_SIMPLEX\n\nPossible values:\n\nMSK_OPTIMIZER_FREE. The optimizer is chosen automatically.\nMSK_OPTIMIZER_INTPNT. The interior-point optimizer is used.\nMSK_OPTIMIZER_CONIC. The optimizer for problems having conic constraints.\nMSK_OPTIMIZER_PRIMAL_SIMPLEX. The primal simplex optimizer is used.\nMSK_OPTIMIZER_DUAL_SIMPLEX. The dual simplex optimizer is used.\nMSK_OPTIMIZER_FREE_SIMPLEX. One of the simplex optimizers is used.\nMSK_OPTIMIZER_MIXED_INT. The mixed-integer optimizer.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SENSITIVITY_TYPE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SENSITIVITY_TYPE",
    "category": "constant",
    "text": "Controls which type of sensitivity analysis is to be performed.\n\nDefault value: BASIS\n\nPossible values:\n\nMSK_SENSITIVITY_TYPE_BASIS. Basis sensitivity analysis is performed.\nMSK_SENSITIVITY_TYPE_OPTIMAL_PARTITION. Optimal partition sensitivity analysis is performed.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_BASIS_FACTOR_USE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_BASIS_FACTOR_USE",
    "category": "constant",
    "text": "Controls whether an LU factorization of the basis is used in a hot-start.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_DEGEN",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_DEGEN",
    "category": "constant",
    "text": "Controls how aggressively degeneration is handled.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SIM_DEGEN_NONE. The simplex optimizer should use no degeneration strategy.\nMSK_SIM_DEGEN_FREE. The simplex optimizer chooses the degeneration strategy.\nMSK_SIM_DEGEN_AGGRESSIVE. The simplex optimizer should use an aggressive degeneration strategy.\nMSK_SIM_DEGEN_MODERATE. The simplex optimizer should use a moderate degeneration strategy.\nMSK_SIM_DEGEN_MINIMUM. The simplex optimizer should use a minimum degeneration strategy.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_DUAL_CRASH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_DUAL_CRASH",
    "category": "constant",
    "text": "Controls whether crashing is performed in the dual simplex optimizer.\n\nDefault value: 90\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_DUAL_PHASEONE_METHOD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_DUAL_PHASEONE_METHOD",
    "category": "constant",
    "text": "An experimental feature.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and 10.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_DUAL_RESTRICT_SELECTION",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_DUAL_RESTRICT_SELECTION",
    "category": "constant",
    "text": "Controls how aggressively restricted selection is used.\n\nDefault value: 50\n\nPossible Values: Any number between 0 and 100.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_DUAL_SELECTION",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_DUAL_SELECTION",
    "category": "constant",
    "text": "Controls the dual simplex strategy.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SIM_SELECTION_FREE. The optimizer chooses the pricing strategy.\nMSK_SIM_SELECTION_FULL. The optimizer uses full pricing.\nMSK_SIM_SELECTION_ASE. The optimizer uses approximate steepest-edge pricing.\nMSK_SIM_SELECTION_DEVEX. The optimizer uses devex steepest-edge pricing.\nMSK_SIM_SELECTION_SE. The optimizer uses steepest-edge selection.\nMSK_SIM_SELECTION_PARTIAL. The optimizer uses a partial selection approach.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_EXPLOIT_DUPVEC",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_EXPLOIT_DUPVEC",
    "category": "constant",
    "text": "Controls if the simplex optimizers are allowed to exploit duplicated columns.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_SIM_EXPLOIT_DUPVEC_ON. Allow the simplex optimizer to exploit duplicated columns.\nMSK_SIM_EXPLOIT_DUPVEC_OFF. Disallow the simplex optimizer to exploit duplicated columns.\nMSK_SIM_EXPLOIT_DUPVEC_FREE. The simplex optimizer can choose freely.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_HOTSTART",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_HOTSTART",
    "category": "constant",
    "text": "Controls the type of hot-start that the simplex optimizer perform.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SIM_HOTSTART_NONE. The simplex optimizer performs a coldstart.\nMSK_SIM_HOTSTART_FREE. The simplex optimize chooses the hot-start type.\nMSK_SIM_HOTSTART_STATUS_KEYS. Only the status keys of the constraints and variables are used to choose the type of hot-start.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_HOTSTART_LU",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_HOTSTART_LU",
    "category": "constant",
    "text": "Determines if the simplex optimizer should exploit the initial factorization.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_MAX_ITERATIONS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_MAX_ITERATIONS",
    "category": "constant",
    "text": "Maximum number of iterations that can be used by a simplex optimizer.\n\nDefault value: 10000000\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_MAX_NUM_SETBACKS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_MAX_NUM_SETBACKS",
    "category": "constant",
    "text": "Controls how many set-backs that are allowed within a simplex optimizer.\n\nDefault value: 250\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_NON_SINGULAR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_NON_SINGULAR",
    "category": "constant",
    "text": "Controls if the simplex optimizer ensures a non-singular basis, if possible.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_PRIMAL_CRASH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_PRIMAL_CRASH",
    "category": "constant",
    "text": "Controls the simplex crash.\n\nDefault value: 90\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_PRIMAL_PHASEONE_METHOD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_PRIMAL_PHASEONE_METHOD",
    "category": "constant",
    "text": "An experimental feature.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and 10.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_PRIMAL_RESTRICT_SELECTION",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_PRIMAL_RESTRICT_SELECTION",
    "category": "constant",
    "text": "Controls how aggressively restricted selection is used.\n\nDefault value: 50\n\nPossible Values: Any number between 0 and 100.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_PRIMAL_SELECTION",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_PRIMAL_SELECTION",
    "category": "constant",
    "text": "Controls the primal simplex strategy.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SIM_SELECTION_FREE. The optimizer chooses the pricing strategy.\nMSK_SIM_SELECTION_FULL. The optimizer uses full pricing.\nMSK_SIM_SELECTION_ASE. The optimizer uses approximate steepest-edge pricing.\nMSK_SIM_SELECTION_DEVEX. The optimizer uses devex steepest-edge pricing.\nMSK_SIM_SELECTION_SE. The optimizer uses steepest-edge selection.\nMSK_SIM_SELECTION_PARTIAL. The optimizer uses a partial selection approach.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_REFACTOR_FREQ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_REFACTOR_FREQ",
    "category": "constant",
    "text": "Controls the basis refactoring frequency.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_REFORMULATION",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_REFORMULATION",
    "category": "constant",
    "text": "Controls if the simplex optimizers are allowed to reformulate the problem.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_SIM_REFORMULATION_ON. Allow the simplex optimizer to reformulate the problem.\nMSK_SIM_REFORMULATION_OFF. Disallow the simplex optimizer to reformulate the problem.\nMSK_SIM_REFORMULATION_FREE. The simplex optimizer can choose freely.\nMSK_SIM_REFORMULATION_AGGRESSIVE. The simplex optimizer should use an aggressive reformulation strategy.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_SAVE_LU",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_SAVE_LU",
    "category": "constant",
    "text": "Controls if the LU factorization stored should be replaced with the LU factorization corresponding to the initial basis.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_SCALING",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_SCALING",
    "category": "constant",
    "text": "Controls how much effort is used in scaling the problem before a simplex optimizer is used.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SCALING_FREE. The optimizer chooses the scaling heuristic.\nMSK_SCALING_NONE. No scaling is performed.\nMSK_SCALING_MODERATE. A conservative scaling is performed.\nMSK_SCALING_AGGRESSIVE. A very aggressive scaling is performed.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_SCALING_METHOD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_SCALING_METHOD",
    "category": "constant",
    "text": "Controls how the problem is scaled before a simplex optimizer is used.\n\nDefault value: POW2\n\nPossible values:\n\nMSK_SCALING_METHOD_POW2. Scales only with power of 2 leaving the mantissa untouched.\nMSK_SCALING_METHOD_FREE. The optimizer chooses the scaling heuristic.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_SOLVE_FORM",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_SOLVE_FORM",
    "category": "constant",
    "text": "Controls whether the primal or the dual problem is solved by the primal-/dual-simplex optimizer.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_SOLVE_FREE. The optimizer is free to solve either the primal or the dual problem.\nMSK_SOLVE_PRIMAL. The optimizer should solve the primal problem.\nMSK_SOLVE_DUAL. The optimizer should solve the dual problem.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_STABILITY_PRIORITY",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_STABILITY_PRIORITY",
    "category": "constant",
    "text": "Controls how high priority the numerical stability should be given.\n\nDefault value: 50\n\nPossible Values: Any number between 0 and 100.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SIM_SWITCH_OPTIMIZER",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SIM_SWITCH_OPTIMIZER",
    "category": "constant",
    "text": "Controls the simplex behavior.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SOL_FILTER_KEEP_BASIC",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SOL_FILTER_KEEP_BASIC",
    "category": "constant",
    "text": "Controls the license manager client behavior.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SOL_FILTER_KEEP_RANGED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SOL_FILTER_KEEP_RANGED",
    "category": "constant",
    "text": "Control the contents of the solution files.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SOL_READ_NAME_WIDTH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SOL_READ_NAME_WIDTH",
    "category": "constant",
    "text": "Controls the input solution file format.\n\nDefault value: -1\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SOL_READ_WIDTH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SOL_READ_WIDTH",
    "category": "constant",
    "text": "Controls the input solution file format.\n\nDefault value: 1024\n\nPossible Values: Any number between 80 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_SOLUTION_CALLBACK",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_SOLUTION_CALLBACK",
    "category": "constant",
    "text": "Indicates whether solution callbacks will be performed during the optimization.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_TIMING_LEVEL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_TIMING_LEVEL",
    "category": "constant",
    "text": "Controls the amount of timing performed inside MOSEK.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_BAS_CONSTRAINTS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_BAS_CONSTRAINTS",
    "category": "constant",
    "text": "Controls the basic solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_BAS_HEAD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_BAS_HEAD",
    "category": "constant",
    "text": "Controls the basic solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_BAS_VARIABLES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_BAS_VARIABLES",
    "category": "constant",
    "text": "Controls the basic solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_DATA_COMPRESSED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_DATA_COMPRESSED",
    "category": "constant",
    "text": "Controls output file compression.\n\nDefault value: 0\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_DATA_FORMAT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_DATA_FORMAT",
    "category": "constant",
    "text": "Controls the output file format.\n\nDefault value: EXTENSION\n\nPossible values:\n\nMSK_DATA_FORMAT_EXTENSION. The file extension is used to determine the data file format.\nMSK_DATA_FORMAT_MPS. The data file is MPS formatted.\nMSK_DATA_FORMAT_LP. The data file is LP formatted.\nMSK_DATA_FORMAT_OP. The data file is an optimization problem formatted file.\nMSK_DATA_FORMAT_XML. The data file is an XML formatted file.\nMSK_DATA_FORMAT_FREE_MPS. The data a free MPS formatted file.\nMSK_DATA_FORMAT_TASK. Generic task dump file.\nMSK_DATA_FORMAT_CB. Conic benchmark format,\nMSK_DATA_FORMAT_JSON_TASK. JSON based task format.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_DATA_PARAM",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_DATA_PARAM",
    "category": "constant",
    "text": "Controls output file data.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_FREE_CON",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_FREE_CON",
    "category": "constant",
    "text": "Controls the output file data.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_GENERIC_NAMES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_GENERIC_NAMES",
    "category": "constant",
    "text": "Controls the output file data.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_GENERIC_NAMES_IO",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_GENERIC_NAMES_IO",
    "category": "constant",
    "text": "Index origin used in  generic names.\n\nDefault value: 1\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_IGNORE_INCOMPATIBLE_ITEMS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_IGNORE_INCOMPATIBLE_ITEMS",
    "category": "constant",
    "text": "Controls if the writer ignores incompatible problem items when writing files.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_INT_CONSTRAINTS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_INT_CONSTRAINTS",
    "category": "constant",
    "text": "Controls the integer solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_INT_HEAD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_INT_HEAD",
    "category": "constant",
    "text": "Controls the integer solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_INT_VARIABLES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_INT_VARIABLES",
    "category": "constant",
    "text": "Controls the integer solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_LP_FULL_OBJ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_LP_FULL_OBJ",
    "category": "constant",
    "text": "Write full linear objective\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_LP_LINE_WIDTH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_LP_LINE_WIDTH",
    "category": "constant",
    "text": "Controls the LP output file format.\n\nDefault value: 80\n\nPossible Values: Any number between 40 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_LP_QUOTED_NAMES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_LP_QUOTED_NAMES",
    "category": "constant",
    "text": "Controls LP output file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_LP_STRICT_FORMAT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_LP_STRICT_FORMAT",
    "category": "constant",
    "text": "Controls whether LP  output files satisfy the LP format strictly.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_LP_TERMS_PER_LINE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_LP_TERMS_PER_LINE",
    "category": "constant",
    "text": "Controls the LP output file format.\n\nDefault value: 10\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_MPS_FORMAT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_MPS_FORMAT",
    "category": "constant",
    "text": "Controls in which format the MPS is written.\n\nDefault value: FREE\n\nPossible values:\n\nMSK_MPS_FORMAT_STRICT. It is assumed that the input file satisfies the MPS format strictly.\nMSK_MPS_FORMAT_RELAXED. It is assumed that the input file satisfies a slightly relaxed version of the MPS format.\nMSK_MPS_FORMAT_FREE. It is assumed that the input file satisfies the free MPS format. This implies that spaces are not allowed in names. Otherwise the format is free.\nMSK_MPS_FORMAT_CPLEX. The CPLEX compatible version of the MPS format is employed.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_MPS_INT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_MPS_INT",
    "category": "constant",
    "text": "Controls the output file data.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_PRECISION",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_PRECISION",
    "category": "constant",
    "text": "Controls data precision employed in when writing an MPS file.\n\nDefault value: 15\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_SOL_BARVARIABLES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_SOL_BARVARIABLES",
    "category": "constant",
    "text": "Controls the solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_SOL_CONSTRAINTS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_SOL_CONSTRAINTS",
    "category": "constant",
    "text": "Controls the solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_SOL_HEAD",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_SOL_HEAD",
    "category": "constant",
    "text": "Controls solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_SOL_IGNORE_INVALID_NAMES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_SOL_IGNORE_INVALID_NAMES",
    "category": "constant",
    "text": "Controls whether the user specified names are employed even if they are invalid names.\n\nDefault value: OFF\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_SOL_VARIABLES",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_SOL_VARIABLES",
    "category": "constant",
    "text": "Controls the solution file format.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_TASK_INC_SOL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_TASK_INC_SOL",
    "category": "constant",
    "text": "Controls whether the solutions are  stored in the task file too.\n\nDefault value: ON\n\nPossible values:\n\nMSK_ON. Switch the option on.\nMSK_OFF. Switch the option off.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_IPAR_WRITE_XML_MODE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_IPAR_WRITE_XML_MODE",
    "category": "constant",
    "text": "Controls if linear coefficients should be written by row or column when writing in the XML file format.\n\nDefault value: ROW\n\nPossible values:\n\nMSK_WRITE_XML_MODE_ROW. Write in row order.\nMSK_WRITE_XML_MODE_COL. Write in column order.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Integer-parameters-1",
    "page": "Solver parameters",
    "title": "Integer parameters",
    "category": "section",
    "text": "MSK_IPAR_ANA_SOL_BASIS\nMSK_IPAR_ANA_SOL_PRINT_VIOLATED\nMSK_IPAR_AUTO_SORT_A_BEFORE_OPT\nMSK_IPAR_AUTO_UPDATE_SOL_INFO\nMSK_IPAR_BASIS_SOLVE_USE_PLUS_ONE\nMSK_IPAR_BI_CLEAN_OPTIMIZER\nMSK_IPAR_BI_IGNORE_MAX_ITER\nMSK_IPAR_BI_IGNORE_NUM_ERROR\nMSK_IPAR_BI_MAX_ITERATIONS\nMSK_IPAR_CACHE_LICENSE\nMSK_IPAR_CHECK_CONVEXITY\nMSK_IPAR_COMPRESS_STATFILE\nMSK_IPAR_INFEAS_GENERIC_NAMES\nMSK_IPAR_INFEAS_PREFER_PRIMAL\nMSK_IPAR_INFEAS_REPORT_AUTO\nMSK_IPAR_INFEAS_REPORT_LEVEL\nMSK_IPAR_INTPNT_BASIS\nMSK_IPAR_INTPNT_DIFF_STEP\nMSK_IPAR_INTPNT_HOTSTART\nMSK_IPAR_INTPNT_MAX_ITERATIONS\nMSK_IPAR_INTPNT_MAX_NUM_COR\nMSK_IPAR_INTPNT_MAX_NUM_REFINEMENT_STEPS\nMSK_IPAR_INTPNT_MULTI_THREAD\nMSK_IPAR_INTPNT_OFF_COL_TRH\nMSK_IPAR_INTPNT_ORDER_METHOD\nMSK_IPAR_INTPNT_REGULARIZATION_USE\nMSK_IPAR_INTPNT_SCALING\nMSK_IPAR_INTPNT_SOLVE_FORM\nMSK_IPAR_INTPNT_STARTING_POINT\nMSK_IPAR_LICENSE_DEBUG\nMSK_IPAR_LICENSE_PAUSE_TIME\nMSK_IPAR_LICENSE_SUPPRESS_EXPIRE_WRNS\nMSK_IPAR_LICENSE_TRH_EXPIRY_WRN\nMSK_IPAR_LICENSE_WAIT\nMSK_IPAR_LOG\nMSK_IPAR_LOG_ANA_PRO\nMSK_IPAR_LOG_BI\nMSK_IPAR_LOG_BI_FREQ\nMSK_IPAR_LOG_CHECK_CONVEXITY\nMSK_IPAR_LOG_CUT_SECOND_OPT\nMSK_IPAR_LOG_EXPAND\nMSK_IPAR_LOG_FEAS_REPAIR\nMSK_IPAR_LOG_FILE\nMSK_IPAR_LOG_INFEAS_ANA\nMSK_IPAR_LOG_INTPNT\nMSK_IPAR_LOG_MIO\nMSK_IPAR_LOG_MIO_FREQ\nMSK_IPAR_LOG_ORDER\nMSK_IPAR_LOG_PRESOLVE\nMSK_IPAR_LOG_RESPONSE\nMSK_IPAR_LOG_SENSITIVITY\nMSK_IPAR_LOG_SENSITIVITY_OPT\nMSK_IPAR_LOG_SIM\nMSK_IPAR_LOG_SIM_FREQ\nMSK_IPAR_LOG_SIM_MINOR\nMSK_IPAR_LOG_STORAGE\nMSK_IPAR_MAX_NUM_WARNINGS\nMSK_IPAR_MIO_BRANCH_DIR\nMSK_IPAR_MIO_CONSTRUCT_SOL\nMSK_IPAR_MIO_CUT_CLIQUE\nMSK_IPAR_MIO_CUT_CMIR\nMSK_IPAR_MIO_CUT_GMI\nMSK_IPAR_MIO_CUT_IMPLIED_BOUND\nMSK_IPAR_MIO_CUT_KNAPSACK_COVER\nMSK_IPAR_MIO_CUT_SELECTION_LEVEL\nMSK_IPAR_MIO_HEURISTIC_LEVEL\nMSK_IPAR_MIO_MAX_NUM_BRANCHES\nMSK_IPAR_MIO_MAX_NUM_RELAXS\nMSK_IPAR_MIO_MAX_NUM_SOLUTIONS\nMSK_IPAR_MIO_MODE\nMSK_IPAR_MIO_MT_USER_CB\nMSK_IPAR_MIO_NODE_OPTIMIZER\nMSK_IPAR_MIO_NODE_SELECTION\nMSK_IPAR_MIO_PERSPECTIVE_REFORMULATE\nMSK_IPAR_MIO_PROBING_LEVEL\nMSK_IPAR_MIO_RINS_MAX_NODES\nMSK_IPAR_MIO_ROOT_OPTIMIZER\nMSK_IPAR_MIO_ROOT_REPEAT_PRESOLVE_LEVEL\nMSK_IPAR_MIO_VB_DETECTION_LEVEL\nMSK_IPAR_MT_SPINCOUNT\nMSK_IPAR_NUM_THREADS\nMSK_IPAR_OPF_MAX_TERMS_PER_LINE\nMSK_IPAR_OPF_WRITE_HEADER\nMSK_IPAR_OPF_WRITE_HINTS\nMSK_IPAR_OPF_WRITE_PARAMETERS\nMSK_IPAR_OPF_WRITE_PROBLEM\nMSK_IPAR_OPF_WRITE_SOL_BAS\nMSK_IPAR_OPF_WRITE_SOL_ITG\nMSK_IPAR_OPF_WRITE_SOL_ITR\nMSK_IPAR_OPF_WRITE_SOLUTIONS\nMSK_IPAR_OPTIMIZER\nMSK_IPAR_PARAM_READ_CASE_NAME\nMSK_IPAR_PARAM_READ_IGN_ERROR\nMSK_IPAR_PRESOLVE_ELIMINATOR_MAX_FILL\nMSK_IPAR_PRESOLVE_ELIMINATOR_MAX_NUM_TRIES\nMSK_IPAR_PRESOLVE_LEVEL\nMSK_IPAR_PRESOLVE_LINDEP_ABS_WORK_TRH\nMSK_IPAR_PRESOLVE_LINDEP_REL_WORK_TRH\nMSK_IPAR_PRESOLVE_LINDEP_USE\nMSK_IPAR_PRESOLVE_MAX_NUM_REDUCTIONS\nMSK_IPAR_PRESOLVE_USE\nMSK_IPAR_PRIMAL_REPAIR_OPTIMIZER\nMSK_IPAR_READ_DATA_COMPRESSED\nMSK_IPAR_READ_DATA_FORMAT\nMSK_IPAR_READ_DEBUG\nMSK_IPAR_READ_KEEP_FREE_CON\nMSK_IPAR_READ_LP_DROP_NEW_VARS_IN_BOU\nMSK_IPAR_READ_LP_QUOTED_NAMES\nMSK_IPAR_READ_MPS_FORMAT\nMSK_IPAR_READ_MPS_WIDTH\nMSK_IPAR_READ_TASK_IGNORE_PARAM\nMSK_IPAR_REMOVE_UNUSED_SOLUTIONS\nMSK_IPAR_SENSITIVITY_ALL\nMSK_IPAR_SENSITIVITY_OPTIMIZER\nMSK_IPAR_SENSITIVITY_TYPE\nMSK_IPAR_SIM_BASIS_FACTOR_USE\nMSK_IPAR_SIM_DEGEN\nMSK_IPAR_SIM_DUAL_CRASH\nMSK_IPAR_SIM_DUAL_PHASEONE_METHOD\nMSK_IPAR_SIM_DUAL_RESTRICT_SELECTION\nMSK_IPAR_SIM_DUAL_SELECTION\nMSK_IPAR_SIM_EXPLOIT_DUPVEC\nMSK_IPAR_SIM_HOTSTART\nMSK_IPAR_SIM_HOTSTART_LU\nMSK_IPAR_SIM_MAX_ITERATIONS\nMSK_IPAR_SIM_MAX_NUM_SETBACKS\nMSK_IPAR_SIM_NON_SINGULAR\nMSK_IPAR_SIM_PRIMAL_CRASH\nMSK_IPAR_SIM_PRIMAL_PHASEONE_METHOD\nMSK_IPAR_SIM_PRIMAL_RESTRICT_SELECTION\nMSK_IPAR_SIM_PRIMAL_SELECTION\nMSK_IPAR_SIM_REFACTOR_FREQ\nMSK_IPAR_SIM_REFORMULATION\nMSK_IPAR_SIM_SAVE_LU\nMSK_IPAR_SIM_SCALING\nMSK_IPAR_SIM_SCALING_METHOD\nMSK_IPAR_SIM_SOLVE_FORM\nMSK_IPAR_SIM_STABILITY_PRIORITY\nMSK_IPAR_SIM_SWITCH_OPTIMIZER\nMSK_IPAR_SOL_FILTER_KEEP_BASIC\nMSK_IPAR_SOL_FILTER_KEEP_RANGED\nMSK_IPAR_SOL_READ_NAME_WIDTH\nMSK_IPAR_SOL_READ_WIDTH\nMSK_IPAR_SOLUTION_CALLBACK\nMSK_IPAR_TIMING_LEVEL\nMSK_IPAR_WRITE_BAS_CONSTRAINTS\nMSK_IPAR_WRITE_BAS_HEAD\nMSK_IPAR_WRITE_BAS_VARIABLES\nMSK_IPAR_WRITE_DATA_COMPRESSED\nMSK_IPAR_WRITE_DATA_FORMAT\nMSK_IPAR_WRITE_DATA_PARAM\nMSK_IPAR_WRITE_FREE_CON\nMSK_IPAR_WRITE_GENERIC_NAMES\nMSK_IPAR_WRITE_GENERIC_NAMES_IO\nMSK_IPAR_WRITE_IGNORE_INCOMPATIBLE_ITEMS\nMSK_IPAR_WRITE_INT_CONSTRAINTS\nMSK_IPAR_WRITE_INT_HEAD\nMSK_IPAR_WRITE_INT_VARIABLES\nMSK_IPAR_WRITE_LP_FULL_OBJ\nMSK_IPAR_WRITE_LP_LINE_WIDTH\nMSK_IPAR_WRITE_LP_QUOTED_NAMES\nMSK_IPAR_WRITE_LP_STRICT_FORMAT\nMSK_IPAR_WRITE_LP_TERMS_PER_LINE\nMSK_IPAR_WRITE_MPS_FORMAT\nMSK_IPAR_WRITE_MPS_INT\nMSK_IPAR_WRITE_PRECISION\nMSK_IPAR_WRITE_SOL_BARVARIABLES\nMSK_IPAR_WRITE_SOL_CONSTRAINTS\nMSK_IPAR_WRITE_SOL_HEAD\nMSK_IPAR_WRITE_SOL_IGNORE_INVALID_NAMES\nMSK_IPAR_WRITE_SOL_VARIABLES\nMSK_IPAR_WRITE_TASK_INC_SOL\nMSK_IPAR_WRITE_XML_MODE"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_ANA_SOL_INFEAS_TOL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_ANA_SOL_INFEAS_TOL",
    "category": "constant",
    "text": "If a constraint violates its bound with an amount larger than this value, the constraint name, index and violation will be printed by the solution analyzer.\n\nDefault value: 1e-6\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_BASIS_REL_TOL_S",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_BASIS_REL_TOL_S",
    "category": "constant",
    "text": "Maximum relative dual bound violation allowed in an optimal basic solution.\n\nDefault value: 1.0e-12\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_BASIS_TOL_S",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_BASIS_TOL_S",
    "category": "constant",
    "text": "Maximum absolute dual bound violation in an optimal basic solution.\n\nDefault value: 1.0e-6\n\nPossible Values: Any number between 1.0e-9 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_BASIS_TOL_X",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_BASIS_TOL_X",
    "category": "constant",
    "text": "Maximum absolute primal bound violation allowed in an optimal basic solution.\n\nDefault value: 1.0e-6\n\nPossible Values: Any number between 1.0e-9 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_CHECK_CONVEXITY_REL_TOL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_CHECK_CONVEXITY_REL_TOL",
    "category": "constant",
    "text": "Convexity check tolerance.\n\nDefault value: 1e-10\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_SYM_MAT_TOL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_SYM_MAT_TOL",
    "category": "constant",
    "text": "Zero tolerance threshold for symmetric matrixes.\n\nDefault value: 1.0e-12\n\nPossible Values: Any number between 1.0e-16 and 1.0e-6.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_SYM_MAT_TOL_HUGE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_SYM_MAT_TOL_HUGE",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e20\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_SYM_MAT_TOL_LARGE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_SYM_MAT_TOL_LARGE",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e10\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_AIJ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_AIJ",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e-12\n\nPossible Values: Any number between 1.0e-16 and 1.0e-6.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_AIJ_HUGE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_AIJ_HUGE",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e20\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_AIJ_LARGE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_AIJ_LARGE",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e10\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_BOUND_INF",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_BOUND_INF",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e16\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_BOUND_WRN",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_BOUND_WRN",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e8\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_C_HUGE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_C_HUGE",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e16\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_CJ_LARGE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_CJ_LARGE",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e8\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_QIJ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_QIJ",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e-16\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_DATA_TOL_X",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_DATA_TOL_X",
    "category": "constant",
    "text": "Data tolerance threshold.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_CO_TOL_DFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_CO_TOL_DFEAS",
    "category": "constant",
    "text": "Dual feasibility tolerance used by the conic interior-point optimizer.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\nSee also:\n\nMSK_DPAR_INTPNT_CO_TOL_NEAR_REL. Optimality tolerance for the conic solver.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_CO_TOL_INFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_CO_TOL_INFEAS",
    "category": "constant",
    "text": "Infeasibility tolerance for the conic solver.\n\nDefault value: 1.0e-10\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_CO_TOL_MU_RED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_CO_TOL_MU_RED",
    "category": "constant",
    "text": "Optimality tolerance for the conic solver.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_CO_TOL_NEAR_REL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_CO_TOL_NEAR_REL",
    "category": "constant",
    "text": "Optimality tolerance for the conic solver.\n\nDefault value: 1000\n\nPossible Values: Any number between 1.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_CO_TOL_PFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_CO_TOL_PFEAS",
    "category": "constant",
    "text": "Primal feasibility tolerance used by the conic interior-point optimizer.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\nSee also:\n\nMSK_DPAR_INTPNT_CO_TOL_NEAR_REL. Optimality tolerance for the conic solver.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_CO_TOL_REL_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_CO_TOL_REL_GAP",
    "category": "constant",
    "text": "Relative gap termination tolerance used by the conic interior-point optimizer.\n\nDefault value: 1.0e-7\n\nPossible Values: Any number between 0.0 and 1.0.\n\nSee also:\n\nMSK_DPAR_INTPNT_CO_TOL_NEAR_REL. Optimality tolerance for the conic solver.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_NL_MERIT_BAL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_NL_MERIT_BAL",
    "category": "constant",
    "text": "Controls if the complementarity and infeasibility is converging to zero at about equal rates.\n\nDefault value: 1.0e-4\n\nPossible Values: Any number between 0.0 and 0.99.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_NL_TOL_DFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_NL_TOL_DFEAS",
    "category": "constant",
    "text": "Dual feasibility tolerance used when a nonlinear model is solved.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_NL_TOL_MU_RED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_NL_TOL_MU_RED",
    "category": "constant",
    "text": "Relative complementarity gap tolerance for the nonlinear solver.\n\nDefault value: 1.0e-12\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_NL_TOL_NEAR_REL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_NL_TOL_NEAR_REL",
    "category": "constant",
    "text": "Nonlinear solver optimality tolerance parameter.\n\nDefault value: 1000.0\n\nPossible Values: Any number between 1.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_NL_TOL_PFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_NL_TOL_PFEAS",
    "category": "constant",
    "text": "Primal feasibility tolerance used when a nonlinear model is solved.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_NL_TOL_REL_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_NL_TOL_REL_GAP",
    "category": "constant",
    "text": "Relative gap termination tolerance for nonlinear problems.\n\nDefault value: 1.0e-6\n\nPossible Values: Any number between 1.0e-14 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_NL_TOL_REL_STEP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_NL_TOL_REL_STEP",
    "category": "constant",
    "text": "Relative step size to the boundary for general nonlinear optimization problems.\n\nDefault value: 0.995\n\nPossible Values: Any number between 1.0e-4 and 0.9999999.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_QO_TOL_DFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_QO_TOL_DFEAS",
    "category": "constant",
    "text": "Dual feasibility tolerance used when the interior-point optimizer is applied to a quadratic optimization problem..\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\nSee also:\n\nMSK_DPAR_INTPNT_QO_TOL_NEAR_REL. Optimality tolerance employed when a quadratic optimization problem is solved.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_QO_TOL_INFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_QO_TOL_INFEAS",
    "category": "constant",
    "text": "Infeasibility tolerance employed when a quadratic optimization problem is solved.\n\nDefault value: 1.0e-10\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_QO_TOL_MU_RED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_QO_TOL_MU_RED",
    "category": "constant",
    "text": "Optimality tolerance employed when a quadratic optimization problem is solved.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_QO_TOL_NEAR_REL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_QO_TOL_NEAR_REL",
    "category": "constant",
    "text": "Optimality tolerance employed when a quadratic optimization problem is solved.\n\nDefault value: 1000\n\nPossible Values: Any number between 1.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_QO_TOL_PFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_QO_TOL_PFEAS",
    "category": "constant",
    "text": "Primal feasibility tolerance used when the interior-point optimizer is applied to a quadratic optimization problem.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\nSee also:\n\nMSK_DPAR_INTPNT_QO_TOL_NEAR_REL. Optimality tolerance employed when a quadratic optimization problem is solved.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_QO_TOL_REL_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_QO_TOL_REL_GAP",
    "category": "constant",
    "text": "Relative gap termination tolerance used when the interior-point optimizer is applied to a quadratic optimization problem.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\nSee also:\n\nMSK_DPAR_INTPNT_QO_TOL_NEAR_REL. Optimality tolerance employed when a quadratic optimization problem is solved.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_DFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_DFEAS",
    "category": "constant",
    "text": "Dual feasibility tolerance used for linear optimization problems.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_DSAFE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_DSAFE",
    "category": "constant",
    "text": "Controls the interior-point dual starting point.\n\nDefault value: 1.0\n\nPossible Values: Any number between 1.0e-4 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_INFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_INFEAS",
    "category": "constant",
    "text": "Infeasibility tolerance for linear problems.\n\nDefault value: 1.0e-10\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_MU_RED",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_MU_RED",
    "category": "constant",
    "text": "Relative complementarity gap tolerance for linear problems.\n\nDefault value: 1.0e-16\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_PATH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_PATH",
    "category": "constant",
    "text": "Interior-point centering aggressiveness.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 0.9999.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_PFEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_PFEAS",
    "category": "constant",
    "text": "Primal feasibility tolerance used for linear optimization problems.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_PSAFE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_PSAFE",
    "category": "constant",
    "text": "Controls the interior-point primal starting point.\n\nDefault value: 1.0\n\nPossible Values: Any number between 1.0e-4 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_REL_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_REL_GAP",
    "category": "constant",
    "text": "Relative gap termination tolerance for linear problems.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 1.0e-14 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_REL_STEP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_REL_STEP",
    "category": "constant",
    "text": "Relative step size to the boundary for linear and quadratic optimization problems.\n\nDefault value: 0.9999\n\nPossible Values: Any number between 1.0e-4 and 0.999999.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_INTPNT_TOL_STEP_SIZE",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_INTPNT_TOL_STEP_SIZE",
    "category": "constant",
    "text": "Minimal step size tolerance for the interior-point optimizer.\n\nDefault value: 1.0e-6\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_LOWER_OBJ_CUT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_LOWER_OBJ_CUT",
    "category": "constant",
    "text": "Objective bound.\n\nDefault value: -1.0e30\n\nPossible Values: Any number between -inf and +inf.\n\nSee also:\n\nMSK_DPAR_LOWER_OBJ_CUT_FINITE_TRH. Objective bound.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_LOWER_OBJ_CUT_FINITE_TRH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_LOWER_OBJ_CUT_FINITE_TRH",
    "category": "constant",
    "text": "Objective bound.\n\nDefault value: -0.5e30\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_DISABLE_TERM_TIME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_DISABLE_TERM_TIME",
    "category": "constant",
    "text": "Certain termination criteria is disabled within the mixed-integer optimizer for period time specified by the parameter.\n\nDefault value: -1.0\n\nPossible Values: Any number between -inf and +inf.\n\nSee also:\n\nMSK_IPAR_MIO_MAX_NUM_RELAXS. Maximum number of relaxations in branch and bound search.\nMSK_IPAR_MIO_MAX_NUM_BRANCHES. Maximum number of branches allowed during the branch and bound search.\nMSK_DPAR_MIO_NEAR_TOL_ABS_GAP. Relaxed absolute optimality tolerance employed by the mixed-integer optimizer.\nMSK_DPAR_MIO_NEAR_TOL_REL_GAP. The mixed-integer optimizer is terminated when this tolerance is satisfied.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_MAX_TIME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_MAX_TIME",
    "category": "constant",
    "text": "Time limit for the mixed-integer optimizer.\n\nDefault value: -1.0\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_NEAR_TOL_ABS_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_NEAR_TOL_ABS_GAP",
    "category": "constant",
    "text": "Relaxed absolute optimality tolerance employed by the mixed-integer optimizer.\n\nDefault value: 0.0\n\nPossible Values: Any number between 0.0 and +inf.\n\nSee also:\n\nMSK_DPAR_MIO_DISABLE_TERM_TIME. Certain termination criteria is disabled within the mixed-integer optimizer for period time specified by the parameter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_NEAR_TOL_REL_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_NEAR_TOL_REL_GAP",
    "category": "constant",
    "text": "The mixed-integer optimizer is terminated when this tolerance is satisfied.\n\nDefault value: 1.0e-3\n\nPossible Values: Any number between 0.0 and +inf.\n\nSee also:\n\nMSK_DPAR_MIO_DISABLE_TERM_TIME. Certain termination criteria is disabled within the mixed-integer optimizer for period time specified by the parameter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_REL_GAP_CONST",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_REL_GAP_CONST",
    "category": "constant",
    "text": "This value is used to compute the relative gap for the solution to an integer optimization problem.\n\nDefault value: 1.0e-10\n\nPossible Values: Any number between 1.0e-15 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_TOL_ABS_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_TOL_ABS_GAP",
    "category": "constant",
    "text": "Absolute optimality tolerance employed by the mixed-integer optimizer.\n\nDefault value: 0.0\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_TOL_ABS_RELAX_INT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_TOL_ABS_RELAX_INT",
    "category": "constant",
    "text": "Integer feasibility tolerance.\n\nDefault value: 1.0e-5\n\nPossible Values: Any number between 1e-9 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_TOL_FEAS",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_TOL_FEAS",
    "category": "constant",
    "text": "Feasibility tolerance for mixed integer solver.\n\nDefault value: 1.0e-6\n\nPossible Values: Any number between 1e-9 and 1e-3.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_TOL_REL_DUAL_BOUND_IMPROVEMENT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_TOL_REL_DUAL_BOUND_IMPROVEMENT",
    "category": "constant",
    "text": "Controls cut generation for mixed-integer optimizer.\n\nDefault value: 0.0\n\nPossible Values: Any number between 0.0 and 1.0.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_MIO_TOL_REL_GAP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_MIO_TOL_REL_GAP",
    "category": "constant",
    "text": "Relative optimality tolerance employed by the mixed-integer optimizer.\n\nDefault value: 1.0e-4\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_OPTIMIZER_MAX_TIME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_OPTIMIZER_MAX_TIME",
    "category": "constant",
    "text": "Solver time limit.\n\nDefault value: -1.0\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_PRESOLVE_TOL_ABS_LINDEP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_PRESOLVE_TOL_ABS_LINDEP",
    "category": "constant",
    "text": "Absolute tolerance employed by the linear dependency checker.\n\nDefault value: 1.0e-6\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_PRESOLVE_TOL_AIJ",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_PRESOLVE_TOL_AIJ",
    "category": "constant",
    "text": "Absolute zero tolerance employed for constraint coefficients in the presolve.\n\nDefault value: 1.0e-12\n\nPossible Values: Any number between 1.0e-15 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_PRESOLVE_TOL_REL_LINDEP",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_PRESOLVE_TOL_REL_LINDEP",
    "category": "constant",
    "text": "Relative tolerance employed by the linear dependency checker.\n\nDefault value: 1.0e-10\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_PRESOLVE_TOL_S",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_PRESOLVE_TOL_S",
    "category": "constant",
    "text": "Absolute zero tolerance employed for slack variables in the presolve.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_PRESOLVE_TOL_X",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_PRESOLVE_TOL_X",
    "category": "constant",
    "text": "Absolute zero tolerance employed for variables in the presolve.\n\nDefault value: 1.0e-8\n\nPossible Values: Any number between 0.0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_QCQO_REFORMULATE_REL_DROP_TOL",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_QCQO_REFORMULATE_REL_DROP_TOL",
    "category": "constant",
    "text": "This parameter determines when columns are dropped in incomplete Cholesky factorization during reformulation of quadratic problems.\n\nDefault value: 1e-15\n\nPossible Values: Any number between 0 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_SEMIDEFINITE_TOL_APPROX",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_SEMIDEFINITE_TOL_APPROX",
    "category": "constant",
    "text": "Tolerance to define a matrix to be positive semidefinite.\n\nDefault value: 1.0e-10\n\nPossible Values: Any number between 1.0e-15 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_SIM_LU_TOL_REL_PIV",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_SIM_LU_TOL_REL_PIV",
    "category": "constant",
    "text": "Relative pivot tolerance employed when computing the LU factorization of the basis matrix.\n\nDefault value: 0.01\n\nPossible Values: Any number between 1.0e-6 and 0.999999.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_SIMPLEX_ABS_TOL_PIV",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_SIMPLEX_ABS_TOL_PIV",
    "category": "constant",
    "text": "Absolute pivot tolerance employed by the simplex optimizers.\n\nDefault value: 1.0e-7\n\nPossible Values: Any number between 1.0e-12 and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_UPPER_OBJ_CUT",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_UPPER_OBJ_CUT",
    "category": "constant",
    "text": "Objective bound.\n\nDefault value: 1.0e30\n\nPossible Values: Any number between -inf and +inf.\n\nSee also:\n\nMSK_DPAR_UPPER_OBJ_CUT_FINITE_TRH. Objective bound.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_DPAR_UPPER_OBJ_CUT_FINITE_TRH",
    "page": "Solver parameters",
    "title": "Mosek.MSK_DPAR_UPPER_OBJ_CUT_FINITE_TRH",
    "category": "constant",
    "text": "Objective bound.\n\nDefault value: 0.5e30\n\nPossible Values: Any number between -inf and +inf.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Double-parameters-1",
    "page": "Solver parameters",
    "title": "Double parameters",
    "category": "section",
    "text": "MSK_DPAR_ANA_SOL_INFEAS_TOL\nMSK_DPAR_BASIS_REL_TOL_S\nMSK_DPAR_BASIS_TOL_S\nMSK_DPAR_BASIS_TOL_X\nMSK_DPAR_CHECK_CONVEXITY_REL_TOL\nMSK_DPAR_DATA_SYM_MAT_TOL\nMSK_DPAR_DATA_SYM_MAT_TOL_HUGE\nMSK_DPAR_DATA_SYM_MAT_TOL_LARGE\nMSK_DPAR_DATA_TOL_AIJ\nMSK_DPAR_DATA_TOL_AIJ_HUGE\nMSK_DPAR_DATA_TOL_AIJ_LARGE\nMSK_DPAR_DATA_TOL_BOUND_INF\nMSK_DPAR_DATA_TOL_BOUND_WRN\nMSK_DPAR_DATA_TOL_C_HUGE\nMSK_DPAR_DATA_TOL_CJ_LARGE\nMSK_DPAR_DATA_TOL_QIJ\nMSK_DPAR_DATA_TOL_X\nMSK_DPAR_INTPNT_CO_TOL_DFEAS\nMSK_DPAR_INTPNT_CO_TOL_INFEAS\nMSK_DPAR_INTPNT_CO_TOL_MU_RED\nMSK_DPAR_INTPNT_CO_TOL_NEAR_REL\nMSK_DPAR_INTPNT_CO_TOL_PFEAS\nMSK_DPAR_INTPNT_CO_TOL_REL_GAP\nMSK_DPAR_INTPNT_NL_MERIT_BAL\nMSK_DPAR_INTPNT_NL_TOL_DFEAS\nMSK_DPAR_INTPNT_NL_TOL_MU_RED\nMSK_DPAR_INTPNT_NL_TOL_NEAR_REL\nMSK_DPAR_INTPNT_NL_TOL_PFEAS\nMSK_DPAR_INTPNT_NL_TOL_REL_GAP\nMSK_DPAR_INTPNT_NL_TOL_REL_STEP\nMSK_DPAR_INTPNT_QO_TOL_DFEAS\nMSK_DPAR_INTPNT_QO_TOL_INFEAS\nMSK_DPAR_INTPNT_QO_TOL_MU_RED\nMSK_DPAR_INTPNT_QO_TOL_NEAR_REL\nMSK_DPAR_INTPNT_QO_TOL_PFEAS\nMSK_DPAR_INTPNT_QO_TOL_REL_GAP\nMSK_DPAR_INTPNT_TOL_DFEAS\nMSK_DPAR_INTPNT_TOL_DSAFE\nMSK_DPAR_INTPNT_TOL_INFEAS\nMSK_DPAR_INTPNT_TOL_MU_RED\nMSK_DPAR_INTPNT_TOL_PATH\nMSK_DPAR_INTPNT_TOL_PFEAS\nMSK_DPAR_INTPNT_TOL_PSAFE\nMSK_DPAR_INTPNT_TOL_REL_GAP\nMSK_DPAR_INTPNT_TOL_REL_STEP\nMSK_DPAR_INTPNT_TOL_STEP_SIZE\nMSK_DPAR_LOWER_OBJ_CUT\nMSK_DPAR_LOWER_OBJ_CUT_FINITE_TRH\nMSK_DPAR_MIO_DISABLE_TERM_TIME\nMSK_DPAR_MIO_MAX_TIME\nMSK_DPAR_MIO_NEAR_TOL_ABS_GAP\nMSK_DPAR_MIO_NEAR_TOL_REL_GAP\nMSK_DPAR_MIO_REL_GAP_CONST\nMSK_DPAR_MIO_TOL_ABS_GAP\nMSK_DPAR_MIO_TOL_ABS_RELAX_INT\nMSK_DPAR_MIO_TOL_FEAS\nMSK_DPAR_MIO_TOL_REL_DUAL_BOUND_IMPROVEMENT\nMSK_DPAR_MIO_TOL_REL_GAP\nMSK_DPAR_OPTIMIZER_MAX_TIME\nMSK_DPAR_PRESOLVE_TOL_ABS_LINDEP\nMSK_DPAR_PRESOLVE_TOL_AIJ\nMSK_DPAR_PRESOLVE_TOL_REL_LINDEP\nMSK_DPAR_PRESOLVE_TOL_S\nMSK_DPAR_PRESOLVE_TOL_X\nMSK_DPAR_QCQO_REFORMULATE_REL_DROP_TOL\nMSK_DPAR_SEMIDEFINITE_TOL_APPROX\nMSK_DPAR_SIM_LU_TOL_REL_PIV\nMSK_DPAR_SIMPLEX_ABS_TOL_PIV\nMSK_DPAR_UPPER_OBJ_CUT\nMSK_DPAR_UPPER_OBJ_CUT_FINITE_TRH"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_BAS_SOL_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_BAS_SOL_FILE_NAME",
    "category": "constant",
    "text": "Name of the bas solution file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_DATA_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_DATA_FILE_NAME",
    "category": "constant",
    "text": "Data are read and written to this file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_DEBUG_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_DEBUG_FILE_NAME",
    "category": "constant",
    "text": "MOSEK debug file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_INT_SOL_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_INT_SOL_FILE_NAME",
    "category": "constant",
    "text": "Name of the int solution file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_ITR_SOL_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_ITR_SOL_FILE_NAME",
    "category": "constant",
    "text": "Name of the itr solution file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_MIO_DEBUG_STRING",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_MIO_DEBUG_STRING",
    "category": "constant",
    "text": "For internal debugging purposes.\n\nDefault value: \"``\"\n\nPossible Values: Any valid string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_PARAM_COMMENT_SIGN",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_PARAM_COMMENT_SIGN",
    "category": "constant",
    "text": "Solution file comment character.\n\nDefault value: \"%%\"\n\nPossible Values: Any valid string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_PARAM_READ_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_PARAM_READ_FILE_NAME",
    "category": "constant",
    "text": "Modifications to the parameter database is read from this file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_PARAM_WRITE_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_PARAM_WRITE_FILE_NAME",
    "category": "constant",
    "text": "The parameter database is written to this file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_READ_MPS_BOU_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_READ_MPS_BOU_NAME",
    "category": "constant",
    "text": "Name of the BOUNDS vector used. An empty name means that the first BOUNDS vector is used.\n\nDefault value: \"``\"\n\nPossible Values: Any valid MPS name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_READ_MPS_OBJ_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_READ_MPS_OBJ_NAME",
    "category": "constant",
    "text": "Objective name in the MPS file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid MPS name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_READ_MPS_RAN_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_READ_MPS_RAN_NAME",
    "category": "constant",
    "text": "Name of the RANGE vector  used. An empty name means that the first RANGE vector is used.\n\nDefault value: \"``\"\n\nPossible Values: Any valid MPS name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_READ_MPS_RHS_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_READ_MPS_RHS_NAME",
    "category": "constant",
    "text": "Name of the RHS used. An empty name means that the first RHS vector is used.\n\nDefault value: \"``\"\n\nPossible Values: Any valid MPS name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_REMOTE_ACCESS_TOKEN",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_REMOTE_ACCESS_TOKEN",
    "category": "constant",
    "text": "An access token used to submit tasks to a remote MOSEK server\n\nDefault value: \"``\"\n\nPossible Values: Any valid string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_SENSITIVITY_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_SENSITIVITY_FILE_NAME",
    "category": "constant",
    "text": "Sensitivity report file name.\n\nDefault value: \"``\"\n\nPossible Values: Any valid string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_SENSITIVITY_RES_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_SENSITIVITY_RES_FILE_NAME",
    "category": "constant",
    "text": "Name of the sensitivity report output file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_SOL_FILTER_XC_LOW",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_SOL_FILTER_XC_LOW",
    "category": "constant",
    "text": "Solution file filter.\n\nDefault value: \"``\"\n\nPossible Values: Any valid filter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_SOL_FILTER_XC_UPR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_SOL_FILTER_XC_UPR",
    "category": "constant",
    "text": "Solution file filter.\n\nDefault value: \"``\"\n\nPossible Values: Any valid filter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_SOL_FILTER_XX_LOW",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_SOL_FILTER_XX_LOW",
    "category": "constant",
    "text": "Solution file filter.\n\nDefault value: \"``\"\n\nPossible Values: Any valid filter.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_SOL_FILTER_XX_UPR",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_SOL_FILTER_XX_UPR",
    "category": "constant",
    "text": "Solution file filter.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_STAT_FILE_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_STAT_FILE_NAME",
    "category": "constant",
    "text": "Statistics file name.\n\nDefault value: \"``\"\n\nPossible Values: Any valid file name.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_STAT_KEY",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_STAT_KEY",
    "category": "constant",
    "text": "Key used when writing the summary file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_STAT_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_STAT_NAME",
    "category": "constant",
    "text": "Name used when writing the statistics file.\n\nDefault value: \"``\"\n\nPossible Values: Any valid XML string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#Mosek.MSK_SPAR_WRITE_LP_GEN_VAR_NAME",
    "page": "Solver parameters",
    "title": "Mosek.MSK_SPAR_WRITE_LP_GEN_VAR_NAME",
    "category": "constant",
    "text": "Added variable names in the LP files.\n\nDefault value: \"xmskgen\"\n\nPossible Values: Any valid string.\n\n\n\n\n\n"
},

{
    "location": "parameters/#String-parameters-1",
    "page": "Solver parameters",
    "title": "String parameters",
    "category": "section",
    "text": "MSK_SPAR_BAS_SOL_FILE_NAME\nMSK_SPAR_DATA_FILE_NAME\nMSK_SPAR_DEBUG_FILE_NAME\nMSK_SPAR_INT_SOL_FILE_NAME\nMSK_SPAR_ITR_SOL_FILE_NAME\nMSK_SPAR_MIO_DEBUG_STRING\nMSK_SPAR_PARAM_COMMENT_SIGN\nMSK_SPAR_PARAM_READ_FILE_NAME\nMSK_SPAR_PARAM_WRITE_FILE_NAME\nMSK_SPAR_READ_MPS_BOU_NAME\nMSK_SPAR_READ_MPS_OBJ_NAME\nMSK_SPAR_READ_MPS_RAN_NAME\nMSK_SPAR_READ_MPS_RHS_NAME\nMSK_SPAR_REMOTE_ACCESS_TOKEN\nMSK_SPAR_SENSITIVITY_FILE_NAME\nMSK_SPAR_SENSITIVITY_RES_FILE_NAME\nMSK_SPAR_SOL_FILTER_XC_LOW\nMSK_SPAR_SOL_FILTER_XC_UPR\nMSK_SPAR_SOL_FILTER_XX_LOW\nMSK_SPAR_SOL_FILTER_XX_UPR\nMSK_SPAR_STAT_FILE_NAME\nMSK_SPAR_STAT_KEY\nMSK_SPAR_STAT_NAME\nMSK_SPAR_WRITE_LP_GEN_VAR_NAME"
},

{
    "location": "enums/#",
    "page": "Symbolic values",
    "title": "Symbolic values",
    "category": "page",
    "text": "CurrentModule = Mosek"
},

{
    "location": "enums/#Mosek.Solveform",
    "page": "Symbolic values",
    "title": "Mosek.Solveform",
    "category": "type",
    "text": "Solveform\n\nSolve primal or dual form\n\nMSK_SOLVE_DUAL. The optimizer should solve the dual problem.\nMSK_SOLVE_FREE. The optimizer is free to solve either the primal or the dual problem.\nMSK_SOLVE_PRIMAL. The optimizer should solve the primal problem.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Problemitem",
    "page": "Symbolic values",
    "title": "Mosek.Problemitem",
    "category": "type",
    "text": "Problemitem\n\nProblem data items\n\nMSK_PI_CON. Item is a constraint.\nMSK_PI_CONE. Item is a cone.\nMSK_PI_VAR. Item is a variable.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Accmode",
    "page": "Symbolic values",
    "title": "Mosek.Accmode",
    "category": "type",
    "text": "Accmode\n\nConstraint or variable access modes. All functions using this enum are deprecated. Use separate functions for rows/columns instead.\n\nMSK_ACC_CON. Access data by rows (constraint oriented)\nMSK_ACC_VAR. Access data by columns (variable oriented)\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Sensitivitytype",
    "page": "Symbolic values",
    "title": "Mosek.Sensitivitytype",
    "category": "type",
    "text": "Sensitivitytype\n\nSensitivity types\n\nMSK_SENSITIVITY_TYPE_BASIS. Basis sensitivity analysis is performed.\nMSK_SENSITIVITY_TYPE_OPTIMAL_PARTITION. Optimal partition sensitivity analysis is performed.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Uplo",
    "page": "Symbolic values",
    "title": "Mosek.Uplo",
    "category": "type",
    "text": "Uplo\n\nTriangular part of a symmetric matrix.\n\nMSK_UPLO_LO. Lower part.\nMSK_UPLO_UP. Upper part\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Intpnthotstart",
    "page": "Symbolic values",
    "title": "Mosek.Intpnthotstart",
    "category": "type",
    "text": "Intpnthotstart\n\nHot-start type employed by the interior-point optimizers.\n\nMSK_INTPNT_HOTSTART_DUAL. The interior-point optimizer exploits the dual solution only.\nMSK_INTPNT_HOTSTART_NONE. The interior-point optimizer performs a coldstart.\nMSK_INTPNT_HOTSTART_PRIMAL. The interior-point optimizer exploits the primal solution only.\nMSK_INTPNT_HOTSTART_PRIMAL_DUAL. The interior-point optimizer exploits both the primal and dual solution.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Solsta",
    "page": "Symbolic values",
    "title": "Mosek.Solsta",
    "category": "type",
    "text": "Solsta\n\nSolution status keys\n\nMSK_SOL_STA_DUAL_FEAS. The solution is dual feasible.\nMSK_SOL_STA_DUAL_ILLPOSED_CER. The solution is a certificate that the dual problem is illposed.\nMSK_SOL_STA_DUAL_INFEAS_CER. The solution is a certificate of dual infeasibility.\nMSK_SOL_STA_INTEGER_OPTIMAL. The primal solution is integer optimal.\nMSK_SOL_STA_NEAR_DUAL_FEAS. The solution is nearly dual feasible.\nMSK_SOL_STA_NEAR_DUAL_INFEAS_CER. The solution is almost a certificate of dual infeasibility.\nMSK_SOL_STA_NEAR_INTEGER_OPTIMAL. The primal solution is near integer optimal.\nMSK_SOL_STA_NEAR_OPTIMAL. The solution is nearly optimal.\nMSK_SOL_STA_NEAR_PRIM_AND_DUAL_FEAS. The solution is nearly both primal and dual feasible.\nMSK_SOL_STA_NEAR_PRIM_FEAS. The solution is nearly primal feasible.\nMSK_SOL_STA_NEAR_PRIM_INFEAS_CER. The solution is almost a certificate of primal infeasibility.\nMSK_SOL_STA_OPTIMAL. The solution is optimal.\nMSK_SOL_STA_PRIM_AND_DUAL_FEAS. The solution is both primal and dual feasible.\nMSK_SOL_STA_PRIM_FEAS. The solution is primal feasible.\nMSK_SOL_STA_PRIM_ILLPOSED_CER. The solution is a certificate that the primal problem is illposed.\nMSK_SOL_STA_PRIM_INFEAS_CER. The solution is a certificate of primal infeasibility.\nMSK_SOL_STA_UNKNOWN. Status of the solution is unknown.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Objsense",
    "page": "Symbolic values",
    "title": "Mosek.Objsense",
    "category": "type",
    "text": "Objsense\n\nObjective sense types\n\nMSK_OBJECTIVE_SENSE_MAXIMIZE. The problem should be maximized.\nMSK_OBJECTIVE_SENSE_MINIMIZE. The problem should be minimized.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Solitem",
    "page": "Symbolic values",
    "title": "Mosek.Solitem",
    "category": "type",
    "text": "Solitem\n\nSolution items\n\nMSK_SOL_ITEM_SLC. Lagrange multipliers for lower bounds on the constraints.\nMSK_SOL_ITEM_SLX. Lagrange multipliers for lower bounds on the variables.\nMSK_SOL_ITEM_SNX. Lagrange multipliers corresponding to the conic constraints on the variables.\nMSK_SOL_ITEM_SUC. Lagrange multipliers for upper bounds on the constraints.\nMSK_SOL_ITEM_SUX. Lagrange multipliers for upper bounds on the variables.\nMSK_SOL_ITEM_XC. Solution for the constraints.\nMSK_SOL_ITEM_XX. Variable solution.\nMSK_SOL_ITEM_Y. Lagrange multipliers for equations.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Boundkey",
    "page": "Symbolic values",
    "title": "Mosek.Boundkey",
    "category": "type",
    "text": "Boundkey\n\nBound keys\n\nMSK_BK_FR. The constraint or variable is free.\nMSK_BK_FX. The constraint or variable is fixed.\nMSK_BK_LO. The constraint or variable has a finite lower bound and an infinite upper bound.\nMSK_BK_RA. The constraint or variable is ranged.\nMSK_BK_UP. The constraint or variable has an infinite lower bound and an finite upper bound.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Basindtype",
    "page": "Symbolic values",
    "title": "Mosek.Basindtype",
    "category": "type",
    "text": "Basindtype\n\nBasis identification\n\nMSK_BI_ALWAYS. Basis identification is always performed even if the interior-point optimizer terminates abnormally.\nMSK_BI_IF_FEASIBLE. Basis identification is not performed if the interior-point optimizer terminates with a problem status saying that the problem is primal or dual infeasible.\nMSK_BI_NEVER. Never do basis identification.\nMSK_BI_NO_ERROR. Basis identification is performed if the interior-point optimizer terminates without an error.\nMSK_BI_RESERVERED. Not currently in use.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Branchdir",
    "page": "Symbolic values",
    "title": "Mosek.Branchdir",
    "category": "type",
    "text": "Branchdir\n\nSpecifies the branching direction.\n\nMSK_BRANCH_DIR_DOWN. The mixed-integer optimizer always chooses the down branch first.\nMSK_BRANCH_DIR_FAR. Branch in direction farthest from selected fractional variable.\nMSK_BRANCH_DIR_FREE. The mixed-integer optimizer decides which branch to choose.\nMSK_BRANCH_DIR_GUIDED. Branch in direction of current incumbent.\nMSK_BRANCH_DIR_NEAR. Branch in direction nearest to selected fractional variable.\nMSK_BRANCH_DIR_PSEUDOCOST. Branch based on the pseudocost of the variable.\nMSK_BRANCH_DIR_ROOT_LP. Chose direction based on root lp value of selected variable.\nMSK_BRANCH_DIR_UP. The mixed-integer optimizer always chooses the up branch first.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Liinfitem",
    "page": "Symbolic values",
    "title": "Mosek.Liinfitem",
    "category": "type",
    "text": "Liinfitem\n\nLong integer information items.\n\nMSK_LIINF_BI_CLEAN_DUAL_DEG_ITER. Number of dual degenerate clean iterations performed in the basis identification.\nMSK_LIINF_BI_CLEAN_DUAL_ITER. Number of dual clean iterations performed in the basis identification.\nMSK_LIINF_BI_CLEAN_PRIMAL_DEG_ITER. Number of primal degenerate clean iterations performed in the basis identification.\nMSK_LIINF_BI_CLEAN_PRIMAL_ITER. Number of primal clean iterations performed in the basis identification.\nMSK_LIINF_BI_DUAL_ITER. Number of dual pivots performed in the basis identification.\nMSK_LIINF_BI_PRIMAL_ITER. Number of primal pivots performed in the basis identification.\nMSK_LIINF_INTPNT_FACTOR_NUM_NZ. Number of non-zeros in factorization.\nMSK_LIINF_MIO_INTPNT_ITER. Number of interior-point iterations performed by the mixed-integer optimizer.\nMSK_LIINF_MIO_PRESOLVED_ANZ. Number of  non-zero entries in the constraint matrix of presolved problem.\nMSK_LIINF_MIO_SIM_MAXITER_SETBACKS. Number of times the the simplex optimizer has hit the maximum iteration limit when re-optimizing.\nMSK_LIINF_MIO_SIMPLEX_ITER. Number of simplex iterations performed by the mixed-integer optimizer.\nMSK_LIINF_RD_NUMANZ. Number of non-zeros in A that is read.\nMSK_LIINF_RD_NUMQNZ. Number of Q non-zeros.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Simhotstart",
    "page": "Symbolic values",
    "title": "Mosek.Simhotstart",
    "category": "type",
    "text": "Simhotstart\n\nHot-start type employed by the simplex optimizer\n\nMSK_SIM_HOTSTART_FREE. The simplex optimize chooses the hot-start type.\nMSK_SIM_HOTSTART_NONE. The simplex optimizer performs a coldstart.\nMSK_SIM_HOTSTART_STATUS_KEYS. Only the status keys of the constraints and variables are used to choose the type of hot-start.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Callbackcode",
    "page": "Symbolic values",
    "title": "Mosek.Callbackcode",
    "category": "type",
    "text": "Callbackcode\n\nProgress callback codes\n\nMSK_CALLBACK_BEGIN_BI. The basis identification procedure has been started.\nMSK_CALLBACK_BEGIN_CONIC. The callback function is called when the conic optimizer is started.\nMSK_CALLBACK_BEGIN_DUAL_BI. The callback function is called from within the basis identification procedure when the dual phase is started.\nMSK_CALLBACK_BEGIN_DUAL_SENSITIVITY. Dual sensitivity analysis is started.\nMSK_CALLBACK_BEGIN_DUAL_SETUP_BI. The callback function is called when the dual BI phase is started.\nMSK_CALLBACK_BEGIN_DUAL_SIMPLEX. The callback function is called when the dual simplex optimizer started.\nMSK_CALLBACK_BEGIN_DUAL_SIMPLEX_BI. The callback function is called from within the basis identification procedure when the dual simplex clean-up phase is started.\nMSK_CALLBACK_BEGIN_FULL_CONVEXITY_CHECK. Begin full convexity check.\nMSK_CALLBACK_BEGIN_INFEAS_ANA. The callback function is called when the infeasibility analyzer is started.\nMSK_CALLBACK_BEGIN_INTPNT. The callback function is called when the interior-point optimizer is started.\nMSK_CALLBACK_BEGIN_LICENSE_WAIT. Begin waiting for license.\nMSK_CALLBACK_BEGIN_MIO. The callback function is called when the mixed-integer optimizer is started.\nMSK_CALLBACK_BEGIN_OPTIMIZER. The callback function is called when the optimizer is started.\nMSK_CALLBACK_BEGIN_PRESOLVE. The callback function is called when the presolve is started.\nMSK_CALLBACK_BEGIN_PRIMAL_BI. The callback function is called from within the basis identification procedure when the primal phase is started.\nMSK_CALLBACK_BEGIN_PRIMAL_REPAIR. Begin primal feasibility repair.\nMSK_CALLBACK_BEGIN_PRIMAL_SENSITIVITY. Primal sensitivity analysis is started.\nMSK_CALLBACK_BEGIN_PRIMAL_SETUP_BI. The callback function is called when the primal BI setup is started.\nMSK_CALLBACK_BEGIN_PRIMAL_SIMPLEX. The callback function is called when the primal simplex optimizer is started.\nMSK_CALLBACK_BEGIN_PRIMAL_SIMPLEX_BI. The callback function is called from within the basis identification procedure when the primal simplex clean-up phase is started.\nMSK_CALLBACK_BEGIN_QCQO_REFORMULATE. Begin QCQO reformulation.\nMSK_CALLBACK_BEGIN_READ. MOSEK has started reading a problem file.\nMSK_CALLBACK_BEGIN_ROOT_CUTGEN. The callback function is called when root cut generation is started.\nMSK_CALLBACK_BEGIN_SIMPLEX. The callback function is called when the simplex optimizer is started.\nMSK_CALLBACK_BEGIN_SIMPLEX_BI. The callback function is called from within the basis identification procedure when the simplex clean-up phase is started.\nMSK_CALLBACK_BEGIN_TO_CONIC. Begin conic reformulation.\nMSK_CALLBACK_BEGIN_WRITE. MOSEK has started writing a problem file.\nMSK_CALLBACK_CONIC. The callback function is called from within the conic optimizer after the information database has been updated.\nMSK_CALLBACK_DUAL_SIMPLEX. The callback function is called from within the dual simplex optimizer.\nMSK_CALLBACK_END_BI. The callback function is called when the basis identification procedure is terminated.\nMSK_CALLBACK_END_CONIC. The callback function is called when the conic optimizer is terminated.\nMSK_CALLBACK_END_DUAL_BI. The callback function is called from within the basis identification procedure when the dual phase is terminated.\nMSK_CALLBACK_END_DUAL_SENSITIVITY. Dual sensitivity analysis is terminated.\nMSK_CALLBACK_END_DUAL_SETUP_BI. The callback function is called when the dual BI phase is terminated.\nMSK_CALLBACK_END_DUAL_SIMPLEX. The callback function is called when the dual simplex optimizer is terminated.\nMSK_CALLBACK_END_DUAL_SIMPLEX_BI. The callback function is called from within the basis identification procedure when the dual clean-up phase is terminated.\nMSK_CALLBACK_END_FULL_CONVEXITY_CHECK. End full convexity check.\nMSK_CALLBACK_END_INFEAS_ANA. The callback function is called when the infeasibility analyzer is terminated.\nMSK_CALLBACK_END_INTPNT. The callback function is called when the interior-point optimizer is terminated.\nMSK_CALLBACK_END_LICENSE_WAIT. End waiting for license.\nMSK_CALLBACK_END_MIO. The callback function is called when the mixed-integer optimizer is terminated.\nMSK_CALLBACK_END_OPTIMIZER. The callback function is called when the optimizer is terminated.\nMSK_CALLBACK_END_PRESOLVE. The callback function is called when the presolve is completed.\nMSK_CALLBACK_END_PRIMAL_BI. The callback function is called from within the basis identification procedure when the primal phase is terminated.\nMSK_CALLBACK_END_PRIMAL_REPAIR. End primal feasibility repair.\nMSK_CALLBACK_END_PRIMAL_SENSITIVITY. Primal sensitivity analysis is terminated.\nMSK_CALLBACK_END_PRIMAL_SETUP_BI. The callback function is called when the primal BI setup is terminated.\nMSK_CALLBACK_END_PRIMAL_SIMPLEX. The callback function is called when the primal simplex optimizer is terminated.\nMSK_CALLBACK_END_PRIMAL_SIMPLEX_BI. The callback function is called from within the basis identification procedure when the primal clean-up phase is terminated.\nMSK_CALLBACK_END_QCQO_REFORMULATE. End QCQO reformulation.\nMSK_CALLBACK_END_READ. MOSEK has finished reading a problem file.\nMSK_CALLBACK_END_ROOT_CUTGEN. The callback function is called when root cut generation is is terminated.\nMSK_CALLBACK_END_SIMPLEX. The callback function is called when the simplex optimizer is terminated.\nMSK_CALLBACK_END_SIMPLEX_BI. The callback function is called from within the basis identification procedure when the simplex clean-up phase is terminated.\nMSK_CALLBACK_END_TO_CONIC. End conic reformulation.\nMSK_CALLBACK_END_WRITE. MOSEK has finished writing a problem file.\nMSK_CALLBACK_IM_BI. The callback function is called from within the basis identification procedure at an intermediate point.\nMSK_CALLBACK_IM_CONIC. The callback function is called at an intermediate stage within the conic optimizer where the information database has not been updated.\nMSK_CALLBACK_IM_DUAL_BI. The callback function is called from within the basis identification procedure at an intermediate point in the dual phase.\nMSK_CALLBACK_IM_DUAL_SENSIVITY. The callback function is called at an intermediate stage of the dual sensitivity analysis.\nMSK_CALLBACK_IM_DUAL_SIMPLEX. The callback function is called at an intermediate point in the dual simplex optimizer.\nMSK_CALLBACK_IM_FULL_CONVEXITY_CHECK. The callback function is called at an intermediate stage of the full convexity check.\nMSK_CALLBACK_IM_INTPNT. The callback function is called at an intermediate stage within the interior-point optimizer where the information database has not been updated.\nMSK_CALLBACK_IM_LICENSE_WAIT. MOSEK is waiting for a license.\nMSK_CALLBACK_IM_LU. The callback function is called from within the LU factorization procedure at an intermediate point.\nMSK_CALLBACK_IM_MIO. The callback function is called at an intermediate point in the mixed-integer optimizer.\nMSK_CALLBACK_IM_MIO_DUAL_SIMPLEX. The callback function is called at an intermediate point in the mixed-integer optimizer while running the dual simplex optimizer.\nMSK_CALLBACK_IM_MIO_INTPNT. The callback function is called at an intermediate point in the mixed-integer optimizer while running the interior-point optimizer.\nMSK_CALLBACK_IM_MIO_PRIMAL_SIMPLEX. The callback function is called at an intermediate point in the mixed-integer optimizer while running the primal simplex optimizer.\nMSK_CALLBACK_IM_ORDER. The callback function is called from within the matrix ordering procedure at an intermediate point.\nMSK_CALLBACK_IM_PRESOLVE. The callback function is called from within the presolve procedure at an intermediate stage.\nMSK_CALLBACK_IM_PRIMAL_BI. The callback function is called from within the basis identification procedure at an intermediate point in the primal phase.\nMSK_CALLBACK_IM_PRIMAL_SENSIVITY. The callback function is called at an intermediate stage of the primal sensitivity analysis.\nMSK_CALLBACK_IM_PRIMAL_SIMPLEX. The callback function is called at an intermediate point in the primal simplex optimizer.\nMSK_CALLBACK_IM_QO_REFORMULATE. The callback function is called at an intermediate stage of the conic quadratic reformulation.\nMSK_CALLBACK_IM_READ. Intermediate stage in reading.\nMSK_CALLBACK_IM_ROOT_CUTGEN. The callback is called from within root cut generation at an intermediate stage.\nMSK_CALLBACK_IM_SIMPLEX. The callback function is called from within the simplex optimizer at an intermediate point.\nMSK_CALLBACK_IM_SIMPLEX_BI. The callback function is called from within the basis identification procedure at an intermediate point in the simplex clean-up phase.\nMSK_CALLBACK_INTPNT. The callback function is called from within the interior-point optimizer after the information database has been updated.\nMSK_CALLBACK_NEW_INT_MIO. The callback function is called after a new integer solution has been located by the mixed-integer optimizer.\nMSK_CALLBACK_PRIMAL_SIMPLEX. The callback function is called from within the primal simplex optimizer.\nMSK_CALLBACK_READ_OPF. The callback function is called from the OPF reader.\nMSK_CALLBACK_READ_OPF_SECTION. A chunk of Q non-zeros has been read from a problem file.\nMSK_CALLBACK_SOLVING_REMOTE. The callback function is called while the task is being solved on a remote server.\nMSK_CALLBACK_UPDATE_DUAL_BI. The callback function is called from within the basis identification procedure at an intermediate point in the dual phase.\nMSK_CALLBACK_UPDATE_DUAL_SIMPLEX. The callback function is called in the dual simplex optimizer.\nMSK_CALLBACK_UPDATE_DUAL_SIMPLEX_BI. The callback function is called from within the basis identification procedure at an intermediate point in the dual simplex clean-up phase.\nMSK_CALLBACK_UPDATE_PRESOLVE. The callback function is called from within the presolve procedure.\nMSK_CALLBACK_UPDATE_PRIMAL_BI. The callback function is called from within the basis identification procedure at an intermediate point in the primal phase.\nMSK_CALLBACK_UPDATE_PRIMAL_SIMPLEX. The callback function is called  in the primal simplex optimizer.\nMSK_CALLBACK_UPDATE_PRIMAL_SIMPLEX_BI. The callback function is called from within the basis identification procedure at an intermediate point in the primal simplex clean-up phase.\nMSK_CALLBACK_WRITE_OPF. The callback function is called from the OPF writer.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Symmattype",
    "page": "Symbolic values",
    "title": "Mosek.Symmattype",
    "category": "type",
    "text": "Symmattype\n\nCone types\n\nMSK_SYMMAT_TYPE_SPARSE. Sparse symmetric matrix.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Feature",
    "page": "Symbolic values",
    "title": "Mosek.Feature",
    "category": "type",
    "text": "Feature\n\nLicense feature\n\nMSK_FEATURE_PTON. Nonlinear extension.\nMSK_FEATURE_PTS. Base system.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Mark",
    "page": "Symbolic values",
    "title": "Mosek.Mark",
    "category": "type",
    "text": "Mark\n\nMark\n\nMSK_MARK_LO. The lower bound is selected for sensitivity analysis.\nMSK_MARK_UP. The upper bound is selected for sensitivity analysis.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Conetype",
    "page": "Symbolic values",
    "title": "Mosek.Conetype",
    "category": "type",
    "text": "Conetype\n\nCone types\n\nMSK_CT_QUAD. The cone is a quadratic cone.\nMSK_CT_RQUAD. The cone is a rotated quadratic cone.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Streamtype",
    "page": "Symbolic values",
    "title": "Mosek.Streamtype",
    "category": "type",
    "text": "Streamtype\n\nStream types\n\nMSK_STREAM_ERR. Error stream. Error messages are written to this stream.\nMSK_STREAM_LOG. Log stream. Contains the aggregated contents of all other streams. This means that a message written to any other stream will also be written to this stream.\nMSK_STREAM_MSG. Message stream. Log information relating to performance and progress of the optimization is written to this stream.\nMSK_STREAM_WRN. Warning stream. Warning messages are written to this stream.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Iomode",
    "page": "Symbolic values",
    "title": "Mosek.Iomode",
    "category": "type",
    "text": "Iomode\n\nInput/output modes\n\nMSK_IOMODE_READ. The file is read-only.\nMSK_IOMODE_READWRITE. The file is to read and written.\nMSK_IOMODE_WRITE. The file is write-only. If the file exists then it is truncated when it is opened. Otherwise it is created when it is opened.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Simseltype",
    "page": "Symbolic values",
    "title": "Mosek.Simseltype",
    "category": "type",
    "text": "Simseltype\n\nSimplex selection strategy\n\nMSK_SIM_SELECTION_ASE. The optimizer uses approximate steepest-edge pricing.\nMSK_SIM_SELECTION_DEVEX. The optimizer uses devex steepest-edge pricing.\nMSK_SIM_SELECTION_FREE. The optimizer chooses the pricing strategy.\nMSK_SIM_SELECTION_FULL. The optimizer uses full pricing.\nMSK_SIM_SELECTION_PARTIAL. The optimizer uses a partial selection approach.\nMSK_SIM_SELECTION_SE. The optimizer uses steepest-edge selection.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Xmlwriteroutputtype",
    "page": "Symbolic values",
    "title": "Mosek.Xmlwriteroutputtype",
    "category": "type",
    "text": "Xmlwriteroutputtype\n\nXML writer output mode\n\nMSK_WRITE_XML_MODE_COL. Write in column order.\nMSK_WRITE_XML_MODE_ROW. Write in row order.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Miomode",
    "page": "Symbolic values",
    "title": "Mosek.Miomode",
    "category": "type",
    "text": "Miomode\n\nInteger restrictions\n\nMSK_MIO_MODE_IGNORED. The integer constraints are ignored and the problem is solved as a continuous problem.\nMSK_MIO_MODE_SATISFIED. Integer restrictions should be satisfied.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Dinfitem",
    "page": "Symbolic values",
    "title": "Mosek.Dinfitem",
    "category": "type",
    "text": "Dinfitem\n\nDouble information items\n\nMSK_DINF_BI_CLEAN_DUAL_TIME. Time  spent within the dual clean-up optimizer of the basis identification procedure since its invocation.\nMSK_DINF_BI_CLEAN_PRIMAL_TIME. Time spent within the primal clean-up optimizer of the basis identification procedure since its invocation.\nMSK_DINF_BI_CLEAN_TIME. Time spent within the clean-up phase of the basis identification procedure since its invocation.\nMSK_DINF_BI_DUAL_TIME. Time spent within the dual phase basis identification procedure since its invocation.\nMSK_DINF_BI_PRIMAL_TIME. Time  spent within the primal phase of the basis identification procedure since its invocation.\nMSK_DINF_BI_TIME. Time spent within the basis identification procedure since its invocation.\nMSK_DINF_INTPNT_DUAL_FEAS. Dual feasibility measure reported by the interior-point optimizer.\nMSK_DINF_INTPNT_DUAL_OBJ. Dual objective value reported by the interior-point optimizer.\nMSK_DINF_INTPNT_FACTOR_NUM_FLOPS. An estimate of the number of flops used in the factorization.\nMSK_DINF_INTPNT_OPT_STATUS. A measure of optimality of the solution.\nMSK_DINF_INTPNT_ORDER_TIME. Order time (in seconds).\nMSK_DINF_INTPNT_PRIMAL_FEAS. Primal feasibility measure reported by the interior-point optimizer.\nMSK_DINF_INTPNT_PRIMAL_OBJ. Primal objective value reported by the interior-point optimizer.\nMSK_DINF_INTPNT_TIME. Time spent within the interior-point optimizer since its invocation.\nMSK_DINF_MIO_CLIQUE_SEPARATION_TIME. Seperation time for clique cuts.\nMSK_DINF_MIO_CMIR_SEPARATION_TIME. Seperation time for CMIR cuts.\nMSK_DINF_MIO_CONSTRUCT_SOLUTION_OBJ. Optimal objective value corresponding to the feasible solution.\nMSK_DINF_MIO_DUAL_BOUND_AFTER_PRESOLVE. Value of the dual bound after presolve but before cut generation.\nMSK_DINF_MIO_GMI_SEPARATION_TIME. Seperation time for GMI cuts.\nMSK_DINF_MIO_HEURISTIC_TIME. Total time spent in the optimizer.\nMSK_DINF_MIO_IMPLIED_BOUND_TIME. Seperation time for implied bound cuts.\nMSK_DINF_MIO_KNAPSACK_COVER_SEPARATION_TIME. Seperation time for knapsack cover.\nMSK_DINF_MIO_OBJ_ABS_GAP. If the mixed-integer optimizer has computed a feasible solution and a bound, this contains the absolute gap.\nMSK_DINF_MIO_OBJ_BOUND. The best bound on the objective value known.\nMSK_DINF_MIO_OBJ_INT. The primal objective value corresponding to the best integer feasible solution.\nMSK_DINF_MIO_OBJ_REL_GAP. If the mixed-integer optimizer has computed a feasible solution and a bound, this contains the relative gap.\nMSK_DINF_MIO_OPTIMIZER_TIME. Total time spent in the optimizer.\nMSK_DINF_MIO_PROBING_TIME. Total time for probing.\nMSK_DINF_MIO_ROOT_CUTGEN_TIME. Total time for cut generation.\nMSK_DINF_MIO_ROOT_OPTIMIZER_TIME. Time spent in the optimizer while solving the root relaxation.\nMSK_DINF_MIO_ROOT_PRESOLVE_TIME. Time spent in while presolving the root relaxation.\nMSK_DINF_MIO_TIME. Time spent in the mixed-integer optimizer.\nMSK_DINF_MIO_USER_OBJ_CUT. If the objective cut is used, then this information item has the value of the cut.\nMSK_DINF_OPTIMIZER_TIME. Total time spent in the optimizer since it was invoked.\nMSK_DINF_PRESOLVE_ELI_TIME. Total time spent in the eliminator since the presolve was invoked.\nMSK_DINF_PRESOLVE_LINDEP_TIME. Total time spent  in the linear dependency checker since the presolve was invoked.\nMSK_DINF_PRESOLVE_TIME. Total time (in seconds) spent in the presolve since it was invoked.\nMSK_DINF_PRIMAL_REPAIR_PENALTY_OBJ. The optimal objective value of the penalty function.\nMSK_DINF_QCQO_REFORMULATE_MAX_PERTURBATION. Maximum absolute diagonal perturbation occuring during the QCQO reformulation.\nMSK_DINF_QCQO_REFORMULATE_TIME. Time spent with conic quadratic reformulation.\nMSK_DINF_QCQO_REFORMULATE_WORST_CHOLESKY_COLUMN_SCALING. Worst Cholesky column scaling.\nMSK_DINF_QCQO_REFORMULATE_WORST_CHOLESKY_DIAG_SCALING. Worst Cholesky diagonal scaling.\nMSK_DINF_RD_TIME. Time spent reading the data file.\nMSK_DINF_SIM_DUAL_TIME. Time spent in the dual simplex optimizer since invoking it.\nMSK_DINF_SIM_FEAS. Feasibility measure reported by the simplex optimizer.\nMSK_DINF_SIM_OBJ. Objective value reported by the simplex optimizer.\nMSK_DINF_SIM_PRIMAL_TIME. Time spent in the primal simplex optimizer since invoking it.\nMSK_DINF_SIM_TIME. Time spent in the simplex optimizer since invoking it.\nMSK_DINF_SOL_BAS_DUAL_OBJ. Dual objective value of the basic solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_BAS_DVIOLCON. Maximal dual bound violation for xx in the basic solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_BAS_DVIOLVAR. Maximal dual bound violation for xx in the basic solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_BAS_NRM_BARX. Infinity norm of barx in the basic solution.\nMSK_DINF_SOL_BAS_NRM_SLC. Infinity norm of slc in the basic solution.\nMSK_DINF_SOL_BAS_NRM_SLX. Infinity norm of slx in the basic solution.\nMSK_DINF_SOL_BAS_NRM_SUC. Infinity norm of suc in the basic solution.\nMSK_DINF_SOL_BAS_NRM_SUX. Infinity norm of sux in the basic solution.\nMSK_DINF_SOL_BAS_NRM_XC. Infinity norm of xc in the basic solution.\nMSK_DINF_SOL_BAS_NRM_XX. Infinity norm of xx in the basic solution.\nMSK_DINF_SOL_BAS_NRM_Y. Infinity norm of Y in the basic solution.\nMSK_DINF_SOL_BAS_PRIMAL_OBJ. Primal objective value of the basic solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_BAS_PVIOLCON. Maximal primal bound violation for xx in the basic solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_BAS_PVIOLVAR. Maximal primal bound violation for xx in the basic solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITG_NRM_BARX. Infinity norm of barx in the integer solution.\nMSK_DINF_SOL_ITG_NRM_XC. Infinity norm of xc in the integer solution.\nMSK_DINF_SOL_ITG_NRM_XX. Infinity norm of xx in the integer solution.\nMSK_DINF_SOL_ITG_PRIMAL_OBJ. Primal objective value of the integer solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITG_PVIOLBARVAR. Maximal primal bound violation for barx in the integer solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITG_PVIOLCON. Maximal primal bound violation for xx in the integer solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITG_PVIOLCONES. Maximal primal violation for primal conic constraints in the integer solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITG_PVIOLITG. Maximal violation for the integer constraints in the integer solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITG_PVIOLVAR. Maximal primal bound violation for xx in the integer solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_DUAL_OBJ. Dual objective value of the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_DVIOLBARVAR. Maximal dual bound violation for barx in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_DVIOLCON. Maximal dual bound violation for xx in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_DVIOLCONES. Maximal dual violation for dual conic constraints in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_DVIOLVAR. Maximal dual bound violation for xx in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_NRM_BARS. Infinity norm of bars in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_BARX. Infinity norm of barx in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_SLC. Infinity norm of slc in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_SLX. Infinity norm of slx in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_SNX. Infinity norm of snx in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_SUC. Infinity norm of suc in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_SUX. Infinity norm of sux in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_XC. Infinity norm of xc in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_XX. Infinity norm of xx in the interior-point solution.\nMSK_DINF_SOL_ITR_NRM_Y. Infinity norm of Y in the interior-point solution.\nMSK_DINF_SOL_ITR_PRIMAL_OBJ. Primal objective value of the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_PVIOLBARVAR. Maximal primal bound violation for barx in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_PVIOLCON. Maximal primal bound violation for xx in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_PVIOLCONES. Maximal primal violation for primal conic constraints in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_SOL_ITR_PVIOLVAR. Maximal primal bound violation for xx in the interior-point solution. Updated by the function updatesolutioninfo.\nMSK_DINF_TO_CONIC_TIME. Time spent in the last to conic reformulation.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Parametertype",
    "page": "Symbolic values",
    "title": "Mosek.Parametertype",
    "category": "type",
    "text": "Parametertype\n\nParameter type\n\nMSK_PAR_DOU_TYPE. Is a double parameter.\nMSK_PAR_INT_TYPE. Is an integer parameter.\nMSK_PAR_INVALID_TYPE. Not a valid parameter.\nMSK_PAR_STR_TYPE. Is a string parameter.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Rescodetype",
    "page": "Symbolic values",
    "title": "Mosek.Rescodetype",
    "category": "type",
    "text": "Rescodetype\n\nResponse code type\n\nMSK_RESPONSE_ERR. The response code is an error.\nMSK_RESPONSE_OK. The response code is OK.\nMSK_RESPONSE_TRM. The response code is an optimizer termination status.\nMSK_RESPONSE_UNK. The response code does not belong to any class.\nMSK_RESPONSE_WRN. The response code is a warning.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Prosta",
    "page": "Symbolic values",
    "title": "Mosek.Prosta",
    "category": "type",
    "text": "Prosta\n\nProblem status keys\n\nMSK_PRO_STA_DUAL_FEAS. The problem is dual feasible.\nMSK_PRO_STA_DUAL_INFEAS. The problem is dual infeasible.\nMSK_PRO_STA_ILL_POSED. The problem is ill-posed. For example, it may be primal and dual feasible but have a positive duality gap.\nMSK_PRO_STA_NEAR_DUAL_FEAS. The problem is at least nearly dual feasible.\nMSK_PRO_STA_NEAR_PRIM_AND_DUAL_FEAS. The problem is at least nearly primal and dual feasible.\nMSK_PRO_STA_NEAR_PRIM_FEAS. The problem is at least nearly primal feasible.\nMSK_PRO_STA_PRIM_AND_DUAL_FEAS. The problem is primal and dual feasible.\nMSK_PRO_STA_PRIM_AND_DUAL_INFEAS. The problem is primal and dual infeasible.\nMSK_PRO_STA_PRIM_FEAS. The problem is primal feasible.\nMSK_PRO_STA_PRIM_INFEAS. The problem is primal infeasible.\nMSK_PRO_STA_PRIM_INFEAS_OR_UNBOUNDED. The problem is either primal infeasible or unbounded. This may occur for mixed-integer problems.\nMSK_PRO_STA_UNKNOWN. Unknown problem status.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Scalingtype",
    "page": "Symbolic values",
    "title": "Mosek.Scalingtype",
    "category": "type",
    "text": "Scalingtype\n\nScaling type\n\nMSK_SCALING_AGGRESSIVE. A very aggressive scaling is performed.\nMSK_SCALING_FREE. The optimizer chooses the scaling heuristic.\nMSK_SCALING_MODERATE. A conservative scaling is performed.\nMSK_SCALING_NONE. No scaling is performed.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Rescode",
    "page": "Symbolic values",
    "title": "Mosek.Rescode",
    "category": "type",
    "text": "Rescode\n\nThe enumeration type containing all response codes.\n\nMSK_RES_ERR_AD_INVALID_CODELIST. The code list data was invalid.\nMSK_RES_ERR_API_ARRAY_TOO_SMALL. An input array was too short.\nMSK_RES_ERR_API_CB_CONNECT. Failed to connect a callback object.\nMSK_RES_ERR_API_FATAL_ERROR. An internal error occurred in the API. Please report this problem.\nMSK_RES_ERR_API_INTERNAL. An internal fatal error occurred in an interface function.:w\nMSK_RES_ERR_ARG_IS_TOO_LARGE. The value of a argument is too small.\nMSK_RES_ERR_ARG_IS_TOO_SMALL. The value of a argument is too small.\nMSK_RES_ERR_ARGUMENT_DIMENSION. A function argument is of incorrect dimension.\nMSK_RES_ERR_ARGUMENT_IS_TOO_LARGE. The value of a function argument is too large.\nMSK_RES_ERR_ARGUMENT_LENNEQ. Incorrect length of arguments.\nMSK_RES_ERR_ARGUMENT_PERM_ARRAY. An invalid permutation array is specified.\nMSK_RES_ERR_ARGUMENT_TYPE. Incorrect argument type.\nMSK_RES_ERR_BAR_VAR_DIM. The dimension of a symmetric matrix variable has to greater than 0.\nMSK_RES_ERR_BASIS. Invalid basis is specified.\nMSK_RES_ERR_BASIS_FACTOR. The factorization of the basis is invalid.\nMSK_RES_ERR_BASIS_SINGULAR. The basis is singular.\nMSK_RES_ERR_BLANK_NAME. An all blank name has been specified.\nMSK_RES_ERR_CANNOT_CLONE_NL. A task with a nonlinear function callback cannot be cloned.\nMSK_RES_ERR_CANNOT_HANDLE_NL. A function cannot handle a task with nonlinear function callbacks.\nMSK_RES_ERR_CBF_DUPLICATE_ACOORD. Duplicate index in ACOORD.\nMSK_RES_ERR_CBF_DUPLICATE_BCOORD. Duplicate index in BCOORD.\nMSK_RES_ERR_CBF_DUPLICATE_CON. Duplicate CON keyword.\nMSK_RES_ERR_CBF_DUPLICATE_INT. Duplicate INT keyword.\nMSK_RES_ERR_CBF_DUPLICATE_OBJ. Duplicate OBJ keyword.\nMSK_RES_ERR_CBF_DUPLICATE_OBJACOORD. Duplicate index in OBJCOORD.\nMSK_RES_ERR_CBF_DUPLICATE_PSDVAR. Duplicate PSDVAR keyword.\nMSK_RES_ERR_CBF_DUPLICATE_VAR. Duplicate VAR keyword.\nMSK_RES_ERR_CBF_INVALID_CON_TYPE. Invalid constraint type.\nMSK_RES_ERR_CBF_INVALID_DOMAIN_DIMENSION. Invalid domain dimension.\nMSK_RES_ERR_CBF_INVALID_INT_INDEX. Invalid INT index.\nMSK_RES_ERR_CBF_INVALID_PSDVAR_DIMENSION. Invalid PSDVAR dimmension.\nMSK_RES_ERR_CBF_INVALID_VAR_TYPE. Invalid variable type.\nMSK_RES_ERR_CBF_NO_VARIABLES. An invalid objective sense is specified.\nMSK_RES_ERR_CBF_NO_VERSION_SPECIFIED. No version specified.\nMSK_RES_ERR_CBF_OBJ_SENSE. An invalid objective sense is specified.\nMSK_RES_ERR_CBF_PARSE. An error occurred while parsing an CBF file.\nMSK_RES_ERR_CBF_SYNTAX. Invalid syntax.\nMSK_RES_ERR_CBF_TOO_FEW_CONSTRAINTS. Too few constraints defined.\nMSK_RES_ERR_CBF_TOO_FEW_INTS. Too ints specified.\nMSK_RES_ERR_CBF_TOO_FEW_PSDVAR. Too few variables defined.\nMSK_RES_ERR_CBF_TOO_FEW_VARIABLES. Too few variables defined.\nMSK_RES_ERR_CBF_TOO_MANY_CONSTRAINTS. Too many constraints specified.\nMSK_RES_ERR_CBF_TOO_MANY_INTS. Too ints specified.\nMSK_RES_ERR_CBF_TOO_MANY_VARIABLES. Too many variables specified.\nMSK_RES_ERR_CBF_UNSUPPORTED. Unsupported feature is present.\nMSK_RES_ERR_CON_Q_NOT_NSD. The quadratic constraint matrix is not NSD.\nMSK_RES_ERR_CON_Q_NOT_PSD. The quadratic constraint matrix is not PSD.\nMSK_RES_ERR_CONE_INDEX. An index of a non-existing cone has been specified.\nMSK_RES_ERR_CONE_OVERLAP. One or more of variables in the cone to be added is already member of another cone.\nMSK_RES_ERR_CONE_OVERLAP_APPEND. The cone to be appended has one variable which is already member of another cone.\nMSK_RES_ERR_CONE_REP_VAR. A variable is included multiple times in the cone.\nMSK_RES_ERR_CONE_SIZE. A cone with too few members is specified.\nMSK_RES_ERR_CONE_TYPE. Invalid cone type specified.\nMSK_RES_ERR_CONE_TYPE_STR. Invalid cone type specified.\nMSK_RES_ERR_DATA_FILE_EXT. The data file format cannot be determined from the file name.\nMSK_RES_ERR_DUP_NAME. Duplicate names specified.\nMSK_RES_ERR_DUPLICATE_AIJ. An element in the A matrix is specified twice.\nMSK_RES_ERR_DUPLICATE_BARVARIABLE_NAMES. Two barvariable names are identical.\nMSK_RES_ERR_DUPLICATE_CONE_NAMES. Two cone names are identical.\nMSK_RES_ERR_DUPLICATE_CONSTRAINT_NAMES. Two constraint names are identical.\nMSK_RES_ERR_DUPLICATE_VARIABLE_NAMES. Two variable names are identical.\nMSK_RES_ERR_END_OF_FILE. End of file reached.\nMSK_RES_ERR_FACTOR. An error occurred while factorizing a matrix.\nMSK_RES_ERR_FEASREPAIR_CANNOT_RELAX. An optimization problem cannot be relaxed.\nMSK_RES_ERR_FEASREPAIR_INCONSISTENT_BOUND. The upper bound is less than the lower bound for a variable or a constraint.\nMSK_RES_ERR_FEASREPAIR_SOLVING_RELAXED. The relaxed problem could not be solved to optimality.\nMSK_RES_ERR_FILE_LICENSE. Invalid license file.\nMSK_RES_ERR_FILE_OPEN. An error occurred while opening a file.\nMSK_RES_ERR_FILE_READ. An error occurred while reading file.\nMSK_RES_ERR_FILE_WRITE. An error occurred while writing to a file.\nMSK_RES_ERR_FINAL_SOLUTION. An error occurred during the solution finalization.\nMSK_RES_ERR_FIRST. Invalid first.\nMSK_RES_ERR_FIRSTI. Invalid firsti.\nMSK_RES_ERR_FIRSTJ. Invalid firstj.\nMSK_RES_ERR_FIXED_BOUND_VALUES. A fixed constraint/variable has been specified using the bound keys but the numerical bounds are different.\nMSK_RES_ERR_FLEXLM. The license manager reported an error.\nMSK_RES_ERR_GLOBAL_INV_CONIC_PROBLEM. The global optimizer can only be applied to problems without semidefinite variables.\nMSK_RES_ERR_HUGE_AIJ. A numerically huge value is specified for an element in A.\nMSK_RES_ERR_HUGE_C. A huge value in absolute size is specified for one an objective coefficient.\nMSK_RES_ERR_IDENTICAL_TASKS. Some tasks related to this function call were identical. Unique tasks were expected.\nMSK_RES_ERR_IN_ARGUMENT. A function argument is incorrect.\nMSK_RES_ERR_INDEX. An index is out of range.\nMSK_RES_ERR_INDEX_ARR_IS_TOO_LARGE. An index in an array argument is too large.\nMSK_RES_ERR_INDEX_ARR_IS_TOO_SMALL. An index in an array argument is too small.\nMSK_RES_ERR_INDEX_IS_TOO_LARGE. An index in an argument is too large.\nMSK_RES_ERR_INDEX_IS_TOO_SMALL. An index in an argument is too small.\nMSK_RES_ERR_INF_DOU_INDEX. A double information index is out of range for the specified type.\nMSK_RES_ERR_INF_DOU_NAME. A double information name is invalid.\nMSK_RES_ERR_INF_INT_INDEX. An integer information index is out of range for the specified type.\nMSK_RES_ERR_INF_INT_NAME. An integer information name is invalid.\nMSK_RES_ERR_INF_LINT_INDEX. A long integer information index is out of range for the specified type.\nMSK_RES_ERR_INF_LINT_NAME. A long integer information name is invalid.\nMSK_RES_ERR_INF_TYPE. The information type is invalid.\nMSK_RES_ERR_INFEAS_UNDEFINED. The requested value is not defined for this solution type.\nMSK_RES_ERR_INFINITE_BOUND. A numerically huge bound value is specified.\nMSK_RES_ERR_INT64_TO_INT32_CAST. An 32 bit integer could not cast to a 64 bit integer.\nMSK_RES_ERR_INTERNAL. An internal error occurred.\nMSK_RES_ERR_INTERNAL_TEST_FAILED. An internal unit test function failed.\nMSK_RES_ERR_INV_APTRE. aptre[j] is strictly smaller than aptrb[j] for some j.\nMSK_RES_ERR_INV_BK. Invalid bound key.\nMSK_RES_ERR_INV_BKC. Invalid bound key is specified for a constraint.\nMSK_RES_ERR_INV_BKX. An invalid bound key is specified for a variable.\nMSK_RES_ERR_INV_CONE_TYPE. Invalid cone type code encountered.\nMSK_RES_ERR_INV_CONE_TYPE_STR. Invalid cone type string encountered.\nMSK_RES_ERR_INV_MARKI. Invalid value in marki.\nMSK_RES_ERR_INV_MARKJ. Invalid value in markj.\nMSK_RES_ERR_INV_NAME_ITEM. An invalid name item code is used.\nMSK_RES_ERR_INV_NUMI. Invalid numi.\nMSK_RES_ERR_INV_NUMJ. Invalid numj.\nMSK_RES_ERR_INV_OPTIMIZER. An invalid optimizer has been chosen for the problem.\nMSK_RES_ERR_INV_PROBLEM. Invalid problem type.\nMSK_RES_ERR_INV_QCON_SUBI. Invalid value in qcsubi.\nMSK_RES_ERR_INV_QCON_SUBJ. Invalid value in qcsubj.\nMSK_RES_ERR_INV_QCON_SUBK. Invalid value in qcsubk.\nMSK_RES_ERR_INV_QCON_VAL. Invalid value in qcval.\nMSK_RES_ERR_INV_QOBJ_SUBI. Invalid value %d at qosubi.\nMSK_RES_ERR_INV_QOBJ_SUBJ. Invalid value in qosubj.\nMSK_RES_ERR_INV_QOBJ_VAL. Invalid value in qoval.\nMSK_RES_ERR_INV_SK. Invalid status key code encountered.\nMSK_RES_ERR_INV_SK_STR. Invalid status key string encountered.\nMSK_RES_ERR_INV_SKC. Invalid value in skc encountered.\nMSK_RES_ERR_INV_SKN. Invalid value in skn encountered.\nMSK_RES_ERR_INV_SKX. Invalid value in skx encountered.\nMSK_RES_ERR_INV_VAR_TYPE. An invalid variable type is specified for a variable.\nMSK_RES_ERR_INVALID_ACCMODE. An invalid access mode is specified.\nMSK_RES_ERR_INVALID_AIJ. a[i,j] contains an invalid floating point value, i.e. a NaN or an infinite value.\nMSK_RES_ERR_INVALID_AMPL_STUB. Invalid AMPL stub.\nMSK_RES_ERR_INVALID_BARVAR_NAME. An invalid symmetric matrix variable name is used.\nMSK_RES_ERR_INVALID_COMPRESSION. Invalid compression type.\nMSK_RES_ERR_INVALID_CON_NAME. An invalid constraint name is used.\nMSK_RES_ERR_INVALID_CONE_NAME. An invalid cone name is used.\nMSK_RES_ERR_INVALID_FILE_FORMAT_FOR_CONES. The file format does not support a problem with conic constraints.\nMSK_RES_ERR_INVALID_FILE_FORMAT_FOR_GENERAL_NL. The file format does not support a problem with general nonlinear terms.\nMSK_RES_ERR_INVALID_FILE_FORMAT_FOR_SYM_MAT. The file format does not support a problem with symmetric matrix variables.\nMSK_RES_ERR_INVALID_FILE_NAME. An invalid file name has been specified.\nMSK_RES_ERR_INVALID_FORMAT_TYPE. Invalid format type.\nMSK_RES_ERR_INVALID_IDX. A specified index is invalid.\nMSK_RES_ERR_INVALID_IOMODE. Invalid io mode.\nMSK_RES_ERR_INVALID_MAX_NUM. A specified index is invalid.\nMSK_RES_ERR_INVALID_NAME_IN_SOL_FILE. An invalid name occurred in a solution file.\nMSK_RES_ERR_INVALID_OBJ_NAME. An invalid objective name is specified.\nMSK_RES_ERR_INVALID_OBJECTIVE_SENSE. An invalid objective sense is specified.\nMSK_RES_ERR_INVALID_PROBLEM_TYPE. An invalid problem type.\nMSK_RES_ERR_INVALID_SOL_FILE_NAME. An invalid file name has been specified.\nMSK_RES_ERR_INVALID_STREAM. An invalid stream is referenced.\nMSK_RES_ERR_INVALID_SURPLUS. Invalid surplus.\nMSK_RES_ERR_INVALID_SYM_MAT_DIM. A sparse symmetric matrix of invalid dimension is specified.\nMSK_RES_ERR_INVALID_TASK. The task is invalid.\nMSK_RES_ERR_INVALID_UTF8. An invalid UTF8 string is encountered.\nMSK_RES_ERR_INVALID_VAR_NAME. An invalid variable name is used.\nMSK_RES_ERR_INVALID_WCHAR. An invalid wchar string is encountered.\nMSK_RES_ERR_INVALID_WHICHSOL. whichsol is invalid.\nMSK_RES_ERR_JSON_DATA. Inconsistent data in JSON Task file\nMSK_RES_ERR_JSON_FORMAT. Error in an JSON Task file\nMSK_RES_ERR_JSON_MISSING_DATA. Missing data section in JSON task file.\nMSK_RES_ERR_JSON_NUMBER_OVERFLOW. Invalid number entry - wrong type or value overflow.\nMSK_RES_ERR_JSON_STRING. Error in JSON string.\nMSK_RES_ERR_JSON_SYNTAX. Syntax error in an JSON data\nMSK_RES_ERR_LAST. Invalid last.\nMSK_RES_ERR_LASTI. Invalid lasti.\nMSK_RES_ERR_LASTJ. Invalid lastj.\nMSK_RES_ERR_LAU_ARG_K. Invalid argument k.\nMSK_RES_ERR_LAU_ARG_M. Invalid argument m.\nMSK_RES_ERR_LAU_ARG_N. Invalid argument n.\nMSK_RES_ERR_LAU_ARG_TRANS. Invalid argument trans.\nMSK_RES_ERR_LAU_ARG_TRANSA. Invalid argument transa.\nMSK_RES_ERR_LAU_ARG_TRANSB. Invalid argument transb.\nMSK_RES_ERR_LAU_ARG_UPLO. Invalid argument uplo.\nMSK_RES_ERR_LAU_INVALID_LOWER_TRIANGULAR_MATRIX. An invalid lower triangular matrix.\nMSK_RES_ERR_LAU_INVALID_SPARSE_SYMMETRIC_MATRIX. An invalid sparse symmetric matrix is specfified.\nMSK_RES_ERR_LAU_NOT_POSITIVE_DEFINITE. A matrix is not positive definite.\nMSK_RES_ERR_LAU_SINGULAR_MATRIX. A matrix is singular.\nMSK_RES_ERR_LAU_UNKNOWN. An unknown error.\nMSK_RES_ERR_LICENSE. Invalid license.\nMSK_RES_ERR_LICENSE_CANNOT_ALLOCATE. The license system cannot allocate the memory required.\nMSK_RES_ERR_LICENSE_CANNOT_CONNECT. MOSEK cannot connect to the license server.\nMSK_RES_ERR_LICENSE_EXPIRED. The license has expired.\nMSK_RES_ERR_LICENSE_FEATURE. A requested feature is not available in the license file(s).\nMSK_RES_ERR_LICENSE_INVALID_HOSTID. The host ID specified in the license file does not match the host ID of the computer.\nMSK_RES_ERR_LICENSE_MAX. Maximum number of licenses is reached.\nMSK_RES_ERR_LICENSE_MOSEKLM_DAEMON. The MOSEKLM license manager daemon is not up and running.\nMSK_RES_ERR_LICENSE_NO_SERVER_LINE. No SERVER lines in license file.\nMSK_RES_ERR_LICENSE_NO_SERVER_SUPPORT. The license server does not support the requested feature.\nMSK_RES_ERR_LICENSE_SERVER. The license server is not responding.\nMSK_RES_ERR_LICENSE_SERVER_VERSION. The version specified in the checkout request is greater than the highest version number the daemon supports.\nMSK_RES_ERR_LICENSE_VERSION. Invalid license version.\nMSK_RES_ERR_LINK_FILE_DLL. A file cannot be linked to a stream in the DLL version.\nMSK_RES_ERR_LIVING_TASKS. Not all tasks associated with the environment have been deleted.\nMSK_RES_ERR_LOWER_BOUND_IS_A_NAN. The lower bound specified is not a number (nan).\nMSK_RES_ERR_LP_DUP_SLACK_NAME. The name of the slack variable added to a ranged constraint already exists.\nMSK_RES_ERR_LP_EMPTY. The problem cannot be written to an LP formatted file.\nMSK_RES_ERR_LP_FILE_FORMAT. Syntax error in an LP file.\nMSK_RES_ERR_LP_FORMAT. Syntax error in an LP file.\nMSK_RES_ERR_LP_FREE_CONSTRAINT. Free constraints cannot be written in LP file format.\nMSK_RES_ERR_LP_INCOMPATIBLE. The problem cannot be written to an LP formatted file.\nMSK_RES_ERR_LP_INVALID_CON_NAME. A constraint name is invalid when used in an LP formatted file.\nMSK_RES_ERR_LP_INVALID_VAR_NAME. A variable name is invalid when used in an LP formatted file.\nMSK_RES_ERR_LP_WRITE_CONIC_PROBLEM. The problem contains cones that cannot be written to an LP formatted file.\nMSK_RES_ERR_LP_WRITE_GECO_PROBLEM. The problem contains general convex terms that cannot be written to an LP formatted file.\nMSK_RES_ERR_LU_MAX_NUM_TRIES. Could not compute the LU factors of the matrix within the maximum number of allowed tries.\nMSK_RES_ERR_MAX_LEN_IS_TOO_SMALL. An maximum length that is too small has been specified.\nMSK_RES_ERR_MAXNUMBARVAR. The maximum number of semidefinite variables limit is too small.\nMSK_RES_ERR_MAXNUMCON. Invalid maximum number of constraints specified.\nMSK_RES_ERR_MAXNUMCONE. The value specified for maxnumcone is too small.\nMSK_RES_ERR_MAXNUMQNZ. Too small maximum number of non-zeros for the Q matrices is specified.\nMSK_RES_ERR_MAXNUMVAR. The maximum number of variables limit is too small.\nMSK_RES_ERR_MIO_INTERNAL. A fatal error occurred in the mixed integer optimizer.  Please contact MOSEK support.\nMSK_RES_ERR_MIO_INVALID_NODE_OPTIMIZER. An invalid node optimizer was selected for the problem type.\nMSK_RES_ERR_MIO_INVALID_ROOT_OPTIMIZER. An invalid root optimizer was selected for the problem type.\nMSK_RES_ERR_MIO_NO_OPTIMIZER. No optimizer is available for the current class of integer optimization problems.\nMSK_RES_ERR_MISSING_LICENSE_FILE. A license cannot be located.\nMSK_RES_ERR_MIXED_CONIC_AND_NL. The problem contains both conic and nonlinear constraints.\nMSK_RES_ERR_MPS_CONE_OVERLAP. A variable is specified to be a member of several cones.\nMSK_RES_ERR_MPS_CONE_REPEAT. A variable is repeated within the CSECTION.\nMSK_RES_ERR_MPS_CONE_TYPE. Invalid cone type specified in a  CSECTION.\nMSK_RES_ERR_MPS_DUPLICATE_Q_ELEMENT. Duplicate elements is specified in a Q matrix.\nMSK_RES_ERR_MPS_FILE. An error occurred while reading an MPS file.\nMSK_RES_ERR_MPS_INV_BOUND_KEY. An invalid bound key occurred in an MPS file.\nMSK_RES_ERR_MPS_INV_CON_KEY. An invalid constraint key occurred in an MPS file.\nMSK_RES_ERR_MPS_INV_FIELD. Invalid field occurred while reading an MPS file.\nMSK_RES_ERR_MPS_INV_MARKER. An invalid marker has been specified in the MPS file.\nMSK_RES_ERR_MPS_INV_SEC_NAME. An invalid section name occurred in an MPS file.\nMSK_RES_ERR_MPS_INV_SEC_ORDER. The sections in an MPS file is not in the correct order.\nMSK_RES_ERR_MPS_INVALID_OBJ_NAME. An invalid objective name is specified.\nMSK_RES_ERR_MPS_INVALID_OBJSENSE. An invalid objective sense is specified.\nMSK_RES_ERR_MPS_MUL_CON_NAME. A constraint name is specified multiple times in the ROWS section in an MPS file.\nMSK_RES_ERR_MPS_MUL_CSEC. Multiple CSECTIONs are given the same name.\nMSK_RES_ERR_MPS_MUL_QOBJ. The Q term in the objective is specified multiple times.\nMSK_RES_ERR_MPS_MUL_QSEC. Multiple QSECTIONs are specified for a constraint.\nMSK_RES_ERR_MPS_NO_OBJECTIVE. No objective is defined in an MPS file.\nMSK_RES_ERR_MPS_NON_SYMMETRIC_Q. A non symmetric matrice has been speciefied.\nMSK_RES_ERR_MPS_NULL_CON_NAME. An empty constraint name is used in an MPS file.\nMSK_RES_ERR_MPS_NULL_VAR_NAME. An empty variable name is used in an MPS file.\nMSK_RES_ERR_MPS_SPLITTED_VAR. The non-zero elements in A corresponding to a variable in an MPS file must be specified consecutively.\nMSK_RES_ERR_MPS_TAB_IN_FIELD2. A tab char occurred in field 2.\nMSK_RES_ERR_MPS_TAB_IN_FIELD3. A tab char occurred in field 3.\nMSK_RES_ERR_MPS_TAB_IN_FIELD5. A tab char occurred in field 5.\nMSK_RES_ERR_MPS_UNDEF_CON_NAME. An undefined constraint name occurred in an MPS file.\nMSK_RES_ERR_MPS_UNDEF_VAR_NAME. An undefined variable name occurred in an MPS file.\nMSK_RES_ERR_MUL_A_ELEMENT. An element in A is defined multiple times.\nMSK_RES_ERR_NAME_IS_NULL. The name buffer is a null pointer.\nMSK_RES_ERR_NAME_MAX_LEN. A name is longer than the buffer that is supposed to hold it.\nMSK_RES_ERR_NAN_IN_BLC. blc contains an invalid floating point value, i.e. a NaN.\nMSK_RES_ERR_NAN_IN_BLX. blx contains an invalid floating point value, i.e. a NaN.\nMSK_RES_ERR_NAN_IN_BUC. buc contains an invalid floating point value, i.e. a NaN.\nMSK_RES_ERR_NAN_IN_BUX. bux contains an invalid floating point value, i.e. a NaN.\nMSK_RES_ERR_NAN_IN_C. c contains an invalid floating point value, i.e. a NaN.\nMSK_RES_ERR_NAN_IN_DOUBLE_DATA. An invalid floating value was used in some double data.\nMSK_RES_ERR_NEGATIVE_APPEND. Cannot append a negative number.\nMSK_RES_ERR_NEGATIVE_SURPLUS. Negative surplus.\nMSK_RES_ERR_NEWER_DLL. The dynamic link library is newer than the specified version.\nMSK_RES_ERR_NO_BARS_FOR_SOLUTION. There is no bars available for the solution specified.\nMSK_RES_ERR_NO_BARX_FOR_SOLUTION. There is no barx available for the solution specified.\nMSK_RES_ERR_NO_BASIS_SOL. No basic solution is defined.\nMSK_RES_ERR_NO_DUAL_FOR_ITG_SOL. No dual information is available for the integer solution.\nMSK_RES_ERR_NO_DUAL_INFEAS_CER. A certificate of dual infeasibility is not available.\nMSK_RES_ERR_NO_INIT_ENV. Environment is not initialized.\nMSK_RES_ERR_NO_OPTIMIZER_VAR_TYPE. No optimizer is available for this class of optimization problems.\nMSK_RES_ERR_NO_PRIMAL_INFEAS_CER. A certificate of primal infeasibility is not available.\nMSK_RES_ERR_NO_SNX_FOR_BAS_SOL. snx is not available for the basis solution.\nMSK_RES_ERR_NO_SOLUTION_IN_CALLBACK. The required solution is not available.\nMSK_RES_ERR_NON_UNIQUE_ARRAY. An array does not contain unique elements.\nMSK_RES_ERR_NONCONVEX. The optimization problem is nonconvex.\nMSK_RES_ERR_NONLINEAR_EQUALITY. The model contains a nonlinear equality.\nMSK_RES_ERR_NONLINEAR_FUNCTIONS_NOT_ALLOWED. An operation that is invalid for problems with nonlinear functions defined has been attempted.\nMSK_RES_ERR_NONLINEAR_RANGED. The problem contains a nonlinear constraint with inite lower and upper bound.\nMSK_RES_ERR_NR_ARGUMENTS. Incorrect number of function arguments.\nMSK_RES_ERR_NULL_ENV. env is a null pointer.\nMSK_RES_ERR_NULL_POINTER. An argument to a function is unexpectedly a null pointer.\nMSK_RES_ERR_NULL_TASK. task is a null pointer.\nMSK_RES_ERR_NUMCONLIM. Maximum number of constraints limit is exceeded.\nMSK_RES_ERR_NUMVARLIM. Maximum number of variables limit is exceeded.\nMSK_RES_ERR_OBJ_Q_NOT_NSD. The quadratic coefficient matrix in the objective is not NSD.\nMSK_RES_ERR_OBJ_Q_NOT_PSD. The quadratic coefficient matrix in the objective is not PSD.\nMSK_RES_ERR_OBJECTIVE_RANGE. Empty objective range.\nMSK_RES_ERR_OLDER_DLL. The dynamic link library is older than the specified version.\nMSK_RES_ERR_OPEN_DL. A dynamic link library could not be opened.\nMSK_RES_ERR_OPF_FORMAT. Syntax error in an OPF file\nMSK_RES_ERR_OPF_NEW_VARIABLE. Variable not previously defined.\nMSK_RES_ERR_OPF_PREMATURE_EOF. Premature end of file in an OPF file.\nMSK_RES_ERR_OPTIMIZER_LICENSE. The optimizer required is not licensed.\nMSK_RES_ERR_OVERFLOW. A computation produced an overflow.\nMSK_RES_ERR_PARAM_INDEX. Parameter index is out of range.\nMSK_RES_ERR_PARAM_IS_TOO_LARGE. A parameter value is too large.\nMSK_RES_ERR_PARAM_IS_TOO_SMALL. A parameter value is too small.\nMSK_RES_ERR_PARAM_NAME. A parameter name is not correct.\nMSK_RES_ERR_PARAM_NAME_DOU. A parameter name is not correct.\nMSK_RES_ERR_PARAM_NAME_INT. A parameter name is not correct.\nMSK_RES_ERR_PARAM_NAME_STR. A parameter name is not correct.\nMSK_RES_ERR_PARAM_TYPE. A parameter type is invalid.\nMSK_RES_ERR_PARAM_VALUE_STR. A parameter value string is incorrect.\nMSK_RES_ERR_PLATFORM_NOT_LICENSED. A requested license feature is not available for the required platform.\nMSK_RES_ERR_POSTSOLVE. An error occurred during the postsolve.\nMSK_RES_ERR_PRO_ITEM. An invalid problem item is used.\nMSK_RES_ERR_PROB_LICENSE. The software is not licensed to solve the problem.\nMSK_RES_ERR_QCON_SUBI_TOO_LARGE. Invalid value in qcsubi.\nMSK_RES_ERR_QCON_SUBI_TOO_SMALL. Invalid value in qcsubi.\nMSK_RES_ERR_QCON_UPPER_TRIANGLE. An element in the upper triangle of the quadratic term in a constraint.\nMSK_RES_ERR_QOBJ_UPPER_TRIANGLE. An element in the upper triangle of the quadratic term in the objective is specified.\nMSK_RES_ERR_READ_FORMAT. The specified format cannot be read.\nMSK_RES_ERR_READ_LP_MISSING_END_TAG. Syntax error in LP fil. Possibly missing End tag.\nMSK_RES_ERR_READ_LP_NONEXISTING_NAME. A variable never occurred in objective or constraints.\nMSK_RES_ERR_REMOVE_CONE_VARIABLE. A variable cannot be removed because it will make a cone invalid.\nMSK_RES_ERR_REPAIR_INVALID_PROBLEM. The feasibility repair does not support the specified problem type.\nMSK_RES_ERR_REPAIR_OPTIMIZATION_FAILED. Computation the optimal relaxation failed.\nMSK_RES_ERR_SEN_BOUND_INVALID_LO. Analysis of lower bound requested for an index, where no lower bound exists.\nMSK_RES_ERR_SEN_BOUND_INVALID_UP. Analysis of upper bound requested for an index, where no upper bound exists.\nMSK_RES_ERR_SEN_FORMAT. Syntax error in sensitivity analysis file.\nMSK_RES_ERR_SEN_INDEX_INVALID. Invalid range given in the sensitivity file.\nMSK_RES_ERR_SEN_INDEX_RANGE. Index out of range in the sensitivity analysis file.\nMSK_RES_ERR_SEN_INVALID_REGEXP. Syntax error in regexp or regexp longer than 1024.\nMSK_RES_ERR_SEN_NUMERICAL. Numerical difficulties encountered performing the sensitivity analysis.\nMSK_RES_ERR_SEN_SOLUTION_STATUS. No optimal solution found to the original problem given for sensitivity analysis.\nMSK_RES_ERR_SEN_UNDEF_NAME. An undefined name was encountered in the sensitivity analysis file.\nMSK_RES_ERR_SEN_UNHANDLED_PROBLEM_TYPE. Sensitivity analysis cannot be performed for the specified problem.\nMSK_RES_ERR_SERVER_CONNECT. Failed to connect to remote solver server.\nMSK_RES_ERR_SERVER_PROTOCOL. Unexpected message or data from solver server.\nMSK_RES_ERR_SERVER_STATUS. Server returned non-ok status code\nMSK_RES_ERR_SERVER_TOKEN. Invalid job ID\nMSK_RES_ERR_SIZE_LICENSE. The problem is bigger than the license.\nMSK_RES_ERR_SIZE_LICENSE_CON. The problem has too many constraints.\nMSK_RES_ERR_SIZE_LICENSE_INTVAR. The problem contains too many integer variables.\nMSK_RES_ERR_SIZE_LICENSE_NUMCORES. The computer contains more cpu cores than the license allows for.\nMSK_RES_ERR_SIZE_LICENSE_VAR. The problem has too many variables.\nMSK_RES_ERR_SOL_FILE_INVALID_NUMBER. An invalid number is specified in a solution file.\nMSK_RES_ERR_SOLITEM. The solution number  solemn does not exists.\nMSK_RES_ERR_SOLVER_PROBTYPE. Problem type does not match the chosen optimizer.\nMSK_RES_ERR_SPACE. Out of space.\nMSK_RES_ERR_SPACE_LEAKING. MOSEK is leaking memory.\nMSK_RES_ERR_SPACE_NO_INFO. No available information about the space usage.\nMSK_RES_ERR_SYM_MAT_DUPLICATE. A value in a symmetric matric as been specified more than once.\nMSK_RES_ERR_SYM_MAT_HUGE. A numerically huge value is specified for an element in A.\nMSK_RES_ERR_SYM_MAT_INVALID. A symmetric matrix contains an invalid floating point value, i.e. a NaN or an infinite value.\nMSK_RES_ERR_SYM_MAT_INVALID_COL_INDEX. A column index specified for sparse symmetric matrix is invalid.\nMSK_RES_ERR_SYM_MAT_INVALID_ROW_INDEX. A row index specified for sparse symmetric matrix is invalid.\nMSK_RES_ERR_SYM_MAT_INVALID_VALUE. The numerical value specified in a sparse symmetric matrix is not a value floating value.\nMSK_RES_ERR_SYM_MAT_NOT_LOWER_TRINGULAR. Only the lower triangular part of sparse symmetric matrix should be specified.\nMSK_RES_ERR_TASK_INCOMPATIBLE. The Task file is incompatible with this platform.\nMSK_RES_ERR_TASK_INVALID. The Task file is invalid.\nMSK_RES_ERR_TASK_WRITE. Failed to write the task file.\nMSK_RES_ERR_THREAD_COND_INIT. Could not initialize a condition.\nMSK_RES_ERR_THREAD_CREATE. Could not create a thread.\nMSK_RES_ERR_THREAD_MUTEX_INIT. Could not initialize a mutex.\nMSK_RES_ERR_THREAD_MUTEX_LOCK. Could not lock a mutex.\nMSK_RES_ERR_THREAD_MUTEX_UNLOCK. Could not unlock a mutex.\nMSK_RES_ERR_TOCONIC_CONSTR_NOT_CONIC. The constraint is not conic representable.\nMSK_RES_ERR_TOCONIC_CONSTR_Q_NOT_PSD. The matrix defining the quadratric part of constraint is not positive semidefinite.\nMSK_RES_ERR_TOCONIC_CONSTRAINT_FX. The quadratic constraint is an equality, thus not convex.\nMSK_RES_ERR_TOCONIC_CONSTRAINT_RA. The quadratic constraint has finite lower and upper bound, and therefore it is not convex.\nMSK_RES_ERR_TOCONIC_OBJECTIVE_NOT_PSD. The matrix defining the quadratric part of the objective function is not positive semidefinite.\nMSK_RES_ERR_TOO_SMALL_MAX_NUM_NZ. The maximum number of non-zeros specified is too small.\nMSK_RES_ERR_TOO_SMALL_MAXNUMANZ. Too small maximum number of non-zeros in A specified.\nMSK_RES_ERR_UNB_STEP_SIZE. A step-size in an optimizer was unexpectedly unbounded.\nMSK_RES_ERR_UNDEF_SOLUTION. The required solution is not defined.\nMSK_RES_ERR_UNDEFINED_OBJECTIVE_SENSE. The objective sense has not been specified before the optimization.\nMSK_RES_ERR_UNHANDLED_SOLUTION_STATUS. Unhandled solution status.\nMSK_RES_ERR_UNKNOWN. Unknown error.\nMSK_RES_ERR_UPPER_BOUND_IS_A_NAN. The upper bound specified is not a number (nan).\nMSK_RES_ERR_UPPER_TRIANGLE. An element in the upper triangle of a lower triangular matrix is specified.\nMSK_RES_ERR_USER_FUNC_RET. An user function reported an error.\nMSK_RES_ERR_USER_FUNC_RET_DATA. An user function returned invalid data.\nMSK_RES_ERR_USER_NLO_EVAL. The user-defined nonlinear function reported an error.\nMSK_RES_ERR_USER_NLO_EVAL_HESSUBI. The user-defined nonlinear function reported an Hessian an invalid subscript.\nMSK_RES_ERR_USER_NLO_EVAL_HESSUBJ. The user-defined nonlinear function reported an invalid subscript in the Hessian.\nMSK_RES_ERR_USER_NLO_FUNC. The user-defined nonlinear function reported an error.\nMSK_RES_ERR_WHICHITEM_NOT_ALLOWED. whichitem is unacceptable.\nMSK_RES_ERR_WHICHSOL. The solution defined by whichsol does not exists.\nMSK_RES_ERR_WRITE_LP_FORMAT. Problem cannot be written as an LP file.\nMSK_RES_ERR_WRITE_LP_NON_UNIQUE_NAME. An auto-generated name is not unique.\nMSK_RES_ERR_WRITE_MPS_INVALID_NAME. An invalid name is created while writing an MPS file.\nMSK_RES_ERR_WRITE_OPF_INVALID_VAR_NAME. Empty variable names cannot be written to OPF files.\nMSK_RES_ERR_WRITING_FILE. An error occurred while writing file\nMSK_RES_ERR_XML_INVALID_PROBLEM_TYPE. The problem type is not supported by the XML format.\nMSK_RES_ERR_Y_IS_UNDEFINED. The solution item y is undefined.\nMSK_RES_OK. No error occurred.\nMSK_RES_TRM_INTERNAL. The optimizer terminated due to some internal reason.\nMSK_RES_TRM_INTERNAL_STOP. The optimizer terminated for internal reasons.\nMSK_RES_TRM_MAX_ITERATIONS. The optimizer terminated at the maximum number of iterations.\nMSK_RES_TRM_MAX_NUM_SETBACKS. The optimizer terminated as the maximum number of set-backs was reached.\nMSK_RES_TRM_MAX_TIME. The optimizer terminated at the maximum amount of time.\nMSK_RES_TRM_MIO_NEAR_ABS_GAP. The mixed-integer optimizer terminated as the delayed near optimal absolute gap tolerance was satisfied.\nMSK_RES_TRM_MIO_NEAR_REL_GAP. The mixed-integer optimizer terminated as the delayed near optimal relative gap tolerance was satisfied.\nMSK_RES_TRM_MIO_NUM_BRANCHES. The mixed-integer optimizer terminated as the maximum number of branches was reached.\nMSK_RES_TRM_MIO_NUM_RELAXS. The mixed-integer optimizer terminated as the maximum number of relaxations was reached.\nMSK_RES_TRM_NUM_MAX_NUM_INT_SOLUTIONS. The mixed-integer optimizer terminated as the maximum number of feasible solutions was reached.\nMSK_RES_TRM_NUMERICAL_PROBLEM. The optimizer terminated due to a numerical problem.\nMSK_RES_TRM_OBJECTIVE_RANGE. The optimizer terminated with an objective value outside the objective range.\nMSK_RES_TRM_STALL. The optimizer is terminated due to slow progress.\nMSK_RES_TRM_USER_CALLBACK. The user-defined progress callback function terminated the optimization.\nMSK_RES_WRN_ANA_ALMOST_INT_BOUNDS. Warn against almost integral bounds.\nMSK_RES_WRN_ANA_C_ZERO. Warn against all objective coefficients being zero.\nMSK_RES_WRN_ANA_CLOSE_BOUNDS. Warn against close bounds.\nMSK_RES_WRN_ANA_EMPTY_COLS. Warn against empty columns.\nMSK_RES_WRN_ANA_LARGE_BOUNDS. Warn against very large bounds.\nMSK_RES_WRN_CONSTRUCT_INVALID_SOL_ITG. The initial value for one or more  of the integer variables is not feasible.\nMSK_RES_WRN_CONSTRUCT_NO_SOL_ITG. The construct solution requires an integer solution.\nMSK_RES_WRN_CONSTRUCT_SOLUTION_INFEAS. After fixing the integer variables at the suggested values then the problem is infeasible.\nMSK_RES_WRN_DROPPED_NZ_QOBJ. One or more non-zero elements were dropped in the Q matrix in the objective.\nMSK_RES_WRN_DUPLICATE_BARVARIABLE_NAMES. Two barvariable names are identical.\nMSK_RES_WRN_DUPLICATE_CONE_NAMES. Two cone names are identical.\nMSK_RES_WRN_DUPLICATE_CONSTRAINT_NAMES. Two constraint names are identical.\nMSK_RES_WRN_DUPLICATE_VARIABLE_NAMES. Two variable names are identical.\nMSK_RES_WRN_ELIMINATOR_SPACE. The eliminator is skipped at least once due to lack of space.\nMSK_RES_WRN_EMPTY_NAME. A variable or constraint name is empty. The output file may be invalid.\nMSK_RES_WRN_IGNORE_INTEGER. Ignored integer constraints.\nMSK_RES_WRN_INCOMPLETE_LINEAR_DEPENDENCY_CHECK. The linear dependency check(s) is incomplete.\nMSK_RES_WRN_LARGE_AIJ. A numerically large value is specified for an element in A.\nMSK_RES_WRN_LARGE_BOUND. A numerically large bound value is specified.\nMSK_RES_WRN_LARGE_CJ. A numerically large value is specified for one element in A.\nMSK_RES_WRN_LARGE_CON_FX. A equality constraint is fixed to numerically large value.\nMSK_RES_WRN_LARGE_LO_BOUND. A numerically large lower bound value is specified.\nMSK_RES_WRN_LARGE_UP_BOUND. A numerically large upper bound value is specified.\nMSK_RES_WRN_LICENSE_EXPIRE. The license expires.\nMSK_RES_WRN_LICENSE_FEATURE_EXPIRE. The license expires.\nMSK_RES_WRN_LICENSE_SERVER. The license server is not responding.\nMSK_RES_WRN_LP_DROP_VARIABLE. Ignore a variable because the variable was not previously defined.\nMSK_RES_WRN_LP_OLD_QUAD_FORMAT. Missing \'/2\' after quadratic expressions in bound or objective.\nMSK_RES_WRN_MIO_INFEASIBLE_FINAL. The final mixed-integer problem with all the integer variables fixed at their optimal values is infeasible.\nMSK_RES_WRN_MPS_SPLIT_BOU_VECTOR. A BOUNDS vector is split into several nonadjacent parts in an MPS file.\nMSK_RES_WRN_MPS_SPLIT_RAN_VECTOR. A RANGE vector is split into several nonadjacent parts in an MPS file.\nMSK_RES_WRN_MPS_SPLIT_RHS_VECTOR. An RHS vector is split into several nonadjacent parts.\nMSK_RES_WRN_NAME_MAX_LEN. A name is longer than the buffer that is supposed to hold it.\nMSK_RES_WRN_NO_DUALIZER. No automatic dualizer is available for the specified problem.\nMSK_RES_WRN_NO_GLOBAL_OPTIMIZER. No global optimizer is available.\nMSK_RES_WRN_NO_NONLINEAR_FUNCTION_WRITE. The problem contains a general nonlinear function that cannot be written to a disk file.\nMSK_RES_WRN_NZ_IN_UPR_TRI. Non-zero elements specified in the upper triangle of a matrix were ignored.\nMSK_RES_WRN_OPEN_PARAM_FILE. The parameter file could not be opened.\nMSK_RES_WRN_PARAM_IGNORED_CMIO. A parameter was ignored by the conic mixed integer optimizer.\nMSK_RES_WRN_PARAM_NAME_DOU. Parameter name not recognized.\nMSK_RES_WRN_PARAM_NAME_INT. Parameter name not recognized.\nMSK_RES_WRN_PARAM_NAME_STR. Parameter name not recognized.\nMSK_RES_WRN_PARAM_STR_VALUE. A parameter value is not correct.\nMSK_RES_WRN_PRESOLVE_OUTOFSPACE. The presolve is incomplete due to lack of space.\nMSK_RES_WRN_QUAD_CONES_WITH_ROOT_FIXED_AT_ZERO. For at least one quadratic cone the root is fixed at (nearly) zero.\nMSK_RES_WRN_RQUAD_CONES_WITH_ROOT_FIXED_AT_ZERO. For at least one rotated quadratic cone the root is fixed at (nearly) zero.\nMSK_RES_WRN_SOL_FILE_IGNORED_CON. One or more lines in the constraint section were ignored when reading a solution file.\nMSK_RES_WRN_SOL_FILE_IGNORED_VAR. One or more lines in the variable section were ignored when reading a solution file.\nMSK_RES_WRN_SOL_FILTER. Invalid solution filter is specified.\nMSK_RES_WRN_SPAR_MAX_LEN. A value for a string parameter is longer than the buffer that is supposed to hold it.\nMSK_RES_WRN_SYM_MAT_LARGE. A numerically large value is specified for an element in E.\nMSK_RES_WRN_TOO_FEW_BASIS_VARS. An incomplete basis is specified.\nMSK_RES_WRN_TOO_MANY_BASIS_VARS. A basis with too many variables is specified.\nMSK_RES_WRN_UNDEF_SOL_FILE_NAME. Undefined name occurred in a solution.\nMSK_RES_WRN_USING_GENERIC_NAMES. Generic names are used because a name is not valid.\nMSK_RES_WRN_WRITE_CHANGED_NAMES. Some names were changed because they were invalid for the output file format.\nMSK_RES_WRN_WRITE_DISCARDED_CFIX. The fixed objective term was discarded in the output file.\nMSK_RES_WRN_ZERO_AIJ. One or more zero elements are specified in A.\nMSK_RES_WRN_ZEROS_IN_SPARSE_COL. One or more (near) zero elements are specified in a sparse column of a matrix.\nMSK_RES_WRN_ZEROS_IN_SPARSE_ROW. One or more (near) zero elements are specified in a sparse row of a matrix.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Mionodeseltype",
    "page": "Symbolic values",
    "title": "Mosek.Mionodeseltype",
    "category": "type",
    "text": "Mionodeseltype\n\nMixed-integer node selection types\n\nMSK_MIO_NODE_SELECTION_BEST. The optimizer employs a best bound node selection strategy.\nMSK_MIO_NODE_SELECTION_FIRST. The optimizer employs a depth first node selection strategy.\nMSK_MIO_NODE_SELECTION_FREE. The optimizer decides the node selection strategy.\nMSK_MIO_NODE_SELECTION_HYBRID. The optimizer employs a hybrid strategy.\nMSK_MIO_NODE_SELECTION_PSEUDO. The optimizer employs selects the node based on a pseudo cost estimate.\nMSK_MIO_NODE_SELECTION_WORST. The optimizer employs a worst bound node selection strategy.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Transpose",
    "page": "Symbolic values",
    "title": "Mosek.Transpose",
    "category": "type",
    "text": "Transpose\n\nTransposed matrix.\n\nMSK_TRANSPOSE_NO. No transpose is applied.\nMSK_TRANSPOSE_YES. A transpose is applied.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Onoffkey",
    "page": "Symbolic values",
    "title": "Mosek.Onoffkey",
    "category": "type",
    "text": "Onoffkey\n\nOn/off\n\nMSK_OFF. Switch the option off.\nMSK_ON. Switch the option on.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Simdegen",
    "page": "Symbolic values",
    "title": "Mosek.Simdegen",
    "category": "type",
    "text": "Simdegen\n\nDegeneracy strategies\n\nMSK_SIM_DEGEN_AGGRESSIVE. The simplex optimizer should use an aggressive degeneration strategy.\nMSK_SIM_DEGEN_FREE. The simplex optimizer chooses the degeneration strategy.\nMSK_SIM_DEGEN_MINIMUM. The simplex optimizer should use a minimum degeneration strategy.\nMSK_SIM_DEGEN_MODERATE. The simplex optimizer should use a moderate degeneration strategy.\nMSK_SIM_DEGEN_NONE. The simplex optimizer should use no degeneration strategy.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Dataformat",
    "page": "Symbolic values",
    "title": "Mosek.Dataformat",
    "category": "type",
    "text": "Dataformat\n\nData format types\n\nMSK_DATA_FORMAT_CB. Conic benchmark format,\nMSK_DATA_FORMAT_EXTENSION. The file extension is used to determine the data file format.\nMSK_DATA_FORMAT_FREE_MPS. The data a free MPS formatted file.\nMSK_DATA_FORMAT_JSON_TASK. JSON based task format.\nMSK_DATA_FORMAT_LP. The data file is LP formatted.\nMSK_DATA_FORMAT_MPS. The data file is MPS formatted.\nMSK_DATA_FORMAT_OP. The data file is an optimization problem formatted file.\nMSK_DATA_FORMAT_TASK. Generic task dump file.\nMSK_DATA_FORMAT_XML. The data file is an XML formatted file.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Orderingtype",
    "page": "Symbolic values",
    "title": "Mosek.Orderingtype",
    "category": "type",
    "text": "Orderingtype\n\nOrdering strategies\n\nMSK_ORDER_METHOD_APPMINLOC. Approximate minimum local fill-in ordering is employed.\nMSK_ORDER_METHOD_EXPERIMENTAL. This option should not be used.\nMSK_ORDER_METHOD_FORCE_GRAPHPAR. Always use the graph partitioning based ordering even if it is worse than the approximate minimum local fill ordering.\nMSK_ORDER_METHOD_FREE. The ordering method is chosen automatically.\nMSK_ORDER_METHOD_NONE. No ordering is used.\nMSK_ORDER_METHOD_TRY_GRAPHPAR. Always try the graph partitioning based ordering.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Problemtype",
    "page": "Symbolic values",
    "title": "Mosek.Problemtype",
    "category": "type",
    "text": "Problemtype\n\nProblem types\n\nMSK_PROBTYPE_CONIC. A conic optimization.\nMSK_PROBTYPE_GECO. General convex optimization.\nMSK_PROBTYPE_LO. The problem is a linear optimization problem.\nMSK_PROBTYPE_MIXED. General nonlinear constraints and conic constraints. This combination can not be solved by MOSEK.\nMSK_PROBTYPE_QCQO. The problem is a quadratically constrained optimization problem.\nMSK_PROBTYPE_QO. The problem is a quadratic optimization problem.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Inftype",
    "page": "Symbolic values",
    "title": "Mosek.Inftype",
    "category": "type",
    "text": "Inftype\n\nInformation item types\n\nMSK_INF_DOU_TYPE. Is a double information type.\nMSK_INF_INT_TYPE. Is an integer.\nMSK_INF_LINT_TYPE. Is a long integer.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Simdupvec",
    "page": "Symbolic values",
    "title": "Mosek.Simdupvec",
    "category": "type",
    "text": "Simdupvec\n\nExploit duplicate columns.\n\nMSK_SIM_EXPLOIT_DUPVEC_FREE. The simplex optimizer can choose freely.\nMSK_SIM_EXPLOIT_DUPVEC_OFF. Disallow the simplex optimizer to exploit duplicated columns.\nMSK_SIM_EXPLOIT_DUPVEC_ON. Allow the simplex optimizer to exploit duplicated columns.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Compresstype",
    "page": "Symbolic values",
    "title": "Mosek.Compresstype",
    "category": "type",
    "text": "Compresstype\n\nCompression types\n\nMSK_COMPRESS_FREE. The type of compression used is chosen automatically.\nMSK_COMPRESS_GZIP. The type of compression used is gzip compatible.\nMSK_COMPRESS_NONE. No compression is used.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Nametype",
    "page": "Symbolic values",
    "title": "Mosek.Nametype",
    "category": "type",
    "text": "Nametype\n\nName types\n\nMSK_NAME_TYPE_GEN. General names. However, no duplicate and blank names are allowed.\nMSK_NAME_TYPE_LP. LP type names.\nMSK_NAME_TYPE_MPS. MPS type names.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Mpsformat",
    "page": "Symbolic values",
    "title": "Mosek.Mpsformat",
    "category": "type",
    "text": "Mpsformat\n\nMPS file format type\n\nMSK_MPS_FORMAT_CPLEX. The CPLEX compatible version of the MPS format is employed.\nMSK_MPS_FORMAT_FREE. It is assumed that the input file satisfies the free MPS format. This implies that spaces are not allowed in names. Otherwise the format is free.\nMSK_MPS_FORMAT_RELAXED. It is assumed that the input file satisfies a slightly relaxed version of the MPS format.\nMSK_MPS_FORMAT_STRICT. It is assumed that the input file satisfies the MPS format strictly.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Variabletype",
    "page": "Symbolic values",
    "title": "Mosek.Variabletype",
    "category": "type",
    "text": "Variabletype\n\nVariable types\n\nMSK_VAR_TYPE_CONT. Is a continuous variable.\nMSK_VAR_TYPE_INT. Is an integer variable.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Checkconvexitytype",
    "page": "Symbolic values",
    "title": "Mosek.Checkconvexitytype",
    "category": "type",
    "text": "Checkconvexitytype\n\nTypes of convexity checks.\n\nMSK_CHECK_CONVEXITY_FULL. Perform a full convexity check.\nMSK_CHECK_CONVEXITY_NONE. No convexity check.\nMSK_CHECK_CONVEXITY_SIMPLE. Perform simple and fast convexity check.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Language",
    "page": "Symbolic values",
    "title": "Mosek.Language",
    "category": "type",
    "text": "Language\n\nLanguage selection constants\n\nMSK_LANG_DAN. Danish language selection\nMSK_LANG_ENG. English language selection\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Startpointtype",
    "page": "Symbolic values",
    "title": "Mosek.Startpointtype",
    "category": "type",
    "text": "Startpointtype\n\nStarting point types\n\nMSK_STARTING_POINT_CONSTANT. The optimizer constructs a starting point by assigning a constant value to all primal and dual variables. This starting point is normally robust.\nMSK_STARTING_POINT_FREE. The starting point is chosen automatically.\nMSK_STARTING_POINT_GUESS. The optimizer guesses a starting point.\nMSK_STARTING_POINT_SATISFY_BOUNDS. The starting point satisfies all the simple bounds on nonlinear variables.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Soltype",
    "page": "Symbolic values",
    "title": "Mosek.Soltype",
    "category": "type",
    "text": "Soltype\n\nSolution types\n\nMSK_SOL_BAS. The basic solution.\nMSK_SOL_ITG. The integer solution.\nMSK_SOL_ITR. The interior solution.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Scalingmethod",
    "page": "Symbolic values",
    "title": "Mosek.Scalingmethod",
    "category": "type",
    "text": "Scalingmethod\n\nScaling method\n\nMSK_SCALING_METHOD_FREE. The optimizer chooses the scaling heuristic.\nMSK_SCALING_METHOD_POW2. Scales only with power of 2 leaving the mantissa untouched.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Value",
    "page": "Symbolic values",
    "title": "Mosek.Value",
    "category": "type",
    "text": "Value\n\nInteger values\n\nMSK_LICENSE_BUFFER_LENGTH. The length of a license key buffer.\nMSK_MAX_STR_LEN. Maximum string length allowed in MOSEK.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Simreform",
    "page": "Symbolic values",
    "title": "Mosek.Simreform",
    "category": "type",
    "text": "Simreform\n\nProblem reformulation.\n\nMSK_SIM_REFORMULATION_AGGRESSIVE. The simplex optimizer should use an aggressive reformulation strategy.\nMSK_SIM_REFORMULATION_FREE. The simplex optimizer can choose freely.\nMSK_SIM_REFORMULATION_OFF. Disallow the simplex optimizer to reformulate the problem.\nMSK_SIM_REFORMULATION_ON. Allow the simplex optimizer to reformulate the problem.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Iinfitem",
    "page": "Symbolic values",
    "title": "Mosek.Iinfitem",
    "category": "type",
    "text": "Iinfitem\n\nInteger information items.\n\nMSK_IINF_ANA_PRO_NUM_CON. Number of constraints in the problem.\nMSK_IINF_ANA_PRO_NUM_CON_EQ. Number of equality constraints.\nMSK_IINF_ANA_PRO_NUM_CON_FR. Number of unbounded constraints.\nMSK_IINF_ANA_PRO_NUM_CON_LO. Number of constraints with a lower bound and an infinite upper bound.\nMSK_IINF_ANA_PRO_NUM_CON_RA. Number of constraints with finite lower and upper bounds.\nMSK_IINF_ANA_PRO_NUM_CON_UP. Number of constraints with an upper bound and an infinite lower bound.\nMSK_IINF_ANA_PRO_NUM_VAR. Number of variables in the problem.\nMSK_IINF_ANA_PRO_NUM_VAR_BIN. Number of binary variables.\nMSK_IINF_ANA_PRO_NUM_VAR_CONT. Number of continuous variables.\nMSK_IINF_ANA_PRO_NUM_VAR_EQ. Number of fixed variables.\nMSK_IINF_ANA_PRO_NUM_VAR_FR. Number of unbounded constraints.\nMSK_IINF_ANA_PRO_NUM_VAR_INT. Number of general integer variables.\nMSK_IINF_ANA_PRO_NUM_VAR_LO. Number of variables with a lower bound and an infinite upper bound.\nMSK_IINF_ANA_PRO_NUM_VAR_RA. Number of variables with finite lower and upper bounds.\nMSK_IINF_ANA_PRO_NUM_VAR_UP. Number of variables with an upper bound and an infinite lower bound.\nMSK_IINF_INTPNT_FACTOR_DIM_DENSE. Dimension of the dense sub system in factorization.\nMSK_IINF_INTPNT_ITER. Number of interior-point iterations since invoking the interior-point optimizer.\nMSK_IINF_INTPNT_NUM_THREADS. Number of threads that the interior-point optimizer is using.\nMSK_IINF_INTPNT_SOLVE_DUAL. Non-zero if the interior-point optimizer is solving the dual problem.\nMSK_IINF_MIO_ABSGAP_SATISFIED. Non-zero if absolute gap is within tolerances.\nMSK_IINF_MIO_CLIQUE_TABLE_SIZE. Size of the clique table.\nMSK_IINF_MIO_CONSTRUCT_NUM_ROUNDINGS. Number of values in the integer solution that is rounded to an integer value.\nMSK_IINF_MIO_CONSTRUCT_SOLUTION. If this item is positive, then MOSEK successfully constructed an initial integer feasible solution.\nMSK_IINF_MIO_INITIAL_SOLUTION. Is non-zero if an initial integer solution is specified.\nMSK_IINF_MIO_NEAR_ABSGAP_SATISFIED. Non-zero if absolute gap is within relaxed tolerances.\nMSK_IINF_MIO_NEAR_RELGAP_SATISFIED. Non-zero if relative gap is within relaxed tolerances.\nMSK_IINF_MIO_NODE_DEPTH. Depth of the last node solved.\nMSK_IINF_MIO_NUM_ACTIVE_NODES. Number of active branch bound nodes.\nMSK_IINF_MIO_NUM_BRANCH. Number of branches performed during the optimization.\nMSK_IINF_MIO_NUM_CLIQUE_CUTS. Number of clique cuts.\nMSK_IINF_MIO_NUM_CMIR_CUTS. Number of Complemented Mixed Integer Rounding (CMIR) cuts.\nMSK_IINF_MIO_NUM_GOMORY_CUTS. Number of Gomory cuts.\nMSK_IINF_MIO_NUM_IMPLIED_BOUND_CUTS. Number of implied bound cuts.\nMSK_IINF_MIO_NUM_INT_SOLUTIONS. Number of integer feasible solutions that has been found.\nMSK_IINF_MIO_NUM_KNAPSACK_COVER_CUTS. Number of clique cuts.\nMSK_IINF_MIO_NUM_RELAX. Number of relaxations solved during the optimization.\nMSK_IINF_MIO_NUM_REPEATED_PRESOLVE. Number of times presolve was repeated at root.\nMSK_IINF_MIO_NUMCON. Number of constraints in the problem solved by the mixed-integer optimizer.\nMSK_IINF_MIO_NUMINT. Number of integer variables in the problem solved be the mixed-integer optimizer.\nMSK_IINF_MIO_NUMVAR. Number of variables in the problem solved by the mixed-integer optimizer.\nMSK_IINF_MIO_OBJ_BOUND_DEFINED. Non-zero if a valid objective bound has been found, otherwise zero.\nMSK_IINF_MIO_PRESOLVED_NUMBIN. Number of binary variables in the problem solved be the mixed-integer optimizer.\nMSK_IINF_MIO_PRESOLVED_NUMCON. Number of constraints in the presolved problem.\nMSK_IINF_MIO_PRESOLVED_NUMCONT. Number of continuous variables in the problem solved be the mixed-integer optimizer.\nMSK_IINF_MIO_PRESOLVED_NUMINT. Number of integer variables in the presolved problem.\nMSK_IINF_MIO_PRESOLVED_NUMVAR. Number of variables in the presolved problem.\nMSK_IINF_MIO_RELGAP_SATISFIED. Non-zero if relative gap is within tolerances.\nMSK_IINF_MIO_TOTAL_NUM_CUTS. Total number of cuts generated by the mixed-integer optimizer.\nMSK_IINF_MIO_USER_OBJ_CUT. If it is non-zero, then the objective cut is used.\nMSK_IINF_OPT_NUMCON. Number of constraints in the problem solved when the optimizer is called.\nMSK_IINF_OPT_NUMVAR. Number of variables in the problem solved when the optimizer is called\nMSK_IINF_OPTIMIZE_RESPONSE. The response code returned by optimize.\nMSK_IINF_RD_NUMBARVAR. Number of variables read.\nMSK_IINF_RD_NUMCON. Number of constraints read.\nMSK_IINF_RD_NUMCONE. Number of conic constraints read.\nMSK_IINF_RD_NUMINTVAR. Number of integer-constrained variables read.\nMSK_IINF_RD_NUMQ. Number of nonempty Q matrices read.\nMSK_IINF_RD_NUMVAR. Number of variables read.\nMSK_IINF_RD_PROTYPE. Problem type.\nMSK_IINF_SIM_DUAL_DEG_ITER. The number of dual degenerate iterations.\nMSK_IINF_SIM_DUAL_HOTSTART. If 1 then the dual simplex algorithm is solving from an advanced basis.\nMSK_IINF_SIM_DUAL_HOTSTART_LU. If 1 then a valid basis factorization of full rank was located and used by the dual simplex algorithm.\nMSK_IINF_SIM_DUAL_INF_ITER. The number of iterations taken with dual infeasibility.\nMSK_IINF_SIM_DUAL_ITER. Number of dual simplex iterations during the last optimization.\nMSK_IINF_SIM_NUMCON. Number of constraints in the problem solved by the simplex optimizer.\nMSK_IINF_SIM_NUMVAR. Number of variables in the problem solved by the simplex optimizer.\nMSK_IINF_SIM_PRIMAL_DEG_ITER. The number of primal degenerate iterations.\nMSK_IINF_SIM_PRIMAL_HOTSTART. If 1 then the primal simplex algorithm is solving from an advanced basis.\nMSK_IINF_SIM_PRIMAL_HOTSTART_LU. If 1 then a valid basis factorization of full rank was located and used by the primal simplex algorithm.\nMSK_IINF_SIM_PRIMAL_INF_ITER. The number of iterations taken with primal infeasibility.\nMSK_IINF_SIM_PRIMAL_ITER. Number of primal simplex iterations during the last optimization.\nMSK_IINF_SIM_SOLVE_DUAL. Is non-zero if dual problem is solved.\nMSK_IINF_SOL_BAS_PROSTA. Problem status of the basic solution. Updated after each optimization.\nMSK_IINF_SOL_BAS_SOLSTA. Solution status of the basic solution. Updated after each optimization.\nMSK_IINF_SOL_ITG_PROSTA. Problem status of the integer solution. Updated after each optimization.\nMSK_IINF_SOL_ITG_SOLSTA. Solution status of the integer solution. Updated after each optimization.\nMSK_IINF_SOL_ITR_PROSTA. Problem status of the interior-point solution. Updated after each optimization.\nMSK_IINF_SOL_ITR_SOLSTA. Solution status of the interior-point solution. Updated after each optimization.\nMSK_IINF_STO_NUM_A_REALLOC. Number of times the storage for storing the linear coefficient matrix has been changed.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Stakey",
    "page": "Symbolic values",
    "title": "Mosek.Stakey",
    "category": "type",
    "text": "Stakey\n\nStatus keys\n\nMSK_SK_BAS. The constraint or variable is in the basis.\nMSK_SK_FIX. The constraint or variable is fixed.\nMSK_SK_INF. The constraint or variable is infeasible in the bounds.\nMSK_SK_LOW. The constraint or variable is at its lower bound.\nMSK_SK_SUPBAS. The constraint or variable is super basic.\nMSK_SK_UNK. The status for the constraint or variable is unknown.\nMSK_SK_UPR. The constraint or variable is at its upper bound.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Optimizertype",
    "page": "Symbolic values",
    "title": "Mosek.Optimizertype",
    "category": "type",
    "text": "Optimizertype\n\nOptimizer types\n\nMSK_OPTIMIZER_CONIC. The optimizer for problems having conic constraints.\nMSK_OPTIMIZER_DUAL_SIMPLEX. The dual simplex optimizer is used.\nMSK_OPTIMIZER_FREE. The optimizer is chosen automatically.\nMSK_OPTIMIZER_FREE_SIMPLEX. One of the simplex optimizers is used.\nMSK_OPTIMIZER_INTPNT. The interior-point optimizer is used.\nMSK_OPTIMIZER_MIXED_INT. The mixed-integer optimizer.\nMSK_OPTIMIZER_PRIMAL_SIMPLEX. The primal simplex optimizer is used.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Presolvemode",
    "page": "Symbolic values",
    "title": "Mosek.Presolvemode",
    "category": "type",
    "text": "Presolvemode\n\nPresolve method.\n\nMSK_PRESOLVE_MODE_FREE. It is decided automatically whether to presolve before the problem is optimized.\nMSK_PRESOLVE_MODE_OFF. The problem is not presolved before it is optimized.\nMSK_PRESOLVE_MODE_ON. The problem is presolved before it is optimized.\n\n\n\n\n\n"
},

{
    "location": "enums/#Mosek.Miocontsoltype",
    "page": "Symbolic values",
    "title": "Mosek.Miocontsoltype",
    "category": "type",
    "text": "Miocontsoltype\n\nContinuous mixed-integer solution type\n\nMSK_MIO_CONT_SOL_ITG. A feasible primal solution.\nMSK_MIO_CONT_SOL_ITG_REL. A feasible primal solution or a root node solution if the problem is infeasible.\nMSK_MIO_CONT_SOL_NONE. No interior-point or basic solution.\nMSK_MIO_CONT_SOL_ROOT. Solutions to the root node problem.\n\n\n\n\n\n"
},

{
    "location": "enums/#Symbolic-constants-1",
    "page": "Symbolic values",
    "title": "Symbolic constants",
    "category": "section",
    "text": "Solveform\nProblemitem\nAccmode\nSensitivitytype\nUplo\nIntpnthotstart\nSolsta\nObjsense\nSolitem\nBoundkey\nBasindtype\nBranchdir\nLiinfitem\nSimhotstart\nCallbackcode\nSymmattype\nFeature\nMark\nConetype\nStreamtype\nIomode\nSimseltype\nXmlwriteroutputtype\nMiomode\nDinfitem\nParametertype\nRescodetype\nProsta\nScalingtype\nRescode\nMionodeseltype\nTranspose\nOnoffkey\nSimdegen\nDataformat\nOrderingtype\nProblemtype\nInftype\nSimdupvec\nCompresstype\nNametype\nMpsformat\nVariabletype\nCheckconvexitytype\nLanguage\nStartpointtype\nSoltype\nScalingmethod\nValue\nSimreform\nIinfitem\nStakey\nOptimizertype\nPresolvemode\nMiocontsoltype"
},

]}
