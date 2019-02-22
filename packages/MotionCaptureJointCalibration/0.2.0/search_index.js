var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MotionCaptureJointCalibration-1",
    "page": "Readme",
    "title": "MotionCaptureJointCalibration",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)MotionCaptureJointCalibration provides functionality for kinematic calibration of robots, given measurements of the positions of motion capture markers attached to the robot\'s links and positions of the robot\'s joints in a number of poses. It does so by solving a nonlinear program (NLP) with (weighted) square error between measured and predicted marker locations as the objective to minimize.MotionCaptureJointCalibration is a small Julia library built on top of JuMP and RigidBodyDynamics.jl. JuMP makes it possible to choose between various NLP solvers. Ipopt appears to perform fairly well for the problems formulated by this package."
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": "October 18, 2017: tagged version 0.0.1.\nAugust 4, 2017: the package is under initial construction."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Features include:handling of occlusions\nhandling of measurements of the body-fixed locations of only a subset of the markers attached to the robot (the unknown marker positions will be solved for, given rough bounds)\nhandling of measurements of only a subset of a robot\'s joint positions (the unknown joint positions will be solved for, given rough bounds)\nproper handling of quaternion-parameterized floating joints (unit norm constraints for quaternions)\nvisualization of calibration results using RigidBodyTreeInspectorCurrently, MotionCaptureJointCalibration can only estimate constant offsets between measured and actual joint positions."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install, simply runPkg.add(\"MotionCaptureJointCalibration\")This will install MotionCaptureJointCalibration and its required dependencies. RigidBodyTreeInspector.jl is an optional dependency and can be used to visualize the calibration results (Pkg.add(\"RigidBodyTreeInspector\")). You\'ll also need an NLP solver that interfaces with JuMP, e.g. Ipopt (Pkg.add(\"Ipopt\"))."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "See the demo notebook for usage."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "A variant of the NLP formulation used in this package is due to Michael Posa."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MotionCaptureJointCalibration.CalibrationProblemMotionCaptureJointCalibration.CalibrationResultMotionCaptureJointCalibration.MotionCaptureJointCalibrationMotionCaptureJointCalibration.Point3DSMotionCaptureJointCalibration.PoseDataMotionCaptureJointCalibration.SyntheticDataGenerationMotionCaptureJointCalibration.TreeJointSegmentedVectorMotionCaptureJointCalibration.__init__MotionCaptureJointCalibration._marker_residualMotionCaptureJointCalibration._∇marker_residual!MotionCaptureJointCalibration.calibration_jointsMotionCaptureJointCalibration.canonicalizeMotionCaptureJointCalibration.canonicalize!MotionCaptureJointCalibration.deconstructMotionCaptureJointCalibration.evalMotionCaptureJointCalibration.free_jointsMotionCaptureJointCalibration.includeMotionCaptureJointCalibration.num_calibration_paramsMotionCaptureJointCalibration.num_markersMotionCaptureJointCalibration.num_posesMotionCaptureJointCalibration.reconstruct!MotionCaptureJointCalibration.solveMotionCaptureJointCalibration.zero_nans"
},

]}
