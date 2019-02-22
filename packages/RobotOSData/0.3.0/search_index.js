var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RobotOSData-1",
    "page": "Readme",
    "title": "RobotOSData",
    "category": "section",
    "text": "Work in progress: you can use this package by installing it directly from this git repository, but it is not registered yet(Image: Build Status) (Image: Coverage Status)A library to read data from ROS bags and messages in Julia.This package has no dependencies on the ROS codebase: you can use it without a working ROS install.Only ROS bags v2.0 are supported at the moment. If you\'d like support for earlier versions, do open an issue or submit a pull request.Reading from uncompressed bags is pretty fast (up to 500 MB/s on my laptop). Bags with BZip2 compression are supported, but reading these is about two orders of magnitude slower. Profiling shows that most of that time is spent in libbzip2 itself, so there is probably not much that can be done to make it faster."
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "Load a bag file through FileIO:using RobotOSData\nusing FileIO\nbag = load(\"indoor_flying1_data.bag\")This parses the index structure and shows a summary of the contents:ROS Bag v2.0 at indoor_flying1_data.bag\n1437 uncompressed chunks with 1.2 GiB of message data\n154942 messages in 9 topics:\n └─/davis/right/imu:                sensor_msgs/Imu => RobotOSData.CommonMsgs.sensor_msgs.Imu\n └─/davis/left/imu:                 sensor_msgs/Imu => RobotOSData.CommonMsgs.sensor_msgs.Imu\n └─/davis/right/events:         dvs_msgs/EventArray => Array{UInt8,1}\n └─/davis/left/events:          dvs_msgs/EventArray => Array{UInt8,1}\n └─/davis/left/camera_info:  sensor_msgs/CameraInfo => RobotOSData.CommonMsgs.sensor_msgs.CameraInfo\n └─/davis/left/image_raw:         sensor_msgs/Image => RobotOSData.CommonMsgs.sensor_msgs.Image\n └─/velodyne_point_cloud:   sensor_msgs/PointCloud2 => RobotOSData.CommonMsgs.sensor_msgs.PointCloud2\n └─/davis/right/camera_info: sensor_msgs/CameraInfo => RobotOSData.CommonMsgs.sensor_msgs.CameraInfo\n └─/davis/right/image_raw:        sensor_msgs/Image => RobotOSData.CommonMsgs.sensor_msgs.ImageNote how the standard ROS messages are resolved to a Julia type, while topics with the non-standard type \"dvs_msgs/EventArray\" will be parsed as raw Array{UInt8,1}. See below to add support for non-standard types.You can now read the messages in the bag:>>> using RobotOSData\n>>> @time bag[:] # read all messages\n  2.655052 seconds (6.83 M allocations: 1.556 GiB, 8.31% gc time)\nDict{String,Array{T,1} where T} with 9 entries:\n  \"/davis/right/imu\"         => MessageData{RobotOSData.CommonMsgs.sensor_msgs.…\n  \"/davis/right/camera_info\" => MessageData{RobotOSData.CommonMsgs.sensor_msgs.…\n  \"/davis/right/image_raw\"   => MessageData{RobotOSData.CommonMsgs.sensor_msgs.…\n  \"/davis/left/camera_info\"  => MessageData{RobotOSData.CommonMsgs.sensor_msgs.…\n  \"/davis/right/events\"      => MessageData{Array{UInt8,1}}[MessageData{Array{U…\n  \"/davis/left/image_raw\"    => MessageData{RobotOSData.CommonMsgs.sensor_msgs.…\n  \"/davis/left/imu\"          => MessageData{RobotOSData.CommonMsgs.sensor_msgs.…\n  \"/velodyne_point_cloud\"    => MessageData{RobotOSData.CommonMsgs.sensor_msgs.…\n  \"/davis/left/events\"       => MessageData{Array{UInt8,1}}[MessageData{Array{U…You can also read only some of the messages, which is faster than reading the whole file:# read chunks 1 to 10:\n>>> @time bag[1:10]\n  0.016518 seconds (56.23 k allocations: 11.630 MiB)\n# read a specific topic:\n>>> @time bag[\"/davis/right/imu\"]\n  0.707286 seconds (3.60 M allocations: 244.969 MiB)\n# read a time span:\n>>> @time bag[ROSTime(\"2017-09-05T20:59:40\"):ROSTime(\"2017-09-05T20:59:50\")]\n  0.317334 seconds (743.59 k allocations: 231.204 MiB)\n# combine a specific topic and time span:\n>>> @time bag[\"/davis/left/image_raw\", ROSTime(\"2017-09-05T20:59:40\"):ROSTime(\"2017-09-05T20:59:50\")]\n  0.116424 seconds (323.86 k allocations: 50.807 MiB)"
},

{
    "location": "#Message-Types-1",
    "page": "Readme",
    "title": "Message Types",
    "category": "section",
    "text": "RobotOSData comes with parsers for the message types in the ROS packages std_msgs and common_msgs, and these are enabled by default. To disable them, use the following:bag = load(\"indoor_flying1_data.bag\"; std_types=[])In the absence of a suitable parser, the message data will be read as raw bytes."
},

{
    "location": "#Writing-new-message-types-1",
    "page": "Readme",
    "title": "Writing new message types",
    "category": "section",
    "text": "If you want to support a new message type, for instance my_ros_pkg/NewMsgType, you can do so as follows:bag = load(\"recording.bag\", ExtraMessages)module ExtraMessages\n    module my_ros_pkg\n        using RobotOSData.Messages # imports Readable, Header\n        using RobotOSData.StdMsgs\n        using RobotOSData.CommonMsgs # for sensor_msgs\n        struct NewMsgType <: Readable\n            header::Header\n            imu::sensor_msgs.Imu\n        end\n    end\nendThe parser will call read(io, NewMsgType) to deserialize the new type. Readable already provides a generic implementation of read that should be adequate in most cases. But you could also write your own read(io::IO, ::Type{NewMsgType}). Have a look at the read_field() methods here."
},

{
    "location": "#Auto-generating-message-types-1",
    "page": "Readme",
    "title": "Auto-generating message types",
    "category": "section",
    "text": "RobotOSData provides a tool that lets you generate modules like the one above from the .msg files in a ROS package. To keep things simple, this tool does not try to resolve the dependencies between packages — it is up to you to indicate them. It will, however, handle dependencies between message files in the same package.RobotOSData.gen_module(:ExtraMessages, [\"path/to/my_ros_pkg\"], \"path/to/dest/dir\",\n    :(RobotOSData.StdMsgs), :(RobotOSData.CommonMsgs))"
},

{
    "location": "autodocs/#RobotOSData.Bag",
    "page": "Docstrings",
    "title": "RobotOSData.Bag",
    "category": "type",
    "text": "A ROS Bag version X.Y \n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobotOSData.ChunkedBag",
    "page": "Docstrings",
    "title": "RobotOSData.ChunkedBag",
    "category": "type",
    "text": "A chunked ROS bag V2.0+ \n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobotOSData.load",
    "page": "Docstrings",
    "title": "RobotOSData.load",
    "category": "function",
    "text": "FileIO loader \n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobotOSData.replay",
    "page": "Docstrings",
    "title": "RobotOSData.replay",
    "category": "function",
    "text": "Calls f(rec) for each record in chunk i. \n\n\n\n\n\nCalls f(rec) for each record in the specified chunks. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#RobotOSData.unbzip2!",
    "page": "Docstrings",
    "title": "RobotOSData.unbzip2!",
    "category": "function",
    "text": "Decode Bzip2 with minimal memory allocations \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "RobotOSData.BagRobotOSData.BagHeaderRobotOSData.ChunkRobotOSData.ChunkInfoRobotOSData.ChunkedBagRobotOSData.CommonMsgsRobotOSData.ConnectionRobotOSData.ConnectionFilterRobotOSData.HeaderDictRobotOSData.IndexDataRobotOSData.MessageDataRobotOSData.MessageV1RobotOSData.MessagesRobotOSData.MsgCountRobotOSData.MsgIndexRobotOSData.ROSDurationRobotOSData.ROSTimeRobotOSData.RawRobotOSData.RecordRobotOSData.RobotOSDataRobotOSData.StdMsgsRobotOSData.__init__RobotOSData.add_struct!RobotOSData.builtin_typesRobotOSData.compressionRobotOSData.evalRobotOSData.gen_moduleRobotOSData.gen_packageRobotOSData.gen_package_fileRobotOSData.includeRobotOSData.index!RobotOSData.julia_symRobotOSData.loadRobotOSData.load_bag!RobotOSData.make_filterRobotOSData.make_structRobotOSData.parse_msgRobotOSData.read_dictRobotOSData.read_keyvalueRobotOSData.read_messagesRobotOSData.replayRobotOSData.replay_streamRobotOSData.selectRobotOSData.setup_maps!RobotOSData.types_to_mapRobotOSData.unbzip2!"
},

]}
