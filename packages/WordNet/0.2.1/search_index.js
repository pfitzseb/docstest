var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WordNet-1",
    "page": "Readme",
    "title": "WordNet",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: Build status)A Julia package for using Princeton\'s WordNet®, heavily inspired by Doches\' rwordnet."
},

{
    "location": "#Simple-Demo-1",
    "page": "Readme",
    "title": "Simple Demo",
    "category": "section",
    "text": "using WordNet\ndb = DB()WordNet.DBlemma = db[\'a\', \"glad\"]glad.ass = synsets(db, lemma)4-element Array{WordNet.Synset,1}: (a) glad (showing or causing joy and pleasure; especially made happy; \"glad you are here\"; \"glad that they succeeded\"; \"gave a glad shout\"; \"a glad smile\"; \"heard the glad news\"; \"a glad occasion\") (s) happy, glad (eagerly disposed to act or to be of service; \"glad to help\") (s) glad (feeling happy appreciation; \"glad of the fire\'s warmth\") (s) glad, beaming (cheerful and bright; \"a beaming smile\"; \"a glad May morning\")antonyms(db, ss[1])1-element Array{WordNet.Synset,1}: (a) sad (experiencing or showing sorrow or unhappiness; \"feeling sad because his dog had died\"; \"Better by far that you should forget and smile / Than that you should remember and be sad\"- Christina Rossetti)expanded_hypernyms(db, synsets(db, db[\'n\', \"DOG\"])[1])13-element Array{WordNet.Synset,1}: (n) canine, canid (any of various fissiped mammals with nonretractile claws and typically long muzzles) (n) carnivore (a terrestrial or aquatic flesh-eating mammal; \"terrestrial carnivores have four or five clawed digits on each limb\") (n) eutherian mammal, placental, placental mammal, eutherian (mammals having a placenta; all mammals except monotremes and marsupials) (n) mammalian, mammal (any warm-blooded vertebrate having the skin more or less covered with hair; young are born alive except for the small subclass of monotremes and nourished with milk) (n) vertebrate, craniate (animals having a bony or cartilaginous skeleton with a segmented spinal column and a large brain enclosed in a skull or cranium) (n) chordate (any animal of the phylum Chordata having a notochord or spinal column) (n) animal, creature, animate being, brute, beast, fauna (a living organism characterized by voluntary movement) (n) organism, being (a living thing that has (or can develop) the ability to act or function independently) (n) living thing, animate thing (a living (or once living) entity) (n) unit, whole (an assemblage of parts that is regarded as a single entity; \"how big is that part compared to the whole?\"; \"the team is a unit\") (n) physical object, object (a tangible and visible entity; an entity that can cast a shadow; \"it was full of rackets, balls and other objects\") (n) physical entity (an entity that has physical existence) (n) entity (that which is perceived or known or inferred to have its own distinct existence (living or nonliving))sensekey(db, synsets(db, db[\'n\', \"cat\"])[1], db[\'n\', \"cat\"])\"cat%1:05:00::\"sensekeys(db, db[\'n\', \"cat\"])8-element Array{SubString{String},1}: \"cat%1:05:00::\" \"cat%1:18:01::\" \"cat%1:18:00::\" \"cat%1:06:02::\" \"cat%1:06:00::\" \"cat%1:06:01::\" \"cat%1:05:02::\" \"cat%1:04:00::\""
},

{
    "location": "#Design-consideration-1",
    "page": "Readme",
    "title": "Design consideration",
    "category": "section",
    "text": "This package loads all of WordNet into memory. It\'s not terribly expensive, but it may not be suitable for all developers."
},

{
    "location": "#Wordnet-Data-1",
    "page": "Readme",
    "title": "Wordnet Data",
    "category": "section",
    "text": "The constructor DB can optionally take a path to a WordNet directory, containing a dict folder. This should work for any release of WordNet. If you do not specify such a path, WordNet 3.0 will automatically be downloaded the first time you call DB(). It will only be downloaded once. See DataDeps.jl\'s readme for more information.George A. Miller (1995). WordNet: A Lexical Database for English. Communications of the ACM Vol. 38, No. 11: 39-41."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WordNet.ADJECTIVE_POINTERSWordNet.ADVERB_POINTERSWordNet.ALSO_SEEWordNet.ANTONYMWordNet.ATTRIBUTEWordNet.CAUSEWordNet.DBWordNet.DERIVATIONALLY_RELATED_FORMWordNet.DERIVED_FROM_ADJECTIVEWordNet.DOMAIN_OF_SYNSET_REGIONWordNet.DOMAIN_OF_SYNSET_TOPICWordNet.DOMAIN_OF_SYNSET_USAGEWordNet.ENTAILMENTWordNet.HYPERNYMWordNet.HYPONYMWordNet.INSTANCE_HYPERNYMWordNet.InstanceHyponymWordNet.LemmaWordNet.MEMBER_HOLONYMWordNet.MEMBER_MERONYMWordNet.MEMBER_OF_THIS_DOMAIN_REGIONWordNet.MEMBER_OF_THIS_DOMAIN_TOPICWordNet.MEMBER_OF_THIS_DOMAIN_USAGEWordNet.NOUN_POINTERSWordNet.PARTICIPLE_OF_VERBWordNet.PART_HOLONYMWordNet.PART_MERONYMWordNet.PointerWordNet.SIMILAR_TOWordNet.SPACEWordNet.SUBSTANCE_HOLONYMWordNet.SUBSTANCE_MERONYMWordNet.SYNSET_TYPESWordNet.SynsetWordNet.VERB_GROUPWordNet.VERB_POINTERSWordNet.WordNetWordNet.__init__WordNet.antonymsWordNet.evalWordNet.expanded_hypernymsWordNet.hypernymsWordNet.hyponymsWordNet.includeWordNet.is_nothingWordNet.is_semanticWordNet.load_lemmasWordNet.load_sensekeysWordNet.load_synsetsWordNet.parse_int_hexWordNet.path_to_data_fileWordNet.path_to_index_fileWordNet.relationWordNet.sensekeyWordNet.sensekeysWordNet.synsetsWordNet.word_countWordNet.wordsWordNet.∅"
},

]}
