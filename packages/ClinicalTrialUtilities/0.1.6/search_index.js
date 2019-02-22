var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ClinicalTrialUtilities-1",
    "page": "Readme",
    "title": "ClinicalTrialUtilities",
    "category": "section",
    "text": "Clinical Trial Power and Sample Size calculationVersion:0.1.5Author: Vladimir Arnautov2019 &copy; Vladimir Arnautov(Image: Build Status) (Image: Build status) (Image: codecov) (Image: Coverage Status)"
},

{
    "location": "#Dependencies:-1",
    "page": "Readme",
    "title": "Dependencies:",
    "category": "section",
    "text": "Distributions\nQuadGK\nSpecialFunctions"
},

{
    "location": "#Install:-1",
    "page": "Readme",
    "title": "Install:",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"ClinicalTrialUtilities\");orusing Pkg\nPkg.clone(\"https://github.com/PharmCat/ClinicalTrialUtilities.jl.git\");"
},

{
    "location": "#Functions:-1",
    "page": "Readme",
    "title": "Functions:",
    "category": "section",
    "text": "sampleSize (;param, type, group, alpha, beta, diff, sd, a, b, k, out=\"num|str|vstr|print\") - Sample size calculation.ctPower(;param, type, group, alpha, n, diff, sd, a, b, k, out=\"num|str|vstr|print\") - Clinical trial power estimation.powerTOST(;theta0=0.95, theta1=0.8, theta2=1.25, cv, n, alpha=0.5, logscale=true, method=\"owenq\",  design=\"parallel|2x2|2x2x3|2x2x4|2x4x4|2x3x3\") - Power calculation for TOST (for Bioequivalence trials).beSampleN(;theta0=0.95, theta1=0.8, theta2=1.25, cv, alpha=0.05, beta=0.2, logscale=true, method=\"owenq\", design=\"parallel|2x2|2x2x3|2x2x4|2x4x4|2x3x3\", out=\"num|str|vstr|print\") - iterative sample size calculation for Bioequivalence trials.owensT(h::Float64,a::Float64)::Float64 - Owen\'s T function.owensQ(nu, t, delta, a, b) - Owen\'s Q function; a,b always should be >= 0."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#sampleSize-1",
    "page": "Readme",
    "title": "sampleSize",
    "category": "section",
    "text": "using ClinicalTrialUtilities\nsampleSize(param=\"mean|prop|or\", type=\"ea|ei|ns|mcnm\", group=\"one|two\", alpha=0.05, beta=0.2, diff=1, sd=2, a=1, b=2, k=1)\nparam (Parameter type):mean - Means (default);\nprop - Proportions;\nor - Odd Ratio;type (Hypothesis type):ea - Equality  (default);\nei - Equivalencens;\nns - Non-Inferiority / Superiority;\nmcnm - McNemar\'s Equality test;group (Group num):one - One sample  (default);\ntwo - Two sample, result is for one group, second group size = n * k;alpha - Alpha (o < alpha < 1)  (default=0.05);beta - Beta (o < beta < 1) (default=0.2); power = 1 - beta;diff - difference / equivalence margin/non-inferiority/superiority margin;sd - Standard deviation (σ, for Means only);a - Null Hypothesis mean (μ0), Group A;b - True mean (μ) for one sample / Group B for two sample design;k - Na/Nb (after sample size estimation second group size: Na = k * Nb, only for two sample design) (default=1);out - output type:num   - numeric (default);\nstr   - String variable with text output;\nvstr  - numeric and String variable;\nprint - print to console;"
},

{
    "location": "#ctPower-1",
    "page": "Readme",
    "title": "ctPower",
    "category": "section",
    "text": "using ClinicalTrialUtilities\nctPower(param=\"mean|prop|or\", type=\"ea|ei|ns|mcnm\", group=\"one|two\", alpha=0.05, n=30, diff=1, sd=2, a=1, b=2, k=1)param (Parameter type):mean - Means (default);\nprop - Proportions;\nor - Odd Ratio;type (Hypothesis type):ea - Equality  (default);\nei - Equivalence;\nns - Non-Inferiority / Superiority;\nmcnm - McNemar\'s Equality test;group (Group num):one - one sample  (default);\ntwo - Two sample;alpha - Alpha (o < alpha < 1)  (default=0.05);n - Subjects number;diff - difference /equivalence margin/non-inferiority/superiority margin;sd - Standard deviation (σ, for Means only);a - Null Hypothesis mean (μ0), Group A;b - True mean (μ) for one sample / Group B for two sample design;k - Na/Nb (after sample size estimation second group size: Na = k * Nb, only for two sample design) (default=1);out - output type:num   - numeric (default);\nstr   - String variable with text output;\nvstr  - numeric and String variable;\nprint - print to console;"
},

{
    "location": "#powerTOST-1",
    "page": "Readme",
    "title": "powerTOST",
    "category": "section",
    "text": "using ClinicalTrialUtilities\npowerTOST(alpha=0.05, logscale=true|false, theta1=0.8, theta2=1.25, theta0=0.95, cv=0.15, n=36, method=\"owenq|nct|shifted\", design=\"parallel|2x2|2x2x3|2x2x4|2x4x4|2x3x3\")logscale - theta1, theta2, theta0: if true - make log transformation;alpha - Alpha (o < alpha < 1)  (default=0.05);theta1 - Lower Level (default=0.8);theta2 - Upper level (default=1.25);theta0 - T/R Ratio (default=0.95);cv - coefficient of variation;n - subject number;method - calculating method: Owen\'s Q Function | NonCentral T, Shifted;owenq\nnct\nshifteddesign - trial design;parralel\n2x2 (default)\n2x2x4\n2x4x4\n2x3x3"
},

{
    "location": "#beSampleN-1",
    "page": "Readme",
    "title": "beSampleN",
    "category": "section",
    "text": "Using for bioequivalence study.using ClinicalTrialUtilities\nbeSampleN(alpha=0.05, logscale=true|false, theta1=0.8, theta2=1.25, theta0=0.95, cv=0.15, method=\"owenq|nct|shifted\", design=\"parallel|2x2|2x2x3|2x2x4|2x4x4|2x3x3\")logscale - theta1, theta2, theta0: if true - make log transformation;alpha - Alpha (o < alpha < 1)  (default=0.05);beta - Beta (o < beta < 1) (default=0.2); power = 1 - beta;theta1 - Lower Level (default=0.8);theta2 - Upper level (default=1.25);theta0 - T/R Ratio (default=0.95);cv - coefficient of variation;method - calculating method: Owen\'s Q Function | NonCentral T | Shifted;owenq\nnct\nshifteddesign - trial design;parralel\n2x2 (default)\n2x2x4\n2x4x4\n2x3x3out - output type:num   - numeric (default);\nstr   - String variable with text output;\nvstr  - numeric and String variable;\nprint - print to console;"
},

{
    "location": "#Examples:-1",
    "page": "Readme",
    "title": "Examples:",
    "category": "section",
    "text": "sampleSize(param=\"prop\", type=\"ea\", group=\"one\", a=0.3, b=0.5)\nsampleSize(param=\"mean\", type=\"ei\", group=\"two\", diff=0.3, sd=1, a=0.3, b=0.5)\nsampleSize(param=\"or\", type=\"ns\", diff=-0.1, a=0.3, b=0.5, k=2)\nsampleSize(param=\"or\", type=\"ea\", a=0.3, b=0.5, k=2)\n\npowerTOST(alpha=0.1, logscale=false, theta1=-0.1, theta2=0.1, theta0=0, cv=0.14, n=21, method=\"shifted\")\npowerTOST(alpha=0.1, logscale=false, theta1=-0.1, theta2=0.1, theta0=0, cv=0.14, n=21)\npowerTOST(cv=0.4, n=35, design=\"2x4x4\")\npowerTOST(cv=0.14, n=21)\n\nbeSampleN(alpha=0.05,  theta1=0.8, theta2=1.25, theta0=0.95, cv=0.15, method=\"owenq\")\nbeSampleN(cv=0.20, method=\"nct\")\nbeSampleN(cv=0.347, design=\"parallel\",  out=\"print\")\nbeSampleN(cv=0.40)\n\nn, p, s = beSampleN(cv=0.347, design=\"2x2x4\", method=\"nct\", out=\"vstr\")"
},

{
    "location": "#ToDo:-1",
    "page": "Readme",
    "title": "ToDo:",
    "category": "section",
    "text": "atomic function interface with struct\ncvfromci ()\nSimulations"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ClinicalTrialUtilities.CTUExceptionClinicalTrialUtilities.ClinicalTrialUtilitiesClinicalTrialUtilities.ParamSetClinicalTrialUtilities.ZDISTClinicalTrialUtilities.approx2PowerTOSTClinicalTrialUtilities.approxPowerTOSTClinicalTrialUtilities.beSampleNClinicalTrialUtilities.citationClinicalTrialUtilities.ctPowerClinicalTrialUtilities.cv2seClinicalTrialUtilities.designPropClinicalTrialUtilities.evalClinicalTrialUtilities.ifun1ClinicalTrialUtilities.includeClinicalTrialUtilities.infoClinicalTrialUtilities.licenceClinicalTrialUtilities.mcnmClinicalTrialUtilities.mcnmPClinicalTrialUtilities.oneProportionEqualityClinicalTrialUtilities.oneProportionEqualityPClinicalTrialUtilities.oneProportionEquivalenceClinicalTrialUtilities.oneProportionEquivalencePClinicalTrialUtilities.oneProportionNSClinicalTrialUtilities.oneProportionNSPClinicalTrialUtilities.oneSampleMeanEqualityClinicalTrialUtilities.oneSampleMeanEqualityPClinicalTrialUtilities.oneSampleMeanEquivalenceClinicalTrialUtilities.oneSampleMeanEquivalencePClinicalTrialUtilities.oneSampleMeanNSClinicalTrialUtilities.oneSampleMeanNSPClinicalTrialUtilities.orEqualityClinicalTrialUtilities.orEqualityPClinicalTrialUtilities.orEquivalenceClinicalTrialUtilities.orEquivalencePClinicalTrialUtilities.orNSClinicalTrialUtilities.orNSPClinicalTrialUtilities.owensQClinicalTrialUtilities.owensQoClinicalTrialUtilities.owensTClinicalTrialUtilities.owensTint2ClinicalTrialUtilities.power1TOSTClinicalTrialUtilities.powerTOSTClinicalTrialUtilities.powerTOSTOwenQClinicalTrialUtilities.powerTOSTintClinicalTrialUtilities.sampleSizeClinicalTrialUtilities.sampleSizeParamClinicalTrialUtilities.tfnClinicalTrialUtilities.twoProportionEqualityClinicalTrialUtilities.twoProportionEqualityPClinicalTrialUtilities.twoProportionEquivalenceClinicalTrialUtilities.twoProportionEquivalencePClinicalTrialUtilities.twoProportionNSClinicalTrialUtilities.twoProportionNSPClinicalTrialUtilities.twoSampleMeanEqualityClinicalTrialUtilities.twoSampleMeanEqualityPClinicalTrialUtilities.twoSampleMeanEquivalenceClinicalTrialUtilities.twoSampleMeanEquivalencePClinicalTrialUtilities.twoSampleMeanNSClinicalTrialUtilities.twoSampleMeanNSP"
},

]}
