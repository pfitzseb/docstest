var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<div align=\"center\"> <img src=\"https://rawgit.com/QuantumBFS/Yao.jl/master/docs/src/assets/logo.svg\" alt=\"Yao Logo\" width=\"210\"></img> <h1>Yao</h1> </div>(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov) (Image: ) (Image: )Extensible, Efficient Quantum Algorithm Design for Humans."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Yao is an open source framework forquantum algorithm design;\nquantum software 2.0;\nquantum computation education."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered. In Julia v0.6, you can use this command to installjulia> Pkg.add(\"Yao\")In v0.7+/v1.0+, please type ] in the REPL to use the package mode, then type this command. Please notice that we might not be stable on v0.7+ at the moment.pkg> add Yao"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "STABLE\nLATEST"
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "Comparing with state of art quantum simulators, our library is inspired by quantum circuit optimization. Variational quantum optimization algorithms like quantum circuit Born machine (QCBM), quantum approximate optimization algorithm (QAOA), variational quantum eigensolver (VQE) and quantum circuit learning (QCL) et. al. are promising killer apps on a near term quantum computers. These algorithms require the flexibility to tune parameters and have well defined patterns such as \"Arbitrary Rotation Block\" and \"CNOT Entangler\".In Yao, we call these patterns \"blocks\". If we regard every gate or gate pattern as a \"block\", then the framework canbe flexible to dispatch parameters,\ncache matrices of blocks to speed up future runs,\nallow hierarchical design of quantum algorithmsThanks to Julia\'s duck type and multiple dispatch features, user caneasily extend the block system by overloading specific interfaces\nquantum circuit blocks can be dispatched to some special method to improve the performance in specific case (e.g. customized repeat block of H gate)."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Yao is a framework that is about to have the following features:Extensibility\ndefine new operations with a minimum number of methods in principle.\nextend with new operations on different hardware should be easy, (e.g GPUs, near term quantum devices, FPGAs, etc.)\nEfficiency\ncomparing with python, julia have no significant overhead on small scale circuit.\nspecial optimized methods are dispatched to frequently used blocks.\ndouble interfaces \"apply!\" and \"cache server + mat\" allow us to choose freely when to sacrifice memory for faster simulation and when to sacrifice the speed to simulate more qubits.\nEasy to Use\nAs a white-box simulator, rather than using a black box, users will be aware of what their simulation are doing right through the interface.\nHierarchical APIs from low abstraction quantum operators to highly abstract circuit block objects.(Image: ) The whole framework is highly modularized, researchers can extend this framework for different purposes."
},

{
    "location": "#Contribution-1",
    "page": "Readme",
    "title": "Contribution",
    "category": "section",
    "text": "To contribute to this project, please open an issue first to discuss with us in case we may not accept your PR."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This project is an effort of QuantumBFS, an open source organization for quantum science. All the contributors are listed in the contributors."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Yao is released under the Apache 2 license."
},

]}
