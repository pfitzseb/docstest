var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AMA-Anderson-Moore-Algorithm-1",
    "page": "Readme",
    "title": "AMA - Anderson Moore Algorithm",
    "category": "section",
    "text": "Release verison:Build status:(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Installion-1",
    "page": "Readme",
    "title": "Installion",
    "category": "section",
    "text": "To install AMA, use the package manager by typing:Pkg.add(\"AndersonMoore\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This algorithm solves linear rational expectations models. There is a fast and slightly faster method to execute the algorithm which is outlined below. AndersonMooreAlg calls a julia language implementation and callSparseAim executes a C/Fortran implementation. Lastly, gensysToAMA is a function for users who are accustomed to gensys style inputs and outputs but wish to use AMA. It can be shown that AMA is faster than gensys. To begin,Load the module:using AndersonMooreDeclare the linear models to solve such as:h = [0.  0.  0.  0.  -1.1  0.  0.  0.  1.  1.  0.  0.;\n     0.  -0.4  0.  0.  0.  1.  -1.  0.  0.  0.  0.  0.;\n     0.  0.  0.  0.  0.  0.  1.  0.  0.  0.  0.  0.;\n     0.  0.  0.  -1.  0.  0.  0.  1.  0.  0.  0.  0.]::Array{Float64,2}Set number of equations:neq = 4Set number of lags and leads:nlags = 1\nnleads = 1Set a tolerance to calculate numeric shift and reduced form:condn = 0.0000000001Finally, give an inclusive upper bound for modulus of roots allowed in reduced form:upperbnd = 1 + condn"
},

{
    "location": "#To-execute-the-algorithm-with-julia:-1",
    "page": "Readme",
    "title": "To execute the algorithm with julia:",
    "category": "section",
    "text": "(b, rts, ia, nexact, nnumeric, lgroots, AMAcode) =\n     AndersonMooreAlg(h, neq, nlag, nlead, condn, upperbnd)Note - the above returns the tuple (b, rts, ia, nexact, nnumeric, lgroots, AMAcode) <ul>   <li>	b         -  Reduced form coefficient matrix.<br />                      </li>   <li>	rts       -  Roots returned by eig.<br />                                </li>   <li>	ia        -  Dimension of companion matrix.<br />                        </li>   <li>	nexact    -  Number of exact shift rights.<br />                         </li>   <li>	nnumeric  -  Number of numeric shift rights.<br />                       </li>   <li>	lgroots   -  Number of roots greater in modulus than upper bound.<br />  </li>   <li>  AMAcode   -  Return code.<br />                                          </li> </ul>"
},

{
    "location": "#To-execute-the-algorithm-with-C/Fortran:-1",
    "page": "Readme",
    "title": "To execute the algorithm with C/Fortran:",
    "category": "section",
    "text": "(h, b, q, AMAcode) = \n     callSparseAim(h, nleads, nlags)Note - the above returns the tuple (h, b, q, AMAcode)<br /> <ul>   <li>  h         -  The original h matrix after computations.<br />  </li>   <li>	b         -  Reduced form coefficient matrix.<br />           </li>   <li>  q         -  Asymptotic constraints.<br />                    </li>   <li>	AMAcode   -  Return code.                                     </li> </ul>"
},

{
    "location": "#For-those-accustomed-to-gensys:-1",
    "page": "Readme",
    "title": "For those accustomed to gensys:",
    "category": "section",
    "text": "(G1, CC, impact, fmat, fwt, ywt, gev, eu) = \n     gensysToAMA(g0, g1, cc, psi, pi, div, varargin = \"\" ) To run AMA, subsitute the gensys style inputs into the above command but substitute \"ama\" for the argument varargin."
},

{
    "location": "#More-1",
    "page": "Readme",
    "title": "More",
    "category": "section",
    "text": "For more information and an indepth analysis of the algorithm, please read the full paper written by Gary S. Anderson.The authors would appreciate acknowledgement by citation of any of the following papers:Anderson, G. and Moore, G. \"A Linear Algebraic Procedure For Solving Linear Perfect Foresight Models.\" Economics Letters, 17, 1985.Anderson, G. \"Solving Linear Rational Expectations Models: A Horse Race.\" Computational Economics, 2008, vol. 31, issue 2, pp. 95-113Anderson, G. \"A Reliable and Computationally Efficient Algorithm for Imposing the Saddle Point Property in Dynamic Models.\" Journal of Economic Dynamics and Control, 2010, vol 34, issue 3, pp. 472-489.Developer: Gregory Tunell e-mail available at <gregtunell@gmail.com>."
},

]}
