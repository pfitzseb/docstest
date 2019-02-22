var documenterSearchIndex = {"docs": [

{
    "location": "autodocs/#LCMCore.@lcmtypesetup",
    "page": "Docstrings",
    "title": "LCMCore.@lcmtypesetup",
    "category": "macro",
    "text": "@lcmtypesetup(lcmtype, dimensioninfos...)\n\nGenerate the following methods for a concrete LCMType subtype (say MyType):\n\ndimensions(x::MyType, ::Val{fieldsym}), for all fields\nfingerprint(::Type{MyType})\n\nThe lcmtype argument should be the name of a concrete LCMType subtype. The dimensioninfos arguments can be used to define which fields determine the size of which variable-size array fields. Each dimensioninfos element should have the form\n\narrayfieldname => (size1, size2, ...)\n\nwhere arrayfieldname is the name of an Array field and size1, size2 etc. are the dimensions of the Array, where both integers and field names that come before arrayfieldname in the type definition may be used.\n\nExamples\n\nmutable struct MyType <: LCMType\n    alength::Int32\n    c_inner_length::Int32\n    a::Vector{Float64}\n    b::SVector{3, Float32}\n    c::Matrix{Int64}\nend\n\n@lcmtypesetup(MyType,\n    a => (alength, ),\n    c => (3, c_inner_length)\n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LCMCore.LCMType",
    "page": "Docstrings",
    "title": "LCMCore.LCMType",
    "category": "type",
    "text": "LCMType\n\nSupertype of concrete Julia structs that represent LCM message types.\n\nSubtypes must be mutable structs and may use the following field types:\n\nBool\nnumeric types: Int8, Int16, Int32, Int64, Float32, Float64\nbytes (encoded in the same was as Int8): UInt8;\nString;\nanother LCMType;\nVector or a subtype of StaticVector, for which the element type must also be\n\none of the previously specified types or another Vector or StaticVector.\n\nAny size fields must come before the Vector fields to which they correspond.\n\nThe following methods must be defined for a concrete subtype of LCMType (say MyType):\n\ndimensions(x::MyType, ::Val{fieldsym})\nfingerprint(::Type{MyType})\n\nNote that the @lcmtypesetup macro can be used to generate these methods automatically.\n\nAlso note that ideally, all of these methods would be generated from the LCM message type definition, but that is currently not the case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LCMCore.check_valid",
    "page": "Docstrings",
    "title": "LCMCore.check_valid",
    "category": "function",
    "text": "check_valid(x::LCMType)\n\nCheck that the array sizes of x match their corresponding size fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LCMCore.decode_in_place",
    "page": "Docstrings",
    "title": "LCMCore.decode_in_place",
    "category": "function",
    "text": "decode_in_place(T)\n\nSpecify whether type T should be decoded in place, i.e. whether to use a decodefield! method instead of a decodefield method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LCMCore.dimensions",
    "page": "Docstrings",
    "title": "LCMCore.dimensions",
    "category": "function",
    "text": "dimensions(x::LCMType, ::Val{fieldsym})\n\nReturn a tuple of LCMDimensions describing the size of getfield(x, fieldsym).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LCMCore.encode",
    "page": "Docstrings",
    "title": "LCMCore.encode",
    "category": "function",
    "text": "encode(io::IO, x::LCMType)\n\nWrite an LCM byte representation of x to io.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LCMCore.fingerprint",
    "page": "Docstrings",
    "title": "LCMCore.fingerprint",
    "category": "function",
    "text": "fingerprint(::Type{T}) where T<:LCMType\n\nReturn the fingerprint of LCM type T as an Int64 (exactly 8 bytes).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LCMCore.@checked_libLCMCore.@lcmtypesetupLCMCore.DimensionModeLCMCore.FingerprintExceptionLCMCore.LCMLCMCore.LCMCoreLCMCore.LCMDimensionLCMCore.LCMDimensionConstLCMCore.LCMDimensionVarLCMCore.LCMLogLCMCore.LCMPrimitiveLCMCore.LCMTypeLCMCore.LCM_CONSTLCMCore.LCM_VARLCMCore.NetworkByteOrderEncodedLCMCore.RecvBufLCMCore.ReverseDimIndicesLCMCore.SubscriptionLCMCore.SubscriptionOptionsLCMCore._decodefieldLCMCore._defaultvalLCMCore.basehashLCMCore.check_channel_nameLCMCore.check_loopback_multicastLCMCore.check_multicast_routingLCMCore.check_validLCMCore.checkfingerprintLCMCore.closeLCMCore.computehashLCMCore.decodeLCMCore.decode!LCMCore.decode_in_placeLCMCore.decodefieldLCMCore.decodefield!LCMCore.defaultvalLCMCore.depsjlLCMCore.dimensionmodeLCMCore.dimensionsLCMCore.encodeLCMCore.encodefieldLCMCore.evalLCMCore.evaldimsLCMCore.filedescriptorLCMCore.fingerprintLCMCore.get_queue_sizeLCMCore.handleLCMCore.hashupdateLCMCore.includeLCMCore.isgoodLCMCore.isprimitiveLCMCore.lcm_eventlog_createLCMCore.lcm_eventlog_destroyLCMCore.lcm_eventlog_event_tLCMCore.lcm_eventlog_read_next_eventLCMCore.lcm_eventlog_tLCMCore.lcm_handleLCMCore.lcm_prefixLCMCore.lcmtypenameLCMCore.liblcmLCMCore.loopback_interfaceLCMCore.loopback_multicast_setup_adviceLCMCore.makedimLCMCore.onresponseLCMCore.publishLCMCore.read_next_eventLCMCore.resizearrayfield!LCMCore.reversedimindicesLCMCore.reversedimsLCMCore.set_queue_capacityLCMCore.sign_extended_right_shiftLCMCore.sizestringLCMCore.subscribeLCMCore.troubleshootLCMCore.unsubscribe"
},

]}
