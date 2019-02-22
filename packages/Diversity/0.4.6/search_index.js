var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Diversity-1",
    "page": "Readme",
    "title": "Diversity",
    "category": "section",
    "text": "Package for measuring and partitioning diversityDocumentation PackageEvaluator Build Status of master\n[![][docs-stable-img]][docs-stable-url] [![][pkg-0.6-img]][pkg-0.6-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url]\n[![][docs-latest-img]][docs-latest-url] [![Works with 1.0!][pkg-1.0-img]][pkg-1.0-url] [![][codecov-img]][codecov-url] [![][coveralls-img]][coveralls-url]"
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "Diversity is a Julia package that provides functionality for measuring alpha, beta and gamma diversity of metacommunities (e.g. ecosystems) and their constituent subcommunities. It uses the diversity measures described in the arXiv paper [arXiv:1404.6520 (q-bio.QM)][paper-url], How to partition diversity. It also provides a series of other older diversity measures through sub-modules. Currently these are all ecological diversity measures, but this will be expanded through interfacing to EcoJulia and BioJulia.This package is in beta now, but is cross-validated against our R package [boydorr/rdiversity][rdiversity-url], which is developed independently, so please [raise an issue][issues-url] if you find any problems. We now use a DataFrame as the common output format for all of the diversity calculations to provide consistency with our R package [rdiversity][rdiversity-url]. The code is not optimised for speed at the moment due to the substantial changes that have happened to it under the hood, and the Phylogenetics submodule is also new, and may need further improvements.Version 0.4, which is the current release, has significant breaking changes to the underlying code, but everything works with Julia v0.6, v0.7 and v1.0 as far as we\'re aware. It is periodically working with Julia nightly but that is not a high priority now that Julia 1.0 has been released. Older interfaces from Diversity v0.2 have been removed in v0.4."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in the General registry on v1.0 and v0.7 as well as METADATA on Julia v0.6 and so can be installed with add. For example on Julia v1.0:(v1.0) pkg> add Diversity\n Resolving package versions...\n  Updating `~/.julia/environments/v1.0/Project.toml`\n  [xxxxxxxx] + Diversity v0.4.4\n  Updating `~/.julia/environments/v1.0/Manifest.toml`\n  [xxxxxxxx] + Diversity v0.4.4\n...\n\n(v1.0) pkg>"
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "The package is tested against the current Julia v1.0 release, and also the previous v0.6 and v0.7 versions, on Linux, macOS, and Windows."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems or would just like to ask a question."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Diversity-2",
    "page": "Readme",
    "title": "Diversity",
    "category": "section",
    "text": "The main package provides basic numbers-equivalent diversity measures (described in Hill, 1973), similarity-sensitive diversity measures (generalised from Hill, and described in [Leinster and Cobbold, 2012][leinster-cobbold-url]), and related alpha, beta and gamma diversity measures at the level of the metacommunity and its component subcommunities (generalised in turn from Leinster and Cobbold, and described in [arXiv:1404.6520 (q-bio.QM)][paper-url]). The diversity functions exist both with unicode names (e.g. ᾱ()), which are not automatically exported as we feel they are too short and with matching ascii names (e.g. NormalisedAlpha()), which are. We also provide a general function for extract any diversity measure for a series of subcommunity relative abundances."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "Before calculating diversity a Metacommunity object must be created. This object contains all the information needed to calculate diversity.# Load the package into Julia\nusing Diversity\n\n# Example population\npop = [1 1 0; 2 0 0; 3 1 4]\npop = pop / sum(pop)\n\n# Create Metacommunity object\nmeta = Metacommunity(pop)"
},

{
    "location": "#Calculating-diversity-1",
    "page": "Readme",
    "title": "Calculating diversity",
    "category": "section",
    "text": "First we need to calculate the low-level diversity component seperately, by passing a metacommunity object to the appropriate function; RawAlpha(), NormalisedAlpha(), RawBeta(), NormalisedBeta(), RawRho(), NormalisedRho(), or Gamma().# First, calculate the normalised alpha component\ncomponent = NormalisedAlpha(meta)Afterwhich, subdiv() or metadiv() are used to calculate subcommunity or metacommunity diversity, respectively (since both subcommunity and metacommunity diversity measures are transformations of the same low-level components, this is computationally more efficient).# Then, calculate species richness of the subcommunities\nsubdiv(component, 0)\n\n# or the average (alpha) species richness across the whole population\nmetadiv(component, 0)\n\n# We can also generate a diversity profile by calculating multiple q-values simultaneously\ndf = subdiv(component, 0:30)In some instances, it may be useful to calculate all subcommunity (or metacommunity) measures. In which case, a Metacommunity object may be passed directly to subdiv() or metadiv():# To calculate all subcommunity diversity measures\nsubdiv(meta, 0:2)\n\n# To calculate all metacommunity diversity measures\nmetadiv(meta, 0:2)Alternatively, if computational efficiency is not an issue, a single measure of diversity may be calculated directly by calling a wrapper function:norm_sub_alpha(meta, 0:2)A complete list of these functions is shown below:raw_sub_alpha() : per-subcommunity estimate of naive-community metacommunity diversity\nnorm_sub_alpha() : similarity-sensitive diversity of each subcommunity in isolation\nraw_sub_rho() : redundancy of individual subcommunities\nnorm_sub_rho() : representativeness of individual subcommunities\nraw_sub_beta() : distinctiveness of individual subcommunities\nnorm_sub_beta() : per-subcommunity estimate of effective number of distinct subcommunities\nsub_gamma() : contribution per individual in a subcommunity toward metacommunity diversity\nraw_meta_alpha() : naive-community metacommunity diversity\nnorm_meta_alpha() : average similarity-sensitive diversity of subcommunities\nraw_meta_rho() : average redundancy of subcommunities\nnorm_meta_rho() : average representativeness of subcommunities\nraw_meta_beta() : average distinctiveness of subcommunities\nnorm_meta_beta() : effective number of distinct subcommunities\nmeta_gamma() : metacommunity similarity-sensitive diversity"
},

{
    "location": "#Phylogenetics-1",
    "page": "Readme",
    "title": "Phylogenetics",
    "category": "section",
    "text": "Phylogenetic diversity (described [here][leinster-cobbold-url]) is automatically included in the Diversity module when the Phylo package is loaded. Documentation for these diversity measures can be found here. The phylogenetics code relies on the [Phylo][phylo-url] package to generate trees to incorporate into the diversity code, and the Diversity.Phylogenetics sub-package will be created when both main packages are loaded:julia> using Diversity, Phylo\nCreating Diversity to Phylo interface...\n\njulia> communities = [4 1; 3 2; 1 0; 0 1] / 12;\n\njulia> nt = rand(Nonultrametric(4))\nNamedTree phylogenetic tree with 7 nodes and 6 branches\nLeaf names:\nString[\"tip 1\", \"tip 2\", \"tip 3\", \"tip 4\"]\n\njulia> metaphylo = Metacommunity(communities, PhyloTypes(nt));\n\njulia> raw_meta_rho(metaphylo, [1, 2])\n2×8 DataFrames.DataFrame\n│ Row │ div_type     │ measure │ q │ type_level │ type_name │ partition_level │ partition_name │ diversity │\n├─────┼──────────────┼─────────┼───┼────────────┼───────────┼─────────────────┼────────────────┼───────────┤\n│ 1   │ Phylogenetic │ RawRho  │ 1 │ types      │           │ metacommunity   │                │ 1.75622   │\n│ 2   │ Phylogenetic │ RawRho  │ 2 │ types      │           │ metacommunity   │                │ 1.61371   │The package also provides some other sub-modules for related measures:"
},

{
    "location": "#Diversity.Ecology-1",
    "page": "Readme",
    "title": "Diversity.Ecology",
    "category": "section",
    "text": "Many existing ecological diversity measures can be derived from our diversity measures, and so we provide them in the Diversity.Ecology submodule along with generalised versions of them that relate to our general measures of alpha, beta and gamma diversity at subcommunity and metacommunity levels. The generalisations of species richness, Shannon entropy and Simpson\'s index are the only standard measures we are aware of whose subcommunity components sum directly to the corresponding metacommunity measure (although note that Simpson\'s index decreases for increased diversity, so small components are more diverse). Documentation for these diversity measures can be found here."
},

{
    "location": "#Diversity.Hill-1",
    "page": "Readme",
    "title": "Diversity.Hill",
    "category": "section",
    "text": "Hill numbers are found in the Diversity.Hill sub-module. Documentation for these diversity measures can be found here."
},

{
    "location": "#Diversity.Jost-1",
    "page": "Readme",
    "title": "Diversity.Jost",
    "category": "section",
    "text": "Lou Jost\'s diversity measures are found in the Diversity.Jost sub-module. Documentation for these diversity measures is here."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Documentation is generated by the Base documentation in Julia and online via the Documenter package."
},

{
    "location": "#Usage-2",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Accessing the documentation in Julia is easy:using Diversity\n\n# Returns any documentation for the subdiv() function\n?subdivThe documentation is also available online."
},

{
    "location": "#Stable-branch-1",
    "page": "Readme",
    "title": "Stable branch",
    "category": "section",
    "text": "The online documentation for the current stable branch is [here][docs-stable-url]."
},

{
    "location": "#Master-branch-1",
    "page": "Readme",
    "title": "Master branch",
    "category": "section",
    "text": "The online documentation for the latest master (unreleased) branch is [here][docs-latest-url].[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://richardreeve.github.io/Diversity.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://richardreeve.github.io/Diversity.jl/stable[travis-img]: https://travis-ci.org/richardreeve/Diversity.jl.svg?branch=master [travis-url]: https://travis-ci.org/richardreeve/Diversity.jl?branch=master[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/richardreeve/Diversity.jl?svg=true&branch=master [appveyor-url]: https://ci.appveyor.com/project/richardreeve/diversity-jl/branch/master[coveralls-img]: https://img.shields.io/coveralls/richardreeve/Diversity.jl.svg [coveralls-url]: https://coveralls.io/r/richardreeve/Diversity.jl?branch=master[codecov-img]: https://codecov.io/gh/richardreeve/Diversity.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/richardreeve/Diversity.jl[issues-url]: https://github.com/richardreeve/Diversity.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/Diversity_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=Diversity&ver=0.6[pkg-1.0-img]: http://pkg.julialang.org/badges/Diversity_1.0.svg [pkg-1.0-url]: http://pkg.julialang.org/?pkg=Diversity&ver=1.0[paper-url]: http://arxiv.org/abs/1404.6520[rdiversity-url]: https://github.com/boydorr/rdiversity[leinster-cobbold-url]: http://www.esajournals.org/doi/abs/10.1890/10-2402.1[phylo-url]: https://github.com/richardreeve/Phylo.jl"
},

{
    "location": "autodocs/#Diversity.API",
    "page": "Docstrings",
    "title": "Diversity.API",
    "category": "module",
    "text": "The Diversity.API submodule should be imported if you want to create a new type, partition or metacommunity subtype. Otherwise it can be ignored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Diversity",
    "page": "Docstrings",
    "title": "Diversity.Diversity",
    "category": "module",
    "text": "The main Diversity module provides basic numbers-equivalent diversity measures (described in Hill, 1973), similarity-sensitive diversity measures (generalised from Hill, and described in Leinster and Cobbold, 2012), and related alpha, beta and gamma diversity measures at the level of the metacommunity and its component subcommunities (generalised in turn from Leinster and Cobbold, and described in Reeve et al, 2014). The diversity functions exist both with unicode names (e.g. ᾱ()), which are not automatically exported (as we feel they are too short) and with matching longer ASCII names (e.g. NormalisedAlpha()), which are. We also provide functions to calculate appropriate subcommunityDiversity() and metacommunityDiversity() values for each measure, a general diversity() function for extract any diversity measure at a series of scales.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.DiversityLevel",
    "page": "Docstrings",
    "title": "Diversity.DiversityLevel",
    "category": "type",
    "text": "Enumeration of levels that can exist / be calculated for a metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.DiversityMeasure",
    "page": "Docstrings",
    "title": "Diversity.DiversityMeasure",
    "category": "type",
    "text": "DiversityMeasure\n\nThis type is the abstract supertype of all diversity measure types. DiversityMeasure subtypes allow you to calculate and cache any kind of diversity of a metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Ecology",
    "page": "Docstrings",
    "title": "Diversity.Ecology",
    "category": "module",
    "text": "The Diversity.Ecology module replicates old ecological diversity measures and generalised versions of them that relate to our general measures of alpha, beta and gamma diversity at subcommunity and metacommunity levels. The generalisations of the richness, Shannon and Simpson are the only standard measures we are aware of whose subcommunity components sum directly to the corresponding ecosystem measure (although note that Simpson\'s index decreases for increased diversity, so small components are more diverse).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Gamma",
    "page": "Docstrings",
    "title": "Diversity.Gamma",
    "category": "type",
    "text": "Gamma\n\nCalculates gamma diversity (γ) of all of the individuals in a metacommunity, and caches them for subsequent analysis. This is a subtype of PowerMeanMeasure, meaning that all composite diversity measures are simple powermeans of the individual measures.\n\nConstructor arguments:\n\nmeta: a Metacommunity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.GeneralTypes",
    "page": "Docstrings",
    "title": "Diversity.GeneralTypes",
    "category": "type",
    "text": "GeneralTypes{FP, M}\n\nAn AbstractTypes subtype with a general similarity matrix. This subtype simply holds a matrix with similarities between individuals.\n\nMembers:\n\nz A two-dimensional matrix representing similarity between\n\nindividuals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Hill",
    "page": "Docstrings",
    "title": "Diversity.Hill",
    "category": "module",
    "text": "Hill numbers are found in the Diversity.Hill package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Jost",
    "page": "Docstrings",
    "title": "Diversity.Jost",
    "category": "module",
    "text": "Lou Jost\'s diversity measures are found in the Diversity.Jost module.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Metacommunity",
    "page": "Docstrings",
    "title": "Diversity.Metacommunity",
    "category": "type",
    "text": "Metacommunity{FP, ARaw, AProcessed, Part, Sim}\n\nMetacommunity type, representing a whole metacommunity containing a single community or a collection of subcommunities. The metacommunity of individuals may be further partitioned into smaller groups. For instance this may be an ecosystem, which consists of a series of subcommunities. The AbstractPartition subtype within it stores relative abundances of different types, e.g. species, and also allows for similarity between individuals.\n\nConstructor:\n\nMetacommunity(abundances::AbstractArray,               part::AbstractPartition,               types::AbstractTypes)\n\nMembers:\n\nabundances the abundance matrix for the metacommunity.\npartition the instance of the AbstractPartition subtype, containing the subcommunities.\ntypes The instance of the AbstractTypes subtype, from which similarities between individuals can be calculated.\nordinariness A cache of the ordinariness of the individuals in the Partition. Should only be accessed through getordinariness!(::Metacommunity), which will populate the cache if it has not yet been calculated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.NormalisedAlpha",
    "page": "Docstrings",
    "title": "Diversity.NormalisedAlpha",
    "category": "type",
    "text": "NormalisedAlpha\n\nCalculates normalised alpha diversity (ᾱ) of all of the individuals in a metacommunity, and caches them for subsequent analysis. This is a subtype of PowerMeanMeasure, meaning that all composite diversity measures are simple powermeans of the individual measures.\n\nConstructor arguments:\n\nmeta: a Metacommunity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.NormalisedBeta",
    "page": "Docstrings",
    "title": "Diversity.NormalisedBeta",
    "category": "type",
    "text": "NormalisedBeta\n\nCalculates normalised beta diversity (β̄) of all of the individuals in a metacommunity, and caches them for subsequent analysis. This is a subtype of RelativeEntropyMeasure, meaning that subcommunity and type composite diversity measures are relative entropies, and their composite types are powermeans of those measures.\n\nConstructor arguments:\n\nmeta: a Metacommunity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.NormalisedRho",
    "page": "Docstrings",
    "title": "Diversity.NormalisedRho",
    "category": "type",
    "text": "NormalisedRho\n\nCalculates redundancy (ρ̄, normalised beta diversity) of all of the individuals in a metacommunity, and caches them for subsequent analysis. This is a subtype of PowerMeanMeasure, meaning that all composite diversity measures are simple powermeans of the individual measures.\n\nConstructor arguments:\n\nmeta: a Metacommunity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Onecommunity",
    "page": "Docstrings",
    "title": "Diversity.Onecommunity",
    "category": "type",
    "text": "Onecommunity\n\nAbstractPartition subtype containing only one subcommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.PowerMeanMeasure",
    "page": "Docstrings",
    "title": "Diversity.PowerMeanMeasure",
    "category": "type",
    "text": "PowerMeanMeasure\n\nThis abstract DiversityMeasure subtype is the supertype of all diversity measures which are straight power means. PowerMeanMeasure subtypes allow you to calculate and cache any kind of diversity of a metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.RawAlpha",
    "page": "Docstrings",
    "title": "Diversity.RawAlpha",
    "category": "type",
    "text": "RawAlpha\n\nCalculates raw alpha diversity (α) of all of the individuals in a metacommunity, and caches them for subsequent analysis. This is a subtype of PowerMeanMeasure, meaning that all composite diversity measures are simple powermeans of the individual measures.\n\nConstructor arguments:\n\nmeta: a Metacommunity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.RawBeta",
    "page": "Docstrings",
    "title": "Diversity.RawBeta",
    "category": "type",
    "text": "RawBeta\n\nCalculates distinctiveness (β, raw beta diversity) of all of the individuals in a metacommunity, and caches them for subsequent analysis. This is a subtype of RelativeEntropyMeasure, meaning that subcommunity and type composite diversity measures are relative entropies, and their composite types are powermeans of those measures.\n\nConstructor arguments:\n\nmeta: a Metacommunity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.RawRho",
    "page": "Docstrings",
    "title": "Diversity.RawRho",
    "category": "type",
    "text": "RawRho\n\nCalculates redundancy (ρ, raw beta diversity) of all of the individuals in a metacommunity, and caches them for subsequent analysis. This is a subtype of PowerMeanMeasure, meaning that all composite diversity measures are simple powermeans of the individual measures.\n\nConstructor arguments:\n\nmeta: a Metacommunity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.RelativeEntropyMeasure",
    "page": "Docstrings",
    "title": "Diversity.RelativeEntropyMeasure",
    "category": "type",
    "text": "RelativeEntropyMeasure\n\nThis abstract DiversityMeasure subtype is the supertype of all diversity measures which are relative entropy-based diversity measures. RelativeEntropyMeasure subtypes allow you to calculate and cache any kind of diversity of a metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Species",
    "page": "Docstrings",
    "title": "Diversity.Species",
    "category": "type",
    "text": "Species\n\nA subtype of AbstractTypes where all species are completely distinct. This type is the simplest AbstractTypes subtype, which identifies all species as unique and completely distinct from each other.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Subcommunities",
    "page": "Docstrings",
    "title": "Diversity.Subcommunities",
    "category": "type",
    "text": "Subcommunities(num)\n\nAbstractPartition subtype with multiple subcommunities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.Taxonomy",
    "page": "Docstrings",
    "title": "Diversity.Taxonomy",
    "category": "type",
    "text": "Taxonomy\n\nA subtype of AbstractTypes with similarity between related taxa, creating taxonomic similarity matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.UniqueTypes",
    "page": "Docstrings",
    "title": "Diversity.UniqueTypes",
    "category": "type",
    "text": "UniqueTypes\n\nA subtype of AbstractTypes where all individuals are completely distinct. This type is the simplest AbstractTypes subtype, which identifies all individuals as unique and completely distinct from each other.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity._getmeta",
    "page": "Docstrings",
    "title": "Diversity._getmeta",
    "category": "function",
    "text": "_getmeta(dm::DiversityMeasure)\n\nReturn the metacommunity belonging to the DiversityMeasure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.addedoutputcols",
    "page": "Docstrings",
    "title": "Diversity.addedoutputcols",
    "category": "function",
    "text": "addedoutputcols(m::AbstractAssemblage)\naddedoutputcols(t::AbstractTypes)\n\nReturns the name of any additional columns needed to disambiguate the diversity type used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.calcsimilarity",
    "page": "Docstrings",
    "title": "Diversity.calcsimilarity",
    "category": "function",
    "text": "calcsimilarity(t::AbstractTypes, scale::Real)\n\nRetrieves (and possibly calculates) a similarity matrix from t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.countsubcommunities",
    "page": "Docstrings",
    "title": "Diversity.countsubcommunities",
    "category": "function",
    "text": "countsubcommunities(m::AbstractAssemblage)\ncountsubcommunities(p::AbstractPartition)\n\nReturns number of subcommunities in an AbstractPartition object or the AbstractAssemblage containing it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.counttypes",
    "page": "Docstrings",
    "title": "Diversity.counttypes",
    "category": "function",
    "text": "counttypes(m::AbstractAssemblage[, raw::Bool = false])\ncounttypes(t::AbstractTypes[, raw::Bool = false])\n\nReturns number of types in an AbstractTypes object or the AbstractAssemblage containing it. raw determines whether to count the number of raw or processed types, which varies, for instance, when the types are determined by a phylogeny.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.diversity",
    "page": "Docstrings",
    "title": "Diversity.diversity",
    "category": "function",
    "text": "Calculates subcommunity and metacommunity diversities\n\nCalculates any diversity of a Metacommunity for a series of orders, repesented as one or a vector of qs.\n\nArguments:\n\ndls: an iterable collection of DiversityLevels\ndms: an iterable collection of DiversityMeasures\nmeta: a Metacommunity\nqs: single number or vector of values of parameter q\n\nReturns:\n\nA vector containing all of the diversity levels of all of the requested diversities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getASCIIName",
    "page": "Docstrings",
    "title": "Diversity.getASCIIName",
    "category": "function",
    "text": "getASCIIName(dm::DiversityMeasure)\n\nReturn the ASCII name of the DiversityMeasure\n\nArguments:\n\ndm: DiversityMeasure\n\nReturns:\n\nString containing simple ASCII name of DiversityMeasure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getFullName",
    "page": "Docstrings",
    "title": "Diversity.getFullName",
    "category": "function",
    "text": "getFullName(dm::DiversityMeasure)\n\nReturn the full name of the DiversityMeasure.\n\nArguments:\n\ndm: DiversityMeasure\n\nReturns:\n\nString containing full descriptive name of DiversityMeasure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getName",
    "page": "Docstrings",
    "title": "Diversity.getName",
    "category": "function",
    "text": "getName(dm::DiversityMeasure)\n\nReturn the character corresponding to the DiversityMeasure.\n\nArguments:\n\ndm: DiversityMeasure\n\nReturns:\n\nString containing unicode (greek) name of DiversityMeasure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getabundance",
    "page": "Docstrings",
    "title": "Diversity.getabundance",
    "category": "function",
    "text": "getabundance(m::AbstractAssemblage, raw::Bool)\n\nReturns the abundances array of the metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getaddedoutput",
    "page": "Docstrings",
    "title": "Diversity.getaddedoutput",
    "category": "function",
    "text": "getaddedoutput(::AbstractTypes)\n\nReturns the contents of any additional columns to be added to outputs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getdiversityname",
    "page": "Docstrings",
    "title": "Diversity.getdiversityname",
    "category": "function",
    "text": "getdiversityname(m::AbstractAssemblage)\ngetdiversityname(t::AbstractTypes)\n\nReturns the name of the diversity type used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getmetaabundance",
    "page": "Docstrings",
    "title": "Diversity.getmetaabundance",
    "category": "function",
    "text": "getmetaabundance(m::AbstractAssemblage)\n\nReturns the metacommunity abundances of the metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getmetaordinariness!",
    "page": "Docstrings",
    "title": "Diversity.getmetaordinariness!",
    "category": "function",
    "text": "getmetaordinariness!(m::AbstractAssemblage)\n\nReturns (and possibly calculates) the ordinariness of the metacommunity as a whole.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getordinariness!",
    "page": "Docstrings",
    "title": "Diversity.getordinariness!",
    "category": "function",
    "text": "getordinariness!(m::AbstractAssemblage)\n\nReturns (and possibly calculates) the ordinariness array of the subcommunities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getpartition",
    "page": "Docstrings",
    "title": "Diversity.getpartition",
    "category": "function",
    "text": "getpartition(m::AbstractAssemblage)\n\nReturns the AbstractPartition component of the metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getsubcommunitynames",
    "page": "Docstrings",
    "title": "Diversity.getsubcommunitynames",
    "category": "function",
    "text": "getsubcommunitynames(m::AbstractAssemblage)\ngetsubcommunitynames(p::AbstractPartition)\n\nReturns the names of the subcommunities in an AbstractPartition object or the AbstractAssemblage containing it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.gettypenames",
    "page": "Docstrings",
    "title": "Diversity.gettypenames",
    "category": "function",
    "text": "gettypenames(m::AbstractAssemblage[, raw::Bool = false])\ngettypenames(t::AbstractTypes[, raw::Bool = false])\n\nReturns the names of the types of the AbstractTypes object or the AbstractAssemblage containing it. raw determines whether to count the number of raw or processed types, which varies, for instance, when the types are determined by a phylogeny.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.gettypes",
    "page": "Docstrings",
    "title": "Diversity.gettypes",
    "category": "function",
    "text": "gettypes(m::AbstractAssemblage)\n\nReturns the AbstractTypes component of the metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.getweight",
    "page": "Docstrings",
    "title": "Diversity.getweight",
    "category": "function",
    "text": "getweight(m::AbstractAssemblage)\n\nReturns the subcommunity weights of the metacommunity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.hassimilarity",
    "page": "Docstrings",
    "title": "Diversity.hassimilarity",
    "category": "function",
    "text": "hassimilarity(t::AbstractAssemblage)\nhassimilarity(t::AbstractThings)\n\nIs there similarity of some non-trivial type in the object?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.inddiv",
    "page": "Docstrings",
    "title": "Diversity.inddiv",
    "category": "function",
    "text": "inddiv(measure::DiversityMeasure, q::Real)\ninddiv(measure::DiversityMeasure, qs::AbstractVector{Real})\n\nTakes a diversity measure and single order or vector of orders, and returns a DataFrame containing the individual diversities for those values.\n\nArguments:\n\ndm: DiversityMeasure\nq / qs: a single order or a vector of orders\n\nReturns:\n\nReturns individual diversities of dm for a single order q or a vector of order qs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.individualDiversity",
    "page": "Docstrings",
    "title": "Diversity.individualDiversity",
    "category": "constant",
    "text": "Generates the function to calculate individual diversities\n\nGenerates the function to calculate individual diversities for a series of orders, represented as a vector of qs.\n\nArguments:\n\ndm: DiversityMeasure\n\nReturns:\n\nFunction which takes a single number or vector of values of parameter q, and returns the individual diversities for those values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.metacommunityDiversity",
    "page": "Docstrings",
    "title": "Diversity.metacommunityDiversity",
    "category": "constant",
    "text": "Generates the function to calculate metacommunity diversity\n\nGenerates the function to calculate metacommunity diversity for a series of orders, represented as a vector of qs.\n\nArguments:\n\ndm: DiversityMeasure\n\nReturns:\n\nFunction which takes a single number or vector of values of parameter q, and returns the metacommunity diversities for those values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.metadiv",
    "page": "Docstrings",
    "title": "Diversity.metadiv",
    "category": "function",
    "text": "metadiv(measure::DiversityMeasure, q::Real)\nmetadiv(measure::DiversityMeasure, qs::AbstractVector{Real})\n\nTakes a diversity measure and single order or vector of orders, and calculates and returns the metacommunity diversities for those values.\n\nArguments:\n\ndm: DiversityMeasure\nq / qs: a single order or a vector of orders\n\nReturns:\n\nReturns metacommunity diversities of dm for a single order q or a vector of order qs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.powermean",
    "page": "Docstrings",
    "title": "Diversity.powermean",
    "category": "function",
    "text": "Calculates the weighted powermean of a series of numbers\n\nCalculates orderth power mean of values, weighted by weights. By default, weights are equal and order is 1, so this is just the arithmetic mean.\n\nArguments:\n\nvalues: values for which to calculate mean\norder: order of power mean\nweights: weights of elements, normalised to 1 inside function\n\nReturns:\n\nweighted power mean(s)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.qD",
    "page": "Docstrings",
    "title": "Diversity.qD",
    "category": "function",
    "text": "qD\n\nCalculates Hill / naive-similarity diversity of order(s) qs of a population with given relative proportions.\n\nArguments:\n\nproportions: relative proportions of different types in population\nqs: single number or vector of orders of diversity measurement\n\nReturns:\n\nDiversity of order qs (single number or vector of diversities)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.qDZ",
    "page": "Docstrings",
    "title": "Diversity.qDZ",
    "category": "function",
    "text": "qDZ\n\nCalculates Leinster-Cobbold / similarity-sensitive diversity of >= 1 order(s) qs of a population with given relative proportions, and similarity matrix Z.\n\nArguments:\n\nproportions: relative proportions of different types in a population\nqs: single number or vector of orders of diversity measurement\nZ: similarity matrix\n\nReturns:\n\nDiversity of order qs (single number or vector of diversities)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.subcommunityDiversity",
    "page": "Docstrings",
    "title": "Diversity.subcommunityDiversity",
    "category": "constant",
    "text": "Generates the function to calculate subcommunity diversity\n\nGenerates the function to calculate subcommunity diversity for a series of orders, represented as a vector of qs.\n\nArguments:\n\ndm: DiversityMeasure\n\nReturns:\n\nFunction which takes a single number or vector of values of parameter q, and returns the subcommunity diversities for those values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diversity.subdiv",
    "page": "Docstrings",
    "title": "Diversity.subdiv",
    "category": "function",
    "text": "subdiv(measure::DiversityMeasure, q::Real)\nsubdiv(measure::DiversityMeasure, qs::AbstractVector{Real})\n\nTakes a diversity measure and single order or vector of orders, and calculates and returns the subcommunity diversities for those values.\n\nArguments:\n\ndm: DiversityMeasure\nq / qs: a single order or a vector of orders\n\nReturns:\n\nReturns subcommunity diversities of dm for a single order q or a vector of order qs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Diversity.APIDiversity.AbstractIteratorDiversity.DistinctivenessDiversity.DiversityDiversity.DiversityLevelDiversity.DiversityMeasureDiversity.EcologyDiversity.GammaDiversity.GeneralTypesDiversity.HillDiversity.JostDiversity.MetacommunityDiversity.NormalisedAlphaDiversity.NormalisedBetaDiversity.NormalisedRhoDiversity.OnecommunityDiversity.PowerMeanMeasureDiversity.RawAlphaDiversity.RawBetaDiversity.RawRhoDiversity.RedundancyDiversity.RelativeEntropyMeasureDiversity.RepresentativenessDiversity.ShortNamesDiversity.SpeciesDiversity.SubcommunitiesDiversity.SubcommunityIteratorDiversity.TaxonomyDiversity.TypeIteratorDiversity.UniqueTypesDiversity.__init__Diversity._getmetaDiversity.addedoutputcolsDiversity.calcsimilarityDiversity.communityDiversityDiversity.countsubcommunitiesDiversity.counttypesDiversity.createsummarylineDiversity.diversityDiversity.evalDiversity.getASCIINameDiversity.getFullNameDiversity.getNameDiversity.getPartitionFunctionDiversity.getabundanceDiversity.getaddedoutputDiversity.getdiversitynameDiversity.getmetaabundanceDiversity.getmetaordinariness!Diversity.getordinariness!Diversity.getpartitionDiversity.getsubcommunitynamesDiversity.gettypenamesDiversity.gettypesDiversity.getweightDiversity.hassimilarityDiversity.includeDiversity.inddivDiversity.inddiv_rawDiversity.individualDiversityDiversity.meta_gammaDiversity.metacommunityDiversityDiversity.metadivDiversity.metadiv_rawDiversity.norm_meta_alphaDiversity.norm_meta_betaDiversity.norm_meta_rhoDiversity.norm_sub_alphaDiversity.norm_sub_betaDiversity.norm_sub_rhoDiversity.pathDiversity.powermeanDiversity.qDDiversity.qDZDiversity.raw_meta_alphaDiversity.raw_meta_betaDiversity.raw_meta_rhoDiversity.raw_sub_alphaDiversity.raw_sub_betaDiversity.raw_sub_rhoDiversity.sub_gammaDiversity.subcommunityDiversityDiversity.subdivDiversity.subdiv_rawDiversity.typeCollectionDiversityDiversity.typeDiversity"
},

]}
