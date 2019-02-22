var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DandelionWebSockets-1",
    "page": "Readme",
    "title": "DandelionWebSockets",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)DandelionWebSockets is a client side WebSocket package."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Create a subtype of WebSocketHandler, with callbacks for WebSocket events. Create a WSClient and connect to a WebSocket server. The type WebSocketConnection represents a connection, and is used to send messages and close the connection. The connection object is supplied in the state_connection(::WebSocketHandler, ::WebSocketConnection) callback, which is always the first callback.using DandelionWebSockets\nimport DandelionWebSockets: on_text, on_binary\nimport DandelionWebSockets: state_connecting, state_open,\n                            state_closing, state_closed\n\nmutable struct MyHandler <: WebSocketHandler\n    # The connection is only available once `state_connecting` has been called.\n    connection::Union{WebSocketConnection, Nothing}\nend\n\n# These are called when you get a text or binary frame, respectively.\non_text(handler::MyHandler, text::String) = ...\non_binary(handler::MyHandler, data::Vector{UInt8}) = ...\n\n# These are called when the state of the WebSocket changes.\nstate_connecting(handler::MyHandler, connection::WebSocketConnection) = ...\nstate_open(handler::MyHandler)       = ...\nstate_closing(handler::MyHandler)    = ...\nstate_closed(handler::MyHandler)     = ...The following functions are available on WebSocketConnection, to send frames to the server.send_text(c::WebSocketConnection, s::String)\nsend_binary(c::WebSocketConnection, data::Vector{UInt8})\n\n# Close the WebSocket.\nstop(c::WebSocketConnection)\n\n# Send a multi-frame text message\ntextsender = sendmultiframetext(connection)\nsendframe(textsender, \"Hello\")\nsendframe(textsender, \"world\")\nsendframe(textsender, \"Goodbye.\"; isfinal=true)\n\n# Send a multi-frame binary message\nbinarysender = sendmultiframebinary(connection)\nsendframe(binarysender, b\"Hello\")\nsendframe(binarysender, b\"world\")\nsendframe(binarysender, b\"Goodbye.\"; isfinal=true)To connect to a WebSocket server, call wsconnect(client::WSClient, uri::URI, handler::WebSocketHandler).For the full example code, please check out examples/echo.jl."
},

{
    "location": "#Interface-changes-1",
    "page": "Readme",
    "title": "Interface changes",
    "category": "section",
    "text": "Alongside (but unrelated to) the update to Julia 0.7/1.0, the interface has changed some. Instead of using the WSClient type to send messages, a type WebSocketConnection is used. This makes more sense, as a client could (though not supported yet) create several connections. Because a connection needs a handler, and a handler needs a connection to send messages, the actual connection object is now supplied in the state_connecting(::WebSocketHandler, ::WebSocketConnection) callback. This will always be the first callback. Therefore, the connection can be stored in a Union{WebSocketConnection, Nothing} field, and set only after state_connecting(..) has been called.So, in short, changestruct MyHandler <: WebSocketHandler\n    client::WSClient\nend\n\nstate_connecting(::MyHandler) = ...tomutable struct MyHandler <: WebSocketHandler\n    connection::Union{WebSocketConnection, Nothing}\nend\n\nstate_connecting(handler::MyHandler, connection::WebSocketConnection) = handler.connection = connectionThe sending methods all take a WebSocketConnection argument instead of a WSClient now."
},

{
    "location": "#Note-on-I/O-and-thread-safety-1",
    "page": "Readme",
    "title": "Note on I/O and thread safety",
    "category": "section",
    "text": "Note that print and I/O functions are not thread safe in Julia. Using them in the message and state callbacks (as is currently done in the examples) may lead to unexpected behaviour, or crashes. See https://github.com/JuliaLang/julia/issues/17388 for more details.Thank you to @alessandrousseglioviretta for bringing up this issue."
},

{
    "location": "#Note-on-SSL-1",
    "page": "Readme",
    "title": "Note on SSL",
    "category": "section",
    "text": "At the moment, SSL is not functioning, due to moving from Requests.jl to HTTP.jl. This is presumably just a matter of fixing a minor issue, as HTTP.jl does have SSL support."
},

{
    "location": "#Releases-and-Julia-1",
    "page": "Readme",
    "title": "Releases and Julia",
    "category": "section",
    "text": "This package is now registered with Julias package manager. Please only use version 0.1.1 and higher. Version 0.1.0 contains three serious bugs, which were fixed for 0.1.1."
},

{
    "location": "#Julia-0.7/1.0-1",
    "page": "Readme",
    "title": "Julia 0.7/1.0",
    "category": "section",
    "text": "Migration to Julia 1.0 is nearly complete. A new release will be available soon.Before the migration is complete, there is a PR to an upstream package that must be accepted, or I must configure the dependencies to use a patched version instead of the latest release."
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "These brave people have contributed to this package:@hlaaftana\n@TotalVerb\n@iblis17"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "DandelionWebSockets is licensed under the MIT license."
},

{
    "location": "autodocs/#DandelionWebSockets.@expect",
    "page": "Docstrings",
    "title": "DandelionWebSockets.@expect",
    "category": "macro",
    "text": "Expect a call with some arguments, and perform an action when that call has been made..\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.@mock",
    "page": "Docstrings",
    "title": "DandelionWebSockets.@mock",
    "category": "macro",
    "text": "Define a mock type, given a symbol for its name and a type from which it should inherit.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.@mockfunction",
    "page": "Docstrings",
    "title": "DandelionWebSockets.@mockfunction",
    "category": "macro",
    "text": "Define one or more functions that mock the behaviour the object should have.\n\nThe functions defined here are the functions called by the code under test. The functions check that their arguments match those that are expected, and that the mock action is performed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.AbnormalNoCloseResponseReceived",
    "page": "Docstrings",
    "title": "DandelionWebSockets.AbnormalNoCloseResponseReceived",
    "category": "type",
    "text": "No Close frame response was received by the client after a reasonable time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.AbnormalSocketNotClosedByServer",
    "page": "Docstrings",
    "title": "DandelionWebSockets.AbnormalSocketNotClosedByServer",
    "category": "type",
    "text": "The socket did not close the socket in a reasonable timeframe.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.AbstractHandshakeResult",
    "page": "Docstrings",
    "title": "DandelionWebSockets.AbstractHandshakeResult",
    "category": "type",
    "text": "AbstractHandshakeResult is a  supertype for either a successful or an unsuccessful handshake.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.AbstractMatcher",
    "page": "Docstrings",
    "title": "DandelionWebSockets.AbstractMatcher",
    "category": "type",
    "text": "Abstract type for objects that match actual arguments against expected arguments. For instance, we sometimes don\'t care what value is provided a mock function, only what type it is. Also, this can be used to parse an actual argument as JSON and compare the resulting object, rather than relying on a string comparison.\n\nAll AbstractMatcher types T must define a function mock_match(::T, v::Any).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.Backoff",
    "page": "Docstrings",
    "title": "DandelionWebSockets.Backoff",
    "category": "type",
    "text": "A backoff that follows a atan curve, and reaches about 90% of max backoff in 12 attempts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.BadHandshake",
    "page": "Docstrings",
    "title": "DandelionWebSockets.BadHandshake",
    "category": "type",
    "text": "BadHandshake is returned when an unsuccessful handshake has been made.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.BinaryFrameSender",
    "page": "Docstrings",
    "title": "DandelionWebSockets.BinaryFrameSender",
    "category": "type",
    "text": "FrameSender is used to send multi-frame messages.\n\nYou are provided a FrameSender via the client. You then send data using the sendframe(sender, data; isfinal=false) method. For the last frame you set isfinal = true.\n\nAfter the last frame has been sent, you MAY NOT use the FrameSender again. Trying to send another frame with the same instance of FrameSender WILL lead to an exception of type FinalFrameAlreadySentException.\n\nNOTE: While you have a FrameSender in which you have not sent the last frame, then       you MAY NOT use the client to send any other messages. Interleaving messages is       prohibited by the WebSocket protocol and will lead to the socket being closed.\n\nNOTE: You may send frames that are individually invalid UTF-8. However, the complete message, which       is all frames concatenated, MUST be valid UTF-8, or the other endpoint is required to fail       the WebSocket connection.       With the TextFrameSender you can use both a String or a Vector{UInt8} as the payload.       The Vector{UInt8} alternative can be used to send invalid UTF-8, or possibly invalid UTF-8.\n\nExample\n\nsender = sendmultiframetext(client)\nsendframe(sender, \"Hello\")\nsendframe(sender, \"world\")\nsendframe(sender, \"Goodbye\"; isfinal=true)\n\nExample\n\nsender = sendmultiframebinary(client)\nsendframe(sender, b\"Hello\")\nsendframe(sender, b\"world\")\nsendframe(sender, b\"Goodbye\"; isfinal=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.ClientInitiatedCloseBehaviour",
    "page": "Docstrings",
    "title": "DandelionWebSockets.ClientInitiatedCloseBehaviour",
    "category": "type",
    "text": "Closing the WebSocket connection is a procedure for closing the connection during the normal course the protocol lifetime.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.ClientPingRequest",
    "page": "Docstrings",
    "title": "DandelionWebSockets.ClientPingRequest",
    "category": "type",
    "text": "Send a ping request to the server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.ClientProtocol",
    "page": "Docstrings",
    "title": "DandelionWebSockets.ClientProtocol",
    "category": "type",
    "text": "Type for the logic of a client WebSocket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.ClientProtocolInput",
    "page": "Docstrings",
    "title": "DandelionWebSockets.ClientProtocolInput",
    "category": "type",
    "text": "Abstract type for all commands sent to ClientProtocol.\n\nThese commands are sent as arguments to the different handle functions on ClientProtocol. Each command represents an action on a WebSocket, such as sending a text frame, ping request, or closing the connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.CloseRequest",
    "page": "Docstrings",
    "title": "DandelionWebSockets.CloseRequest",
    "category": "type",
    "text": "A request to close the WebSocket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.CloseStatus",
    "page": "Docstrings",
    "title": "DandelionWebSockets.CloseStatus",
    "category": "type",
    "text": "CloseStatusCode indicates a reason for closing the connection. It is optionally sent as the first two bytes of a Close frames payload.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.FailTheConnectionBehaviour",
    "page": "Docstrings",
    "title": "DandelionWebSockets.FailTheConnectionBehaviour",
    "category": "type",
    "text": "Failing the WebSocket connection is an action taken at certain points in the protocol specification, in response to error conditions.\n\nThe closing behaviour is to optionally send a Close frame, with an appropriate status code, and then close the socket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.FinalFrameAlreadySentException",
    "page": "Docstrings",
    "title": "DandelionWebSockets.FinalFrameAlreadySentException",
    "category": "type",
    "text": "FinalFrameAlreadySentException is thrown when sendframe is called again after the last frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.FrameFromServer",
    "page": "Docstrings",
    "title": "DandelionWebSockets.FrameFromServer",
    "category": "type",
    "text": "A frame was received from the server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.FrameSender",
    "page": "Docstrings",
    "title": "DandelionWebSockets.FrameSender",
    "category": "type",
    "text": "FrameSender is used to send multi-frame messages.\n\nYou are provided a FrameSender via the client. You then send data using the sendframe(sender, data; isfinal=false) method. For the last frame you set isfinal = true.\n\nAfter the last frame has been sent, you MAY NOT use the FrameSender again. Trying to send another frame with the same instance of FrameSender WILL lead to an exception of type FinalFrameAlreadySentException.\n\nNOTE: While you have a FrameSender in which you have not sent the last frame, then       you MAY NOT use the client to send any other messages. Interleaving messages is       prohibited by the WebSocket protocol and will lead to the socket being closed.\n\nNOTE: You may send frames that are individually invalid UTF-8. However, the complete message, which       is all frames concatenated, MUST be valid UTF-8, or the other endpoint is required to fail       the WebSocket connection.       With the TextFrameSender you can use both a String or a Vector{UInt8} as the payload.       The Vector{UInt8} alternative can be used to send invalid UTF-8, or possibly invalid UTF-8.\n\nExample\n\nsender = sendmultiframetext(client)\nsendframe(sender, \"Hello\")\nsendframe(sender, \"world\")\nsendframe(sender, \"Goodbye\"; isfinal=true)\n\nExample\n\nsender = sendmultiframebinary(client)\nsendframe(sender, b\"Hello\")\nsendframe(sender, b\"world\")\nsendframe(sender, b\"Goodbye\"; isfinal=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.FrameWriter",
    "page": "Docstrings",
    "title": "DandelionWebSockets.FrameWriter",
    "category": "type",
    "text": "FrameWriter is used by the protocols to write frames to a socket.\n\nThis is separate from the client protocol code, because the protocol for closing a connection is separate from the rest of the client protocol, and both need to send frames.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.GoodHandshake",
    "page": "Docstrings",
    "title": "DandelionWebSockets.GoodHandshake",
    "category": "type",
    "text": "GoodHandshake is returned when a successful handshake has been made.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.HTTPAdapter",
    "page": "Docstrings",
    "title": "DandelionWebSockets.HTTPAdapter",
    "category": "type",
    "text": "HTTPAdapter is an abstract type for an HTTP package that can be used for a handshake GET.\n\nAny subtype of HTTPAdapter should implement the dohandshake method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.HTTPHandshake",
    "page": "Docstrings",
    "title": "DandelionWebSockets.HTTPHandshake",
    "category": "type",
    "text": "HTTPHandshake implements the HTTP handshake from the WebSocket specification.\n\nIt requires a random number generator to generate the WebSocket random key used to verify that the other side is actually a WebSocket server. The HTTPAdapter supplied implements the actual HTTP GET request, which returns an HTTPUpgradeResponse.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.HTTPUpgradeResponse",
    "page": "Docstrings",
    "title": "DandelionWebSockets.HTTPUpgradeResponse",
    "category": "type",
    "text": "HTTPUpgradeResponse is a collection of data returned by a HTTP upgrade, regardless of package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.MockCall",
    "page": "Docstrings",
    "title": "DandelionWebSockets.MockCall",
    "category": "type",
    "text": "An expected function call, along with expected arguments, and an action it should perform.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.MockExpectationException",
    "page": "Docstrings",
    "title": "DandelionWebSockets.MockExpectationException",
    "category": "type",
    "text": "An exception thrown when an unexpected argument was found or a function was called.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.PongMissed",
    "page": "Docstrings",
    "title": "DandelionWebSockets.PongMissed",
    "category": "type",
    "text": "A pong reply was expected, but never received.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.RandomizedBackoff",
    "page": "Docstrings",
    "title": "DandelionWebSockets.RandomizedBackoff",
    "category": "type",
    "text": "Randomize another backoff by adding some randomness to the backoff time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.Retry",
    "page": "Docstrings",
    "title": "DandelionWebSockets.Retry",
    "category": "type",
    "text": "Start a timer for some function, based on a backoff.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.SendBinaryFrame",
    "page": "Docstrings",
    "title": "DandelionWebSockets.SendBinaryFrame",
    "category": "type",
    "text": "Send a binary frame, sent to ClientProtocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.SendTextFrame",
    "page": "Docstrings",
    "title": "DandelionWebSockets.SendTextFrame",
    "category": "type",
    "text": "Send a text frame, sent to ClientProtocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.ServerInitiatedCloseBehaviour",
    "page": "Docstrings",
    "title": "DandelionWebSockets.ServerInitiatedCloseBehaviour",
    "category": "type",
    "text": "The server can initiate a Close, in which case this behaviour ensures a proper close.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.ServerReader",
    "page": "Docstrings",
    "title": "DandelionWebSockets.ServerReader",
    "category": "type",
    "text": "Reading from a network socket and placing the resulting frame on a channel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.SocketClosed",
    "page": "Docstrings",
    "title": "DandelionWebSockets.SocketClosed",
    "category": "type",
    "text": "Used when the underlying network socket was closed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.SocketState",
    "page": "Docstrings",
    "title": "DandelionWebSockets.SocketState",
    "category": "type",
    "text": "Enum value for the different states a WebSocket can be in.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.StopTaskException",
    "page": "Docstrings",
    "title": "DandelionWebSockets.StopTaskException",
    "category": "type",
    "text": "An exception thrown into a task in order to stop it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.TLSBufferedIO",
    "page": "Docstrings",
    "title": "DandelionWebSockets.TLSBufferedIO",
    "category": "type",
    "text": "TLSBufferedIO adapts a TLS socket so we can do byte I/O.\n\nThe stream returned by MbedTLS when using a TLS socket does not support the byte I/O used when reading a frame. It only supports reading a chunk of data. This is a fake stream that buffers some data and lets us do byte I/O.\n\nNote: This should have been done by the BufferedStreams.jl package. However, I couldn\'t get it to work with the MbedTLS stream, for reasons unknown. If we can investigate and fix that problem, then we should really replace this type with a BufferedInputStream.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.TextFrameSender",
    "page": "Docstrings",
    "title": "DandelionWebSockets.TextFrameSender",
    "category": "type",
    "text": "FrameSender is used to send multi-frame messages.\n\nYou are provided a FrameSender via the client. You then send data using the sendframe(sender, data; isfinal=false) method. For the last frame you set isfinal = true.\n\nAfter the last frame has been sent, you MAY NOT use the FrameSender again. Trying to send another frame with the same instance of FrameSender WILL lead to an exception of type FinalFrameAlreadySentException.\n\nNOTE: While you have a FrameSender in which you have not sent the last frame, then       you MAY NOT use the client to send any other messages. Interleaving messages is       prohibited by the WebSocket protocol and will lead to the socket being closed.\n\nNOTE: You may send frames that are individually invalid UTF-8. However, the complete message, which       is all frames concatenated, MUST be valid UTF-8, or the other endpoint is required to fail       the WebSocket connection.       With the TextFrameSender you can use both a String or a Vector{UInt8} as the payload.       The Vector{UInt8} alternative can be used to send invalid UTF-8, or possibly invalid UTF-8.\n\nExample\n\nsender = sendmultiframetext(client)\nsendframe(sender, \"Hello\")\nsendframe(sender, \"world\")\nsendframe(sender, \"Goodbye\"; isfinal=true)\n\nExample\n\nsender = sendmultiframebinary(client)\nsendframe(sender, b\"Hello\")\nsendframe(sender, b\"world\")\nsendframe(sender, b\"Goodbye\"; isfinal=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.Throws",
    "page": "Docstrings",
    "title": "DandelionWebSockets.Throws",
    "category": "type",
    "text": "Tells a mock function that it should throw an exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.TypeMatcher",
    "page": "Docstrings",
    "title": "DandelionWebSockets.TypeMatcher",
    "category": "type",
    "text": "Match a value by checking its type only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.ValueMatcher",
    "page": "Docstrings",
    "title": "DandelionWebSockets.ValueMatcher",
    "category": "type",
    "text": "Simply match a value by equality. This is the default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.WSClient",
    "page": "Docstrings",
    "title": "DandelionWebSockets.WSClient",
    "category": "type",
    "text": "A WebSocket client, used to connect to a server, and send messages.\n\nNote: The keyword arguments in the constructor are primarily for testing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.WebSocketHandshake",
    "page": "Docstrings",
    "title": "DandelionWebSockets.WebSocketHandshake",
    "category": "type",
    "text": "WebSocketHandshake represents a way to make a WebSocket connection handshake.\n\nThe only handshake detailed in the specification is an HTTP handshake, represented by the HTTPHandshake type (regardless of HTTP package used to implement it). The specification does mention the possibility of other types of handshakes, even though these would be outside of the specification.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.connection_result_",
    "page": "Docstrings",
    "title": "DandelionWebSockets.connection_result_",
    "category": "function",
    "text": "connection_result(::WSClient, ::GoodHandshake, ::WebSocketHandler, fix_small_message_latency::Bool)\n\nFor a valid handshake, start all background tasks for this connection. This includes tasks for reading and writing from the socket, as well as a task for user callback.\n\n\n\n\n\nThe HTTP Upgrade failed, for whatever reason.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.do_reader",
    "page": "Docstrings",
    "title": "DandelionWebSockets.do_reader",
    "category": "function",
    "text": "Read frames from the network, until an exception is thrown in this task.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.dohandshake",
    "page": "Docstrings",
    "title": "DandelionWebSockets.dohandshake",
    "category": "function",
    "text": "dohandshake(http::HTTPAdapter, uri::String, headers::HeaderList)\n\nDo an HTTP GET request to uri including headers headers.\n\nThe headers list will contain all WebSocket upgrade specific headers, such as Connection, Upgrade, and Sec-WebSocket-Key.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.fill_buffer",
    "page": "Docstrings",
    "title": "DandelionWebSockets.fill_buffer",
    "category": "function",
    "text": "Read all available data, and block until we have enough to fulfíll the next read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.handle",
    "page": "Docstrings",
    "title": "DandelionWebSockets.handle",
    "category": "function",
    "text": "Send a single text frame.\n\n\n\n\n\nSend a single binary frame.\n\n\n\n\n\nHandle a user request to close the WebSocket.\n\n\n\n\n\nThe underlying socket was closed. This is sent by the reader.\n\n\n\n\n\nHandle a frame from the server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.issuccessful",
    "page": "Docstrings",
    "title": "DandelionWebSockets.issuccessful",
    "category": "function",
    "text": "issuccessful(::AbstractHandshakeResult)\n\nTrue if a handshake was succcessful, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.name_args_",
    "page": "Docstrings",
    "title": "DandelionWebSockets.name_args_",
    "category": "function",
    "text": "Define a name for an argument, if no name is provided.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.on_binary",
    "page": "Docstrings",
    "title": "DandelionWebSockets.on_binary",
    "category": "function",
    "text": "Handle a binary frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.on_text",
    "page": "Docstrings",
    "title": "DandelionWebSockets.on_text",
    "category": "function",
    "text": "Handle a text frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.performhandshake",
    "page": "Docstrings",
    "title": "DandelionWebSockets.performhandshake",
    "category": "function",
    "text": "performhandshake(h::HTTPHandshake, uri::String)\n\nDo a handshake with the server at uri, with parameters supplied by h. Validate the handshake, and return a good or bad result, depending on the validation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.protocolstate",
    "page": "Docstrings",
    "title": "DandelionWebSockets.protocolstate",
    "category": "function",
    "text": "The state of the connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.reset",
    "page": "Docstrings",
    "title": "Base.reset",
    "category": "function",
    "text": "Reset the backoff to its initial state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.send",
    "page": "Docstrings",
    "title": "DandelionWebSockets.send",
    "category": "function",
    "text": "Send a frame to the other endpoint, using the supplied payload and opcode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.send_binary",
    "page": "Docstrings",
    "title": "DandelionWebSockets.send_binary",
    "category": "function",
    "text": "Send a single binary frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.send_text",
    "page": "Docstrings",
    "title": "DandelionWebSockets.send_text",
    "category": "function",
    "text": "Send a single text frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.sendframe",
    "page": "Docstrings",
    "title": "DandelionWebSockets.sendframe",
    "category": "function",
    "text": "Send a frame with a payload to the other endpoint. isfinal must be set to true for the last frame.\n\nAfter the call with isfinal = true, then this method MAY NOT be called again. If it is, then a FinalFrameAlreadySentException will be thrown.\n\n\n\n\n\nSpecialization of sendframe for TextFrameSender, for sending Strings as data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.state_closed",
    "page": "Docstrings",
    "title": "DandelionWebSockets.state_closed",
    "category": "function",
    "text": "The WebSocket was closed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.state_closing",
    "page": "Docstrings",
    "title": "DandelionWebSockets.state_closing",
    "category": "function",
    "text": "The WebSocket is about to close.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.state_connecting",
    "page": "Docstrings",
    "title": "DandelionWebSockets.state_connecting",
    "category": "function",
    "text": "The WebSocket is trying to connect.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.state_open",
    "page": "Docstrings",
    "title": "DandelionWebSockets.state_open",
    "category": "function",
    "text": "The WebSocket is open and ready to send and receive messages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.stop",
    "page": "Docstrings",
    "title": "DandelionWebSockets.stop",
    "category": "function",
    "text": "Close the WebSocket connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.tcpnodelay",
    "page": "Docstrings",
    "title": "DandelionWebSockets.tcpnodelay",
    "category": "function",
    "text": "tcpnodelay(::IO)\n\nSets the TCP_NODELAY flag on a socket. This is a separate function only for testing purposes. It can be implemented with a more specific type if the flag makes no sense for another IO subtype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DandelionWebSockets.wsconnect",
    "page": "Docstrings",
    "title": "DandelionWebSockets.wsconnect",
    "category": "function",
    "text": "Connect the client to a WebSocket server at uri, and use handler for the callbacks.\n\nArguments\n\nfix_small_message_latency::Bool = false: Set the TCP_NODELAY flag to improve small message latency.\n\nFix small message latency\n\nThe TCP protocol can buffer small messages (1448 bytes and smaller). The reason is that this reduces the overhead when sending large amounts of small packets. However, it also means that latency can be much higher for small messages. This buffering can be disabled by setting a flag TCPNODELAY. By default, the WebSocket client will now set the TCPNODELAY flag.\n\nIf your application will send and receive primarily small messages (1448 bytes or smaller), and it is sensitive to latency, then leave fix_small_message_latency set to true (now the default). This sets the TCPNODELAY flag. If you are not concerned about latency, but concerned about throughput for many small messages, then you can set `fixsmallmessagelatency = false`. Then you may get higher throughput, at the expense of higher latency for small messages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DandelionWebSockets.@expectDandelionWebSockets.@mockDandelionWebSockets.@mockfunctionDandelionWebSockets.AbnormalNoCloseResponseReceivedDandelionWebSockets.AbnormalSocketNotClosedByServerDandelionWebSockets.AbstractBackoffDandelionWebSockets.AbstractClientProtocolDandelionWebSockets.AbstractFrameWriterDandelionWebSockets.AbstractHandshakeResultDandelionWebSockets.AbstractMatcherDandelionWebSockets.AbstractPingerDandelionWebSockets.AbstractPongerDandelionWebSockets.AbstractRetryDandelionWebSockets.AbstractServerReaderDandelionWebSockets.AbstractWSClientDandelionWebSockets.BackoffDandelionWebSockets.BadHandshakeDandelionWebSockets.BinaryFrameSenderDandelionWebSockets.CLOSE_STATUS_ABNORMAL_CLOSEDandelionWebSockets.CLOSE_STATUS_EXPECTED_EXTENSIONDandelionWebSockets.CLOSE_STATUS_FATAL_UNEXPECTED_CONDITIONDandelionWebSockets.CLOSE_STATUS_GOING_AWAYDandelionWebSockets.CLOSE_STATUS_INCONSISTENT_DATADandelionWebSockets.CLOSE_STATUS_MESSAGE_TOO_BIGDandelionWebSockets.CLOSE_STATUS_NORMALDandelionWebSockets.CLOSE_STATUS_NO_STATUSDandelionWebSockets.CLOSE_STATUS_POLICY_VIOLATIONDandelionWebSockets.CLOSE_STATUS_PROTOCOL_ERRORDandelionWebSockets.CLOSE_STATUS_RESERVED_1004DandelionWebSockets.CLOSE_STATUS_TLS_HANDSHAKE_FAILUREDandelionWebSockets.CLOSE_STATUS_UNACCEPTABLE_DATADandelionWebSockets.ClientInitiatedCloseBehaviourDandelionWebSockets.ClientPingRequestDandelionWebSockets.ClientProtocolDandelionWebSockets.ClientProtocolInputDandelionWebSockets.CloseRequestDandelionWebSockets.CloseStatusDandelionWebSockets.CloseStatusAndReasonDandelionWebSockets.ClosingBehaviourDandelionWebSockets.DandelionWebSocketsDandelionWebSockets.FailTheConnectionBehaviourDandelionWebSockets.FinalFrameAlreadySentExceptionDandelionWebSockets.FrameDandelionWebSockets.FrameFromServerDandelionWebSockets.FrameSenderDandelionWebSockets.FrameWriterDandelionWebSockets.GoodHandshakeDandelionWebSockets.HTTPAdapterDandelionWebSockets.HTTPHandshakeDandelionWebSockets.HTTPHandshakeLogicDandelionWebSockets.HTTPUpgradeResponseDandelionWebSockets.HTTPjlAdapterDandelionWebSockets.HandshakeValidationResultDandelionWebSockets.HeaderListDandelionWebSockets.MockCallDandelionWebSockets.MockExpectationExceptionDandelionWebSockets.OPCODE_BINARYDandelionWebSockets.OPCODE_CLOSEDandelionWebSockets.OPCODE_CONTINUATIONDandelionWebSockets.OPCODE_PINGDandelionWebSockets.OPCODE_PONGDandelionWebSockets.OPCODE_TEXTDandelionWebSockets.OpcodeDandelionWebSockets.PingerDandelionWebSockets.PongMissedDandelionWebSockets.PongerDandelionWebSockets.ProxyDandelionWebSockets.RandomizedBackoffDandelionWebSockets.RetryDandelionWebSockets.STATE_CLOSEDDandelionWebSockets.STATE_CLOSINGDandelionWebSockets.STATE_CONNECTINGDandelionWebSockets.STATE_OPENDandelionWebSockets.SendBinaryFrameDandelionWebSockets.SendTextFrameDandelionWebSockets.ServerInitiatedCloseBehaviourDandelionWebSockets.ServerReaderDandelionWebSockets.SocketClosedDandelionWebSockets.SocketStateDandelionWebSockets.StopTaskExceptionDandelionWebSockets.SuccessfulHandshakeDandelionWebSockets.TLSBufferedIODandelionWebSockets.TextFrameSenderDandelionWebSockets.ThrowsDandelionWebSockets.TypeMatcherDandelionWebSockets.UniformResourceIdentifiersDandelionWebSockets.UnsuccessfulHandshakeDandelionWebSockets.ValueMatcherDandelionWebSockets.WSClientDandelionWebSockets.WebSocketConnectionDandelionWebSockets.WebSocketConnectionImplDandelionWebSockets.WebSocketHandlerDandelionWebSockets.WebSocketHandshakeDandelionWebSockets.WebSocketUpgradeDandelionWebSockets.WebSocketUpgradeAdapterDandelionWebSockets._expectheaderDandelionWebSockets.attachDandelionWebSockets.backoff_maxDandelionWebSockets.backoff_minDandelionWebSockets.bufferDandelionWebSockets.clientprotocolinputDandelionWebSockets.closesocketDandelionWebSockets.closestatusandreasonDandelionWebSockets.closetheconnectionDandelionWebSockets.connection_result_DandelionWebSockets.default_timer_factoryDandelionWebSockets.do_readerDandelionWebSockets.dohandshakeDandelionWebSockets.evalDandelionWebSockets.failtheconnectionDandelionWebSockets.fill_bufferDandelionWebSockets.getrequestheadersDandelionWebSockets.handleDandelionWebSockets.handle_binaryDandelionWebSockets.handle_closeDandelionWebSockets.handle_continuationDandelionWebSockets.handle_pingDandelionWebSockets.handle_pongDandelionWebSockets.handle_textDandelionWebSockets.includeDandelionWebSockets.isclosedcleanlyDandelionWebSockets.iscontrolframeDandelionWebSockets.issuccessfulDandelionWebSockets.masking!DandelionWebSockets.maybewrapioDandelionWebSockets.mock_actionDandelionWebSockets.mock_matchDandelionWebSockets.name_args_DandelionWebSockets.on_binaryDandelionWebSockets.on_textDandelionWebSockets.performhandshakeDandelionWebSockets.ping_sentDandelionWebSockets.pong_receivedDandelionWebSockets.protocolstateDandelionWebSockets.readstatusandreasonDandelionWebSockets.resetDandelionWebSockets.retryDandelionWebSockets.sendDandelionWebSockets.send_binaryDandelionWebSockets.send_textDandelionWebSockets.sendcloseframeDandelionWebSockets.sendframeDandelionWebSockets.sendmultiframebinaryDandelionWebSockets.sendmultiframetextDandelionWebSockets.set_functionDandelionWebSockets.showDandelionWebSockets.start_bufferDandelionWebSockets.start_readerDandelionWebSockets.state_closedDandelionWebSockets.state_closingDandelionWebSockets.state_connectingDandelionWebSockets.state_openDandelionWebSockets.stopDandelionWebSockets.tcpnodelayDandelionWebSockets.to_matcherDandelionWebSockets.validateresponseDandelionWebSockets.wsconnect"
},

]}
