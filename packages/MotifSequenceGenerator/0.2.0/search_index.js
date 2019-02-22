var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MotifSequenceGenerator-1",
    "page": "Readme",
    "title": "MotifSequenceGenerator",
    "category": "section",
    "text": "Documentation Travis AppVeyor\n(Image: ) (Image: Build Status) (Image: Build status)A julia module to generate random sequences of motifs, under the constrain that the sequence has some given total length."
},

{
    "location": "autodocs/#MotifSequenceGenerator.MotifSequenceGenerator",
    "page": "Docstrings",
    "title": "MotifSequenceGenerator.MotifSequenceGenerator",
    "category": "module",
    "text": "MotifSequenceGenerator\n\nThis module generates random sequences of motifs, under the constrain that the sequence has some total length ℓ so that q - δq ≤ ℓ ≤ q + δq. All main functionality is given by the function random_sequence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MotifSequenceGenerator._motifs_at_origin",
    "page": "Docstrings",
    "title": "MotifSequenceGenerator._motifs_at_origin",
    "category": "function",
    "text": "_motifs_at_origin(motifs, limits, translate) -> (motifs0, motiflens)\n\nBring all motifs to the origin and compute the motif lengths.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MotifSequenceGenerator._random_sequence_try",
    "page": "Docstrings",
    "title": "MotifSequenceGenerator._random_sequence_try",
    "category": "function",
    "text": "_random_sequence_try(motiflens, q, δq [, ws]) -> seq, seq_length\n\nReturn a random sequence of motif indices so that the total sequence is guaranteed to have total length of q - δq ≤ ℓ ≤ q - δq + maximum(motiflens).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MotifSequenceGenerator.all_possible_sums",
    "page": "Docstrings",
    "title": "MotifSequenceGenerator.all_possible_sums",
    "category": "function",
    "text": "all_possible_sums(summands, n)\n\nCompute all possible sums from combining n elements from summands (with repetition), only using unique combinations.\n\nReturn a vector of tuples: the first entry of each tuple is the sum, while the second is the indices of summands used to compute the sum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MotifSequenceGenerator.random_sequence",
    "page": "Docstrings",
    "title": "MotifSequenceGenerator.random_sequence",
    "category": "function",
    "text": "random_sequence(motifs::Vector{M}, q, limits, translate, δq = 0; kwargs...)\n\nCreate a random sequence of motifs of type M, under the constraint that the sequence has \"length\" ℓ exactly within q - δq ≤ ℓ ≤ q + δq. Return the sequence itself as well as the sequence of indices of motifs used to create it. A vector of probabilities weights can be given as a keyword argument, which then dictates the sampling probability for each entry of motifs for the initial sequence created.\n\n\"length\" here means an abstracted length defined by the struct M, based on the limits and translate functions. It does not refer to the amount of elements!\n\nM can be anything, given the two functions\n\nlimits(motif) : Some function that given the motif it returns the (start, fine) of the the motif in the same units as q. This function establishes a measure of length, which simply is fine - start.\ntranslate(motif, t) : Some function that given the motif it returns a new motif which is translated by t (either negative or positive), with respect to the same units as q.\n\nOther Keywords\n\nPlease see the source code (use @which) for a full description of the algorithm.\n\ntries = 5 : Up to how many initial random sequences are accepted.\ntaulcut = 2 : Up to how times an element is dropped from the initial guess.\nsummands = 3 : Up to how many motifs may be combined as a sum to complete a sequence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MotifSequenceGenerator.DeadEndMotifsMotifSequenceGenerator.MotifSequenceGeneratorMotifSequenceGenerator._complete_sequence!MotifSequenceGenerator._complete_sequence_extra!MotifSequenceGenerator._complete_sequence_remainder!MotifSequenceGenerator._instantiate_sequenceMotifSequenceGenerator._motifs_at_originMotifSequenceGenerator._random_sequence_tryMotifSequenceGenerator._toweightMotifSequenceGenerator.all_possible_sumsMotifSequenceGenerator.evalMotifSequenceGenerator.includeMotifSequenceGenerator.random_sequence"
},

]}
