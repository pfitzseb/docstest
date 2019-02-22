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
    "text": "using ZMQ\n\ns1=Socket(REP)\ns2=Socket(REQ)\n\nbind(s1, \"tcp://*:5555\")\nconnect(s2, \"tcp://localhost:5555\")\n\nsend(s2, \"test request\")\nmsg = recv(s1, String)\nsend(s1, \"test response\")\nclose(s1)\nclose(s2)The send(socket, x) and recv(socket, SomeType) functions make an extra copy of the data when converting between ZMQ and Julia.   Alternatively, for large data sets (e.g. very large arrays or long strings), it can be preferable to share data, with send(socket, Message(x)) and msg = recv(Message), where the msg::Message object acts like an array of bytes; this involves some overhead so it may not be optimal for short messages.(Help in writing more detailed documentation would be welcome!)"
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "If you are using Windows and get an error Provider PackageManager failed to satisfy dependency zmq, you may need to restart Julia and run Pkg.build(\"ZMQ\") again. See issue #69 for more details."
},

{
    "location": "autodocs/#ZMQ.context",
    "page": "Docstrings",
    "title": "ZMQ.context",
    "category": "function",
    "text": "context()\n\nReturn the default ZMQ context (of type Context), initializing it if this has not been done already.  (This context is automatically closed when Julia exits.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Sockets.recv",
    "page": "Docstrings",
    "title": "Sockets.recv",
    "category": "function",
    "text": "recv(socket::Socket) :: Message\n\nReturn a Message object representing a message received from a ZMQ Socket (without making a copy of the message data).\n\n\n\n\n\nrecv(socket::Socket, ::Type{T})\n\nReceive a message of type T (typically a String, Vector{UInt8}, or isbits type) from a ZMQ Socket.   (Makes a copy of the message data; you can alternatively use recv(socket) to work with zero-copy bytearray-like representation for large messages.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Sockets.send",
    "page": "Docstrings",
    "title": "Sockets.send",
    "category": "function",
    "text": "send(socket::Socket, data; more=false)\n\nSend data over socket.  A more=true keyword argument can be passed to indicate that data is a portion of a larger multipart message. data can be any isbits type, a Vector of isbits elements, a String, or a Message object to perform zero-copy sends of large arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ZMQ.ContextZMQ.DEALERZMQ.DOWNSTREAMZMQ.FORWARDERZMQ.IO_THREADSZMQ.IPV6ZMQ.MAX_SOCKETSZMQ.MOREZMQ.MessageZMQ.PAIRZMQ.POLLERRZMQ.POLLINZMQ.POLLOUTZMQ.PUBZMQ.PULLZMQ.PUSHZMQ.QUEUEZMQ.REPZMQ.REQZMQ.ROUTERZMQ.SNDMOREZMQ.STREAMERZMQ.SUBZMQ.SocketZMQ.StateErrorZMQ.UPSTREAMZMQ.XPUBZMQ.XREPZMQ.XREQZMQ.XSUBZMQ.ZMQZMQ.ZMQ_DONTWAITZMQ.ZMQ_SNDMOREZMQ._MessageZMQ._MessageOrRefZMQ._MessageRefZMQ.__init__ZMQ.__zmq_getsockopt_rcvmoreZMQ._contextZMQ._ctx_newZMQ._getZMQ._get_affinityZMQ._get_backlogZMQ._get_eventsZMQ._get_fdZMQ._get_ipv4onlyZMQ._get_last_endpointZMQ._get_lingerZMQ._get_maxmsgsizeZMQ._get_multicast_hopsZMQ._get_rateZMQ._get_rcvbufZMQ._get_rcvhwmZMQ._get_rcvmoreZMQ._get_rcvtimeoZMQ._get_reconnect_ivlZMQ._get_reconnect_ivl_maxZMQ._get_recovery_ivlZMQ._get_routing_idZMQ._get_sndbufZMQ._get_sndhwmZMQ._get_sndtimeoZMQ._get_tcp_keepaliveZMQ._get_tcp_keepalive_cntZMQ._get_tcp_keepalive_idleZMQ._get_tcp_keepalive_intvlZMQ._get_typeZMQ._recv!ZMQ._sendZMQ._setZMQ._set_affinityZMQ._set_backlogZMQ._set_ipv4onlyZMQ._set_lingerZMQ._set_maxmsgsizeZMQ._set_multicast_hopsZMQ._set_rateZMQ._set_rcvbufZMQ._set_rcvhwmZMQ._set_rcvtimeoZMQ._set_reconnect_ivlZMQ._set_reconnect_ivl_maxZMQ._set_recovery_ivlZMQ._set_routing_idZMQ._set_sndbufZMQ._set_sndhwmZMQ._set_sndtimeoZMQ._set_tcp_keepaliveZMQ._set_tcp_keepalive_cntZMQ._set_tcp_keepalive_idleZMQ._set_tcp_keepalive_intvlZMQ._set_typeZMQ._zmq_getsockopt_rcvmoreZMQ.bindZMQ.check_depsZMQ.connectZMQ.contextZMQ.ctxoptsZMQ.depsjl_pathZMQ.evalZMQ.gc_free_fnZMQ.gc_protectZMQ.gc_protect_cbZMQ.gc_protect_handleZMQ.get_affinityZMQ.get_backlogZMQ.get_eventsZMQ.get_fdZMQ.get_identityZMQ.get_ipv4onlyZMQ.get_lingerZMQ.get_maxmsgsizeZMQ.get_multicast_hopsZMQ.get_rateZMQ.get_rcvbufZMQ.get_rcvhwmZMQ.get_rcvmoreZMQ.get_rcvtimeoZMQ.get_reconnect_ivlZMQ.get_reconnect_ivl_maxZMQ.get_recovery_ivlZMQ.get_sndbufZMQ.get_sndhwmZMQ.get_sndtimeoZMQ.get_tcp_keepaliveZMQ.get_tcp_keepalive_cntZMQ.get_tcp_keepalive_idleZMQ.get_tcp_keepalive_intvlZMQ.get_typeZMQ.includeZMQ.isfreedZMQ.ismoreZMQ.jl_zmq_error_strZMQ.libzmqZMQ.msg_initZMQ.msg_recvZMQ.msg_sendZMQ.propexpressionZMQ.recvZMQ.sendZMQ.setZMQ.set_affinityZMQ.set_backlogZMQ.set_identityZMQ.set_ipv4onlyZMQ.set_lingerZMQ.set_maxmsgsizeZMQ.set_multicast_hopsZMQ.set_rateZMQ.set_rcvbufZMQ.set_rcvhwmZMQ.set_rcvtimeoZMQ.set_reconnect_ivlZMQ.set_reconnect_ivl_maxZMQ.set_recovery_ivlZMQ.set_sndbufZMQ.set_sndhwmZMQ.set_sndtimeoZMQ.set_tcp_keepaliveZMQ.set_tcp_keepalive_cntZMQ.set_tcp_keepalive_idleZMQ.set_tcp_keepalive_intvlZMQ.set_typeZMQ.showZMQ.sockpropsZMQ.subscribeZMQ.subscribe_ZMQ.termZMQ.unsafe_copyZMQ.unsubscribeZMQ.unsubscribe_ZMQ.versionZMQ.zmq_errno"
},

]}
