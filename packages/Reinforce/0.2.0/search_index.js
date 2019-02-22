var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Reinforce-1",
    "page": "Readme",
    "title": "Reinforce",
    "category": "section",
    "text": "(Image: Build Status) (Image: Gitter)Reinforce.jl is an interface for Reinforcement Learning.  It is intended to connect modular environments, policies, and solvers with a simple interface.(Image: ) (Image: )Packages which build on Reinforce:AtariAlgos: Environment which wraps Atari games using ArcadeLearningEnvironment\nOpenAIGym: Wrapper for OpenAI\'s python package: gym"
},

{
    "location": "#Environment-Interface-1",
    "page": "Readme",
    "title": "Environment Interface",
    "category": "section",
    "text": "New environments are created by subtyping AbstractEnvironment and implementing a few methods:reset!(env) -> env\nactions(env, s) -> A\nstep!(env, s, a) -> (r, s′)\nfinished(env, s′) -> Booland optional overrides:state(env) -> s\nreward(env) -> rwhich map to env.state and env.reward respectively when unset.ismdp(env) -> BoolAn environment may be fully observable (MDP) or partially observable (POMDP). In the case of a partially observable environment, the state s is really an observation o.  To maintain consistency, we call everything a state, and assume that an environment is free to maintain additional (unobserved) internal state.  The ismdp query returns true when the environment is MDP, and false otherwise.maxsteps(env) -> IntThe terminating condition of an episode is control by maxsteps() || finished(). It\'s default value is 0, indicates unlimited.An minimal example for testing purpose is test/foo.jl.TODO: more details and examples"
},

{
    "location": "#Policy-Interface-1",
    "page": "Readme",
    "title": "Policy Interface",
    "category": "section",
    "text": "Agents/policies are created by subtyping AbstractPolicy and implementing action. The built-in random policy is a short example:struct RandomPolicy <: AbstractPolicy end\naction(π::RandomPolicy, r, s, A) = rand(A)Where A is the action space. The action method maps the last reward and current state to the next chosen action: (r, s) -> a.reset!(π::AbstractPolicy) -> π"
},

{
    "location": "#Episode-Iterator-1",
    "page": "Readme",
    "title": "Episode Iterator",
    "category": "section",
    "text": "Iterate through episodes using the Episode iterator. A 4-tuple (s,a,r,s′) is returned from each step of the episode:ep = Episode(env, π)\nfor (s, a, r, s′) in ep\n    # do some custom processing of the sars-tuple\nend\nR = ep.total_reward\nT = ep.niterThere is also a convenience method run_episode. The following is an equivalent method to the last example:R = run_episode(env, π) do\n    # anything you want... this section is called after each step\nend"
},

{
    "location": "#Author:-[Tom-Breloff](https://github.com/tbreloff)-1",
    "page": "Readme",
    "title": "Author: Tom Breloff",
    "category": "section",
    "text": ""
},

{
    "location": "autodocs/#Reinforce.MultiArmedBanditEnv.MultiArmedBandit",
    "page": "Docstrings",
    "title": "Reinforce.MultiArmedBanditEnv.MultiArmedBandit",
    "category": "type",
    "text": "The multi-armed bandit environment.\n\nMultiArmedBandit(k, n = 100; σ = 1)\n\nk is the number of available arms. The reward distribution for each arms is a Normal distribution centered at the range of [-1, 1] and the standard deviation is 1.\nn is the max steps for each episode.\nσ controls the the standard deviation for all Normal distribution.\nMultiArmedBandit(x::Vector{<:Distribution}...)\n\nIn case that you want to other distributions as the reward distribution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.StateVector",
    "page": "Docstrings",
    "title": "Reinforce.StateVector",
    "category": "type",
    "text": "A StateVector holds both the functions which will populate the state, and the most recent state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.action",
    "page": "Docstrings",
    "title": "Reinforce.action",
    "category": "function",
    "text": "a = action(policy, r, s, A)\n\nTake in the last reward r, current state s, and set of valid actions A = actions(env, s), then return the next action a.\n\nNote that a policy could do a \'sarsa-style\' update simply by saving the last state and action (s,a).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.actions",
    "page": "Docstrings",
    "title": "Reinforce.actions",
    "category": "function",
    "text": "A = actions(env, s)\n\nReturn a list/set/description of valid actions from state s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.ismdp",
    "page": "Docstrings",
    "title": "Reinforce.ismdp",
    "category": "function",
    "text": "ismdp(env)::Bool\n\nAn environment may be fully observable (MDP) or partially observable (POMDP). In the case of a partially observable environment, the state s is really an observation o. To maintain consistency, we call everything a state, and assume that an environment is free to maintain additional (unobserved) internal state.\n\nThe ismdp query returns true when the environment is MDP, and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.maxsteps",
    "page": "Docstrings",
    "title": "Reinforce.maxsteps",
    "category": "function",
    "text": "maxsteps(env)::Int\n\nReturn the max steps in single episode. Default is 0 (unlimited).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.reset!",
    "page": "Docstrings",
    "title": "Reinforce.reset!",
    "category": "function",
    "text": "reset!(env) -> env\n\nReset an environment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.reward",
    "page": "Docstrings",
    "title": "Reinforce.reward",
    "category": "function",
    "text": "r = reward(env)\n\nReturn the current reward of the environment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.run_episode",
    "page": "Docstrings",
    "title": "Reinforce.run_episode",
    "category": "function",
    "text": "run_episode(f, env, policy)\nrun_episode(env, policy) do (s, a, r, s′)\n  # render or something else\nend\n\nHelper function for running an episode, and return the total reward gained in this episode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.state",
    "page": "Docstrings",
    "title": "Reinforce.state",
    "category": "function",
    "text": "s = state(env)\n\nReturn the current state of the environment.\n\n\n\n\n\nretreive the most recently calculated state\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.state!",
    "page": "Docstrings",
    "title": "Reinforce.state!",
    "category": "function",
    "text": "update the state, then return it\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Reinforce.step!",
    "page": "Docstrings",
    "title": "Reinforce.step!",
    "category": "function",
    "text": "r, s′ = step!(env, s, a)\n\nMove the simulation forward, collecting a reward and getting the next state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Reinforce.AbstractBatchIteratorReinforce.AbstractBatchViewReinforce.AbstractDataIteratorReinforce.AbstractEnvironmentReinforce.AbstractHistogramReinforce.AbstractObsIteratorReinforce.AbstractObsViewReinforce.AbstractPolicyReinforce.AbstractSetReinforce.AbstractStateReinforce.AbstractWeightsReinforce.AnalyticWeightsReinforce.BatchIteratorReinforce.CartPoleReinforce.CartPoleV0Reinforce.CartPoleV1Reinforce.CoefTableReinforce.ConvergenceExceptionReinforce.CostReinforce.CrossEntropyMethodReinforce.DataIteratorReinforce.DataViewReinforce.DiscreteSetReinforce.DistanceLossReinforce.ECDFReinforce.EpisodeReinforce.EpisodesReinforce.EpisodicActorCriticReinforce.FrequencyWeightsReinforce.HistogramReinforce.HistoryReinforce.IntervalSetReinforce.KeyboardActionReinforce.KeyboardActionSetReinforce.L1distReinforce.L2distReinforce.LearnBaseReinforce.LearnableReinforce.LinfdistReinforce.LossReinforce.MarginLossReinforce.MinimizableReinforce.MountainCarEnvReinforce.MouseActionReinforce.MouseActionSetReinforce.MultiArmedBanditReinforce.MultiArmedBanditEnvReinforce.ObsDimReinforce.ObsIteratorReinforce.OnlineActorCriticReinforce.OnlineGAEReinforce.PenaltyReinforce.PendulumReinforce.ProbabilityWeightsReinforce.RandomPolicyReinforce.RegressionModelReinforce.ReinforceReinforce.StateVectorReinforce.StatisticalModelReinforce.StatsBaseReinforce.StochasticTransformationReinforce.SupervisedLossReinforce.TransformationReinforce.TupleSetReinforce.UnsupervisedLossReinforce.WeightsReinforce._doneReinforce._start!Reinforce.actionReinforce.actionsReinforce.addcounts!Reinforce.addgrad!Reinforce.adjr2Reinforce.adjr²Reinforce.aicReinforce.aiccReinforce.angle_normalizeReinforce.autocorReinforce.autocor!Reinforce.autocovReinforce.autocov!Reinforce.aweightsReinforce.bicReinforce.coefReinforce.coefnamesReinforce.coeftableReinforce.competerankReinforce.confintReinforce.cor2covReinforce.corkendallReinforce.corspearmanReinforce.counteqReinforce.countmapReinforce.countneReinforce.countsReinforce.cov2corReinforce.crosscorReinforce.crosscor!Reinforce.crosscovReinforce.crosscov!Reinforce.crossentropyReinforce.datasubsetReinforce.denserankReinforce.derivReinforce.deriv!Reinforce.deriv2Reinforce.describeReinforce.devianceReinforce.dofReinforce.dof_residualReinforce.ecdfReinforce.entropyReinforce.evalReinforce.findatReinforce.finishedReinforce.fitReinforce.fit!Reinforce.fittedReinforce.force_magReinforce.fweightsReinforce.genmeanReinforce.genvarReinforce.geomeanReinforce.getobsReinforce.getobs!Reinforce.gkldivReinforce.gradReinforce.grad!Reinforce.gravityReinforce.harmmeanReinforce.histReinforce.includeReinforce.indexmapReinforce.indicatormatReinforce.informationmatrixReinforce.inputdomainReinforce.inverse_rleReinforce.iqrReinforce.isclasscalibratedReinforce.isclipableReinforce.isconvexReinforce.isdifferentiableReinforce.isdistancebasedReinforce.isfisherconsReinforce.isfittedReinforce.islinearReinforce.islipschitzcontReinforce.islipschitzcont_derivReinforce.islocallylipschitzcontReinforce.ismarginbasedReinforce.ismdpReinforce.isminimizableReinforce.isnemitskiReinforce.isstrictlyconvexReinforce.isstronglyconvexReinforce.issymmetricReinforce.istwicedifferentiableReinforce.isunivfisherconsReinforce.kldivergenceReinforce.kurtosisReinforce.learnReinforce.learn!Reinforce.length_stateReinforce.levelsmapReinforce.leverageReinforce.loglikelihoodReinforce.madReinforce.mad!Reinforce.mass_cartReinforce.mass_poleReinforce.mass_pole_lengthReinforce.max_speedReinforce.max_torqueReinforce.maxadReinforce.maxstepsReinforce.mean_and_covReinforce.mean_and_stdReinforce.mean_and_varReinforce.meanadReinforce.meanderivReinforce.meanresponseReinforce.meanvalueReinforce.middleReinforce.midpointsReinforce.modeReinforce.model_responseReinforce.modelmatrixReinforce.modesReinforce.momentReinforce.msdReinforce.mssReinforce.nobsReinforce.norepeatsReinforce.nquantileReinforce.nulldevianceReinforce.nullloglikelihoodReinforce.obs_dimReinforce.ordinalrankReinforce.pacfReinforce.pacf!Reinforce.paramsReinforce.params!Reinforce.partialcorReinforce.percentileReinforce.pole_lengthReinforce.predictReinforce.predict!Reinforce.proportionmapReinforce.proportionsReinforce.proxReinforce.prox!Reinforce.psnrReinforce.pweightsReinforce.r2Reinforce.renyientropyReinforce.reset!Reinforce.residualsReinforce.responseReinforce.rewardReinforce.rleReinforce.rmsdReinforce.rssReinforce.run_episodeReinforce.r²Reinforce.sampleReinforce.sample!Reinforce.samplepairReinforce.scaledReinforce.scattermatReinforce.scoreReinforce.semReinforce.skewnessReinforce.spanReinforce.sqL2distReinforce.stateReinforce.state!Reinforce.stderrorReinforce.step!Reinforce.sumderivReinforce.summarystatsReinforce.sumvalueReinforce.targetdomainReinforce.targetsReinforce.tiedrankReinforce.total_massReinforce.totalvarReinforce.transformReinforce.transform!Reinforce.trimReinforce.trim!Reinforce.trimvarReinforce.updateReinforce.update!Reinforce.valueReinforce.value!Reinforce.value_derivReinforce.value_deriv!Reinforce.value_gradReinforce.value_grad!Reinforce.variationReinforce.vcovReinforce.weightsReinforce.winsorReinforce.winsor!Reinforce.wmeanReinforce.wmean!Reinforce.wmedianReinforce.wquantileReinforce.wsampleReinforce.wsample!Reinforce.wsumReinforce.wsum!Reinforce.x_thresholdReinforce.zscoreReinforce.zscore!Reinforce.θ_thresholdReinforce.τ"
},

]}
