var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ValueOrientedRiskManagementInsurance-1",
    "page": "Readme",
    "title": "ValueOrientedRiskManagementInsurance",
    "category": "section",
    "text": "(Image: Build Status)The master branch of this package requires Julia 1.0.x.  The package provides example calculations for the of the bookKriele M. and Wolf, J. Wertorientiertes Risikomanagement von  Versicherungsunternehmen, 2nd edition, Springer-Verlag, Berlin Heidelberg,  2016Any futher development for future English versions (Value-Oriented Risk Management of Insurance Companies) or German versions of this book will take place in a separate GitHub repository.  (The examples for the first editions  were less complex and written in R)"
},

{
    "location": "#The-correct-checkout-for-each-book-edition-and-each-supported-Julia-version-1",
    "page": "Readme",
    "title": "The correct checkout for each book edition and each supported Julia version",
    "category": "section",
    "text": "Julia version Branch Errata\n0.4.x de_2ed Korrekturen.md\n0.5.x de_2ed Korrekturen.md\n0.6.x de2edj0.6 Korrekturen.md\n1.0.x master Korrekturen.mdErrata: Corrections of errors in the book.  We list all errors we are aware of. In order to display the text, simply click on the corresponding file name in the list of linked documents above.Notice that Section C.2 \"Installation des Packages ValueOrientedRiskManagementInsurance\" is outdated, as a new package manager has been introduced with Julia 1.0.  Please see the Julia documentation, Section  Pkg for details."
},

{
    "location": "#Structure-of-the-package-1",
    "page": "Readme",
    "title": "Structure of the package",
    "category": "section",
    "text": "The package consists of 4 distinct parts:SSTLife: An extremely simplified example of the SST (Swiss Solvency Test) calculation for life insurance. The Swiss Solvency Test is the Swiss regulatory capital requirement.  The resulting monetary requirement is referred to as the \"target capital\" ZK<sup>1</sup>.\nS2Life: A simplified example of the S2 (Solvency 2) calculation for non-life insurance. Solvency 2 is the new regulatory capital requirement in the European Union. The resulting monetary requirement is referred to as the \"Solvency capital requirement\" SCR.\nS2NonLife: A simplified example of the S2 calculation for life insurance\nECModel: An extremely simplified example of an internal economic capital model for non-life insurance. This model is used to illustrate some techniques used in value based management.Note that we have simplified and (in part changed for our exposition) the regulatory requirements for SST and Solvency 2. Also note that the implementation of Solvency 2 may be slightly different in different EU countries. For definitive information about SST or Solvency 2, please consult the original literature and any guidance issued by the supervisory authorities in the jurisdiction of interest."
},

{
    "location": "#Files-in-the-Folder-\"src\"-and-its-Subfolders-1",
    "page": "Readme",
    "title": "Files in the Folder \"src\" and its Subfolders",
    "category": "section",
    "text": "The folder \"src\" contains types and functions which are meant to be used in specific examples"
},

{
    "location": "#SST-Life-Calculation-1",
    "page": "Readme",
    "title": "SST Life Calculation",
    "category": "section",
    "text": "The files SST__Types.jl and SST_Functions.jl contain types and functions which can be used to model a simplified version of the the SST standard life model. The calculation is basically as follows. The change of the \"risk bearing capital\", ΔRTK<sup>2</sup> over 1 year is approximated by a quadratic function of the risk factors. As the risk factors are assumed to be multinormally distributed, the distribution of ΔRTK is known.  The target capital ZK is the sum of the 99% expected shortfall and the market value margin.  The market value margin is calculated using a cost of capital method, where the capital is given by the 99% expected shortfall of ΔRTK and the cost of capital factor is assumed to be 6%.The example calculation provided here is based on an extremely simplified life insurance portfolio."
},

{
    "location": "#Solvency-2-Life-Calculation-1",
    "page": "Readme",
    "title": "Solvency 2 Life Calculation",
    "category": "section",
    "text": "The files Life__Types.jl, Life_Constructors.jl and Life_Functions.jl implement a simplified model of a life insurance company.  A simplified Solvency 2 calculation for this model is implemented in the files S2Life__Types.jl, S2Life_Constructors.jl und S2Life_Functions.jl. The Solvency 2 Standard Formula for Life insurers consists of several modules for the different risk factors. For each module a capital requirement is calculated first, and then all these requirements are aggregated to the overall Solvency Capital Requirement SCR. Most of the individual capital requirements are calculated through deterministic stress tests, which are calibrated to correspond to the 99.5% quantile.  Only a subset of the Solvency 2 modules applicable for life insurance companies have been implemented, but it should not be difficult to extend the code to more modules."
},

{
    "location": "#Solvency-2-Non-Life-Calculation-1",
    "page": "Readme",
    "title": "Solvency 2 Non-Life Calculation",
    "category": "section",
    "text": "The files S2NonLife__Types.jl and S2Life_Functions.jl contain a simplified implementation of the Solvency 2 capital requirement for a highly simplified non-life insurance company."
},

{
    "location": "#Internal-Economic-Capital-Model-1",
    "page": "Readme",
    "title": "Internal Economic Capital Model",
    "category": "section",
    "text": "The internal economic capital model is a highly simplified Monte Carlo model of an extremely simplified non-life insurance company.  Reserves are completely ignored in the model. The purpose of this model is to illustrate some techniques used in value based management."
},

{
    "location": "#Files-in-the-Folder-\"test\"-1",
    "page": "Readme",
    "title": "Files in the Folder \"test\"",
    "category": "section",
    "text": "The folder \"test\" contains the files files x_Input.jl, x.jl, and x_Test.jl for each of the four parts x ∈ {SSTLife, S2Life, S2NonLife, ECModel}. The files x_Input.jl and x.jl replicate the calculation in the book and the files x_Test.jl are used for automatic testing.  In addition, the file Life_Input.jl contains the input data for the example insurer, which is used  in the S2 life calculation.  runtests.jl controls the automated tests."
},

{
    "location": "#Footnotes-1",
    "page": "Readme",
    "title": "Footnotes",
    "category": "section",
    "text": "<sup>1</sup> The abbreviation ZK refers to the original German term \"Zielkapital\". \"Target capital\" is the literal English translation.<sup>2</sup> The abbreviation RTK refers to the  original German term \"Risikotragendes Kapital\" (\"risk bearing capital\"). Observe that RBC is usually understood to mean \"risk based capital\" which has a different meaning than \"risk bearing capital\".  "
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Alloc",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Alloc",
    "category": "type",
    "text": "Allocation of investments within an InvestGroup object ig\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Asset",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Asset",
    "category": "type",
    "text": "Abstract type for assets\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.BuInsurance",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.BuInsurance",
    "category": "type",
    "text": "Business unit: Line of business\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.BuInvestments",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.BuInvestments",
    "category": "type",
    "text": "Business unit: Investments\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.BusinessUnit",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.BusinessUnit",
    "category": "type",
    "text": "A business unit is a line of business or investments\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.CapMkt",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.CapMkt",
    "category": "type",
    "text": "A collection of Process objects which represents a capital market. Currently we only have two deterministic processes, stock::Stock and rfr::RiskFreeRate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Debt",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Debt",
    "category": "type",
    "text": "Debt issued by the company\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.DetermProcess",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.DetermProcess",
    "category": "type",
    "text": "Deterministic process, currently the only type of process implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Dynamic",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Dynamic",
    "category": "type",
    "text": "Dynamic projection parameters for a Projection object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.GROSS",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.GROSS",
    "category": "constant",
    "text": "Convenience index name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.GaussCopula",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.GaussCopula",
    "category": "type",
    "text": "Gaussian copula\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.IGCash",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.IGCash",
    "category": "type",
    "text": "Invest Group for Invest object InvestCash\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.IGCost",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.IGCost",
    "category": "type",
    "text": "Investment costs for an InvestGroup object ig\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.IGStock",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.IGStock",
    "category": "type",
    "text": "Invest Group for Invest object InvestStock\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.InvPort",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.InvPort",
    "category": "type",
    "text": "Investment portfolio\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Invest",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Invest",
    "category": "type",
    "text": "Represents an individual investments and its development in time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.InvestCash",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.InvestCash",
    "category": "type",
    "text": "Invest object associated with a RiskFreeRate process\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.InvestGroup",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.InvestGroup",
    "category": "type",
    "text": "A group of Invest objects of the same sub-type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.InvestStock",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.InvestStock",
    "category": "type",
    "text": "Invest object associated with a Stock process\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.LiabIns",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.LiabIns",
    "category": "type",
    "text": "Liability portfolio\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.LiabOther",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.LiabOther",
    "category": "type",
    "text": "Portfolio of other liabilities\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Liabilities",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Liabilities",
    "category": "type",
    "text": "Liability portfolio consisting of a single insurance contract\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.ModelPoint",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.ModelPoint",
    "category": "type",
    "text": "Model point for the liability portfolio representing a number of insured with the same contract parameters and the same biometric parameters\n\nTime model:\n\n  project time τ:               0\n  real time t:     t_start      t_0\n  product time s:  0            s_0\n                   |------------|-------------------|-----------\n                                |-------------------|\n                                         dur\n                   |--------------------------------|\n                              product.dur\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.NET",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.NET",
    "category": "constant",
    "text": "Convenience index name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.NLLob",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.NLLob",
    "category": "type",
    "text": "Line of Business (Non-Life)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.PLInsurance",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.PLInsurance",
    "category": "type",
    "text": "Profit loss account for the insurance result from a line of business (lob)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.PLInvestments",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.PLInvestments",
    "category": "type",
    "text": "Profit loss account for the investment result result\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.PLTotal",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.PLTotal",
    "category": "type",
    "text": "Profit loss account for the aggregated insurance company\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Process",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Process",
    "category": "type",
    "text": "A stochastic or deterministc process representing a part of the Capital market. It always has an object x representing the development in time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Product",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Product",
    "category": "type",
    "text": "Life insurance product / tariff\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.ProfitLoss",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.ProfitLoss",
    "category": "type",
    "text": "Profit and loss account of an insurance company component\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.ProjParam",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.ProjParam",
    "category": "type",
    "text": "Projection parameters for S2-calculations without S2 calibration parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Projection",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Projection",
    "category": "type",
    "text": "Projection of a life insurer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.RiskFactor",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.RiskFactor",
    "category": "type",
    "text": "Risk factor\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.RiskFreeRate",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.RiskFreeRate",
    "category": "type",
    "text": "A deterministic process representing a short rate\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2",
    "category": "type",
    "text": "Solvency 2 (total)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Def",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Def",
    "category": "type",
    "text": "Solvency 2 default risk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Def1",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Def1",
    "category": "type",
    "text": "Solvency 2 default risk of type 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Def2",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Def2",
    "category": "type",
    "text": "S2 default (type 2) risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Health",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Health",
    "category": "type",
    "text": "S2 health risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Life",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Life",
    "category": "type",
    "text": "Solvency 2 life risk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2LifeBio",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2LifeBio",
    "category": "type",
    "text": "Solvency 2 life risk: biometric risks: mortality, longevity, surrender\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2LifeCost",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2LifeCost",
    "category": "type",
    "text": "Solvency 2 life risk: expense risk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2LifeMorb",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2LifeMorb",
    "category": "type",
    "text": "S2 life morbidity risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2LifeRevision",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2LifeRevision",
    "category": "type",
    "text": "S2 life revision risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Mkt",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Mkt",
    "category": "type",
    "text": "Solvency 2 market risk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2MktConc",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2MktConc",
    "category": "type",
    "text": "S2 market concentration risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2MktEq",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2MktEq",
    "category": "type",
    "text": "Solvency 2 market risk: equity risk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2MktFx",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2MktFx",
    "category": "type",
    "text": "S2 market currency risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2MktInt",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2MktInt",
    "category": "type",
    "text": "Solvency 2 market risk: interest rate risk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2MktProp",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2MktProp",
    "category": "type",
    "text": "S2 market property risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2MktSpread",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2MktSpread",
    "category": "type",
    "text": "S2 market spread risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Module",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Module",
    "category": "type",
    "text": "Abstract type for an S2 module\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2NonLife",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2NonLife",
    "category": "type",
    "text": "S2 non-life risk module, not yet implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2NotImplemented",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2NotImplemented",
    "category": "type",
    "text": "Dummy type for those S2 modules that have not been implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.S2Op",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.S2Op",
    "category": "type",
    "text": "Solvency 2 operational risk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.SSTCapMkt",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.SSTCapMkt",
    "category": "type",
    "text": "Capital market\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Stock",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Stock",
    "category": "type",
    "text": "A deterministic process representing a stock index. Additional objects\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.StockIndex",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.StockIndex",
    "category": "type",
    "text": "Investment in stock\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Stress",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Stress",
    "category": "type",
    "text": "Stress scenario\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Total",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Total",
    "category": "type",
    "text": "Total company result\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.ValueOrientedRiskManagementInsurance",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.ValueOrientedRiskManagementInsurance",
    "category": "module",
    "text": "The module provides example calculations for the second edition of the book\n\nKriele M. and Wolf, J. Wertorientiertes Risikomanagement von Versicherungsunternehmen,  2nd edition, Springer-Verlag, Berlin Heidelberg,  2016 (to be published)\n\nIt is also intended to use these examples for future editions of the English  translation of this book, Value-Oriented Risk Management of Insurance Companies. (The examples in both the first German edition and the first  English edition are written in R).\n\nThe module consists of 4 distinct parts:\n\nSSTLife: An extremely simplified example of the SST\n\n(Swiss Solvency Test) calculation for life insurance. The Swiss Solvency Test is the Swiss regulatory capital requirement.  The resulting monetary requirement is referred to as the \"target capital\" ZK.\n\nS2Life: A simplified example of the S2 (Solvency 2)\n\ncalculation for non-life insurance. Solvency 2 is the new regulatory capital requirement in the European Union. The resulting monetary requirement is referred to as the \"Solvency capital requirement\" SCR.\n\nS2NonLife: A simplified example of the S2 calculation\n\nfor life insurance\n\nECModel: An extremely simplified example of an internal\n\neconomic capital model for non-life insurance. This model is used to illustrate some techniques used in value based management.\n\nNote that we have simplified and (in part changed for our exposition) the regulatory requirements for SST and Solvency 2. Also note that the implementation of Solvency 2 may be slightly different in different EU countries. For definitive information about SST or Solvency 2, please consult the original literature and any guidance issued by the supervisory authorities in the jurisdiction of interest.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.ZeroBond",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.ZeroBond",
    "category": "type",
    "text": "Zero bond (an instance of an asset)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.alloc!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.alloc!",
    "category": "function",
    "text": "alloc!(τ, cap_mkt::CapMkt, invs::InvPort)\n\nDynamically re-allocate investments invs::InvPort at the beginning of year τ\n\nChanged:  invs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.bioshock!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.bioshock!",
    "category": "function",
    "text": "bioshock!(mp::ModelPoint, bio::S2LifeBio, symb::Symbol)\n\nHelper function: shock for biometric risk\n\nChanged: mp::ModelPoint\n\n\n\n\n\nbioshock!(l_ins::LiabIns, bio::S2LifeBio, shock_symb::Symbol)\n\nShock for biometric risk\n\nChanged: l_ins::LiabIns  (l_ins.mps)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.biquotient",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.biquotient",
    "category": "function",
    "text": "biquotient(τ, yield_eoy, cap_mkt, invs, mp, dyn)\n\nIndicator for bonus rate expectation at the end of year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.bof",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.bof",
    "category": "function",
    "text": "bof(bal::DataFrame)\n\nHelper function for the calculation of basic own funds\n\n\n\n\n\nbof(md::S2Module, scen::Symbol)\n\nBasic own funds for module md and scenario scen\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.bonus!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.bonus!",
    "category": "function",
    "text": "bonus!(τ, invs::InvPort, liabs::LiabIns, dyn::Dynamic,   proj, surp_pre_profit_tax_bonus)\n\nBonus at the end of year τ\n\nChanged: proj::Projection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.bonusrate",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.bonusrate",
    "category": "function",
    "text": "bonusrate(yield_eoy, rfr_price, bonus_factor)\n\nHelper function for dynamic bonus rate declaration\n\n\n\n\n\nbonusrate(τ, yield_eoy, mp::ModelPoint, dyn)\n\nDynamic bonus rate declaration for a model point at the end of year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.catshock!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.catshock!",
    "category": "function",
    "text": "catshock!(mp::ModelPoint, bio::S2LifeBio, symb::Symbol)\n\nShock for mortality catastrophe risk\n\nChanged: mp::ModelPoint\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.costshock!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.costshock!",
    "category": "function",
    "text": "costshock!(invs::InvPort, l_ins::LiabIns, cost::S2LifeCost)\n\nShock for expense risk\n\nChanged: invs::InvPort, l_ins::LiabIns\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.delta",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.delta",
    "category": "function",
    "text": "delta(assets::Vector{Asset}, liabs::Liabilities, rf::RiskFactor,   cap_mkt::SSTCapMkt)\n\nCalculates the δ-vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.dynstate",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.dynstate",
    "category": "function",
    "text": "dynstate(τ, cap_mkt::CapMkt)\n\nindicator for the state of the economy at the end of year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.dynstateavg",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.dynstateavg",
    "category": "function",
    "text": "dynstateavg(τ, cap_mkt::CapMkt)\n\nTwo year average of the indicator for the state of the economy at the end of year τ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.evaluate!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.evaluate!",
    "category": "function",
    "text": "evaluate!(pl::ProfitLoss, α::Real)\n\nCalculate expected profit, economic capital (expected shortfall    at safety level α), and RORAC for pl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.fdb",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.fdb",
    "category": "function",
    "text": "fdb(md::S2Module, scen::Symbol)\n\nFuture discretionary benefits for module md and scenario scen\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.forw2spot",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.forw2spot",
    "category": "function",
    "text": "forw2spot(f::Vector{Float64})\n\ncalculates the spot rate s rate from the forward rate f:\n\n(1+f[1])(1+f[2])...(1+f[n]) = (1+s[n])^n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.freesurp",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.freesurp",
    "category": "function",
    "text": "freesurp(dyn, invest_pre, liab)\n\nHelper function for the free surplus calculation\n\n\n\n\n\nfreesurp(τ, proj::Projection, dyn)\n\nFree surplus for the dynamic dividend declaration\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.gammamatrix",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.gammamatrix",
    "category": "function",
    "text": "gammamatrix(assets::Vector{Asset}, liabs::Liabilities,   rf::RiskFactor, cap_mkt::SSTCapMkt)\n\nCalculates the Γ-matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.getloan",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.getloan",
    "category": "function",
    "text": "getloan(τ::Int, debt::Debt)\n\nGet the nominal of debt at time τ, if it has been taken out at this point in time, otherwise return 0.0\n\n\n\n\n\ngetloan(τ::Int, l_other::LiabOther)\n\nGet the total nominal of all debts within the portfolio of other liabilities l_other, which are taken out at the beginning of year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.getyield",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.getyield",
    "category": "function",
    "text": "getyield(τ, stock::Stock)\n\ncalculates the yield of stock during year τ\n\n\n\n\n\ngetyield(τ, rfr::RiskFreeRate)\n\ncalculates the yield of rfr during year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.goingconcern",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.goingconcern",
    "category": "function",
    "text": "goingconcern(debts::Vector{Debt}, Δgc::Vector{Float64})\n\nCalculates a vector of debts from an existing vector of debts according to the going concern assumption. The total initial debt is the same, but the new debt vectors mature earlier so that the total nominal decreases according to the going concern factors. We do not input the factors gc directly but their year on year differences Δgc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.goingconcern!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.goingconcern!",
    "category": "function",
    "text": "goingconcern!(l_other::LiabOther, Δgc::Vector{Float64})\n\nTransforms a portfolio of other liabilities l_other::LiabOther according to the going concern assumption. We do not input the factors gc directly but their year on year differences Δgc.\n\nChanged: l_other\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.initialize",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.initialize",
    "category": "function",
    "text": "initialize(insurance_input::DataFrame, invest_input::DataFrame,   tau_kendall::Matrix{Real}, n_scen::Int)\n\nSet up an insurance company\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.investpredivid",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.investpredivid",
    "category": "function",
    "text": "investpredivid(τ, invs::InvPort, proj::Projection)\n\nMarket value of assets before payment of dividends\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.mkt_val0_adj!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.mkt_val0_adj!",
    "category": "function",
    "text": "mkt_val0_adj!(proj::Projection, invs::InvPort,                mkt_eq, eq_type::Symbol)\n\nAdjust initial market value for S2 balance sheet in order to reflect that the initial fall of the market value of equity investments is reflected in the shockedsolvency balance sheet Must be called after the projection\n\nChanged: proj::Projection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.mkteqshock!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.mkteqshock!",
    "category": "function",
    "text": "mkteqshock!(invs::InvPort, mkt_eq, eq_type::Symbol)\n\nShock for equity market risk\n\nChanged: invs::InvPort\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.mktintshock!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.mktintshock!",
    "category": "function",
    "text": "mktintshock!(cap_mkt::CapMkt, s2_mkt_int, int_type::Symbol)\n\nShock for interest rate market risk\n\nChanged: cap_mkt::CapMkt\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.paycoupon",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.paycoupon",
    "category": "function",
    "text": "paycoupon(τ::Int, debt::Debt)\n\nCoupon payment for debt at the end of year τ\n\n\n\n\n\npaycoupon(τ::Int, l_other::LiabOther)\n\nCoupon payment for all debts within the portfolio of other liabilities l_other at the end of year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.payprincipal",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.payprincipal",
    "category": "function",
    "text": "payprincipal(τ::Int, debt::Debt)\n\nPayment of the principal of debt at the end of year τ, if the debt matures at this point in time\n\n\n\n\n\npayprincipal(τ::Int, l_other::LiabOther)\n\nPayment of the total principal of all debts within the portfolio of other liabilities l_other, which mature at the end of year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.premium",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.premium",
    "category": "function",
    "text": "premium(ins_sum, rfr, prob, β, λ)\n\nCalculate the premium of a product\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.premrestotalsd",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.premrestotalsd",
    "category": "function",
    "text": "premrestotalsd(nllobs::Vector{NLLob}, corr_lob::Matrix{Float64})\n\nCalculates the standard deviation of the total premium reserve\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.profit!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.profit!",
    "category": "function",
    "text": "profit!(pl::PLInsurance, r_distr::Vector{Float64}, s::Real)\n\nUpdates pl.profit, where r_distr is the loss distribution  and s is the risk free interest rate\n\n\n\n\n\nprofit!(pl::PLInvestments, r_distr::Vector{Float64}, s::Real)\n\nUpdates pl.profit, where r_distr is the investment result  and s is the risk free interest rate. Only the investment  return above s counts as profit.\n\n\n\n\n\nprofit!(pl::PLTotal, pl_bu::Array{ProfitLoss},   cap_init::Real, costs_fixed::Real, s::Real)\n\nUpdates pl.profit, where cap_init is the initial capital,  pl_bu are the profit loss accounts of the business units,  costs_fixed are the fixed costs, and s is the risk free  interest rate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.project",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.project",
    "category": "function",
    "text": "project(ins_input::DataFrame, inv_input::DataFrame,   tau_kendall::Matrix{Real}, n_scen::Int, α::Real, s::Real   costs_fixed::Real)\n\nSet up an insurance company and project its results\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.project!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.project!",
    "category": "function",
    "text": "project!(τ::Int, mv_boy::Float64, invest::Invest)\n\nproject invest::Invest one year for a given initial market value.\n\nChanged:  invest\n\n\n\n\n\nproject!(τ::Int, mv_bop_total::Float64, ig::InvestGroup)\n\nproject ig::InvestGroup one year for a given initial market value.\n\nChanged:  ig\n\n\n\n\n\nproject!(τ::Int, mv_boy::Float64, invs::InvPort)\n\nProject invs::InvPort  one year for a given initial market value.\n\nChanged:  invs\n\n\n\n\n\nproject!(τ, cap_mkt::CapMkt, invs::InvPort, dyn::Dynamic,   proj::Projection)\n\nProject one year, investment results from the year τ\n\nChanged: proj::Projection, invs::InvPort\n\n\n\n\n\nproject!(τ, cap_mkt::CapMkt, invs::InvPort, liabs::LiabIns,   liab_other::LiabOther, dyn::Dynamic, proj::Projection)\n\nProject one year\n\nChanged: proj::Projection, invs::InvPort, dyn::Dynamic\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.projectboy!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.projectboy!",
    "category": "function",
    "text": "projectboy!(τ, proj::Projection, liabs::LiabIns)\n\nProject one year, update values at the beginning of the year τ\n\nChanged: proj::Projection, liabs::LiabIns  (liabs.mp)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.projecteoy!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.projecteoy!",
    "category": "function",
    "text": "projecteoy!(τ, cap_mkt::CapMkt, invs::InvPort, liabs::LiabIns,   dyn::Dynamic, proj::Projection)\n\nProject one year, update values at the end of the year τ\n\nChanged: proj::Projection, liabs::LiabIns  (liabs.mp)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.pv",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.pv",
    "category": "function",
    "text": "pv(τ::Int, cap_mkt::CapMkt, debt::Debt)\n\nPresent value of debt at the end of year τ. Any servicing of this debt during year τ has occured beforehand\n\n\n\n\n\npv(τ::Int, cap_mkt::CapMkt, l_other::LiabOther)\n\npresent value of other liabilities l_other at the end of year τ. Any servicing of debt within this portfolio during year τ has occured beforehand\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.pvprev",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.pvprev",
    "category": "function",
    "text": "pvprev(rfr, cf, pv) = (cf + pv) /  (1 + rfr)\n\nRecursive step in generic present value calculation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.pvvec",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.pvvec",
    "category": "function",
    "text": "pvvec(rfr::Vector{Float64}, cf)`\n\nGeneric present value calculation, where rfr denotes the risk free rate for each year and cf. The length of the vector rfr may not be smaller than the length of the cashflow. Each payment occurs at the end of the corresponding year.\n\nOutput: A vector of the same length as cf contaning the present value at the end of each year. The last component is zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.qxpxshock!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.qxpxshock!",
    "category": "function",
    "text": "qxpxshock!(mp::ModelPoint, bio::S2LifeBio, symb::Symbol)\n\nHelper function: shock for mortality risk\n\nChanged: mp::ModelPoint\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.rand",
    "page": "Docstrings",
    "title": "Base.rand",
    "category": "function",
    "text": "rand(gc::GaussCopula, n::Int)\n\nn random samples from a Gaussian copula gc\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.rfrshock",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.rfrshock",
    "category": "function",
    "text": "rfrshock(rfr::Vector{Float64}, s2_mkt_int, int_type)\n\nHelper function: shock for the risk free interest rate\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.rtk",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.rtk",
    "category": "function",
    "text": "rtk(t::Int, assets::Vector{Asset}, liabs::Liabilities,   x::Vector{Float64}, rf::RiskFactor, cap_mkt::SSTCapMkt)\n\nCalculates the risk bearing capital (after sensitivity x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.s2bal",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.s2bal",
    "category": "function",
    "text": "s2bal(p::ProjParam)\n\nCalculation of the unshocked S2 balance sheet\n\n\n\n\n\ns2bal(p::ProjParam, md::S2Module, shock!::Any, scen::Symbol)\n\nCalculation of the shocked S2 balance sheet for module md\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.scr",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.scr",
    "category": "function",
    "text": "scr(md::S2Module, corr::Matrix{Float64})\n\nAggregation of SCRs of sub-modules\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.scr!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.scr!",
    "category": "function",
    "text": "scr!(mdl::S2Module)\n\nScenario based SCR calculation for mdl::S2Module\n\nChanged: mdl::S2Module\n\n\n\n\n\nscr!(mkt_int::S2MktInt)\n\nSCR for interest rate risk, sub-module mkt_int\n\nChanged: mkt_int::S2MktInt\n\n\n\n\n\nscr!(def::S2Def1)\n\nSCR for interest rate risk, sub-module def::S2Def1\n\nChanged: def::S2Def1\n\n\n\n\n\nscr!(op::S2Op, bscr)\n\nSCR for interest rate risk, sub-module op\n\nChanged: op\n\n\n\n\n\nscr!(s2::S2, tax_credit_0::Float64)\n\nTotal SCR\n\nChanged: s2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.selectmort!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.selectmort!",
    "category": "function",
    "text": "selectmort!(p::ProjParam, bio::S2LifeBio)\n\nIdentify those model points that are subject to mortality risk. This function does not properly take into account second order effects due to the effect of boni. However, for realistic portfolios second order effects are unlikely to change the set of identified model points.\n\nChanged: bio::S2LifeBio  (bio.mp_select)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.spot2forw",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.spot2forw",
    "category": "function",
    "text": "spot2forw(s::Vector{Float64})\n\ncalculates the forward rate f rate from the spot rate s:\n\n(1 + s[n-1])^(n-1) * (1+f[n]) = (1+s[n])^n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.srtk",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.srtk",
    "category": "function",
    "text": "srtk(shift::Int, assets::Vector{Asset}, liabs::Liabilities,   rf::RiskFactor, cap_mkt::SSTCapMkt)\n\nCalculates (linear) sensitivities for rtk\n\n\n\n\n\nsrtk(shift_1::Int, shift_2::Int, assets::Vector{Asset},   liabs::Liabilities, rf::RiskFactor, cap_mkt::SSTCapMkt)\n\nCalculates quadratic sensitivities for rtk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.sxshock!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.sxshock!",
    "category": "function",
    "text": "sxshock!(mp::ModelPoint, bio::S2LifeBio, symb::Symbol)\n\nHelper function: shock for surrender risk\n\nChanged: mp::ModelPoint\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.tpg",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.tpg",
    "category": "function",
    "text": "tpg(τ, rfr, prob, β, λ)\n\nTechnical provisions of guaranteed benefits at the end of year τ\n\n\n\n\n\ntpg(τ, rfr, mp)\n\nBest estimate guaranteed technical provisions of a model point mp at the end of year τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.tpgfixed",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.tpgfixed",
    "category": "function",
    "text": "tpgfixed(τ, rfr, fixed_cost_gc::Vector)\n\nTechnical provisions at the end of year τ for future fixed (going concern) costs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.tpgrec",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.tpgrec",
    "category": "function",
    "text": "tpgrec(τ, tpg, rfr, prob, β, λ)\n\nOne year backward recursion formula for technical provisions of guaranteed benefits\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.update!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.update!",
    "category": "function",
    "text": "update!(τ, proj::Projection, dyn::Dynamic)\n\nUpdate dynamic parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.val0!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.val0!",
    "category": "function",
    "text": "val0!(cap_mkt::CapMkt, invs::InvPort, liabs::LiabIns,   l_other::LiabOther, proj::Projection)\n\nValuation at time t_0\n\nChanged: proj::Projection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.valbonus!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.valbonus!",
    "category": "function",
    "text": "valbonus!(rfr::Vector{Float64}, proj::Projection)\n\nProvisions for future bonus payments (at each time τ). Needs to be called after the projection is completed\n\nChanged: proj::Projection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.valcostprov!",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.valcostprov!",
    "category": "function",
    "text": "valcostprov!(rfr::Vector{Float64}, invs::InvPort,   proj::Projection)\n\nProvisions for future costs (at each time τ). Absolute costs (including absolute investment costs from all investments) and relative investment costs for provisions are considered. It is assumed that provisions are backed by cash investments Needs to be called after the projection is completed\n\nChanged: proj::Projection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.value",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.value",
    "category": "function",
    "text": "value(t::Int, zb::ZeroBond, x::Vector{Float64}, rf::RiskFactor,   cap_mkt::SSTCapMkt)\n\nCalculates the value of a zero bond (after sensitivity x)\n\n\n\n\n\nvalue(t::Int, si::StockIndex,x::Vector{Float64}, rf::RiskFactor,   cap_mkt::SSTCapMkt)\n\nCalculates the value of a stock (after sensitivity x)\n\n\n\n\n\nvalue(t::Int, assts::Vector{Asset}, x::Vector{Float64},   rf::RiskFactor, cap_mkt::SSTCapMkt)\n\nCalculates the value of the asset portfolio (after sensitivity x)\n\n\n\n\n\nvalue(t::Int, liabs::Liabilities, x::Vector{Float64},   rf::RiskFactor, cap_mkt::SSTCapMkt)\n\nCalculates the value of the liability portfolio (after sensitivity x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.Δrtk",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.Δrtk",
    "category": "function",
    "text": "Δrtk(Δx::Vector{Float64}, δ::Vector{Float64},   Γ::Matrix{Float64})\n\nCalculates the shocked rtk based on shocks Δx\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ValueOrientedRiskManagementInsurance.δsx",
    "page": "Docstrings",
    "title": "ValueOrientedRiskManagementInsurance.δsx",
    "category": "function",
    "text": "δsx(τ, cap_mkt, invs, mp, dyn)\n\nDynamic lapse probability factor to adjust the initial estimate\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ValueOrientedRiskManagementInsurance.AllocValueOrientedRiskManagementInsurance.AssetValueOrientedRiskManagementInsurance.BuInsuranceValueOrientedRiskManagementInsurance.BuInvestmentsValueOrientedRiskManagementInsurance.BusinessUnitValueOrientedRiskManagementInsurance.CYValueOrientedRiskManagementInsurance.CapMktValueOrientedRiskManagementInsurance.DOWNValueOrientedRiskManagementInsurance.DebtValueOrientedRiskManagementInsurance.DetermProcessValueOrientedRiskManagementInsurance.DynamicValueOrientedRiskManagementInsurance.GROSSValueOrientedRiskManagementInsurance.GaussCopulaValueOrientedRiskManagementInsurance.IGCashValueOrientedRiskManagementInsurance.IGCostValueOrientedRiskManagementInsurance.IGStockValueOrientedRiskManagementInsurance.InvPortValueOrientedRiskManagementInsurance.InvestValueOrientedRiskManagementInsurance.InvestCashValueOrientedRiskManagementInsurance.InvestGroupValueOrientedRiskManagementInsurance.InvestStockValueOrientedRiskManagementInsurance.LiabInsValueOrientedRiskManagementInsurance.LiabOtherValueOrientedRiskManagementInsurance.LiabilitiesValueOrientedRiskManagementInsurance.ModelPointValueOrientedRiskManagementInsurance.NETValueOrientedRiskManagementInsurance.NLLobValueOrientedRiskManagementInsurance.NYValueOrientedRiskManagementInsurance.PLInsuranceValueOrientedRiskManagementInsurance.PLInvestmentsValueOrientedRiskManagementInsurance.PLTotalValueOrientedRiskManagementInsurance.PYValueOrientedRiskManagementInsurance.ProcessValueOrientedRiskManagementInsurance.ProductValueOrientedRiskManagementInsurance.ProfitLossValueOrientedRiskManagementInsurance.ProjParamValueOrientedRiskManagementInsurance.ProjectionValueOrientedRiskManagementInsurance.RiskFactorValueOrientedRiskManagementInsurance.RiskFreeRateValueOrientedRiskManagementInsurance.S2ValueOrientedRiskManagementInsurance.S2DefValueOrientedRiskManagementInsurance.S2Def1ValueOrientedRiskManagementInsurance.S2Def2ValueOrientedRiskManagementInsurance.S2HealthValueOrientedRiskManagementInsurance.S2LifeValueOrientedRiskManagementInsurance.S2LifeBioValueOrientedRiskManagementInsurance.S2LifeCostValueOrientedRiskManagementInsurance.S2LifeMorbValueOrientedRiskManagementInsurance.S2LifeRevisionValueOrientedRiskManagementInsurance.S2MktValueOrientedRiskManagementInsurance.S2MktConcValueOrientedRiskManagementInsurance.S2MktEqValueOrientedRiskManagementInsurance.S2MktFxValueOrientedRiskManagementInsurance.S2MktIntValueOrientedRiskManagementInsurance.S2MktPropValueOrientedRiskManagementInsurance.S2MktSpreadValueOrientedRiskManagementInsurance.S2ModuleValueOrientedRiskManagementInsurance.S2NonLifeValueOrientedRiskManagementInsurance.S2NotImplementedValueOrientedRiskManagementInsurance.S2OpValueOrientedRiskManagementInsurance.SSTCapMktValueOrientedRiskManagementInsurance.StockValueOrientedRiskManagementInsurance.StockIndexValueOrientedRiskManagementInsurance.StressValueOrientedRiskManagementInsurance.TotalValueOrientedRiskManagementInsurance.UPValueOrientedRiskManagementInsurance.ValueOrientedRiskManagementInsuranceValueOrientedRiskManagementInsurance.ZeroBondValueOrientedRiskManagementInsurance.aggrstressValueOrientedRiskManagementInsurance.alloc!ValueOrientedRiskManagementInsurance.bioshock!ValueOrientedRiskManagementInsurance.biquotientValueOrientedRiskManagementInsurance.bofValueOrientedRiskManagementInsurance.bonus!ValueOrientedRiskManagementInsurance.bonusrateValueOrientedRiskManagementInsurance.catshock!ValueOrientedRiskManagementInsurance.costshock!ValueOrientedRiskManagementInsurance.deltaValueOrientedRiskManagementInsurance.dict_igValueOrientedRiskManagementInsurance.dynstateValueOrientedRiskManagementInsurance.dynstateavgValueOrientedRiskManagementInsurance.esValueOrientedRiskManagementInsurance.evalValueOrientedRiskManagementInsurance.evaluate!ValueOrientedRiskManagementInsurance.fdbValueOrientedRiskManagementInsurance.forw2spotValueOrientedRiskManagementInsurance.freesurpValueOrientedRiskManagementInsurance.gammamatrixValueOrientedRiskManagementInsurance.getloanValueOrientedRiskManagementInsurance.getyieldValueOrientedRiskManagementInsurance.goingconcernValueOrientedRiskManagementInsurance.goingconcern!ValueOrientedRiskManagementInsurance.includeValueOrientedRiskManagementInsurance.initializeValueOrientedRiskManagementInsurance.investpredividValueOrientedRiskManagementInsurance.mkt_val0_adj!ValueOrientedRiskManagementInsurance.mkteqshock!ValueOrientedRiskManagementInsurance.mktintshock!ValueOrientedRiskManagementInsurance.paycouponValueOrientedRiskManagementInsurance.payprincipalValueOrientedRiskManagementInsurance.premiumValueOrientedRiskManagementInsurance.premrestotalsdValueOrientedRiskManagementInsurance.profit!ValueOrientedRiskManagementInsurance.projectValueOrientedRiskManagementInsurance.project!ValueOrientedRiskManagementInsurance.projectboy!ValueOrientedRiskManagementInsurance.projecteoy!ValueOrientedRiskManagementInsurance.pvValueOrientedRiskManagementInsurance.pvprevValueOrientedRiskManagementInsurance.pvvecValueOrientedRiskManagementInsurance.qxpxshock!ValueOrientedRiskManagementInsurance.randValueOrientedRiskManagementInsurance.rfrshockValueOrientedRiskManagementInsurance.rtkValueOrientedRiskManagementInsurance.rΔrtkValueOrientedRiskManagementInsurance.s2balValueOrientedRiskManagementInsurance.s2riskmarginValueOrientedRiskManagementInsurance.scrValueOrientedRiskManagementInsurance.scr!ValueOrientedRiskManagementInsurance.selectmort!ValueOrientedRiskManagementInsurance.spot2forwValueOrientedRiskManagementInsurance.srtkValueOrientedRiskManagementInsurance.sxshock!ValueOrientedRiskManagementInsurance.tpgValueOrientedRiskManagementInsurance.tpgfixedValueOrientedRiskManagementInsurance.tpgrecValueOrientedRiskManagementInsurance.update!ValueOrientedRiskManagementInsurance.val0!ValueOrientedRiskManagementInsurance.valbonus!ValueOrientedRiskManagementInsurance.valcostprov!ValueOrientedRiskManagementInsurance.valueValueOrientedRiskManagementInsurance.ΔValueOrientedRiskManagementInsurance.ΔrtkValueOrientedRiskManagementInsurance.δsx"
},

]}
