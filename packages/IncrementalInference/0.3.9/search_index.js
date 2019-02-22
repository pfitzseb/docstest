var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IncrementalInference.jl-1",
    "page": "Readme",
    "title": "IncrementalInference.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)(Image: IncrementalInference) (Image: IncrementalInference)Optimization routines for incremental non-parametric and parametric solutions based on factor graphs and the Bayes (Junction) tree implemented in the Julia language (and JuliaPro).<p align=\"center\"> <a href=\"https://vimeo.com/190052649\" target=\"_blank\"><img src=\"https://raw.githubusercontent.com/JuliaRobotics/IncrementalInference.jl/master/doc/images/mmfgbt.gif\" alt=\"IMAGE ALT TEXT HERE\" width=\"480\" height=\"320\" /></a> </p>This package furthermore forms a cardinal piece of the Caesar.jl robotics toolkit, including 3D visualization and database interaction, which can serve as a base station for a robotic platform. A standalone Robot Motion Estimate package is also available."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package implements Multi-modal iSAM [1], a descendant of the iSAM2 [3] algorithm. The main algorithm is focused towards hybrid non-parametric and parametric inference over large factor graphs. Inference is performed via the Bayes tree (similar to Junction tree) where non-parametric and parametric solutions are based on belief propagation – also known as the sum-product algorithm.  Immediate benefits such as branch recycling is carried over as well.  Also see related research work here [2].The animation below shows 50% confidence lines of marginal beliefs relating to 6DOF robot poses. The approximate beliefs are being inferred through a process of successive approximation. The black trace shows the initial belief, and red the final output belief estimate. Notice the mode cycling during the process, brought about by information from elsewhere in the graph. This animation illustrates the sum-product (belief propagation) process, during the upward pass on  Bayes tree from a real data.<p align=\"center\"> <img src=\"https://raw.githubusercontent.com/JuliaRobotics/IncrementalInference.jl/master/doc/images/x60mcmc.gif\" alt=\"successive approximation\" width=\"480\"/></img> </p><!– (Image: alt tag) –>Comments, questions and issues welcome."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pre-install the following packages system wide packages[, and easily draw factor graph and Bayes tree]:sudo apt-get install hdf5-tools\nsudo apt-get install graphviz  # optionalInstall the package from inside JuliaPkg.add(\"IncrementalInference\")"
},

{
    "location": "#Basic-example-1",
    "page": "Readme",
    "title": "Basic example",
    "category": "section",
    "text": "This library is built as solver back-end which can be easily modified and extended. Specific emphasis is placed on allowing outside user defined constraint definitions to be used. The current major use case is through RoME.jl which introduces various sensor measurement and motion manifold functions for use in Robot Motion Estimate.A few short examples, such as the multi-modal 4 door robot example, is available in the example folder:examples/RobotfourDoor.jlHere 4 simultaneous modes are considered producing multi-modal posterior beliefs in the continuous domain, final consensus output and ground truth belief are show below.<p align=\"center\"> <img src=\"https://raw.githubusercontent.com/JuliaRobotics/IncrementalInference.jl/master/doc/images/4doors.png\" alt=\"Four door final result\" width=\"640\"/></img> </p>"
},

{
    "location": "#DataBase-interaction-layer-1",
    "page": "Readme",
    "title": "DataBase interaction layer",
    "category": "section",
    "text": "The data layer of the solver can be swapped away from the default Julia based Graphs.jl. For using the solver on a DataBase layer please see Caesar.jl and associated CloudGraphs project."
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "D. Fourie, M. Kaess, J. Leonard"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1]  Fourie, Dehann, et al. \"A Nonparametric Belief Solution to the Bayes Tree\" IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), (2016).[2]  Fourie, Dehann, \"Multi-modal and Inertial Sensor Solutions for Navigation-type Factor Graphs\", Joint Program with Massachusetts Institute of Technology and Woods Hole Oceanographic Institution, Cambridge, MA, USA, August 2017.[3]  Kaess, Michael, et al. \"iSAM2: Incremental smoothing and mapping using the Bayes tree\" The International Journal of Robotics Research (2011): 0278364911430419."
},

]}
