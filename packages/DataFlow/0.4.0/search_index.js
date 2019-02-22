var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataFlow.jl-1",
    "page": "Readme",
    "title": "DataFlow.jl",
    "category": "section",
    "text": "(Image: Build Status)DataFlow.jl is a code intermediate representation (IR) format. It can be thought of as antithetical to SSA form; where SSA allows only statements, DataFlow allows only expressions. Closures are represented explicitly, allowing full programs to be easily represented and manipulated and complex whole-program transformations to be applied. Moreover, programs can be kept in a high-level form that\'s very human-readable.A data flow graph is a bit like an expression tree without variables; functions always refer to their inputs directly. Underneath it\'s a directed graph linking the output of one function call to the input of another. DataFlow.jl provides functions like prewalk and postwalk which allow you to do crazy graph-restructuring operations with minimal code, even on cyclic graphs. Think algorithms like common subexpression elimination implemented in one line rather than hundreds."
},

{
    "location": "#Basics-1",
    "page": "Readme",
    "title": "Basics",
    "category": "section",
    "text": "julia> using DataFlow: vertex, constant, CallDataFlow.jl provides the IVertex data type, which behaves a lot like Julia\'s Expr type. We can construct vertices, and use them as inputs to other vertices, to build expressions. constant is a shortcut for vertices representing constant values.julia> using DataFlow: vertex, constant, Call, Constant\n\njulia> a, b = constant(1), constant(2)\n(IVertex(1), IVertex(2))\n\njulia> c = vertex(Call(), constant(+), a, b)\nIVertex((+)(1, 2))The Call() object is analagous to the \"head\" in Julia\'s Exprs, so this is like Expr(:call, f, x...).A key difference from Expr is that the IVertex is a graph, not a tree, and reuse is explicitly represented. Consider multiplying the expression c by itself:julia> d = vertex(Call(), constant(*), c, c)\nIVertex(\nbison = (+)(1, 2)\n(*)(bison, bison))In order to represent the structure of the graph in text, DataFlow.jl prints an expression tree with a made-up variable binding (bison). This variable is not present in the graph itself, but just used for presentation.Graphs can also be dumped to Julia expressions using DataFlow.syntax, which will similarly create variable bindings where needed.julia> DataFlow.syntax(d)\nquote\n    ##edge#668 = (+)(1, 2)\n    (*)(##edge#668, ##edge#668)\nend\n\njulia> eval(ans)\n9Graphs are also allowed to be cyclic. We can introduce cycles using thread!, which pushes a new argument into an existing vertex.julia> DataFlow.thread!(c, c)\nIVertex(bison = (+)(1, 2, bison))Notice that the cycle is represented by the circular dependency of bison on itself."
},

{
    "location": "#Walking-1",
    "page": "Readme",
    "title": "Walking",
    "category": "section",
    "text": "Transformations are carried out via prewalk and postwalk functions very similar to those in MacroTools (see there for more explanation).julia> DataFlow.prewalk(d) do v\n         v.value isa Call && v[1].value == Constant(+) ? vertex(constant(-), v[2:end]...) : v\n       end\nIVertex(\nbison = (IVertex(-))(1, 2)\n(*)(bison, bison))There are also in-place variants of prewalk and postwalk, which can be used for more advanced transformations."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DataFlow.@flowDataFlow.@vtxDataFlow.ASetDataFlow.BindDataFlow.CallDataFlow.ConstantDataFlow.DVertexDataFlow.DataFlowDataFlow.DoDataFlow.FrameDataFlow.FuzzDataFlow.IVertexDataFlow.InputDataFlow.InterpreterDataFlow.LambdaDataFlow.LineDataFlow.LooseEndDataFlow.OASetDataFlow.ODictDataFlow.OLambdaDataFlow.OSetDataFlow.ObjectArraySetDataFlow.ObjectIdSetDataFlow.SkipFrameDataFlow.SplitDataFlow.StopDataFlow.TypeAssertDataFlow.VertexDataFlow.applybodyDataFlow.applylinesDataFlow.bindargsDataFlow.bindingDataFlow.bindingsDataFlow.bumpinputsDataFlow.codeDataFlow.collectvDataFlow.commonDataFlow.constantDataFlow.constructorDataFlow.contains_DataFlow.copy1DataFlow.cseDataFlow.desugarDataFlow.dlDataFlow.duplicatesDataFlow.dvertexDataFlow.equalDataFlow.evalDataFlow.fillnodes!DataFlow.graphinputsDataFlow.graphmDataFlow.graphm!DataFlow.groupDataFlow.ilDataFlow.includeDataFlow.inputidxDataFlow.inputnodeDataFlow.inputsDataFlow.insertbindsDataFlow.iscallDataFlow.isconstantDataFlow.iscyclicDataFlow.isfinalDataFlow.isinputDataFlow.islambdaDataFlow.isreachingDataFlow.latenodesDataFlow.mapconstDataFlow.mapvDataFlow.ninDataFlow.nolineDataFlow.normaliseDataFlow.normblockDataFlow.normcallsDataFlow.normclosuresDataFlow.normedgesDataFlow.normlinesDataFlow.normopsDataFlow.normreturnDataFlow.normsplitsDataFlow.noutDataFlow.outputsDataFlow.postwalkDataFlow.postwalk!DataFlow.precopyDataFlow.preforDataFlow.prethread!DataFlow.prewalkDataFlow.prewalk!DataFlow.prewalkλDataFlow.spliceinputDataFlow.spliceinputsDataFlow.stopDataFlow.striplinesDataFlow.syntaxDataFlow.thread!DataFlow.toexprDataFlow.topoDataFlow.topo_upDataFlow.tovertex!DataFlow.uidDataFlow.unwrap_stopDataFlow.valueDataFlow.vcallDataFlow.vertexDataFlow.walkDataFlow.walk!DataFlow.withconstDataFlow.λcloseDataFlow.λopen"
},

]}
