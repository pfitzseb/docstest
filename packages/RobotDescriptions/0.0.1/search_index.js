var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RobotDescriptions-1",
    "page": "Readme",
    "title": "RobotDescriptions",
    "category": "section",
    "text": "(Image: Build Status)This small package provides URDF and meshes for robots, as well as a convenience function for creating a RigidBodyDynamics.Mechanism."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "(v1.0) pkg> add https://github.com/phelipe/RobotDescriptions.jl"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Get a RigidBodyDynamics.Mechanism of a robot. julia> robot =  getmechanism(\"kukalwr\")Get a MechanismGeometries.URDF.URDFVisuals of a robot.julia> visual = getvisual(\"kukalwr\")Get a RigidBodyDynamics.Mechanism and MechanismGeometries.URDF.URDFVisuals of a robot.julia> robot, visual = getrobot(\"kukalwr\")"
},

{
    "location": "#Robots-1",
    "page": "Readme",
    "title": "Robots",
    "category": "section",
    "text": "Robot name\nKUKA LWR kukalwr\nPUMA 560 puma560\nDENSO VS -060 denso060"
},

{
    "location": "autodocs/#RobotDescriptions.getmechanism",
    "page": "Docstrings",
    "title": "RobotDescriptions.getmechanism",
    "category": "function",
    "text": "Return a RigidBodyDynamics.Mechanism of a robot \n\nExamples\n\njulia> using RobotDescriptions\njulia> mechanism = getmechanism(\"kukalwr\");\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobotDescriptions.getrobot",
    "page": "Docstrings",
    "title": "RobotDescriptions.getrobot",
    "category": "function",
    "text": "Return a RigidBodyDynamics.Mechanism and MechanismGeometries.URDF.URDFVisuals of a robot \n\nExamples\n\njulia> using RobotDescriptions\njulia> mechanism, visual = getrobot(\"kukalwr\");\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobotDescriptions.getvisual",
    "page": "Docstrings",
    "title": "RobotDescriptions.getvisual",
    "category": "function",
    "text": "Return a MechanismGeometries.URDF.URDFVisuals of a robot \n\nExamples\n\njulia> using RobotDescriptions\njulia> visual = getvisual(\"kukalwr\");\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RobotDescriptions.RobotDescriptionsRobotDescriptions.evalRobotDescriptions.getmechanismRobotDescriptions.getrobotRobotDescriptions.getvisualRobotDescriptions.includeRobotDescriptions.meshepathRobotDescriptions.robotsRobotDescriptions.urdfRobotDescriptions.urdfpath"
},

]}
