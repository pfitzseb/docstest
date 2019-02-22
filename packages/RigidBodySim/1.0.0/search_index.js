var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RigidBodySim-1",
    "page": "Readme",
    "title": "RigidBodySim",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: Docs (latest)) (Image: Docs (stable))RigidBodySim provides Julia tools for simulation and visualization of systems of interconnected rigid bodies (both passive and controlled), built on top of RigidBodyDynamics, DifferentialEquations, and RigidBodyTreeInspector.See the latest documentation and the quick start guide for more information and examples."
},

{
    "location": "#Demo-video-1",
    "page": "Readme",
    "title": "Demo video",
    "category": "section",
    "text": "The video below shows Atlas walking using the MIT Robot Locomotion Group controller, simulated in realtime using RigidBodySim.jl.(Image: Watch the demo video)Off-screen, commands are being given to the robot using a separate user interface. The controller is unfortunately hard to set up, so a hands-on version of this demo is currently not available."
},

{
    "location": "autodocs/#DiffEqBase.CallbackSet",
    "page": "Docstrings",
    "title": "DiffEqBase.CallbackSet",
    "category": "type",
    "text": "CallbackSet(gui; max_fps)\n\n\nCreate the DifferentialEquations.jl callbacks associated with the GUI.\n\nmax_fps is the maximum number of frames per second (in terms of wall time) to draw. Default: 60.0.\n\n\n\n\n\nCallbackSet(vis; max_fps)\n\n\nCreate the DifferentialEquations.jl callbacks needed for publishing to a visualizer during simulation.\n\nmax_fps is the maximum number of frames per second (in terms of wall time) to draw. Default: 60.0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Core.Dynamics",
    "page": "Docstrings",
    "title": "RigidBodySim.Core.Dynamics",
    "category": "type",
    "text": "Dynamics(mechanism)\nDynamics(mechanism, control!; setparams!)\n\n\nCreate a Dynamics object, representing either the passive or closed-loop dynamics of a RigidBodyDynamics.Mechanism.\n\nThe control! argument is a callable with the signature control!(τ, t, state), where τ is the torque vector to be set in the body of control!, t is the current time, and state is a MechanismState object. By default, control! is zero_control! (resulting in the passive dynamics).\n\nThe setparams! keyword argument is a callable with the signature setparams!(state, p) where state is a MechanismState and p is a vector of parameters, as used in OrdinaryDiffEq.jl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Visualization.GUI",
    "page": "Docstrings",
    "title": "RigidBodySim.Visualization.GUI",
    "category": "type",
    "text": "GUI(visualizer)\n\n\nCreate a new RigidBodySim graphical user interface from a MeshCatMechanisms.MechanismVisualizer.\n\nUse open(gui) to open the GUI in a standalone window.\n\n\n\n\n\nGUI(mechanism, args)\n\n\nCreate a new RigidBodySim graphical user interface for the given Mechanism. All arguments are passed on to the MeshCatMechanisms.MechanismVisualizer constructor.\n\nUse open(gui) to open the GUI in a standalone window.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.ODEProblem",
    "page": "Docstrings",
    "title": "DiffEqBase.ODEProblem",
    "category": "type",
    "text": "ODEProblem(dynamics, x0, tspan)\nODEProblem(dynamics, x0, tspan, p; callback, kwargs...)\n\n\nCreate a DiffEqBase.ODEProblem associated with the dynamics of a RigidBodyDynamics.Mechanism.\n\nThe initial state x0 can be either a RigidBodyDynamics.MechanismState), or an AbstractVector containing the initial state represented as [q; v; s], where q is the configuration vector, v is the velocity vector, and s is the vector of additional states.\n\nThe callback keyword argument can be used to pass in additional DifferentialEquations.jl callbacks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Control.PeriodicController",
    "page": "Docstrings",
    "title": "RigidBodySim.Control.PeriodicController",
    "category": "type",
    "text": "struct PeriodicController{Tau<:(AbstractArray{T,1} where T), T<:Number, C, I}\n\nA PeriodicController can be used to simulate a digital controller that runs at a fixed rate (in terms of simulation time). It does so by performing a zero-order hold on a provided control function.\n\nPeriodicControllers can be constructed using\n\nPeriodicController(τ, Δt, control!; initialize = DiffEqBase.INITIALIZE_DEFAULT, save_positions = (false, false))\n\nwhere control! is a controller satisfying the standard RigidBodySim controller signature (control!(τ, Δt, state)), Δt is the simulation time interval between calls to the control! function, and τ is used to call control!. The initialize and save_positions keyword arguments are documented in the DiscreteCallback section of the DifferentialEquations documentation.\n\nPeriodicControllers are callable objects, and themselves fit the standard RigidBodySim controller signature.\n\nA DiffEqCallbacks.PeriodicCallback can be created from a PeriodicController, and is used to stop ODE integration exactly every Δt seconds, so that the control! function can be called. Typically, users will not have to explicitly create this PeriodicCallback, as it is automatically created and added to the ODEProblem when the PeriodicController is passed into the RigidBodySim-provided DiffEqBase.ODEProblem constructor overload.\n\nExamples\n\nIn the following example, a PeriodicController is used to simulate a digital PD controller running at a fixed rate of 200 Hz.\n\njulia> using RigidBodySim, RigidBodyDynamics, OrdinaryDiffEq\n\njulia> mechanism = parse_urdf(Float64, Pkg.dir(\"RigidBodySim\", \"test\", \"urdf\", \"Acrobot.urdf\"));\n\njulia> state = MechanismState(mechanism);\n\njulia> set_configuration!(state, [0.1; 0.2]);\n\njulia> controlcalls = Ref(0);\n\njulia> pdcontrol!(τ, t, state) = (controlcalls[] += 1; τ .= -20 .* velocity(state) .- 100 .* configuration(state));\n\njulia> τ = zeros(velocity(state)); Δt = 1 / 200\n0.005\n\njulia> problem = ODEProblem(Dynamics(mechanism, PeriodicController(τ, Δt, pdcontrol!)), state, (0., 5.));\n\njulia> sol = solve(problem, Tsit5());\n\njulia> @assert all(x -> isapprox(x, 0, atol = 1e-4), sol.u[end]) # ensure state converges to zero\n\njulia> controlcalls[]\n1001\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Core.RealtimeRateLimiter",
    "page": "Docstrings",
    "title": "RigidBodySim.Core.RealtimeRateLimiter",
    "category": "function",
    "text": "RealtimeRateLimiter(; max_rate, poll_interval, save_positions, reset_interval)\n\n\nRealtimeRateLimiter(; max_rate = 1., poll_interval = 1 / 30; save_positions = (false, false))\n\nA DiscreteCallback that limits the rate of integration so that integration time t increases at a rate no higher than max_rate compared to wall time.\n\nA RealtimeRateLimiter can be used, for example, if you want to simulate a physical system including its timing characteristics. Specific use cases may include realtime animation and user interaction during the simulation.\n\nThe poll_interval keyword argument can be used to control how often the integration is stopped to check whether to sleep (and for how long). Specifically, this operation happens every poll_interval / max_rate in terms of integration time, which corresponds to approximately every poll_interval seconds wall time if max_rate is actually achieved.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Visualization.SimulationControls",
    "page": "Docstrings",
    "title": "RigidBodySim.Visualization.SimulationControls",
    "category": "type",
    "text": "SimulationControls()\n\n\nCreate a new SimulationControls object, which may be used to pause and terminate the simulation.\n\nThe controls can be displayed in a standalone window using open(controls, Blink.Window()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Core.configuration_renormalizer",
    "page": "Docstrings",
    "title": "RigidBodySim.Core.configuration_renormalizer",
    "category": "function",
    "text": "configuration_renormalizer(state)\nconfiguration_renormalizer(state, condition)\n\n\nconfiguration_renormalizer can be used to create a callback that projects the configuration of a mechanism\'s state onto the configuration manifold. This may be necessary for mechanism\'s with e.g. quaternion-parameterized orientations as part of their joint configuration vectors, as numerical integration can cause the configuration to drift away from the unit norm constraints.\n\nThe callback is implemented as a DiffEqCallbacks.DiscreteCallback By default, it is called at every integrator time step.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Core.controlcallback",
    "page": "Docstrings",
    "title": "RigidBodySim.Core.controlcallback",
    "category": "function",
    "text": "controlcallback(control!)\n\n\nCan be used to create a callback associated with a given controller.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCat.setanimation!",
    "page": "Docstrings",
    "title": "MeshCat.setanimation!",
    "category": "function",
    "text": "setanimation!(vis, sol; max_fps, realtime_rate, pause_pollint)\n\n\nPlay back a visualization of a RigidBodySim.jl simulation.\n\nPositional arguments:\n\nvis is a MeshCatMechanisms.MechanismVisualizer\nsol is a DiffEqBase.ODESolution obtained from a RigidBodySim.jl simulation.\n\nsetanimation accepts the following keyword arguments:\n\nmax_fps: the maximum number of frames per second to draw. Default: 60.0.\nrealtime_rate: can be used to slow down or speed up playback compared to wall time. A realtime_rate of 2 will result in playback that is sped up 2x. Default: 1.0.\n\nExamples\n\nVisualizing the result of a simulation of the passive dynamics of an Acrobot (double pendulum) at half speed:\n\nusing RigidBodySim, RigidBodyDynamics, MeshCatMechanisms, Blink\nurdf = Pkg.dir(\"RigidBodySim\", \"test\", \"urdf\", \"Acrobot.urdf\")\nmechanism = parse_urdf(Float64, urdf)\nstate = MechanismState(mechanism)\nset_configuration!(state, [0.1; 0.2])\nproblem = ODEProblem(Dynamics(mechanism), state, (0., 2.))\nsol = solve(problem, Vern7())\nvis = MechanismVisualizer(mechanism, URDFVisuals(urdf))\nopen(vis, Window())\nsetanimation!(vis, sol; realtime_rate = 0.5);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodySim.Core.zero_control!",
    "page": "Docstrings",
    "title": "RigidBodySim.Core.zero_control!",
    "category": "function",
    "text": "zero_control!(τ, t, state)\n\n\nA \'zero\' controller, i.e. one that sets all control torques to zero at all times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RigidBodySim.@jsRigidBodySim.@js_strRigidBodySim.@newRigidBodySim.@reexportRigidBodySim.@varRigidBodySim.CallbackSetRigidBodySim.ControlRigidBodySim.CoreRigidBodySim.DynamicsRigidBodySim.GUIRigidBodySim.JSStringRigidBodySim.ODEProblemRigidBodySim.PeriodicCallbackRigidBodySim.PeriodicControllerRigidBodySim.RK4RigidBodySim.RealtimeRateLimiterRigidBodySim.RigidBodySimRigidBodySim.SimulationControlsRigidBodySim.Tsit5RigidBodySim.Vern7RigidBodySim.VisualizationRigidBodySim.animateRigidBodySim.configuration_renormalizerRigidBodySim.controlcallbackRigidBodySim.evalRigidBodySim.includeRigidBodySim.initRigidBodySim.setanimation!RigidBodySim.solveRigidBodySim.solve!RigidBodySim.visualizeRigidBodySim.windowRigidBodySim.zero_control!"
},

]}
