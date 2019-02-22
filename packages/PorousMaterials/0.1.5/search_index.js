var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: PorousMaterials.jl)(Image: Build Status) (Image: Coverage Status) (Image: DOI)(Image: ) (Image: )A pure-Julia package for classical molecular modeling of adsorption in porous crystals such as metal-organic frameworks (MOFs)."
},

{
    "location": "autodocs/#PorousMaterials.Atoms",
    "page": "Docstrings",
    "title": "PorousMaterials.Atoms",
    "category": "type",
    "text": "Data structure holds a set of atom species and their positions in fractional coordinates.\n\nFractional coords of atom i is charges.xf[:, i].\n\nExample use\n\natoms = Atoms(2, [:C, :F], [0.0 1.0; 2.0 3.0; 4.0 5.0])\n\nAttributes\n\nn_atoms::Int: number of atoms\nspecies::Array{Symbol, 1}: atom species\nxf::Array{Float64, 2}: fractional coordinates in the columns\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.Box",
    "page": "Docstrings",
    "title": "PorousMaterials.Box",
    "category": "type",
    "text": "box = Box(a, b, c, α, β, γ, volume, f_to_c, c_to_f, reciprocal_lattice)\nbox = Box(a, b, c, α, β, γ)\nbox = Box(f_to_c)\n\nData structure to describe a unit cell box (Bravais lattice) and convert between fractional and Cartesian coordinates.\n\nAttributes\n\na,b,c::Float64: unit cell dimensions (units: Angstroms)\nα,β,γ::Float64: unit cell angles (units: radians)\nΩ::Float64: volume of the unit cell (units: cubic Angtroms)\nf_to_c::Array{Float64,2}: the 3x3 transformation matrix used to map fractional\n\ncoordinates to cartesian coordinates. The columns of this matrix define the unit cell axes. Columns are the vectors defining the unit cell box. units: Angstrom\n\nc_to_f::Array{Float64,2}: the 3x3 transformation matrix used to map Cartesian\n\ncoordinates to fractional coordinates. units: inverse Angstrom\n\nreciprocal_lattice::Array{Float64, 2}: the rows are the reciprocal lattice vectors.\n\nThis choice was made (instead of columns) for speed of Ewald Sums.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.Charges",
    "page": "Docstrings",
    "title": "PorousMaterials.Charges",
    "category": "type",
    "text": "Data structure holds a set of point charges and their positions in fractional coordinates.\n\nFractional coords of charge i is charges.xf[:, i].\n\nExample use\n\ncharges = Charges(2, [-1.0, 1.0], [0.0 1.0; 2.0 3.0; 4.0 5.0])\n\nAttributes\n\nn_charges::Int: number of charges\nq::Array{Float64, 1}: signed magnitude of charges (units: electrons)\nxf::Array{Float64, 2}: fractional coordinates in the columns\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.Eikr",
    "page": "Docstrings",
    "title": "PorousMaterials.Eikr",
    "category": "type",
    "text": "eikr = Eikr(eikar, eikbr, eikcr)\n\nmutable struct for holding the eikr vectors\n\nAttributes\n\neikar::OffsetArray{Complex{Float64}}: array for storing e^{i * ka ⋅ r}; has indices   0:kreps[1] and corresponds to recip. vectors in a-direction\neikbr::OffsetArray{Complex{Float64}}: array for storing e^{i * kb ⋅ r}; has indices   -kreps[2]:kreps[2] and corresponds to recip. vectors in b-direction\neikcr::OffsetArray{Complex{Float64}}: array for storing e^{i * kc ⋅ r}; has indices   -kreps[2]:kreps[1] and corresponds to recip. vectors in c-direction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.EwaldParams",
    "page": "Docstrings",
    "title": "PorousMaterials.EwaldParams",
    "category": "type",
    "text": "Data structure for storing Ewald summation settings\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.Framework",
    "page": "Docstrings",
    "title": "PorousMaterials.Framework",
    "category": "type",
    "text": "framework = Framework(filename, check_charge_neutrality=true,\n                      net_charge_tol=0.001, check_atom_and_charge_overlap=true,\n                      remove_overlap=false)\nframework = Framework(name, box, atoms, charges)\n\nRead a crystal structure file (.cif or .cssr) and populate a Framework data structure, or construct a Framework data structure directly.\n\nArguments\n\nfilename::AbstractString: the name of the crystal structure file (include \".cif\" or \".cssr\") read from joinpath(PorousMaterials.PATH_TO_DATA, \"structures\").\ncheck_charge_neutrality::Bool: check for charge neutrality\nnet_charge_tol::Float64: when checking for charge neutrality, throw an error if the absolute value of the net charge is larger than this value.\ncheck_atom_and_charge_overlap::Bool: throw an error if overlapping atoms are detected.\nremove_overlap::Bool: remove identical atoms automatically. Identical atoms are the same element atoms which overlap.\n\nReturns\n\nframework::Framework: A framework containing the crystal structure information\n\nAttributes\n\nname::AbstractString: name of crystal structure\nbox::Box: unit cell (Bravais Lattice)\natoms::Atoms: list of Atoms in crystal unit cell\ncharges::Charges: list of point charges in crystal unit cell\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.GCMCstats",
    "page": "Docstrings",
    "title": "PorousMaterials.GCMCstats",
    "category": "type",
    "text": "Data structure to keep track of statistics collected during a grand-canonical Monte Carlo simulation.\n\nAttributes\n\nn_samples::Int: Number of samples in the MC simulation\nn::Int: Number of molecules in the simulation box.\nn²::Int: Number of molecules in the simulation box squared.\nU::SystemPotentialEnergy: Potential energy of the system.\nU²::SystemPotentialEnergy: Potential energy of the system squared.\nUn::Float64: Potential energy of the system times the number of molecules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.Grid",
    "page": "Docstrings",
    "title": "PorousMaterials.Grid",
    "category": "type",
    "text": "Data structure for a regular [equal spacing between points in each coordinate] grid of points superimposed on a unit cell box (Box). Each grid point has data, data, associated with it, of type T, stored in a 3D array.\n\nAttributes\n\nbox::Box: describes Bravais lattice over which a grid of points is super-imposed. grid points on all faces are included.\nn_pts::Tuple{Int, Int, Int}: number of grid points in x, y, z directions. 0 and 1 fractional coordinates are included.\ndata::Array{T, 3}: three dimensional array conaining data associated with each grid point.\nunits::Symbol: the units associated with each data point.\norigin::Array{Float64, 1}: the origin of the grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.Kvector",
    "page": "Docstrings",
    "title": "PorousMaterials.Kvector",
    "category": "type",
    "text": "Data structure for a k-vector replication, although the reciprocal lattice is needed to specify the exact k-vector. This data structure stores the weight determining the contribution of kvector (ka, kb, kc) (all Int\'s) to the Fourier component of the Ewald sum. Precomputing this weight saves computation time. So Ewald sums work with an array of Kvecvtors\'s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.LJForceField",
    "page": "Docstrings",
    "title": "PorousMaterials.LJForceField",
    "category": "type",
    "text": "Data structure for a Lennard Jones forcefield.\n\nAttributes\n\nname::String: name of forcefield; correponds to filename\npure_σ::Dict{Symbol, Float64}: Dictionary that returns Lennard-Jones σ of an X-X interaction, where X is an atom. (units: Angstrom)\npure_ϵ::Dict{Symbol, Float64}: Dictionary that returns Lennard-Jones ϵ of an X-X interaction, where X is an atom. (units: K)\nσ²::Dict{Symbol, Dict{Symbol, Float64}}: Lennard Jones σ² (units: Angstrom²) for cross-interactions. Example use is sigmas_squared[:He][:C]\nϵ::Dict{Symbol, Dict{Symbol, Float64}}: Lennard Jones ϵ (units: K) for cross-interactions. Example use is epsilons[:He][:C]\ncutoffradius_squared::Float64: The square of the cut-off radius beyond which we define the potential energy to be zero (units: Angstrom²). We store σ² to speed up computations, which involve σ², not σ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.MarkovCounts",
    "page": "Docstrings",
    "title": "PorousMaterials.MarkovCounts",
    "category": "type",
    "text": "Keep track of Markov chain transitions (proposals and acceptances) during a grand-canonical Monte Carlo simulation. Entry i of these arrays corresponds to PROPOSAL_ENCODINGS[i].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.Molecule",
    "page": "Docstrings",
    "title": "PorousMaterials.Molecule",
    "category": "type",
    "text": "Data structure for a molecule/adsorbate.\n\nAttributes\n\nspecies::Symbol: Species of molecule, e.g. :CO2\natoms::Atoms: array of Lennard-Jones spheres comprising the molecule\ncharges::Charges: array of point charges comprising the molecule\nxf_com::Array{Float64, 1}: center of mass of the molecule in fractional coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.PengRobinsonGas",
    "page": "Docstrings",
    "title": "PorousMaterials.PengRobinsonGas",
    "category": "type",
    "text": "gas = PengRobinsonGas(gas)\n\nReads in critical temperature, critical pressure, and acentric factor of the gas::Symbol from the properties .csv file joinpath(PorousMaterials.PATH_TO_DATA, \"PengRobinsonGasProps.csv\") and returns a complete PengRobinsonGas data structure. **NOTE: Do not delete the last three comment lines in PengRobinsonGasProps.csv\n\nArguments\n\ngas::Symbol: The gas molecule you wish to construct a PengRobinsonGas struct for\n\nReturns\n\nPengRobinsonGas::struct: Data structure containing Peng-Robinson gas parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.PotentialEnergy",
    "page": "Docstrings",
    "title": "PorousMaterials.PotentialEnergy",
    "category": "type",
    "text": "pe = PotentialEnergy()\n\nData structure to store potential energy, partitioned into van der Waals (energy.vdw) and electrostatic (energy.coulomb) interactions, both Float64.\n\nThis returns a PotentialEnergy data type where the vdw and coulomb attributes are set to 0.0\n\nReturns\n\npe::PotentialEnergy: A structure containing van der Waals and electrostatic energies, initialized at 0.0\n\nAttributes\n\nvdw::Float64: The potential energy contributions from Van der Waals interactions\ncoulomb::Float64: The potential energy contributions from electrostatic interactions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.SystemPotentialEnergy",
    "page": "Docstrings",
    "title": "PorousMaterials.SystemPotentialEnergy",
    "category": "type",
    "text": "system_potential_energy = SystemPotentialEnergy()\n\nData structure to facilitate storing/partitioning potential energy of a system. It stores the potential energy from guest-host and guest-guest interactions separately.\n\nThis initializes guesthost and guestguest with PotentialEnergy(), so when it is created the total energy recorded is 0.0\n\nReturns\n\nsystem_potential_energy::SystemPotentialEnergy: A structure containing the potential energy of the system,   broken down into guest-guest and guest-host interactions\n\nAttributes\n\nguest_host::PotentialEnergy: The total potential energy from all guest-host   interactions in the system\nguest_guest::PotentialEnergy: The total potential energy from all guest-guest   interactions in the system\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.UnitCube",
    "page": "Docstrings",
    "title": "PorousMaterials.UnitCube",
    "category": "function",
    "text": "unit_cube = UnitCube()\n\nThis function generates a unit cube, each side is 1.0 Angstrom long, and all the corners are right angles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials._ϕ",
    "page": "Docstrings",
    "title": "PorousMaterials._ϕ",
    "category": "function",
    "text": "Electrostatic potential at point x due to charges\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.accessible",
    "page": "Docstrings",
    "title": "PorousMaterials.accessible",
    "category": "function",
    "text": "accessible(accessibility_grid, xf)\naccessible(accessibility_grid, xf, repfactors)\n\nUsing accessibility_grid, determine if fractional coordinate xf (relative to  accessibility_grid.box is accessible or not. Here, we search for the nearest grid point. We then look at the accessibility of this nearest grid point and all surroudning 9 other  grid points. The point xf is declared inaccessible if and only if all 10 of these grid points are inaccessible. We take this approach because, if the grid is coarse, we can allow energy computations to automatically determine accessibility at the boundary of  accessibility e.g. during a molecular simulation where inaccessible pockets are blocked.\n\nIf a tuple of replication factors are also passed, it is assumed that the passed xf is  relative to a replicated accessibility_grid.box so that xf is scaled by these rep.  factors. So xf = [0.5, 0.25, 0.1] with repfactors=(1, 2, 4) actually is, relative to accessibility_grid.box, fractional coordinate [0.5, 0.5, 0.4].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.adsorption_isotherm",
    "page": "Docstrings",
    "title": "PorousMaterials.adsorption_isotherm",
    "category": "function",
    "text": "results = adsorption_isotherm(framework, molecule, temperature, pressures,\n                              ljforcefield; n_sample_cycles=5000,\n                              n_burn_cycles=5000, sample_frequency=1,\n                              verbose=true, ewald_precision=1e-6, eos=:ideal, \n                              load_checkpoint_file=false, checkpoint=Dict(), \n                              write_checkpoints=false, checkpoint_frequency=50,\n                              filename_comment=\"\", show_progress_bar=false)\n\nRun a set of grand-canonical (μVT) Monte Carlo simulations in parallel. Arguments are the same as gcmc_simulation, as this is the function run in parallel behind the scenes. The only exception is that we pass an array of pressures. To give Julia access to multiple cores, run your script as julia -p 4 mysim.jl to allocate e.g. four cores. See Parallel Computing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.apply_periodic_boundary_condition!",
    "page": "Docstrings",
    "title": "PorousMaterials.apply_periodic_boundary_condition!",
    "category": "function",
    "text": "apply_periodic_boundary_condition!(molecule)\n\nCheck if the center_of_mass of a Molecule is outside of a Box. If so, apply periodic boundary conditions and translate the center of mass of the Molecule (and its atoms and point charges) so that it is inside of the Box.\n\nArguments\n\nmolecule::Molecule: A molecule we\'re interested in seeing if its\' center of mass falls within simulation_box\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.assign_charges",
    "page": "Docstrings",
    "title": "PorousMaterials.assign_charges",
    "category": "function",
    "text": "new_framework = assign_charges(framework, charges, net_charge_tol=1e-5)\n\nAssign charges to the atoms present in the framework. Pass a dictionary of charges that place charges according to the species of the atoms or pass an array of charges to assign to each atom, with the order of the array consistent with the order of framework.atoms.\n\nIf the framework already has charges, the charges are removed and new charges are added accordingly so that framework.atoms.n_atoms == framework.charges.n_charges.\n\nExamples\n\ncharges = Dict(:Ca => 2.0, :C => 1.0, :H => -1.0)\nnew_framework = assign_charges(framework, charges)\n\ncharges = [4.0, 2.0, -6.0] # framework.atoms is length 3\nnew_framework = assign_charges(framework, charges)\n\nArguments\n\nframework::Framework: the framework to which we should add charges (not modified in\n\nthis function)\n\ncharges::Union{Dict{Symbol, Float64}, Array{Float64, 1}}: a dictionary that returns the\n\ncharge assigned to the species of atom or an array of charges to assign, with order consistent with the order in framework.atoms (units: electrons).\n\nnet_charge_tol::Float64: the net charge tolerated when asserting charge neutrality of\n\nthe resulting framework\n\nReturns\n\nnew_framework::Framework: a new framework identical to the one passed except charges\n\nare assigned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.atom_overlap",
    "page": "Docstrings",
    "title": "PorousMaterials.atom_overlap",
    "category": "function",
    "text": "is_overlap = atom_overlap(framework; overlap_tol=0.1, verbose=false)\n\nReturn true iff any two Atoms in the crystal overlap by calculating the distance between every pair of atoms and ensuring distance is greater than overlap_tol. If verbose, print the pair of atoms which are culprits.\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\noverlap_tol::Float64: The minimum distance between two atoms without them overlapping\nverbose:Bool: If true, will print out extra information as it\'s running\n\nReturns\n\noverlap::Bool: A Boolean telling us if any two atoms in the framework are overlapping\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.bond_length_drift",
    "page": "Docstrings",
    "title": "PorousMaterials.bond_length_drift",
    "category": "function",
    "text": "drift = bond_length_drift(molecule, reference_molecule, box, atol=1e-14, throw_warning=true)\n\nCompute pairwise atom & charge distances of molecule and compare to those in a reference  molecule to determine if the pairwise atom & charge distances differ within a tolerance  atol. This is useful for checking for drift in the course of the simulation, during  which rotations and translations are performed.\n\nArguments\n\nmolecule::Molecule: The molecule which is subject to bond length drift check\nreference_molecule::Molecule: The molecule we will compare molecule with\nbox::Box: The box structure we use to transform to cartesian coordinates\natol::Float64: The tolerance for the bond length drift check\nthrow_warning::Bool: Will throw warning if true\n\nReturns\n\ndrift::Bool: If true we have observed a bond length drift. No bond length drift otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.calculate_properties",
    "page": "Docstrings",
    "title": "PorousMaterials.calculate_properties",
    "category": "function",
    "text": "props = calculate_properties(gas, T, P, verbose=true)\n\nUse equation of state to calculate density, fugacity, and molar volume of a real gas at a given temperature and pressure.\n\nArguments\n\ngas::PengRobinsonGas: Peng-Robinson gas data structure\nT::Float64: Temperature (units: Kelvin)\nP::Float64: Pressure (units: bar)\nverbose::Bool: will print results if true\n\nReturns\n\nprop_dict::Dict: Dictionary of Peng-Robinson gas properties\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.charge_neutral",
    "page": "Docstrings",
    "title": "PorousMaterials.charge_neutral",
    "category": "function",
    "text": "charge_neutral_flag = charge_neutral(framework, net_charge_tol) # true or false\n\nDetermine if the absolute value of the net charge in framework is less than net_charge_tol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.charged",
    "page": "Docstrings",
    "title": "PorousMaterials.charged",
    "category": "function",
    "text": "charged_flag = charged(framework, verbose=false) # true or false\n\nDetermine if a framework has point charges\n\n\n\n\n\ncharged_flag = charged(molecule, verbose=false)\n\nDetermine if a molecule has point charges\n\nArguments\n\nmolecule::Molecule: The molecule which will be checked for charges\nverbose::Bool: Will print result if true\n\nReturns\n\ncharged_flag::Bool: true if molecule is charged, false otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.check_forcefield_coverage",
    "page": "Docstrings",
    "title": "PorousMaterials.check_forcefield_coverage",
    "category": "function",
    "text": "check_forcefield_coverage(framework, ljforcefield)\ncheck_forcefield_coverage(molecule, ljforcefield)\n\nCheck that the force field contains parameters for every atom present in a framework or molecule. Will print out which atoms are missing.\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\nmolecule::Molecule: A molecule object\nljforcefield::LJForceField: A Lennard Jones forcefield object containing information on atom interactions\n\nReturns\n\nall_covered::Bool: Returns true if all atoms in the framework are also included in ljforcefield. False otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.chemical_formula",
    "page": "Docstrings",
    "title": "PorousMaterials.chemical_formula",
    "category": "function",
    "text": "formula = chemical_formula(framework, verbose=false)\n\nFind the irreducible chemical formula of a crystal structure.\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\nverbose::Bool: If true, will print the chemical formula as well\n\nReturns\n\nformula::Dict{Symbol, Int}: A dictionary with the irreducible chemical formula of a crystal structure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.compute_accessibility_grid",
    "page": "Docstrings",
    "title": "PorousMaterials.compute_accessibility_grid",
    "category": "function",
    "text": "accessibility_grid, nb_segments_blocked, porosity = compute_accessibility_grid(framework, \nprobe_molecule, ljforcefield; n_pts=(20, 20, 20), energy_tol=10.0, energy_unit=:kJ_mol,\nverbose=true, write_b4_after_grids=false, block_inaccessible_pockets=true)\n\nOverlay a grid of points about the unit cell. Compute the potential energy of a probe molecule at each point. If the potential energy is less than energy_tol, the grid point is declared as accessible to an adsorbate; otherwise inaccessible.\n\nIf block_pockets is true: Then perform a flood fill algorithm to label disparate (unconnected) segments in the grid.\n\nThen build a graph whose vertices are the unconnected segments in the flood-filled grid and whose edges are the connections between the segments across the periodic boundary.\n\nThen find any simple cycles in the grid. Any vertex that is involved in a simple cycle is considered accessible since a molecule can travel from that segment in the home unit cell to the same segment but in a different unit cell. If any vertex is not involved in a cycle, the segment is declared as inaccessible and all grid points in this segment are re-labeled as inaccessible.\n\nReturns accessibility_grid::Grid{Bool} and nb_segments_blocked, the latter the number of segments that were blocked because they were determined to be inaccessible.\n\nArguments\n\nframework::Framework: the crystal for which we seek to compute an accessibility grid.\nprobe_molecule::Molecule a molecule serving as a probe to determine whether a given \n\npoint can be occupied and accessed.\n\nLJForceField::LJForceField: the force field used to compute the potential energy of \n\nthe probe molecule\n\nn_pts::Tuple{Int, Int, Int}: number of grid points in a, b, c directions\nenergy_tol::Float64: if the computed potential energy is less than this, we declare the\n\ngrid point to be occupiable. Also this is the energy barrier beyond which we assume the probe adsorbate cannot pass. Units given by energy_units argument\n\nenergy_units::Symbol: units of energy (:kJ_mol or :K) to be used in determining\n\nthreshold for occupiability and whether molecule can percolate over barrier in channel. (see energy_tol)\n\nwrite_b4_after_grids::Bool: write a .cube file of occupiability for visualization both\n\nbefore and after flood fill/blocking inaccessible pockets\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.crystal_density",
    "page": "Docstrings",
    "title": "PorousMaterials.crystal_density",
    "category": "function",
    "text": "ρ = crystal_density(framework) # kg/m²\n\nCompute the crystal density of a framework. Pulls atomic masses from read_atomic_masses.\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\n\nReturns\n\nρ::Float64: The crystal density of a framework in kg/m³\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.delete_molecule!",
    "page": "Docstrings",
    "title": "PorousMaterials.delete_molecule!",
    "category": "function",
    "text": "delete_molecule!(molecule_id, molecules)\n\nRemoves a random molecule from the current molecules in the framework. molecule_id decides which molecule will be deleted, for a simulation, it must be a randomly generated value\n\nArguments\n\nmolecule_id::Int: The molecule ID is used to determine which molecule in molecules should be removed\nmolecules::Array{Molecule, 1}: An array of Molecule objects\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.determine_ewald_params",
    "page": "Docstrings",
    "title": "PorousMaterials.determine_ewald_params",
    "category": "function",
    "text": "α, max_mag_k_sqrd = determine_ewald_params(sr_cutoff_r, ϵ)\n\nCompute the Ewald summation convergence parameter α and the cutoff value for |k|² in the reciprocal space.\n\nArguments\n\nsr_cutoff_r::Float64: cutoff-radius (units: Å) for short-range contributions to Ewald\n\nsum. This must be consistent with the number of replication factors used to apply the nearest image convention, so typically this is chosen to be the same as for short-range van-der Waals interactions.\n\nϵ::Float64: desired level of precision. Typical value is 1e-6, but this does not\n\nguarentee this precision technically since that depends on the charges in the system, but it is very helpful to think of this as the weight on contributions near the edge of the short-range cutoff radius or max |k|².\n\nReturns\n\nα::Float64: Ewald sum convergence parameter (units: inverse Å)\nmax_mag_k_sqrd::Float64: cutoff for |k|², where k is a k-vector, in the Fourier sum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.electrostatic_potential_energy",
    "page": "Docstrings",
    "title": "PorousMaterials.electrostatic_potential_energy",
    "category": "function",
    "text": "ϕ = electrostatic_potential_energy(framework, molecule, eparams, eikr)\n\nCompute the electrostatic potential energy of a molecule inside a framework.\n\nThe electrostatic potential is created by the point charges assigned to the framework atoms in framework.charges. Periodic boundary conditions are applied through the Ewald summation. The spurious self-interaction term is neglected here because we are looking at differences in energy in a Monte Carlo simulation.\n\nWarning: it is assumed that the framework is replicated enough such that the nearest image convention can be applied for the short-range cutoff radius supplied in eparams.sr_cutoff_r.\n\nArguments\n\nframework::Framework: Crystal structure (see framework.charges for charges)\nmolecule::Molecule: The molecule being compared to the atoms in the framework.\neparams::EwaldParams: data structure containing Ewald summation settings\neikr::Eikr: Stores the eikar, eikbr, and eikcr OffsetArrays used in this calculation.\n\nReturns\n\npot::EwaldSum: Electrostatic potential between framework and molecule (units: K)\n\n\n\n\n\nϕ = electrostatic_potential_energy(molecules, eparams, box, eikr)\n\nCompute the electrostatic potential energy of a system comprised of an array of Molecules.\n\nThe EWald summation is used here in a double for loop; do not use this function for Monte Carlo simulations because it is computationally expensive.\n\nReturns an EwaldSum type containing short-range and long-range contributions to the Ewald sum as well as the spurious self-interaction and intramolecular interactions. Access via (ϕ.sr, ϕ.lr, ϕ.self, ϕ.intra).\n\nUnits of energy: Kelvin\n\nArguments\n\nmolecules::Array{Molecules, 1}: array of molecules comprising the system.\neparams::EwaldParams: data structure containing Ewald summation settings\nbox::Box: the box the energy is being computed in\neikr::Eikr: Stores the eikar, eikbr, and eikcr OffsetArrays used in this calculation.\n\nReturns\n\nϕ::GGEwaldSum: The total electrostatic potential energy\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.energy_grid",
    "page": "Docstrings",
    "title": "PorousMaterials.energy_grid",
    "category": "function",
    "text": "grid = energy_grid(framework, molecule, ljforcefield; n_pts=(50, 50, 50), temperature=298.0, n_rotations=750)\n\nSuperimposes a regular grid of points (regularly spaced in fractional coordinates of the framework.box) over the unit cell of a crystal, with n_gridpts dictating the number of grid points in the a, b, c directions (including 0 and 1 fractional coords). The fractional coordinates 0 and 1 are included in the grid, although they are redundant. Then, at each grid point, calculate the ensemble average potential energy of the molecule when its mass is centered at that point. The average is taken over Boltzmann-weighted rotations.\n\nThe ensemble average is a Boltzmann average over rotations:  - R T log ⟨e⁻ᵇᵁ⟩\n\nArguments\n\nframework::Framework: crystal in which we seek to compute an energy grid for a molecule. grid.box will be framework.box.\nmolecule::Molecule: molecule for which we seek an energy grid\nljforcefield::LJForceField: molecular model for computing molecule-framework interactions\nn_pts::Tuple{Int, Int, Int}=(50,50,50): number of grid points in each fractional coordinate dimension, including endpoints (0, 1)\nn_rotations::Int: number of random rotations to conduct in a Monte Carlo simulation for finding the free energy of a molecule centered at a given grid point.\n\nThis is only relevant for molecules that are comprised of more than one Lennard Jones sphere.\n\ntemperature::Float64: the temperature at which to compute the free energy for molecules where rotations are required. Lower temperatures overemphasize the minimum potential energy rotational conformation at that point.\nunits::Symbol: either :K or :kJ_mol, the units in which the energy should be stored in the returned Grid.\ncenter::Bool: shift coords of grid so that the origin is the center of the unit cell framework.box.\nverbose::Bool=true: print some information.\n\nReturns\n\ngrid::Grid: A grid data structure containing the potential energy of the system\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.fill_eikr!",
    "page": "Docstrings",
    "title": "PorousMaterials.fill_eikr!",
    "category": "function",
    "text": "fill_eikr!(eikr, k_dot_dx, krep, include_neg_reps)\n\nGiven k ⋅ r, where r = x - xⱼ, compute e^{i n k ⋅ r} for n = 0:krep to fill the OffsetArray eikr. If include_neg_reps is true, also compute n=-krep:-1.\n\ncolumns of eikr correspond to different k\'s; rows are charges\n\nArguments\n\n`eikr::OffsetArray{Complex{Float64}, 2, Array{Complex{Float64}, 2}}: An offset array containing charges, then kreps, then abc (direction)\nk_dot_dc::Array{Float64, 1}: k ⋅ r, where r = x - xⱼ\nkrep::Int: number of k-vector replications required in a, b or c\ninclude_neg_reps::Bool: If true will include negative replications\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.gcmc_result_savename",
    "page": "Docstrings",
    "title": "PorousMaterials.gcmc_result_savename",
    "category": "function",
    "text": "file_save_name = gcmc_result_savename(framework_name, molecule_species,\n                                    ljforcefield_name, temperature, pressure,\n                                    n_burn_cycles, n_sample_cycles; comment=\"\")\n\nDetermine the name of files saved during the GCMC simulation, be molecule positions or results. It uses many pieces of information from the simulation to ensure the file name accurately describes what it holds.\n\nArguments\n\nframework_name::AbstractString: The porous crystal being tested\nmolecule_species::Symbol: The molecule being tested inside the porous crystal\nljforcefield_name::AbstractString: The molecular model being used in this   simulation to describe intermolecular Van der Waals interactions\ntemperature::Float64: The temperature used in the simulation units: Kelvin (K)\npressure::Float64: The pressure used in the simulation units: bar\nn_burn_cycles::Int: The number of burn cycles used in this simulation\nn_sample_cycles::Int: The number of sample cycles used in this simulation\ncomment::AbstractString: An optional comment that will be appended to the end of the filename\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.gcmc_simulation",
    "page": "Docstrings",
    "title": "PorousMaterials.gcmc_simulation",
    "category": "function",
    "text": "results, molecules = gcmc_simulation(framework, molecule, temperature, pressure,\n                                     ljforcefield; n_sample_cycles=5000,\n                                     n_burn_cycles=5000, sample_frequency=1,\n                                     verbose=false, molecules=Molecule[],\n                                     eos=:ideal, ewald_precision=1e-6,\n                                     load_checkpoint_file=false,\n                                     show_progress_bar=false, checkpoint=Dict(),\n                                     write_checkpoints=false, checkpoint_frequency=100,\n                                     filename_comment=\"\")\n\nRuns a grand-canonical (μVT) Monte Carlo simulation of the adsorption of a molecule in a framework at a particular temperature and pressure using a Lennard Jones force field.\n\nA cycle is defined as max(20, number of adsorbates currently in the system) Markov chain proposals. Current Markov chain moves implemented are particle insertion/deletion and translation.\n\nArguments\n\nframework::Framework: the porous crystal in which we seek to simulate adsorption\nmolecule::Molecule: a template of the adsorbate molecule of which we seek to simulate\ntemperature::Float64: temperature of bulk gas phase in equilibrium with adsorbed phase   in the porous material. units: Kelvin (K)\npressure::Float64: pressure of bulk gas phase in equilibrium with adsorbed phase in the   porous material. units: bar   the adsorption\nljforcefield::LJForceField: the molecular model used to describe the   energetics of the adsorbate-adsorbate and adsorbate-host van der Waals interactions.\nn_burn_cycles::Int: number of cycles to allow the system to reach equilibrium before   sampling.\nn_sample_cycles::Int: number of cycles used for sampling\nsample_frequency::Int: during the sampling cycles, sample e.g. the number of adsorbed   gas molecules every this number of Markov proposals.\nverbose::Bool: whether or not to print off information during the simulation.\nmolecules::Array{Molecule, 1}: a starting configuration of molecules in the framework.\n\nNote that we assume these coordinates are Cartesian, i.e. corresponding to a unit box.\n\newald_precision::Float64: The desired precision for the long range Ewald summation\neos::Symbol: equation of state to use for calculation of fugacity from pressure. Default\n\nis ideal gas, where fugacity = pressure.\n\nload_checkpoint_file::Bool: Will find a checkpoint file corresponding to the gcmc_result_savename if true.   If that file is not found, function will throw an error.\ncheckpoint::Dict: A checkpoint dictionary that will work as a starting configuration for the run.   The dictionary has to have the following keys: outer_cycle, molecules, system_energy, current_block, gcmc_stats, markov_counts, markov_chain_time and time. If this argument is used, keep load_checkpoint_file=false.\nwrite_checkpoints::Bool: Will save checkpoints in data/gcmc_checkpoints if this is true.\ncheckpoint_frequency::Int: Will save checkpoint files every checkpoint_frequency cycles.\nfilename_comment::AbstractString: An optional comment that will be appended to the name of the saved file (if autosaved)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.henry_coefficient",
    "page": "Docstrings",
    "title": "PorousMaterials.henry_coefficient",
    "category": "function",
    "text": "result = henry_coefficient(framework, molecule, temperature, ljforcefield,\n                            nb_insertions=1e6, verbose=true, ewald_precision=1e-6,\n                            autosave=true)\n\nConduct particle insertions to compute the Henry coefficient Kₕ of a molecule in a framework. Also, for free, the heat of adsorption and ensemble average energy of adsorption is computed. The Henry coefficient is a model for adsorption at infinite dilution (low coverage): ⟨N⟩ = Kₕ P, where P is pressure and Kₕ is the Henry coefficient.\n\nKₕ = β ⟨e^{-β U}⟩, where the average is over positions and orientations of the molecule in the framework.\n\nArguments\n\nframework::Framework: the porous crystal in which we seek to simulate adsorption\nmolecule::Molecule: the adsorbate molecule\ntemperature::Float64: temperature of bulk gas phase in equilibrium with adsorbed phase   in the porous material. units: Kelvin (K)\nljforcefield::LJForceField: the molecular model used to describe the   energetics of the adsorbate-adsorbate and adsorbate-host van der Waals interactions.\ninsertions_per_volume::Int: number of Widom insertions to perform for computing the\n\naverage, per unit cell volume (Å³)\n\nverbose::Bool: whether or not to print off information during the simulation.\newald_precision::Float64: desired precision for Ewald summations; used to determine\n\nthe replication factors in reciprocal space.\n\nautosave::Bool: save results file as a .jld in PATHTODATA * sims\nfilename_comment::AbstractString: An optional comment that will be appended to the name of the saved file.\nwrite_checkpoint::Bool: Will periodically save checkpoints to start the job from a previous state.\nload_checkpoint::Bool: Instructs the program to look for a checkpoint file in data/henry_checkpoints\n\nand start the simulation from that point.\n\ncheckpoint_frequency::Int: The frequency at which we will save a checkpoint file. Is only used if write_checkpoint=true\n\nReturns\n\nresult::Dict{String, Float64}: A dictionary containing all the results from the Henry coefficient simulation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.henry_result_savename",
    "page": "Docstrings",
    "title": "PorousMaterials.henry_result_savename",
    "category": "function",
    "text": "save_name = henry_result_savename(framework, molecule, temperature,\n                               ljforcefield, insertions_per_volume;\n                               comment=\"\")\n\nDetermine the name of files saved while calculating the henry coefficient. It uses many pieces of information from the simulation to ensure the file name accurately describes what it holds.\n\nArguments\n\nframework::Framework: The porous crystal being tested\nmolecule::Molecule: The molecule being tested inside the crystal\ntemperature::Float64: The temperature used in the simulation units: Kelvin (K)\nljforcefield::LJForceField: The molecular model being used in the simulation   to describe the intermolecular Van der Waals forces\ninsertions_per_volume::Union{Int, Float64}: The number of widom insertions per unit volume.   Will be scaled according to the framework we\'re working with\ncomment::AbstractString: An optional comment that will be appended to the filename\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.insert_molecule!",
    "page": "Docstrings",
    "title": "PorousMaterials.insert_molecule!",
    "category": "function",
    "text": "insert_molecule!(molecules, box, template)\n\nInserts an additional adsorbate molecule into the simulation box using the template provided. The center of mass of the molecule is chosen at a uniform random position in the simulation box. A uniformly random orientation of the molecule is chosen by rotating about the center of mass.\n\nArguments\n\nmolecules::Array{Molecule, 1}: An array of Molecule objects\nbox::Box: The simulation box\ntemplate::Molecule: A template molecule used as reference when inserting molecules\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.inside",
    "page": "Docstrings",
    "title": "PorousMaterials.inside",
    "category": "function",
    "text": "inside_box = inside(x, box) # true or false\n\nDetermine whether a Cartesian vector x lays inside a Box. This works by computing the  fractional coordinates of vector x and ensuring each lie within the interval [0, 1].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.lennard_jones",
    "page": "Docstrings",
    "title": "PorousMaterials.lennard_jones",
    "category": "function",
    "text": "energy = lennard_jones(r², σ², ϵ)  (units: Kelvin)\n\nCalculate the lennard jones potential energy given the square of the radius r between two lennard-jones spheres. σ and ϵ are specific to interaction between two elements. Return the potential energy in units Kelvin (well, whatever the units of ϵ are).\n\nArguments\n\nr²::Float64: distance between two (pseudo)atoms in question squared (Angstrom²)\nσ²::Float64: sigma parameter in Lennard Jones potential squared (units: Angstrom²)\nϵ::Float64: epsilon parameter in Lennard Jones potential (units: Kelvin)\n\nReturns\n\nenergy::Float64: Lennard Jones potential energy\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.mean_stderr_n_U",
    "page": "Docstrings",
    "title": "PorousMaterials.mean_stderr_n_U",
    "category": "function",
    "text": "avg_n, err_n, avg_U, err_U = mean_stderr_n_U(gcmc_stats)\n\nCompute average and standard error of the number of molecules and potential energy from an array of GCMCstats, each corresponding to statitics from an independent block/bin during the simulation. The average from each bin is treated as an independent sample and used to estimate the error in the estimate as a confidence interval.\n\nArguments\n\ngcmc_stats::Array{GCMCstats, 1}: An array of the GCMC stats used in the MC simulation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.molecular_weight",
    "page": "Docstrings",
    "title": "PorousMaterials.molecular_weight",
    "category": "function",
    "text": "mass_of_framework = molecular_weight(framework)\n\nCalculates the molecular weight of a unit cell of the framework in amu using information stored in data/atomicmasses.csv.\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\n\nReturns\n\nmass_of_framework::Float64: The molecular weight of a unit cell of the framework in amu\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.nearest_image!",
    "page": "Docstrings",
    "title": "PorousMaterials.nearest_image!",
    "category": "function",
    "text": "nearest_image!(dxf)\n\nApplies the nearest image convention on a vector dxf between two atoms in fractional space; modifies dxf for nearest image convention. Fractional coordinates here fall in [0, 1] so that the box is [0, 1]^3 in fractional space.\n\nWarning: this assumes the two molecules are in the box described by fractional coords [0, 1]³.\n\nArguments\n\ndxf::Array{Float64}: A vector between two atoms in fractional space\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.outside_box",
    "page": "Docstrings",
    "title": "PorousMaterials.outside_box",
    "category": "function",
    "text": "outside_box = outside_box(molecule)\n\nChecks if a Molecule object is within the boundaries of a Box unitcell.\n\nArguments\n\nmolecule::Molecule: The molecule object\n\nReturns\n\noutside_box::Bool: True if the center of mass of molecule is outisde of box. False otherwise\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.pairwise_atom_distances",
    "page": "Docstrings",
    "title": "PorousMaterials.pairwise_atom_distances",
    "category": "function",
    "text": "bond_lenghts = pairwise_atom_distances(molecule, box)\n\nLoop over all pairs of Atoms\'s in molecule.atoms. Return a matrix whose (i, j) element is the distance between atom i and atom j in the molecule.\n\nArguments\n\nmolecule::Molecule: The molecules containing the atoms we wish to calculate the distances between\nbox::Box: The box we use to get the cartesian coordinates rather than the fractional coordinates stored in the Molecule object\n\nReturns\n\nbond_lenghts::Array{Float64, 2}: A n_atoms by n_atoms symmetric matrix containing the bond lengths between atoms in molecule\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.pairwise_charge_distances",
    "page": "Docstrings",
    "title": "PorousMaterials.pairwise_charge_distances",
    "category": "function",
    "text": "charge_bond_lengths = pairwise_charge_distances(molecule, box)\n\nLoop over all pairs of Charges\'s in molecule.charges. Return a matrix whose (i, j) element is the distance between point charge i and point charge j in the molecule.\n\nArguments\n\nmolecule::Molecule: The molecules containing the atoms we wish to calculate the distances between\nbox::Box: The box we use to get the cartesian coordinates rather than the fractional coordinates stored in the Molecule object\n\nReturns\n\ncharge_bond_lenghts::Array{Float64, 2}: A n_charges by n_charges symmetric matrix containing the point charge bond lengths between atoms in molecule\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.precompute_kvec_wts",
    "page": "Docstrings",
    "title": "PorousMaterials.precompute_kvec_wts",
    "category": "function",
    "text": "kvectors = precompute_kvec_wts(kreps, box, α, max_mag_k_sqrd=Inf)\n\nFor speed, pre-compute the weights for each reciprocal lattice vector for the Ewald sum in Fourier space. This function takes advantage of the symmetry:     cos(-k⋅(x-xᵢ)) + cos(k⋅(x-xᵢ)) = 2 cos(k⋅(x-xᵢ))\n\nIf max_mag_k_sqrd is passed, k-vectors with a magnitude greater than max_mag_k_sqrd are not included.\n\nArguments\n\nkreps::Tuple{Int, Int, Int}: number of k-vector replications required in a, b, c\nbox::Box: the simulation box containing the reciprocal lattice.\nα::Float64: Ewald sum convergence parameter (units: inverse Å)\nmax_mag_k_sqrd::Float64: cutoff for |k|² in Fourier sum; if passed, do not include\n\nk-vectors with magnitude squared greater than this.\n\nReturns\n\nkvectors::Array{Kvector, 1}: array of k-vectors to include in the Fourier sum and their\n\ncorresponding weights indicating the contribution to the Fourier sum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.rand_point_on_unit_sphere",
    "page": "Docstrings",
    "title": "PorousMaterials.rand_point_on_unit_sphere",
    "category": "function",
    "text": "u = rand_point_on_unit_sphere()\n\nGenerate a unit vector with a random orientation.\n\nReturns\n\nu::Array{Float64, 1}: A unit vector with a random orientation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.read_atomic_masses",
    "page": "Docstrings",
    "title": "PorousMaterials.read_atomic_masses",
    "category": "function",
    "text": "atomic_masses = read_atomic_masses()\n\nRead the data/atomicmasses.csv file to construct a dictionary of atoms and their atomic masses in amu.\n\nReturns\n\natomic_masses::Dict{Symbol, Float64}: A dictionary containing the atomic masses of each atom stored in data/atomicmasses.csv\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.read_atomic_radii",
    "page": "Docstrings",
    "title": "PorousMaterials.read_atomic_radii",
    "category": "function",
    "text": "atomic_radii = read_atomic_radii()\n\nReturn atomic_radii::Dict{Symbol, Float64}, where atom_masses[\":C\"] gives the atomic radii of carbon (10.87 Angstrom).\n\nReturns\n\natomic_radii::Dict{Symbol, Float64}: A dictionary linking an element symbol to its\' corresponding atomic radius\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.read_cpk_colors",
    "page": "Docstrings",
    "title": "PorousMaterials.read_cpk_colors",
    "category": "function",
    "text": "atom_colors = read_cpk_colors()\n\nRead in CPK color scheme for atoms. Return atom_colors::Dict{Symbol, Tuple{Int, Int, Int}} such that atom_colors[\":C\"] gives RGB code for carbon as a tuple, (144, 144, 144). https://en.wikipedia.org/wiki/CPK_coloring\n\nReturns\n\natom_colors::Dict{Symbol, Tuple{Int, Int, Int}}: A dictionary linking an element symbol to its\' corresponding CPK color in RGB\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.read_cube",
    "page": "Docstrings",
    "title": "PorousMaterials.read_cube",
    "category": "function",
    "text": "grid = read_cube(filename)\n\nRead a .cube file and return a populated Grid data structure.\n\nArguments\n\nfilename::AbstractString: name of .cube file to which we write the grid; this is relative to PorousMaterials.PATH_TO_DATAgrids/.\n\nReturns\n\ngrid::Grid: A grid data structure\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.read_xyz",
    "page": "Docstrings",
    "title": "PorousMaterials.read_xyz",
    "category": "function",
    "text": "atoms, x = read_xyz(filename)\n\nReturn the list of atoms (Array{Symbol, 1}) and their Cartesian coordinates x::Array{Float64, 2} as stored in the .xyz file. x[:, k] will return Cartesian coords of the kth atom.\n\nArguments\n\nfilename::AbstractString: The filename of the .xyz file\n\nReturns\n\natoms::Array{Symbol, 1}: An array of atoms stored as symbols e.g. [:H, :H, :O] read\n\nfrom the .xyz file.\n\nx::Array{Float64, 2}: The Cartesian coordinates of the atoms. x[:, k] will return cartesian coordinates of the k-th atom\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.reciprocal_lattice",
    "page": "Docstrings",
    "title": "PorousMaterials.reciprocal_lattice",
    "category": "function",
    "text": "r = reciprocal_lattice(f_to_c)\n\nGiven the fractional to Cartesian transformation matrix, compute the reciprocal lattice vectors, which are the rows of the returned matrix r.\n\nArguments\n\nf_to_c::Array{Float64,2}: the 3x3 transformation matrix used to map fractional\n\ncoordinates to cartesian coordinates. The columns of this matrix define the unit cell axes. units: Angstrom\n\nReturns\n\nr::Array{Float64, 2}: Reciprocal lattice vectors in a matrix format, where the rows\n\nare the reciprocal lattice vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.reinsert_molecule!",
    "page": "Docstrings",
    "title": "PorousMaterials.reinsert_molecule!",
    "category": "function",
    "text": "reinsert_molecule(molecule, box)\n\nMove molecule to a new center of mass randomly distrubted in the unit cell and choose a random orientation for it. Return a deep copy of the starting molecule for possible restoration. This MC move can be viewed as a more aggressive translate_molecule!.\n\nArguments\n\nmolecule::Molecule: The molecule we want to perturb\nbox::Box: The simulation box\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.remove_overlapping_atoms_and_charges",
    "page": "Docstrings",
    "title": "PorousMaterials.remove_overlapping_atoms_and_charges",
    "category": "function",
    "text": "new_framework = remove_overlapping_atoms_and_charges(framework, overlap_tol=0.1, verbose=true)\n\nTakes in a framework and returns a new framework with where overlapping atoms and overlapping charges were removed. i.e. if there is an overlapping pair, one in the pair is removed. For any atoms or charges to be removed, the species and charge, respectively, must be identical.\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\natom_overlap_tol::Float64: The minimum distance between two atoms that is tolerated\ncharge_overlap_tol::Float64: The minimum distance between two charges that is tolerated\n\nReturns\n\nnew_framework::Framework: A new framework where identical atoms have been removed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.replicate",
    "page": "Docstrings",
    "title": "PorousMaterials.replicate",
    "category": "function",
    "text": "new_box = replicate(original_box, repfactors)\n\nReplicates a Box in positive directions to construct a new Box representing a supercell. The original_box is replicated according to the factors in repfactors. Note replicate(original_box, repfactors=(1, 1, 1)) returns same Box. The new fractional coordinates as described by f_to_c and c_to_f still ∈ [0, 1].\n\nArguments\n\noriginal_box::Box: The box that you want to replicate\nrepfactors::Tuple{Int, Int, Int}: The factor you want to replicate the box by\n\nReturns\n\nbox::Box: Fully formed Box object\n\n\n\n\n\nreplicated_frame = replicate(framework, repfactors)\n\nReplicates the atoms and charges in a Framework in positive directions to construct a new Framework. Note replicate(framework, (1, 1, 1)) returns the same Framework.\n\nArguments\n\nframework::Framework: The framework to replicate\nrepfactors::Tuple{Int, Int, Int}: The factors by which to replicate the crystal structure in each direction.\n\nReturns\n\nreplicated_frame::Framework: Replicated framework\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.replication_factors",
    "page": "Docstrings",
    "title": "PorousMaterials.replication_factors",
    "category": "function",
    "text": "repfactors = replication_factors(unitcell, cutoffradius)\n\nFind the replication factors needed to make a supercell big enough to fit a sphere with the specified cutoff radius. In PorousMaterials.jl, rather than replicating the atoms in the home unit cell to build the supercell that serves as a simulation box, we replicate the home unit cell to form the supercell (simulation box) in a for loop. This function ensures enough replication factors such that the nearest image convention can be applied.\n\nA non-replicated supercell has 1 as the replication factor in each dimension (repfactors = (1, 1, 1)).\n\nArguments\n\nunitcell::Box: The unit cell of the framework\ncutoff_radius::Float64: Cutoff radius beyond which we define the potential energy to be zero (units: Angstrom)\n\nReturns\n\nrepfactors::Tuple{Int, Int, Int}: The replication factors in the a, b, c directions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.required_kreps",
    "page": "Docstrings",
    "title": "PorousMaterials.required_kreps",
    "category": "function",
    "text": "kreps = required_kreps(box, max_mag_k_sqrd)\n\nDetermine replications of k-vectors in Fourier sum, kreps, a Tuple of Ints, required to assert all k-vectors with square magnitude less than |k|² (max_mag_k_sqrd) are included.\n\nArguments\n\nbox::Box: the simulation box containing the reciprocal lattice.\nmax_mag_k_sqrd::Float64: cutoff value for |k|² in reciprocal space sum.\n\nReturns\n\nkreps::Tuple{Int, Int, Int}: number of k-vector replications required in a, b, c\n\ndirections.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.required_n_pts",
    "page": "Docstrings",
    "title": "PorousMaterials.required_n_pts",
    "category": "function",
    "text": "n_pts = required_n_pts(box, dx)\n\nCalculate the required number of grid pts in a, b, c unit cell directions required to keep distances between grid points less than dx apart, where dx is in units of Angstrom.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.rotatable",
    "page": "Docstrings",
    "title": "PorousMaterials.rotatable",
    "category": "function",
    "text": "need_to_rotate = rotatable(molecule)\n\nDetermines whether or not a given molecule needs to be rotated. For example, rotating a single atom isn\'t necessary.\n\nArguments\n\nmolecule::Molecule: The molecule being tested. This function determines if a   rotation of this molecule will do anything.\n\nReturns\n\nis_rotatable::Bool: A boolean describing whether or not rotating the molecule   will alter its interactions with other molecules \n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.rotate!",
    "page": "Docstrings",
    "title": "PorousMaterials.rotate!",
    "category": "function",
    "text": "rotate!(molecule, box)\n\nConduct a random rotation of the molecule about its center of mass. The box is needed because the molecule contains only its fractional coordinates.\n\nArguments\n\nmolecule::Molecule: The molecule which will be subject to a random rotation\nbox::Box: The molecule only contains fractional coordinates, so the box is needed for a correct rotation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.rotation_matrix",
    "page": "Docstrings",
    "title": "PorousMaterials.rotation_matrix",
    "category": "function",
    "text": "r = rotation_matrix()\n\nGenerate a 3x3 random rotation matrix r such that when a point x is rotated using this rotation matrix via r * x, this point x is placed at a uniform random distributed position on the surface of a sphere of radius norm(x). See James Arvo. Fast Random Rotation Matrices.\n\nhttps://pdfs.semanticscholar.org/04f3/beeee1ce89b9adf17a6fabde1221a328dbad.pdf\n\nReturns\n\nr::Array{Float64, 2}: A 3x3 random rotation matrix\n\n\n\n\n\nR = rotation_matrix(θ, u, assume_unit_vector=false) # 3 by 3 rotation matrix, angle θ about vector u\nR = rotation_matrix(θ, dim) # 3 by 3 rotation matrix, angle θ about axis `dim`\n\nDetermine the 3D rotation matrix to rotate an angle θ (radians) about axis u.\n\nSee Wikipedia.\n\nArguments\n\nθ::Float64: angle to rotate about an axis, in radians\nu::Array{Float64, 1}: axis about which to rotate\ndim::Int: 1, 2, 3 for rotation about x-, y-, or z-axis, respectively.\nassume_unit_vector::Bool: assume u is a unit vector; otherwise, u will be normalized\n\ninternal to this function.\n\nReturns\n\nR::Array{Float64, 2}: 3D rotation matrix. so R * x will rotate vector x as desired.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.set_fractional_coords!",
    "page": "Docstrings",
    "title": "PorousMaterials.set_fractional_coords!",
    "category": "function",
    "text": "set_fractional_coords!(molecule, box)\n\nAfter a molecule is freshly constructed, its fractional coords are assumed to correspond to a unit cell box that is a unit cube. This function adjusts the fractional coordinates of the molecule to be consistent with a different box.\n\nArguments\n\nmolecule::Molecule: The molecule which will have its\' coordinates set to fractional coordinates\nbox::Box: The box which will serve as a reference for the fractional coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.set_fractional_coords_to_unit_cube!",
    "page": "Docstrings",
    "title": "PorousMaterials.set_fractional_coords_to_unit_cube!",
    "category": "function",
    "text": "set_fractional_coords_to_unit_cube!(molecule, box)\n\nChange fractional coordinates of a molecule in the context of a given box to Cartesian, i.e. to correspond to fractional coords in a unit cube box.\n\nArguments\n\nmolecule::Molecule: The molecule which will have its\' coordinates set to fractional coordinates of a unit cube\nbox::Box: The box which will serve as a reference for the fractional coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.set_path_to_data",
    "page": "Docstrings",
    "title": "PorousMaterials.set_path_to_data",
    "category": "function",
    "text": "set_path_to_data(\"user/path/to/data\")\nset_path_to_data()\n\nSets PorousMaterials PATH_TO_DATA variable which dictates where crystal, forcefield, and molecule files are loaded from. This function allows the user to set PATH_TO_DATA manually to any directory or to a \"/data/\" folder within their current directory. This function WILL change the PATH_TO_DATA regardless of whether or not the path exists, but will give a warning alerting the user that PorousMaterials cannot load files from the chosen path.\n\nArguments\n\nnew_path_to_data::String: The desired PATH_TO_DATA in string form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.set_tutorial_mode",
    "page": "Docstrings",
    "title": "PorousMaterials.set_tutorial_mode",
    "category": "function",
    "text": "set_tutorial_mode()\n\nPlaces PorousMaterials in \"Tutorial Mode\". It changes the PATH_TO_DATA variable to the directory where the PorousMaterials test data is stored. It can be used to follow examples shown in the README. It displays a warning so that the user knows They are no longer using their own data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.setup_Ewald_sum",
    "page": "Docstrings",
    "title": "PorousMaterials.setup_Ewald_sum",
    "category": "function",
    "text": "eparams = setup_Ewald_sum(box, sr_cutoff_r; ϵ=1e-6, verbose=false)\n\nGiven the short-range cutoff radius and simulation box, automatically compute Ewald convergence parameter and number of k-vector replications in Fourier space required for a given precision. Constructs and returns Ewald parameters data type with this information.\n\nAlso, pre-compute weights on k-vector contributions to Ewald sum in Fourier space.\n\nAlso, allocate OffsetArrays for storing e^{i * k ⋅ r} where r = x - xⱼ and k is a reciprocal lattice vector.\n\nArguments\n\nbox::Box: the simulation box containing the reciprocal lattice.\nsr_cutoff_r::Float64: cutoff-radius (units: Å) for short-range contributions to Ewald\nϵ::Float64: desired level of precision. Typical value is 1e-6, but this does not\nverbose::Bool: If true will print results\n\nReturns\n\neparams::EwaldParams: data structure containing Ewald summation settings\n\ncorresponding weights indicating the contribution to the Fourier sum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.stepwise_adsorption_isotherm",
    "page": "Docstrings",
    "title": "PorousMaterials.stepwise_adsorption_isotherm",
    "category": "function",
    "text": "results = stepwise_adsorption_isotherm(framework, molecule, temperature, pressures,\n                              ljforcefield; n_sample_cycles=5000,\n                              n_burn_cycles=5000, sample_frequency=1,\n                              verbose=true, ewald_precision=1e-6, eos=:ideal,\n                              load_checkpoint_file=false, checkpoint=Dict(),\n                              write_checkpoints=false, checkpoint_frequency=50,\n                              filename_comment=\"\", show_progress_bar=false)\n\nRun a set of grand-canonical (μVT) Monte Carlo simulations in series. Arguments are the same as gcmc_simulation, as this is the function run behind the scenes. An exception is that we pass an array of pressures. The adsorption isotherm is computed step- wise, where the ending configuration from the previous simulation (array of molecules) is passed into the next simulation as a starting point. The ordering of pressures is honored. By giving each simulation a good starting point, (if the next pressure does not differ significantly from the previous pressure), we can reduce the number of burn cycles required to reach equilibrium in the Monte Carlo simulation. Also see adsorption_isotherm which runs the μVT simulation at each pressure in parallel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.strip_numbers_from_atom_labels!",
    "page": "Docstrings",
    "title": "PorousMaterials.strip_numbers_from_atom_labels!",
    "category": "function",
    "text": "strip_numbers_from_atom_labels!(framework)\n\nStrip numbers from labels for framework.atoms. Precisely, for atom in framework.atoms, find the first number that appears in atom. Remove this number and all following characters from atom. e.g. C12 –> C 	 Ba12A_3 –> Ba\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.total_charge",
    "page": "Docstrings",
    "title": "PorousMaterials.total_charge",
    "category": "function",
    "text": "total_charge = total_charge(molecule)\n\nSum up point charges on a molecule.\n\nArguments\n\nmolecule::Molecule: the molecule we wish to calculate the total charge of\n\nReturns\n\ntotal_charge::Float64: The sum of the point charges of molecule\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.total_electrostatic_potential_energy",
    "page": "Docstrings",
    "title": "PorousMaterials.total_electrostatic_potential_energy",
    "category": "function",
    "text": "total_ϕ = total_electrostatic_potential_energy(molecules, eparams, box, eikr)\n\nCalculates the total electrostatic potential energy of an array of Molecules using a Grand Canonical Monte Carlo (GCMC) algorithm. #TODO add to this\n\nArguments\n\nmolecules::Array{Molecule, 1}: The molecules comprising the system.\neparams::EwaldParams: data structure containing Ewald summation settings\nbox::Box: The box the energy is being computed in.\neikr::Eikr: Stores the eikar, eikbr, and eikcr OffsetArrays used in this calculation.\n\nReturns\n\nϕ::GGEwaldSum: The total electrostatic potential energy\n\n\n\n\n\ntotal_ϕ = total_electrostatic_potential_energy(framework, molecules, eparams, eikr)\n\nExplanation of totalelectrostaticpotential_energy that uses framework\n\nArguments\n\nframework::Framework: Crystal structure (see framework.charges for charges)\nmolecules::Array{Molecule, 1}: The molecules comprising the system.\neparams::EwaldParams: data structure containing Ewald summation settings\neikr::Eikr: Stores the eikar, eikbr, and eikcr OffsetArrays used in this calculation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.total_vdw_energy",
    "page": "Docstrings",
    "title": "PorousMaterials.total_vdw_energy",
    "category": "function",
    "text": "total_gh_energy = total_vdw_energy(framework, molecules, ljforcefield) # guest-host\ntotal_gg_energy = total_vdw_energy(molecules, ljforcefield, simulation_box) # guest-guest\n\nCompute total guest-host (gh) or guest-guest (gg) interaction energy, i.e. the contribution from all adsorbates in molecules.\n\nWARNING: it is assumed that the framework is replicated sufficiently such that the nearest image convention can be applied. See replicate.\n\nArguments\n\nframework::Framework: The framework containing the crystal structure information\nmolecules::Array{Molecule, 1}: An array of Molecule data structures\nljforcefield::LJForceField: A Lennard Jones forcefield data structure describing the interactions between different atoms\nsimulation_box::Box: The simulation box for application of PBCs.\n\nReturns\n\ntotal_energy::Float64: The total guest-host or guest-guest van der Waals energy\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.translate_by!",
    "page": "Docstrings",
    "title": "PorousMaterials.translate_by!",
    "category": "function",
    "text": "translate_by!(molecule, dxf)\ntranslate_by!(molecule, dx, box)\n\nTranslate a molecule by vector dxf in fractional coordinate space or by vector dx in Cartesian coordinate space. For the latter, a unit cell box is required for context.\n\nArguments\n\nmolecule::Molecule: The molecule which will be translated by dxf\ndxf::Array{Float64, 1}: A vector containing the translation in each dimension\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.translate_molecule!",
    "page": "Docstrings",
    "title": "PorousMaterials.translate_molecule!",
    "category": "function",
    "text": "translate_molecule!(molecule, box)\n\nPerturbs the Cartesian coordinates of a molecule about its center of mass by a random vector of max length δ. Applies periodic boundary conditions to keep the molecule inside the simulation box. Returns a deep copy of the old molecule in case it needs replaced if the Monte Carlo proposal is rejected.\n\nArguments\n\nmolecule::Molecule: The molecule we want to perturb\nbox::Box: The simulation box\n\nReturns\n\nold_molecule::Molecule: The old molecule in case the MC proposal is rejected\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.translate_to!",
    "page": "Docstrings",
    "title": "PorousMaterials.translate_to!",
    "category": "function",
    "text": "translate_to!(molecule, xf)\ntranslate_to!(molecule, x, box)\n\nTranslate a molecule a molecule to point xf in fractional coordinate space or to x in Cartesian coordinate space. For the latter, a unit cell box is required for context. The molecule is translated such that its center of mass is at xf/x`.\n\nArguments\n\nmolecule::Molecule: The molecule which will be translated to xf\nxf::Array{Float64, 1}: A vector containing the coordinates of the final destination of the molecule\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.vdw_energy",
    "page": "Docstrings",
    "title": "PorousMaterials.vdw_energy",
    "category": "function",
    "text": "energy = vdw_energy(framework, molecule, ljforcefield)\n\nCalculates the van der Waals interaction energy between a molecule and a framework. Applies the nearest image convention to find the closest replicate of a specific atom.\n\nWARNING: it is assumed that the framework is replicated sufficiently such that the nearest image convention can be applied. See replicate.\n\nArguments\n\nframework::Framework: Crystal structure\nmolecule::Molecule: adsorbate (includes position/orientation/atoms)\nljforcefield::LJForceField: Lennard Jones force field\n\nReturns\n\nenergy::Float64: Van der Waals interaction energy\n\n\n\n\n\ngg_energy = vdw_energy(molecule_id, molecules, ljforcefield, simulation_box)\n\nCalculates van der Waals interaction energy of a single adsorbate molecules[molecule_id] with all of the other molecules in the system. Periodic boundary conditions are applied, using the nearest image convention.\n\nArguments\n\nmolecule_id::Int: Molecule ID used to determine which molecule in molecules we wish to calculate the guest-guest interactions\nmolecules::Array{Molecule, 1}: An array of Molecule data structures\nljforcefield::LJForceField: A Lennard Jones forcefield data structure describing the interactions between different atoms\nsimulation_box::Box: The simulation box for the computation.\n\nReturns\n\ngg_energy::Float64: The guest-guest interaction energy of molecules[molecule_id] with the other molecules in molecules\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.vdw_energy_no_PBC",
    "page": "Docstrings",
    "title": "PorousMaterials.vdw_energy_no_PBC",
    "category": "function",
    "text": "pot_energy = vdw_energy_no_PBC(atoms, molecule, ljff)\n\nAssumes unit cell box is a unit cube and no periodic boundary conditions are applied.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.write_cif",
    "page": "Docstrings",
    "title": "PorousMaterials.write_cif",
    "category": "function",
    "text": "write_cif(framework, filename)\n\nWrite a framework::Framework to a .cif file with filename::AbstractString. If filename does not include the .cif extension, it will automatically be added.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.write_cube",
    "page": "Docstrings",
    "title": "PorousMaterials.write_cube",
    "category": "function",
    "text": "write_cube(grid, filename, verbose=true)\n\nWrite grid to a .cube file format. This format is described here: http://paulbourke.net/dataformats/cube/ The atoms of the unit cell are not printed in the .cube. Instead, use .xyz files to also visualize atoms.\n\nArguments\n\ngrid::Grid: grid with associated data at each grid point.\nfilename::AbstractString: name of .cube file to which we write the grid; this is relative to PorousMaterials.PATH_TO_DATA/grids/.\nverbose::Bool: print name of file after writing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.write_vtk",
    "page": "Docstrings",
    "title": "PorousMaterials.write_vtk",
    "category": "function",
    "text": "write_vtk(box, filename; verbose=true, center_at_origin=false)\nwrite_vtk(framework)\n\nWrite a Box to a .vtk file for visualizing e.g. the unit cell boundary of a crystal. If a Framework is passed, the Box of that framework is written to a file that is the same as the crystal structure filename but with a .vtk extension.\n\nAppends \".vtk\" extension to filename automatically if not passed.\n\nArguments\n\nbox::Box: a Bravais lattice\nfilename::AbstractString: filename of the .vtk file output (absolute path)\nframework::Framework: A framework containing the crystal structure information\ncenter_at_origin::Bool: center box at origin if true. if false, the origin is the corner of the box.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PorousMaterials.write_xyz",
    "page": "Docstrings",
    "title": "PorousMaterials.write_xyz",
    "category": "function",
    "text": "write_xyz(atoms, x, filename; comment=\"\")\nwrite_xyz(molecules, box, filename; comment=\"\")\nwrite_xyz(framework, filename; comment=\"\", center=false)\n\nWrite a molecule, framework, or array of atoms & positions to an .xyz file.\n\nArguments\n\natoms::Array{Symbol, 1}: An array of atoms stored as symbols e.g. [:H, :H, :O]\nx::Array{Float64, 2}: The Cartesian coordinates of the atoms.\n\nx[:, k] contains Cartesian coordinates of the k-th atom\n\nmolecules::Array{Molecule, 1}: an array of molecules whose atoms to write to .xyz\nframework::Framework: a crystal structure whose atoms to write to .xyz\nfilename::AbstractString: The filename of the .xyz file. (\".xyz\" appended automatically\n\nif the extension is not provided.) (absolute path)\n\ncomment::AbstractString: comment if you\'d like to write to the file.\ncenter::Bool: shift atoms so that origin is the center of the framework.box\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PorousMaterials.APorousMaterials.AtomsPorousMaterials.BPorousMaterials.BoxPorousMaterials.ChargesPorousMaterials.DELETIONPorousMaterials.EikrPorousMaterials.EwaldParamsPorousMaterials.EwaldSumPorousMaterials.FOUR_π_ϵ₀PorousMaterials.FrameworkPorousMaterials.GCMCstatsPorousMaterials.GGEwaldSumPorousMaterials.GridPorousMaterials.INSERTIONPorousMaterials.IonPorousMaterials.KBPorousMaterials.K_to_kJ_molPorousMaterials.KvectorPorousMaterials.LJForceFieldPorousMaterials.MarkovCountsPorousMaterials.MoleculePorousMaterials.N_BLOCKSPorousMaterials.N_PROPOSAL_TYPESPorousMaterials.PATH_TO_DATAPorousMaterials.PROPOSAL_ENCODINGSPorousMaterials.PengRobinsonGasPorousMaterials.PorousMaterialsPorousMaterials.PotentialEnergyPorousMaterials.RPorousMaterials.REINSERTIONPorousMaterials.ROTATIONPorousMaterials.R_OVERLAP_squaredPorousMaterials.SegmentConnectionPorousMaterials.SystemPotentialEnergyPorousMaterials.TRANSLATIONPorousMaterials.UnitCubePorousMaterials.__init__PorousMaterials._apply_pbc_to_index!PorousMaterials._arg_nearest_neighborPorousMaterials._assign_inaccessible_pockets_minus_one!PorousMaterials._build_list_of_connectionsPorousMaterials._classify_segmentsPorousMaterials._conduct_Widom_insertionsPorousMaterials._count_segmentsPorousMaterials._flood_fill!PorousMaterials._intramolecular_energyPorousMaterials._note_connection!PorousMaterials._overlapPorousMaterials._segment_gridPorousMaterials._spurious_self_interaction_energyPorousMaterials._translate_into_graphPorousMaterials._ϕPorousMaterials.aPorousMaterials.accessiblePorousMaterials.adsorption_isothermPorousMaterials.apply_periodic_boundary_condition!PorousMaterials.assign_chargesPorousMaterials.atom_overlapPorousMaterials.bPorousMaterials.bond_length_driftPorousMaterials.calculate_propertiesPorousMaterials.calculate_ϕPorousMaterials.charge_neutralPorousMaterials.charge_overlapPorousMaterials.chargedPorousMaterials.check_forcefield_coveragePorousMaterials.chemical_formulaPorousMaterials.compressibility_factorPorousMaterials.compute_accessibility_gridPorousMaterials.construct_boxPorousMaterials.crystal_densityPorousMaterials.delete_molecule!PorousMaterials.determine_ewald_paramsPorousMaterials.electrostatic_potentialPorousMaterials.electrostatic_potential_energyPorousMaterials.energy_gridPorousMaterials.evalPorousMaterials.fill_eikr!PorousMaterials.gcmc_result_savenamePorousMaterials.gcmc_simulationPorousMaterials.henry_coefficientPorousMaterials.henry_result_savenamePorousMaterials.includePorousMaterials.insert_molecule!PorousMaterials.insidePorousMaterials.lennard_jonesPorousMaterials.mean_stderr_n_UPorousMaterials.molecular_weightPorousMaterials.nearest_image!PorousMaterials.nearest_rPorousMaterials.nearest_r²PorousMaterials.outside_boxPorousMaterials.pairwise_atom_distancesPorousMaterials.pairwise_charge_distancesPorousMaterials.potential_energyPorousMaterials.precompute_kvec_wtsPorousMaterials.pretty_printPorousMaterials.print_resultsPorousMaterials.rand_point_on_unit_spherePorousMaterials.read_atomic_massesPorousMaterials.read_atomic_radiiPorousMaterials.read_cpk_colorsPorousMaterials.read_crystal_structure_filePorousMaterials.read_cubePorousMaterials.read_xyzPorousMaterials.reciprocal_latticePorousMaterials.reinsert_molecule!PorousMaterials.remove_overlapping_atoms_and_chargesPorousMaterials.replicatePorousMaterials.replication_factorsPorousMaterials.required_krepsPorousMaterials.required_n_ptsPorousMaterials.rotatablePorousMaterials.rotate!PorousMaterials.rotation_matrixPorousMaterials.set_fractional_coords!PorousMaterials.set_fractional_coords_to_unit_cube!PorousMaterials.set_path_to_dataPorousMaterials.set_tutorial_modePorousMaterials.setup_Ewald_sumPorousMaterials.squarePorousMaterials.stepwise_adsorption_isothermPorousMaterials.strip_numbers_from_atom_labels!PorousMaterials.totalPorousMaterials.total_chargePorousMaterials.total_electrostatic_potential_energyPorousMaterials.total_vdw_energyPorousMaterials.translate_by!PorousMaterials.translate_molecule!PorousMaterials.translate_to!PorousMaterials.universal_gas_constantPorousMaterials.vdw_energyPorousMaterials.vdw_energy_no_PBCPorousMaterials.write_cifPorousMaterials.write_cubePorousMaterials.write_vtkPorousMaterials.write_xyzPorousMaterials.αPorousMaterials.δPorousMaterials.κPorousMaterials.ϵ₀"
},

]}
