var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Copyright for portions of project CombineML.jl are held by Samuel Jenkins, 2014 as part of project Orchestra.jl. All other copyright for project CombineML.jl are held by Paulito Palmes, 2016.The CombineML.jl package is licensed under the MIT \"Expat\" License:"
},

{
    "location": "#CombineML-1",
    "page": "Readme",
    "title": "CombineML",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/CombineML-jl/Lobby)Julia 1.0 on Linux: (Image: Build Status) (Image: Coverage Status)CombineML is a heterogeneous ensemble learning package for the Julia programming language. It is driven by a uniform machine learner API designed for learner composition."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "See the notebook for demo: MetaModeling.ipnybWe will cover how to predict on a dataset using CombineML."
},

{
    "location": "#Obtain-Data-1",
    "page": "Readme",
    "title": "Obtain Data",
    "category": "section",
    "text": "A tabular dataset will be used to obtain our features and labels. This will be split it into a training and test set using holdout method.import RDatasets\nusing CombineML.Util\nusing CombineML.Transformers\n\n# Obtain features and labels\ndataset = RDatasets.dataset(\"datasets\", \"iris\")\nfeatures = Array(dataset[:, 1:(end-1)])\nlabels = Array(dataset[:, end])\n\n# Split into training and test sets\n(train_ind, test_ind) = holdout(size(features, 1), 0.3)"
},

{
    "location": "#Create-a-Learner-1",
    "page": "Readme",
    "title": "Create a Learner",
    "category": "section",
    "text": "A transformer processes features in some form. Coincidentally, a learner is a subtype of transformer.A transformer can be created by instantiating it, taking an options dictionary as an optional argument. All transformers, including learners are called in the same way.# Learner with default settings\nlearner = PrunedTree()\n\n# Learner with some of the default settings overriden\nlearner = PrunedTree(Dict(\n  :impl_options => Dict(\n    :purity_threshold => 0.5\n  )\n))\n\n# All learners are called in the same way.\nlearner = StackEnsemble(Dict(\n  :learners => [\n    PrunedTree(), \n    RandomForest(),\n    DecisionStumpAdaboost()\n  ], \n  :stacker => RandomForest()\n))"
},

{
    "location": "#Create-a-Pipeline-1",
    "page": "Readme",
    "title": "Create a Pipeline",
    "category": "section",
    "text": "Normally we may require the use of data pre-processing before the features are passed to the learner.We shall use a pipeline transformer to chain many transformers in sequence.In this case we shall one hot encode categorical features, impute NA values and numerically standardize before we call the learner.# Create pipeline\npipeline = Pipeline(Dict(\n  :transformers => [\n    OneHotEncoder(), # Encodes nominal features into numeric\n    Imputer(), # Imputes NA values\n    StandardScaler(), # Standardizes features \n    PCA(),\n    learner # Predicts labels on features\n  ]\n))"
},

{
    "location": "#Train-and-Predict-1",
    "page": "Readme",
    "title": "Train and Predict",
    "category": "section",
    "text": "Training is done via the fit! function, predicton via transform!. All transformers, provide these two functions. They are always called the same way.# Train\nfit!(pipeline, features[train_ind, :], labels[train_ind])\n\n# Predict\npredictions = transform!(pipeline, features[test_ind, :])"
},

{
    "location": "#Assess-1",
    "page": "Readme",
    "title": "Assess",
    "category": "section",
    "text": "Finally we assess how well our learner performed.# Assess predictions\nresult = score(:accuracy, labels[test_ind], predictions)"
},

{
    "location": "#Available-Transformers-1",
    "page": "Readme",
    "title": "Available Transformers",
    "category": "section",
    "text": "Outlined are all the transformers currently available via CombineML."
},

{
    "location": "#CombineML-2",
    "page": "Readme",
    "title": "CombineML",
    "category": "section",
    "text": ""
},

{
    "location": "#Baseline-(CombineML.jl-Learner)-1",
    "page": "Readme",
    "title": "Baseline (CombineML.jl Learner)",
    "category": "section",
    "text": "Baseline learner that by default assigns the most frequent label.learner = Baseline(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  # Label assignment strategy.\n  # Function that takes a label vector and returns the required output.\n  :strategy => StatsBase.mode\n))"
},

{
    "location": "#Identity-(CombineML.jl-Transformer)-1",
    "page": "Readme",
    "title": "Identity (CombineML.jl Transformer)",
    "category": "section",
    "text": "Identity transformer passes the features as is.transformer = Identity()"
},

{
    "location": "#VoteEnsemble-(CombineML.jl-Learner)-1",
    "page": "Readme",
    "title": "VoteEnsemble (CombineML.jl Learner)",
    "category": "section",
    "text": "Set of machine learners that majority vote to decide prediction.learner = VoteEnsemble(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  # Learners in voting committee.\n  :learners => [PrunedTree(), DecisionStumpAdaboost(), RandomForest()]\n))"
},

{
    "location": "#StackEnsemble-(CombineML.jl-Learner)-1",
    "page": "Readme",
    "title": "StackEnsemble (CombineML.jl Learner)",
    "category": "section",
    "text": "Ensemble where a \'stack\' learner learns on a set of learners\' predictions.learner = StackEnsemble(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  # Set of learners that produce feature space for stacker.\n  :learners => [PrunedTree(), DecisionStumpAdaboost(), RandomForest()],\n  # Machine learner that trains on set of learners\' outputs.\n  :stacker => RandomForest(),\n  # Proportion of training set left to train stacker itself.\n  :stacker_training_proportion => 0.3,\n  # Provide original features on top of learner outputs to stacker.\n  :keep_original_features => false\n))"
},

{
    "location": "#BestLearner-(CombineML.jl-Learner)-1",
    "page": "Readme",
    "title": "BestLearner (CombineML.jl Learner)",
    "category": "section",
    "text": "Selects best learner out of set.  Will perform a grid search on learners if options grid is provided.learner = BestLearner(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  # Function to return partitions of instance indices.\n  :partition_generator => (features, labels) -> kfold(size(features, 1), 5),\n  # Function that selects the best learner by index.\n  # Arg learner_partition_scores is a (learner, partition) score matrix.\n  :selection_function => (learner_partition_scores) -> findmax(mean(learner_partition_scores, 2))[2],      \n  # Score type returned by score() using respective output.\n  :score_type => Real,\n  # Candidate learners.\n  :learners => [PrunedTree(), DecisionStumpAdaboost(), RandomForest()],\n  # Options grid for learners, to search through by BestLearner.\n  # Format is [learner_1_options, learner_2_options, ...]\n  # where learner_options is same as a learner\'s options but\n  # with a list of values instead of scalar.\n  :learner_options_grid => nothing\n))"
},

{
    "location": "#OneHotEncoder-(CombineML.jl-Transformer)-1",
    "page": "Readme",
    "title": "OneHotEncoder (CombineML.jl Transformer)",
    "category": "section",
    "text": "Transforms nominal features into one-hot form  and coerces the instance matrix to be of element type Float64.transformer = OneHotEncoder(Dict(\n  # Nominal columns\n  :nominal_columns => nothing,\n  # Nominal column values map. Key is column index, value is list of\n  # possible values for that column.\n  :nominal_column_values_map => nothing\n))"
},

{
    "location": "#Imputer-(CombineML.jl-Transformer)-1",
    "page": "Readme",
    "title": "Imputer (CombineML.jl Transformer)",
    "category": "section",
    "text": "Imputes NaN values from Float64 features.transformer = Imputer(Dict(\n  # Imputation strategy.\n  # Statistic that takes a vector such as mean or median.\n  :strategy => mean\n))"
},

{
    "location": "#Pipeline-(CombineML.jl-Transformer)-1",
    "page": "Readme",
    "title": "Pipeline (CombineML.jl Transformer)",
    "category": "section",
    "text": "Chains multiple transformers in sequence.transformer = Pipeline(Dict(\n  # Transformers as list to chain in sequence.\n  :transformers => [OneHotEncoder(), Imputer()],\n  # Transformer options as list applied to same index transformer.\n  :transformer_options => nothing\n))"
},

{
    "location": "#Wrapper-(CombineML.jl-Transformer)-1",
    "page": "Readme",
    "title": "Wrapper (CombineML.jl Transformer)",
    "category": "section",
    "text": "Wraps around an CombineML transformer.transformer = Wrapper(Dict(\n  # Transformer to call.\n  :transformer => OneHotEncoder(),\n  # Transformer options.\n  :transformer_options => nothing\n))"
},

{
    "location": "#Julia-1",
    "page": "Readme",
    "title": "Julia",
    "category": "section",
    "text": ""
},

{
    "location": "#PrunedTree-(DecisionTree.jl-Learner)-1",
    "page": "Readme",
    "title": "PrunedTree (DecisionTree.jl Learner)",
    "category": "section",
    "text": "Pruned CART decision tree.learner = PrunedTree(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  # Options specific to this implementation.\n  :impl_options => Dict(\n    # Merge leaves having >= purity_threshold combined purity.\n    :purity_threshold => 1.0,\n    # Maximum depth of the decision tree (default: no maximum).\n    :max_depth => -1,\n    # Minimum number of samples each leaf needs to have.\n    :min_samples_leaf => 1,\n    # Minimum number of samples in needed for a split.\n    :min_samples_split => 2,\n    # Minimum purity increase needed for a split.\n    :min_purity_increase => 0.0\n  ) \n))"
},

{
    "location": "#RandomForest-(DecisionTree.jl-Learner)-1",
    "page": "Readme",
    "title": "RandomForest (DecisionTree.jl Learner)",
    "category": "section",
    "text": "Random forest (CART).learner = RandomForest(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  # Options specific to this implementation.\n  :impl_options => Dict(\n    # Number of features to train on with trees (default: 0, keep all).\n    # Good values are square root or log2 of total number of features, rounded.\n    :num_subfeatures => 0,\n    # Number of trees in forest.\n    :num_trees => 10,\n    # Proportion of trainingset to be used for trees.\n    :partial_sampling => 0.7,\n    # Maximum depth of each decision tree (default: no maximum).\n    :max_depth => -1\n  )\n))"
},

{
    "location": "#DecisionStumpAdaboost-(DecisionTree.jl-Learner)-1",
    "page": "Readme",
    "title": "DecisionStumpAdaboost (DecisionTree.jl Learner)",
    "category": "section",
    "text": "Adaboosted decision stumps.learner = DecisionStumpAdaboost(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  # Options specific to this implementation.\n  :impl_options => Dict(\n    # Number of boosting iterations.\n    :num_iterations => 7\n  )\n))"
},

{
    "location": "#PCA-(DimensionalityReduction.jl-Transformer)-1",
    "page": "Readme",
    "title": "PCA (DimensionalityReduction.jl Transformer)",
    "category": "section",
    "text": "Principal Component Analysis rotation on features. Features ordered by maximal variance descending.Fails if zero-variance feature exists. Based on MultivariateStats PCAtransformer = PCA(Dict(\n  :pratio => 1.0,\n  :maxoutdim => 5\n))"
},

{
    "location": "#StandardScaler-(MLBase.jl-Transformer)-1",
    "page": "Readme",
    "title": "StandardScaler (MLBase.jl Transformer)",
    "category": "section",
    "text": "Standardizes each feature using (X - mean) / stddev. Will produce NaN if standard deviation is zero.transformer = StandardScaler(Dict(\n  # Center features\n  :center => true,\n  # Scale features\n  :scale => true\n))"
},

{
    "location": "#Python-1",
    "page": "Readme",
    "title": "Python",
    "category": "section",
    "text": "See the scikit-learn API for what options are available per learner."
},

{
    "location": "#SKLLearner-(scikit-learn-0.15-Learner)-1",
    "page": "Readme",
    "title": "SKLLearner (scikit-learn 0.15 Learner)",
    "category": "section",
    "text": "Wrapper for scikit-learn that provides access to most learners.Options for the specific scikit-learn learner is to be passed in options[:impl_options] dictionary.Available learners:\"AdaBoostClassifier\"\n\"BaggingClassifier\"\n\"ExtraTreesClassifier\"\n\"GradientBoostingClassifier\"\n\"RandomForestClassifier\"\n\"LDA\"\n\"LogisticRegression\"\n\"PassiveAggressiveClassifier\"\n\"RidgeClassifier\"\n\"RidgeClassifierCV\"\n\"SGDClassifier\"\n\"KNeighborsClassifier\"\n\"RadiusNeighborsClassifier\"\n\"NearestCentroid\"\n\"QDA\"\n\"SVC\"\n\"LinearSVC\"\n\"NuSVC\"\n\"DecisionTreeClassifier\"learner = SKLLearner(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  :learner => \"LinearSVC\",\n  # Options specific to this implementation.\n  :impl_options => Dict()\n))"
},

{
    "location": "#R-1",
    "page": "Readme",
    "title": "R",
    "category": "section",
    "text": "Python library \'rpy2\' is required to interface with R.R library \'caret\' offers more than 100 learners.  See here for more details."
},

{
    "location": "#CRTLearner-(caret-6.0-Learner)-1",
    "page": "Readme",
    "title": "CRTLearner (caret 6.0 Learner)",
    "category": "section",
    "text": "CARET wrapper that provides access to all learners.Options for the specific CARET learner is to be passed in options[:impl_options] dictionary.learner = CRTLearner(Dict(\n  # Output to train against\n  # (:class).\n  :output => :class,\n  :learner => \"svmLinear\",\n  :impl_options => Dict()\n))"
},

{
    "location": "#Known-Limitations-1",
    "page": "Readme",
    "title": "Known Limitations",
    "category": "section",
    "text": "Learners have only been tested on numeric features. Inconsistencies may result in using nominal features directly without a numeric transformation (i.e. OneHotEncoder)."
},

{
    "location": "#Misc-1",
    "page": "Readme",
    "title": "Misc",
    "category": "section",
    "text": "The links provided below will only work if you are viewing this in the GitHub repository."
},

{
    "location": "#Changes-1",
    "page": "Readme",
    "title": "Changes",
    "category": "section",
    "text": "See CHANGELOG.yml."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "MIT \"Expat\" License. See LICENSE.md."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CombineML.CombineMLCombineML.SystemCombineML.TransformersCombineML.TypesCombineML.UtilCombineML.evalCombineML.include"
},

]}
