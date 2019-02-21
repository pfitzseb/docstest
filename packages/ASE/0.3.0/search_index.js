var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ASE.jl-1",
    "page": "Readme",
    "title": "ASE.jl",
    "category": "section",
    "text": "Julia Bindings for the Atomic Simulation Environment (ASE)(Image: Build Status)"
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "Provides Julia wrappers for a limited subset of ASE\'s functionality, to be used within JuLIP.jl. On top of JuLIP.jl, which is a pure Julia library, ASE.jl also provides an interface to ASE, via PyCall.jl."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "To installPkg.add(\"ASE\")Quick testusing ASE\nat = bulk(\"Cu\", cubic=true) * 2        # generate periodic Cu supercell\ndeleteat!(at, 1)                       # vacancy defect\n@pyimport ase.calculators.emt as emt   # import the EMT model\ncalc = ASECalculator(emt.EMT())        # wrap it into a Julia Object\n@show energy(calc, at)                 # compute the energy\n# -------------------------------------------\n#  or to use more of the JuLIP framework:\n# -------------------------------------------\nset_calculator!(at, calc)\nset_constraint!(at, FixedCell(at))\nminimise!(at)\n@show energy(at)Note that in ASE.jl a bulk cell is generated using bulk(\"Cu\") while in JuLIP.jl it is generated using bulk(:Cu). Conversion between ASE.ASEAtoms and JuLIP.Atoms is viaat1 = bulk(:Si)          # JuLIP.Atoms\nat2 = ASEAtoms(at1)      # ASE.ASEAtoms\nat3 = Atoms(at2)         # JuLIP.Atoms\n@assert at1 == at3"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "better integration with JuLIP, i.e. work with JuLIP.Atoms instead ofASEAtoms, but this will require rewriting the ASECalculators a bitprovide more convenience functions to call ASE functionality"
},

]}
