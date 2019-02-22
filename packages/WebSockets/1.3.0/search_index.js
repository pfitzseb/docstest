var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WebSockets.jl-1",
    "page": "Readme",
    "title": "WebSockets.jl",
    "category": "section",
    "text": "Release version:(Image: WebSockets) (Image: Build Status)<!– Enable coverage when https://github.com/JuliaCI/Coverage.jl/issues/187 is resolved. (Image: Coverage Status)a –>Test coverage 96%Development version:(Image: WebSockets) (Image: Build Status) <!–(Image: Coverage Status) (Image: Appveyor)–>Test coverage 96%Server and client side Websockets protocol in Julia. WebSockets is a small overhead message protocol layered over TCP. It uses HTTP(S) for establishing the connections."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "In the package manager, add WebSockets. Then paste this into a REPL:julia> using WebSockets\n\njulia> serverWS = ServerWS(handler = (req) -> WebSockets.Response(200), wshandler = (ws_server) -> (writeguarded(ws_server, \"Hello\"); readguarded(ws_server)))\nServerWS(handler=<span>#</span>7(req), wshandler=<span>#</span>8(ws_server))\n\njulia> ta = @async WebSockets.with_logger(WebSocketLogger()) do\n                WebSockets.serve(serverWS, port = 8000)\n            end\nTask (runnable) @0x000000000fc91cd0\n\njulia> WebSockets.HTTP.get(\"http://127.0.0.1:8000\")\nHTTP.Messages.Response:\n\"\"\"\nHTTP/1.1 200 OK\nTransfer-Encoding: chunked\n\n\"\"\"\n\njulia> WebSockets.open(\"ws://127.0.0.1:8000\") do ws_client\n                  data, success = readguarded(ws_client)\n                  if success\n                      println(stderr, ws_client, \" received:\", String(data))\n                  end\n              end;\nWebSocket(client, CONNECTED) received:Hello\n\nWARNING: Workqueue inconsistency detected: popfirst!(Workqueue).state != :queued\n\njulia> put!(serverWS.in, \"close!\")\n\"close!\"\n\njulia> ta\nTask (done) @0x000000000fc91cd0\nAccess inline documentation and have a look at the examples folder! The testing files also demonstrate a variety of uses. Benchmarks show examples of websockets and servers running on separate processes, as oposed to asyncronous tasks."
},

{
    "location": "#About-this-package-1",
    "page": "Readme",
    "title": "About this package",
    "category": "section",
    "text": "Originally from 2013 and Julia 0.2, the WebSockets API has remained largely unchanged. It now depends on HTTP.jl for establishing the http connections. That package is in ambitious development, and most functionality of this package is already implemented directly in HTTP.jl.This more downstream package may lag behind the latest version of HTTP.jl, and in so doing perhaps avoid some borderline bugs. This is why the examples and tests do not import HTTP methods directly, but rely on the methods imported in this package. E.g. by using WebSockets.HTTP.listen instead of HTTP.listen you may possibly be using the previous release of package HTTP. The imported HTTP version is capped so as to avoid possible issues when new versions of HTTP are released."
},

{
    "location": "#What-can-you-do-with-it?-1",
    "page": "Readme",
    "title": "What can you do with it?",
    "category": "section",
    "text": "read and write between entities you can program or know about\nserve an svg file to the web browser, containing javascript for connecting back through a websocket, adding two-way interaction with graphics\nenjoy very low latency and high speed with a minimum of edge case coding\nimplement your own \'if X send this, Y do that\' subprotocols. Typically, one subprotocol for sensor input, another for graphics or text to a display.\nuse registered websocket subprotocols for e.g. remote controlled hardware\nrelay user interaction to backend simulations\nbuild a network including browser clients and long-running relay servers\nuse convenience functions for gatekeepingWebSockets are well suited for user interactions via a browser or cross-platform applications like electron. Workload and development time can be moved off Julia resources, error checking code can be reduced. Preferably use websockets for passing arguments, not code, between compiled functions on both sides; it has both speed and security advantages over passing code for evaluation."
},

{
    "location": "#Other-tips-1",
    "page": "Readme",
    "title": "Other tips",
    "category": "section",
    "text": "putting http handlers and websocket coroutines (\'handlers\') in the same process can be a security advantage. It is good practice to modify web page responses to include time-limited tokens in the address, the wsuri.\nSince read and readguared are blocking functions, you can easily end up reading indefinitely from any side of the connection. See the close function code for an example of non-blocking read with a timeout.\nCompression is not currenlty implemented, but easily adaptable. On local connections, there\'s probably not much to gain.\nIf you worry about milliseconds, TCP quirks like \'warm-up\' time with low transmission speed after a pause can be avoided with heartbeats. High-performance examples are missing.\nGarbage collection increases message latency at semi-random intervals, as is visible in  benchmark plots. Benchmarks should include non-memory-allocating examples.\nTime prefixes in e.g. @wslog is not accurate. To accurately track sequences of logging messages, include the time in your logging message."
},

{
    "location": "#Debugging-with-WebSockets.ServeWS-servers-1",
    "page": "Readme",
    "title": "Debugging with WebSockets.ServeWS servers",
    "category": "section",
    "text": "Error messages from run-time are directed to a .out channel. See inline docs: ?Websockets.serve. When using readguarded or writeguarded, errors are logged with @debug statements. Set the logging level of the logger you use to \'Debug\', as in \'examples/countwithlogger.jl\'."
},

{
    "location": "#Debugging-with-WebSockets.HTTP.listen-servers-1",
    "page": "Readme",
    "title": "Debugging with WebSockets.HTTP.listen servers",
    "category": "section",
    "text": "Error messages may be sent as messages to the client. This may not be good practice if you\'re serving pages to the internet, but nice while developing locally. There are some inline comments in the source code which may be of help."
},

{
    "location": "#Further-development-and-comments-1",
    "page": "Readme",
    "title": "Further development and comments",
    "category": "section",
    "text": "The issues section is used for planning development: Contributions are welcome.Version 1.3 integrates WebSocketLogger. It closely resembles ConsoleLogger from the Julia standard library. Additional features: see inline docs and \'examples/countwithlogger.jl\'. With this closer integration with Julia\'s core logging functionality, we also introduce @debug statements in readguarded and writeguarded (as well as when receiving \'ping\' or \'pong\'). The functions still return a boolean to indicate failure, but return no reason except the logger messages.\nThe /benchmark folder contain some code that is not currently working, pending logging facilities.\nAlternative Julia packages: DandelionWebSockets and the direct implementation in HTTP.jl."
},

{
    "location": "#Errors-after-updating?-1",
    "page": "Readme",
    "title": "Errors after updating?",
    "category": "section",
    "text": ""
},

{
    "location": "#To-version-1.3.0-1",
    "page": "Readme",
    "title": "To version 1.3.0",
    "category": "section",
    "text": "WebSockets additionaly exports WebSocketLogger, @wslog, Wslog."
},

{
    "location": "#To-version-1.1.0-1",
    "page": "Readme",
    "title": "To version 1.1.0",
    "category": "section",
    "text": "This version is driven by large restructuring in HTTP.jl. We import more functions and types into WebSockets, e.g., WebSockets.Request. The main interface does not, intentionally, change, except for \'origin\', which should now be qualified as WebSockets.origin."
},

{
    "location": "#To-version-0.5.0-1",
    "page": "Readme",
    "title": "To version 0.5.0",
    "category": "section",
    "text": "The introduction of client side websockets to this package in version 0.5.0 may require changes in your code:The WebSocket.id field is no longer supported. You can generate unique counters by code similar to \'bencmark/functionsopenbrowsers.jl\' COUNTBROWSER.\nYou may want to modify you error handling code. Examine WebSocketsClosedError.message.\nYou may want to use readguarded and writeguarded to save on error handling code.\nServer -> WebSockets.ServerWS\nWebSocketHandler -> WebSockets.WebsocketHandler (or just pass a function without wrapper)\nHttpHandler-> HTTP.HandlerFunction (or just pass a function without wrapper)\nrun -> serve\nResponse -> HTTP.Response\nRequest -> HTTP.ResponseYou may also want to consider using target, orginand subprotocol, which  are compatible with both of the types above.::::::::::::::::\n::            ::\n::  Made at   ::\n::            ::\n::::::::::::::::\n       ::\n Recurse Center\n::::::::::::::::"
},

{
    "location": "autodocs/#WebSockets.OPCODE_BINARY",
    "page": "Docstrings",
    "title": "WebSockets.OPCODE_BINARY",
    "category": "constant",
    "text": "%x2 denotes a binary frame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.OPCODE_CLOSE",
    "page": "Docstrings",
    "title": "WebSockets.OPCODE_CLOSE",
    "category": "constant",
    "text": "%x8 denotes a connection close\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.OPCODE_CONTINUATION",
    "page": "Docstrings",
    "title": "WebSockets.OPCODE_CONTINUATION",
    "category": "constant",
    "text": "%x0 denotes a continuation frame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.OPCODE_PING",
    "page": "Docstrings",
    "title": "WebSockets.OPCODE_PING",
    "category": "constant",
    "text": "%x9 denotes a ping\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.OPCODE_PONG",
    "page": "Docstrings",
    "title": "WebSockets.OPCODE_PONG",
    "category": "constant",
    "text": "%xA denotes a pong\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.OPCODE_TEXT",
    "page": "Docstrings",
    "title": "WebSockets.OPCODE_TEXT",
    "category": "constant",
    "text": "%x1 denotes a text frame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.SUBProtocols",
    "page": "Docstrings",
    "title": "WebSockets.SUBProtocols",
    "category": "constant",
    "text": "Handshakes with subprotocols are rejected by default. Add to acceptable SUBProtocols through e.g.\n\n   addsubproto(\"json\")\n\nAlso see function subprotocol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.ServerWS",
    "page": "Docstrings",
    "title": "WebSockets.ServerWS",
    "category": "type",
    "text": "WebSockets.ServerWS(handler::Function, wshandler::Function, logger::IO)\n\nWebSockets.ServerWS is an argument type for WebSockets.serve. Instances include .in  and .out channels, see WebSockets.serve.\n\nServer options can be set using keyword arguments, see methods(WebSockets.ServerWS)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.TIMEOUT_CLOSEHANDSHAKE",
    "page": "Docstrings",
    "title": "WebSockets.TIMEOUT_CLOSEHANDSHAKE",
    "category": "constant",
    "text": "A reasonable amount of time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.WebSocket",
    "page": "Docstrings",
    "title": "WebSockets.WebSocket",
    "category": "type",
    "text": "A WebSocket is a wrapper over a TCPSocket. It takes care of wrapping outgoing data in a frame and unwrapping (and concatenating) incoming data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.WebSocketFragment",
    "page": "Docstrings",
    "title": "WebSockets.WebSocketFragment",
    "category": "type",
    "text": "Represents one (received) message frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.WebSocketLogger",
    "page": "Docstrings",
    "title": "WebSockets.WebSocketLogger",
    "category": "type",
    "text": "Differences to stdlib/Logging/ConsoleLogger:\n\n- default timestamp on logging messages (except @info)\n- a \'shouldlog\' function can be passed in. The `shouldlog_default` function filters\n    on HTTP.Servers messages as well as on message_limits\n- :wslog => true flag which may be used for context-sensitive output\n    from \'show\' methods. This means a user can define \'show\' methods\n    which are used with this logger without affecting the behaviour\n    defined in other modules.\n- :limited => true is included in the default IOContext. Keyword: show_limited\n- string_with_env_ws is exported for easy overloading on specific types\n- @info, @debug, @warn etc. will splat the first argument if it\'s a tuple arguments, e.g.\n\njulia> var = \"a\"\n\"a\"\njulia> @info (1, var)\n[ Info: 1a\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.WebSockets",
    "page": "Docstrings",
    "title": "WebSockets.WebSockets",
    "category": "module",
    "text": "WebSockets\n\nThis module implements the WebSockets protocol. It relies on the package HTTP.jl.\n\nWebsocket|server relies on a client initiating the connection. Websocket|client initiate the connection.\n\nThe client side of the connection is most typically a browser with scripts enabled. Browsers are always the initiating, client side. But the peer can be any program, in any language, that follows the protocol. That includes another Julia session, running in a parallel process or task.\n\nFuture improvements:\n\nCheck rsv1 to rsv3 values. This will reduce bandwidth.\nOptimize maskswitch!, possibly threaded above a certain limit.\nSplit messages over several frames.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.WebsocketHandler",
    "page": "Docstrings",
    "title": "WebSockets.WebsocketHandler",
    "category": "type",
    "text": "WebsocketHandler(f::Function) <: Handler\n\nThe provided argument should be one of the forms     f(WebSocket) => nothing     f(Request, WebSocket) => nothing The latter form is intended for gatekeeping, ref. RFC 6455 section 10.1\n\nf accepts a WebSocket and does interesting things with it, like reading, writing and exiting when finished.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets._openstream",
    "page": "Docstrings",
    "title": "WebSockets._openstream",
    "category": "function",
    "text": "Called by open with a stream connected to a server, after handshake is initiated\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets._uv_status_tuple",
    "page": "Docstrings",
    "title": "WebSockets._uv_status_tuple",
    "category": "function",
    "text": "For colorful printing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.addsubproto",
    "page": "Docstrings",
    "title": "WebSockets.addsubproto",
    "category": "function",
    "text": "Used to specify acceptable subprotocols. See SUBProtocols\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.check_upgrade",
    "page": "Docstrings",
    "title": "WebSockets.check_upgrade",
    "category": "function",
    "text": "Throws WebSocketError if the upgrade message is not basically valid. Called from \'upgrade\' for potential server side websockets, and from `_openstream\' for potential client side websockets. Not normally called from user code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.checkratelimit!",
    "page": "Docstrings",
    "title": "WebSockets.checkratelimit!",
    "category": "function",
    "text": "\'checkratelimit!\' updates a dictionary of IP addresses which keeps track of their connection quota per time window.\n\nThe allowed connections per time is given in keyword argument ratelimit.\n\nThe actual ratelimit::Rational value, is normally given as a field value in ServerOpions.\n\n\'checkratelimit!\' is the default rate limiting function for ServerWS, which passes it as the \'tcpisvalid\' argument to \'WebSockets.HTTP.listen\'. Other functions can be given as a keyword argument, as long as they adhere to this form, which WebSockets.HTTP.listen expects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.close",
    "page": "Docstrings",
    "title": "Base.close",
    "category": "function",
    "text": "close(ws::WebSocket)\nclose(ws::WebSocket, statusnumber = n)\nclose(ws::WebSocket, statusnumber = n, freereason = \"my reason\")\n\nSend an OPCODE_CLOSE frame, and wait for the same response or until a reasonable amount of time, 10.0 s, has passed. Data received while closing is dropped. Status number n according to RFC 6455 7.4.1 can be included, see WebSockets.codeDesc\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.codeDesc",
    "page": "Docstrings",
    "title": "WebSockets.codeDesc",
    "category": "constant",
    "text": "Status codes according to RFC 6455 7.4.1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.default_metaformat",
    "page": "Docstrings",
    "title": "WebSockets.default_metaformat",
    "category": "function",
    "text": "Defines a default logging message format with timestamp\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.generate_websocket_key",
    "page": "Docstrings",
    "title": "WebSockets.generate_websocket_key",
    "category": "function",
    "text": "WebSocket Handshake Procedure\n\ngenerate_websocket_key(key) transforms a websocket client key into the server\'s accept value. This is done in three steps:\n\nConcatenate key with magic string from RFC.\nSHA1 hash the resulting base64 string.\nEncode the resulting number in base64.\n\nThis function then returns the string of the base64-encoded value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.handle_control_frame",
    "page": "Docstrings",
    "title": "WebSockets.handle_control_frame",
    "category": "function",
    "text": "Respond to pings, ignore pongs, respond to close.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.hasprotocol",
    "page": "Docstrings",
    "title": "WebSockets.hasprotocol",
    "category": "function",
    "text": "Used in handshake. See SUBProtocols\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.init_socket",
    "page": "Docstrings",
    "title": "WebSockets.init_socket",
    "category": "function",
    "text": "Buffer writes to socket till flush (sock)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.is_control_frame",
    "page": "Docstrings",
    "title": "WebSockets.is_control_frame",
    "category": "function",
    "text": "Control frames have opcodes with the highest bit = 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.is_upgrade",
    "page": "Docstrings",
    "title": "WebSockets.is_upgrade",
    "category": "function",
    "text": "Fast checking for websocket upgrade request vs content requests. Called on all new connections in \'_servercoroutine\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.locked_write",
    "page": "Docstrings",
    "title": "WebSockets.locked_write",
    "category": "function",
    "text": "Write without interruptions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.maskswitch!",
    "page": "Docstrings",
    "title": "WebSockets.maskswitch!",
    "category": "function",
    "text": "maskswitch!(data)\nmaskswitch!(data, key:: 4-element Vector{UInt8})\n\nMasks or unmasks data in-place, returns the key used. Calling twice with the same key restores data. Ref. RFC 6455 5-3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.open",
    "page": "Docstrings",
    "title": "WebSockets.open",
    "category": "function",
    "text": "Initiate a websocket|client connection to server defined by url. If the server accepts the connection and the upgrade to websocket, f is called with an open websocket|client\n\ne.g. say hello, close and leave\n\nusing WebSockets\nWebSockets.open(\"ws://127.0.0.1:8000\") do ws\n    write(ws, \"Hello\")\n    println(\"that\'s it\")\nend;\n\nIf a server is listening and accepts, \"Hello\" is sent (as a Vector{UInt8}).\n\nOn exit, a closing handshake is started. If the server is not currently reading (which is a blocking function), this side will reset the underlying connection (ECONNRESET) after a reasonable amount of time and continue execution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.origin",
    "page": "Docstrings",
    "title": "WebSockets.origin",
    "category": "function",
    "text": "origin(request) => String Convenience function for checking which server / port address the client claims its code was downloaded from. The resource path can be found with target(req). E.g.\n\nfunction gatekeeper(req, ws)\n    orig = WebSockets.origin(req)\n        if startswith(orig, \"http://localhost\") || startswith(orig, \"http://127.0.0.1\")\n            handlewebsocket(ws)\n        end\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.read",
    "page": "Docstrings",
    "title": "Base.read",
    "category": "function",
    "text": "read(ws::WebSocket)\n\nTypical use:     msg = String(read(ws)) Read one non-control message from a WebSocket. Any control messages that are read will be handled by the handlecontrolframe function. Only the data (contents/body/payload) of the message will be returned as a Vector{UInt8}.\n\nThis function will not return until a full non-control message has been read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.read_frame",
    "page": "Docstrings",
    "title": "WebSockets.read_frame",
    "category": "function",
    "text": "Read a frame: turn bytes from the websocket into a WebSocketFragment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.readframe_nonblocking",
    "page": "Docstrings",
    "title": "WebSockets.readframe_nonblocking",
    "category": "function",
    "text": "For the closing handshake, we won\'t wait indefinitely for non-responsive clients. Returns a throwaway frame if the socket happens to be empty\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.readguarded",
    "page": "Docstrings",
    "title": "WebSockets.readguarded",
    "category": "function",
    "text": "readguarded(websocket) => (Vector, Bool)\n\nReturn (data::Vector, true)         or         (Vector{UInt8}(), false)\n\nThe peer can potentially disconnect at any time, but no matter the cause you will usually just want to exit your websocket handling function when you can\'t write to it.\n\nE.g.\n\nwhile true\n    data, success = readguarded(websocket)\n    !success && break\n    println(String(data))\nend\n\nTo check the errors (if you get any), temporarily set loging min_level to Logging.debug, e.g:\n\nusing WebSockets, Logging\nglobal_logger(WebSocketLogger(stderr, Logging.Debug));\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.send_ping",
    "page": "Docstrings",
    "title": "WebSockets.send_ping",
    "category": "function",
    "text": "Send a ping message, optionally with data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.send_pong",
    "page": "Docstrings",
    "title": "WebSockets.send_pong",
    "category": "function",
    "text": "Send a pong message, optionally with data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.serve",
    "page": "Docstrings",
    "title": "WebSockets.serve",
    "category": "function",
    "text": "WebSockets.serve(server::ServerWS, port)\nWebSockets.serve(server::ServerWS, host, port)\nWebSockets.serve(server::ServerWS, host, port, verbose)\n\nA wrapper for WebSockets.HTTP.listen. Puts any caught error and stacktrace on the server.out channel. To stop a running server, put a byte on the server.in channel.\n\n    @async WebSockets.serve(server, \"127.0.0.1\", 8080)\n\nAfter a suspected connection task failure:\n\n    if isready(myserver_WS.out)\n        stack_trace = take!(myserver_WS.out)\n    end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.shouldlog_default",
    "page": "Docstrings",
    "title": "WebSockets.shouldlog_default",
    "category": "function",
    "text": "Early filtering of messages based on message id limits, silencing of HTTP.Servers if defined\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.string_with_env_ws",
    "page": "Docstrings",
    "title": "WebSockets.string_with_env_ws",
    "category": "function",
    "text": "Context-aware text representation of the first argument to logging macros. Made easily available for overloading on specific types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.subprotocol",
    "page": "Docstrings",
    "title": "WebSockets.subprotocol",
    "category": "function",
    "text": "subprotocol(request) => String\n\nConvenience function for reading upgrade request subprotocol. Acceptable subprotocols need to be predefined using addsubproto(myprotocol). No other subprotocols will pass the handshake. E.g.\n\nWebSockets.addsubproto(\"instructions\")\nWebSockets.addsubproto(\"relay_backend\")\nfunction gatekeeper(req, ws)\n    subpr = WebSockets.subprotocol(req)\n    if subpr == \"instructions\"\n        instructions(ws)\n    elseif subpr == \"relay_backend\"\n        relay_backend(ws)\n    end\nend\n\nThen, in browser javascript (or equivalent with Julia WebSockets.open( , ))\n\nfunction load(){\n    var wsuri = document.URL.replace(\"http:\", \"ws:\");\n    ws1 = new WebSocket(wsuri, \"instructions\");\n    ws2 = new WebSocket(wsuri, \"relay_backend\");\n    ws1.onmessage = function(e){doinstructions(e.data)};\n    ...\n    } // load\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.target",
    "page": "Docstrings",
    "title": "WebSockets.target",
    "category": "function",
    "text": "target(request) => String\n\nConvenience function for reading upgrade request target.     E.g.\n\n    function gatekeeper(req, ws)\n        if target(req) == \"/gamepad\"\n            @spawnat 2 gamepad(ws)\n        elseif target(req) == \"/console\"\n            @spawnat 3 console(ws)\n            ...\n        end\n    end\n\nThen, in browser javascript (or equivalent with Julia WebSockets.open( , ))\n\nfunction load(){\n    var wsuri = document.URL.replace(\"http:\", \"ws:\");\n    ws1 = new WebSocket(wsuri + \"/gamepad\");\n    ws2 = new WebSocket(wsuri + \"/console\");\n    ws3 = new WebSocket(wsuri + \"/graphics\");\n    ws4 = new WebSocket(wsuri + \"/audiochat\");\n    ws1.onmessage = function(e){vibrate(e.data)}\n    } // load\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.upgrade",
    "page": "Docstrings",
    "title": "WebSockets.upgrade",
    "category": "function",
    "text": "Used as part of a server definition. Call this if is_upgrade(stream.message) returns true.\n\nResponds to a WebSocket handshake request. If the connection is acceptable, sends status code 101 and headers according to RFC 6455, then calls user\'s handler function f with the connection wrapped in a WebSocket instance.\n\nf(ws)           is called with the websocket and no client info f(headers, ws)  also receives a dictionary of request headers for added security measures\n\nOn exit from f, a closing handshake is started. If the client is not currently reading (which is a blocking function), this side will reset the underlying connection (ECONNRESET) after a reasonable amount of time and continue execution.\n\nIf the upgrade is not accepted, responds to client with \'400\'.\n\ne.g. server with local error handling. Combine with WebSocket.open example.\n\nusing WebSockets\n\nbadgatekeeper(reqdict, ws) = sqrt(-2)\nhandlerequest(req) = WebSockets.Response(501)\nconst SERVERREF = Ref{Base.IOServer}()\ntry\n    WebSockets.HTTP.listen(\"127.0.0.1\", UInt16(8000), tcpref = SERVERREF) do stream\n        if WebSockets.is_upgrade(stream.message)\n            WebSockets.upgrade(badgatekeeper, stream)\n        else\n            WebSockets.handle_request(handlerequest, stream)\n        end\n    end\ncatch err\n    showerror(stderr, err)\n    println.(stacktrace(catch_backtrace())[1:4])\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.write",
    "page": "Docstrings",
    "title": "Base.write",
    "category": "function",
    "text": "Write text data; will be sent as one frame.\n\n\n\n\n\nWrite binary data; will be sent as one frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.write_fragment",
    "page": "Docstrings",
    "title": "WebSockets.write_fragment",
    "category": "function",
    "text": "write_fragment(io, islast, opcode, hasmask, data::Array{UInt8})\n\nWrite the raw frame to a bufffer. Websocket|client must set \'hasmask\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebSockets.writeguarded",
    "page": "Docstrings",
    "title": "WebSockets.writeguarded",
    "category": "function",
    "text": "writeguarded(websocket, message) => Bool\n\nReturn true if write is successful, false if not. The peer can potentially disconnect at any time, but no matter the cause you will usually just want to exit your websocket handling function when you can\'t write to it.\n\nTo check the errors (if you get any), temporarily set loging min_level to Logging.debug, e.g:\n\nusing WebSockets, Logging\nglobal_logger(WebSocketLogger(stderr, Logging.Debug));\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WebSockets.@wslogWebSockets.CLOSEDWebSockets.CLOSINGWebSockets.CONNECTEDWebSockets.DtWebSockets.OPCODE_BINARYWebSockets.OPCODE_CLOSEWebSockets.OPCODE_CONTINUATIONWebSockets.OPCODE_PINGWebSockets.OPCODE_PONGWebSockets.OPCODE_TEXTWebSockets.ReadyStateWebSockets.SUBProtocolsWebSockets.ServerOptionsWebSockets.ServerWSWebSockets.TIMEOUT_CLOSEHANDSHAKEWebSockets.WebSocketWebSockets.WebSocketClosedErrorWebSockets.WebSocketErrorWebSockets.WebSocketFragmentWebSockets.WebSocketLoggerWebSockets.WebSocketsWebSockets.WebsocketHandlerWebSockets.WslogWebSockets._openstreamWebSockets._showWebSockets._uv_status_tupleWebSockets.addsubprotoWebSockets.check_upgradeWebSockets.checkratelimit!WebSockets.closeWebSockets.codeDescWebSockets.default_metaformatWebSockets.evalWebSockets.generate_websocket_keyWebSockets.handle_control_frameWebSockets.hasprotocolWebSockets.includeWebSockets.init_socketWebSockets.is_control_frameWebSockets.is_upgradeWebSockets.locked_writeWebSockets.maskswitch!WebSockets.openWebSockets.originWebSockets.readWebSockets.read_frameWebSockets.readframe_nonblockingWebSockets.readguardedWebSockets.send_pingWebSockets.send_pongWebSockets.serveWebSockets.shouldlog_defaultWebSockets.string_with_env_wsWebSockets.subprotocolWebSockets.targetWebSockets.upgradeWebSockets.writeWebSockets.write_fragmentWebSockets.write_pingWebSockets.write_pongWebSockets.writeguarded"
},

]}
