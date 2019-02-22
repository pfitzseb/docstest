var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BoltzmannMachinesPlots.jl-1",
    "page": "Readme",
    "title": "BoltzmannMachinesPlots.jl",
    "category": "section",
    "text": "(Image: Build Status) <!–(Image: Coverage Status)–>This is the plotting package accompanying the package BoltzmannMachines.jl.The plotting functionality is based on the Julia package Gadfly."
},

{
    "location": "autodocs/#BoltzmannMachinesPlots.BoltzmannMachinesPlots",
    "page": "Docstrings",
    "title": "BoltzmannMachinesPlots.BoltzmannMachinesPlots",
    "category": "module",
    "text": "Contains all plotting functions for displaying information collected in module BoltzmannMachines. Most important function is plotevaluation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachinesPlots.plotestimatedprob",
    "page": "Docstrings",
    "title": "BoltzmannMachinesPlots.plotestimatedprob",
    "category": "function",
    "text": "Plots the information about the estimated lower bound of the log probability that has been gathered while training a BMs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachinesPlots.plotevaluation",
    "page": "Docstrings",
    "title": "BoltzmannMachinesPlots.plotevaluation",
    "category": "function",
    "text": "plotevaluation(monitor; ...)\nplotevaluation(monitor, evaluationkey; ...)\n\nPlots a curve that shows the values of the evaluation contained in the monitor and specified by the evaluationkey over the course of the training epochs. If no evaluationkey is specified, the evaluation type of the first monitor element is used.\n\nOptional keyword argument sdrange: For evaluations with keys BoltzmannMachines.monitorloglikelihood and BoltzmannMachines.monitorlogproblowerbound, there is additional information about the standard deviation of the estimator. With the parameter sdrange, it is possible to display this information as a ribbon around the curve. The ribbon indicates the area around the curve that contains the values that deviate at maximum sdrange times the standard deviation from the estimator. Default value for sdrange is 2.0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachinesPlots.scatterhidden",
    "page": "Docstrings",
    "title": "BoltzmannMachinesPlots.scatterhidden",
    "category": "function",
    "text": "scatterhidden(bm, x; ...)\nscatterhidden(h; ...)\n\nCreates a scatter plot of the logarithmized activation potential of hidden nodes, similar to a PCA plot. The activation is either induced by the dataset x in the Boltzmann machine bm or it is directly specified as matrix h.\n\nOptional keyword arguments:\n\nhiddennodes: Tuple of integers, default (1,2), selecting the first two nodes of the (last) hidden layer.\nlabels: a vector containing string labels for each of the data points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BoltzmannMachinesPlots.BMsBoltzmannMachinesPlots.BoltzmannMachinesPlotsBoltzmannMachinesPlots.checkdataBoltzmannMachinesPlots.crossvalidationcurveBoltzmannMachinesPlots.evalBoltzmannMachinesPlots.extractaisdataBoltzmannMachinesPlots.extractevaluationdataBoltzmannMachinesPlots.getvalueBoltzmannMachinesPlots.includeBoltzmannMachinesPlots.plotcurvebundlesBoltzmannMachinesPlots.plotestimatedprobBoltzmannMachinesPlots.plotevaluationBoltzmannMachinesPlots.plottitledictBoltzmannMachinesPlots.scatterBoltzmannMachinesPlots.scatterhidden"
},

]}
