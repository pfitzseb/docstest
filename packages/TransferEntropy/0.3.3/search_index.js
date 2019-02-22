var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TransferEntropy.jl-1",
    "page": "Readme",
    "title": "TransferEntropy.jl",
    "category": "section",
    "text": "(Image: Build Status)Julia package for computing transfer entropy (TE), conditional mutual information (CMI) or any other information theoretic functional.This package provides essential algorithms for the CausalityTools.jl package, which provides methods to detect causal relationship from time series, and tools for computating the transfer operator and invariant measures from time series."
},

{
    "location": "#Transfer-entropy-estimators-1",
    "page": "Readme",
    "title": "Transfer entropy estimators",
    "category": "section",
    "text": "Currently, the following three estimators are implemented and tested. For details onEstimator (and aliases) Accepts Details Reference\ntransferentropy_transferoperator_grid (tetogrid) AbstractArray, AbstractEmbedding A new estimator that computes tranfer entropy from an invariant measure of an approximation to the transfer operator. The transfer operator is approximated using the  transferoperator_grid estimator from PerronFrobenius.jl Diego et al. (2018)\ntransferentropy_visitfreq (tefreq) AbstractArray, AbstractEmbedding A classic, naive binning-based transfer entropy estimator. Obtains the probability distribution from the frequencies at which the orbit visits the different regions of the reconstructed attractor Diego et al. (2018)\ntransferentropy_kraskov (tekraskov, tekNN) AbstractArray, AbstractEmbedding A k Nearest Neigbours (kNN) transfer entropy estimator. Computes the transfer entropy as the sum of two mutual information (MI) terms, which are computed using the Kraskov MI estimator Diego et al. (2018), Kraskov et al. (2004)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Run the following lines in the Julia console to install the package.using Pkg\nPkg.add(\"TransferEntropy\")"
},

]}
