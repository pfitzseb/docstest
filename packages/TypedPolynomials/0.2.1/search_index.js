var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TypedPolynomials-1",
    "page": "Readme",
    "title": "TypedPolynomials",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)TypedPolynomials.jl provides an implementation of the multivariate polynomial interface from MultivariatePolynomials.jl using strongly typed variables. That is, in this package, the identity of a variable is encoded by its type, so variables x and y are of different types. This allows us to use the type system to handle certain operations, like computing the intersection of two monomials\' variables, at compile-time."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Handling variables at the type level makes constructing variables, monomials, and terms more efficient than with DynamicPolynomials.jl.\nDespite the heavy use of the type system, this package has no @generated functions and should be compatible with static compilation (though this has not yet been tested)."
},

{
    "location": "#Caveats-1",
    "page": "Readme",
    "title": "Caveats",
    "category": "section",
    "text": "There is no distinction in this package between a variable\'s name and its identity. That is, two variables named x are exactly the same object, regardless of how they were created.\nFor problems with large numbers of variables, or for which the set of variables is not known at compile-time, you may see better performance overall with DynamicPolynomials.jl, e.g. #32. This may change in the future."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The easiest way to create variables is the @polyvar macro:julia> @polyvar x y z  # Declare three `Variable`s named x, y, and z and assign local variables with the same names\n(x, y, z)\n\njulia> typeof(x)\nTypedPolynomials.Variable{:x}\n\njulia> typeof(y)\nTypedPolynomials.Variable{:y}Multiplying variables creates a Monomial{V} where V is the vector of variables contained in the monomial:julia> x * y\nxy\n\njulia> typeof(x * y)\nTypedPolynomials.Monomial{(x, y),2}\n\njulia> typeof(x^2)\nTypedPolynomials.Monomial{(x,),1}Multiplying a monomial (or variable) by anything other than another Variable or Monomial creates a Term:julia> 3 * x\n3x\n\njulia> typeof(3 * x)\nTypedPolynomials.Term{Int64,TypedPolynomials.Monomial{(x,),1}}\n\njulia> typeof(3.0 * x^2 * y)\nTypedPolynomials.Term{Float64,TypedPolynomials.Monomial{(x, y),2}}Addition or subtraction of terms, monomials, and/or variables creates a Polynomial:julia> x + y\nx + y\n\njulia> typeof(x + y) <: Polynomial\ntrue\n\njulia> x + 3y^2 + z/2 + x^3\nx^3 + 3.0y^2 + x + 0.5z"
},

{
    "location": "#More-Examples-1",
    "page": "Readme",
    "title": "More Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Differentiation-and-Substitution-1",
    "page": "Readme",
    "title": "Differentiation and Substitution",
    "category": "section",
    "text": "using TypedPolynomials\nusing Test\n@polyvar x y # assigns x (resp. y) to a variable of name x (resp. y)\np = 2x + 3.0x*y^2 + y\n@test differentiate(p, x) == 3y^2 + 2 # compute the derivative of p with respect to x\n@test differentiate.(p, (x, y)) == (3y^2 + 2, 6*x*y + 1) # compute the gradient of p\n@test p((x, y)=>(y, x)) == 2y + 3y*x^2 + x  # replace any x by y and y by x\n@test p(y=>x^2) == 2x + 3x*(x^4) + x^2 # replace any occurence of y by x^2\n@test p(x=>1, y=>2) == 2 * 1 + 3 * 1 * 2^2 + 2 # evaluate p at [1, 2]"
},

{
    "location": "#Vectors-of-Variables-1",
    "page": "Readme",
    "title": "Vectors of Variables",
    "category": "section",
    "text": "The @polyvar macro can also create a tuple of variables automatically:using TypedPolynomials\nA = rand(3, 3)\n@polyvar x[1:3] # assign x to a tuple of variables x1, x2, x3\np = sum(x .* x) # x_1^2 + x_2^2 + x_3^2\np(x[1]=>2, x[3]=>3) # x_2^2 + 13\np(x=>A*vec(x)) # corresponds to dot(A*x, A*x), need vec to convert the tuple to a vector"
},

{
    "location": "autodocs/#TypedPolynomials.@polyvar",
    "page": "Docstrings",
    "title": "TypedPolynomials.@polyvar",
    "category": "macro",
    "text": "Construct polynomial variables and bind them to local variables of the same name. Usage:\n\nCreate a single variable named x:\n\n@polyvar(x)\n\nCreate several variables at the same time:\n\n@polyvar(x, y, z)\n\nCreate a tuple of variables x = (x1, x2, x3, x4):\n\n@polyvar(x[1:4])\n\nCreate variables x, y, a = (a1, a2, a3):\n\n@polyvar(x, y, a[1:3])\n\nYou can also assign the results of the macro to a tuple:\n\nvars = @polyvar(x[1:5])\n@assert typeof(vars[1]) == Variable{:x1}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TypedPolynomials.@polyvarTypedPolynomials.MPTypedPolynomials.MonomialTypedPolynomials.MonomialLikeTypedPolynomials.PolynomialTypedPolynomials.PolynomialLikeTypedPolynomials.SequencesTypedPolynomials.SubstitutionTypedPolynomials.TermTypedPolynomials.TermLikeTypedPolynomials.TypedPolynomialsTypedPolynomials.VariableTypedPolynomials._diffTypedPolynomials._exponentTypedPolynomials._makevarTypedPolynomials._promote_monomial_noncommutativeTypedPolynomials._return_nameTypedPolynomials._splitTypedPolynomials._varconstructorTypedPolynomials.changeeltypeTypedPolynomials.checksortedTypedPolynomials.coefftypeTypedPolynomials.combineTypedPolynomials.compareTypedPolynomials.differentiateTypedPolynomials.evalTypedPolynomials.find_variable_indexTypedPolynomials.includeTypedPolynomials.inmonomialTypedPolynomials.jointermsTypedPolynomials.matchindicesTypedPolynomials.mergeTypedPolynomials.monomial_powersTypedPolynomials.subsTypedPolynomials.termsTypedPolynomials.variables"
},

]}
