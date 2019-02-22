var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FEniCS.jl-1",
    "page": "Readme",
    "title": "FEniCS.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)FEniCS.jl is a wrapper for the FEniCS library for finite element discretizations of PDEs. This wrapper includes three parts:Installation and direct access to FEniCS via a Conda installation. Alternatively one may use their current FEniCS installation.\nA low-level development API and provides some functionality to make directly dealing with the library a little bit easier, but still requires knowledge of FEniCS itself. Interfaces have been provided for the main functions and their attributes, and instructions to add further ones can be found here.\nA high-level API for usage with DifferentialEquations which has not been implemented yet.Various gists/jupyter notebooks have been created to provide a brief overview of the overall functionality, and of any differences between the pythonic FEniCS and the julian wrapper. DifferentialEquations.jl ecosystem. Paraview can also be used to visualize various results just like in FEniCS (see below)."
},

{
    "location": "#Installation-Instructions-1",
    "page": "Readme",
    "title": "Installation Instructions",
    "category": "section",
    "text": "To get the wrapper on your system,providing a FEniCS installation exists, follow the below steps:Add PyCall with the correct python environment corresponding to FEniCS. Then simply add FEniCS.jl using Pkg.add(\"FEniCS\")\nAlternatively, one can install Docker and then run the following command  docker run -ti ysimillides/fenics-julia-docker and once inside, \'julia\' can be accessed by callingjuliaOnce inside the julia environment, simply add FEniCS with Pkg.add(\"FEniCS\"). All other dependencies are handled by the docker image.Note: Any suggestions/improvements/comments etc are always welcomed and can be made either on GitHub or via the gitter channel above. This wrapper was originally started via the Google Summer of Code program along with the help of Chris Rackauckas and Bart Janssens. This was continued via GSoC \'18 along with the help of Chris Rackauckas and Timo Betcke."
},

{
    "location": "#Tutorial-1",
    "page": "Readme",
    "title": "Tutorial",
    "category": "section",
    "text": "Below is a small demonstration of how a user would use our code to solve the Poisson equation with Dirichlet conditions. This directly mirrors one of the tutorials FEniCS provides using FEniCS\nmesh = UnitSquareMesh(8,8) \nV = FunctionSpace(mesh,\"P\",1)\nu_D = Expression(\"1+x[0]*x[0]+2*x[1]*x[1]\", degree=2)\nu = TrialFunction(V)\nbc1 = DirichletBC(V,u_D, \"on_boundary\")\nv = TestFunction(V)\nf = Constant(-6.0)\na = dot(grad(u),grad(v))*dx\nL = f*v*dx\nU = FEniCS.Function(V)\nlvsolve(a,L,U,bc1) #linear variational solver\nerrornorm(u_D, U, norm=\"L2\")\nget_array(L) #this returns an array for the stiffness matrix\nget_array(U) #this returns an array for the solution values\nvtkfile = File(\"poisson/solution.pvd\")\nvtkfile << U.pyobject #exports the solution to a vtkfileWe can also plot the solution (this relies on FEniCS backend for plotting) or import it from our file into Paraview:FEniCS.Plot(U)\nFEniCS.Plot(mesh)\n(Image: alt text)(Image: alt text)"
},

]}
