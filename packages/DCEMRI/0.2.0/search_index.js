var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DCEMRI.jl-1",
    "page": "Readme",
    "title": "DCEMRI.jl",
    "category": "section",
    "text": "A Fast, Validated Open Source Toolkit for Dynamic Contrast Enhanced MRI Analysis(Image: DOI) (Image: Build Status)"
},

{
    "location": "#Why-Julia?-1",
    "page": "Readme",
    "title": "Why Julia?",
    "category": "section",
    "text": "From the Julia website,Julia is a high-level, high-performance dynamic programming language for technical computing, with syntax that is familiar to users of other technical computing environments. It provides a sophisticated compiler, distributed parallel execution, numerical accuracy, and an extensive mathematical function library. The library, largely written in Julia itself, also integrates mature, best-of-breed C and Fortran libraries for linear algebra, random number generation, signal processing, and string processing.Put simply, it looks like Matlab, which is simple to learn and familiar to most MRI researchers, but it works better and faster and is completely free.  In particular, for the problem of DCE MRI, Julia\'s simple and flexible parallel computing model allows almost perfect parallelization of the nonlinear least squares fitting problem.  In my informal testing, the intrinsic speed of Julia coupled to my parallel implementation produced a factor of 20-40 speedup over comparable Matlab and Python."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Installation is simple.  First you need Julia. The simplest way to get Julia is to grab the current release version from julialang.org.Next you need DCEMRI.jl.  Open Julia. You should see a terminal window with the julia> prompt.  This is analogous to the command line in Matlab. To install DCEMRI.jl, runjulia> Pkg.add(\"DCEMRI\")at the julia> prompt.  This might take a minute, because the validation data must be downloaded, as well as a few supporting packages.If you want to DCEMRI.jl to create plots for you, you also need Python with Matplotlib installed. Most OS X and Linux machines probably already have a version of Python with Matplotlib installed. If you don\'t have Python with Matplotlib, such as if you are on Windows, you can grab the excellent, free Anaconda python distribution, which comes with Matplotlib pre-installed.If you have installation problems, check the next section on platform specific issues.  If none of that helps, please file an issue at the github repository, and we will try to help you."
},

{
    "location": "#Platform-Specific-Notes-1",
    "page": "Readme",
    "title": "Platform Specific Notes",
    "category": "section",
    "text": ""
},

{
    "location": "#Mac-OS-X-1",
    "page": "Readme",
    "title": "Mac OS X",
    "category": "section",
    "text": "If you get an error that xcrun is missing on Mac OS X, follow the instructions to install the Developer Tools Command Line Tools, and then switch back to your Julia window and run Pkg.build(\"HDF5\").  This should fix everything.  If you don\'t get this error, but installation fails, make sure you have Xcode installed, along with the optional Command Line Tools.There have also been reports of Julia popping up behind other windows on OS X.  Look behind your windows if you think Julia isn\'t starting."
},

{
    "location": "#Windows-1",
    "page": "Readme",
    "title": "Windows",
    "category": "section",
    "text": "On Windows, you will almost certainly need to install Anaconda to have a Python distribution. Some Windows versions claim to be 64-bit, but aren\'t quite.  If you are having trouble on Windows, and you have installed a 64-bit Anaconda and Julia, you can try uninstalling them and installing 32-bit versions of both."
},

{
    "location": "#Validating-the-Installation-1",
    "page": "Readme",
    "title": "Validating the Installation",
    "category": "section",
    "text": "After installing the Julia and the DCEMRI module, you should run the validations, to make sure the calculations work correctly on your machine.  The easiest way to do this is to start Julia and then runjulia> using DCEMRI\n\njulia> validate()This will run both validations (4 and 6), which could take up to an hour, depending on the number of cores you started Julia with and how fast your hardware is. Examine the results to make sure that the parameters have been recovered accurately.  The text output of the scripts will also print quantitative measures of parameter accuracy. By default validation results will be written to subdirectories of the DCEMRI.jl module directory, which is $HOME/.julia/v0.3/DCEMRI on Unix-based systems.  You can customize this directory for the validation by passing the output path as the second argument.  This only works the individual validation functions, e.g. validate(6, \"/my/path\") or validate(4, \"/my/path\").  Since both validations write figures with identical names, they can\'t go to the same output directory. An example output is shown here:julia> validate(4)\nRunning analysis of noise-free QIBA v4 data ...\nrunning models\nfound multi-flip data\nfitting R1 relaxation rate to multi-flip data\nfitting 6 x 23 points on each of 4 workers\nprocessed 90 voxels in 2.2 s (41.5 vox/s)\n\ncomputing signal enhancement ratios\nconverting DCE signal to effective R1\nconverting effective R1 to tracer tissue concentration Ct\nfitting DCE data\nattempting Extended Tofts-Kety model\nfitting 661 x 23 points on each of 4 workers\nprocessed 90 voxels in 3.8 s (23.5 vox/s)\n\nsaving results to /Users/dss/.julia/v0.3/DCEMRI/test/q4/results/results.mat\nPlotting results ...\nKt RMSE (%): 6.97465437361441\nKt max error (%): 23.493640353851994\nKt CCC: 0.9998009845162595\nve RMSE (%): 18.02170557638968\nve max error (%): 99.99999999999996\nve CCC: 0.8904290685710147\nvp RMSE (%): 23.770196145538407\nvp max error (%): 92.10583127104924\nvp CCC: 0.9999200988268792\nRunning analysis of noisy QIBA v4 data ...\nrunning models\nfound multi-flip data\nfitting R1 relaxation rate to multi-flip data\nfitting 6 x 2250 points on each of 4 workers\nprocessed 9000 voxels in 0.5 s (19436.3 vox/s)\n\ncomputing signal enhancement ratios\nconverting DCE signal to effective R1\nconverting effective R1 to tracer tissue concentration Ct\nfitting DCE data\nattempting Extended Tofts-Kety model\nfitting 661 x 2250 points on each of 4 workers\nprocessed 9000 voxels in 341.7 s (26.3 vox/s)\n\nsaving results to /Users/dss/.julia/v0.3/DCEMRI/test/q4/results_noisy/results.mat\nPlotting results ...\nKt RMSE (%): 11.311615941962662\nKt max error (%): 100.0\nKt CCC: 0.9742179876687028\nve RMSE (%): 18.238054961776477\nve max error (%): 100.0\nve CCC: 0.7026132423939505\nvp RMSE (%): 12.654024477709797\nvp max error (%): 100.0\nvp CCC: 0.9717255972607232\nValidation complete. Results can be found in /Users/dss/.julia/v0.3/DCEMRI/test/q4.To perform the validation on the Quantitative Imaging Biomarkers Alliance phantoms for yourself from the original DICOMS, you will need to download the DICOMS from Daniel Barboriak\'s Lab.  Then the scripts in the q4 and q6 folders will help you translate the DICOM data to MAT files suitable for input into the Julia code.I have already done this step for you and included the MAT files.  This also avoids you needing to install Python if you don\'t have it already.  If you want to install Python and run the scripts to convert the DICOM data to MAT files, then I recommend the Anaconda Python distribution. It has everything you need for scientific programming with Python."
},

{
    "location": "#Running-the-In-Vivo-Demo-1",
    "page": "Readme",
    "title": "Running the In Vivo Demo",
    "category": "section",
    "text": "You can run the in vivo data demo with the command demo().  It will save the output by default to $HOME/.julia/v0.3/DCEMRI/demo/results by default.  You can change this location by passing a path string to demo().  After a few seconds to a few minutes, depending on the speed of your machine, you will see the following output text:julia> demo()\nProcessing in vivo data ...\nrunning models\nfound multi-flip data\nfitting R1 relaxation rate to multi-flip data\nfitting 10 x 4582 points on each of 4 workers\nprocessed 18327 voxels in 1.0 s (19055.6 vox/s)\n\ncomputing signal enhancement ratios\nconverting DCE signal to effective R1\nconverting effective R1 to tracer tissue concentration Ct\nfitting DCE data\nattempting Standard Tofts-Kety model\nfitting 25 x 1694 points on each of 4 workers\nprocessed 6774 voxels in 1.1 s (5928.8 vox/s)\n\nsaving results to results/results.mat\nPlotting results ...\nDemo run complete.\nResults can be found in /Users/dss/.julia/v0.3/DCEMRI/demo/results"
},

{
    "location": "#A-Note-about-Units-1",
    "page": "Readme",
    "title": "A Note about Units",
    "category": "section",
    "text": "All units in the code are SI where possible.  Sometimes, due to numerical accuracy issues, they have been converted internally. But all data should be supplied to the code in SI units.  In particular, time should be in seconds, and relaxation rates in inverse seconds.  The two exceptions to this rule are that flip angles should be in degrees and Ktrans is output in min^-1."
},

{
    "location": "#Running-the-Code-1",
    "page": "Readme",
    "title": "Running the Code",
    "category": "section",
    "text": ""
},

{
    "location": "#As-a-Julia-module-1",
    "page": "Readme",
    "title": "As a Julia module",
    "category": "section",
    "text": "In the simplest incarnation, if you already have a MAT file containing your data,  you can run the analysis from within Julia usingjulia> using DCEMRI\n\njulia> results = fitdata(datafile=\"/path/to/your/datafile.mat\")DCEMRI.jl will look for parameters in the input MAT file, and if they are found will use them.  Anything not found in the MAT file will be initialized from the defaults.  These defaults can be viewed with the defaults() command.  You may also override both the MAT file and the defaults by passing keyword arguments to fitdata."
},

{
    "location": "#As-a-shell-command-1",
    "page": "Readme",
    "title": "As a shell command",
    "category": "section",
    "text": "DCEMRI.jl has two basic modes of operation.  The first is command-line invocation, like an operating system command.  To run it as a shell command, first edit the first line of bin/dcefit to point to where you installed your Julia binary, as in#!/path/to/julia/binary\n\nNext, make sure bin/dcefit is executable.  It should already be, but it doesn\'t hurt to check. Next copy it to a directory that is in your shell\'s search path.  A good place on UNIX systems, such as Mac OS X, is /usr/local/bin.dcefit can parse arguments passed on the command line to configure the model and point to the input data and output file.  To see the available options, run dcefit -h at the terminal prompt, you will getusage: dcefit [-O OUTFILE] [-R RELAXIVITY] [-r TR] [-d DCEFLIP]\n              [-c SERCUTOFF] [-t T1FLIP [T1FLIP...]]\n              [-m MODELS [MODELS...]] [-p] [-w WORKERS] [-v] [-h]\n              [datafile]\n\nProcess DCE-MRI data. Optional arguments can be used to override any\nvalues found in input files. For questions, contact David Smith\n<david.smith@gmail.com>. For bug reports and feature requests, file an\nissue at http://github.com/davidssmith/DCEMRI.jl\n\npositional arguments:\n  datafile              path to MAT file containing DCE and T1 data\n                        (default: \"input.mat\")\n\noptional arguments:\n  -O, --outfile OUTFILE\n                        path to MAT file to contain the ouput\n                        (default: \"results.mat\")\n  -R, --relaxivity RELAXIVITY\n                        contrast agent relaxivity (1/s) (type:\n                        Float64)\n  -r, --TR TR           repetition time (ms) (type: Float64)\n  -d, --DCEflip DCEFLIP\n                        flip angle of DCE data (type: Float64)\n  -c, --SERcutoff SERCUTOFF\n                        minimum SER to include in processing mask\n                        (type: Float64)\n  -t, --T1flip T1FLIP [T1FLIP...]\n                        list of flip angle(s) of T1 data (type:\n                        Float64)\n  -m, --models MODELS [MODELS...]\n                        list of models: 1=plasma only, 2=Standard,\n                        3=Extended (type: Int64)\n  -p, --plotting        plot intermediate results\n  -w, --workers WORKERS\n                        number of parallel workers to use (one per CPU\n                        core is good) (type: Int64, default: 4)\n  -v, --verbose         show verbose output\n  -h, --help            show this help message and exit\nTo process a DCEMRI data set from the command line, the minimum invocation is dcefit /path/to/my/dce/data.mat.The input data MAT file must contain the following:Cp: Arterial input function as a vector, resampled to the DCE time points.\nDCEdata: DCE data as a 3-D array (1 time by 2 space dimensions).\nDCEflip : flip angle in deg of DCE data\nt: time vector representing the dcedata samples.\nTR: repetition time of DCE scan\nR1 information as either R10 and S0, representing pre-calculated R1 relaxation maps, or as T1data, indicating thata multi-flip scan was performed and must be analyzed.  If T1data is supplied, the code also needs T1flip, a vector of flip angles (in degrees) for the multi-flip data.The results will be saved in the current directory as results.mat.  You can override the output file name and location with the --outfile flag."
},

{
    "location": "#Concluding-Remarks-1",
    "page": "Readme",
    "title": "Concluding Remarks",
    "category": "section",
    "text": "If you\'ve made it this far, you are ready to run the DCE analysis on your own data.  Congratulations!  If you have problems or find bugs, please file an issue on the github repository or email us.  If you find ways to make it better, please submit your improvements as well. We hope that this can become a community effort that leads to an outstanding, rock solid, trustworthy tool.To keep your installation of DCEMRI.jl up to date, periodically run Pkg.update() at the julia> prompt."
},

{
    "location": "#Funding-Sources-1",
    "page": "Readme",
    "title": "Funding Sources",
    "category": "section",
    "text": "This project was funded by the National Cancer Institute of the National Institutes of Health, under Award Numbers K25CA176219, U01CA142565, R01CA129961, R25CA092043. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.(Image: Analytics)"
},

]}
