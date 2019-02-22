var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LCIO-bindings-for-Julia-1",
    "page": "Readme",
    "title": "LCIO bindings for Julia",
    "category": "section",
    "text": "Build Status:(Image: Build Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This is a package for reading the LCIO file format, used for studies of the International Linear Collider, and other future collider concepts. See http://lcio.desy.de for details."
},

{
    "location": "#Prerequisites-1",
    "page": "Readme",
    "title": "Prerequisites",
    "category": "section",
    "text": "The julia programming language: http://julialang.org/\nA compiler that accepts the –std=c++-14 flag. Set the CXX and CC environment variables if this is different from your default compiler.LCIO will be built from source to reduce problems with version incompatibilities."
},

{
    "location": "#Installation-Instructions-1",
    "page": "Readme",
    "title": "Installation Instructions",
    "category": "section",
    "text": "Make sure that the julia executable is in your $PATH environment variable, or your $JULIA_HOME variable is set to the directory that contains the julia executable. bash\njulia -e \'Pkg.add(\"LCIO\")\'If you want to get the latest version (which might have newer features (and bugs) than the latest release), you can runPkg.checkout(\"LCIO\")\nPkg.build(\"LCIO\")from the julia prompt; after the Pkg.add command."
},

{
    "location": "#Philosophy-1",
    "page": "Readme",
    "title": "Philosophy",
    "category": "section",
    "text": "We have attempted to achieve a faithful translation of the C++ API, with method names equal to those documented on the LCIO pages. Nevertheless, attempts have been made to improve the user experience. Examples:All collections are typed, no casting necessary\nMethods that return a float* or double* in the C++ API return a float64[] instead.\nMany of the methods on the C++ side returning pointers can return nullptr, so need to be wrapped in if clauses. The way to deal with this on the julia side is to use something like the following syntax: ok, value = getReferencePoint(particle)\n if ok\n     println(value)\nendA notable exception is getPosition for hits, and getMomentum for particles, which we assume always return valid values"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "The basic construct for iterating over a file is this:using LCIO\nLCIO.open(\"file.slcio\") do reader\n    for event in reader\n        println(getEventNumber(event))\n    end\nendThere are more examples in the examples/ directory."
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "There are currently a couple of hiccups in the dependencies. Work to simplify the installation process is on-going, but in the meantime: Ubuntu 17.10:Install zlib, cmake, g++-7 through the package manager\nDownload Julia from the julialang.org homepage\nSet the PATH variable such that you find the julia executable\nstart juliaPkg.add(\"CxxWrap\")  Pkg.checkout(\"CxxWrap\")  Pkg.add(\"LCIO\")  Pkg.test(\"LCIO\") If that doesn\'t work, please complain through the issues. I have not tested this on other systems recently."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LCIO.BitField64LCIO.BitField64AllocatedLCIO.BitField64RefLCIO.CalHitLCIO.CalHitsLCIO.CalorimeterHitLCIO.CalorimeterHitAllocatedLCIO.CalorimeterHitRefLCIO.CalorimeterHitVecLCIO.CalorimeterHitVecAllocatedLCIO.CalorimeterHitVecRefLCIO.CastOperatorLCIO.CastOperatorAllocatedLCIO.CastOperatorRefLCIO.CellIDDecoderLCIO.CellIDDecoderAllocatedLCIO.CellIDDecoderRefLCIO.ClusterLCIO.ClusterAllocatedLCIO.ClusterRefLCIO.ClusterVecLCIO.ClusterVecAllocatedLCIO.ClusterVecRefLCIO.FloatVecLCIO.FloatVecAllocatedLCIO.FloatVecRefLCIO.IntVecLCIO.IntVecAllocatedLCIO.IntVecRefLCIO.LCCollectionLCIO.LCCollectionAllocatedLCIO.LCCollectionRefLCIO.LCCollectionVecLCIO.LCCollectionVecAllocatedLCIO.LCCollectionVecRefLCIO.LCEventLCIO.LCEventAllocatedLCIO.LCEventImplLCIO.LCEventImplAllocatedLCIO.LCEventImplRefLCIO.LCEventRefLCIO.LCGenericObjectLCIO.LCGenericObjectAllocatedLCIO.LCGenericObjectRefLCIO.LCIOLCIO.LCIOTypemapLCIO.LCObjectLCIO.LCObjectAllocatedLCIO.LCObjectRefLCIO.LCObjectVecLCIO.LCObjectVecAllocatedLCIO.LCObjectVecRefLCIO.LCParametersLCIO.LCParametersAllocatedLCIO.LCParametersRefLCIO.LCReaderLCIO.LCReaderAllocatedLCIO.LCReaderRefLCIO.LCRelNavLCIO.LCRelNavAllocatedLCIO.LCRelNavRefLCIO.LCRelationLCIO.LCRelationAllocatedLCIO.LCRelationNavigatorLCIO.LCRelationRefLCIO.LCRunHeaderLCIO.LCRunHeaderAllocatedLCIO.LCRunHeaderImplLCIO.LCRunHeaderImplAllocatedLCIO.LCRunHeaderImplRefLCIO.LCRunHeaderRefLCIO.LCStdHepRdrLCIO.LCTrackerCellIDLCIO.LCTrackerCellIDAllocatedLCIO.LCTrackerCellIDRefLCIO.LCWriterLCIO.LCWriterAllocatedLCIO.LCWriterRefLCIO.MCPARTICLELCIO.MCParticleLCIO.MCParticleAllocatedLCIO.MCParticleImplLCIO.MCParticleImplAllocatedLCIO.MCParticleImplRefLCIO.MCParticleRefLCIO.MCParticleVecLCIO.MCParticleVecAllocatedLCIO.MCParticleVecRefLCIO.ParticleIDLCIO.ParticleIDAllocatedLCIO.ParticleIDRefLCIO.ParticleIDVecLCIO.ParticleIDVecAllocatedLCIO.ParticleIDVecRefLCIO.RawCalorimeterHitLCIO.RawCalorimeterHitAllocatedLCIO.RawCalorimeterHitRefLCIO.ReconstructedParticleLCIO.ReconstructedParticleAllocatedLCIO.ReconstructedParticleRefLCIO.ReconstructedParticleVecLCIO.ReconstructedParticleVecAllocatedLCIO.ReconstructedParticleVecRefLCIO.ShortVecLCIO.ShortVecAllocatedLCIO.ShortVecRefLCIO.SimCalorimeterHitLCIO.SimCalorimeterHitAllocatedLCIO.SimCalorimeterHitRefLCIO.SimTrackerHitLCIO.SimTrackerHitAllocatedLCIO.SimTrackerHitRefLCIO.StdVecsLCIO.StringVecLCIO.StringVecAllocatedLCIO.StringVecRefLCIO.TrackLCIO.TrackAllocatedLCIO.TrackRefLCIO.TrackStateLCIO.TrackStateAllocatedLCIO.TrackStateRefLCIO.TrackStateVecLCIO.TrackStateVecAllocatedLCIO.TrackStateVecRefLCIO.TrackVecLCIO.TrackVecAllocatedLCIO.TrackVecRefLCIO.TrackerDataLCIO.TrackerDataAllocatedLCIO.TrackerDataRefLCIO.TrackerHitLCIO.TrackerHitAllocatedLCIO.TrackerHitRefLCIO.TrackerHitVecLCIO.TrackerHitVecAllocatedLCIO.TrackerHitVecRefLCIO.TrackerPulseLCIO.TrackerPulseAllocatedLCIO.TrackerPulseRefLCIO.TrackerRawDataLCIO.TrackerRawDataAllocatedLCIO.TrackerRawDataRefLCIO.TypedCollectionLCIO.TypedCollectionAllocatedLCIO.TypedCollectionRefLCIO.VertexLCIO.VertexAllocatedLCIO.VertexRefLCIO.WRITE_APPENDLCIO.WRITE_NEWLCIO._LCStdHepRdrCppLCIO._LCStdHepRdrCppAllocatedLCIO._LCStdHepRdrCppRefLCIO.__cxxwrap_dt_BitField64LCIO.__cxxwrap_dt_BitField64AllocatedLCIO.__cxxwrap_dt_BitField64RefLCIO.__cxxwrap_dt_CalorimeterHitLCIO.__cxxwrap_dt_CalorimeterHitAllocatedLCIO.__cxxwrap_dt_CalorimeterHitRefLCIO.__cxxwrap_dt_CalorimeterHitVecLCIO.__cxxwrap_dt_CalorimeterHitVecAllocatedLCIO.__cxxwrap_dt_CalorimeterHitVecRefLCIO.__cxxwrap_dt_CastOperatorLCIO.__cxxwrap_dt_CastOperatorAllocatedLCIO.__cxxwrap_dt_CastOperatorRefLCIO.__cxxwrap_dt_CellIDDecoderLCIO.__cxxwrap_dt_CellIDDecoderAllocatedLCIO.__cxxwrap_dt_CellIDDecoderRefLCIO.__cxxwrap_dt_ClusterLCIO.__cxxwrap_dt_ClusterAllocatedLCIO.__cxxwrap_dt_ClusterRefLCIO.__cxxwrap_dt_ClusterVecLCIO.__cxxwrap_dt_ClusterVecAllocatedLCIO.__cxxwrap_dt_ClusterVecRefLCIO.__cxxwrap_dt_FloatVecLCIO.__cxxwrap_dt_FloatVecAllocatedLCIO.__cxxwrap_dt_FloatVecRefLCIO.__cxxwrap_dt_IntVecLCIO.__cxxwrap_dt_IntVecAllocatedLCIO.__cxxwrap_dt_IntVecRefLCIO.__cxxwrap_dt_LCCollectionLCIO.__cxxwrap_dt_LCCollectionAllocatedLCIO.__cxxwrap_dt_LCCollectionRefLCIO.__cxxwrap_dt_LCCollectionVecLCIO.__cxxwrap_dt_LCCollectionVecAllocatedLCIO.__cxxwrap_dt_LCCollectionVecRefLCIO.__cxxwrap_dt_LCEventLCIO.__cxxwrap_dt_LCEventAllocatedLCIO.__cxxwrap_dt_LCEventImplLCIO.__cxxwrap_dt_LCEventImplAllocatedLCIO.__cxxwrap_dt_LCEventImplRefLCIO.__cxxwrap_dt_LCEventRefLCIO.__cxxwrap_dt_LCGenericObjectLCIO.__cxxwrap_dt_LCGenericObjectAllocatedLCIO.__cxxwrap_dt_LCGenericObjectRefLCIO.__cxxwrap_dt_LCObjectLCIO.__cxxwrap_dt_LCObjectAllocatedLCIO.__cxxwrap_dt_LCObjectRefLCIO.__cxxwrap_dt_LCObjectVecLCIO.__cxxwrap_dt_LCObjectVecAllocatedLCIO.__cxxwrap_dt_LCObjectVecRefLCIO.__cxxwrap_dt_LCParametersLCIO.__cxxwrap_dt_LCParametersAllocatedLCIO.__cxxwrap_dt_LCParametersRefLCIO.__cxxwrap_dt_LCReaderLCIO.__cxxwrap_dt_LCReaderAllocatedLCIO.__cxxwrap_dt_LCReaderRefLCIO.__cxxwrap_dt_LCRelNavLCIO.__cxxwrap_dt_LCRelNavAllocatedLCIO.__cxxwrap_dt_LCRelNavRefLCIO.__cxxwrap_dt_LCRelationLCIO.__cxxwrap_dt_LCRelationAllocatedLCIO.__cxxwrap_dt_LCRelationRefLCIO.__cxxwrap_dt_LCRunHeaderLCIO.__cxxwrap_dt_LCRunHeaderAllocatedLCIO.__cxxwrap_dt_LCRunHeaderImplLCIO.__cxxwrap_dt_LCRunHeaderImplAllocatedLCIO.__cxxwrap_dt_LCRunHeaderImplRefLCIO.__cxxwrap_dt_LCRunHeaderRefLCIO.__cxxwrap_dt_LCTrackerCellIDLCIO.__cxxwrap_dt_LCTrackerCellIDAllocatedLCIO.__cxxwrap_dt_LCTrackerCellIDRefLCIO.__cxxwrap_dt_LCWriterLCIO.__cxxwrap_dt_LCWriterAllocatedLCIO.__cxxwrap_dt_LCWriterRefLCIO.__cxxwrap_dt_MCParticleLCIO.__cxxwrap_dt_MCParticleAllocatedLCIO.__cxxwrap_dt_MCParticleImplLCIO.__cxxwrap_dt_MCParticleImplAllocatedLCIO.__cxxwrap_dt_MCParticleImplRefLCIO.__cxxwrap_dt_MCParticleRefLCIO.__cxxwrap_dt_MCParticleVecLCIO.__cxxwrap_dt_MCParticleVecAllocatedLCIO.__cxxwrap_dt_MCParticleVecRefLCIO.__cxxwrap_dt_ParticleIDLCIO.__cxxwrap_dt_ParticleIDAllocatedLCIO.__cxxwrap_dt_ParticleIDRefLCIO.__cxxwrap_dt_ParticleIDVecLCIO.__cxxwrap_dt_ParticleIDVecAllocatedLCIO.__cxxwrap_dt_ParticleIDVecRefLCIO.__cxxwrap_dt_RawCalorimeterHitLCIO.__cxxwrap_dt_RawCalorimeterHitAllocatedLCIO.__cxxwrap_dt_RawCalorimeterHitRefLCIO.__cxxwrap_dt_ReconstructedParticleLCIO.__cxxwrap_dt_ReconstructedParticleAllocatedLCIO.__cxxwrap_dt_ReconstructedParticleRefLCIO.__cxxwrap_dt_ReconstructedParticleVecLCIO.__cxxwrap_dt_ReconstructedParticleVecAllocatedLCIO.__cxxwrap_dt_ReconstructedParticleVecRefLCIO.__cxxwrap_dt_ShortVecLCIO.__cxxwrap_dt_ShortVecAllocatedLCIO.__cxxwrap_dt_ShortVecRefLCIO.__cxxwrap_dt_SimCalorimeterHitLCIO.__cxxwrap_dt_SimCalorimeterHitAllocatedLCIO.__cxxwrap_dt_SimCalorimeterHitRefLCIO.__cxxwrap_dt_SimTrackerHitLCIO.__cxxwrap_dt_SimTrackerHitAllocatedLCIO.__cxxwrap_dt_SimTrackerHitRefLCIO.__cxxwrap_dt_StringVecLCIO.__cxxwrap_dt_StringVecAllocatedLCIO.__cxxwrap_dt_StringVecRefLCIO.__cxxwrap_dt_TrackLCIO.__cxxwrap_dt_TrackAllocatedLCIO.__cxxwrap_dt_TrackRefLCIO.__cxxwrap_dt_TrackStateLCIO.__cxxwrap_dt_TrackStateAllocatedLCIO.__cxxwrap_dt_TrackStateRefLCIO.__cxxwrap_dt_TrackStateVecLCIO.__cxxwrap_dt_TrackStateVecAllocatedLCIO.__cxxwrap_dt_TrackStateVecRefLCIO.__cxxwrap_dt_TrackVecLCIO.__cxxwrap_dt_TrackVecAllocatedLCIO.__cxxwrap_dt_TrackVecRefLCIO.__cxxwrap_dt_TrackerDataLCIO.__cxxwrap_dt_TrackerDataAllocatedLCIO.__cxxwrap_dt_TrackerDataRefLCIO.__cxxwrap_dt_TrackerHitLCIO.__cxxwrap_dt_TrackerHitAllocatedLCIO.__cxxwrap_dt_TrackerHitRefLCIO.__cxxwrap_dt_TrackerHitVecLCIO.__cxxwrap_dt_TrackerHitVecAllocatedLCIO.__cxxwrap_dt_TrackerHitVecRefLCIO.__cxxwrap_dt_TrackerPulseLCIO.__cxxwrap_dt_TrackerPulseAllocatedLCIO.__cxxwrap_dt_TrackerPulseRefLCIO.__cxxwrap_dt_TrackerRawDataLCIO.__cxxwrap_dt_TrackerRawDataAllocatedLCIO.__cxxwrap_dt_TrackerRawDataRefLCIO.__cxxwrap_dt_TypedCollectionLCIO.__cxxwrap_dt_TypedCollectionAllocatedLCIO.__cxxwrap_dt_TypedCollectionRefLCIO.__cxxwrap_dt_VertexLCIO.__cxxwrap_dt_VertexAllocatedLCIO.__cxxwrap_dt_VertexRefLCIO.__cxxwrap_dt__LCStdHepRdrCppLCIO.__cxxwrap_dt__LCStdHepRdrCppAllocatedLCIO.__cxxwrap_dt__LCStdHepRdrCppRefLCIO.__cxxwrap_nbpointersLCIO.__cxxwrap_pointersLCIO.__cxxwrap_sopathLCIO.__cxxwrap_wrapfuncLCIO.__init__LCIO._completNavigatorLCIO.addCollectionLCIO.addElementLCIO.atLCIO.castLCIO.check_depsLCIO.closeLCIO.closeFileLCIO.collLCIO.createLCReaderLCIO.createLCWriterLCIO.deleteLCReaderLCIO.deleteLCWriterLCIO.depsfileLCIO.eltypeLCIO.encoding_stringLCIO.evalLCIO.fieldDescriptionLCIO.flushLCIO.getADCValuesLCIO.getAlgorithmTypeLCIO.getAmplitudeLCIO.getCalorimeterHitsLCIO.getCellID0LCIO.getCellID1LCIO.getChargeLCIO.getChargeValuesLCIO.getChi2LCIO.getClosestTrackStateLCIO.getClustersLCIO.getCollectionLCIO.getCollectionNamesLCIO.getCovMatrixLCIO.getD0LCIO.getDataDescriptionLCIO.getDaughtersLCIO.getDescriptionLCIO.getDetectorNameLCIO.getDirectionErrorLCIO.getDoubleValLCIO.getEDepLCIO.getEDepErrorLCIO.getElementAtLCIO.getEndVertexLCIO.getEndpointLCIO.getEndpoint3LCIO.getEnergyLCIO.getEnergyContLCIO.getEnergyErrorLCIO.getEventCollectionLCIO.getEventNumberLCIO.getFloatKeysLCIO.getFloatValLCIO.getFloatValsLCIO.getFromLCIO.getFromTypeLCIO.getGeneratorStatusLCIO.getGoodnessOfPIDLCIO.getHitContributionsLCIO.getIPhiLCIO.getIThetaLCIO.getIntKeysLCIO.getIntValLCIO.getIntValsLCIO.getLikelihoodLCIO.getLocationLCIO.getMCParticleLCIO.getMassLCIO.getMomentumLCIO.getMomentum3LCIO.getMomentumAtEndpointLCIO.getMomentumAtEndpoint3LCIO.getNDoubleLCIO.getNFloatLCIO.getNIntLCIO.getNMCContributionsLCIO.getNStringLCIO.getNdfLCIO.getNumberOfElementsLCIO.getNumberOfEventsLCIO.getNumberOfRunsLCIO.getOmegaLCIO.getP3LCIO.getP4LCIO.getPDGLCIO.getPDGContLCIO.getParametersLCIO.getParentsLCIO.getParticleContLCIO.getParticleIDUsedLCIO.getParticleIDsLCIO.getParticlesLCIO.getPathLengthLCIO.getPhiLCIO.getPositionLCIO.getPosition3LCIO.getPositionErrorLCIO.getProbabilityLCIO.getQualityLCIO.getRadiusOfInnermostHitLCIO.getRawHitLCIO.getReferencePointLCIO.getReferencePoint3LCIO.getRelatedFromObjectsLCIO.getRelatedFromWeightsLCIO.getRelatedToObjectsLCIO.getRelatedToWeightsLCIO.getRunNumberLCIO.getShapeLCIO.getSimulatorStatusLCIO.getStartVertexLCIO.getStringKeysLCIO.getStringValLCIO.getStringValsLCIO.getSubdetectorEnergiesLCIO.getSubdetectorHitNumbersLCIO.getTanLambdaLCIO.getTimeLCIO.getTimeContLCIO.getTimeStampLCIO.getToLCIO.getToTypeLCIO.getTrackStateLCIO.getTrackStatesLCIO.getTrackerDataLCIO.getTrackerHitsLCIO.getTracksLCIO.getTypeLCIO.getTypeNameLCIO.getValueLCIO.getVertexLCIO.getVertex3LCIO.getWeightLCIO.getZ0LCIO.getdEdxLCIO.getdEdxErrorLCIO.hasLeftDetectorLCIO.highWordLCIO.idLCIO.includeLCIO.indexLCIO.isBackScatterLCIO.isBackscatterLCIO.isCompoundLCIO.isCreatedInSimulationLCIO.isDecayedInCalorimeterLCIO.isDecayedInTrackerLCIO.isFixedSizeLCIO.isOverlayLCIO.isPrimaryLCIO.isProducedBySecondaryLCIO.isStoppedLCIO.layerLCIO.liblcioLCIO.liblciowrapLCIO.libsioLCIO.lowWordLCIO.moduleLCIO.openLCIO.openFileLCIO.openStdhepLCIO.parametersLCIO.printParametersLCIO.readEventLCIO.readNextEventLCIO.readNextRunHeaderLCIO.sensorLCIO.setAccessedLCIO.setChargeLCIO.setCompressionLevelLCIO.setDescriptionLCIO.setDetectorNameLCIO.setEventNumberLCIO.setGeneratorStatusLCIO.setMassLCIO.setMomentumLCIO.setPDGLCIO.setRunNumberLCIO.setTransientLCIO.setValueLCIO.set_encoding_stringLCIO.sideLCIO.sizeLCIO.subdetLCIO.updateNextEventLCIO.valueStringLCIO.vertexIsNotEndpointOfParentLCIO.writeEventLCIO.writeRunHeader"
},

]}
