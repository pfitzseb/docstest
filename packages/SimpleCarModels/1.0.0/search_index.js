var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SimpleCarModels.jl-1",
    "page": "Readme",
    "title": "SimpleCarModels.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package extends the interfaces defined in DifferentialDynamicsModels.jl to simple car dynamics of the form <p align=\"center\"><img src=\"https://latex.codecogs.com/gif.latex?%5Cinline%20%7B%5Cbegin%7Bbmatrix%7D%20%5Cdot%20x%20%5C%5C%20%5Cdot%20y%20%5C%5C%20%5Cdot%5Ctheta%5Cend%7Bbmatrix%7D%7D%20%3D%20%5Cbegin%7Bbmatrix%7D%20v%20%5Ccos%28%5Ctheta%29%20%5C%5C%20v%20%5Csin%28%5Ctheta%29%20%5C%5C%20v%20%5Ckappa%5Cend%7Bbmatrix%7D.\" alt=\"simple car dynamics\"/></p>The state consists of position (Image: (x,y)) and heading (Image: θ) in the plane. The control inputs are speed (Image: v) and curvature (Image: κ), or some derivative of each of them (e.g., curvature rate (Image: κ̇) as input ensures trajectories with continuous curvature) with the state and dynamics equation correspondingly augmented. This package exports the type SimpleCarDynamics{Dv,Dκ} <: DifferentialDynamics to represent these dynamics, where Dv and Dκ denote the number of integrators in the speed and curvature control inputs respectively.In addition to providing these dynamics and a few methods for exact propagation, this package also contains pure Julia implementations of minimum arc length Dubins and Reeds-Shepp steering for a simple car with minimum turning radius r. These implementations aim to be non-allocating and highly performant (e.g., for use in robotic motion planning where computing millions of steering connections in a few seconds may be necessary), and may be accessed through the SteeringBVP interface defined in DifferentialDynamicsModels.jl:DubinsSteering(; v=1, r=1) returns a DubinsSteering instance which may be called with two SE2States as input, or any pair of StaticVectors of length 3.\nReedsSheppSteering(; v=1, r=1) returns a ReedsSheppSteering instance which may be called as above.or through specialized functions:dubins_length(q0, qf; r=1) and dubins_waypoints(q0, qf, dt_or_N; v=1, r=1) give the length and a Vector of states along the optimal Dubins steering curve respectively. dt_or_N may be an AbstractFloat or an Int, corresponding to a desired time spacing dt (with car speed v) or a desired total number of equally spaced waypoints N.\nreedsshepp_length(q0, qf; r=1) and reedsshepp_waypoints(q0, qf, dt_or_N; v=1, r=1) give the length and a Vector of states along the optimal Reeds-Shepp steering curve respectively."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SimpleCarModels.AccelerationCurvRateControlSimpleCarModels.AccelerationCurvatureControlSimpleCarModels.CC_steering_constantsSimpleCarModels.CC_turn_controlSimpleCarModels.CC_turn_lengthSimpleCarModels.DSimpleCarModels.DubinsCCConstraintsSimpleCarModels.DubinsCCSteeringSimpleCarModels.DubinsConstraintsSimpleCarModels.DubinsSteeringSimpleCarModels.LpRmLmSimpleCarModels.LpRmLpSimpleCarModels.LpRmSmLmSimpleCarModels.LpRmSmLmRpSimpleCarModels.LpRmSmRmSimpleCarModels.LpRmuLmuRpSimpleCarModels.LpRpuLmuRmSimpleCarModels.LpSpLpSimpleCarModels.LpSpRpSimpleCarModels.MSimpleCarModels.OmegaSimpleCarModels.POSTSimpleCarModels.POST_BSimpleCarModels.POST_B_RSimpleCarModels.POST_B_R_TSimpleCarModels.POST_B_TSimpleCarModels.POST_RSimpleCarModels.POST_R_TSimpleCarModels.POST_TSimpleCarModels.RSimpleCarModels.ReedsSheppConstraintsSimpleCarModels.ReedsSheppSteeringSimpleCarModels.SE2StateSimpleCarModels.SE2vStateSimpleCarModels.SE2vκStateSimpleCarModels.SE2κStateSimpleCarModels.SimpleCarDynamicsSimpleCarModels.SimpleCarModelsSimpleCarModels.TauSimpleCarModels.VelocityCurvRateControlSimpleCarModels.VelocityCurvRateStepSimpleCarModels.VelocityCurvatureControlSimpleCarModels.VelocityCurvatureStepSimpleCarModels.backwardsSimpleCarModels.bi_elementarySimpleCarModels.bi_elementary_waypointsSimpleCarModels.carsegment2stepcontrolSimpleCarModels.dubinsSimpleCarModels.dubinsCCSimpleCarModels.dubinsCC_lengthSimpleCarModels.dubinsCC_waypointsSimpleCarModels.dubins_lengthSimpleCarModels.dubins_waypointsSimpleCarModels.elementarySimpleCarModels.elementary_waypointsSimpleCarModels.evalSimpleCarModels.fresnelCSimpleCarModels.fresnelC0SimpleCarModels.fresnelSSimpleCarModels.fresnelS0SimpleCarModels.includeSimpleCarModels.reedssheppSimpleCarModels.reedsshepp_lengthSimpleCarModels.reedsshepp_waypointsSimpleCarModels.reflectSimpleCarModels.reverseSimpleCarModels.scaleradiusSimpleCarModels.scalespeedSimpleCarModels.timeflip"
},

]}
