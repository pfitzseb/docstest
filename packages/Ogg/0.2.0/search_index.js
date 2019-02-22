var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Ogg-1",
    "page": "Readme",
    "title": "Ogg",
    "category": "section",
    "text": "(Image: Build Status)Basic bindings to libogg to read Ogg bitstreams.  Basic operation is to use load() to read in an array of packets which can then be decoded by whatever higher-level codec can use them (such as Opus.jl), or use save() to write out a set of packets and their respective granule positions.  Manual use of this package is unusual, however if you are curious as to how .ogg files work, this package can act as a nice debugging tool.To look into details of an .ogg file such as its actual pages, you must keep track of the OggDecoder object so you can inspect its internal fields pages and packets.  The definition of load() is roughly equivalent to:dec = OggDecoder()\nOgg.decode_all_pages(dec, fio)\nOgg.decode_all_packets(dec, fio)Where fio is an IO object you wish to decode.  The fields dec.pages and dec.packets now contains much information about the .ogg file you have just decoded."
},

{
    "location": "autodocs/#Ogg.decode_all_packets",
    "page": "Docstrings",
    "title": "Ogg.decode_all_packets",
    "category": "function",
    "text": "File goes in, packets come out\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Ogg.encode_all_packets",
    "page": "Docstrings",
    "title": "Ogg.encode_all_packets",
    "category": "function",
    "text": "encode_all_packets(enc, packets, granulepos)\n\nFeed all packets (with their corresponding granule positions) into encoder enc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Ogg.ogg_stream_pagein",
    "page": "Docstrings",
    "title": "Ogg.ogg_stream_pagein",
    "category": "function",
    "text": "Send a page in, return the serial number of the stream that we just decoded\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Ogg.OggOgg.OggDecoderOgg.OggEncoderOgg.OggPacketOgg.OggPageOgg.OggStreamStateOgg.OggSyncStateOgg.check_depsOgg.decode_all_packetsOgg.decode_all_pagesOgg.depfileOgg.encode_all_packetsOgg.evalOgg.includeOgg.liboggOgg.loadOgg.ogg_page_eosOgg.ogg_page_serialnoOgg.ogg_stream_destroyOgg.ogg_stream_flushOgg.ogg_stream_packetinOgg.ogg_stream_packetoutOgg.ogg_stream_pageinOgg.ogg_stream_pageoutOgg.ogg_sync_bufferOgg.ogg_sync_destroyOgg.ogg_sync_pageoutOgg.ogg_sync_wroteOgg.oss_zero_headerOgg.readOgg.save"
},

]}
