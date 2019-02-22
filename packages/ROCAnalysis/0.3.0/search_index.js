var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ROCAnalysis.jl-1",
    "page": "Readme",
    "title": "ROCAnalysis.jl",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Pkg.add(\"ROCAnalysis\")"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Receiver Operating Characteristic Analysis functions for evaluation probabilistic binary classifiers.   Allows efficient plotting of ROC curves, and many more things. Please note there is an alternative implementation under a similar name, and support for ROC analysis also exists in MLBase. Our implementation is more geared towards:large amounts of data, with efficient ROC statistics calculation\nDecision Cost Function analysis\nDetection Error Trade-off (DET) analysis\nROC convex hull computation, analysis and EER-interpretation\nOptimal Likelihood Ratio computationThe development roadmap is largely based on the functionality in a similar R package ROC. "
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "An annotated jupyter notebook of the code below can be found here.using ROCAnalysis\n## Produce some well-calibrated log-likelihood-ratio scores for target and non-target class:\ntar =  2 + 2randn(1000)\nnon = -2 + 2randn(100000)\n## quick estimate of equal error rate, should be close to pnorm(-1) = 0.5 + 0.5erf(-1/√2)\neer(tar, non) \n## compute full ROC statistics\nr = roc(tar, non)\n## accurate computation of the equal error rate, using the convex hull\neerch(r)\n## roc plot, we plot errors (false negatives against false positives) rather than hits vs. false alarms.\nusing Winston ## or perhaps another plotting package\nplot(r)\n## The \"Detection Error Tradeoff\" plot, this should give a more/less straight line\ndetplot(r)\n## compute the Area Under the ROC, should be close to 0.078\nauc(r)\n## define a decision cost function by its parameter p_tar=0.01, Cfa=1, Cmiss=10 (NIST SRE 2008 setting)\nd = DCF(0.01, 1, 10)\n## `actual costs\' using a threshold of scores at -plo(d) (minus prior log odds)\nplo(d)\ndcf(tar, non, d=d)\n## Or use a different threshold, e.g., zero\ndcf(tar, non, d=d, thres=0)\n## `minimal costs\' using an optimal threshold\nmindcf(r, d=d)\n## define an array of DCFs, and compute the decision costs for these, using a threshold at -plo\nd = DCF([0.001, 0.01, 0.1, 0.5, 0.9, 0.99, 0.999], 1, 1)\ndcf(tar, non, d=d)\n## same, but normalized to costs of decisions based on the prior alone\ndcf(tar, non, d=d, norm=true)\n## prior log odds, thre crucial combination of cost parameters, log(p_tar / (1-p_tar) Cmiss / Cfa)\nplo(d)\n## now scan the Bayes error rate (similar to the dcf above) for a range of prior log odds, and plot\n## This is known as the Applied Probability of Error plot\napeplot(r)\n## The area under the red curve (actual error rates), the cost of the log-likelihood ratio\ncllr(tar, non)\n## The area under the green curve (minimum errors), the cost of the optimal log-likelihood-ratio\nminclrr(tar, non)\n## Similar to APE, but normalized---a Normalized Bayes Error plot\nnbeplot(r)\n## Make an `LLR\' plot: score-to-optimal-LLR mapping, r.θ, vs. r.llr\nllrplot(r)"
},

{
    "location": "#Receiver-Operating-Characteristic-1",
    "page": "Readme",
    "title": "Receiver Operating Characteristic",
    "category": "section",
    "text": "A binary classifier maps an input x to one of two classes, A and B.  Internally, every classifier ends up producing some form of a scalar metric s, which can be thresholded to produce a decision.There are two possible \"senses\" of this internal scalar:higher values of s indicate higher probability of A\nhigher values of s indicate higher probability of BThere are of course also many different interpretations of the classes A and B.  For instance, in biometrics B could mean \"same individual\" and A \"different individual\".  The corresponding senses of s then have an interpretationscore-like: a higher value means a better match\ndistance-like: a higher value means a larger difference.Because we want to focus in this package on a probabilistic interpretation of the scalar s, we take the \"score-like\" interpretation of s, i.e., higher values of s correspond to a higher likelihood of the class-of-interest to be associated to the input of the classifier.  If your classifier is, in fact, a distance metric d, you could work with s=-d or s=1/d or any other strictly decreasing function.  Alternatively, you can swap around the label of the class of interest. As the name suggests, a classifier is supposed to make decisions.  Decisions can be thesholded against a fixed θ such that:if s>θ, decide class B\nif s<θ, decide class AFor evaluating the classifier, we need a set of supervised trials, i.e., for each scalar score s we need a label indicating the true class of the trial that led to score s.  Because there are two classes, two types of errors can be made:false positives: s>θ while in fact the true label is A\nfalse negatives: s<θ while in fact the true label is B.The Receiver Operating Characteristic (ROC) is a graph that shows how the fractions of the false positives and false negatives change with varying θ, for a fixed set of scores s.  The structure of type Roc captures the essential information in a pre-processed way such that other quantities can be derived efficiently. Because we come from automatic speaker recognition, we tend to use the following terminology for the classestarget, the higher scores, a.k.a. same source, true client, ...\nnon-target, the lower scores, a.k.a. different source, impostor, ..."
},

{
    "location": "#Error-rates-1",
    "page": "Readme",
    "title": "Error rates",
    "category": "section",
    "text": "In this package, we focus at analysing everything in terms of error rates.  Traditionally, researchers have used ROC curves where one of the axes is used to describe the complement of an error rate.  Specifically, one often sees a \"true positive rate\" versus a \"false positive rate\", where the true positive rate is the complement of the false negative rate.  There is no real objective way to judge whether one analysis is any better than the other, usually the choice is largely dependent on traditions in the area of the research you are in.There are many different names of the error rates in different scientific disciplines.  Because I come from the area of automatic speaker recognition, the current terminology isProbability of False Alarm: a.k.a. false alarm rate, false positive rate, false accept rate, false match rate, Type II error, 1 - true negative rate, 1- specificity\nProbability of Miss:: a.k.a. miss rate, false negative rate, false reject rate, false non-match rate, Type I error, 1 - true positive rate, 1 - sensitivity, 1 - recall, 1 - verification rate, 1 - hit rate, 1 - genuine acceptance rateWe foresee that the naming of things becomes a bit more flexible in future releases of this package. "
},

{
    "location": "#DET-plot-1",
    "page": "Readme",
    "title": "DET plot",
    "category": "section",
    "text": "A detection error trade-off plot (Martin, 1997) is exactly the same as a ROC plot in the error domain (i.e., miss rate vs false alarm rate), but the axes have been warped according to Φ⁻¹(x), the inverse of the cumulative normal distribution.  In R, this function is known as qnorm(x), in Julia base this is √2 * erfinv(2x-1).  This type of plot has interesting propertiesIf the distributions of target and non-target scores are both Normal, then the DET-curve is a straight line.  In practice, many detection problems give rise to more-or-less straight DET curves, and this suggests that there exists a strictly increasing warping function that can make the score distributions (more) Normal. \nTowards better performance (lower error rates), the resolution of the graph is higher.  This makes it more easy to have multiple systems / performance characteristics over a smaller or wider range of performance in the same graph, and still be able to tell these apart.\nConventionally, the ranges of the axes are chosen 0.1%–50%.  This makes it possible to immediately assess the overall performance based on the absolute position of the line in the graph if you have seen more DET plots in your life.\nThe slope of the (straight) line corresponds to the ratio of the σ parameters of the underlying Normal score distributions, namely that of the non-target scores divided by that of the target scores.  Often, highly discriminative classifiers show very flat curves, indicating that that target scores have a much larger variance than the non-target scores.  \nThe origin of this type of plot lies in psychophysics, where graph paper with lines according to this warping was referred to as double probability paper.  The diagonal y=x in a DET plot corresponds linearly to a quantity known as d\' (d-prime) from psychophysics, ranging from 0 at 50% error to about 6 at 0.1% error. "
},

{
    "location": "#Discrete-and-continuous-scores-1",
    "page": "Readme",
    "title": "Discrete and continuous scores",
    "category": "section",
    "text": "There is an essential difference between discrete score (classes) and continuous scores.  For the former, trials with the same scores must be grouped before the probabilities of false alarm and miss are computed.  This results in ROC and DET plots that can have line elements that are not solely horizontal or vertical.  This is contrary to the latter case if we assume that no two scores are (coincidentally)  the same, which leads to only horizontal and vertical line segments.  This ROCAnalysis package makes sure that the occurrence of identical scores is treated correctly by sorting target scores before identical non-target scores, and by treating trials with scores at the threshold always as errors. "
},

{
    "location": "#Plot-optimisation-1",
    "page": "Readme",
    "title": "Plot optimisation",
    "category": "section",
    "text": "For larget trial sets, it is very likely that in the extrems of the score distributions there is very little overlap.  This wil results in many consecutive horizontal or vertical line segments in the plot.   This ROCAnalysis package integrates these consecutive line segments and replaces them by a single segment, which leads to a strong reduction in complexity in further calculations and plotting.  "
},

{
    "location": "#Single-numbered-metrics-1",
    "page": "Readme",
    "title": "Single-numbered metrics",
    "category": "section",
    "text": "The ROC and DET plots shows the discrimination capability of the detector as a graph.  Often one wants to summarize the plot in a single metric.  There are many ways to do this, we list some hereEqual Error Rate.  This is the point in the DET or ROC where the curve crosses the y=x line, i.e., where the error rates are the same.  A lower EER means a better discriminating classifier.  It samples the ROC on only a single operating point, and moreover, this is an \"after-the-fact\" point.  This metric is insensitive to calibration, i.e., any strictly increasing function can be applied to the scores and an identical EER will be computed.  For small number of trials it makes a different how to comput the EER, often in literature this is not specified.  In this package there are the functions:\neer(): take the points where the difference between miss and false alarm rates changes sign, and interpolate to find the crossing with the y=x diagonal.\neerch(): compute the convex hull of the ROC, and compute the point where this crosses the y=xline.  This has the interpretation of the maximum over priors of the minimum cost, and is useful for cost function analysis.  It tends to be more stable than eer().\nArea Under the Curve. auc() integrates the Area Under the Curve of the ROC.  Contrary to the EER, this metric is sensitive to the entire range of operating points, but, like the EER, it is insensitive to calibration.  It can be interpreted as the probability that a random non-target score is higher than a random target score, and lower AUC indicates better discrimination.  Please note that the complement (area under the hit-rate-vs-false-alarm-rate curve) is known under the same name in other disciplines.  We believe in errors, and minimizing them.\nDectection Cost Function. dcf()  A Detection cost function is a weighted sum of false alarms and misses.  The weights consists of separate costs for false alarms and misses, and a prior for non-targets and targets.\nMinimum Detection Cost. mindcf()  This is the minimum detection cost dcf() that can be obtained by varying the threshold.  It is similar to the EER in the sense that it requires setting a threshold \"after the fact\".  The minimum DCF is related to the points on the convex hull of the ROC curve.  \nCost of the Log-Likelihood-Ratio. cllr() computes a normalized form of the cross-entropy between the \"true posterior\" (1 for target trials and 0 for non-target trials) and the posterior resulting from the classifier score when interpreted as a likelihood ratio, and using a prior for the classes of 0.5.  This measure is calibration sensitive, i.e., it penalizes under- or over-confident likelihood ratios.  The minimum value is determined by the discriminative properties of the classifier, and this minimum approaches 0 for a classifier that completely separates the two classes.  A value of 1 indicates that the classifier gives no information, i.e., decisions can just as well be made based on the prior only.  A value larger than 1 indicates that making Bayes\'s decisions based on the classifiers score gives a higher expected cost than basing decisions on the prior alone.\n*Minimum Cllr\", mincllr() computes the minimum attainable Cllr by warping the scores to log-likelihood-ratios while maintaining the order of the scores.  This is equivalent to determining a minimum cost for all cost functions that can be written as a linear combination of actual miss- and false-alarm-rates, and integrating these costs over cost function parameters."
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": "We have defined the following types:TNT(tar, non),  A container for arrays of target and non-target scores.   Anywhere it says tar, non you should be able to substitute a variable of type TNT.\nDCF(ptar,cfa,cmiss).  A container for scalars or arrays of the cost function parameters ptar (the prior probability of a target), cfa (the cost of a false alarm) and cmiss (the cost of a miss).  In any of the parameters are arrays, they must be of compatible size.\nRoc(pfa, pmiss, θ, chull, llr).  The basic structure for storing ROC results. It contains the x- and y-coordiantes of the (error-based) ROC, together with the threshold.  Many of the \"minimum\" performance measures can be computed from this.  The fields in Roc have the following interpretation:\npfa.  The probability of a false alarm, the fraction of non-target scores above (or equal to) the threshold θ.  This quantity is also known as false alarm/accept/positive/match rate or type II error, and 1-pfa is known as the true negative/reject rate or specificity.\npmiss.  The probability of a miss, the fraction of target scores below (or equal to) the threshold θ.  This quantity is also known, a.o. miss rate, false negative/reject/non-match rate, type I error, and 1-pmiss is also known as true positive rate, sensitivity, recall, verification/hit rate, genuine acceptance rate.\nθ. The threshold associated with the elements in pfa and pmiss.  It can be seen as lying between this pfa/miss and the next.  Hence, there is one value less than in the pmiss and pfa arrays.\nchull.  A boolean indicating whether or not the point (pfa,pmiss)) lies on the convex hull.\nllr.  The optimal log-likelihood-ratio associated with scores at θ.  "
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "This is very much work in progress.  If you stumble upon this, please drop me a line. "
},

{
    "location": "autodocs/#ROCAnalysis.AUC",
    "page": "Docstrings",
    "title": "ROCAnalysis.AUC",
    "category": "function",
    "text": "AUC(::roc; pfa=1.0, pmiss=1.0, normalize=true) computes the traditional Area Under the Curve with a sense AUC → 1 indicating better performance.\n\nOptional parameters pfa or pmiss limit integration over only part of the ROC curve. normalize indicates comparing the partial ROC to the trivial ROC.\n\nYou can also call this function as AUC(targets::Vector, nontargets::Vector; kwargs...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.DCF",
    "page": "Docstrings",
    "title": "ROCAnalysis.DCF",
    "category": "type",
    "text": "DCF is a type that holds one or more cost functions with which the performance of a two-class classifier can be assessed.  Any of the fields can be either a scalar or an array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataFrames.DataFrame",
    "page": "Docstrings",
    "title": "DataFrames.DataFrame",
    "category": "type",
    "text": "Dataframe(::Roc) converts a Roc object in a datframe with columns:\n\npfa the false alarm rate\npmiss the miss rate\nthres the thereshold, separating this line\'s pfa and pmiss from the next\nchull indicating if this point is on the convex hull of the ROC curve\nllr the optimal log-likelihood-ratio score for all data points contributing to the ROC line segment from this line to the next\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.Roc",
    "page": "Docstrings",
    "title": "ROCAnalysis.Roc",
    "category": "type",
    "text": "Roc is a type that stores the essential performance information that can be extracted from a set of supervised trials, i.e., target and non-target scores from a two-class classifier.  Apart from the (minimalized) arrays for probabilities of false-alarm and miss–-the coordinates of the ROC curve–-, they are the threshold for these, a boolean whether-or-not this point lies on the convex hull, and the associated optimal log-likelihood-ratio associated to the line segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.TNT",
    "page": "Docstrings",
    "title": "ROCAnalysis.TNT",
    "category": "type",
    "text": "TNT(tar, non) is a type that holds target and non-target scores in a test for a two-class classifier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.auc",
    "page": "Docstrings",
    "title": "ROCAnalysis.auc",
    "category": "function",
    "text": "AUC(::roc; pfa=1.0, pmiss=1.0, normalize=true) computes the Area Under the Curve with a sense auc → 0 indicating better performance.\n\nOptional parameters pfa or pmiss limit integration over only part of the ROC curve. normalize indicates comparing the partial ROC to the trivial ROC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.ber",
    "page": "Docstrings",
    "title": "ROCAnalysis.ber",
    "category": "function",
    "text": "ber(), the Bayes Error Rate.  This computes the expected error rate given a set of supervised trials, the log-likelihood-ratio scores tar and non, and a threshold based on a given a cost function specified by its prior log-odds (see plo()).\n\nIf the scores tar and non are well-calibrated log-likelihood-ratios, the optimum decision threshold that minimizes the decision cost function dcf is surprisingly simple,\n\nθ = -plo(dcf).\n\nThis function computes the actual cost for such decisions, given the test scores.\n\nArguments:\n\ntar::Vector, non::Vector, plo: target and non-target llr\n\nscores, and prior log odds.  Here, plo may be a vector, resulting in multiple Bayes error rates.\n\nr::Roc, plo: a Roc structure computed with roc(;collapse=false).\n\nIt is mandatory that the Roc object is not collapsed, because the actual cost may occur for a threshold between two \"corner\" points of the ROC curve.  A Roc structure is useful for computing the minimum Bayes Error Rate for multiple cost functions–-in this case the Roc may be collapsed.\n\n; thres: an optional threshold, overriding the theoretical\n\noptimum described above.  This can be used if the scores are not correctly calibrated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.cllr",
    "page": "Docstrings",
    "title": "ROCAnalysis.cllr",
    "category": "function",
    "text": "cllr(tar, non) computes the cost of the log-likelihood-ratio, for log-likelihood-ratio (llr) scores tar and non (target scores and non-target scores).  Target an non-target llr\'s are those for which  the numerator H1 and denominator H2 hypothesis are actually true in the log-likelihood-ratio \n\nllr(x) = p(x|H1) / p(x|H2)\n\nwhere x is the test data for a system trying to disciminate between H1 and H2 given x.  \n\nThe Cllr of a perfect system, assigning a llr of +Inf t otarget scores and -Inf to non-target scores is 0, for a system that is indifferent, producing a llr=0 for every input x the Cllr=1.   Please note that, for badly calibrated systems, Cllr>1.  The units of Cllr are measured in bits,  and cllr can be seen as the average amount of information per trial that is not extracted from the  data. \n\nCllr measures the calibration as well as discrimination ability of a system.  Discrimination  entails the ability to produces target scores that are, typically, much higher than non-target scores.   Calibration entails that for every individual x an optimal Bayes decision can be made if a  cost function is known.  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.dcf",
    "page": "Docstrings",
    "title": "ROCAnalysis.dcf",
    "category": "function",
    "text": "dcf().  Compute the classical decision cost function:\n\ndcf = ptar Cmiss pmiss + (1-ptar) Cfa pfa.\n\nThe relative value of the cost function is only determined by the ratio\n\noeff = (ptar/(1-ptar) (Cmiss/Cfa).\n\nTherefore, this function is computed using ber() and scaling accordingly.  Arguments:\n\ntar, non: target and non-target scores\ntnt::TNT: a TNT object containing target and non-target scores.\nr::Roc: a Roc object, the result of roc()\n; d::DCF: a decision cost function, default getdcf().  This can be a vector or DCFs.\n; thres: the threshold used to make decisions, default -plo(d)\n; norm: are the costs normalized to a trivial system deciding using the prior only, default: false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.eer",
    "page": "Docstrings",
    "title": "ROCAnalysis.eer",
    "category": "function",
    "text": "eer(tar, non) computes a simple approximation to the Equal Error Rate, the intersection of the ROC with the line y=x, i.e., the error rate at which the false positive rate and the false negative rate are approximately equal.\n\nFor a more consistent interpretation and implementation of the EER, please consider eerch(), the Equal Error Rate - Convex Hull computation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.eerch",
    "page": "Docstrings",
    "title": "ROCAnalysis.eerch",
    "category": "function",
    "text": "eerch() computes the Equal Error Rate using the Convex Hull interpretation.  This computes the error rate at which the convex hull of the ROC curve crosses the y=x diagonal in the ROC.\n\nThis value is less sensitive to trial sampling at low number of trials, and has the interpretation of `the maximum while vary prior of the minimum decision costs\'–-a useful quantity in decision cost function analysis of a two class classification system.\n\nArguments:\n\nr::Roc: an object of type Roc, the result of roc()\ntar, non: Vectors of target and non-target scores\npfa, pmiss, ch: Vectors of the false positive and false negative rate, and an array indicating\n\nthe membership of the (pfa, pmiss) point on the convex hull.  These points are found by roc().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.getdcf",
    "page": "Docstrings",
    "title": "ROCAnalysis.getdcf",
    "category": "function",
    "text": "getdcf() retrieves the current valua of the DCF parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.minber",
    "page": "Docstrings",
    "title": "ROCAnalysis.minber",
    "category": "function",
    "text": "minber(): The minimum Byes Error Rate for a set of socres, found after an optimal score-to-llr (log-likelihood-ratio) transformation. The optimal transformation corresponds to the convex hull of the ROC, where the optimal llr values correspont to the negative log of the slope of the appropriate line segment spanning the ROC.  This is equivalent to running the pool-adjacent-violators algorithm on the test data.\n\nIn order to compute minber() for multiple cost functions, as in a Normalized Bayes Error Rate plot, it is advantageous to compute a Roc object once.\n\nArguments: see ber().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.mincllr",
    "page": "Docstrings",
    "title": "ROCAnalysis.mincllr",
    "category": "function",
    "text": "mincllr(tar, non) computes the cllr of target and non-target scores after an optimal transformation of the data.  This allows for measuring the disrimination performance of a system in the units of cllr, which are bits. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.mindcf",
    "page": "Docstrings",
    "title": "ROCAnalysis.mindcf",
    "category": "function",
    "text": "mindcf() computes the minimum costs of the classical decision cost function (see dcf()) that can be obtained by varying the threshold. Arguments are the same as for dcf(), except that there is no threshold.\n\nThis function uses minber() and scales accordingly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.oeff",
    "page": "Docstrings",
    "title": "ROCAnalysis.oeff",
    "category": "function",
    "text": "oeff(), the effective prior odds given cost function parameters.  Arguments are either:\n\nptar, cfa, cmiss: Scalars or Vectors of the prior of a target, the cost of a false positive and the cost of a false negative\ndcf::DCF: a DCF object containing ptar, cfa and cmiss.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.peff",
    "page": "Docstrings",
    "title": "ROCAnalysis.peff",
    "category": "function",
    "text": "peff(), the effective prior given cost function parameters. Arguments are either:\n\nptar, cfa, cmiss: Scalars or Vectors of the prior of a target, the cost of a false positive and the cost of a false negative\ndcf::DCF: a DCF object containing ptar, cfa and cmiss.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.plo",
    "page": "Docstrings",
    "title": "ROCAnalysis.plo",
    "category": "function",
    "text": "plo(), the prior log-odds given cost function parameters. Arguments are either:\n\nptar, cfa, cmiss: Scalars or Vectors of the prior of a target, the cost of a false positive and the cost of a false negative\ndcf::DCF: a DCF object containing ptar, cfa and cmiss.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.roc",
    "page": "Docstrings",
    "title": "ROCAnalysis.roc",
    "category": "function",
    "text": "roc(tar, non; laplace, collapse) computes the essential statistics for evaluation of the performance of a two-class classifier.  The true class of the scores is encoded in the array in which they appear, i.e., target or non-target scores.\n\nThe results are given in a type Roc, containing the receiver-operating-characteristics (ROC) data for this test.\n\nOptional arguments:\n\ncollapse=true, indicating whether the resulting araays for the probability of\n\nfalse positives (alarms) and negatives (misses) should be collapsed, i.e., consecutive points on the ROC that have the same false positive or false negatove rate are removed, retaining only the `corner\' points of the ROC.\n\nlaplace=false, indicating whether two additional data points at either end of the score scale\n\nshould be added to the target an dnon-target scores.  This corresponds to the Laplace prior, and has a result of limiting the magnitude of the optimal log-likelihood-ratio associated with the line segments of the convex hull of the ROC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ROCAnalysis.setdcf",
    "page": "Docstrings",
    "title": "ROCAnalysis.setdcf",
    "category": "function",
    "text": "setdcf() allows a global decision cost function to be set.  This DCF can be used in dcf() and mindcf().   The decision cost function is defined as\n\ndcf = ptar Cmiss pmiss + (1-ptar) Cfa pfa.\n\nand is defined by the parameters ptar (the target prior), Cfa (the cost of a false positive) and Cmiss (the cost of a false negative.  Arguments:\n\nptar. The target prior, default 0.5.\ncfa.  The cost of a false positive (false alarm), default 1\ncmiss.  The cost of a false negative (miss), default 1.\n\nMultiple simultaneous cost functions can be set by specifying any, or a combination, of these parameters as Vectors.\n\nThe current values of the parameters of the DCF can be found using getdcf().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ROCAnalysis.AUCROCAnalysis.ArrayOrRealROCAnalysis.DCFROCAnalysis.DataFrameROCAnalysis.ROCAnalysisROCAnalysis.RocROCAnalysis.TNTROCAnalysis.apeplotROCAnalysis.applyfactorROCAnalysis.aucROCAnalysis.berROCAnalysis.ber_famissROCAnalysis.binscoresROCAnalysis.binsearchROCAnalysis.changepointsROCAnalysis.chllrROCAnalysis.cllrROCAnalysis.costfactorROCAnalysis.crossingROCAnalysis.dcfROCAnalysis.detplotROCAnalysis.eerROCAnalysis.eer_experimentalROCAnalysis.eer_soROCAnalysis.eer_sortedROCAnalysis.eerchROCAnalysis.evalROCAnalysis.getdcfROCAnalysis.global_dcfROCAnalysis.includeROCAnalysis.isleftROCAnalysis.llrplotROCAnalysis.logitROCAnalysis.minberROCAnalysis.minber_famissROCAnalysis.mincllrROCAnalysis.mindcfROCAnalysis.missingROCAnalysis.nbeplotROCAnalysis.normfactorROCAnalysis.oeffROCAnalysis.optllrROCAnalysis.pavROCAnalysis.peffROCAnalysis.ploROCAnalysis.plotROCAnalysis.pnormROCAnalysis.qnormROCAnalysis.rocROCAnalysis.rochullROCAnalysis.rocplotROCAnalysis.setdcfROCAnalysis.sigmoidROCAnalysis.softplusROCAnalysis.sortscores"
},

]}
