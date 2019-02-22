var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#A-Julia-interface-to-ZeroMQ-1",
    "page": "Readme",
    "title": "A Julia interface to ZeroMQ",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)ZMQ.jl is a Julia interface to ZeroMQ, The Intelligent Transport Layer."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"ZMQ\")(This installs its own copy of the ZMQ libraries from the ZMQBuilder repository.)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ZMQ\n\nctx=Context()\ns1=Socket(ctx, REP)\ns2=Socket(ctx, REQ)\n\nZMQ.bind(s1, \"tcp://*:5555\")\nZMQ.connect(s2, \"tcp://localhost:5555\")\n\nZMQ.send(s2, Message(\"test request\"))\nmsg = ZMQ.recv(s1)\nout=convert(IOStream, msg)\nseek(out,0)\n#read out::MemIO as usual, eg. read(out,...) or takebuf_string(out)\n#or, conveniently, use unsafe_string(msg) to retrieve a string\n\nZMQ.send(s1, Message(\"test response\"))\nZMQ.close(s1)\nZMQ.close(s2)\nZMQ.close(ctx)\n"
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "If you are using Windows and get an error Provider PackageManager failed to satisfy dependency zmq, you may need to restart Julia and run Pkg.build(\"ZMQ\") again. See issue #69 for more details."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ZMQ.ContextZMQ.DEALERZMQ.DOWNSTREAMZMQ.FORWARDERZMQ.IO_THREADSZMQ.MAX_SOCKETSZMQ.MOREZMQ.MessageZMQ.MsgPaddingZMQ.PAIRZMQ.POLLERRZMQ.POLLINZMQ.POLLOUTZMQ.PUBZMQ.PULLZMQ.PUSHZMQ.QUEUEZMQ.REPZMQ.REQZMQ.ROUTERZMQ.SNDMOREZMQ.STREAMERZMQ.SUBZMQ.SocketZMQ.StateErrorZMQ.UPSTREAMZMQ.XPUBZMQ.XREPZMQ.XREQZMQ.XSUBZMQ.ZMQZMQ.ZMQ_DONTWAITZMQ.ZMQ_SNDMOREZMQ.__init__ZMQ._zmq_getsockopt_rcvmoreZMQ.bindZMQ.check_depsZMQ.close_handleZMQ.connectZMQ.depsjl_pathZMQ.evalZMQ.gc_free_fnZMQ.gc_free_fn_cZMQ.gc_protectZMQ.gc_protect_cbZMQ.gc_protect_handleZMQ.get_affinityZMQ.get_backlogZMQ.get_eventsZMQ.get_fdZMQ.get_identityZMQ.get_ipv4onlyZMQ.get_last_endpointZMQ.get_lingerZMQ.get_maxmsgsizeZMQ.get_multicast_hopsZMQ.get_rateZMQ.get_rcvbufZMQ.get_rcvhwmZMQ.get_rcvmoreZMQ.get_rcvtimeoZMQ.get_reconnect_ivlZMQ.get_reconnect_ivl_maxZMQ.get_recovery_ivlZMQ.get_sndbufZMQ.get_sndhwmZMQ.get_sndtimeoZMQ.get_tcp_keepaliveZMQ.get_tcp_keepalive_cntZMQ.get_tcp_keepalive_idleZMQ.get_tcp_keepalive_intvlZMQ.get_typeZMQ.i64pZMQ.includeZMQ.ipZMQ.isfreedZMQ.ismoreZMQ.jl_zmq_error_strZMQ.libzmqZMQ.ppZMQ.recvZMQ.sendZMQ.setZMQ.set_affinityZMQ.set_backlogZMQ.set_identityZMQ.set_ipv4onlyZMQ.set_lingerZMQ.set_maxmsgsizeZMQ.set_multicast_hopsZMQ.set_rateZMQ.set_rcvbufZMQ.set_rcvhwmZMQ.set_rcvtimeoZMQ.set_reconnect_ivlZMQ.set_reconnect_ivl_maxZMQ.set_recovery_ivlZMQ.set_sndbufZMQ.set_sndhwmZMQ.set_sndtimeoZMQ.set_subscribeZMQ.set_tcp_accept_filterZMQ.set_tcp_keepaliveZMQ.set_tcp_keepalive_cntZMQ.set_tcp_keepalive_idleZMQ.set_tcp_keepalive_intvlZMQ.set_typeZMQ.set_unsubscribeZMQ.showZMQ.subscribeZMQ.subscribe_ZMQ.szZMQ.termZMQ.u32pZMQ.u64pZMQ.u8apZMQ.unsubscribeZMQ.unsubscribe_ZMQ.versionZMQ.zmq_errno"
},

]}
