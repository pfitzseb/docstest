var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BotCoreLCMTypes-1",
    "page": "Readme",
    "title": "BotCoreLCMTypes",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package implements the LCM type definitions from openhumanoids/botcorelcmtypes in Julia using LCMCore.jl. Each lcmtype has a matching native Julia type with associated encode() and decode() methods."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "using BotCoreLCMTypes, LCMCore\n\nmsg = vector_3d_t()\nmsg.x = 1\nmsg.y = 2\nmsg.z = 3\nbytes = encode(msg)\n\ndecoded = decode(bytes, vector_3d_t)\n@assert decoded.x == msg.x\n@assert decoded.y == msg.y\n@assert decoded.z == msg.z"
},

{
    "location": "#Exported-Types-1",
    "page": "Readme",
    "title": "Exported Types",
    "category": "section",
    "text": "atlas_command_t\nforce_torque_t\ngps_data_t\ngps_satellite_info_list_t\ngps_satellite_info_t\nimage_metadata_t\nimage_sync_t\nimage_t\nimages_t\nins_t\njoint_angles_t\njoint_state_t\nkvh_raw_imu_batch_t\nkvh_raw_imu_t\nplanar_lidar_t\npointcloud2_t\npointcloud_t\npointfield_t\npose_t\nposition_3d_t\nquaternion_t\nraw_t\nrigid_transform_t\nrobot_state_t\nrobot_urdf_t\nsensor_status_t\nsix_axis_force_torque_array_t\nsix_axis_force_torque_t\nsystem_status_t\ntwist_t\nutime_t\nvector_3d_t\nviewer_command_t\nviewer_draw_t\nviewer_geometry_data_t\nviewer_link_data_t\nviewer_load_robot_t"
},

{
    "location": "autodocs/#BotCoreLCMTypes.atlas_command_t",
    "page": "Docstrings",
    "title": "BotCoreLCMTypes.atlas_command_t",
    "category": "type",
    "text": "modeled after the DRCSIM AtlasCommand ROS message, but updated for the atlas hardware API. control parameter spec:\n\nq, qd, f are sensed position, velocity, torque, from AtlasJointState\nqd, qdd, f_d are desired position, velocity, torque, from AtlasJointDesired\n\nThe final joint command will be:    kqp   * ( qd - q )     +    kqi   * 1/s * ( qd - q ) +    kqdp  * ( qdd - qd )   +    kfp   * ( fd - f )     +    ffqd   * qd        +    ffqdd   * qdd        +    fffd  * fd         +    ffconst\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BotCoreLCMTypes.BotCoreLCMTypesBotCoreLCMTypes.atlas_command_tBotCoreLCMTypes.evalBotCoreLCMTypes.force_torque_tBotCoreLCMTypes.gps_data_tBotCoreLCMTypes.gps_satellite_info_list_tBotCoreLCMTypes.gps_satellite_info_tBotCoreLCMTypes.image_metadata_tBotCoreLCMTypes.image_sync_tBotCoreLCMTypes.image_tBotCoreLCMTypes.images_tBotCoreLCMTypes.includeBotCoreLCMTypes.ins_tBotCoreLCMTypes.joint_angles_tBotCoreLCMTypes.joint_state_tBotCoreLCMTypes.kvh_raw_imu_batch_tBotCoreLCMTypes.kvh_raw_imu_tBotCoreLCMTypes.planar_lidar_tBotCoreLCMTypes.pointcloud2_tBotCoreLCMTypes.pointcloud_tBotCoreLCMTypes.pointfield_tBotCoreLCMTypes.pose_tBotCoreLCMTypes.position_3d_tBotCoreLCMTypes.quaternion_tBotCoreLCMTypes.raw_tBotCoreLCMTypes.rigid_transform_tBotCoreLCMTypes.robot_state_tBotCoreLCMTypes.robot_urdf_tBotCoreLCMTypes.sensor_status_tBotCoreLCMTypes.six_axis_force_torque_array_tBotCoreLCMTypes.six_axis_force_torque_tBotCoreLCMTypes.system_status_tBotCoreLCMTypes.twist_tBotCoreLCMTypes.utime_tBotCoreLCMTypes.vector_3d_tBotCoreLCMTypes.viewer_command_tBotCoreLCMTypes.viewer_draw_tBotCoreLCMTypes.viewer_geometry_data_tBotCoreLCMTypes.viewer_link_data_tBotCoreLCMTypes.viewer_load_robot_t"
},

]}
