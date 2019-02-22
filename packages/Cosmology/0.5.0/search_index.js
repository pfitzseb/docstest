var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Cosmology-calculator-for-Julia-1",
    "page": "Readme",
    "title": "Cosmology calculator for Julia",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package:pkg> add CosmologyThen, to load into your session:julia> using CosmologyCosmology.jl uses Unitful.jl and UnitfulAstro.jl to handle units."
},

{
    "location": "#Cosmological-Models-1",
    "page": "Readme",
    "title": "Cosmological Models",
    "category": "section",
    "text": "First, pick a cosmological model using the cosmology function, which takes the following options:<table>   <tr>     <td>h = 0.69</td>     <td>Dimensionless Hubble constant</td>   </tr>   <tr>     <td>OmegaK = 0</td>     <td>Curvature density, Ω<sub>k</sub></td>   </tr>   <tr>     <td>OmegaM = 0.29</td>     <td>Matter density, Ω<sub>m</sub></td>   </tr>   <tr>     <td>OmegaR = Ω<sub>γ</sub> + Ω<sub>ν</sub></td>     <td>Radiation density, Ω<sub>r</sub></td>   </tr>   <tr>     <td>Tcmb = 2.7255</td>     <td>CMB temperature (K), used to compute Ω<sub>γ</sub></td>   </tr>   <tr>     <td>Neff = 3.04</td>     <td>Effective number of massless neutrino species, used to compute Ω<sub>ν</sub></td>   </tr>   <tr>     <td>w0 = -1</td>     <td>CPL dark energy equation of state, w = w0 + wa(1-a)</td>   </tr>   <tr>     <td>wa = 0</td>     <td>CPL dark energy equation of state, w = w0 + wa(1-a)</td>   </tr> </table>julia> using Cosmology\n\njulia> c = cosmology()\nFlatLCDM(0.69,0.7099122024007928,0.29,8.779759920715362e-5)\n\njulia> c = cosmology(OmegaK=0.1)\nOpenLCDM(0.69,0.1,0.6099122024007929,0.29,8.779759920715362e-5)\n\njulia> c = cosmology(w0=-0.9, OmegaK=-0.1)\nClosedWCDM(0.69,-0.1,0.8099122024007929,0.29,8.779759920715362e-5,-0.9,0.0)"
},

{
    "location": "#Distances-1",
    "page": "Readme",
    "title": "Distances",
    "category": "section",
    "text": "<table>   <tr>     <td>angulardiameterdist(cosmo,&nbsp;z)</td>     <td>Ratio of an object\'s proper transverse size (in Mpc) to its angular size (in radians)</td>   </tr>   <tr>     <td>comovingradialdist(cosmo,&nbsp;z)</td>     <td>Comoving radial distance to redshift z, in Mpc</td>   </tr>   <tr>     <td>luminosity_dist(cosmo, z)</td>     <td>Bolometric luminosity distance, in Mpc</td>   </tr>   <tr>     <td>distmod(cosmo, z)</td>     <td>Distance modulus, in units of magnitude</td>   </tr> </table>julia> using Cosmology\n\njulia> c = cosmology(OmegaM=0.26)\nFlatLCDM(0.69,0.7399122024007928,0.26,8.779759920715362e-5)\n\njulia> angular_diameter_dist(c, 1.2)\n1784.0089227105113 MpcFor each function returning a unitful number, you can specify a different unit for the result as first argument to the function:julia> luminosity_dist(c, 1.5)\n11420.338287150073 Mpc\n\njulia> luminosity_dist(u\"Gpc\", c, 1.5)\n11.420338287150074 Gpc"
},

{
    "location": "#Volumes-1",
    "page": "Readme",
    "title": "Volumes",
    "category": "section",
    "text": "<table>   <tr>     <td>comovingvolumeelement(cosmo,&nbsp;z)</td>     <td>Comoving volume element out to redshift z, in Gpc<sup>3</sup></td>   </tr>   <tr>     <td>comoving_volume(cosmo,&nbsp;z)</td>     <td>Comoving volume out to redshift z, in Gpc<sup>3</sup></td>   </tr> </table>julia> using Cosmology\n\njulia> c = cosmology(OmegaM=0.26)\nFlatLCDM(0.69,0.7399122024007928,0.26,8.779759920715362e-5)\n\njulia> comoving_volume_element(c, 2.1)\n46.74459228888612 Gpc^3\n\njulia> comoving_volume(c, 0.6)\n49.3633436631307 Gpc^3\n\njulia> comoving_volume(u\"ly^3\", c, 0.6)\n1.7127035381752994e30 ly^3"
},

{
    "location": "#Times-1",
    "page": "Readme",
    "title": "Times",
    "category": "section",
    "text": "<table>   <tr>     <td>age(cosmo, z)</td>     <td>Age of the universe at redshift z, in Gyr</td>   </tr>   <tr>     <td>lookback_time(cosmo, z)</td>     <td>Difference between age at redshift 0 and age at redshift z, in Gyr</td>   </tr> </table>julia> using Cosmology\n\njulia> c = cosmology(OmegaM=0.26)\nFlatLCDM(0.69,0.7399122024007928,0.26,8.779759920715362e-5)\n\njulia> age(c, 1.2)\n5.445600787626434 Gyr\n\njulia> lookback_time(u\"yr\", c, 1.2)\n8.761660748088268e9 yr"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Cosmology.AbstractClosedCosmologyCosmology.AbstractCosmologyCosmology.AbstractFlatCosmologyCosmology.AbstractOpenCosmologyCosmology.ClosedLCDMCosmology.ClosedWCDMCosmology.CosmologyCosmology.ECosmology.FlatLCDMCosmology.FlatWCDMCosmology.HCosmology.OpenLCDMCosmology.OpenWCDMCosmology.TCosmology.WCDMCosmology.ZCosmology.a2ECosmology.ageCosmology.age_gyrCosmology.angular_diameter_distCosmology.angular_diameter_dist_mpcCosmology.comoving_radial_distCosmology.comoving_radial_dist_mpcCosmology.comoving_transverse_distCosmology.comoving_transverse_dist_mpcCosmology.comoving_volumeCosmology.comoving_volume_elementCosmology.comoving_volume_element_gpc3Cosmology.comoving_volume_gpc3Cosmology.cosmologyCosmology.distmodCosmology.evalCosmology.hubble_distCosmology.hubble_dist0Cosmology.hubble_dist_mpcCosmology.hubble_dist_mpc0Cosmology.hubble_timeCosmology.hubble_time0Cosmology.hubble_time_gyrCosmology.hubble_time_gyr0Cosmology.includeCosmology.lookback_timeCosmology.lookback_time_gyrCosmology.luminosity_distCosmology.luminosity_dist_mpcCosmology.scale_factor"
},

]}
