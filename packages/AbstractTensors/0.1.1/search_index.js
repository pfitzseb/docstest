var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractTensors.jl-1",
    "page": "Readme",
    "title": "AbstractTensors.jl",
    "category": "section",
    "text": "TensorAlgebra abstract type system interoperability with VectorSpace parameter(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package is intended for universal interoperability of the abstract TensorAlgebra type system. All TensorAlgebra{V} subtypes contain V in their type parameters, used to store a VectorSpace value obtained from the DirectSum.jl package.For example, this is mainly used in Grassmann.jl to define various SubAlgebra, TensorTerm and TensorMixed types, each with subtypes. Externalizing the abstract type helps extend the dispatch to other packages.julia> Grassmann.TensorTerm{V,G} <: AbstractTensors.TensorAlgebra{V}\ntrueBy itself, this package does not impose any structure or specifications on the TensorAlgebra{V} subtypes and elements, aside from requiring V to be a VectorSpace. This means that different packages can create special types of tensors with shared method names and a common underlying VectorSpace structure."
},

{
    "location": "#Interoperability-1",
    "page": "Readme",
    "title": "Interoperability",
    "category": "section",
    "text": "Since VectorSpace choices are fundamental to TensorAlgebra operations, the universal interoperability between TensorAlgebra{V} elements with different associated VectorSpace choices is naturally realized by applying the union morphism to operations.function op(::TensorAlgebra{V},::TensorAlgebra{V}) where V\n    # well defined operations if V is shared\nend # but what if V ≠ W in the input types?\n\nfunction op(a::TensorAlgebra{V},b::TensorAlgebra{W}) where {V,W}\n    VW = V ∪ W        # VectorSpace type union\n    op(VW(a),VW(b))   # makes call well-defined\nend # this option is automatic with interop(a,b)\n\n# alternatively for evaluation of forms, VW(a)(VW(b))Some of the method names like +,-,*,⊗ for TensorAlgebra elements are shared across different packages, some of the interoperability is taken care of in this package."
},

{
    "location": "#Example-with-a-new-subtype-1",
    "page": "Readme",
    "title": "Example with a new subtype",
    "category": "section",
    "text": "Suppose we are dealing with a new subtype in another project, such asusing AbstractTensors, DirectSum\nstruct SpecialTensor{V} <: TensorAlgebra{V} end\na = SpecialTensor{ℝ}()\nb = SpecialTensor{ℝ\'}()To define additional specialized interoperability for further methods, it is necessary to define dispatch that catches well-defined operations for equal VectorSpace choices and a fallback method for interoperability, along with a VectorSpace morphism:op(s::SpecialTensor{V},::SpecialTensor{V}) where V = s # do some kind of operation\nop(a::TensorAlgebra{V},b::TensorAlgebra{W}) where {V,W} = interop(op,a,b) # compat\n(W::VectorSpace)(s::SpecialTensor{V}) where V = SpecialTensor{W}() # conversionswhich should satisfy (using the ∪ operation as defined in DirectSum)julia> op(a,b) |> vectorspace == vectorspace(a) ∪ vectorspace(b)\ntrueThus, interoperability is simply a matter of defining one additional fallback method for the operation and also a new form VectorSpace compatibility morphism."
},

{
    "location": "#Tensor-evaluation-1",
    "page": "Readme",
    "title": "Tensor evaluation",
    "category": "section",
    "text": "To support a generalized interface for TensorAlgebra element evaluation, a similar compatibility interface is constructible.(a::SpecialTensor{V})(b::SpecialTensor{V}) where V = a # conversion of some form\n(a::SpecialTensor{W})(b::SpecialTensor{V}) where {V,W} = interform(a,b) # compatwhich should satisfy (using the ∪ operation as defined in DirectSum)julia> b(a) |> vectorspace == vectorspace(a) ∪ vectorspace(b)\ntrueThe purpose of the interop and interform methods is to help unify the interoperability of TensorAlgebra elements."
},

{
    "location": "#Deployed-applications-1",
    "page": "Readme",
    "title": "Deployed applications",
    "category": "section",
    "text": "By importing the AbstractTensors module, the Reduce.jl is able to correctly bypass operations on TensorAlgebra elements to the correct methods within the scope of the Reduce.Algebra module. This requires no additional overhead for the Grassmann or Reduce packages, because the AbstractTensors interoperability interface enables separate precompilation of both. Additionally, the VectorSpace interoperability also enables more arbitrary inputs."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AbstractTensors.AbstractTensorsAbstractTensors.TensorAlgebraAbstractTensors.evalAbstractTensors.includeAbstractTensors.interformAbstractTensors.interopAbstractTensors.⊗"
},

]}
