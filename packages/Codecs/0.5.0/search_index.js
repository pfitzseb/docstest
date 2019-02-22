var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "OSX/Linux: (Image: Build Status) </br> pkg.julialang.org: (Image: Codecs) </br> pkg.julialang.org: (Image: Codecs)  </br> pkg.julialang.org: (Image: Codecs)  </br> Windows: (Image: Build status) </br>"
},

{
    "location": "#Codecs-1",
    "page": "Readme",
    "title": "Codecs",
    "category": "section",
    "text": "Basic data encoding and decoding protocols.Currently implemented protocols: Base64, Zlib, Binary Coded Decimal."
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "using Codecs\n\ndata = \"Hello World!\"\nencoded = encode(Base64, encode(Zlib, data))\nprintln(bytestring(encoded))Output:eNrzSM3JyVcIzy/KSVEEABxJBD4=(Wow, that\'s inefficient.)decoded = decode(Zlib, decode(Base64, encoded))\nprintln(bytestring(decoded))Output:Hello World!BCD is for encoding integers:i = 2013\nencoded = encode(BCD, i)\nprintln(encoded)\nencoded = encode(BCD, i, true)  # big endian digit order\nprintln(encoded)Output:[0x31,0x02]\n[0x20,0x13]"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Codecs.@gc_preserveCodecs.BCDCodecs.Base64Codecs.CodecCodecs.CodecsCodecs.ZERRNOCodecs.Z_BLOCKCodecs.Z_BUF_ERRORCodecs.Z_DATA_ERRORCodecs.Z_FINISHCodecs.Z_FULL_FLUSHCodecs.Z_MEM_ERRORCodecs.Z_NEED_DICTCodecs.Z_NO_FLUSHCodecs.Z_OKCodecs.Z_PARTIAL_FLUSHCodecs.Z_STREAM_ENDCodecs.Z_STREAM_ERRORCodecs.Z_SYNC_FLUSHCodecs.Z_TREESCodecs.Z_VERSION_ERRORCodecs.ZlibCodecs.b64dec_tblCodecs.b64enc_tblCodecs.base64_padCodecs.base64decCodecs.decodeCodecs.encodeCodecs.evalCodecs.includeCodecs.libzCodecs.sentinelCodecs.z_streamCodecs.zlib_version"
},

]}
