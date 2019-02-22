var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MultiJuMP-1",
    "page": "Readme",
    "title": "MultiJuMP",
    "category": "section",
    "text": "(Image: Build Status) (Image: DOI)MultiJuMP enables the user to easily run multiobjective optimisation problems and generate Pareto fronts. The code is built as an extension of JuMP. We have implemented three ways to trace out the Pareto front:Normal Boundary Intersection (solve(m, method = NBI()))\nThis method is applicable only for nonlinear optimisation\nWeighted sums (solve(m, method = WeightedSum()))\nConstraint methods (solve(m, method = EpsilonCons()))\nThis method only works for biobjective optimisation as of nowDisclaimer: MultiJuMP is not developed or maintained by the JuMP developers."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In Julia, call Pkg.add(\"MultiJuMP\") to install MultiJuMP."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Have a look at the tests and examples/ directory for different use cases, including tri-objective Pareto fronts.MultiJuMP supports linear problems using the linear=true keyword when calling multi_model(linear=true). Currently, only the EpsilonCons() and WeightedSum() methods are supported for linear problems.using MultiJuMP, JuMP\nusing Clp: ClpSolver\n\nconst mmodel = multi_model(solver = ClpSolver(), linear = true)\nconst y = @variable(mmodel, 0 <= y <= 10.0)\nconst z = @variable(mmodel, 0 <= z <= 10.0)\n@constraint(mmodel, y + z <= 15.0)\n\n# objectives\nconst exp_obj1 = @expression(mmodel, -y +0.05 * z)\nconst exp_obj2 = @expression(mmodel, 0.05 * y - z)\nconst obj1 = SingleObjective(exp_obj1)\nconst obj2 = SingleObjective(exp_obj2)\n\n# setting objectives in the data\nconst multim = get_multidata(mmodel)\nmultim.objectives = [obj1, obj2]\n\nsolve(mmodel, method = WeightedSum())\n\n# Get the Utopia and Nadir points\nutopiapoint = getutopia(multim)\nnadirpoint = getnadir(multim)Plotting  with Plots.jl is supported via recipes:using Plots: plot, title!\npltlin = plot(multim)\ntitle!(pltlin, \"Extrema of the Pareto front\")\n\n# Show Utopia and Nadir points\n# (This is probably a hacky way to do this)\nscatter!(pltlin,\n    [utopiapoint[1], nadirpoint[1]], [utopiapoint[2], nadirpoint[2]],\n    label=\"Utopia/Nadir\")(Image: Linear pareto front)As a non-linear usage example, we implement the test from Das and Dennis, 1998: Normal-boundary intersection: A new method for generating the Pareto surface in nonlinear multicriteria optimization problems:using MultiJuMP, JuMP\nusing Ipopt\n\nm = multi_model(solver = IpoptSolver())\n@variable(m, x[i=1:5])\n@NLexpression(m, f1, sum(x[i]^2 for i=1:5))\n@NLexpression(m, f2, 3x[1]+2x[2]-x[3]/3+0.01*(x[4]-x[5])^3)\n@NLconstraint(m, x[1]+2x[2]-x[3]-0.5x[4]+x[5]==2)\n@NLconstraint(m, 4x[1]-2x[2]+0.8x[3]+0.6x[4]+0.5x[5]^2 == 0)\n@NLconstraint(m, sum(x[i]^2 for i=1:5) <= 10)\n\niv1 = [0.3, 0.5, -0.26, -0.13, 0.28] # Initial guess\nobj1 = SingleObjective(f1, sense = :Min,\n                       iv = Dict{Symbol,Any}(:x => iv1))\nobj2 = SingleObjective(f2, sense = :Min)\n\nmd = get_multidata(m)\nmd.objectives = [obj1, obj2]\nmd.pointsperdim = 20\nsolve(m, method = NBI(false)) # or method = WeightedSum() or method = EpsilonCons()\n\n# Get the Utopia and Nadir points\nutopiapoint = getutopia(md)\nnadirpoint = getnadir(md)\n\nusing Plots\npltnbi = plot(md)(Image: NBI Pareto front example)"
},

]}
