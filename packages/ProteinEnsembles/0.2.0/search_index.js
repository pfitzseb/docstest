var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ProteinEnsembles-1",
    "page": "Readme",
    "title": "ProteinEnsembles",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)This Julia package implements the ExProSE algorithm that takes two protein structures and generates an ensemble of protein structures. The ensembles span conformational space and can be used to predict allosteric sites. The method is described in:Greener JG, Filippis I and Sternberg MJE, Predicting protein dynamics and allostery using multi-protein atomic distance constraints, Structure, 2017, 25, 546-558. Link to paper."
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "Install using add ProteinEnsembles from within the Julia package mode. Run usingexprose --i1 input_1.pdb --d1 input_1.dssp \\\n    --i2 input_2.pdb --d2 input_2.dssp \\\n    -n 50 -o exprose_outwhere exprose is in the bin directory of the package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Julia is required and can be downloaded here. Install ProteinEnsembles.jl by running add ProteinEnsembles from the Julia package REPL, which is entered by pressing ]. This will also automatically install a few other required Julia packages. If you want, the tests can be run using test ProteinEnsembles. If you wish to use the auto-parameterisation procedure (see below) you must also have TM-score installed."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "To use ProteinEnsembles.jl you will need the following:PDB files of the protein of interest. Two is best, but one may be used (see the paper). They must have polar hydrogens only added; this can be done using tools such as Chimera or pdbtools. The chain labelling and residue numbering must be consistent between the files as this is used to find common atoms. Alternative atom locations are discarded. PDB files must also be a single model and not have any inserted residues. HETATM records are discarded by default.\nDSSP files corresponding to the PDB files above. These can be obtained using dssp."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "These instructions are tailored towards Mac/Unix. However they could be modified to work on Windows.Although organised as a Julia package, ProteinEnsembles.jl is primarily designed for use from the command line. The exprose script in the bin directory implements this. For example, to see the command line options run~/.julia/packages/ProteinEnsembles/xxxxx/bin/exprose -hwhere xxxxx is the directory of the latest package version. For easy access to the exprose command you might like to add the following line to your profile:export PATH=$PATH:~/.julia/packages/ProteinEnsembles/xxxxx/binThen, if all input files are in your current directory, run the program as follows:# Generate an ensemble of 50 structures with an output directory exprose_out\nexprose --i1 input_1.pdb --d1 input_1.dssp --i2 input_2.pdb \\\n    --d2 input_2.dssp -n 50 -o exprose_out\n\n# Use a tolerance weighting of 0.5\nexprose --i1 input_1.pdb --d1 input_1.dssp --i2 input_2.pdb \\\n    --d2 input_2.dssp -n 50 -o exprose_out -w 0.5\n\n# Generate an ensemble from a single structure with a tolerance weighting of 1.0\nexprose --i1 input_1.pdb --d1 input_1.dssp -n 50 -o exprose_out -w 1.0The method may also be run from within Julia. The below Julia script does the same thing as the first example above:using ProteinEnsembles\nrunpipeline(\n    i1=\"input_1.pdb\",\n    d1=\"input_1.dssp\",\n    i2=\"input_2.pdb\",\n    d2=\"input_2.dssp\",\n    n_strucs=50,\n    out_dir=\"exprose_out\"\n)Or, to split it up a little into the constituent functions:using ProteinEnsembles\nconstraints_com, constraints_one, constraints_two = interactions(\n    \"input_1.pdb\",\n    \"input_1.dssp\",\n    \"input_2.pdb\",\n    \"input_2.dssp\"\n)\nensemble_com = generateensemble(constraints_com, 50)\nrunanalysis(\"exprose_out\", ensemble_com, constraints_one, constraints_two)"
},

{
    "location": "#Selecting-parameters-1",
    "page": "Readme",
    "title": "Selecting parameters",
    "category": "section",
    "text": "The auto-parameterisation procedure can select a more suitable tolerance weighting value (see the paper). TM-score must be installed to do this. For example:exprose-param --i1 input_1.pdb --d1 input_1.dssp --i2 input_2.pdb \\\n    --d2 input_2.dssp -o exprose_param -t TMscoreruns the auto-parameterisation procedure with the -t option specifying the command to run TM-score. The last line of the output gives a suggested tolerance weighting. This value is also written out to suggested.tsv. Use this value in a normal exprose run as above."
},

{
    "location": "#Allosteric-site-prediction-1",
    "page": "Readme",
    "title": "Allosteric site prediction",
    "category": "section",
    "text": "To predict allosteric sites you should run LIGSITEcs on the second input structure (the one you give as --i2). You then need to run the cluster-ligsite script in bin to assign the points to pockets:cluster-ligsite pocket_r.pdb pocket_all.pdb pocket_points.pdbwhere pocket_r.pdb and pocket_all.pdb are in the LIGSITEcs output. Then carry out an exprose run with the pocket_points.pdb file (-l) and the number of pockets (e.g. top 4) to perturb at (-m) as parameters:exprose --i1 input_1.pdb --d1 input_1.dssp --i2 input_2.pdb \\\n    --d2 input_2.dssp -n 50 -o exprose_out -l pocket_points.pdb -m 4A tolerance weighting from an auto-parameterisation run can also be used here. View the predictions.tsv output file to get the order of allosteric pocket predictions. Note that other pocket prediction software can be used provided you can get the output into the same format as pocket_points.pdb, i.e. pocket cavity points with the pocket number in the residue number column."
},

{
    "location": "#Output-1",
    "page": "Readme",
    "title": "Output",
    "category": "section",
    "text": "The output directory contains the following:input_1.pdb and input_2.pdb: atoms used from the input structures are written back out and superimposed.\npdbs: generated structures in PDB format. Superimposed to input_1.pdb and input_2.pdb.\npcs: projections onto the principal components (PCs) from the principal component analysis of the generated structures. Contains files for generated (pcs.tsv) and input structures (pcs_input_1.tsv and pcs_input_2.tsv) - line n corresponds to structure n and column c corresponds to PC c. Has graphs of these for the first few PCs (pc_x_y.png). Also includes a list of PCs ordered by decreasing distance between the input structures (pcs_input_dist.tsv) and the percentage variation explained by each PC (evals_spread.tsv).\npymol: PyMol scripts to view PCs on input_1.pdb, e.g. run pymol input_1.pdb pymol/view_pc_1.pml.\nrmsds_input_1.tsv and rmsds_input_2.tsv: RMSDs of generated structures to the input structures. Line n corresponds to structure n.\nrmsfs.tsv and rmsfs.png: RMSFs of each residue over the ensemble of generated structures, and a plot of this. Line n corresponds to residue index n.\nspe_scores.tsv: SPE error scores of generated structures (see paper). Line n corresponds to structure n.For allosteric site prediction there will be pdbs_mod_n and mod_n containing similar information for each perturbed ensemble, as well as the ratio of RMSF values to the unperturbed ensemble (rmsfs_ratio.tsv). There will also be the order of allosteric predictions (predictions.tsv) and the size of the perturbation on modulating each site (perturbations.tsv), which is the RMSD between the centroid structure of the perturbed and unperturbed ensembles.The default plot colours are blue for generated structures, red for input structure 1, green for input structure 2 and orange for perturbed ensemble structures."
},

{
    "location": "#Reproducing-paper-results-1",
    "page": "Readme",
    "title": "Reproducing paper results",
    "category": "section",
    "text": "The results from the paper can be generated using the instructions in paper_results. Information on the ensemble and allosteric datasets is in datasets."
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "ExProSE can generate 250 structures in ~20 minutes for T4-lysozyme (162 residues) on a 3.1 GHz Intel Core i7 processor."
},

{
    "location": "#Reporting-issues-1",
    "page": "Readme",
    "title": "Reporting issues",
    "category": "section",
    "text": "If you find any bugs in the software or have a comment or feature request, please open an issue on GitHub or email Joe Greener (j.greener at ucl.ac.uk)."
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "All default values for parameters used in the code can be found and modified in src/defaults.jl.\nAuto-parameterisation works fine on all OSs but the auto-parameterisation tests are disabled by default to make the CI build pass. If you want to run the parameterisation tests, set run_param_test in test/runtests.jl to true.\nJulia utilities to deal with protein structures and PDB files can be found in Bio.jl and MIToS.jl.\nExProSE users might also like to try tCONCOORD and NMSim."
},

{
    "location": "autodocs/#ProteinEnsembles.Atom",
    "page": "Docstrings",
    "title": "ProteinEnsembles.Atom",
    "category": "type",
    "text": "An atom from a PDB format file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.BondedPair",
    "page": "Docstrings",
    "title": "ProteinEnsembles.BondedPair",
    "category": "type",
    "text": "A pair of atoms with a covalent bond between them in the standard amino acids.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.Constraints",
    "page": "Docstrings",
    "title": "ProteinEnsembles.Constraints",
    "category": "type",
    "text": "Information about the lower and upper distance constraints between atoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.ModelledEnsemble",
    "page": "Docstrings",
    "title": "ProteinEnsembles.ModelledEnsemble",
    "category": "type",
    "text": "A group of modelled structures.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.ModelledStructure",
    "page": "Docstrings",
    "title": "ProteinEnsembles.ModelledStructure",
    "category": "type",
    "text": "A set of coordinates and a score.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.PCA",
    "page": "Docstrings",
    "title": "ProteinEnsembles.PCA",
    "category": "type",
    "text": "The results of a principal components analysis, sorted with highest eigenvalue first.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.addstructure!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.addstructure!",
    "category": "function",
    "text": "Add a structure to an ensemble.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.align!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.align!",
    "category": "function",
    "text": "Align the first set of atomic coordinates to the second using an iterative procedure. At each step atoms with a high structural deviation are removed. If the standard deviation of the structural deviations is greater than cutoff, then structural deviations further than 2 standard deviations from the median are discarded. This is repeated n_cycles times. If calpha is true, only considers the C-alpha atoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.alignatoms!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.alignatoms!",
    "category": "function",
    "text": "Align an array of atoms to a set of coordinates or another set of atoms. Input is list of atoms and coords to align to. Changes the atom coords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.alignensemble!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.alignensemble!",
    "category": "function",
    "text": "Align an ensemble of coordinates to a coordinate set using an iterative procedure for each structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.alignensemblesimple!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.alignensemblesimple!",
    "category": "function",
    "text": "Align an ensemble of coordinates to a coordinate set using a single Kabsch rotation for each structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.alignsimple!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.alignsimple!",
    "category": "function",
    "text": "Align the first set of atomic coordinates to the second using a single Kabsch rotation. If calpha is true, only considers the C-alpha atoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.angles",
    "page": "Docstrings",
    "title": "ProteinEnsembles.angles",
    "category": "function",
    "text": "Calculate the bond angle matrix for a list of atoms. Returns a 2D boolean array of whether bond angles are present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.areatomssame",
    "page": "Docstrings",
    "title": "ProteinEnsembles.areatomssame",
    "category": "function",
    "text": "Determines if two atoms are the same. Atoms are the same if they have the same atom_name, chain_id, res_n and element. res_name is not considered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.atomcoords",
    "page": "Docstrings",
    "title": "ProteinEnsembles.atomcoords",
    "category": "function",
    "text": "Get or set the list of coordinates for a list of atoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.atomcoords!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.atomcoords!",
    "category": "function",
    "text": "Set the coordinates of a list of atoms from a list of coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.atomid",
    "page": "Docstrings",
    "title": "ProteinEnsembles.atomid",
    "category": "function",
    "text": "A string describing an Atom in the form atom_name/res_name/res_n/chain_id.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.atommap",
    "page": "Docstrings",
    "title": "ProteinEnsembles.atommap",
    "category": "function",
    "text": "Finds the mapping of the atoms in the first list to those in the second. Returns an array of length the same as the second list where the number is the atom index in the first list. Atoms missing from the first list are given 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.bonds",
    "page": "Docstrings",
    "title": "ProteinEnsembles.bonds",
    "category": "function",
    "text": "Calculate the bonding matrix for a list of atoms. Returns a 2D boolean array of bonding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.calphaindices",
    "page": "Docstrings",
    "title": "ProteinEnsembles.calphaindices",
    "category": "function",
    "text": "Return as an array the indices in an array of atoms that correspond to C-alpha atoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.centroid",
    "page": "Docstrings",
    "title": "ProteinEnsembles.centroid",
    "category": "function",
    "text": "Find the average structure in an ensemble. The ensemble should be aligned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.checkfilepath",
    "page": "Docstrings",
    "title": "ProteinEnsembles.checkfilepath",
    "category": "function",
    "text": "Checks if an output filepath is valid, and throws an error if not.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.clusterligsite",
    "page": "Docstrings",
    "title": "ProteinEnsembles.clusterligsite",
    "category": "function",
    "text": "Assign pocket numbers to LIGSITEcs pocketr.pdb file points. Arguments are pocketr.pdb file, pocketall.pdb file and new pocketr.pdb file. New file has pocket number in place of residue number. Apears to agree largely but not completely with the LIGSITEcs clustering. Unassigned points given number 0 and should be fixed manually.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.default_colours",
    "page": "Docstrings",
    "title": "ProteinEnsembles.default_colours",
    "category": "constant",
    "text": "Dictionary of default colours for plotting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.defaults",
    "page": "Docstrings",
    "title": "ProteinEnsembles.defaults",
    "category": "constant",
    "text": "Dictionary of default values for parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.displacements",
    "page": "Docstrings",
    "title": "ProteinEnsembles.displacements",
    "category": "function",
    "text": "Return the distances between each point for two sets of aligned coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.distances",
    "page": "Docstrings",
    "title": "ProteinEnsembles.distances",
    "category": "function",
    "text": "Calculate the distance matrix for a list of atoms. Returns a 2D array of distances.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.divalents",
    "page": "Docstrings",
    "title": "ProteinEnsembles.divalents",
    "category": "function",
    "text": "Calculate the divalent matrix for a list of atoms. Returns a 2D boolean array of whether divalents are present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.ensemblermsds",
    "page": "Docstrings",
    "title": "ProteinEnsembles.ensemblermsds",
    "category": "function",
    "text": "Get the RMSD between each structure in an ensemble and a reference structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.errorscore",
    "page": "Docstrings",
    "title": "ProteinEnsembles.errorscore",
    "category": "function",
    "text": "Calculate SPE error score.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.fillconstraints",
    "page": "Docstrings",
    "title": "ProteinEnsembles.fillconstraints",
    "category": "function",
    "text": "Use stochastic proximity embedding to generate a structure iteratively. See Agrafiotis et.al., Chapter 14 in Mucherino et. al., 2013 for algorithm details (Algorithm 8). Returns coordinate list.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.findcommonatoms",
    "page": "Docstrings",
    "title": "ProteinEnsembles.findcommonatoms",
    "category": "function",
    "text": "Checks two atom arrays and finds common atoms. Returns copies of input atom arrays with only common atoms remaining. The returned arrays are therefore of equal length.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.findimportantpcs",
    "page": "Docstrings",
    "title": "ProteinEnsembles.findimportantpcs",
    "category": "function",
    "text": "Takes two sets of projections onto the PCs of a PCA and returns the PC indices ordered such that the first represents the largest difference between the two structures.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.findinteractions",
    "page": "Docstrings",
    "title": "ProteinEnsembles.findinteractions",
    "category": "function",
    "text": "Find the interactions between atoms in a list of atoms. Returns 2D array of interactions by integer label. Interactions the same as De Groot et. al., Structure, 1997, but cis/trans limits not implemented.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.fixchirality!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.fixchirality!",
    "category": "function",
    "text": "Checks the chirality of coordinate set and switches it if it isn\'t correct. The coordinates must correspond to the atoms. Inverts each z coordinate in the coordinate array if required.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.fixstring",
    "page": "Docstrings",
    "title": "ProteinEnsembles.fixstring",
    "category": "function",
    "text": "Converts a string, character or number to a fixed length string. Be careful - could e.g. cut 0.5 to \"0\". Also does not round correctly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.fluctuations",
    "page": "Docstrings",
    "title": "ProteinEnsembles.fluctuations",
    "category": "function",
    "text": "Gets mean square fluctuation for each atom in an ensemble. Assumes the ensemble is aligned sensibly. Returns a list of mean square fluctuations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.fractionbetweeninputs",
    "page": "Docstrings",
    "title": "ProteinEnsembles.fractionbetweeninputs",
    "category": "function",
    "text": "Fraction of structures in an ensemble that are closer to both input structures than the input structures are to each other.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.generateensemble",
    "page": "Docstrings",
    "title": "ProteinEnsembles.generateensemble",
    "category": "function",
    "text": "Generate sets of coordinates with the correct chirality from distance constraints. discardratio gives the fraction of extra structures to calculate, then the low-scoring structures are discarded. If `removemodis true then modulator atoms and coords are removed from the ensemble before it is returned. Returns aModelledEnsemble`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.hard_sphere_radius",
    "page": "Docstrings",
    "title": "ProteinEnsembles.hard_sphere_radius",
    "category": "constant",
    "text": "Dictionary of atomic hard sphere radii in Angstroms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.inferelement",
    "page": "Docstrings",
    "title": "ProteinEnsembles.inferelement",
    "category": "function",
    "text": "Determines the element of an atom from the atom name. Returns the element as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.interactioninfo",
    "page": "Docstrings",
    "title": "ProteinEnsembles.interactioninfo",
    "category": "function",
    "text": "Returns a list with interaction types and a list with corresponding distance tolerances. Zero index represents same atom. tolerance_weight weights all tolerances.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.interactions",
    "page": "Docstrings",
    "title": "ProteinEnsembles.interactions",
    "category": "function",
    "text": "Run the interaction finding pipeline with one or two structures. If one structure is given, returns a Constraints object. If two structures are given, returns three Constraints objects corresponding to the combined constraints, constraints from structure one and constraints from structure two.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.isdbonefour",
    "page": "Docstrings",
    "title": "ProteinEnsembles.isdbonefour",
    "category": "function",
    "text": "Determines if two atoms are a 1-4 pair around a restricted side chain double bond. Assumes atoms are a 1-4 pair.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.ishbond",
    "page": "Docstrings",
    "title": "ProteinEnsembles.ishbond",
    "category": "function",
    "text": "Determines if two atoms are part of a hydrogen bond where the donor-acceptor distance is <= 3.5 Angstroms, the hydrogen-acceptor distance is <= 2.5 Angstroms and the donor-hydrogen-acceptor angle is minimally 90 degrees. Won\'t pick up the donor-H pairing, even though it is part of the H bond, as this pairing is covalent. Sulfur not considered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.ishydrophobic",
    "page": "Docstrings",
    "title": "ProteinEnsembles.ishydrophobic",
    "category": "function",
    "text": "Determines if two atoms are closer than the sum of the VDW radii plus extradist Angstroms. Currently counting C and H atoms only. Applies a crude 5 A distance cutoff for speed, so extradist values above ~1.5 A will have no effect.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.isloosephipsi",
    "page": "Docstrings",
    "title": "ProteinEnsembles.isloosephipsi",
    "category": "function",
    "text": "Determines if two atoms in a 1-4 pair around the phi/psi angle are either in a loop region or one of the residues is glycine. Assumes atoms are a 1-4 pair around the phi/psi angle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.ismodulator",
    "page": "Docstrings",
    "title": "ProteinEnsembles.ismodulator",
    "category": "function",
    "text": "Determines whether an Atom is a fake modulator atom.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.isomonefour",
    "page": "Docstrings",
    "title": "ProteinEnsembles.isomonefour",
    "category": "function",
    "text": "Determines if two atoms are a 1-4 pair around the omega angle. Assumes atoms are a 1-4 pair.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.isphipsi",
    "page": "Docstrings",
    "title": "ProteinEnsembles.isphipsi",
    "category": "function",
    "text": "Determines if two atoms are a 1-4 pair around the phi/psi angle. Assumes atoms are a 1-4 pair. Glycine H is not polar so should not be present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.isring",
    "page": "Docstrings",
    "title": "ProteinEnsembles.isring",
    "category": "function",
    "text": "Determines if two atoms are part of the same ring system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.issaltbridge",
    "page": "Docstrings",
    "title": "ProteinEnsembles.issaltbridge",
    "category": "function",
    "text": "Determines if two atoms are part of oppositely charged groups that are within 4 Angstroms. His not included.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.issecstr",
    "page": "Docstrings",
    "title": "ProteinEnsembles.issecstr",
    "category": "function",
    "text": "Determines if two atoms are backbone atoms that are part of the same helix/strand and not more than 4 residues apart. Does not include 3-10 and pi helices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.istightphipsi",
    "page": "Docstrings",
    "title": "ProteinEnsembles.istightphipsi",
    "category": "function",
    "text": "Determines if two atoms in a 1-4 pair around the phi/psi angle are either in the same helix/strand or one of the residues is proline. Assumes atoms are a 1-4 pair around the phi/psi angle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.kabschalignment",
    "page": "Docstrings",
    "title": "ProteinEnsembles.kabschalignment",
    "category": "function",
    "text": "Find the transformations to map the first set of coordinates onto the second. See Kabsch algorithm for details. Returns the translation to center the first set, the translation to center the second set and the rotation to map the first set onto the second.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.makedirectories",
    "page": "Docstrings",
    "title": "ProteinEnsembles.makedirectories",
    "category": "function",
    "text": "Make the outer results directory and any inner directories from a list.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.mod_atom_info",
    "page": "Docstrings",
    "title": "ProteinEnsembles.mod_atom_info",
    "category": "constant",
    "text": "Dictionary of atomic information for fake modulator atoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.paramfromshell",
    "page": "Docstrings",
    "title": "ProteinEnsembles.paramfromshell",
    "category": "function",
    "text": "Run auto-parameterisation from command line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.parampipeline",
    "page": "Docstrings",
    "title": "ProteinEnsembles.parampipeline",
    "category": "function",
    "text": "Run the auto-parameterisation pipeline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.parsecommandlineparam",
    "page": "Docstrings",
    "title": "ProteinEnsembles.parsecommandlineparam",
    "category": "function",
    "text": "Read arguments from command line for an ExProSE auto-parameterisation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.parsecommandlinerun",
    "page": "Docstrings",
    "title": "ProteinEnsembles.parsecommandlinerun",
    "category": "function",
    "text": "Read arguments from command line for an ExProSE run.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.pcsaddlayer!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.pcsaddlayer!",
    "category": "function",
    "text": "Adds a layer of points to an existing layer for PC plotting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.perturbensemble",
    "page": "Docstrings",
    "title": "ProteinEnsembles.perturbensemble",
    "category": "function",
    "text": "Gets ensembles for multiple modulators. Use pocket points to generate additional constraints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.plotfluctuations",
    "page": "Docstrings",
    "title": "ProteinEnsembles.plotfluctuations",
    "category": "function",
    "text": "Plot root mean square fluctuations of an aligned ensemble. Arguments are the output filepath and the array of fluctuations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.plotpcs",
    "page": "Docstrings",
    "title": "ProteinEnsembles.plotpcs",
    "category": "function",
    "text": "Plot the projections of an ensemble onto the principal components of the motion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.plottheme",
    "page": "Docstrings",
    "title": "ProteinEnsembles.plottheme",
    "category": "function",
    "text": "Theme for plots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.pointtheme",
    "page": "Docstrings",
    "title": "ProteinEnsembles.pointtheme",
    "category": "function",
    "text": "Theme for plot points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.projectensemble",
    "page": "Docstrings",
    "title": "ProteinEnsembles.projectensemble",
    "category": "function",
    "text": "Project the structures in an ensemble onto the eigenvectors of a PCA to get the principal coordinates. Non-zero eigenvalues only are returned. Assumes the ensemble is aligned and corresponds exactly to the PCA.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.projectpdbfile",
    "page": "Docstrings",
    "title": "ProteinEnsembles.projectpdbfile",
    "category": "function",
    "text": "Projects the structure in a PDB file onto the eigenvectors of a PCA. The residue numbering between the PDB files must be consistent but missing/extra residues are allowed. Reads the PDB file, maps the atoms to the ref atoms, aligns the atoms to the ref atoms then gets the projections. Arguments are PDB filepath, reference atoms to get atom map, coords to align to and the PCA object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.projectpdbfiles",
    "page": "Docstrings",
    "title": "ProteinEnsembles.projectpdbfiles",
    "category": "function",
    "text": "Wrapper function for projectpdbfile to project multiple PDBs and write the output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.projectstructure",
    "page": "Docstrings",
    "title": "ProteinEnsembles.projectstructure",
    "category": "function",
    "text": "Project a list of atoms onto the eigenvectors of a PCA. Atom map is the mapping of the input atom indices to the reference atoms. It is not required if the atoms correspond to the PCA. calpha_inds is only required if atom_map is non-trivial and is a list of C-alpha indices. 0 means the atom is not in the reference atoms. Assumes the structure is aligned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.protein_bonds",
    "page": "Docstrings",
    "title": "ProteinEnsembles.protein_bonds",
    "category": "constant",
    "text": "A list of bonded pairs representing the covalent bonds in a standard protein.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.readdssp",
    "page": "Docstrings",
    "title": "ProteinEnsembles.readdssp",
    "category": "function",
    "text": "Reads a DSSP file. If atoms are provided, creates additional \'-\' entries for residues not present in the DSSP file. Returns a dictionary where key is residue number and chain, and value is secondary structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.readensemble",
    "page": "Docstrings",
    "title": "ProteinEnsembles.readensemble",
    "category": "function",
    "text": "Read an ensemble of structures and return a ModelledEnsemble.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.readligsite",
    "page": "Docstrings",
    "title": "ProteinEnsembles.readligsite",
    "category": "function",
    "text": "Read a LIGSITEcs PDB output file. Returns the pocket centre coordinate list and list of pocket volumes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.readpdb",
    "page": "Docstrings",
    "title": "ProteinEnsembles.readpdb",
    "category": "function",
    "text": "Parse a PDB file. Returns a list of atoms. hetatm determines whether HETATM records are read in.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.readpdblines",
    "page": "Docstrings",
    "title": "ProteinEnsembles.readpdblines",
    "category": "function",
    "text": "Read the ATOM lines from a PDB file into an array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.readpocketpoints",
    "page": "Docstrings",
    "title": "ProteinEnsembles.readpocketpoints",
    "category": "function",
    "text": "Read a custom pocket point file in PDB format where the residue number is the pocket number. This file can be generated using a script from the LIGSITEcs pocketr.pdb and pocketall.pdb files. Returns a dictionary where key is pocket number and value is point coords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.removemodulator!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.removemodulator!",
    "category": "function",
    "text": "Takes a ModelledEnsemble and removes the fake modulator atoms and coords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.repeatpocketpoints",
    "page": "Docstrings",
    "title": "ProteinEnsembles.repeatpocketpoints",
    "category": "function",
    "text": "Repeat pocket point to get a certain number of points. Points are repeated as long as whole copies can be made, then the remainder are chosen randomly. Returns coordinate array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.rmsd",
    "page": "Docstrings",
    "title": "ProteinEnsembles.rmsd",
    "category": "function",
    "text": "Get the RMSD between two identical structures or two sets of coordinates. Assumes the structures are aligned. If calpha is true, only considers the C-alpha atoms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.runanalysis",
    "page": "Docstrings",
    "title": "ProteinEnsembles.runanalysis",
    "category": "function",
    "text": "Run the analysis pipeline and write output files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.runfromshell",
    "page": "Docstrings",
    "title": "ProteinEnsembles.runfromshell",
    "category": "function",
    "text": "Run pipeline from command line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.runpipeline",
    "page": "Docstrings",
    "title": "ProteinEnsembles.runpipeline",
    "category": "function",
    "text": "Wrapper function to run the whole pipeline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.selfalignensemble!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.selfalignensemble!",
    "category": "function",
    "text": "Align an ensemble to itself. See Bakan and Bahar, PNAS, 2009 for algorithm. The single Kabsch alignment is used during iteration, then the iterative alignment is done at the end. Returns the structure the final alignment was on, not the ensemble average (but they will be close). The cutoff parameter determines the RMSD between two average structures below which iteration is terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.spaceatomname",
    "page": "Docstrings",
    "title": "ProteinEnsembles.spaceatomname",
    "category": "function",
    "text": "Space an atom name correctly in the four-character limit. The element is in position 2. Returns a string of length 4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.tmscore",
    "page": "Docstrings",
    "title": "ProteinEnsembles.tmscore",
    "category": "function",
    "text": "TM-score of model and reference, given as filepaths. Uses external command line program - see https://zhanglab.ccmb.med.umich.edu/TM-score.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.tmscorepathvalid",
    "page": "Docstrings",
    "title": "ProteinEnsembles.tmscorepathvalid",
    "category": "function",
    "text": "Check a command runs TMscore.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.trimbyscore!",
    "page": "Docstrings",
    "title": "ProteinEnsembles.trimbyscore!",
    "category": "function",
    "text": "Retains only the ntokeep top scoring coordinate sets in an ensemble.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.vdw_radius",
    "page": "Docstrings",
    "title": "ProteinEnsembles.vdw_radius",
    "category": "constant",
    "text": "Dictionary of atomic VDW radii in Angstroms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writeclusterpoints",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writeclusterpoints",
    "category": "function",
    "text": "Write output file with assignment in residue number column\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writeensemble",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writeensemble",
    "category": "function",
    "text": "Write an ensemble out as separate PDB files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writeensemblescores",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writeensemblescores",
    "category": "function",
    "text": "Write out the scores associated with the structures in an ensemble.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writefloatarray",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writefloatarray",
    "category": "function",
    "text": "Write an array of floats to an output file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writeintarray",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writeintarray",
    "category": "function",
    "text": "Write an array of integers to an output file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writepcview",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writepcview",
    "category": "function",
    "text": "Write a PyMol script to view the atom motions of a principal component.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writepcviews",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writepcviews",
    "category": "function",
    "text": "Wrapper function for writepcview that produces visualisation scripts for the top n_to_write PCs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writepdb",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writepdb",
    "category": "function",
    "text": "Write a list of atoms as a PDB file. The atoms are not reordered so it is assumed they are in a sensible order, e.g. the order they were read in. Only ATOM records are written; no TER labels. Could write a brief header for generated models.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writeprojections",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writeprojections",
    "category": "function",
    "text": "Write out the projections of structures onto the eigenvectors of a PCA. pcstowrite is a list of the PCs to write, e.g. [1, 2]. All PCs written by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ProteinEnsembles.writestringarray",
    "page": "Docstrings",
    "title": "ProteinEnsembles.writestringarray",
    "category": "function",
    "text": "Write an array of strings to an output file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ProteinEnsembles.AtomProteinEnsembles.BondedPairProteinEnsembles.ConstraintsProteinEnsembles.ModelledEnsembleProteinEnsembles.ModelledStructureProteinEnsembles.PCAProteinEnsembles.ProteinEnsemblesProteinEnsembles.addstructure!ProteinEnsembles.align!ProteinEnsembles.alignatoms!ProteinEnsembles.alignensemble!ProteinEnsembles.alignensemblesimple!ProteinEnsembles.alignsimple!ProteinEnsembles.anglesProteinEnsembles.areatomssameProteinEnsembles.atomcoordsProteinEnsembles.atomcoords!ProteinEnsembles.atomidProteinEnsembles.atommapProteinEnsembles.bondsProteinEnsembles.calphaindicesProteinEnsembles.centroidProteinEnsembles.checkfilepathProteinEnsembles.clusterligsiteProteinEnsembles.default_coloursProteinEnsembles.defaultsProteinEnsembles.displacementsProteinEnsembles.distancesProteinEnsembles.divalentsProteinEnsembles.ensemblermsdsProteinEnsembles.errorscoreProteinEnsembles.evalProteinEnsembles.fillconstraintsProteinEnsembles.findcommonatomsProteinEnsembles.findimportantpcsProteinEnsembles.findinteractionsProteinEnsembles.fixchirality!ProteinEnsembles.fixstringProteinEnsembles.fluctuationsProteinEnsembles.fractionbetweeninputsProteinEnsembles.generateensembleProteinEnsembles.hard_sphere_radiusProteinEnsembles.includeProteinEnsembles.inferelementProteinEnsembles.interactioninfoProteinEnsembles.interactionsProteinEnsembles.isdbonefourProteinEnsembles.ishbondProteinEnsembles.ishydrophobicProteinEnsembles.isloosephipsiProteinEnsembles.ismodulatorProteinEnsembles.isomonefourProteinEnsembles.isphipsiProteinEnsembles.isringProteinEnsembles.issaltbridgeProteinEnsembles.issecstrProteinEnsembles.istightphipsiProteinEnsembles.kabschalignmentProteinEnsembles.makedirectoriesProteinEnsembles.mod_atom_infoProteinEnsembles.newcoordsProteinEnsembles.paramfromshellProteinEnsembles.parampipelineProteinEnsembles.parsecommandlineparamProteinEnsembles.parsecommandlinerunProteinEnsembles.pcsaddlayer!ProteinEnsembles.perturbensembleProteinEnsembles.plotfluctuationsProteinEnsembles.plotpcsProteinEnsembles.plotthemeProteinEnsembles.pointthemeProteinEnsembles.projectensembleProteinEnsembles.projectpdbfileProteinEnsembles.projectpdbfilesProteinEnsembles.projectstructureProteinEnsembles.protein_bondsProteinEnsembles.readdsspProteinEnsembles.readensembleProteinEnsembles.readligsiteProteinEnsembles.readpdbProteinEnsembles.readpdblinesProteinEnsembles.readpocketpointsProteinEnsembles.removemodulator!ProteinEnsembles.repeatpocketpointsProteinEnsembles.rmsdProteinEnsembles.runanalysisProteinEnsembles.runfromshellProteinEnsembles.runpipelineProteinEnsembles.selfalignensemble!ProteinEnsembles.spaceatomnameProteinEnsembles.tmscoreProteinEnsembles.tmscorepathvalidProteinEnsembles.trimbyscore!ProteinEnsembles.vdw_radiusProteinEnsembles.writeclusterpointsProteinEnsembles.writeensembleProteinEnsembles.writeensemblescoresProteinEnsembles.writefloatarrayProteinEnsembles.writeintarrayProteinEnsembles.writepcviewProteinEnsembles.writepcviewsProteinEnsembles.writepdbProteinEnsembles.writeprojectionsProteinEnsembles.writestringarray"
},

]}
