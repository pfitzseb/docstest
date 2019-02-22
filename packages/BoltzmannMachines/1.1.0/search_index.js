var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BoltzmannMachines.jl-1",
    "page": "Readme",
    "title": "BoltzmannMachines.jl",
    "category": "section",
    "text": "(Image: Build Status) <!–(Image: Coverage Status)–>This Julia package implements algorithms for training and evaluating several types of Boltzmann Machines (BMs):Learning of Restricted Boltzmann Machines (RBMs) using Contrastive Divergence (CD)\nGreedy layerwise pre-training of Deep Boltzmann Machines (DBMs)\nLearning procedure for general Boltzmann Machines using mean-field inference and stochastic approximation. Applicable to DBMs and used for fine-tuning the weights after the pre-training\nExact calculation of the likelihood of BMs (only suitable for small models)\nAnnealed Importance Sampling (AIS) for estimating the likelihood of larger BMs"
},

{
    "location": "#Types-of-Boltzmann-Machines-1",
    "page": "Readme",
    "title": "Types of Boltzmann Machines",
    "category": "section",
    "text": ""
},

{
    "location": "#Restricted-Boltzmann-Machines-1",
    "page": "Readme",
    "title": "Restricted Boltzmann Machines",
    "category": "section",
    "text": "The package contains the following types of RBMs (subtypes of AbstractRBM):Type Distribution of visible units Distribution of hidden units\nBernoulliRBM Bernoulli Bernoulli\nSoftmax0BernoulliRBM Categorical (binary encoded) Bernoulli\nGaussianBernoulliRBM, GaussianBernoulliRBM2 ([6]) Gaussian Bernoulli\nBinomial2BernoulliRBM Binomial distribution with n = 2 Bernoulli\nBernoulliGaussianRBM Bernoulli Gaussian"
},

{
    "location": "#(Multimodal)-Deep-Boltzmann-Machines-1",
    "page": "Readme",
    "title": "(Multimodal) Deep Boltzmann Machines",
    "category": "section",
    "text": "DBMs are implemented as vectors of RBMs. BasicDBMs have only Bernoulli distributed nodes and therefore consist of a vector of BernoulliRBMs. DBMs with different types of visible units can be constructed by using the corresponding RBM type in the first layer. Actual MultimodalDBMs can be formed by using PartitionedRBMs, which is a type of AbstractRBM that is able to encapsulate non-connected RBMs of different types into an RBM-like layer.All these types of DBMs can be trained using layerwise pre-training and fine-tuning employing the mean-field approximation. It is also possible to estimate or calculate the likelihood for these DBM types."
},

{
    "location": "#Overview-of-functions-1",
    "page": "Readme",
    "title": "Overview of functions",
    "category": "section",
    "text": "The following tables provide an overview of the functions of the package, together with a short description. You can find more detailed descriptions for each function using the Julia help mode (entered by typing ? at the beginning of the Julia command prompt)."
},

{
    "location": "#Data-preprocessing-1",
    "page": "Readme",
    "title": "Data preprocessing",
    "category": "section",
    "text": "Continuously valued data or ordinal data can be transformed into probabilities via intensities and then fed to BernoulliRBMs, like it is usually done when handling grayscale or color intensities in images.Categorical data can be binary encoded as input for a Softmax0BernoulliRBM via oneornone_encode."
},

{
    "location": "#Functions-for-Training-1",
    "page": "Readme",
    "title": "Functions for Training",
    "category": "section",
    "text": ""
},

{
    "location": "#Training-of-RBMs-1",
    "page": "Readme",
    "title": "Training of RBMs",
    "category": "section",
    "text": "Function name Short description\ninitrbm Initializes an RBM model.\ntrainrbm! Performs CD-learning on an RBM model.\nfitrbm Fits a RBM model to a dataset using CD. (Wraps initrbm and trainrbm!)\nsamplevisible, samplevisible! (samplehidden, samplehidden!) Gibbs sampling of visible (hidden) nodes\' states given the hidden (visible) nodes\' states in an RBM.\nvisiblepotential, visiblepotential! (hiddenpotential, hiddenpotential!) Computes the deterministic potential for the activation of the visible (hidden) nodes of an RBM.\nvisibleinput, visibleinput! (hiddeninput, hiddeninput!) Computes the total input received by the visible (hidden) layer of an RBM."
},

{
    "location": "#Training-of-DBMs-1",
    "page": "Readme",
    "title": "Training of DBMs",
    "category": "section",
    "text": "Function name Short description\nfitdbm Fits a DBM model to a dataset. This includes pre-training, followed by the general Boltzmann Machine learning procedure for fine-tuning.\ngibbssample! Performs Gibbs sampling in a DBM.\nmeanfield Computes the mean-field inference of the hidden nodes\' activations in a DBM.\nstackrbms Greedy layerwise pre-training of a DBM model or a Deep Belief Network.\ntraindbm! Trains a DBM using the learning procedure for a general Boltzmann Machine."
},

{
    "location": "#Partitioned-training-and-joining-of-models-1",
    "page": "Readme",
    "title": "Partitioned training and joining of models",
    "category": "section",
    "text": "The following functions may be used to join models fitted on partitioned data sets. The weights cross-linking the models are initialized with zeros.Function name Short description\njoindbms Joins two or more DBM models together.\njoinrbms Joins two or more RBM models to form a joint RBM model of the same type."
},

{
    "location": "#Functions-for-evaluating-a-trained-model-1",
    "page": "Readme",
    "title": "Functions for evaluating a trained model",
    "category": "section",
    "text": "Function name Short description\naislogimpweights Performs AIS on a BM and calculates the logarithmised importance weights for estimating the BM\'s partition function.\nfreeenergy Computes the mean free energy of a data set in an RBM model.\nloglikelihood Estimates the mean loglikelihood of a dataset in a BM model using AIS.\nlogpartitionfunction Estimates the log of the partition function of a BM.\nlogproblowerbound Estimates the mean lower bound of the log probability of a dataset in a DBM model.\nreconstructionerror Computes the mean reconstruction error of a dataset in an RBM model.\nsamples Generates samples from the distribution defined by a BM model. (See also gibbssample! and gibbsamplecond! for (conditional) Gibbs sampling.)"
},

{
    "location": "#Monitoring-the-learning-process-1",
    "page": "Readme",
    "title": "Monitoring the learning process",
    "category": "section",
    "text": "The functions of the form monitor*! can be used for monitoring a property of the model during the learning process. The following words, corresponding to the denominated properties, may stand in place of *:freeenergy\nexactloglikelihood\nloglikelihood\nlogproblowerbound\nreconstructionerror\nweightsnormThe results of evaluations are stored in Monitor objects. The evaluations can be plotted by calling the function plotevaluation in the submodule BMPlots as BMPlots.plotevaluation(monitor, key), with the key being one of the constants monitor* defined in the module.For intended usage of these functions, best see the examples."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "You can find example code here.If you want to use the plotting functionality, you need to install the package BoltzmannMachinesPlots in addition."
},

{
    "location": "#Applications-1",
    "page": "Readme",
    "title": "Applications",
    "category": "section",
    "text": "The package has been used for an approach to uncover patterns in high-dimensional genetic data, described in the articleHess M., Lenz S., Blätte T. J., Bullinger L., Binder H. Partitioned learning of deep Boltzmann machines for SNP data. Bioinformatics 2017 btx408. doi: https://doi.org/10.1093/bioinformatics/btx408.The code for the analyses presented there is available in the article supplement."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] Salakhutdinov, R. (2015). Learning Deep Generative Models. Annual Review of Statistics and Its Application, 2, 361-385.[2] Salakhutdinov, R. Hinton, G. (2012). An Efficient Learning Procedure for Deep Boltzmann Machines. Neural computation, 24(8), 1967-2006.[3] Salakhutdinov. R. (2008). Learning and Evaluating Boltzmann Machines. Technical Report UTML TR 2008-002, Department of Computer Science, University of Toronto.[4] Krizhevsky, A., Hinton, G. (2009). Learning Multiple Layers of Features from Tiny Images.[5] Srivastava, N., Salakhutdinov R. (2014). Multimodal Learning with Deep Boltzmann Machines. Journal of Machine Learning Research, 15, 2949-2980.[6] Cho, K., Ilin A., Raiko, T. (2011) Improved learning of Gaussian-Bernoulli restricted Boltzmann machines. Artificial Neural Networks and Machine Learning – ICANN 2011."
},

{
    "location": "autodocs/#BoltzmannMachines.AbstractOptimizer",
    "page": "Docstrings",
    "title": "BoltzmannMachines.AbstractOptimizer",
    "category": "type",
    "text": "The AbstractOptimizer interface allows to specify optimization procedures. It consists of three methods:\n\ninitialized(optimizer, bm): May be used for creating an optimizer that is  specifically initialized for the Boltzmann machine bm.  In particular it may be used to allocate reusable space for the gradient.  The default implementation simply returns the unmodified optimizer.\ncomputegradient!(optimizer, v, vmodel, h, hmodel, rbm) or computegradient!(optimizer, meanfieldparticles, gibbsparticles, dbm)  needs to be implemented for computing the gradient given the samples  from the positive and negative phase.\nupdateparameters!(bm, optimizer) needs to be specified for taking the  gradient step. The default implementation for RBMs expects the fields  learningrate and gradient and adds learningrate * gradient to the  given RBM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.AbstractRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.AbstractRBM",
    "category": "type",
    "text": "Abstract supertype for all RBMs \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.AbstractTrainLayer",
    "page": "Docstrings",
    "title": "BoltzmannMachines.AbstractTrainLayer",
    "category": "type",
    "text": "Abstract supertype for layerwise training specification. May be specifications for a normal RBM layer (see TrainLayer) or multiple combined specifications for a partitioned layer (see TrainPartitionedLayer).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.AbstractXBernoulliRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.AbstractXBernoulliRBM",
    "category": "type",
    "text": "Abstract super type for RBMs with binary and Bernoulli distributed hidden nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.BernoulliGaussianRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.BernoulliGaussianRBM",
    "category": "type",
    "text": "BernoulliGaussianRBM(weights, visbias, hidbias)\n\nEncapsulates the parameters of an RBM with Bernoulli distributed visible nodes and Gaussian distributed hidden nodes. The standard deviation of the Gaussian distribution is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.BernoulliRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.BernoulliRBM",
    "category": "type",
    "text": "BernoulliRBM(weights, visbias, hidbias)\n\nEncapsulates the parameters of an RBM with Bernoulli distributed nodes.\n\nweights: matrix of weights with size (number of visible nodes, number of hidden nodes)\nvisbias: bias vector for visible nodes\nhidbias: bias vector for hidden nodes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.Binomial2BernoulliRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.Binomial2BernoulliRBM",
    "category": "type",
    "text": "Binomial2BernoulliRBM(weights, visbias, hidbias)\n\nEncapsulates the parameters of an RBM with 0/1/2-valued, Binomial (n=2) distributed visible nodes, and Bernoulli distributed hidden nodes. This model is equivalent to a BernoulliRBM in which every two visible nodes are connected with the same weights to each hidden node. The states (0,0) / (1,0) / (0,1) / (1,1) of the visible nodes connected with with the same weights translate as states 0 / 1 / 1 / 2 in the Binomial2BernoulliRBM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.DataDict",
    "page": "Docstrings",
    "title": "BoltzmannMachines.DataDict",
    "category": "type",
    "text": "A dictionary containing names of data sets as keys and the data sets (matrices with samples in rows) as values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.GaussianBernoulliRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.GaussianBernoulliRBM",
    "category": "type",
    "text": "GaussianBernoulliRBM(weights, visbias, hidbias, sd)\n\nEncapsulates the parameters of an RBM with Gaussian distributed visible nodes and Bernoulli distributed hidden nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.GaussianBernoulliRBM2",
    "page": "Docstrings",
    "title": "BoltzmannMachines.GaussianBernoulliRBM2",
    "category": "type",
    "text": "GaussianBernoulliRBM2(weights, visbias, hidbias, sd)\n\nEncapsulates the parameters of an RBM with Gaussian distributed visible nodes and Bernoulli distributed hidden nodes with the alternative energy formula proposed by KyungHyun Cho.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.LoglikelihoodOptimizer",
    "page": "Docstrings",
    "title": "BoltzmannMachines.LoglikelihoodOptimizer",
    "category": "type",
    "text": "Implements the AbstractOptimizer interface for optimizing the loglikelihood with stochastic gradient descent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.Monitor",
    "page": "Docstrings",
    "title": "BoltzmannMachines.Monitor",
    "category": "type",
    "text": "A vector for collecting MonitoringItems during training.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.MonitoringItem",
    "page": "Docstrings",
    "title": "BoltzmannMachines.MonitoringItem",
    "category": "type",
    "text": "Encapsulates the value of an evaluation calculated in one training epoch. If the evaluation depends on a dataset, the dataset\'s name can be specified also.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.MultivariateBernoulliDistribution",
    "page": "Docstrings",
    "title": "BoltzmannMachines.MultivariateBernoulliDistribution",
    "category": "type",
    "text": "MultivariateBernoulliDistribution(bm)\n\nCalculates and stores the probabilities for all possible combinations of a multivariate Bernoulli distribution defined by a Boltzmann machine model with Bernoulli distributed visible nodes. Can be used for sampling from this distribution, see samples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.NoRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.NoRBM",
    "category": "type",
    "text": "Singleton-Placeholder for AbstractRBMs \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.Particles",
    "page": "Docstrings",
    "title": "BoltzmannMachines.Particles",
    "category": "type",
    "text": "Particles are an array of matrices. The i\'th matrix contains in each row the vector of states of the nodes of the i\'th layer of an RBM or a DBM. The set of rows with the same index define an activation state in a Boltzmann Machine. Therefore, the size of the i\'th matrix is (number of samples/particles, number of nodes in layer i).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.PartitionedBernoulliDBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.PartitionedBernoulliDBM",
    "category": "type",
    "text": "A DBM with only Bernoulli distributed nodes which may contain partitioned layers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.PartitionedRBM",
    "page": "Docstrings",
    "title": "BoltzmannMachines.PartitionedRBM",
    "category": "type",
    "text": "PartitionedRBM(rbms)\n\nEncapsulates several (parallel) AbstractRBMs that form one partitioned RBM. The nodes of the parallel RBMs are not connected between the RBMs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.StackedOptimizer",
    "page": "Docstrings",
    "title": "BoltzmannMachines.StackedOptimizer",
    "category": "type",
    "text": "StackedOptimizer(optimizers)\n\nCan be used for optimizing a stack of RBMs / a DBM by using the given the vector of optimizers (one for each RBM). For more information about the concept of optimizers, see AbstractOptimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.TrainLayer",
    "page": "Docstrings",
    "title": "BoltzmannMachines.TrainLayer",
    "category": "type",
    "text": "Specify parameters for training one RBM-layer in a DBM.\n\nOptional keyword arguments:\n\nThe optional keyword arguments rbmtype, nhidden, epochs, learningrate/learningrates, sdlearningrate/sdlearningrates, categories, batchsize, pcd, cdsteps, startrbm and optimizer/optimizers are passed to fitrbm. For a detailed description, see there. If a negative value is specified for learningrate or epochs, this indicates that a corresponding default value should be used (parameter defined by call to stackrbms).\nmonitoring: also like in fitrbm, but may take a DataDict as third argument  (see function stackrbms and its argument monitoringdata).\nnvisible: Number of visible units in the RBM. Only relevant for partitioning.  This parameter is derived as much as possible by stackrbms.  For MultimodalDBMs with a partitioned first layer, it is necessary to specify  the number of visible nodes for all but at most one partition in the input layer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.TrainPartitionedLayer",
    "page": "Docstrings",
    "title": "BoltzmannMachines.TrainPartitionedLayer",
    "category": "type",
    "text": "Encapsulates a vector of TrainLayer objects for training a partitioned layer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.aislogimpweights",
    "page": "Docstrings",
    "title": "BoltzmannMachines.aislogimpweights",
    "category": "function",
    "text": "aislogimpweights(rbm; ...)\n\nComputes the logarithmised importance weights for estimating the ratio of the partition functions of the given rbm to the RBM with zero weights, but same visible and hidden bias as the rbm. This function implements the Annealed Importance Sampling algorithm (AIS) like described in section 4.1.3 of [Salakhutdinov, 2008].\n\nOptional keyword arguments (for all types of Boltzmann Machines):\n\nntemperatures: Number of temperatures for annealing from the starting model to the target model, defaults to 100\ntemperatures: Vector of temperatures. By default ntemperatures ascending numbers, equally spaced from 0.0 to 1.0\nnparticles: Number of parallel chains and calculated weights, defaults to  100\nburnin: Number of steps to sample for the Gibbs transition between models\n\n\n\n\n\naislogimpweights(rbm1, rbm2; ...)\n\nComputes the logarithmised importance weights for estimating the log-ratio log(Z2/Z1) for the partition functions Z1 and Z2 of rbm1 and rbm2, respectively. Implements the procedure described in section 4.1.2 of [Salakhutdinov, 2008]. This requires that rbm1 and rbm2 are of the same type and have the same number of visible units.\n\n\n\n\n\naislogimpweights(dbm; ...)\n\nComputes the logarithmised importance weights in the Annealed Importance Sampling algorithm (AIS) for estimating the ratio of the partition functions of the given DBM dbm to the base-rate DBM with all weights being zero and all biases equal to the biases of the dbm.\n\nImplements algorithm 4 in [Salakhutdinov+Hinton, 2012]. For DBMs with Bernoulli-distributed nodes only (i. e. here DBMs of type PartitionedBernoulliDBM), it is possible to calculate the importance weights by summing out either the even layers (h1, h3, ...) or the odd layers (v, h2, h4, ...). In the first case, the nodes\' activations in the odd layers are used to calculate the probability ratios, in the second case the even layer are used. If dbm is of type PartitionedBernoulliDBM, the optional keyword argument sumout can be used to choose by specifying the values :odd (default) or :even. In the case of MultimodalDBMs, it is not possible to choose and the second case applies there.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.aisprecision",
    "page": "Docstrings",
    "title": "BoltzmannMachines.aisprecision",
    "category": "function",
    "text": "aisprecision(logr, aissd, sdrange)\n\nReturns the differences of the estimated logratio r to the lower and upper bound of the range defined by the multiple sdrange of the standard deviation of the ratio\'s estimator aissd.\n\n\n\n\n\naisprecision(logimpweights, sdrange)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.aisstandarddeviation",
    "page": "Docstrings",
    "title": "BoltzmannMachines.aisstandarddeviation",
    "category": "function",
    "text": "Computes the standard deviation of the AIS estimator (not logarithmised) (eq 4.10 in [Salakhutdinov+Hinton, 2012]) given the logarithmised importance weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.aisupdatelogimpweights!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.aisupdatelogimpweights!",
    "category": "function",
    "text": "Updates the logarithmized importance weights logimpweights in AIS by adding the log ratio of unnormalized probabilities of the states of the odd layers in the PartitionedBernoulliDBM dbm. The activation states of the DBM\'s nodes are given by the particles. For performance reasons, the biases are specified separately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.akaikeinformationcriterion",
    "page": "Docstrings",
    "title": "BoltzmannMachines.akaikeinformationcriterion",
    "category": "function",
    "text": "akaikeinformationcriterion(bm, loglikelihood)\n\nCalculates the Akaike information criterion for a Boltzmann Machine, given its loglikelihood.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.barsandstripes",
    "page": "Docstrings",
    "title": "BoltzmannMachines.barsandstripes",
    "category": "function",
    "text": "barsandstripes(nsamples, nvariables)\n\nGenerates a test data set. To see the structure in the data set, run e. g. reshape(barsandstripes(1, 16), 4, 4) a few times.\n\nExample from: MacKay, D. (2003). Information Theory, Inference, and Learning Algorithms\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.batchparallelized",
    "page": "Docstrings",
    "title": "BoltzmannMachines.batchparallelized",
    "category": "function",
    "text": "batchparallelized(f, n, op)\n\nDistributes the work for executing the function f n times on all the available workers and reduces the results with the operator op. f is a function that gets a number (of tasks) to execute the tasks.\n\nExample:\n\nbatchparallelized(n -> aislogimpweights(dbm; nparticles = n), 100, vcat)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.bayesianinformationcriterion",
    "page": "Docstrings",
    "title": "BoltzmannMachines.bayesianinformationcriterion",
    "category": "function",
    "text": "bayesianinformationcriterion(bm, nvariables, loglikelihood)\n\nCalculates the Akaike information criterion for a Boltzmann machine, given its loglikelihood and the number of samples nsamples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.bernoulliloglikelihoodbaserate",
    "page": "Docstrings",
    "title": "BoltzmannMachines.bernoulliloglikelihoodbaserate",
    "category": "function",
    "text": "bernoulliloglikelihoodbaserate(nvariables)\n\nCalculates the log-likelihood for a random sample in the \"base-rate\" BM with all parameters being zero and thus all visible units being independent and Bernoulli distributed.\n\n\n\n\n\nbernoulliloglikelihoodbaserate(x)\n\nCalculates the log-likelihood for the data set x in the \"base-rate\" BM with all weights being zero and visible bias set to the empirical probability of the samples\' components in x being 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.combinedbiases",
    "page": "Docstrings",
    "title": "BoltzmannMachines.combinedbiases",
    "category": "function",
    "text": "combinedbiases(dbm)\n\nReturns a vector containing in the i\'th element the bias vector for the i\'th layer of the dbm. For intermediate layers, visible and hidden biases are combined to a single bias vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.computegradient!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.computegradient!",
    "category": "function",
    "text": "computegradient!(optimizer, v, vmodel, h, hmodel, rbm)\n\nComputes the gradient of the RBM rbm given the the hidden activation h induced by the sample v and the vectors vmodel and hmodel generated by sampling from the model. The result is stored in the optimizer in such a way that it can be applied by a call to updateparameters!. There is no return value.\n\nFor RBMs (excluding PartitionedRBMs), this means saving the gradient in a RBM of the same type in the field optimizer.gradient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.converttomostspecifictype",
    "page": "Docstrings",
    "title": "BoltzmannMachines.converttomostspecifictype",
    "category": "function",
    "text": "Converts a vector to a vector of the most specific type that all elements share as common supertype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.copyannealed!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.copyannealed!",
    "category": "function",
    "text": "copyannealed!(annealedrbm, rbm, temperature)\n\nCopies all parameters that are to be annealed from the RBM rbm to the RBM annealedrbm and anneals them with the given temperature.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.correlations",
    "page": "Docstrings",
    "title": "BoltzmannMachines.correlations",
    "category": "function",
    "text": "correlations(datadict)\n\nCreates and returns a dictionary with the same keys as the given datadict. The values of the returned dictionary are the correlations of the samples in the datasets given as values in the datadict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.crossvalidation",
    "page": "Docstrings",
    "title": "BoltzmannMachines.crossvalidation",
    "category": "function",
    "text": "crossvalidation(x, monitoredfit; ...)\n\nPerforms k-fold cross-validation, given\n\nthe data set x and\nmonitoredfit: a function that fits and evaluates a model. As arguments it must accept:\na training data data set\na DataDict containing the evaluation data.\n\nThe return values of the calls to the monitoredfit function are concatenated with vcat. If the monitoredfit function returns Monitor objects, crossvalidation returns a combined Monitor object that can be displayed by creating a cross-validation plot via BoltzmannMachinesPlots.crossvalidationplot.\n\nOptional named argument:\n\nkfold: specifies the k in \"k-fold\" (defaults to 10).\ncrossvalidation(x, monitoredfit, pars; ...)\n\nIf additionaly a vector of parameters pars is given, monitoredfit also expects an additional parameter from the parameter set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.crossvalidationargs",
    "page": "Docstrings",
    "title": "BoltzmannMachines.crossvalidationargs",
    "category": "function",
    "text": "crossvalidationargs(x, pars...; )\n\nReturns a tuple of argument vectors containing the parameters for a function such as the monitoredfit argument in crossvalidation.\n\nUsage example:     map(monitoredfit, crossvalidationargs(x)...)\n\nOptional named argument:\n\nkfold: see crossvalidation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.curvebundles",
    "page": "Docstrings",
    "title": "BoltzmannMachines.curvebundles",
    "category": "function",
    "text": "curvebundles(...)\n\nGenerates an example dataset that can be visualized as bundles of trend curves with added noise. Additional binary columns with labels may be added.\n\nOptional named arguments:\n\nnbundles: number of bundles\nnperbundle: number of sequences per bundle\nnvariables: number of variables in the sequences\nnoisesd: standard deviation of the noise added on all sequences\naddlabels: add leading columns to the resulting dataset, specifying the  membership to a bundle\npbreak: probability that an intermediate point in a sequence is a  breakpoint, defaults to 0.2.\nbreakval: a function that expects no input and generates a single (random) value for a defining point of a piecewise linear sequence. Defaults to rand.\n\nExample:\n\nTo quickly grasp the idea, plot generated samples against the variable index:\n\nx = BMs.curvebundles(nvariables = 10, nbundles = 3,\n                   nperbundle = 4, noisesd = 0.03,\n                   addlabels = true)\nBoltzmannMachinesPlots.plotcurvebundles(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.empiricalloglikelihood",
    "page": "Docstrings",
    "title": "BoltzmannMachines.empiricalloglikelihood",
    "category": "function",
    "text": "empiricalloglikelihood(x, xgen)\nempiricalloglikelihood(bm, x, nparticles)\nempiricalloglikelihood(bm, x, nparticles, burnin)\n\nComputes the mean empirical loglikelihood for the data set x. The probability of a sample is estimated to be the empirical probability of the sample in a dataset generated by the model. This data set can be given as xgen or it is generated by running a Gibbs sampler with nparticles for burnin steps (default 5) in the Boltzmann Machine bm. Throws an error if a sample in x is not contained in the generated data set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.emptyfunc",
    "page": "Docstrings",
    "title": "BoltzmannMachines.emptyfunc",
    "category": "function",
    "text": "A function with no arguments doing nothing. Usable as default argument for functions as arguments.W\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.energy",
    "page": "Docstrings",
    "title": "BoltzmannMachines.energy",
    "category": "function",
    "text": "energy(rbm, v, h)\n\nComputes the energy of the configuration of the visible nodes v and the hidden nodes h, specified as vectors, in the rbm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.energyzerohiddens",
    "page": "Docstrings",
    "title": "BoltzmannMachines.energyzerohiddens",
    "category": "function",
    "text": "energyzerohiddens(rbm, v)\n\nComputes the energy for the visible activations v in the RBM rbm, if all hidden nodes have zero activation, i. e. yields the same as energy(rbm, v, zeros(rbm.hidbias)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.exactloglikelihood",
    "page": "Docstrings",
    "title": "BoltzmannMachines.exactloglikelihood",
    "category": "function",
    "text": "exactloglikelihood(rbm, x)\n\nComputes the mean log-likelihood for the given dataset x and the RBM rbm exactly. The log of the partition function is computed exactly by exactlogpartitionfunction(rbm). Besides that, the function simply calls loglikelihood(rbm, x).\n\n\n\n\n\nexactloglikelihood(dbm, x)\nexactloglikelihood(dbm, x, logz)\n\nComputes the mean log-likelihood for the given dataset x and the DBM dbm exactly. If the value of the log of the partition function of the dbm is not supplied as argument logz, it will be computed by exactlogpartitionfunction(dbm).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.exactlogpartitionfunction",
    "page": "Docstrings",
    "title": "BoltzmannMachines.exactlogpartitionfunction",
    "category": "function",
    "text": "exactlogpartitionfunction(rbm)\n\nCalculates the log of the partition function of the BernoulliRBM rbm exactly. The execution time grows exponentially with the minimum of (number of visible nodes, number of hidden nodes).\n\n\n\n\n\nexactlogpartitionfunction(gbrbm)\n\nCalculates the log of the partition function of the GaussianBernoulliRBM gbrbm exactly. The execution time grows exponentially with the number of hidden nodes.\n\n\n\n\n\nexactlogpartitionfunction(bgrbm)\n\nCalculates the log of the partition function of the BernoulliGaussianRBM bgrbm exactly. The execution time grows exponentially with the number of visible nodes.\n\n\n\n\n\nexactlogpartitionfunction(dbm)\n\nCalculates the log of the partition function of the DBM dbm exactly. If the number of hidden layers is even, the execution time grows exponentially with the total number of nodes in hidden layers with odd indexes (i. e. h1, h3, ...). If the number of hidden layers is odd, the execution time grows exponentially with the minimum of (number of nodes in layers with even index, number of nodes in layers with odd index).\n\n\n\n\n\nexactlogpartitionfunction(mdbm)\n\nCalculates the log of the partition function of the MultimodalDBM mdbm exactly. The execution time grows exponentially with the total number of nodes in hidden layers with odd indexes (i. e. h1, h3, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.fitdbm",
    "page": "Docstrings",
    "title": "BoltzmannMachines.fitdbm",
    "category": "function",
    "text": "fitdbm(x; ...)\n\nFits a (multimodal) DBM to the data set x. The procedure consists of two parts: First a stack of RBMs is pretrained in a greedy layerwise manner (see stackrbms(x)). Then the weights of all layers are jointly trained using the general Boltzmann Machine learning procedure (see traindbm!(dbm,x)).\n\nOptional keyword arguments (ordered by importance):\n\nnhiddens: vector that defines the number of nodes in the hidden layers of  the DBM. The default value specifies two hidden layers with the same size  as the visible layer.\nepochs: number of training epochs for joint training, defaults to 10\nepochspretraining: number of training epochs for pretraining,  defaults to epochs\nlearningrate/learningrates:  learning rate(s) for joint training of layers (= fine tuning)  using the learning algorithm for a general Boltzmann Machine.  The learning rate for fine tuning is by default decaying with the number of epochs,  starting with the given value for the learningrate.  (For more details see traindbm!).\nlearningratepretraining: learning rate for pretraining,  defaults to learningrate\nbatchsizepretraining: batchsize for pretraining, defaults to 1\nnparticles: number of particles used for sampling during joint training of  DBM, default 100\npretraining: The arguments for layerwise pretraining  can be specified for each layer individually.  This is done via a vector of TrainLayer objects.  (For a detailed description of the possible parameters,  see help for TrainLayer).  If the number of training epochs and the learning rate are not specified  explicitly for a layer, the values of epochspretraining,  learningratepretraining and batchsizepretraining are used.\nmonitoring: Monitoring function accepting a dbm and the number of epochs  retuning nothing. Used for the monitoring of fine-tuning.\nmonitoringdatapretraining: a DataDict that contains data used for  monitoring the pretraining (see argument monitoringdata of stackrbms.)\noptimizer/optimizers: an optimizer or a vector of optimizers for each epoch  (see AbstractOptimizer) used for fine-tuning.\noptimizerpretraining: an optimizer used for pre-training.  Defaults to the optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.fitrbm",
    "page": "Docstrings",
    "title": "BoltzmannMachines.fitrbm",
    "category": "function",
    "text": "fitrbm(x; ...)\n\nFits an RBM model to the data set x, using Stochastic Gradient Descent (SGD) with Contrastive Divergence (CD), and returns it.\n\nOptional keyword arguments (ordered by importance):\n\nrbmtype: the type of the RBM that is to be trained  This must be a subtype of AbstractRBM and defaults to BernoulliRBM.\nnhidden: number of hidden units for the returned RBM\nepochs: number of training epochs\nlearningrate/learningrates: The learning rate for the weights and biases  can be specified as single value, used throughout all epochs, or as a vector  of learningrates that contains a value for each epoch. Defaults to 0.005.\nbatchsize: number of samples that are used for making one step in the  stochastic gradient descent optimizer algorithm. Default is 1.\npcd: indicating whether Persistent Contrastive Divergence (PCD) is to  be used (true, default) or simple CD that initializes the Gibbs Chain with  the training sample (false)\ncdsteps: number of Gibbs sampling steps for (persistent)  contrastive divergence, defaults to 1\nmonitoring: a function that is executed after each training epoch.  It takes an RBM and the epoch as arguments.\nupfactor, downfactor: If this function is used for pretraining a part of  a DBM, it is necessary to multiply the weights of the RBM with factors.\nsdlearningrate/sdlearningrates: learning rate(s) for the  standard deviation if training a GaussianBernoulliRBM or  GaussianBernoulliRBM2. Ignored for other types of RBMs.  It usually must be much smaller than the learning rates for  the weights. By default it is 0.0, which means that the standard deviation  is not learned.\nstartrbm: start training with the parameters of the given RBM.  If this argument is specified, nhidden and rbmtype are ignored.\noptimizer/optimizers: an object of type AbstractOptimizer or a vector of  them for each epoch. If specified, the optimization is performed as implemented  by the given optimizer type. By default, the LoglikelihoodOptimizer  with the learningrate/learningrates and sdlearningrate/sdlearningrates  is used. For other types of optimizers, the learning rates must be specified  in the optimizer. For more information on how to write your own optimizer,  see AbstractOptimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.freeenergy",
    "page": "Docstrings",
    "title": "BoltzmannMachines.freeenergy",
    "category": "function",
    "text": "freeenergy(rbm, x)\n\nComputes the average free energy of the samples in the dataset x for the AbstractRBM rbm.\n\n\n\n\n\nfreeenergy(rbm, v)\n\nComputes the free energy of the sample v (a vector) for the rbm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.freeenergydiffs",
    "page": "Docstrings",
    "title": "BoltzmannMachines.freeenergydiffs",
    "category": "function",
    "text": "freeeenergydiffs(rbm1, rbm2, x)\n\nComputes the differences of the free energy for the samples in the dataset x regarding the RBM models rbm1 and rbm2. Returns a vector of differences.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.gaussianloglikelihoodbaserate",
    "page": "Docstrings",
    "title": "BoltzmannMachines.gaussianloglikelihoodbaserate",
    "category": "function",
    "text": "gaussianloglikelihoodbaserate(x)\n\nCalculates the mean log-likelihood for the data set x with all variables and components of the variables being independent and Gaussian distributed. The standard deviation and the mean of the i\'th variable is the mean and standard deviation of values of the i\'th component of the sample vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.gibbssample!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.gibbssample!",
    "category": "function",
    "text": "gibbssample!(particles, bm, nsteps)\n\nPerforms Gibbs sampling on the particles in the Boltzmann machine model bm for nsteps steps. (See also: Particles.) When sampling in multimodal deep Boltzmann machines, in-between layers are assumed to contain only Bernoulli-distributed nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.gibbssamplecond!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.gibbssamplecond!",
    "category": "function",
    "text": "gibbssamplecond!(particles, bm, cond, nsteps)\n\nConditional Gibbs sampling on the particles in the bm. The variables that are marked in the indexing vector cond are fixed to the initial values in particles during sampling. This way, conditional sampling is performed on these variables. (See also Particles, initparticles.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.hiddeninput",
    "page": "Docstrings",
    "title": "BoltzmannMachines.hiddeninput",
    "category": "function",
    "text": "hiddeninput(rbm, v)\n\nComputes the total input of the hidden units in the AbstractRBM rbm, given the activations of the visible units v. v may be a vector or a matrix that contains the samples in its rows.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.hiddeninput!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.hiddeninput!",
    "category": "function",
    "text": "hiddeninput!(h, rbm, v)\n\nLike hiddeninput, but stores the returned result in h.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.hiddenpotential",
    "page": "Docstrings",
    "title": "BoltzmannMachines.hiddenpotential",
    "category": "function",
    "text": "hiddenpotential(rbm, v)\nhiddenpotential(rbm, v, factor)\n\nReturns the potential for activations of the hidden nodes in the AbstractRBM rbm, given the activations v of the visible nodes. v may be a vector or a matrix that contains the samples in its rows. The potential is a deterministic value to which sampling can be applied to get the activations. In RBMs with Bernoulli distributed hidden units, the potential of the hidden nodes is the vector of probabilities for them to be turned on.\n\nThe total input can be scaled with the factor. This is needed when pretraining the rbm as part of a DBM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.hiddenpotential!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.hiddenpotential!",
    "category": "function",
    "text": "hiddenpotential!(hh, rbm, vv)\nhiddenpotential!(hh, rbm, vv, factor)\n\nLike hiddenpotential, but stores the returned result in hh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.initcombination",
    "page": "Docstrings",
    "title": "BoltzmannMachines.initcombination",
    "category": "function",
    "text": "Returns particle for DBM, initialized with zeros.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.initcombinationoddlayersonly",
    "page": "Docstrings",
    "title": "BoltzmannMachines.initcombinationoddlayersonly",
    "category": "function",
    "text": "initcombinationoddlayersonly(dbm)\n\nCreates and zero-initializes a particle for layers with odd indexes in the dbm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.initgammaprocess",
    "page": "Docstrings",
    "title": "BoltzmannMachines.initgammaprocess",
    "category": "function",
    "text": "Update beta with an autoregressive Gamma process. beta0 ~ Gamma(nu,c/(1-phi)) = Gamma(1/var, var) ht ~ Possion( phi/c * h{t-1}) betat ~ Gamma(nu + z_t, c) Achieves a stationary distribution with mean 1 and variance var: Gamma(nu, var) = Gamma(1/var, var)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.initialized",
    "page": "Docstrings",
    "title": "BoltzmannMachines.initialized",
    "category": "function",
    "text": "initialized(optimizer, rbm)\n\nReturns an AbstractOptimizer similar to the given optimizer that can be used to optimize the AbstractRBM rbm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.initparticles",
    "page": "Docstrings",
    "title": "BoltzmannMachines.initparticles",
    "category": "function",
    "text": "initparticles(bm, nparticles; biased = false)\n\nCreates particles for Gibbs sampling in an Boltzmann machine bm. (See also: Particles)\n\nFor Bernoulli distributed nodes, the particles are initialized with Bernoulli(p) distributed values. If biased == false, p is 0.5, otherwise the results of applying the sigmoid function to the bias values are used as values for the nodes\' individual p\'s.\n\nGaussian nodes are sampled from a normal distribution if biased == false. If biased == true the mean of the Gaussian distribution is shifted by the bias vector and the standard deviation of the nodes is used for sampling.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.initrbm",
    "page": "Docstrings",
    "title": "BoltzmannMachines.initrbm",
    "category": "function",
    "text": "initrbm(x, nhidden)\ninitrbm(x, nhidden, rbmtype)\n\nCreates a RBM with nhidden hidden units and initalizes its weights for training on dataset x. rbmtype can be a subtype of AbstractRBM, default is BernoulliRBM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.initvisiblebias",
    "page": "Docstrings",
    "title": "BoltzmannMachines.initvisiblebias",
    "category": "function",
    "text": "initvisiblebias(x)\n\nReturns sensible initial values for the visible bias for training an RBM on the data set x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.intensities",
    "page": "Docstrings",
    "title": "BoltzmannMachines.intensities",
    "category": "function",
    "text": "intensities(x)\nintensities(x, q1)\nintesities(x, q1, q2)\n\nPerforms a linear and monotonous transformation on the data set x to fit it into the interval [0.0, 1.0] and returns the transformed data set.\n\nIf q1 is specified, all values below or equal to the quantile specified  by q1 are mapped to 0.0. All values above or equal to the quantile specified by q2 are mapped to 1.0. q2 defaults to 1 - q1.\n\nThe quantiles are calculated per column/variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.joindbms",
    "page": "Docstrings",
    "title": "BoltzmannMachines.joindbms",
    "category": "function",
    "text": "joindbms(dbms)\njoindbms(dbms, visibleindexes)\n\nJoins the DBMs given by the vector dbms by joining each layer of RBMs.\n\nIf the vector visibleindexes is specified, it is supposed to contain in the i\'th entry an indexing vector that determines the positions in the combined DBM for the visible nodes of the i\'th of the dbms. By default the indexes of the visible nodes are assumed to be consecutive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.joinrbms",
    "page": "Docstrings",
    "title": "BoltzmannMachines.joinrbms",
    "category": "function",
    "text": "joinrbms(rbms)\njoinrbms(rbms, visibleindexes)\n\nJoins the given vector of rbms of the same type to form one RBM of this type and returns the joined RBM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.joinvecs",
    "page": "Docstrings",
    "title": "BoltzmannMachines.joinvecs",
    "category": "function",
    "text": "joinvecs(vecs, indexes)\n\nCombines the Float-vectors in vecs into one vector. The indexesvector must contain in the i\'th entry the indexes that the elements of the i\'th vector invecs` are supposed to have in the resulting combined vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.joinweights",
    "page": "Docstrings",
    "title": "BoltzmannMachines.joinweights",
    "category": "function",
    "text": "joinweights(rbms)\njoinweights(rbms, visibleindexes)\n\nCombines the weight matrices of the RBMs in the vector rbms into one weight matrix and returns it.\n\nIf the vector visibleindexes is specified, it is supposed to contain in the i\'th entry an indexing vector that determines the positions in the combined weight matrix for the visible nodes of the i\'th of the rbms. By default the indexes of the visible nodes are assumed to be consecutive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.log1pexp",
    "page": "Docstrings",
    "title": "BoltzmannMachines.log1pexp",
    "category": "function",
    "text": "log1pexp(x)\n\nCalculates log(1+exp(x)). For sufficiently large values of x, the approximation log(1+exp(x)) ≈ x is used. This is useful to prevent overflow.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.loglikelihood",
    "page": "Docstrings",
    "title": "BoltzmannMachines.loglikelihood",
    "category": "function",
    "text": "loglikelihood(rbm, x)\nloglikelihood(rbm, x, logz)\n\nComputes the average log-likelihood of an RBM on a given dataset x. Uses logz as value for the log of the partition function or estimates the partition function with Annealed Importance Sampling.\n\n\n\n\n\nloglikelihood(dbm, x; ...)\n\nEstimates the mean log-likelihood of the DBM on the data set x with Annealed Importance Sampling. This requires a separate run of AIS for each sample.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.loglikelihooddiff",
    "page": "Docstrings",
    "title": "BoltzmannMachines.loglikelihooddiff",
    "category": "function",
    "text": "loglikelihooddiff(rbm1, rbm2, x)\nloglikelihooddiff(rbm1, rbm2, x, logzdiff)\nloglikelihooddiff(rbm1, rbm2, x, logimpweights)\n\nComputes difference of the loglikelihood functions of the two RBMs on the data matrix x, averaged over the samples. For this purpose, the partition function ratio Z2/Z1 is estimated by AIS unless the importance weights are specified the by parameter logimpweights or the difference in the log partition functions is given by logzdiff.\n\nThe first model is better than the second if the returned value is positive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.logmeanexp",
    "page": "Docstrings",
    "title": "BoltzmannMachines.logmeanexp",
    "category": "function",
    "text": "Performs numerically stable computation of the mean on log-scale. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.logpartitionfunction",
    "page": "Docstrings",
    "title": "BoltzmannMachines.logpartitionfunction",
    "category": "function",
    "text": "logpartitionfunction(bm; ...)\nlogpartitionfunction(bm, logr)\n\nCalculates or estimates the log of the partition function of the Boltzmann Machine bm.\n\nr is an estimator of the ratio of the bm\'s partition function Z to the partition function Z0 of the reference BM with zero weights but same biases as the given bm. In case of a GaussianBernoulliRBM, the reference model also has the same standard deviation parameter. The estimated partition function of the Boltzmann Machine is Z = r * Z0 with r being the mean of the importance weights. Therefore, the log of the estimated partition function is log(Z) = log(r) + log(Z_0)\n\nIf the log of r is not given as argument logr, Annealed Importance Sampling (AIS) is performed to get a value for it. In this case, the optional arguments for AIS can be specified (see aislogimpweights), and the optional boolean argument parallelized can be used to turn on batch-parallelized computing of the importance weights.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.logpartitionfunctionzeroweights",
    "page": "Docstrings",
    "title": "BoltzmannMachines.logpartitionfunctionzeroweights",
    "category": "function",
    "text": "logpartitionfunctionzeroweights(bm)\n\nReturns the value of the log of the partition function of the Boltzmann Machine that results when one sets the weights of bm to zero, and leaves the other parameters (biases) unchanged.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.logproblowerbound",
    "page": "Docstrings",
    "title": "BoltzmannMachines.logproblowerbound",
    "category": "function",
    "text": "logproblowerbound(dbm, x; ...)\nlogproblowerbound(dbm, x, logimpweights; ...)\nlogproblowerbound(dbm, x, logz; ...)\n\nEstimates the mean of the variational lower bound for the log probability of the DBM on a given dataset x like described in Equation 38 in [Salakhutdinov, 2015]. The logarithmized partition function can be specified directly as logz or by giving the logimpweights from estimating the partition function with the Annealed Importance Sampling algorithm (AIS). (See aislogimpweights.) If neither logimpweights or logz is given, the partition function will be estimated by AIS with default parameters.\n\nOptional keyword argument:\n\nThe approximate posterior distribution may be given as argument mu or is calculated by the mean-field method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.logsumexp",
    "page": "Docstrings",
    "title": "BoltzmannMachines.logsumexp",
    "category": "function",
    "text": "Performs numerically stable summation on log-scale. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.meanfield",
    "page": "Docstrings",
    "title": "BoltzmannMachines.meanfield",
    "category": "function",
    "text": "meanfield(dbm, x)\nmeanfield(dbm, x, eps)\n\nComputes the mean-field approximation for the data set x and returns a matrix of particles for the DBM. The number of particles is equal to the number of samples in x. eps is the convergence criterion for the fix-point iteration, default 0.001. It is assumed that all nodes in in-between-layers are Bernoulli distributed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.means",
    "page": "Docstrings",
    "title": "BoltzmannMachines.means",
    "category": "function",
    "text": "means(datadict)\n\nCreates and returns a dictionary with the same keys as the given datadict. The values of the returned dictionary are the samples\' means in the datadict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.monitorcordiff!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.monitorcordiff!",
    "category": "function",
    "text": "monitorcordiff!(monitor, rbm, epoch, cordict)\n\nGenerates samples and records the distance of their correlation matrix to the correlation matrices for (original) datasets contained in the cordict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.monitorexactloglikelihood!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.monitorexactloglikelihood!",
    "category": "function",
    "text": "monitorexactloglikelihood!(monitor, bm, epoch, datadict)\n\nComputes the mean exact log-likelihood in the Boltzmann Machine model bm for the data sets in the DataDict datadict and stores this information in the Monitor monitor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.monitorfreeenergy!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.monitorfreeenergy!",
    "category": "function",
    "text": "monitorfreeenergy!(monitor, rbm, epoch, datadict)\n\nComputes the free energy for the datadict\'s data sets in the RBM model rbm and stores the information in the monitor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.monitorloglikelihood!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.monitorloglikelihood!",
    "category": "function",
    "text": "monitorloglikelihood!(monitor, rbm, epoch, datadict)\n\nEstimates the log-likelihood of the datadict\'s data sets in the RBM model rbm with AIS and stores the values, together with information about the variance of the estimator, in the monitor.\n\nIf there is more than one worker available, the computation is parallelized by default. Parallelization can be turned on or off with the optional boolean argument parallelized.\n\nFor the other optional keyword arguments, see aislogimportanceweights.\n\nSee also: loglikelihood.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.monitorlogproblowerbound!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.monitorlogproblowerbound!",
    "category": "function",
    "text": "monitorlogproblowerbound!(monitor, dbm, epoch, datadict)\n\nEstimates the lower bound of the log probability of the datadict\'s data sets in the DBM dbm with AIS and stores the values, together with information about the variance of the estimator, in the monitor.\n\nIf there is more than one worker available, the computation is parallelized by default. Parallelization can be turned on or off with the optional boolean argument parallelized.\n\nFor the other optional keyword arguments, see aislogimpweights.\n\nSee also: logproblowerbound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.monitorreconstructionerror!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.monitorreconstructionerror!",
    "category": "function",
    "text": "monitorreconstructionerror!(monitor, rbm, epoch, datadict)\n\nComputes the reconstruction error for the data sets in the datadict and the rbm and stores the values in the monitor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.monitorweightsnorm!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.monitorweightsnorm!",
    "category": "function",
    "text": "monitorweightsnorm!(monitor, rbm, epoch)\n\nComputes the L2-norm of the weights matrix and the bias vectors of the rbm and stores the values in the monitor. These values can give a hint how much the updates are changing the parameters during learning.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.mostevenbatches",
    "page": "Docstrings",
    "title": "BoltzmannMachines.mostevenbatches",
    "category": "function",
    "text": "mostevenbatches(ntasks)\nmostevenbatches(ntasks, nbatches)\n\nSplits a number of tasks ntasks into a number of batches nbatches. The number of batches is by default min(nworkers(), ntasks). The returned result is a vector containing the numbers of tasks for each batch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.mostspecifictype",
    "page": "Docstrings",
    "title": "BoltzmannMachines.mostspecifictype",
    "category": "function",
    "text": "mostspecifictype(v)\n\nReturns the most specific supertype for all elements in the vector v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.newparticleslike",
    "page": "Docstrings",
    "title": "BoltzmannMachines.newparticleslike",
    "category": "function",
    "text": "newparticleslike(particles)\n\nCreates new and uninitialized particles of the same dimensions as the given particles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.next!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.next!",
    "category": "function",
    "text": "next!(combination)\n\nSets the vector combination, containing a sequence of the values 0.0 and 1.0, to the next combination of 0.0s and 1.0s. Returns false if the new combination consists only of zeros; true otherwise.\n\n\n\n\n\nnext!(particle)\n\nSets particle to the next combination of nodes\' activations. Returns false if the loop went through all combinations; true otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.nextvisibles!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.nextvisibles!",
    "category": "function",
    "text": "nextvisible!(v, bm)\n\nSets v to a new combination of visible nodes\' activations for the bm. Returns false, if there are no new combinations left; returns true otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.nhiddennodes",
    "page": "Docstrings",
    "title": "BoltzmannMachines.nhiddennodes",
    "category": "function",
    "text": "nhiddennodes(rbm)\n\nReturns the number of visible nodes for an RBM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.nmodelparameters",
    "page": "Docstrings",
    "title": "BoltzmannMachines.nmodelparameters",
    "category": "function",
    "text": "nmodelparameters(bm)\n\nReturns the number of parameters in the Boltzmann Machine model bm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.nomonitoring",
    "page": "Docstrings",
    "title": "BoltzmannMachines.nomonitoring",
    "category": "function",
    "text": "nomonitoring\n\nAccepts a model and a number of epochs and returns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.nunits",
    "page": "Docstrings",
    "title": "BoltzmannMachines.nunits",
    "category": "function",
    "text": "nunits(bm)\n\nReturns an integer vector that contans in the i\'th entry the number of nodes in the i\'th layer of the bm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.nvisiblecombinations",
    "page": "Docstrings",
    "title": "BoltzmannMachines.nvisiblecombinations",
    "category": "function",
    "text": "nvisiblecombinations(bm)\n\nReturns the number of possible combinations of visible nodes\' activations for a given bm that has a discrete distribution of visible nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.nvisiblenodes",
    "page": "Docstrings",
    "title": "BoltzmannMachines.nvisiblenodes",
    "category": "function",
    "text": "nvisiblenodes(rbm)\n\nReturns the number of visible nodes for an RBM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.oneornone_decode",
    "page": "Docstrings",
    "title": "BoltzmannMachines.oneornone_decode",
    "category": "function",
    "text": "oneornone_decode(x, categories)\n\nReturns a dataset such that x .== oneornone_decode(oneornone_encode(x, categories), categories).\n\nFor more, see oneornone_encode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.oneornone_encode",
    "page": "Docstrings",
    "title": "BoltzmannMachines.oneornone_encode",
    "category": "function",
    "text": "oneornone_encode(x, categories)\n\nExpects a data set x containing values 0.0, 1.0, 2.0 ... encoding the categories. Returns a data set that encodes the variables/columns in x in multiple columns with only values 0.0 and 1.0, similiar to the one-hot encoding with the deviation that a zero is encoded as all-zeros.\n\nThe categories can be specified as\n\ninteger number if all variables have the same number of categories or as\ninteger vector, containing for each variable the number of categories encoded.\n\nSee also oneornone_decode for the reverse transformation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.piecewiselinearsequences",
    "page": "Docstrings",
    "title": "BoltzmannMachines.piecewiselinearsequences",
    "category": "function",
    "text": "piecewiselinearsequences(nsequences, nvariables; ...)\n\nGenerates a dataset consisting of samples with values that are piecewise linear functions of the variable index.\n\nOptional named arguments: pbreak, breakval, see piecewiselinearsequencebundles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.propagateforward",
    "page": "Docstrings",
    "title": "BoltzmannMachines.propagateforward",
    "category": "function",
    "text": "propagateforward(rbm, datadict, factor)\n\nReturns a new DataDict containing the same labels as the given datadict but as mapped values it contains the hidden potential in the rbm of the original datasets. The factor is applied for calculating the hidden potential and is 1.0 by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.randombatchmasks",
    "page": "Docstrings",
    "title": "BoltzmannMachines.randombatchmasks",
    "category": "function",
    "text": "randombatchmasks(nsamples, batchsize)\n\nReturns BitArray-Sets for the sample indices when training on a dataset with nsamples samples using minibatches of size batchsize.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.ranges",
    "page": "Docstrings",
    "title": "BoltzmannMachines.ranges",
    "category": "function",
    "text": "ranges(numbers)\n\nReturns a vector of consecutive integer ranges, the first starting with 1. The i\'th such range spans over numbers[i] items.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.reconstructionerror",
    "page": "Docstrings",
    "title": "BoltzmannMachines.reconstructionerror",
    "category": "function",
    "text": "reconstructionerror(rbm, x)\n\nComputes the mean reconstruction error of the RBM on the dataset x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.reversedrbm",
    "page": "Docstrings",
    "title": "BoltzmannMachines.reversedrbm",
    "category": "function",
    "text": "Returns the GBRBM with weights such that hidden and visible of the given bgrbm are switched and a visible standard deviation of 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samplefrequencies",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samplefrequencies",
    "category": "function",
    "text": "samplefrequencies(x)\n\nReturns a dictionary containing the rows of the data set x as keys and their relative frequencies as values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samplehidden",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samplehidden",
    "category": "function",
    "text": "samplehidden(rbm, v)\nsamplehidden(rbm, v, factor)\n\nReturns activations of the hidden nodes in the AbstractRBM rbm, sampled from the state v of the visible nodes. v may be a vector or a matrix that contains the samples in its rows. For the factor, see hiddenpotential(rbm, v, factor).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samplehidden!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samplehidden!",
    "category": "function",
    "text": "samplehidden!(h, rbm, v)\nsamplehidden!(h, rbm, v, factor)\n\nLike samplehidden, but stores the returned result in h.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samplehiddenpotential!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samplehiddenpotential!",
    "category": "function",
    "text": "samplehiddenpotential!(h, rbm)\n\nSamples the activation of the hidden nodes from the potential h and stores the returned result in h.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.sampleparticles",
    "page": "Docstrings",
    "title": "BoltzmannMachines.sampleparticles",
    "category": "function",
    "text": "sampleparticles(bm, nparticles, burnin)\n\nSamples in the Boltzmann Machine model bm by running nparticles parallel, randomly initialized Gibbs chains for burnin steps. Returns particles containing nparticles generated samples. See also: Particles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samples",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samples",
    "category": "function",
    "text": "samples(bm, nsamples; ...)\n\nGenerates nsamples samples from a Boltzmann machine model bm by running a Gibbs sampler. This can also be used for sampling from a conditional distribution (see argument conditions below.)\n\nOptional keyword arguments:\n\nburnin: Number of Gibbs sampling steps, defaults to 50.\nconditions: Vector{Pair{Int,Float64}}, containing pairs of variables and their values that are to be conditioned on. E. g. [1 => 1.0, 3 => 0.0]\nsamplelast: boolean to indicate whether to sample in last step (true, default) or whether to use the activation potential.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samplevisible",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samplevisible",
    "category": "function",
    "text": "samplevisible(rbm, h)\nsamplevisible(rbm, h, factor)\n\nReturns activations of the visible nodes in the AbstractRBM rbm, sampled from the state h of the hidden nodes. h may be a vector or a matrix that contains the samples in its rows. For the factor, see visiblepotential(rbm, h, factor).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samplevisible!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samplevisible!",
    "category": "function",
    "text": "samplevisible!(v, rbm, h)\nsamplevisible!(v, rbm, h, factor)\n\nLike samplevisible, but stores the returned result in v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.samplevisiblepotential!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.samplevisiblepotential!",
    "category": "function",
    "text": "samplehiddenpotential!(v, rbm)\n\nSamples the activation of the visible nodes from the potential v and stores the returned result in v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.softmax0!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.softmax0!",
    "category": "function",
    "text": "softmax0!(x)\nsoftmax0!(x, varranges)\n\nIf x is a vector, softmax0!(x) will apply the softmax transformation to the  vector [x; 0.0] and store the results for the values of x in x. (The value for 0.0 is omitted since it is determined by 1 - sum(softmax!(x))).\n\nIf x is a matrix, the transformation will be applied to all rows of x. If an additional vector varranges with UnitRanges of column indices is specified, the transformation will be applied to the groups of columns separately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.splitdata",
    "page": "Docstrings",
    "title": "BoltzmannMachines.splitdata",
    "category": "function",
    "text": "splitdata(x, ratio)\n\nSplits the data set x randomly in two data sets x1 and x2, such that the ratio n2/n1 of the numbers of lines/samples in x1 and x2 is approximately equal to the given ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.stackrbms",
    "page": "Docstrings",
    "title": "BoltzmannMachines.stackrbms",
    "category": "function",
    "text": "stackrbms(x; ...)\n\nPerforms greedy layerwise training for Deep Belief Networks or greedy layerwise pretraining for Deep Boltzmann Machines and returns the trained model.\n\nOptional keyword arguments (ordered by importance):\n\npredbm: boolean indicating that the greedy layerwise training is  pre-training for a DBM.  If its value is false (default), a DBN is trained.\nnhiddens: vector containing the number of nodes of the i\'th hidden layer in  the i\'th entry\nepochs: number of training epochs\nlearningrate: learningrate, default 0.005\nbatchsize: size of minibatches, defaults to 1\ntrainlayers: a vector of TrainLayer objects. With this argument it is possible  to specify the training parameters for each layer/RBM individually.  If the number of training epochs and the learning rate are not specified  explicitly for a layer, the values of epochs and learningrate are used.  For more information see help of TrainLayer.\nmonitoringdata: a data dictionary (see type DataDict)  The data is propagated forward through the  network to monitor higher levels.  If a non-empty dictionary is given, the monitoring functions in the  trainlayers-arguments must accept a DataDict as third argument.\nsamplehidden: boolean indicating that consequent layers are to be trained  with sampled values instead of the deterministic potential,  which is the default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.stackrbms_preparetrainlayers",
    "page": "Docstrings",
    "title": "BoltzmannMachines.stackrbms_preparetrainlayers",
    "category": "function",
    "text": "Prepares the layerwise training specifications for stackrbms \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.stackrbms_trainlayer",
    "page": "Docstrings",
    "title": "BoltzmannMachines.stackrbms_trainlayer",
    "category": "function",
    "text": "Trains a layer without partitioning for stackrbms. \n\n\n\n\n\nTrains a partitioned layer for stackrbms. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.traindbm!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.traindbm!",
    "category": "function",
    "text": "traindbm!(dbm, x; ...)\n\nTrains the dbm (a BasicDBM or a more general MultimodalDBM) using the learning procedure for a general Boltzmann Machine with the training data set x. A learning step consists of mean-field inference (positive phase), stochastic approximation by Gibbs Sampling (negative phase) and the parameter updates.\n\nOptional keyword arguments (ordered by importance):\n\nepoch: number of training epochs\nlearningrate/learningrates: a vector of learning rates for each epoch to  update the weights and biases. The learning rates should decrease with the  epochs, e. g. with the factor a / (b + epoch). If only one value is given as  learningrate, a and b are 11.0 and 10.0, respectively.\nnparticles: number of particles used for sampling, default 100\nmonitoring: A function that is executed after each training epoch.  It has to accept the trained DBM and the current epoch as arguments.\n\n\n\n\n\ntraindbm!(dbm, x, particles, learningrate)\n\nTrains the given dbm for one epoch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.trainrbm!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.trainrbm!",
    "category": "function",
    "text": "trainrbm!(rbm, x)\n\nTrains the given rbm for one epoch using the data set x. (See also function fitrbm.)\n\nOptional keyword arguments:\n\nlearningrate, cdsteps, sdlearningrate, upfactor, downfactor,  optimizer:  See documentation of function fitrbm.\nchainstate: a matrix for holding the states of the RBM\'s hidden nodes. If  it is specified, PCD is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.unnormalizedlogprob",
    "page": "Docstrings",
    "title": "BoltzmannMachines.unnormalizedlogprob",
    "category": "function",
    "text": "unnormalizedlogprob(mdbm, x; ...)\n\nEstimates the mean unnormalized log probability of the samples (rows in x) in the MultimodalDBM mdbm by running the Annealed Importance Sampling (AIS) in a smaller modified DBM for each sample.\n\nThe named optional arguments for AIS can be specified here. (See aislogimpweights)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.unnormalizedprobhidden",
    "page": "Docstrings",
    "title": "BoltzmannMachines.unnormalizedprobhidden",
    "category": "function",
    "text": "unnormalizedprobhidden(rbm, h)\nunnormalizedprobhidden(gbrbm, h)\n\nCalculates the unnormalized probability of the rbm\'s hidden nodes\' activations given by h.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.unnormalizedproboddlayers",
    "page": "Docstrings",
    "title": "BoltzmannMachines.unnormalizedproboddlayers",
    "category": "function",
    "text": "Computes the unnormalized probability of the nodes in layers with odd indexes, i. e. p*(v, h2, h4, ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.unnormalizedprobs",
    "page": "Docstrings",
    "title": "BoltzmannMachines.unnormalizedprobs",
    "category": "function",
    "text": "unnormalizedprobs(bm, samples)\n\nCalculates the unnormalized probabilities for all samples (vector of vectors), in the Boltzmann Machine bm.\n\nThe visible nodes of the bm must be Bernoulli distributed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.updateparameters!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.updateparameters!",
    "category": "function",
    "text": "updateparameters!(rbm, optimizer)\n\nUpdates the RBM rbm by walking a step in the direction of the gradient that has been computed by calling computegradient! on optimizer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.visibleinput",
    "page": "Docstrings",
    "title": "BoltzmannMachines.visibleinput",
    "category": "function",
    "text": "visibleinput(rbm, h)\n\nReturns activations of the visible nodes in the AbstractXBernoulliRBM rbm, sampled from the state h of the hidden nodes. h may be a vector or a matrix that contains the samples in its rows.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.visibleinput!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.visibleinput!",
    "category": "function",
    "text": "visibleinput!(v, rbm, h)\n\nLike visibleinput but stores the returned result in v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.visiblepotential",
    "page": "Docstrings",
    "title": "BoltzmannMachines.visiblepotential",
    "category": "function",
    "text": "visiblepotential(rbm, h)\nvisiblepotential(rbm, h, factor)\n\nReturns the potential for activations of the visible nodes in the AbstractRBM rbm, given the activations h of the hidden nodes. h may be a vector or a matrix that contains the samples in its rows. The potential is a deterministic value to which sampling can be applied to get the activations.\n\nThe total input can be scaled with the factor. This is needed when pretraining the rbm as part of a DBM.\n\nIn RBMs with Bernoulli distributed visible units, the potential of the visible nodes is the vector of probabilities for them to be turned on.\n\nFor a Binomial2BernoulliRBM, the visible units are sampled from a Binomial(2,p) distribution in the Gibbs steps. In this case, the potential is the vector of values for 2p. (The value is doubled to get a value in the same range as the sampled one.)\n\nFor GaussianBernoulliRBMs, the potential of the visible nodes is the vector of means of the Gaussian distributions for each node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.visiblepotential!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.visiblepotential!",
    "category": "function",
    "text": "visiblepotential!(v, rbm, h)\n\nLike visiblepotential but stores the returned result in v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoltzmannMachines.weightsinput!",
    "page": "Docstrings",
    "title": "BoltzmannMachines.weightsinput!",
    "category": "function",
    "text": "weightsinput!(input, input2, dbm, particles)\n\nComputes the input that results only from the weights (without biases) and the previous states in particles for all nodes in the DBM dbm and stores it in input. The state of the particles and the dbm is not altered. input2 must have the same size as input and particle. For performance reasons, input2 is used as preallocated space for storing intermediate results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BoltzmannMachines.AbstractBMBoltzmannMachines.AbstractLoglikelihoodOptimizerBoltzmannMachines.AbstractOptimizerBoltzmannMachines.AbstractRBMBoltzmannMachines.AbstractSamplerBoltzmannMachines.AbstractTrainLayerBoltzmannMachines.AbstractTrainLayersBoltzmannMachines.AbstractXBernoulliRBMBoltzmannMachines.BMsBoltzmannMachines.BasicDBMBoltzmannMachines.BeamAdversarialOptimizerBoltzmannMachines.BernoulliGaussianRBMBoltzmannMachines.BernoulliRBMBoltzmannMachines.Binomial2BernoulliRBMBoltzmannMachines.BoltzmannMachinesBoltzmannMachines.CombinedOptimizerBoltzmannMachines.DataDictBoltzmannMachines.GaussianBernoulliRBMBoltzmannMachines.GaussianBernoulliRBM2BoltzmannMachines.GibbsSamplerBoltzmannMachines.LoglikelihoodOptimizerBoltzmannMachines.MonitorBoltzmannMachines.MonitoringItemBoltzmannMachines.MultimodalDBMBoltzmannMachines.MultivariateBernoulliDistributionBoltzmannMachines.NoOptimizerBoltzmannMachines.NoRBMBoltzmannMachines.NoSamplerBoltzmannMachines.ParticleBoltzmannMachines.ParticlesBoltzmannMachines.PartitionedBernoulliDBMBoltzmannMachines.PartitionedOptimizerBoltzmannMachines.PartitionedRBMBoltzmannMachines.Softmax0BernoulliRBMBoltzmannMachines.StackedOptimizerBoltzmannMachines.TemperatureDrivenSamplerBoltzmannMachines.TrainLayerBoltzmannMachines.TrainPartitionedLayerBoltzmannMachines.aislogimpweightsBoltzmannMachines.aisprecisionBoltzmannMachines.aisstandarddeviationBoltzmannMachines.aisupdatelogimpweights!BoltzmannMachines.akaikeinformationcriterionBoltzmannMachines.alloc_h_for_vBoltzmannMachines.alloc_v_for_hBoltzmannMachines.assert_enoughvaluesforepochsBoltzmannMachines.assertinitoptimizersBoltzmannMachines.barsandstripesBoltzmannMachines.batchparallelizedBoltzmannMachines.bayesianinformationcriterionBoltzmannMachines.beamoptimizerBoltzmannMachines.bernoulli!BoltzmannMachines.bernoulliloglikelihoodbaserateBoltzmannMachines.binomial2!BoltzmannMachines.combinedbiasesBoltzmannMachines.computegradient!BoltzmannMachines.computegradientsweightsandbiases!BoltzmannMachines.converttodbmoptimizerBoltzmannMachines.converttomostspecifictypeBoltzmannMachines.converttopartitionedbernoullidbmBoltzmannMachines.copyannealed!BoltzmannMachines.correlationsBoltzmannMachines.crossvalidationBoltzmannMachines.crossvalidationargsBoltzmannMachines.curvebundlesBoltzmannMachines.defaultfinetuninglearningratesBoltzmannMachines.defaultoptimizerBoltzmannMachines.empiricalloglikelihoodBoltzmannMachines.emptyfuncBoltzmannMachines.energyBoltzmannMachines.energyzerohiddensBoltzmannMachines.evalBoltzmannMachines.exactloglikelihoodBoltzmannMachines.exactlogpartitionfunctionBoltzmannMachines.fitdbmBoltzmannMachines.fitrbmBoltzmannMachines.freeenergyBoltzmannMachines.freeenergydiffsBoltzmannMachines.gaussianloglikelihoodbaserateBoltzmannMachines.gibbssample!BoltzmannMachines.gibbssample_gamma!BoltzmannMachines.gibbssamplecond!BoltzmannMachines.hiddenbiasBoltzmannMachines.hiddeninputBoltzmannMachines.hiddeninput!BoltzmannMachines.hiddenpotentialBoltzmannMachines.hiddenpotential!BoltzmannMachines.includeBoltzmannMachines.initcombinationBoltzmannMachines.initcombinationoddlayersonlyBoltzmannMachines.initgammaprocessBoltzmannMachines.inithiddennodes!BoltzmannMachines.initializedBoltzmannMachines.initparticlesBoltzmannMachines.initrbmBoltzmannMachines.initsoftmaxrbmBoltzmannMachines.initvisiblebiasBoltzmannMachines.initvisiblenodes!BoltzmannMachines.intensitiesBoltzmannMachines.joindbmsBoltzmannMachines.joinrbmsBoltzmannMachines.joinvecsBoltzmannMachines.joinweightsBoltzmannMachines.log1pexpBoltzmannMachines.logitBoltzmannMachines.loglikelihoodBoltzmannMachines.loglikelihooddiffBoltzmannMachines.loglikelihoodoptimizerBoltzmannMachines.logmeanexpBoltzmannMachines.logpartitionfunctionBoltzmannMachines.logpartitionfunctionzeroweightsBoltzmannMachines.logpartitionfunctionzeroweights_hidtermBoltzmannMachines.logpartitionfunctionzeroweights_vistermBoltzmannMachines.logproblowerboundBoltzmannMachines.logsumexpBoltzmannMachines.meanfieldBoltzmannMachines.meansBoltzmannMachines.mixedrbmBoltzmannMachines.monitoraislogrBoltzmannMachines.monitoraisstandarddeviationBoltzmannMachines.monitorcordiffBoltzmannMachines.monitorcordiff!BoltzmannMachines.monitorexactloglikelihoodBoltzmannMachines.monitorexactloglikelihood!BoltzmannMachines.monitorfreeenergyBoltzmannMachines.monitorfreeenergy!BoltzmannMachines.monitorloglikelihoodBoltzmannMachines.monitorloglikelihood!BoltzmannMachines.monitorlogproblowerboundBoltzmannMachines.monitorlogproblowerbound!BoltzmannMachines.monitormeanandcordiff!BoltzmannMachines.monitormeandiffBoltzmannMachines.monitormeandiff!BoltzmannMachines.monitormeandiffpervariableBoltzmannMachines.monitormeandiffpervariable!BoltzmannMachines.monitorreconstructionerrorBoltzmannMachines.monitorreconstructionerror!BoltzmannMachines.monitorsdBoltzmannMachines.monitorsd!BoltzmannMachines.monitorweightsnormBoltzmannMachines.monitorweightsnorm!BoltzmannMachines.mostevenbatchesBoltzmannMachines.mostspecifictypeBoltzmannMachines.nearestneighbourcriticBoltzmannMachines.newparticleslikeBoltzmannMachines.next!BoltzmannMachines.next_oneornone!BoltzmannMachines.nextvisibles!BoltzmannMachines.nhiddennodesBoltzmannMachines.nmodelparametersBoltzmannMachines.nomonitoringBoltzmannMachines.nunitsBoltzmannMachines.nvisiblecombinationsBoltzmannMachines.nvisiblenodesBoltzmannMachines.oneornone_decodeBoltzmannMachines.oneornone_encodeBoltzmannMachines.partitioneddataBoltzmannMachines.piecewiselinearsequencesBoltzmannMachines.propagateforwardBoltzmannMachines.randombatchmasksBoltzmannMachines.rangesBoltzmannMachines.reconstructionerrorBoltzmannMachines.reverseddbmBoltzmannMachines.reversedrbmBoltzmannMachines.sample!BoltzmannMachines.samplefrequenciesBoltzmannMachines.samplegammaprocessBoltzmannMachines.samplehiddenBoltzmannMachines.samplehidden!BoltzmannMachines.samplehiddenpotential!BoltzmannMachines.sampleparticlesBoltzmannMachines.samplesBoltzmannMachines.samplevisibleBoltzmannMachines.samplevisible!BoltzmannMachines.samplevisiblepotential!BoltzmannMachines.sdupdatetermBoltzmannMachines.setdefaultsforunspecified!BoltzmannMachines.setvisiblebias!BoltzmannMachines.sigmBoltzmannMachines.sigm!BoltzmannMachines.sigm_bernoulli!BoltzmannMachines.softmax0!BoltzmannMachines.splitdataBoltzmannMachines.sqrt2piBoltzmannMachines.stackrbmsBoltzmannMachines.stackrbms_checkmonitoringdataBoltzmannMachines.stackrbms_preparetrainlayersBoltzmannMachines.stackrbms_trainlayerBoltzmannMachines.traindbm!BoltzmannMachines.trainrbm!BoltzmannMachines.unnormalizedlogprobBoltzmannMachines.unnormalizedprobhiddenBoltzmannMachines.unnormalizedproblogratiosBoltzmannMachines.unnormalizedproboddlayersBoltzmannMachines.unnormalizedprobsBoltzmannMachines.updateparameters!BoltzmannMachines.updateweightsandbiases!BoltzmannMachines.visiblebiasBoltzmannMachines.visibleinputBoltzmannMachines.visibleinput!BoltzmannMachines.visiblepotentialBoltzmannMachines.visiblepotential!BoltzmannMachines.weightshiddeninput!BoltzmannMachines.weightsinput!BoltzmannMachines.weightsvisibleinput!"
},

]}
