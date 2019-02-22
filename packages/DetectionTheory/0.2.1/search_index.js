var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DetectionTheory.jl-1",
    "page": "Readme",
    "title": "DetectionTheory.jl",
    "category": "section",
    "text": "(Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Coverage Status)DetectionTheory.jl is a Julia package to compute signal detection theory measures. It includes functions to compute d\' for the following tasks:ABX\nMultiple alternatives forced choice\nOdd-One-Out with 3 response alternatives (also known as oddity, or triangular method)\nSame-Different\nYes-NoMost of the functions have been ported from the psyphy R package.Documentation is available here"
},

{
    "location": "autodocs/#DetectionTheory.dprimeABX",
    "page": "Docstrings",
    "title": "DetectionTheory.dprimeABX",
    "category": "function",
    "text": "Compute d\' for an ABX task from \'hit\' and \'false alarm\' rates.\n\ndprimeABX(H, FA, method)\n\n\nArguments\n\nH::Real: Hit rate.\nFA::Real : False alarm rate.\nmethod::String: \'diff\' for differencing strategy or \'IO\' for independent observations strategy.\n\nReturns\n\ndprime::Real: d\' value\n\nReferences\n\nMacmillan, N. A., & Creelman, C. D. (2004). Detection Theory: A User’s Guide (2nd ed.). London: Lawrence Erlbraum Associates.\n\nExamples\n\n    #independent observations model\n    dp = dprimeABX(0.7, 0.2, \"IO\")\n    #differencing model\n    dp = dprimeABX(0.7, 0.2, \"diff\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DetectionTheory.dprimeMAFC",
    "page": "Docstrings",
    "title": "DetectionTheory.dprimeMAFC",
    "category": "function",
    "text": "Compute d\' corresponding to a certain proportion of correct responses in m-AFC tasks.\n\ndprimeMAFC(pc, m)\n\n\nArguments\n\nPc::Real: Proportion of correct responses.\nm::Integer: Number of alternatives.\n\nReturns\n\ndprime::Real: d\' value\n\nReferences\n\nGreen, D. M., & Swets, J. A. (1988). Signal Detection Theory and Psychophysics. Los Altos, California: Peninsula Publishing.\nGreen, D. M., & Dai, H. P. (1991). Probability of being correct with 1 of M orthogonal signals. Perception & Psychophysics, 49(1), 100–101.\n\nExamples\n\n    dp = dprimeMAFC(0.7, 3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DetectionTheory.dprimeOddity",
    "page": "Docstrings",
    "title": "DetectionTheory.dprimeOddity",
    "category": "function",
    "text": "Compute d\' for an odd-one-out task.\n\ndprimeOddity(pc, method)\n\n\nArguments\n\npc::Real: Proportion of correct responses.\nmethod::String: \'diff\' for differencing strategy or \'IO\' for independent observations strategy.\n\nReturns\n\ndprime::Real: d\' value\n\nReferences\n\nMacmillan, N. A., & Creelman, C. D. (2004). Detection Theory: A User’s Guide (2nd ed.). London: Lawrence Erlbraum Associates.\nVersfeld, N. J., Dai, H., & Green, D. M. (1996). The optimum decision rules for the oddity task. Perception & Psychophysics, 58(1), 10–21.\n\nExamples\n\n    dp = dprimeOddity(0.7, \"diff\")\n    dp = dprimeOddity(0.7, \"IO\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DetectionTheory.dprimeSD",
    "page": "Docstrings",
    "title": "DetectionTheory.dprimeSD",
    "category": "function",
    "text": "Compute d\' for one interval same/different task from \'hit\' and \'false alarm\' rates.\n\ndprimeSD(H, FA, method)\n\n\nArguments\n\nH::Real: Hit rate.\nFA::Real : False alarm rate.\nmethod::String: \'diff\' for differencing strategy or \'IO\' for independent observations strategy.\n\nReturns\n\ndprime::Real: d\' value\n\nReferences\n\nMacmillan, N. A., & Creelman, C. D. (2004). Detection Theory: A User’s Guide (2nd ed.). London: Lawrence Erlbraum Associates.\nKingdom, F. A. A., & Prins, N. (2010). Psychophysics: A Practical Introduction. Academic Press.\n\nExamples\n\n    #independent observations model\n    dp = dprimeSD(0.7, 0.2, \"IO\")\n    #differencing model\n    dp = dprimeSD(0.7, 0.2, \"diff\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DetectionTheory.dprimeYesNo",
    "page": "Docstrings",
    "title": "DetectionTheory.dprimeYesNo",
    "category": "function",
    "text": "Compute d\' for one interval \"yes/no\" type tasks from hits and false alarm rates.\n\ndprimeYesNo(H, FA)\n\n\nArguments\n\nH::Real: Hit rate.\nFA::Real: False alarms rate.\n\nReturns\n\ndprime::Real: d\' value\n\nReferences\n\nGreen, D. M., & Swets, J. A. (1988). Signal Detection Theory and Psychophysics. Los Altos, California: Peninsula Publishing.\nMacmillan, N. A., & Creelman, C. D. (2004). Detection Theory: A User’s Guide (2nd ed.). London: Lawrence Erlbraum Associates.\n\nExamples\n\n    dp = dprimeYesNo(0.7, 0.2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DetectionTheory.DetectionTheoryDetectionTheory.dprimeABXDetectionTheory.dprimeMAFCDetectionTheory.dprimeOddityDetectionTheory.dprimeSDDetectionTheory.dprimeYesNoDetectionTheory.evalDetectionTheory.include"
},

]}
