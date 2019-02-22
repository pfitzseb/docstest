var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Robotlib) (Image: Build Status) (Image: codecov)Now supporting Julia v0.7/v1.0. Dependency MAT.jl is currently not building on Julia v1.0 and hence all file loading functionality and some tests have been deactivated."
},

{
    "location": "#Robotlib-1",
    "page": "Readme",
    "title": "Robotlib",
    "category": "section",
    "text": "This is a library of functions to help out in a robotics lab. At present stage, it contains functions for forward kinematics, jacobians, iterative inverse kinematics and for a few robotics related calibration problems. The library also contains a number of functions to convert from various orientation representations and other robotics related helper functions.Install usingPkg.add(\"Robotlib\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "fkine, ikine, jacobian = get_kinematic_functions(\"yumi\") # Replace yumi for your robot model, as long as it\'s supported\ndata = orcalog2mat(pathopen, pathsave) # Read data from a csv-file and save as binary file\nq = getData(\"robot_0.*posRawAbs\", data, 1, removeNaN = false) # Extract columns from data object using regex like syntaxFor ABB YuMi, joint angles q must be converted to logical order using e.g. abb2logical!(q) If you use the kinematic functions privided by get_kinematic_functions, the base transform is handled automatically. If you use the standard kinematic functions provided in Robotlib, you must also consider the base transform."
},

{
    "location": "#Case-study,-calibrate-force-sensor-1",
    "page": "Readme",
    "title": "Case study, calibrate force sensor",
    "category": "section",
    "text": "using Robotlib\nusing Robotlib.Calibration\nusing DSP # For filtfilt\n\n# Define robot to use, in this case YuMi\ndh = DHYuMi()\nfkine, ikine, jacobian = get_kinematic_functions(\"yumi\")\n\n# Define paths to log file and where to store converted binary file for faster reading\npathopen = \"/work/fredrikb/extRosetta/frida_gravity_2.txt\"\npathsave = \"/tmp/fredrikb/log.mat\"\n\n# Get data from the logfile\ndata    = orcalog2mat(pathopen, pathsave) # This line is only needed during the first run\ndata    = readmat(pathsave)\nds      = 1 # Downsampling factor\nq       = getData(\"robot_1.*posRawAbs\", data, ds) # Data vectors to retrieve are specified with regex style\nq̇       = getData(\"robot_1.*velFlt\", data, ds)\nτ       = getData(\"robot_1.*trqRaw\", data, ds)\nf       = getData(\"force\", data, ds)\n\n# Convert joint data from ABB order to logical order\nabb2logical!(q)\nabb2logical!(q̇)\nabb2logical!(τ)\n\n# Apply gear ratio transformation\nq = q*dh.GR\'\nq̇ = q̇*dh.GR\'\nτ = τ*inv(dh.GR\')\n\n# Filter velocities to get accelerations\nq̈ = filtfilt(ones(50),[50.],centralDiff(q̇))\n\n# plot(abs([q̇, q̈]))\n\n# Sort out data with low acceleration\nlowAcc  = all(abs.(q̈) .< 3e-4,2)\nq       = q[lowAcc,:]\nq̇       = q̇[lowAcc,:]\nτ       = τ[lowAcc,:]\nf       = f[lowAcc,:]\nN       = size(q,1)\n\n\n# Apply forward kinematics to get end-effector poses\nT  = cat([fkine(q[i,:]) for i = 1:N]..., dims=3)\n\ntrajplot(T) # Plots a trajectory of R4x4 transformation matrices\n\n# Perform the force sensor calibration and plot the errors\nRf,m,offset     = Robotlib.Calibration.calibForce(T,f,0.2205,offset=true)\nerr = hcat([Rf*f[i,1:3] + offset - T[1:3,1:3,i]\'*[0, 0, m*-9.82] for i = 1:N]...)\'\nplot(f[:,1:3],lab=\"Force\")\nplot!(err,l=:dash,lab=\"Error\")\nprintln(\"Error: \", round(rms(err), digits=4))"
},

{
    "location": "#The-module-imports-the-following-files-1",
    "page": "Readme",
    "title": "The module imports the following files",
    "category": "section",
    "text": "include(\"POEutils.jl\")\ninclude(\"DH.jl\")\ninclude(\"kinematics.jl\")\ninclude(\"robotplot.jl\")\ninclude(\"Frames.jl\")\ninclude(\"read_log.jl\")\ninclude(\"csv2mat.jl\")"
},

{
    "location": "#Exported-functions-1",
    "page": "Readme",
    "title": "Exported functions",
    "category": "section",
    "text": "Rt2T, T2R, T2t, skewcoords, twistcoords, skew, skew4, expω, expξ, expξ2, expξ!, logT, logR\nad, adi, trinv, isrot, isse3, Rangle, conformize, DH2twistsPOE, DH2twistsLPOE, dh2Tn\ntoOrthoNormal!, toOrthoNormal, rpy2R, Quaternion, xyθ\nfkinePOE, fkineLPOE, ikinePOE, dh2Tn, jacobianPOE, jacobianPOEikine, jacobian, get_kinematic_functions\nplot_traj, plot_traj3, plot_traj_sub, plot3smart, plotsub\nDH, DH2400, DHYuMi, DH7600, DHtest, abb2logical!, logical2abb!, abb2logical, logical2abb\ncsv2mat, orcalog2mat, getData, readmatThe module includes a submodule, Frames, which is aimed at replacing the Nikon K600 software. It supports creation of frames, simple projections, fitting of planes, lines etc. and has a number of plotting options. It must be separately imported with using Robotlib.FramesThe module includes a submodule, Calibration, which includes a number of calibration routines. It must be separately imported with using Robotlib.Calibration"
},

{
    "location": "#Kinematics-1",
    "page": "Readme",
    "title": "Kinematics",
    "category": "section",
    "text": "The library has functions for calculation of forward kinematics, inverse kinematics and jacobians. Several versions of all kinematics functions are provided; calculations can be made using either the DH-convention or the (local) product of exponentials formulation. To support a new robot, create an object of the type DH, or provide a matrix with POE-style link twists, for use with the kinematic functions."
},

{
    "location": "#Usage-2",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "dh = DH7600() # ABB Irb 7600\nxi = DH2twistsPOE(dh)\nT  = fkinePOE(xi, q)or alternativelydh = DH7600()\nJn, J0, T, Ti, trans = jacobian(q, dh)many other options exits, check kinematics.jl"
},

{
    "location": "#Frames-1",
    "page": "Readme",
    "title": "Frames",
    "category": "section",
    "text": "This module is aimed at assisting with the creation of frames for tracking using optical tracking systems. It supports projection of points and lines onto planes, creating frames from features and has some plotting functionality."
},

{
    "location": "#Usage-3",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This is an example of how data can be loaded from files and how different geometrical objects can be fitted to data, projected onto other objects etc.using Frames\nimport MAT\nfunction setupframes(path)\n	path = Pkg.dir(\"Robotlib\",\"src\",\"applications\",\"frames/\")\n\n	# Add frame names to the dictionary\n	add_frame_name!(\"SEAM\",\"Weld seam frame\")\n	add_frame_name!(\"TAB\",\"Table frame\")\n\n	# Read matrices from file\n	T_RB_Tm = MAT.matread(path*\"T_RB_T.mat\")[\"T_RB_T\"]\n	T_TF_TCPm = MAT.matread(path*\"T_TF_TCP.mat\")[\"T_TF_TCP\"]\n	T_T_TABm = MAT.matread(path*\"T_T_Table.mat\")[\"T_T_Table\"]\n\n	# Create frames from matrices\n	T_RB_T = Frame(T_RB_Tm,\"RB\",\"T\")\n	T_S_D = Frame(T_TF_TCPm,\"S\",\"D\")\n	T_T_TAB = Frame(T_T_TABm,\"T\",\"TAB\")\n\n	# Read point clouds generated by nikon software from file\n	cloud_seam = readcloud(path*\"CloudSeam_edge.txt\")\n	plane_seam = readplane(path*\"PlaneSeam_edge.txt\")\n\n	# Project points onto plane and fit a line\n	cloud_seam_projected = project(plane_seam,cloud_seam)\n	line_seam = fitline(cloud_seam_projected)\n\n	# Create a frame from the measured features\n	T_T_SEAM = framefromfeatures((\"z+\",line_seam),(\"y-\",plane_seam),cloud_seam_projected[1],\"SEAM\")\n	T_RB_SEAM = T_RB_T*T_T_SEAM\n	T_RB_TAB = T_RB_T*T_T_TAB\n	T_TAB_SEAM = inv(T_T_TAB)*T_T_SEAM\n\n\n	cloud_seam_RB = T_RB_T*cloud_seam\n	cloud_seam_projected_RB = T_RB_T*cloud_seam_projected\n	plane_seam_RB = T_RB_T*plane_seam\n	line_seam_RB = T_RB_T*line_seam\n\n	# Plot results\n	plot(Frame(I4,\"RB\",\"U\"), 200)\n	plot!(cloud_seam_RB, c=:blue)\n	plot!(cloud_seam_projected_RB, c=:red)\n	plot!(line_seam_RB, 500, label=\"Line seam\")\n	plot!(plane_seam_RB, 200, label=\"Plane seam\")\n	plot!(T_RB_SEAM, 200, label=\"T_RB_SEAM\")\n	plot!(T_RB_TAB, 200, label=\"T_RB_TAB\")\n\n	xlabel!(\"x\")\n	ylabel!(\"y\")\n	# zlabel!(\"z\")\n\n    # Write frames to file\n    MAT.matwrite(path*\"T_TAB_SEAM.mat\",[\"T_TAB_SEAM\" => T_TAB_SEAM.T])\n    MAT.matwrite(path*\"T_T_SEAM.mat\",[\"T_T_SEAM\" => T_T_SEAM.T])\n    MAT.matwrite(path*\"T_RB_TAB.mat\",[\"T_RB_TAB\" => T_RB_TAB.T])\n    println(\"Wrote T_TAB_SEAM, T_T_SEAM, T_RB_TAB to files in $path\")\nend"
},

{
    "location": "#Citing-1",
    "page": "Readme",
    "title": "Citing",
    "category": "section",
    "text": "This software package was developed for the following thesis@thesis{bagge2017,\n  author       = {Bagge Carlson, Fredrik},\n  month        = {03},\n  note         = {Licentiate Thesis},\n  publisher    = {Department of Automatic Control, Lund University},\n  title        = {Modeling and Estimation Topics in Robotics},\n  year         = {2017},\n}The algorithm calibNAXP was presented in@inproceedings{bagge2015calibration,\n  title        = {Six {DOF} eye-to-hand calibration from {2D} measurements using planar constraints},\n  author       = {Bagge Carlson, Fredrik and Johansson, Rolf and Robertsson, Anders},\n  booktitle    = {International Conference on Intelligent Robots and Systems (IROS)},\n  year         = {2015},\n  organization = {IEEE}\n}The friction model frictionRBFN was presented in@inproceedings{bagge2015friction,\n  title        = {Modeling and identification of position and temperature dependent friction phenomena without temperature sensing},\n  author       = {Bagge Carlson, Fredrik and Robertsson, Anders and Johansson, Rolf},\n  booktitle    = {International Conference on Intelligent Robots and Systems (IROS)},\n  year         = {2015},\n  organization = {IEEE}\n}"
},

{
    "location": "autodocs/#Robotlib.Ai",
    "page": "Docstrings",
    "title": "Robotlib.Ai",
    "category": "function",
    "text": "This is a helper method for calibPOE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.DH2twistsLPOE",
    "page": "Docstrings",
    "title": "Robotlib.DH2twistsLPOE",
    "category": "function",
    "text": "Takes the DH-parameters or a set of nominal transformation matrices and outputs the joint twists in local link frames\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.DH2twistsPOE",
    "page": "Docstrings",
    "title": "Robotlib.DH2twistsPOE",
    "category": "function",
    "text": "Takes the DH-parameters or a set of nominal transformation matrices and outputs the joint twists in base frame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.Frames",
    "page": "Docstrings",
    "title": "Robotlib.Frames",
    "category": "module",
    "text": "Frames is a module to work with coordinate systems. The central type is the Frame with fields R and t for the rotation matrix and translation vector respectively. Other inportnat important types include Point, Points, Plane and Line\n\nAll geometric object types have a reference frame associated with them. When a geometric object is created, the reference frame is specified, e.g., T_RB_T = Frame(T_RB_Tm,\"RB\",\"T\") is a transformation between frame RB and frame T. When transofrmations are made, the reference frames are updated automatically, e.g., T_RB_SEAM = T_RB_T*T_T_SEAM\n\nUsage:\n\nusing Robotlib.Frames\npath = Pkg.dir(\"Robotlib\",\"src\",\"applications\",\"frames/\")\nadd_frame_name!(\"SEAM\",\"Weld seam frame\")\nadd_frame_name!(\"TAB\",\"Table frame\")\n\nT_RB_Tm    = MAT.matread(path*\"T_RB_T.mat\")[\"T_RB_T\"]\nT_TF_TCPm  = MAT.matread(path*\"T_TF_TCP.mat\")[\"T_TF_TCP\"]\nT_T_TABm   = MAT.matread(path*\"T_T_Table.mat\")[\"T_T_Table\"]\n\nT_RB_T     = Frame(T_RB_Tm,\"RB\",\"T\")\nT_S_D      = Frame(T_TF_TCPm,\"S\",\"D\")\nT_T_TAB    = Frame(T_T_TABm,\"T\",\"TAB\")\n\ncloud_seam = readcloud(path*\"CloudSeam_edge.txt\")\nplane_seam = readplane(path*\"PlaneSeam_edge.txt\")\ncloud_seam_projected = project(plane_seam,cloud_seam)\nline_seam  = fitline(cloud_seam_projected)\n\nT_T_SEAM      = framefromfeatures((\"z+\",line_seam),(\"y-\",plane_seam),cloud_seam_projected[1],\"SEAM\")\nT_RB_SEAM     = T_RB_T*T_T_SEAM\nT_RB_TAB      = T_RB_T*T_T_TAB\nT_TAB_SEAM    = inv(T_T_TAB)*T_T_SEAM\n\ncloud_seam_RB = T_RB_T*cloud_seam\ncloud_seam_projected_RB = T_RB_T*cloud_seam_projected\nplane_seam_RB = T_RB_T*plane_seam\nline_seam_RB  = T_RB_T*line_seam\n\nusing Plots\ndefault(markersize=1)\nplot(Frame(I4,\"RB\",\"U\"),200, label=true)\nplot!(cloud_seam_RB)\nplot!(cloud_seam_projected_RB)\nplot!(line_seam_RB,500,label=\"Line seam\")\nplot!(plane_seam_RB,200,label=\"Plane seam\")\nplot!(T_RB_SEAM,200, label=true)\nplot!(T_RB_TAB,200, label=true)\n\nxlabel!(\"x\")\nylabel!(\"y\")\nzlabel!(\"z\")\n\nMAT.matwrite(path*\"T_TAB_SEAM.mat\",[\"T_TAB_SEAM\" => T_TAB_SEAM.T])\nMAT.matwrite(path*\"T_T_SEAM.mat\",[\"T_T_SEAM\" => T_T_SEAM.T])\nMAT.matwrite(path*\"T_RB_TAB.mat\",[\"T_RB_TAB\" => T_RB_TAB.T])\nprintln(\"Wrote T_TAB_SEAM, T_T_SEAM, T_RB_TAB to files in $path\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.R2rpy",
    "page": "Docstrings",
    "title": "Robotlib.R2rpy",
    "category": "function",
    "text": "R2rpy(R; conv=\"xyz\", deg = false)\n\nIf conv is not xyz, it will be zyx\n\nreturns a vector ∈ R3 or a matrix ∈ R3×N depending on the dimension of the input\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.Rangle",
    "page": "Docstrings",
    "title": "Robotlib.Rangle",
    "category": "function",
    "text": "Rangle(R1,R2 = I3,deg = false) calculates the angle between two rotation matrices\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.Robotlib",
    "page": "Docstrings",
    "title": "Robotlib.Robotlib",
    "category": "module",
    "text": "This is a library of functions to help out in the Robotlab at LTH The module imports the following files\n\ninclude(\"utils.jl\")\n\ninclude(\"DH.jl\")\n\ninclude(\"kinematics.jl\")\n\ninclude(\"robotplot.jl\")\n\ninclude(\"Frames.jl\")\n\ninclude(\"read_log.jl\")\n\ninclude(\"csv2mat.jl\")\n\ninclude(\"posDepFric.jl\")\n\nThe module includes a submodule, Frames, which is aimed at replacing the Nikon K600 software. It supports creation of frames, simple projections, fitting of planes, lines etc. and has a number of plotting options. It must be separately imported with using Robotlib.Frames\n\nThe module includes a submodule, Calibration, which includes a number of calibration routines. It must be separately imported with using Robotlib.Calibration\n\nUsage: fkine, ikine, jacobian = getkinematicfunctions(\"yumi\") data = orcalog2mat(pathopen, pathsave) q = getData(\"robot_0.*posRawAbs\", data, 1, removeNaN = false)\n\nFor YuMi, joint angles q must be converted to logical order using e.g. abb2logical!(q) You must also consider the base transform of YuMi\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.ad",
    "page": "Docstrings",
    "title": "Robotlib.ad",
    "category": "function",
    "text": "Calculates the adjoint of a transformation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.adi",
    "page": "Docstrings",
    "title": "Robotlib.adi",
    "category": "function",
    "text": "Calculates the adjoint of the inverse of a tranformation matrix T, which is also the inverse of the adjoint of T\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.dh2Tn!",
    "page": "Docstrings",
    "title": "Robotlib.dh2Tn!",
    "category": "function",
    "text": "Computes a set of local transformation matrices given the DH-parameters of a robot. Can be sent an optional joint-angle vector and a tool\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.expξ",
    "page": "Docstrings",
    "title": "Robotlib.expξ",
    "category": "function",
    "text": "expξ(xi,q=1.0) calculates the exponential map of a twist with twistcoordinates xi and joint angle q If no angle is given, q=1 is assumed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.expξ2!",
    "page": "Docstrings",
    "title": "Robotlib.expξ2!",
    "category": "function",
    "text": "Optimized routine to modify T in place\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.fkineLPOE",
    "page": "Docstrings",
    "title": "Robotlib.fkineLPOE",
    "category": "function",
    "text": "fkineLPOE(Tn0,xi,q) Forward kinematics using LPOE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.fkinePOE",
    "page": "Docstrings",
    "title": "Robotlib.fkinePOE",
    "category": "function",
    "text": "fkinePOE(xi0,q) Forward kinematics using POE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.frictionRBFN",
    "page": "Docstrings",
    "title": "Robotlib.frictionRBFN",
    "category": "function",
    "text": "A = frictionRBFN(q, q̇, centers; sigma=zeros(2), normalized=true)\n\nReturns the regressor matrix for position dependent friction estimation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.get_kinematic_functions",
    "page": "Docstrings",
    "title": "Robotlib.get_kinematic_functions",
    "category": "function",
    "text": "Run this function with a string representing the robot you want the kinematic functions for, e.g. get_kinematic_functions(\"YuMi\") Currently supports YuMi and ABB IRB7600 returns fkine(q), ikine(T,q0), jacobian(q) TODO: implement YuMileft, Yumiright Tbase*ikinePOE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.ikinePOE",
    "page": "Docstrings",
    "title": "Robotlib.ikinePOE",
    "category": "function",
    "text": "function ikinePOE(xi,T,q0; maxiter=100, λ = 1e0, tol = 1e-12, verbose = false, adaptive = true) Iterative inverse kinematics λsets the start value of the regularizing parameter (kind of like inverse step size). Bigger value means slower but more robust convergence, if adaptive is set to true, λ is adapted to speed up convergence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.jacobian",
    "page": "Docstrings",
    "title": "Robotlib.jacobian",
    "category": "function",
    "text": "Jn, J0, T, Ti, Tn = jacobian(qin, DH::DH, tool=I4) Calculates the jacobian in base (J0) and tool frame (Jn) as well as the forward kinematics (T), given the joint angles and the DH-parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.jacobianPOE",
    "page": "Docstrings",
    "title": "Robotlib.jacobianPOE",
    "category": "function",
    "text": "jacobianPOE(q, xi) Returns The jacobian in 1) the base frame, 2) the tool frame. It can most likely be rewritten to be faster.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.jacobianPOEikine",
    "page": "Docstrings",
    "title": "Robotlib.jacobianPOEikine",
    "category": "function",
    "text": "jacobianPOE(q, xi, T) Returns The jacobian in 1) the base frame, 2) the tool frame and returns the FK. It must be handed a precomputed end transform Tend = expξ2(xi[:,end-1],1)*expξ2(xi[:,end],1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.logR",
    "page": "Docstrings",
    "title": "Robotlib.logR",
    "category": "function",
    "text": "Calculates the matrix logarithm of a rotation matrix ∈ SO(3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.logT",
    "page": "Docstrings",
    "title": "Robotlib.logT",
    "category": "function",
    "text": "Calculates the matrix logarithm of a transformation matrix ∈ SE(3) Does not seem to be very reliable for very small rotations, use logm instead, which is a bit slower.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.plot3smart",
    "page": "Docstrings",
    "title": "Robotlib.plot3smart",
    "category": "function",
    "text": "plot3smart(x,args...) Makes a 3d plot of a matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.rpy2R",
    "page": "Docstrings",
    "title": "Robotlib.rpy2R",
    "category": "function",
    "text": "rpy2R(r,p,y,conv=\"zyx\") For rpy from ABB robot, use zyx For rpy from Nikon, use xyz\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.toOrthoNormal!",
    "page": "Docstrings",
    "title": "Robotlib.toOrthoNormal!",
    "category": "function",
    "text": "Takes a matrix R ∈ SO(3) or T ∈ SE(3) and makes the rotational part orthonormal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.trajplot",
    "page": "Docstrings",
    "title": "Robotlib.trajplot",
    "category": "function",
    "text": "trajplot(T,args...) Plots a trajectory of T-matrices in a single plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.trajplot3",
    "page": "Docstrings",
    "title": "Robotlib.trajplot3",
    "category": "function",
    "text": "plot_traj3(T, ls=\".\", plotFrame = 0) Plots a trajectory of T-matrices in a 3D plot, with otional frames drawn of length plotFrame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.trinv",
    "page": "Docstrings",
    "title": "Robotlib.trinv",
    "category": "function",
    "text": "Inverts a transformation matrix ∈ SE(3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.xii",
    "page": "Docstrings",
    "title": "Robotlib.xii",
    "category": "function",
    "text": "This is the other helper method for calibPOE\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Robotlib.xyθ",
    "page": "Docstrings",
    "title": "Robotlib.xyθ",
    "category": "function",
    "text": "Calculate the (signed) angle around z axis for two rotation (transformation) matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Robotlib.AiRobotlib.CalibrationRobotlib.DHRobotlib.DH2400Robotlib.DH2twistsLPOERobotlib.DH2twistsPOERobotlib.DH7600Robotlib.DHYuMiRobotlib.DHtestRobotlib.FramesRobotlib.I3Robotlib.I4Robotlib.Plot3SmartRobotlib.QuaternionRobotlib.R2rpyRobotlib.RangleRobotlib.RobotlibRobotlib.Rt2TRobotlib.T2RRobotlib.T2tRobotlib.TrajPlotRobotlib.TrajPlot3Robotlib.abb2logicalRobotlib.abb2logical!Robotlib.adRobotlib.adiRobotlib.basisParametersNdRobotlib.centralDiffRobotlib.centraldiffRobotlib.conformizeRobotlib.csv2matRobotlib.dh2TnRobotlib.dh2Tn!Robotlib.dirRobotlib.evalRobotlib.expξRobotlib.expξ!Robotlib.expξ2Robotlib.expξ2!Robotlib.expωRobotlib.fkineLPOERobotlib.fkinePOERobotlib.frictionRBFNRobotlib.getCentersRobotlib.getDataRobotlib.get_kinematic_functionsRobotlib.ikinePOERobotlib.includeRobotlib.isrotRobotlib.isse3Robotlib.jacobianRobotlib.jacobianPOERobotlib.jacobianPOEbRobotlib.jacobianPOEikineRobotlib.logRRobotlib.logTRobotlib.logical2abbRobotlib.logical2abb!Robotlib.mnorm_pdfRobotlib.orcalog2matRobotlib.plot3smartRobotlib.plot3smart!Robotlib.prodadRobotlib.readmatRobotlib.rotxRobotlib.rotyRobotlib.rotzRobotlib.rpy2RRobotlib.skewRobotlib.skew!Robotlib.skew4Robotlib.skewcoordsRobotlib.smartDiffRobotlib.testJacobianRobotlib.testikineRobotlib.toOrthoNormalRobotlib.toOrthoNormal!Robotlib.traj2quatRobotlib.trajplotRobotlib.trajplot!Robotlib.trajplot3Robotlib.trajplot3!Robotlib.trinvRobotlib.twistcoordsRobotlib.xiiRobotlib.xyθ"
},

]}
