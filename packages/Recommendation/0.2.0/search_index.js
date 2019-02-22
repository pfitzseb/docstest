var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Recommendation.jl-1",
    "page": "Readme",
    "title": "Recommendation.jl",
    "category": "section",
    "text": "(Image: Recommendation) (Image: Recommendation) (Image: Build Status)Recommendation.jl is a Julia package for building recommender systems. Thanks to independent data accessor and recommender implementations, this package enables you to build recommendation systems on your own data and algorithms.This package supports the following features:Recommendation\nBaseline (non-personalized) recommenders based on:\nMost frequently co-occurred items (CoOccurrence)\nMost popular items (MostPopular)\nPercentage of ratings which are greater than a certain threshold value (ThresholdPercentage)\nGlobal user/item mean rating (UserMean, ItemMean)\nPersonalized recommenders\nItem-based collaborative filtering (ItemKNN)\nUser-based collaborative filtering (UserKNN)\nSingular Value Decomposition (SVD)\nMatrix Factorization (MF)\nContent-based recommendation using TF-IDF scoring (TFIDF)\nEvaluation\n5-fold cross validation\nRating metric\nRoot Mean Squared Error (RMSE)\nMean Absolute Error (MAE)\nRanking metric\nRecall\nPrecision\nMean Average Precision (MAP)\nArea Under the ROC curve (AUC)\nMean Reciprocal Rank (MRR)\nMean Percentile Rank (MPR)\nNormalized Discounted Cumulative Gain (NDCG)For more information, you can refer to my article."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered in METADATA.jl.$ julia\njulia> Pkg.add(\"Recommendation\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This package contains DataAccessor and several fundamental recommendation techniques (e.g., non-personalized MostPopular recommender, CF and MF), and evaluation metrics such as Recall. All of them can be accessible by loading the package as follows:using RecommendationFirst of all, you need to create a data accessor from a matrix:da = DataAccessor(sparse([1 0 0; 4 5 0]))or set of events:const n_user = 5\nconst n_item = 10\n\nevents = [Event(1, 2, 1), Event(3, 2, 1), Event(2, 6, 4)]\n\nda = DataAccessor(events, n_user, n_item)where Event() is a composite type which represents a user-item interaction:type Event\n    user::Int\n    item::Int\n    value::Float64\nendNext, you can pass the data accessor to an arbitrary recommender as:recommender = MostPopular(da)and building a recommendation engine should be easy:build(recommender)Personalized recommenders sometimes require us to specify the hyperparameters:recommender = MF(da, Parameters(:k => 2))\nbuild(recommender, learning_rate=15e-4, max_iter=100)Once a recommendation engine has been built successfully, top-k recommendation for a user u with item candidates candidates is performed as follows:u = 4\nk = 2\ncandidates = [i for i in 1:n_item] # all items\n\nrecommend(recommender, u, k, candidates)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Recommendation.AUCRecommendation.AccuracyMetricRecommendation.CoOccurrenceRecommendation.ContentRecommenderRecommendation.DataAccessorRecommendation.EventRecommendation.ItemKNNRecommendation.ItemMeanRecommendation.MAERecommendation.MAPRecommendation.MFRecommendation.MPRRecommendation.MetricRecommendation.MostPopularRecommendation.NDCGRecommendation.ParametersRecommendation.PrecisionRecommendation.RMSERecommendation.RankingMetricRecommendation.RecallRecommendation.ReciprocalRankRecommendation.RecommendationRecommendation.RecommenderRecommendation.SVDRecommendation.StatesRecommendation.TFIDFRecommendation.ThresholdPercentageRecommendation.UserKNNRecommendation.UserMeanRecommendation.buildRecommendation.check_build_statusRecommendation.count_true_positiveRecommendation.create_matrixRecommendation.cross_validationRecommendation.evalRecommendation.evaluateRecommendation.includeRecommendation.measureRecommendation.predictRecommendation.rankingRecommendation.recommendRecommendation.set_item_attributeRecommendation.set_user_attributeRecommendation.validate_size"
},

]}
