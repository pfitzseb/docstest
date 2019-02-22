var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Cliffords-1",
    "page": "Readme",
    "title": "Cliffords",
    "category": "section",
    "text": "(Image: Build Status)This library allows for efficient calculation of Clifford circuits by tracking the evolution of X and Z generators (the so-called tableau representation). No special effort has been made to strictly minimize the number of bits needed to store each Clifford. Rather, the goal was clarity. One unique feature compared to other such utilities is that we also efficiently track the inverse operations. This is useful to, e.g., compute \'undo\' gates in randomized benchmarking sequences."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using Cliffords\n\n# single-qubit Pauli operators\nX * Y => iZ\n\nPauli([0 1; 1 0]) => +X\n\n# multi-qubit Pauli operators\nkron(X,X) * kron(Z,Z) => -YY\n\n# Cliffords\nClifford([1 0 0 0;\n          0 1 0 0;\n          0 0 0 1;\n          0 0 1 0]) == CNOT => true\n\n# Clifford * Pauli\nH * X => Z\nH * Z => X\n\n# Clifford * Clifford\nCNOT21 = expand(CNOT, [2,1], 2)\nCNOT * CNOT21 * CNOT == SWAP => true"
},

]}
