var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Table-of-Contents-1",
    "page": "Readme",
    "title": "Table of Contents",
    "category": "section",
    "text": "BytePairEncoding.jl\nAPI\nUnicode Normalization\nExamples\nRoadmap<a id=\"orgf71fdec\"></a>"
},

{
    "location": "#BytePairEncoding.jl-1",
    "page": "Readme",
    "title": "BytePairEncoding.jl",
    "category": "section",
    "text": "Pure Julia implementation of  the Byte Pair Encoding(BPE) method  in the subword neural machine translation paper. It\'s a port of  the original python package subword-nmt. BytePairEncoding.jl support different tokenize method(with the help of WordTokenizers.jl). You can simply use set_tokenizer([your tokenize function])  and then Learn the BPE map with it.<a id=\"org57e4c00\"></a>"
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "BPELearner([vocabulary files]; num_sym, min_freq, endsym, normalizer) \nwork as the learning configure.\nnum_sym: how many pair to generate.\nmin_freq: threshold of learned pair frequency.\nendsym: the symbol for seperate internal & last pair, if is set, it will automatically    invoke set_endsym(endsym.\nnormalizer: normalizer type, default is identity(not normalized),    see next section for define normalization\nadd!(::BPELearner, newfile)\nadd a new file to learner.\nlearn!(::BPELearner)\nlearn the bpe map.\nemit(::BPELearner, output_filename)\ngenerate the bpe map file.\nBpe(bpefile; glossaries, merge, sepsym, endsym, normalizer)\nthe bpe encoding related config.\nmerge: how many pair to load.\nsepsym: seperator symbol for internal pair, default is \"\".\nendsym: end symbol of the last pair, default \"</w>\".\nglossaries: a list of glossaries, support both Regex & String.\nnormalizer: normalizer type,  default is identity(not normalized),    see next section for define normalization\nprocess_line(::Bpe, line): segment a given line the join as a new line,    leading & trailing whitesplace will remmain.\nsegment(::Bpe, line): segment a line into a list of segments\nsegment_token(::Bpe, token::String): segment a given token or a list of tokens.\nset_endsym(::String): set the end symbol, default \"</w>\".\nset_tokenizer(func): set the tokenizer fucntion , default is nltk_word_tokenize.\nwhitespace_tokenize(str): simply the split(str) function, for use with set_tokenizer.<a id=\"orga334417\"></a>"
},

{
    "location": "#Unicode-Normalization-1",
    "page": "Readme",
    "title": "Unicode Normalization",
    "category": "section",
    "text": "support unicode normalizationUtfNormalizer\nwrapper type on Julia built-in unicode normalization function\nUtfNormalizer(::Symbol): support :NFC, :NFD, :NFKC, :NFKD, :NFKC_CF\nUtfNormalizer([option_names=all_default_false]): options (stable, compat,    compose, decompose, stripignore, rejectna, newline2ls, newline2ps, newline2lf,    stripcc, casefold, lump, stripmark), usage example: UtfNormalizer(stable=true, compose=true)\nnormalize(::AbstractNormalizer, ::String): normalize given string with specific normalizer.<a id=\"org6777a55\"></a>"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.0.2 (2018-11-08)\n _/ |\\__\'_|_|_|\\__\'_|  |\n|__/                   |\n\njulia> using BytePairEncoding\n\njulia> using WordTokenizers\n\njulia> set_tokenizer(nltk_word_tokenize)\ntokenize (generic function with 1 method)\n\njulia> norm = UtfNormalizer(:NFKC)\nUtfNormalizer(14)\n\njulia> vocabfiles = [\"./data/.....\", \"./another/data/.....\" ...]\n\njulia> bper = BPELearner(vocabfiles, 1000; normalizer=norm)\nBPELearner(num_sym=1000, min_freq=2, endsym=\"</w>\", normailzer=UtfNormalizer)\n\njulia> learn!(bper)\n\njulia> emit(bper, \"./bpe.out\")\n\"./bpe.out\"\n\njulia> bpe = Bpe(\"./bpe.out\"; normalizer=norm)\nBpe(merge=-1, sepsym=\"\", endsym=\"</w>\", num_glossaries=0, normalizer=UtfNormalizer)\n\njulia> sample_sent =  \"It\'s interesting that technology often works as a servant for us, yet frequently we become a\n servant to it. E-mail is a useful tool but many feel controlled by this new tool. The average business person is g\netting about 80e-mails per day and many feel that about 80% of the messages in their \\\"Inbox\\\" are of little or no\n       value. So, I have four suggestions to help you to become better at \\\"Erasing E-mail\\\".\\n1.Get off the lists.\n The best way to deal with a problem is to never have it. If you are receiving a lot of unwanted e-mails, ask to be\n removed from the various lists. This would include your inclusion in unwanted lists.\\n2.\\\"Unlisted address\\\". Just\n as you keep an \\\"unlisted\\\" telephone number that you share only with those whom you want to have direct access to\n, you might want to get a separate e-mail address only for the important communications you wish to receive.\\n\"\n\"It\'s interesting that technology often works as a servant for us, yet frequently we become a servant to it. E-mail\n is a useful tool but many feel controlled by this new tool. The average business person is getting about 80e-mails\n per day and many feel that about 80% of the messages in their \\\"Inbox\\\" are of little or no\\nvalue. So, I have fou\nr suggestions to help you to become better at \\\"Erasing E-mail\\\".\\n1.Get off the lists. The best way to deal with a\n problem is to never have it. If you are receiving a lot of unwanted e-mails, ask to be removed from the various li\nsts. This would include your inclusion in unwanted lists.\\n2.\\\"Unlisted address\\\". Just as you keep an \\\"unlisted\\\"\n telephone number that you share only with those whom you want to have direct access to, you might want to get a se\nparate e-mail address only for the important communications you wish to receive.\\n\"\n\njulia> first(split_sentences(sample_sent))\n\"It\'s interesting that technology often works as a servant for us, yet frequently we become a servant to it.\"\n\njulia> segment(bpe, ans)\n42-element Array{String,1}:\n \"I\"        \n \"t</w>\"    \n \"\'\"        \n \"s</w>\"    \n \"inter\"    \n \"est\"      \n \"ing</w>\"  \n \"that</w>\" \n \"t\"        \n \"ec\"       \n \"h\"        \n \"no\"       \n \"lo\"       \n \"g\"        \n \"y</w>\"    \n \"of\"       \n \"ten</w>\"  \n \"works</w>\"\n \"as</w>\"   \n \"a</w>\"    \n ⋮          \n \"us</w>\"   \n \",</w>\"    \n \"y\"        \n \"et</w>\"   \n \"f\"        \n \"re\"       \n \"qu\"       \n \"ent\"      \n \"ly</w>\"   \n \"we</w>\"   \n \"b\"        \n \"ecom\"     \n \"e</w>\"    \n \"a</w>\"    \n \"serv\"     \n \"ant</w>\"  \n \"to</w>\"   \n \"it</w>\"   \n \".</w>\"    \n\njulia> for sentence ∈ split_sentences(sample_sent)\n           println(process_line(bpe, sentence))\n       end\nI t</w> \' s</w> inter est ing</w> that</w> t ec h no lo g y</w> of ten</w> works</w> as</w> a</w> serv ant</w> for<\n/w> us</w> ,</w> y et</w> f re qu ent ly</w> we</w> b ecom e</w> a</w> serv ant</w> to</w> it</w> .</w>\nE - ma il</w> is</w> a</w> us e ful</w> tool</w> but</w> many</w> fe el</w> cont ro l led</w> by</w> this</w> new</\nw> tool</w> .</w>\nT he</w> a ver age</w> b us in ess</w> pers on</w> is</w> g et ting</w> about</w> 8 0 e - ma il s</w> p er</w> day<\n/w> and</w> many</w> fe el</w> that</w> about</w> 8 0</w> %</w> of</w> the</w> m es sa ges</w> in</w> their</w> ` `\n</w> In bo x</w> \' \'</w> are</w> of</w> l it t le</w> or</w> no</w>\nvalue</w> .</w>\nS o</w> ,</w> I</w> have</w> f our</w> su g g es tions</w> to</w> help</w> you</w> to</w> b ecom e</w> bet ter</w>\nat</w> ` `</w> E r as ing</w> E - ma il</w> \' \'</w> .</w>\n1 . G et</w> of f</w> the</w> li sts</w> .</w>\nT he</w> b est</w> way</w> to</w> de al</w> with</w> a</w> pro bl em</w> is</w> to</w> n ever</w> have</w> it</w> .\n</w>\nI f</w> you</w> are</w> recei ving</w> a</w> l ot</w> of</w> un w an ted</w> e - ma il s</w> ,</w> as k</w> to</w>\nbe</w> re mo ved</w> from</w> the</w> vari ous</w> li sts</w> .</w>\nT his</w> would</w> incl u de</w> your</w> incl us i on</w> in</w> un w an ted</w> li sts</w> .</w>\n2 .</w> \' \'</w> U n li sted</w> ad d ress</w> \' \'</w> .</w>\nJ ust</w> as</w> you</w> ke ep</w> an</w> ` `</w> un li sted</w> \' \'</w> t el e ph one</w> numb er</w> that</w> you\n</w> sh are</w> only</w> with</w> those</w> who m</w> you</w> want</w> to</w> have</w> di rec t</w> acc ess</w> to<\n/w> ,</w> you</w> might</w> want</w> to</w> get</w> a</w> se par ate</w> e - ma il</w> ad d ress</w> only</w> for</\nw> the</w> im por t ant</w> comm un ic ations</w> you</w> w ish</w> to</w> receive</w> .</w>\n\njulia><a id=\"orgd74ca5a\"></a>"
},

{
    "location": "#Roadmap-1",
    "page": "Readme",
    "title": "Roadmap",
    "category": "section",
    "text": "add more interface and function\nadd pre-learned bpe map\nsupport for different bpe format\nsupport custom normalization\nsupport for google sentencepiece\nMaybe add to Embeddings.jl with bpemb: pre-train bpe embedding"
},

{
    "location": "autodocs/#BytePairEncoding._add_se_sym",
    "page": "Docstrings",
    "title": "BytePairEncoding._add_se_sym",
    "category": "function",
    "text": "add seperator and end symbol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding._regex_escape",
    "page": "Docstrings",
    "title": "BytePairEncoding._regex_escape",
    "category": "function",
    "text": "regex escape from https://github.com/JuliaLang/julia/pull/29643\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.add!",
    "page": "Docstrings",
    "title": "BytePairEncoding.add!",
    "category": "function",
    "text": "add a new file to learner\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.adjacent_pairs",
    "page": "Docstrings",
    "title": "BytePairEncoding.adjacent_pairs",
    "category": "function",
    "text": "get the adjacent pair of merged pair\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.bi_pairs",
    "page": "Docstrings",
    "title": "BytePairEncoding.bi_pairs",
    "category": "function",
    "text": "find adjacent characters. return a list of Pair\n\n\n\n\n\nfind adjacent element. return a list of Pair\n\n\n\n\n\nif only length one, return []\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.emit",
    "page": "Docstrings",
    "title": "BytePairEncoding.emit",
    "category": "function",
    "text": "emit the BPE map to ofile; can add one-line comment to the header(first line)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.get_freq",
    "page": "Docstrings",
    "title": "BytePairEncoding.get_freq",
    "category": "function",
    "text": "get pair freq\n\n\n\n\n\nget word freq\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.get_vocab",
    "page": "Docstrings",
    "title": "BytePairEncoding.get_vocab",
    "category": "function",
    "text": "get vocab with frequency counts\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.isolate_gloss",
    "page": "Docstrings",
    "title": "BytePairEncoding.isolate_gloss",
    "category": "function",
    "text": "isolate given glossary in a word\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.learn!",
    "page": "Docstrings",
    "title": "BytePairEncoding.learn!",
    "category": "function",
    "text": "learn a BPE map\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.lowestpair",
    "page": "Docstrings",
    "title": "BytePairEncoding.lowestpair",
    "category": "function",
    "text": "find pair with lowest rank\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.merge_pair!",
    "page": "Docstrings",
    "title": "BytePairEncoding.merge_pair!",
    "category": "function",
    "text": "merge the gived pair and update Statistic\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.merged_pairs",
    "page": "Docstrings",
    "title": "BytePairEncoding.merged_pairs",
    "category": "function",
    "text": "merge the pair in the word tuple\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.most_freq",
    "page": "Docstrings",
    "title": "BytePairEncoding.most_freq",
    "category": "function",
    "text": "most frequently pair\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.process_line",
    "page": "Docstrings",
    "title": "BytePairEncoding.process_line",
    "category": "function",
    "text": "process a line, remain leading & trailing whitespace\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.segment",
    "page": "Docstrings",
    "title": "BytePairEncoding.segment",
    "category": "function",
    "text": "segment a given sentence\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.segment_token",
    "page": "Docstrings",
    "title": "BytePairEncoding.segment_token",
    "category": "function",
    "text": "bpe tokens\n\n\n\n\n\nbpe a token and add seperator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.set_endsym",
    "page": "Docstrings",
    "title": "BytePairEncoding.set_endsym",
    "category": "function",
    "text": "set the default end symbol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.toStrTuple",
    "page": "Docstrings",
    "title": "BytePairEncoding.toStrTuple",
    "category": "function",
    "text": "toStrTuple(x; ends)\n\nTurn string to a Tuple of each character in string. The last char will be concatenate with a ends. fefault ends = \"</w>\"\n\n#Example\n\njulia> x = toStrTuple(\"abcdef\"; ends = \"</w>\")\n(\"a\", \"b\", \"c\", \"d\", \"e\", \"f</w>\")\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.update!",
    "page": "Docstrings",
    "title": "BytePairEncoding.update!",
    "category": "function",
    "text": "update Statistic of the new merged pair\n\n\n\n\n\nupdate Statistic of the removed adjacent pairs\n\n\n\n\n\nupdate a tuple\n\n\n\n\n\nupdate a word\n\n\n\n\n\nupdate a frequency vocab\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BytePairEncoding.whitespace_tokenize",
    "page": "Docstrings",
    "title": "BytePairEncoding.whitespace_tokenize",
    "category": "function",
    "text": "simply the built-in split function for the origin tokenize method in subword-nmt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BytePairEncoding.AbstractNormalizerBytePairEncoding.BPELearnerBytePairEncoding.BpeBytePairEncoding.BytePairEncodingBytePairEncoding.StatisticBytePairEncoding.UnNormalizerBytePairEncoding.UtfNormalizerBytePairEncoding._add_se_symBytePairEncoding._compute_optionsBytePairEncoding._regex_escapeBytePairEncoding.add!BytePairEncoding.adjacent_pairsBytePairEncoding.bi_pairsBytePairEncoding.emitBytePairEncoding.evalBytePairEncoding.get_freqBytePairEncoding.get_vocabBytePairEncoding.includeBytePairEncoding.isolate_glossBytePairEncoding.learn!BytePairEncoding.lowestpairBytePairEncoding.merge_pair!BytePairEncoding.merged_pairsBytePairEncoding.most_freqBytePairEncoding.normalizeBytePairEncoding.process_lineBytePairEncoding.segmentBytePairEncoding.segment_tokenBytePairEncoding.set_endsymBytePairEncoding.set_tokenizerBytePairEncoding.toStrTupleBytePairEncoding.tokenizeBytePairEncoding.update!BytePairEncoding.whitespace_tokenize"
},

]}
