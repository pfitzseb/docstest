var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GenomicAnnotations.jl-1",
    "page": "Readme",
    "title": "GenomicAnnotations.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "GenomicAnnotations is a package for reading, modifying, and writing genomic annotations in the GenBank format."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia>]\npkg> add GenomicAnnotationsorusing Pkg\nPkg.add(\"GenomicAnnotations\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "GenBank files are read with readgbk(gbkfile), which returns a vector of Chromosomes. gbkfile can be gzipped as long as the filename ends in \".gz\". If we\'re only interested in the first chromosome in example.gbk we only need to store the first element.chr = readgbk(\"test/example.gbk\")[1]Chromosomes have five fields, name, header, genes, genedata, and sequence. The name is read from the header, which is stored as a string. The annotation data is stored in genedata, but generally you should use genes to access that data. For example, it can be used to iterate over annotations, and to modify them.for gene in chr.genes\n    gene.locus_tag = \"$(chr.name)_$(gene.locus_tag)\"\nend\n\nchr.genes[2].locus_tag = \"test123\"Accessing properties that haven\'t been stored will return missing. For this reason, it often makes more sense to use get() than to access the property directly.# chr.genes[2].pseudo returns missing, so this will throw an error\nif chr.genes[2].pseudo\n    println(\"Gene 2 is a pseudogene\")\nend\n\n# ... but this works:\nif get(chr.genes[2], :pseudo, false)\n    println(\"Gene 2 is a pseudogene\")\nendThe macro @genes can be used to filter through the annotations. The keyword gene is used to refer to the individual Genes. @genes can also be used to modify annotations.@genes(chr, :feature == \"CDS\") # Returns all coding regions\n@genes(chr, length(gene) > 300) # Returns all features longer than 300 nt\n@genes(chr, iscomplement(gene)) # Returns all features on the complement strand\n\n# The following two expressions are equivalent:\n@genes(chr, :feature == \"CDS\", length(gene) > 300)\n@genes(chr, (:feature == \"CDS\") && (length(gene) > 300))\n\n@genes(chr, :locus_tag == \"tag03\")[1].pseudo = true\ndelete!(@genes(chr, :pseudo)) # Delete all psudogenes. This works for all genes\n                              # where `:pseudo` is `true`, and ignores genes\n                              # where it is `false` or `missing`\ndelete!(@genes(chr, length(gene) <= 60)) # Delete all genes 60 nt or shorter\n\n# Some short-hand forms are available to make life easier:\n#     `iscds` expands to `:feature == \"CDS\"`, and\n#     `get(s::Symbol, default)` expands to `get(gene, s, default)`\n# The following two are thus equivalent:\n@genes(chr, :feature == \"CDS\", occursin(\"glycoprotein\", get(gene, :product, \"\")))\n@genes(chr, iscds, occursin(\"glycoprotein\", get(:product, \"\")))Gene sequences can be accessed with sequence(gene). For example, the following code will write the translated sequences of all protein-coding genes to a file:using BioSequences\nwriter = FASTA.Writer(open(\"proteins.fasta\", \"w\"))\nfor gene in @genes(chr, :feature == \"CDS\")\n    aaseq = translate(sequence(gene))\n    write(writer, FASTA.record(gene.locus_tag, get(gene, :product, \"\"), aaseq))\nend\nclose(writer)Genes can be added using addgene!, and sort! can be used to make sure that the resulting annotations are in the correct order.newgene = addgene!(chr, \"regulatory\", 670:677)\nnewgene.locus_tag = \"reg02\"\nsort!(chr.genes)After modifying the annotations, printgbk(io, chr) can be used to write them to a file.open(\"updated.gbk\", \"w\") do f\n    printgbk(f, chr)\nend"
},

{
    "location": "autodocs/#GenomicAnnotations.@genes",
    "page": "Docstrings",
    "title": "GenomicAnnotations.@genes",
    "category": "macro",
    "text": "@genes(chr, exs...)\n\nIterate over and evaluate expressions in exs for all genes in chr.genes, returning genes where all expressions evaluate to true. Any given symbol s in the expression will be substituted for gene.s. The gene itself can be accessed in the expression as gene (see example below).\n\njulia> chromosome = readgbk(\"example.gbk\")\nChromosome \'example\' (5028 bp) with 6 annotations\n\njulia> @genes(chromosome, :feature == \"CDS\") |> length\n3\n\njulia> @genes(chromosome, length(gene) < 500)\n     CDS             3..206\n                     /db_xref=\"GI:1293614\"\n                     /locus_tag=\"tag01\"\n                     /codon_start=\"3\"\n                     /product=\"TCP1-beta\"\n                     /protein_id=\"AAA98665.1\"\n\nAccessing properties of the returned list of genes returns a view, which can be altered.\n\njulia> @genes(chromosome, ismissing(:gene)) |> length\n2\n\njulia> @genes(chromosome, ismissing(:gene)).gene .= \"Unknown\";\n\njulia> @genes(chromosome, ismissing(:gene)) |> length\n0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.Locus",
    "page": "Docstrings",
    "title": "GenomicAnnotations.Locus",
    "category": "type",
    "text": "Struct for storing information on genomic locations. strand can be \'+\', \'-\', or \'.\' when the strand is irrelevant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.addgene!",
    "page": "Docstrings",
    "title": "GenomicAnnotations.addgene!",
    "category": "function",
    "text": "addgene!(chr::Chromosome, feature, locus; kw...)\n\nAdd gene to chr. locus can be a Locus, a UnitRange, or a StepRange.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.filterseq",
    "page": "Docstrings",
    "title": "GenomicAnnotations.filterseq",
    "category": "function",
    "text": "Parse footer (sequence) portion of a GenBank file, returning a String. When BioSequences is available for 0.7 this will be changed to a DNASequence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.iscomplement",
    "page": "Docstrings",
    "title": "GenomicAnnotations.iscomplement",
    "category": "function",
    "text": "iscomplement(gene::Abstract)\n\nReturn true if gene.locus.compliment == \'-\', otherwise return false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.parsechromosome",
    "page": "Docstrings",
    "title": "GenomicAnnotations.parsechromosome",
    "category": "function",
    "text": "parsechromosome(lines)\n\nParse and return one chromosome entry, and the line number that it ends at.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.parseposition",
    "page": "Docstrings",
    "title": "GenomicAnnotations.parseposition",
    "category": "function",
    "text": "Parse lines encoding genomic position, returning the feature as a String, and an instance of Locus.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.pushproperty!",
    "page": "Docstrings",
    "title": "GenomicAnnotations.pushproperty!",
    "category": "function",
    "text": "pushproperty!(gene::AbstractGene, name::Symbol, x::T)\n\nAdd a property to gene, similarly to Base.setproperty!(::gene), but if the property is not missing in gene, it will be transformed to store a vector instead of overwriting existing data.\n\njulia> eltype(chr.genedata[:EC_number])\nUnion{Missing,String}\n\njulia> chr.genes[1].EC_number = \"EC:1.2.3.4\"\n\"EC:1.2.3.4\"\n\njulia> pushproperty!(chr.genes[1], :EC_number, \"EC:4.3.2.1\"); chr.genes[1].EC_number\n2-element Array{String,1}:\n \"EC:1.2.3.4\"\n \"EC:4.3.2.1\"\n\njulia> eltype(chr.genedata[:EC_number])\nUnion{Missing, Array{String,1}}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.readgbk",
    "page": "Docstrings",
    "title": "GenomicAnnotations.readgbk",
    "category": "function",
    "text": "readgbk(filename)\n\nParse GenBank-formatted file filename, returning a Chromosome.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BioCore.sequence",
    "page": "Docstrings",
    "title": "BioCore.sequence",
    "category": "function",
    "text": "sequence(gene::AbstractGene)\n\nReturn genomic sequence for gene.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.vectorise",
    "page": "Docstrings",
    "title": "GenomicAnnotations.vectorise",
    "category": "function",
    "text": "vectorise(A::AbstractArray{Union{Missing, T}, 1}) where T\n\nConvert an array of type Vector{Union{Missing, T}} to Vector{Union{Missing, Vector{T}}}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GenomicAnnotations.@genesGenomicAnnotations.AbstractGeneGenomicAnnotations.ChromosomeGenomicAnnotations.GeneGenomicAnnotations.GeneDataViewGenomicAnnotations.GenomicAnnotationsGenomicAnnotations.LocusGenomicAnnotations.addgene!GenomicAnnotations.appendstringGenomicAnnotations.evalGenomicAnnotations.filterseqGenomicAnnotations.formatsequenceGenomicAnnotations.genes_helper!GenomicAnnotations.includeGenomicAnnotations.iscomplementGenomicAnnotations.parsechromosomeGenomicAnnotations.parseheaderGenomicAnnotations.parsepositionGenomicAnnotations.printgbkGenomicAnnotations.pushproperty!GenomicAnnotations.readgbkGenomicAnnotations.sequenceGenomicAnnotations.vectorise"
},

]}
