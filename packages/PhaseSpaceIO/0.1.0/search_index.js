var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PhaseSpaceIO-1",
    "page": "Readme",
    "title": "PhaseSpaceIO",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using PhaseSpaceIO\n\njulia> path = joinpath(dirname(pathof(PhaseSpaceIO)), \"..\", \"test\", \"assets\",\"some_file.IAEAphsp\");\n\njulia> ps = iaea_iterator(collect,path)\n1-element Array{Particle{0,1},1}:\n Particle(typ=photon, E=1.0, weight=2.0, x=3.0, y=4.0, z=5.0, u=0.53259337, v=0.3302265, w=-0.7792912, new_history=true, extra_floats=(), extra_ints=(13,))\n\njulia> dir = mkpath(tempname())\n\"/tmp/julia7uigbI\"\n\njulia> readdir(dir)\n0-element Array{String,1}\n\njulia> path = joinpath(dir, \"hello\")\n\"/tmp/julia7uigbI/hello\"\n\njulia> iaea_writer(path, RecordContents{0,1}()) do w\n           for p in ps\n               write(w,p)\n           end\n       end\n\njulia> readdir(dir)\n2-element Array{String,1}:\n \"hello.IAEAheader\"\n \"hello.IAEAphsp\"  "
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PhaseSpaceIO.AbstractPhaseSpacePhaseSpaceIO.ByteBufferPhaseSpaceIO.CollectPhaseSpaceIO.EXT_HEADERPhaseSpaceIO.EXT_PHSPPhaseSpaceIO.GeneratedAttributesPhaseSpaceIO.GettersPhaseSpaceIO.IAEAPathPhaseSpaceIO.MANDATORY_KEYWORDSPhaseSpaceIO.ParticlePhaseSpaceIO.ParticleTypePhaseSpaceIO.PhaseSpacePhaseSpaceIO.PhaseSpaceIOPhaseSpaceIO.PhaseSpaceIteratorPhaseSpaceIO.PhaseSpaceWriterPhaseSpaceIO.RKEYPhaseSpaceIO.RecordContentsPhaseSpaceIO.TestingPhaseSpaceIO._applyPhaseSpaceIO._iteratePhaseSpaceIO.bytelengthPhaseSpaceIO.cleanup_recordPhaseSpaceIO.comporessed_particle_no_defaults_sizeofPhaseSpaceIO.compressed_particle_sizeofPhaseSpaceIO.electronPhaseSpaceIO.evalPhaseSpaceIO.extra_float_countPhaseSpaceIO.extra_long_countPhaseSpaceIO.histmapPhaseSpaceIO.iaea_iteratorPhaseSpaceIO.iaea_writerPhaseSpaceIO.includePhaseSpaceIO.incrementPhaseSpaceIO.iselectronPhaseSpaceIO.isemptylinePhaseSpaceIO.iskeylinePhaseSpaceIO.isneutronPhaseSpaceIO.isphotonPhaseSpaceIO.ispositronPhaseSpaceIO.isprotonPhaseSpaceIO.loadPhaseSpaceIO.map_many_functionsPhaseSpaceIO.neutronPhaseSpaceIO.parsekeyPhaseSpaceIO.photonPhaseSpaceIO.phsp_iteratorPhaseSpaceIO.phsp_writerPhaseSpaceIO.positronPhaseSpaceIO.print_headerPhaseSpaceIO.print_keyPhaseSpaceIO.print_record_contentsPhaseSpaceIO.print_valPhaseSpaceIO.println_kvPhaseSpaceIO.protonPhaseSpaceIO.ptypePhaseSpaceIO.read_headerPhaseSpaceIO.read_header_dictPhaseSpaceIO.read_particlePhaseSpaceIO.read_particle_explicit_bufPhaseSpaceIO.readbuf!PhaseSpaceIO.readbuf_default!PhaseSpaceIO.readbuf_particle!PhaseSpaceIO.readtuplePhaseSpaceIO.stripcommentsPhaseSpaceIO.validate_header_dictPhaseSpaceIO.write_defaultPhaseSpaceIO.write_particle"
},

]}
