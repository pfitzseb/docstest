var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#GeoEfficiency.jl-1",
    "page": "Home",
    "title": "GeoEfficiency.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#GeoEfficiency.Point",
    "page": "Home",
    "title": "GeoEfficiency.Point",
    "category": "type",
    "text": "Point(Height::Real, Rho::Real)\n\nconstruct and return a Point source that can be used as either a source by itself or an anchor point of a higher dimension source.\n\nHeight : point height relative to the detector surface.\nRho : point off-axis relative to the detector axis of symmetry.\n\nnote: Note\nEach detector type give different interpretation to the height as follow:-for CylDetector the point source height is consider to be measured   from the detector face surface. \nfor BoreDetector the point source height is consider to be measured   from the detector middle, +ve value are above the detector center while -ve are below. \nfor WellDetector the point source height is considered to be measured   from the detector hole surface. \n\n\n\n\n\n"
},

{
    "location": "#GeoEfficiency.source",
    "page": "Home",
    "title": "GeoEfficiency.source",
    "category": "function",
    "text": "source(anchorPnt::Point = Point())\n\nreturn a tuple that describe the source (anchorPnt, SrcRadius, SrcLength) according to  the input from the console.\n\nanchorPnt : the source anchoring point. if it is missing the user is prompt   to input it via the console.\nSrcRadius : source radius.\nSrcLength : source length.\n\nwarning: Warning\nIf the global variable srcType is set to srcPoint, both SrcRadius and SrcLength  are set to zero.\n\n\n\n\n\n"
},

{
    "location": "#GeoEfficiency.CylDetector",
    "page": "Home",
    "title": "GeoEfficiency.CylDetector",
    "category": "type",
    "text": "CylDetector(CryRadius::Real, CryLength::Real)\n\nconstruct and return a cylindrical detector of the given crystal dimensions:-\n\nCryRadius : the detector crystal radius.\nCryLength : the detector crystal length.\n\nwarning: Warning\nboth CryRadius and CryLength should be positive, while CryLength can also be set to zero.\n\n\n\n\n\n"
},

{
    "location": "#GeoEfficiency.BoreDetector",
    "page": "Home",
    "title": "GeoEfficiency.BoreDetector",
    "category": "type",
    "text": "BoreDetector(CryRadius::Real, CryLength::Real, HoleRadius::Real)\n\nconstruct and return a bore-hole detector of the given crystal dimensions:-\n\nCryRadius : the detector crystal radius.\nCryLength : the detector crystal length.\nHoleRadius : the detector hole radius.\n\nwarning: Warning\nCryRadius and CryLength, HoleRadius should be positive numbers, also  CryRadius should be greater than HoleRadius.\n\n\n\n\n\n"
},

{
    "location": "#GeoEfficiency.WellDetector",
    "page": "Home",
    "title": "GeoEfficiency.WellDetector",
    "category": "type",
    "text": "WellDetector(CryRadius::Real, CryLength::Real, HoleRadius::Real, HoleDepth::Real)\n\nconstruct and return a Well-Type detector of the given crystal dimensions:-\n\nCryRadius : the detector crystal radius.\nCryLength : the detector crystal length.\nHoleRadius : the detector hole radius.\nHoleDepth : the detector hole length.\n\nwarning: Warning\nall arguments should be positive numbers, also  CryRadius should be greater than HoleRadius and  CryLength should be greater than  HoleDepth. \n\n\n\n\n\n"
},

{
    "location": "#GeoEfficiency.Detector",
    "page": "Home",
    "title": "GeoEfficiency.Detector",
    "category": "type",
    "text": "Detector\n\nabstract supertype of all detectors types of cylidericalish shapes. also can be used to construct any leaf type.\n\n\n\n\n\n"
},

{
    "location": "#Functions-1",
    "page": "Home",
    "title": "Functions",
    "category": "section",
    "text": "GeoEfficiency.GeoEfficiency\nGeoEfficiency.about\nGeoEfficiency.typeofSrc\nGeoEfficiency.setSrcToPoint\nGeoEfficiency.input\nGeoEfficiency.getfloat\nGeoEfficiency.detector_info_from_csvFile\nGeoEfficiency.read_from_csvFile\nGeoEfficiency.read_batch_info\nGeoEfficiency.getDetectors\nGeoEfficiency.Point\nGeoEfficiency.source\nGeoEfficiency.CylDetector\nGeoEfficiency.BoreDetector\nGeoEfficiency.WellDetector\nGeoEfficiency.Detector\nGeoEfficiency.geoEff\nGeoEfficiency.GeoEff_Pnt\nGeoEfficiency.GeoEff_Disk\nGeoEfficiency.calc\nGeoEfficiency.calcN\nGeoEfficiency.batch\nGeoEfficiency.batchInfo\nGeoEfficiency.checkResultsDirs\nGeoEfficiency.writecsv_head\nGeoEfficiency._batch\n"
},

{
    "location": "#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "manual/GeoEfficiency/#",
    "page": "GeoEfficiency",
    "title": "GeoEfficiency",
    "category": "page",
    "text": ""
},

{
    "location": "manual/GeoEfficiency/#GeoEfficiency.GeoEfficiency",
    "page": "GeoEfficiency",
    "title": "GeoEfficiency.GeoEfficiency",
    "category": "module",
    "text": "GeoEfficiency Package\n\nintroduce a fast and flexible tool to calculate in batch or individually the geometrical efficiency  for a set of common radiation detectors shapes (cylindrical,Bore-hole, Well-type) as seen form  a source. The source can be a point, a disc or even a cylinder.\n\nQuick Usage\n\ngeoEff()	: Calculate the geometrical efficiency for one geometrical setup return only the value of the geometrical efficiency.\ncalc() 	: Calculate the geometrical efficiency for one geometrical setup and display full information on the console.\ncalcN()	: Calculate the geometrical efficiency for geometrical setup(s) and display full information on the console until the user quit.\nbatch()	: Calculate the geometrical efficiency using data in the /home/pfitzseb/GeoEfficiency folder in batch mode.\n\nfor more information and updates refer to the repository at GitHub.com\n\n\n\n\n\n"
},

{
    "location": "manual/GeoEfficiency/#GeoEfficiency.about",
    "page": "GeoEfficiency",
    "title": "GeoEfficiency.about",
    "category": "function",
    "text": " *************************************************\n **            -=) GeoEfficiency (=-            **\n **  Accurate Geometrical Efficiency Calculator **\n **   First Created on Fri Aug 14 20:12:01 2015 **\n *************************************************\n\n Author:        Mohamed E. Krar,  @e-mail: DrKrar@gmail.com \n Auth_Profile:  https://www.researchgate.net/profile/Mohamed_Krar3\n Repository:    https://github.com/DrKrar/GeoEfficiency.jl/\n Version:       v\"0.9.2\" - (219 days old master)  \n Documentation: http://geoefficiencyjl.readthedocs.org\n\n\n\nBatch mode \n-  read files by defaul from directory `/home/pfitzseb/GeoEfficiency`\n-  save results by default to directory `/home/pfitzseb/GeoEfficiency/results`\n\nfor more information see `batch`, `batchInfo`.\n\n\n\n\n\n"
},

{
    "location": "manual/GeoEfficiency/#GeoEfficiency-1",
    "page": "GeoEfficiency",
    "title": "GeoEfficiency",
    "category": "section",
    "text": "GeoEfficiency.GeoEfficiency\nGeoEfficiency.about"
},

{
    "location": "manual/Physics_Model/#",
    "page": "Physics_Module",
    "title": "Physics_Module",
    "category": "page",
    "text": ""
},

{
    "location": "manual/Physics_Model/#Physics_Module-1",
    "page": "Physics_Module",
    "title": "Physics_Module",
    "category": "section",
    "text": "GeoEfficiency.Point\nGeoEfficiency.source\nGeoEfficiency.CylDetector\nGeoEfficiency.BoreDetector\nGeoEfficiency.WellDetector\nGeoEfficiency.Detector"
},

{
    "location": "manual/Input_Interface/#",
    "page": "Input_Interface",
    "title": "Input_Interface",
    "category": "page",
    "text": ""
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.typeofSrc",
    "page": "Input_Interface",
    "title": "GeoEfficiency.typeofSrc",
    "category": "function",
    "text": "typeofSrc()::SrcType\n\nreturn the current value of the global GeoEfficiency.srcType.\n\n\n\n\n\ntypeofSrc(x::Int)::SrcType\n\nset and return the value of the global GeoEfficiency.srcType corresponding to x.\n\nsrcUnknown = -1 also any negative integer treated as so, \nsrcPoint   = 0, \nsrcLine    = 1, \nsrcDisk    = 2, \nsrcVolume  = 3, \nsrcNotPoint = 4 also any greater than 4 integer treated as so.\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.setSrcToPoint",
    "page": "Input_Interface",
    "title": "GeoEfficiency.setSrcToPoint",
    "category": "function",
    "text": "setSrcToPoint()::Bool\n\nreturn whether the source type is a point or not.\n\n\n\n\n\nsetSrcToPoint(yes::Bool)::Bool\n\nreturn whether the source type is a point or not after setting srcType to srcPoint if  yes = true else if yes = false setting it to srcNotPoint if it was not already  set to other non-point type (srcDisk, srcLine, srcVolume).\n\nnote: Note\nThe user can use this function to change the source type any time.\nThe source type is set the fist time asked for source.\n\nsee also: typeofSrc(::Int).\n\n\n\n\n\nsetSrcToPoint(prompt::AbstractString)::Bool\n\nreturn whether the source type is a point or not. only prompt the user to set the source  type if it were not already set before. \n\nsee also: typeofSrc(::Int), setSrcToPoint(::Bool).\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.input",
    "page": "Input_Interface",
    "title": "GeoEfficiency.input",
    "category": "function",
    "text": "UnExported\n\ninput(prompt::AbstractString = \"? \", incolor::Symbol = :green)\n\nreturn a string delimited by new line excluding the new line. prompt the user with the massage prompt defaults to ?.  incolor specify the prompt text color, default to green.\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.getfloat",
    "page": "Input_Interface",
    "title": "GeoEfficiency.getfloat",
    "category": "function",
    "text": "UnExported\n\ngetfloat(prompt::AbstractString = \"? \", from::Real = -Inf, to::Real = Inf; value::AbstractString=\"nothing\")::Float64\n\nprompts the user with the massage prompt defaults to ? to input a numerical expression  evaluate to a numerical value and asserts that the value is in the semi open interval [from, to[ before returning it as a Float64.\n\nnote: Note\na blank input (i.e just a return) is considered as being 00.\ninput from the console can be numerical expression not just a number.\nAll 52, 52, exp(2), pi, 1E-2, 523, sin(1), pi23   are valid mathematical expressions.\nthe key word  argument value , if provided the function will not ask for input from the   console and take it as if it where inputted from the  console [for test propose mainly].\n\nExamples\n\njulia> getfloat(\"input a number:\", value=\"3\")\n3.0\n\njulia> getfloat(\"input a number:\", value=\"\")\n0.0\n\njulia> getfloat(\"input a number:\", value=\"5/2\")\n2.5\n\njulia> getfloat(\"input a number:\", value=\"5//2\")\n2.5\n\njulia> getfloat(\"input a number:\", value=\"pi\")\n3.141592653589793\n\njulia> getfloat(\"input a number:\", value=\"-2\")\n-2.0\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.detector_info_from_csvFile",
    "page": "Input_Interface",
    "title": "GeoEfficiency.detector_info_from_csvFile",
    "category": "function",
    "text": "UnExported\n\n detector_info_from_csvFile(detectors::AbstractString = Detectors, \n                                  datadir::AbstractString = dataDir)\n\nreturn a vector{Detector} based on information in the file of name detectors found in the  directory datadir.\n\nnote: Note\nif no path is given the second argument datadir is default to homepfitzsebGeoEfficiency as set by   the constant dataDir. \nif no file name is specified the name of the predefined file Detectorscsv as set by   the constant Detectors. \nthe no argument method is the most useful; other methods are mainly for test propose.\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.read_from_csvFile",
    "page": "Input_Interface",
    "title": "GeoEfficiency.read_from_csvFile",
    "category": "function",
    "text": "UnExported\n\nread_from_csvFile(csv_data::AbstractString, \n                   datadir::AbstractString = dataDir)::Vector{Float64}\n\nreturn Vector{Float64} based on data in csv file named csv_data. directory datadir point to    where the file is located default to homepfitzsebGeoEfficiency as set by the constant dataDir.\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.read_batch_info",
    "page": "Input_Interface",
    "title": "GeoEfficiency.read_batch_info",
    "category": "function",
    "text": "UnExported\n\nread_batch_info()\n\nread detectors and sources parameters from the predefined csv files.\n\nReturn a tuple 	   (detectorsarray, 		srcHeightsarray, 		srcRhosarray, 		srcRadiiarray, 		srcLengthsarray, 		GeoEfficiencyisPoint)\n\n\n\n\n\nUnExported\n\nread_batch_info(datadir::AbstractString,\n              detectors::AbstractString, \n             srcHeights::AbstractString,\n                srcRhos::AbstractString,\n               srcRadii::AbstractString,\n             srcLengths::AbstractString)\n\nread detectors and sources parameters from the location given in the argument list.\n\nReturn a tuple\n\n   (detectors_array,\n	srcHeights_array,\n	srcRhos_array,\n	srcRadii_array,\n	srcLengths_array,\n	isPoint)\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#GeoEfficiency.getDetectors",
    "page": "Input_Interface",
    "title": "GeoEfficiency.getDetectors",
    "category": "function",
    "text": "getDetectors(detectors_array::Vector{<:Detector} = Detector[])::Vector{Detector}\n\nreturn the detectors_array as Vector{Detector} extended by the entered detectors and sorted according to the  detector volume.  prompt the user to input detector parameters from the console.\n\nnote: Note\nIf no array received in the input an empty array will be created to receive the converted detectors.\n\n\n\n\n\ngetDetectors(detector_info_array::Matrix{<:Real}, \n				 detectors_array::Vector{<:Detector} = Detector[]; \n				 						   console_FB=true)::Vector{Detector}\n\nreturn detectors_array as Vector{Detector}, after extending it with the successfully converted detectors. while,  attempt to convert detectors from the information in detector_info_array. \n\nnote: Note\nif console_FB argument is set to true , the function will call getDetectors() to take input from the console if the detector_info_array is empty or contain no numerical element.\n\n\n\n\n\n"
},

{
    "location": "manual/Input_Interface/#Input_Interface-1",
    "page": "Input_Interface",
    "title": "Input_Interface",
    "category": "section",
    "text": "GeoEfficiency.typeofSrc\nGeoEfficiency.setSrcToPoint\nGeoEfficiency.input\nGeoEfficiency.getfloat\nGeoEfficiency.detector_info_from_csvFile\nGeoEfficiency.read_from_csvFile\nGeoEfficiency.read_batch_info\nGeoEfficiency.getDetectors"
},

{
    "location": "manual/Calculations/#",
    "page": "Calculations",
    "title": "Calculations",
    "category": "page",
    "text": ""
},

{
    "location": "manual/Calculations/#GeoEfficiency.geoEff",
    "page": "Calculations",
    "title": "GeoEfficiency.geoEff",
    "category": "function",
    "text": "geoEff(detector::Detector, aPnt::Point, SrcRadius::Real = 0.0, SrcLength::Real = 0.0)\n\nreturn the geometrical efficiency for a source (point, disk or cylinder) with  the detector detector.  detector can be any of the leaf detectors types (CylDetector, BoreDetector, WellDetector).\n\naPNT: a point represent the anchoring point of the source.\nSrcRadius: Radius of the source.\nsrcHeight:  the height of an upright cylinder source.\n\nThrow an Error if the source location is inappropriate.\n\nwarning: Warning\nthe point height of aPnt is measured differently for different detectors types. for the details, please refer to each detector entry.\n\nnote: Note\nif SrcLength equal to zero; the method return Geometrical Efficiency of a disc   source of Radius = SrcRadius and center at the point aPNT.\nif both SrcRadius and SrcLength equal to zero;   the method returns the Geometrical Efficiency of a point source at the anchoring point.\n\nExample\n\nto obtain the efficiency of a cylindrical detector of crystal radius 20 cm for axial   source cylinder of radius 10 cm and height 25 cm on the detector surface. \n\njulia> using GeoEfficiency\n\njulia> geoEff(CylDetector(2.0), Point(0.0), 1.0, 2.5)\n0.2923777934922748\n\nto obtain the efficiency for a bore-hole detector of crystal radius of 20 and height of 30 with   hole radius of 15 cm for axial source cylinder of radius 10 cm and height 25 cm starting from detector center.\n\njulia> using GeoEfficiency\n\njulia> newDet = BoreDetector(2.0, 3.0, 1.5);\n\njulia> geoEff(newDet, Point(0.0), 1.0, 2.5)\n0.5678174038944723\n\nto obtain the efficiency for a well-type detector of crystal radius of 20 cm and   height 30 cm with hole radius of 15 cm and depth of 10 for axial source cylinder of   radius 10 cm and height 25 cm at the hole surface.\n\njulia> using GeoEfficiency\n\njulia> newDet = WellDetector(2.0, 3.0, 1.5, 1.0);\n\njulia> geoEff(newDet, Point(0.0), 1.0, 2.5)\n0.4669614527701105\n\n\n\n\n\n"
},

{
    "location": "manual/Calculations/#GeoEfficiency.GeoEff_Pnt",
    "page": "Calculations",
    "title": "GeoEfficiency.GeoEff_Pnt",
    "category": "function",
    "text": "unexported\n\nGeoEff_Pnt(detector::CylDetector, aPnt::Point)::Float64\n\nreturn the geometrical efficiency for the point source aPnt located on front of the cylindrical detector detector face.\n\nThrow an Error if the point is out of the cylindrical detector detector face.\n\nnote: Note\nthis is the base function that all other functions call directly or indirectly to calculate geometrical efficiency of the cylindrical-ish detector family.\n\n\n\n\n\n"
},

{
    "location": "manual/Calculations/#GeoEfficiency.GeoEff_Disk",
    "page": "Calculations",
    "title": "GeoEfficiency.GeoEff_Disk",
    "category": "function",
    "text": "unexported\n\nGeoEff_Disk(detector::CylDetector, SurfacePnt::Point, SrcRadius::Real)::Float64\n\nreturn the geometrical efficiency for a disk source. The disk center is the SurfacePnt and  its radius is SrcRadius on front of the cylindrical detector detector face.\n\nproduce a warning if the disk is out of the cylindrical detector face.\n\n\n\n\n\n"
},

{
    "location": "manual/Calculations/#Calculations-1",
    "page": "Calculations",
    "title": "Calculations",
    "category": "section",
    "text": "GeoEfficiency.geoEff\nGeoEfficiency.GeoEff_Pnt\nGeoEfficiency.GeoEff_Disk"
},

{
    "location": "manual/Output_Interface/#",
    "page": "Output_Interface",
    "title": "Output_Interface",
    "category": "page",
    "text": ""
},

{
    "location": "manual/Output_Interface/#GeoEfficiency.calc",
    "page": "Output_Interface",
    "title": "GeoEfficiency.calc",
    "category": "function",
    "text": "calc(detector::Detector = Detector(), aSource::Tuple{Point, Float64, Float64,} = source())\n\ncalculate and display on the console the geometrical efficiency of the  detector detector for the tuple aSource describing the source.\n\nThrow an Error if the source location is inappropriate.\n\nsee also: geoEff(::Detector, ::Tuple{Point, Float64, Float64})\n\nnote: Note\nif source description aSource alone or even both source description and detector detect   are missing, the method prompt the user to complete the missing data via the console.\n\n\n\n\n\n"
},

{
    "location": "manual/Output_Interface/#GeoEfficiency.calcN",
    "page": "Output_Interface",
    "title": "GeoEfficiency.calcN",
    "category": "function",
    "text": "calcN()\n\ncalculate and display the geometrical efficiency repeatedly.  Prompt the user to input a detector and a source from the console. Prompt the user repeatedly until it exit (give a choice to use the same  detector or a new detector).\n\n\n\n\n\n"
},

{
    "location": "manual/Output_Interface/#GeoEfficiency.batch",
    "page": "Output_Interface",
    "title": "GeoEfficiency.batch",
    "category": "function",
    "text": "batch()\n\nprovide batch calculation of the geometrical efficiency based on the information provided  by the CSV files by default located in homepfitzsebGeoEfficiency.\n\nresults are saved on a CSV  file(s) named after the detector(s). the CSV  file(s)  by default found in homepfitzsebGeoEfficiencyresults, also a log of the results are displayed on the console.\n\nfor more information on batch refer to batchInfo.\n\n\n\n\n\nbatch(\n	detector::Detector,\n	srcHeights_array::Vector{S},\n	srcRhos_array::Vector{S}=[0.0],\n	srcRadii_array::Vector{S}=[0.0],\n	srcLengths_array::Vector{S}=[0.0],\n	ispoint::Bool=true\n) where S <: Real\n\nprovide batch calculation of the geometrical efficiency for the detector detector.  results are saved on a CSV  file named after the detector.  the CSV  file by default found in homepfitzsebGeoEfficiencyresults. this method return the actual  path to the CSV file.  also a log of the results are displayed on the console.\n\nsrcHeights_array: list of source heights to feed to batch.\nsrcRhos_array: list of source off-axis distances to feed to batch. \nsrcRadii_array: list of source radii to feed to batch.\nsrcLengths_array: list of source lengths to feed to batch.\n\nA set of sources is constructed of every valid combination of parameter in the srcRhos_array, srcRadii_array and srcLengths_array arrays with conjunction with ispoint.\n\nwarning: Warning\nIf ispoint is true the source type is a point source and the parameters   in srcRadii_array and srcLengths_array arrays is completely ignored.\nIf ispoint is false the parameters in srcRhos_array is completely ignored.\n\n\n\n\n\nbatch( \n	detectors_array::Vector{<: Detector},\n    srcHeights_array::Vector{S},\n    srcRhos_array::Vector{S}=[0.0],\n    srcRadii_array::Vector{S}=[0.0],\n    srcLengths_array::Vector{S}=[0.0],\n	ispoint::Bool=true\n) where S <: Real\n\nsame as batch(::Detector, ::Vector{Real},::Vector{Real},::Vector{Real},::Vector{Real},::Bool) but accept a list of detectors detectors_array. return a list of paths to the CSV of files (file for each detector) storing the results.\n\n\n\n\n\nbatch(\n	detector_info_array::Matrix{S},\n	srcHeights_array::Vector{S},\n	srcRhos_array::Vector{S}=[0.0],\n	srcRadii_array::Vector{S}=[0.0],\n	srcLengths_array::Vector{S}=[0.0],\n	ispoint::Bool=true\n) where S <: Real\n\nsame as batch(::Vector{Detector}, ::Vector{Real},::Vector{Real},::Vector{Real},::Vector{Real},::Bool) but provide batch calculation of the  geometrical efficiency for the detector in the detector_info_array after applying getDetectors. return a list of paths to the CSV of files (file for each detector) storing the results.\n\n\n\n\n\n"
},

{
    "location": "manual/Output_Interface/#GeoEfficiency.batchInfo",
    "page": "Output_Interface",
    "title": "GeoEfficiency.batchInfo",
    "category": "constant",
    "text": "The function batch() can be called with or without arrangement(s).  The without argument version relay on previously prepared Comma Saved   Values [CSV] files, that can be easily edit by Microsoft Excel,  by default located in the directory homepfitzsebGeoEfficiency .\n\nresults of batch calculation are saved on a CSV  file(s) named after the detector(s).  the CSV  file by default found in homepfitzsebGeoEfficiencyresults.\n\nCSV input files\n\nDetectorscsv contains the detectors description; The line format is: \n\n	 Crystal_Radius | Crystal_Length | Hole_Radius | Hole_Depth |\n	 ---------------| ---------------|-------------|----------- |\n\nsrcHeightscsv contains the source heights; \n\n	 Source_Heights | \n	 ---------------|\n\nsrcRhoscsv contains the source off-axis distances; 	 				\n\n	 Source_Rhos | \n 	 ------------|\n\nsrcRadiicsv contains the source radii for disc and cylindrical sources; 			\n\n	 Source_Radii| \n	 ------------|\n\nsrcLengthscsv contains the source length for cylindrical sources; 	\n\n	 Source_Lengths| \n	 --------------|\n\nCSV results files\n\nCSV  file containing the results has columns of headers   AnchorHeight, AnchorRho, srcRadius, srcLength, GeoEfficiency for non-point sources   and columns of headers Height, Rho, GeoEfficiency for point sources.\n\nnote: Note\nfor Comma Saved Values [CSV] files each line represent an entry,   the first line is always treated as the header.\n\nwarning: Warning\nthe program expect each line to contain one number for all CSV files except  for Detectorscsv each line should contain at least one number or at   most four separated numbers.\n\n\n\n\n\n"
},

{
    "location": "manual/Output_Interface/#GeoEfficiency.checkResultsDirs",
    "page": "Output_Interface",
    "title": "GeoEfficiency.checkResultsDirs",
    "category": "function",
    "text": "UnExported\n\ncheckResultsDirs()\n\nmake sure that directories for saving the results are already exist or create  them if necessary.\n\n\n\n\n\n"
},

{
    "location": "manual/Output_Interface/#GeoEfficiency.writecsv_head",
    "page": "Output_Interface",
    "title": "GeoEfficiency.writecsv_head",
    "category": "function",
    "text": "unexported\n\nwritecsv_head(filename::AbstractString, content::VecOrMat{<:Union{Int,Float64}}, head=[])\n\nWrite content to the comma delimited values file filename.  optionally with header head.\n\n\n\n\n\n"
},

{
    "location": "manual/Output_Interface/#GeoEfficiency._batch",
    "page": "Output_Interface",
    "title": "GeoEfficiency._batch",
    "category": "function",
    "text": "UnExported\n\n_batch(\n	::Val{true},\n	detector::Detector,\n	srcHeights_array::Vector{Float64},\n	srcRhos_array::Vector{Float64},\n	srcRadii_array::Vector{Float64},\n	srcLengths_array::Vector{Float64}\n	)\n\nbatch calculation for specialized for point sources.  return a tuple of three arrays the detector, the resultsand the path of the CSV  file containing results. \n\nThe results has columns of headers Height, Rho, GeoEfficiency.\n\nnote: Note\nfor all arrays srcHeights_array, srcRhos_array, srcRadii_array and srcLengths_array   element type should be Float64. if any of them have other numerical element type it   should converted to Float64 using float before passing it to this method.\n\nwarning: Warning\nboth srcRadii_array, srcLengths_array are completely ignored as this method is for point sources.\n\n\n\n\n\nUnExported\n\n_batch(\n	::Val{false},\n	detector::Detector,\n	srcHeights_array::Vector{Float64},\n	srcRhos_array::Vector{Float64},\n	srcRadii_array::Vector{Float64},\n	srcLengths_array::Vector{Float64},\n	)\n\nbatch calculation for specialized for non-point sources.  return a tuple of three arrays the detector, the resultsand the path of the CSV  file containing results. \n\nThe results has columns of headers  AnchorHeight, AnchorRho, srcRadius, srcLength, GeoEfficiency.\n\nnote: Note\nfor all arrays srcHeights_array, srcRhos_array, srcRadii_array and srcLengths_array  element type should be Float64. if any of them have other numerical element type it  should converted to Float64 using float before passing it to this method.\n\n\n\n\n\n"
},

{
    "location": "manual/Output_Interface/#Output_Interface-1",
    "page": "Output_Interface",
    "title": "Output_Interface",
    "category": "section",
    "text": "GeoEfficiency.calc\nGeoEfficiency.calcN\nGeoEfficiency.batch\nGeoEfficiency.batchInfo\nGeoEfficiency.checkResultsDirs\nGeoEfficiency.writecsv_head\nGeoEfficiency._batch"
},

]}
