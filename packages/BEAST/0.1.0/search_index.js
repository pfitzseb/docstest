var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BEAST-1",
    "page": "Readme",
    "title": "BEAST",
    "category": "section",
    "text": "Boundary Element Analysis and Simulation Toolkit(Image: Build Status) (Image: Coverage Status) (Image: codecov.io) (Image: Documentation)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package contains common basis functions and assembly routines for the implementation of boundary element methods. Examples are included for the 2D and 3D Helmholtz equations and for the 3D Maxwell equations.Support for the space-time Galerkin based solution of time domain integral equations is in place for the 3D Helmholtz and Maxwell equations."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Installation is done simply by cloning this repo from within Julia (v0.6):Pkg.clone(\"https://github.com/krcools/BEAST.jl\")Prequisite packages will be pulled in automatically. In addition, some functionality requires gmsh to be installed and on the system path."
},

{
    "location": "#Hello-World-1",
    "page": "Readme",
    "title": "Hello World",
    "category": "section",
    "text": "To solve scattering of a time harmonic electromagnetic plane wave by a perfectly conducting sphere:using CompScienceMeshes, BEAST\no, x, y, z = euclidianbasis(3)\n\nΓ = meshsphere(1.0, 0.25)\nRT = raviartthomas(Γ)\n\nκ = 1.0\nt = Maxwell3D.singlelayer(wavenumber=κ)\nE = Maxwell3D.planewave(direction=z, polarization=x, wavenumber=κ)\ne = (n × E) × n\n\n@hilbertspace j\n@hilbertspace k\nefie = @discretise t[k,j]==e[k]  j∈RT k∈RT\n\nu = gmres(efie)"
},

]}
