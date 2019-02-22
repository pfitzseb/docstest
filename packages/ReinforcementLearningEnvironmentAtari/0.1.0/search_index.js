var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ReinforcementLearningEnvironmentAtari-1",
    "page": "Readme",
    "title": "ReinforcementLearningEnvironmentAtari",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Makes the ArcadeLearningEnvironment available as an environment for the Julia Reinforcement Learning package."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ReinforcementLearningEnvironmentAtari\n\n?AtariEnv\nenvironment = AtariEnv(\"breakout\")\npreprocessor = AtariPreprocessor()See also examples."
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentAtari.AtariEnv",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentAtari.AtariEnv",
    "category": "type",
    "text": "AtariEnv\n        ale::Ptr{Nothing}\n    screen::Array{UInt8, 1}\n    getscreen::Function\n    noopmax::Int64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ReinforcementLearningEnvironmentAtari.AtariPreprocessor",
    "page": "Docstrings",
    "title": "ReinforcementLearningEnvironmentAtari.AtariPreprocessor",
    "category": "function",
    "text": "AtariPreprocessor(; gpu = false, croptosquare = false,                     cropfromrow = 34, color = false,                     outdim = (80, croptosquare ? 80 : 105))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ReinforcementLearningEnvironmentAtari.AccumulatingTracesReinforcementLearningEnvironmentAtari.ActorCriticPolicyGradientReinforcementLearningEnvironmentAtari.AllRewardsReinforcementLearningEnvironmentAtari.AtariEnvReinforcementLearningEnvironmentAtari.AtariPreprocessorReinforcementLearningEnvironmentAtari.ConstantNumberEpisodesReinforcementLearningEnvironmentAtari.ConstantNumberStepsReinforcementLearningEnvironmentAtari.CriticReinforcementLearningEnvironmentAtari.DQNReinforcementLearningEnvironmentAtari.DeepActorCriticReinforcementLearningEnvironmentAtari.EpisodeReinforcementLearningEnvironmentAtari.EpisodicReinforceReinforcementLearningEnvironmentAtari.EpsilonGreedyPolicyReinforcementLearningEnvironmentAtari.EvaluateGreedyReinforcementLearningEnvironmentAtari.EvaluationPerEpisodeReinforcementLearningEnvironmentAtari.EvaluationPerTReinforcementLearningEnvironmentAtari.ExpectedSarsaReinforcementLearningEnvironmentAtari.ForcedEpisodeReinforcementLearningEnvironmentAtari.ForcedPolicyReinforcementLearningEnvironmentAtari.ImageCropReinforcementLearningEnvironmentAtari.ImagePreprocessorReinforcementLearningEnvironmentAtari.ImageResizeBilinearReinforcementLearningEnvironmentAtari.ImageResizeNearestNeighbourReinforcementLearningEnvironmentAtari.LinearReinforcementLearningEnvironmentAtari.LinearDecreaseEpsilonReinforcementLearningEnvironmentAtari.MDPLearnerReinforcementLearningEnvironmentAtari.MeanRewardReinforcementLearningEnvironmentAtari.MonteCarloReinforcementLearningEnvironmentAtari.NoBiasCorrectorReinforcementLearningEnvironmentAtari.NoPreprocessorReinforcementLearningEnvironmentAtari.NoTracesReinforcementLearningEnvironmentAtari.PolicyGradientBackwardReinforcementLearningEnvironmentAtari.ProgressReinforcementLearningEnvironmentAtari.QLearningReinforcementLearningEnvironmentAtari.RLSetupReinforcementLearningEnvironmentAtari.RadialBasisFunctionsReinforcementLearningEnvironmentAtari.RandomProjectionReinforcementLearningEnvironmentAtari.RecordAllReinforcementLearningEnvironmentAtari.ReduceEpsilonPerEpisodeReinforcementLearningEnvironmentAtari.ReduceEpsilonPerTReinforcementLearningEnvironmentAtari.ReinforcementLearningReinforcementLearningEnvironmentAtari.ReinforcementLearningEnvironmentAtariReinforcementLearningEnvironmentAtari.ReplacingTracesReinforcementLearningEnvironmentAtari.RewardLowpassFilterBiasCorrectorReinforcementLearningEnvironmentAtari.SarsaReinforcementLearningEnvironmentAtari.SaveLearnerReinforcementLearningEnvironmentAtari.SmallBackupsReinforcementLearningEnvironmentAtari.SoftmaxPolicyReinforcementLearningEnvironmentAtari.SparseRandomProjectionReinforcementLearningEnvironmentAtari.StateAggregatorReinforcementLearningEnvironmentAtari.StepReinforcementLearningEnvironmentAtari.TilingStateAggregatorReinforcementLearningEnvironmentAtari.TimeStepsReinforcementLearningEnvironmentAtari.TotalRewardReinforcementLearningEnvironmentAtari.VisualizeReinforcementLearningEnvironmentAtari.compareReinforcementLearningEnvironmentAtari.evalReinforcementLearningEnvironmentAtari.getvalueReinforcementLearningEnvironmentAtari.getvaluesReinforcementLearningEnvironmentAtari.huberlossReinforcementLearningEnvironmentAtari.imshowcolorReinforcementLearningEnvironmentAtari.imshowgreyReinforcementLearningEnvironmentAtari.includeReinforcementLearningEnvironmentAtari.learn!ReinforcementLearningEnvironmentAtari.plotcomparisonReinforcementLearningEnvironmentAtari.policy_iteration!ReinforcementLearningEnvironmentAtari.run!ReinforcementLearningEnvironmentAtari.togpuReinforcementLearningEnvironmentAtari.value_iteration!"
},

]}
