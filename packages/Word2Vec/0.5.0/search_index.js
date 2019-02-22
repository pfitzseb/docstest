var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Word2Vec-1",
    "page": "Readme",
    "title": "Word2Vec",
    "category": "section",
    "text": "(Image: License) (Image: Build Status) (Image: Coverage Status)Julia interface to word2vecWord2Vec takes a text corpus as input and produces the word vectors as output. Training is done using the original C code, other functionalities are pure Julia. See demo for more details.Release Notes"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Word2Vec\")Note: Only linux and OS X are supported."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "All exported functions are documented, i.e., we can type ? functionname to get help. For a list of functions, see here."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "We first download some text corpus, for example http://mattmahoney.net/dc/text8.zip.Suppose the file text8 is stored in the current working directory. We can train the model with the function word2vec.julia> word2vec(\"text8\", \"text8-vec.txt\", verbose = true)\nStarting training using file text8\nVocab size: 71291\nWords in train file: 16718843\nAlpha: 0.000002  Progress: 100.04%  Words/thread/sec: 350.44k  Now we can import the word vectors text8-vectxt to Julia.julia> model = wordvectors(\"./text8-vec\")\nWordVectors 71291 words, 100-element Float64 vectorsThe vector representation of a word can be obtained using get_vector.julia> get_vector(model, \"book\")\'\n100-element Array{Float64,1}:\n -0.05446138539336186\n  0.001090934639284009\n  0.06498087707990222\n  ⋮\n -0.0024113040415322516\n  0.04755140828570571\n  0.039764719065723826The cosine similarity of book, for example, can be computed using cosine_similar_words.julia> cosine_similar_words(model, \"book\")\n10-element Array{String,1}:\n \"book\"\n \"books\"\n \"diary\"\n \"story\"\n \"chapter\"\n \"novel\"\n \"preface\"\n \"poem\"\n \"tale\"\n \"bible\"Word vectors have many interesting properties. For example,  vector(king) - vector(man) + vector(woman) is close to vector(queen).5-element Array{String,1}:\n \"queen\"\n \"empress\"\n \"prince\"\n \"princess\"\n \"throne\""
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Tomas Mikolov, Kai Chen, Greg Corrado, and Jeffrey Dean, \"Efficient Estimation of Word Representations in Vector Space\", In Proceedings of Workshop at ICLR, 2013. [pdf]\nTomas Mikolov, Ilya Sutskever, Kai Chen, Greg Corrado, and Jeffrey Dean. \"Distributed Representations of Words and Phrases and their Compositionality\", In Proceedings of NIPS, 2013. [pdf]\nTomas Mikolov, Wen-tau Yih, and Geoffrey Zweig, \"Linguistic Regularities in Continuous Space Word Representations\", In Proceedings of NAACL HLT, 2013. [pdf]"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "The design of the package is inspired by Daniel Rodriguez (@danielfrg)\'s Python word2vec interface."
},

{
    "location": "#Reporting-Bugs-1",
    "page": "Readme",
    "title": "Reporting Bugs",
    "category": "section",
    "text": "Please file an issue to report a bug or request a feature."
},

{
    "location": "autodocs/#Word2Vec.analogy",
    "page": "Docstrings",
    "title": "Word2Vec.analogy",
    "category": "function",
    "text": "analogy(wv, pos, neg, n=5)\n\nCompute the analogy similarity between two lists of words. The positions and the similarity values of the top n similar words will be returned. For example, king - man + woman = queen will be pos=[\"king\", \"woman\"], neg=[\"man\"].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.analogy_words",
    "page": "Docstrings",
    "title": "Word2Vec.analogy_words",
    "category": "function",
    "text": "analogy_words(wv, pos, neg, n=5)\n\nReturn the top n words computed by analogy similarity between positive words pos and negaive words neg. from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.clusters",
    "page": "Docstrings",
    "title": "Word2Vec.clusters",
    "category": "function",
    "text": "clusters(wc)\n\nReturn all the clusters from the WordClusters wc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.cosine",
    "page": "Docstrings",
    "title": "Word2Vec.cosine",
    "category": "function",
    "text": "cosine(wv, word, n=10)\n\nReturn the position of n (by default n = 10) neighbors of word and their cosine similarities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.cosine_similar_words",
    "page": "Docstrings",
    "title": "Word2Vec.cosine_similar_words",
    "category": "function",
    "text": "cosine_similar_words(wv, word, n=10)\n\nReturn the top n (by default n = 10) most similar words to word from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.get_cluster",
    "page": "Docstrings",
    "title": "Word2Vec.get_cluster",
    "category": "function",
    "text": "get_cluster(wc, word)\n\nReturn the cluster number for a word in the vocabulary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.get_vector",
    "page": "Docstrings",
    "title": "Word2Vec.get_vector",
    "category": "function",
    "text": "get_vector(wv, word)\n\nReturn the vector representation of word from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.get_words",
    "page": "Docstrings",
    "title": "Word2Vec.get_words",
    "category": "function",
    "text": "get_words(wc, cluster)\n\nFor the WordCluster wc, return all the words from a given cluster number cluster.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.in_vocabulary",
    "page": "Docstrings",
    "title": "Word2Vec.in_vocabulary",
    "category": "function",
    "text": "in_vocabulary(wv, word)\n\nReturn true if word is part of the vocabulary of the WordVector wv and false otherwise.\n\n\n\n\n\nin_vocabulary(wc, word)\n\nFor the WordCluters wc, return true if word is part of the vocabulary of wc and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.index",
    "page": "Docstrings",
    "title": "Word2Vec.index",
    "category": "function",
    "text": "index(wv, word)\n\nReturn the index of word from the WordVectors wv.\n\n\n\n\n\nindex(wc, word)\n\nReturn the index of word from the WordCluaters wc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.similarity",
    "page": "Docstrings",
    "title": "Word2Vec.similarity",
    "category": "function",
    "text": "similarity(wv, word1, word2)\n\nReturn the cosine similarity value between two words word1 and word2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.size",
    "page": "Docstrings",
    "title": "Base.size",
    "category": "function",
    "text": "size(wv)\n\nReturn the word vector length and the number of words as a tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.vocabulary",
    "page": "Docstrings",
    "title": "Word2Vec.vocabulary",
    "category": "function",
    "text": "vocabulary(wv)\n\nReturn the vocabulary as a vector of words of the WordVectors wv.\n\n\n\n\n\nvocabulary(wc)\n\nReturn all the vocabulary of the WordClusters wc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.word2clusters",
    "page": "Docstrings",
    "title": "Word2Vec.word2clusters",
    "category": "function",
    "text": " word2cluster(train, output, classes; size=100, window=5, sample=1e-3, hs=0,  negative=5, threads=1, iter=5, min_count=5, alpha=0.025, debug=2, binary=1, cbow=1, save_vocal=Nothing(), read_vocab=Nothing(), verbose=false)\n\nParameters for training:\n    train <file>\n        Use text data from <file> to train the model\n    output <file>\n        Use <file> to save the resulting word vectors / word clusters\n    size <Int>\n        Set size of word vectors; default is 100\n    window <Int>\n        Set max skip length between words; default is 5\n    sample <AbstractFloat>\n        Set threshold for occurrence of words. Those that appear with\n        higher frequency in the training data will be randomly\n        down-sampled; default is 0 (off), useful value is 1e-5\n    hs <Int>\n        Use Hierarchical Softmax; default is 1 (0 = not used)\n    negative <Int>\n        Number of negative examples; default is 0, common values are 5 - 10\n        (0 = not used)\n    threads <Int>\n        Use <Int> threads (default 1)\n    iter <Int>\n        Run more training iterations (default 5)\n    min_count <Int>\n        This will discard words that appear less than <Int> times\n        (default 5)\n    alpha <AbstractFloat>\n        Set the starting learning rate; default is 0.025\n    classes <Int>\n        Number of word classes; if 0, output word classes rather than\n        word vectors (default 0)\n    debug <Int>\n        Set the debug mode (default = 2 = more info during training)\n    binary <Int>\n        Save the resulting vectors in binary moded; default is 0 (off)\n    cbow <Int>\n        Use the continuous back of words model; default is 1 (0 for skip-gram\n        model)\n    save_vocab <file>\n        The vocabulary will be saved to <file>\n    read_vocab <file>\n        The vocabulary will be read from <file>, not constructed from the\n        training data\n    verbose <Bool>\n        Print output from training\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.word2phrase",
    "page": "Docstrings",
    "title": "Word2Vec.word2phrase",
    "category": "function",
    "text": " word2phrase(train, output; min_count=5, threshold=100, debug=2)\n\nParameters for training:\ntrain <file>\n      Use text data from <file> to train the model \noutput <file>\n          Use <file> to save the resulting word vectors / \n          word clusters / phrases\nmin_count <Int>\n          This will discard words that appear less than <int> times; \n          default is 5\nthreshold <AbstractFloat>\n  	      The <AbstractFloat> value represents threshold for \n          forming the phrases (higher means less phrases); default 100\ndebug <Int>\n      Set the debug mode (default = 2 = more info during training)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.word2vec",
    "page": "Docstrings",
    "title": "Word2Vec.word2vec",
    "category": "function",
    "text": " word2vec(train, output; size=100, window=5, sample=1e-3, hs=0,  negative=5, threads=12, iter=5, min_count=5, alpha=0.025, debug=2, binary=1, cbow=1, save_vocal=Nothing(), read_vocab=Nothing(), verbose=false,)\n\nParameters for training:\n    train <file>\n        Use text data from <file> to train the model\n    output <file>\n        Use <file> to save the resulting word vectors / word clusters\n    size <Int>\n        Set size of word vectors; default is 100\n    window <Int>\n        Set max skip length between words; default is 5\n    sample <AbstractFloat>\n        Set threshold for occurrence of words. Those that appear with\n        higher frequency in the training data will be randomly\n        down-sampled; default is 1e-5.\n    hs <Int>\n        Use Hierarchical Softmax; default is 1 (0 = not used)\n    negative <Int>\n        Number of negative examples; default is 0, common values are \n        5 - 10 (0 = not used)\n    threads <Int>\n        Use <Int> threads (default 12)\n    iter <Int>\n        Run more training iterations (default 5)\n    min_count <Int>\n        This will discard words that appear less than <Int> times; default\n        is 5\n    alpha <AbstractFloat>\n        Set the starting learning rate; default is 0.025\n    debug <Int>\n        Set the debug mode (default = 2 = more info during training)\n    binary <Int>\n        Save the resulting vectors in binary moded; default is 0 (off)\n    cbow <Int>\n        Use the continuous back of words model; default is 1 (skip-gram\n        model)\n    save_vocab <file>\n        The vocabulary will be saved to <file>\n    read_vocab <file>\n        The vocabulary will be read from <file>, not constructed from the\n        training data\n    verbose <Bool>\n        Print output from training\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.wordclusters",
    "page": "Docstrings",
    "title": "Word2Vec.wordclusters",
    "category": "function",
    "text": "wordclusters(fname)\n\nGenerate a WordClusters type object from the text file fname.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Word2Vec.wordvectors",
    "page": "Docstrings",
    "title": "Word2Vec.wordvectors",
    "category": "function",
    "text": "wordvectors(filename [,type=Float64][; kind=:text, skip=false, normalize=true])\n\nGenerate a WordVectors type object from a file.\n\nArguments\n\nfilename::AbstractString the embeddings file name\ntype::Type type of the embedding vector elements; default Float64\n\nKeyword arguments\n\nkind::Symbol specifies whether the embeddings file is textual (:text)\n\nor binary (:binary); default :text\n\nskip::Bool in binary embeddings files specifies whether the newline\n\nbyte is missing or not (use true for Google pre-trained models); default false\n\nnormalize:Bool specifies whether to normalize the embedding vectors\n\ni.e. return unit vectors; default true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Word2Vec.Word2VecWord2Vec.WordClustersWord2Vec.WordVectorsWord2Vec._from_binaryWord2Vec._from_textWord2Vec.analogyWord2Vec.analogy_wordsWord2Vec.clustersWord2Vec.cosineWord2Vec.cosine_similar_wordsWord2Vec.evalWord2Vec.get_clusterWord2Vec.get_vectorWord2Vec.get_wordsWord2Vec.in_vocabularyWord2Vec.includeWord2Vec.indexWord2Vec.similarityWord2Vec.sizeWord2Vec.vocabularyWord2Vec.word2clustersWord2Vec.word2phraseWord2Vec.word2vecWord2Vec.wordclustersWord2Vec.wordvectors"
},

]}
