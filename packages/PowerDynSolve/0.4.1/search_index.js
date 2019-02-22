var documenterSearchIndex = {"docs": [

{
    "location": "#PowerDynBase.no_internal_differentials",
    "page": "-",
    "title": "PowerDynBase.no_internal_differentials",
    "category": "constant",
    "text": "A variable to be used when no internal differentials are present for a node dynamics type.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.no_internal_masses",
    "page": "-",
    "title": "PowerDynBase.no_internal_masses",
    "category": "constant",
    "text": "A variable to be used when no internal masses are present for a node dynamics type.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractNodeParameters",
    "page": "-",
    "title": "PowerDynBase.AbstractNodeParameters",
    "category": "type",
    "text": "Abstract super type for all node parameter types.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.FourthEq",
    "page": "-",
    "title": "PowerDynBase.FourthEq",
    "category": "type",
    "text": "FourthEq(H, P, D, Ω, E_f, T_d_dash ,T_q_dash ,X_q_dash ,X_d_dash,X_d, X_q)\n\nA node type that applies the 4th-order synchronous machine model with frequency/angle and voltage dynamics.\n\nAdditionally to u, it has the internal dynamic variables\n\nomega representing the frequency of the rotator relative to the grid frequency Omega, i.e. the real frequency omega_r of the rotator is given as omega_r = Omega + omega and\ntheta representing the relative angle of the rotor with respect to the voltage angle phi.\n\nKeyword Arguments\n\nH: inertia\nP: active (real) power output\nD: damping coefficient\nΩ: rated frequency of the power grid, often 50Hz\nT_d_dash: time constant of d-axis\nT_q_dash: time constant of q-axis\nX_d_dash: transient reactance of d-axis\nX_q_dash: transient reactance of q-axis\nX_d: reactance of d-axis\nX_d: reactance of q-axis\n\nMathematical Representation\n\nUsing FourthEq for node a applies the equations\n\n    u = -je_c e^jtheta = -j(e_d + je_q)e^jtheta\n    e_c= e_d + je_q = jue^-jtheta\n    i  = -jie^jtheta = -j(i_d+ j i_q )e^jtheta = Y^L cdot u \n    i_c= i_d + ji_q = jie^-jtheta\n    p = Re (i^* u)\n\nThe fourth-order equations read (according to Sauer, p. 140, eqs. (6110)-(6114)) and p. 35 eqs(3.90)-(3.91)\n\n    fracdthetadt = omega \n     fracdomegadt = P-Domega - p -(x_q-x_d)i_d i_q\n    fracd e_qdt = frac1T_d (- e_q - (x_d - x_d) i_d+ e_f) \n    fracd e_ddt = frac1T_q (- e_d + (x_q - x_q) i_q)  \n\nWith the PowerDynamics.jl \\time{naming conventions} of i and u they read as\n\n   dot u = fracddt(-j e_c e^jtheta)=-j(dot e_d + jdot e_q)e^jtheta + ujomega\n\n\n\n"
},

{
    "location": "#PowerDynBase.GridDynamics",
    "page": "-",
    "title": "PowerDynBase.GridDynamics",
    "category": "type",
    "text": "Abstract super type for all abstract grid dynamics types.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.GridDynamics-Tuple{AbstractArray{#s20487,1} where #s20487<:AbstractNodeParameters,Vararg{Any,N} where N}",
    "page": "-",
    "title": "PowerDynBase.GridDynamics",
    "category": "method",
    "text": "function GridDynamics(nodes::AbstractVector{<:AbstractNodeParameters}, args...; kwargs...)\n\nConvert all subtypes of PowerDynBase.AbstractNodeParameters to the corresponding subtypes of PowerDynBase.AbstractNodeDynamics and then call PowerDynBase.GridDynamics again.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.GridDynamics-Tuple{AbstractArray{#s20487,N} where N where #s20487<:PowerDynBase.AbstractNodeDynamics,AbstractArray{T,2} where T}",
    "page": "-",
    "title": "PowerDynBase.GridDynamics",
    "category": "method",
    "text": "function GridDynamics(\n    nodes::AbstractArray{<:AbstractNodeDynamics},\n    LY::AbstractMatrix;\n    skip_LY_check=false,\n    kwargs...)\n\nBring all sutypes of PowerDynBase.AbstractNodeDynamics on one level and then create for each subtype of PowerDynBase.AbstractNodeDynamics the corresponding subtype of PowerDynBase.GridDynamics by using PowerDynBase._GridDynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.GridDynamicsError",
    "page": "-",
    "title": "PowerDynBase.GridDynamicsError",
    "category": "type",
    "text": "Error to be thrown if something goes wrong during the grid dynamics construction.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.NetworkRHS",
    "page": "-",
    "title": "PowerDynBase.NetworkRHS",
    "category": "type",
    "text": "struct NetworkRHS{T, M} <: AbstractNetworkFunction{T, M}\n    nodes::AbstractVector{T}\n    LY::M\n    numnodes\n    systemsize\n    intrange # unitrange telling me where I find the internal dynamic variables\n    nodalintranges # unit ranges to find the internal variables for each node in the full length of internal variables\nend\n\nRepresenting the full dynamics of the power grid.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.NetworkRHS-Tuple{Any}",
    "page": "-",
    "title": "PowerDynBase.NetworkRHS",
    "category": "method",
    "text": "NetworkRHS(x)\n\nReturn the struct of type PowerDynBase.NetworkRHS for x.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.NetworkRHS-Tuple{PowerDynBase.AbstractDEVariable,Any}",
    "page": "-",
    "title": "PowerDynBase.NetworkRHS",
    "category": "method",
    "text": "(rhs::NetworkRHS)(x::AbstractDEVariable, t)\n\nEvalate the network right-hand-side function.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.NetworkRHS-Union{Tuple{M}, Tuple{T}, Tuple{AbstractArray{T,1},M}} where M<:(AbstractArray{T,2} where T) where T<:PowerDynBase.AbstractNodeDynamics",
    "page": "-",
    "title": "PowerDynBase.NetworkRHS",
    "category": "method",
    "text": "NetworkRHS(nodes::AbstractVector{T}, LY::M) where {T<:AbstractNodeDynamics, M<:AbstractMatrix}\n\nCreate an PowerDynBase.NetworkRHS object from a node list and the nodal admittance matrix.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.NodeDynamicsError",
    "page": "-",
    "title": "PowerDynBase.NodeDynamicsError",
    "category": "type",
    "text": "Error to be thrown if something goes wrong during the node dynamics construction.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.OrdinaryNodeDynamics",
    "page": "-",
    "title": "PowerDynBase.OrdinaryNodeDynamics",
    "category": "type",
    "text": "OrdinaryNodeDynamics(;rhs, n_int)\n\nThe type representing the dynamics of a node that is described via ODEs.\n\nEach node a has the complex voltage u and n real internal variables y_1 dots y_n, so it generally describes a system of ordinary differential equation as\n\nfracdu_adt = f_u(u_a i_c_a y_1 dots y_n) \nfracdy_akdt = f_k(u_a i_c_a y_1 dots y_n)quad forall k = 1 dots n\n\nf is represented by rhs field of OrdinaryNodeDynamics.\n\nthe general signature of rhs is\n\nrhs(dint_dt::AbstractVector,\n    u::Complex,\n    i::Complex,\n    int::AbstractVector,\n    t,\n    )::Complex\n\nInput\nu is the complex voltage u\ni is the complex current i\nint is the array of internal variables y_1 dots y_n\nt is the time t\nOutput\nthe (complex) return value describes fracdudt\nrhs writes values in dint_dt describing the left-hand side fracdy_1dt dots fracdy_ndt\n\n\n\n"
},

{
    "location": "#PowerDynBase.OrdinaryNodeDynamicsWithMass",
    "page": "-",
    "title": "PowerDynBase.OrdinaryNodeDynamicsWithMass",
    "category": "type",
    "text": "OrdinaryNodeDynamicsWithMass(;rhs, n_int, m_u, m_int)\n\nThe type representing the dynamics of a node that is described via ODEs.\n\nEach node a has the complex voltage u and n (= n_int) real internal variables y_1 dots y_n, so it generally describes a system of ordinary differential equation with a voltage mass m_u and internal masses m^int_1 dots m^int_n as\n\nm_ufracdu_adt = f_u(u_a i_c_a y_1 dots y_n) \nm^int_kfracdy_akdt = f_k(u_a i_c_a y_1 dots y_n)quad forall k = 1 dots n\n\nAs we assume that all masses are binary (either 1, or 0), that means, one can implement semi-explicit differential algebraic equations with this node dynamics type. f is represented by rhs field of OrdinaryNodeDynamics.\n\nthe general signature of rhs is\n\nrhs(dint_dt::AbstractVector,\n    u::Complex,\n    i::Complex,\n    int::AbstractVector,\n    t,\n    )::Complex\n\nInput\nu is the complex voltage u\ni is the complex current i\nint is the array of internal variables y_1 dots y_n\nt is the time t\nOutput\nthe (complex) return value describes fracdudt\nrhs writes values in dint_dt describing the left-hand side fracdy_1dt dots fracdy_ndt\n\nThe binary masses are:\n\nm_u is the boolean value for m_u\nm_int is the array of boolean values for m^int_1 dots m^int_n\n\n\n\n"
},

{
    "location": "#PowerDynBase.PQAlgebraic",
    "page": "-",
    "title": "PowerDynBase.PQAlgebraic",
    "category": "type",
    "text": "PQAlgebraic(;S)\n\nA node type that locally fixes the active (P) and reactive power (Q) output of the node.\n\nKeyword Arguments\n\nS = P + Q*im: the complex power output\n\nMathematical Representation\n\nUsing PQAlgebraic for node a applies the equation\n\n0 = S_a - u_a cdot i_a^*\n\n\n\n"
},

{
    "location": "#PowerDynBase.PVAlgebraic",
    "page": "-",
    "title": "PowerDynBase.PVAlgebraic",
    "category": "type",
    "text": "PVAlgebraic(;P,V)\n\nA node type that locally fixes the active power (P) and the voltage magnitude (V) of the node.\n\nKeyword Arguments\n\nP: the active (real) power output\nV: voltage magnitude\n\nMathematical Representation\n\nUsing PVAlgebraic for node a applies the equations\n\n0 = P_a - Releft(u_a cdot i_a^*right) \n0 = V_a - leftu_aright\n\n\n\n"
},

{
    "location": "#PowerDynBase.SlackAlgebraic",
    "page": "-",
    "title": "PowerDynBase.SlackAlgebraic",
    "category": "type",
    "text": "SlackAlgebraic(;U)\n\nA node type that locally fixes the complex voltage (U) of the node.\n\nAs the complex voltage can be represented as U=Ve^iphi, this is equivlant to fixing the voltage magnitude V and the angle phi.\n\nKeyword Arguments\n\nU: the complex voltage\n\nMathematical Representation\n\nUsing SlackAlgebraic for node a applies the equation\n\n0 = U_a - u_a\n\n\n\n"
},

{
    "location": "#PowerDynBase.State",
    "page": "-",
    "title": "PowerDynBase.State",
    "category": "type",
    "text": "\n    State(base; t=nothing)\n    State(grid, vec; t=nothing)\n\n\nEncode the information on the value of a state vector at a particular time point.\n\nKeyword Arguments\n\nbase is an instance of a BaseState, essentially it contains the state   vector and the complete rhs of the system. Instead of base, you can also   directly use a GridDynamics instance grid and a properly sized   state vector vec to instantiate a State.\nt is a time point associated to the base. It defaults to nothing.\n\nIndexing\n\nConcerning the indexing, a State object s basically behaves like a an array. There are plenty of convenient ways to access its contents at a node j by using a particular symbol:\n\ns[j, :u]: complex voltage\ns[j, :v]: voltage magnitude\ns[j, :φ]: voltage angle\ns[j, :i]: complex nodal current\ns[j, :iabs]: nodal current magnitude\ns[j, :δ]: nodal current angle\ns[j, :s]: apparent power\ns[j, :p]: real power\ns[j, :q]: reactive power\n\nCurrently, setting the state value is only implemented for u and v, the other quantities are derived automatically.\n\nWhen a node j has internal variables, you can access (and set) the k-th internal variable by calling\n\ns[j, :int, k].\n\nThe internal variables can be also directly accessed with symbols, i.e.\n\ns[j, :ω]\n\nreturns the frequency ω at node j. To find out the proper symbol, the easiest way is to look into the docs of the corresponding AbstractNodeParameters subtype, check the output of internalsymbolsof or simply look at the output of println:\n\njulia> internalsymbolsof(SwingEq(H=2, P=3, D=4, Ω=5))\n1-element Array{Symbol,1}:\n :ω\n\njulia> println(SwingEq(H=2, P=3, D=4, Ω=5))\nSwingEq[:ω](H=2, P=3, D=4, Ω=5)\n\n\n\n"
},

{
    "location": "#PowerDynBase.StateError",
    "page": "-",
    "title": "PowerDynBase.StateError",
    "category": "type",
    "text": "Error to be thrown if something goes wrong when creating or modifying states.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.SwingEq",
    "page": "-",
    "title": "PowerDynBase.SwingEq",
    "category": "type",
    "text": "SwingEq(;H, P, D, Ω)\n\nA node type that applies the swing equation to the frequency/angle dynamics and keeps the voltage magnitude as is.\n\nAdditionally to u, it has the internal dynamic variable omega representing the frequency of the rotator relative to the grid frequency Omega, i.e. the real frequency omega_r of the rotator is given as omega_r = Omega + omega.\n\nKeyword Arguments\n\nH: inertia\nP: active (real) power output\nD: damping coefficient\nΩ: rated frequency of the power grid, often 50Hz\n\nMathematical Representation\n\nUsing SwingEq for node a applies the equations\n\nfracdu_adt = i u_a  omega_a \nfracH2piOmegafracdomega_adt = P_a - D_aomega_a - Releft(u_a cdot i_a^*right)\n\nwhich is equivalent to\n\nfracdphi_adt = omega \nv = v(t=0) = textconst \nfracH2piOmegafracdomega_adt = P_a - D_aomega_a - Releft(u_a cdot i_a^*right)\n\n\n\n"
},

{
    "location": "#PowerDynBase.SwingEqLVS",
    "page": "-",
    "title": "PowerDynBase.SwingEqLVS",
    "category": "type",
    "text": "SwingEqLVS(;H, P, D, Ω, Γ, V)\n\nA node type that applies the swing equation to the frequency/angle dynamics and has a linear voltage stability (LVS) term.\n\nAdditionally to u, it has the internal dynamic variable omega representing the frequency of the rotator relative to the grid frequency Omega, i.e. the real frequency omega_r of the rotator is given as omega_r = Omega + omega.\n\nKeyword Arguments\n\nH: inertia\nP: active (real) power output\nD: damping coefficient\nΩ: rated frequency of the power grid, often 50Hz\nΓ: voltage stability coefficient\nV: set voltage, usually 1\n\nMathematical Representation\n\nUsing SwingEq for node a applies the equations\n\nfracdu_adt = i u_a omega - fracuu Γ_a  (v_a - V_a) \nfracH2piOmegafracdomega_adt = P_a - D_aomega_a - Releft(u_a cdot i_a^*right)\n\nwhich is equivalent to\n\nfracdphi_adt = omega_a \nfracdv_adt = - Γ_a  (v_a - V_a) \nfracH2piOmegafracdomega_adt = P_a - D_aomega_a - Releft(u_a cdot i_a^*right)\n\n\n\n"
},

{
    "location": "#PowerDynBase.VSIMinimal",
    "page": "-",
    "title": "PowerDynBase.VSIMinimal",
    "category": "type",
    "text": "VSIMinimal(;τ_P,τ_Q,K_P,K_Q,E_r,P,Q)\n\nA node type that applies the frequency and voltage droop control to control the frequency and voltage dynamics.\n\nAdditionally to u, it has the internal dynamic variable omega representing the frequency of the rotator relative to the grid frequency Omega, i.e. the real frequency omega_r of the rotator is given as omega_r = Omega + omega.\n\nKeyword Arguments\n\nτ_p: time constant active power measurement\nτ_Q: time constant reactive power measurement\nK_P: droop constant frequency droop\nK_Q: droop constant voltage droop\nV_r: reference/ desired voltage\nP: active (real) power infeed\nQ: reactive (imag) power infeed\n\nMathematical Representation\n\nUsing VSIMinimal for node a applies the equations\n\ndotphi_a=omega_a\n dotomega_a=frac1tau_Pa-omega_a-K_Pa (Releft(u_a cdot i_a^*right)-P_refa)\ntau_Qdotv_a=-v_a+V_ref-K_Qa (Imleft(u_a cdot i_a^*right)-Q_refa)\n dotu_a=dotv_ae^jphi+jomega_a u_a\n\n```\n\n\n\n"
},

{
    "location": "#PowerDynBase.VSIVoltagePT1",
    "page": "-",
    "title": "PowerDynBase.VSIVoltagePT1",
    "category": "type",
    "text": "VSIVoltagePT1(;τ_v,τ_P,τ_Q,K_P,K_Q,E_r,P,Q)\n\nA node type that applies the frequency and voltage droop control to control the frequency and voltage dynamics.\n\nAdditionally to u, it has the internal dynamic variable omega representing the frequency of the rotator relative to the grid frequency Omega, i.e. the real frequency omega_r of the rotator is given as omega_r = Omega + omega.\n\nKeyword Arguments\n\nτ_v: time constant voltage control delay\nτ_p: time constant active power measurement\nτ_Q: time constant reactive power measurement\nK_P: droop constant frequency droop\nK_Q: droop constant voltage droop\nV_r: reference/ desired voltage\nP: active (real) power infeed\nQ: reactive (imag) power infeed\n\nMathematical Representation\n\nUsing VSIVoltagePT1 for node a applies the equations\n\ndotphi_a=omega_a\n dotomega_a=frac1tau_Pa-omega_a-K_Pa (Releft(u_a cdot i_a^*right)-P_refa)\n tau_vdotv_a=-v_a+V_ref-K_Qa(q_ma-Q_refa)\n tau_Q dotq_ma=-q_ma+Imleft(u_a cdot i_a^*right)\n dotu_a=dotv_ae^jphi+jomega_a u_a\n\n\n\n"
},

{
    "location": "#Base.convert-Tuple{Type{OrdinaryNodeDynamicsWithMass},OrdinaryNodeDynamics}",
    "page": "-",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(::Type{OrdinaryNodeDynamicsWithMass}, ::OrdinaryNodeDynamics)\n\nConversion of OrdinaryNodeDynamics to OrdinaryNodeDynamicsWithMass by assuming all masses are 1 (true).\n\n\n\n\n\n"
},

{
    "location": "#Base.convert-Tuple{Type{PowerDynBase.AlgebraicNodeDynamics},OrdinaryNodeDynamicsWithMass}",
    "page": "-",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(::Type{AlgebraicNodeDynamics}, ::OrdinaryNodeDynamicsWithMass)\n\nConversion of OrdinaryNodeDynamicsWithMass to AlgebraicNodeDynamics by transforming a RHS function into a root function.\n\n\n\n\n\n"
},

{
    "location": "#Base.convert-Tuple{Type{PowerDynBase.AlgebraicNodeDynamics},OrdinaryNodeDynamics}",
    "page": "-",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(::Type{AlgebraicNodeDynamics}, ::OrdinaryNodeDynamics)\n\nConversion of OrdinaryNodeDynamics to AlgebraicNodeDynamics by going via OrdinaryNodeDynamicsWithMass.\n\n\n\n\n\n"
},

{
    "location": "#Base.promote_rule-Tuple{Type{#s20489} where #s20489<:OrdinaryNodeDynamics,Type{#s20488} where #s20488<:OrdinaryNodeDynamicsWithMass}",
    "page": "-",
    "title": "Base.promote_rule",
    "category": "method",
    "text": "promote_rule(::Type{OrdinaryNodeDynamics}, ::Type{OrdinaryNodeDynamicsWithMass}) = OrdinaryNodeDynamicsWithMass\n\nOrdinaryNodeDynamics can be promoted to OrdinaryNodeDynamicsWithMass, see PowerDynBase.convert.\n\n\n\n\n\n"
},

{
    "location": "#Base.promote_rule-Tuple{Type{OrdinaryNodeDynamicsWithMass},Type{PowerDynBase.AlgebraicNodeDynamics}}",
    "page": "-",
    "title": "Base.promote_rule",
    "category": "method",
    "text": "promote_rule(::Type{OrdinaryNodeDynamicsWithMass}, ::Type{AlgebraicNodeDynamics}) = AlgebraicNodeDynamics\n\nOrdinaryNodeDynamicsWithMass can be promoted to AlgebraicNodeDynamics, see PowerDynBase.convert.\n\n\n\n\n\n"
},

{
    "location": "#Base.promote_rule-Tuple{Type{OrdinaryNodeDynamics},Type{PowerDynBase.AlgebraicNodeDynamics}}",
    "page": "-",
    "title": "Base.promote_rule",
    "category": "method",
    "text": "promote_rule(::Type{OrdinaryNodeDynamics}, ::Type{AlgebraicNodeDynamics}) = AlgebraicNodeDynamics\n\nOrdinaryNodeDynamics can be promoted to AlgebraicNodeDynamics, see PowerDynBase.convert.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AdmittanceLaplacian-Tuple{Any}",
    "page": "-",
    "title": "PowerDynBase.AdmittanceLaplacian",
    "category": "method",
    "text": "AdmittanceLaplacian(x)\n\nReturn the nodal admittance matrix of the system.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.Nodes-Tuple{Any}",
    "page": "-",
    "title": "PowerDynBase.Nodes",
    "category": "method",
    "text": "Nodes(x)\n\nReturn the array of nodes for x.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.SystemSize-Tuple{Any}",
    "page": "-",
    "title": "PowerDynBase.SystemSize",
    "category": "method",
    "text": "SystemSize(x)\n\nReturn the full system size, i.e. number of independent, dynamic, real-valued variables, for x.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.differentials-Tuple{AbstractArray{#s20490,1} where #s20490<:PowerDynBase.AbstractAlgebraicNodeDynamics}",
    "page": "-",
    "title": "PowerDynBase.differentials",
    "category": "method",
    "text": "Collect the differnetials (or masses) for the whole grid dynamics from each node dynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.internaldsymbolsof-Tuple{PowerDynBase.ODENodeSymbols}",
    "page": "-",
    "title": "PowerDynBase.internaldsymbolsof",
    "category": "method",
    "text": "Get the symbols representing the derivative of the internal variables of the node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.internaloutsymbolsof-Tuple{PowerDynBase.DAENodeSymbols}",
    "page": "-",
    "title": "PowerDynBase.internaloutsymbolsof",
    "category": "method",
    "text": "Get the symbols representing the output of the internal variables of the node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.internalsymbolsof-Tuple{PowerDynBase.ODENodeSymbols}",
    "page": "-",
    "title": "PowerDynBase.internalsymbolsof",
    "category": "method",
    "text": "Get the symbols representing the internal variables of the node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.parametersof-Tuple{OrdinaryNodeDynamics}",
    "page": "-",
    "title": "PowerDynBase.parametersof",
    "category": "method",
    "text": "Get the parameters struct for the node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.showdefinition-Tuple{Any}",
    "page": "-",
    "title": "PowerDynBase.showdefinition",
    "category": "method",
    "text": "Show the definition generated by a macro of PowerDynamics.jl, e.g. the macro PowerDynBase.@DynamicNode creating a subtype of PowerDynBase.AbstractNodeParameters.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.@DynamicNode-NTuple{4,Any}",
    "page": "-",
    "title": "PowerDynBase.@DynamicNode",
    "category": "macro",
    "text": "Macro for creating a new type of dynmic nodes.\n\nSyntax Description:\n\n@DynamicNode MyNewNodeName(Par1, Par2, ...) <: NodeDynamicsType(N1, N2, ...) begin\n    [all prepratory things that need to be run just once]\nend [[x1, dx1], [x2, dx2]] begin\n    [the actual dynamics equation]\n    [important to set the output variables]\nend\n\nwhere MyNewNodeName is the name of the new type of dynamic node, Par1, Par2, ... are the names of the parameters, NodeDynamicsType the the node dynamics type (e.g. OrdinaryNodeDynamics or OrdinaryNodeDynamicsWithMass), N1, N1, ... the parameters of the dynamics type, x1, x2, ... the internal variables of the node and dx1, dx2, ... the corresponding differentials.\n\nIn the first block, the preparation code that needs to be run only once is inserted. Finally, the second block contains the dynamics description, where it\'s important that the output variables need to be set. In case of OrdinaryNodeDynamics and OrdinaryNodeDynamicsWithMass, these are du and the differentials of the internal variables (here dx1, dx2).\n\nBelow are two examples:\n\n@DynamicNode SwingEqParameters(H, P, D, Ω) <: OrdinaryNodeDynamics() begin\n    @assert D > 0 \"damping (D) should be >0\"\n    @assert H > 0 \"inertia (H) should be >0\"\n    Ω_H = Ω * 2pi / H\nend [[ω, dω]] begin\n    p = real(u * conj(i_c))\n    dϕ = ω # dϕ is only a temp variable that Julia should optimize out\n    du = u * im * dϕ\n    dω = (P - D*ω - p)*Ω_H\nend\n\n@DynamicNode SlackAlgebraicParameters(U) <: OrdinaryNodeDynamicsWithMass(m_u=false, m_int=no_internal_masses) begin\nend [] begin\n        du = u - U\nend\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractAlgebraicGridDynamics",
    "page": "-",
    "title": "PowerDynBase.AbstractAlgebraicGridDynamics",
    "category": "type",
    "text": "Abstract super type for all grid dynamics represented by DAEs.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractAlgebraicNodeDynamics",
    "page": "-",
    "title": "PowerDynBase.AbstractAlgebraicNodeDynamics",
    "category": "type",
    "text": "Abstract super type for all node dynamics represented by DAEs.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractDAEVariable",
    "page": "-",
    "title": "PowerDynBase.AbstractDAEVariable",
    "category": "type",
    "text": "Abstract super type for all Variables for DAE-type node dynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractDEVariable",
    "page": "-",
    "title": "PowerDynBase.AbstractDEVariable",
    "category": "type",
    "text": "abstract type AbstractDEVariable end\n\nAbstract super type for all variables that PowerDynBase.AbstractNetworkFunction sub-types can be called with.\n\nDEVariable stands for Differential Equation Variable.\n\nThe basic idea of a DEVariable is to combine (the arrays of) all necessary variables for a sub-type of PowerDynBase.GridDynamics. E.g. for a PowerDynBase.OrdinaryGridDynamics one needs only the state variable (here called val for value) and the derivative (here called ddt). Hence, the definition for the corresponding PowerDynBase.ODEVariable is:\n\n@DEVariable struct ODEVariable{Tval, Tddt} <: AbstractODEVariable\n    val::AbstractVector{Tval}\n    ddt::AbstractVector{Tddt}\nend ddt\n\nThe final ddt statement is part of the PowerDynBase.@DEVariable macro stating that the output variable of this kind of DEVariable is ddt. Further, the PowerDynBase.@DEVariable macro generates all the necessary constructors. Check its docs for more details.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractNetworkFunction",
    "page": "-",
    "title": "PowerDynBase.AbstractNetworkFunction",
    "category": "type",
    "text": "abstract type AbstractNetworkFunction{T<:AbstractNodeDynamics, M<:AbstractMatrix} end\n\nAbstract super type of all functions that define how a differential equation for the whole network / power grid behaves, e.g. the full right-hand-side function of the ODE.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractNodeDynamics",
    "page": "-",
    "title": "PowerDynBase.AbstractNodeDynamics",
    "category": "type",
    "text": "Abstract super type for all abstract node dynamics types.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractODEVariable",
    "page": "-",
    "title": "PowerDynBase.AbstractODEVariable",
    "category": "type",
    "text": "Abstract super type for all Variables for ODE-type node dynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractOrdinaryGridDynamics",
    "page": "-",
    "title": "PowerDynBase.AbstractOrdinaryGridDynamics",
    "category": "type",
    "text": "Abstract super type for all grid dynamics represented by ODEs.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AbstractOrdinaryNodeDynamics",
    "page": "-",
    "title": "PowerDynBase.AbstractOrdinaryNodeDynamics",
    "category": "type",
    "text": "Abstract super type for all node dynamics represented by ODEs.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AlgebraicGridDynamics",
    "page": "-",
    "title": "PowerDynBase.AlgebraicGridDynamics",
    "category": "type",
    "text": "struct AlgebraicGridDynamics <: AbstractAlgebraicGridDynamics\n    rhs::NetworkRHS\n    differentials::AbstractVector{Bool} # boolean values whether there a variable is a differential\nend\n\nThe data structure that contains all the information necessary for a power grid model that can be described as an differential algebraic equation. rhs is the PowerDynBase.NetworkRHS. differentials is a 1-dimensional array of boolean values. A true entry means the corresponding variable is dynamic and has a derivative variable. A false entry means the corresponding variable is defined by an algebraic constraint only.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.AlgebraicNodeDynamics",
    "page": "-",
    "title": "PowerDynBase.AlgebraicNodeDynamics",
    "category": "type",
    "text": "DOCS TBD!\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.BaseState",
    "page": "-",
    "title": "PowerDynBase.BaseState",
    "category": "type",
    "text": "\n    BaseState(grid, vec)\n\n\nEncode a state vector and the corresponding rhs information.\n\nKeyword Arguments\n\ngrid is a GridDynamics instance that contains the overall system rhs.\nvec is a state vector of the system who\'s length is given by the total       number of internal and voltage variables.\n\nIndexing\n\nIn an instance b of of a BaseState behaves like an array, i.e. you can access the j-th element of the state vector (and set it to a value ξ) by calling b[j] ( = ξ ).\n\n\n\n"
},

{
    "location": "#PowerDynBase.DAEVariable",
    "page": "-",
    "title": "PowerDynBase.DAEVariable",
    "category": "type",
    "text": "Variables for DAE-type node dynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.ODEVariable",
    "page": "-",
    "title": "PowerDynBase.ODEVariable",
    "category": "type",
    "text": "Variables for ODE-type node dynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.OrdinaryGridDynamics",
    "page": "-",
    "title": "PowerDynBase.OrdinaryGridDynamics",
    "category": "type",
    "text": "struct OrdinaryGridDynamics <: AbstractOrdinaryGridDynamics\n    rhs::NetworkRHS\nend\n\nThe data structure that contains all the information necessary for a power grid model that can be described as an ordinary differential equation. In this case, only the PowerDynBase.NetworkRHS is necessary.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.OrdinaryGridDynamicsWithMass",
    "page": "-",
    "title": "PowerDynBase.OrdinaryGridDynamicsWithMass",
    "category": "type",
    "text": "struct OrdinaryGridDynamicsWithMass <: AbstractAlgebraicGridDynamics\n    rhs::NetworkRHS\n    masses::AbstractVector{Bool} # diagonal part of the mass matrix, off-diagonal is assumed to be 0 anyway\nend\n\nThe data structure that contains all the information necessary for a power grid model that can be described as an ordinary differential equation with masses, i.e. a semi-explicit differential algebraic equation. rhs is the PowerDynBase.NetworkRHS. masses is a 1-dimensional array representing the diagonal entries of the mass matrix. The off-diagonal entries are assumed to be 0. masses can only contain boolean values representing: true the equation is treated as a ordinary differential eqation and false the equation is treated as an algebraic constraint on the state variables.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.PowerDynamicsError",
    "page": "-",
    "title": "PowerDynBase.PowerDynamicsError",
    "category": "type",
    "text": "Abstract super type of all PowerDynamics.jl Errors.\n\n\n\n\n\n"
},

{
    "location": "#Base.view-Tuple{PowerDynBase.AbstractDEVariable,Any}",
    "page": "-",
    "title": "Base.view",
    "category": "method",
    "text": "Extend view from arrays to subtypes of AbstractDEVariable.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.DynamicNode-NTuple{4,Any}",
    "page": "-",
    "title": "PowerDynBase.DynamicNode",
    "category": "method",
    "text": "See PowerDynBase.@DynamicNode.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase._GridDynamics-Tuple{AbstractArray{#s20490,1} where #s20490<:OrdinaryNodeDynamics,AbstractArray{T,2} where T}",
    "page": "-",
    "title": "PowerDynBase._GridDynamics",
    "category": "method",
    "text": "Create for each subtype of PowerDynBase.AbstractNodeDynamics the corresponding subtype of PowerDynBase.GridDynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.checkLY-Tuple{AbstractArray{T,2} where T}",
    "page": "-",
    "title": "PowerDynBase.checkLY",
    "category": "method",
    "text": "Check whether the admittance laplacian has no purely nodal admittances, i.e. that the sum of columns and rows equals to zero.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.complexview-Tuple{PowerDynBase.AbstractDEVariable,Any,Any}",
    "page": "-",
    "title": "PowerDynBase.complexview",
    "category": "method",
    "text": "Extend PowerDynBase.complexview from arrays to subtypes of AbstractDEVariable.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.complexview-Union{Tuple{T}, Tuple{AbstractArray{T,N} where N,Any,Any}} where T",
    "page": "-",
    "title": "PowerDynBase.complexview",
    "category": "method",
    "text": "complexview(vec::AbstractArray, i0, n)\n\nInterpret (part of) an array of real values as an array with complex values. i0 is the index where to start. n is the number of complex values that should be extracted.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.create_DEVariable-Tuple{Any,Symbol}",
    "page": "-",
    "title": "PowerDynBase.create_DEVariable",
    "category": "method",
    "text": "Basically, this macro generates all the constructors (internal and external) for a subtype of AbstracDEVariable.\n\nIf you want to understand what this macro does, call PowerDynBase.showdefinition with a type that was generated by this macro, e.g. showdefinition(ODEVariable). It will output the full defintion that the macro actually creates.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.excomparison-Tuple{Any}",
    "page": "-",
    "title": "PowerDynBase.excomparison",
    "category": "method",
    "text": "Create an expresseion where == is applied between all the expressions given as argument here.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.getDEVariableType-Tuple{Type{Val{OrdinaryNodeDynamics}}}",
    "page": "-",
    "title": "PowerDynBase.getDEVariableType",
    "category": "method",
    "text": "Identify each subtype of AbstractNodeDynamics with its corresponding subtype of AbstractDEVariable\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.int_differentials-Tuple{PowerDynBase.AbstractAlgebraicNodeDynamics,Vararg{PowerDynBase.AbstractAlgebraicNodeDynamics,N} where N}",
    "page": "-",
    "title": "PowerDynBase.int_differentials",
    "category": "method",
    "text": "Return the 1-dimensional differentials array (see PowerDynBase.AlgebraicGridDynamics) for the internal variables for each node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.internal_unitranges-Tuple{AbstractArray{#s20490,1} where #s20490<:PowerDynBase.AbstractNodeDynamics}",
    "page": "-",
    "title": "PowerDynBase.internal_unitranges",
    "category": "method",
    "text": "Get the unit ranges that indicate where in the array the internal variables for each of the nodes is saved.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.mapfields-Tuple{Any,Any,Vararg{Any,N} where N}",
    "page": "-",
    "title": "PowerDynBase.mapfields",
    "category": "method",
    "text": "function mapfields(f, s, args...)\n\nApplies f to all fields of (the struct) s giving args... as additional arguments.\n\nIt\'s written as a @generated function in order to ensure that the compiler can infer the types.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.nint-Tuple{OrdinaryNodeDynamics}",
    "page": "-",
    "title": "PowerDynBase.nint",
    "category": "method",
    "text": "Get number of internal arguments of the node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.nodeiterator-Tuple{NetworkRHS,PowerDynBase.AbstractDEVariable,Any}",
    "page": "-",
    "title": "PowerDynBase.nodeiterator",
    "category": "method",
    "text": "nodeiterator(rhs::NetworkRHS, x::AbstractDEVariable, t)\n\nDistribute the values in x over all the nodes that are summarized in rhs.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.rhs2root-Tuple{Function}",
    "page": "-",
    "title": "PowerDynBase.rhs2root",
    "category": "method",
    "text": "A function converting a rhs-type function to a root-type function.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.symbolsof-Tuple{OrdinaryNodeDynamics}",
    "page": "-",
    "title": "PowerDynBase.symbolsof",
    "category": "method",
    "text": "Get the symbols data structure for the node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.total_nint-Tuple{AbstractArray{#s20490,1} where #s20490<:PowerDynBase.AbstractNodeDynamics}",
    "page": "-",
    "title": "PowerDynBase.total_nint",
    "category": "method",
    "text": "Get the total number of internal variables for an array of node dynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.total_nvars-Tuple{AbstractArray{#s20490,1} where #s20490<:PowerDynBase.AbstractNodeDynamics}",
    "page": "-",
    "title": "PowerDynBase.total_nvars",
    "category": "method",
    "text": "Get the total number of dynamic variables for an array of node dynamics.\n\nThis is basically the (real) dimension of the system, hence the sum of internal dynamic variables + 2*(number of nodes = number of complex voltages). The 2 is due to the fact that the complex voltages are treated as two real variables.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.u_differentials-Tuple{PowerDynBase.AbstractAlgebraicNodeDynamics,Vararg{PowerDynBase.AbstractAlgebraicNodeDynamics,N} where N}",
    "page": "-",
    "title": "PowerDynBase.u_differentials",
    "category": "method",
    "text": "Return the 1-dimensional differentials array (see PowerDynBase.AlgebraicGridDynamics) for the voltagee variables for each node.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynBase.@DEVariable-Tuple{Any,Any}",
    "page": "-",
    "title": "PowerDynBase.@DEVariable",
    "category": "macro",
    "text": "@DEVariable struct DEVariableName{Type1, Type2, ...} <: AbstractODEVariable\n    ...\nend outputVariableName\n\nBasically, this macro generates all the constructors (internal and external) for a subtype of AbstracDEVariable. In particular, it creates an external constructor that automatically chooses the type for the outputVariableName and instantiates this variable.\n\nIf you want to understand what this macro does, call PowerDynBase.showdefinition with a type that was generated by this macro, e.g. showdefinition(ODEVariable). It will output the full defintion that the macro actually creates.\n\nFurthermore, the macro is just the interface for the PowerDynBase.create_DEVariable function.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.GridProblem",
    "page": "-",
    "title": "PowerDynSolve.GridProblem",
    "category": "type",
    "text": "struct GridProblem{P<:DEProblem, S<:AbstractState, T<:AbstractFloat} # T is for the timespan\n    prob::P\n    start::S\n    timespan::Tuple{T, T}\nend\n\nDefine an analogous problem to DifferentialEquations.jl\'s DEProblem subtypes. In the future, this is planned to be replaced by a real DEProblem subtype.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.GridProblem-Tuple{GridDynamics,AbstractArray{T,1} where T,Any}",
    "page": "-",
    "title": "PowerDynSolve.GridProblem",
    "category": "method",
    "text": "function GridProblem(g::GridDynamics, start::AbstractVector, timespan; kwargs...)\n\nConstruct a PowerDynSolve.GridProblem from a an initial condition start for the grid dynamics g which is a subtype of PowerDynBase.GridDynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.GridProblem-Union{Tuple{T}, Tuple{V}, Tuple{AbstractState{OrdinaryGridDynamics,V,T},Any}} where T where V",
    "page": "-",
    "title": "PowerDynSolve.GridProblem",
    "category": "method",
    "text": "function GridProblem(start::AbstractState{OrdinaryGridDynamics, V, T}, timespan; kwargs...) where {V,T}\n\nConstruct a PowerDynSolve.GridProblem from a an initial condition (i.e. a PowerDynBase.State) for an PowerDynBase.OrdinaryGridDynamics.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.GridProblem-Union{Tuple{T}, Tuple{V}, Tuple{AbstractState{OrdinaryGridDynamicsWithMass,V,T},Any}} where T where V",
    "page": "-",
    "title": "PowerDynSolve.GridProblem",
    "category": "method",
    "text": "function GridProblem(start::AbstractState{OrdinaryGridDynamicsWithMass, V, T}, timespan; kwargs...) where {V,T}\n\nConstruct a PowerDynSolve.GridProblem from a an initial condition (i.e. a PowerDynBase.State) for an PowerDynBase.OrdinaryGridDynamicsWithMass.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.GridProblem-Union{Tuple{T}, Tuple{V}, Tuple{G}, Tuple{G,AbstractState{G,V,T},Any}} where T where V where G",
    "page": "-",
    "title": "PowerDynSolve.GridProblem",
    "category": "method",
    "text": "function GridProblem(g::G, start::AbstractState{G, V, T}, timespan; kwargs...) where {G, V, T}\n\nConstruct a PowerDynSolve.GridProblem from a an initial condition start (i.e. a PowerDynBase.State) with the corresponding subtype of PowerDynBase.GridDynamics.\n\n\n\n\n\n"
},

{
    "location": "#DiffEqBase.solve-Tuple{GridDynamics,Any,Any}",
    "page": "-",
    "title": "DiffEqBase.solve",
    "category": "method",
    "text": "function solve(g::GridDynamics, x0, timespan)\n\nSolve a power grid g (of type PowerDynSolve.GridDynamics) starting at x0 for a timespan, using DifferentialEquations.jl in the back. The correct solvers are automatically chosen.\n\n\n\n\n\n"
},

{
    "location": "#DiffEqBase.solve-Union{Tuple{GridProblem{P,#s20487,Q} where #s20487<:AbstractState{OrdinaryGridDynamics,V,T}}, Tuple{Q}, Tuple{T}, Tuple{V}, Tuple{P}} where Q where T where V where P",
    "page": "-",
    "title": "DiffEqBase.solve",
    "category": "method",
    "text": "function solve(p::GridProblem; kwargs...)\n\nSolve a PowerDynSolve.GridProblem, using DifferentialEquations.jl in the back. The correct solvers are automatically chosen.\n\nkwargs are the keyword arguments that are simply passed to DifferentialEquations.jl.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.AbstractGridSolution",
    "page": "-",
    "title": "PowerDynSolve.AbstractGridSolution",
    "category": "type",
    "text": "Abstract super type for all data structures representing solutions of power grid models.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.GridSolution",
    "page": "-",
    "title": "PowerDynSolve.GridSolution",
    "category": "type",
    "text": "struct GridSolution <: AbstractGridSolution\n    dqsol::AbstractTimeseriesSolution\n    griddynamics::GridDynamics\nend\n\nThe data structure interfacing to the solution of the differntial equations of a power grid. Normally, it is not created by hand but return from PowerDynSolve.solve.\n\nAccessing the solution in a similar interface as PowerDynBase.State.\n\nFor some grid solution sol, one can access the variables as\n\nsol(t, n, s)\n\nwhere t is the time (either float or array), n the node number(s) (either integer, array, range (e.g. 2:3) or colon (:, for all nodes)), and s is the symbol represnting the chosen value. s can be either: :v, :φ, :i, :iabs, :δ, :s, :p, :q, or the symbol of the internal variable of the nodes. The meaning of the symbols derives from the conventions of PowerDynamics.jl.\n\nFinally, one can access the a-th internal variable of a node by using sol(t, n, :int, a).\n\nInterfacing the Plots.jl library via plotting recipes, that follow similar instructions as the direct access to the solution.\n\nFor some grid solution sol, one plot variables of the solution asin\n\nusing Plots\nplot(sol, n, s, plots_kwargs...)\n\nwhere n and s are as in the accessing of plots, and plots_kwargs are the keyword arguments for Plots.jl.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.GridSolutionError",
    "page": "-",
    "title": "PowerDynSolve.GridSolutionError",
    "category": "type",
    "text": "Error to be thrown if something goes wrong during when solving a power grid model.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.tslabel-Tuple{Any,Any}",
    "page": "-",
    "title": "PowerDynSolve.tslabel",
    "category": "method",
    "text": "Create the standard variable labels for power grid plots.\n\n\n\n\n\n"
},

{
    "location": "#PowerDynSolve.tstransform-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "-",
    "title": "PowerDynSolve.tstransform",
    "category": "method",
    "text": "Transform the array output from DifferentialEquations.jl correctly to be used in Plots.jl\'s recipes.\n\n\n\n\n\n"
},

{
    "location": "#DiffEqBase.solve",
    "page": "-",
    "title": "DiffEqBase.solve",
    "category": "function",
    "text": "function solve(p::GridProblem; kwargs...)\n\nSolve a PowerDynSolve.GridProblem, using DifferentialEquations.jl in the back. The correct solvers are automatically chosen.\n\nkwargs are the keyword arguments that are simply passed to DifferentialEquations.jl.\n\n\n\n\n\nfunction solve(g::GridDynamics, x0, timespan)\n\nSolve a power grid g (of type PowerDynSolve.GridDynamics) starting at x0 for a timespan, using DifferentialEquations.jl in the back. The correct solvers are automatically chosen.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "Modules = [PowerDynBase, PowerDynSolve]DiffEqBase.solve"
},

]}
