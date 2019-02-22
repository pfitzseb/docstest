var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DrakeLCMTypes-1",
    "page": "Readme",
    "title": "DrakeLCMTypes",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package implements the LCM type definitions from Drake in Julia using LCMCore.jl. Each lcmtype has a matching native Julia type with associated encode() and decode() methods."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using DrakeLCMTypes, LCMCore\n\nmsg = polynomial_t()\nmsg.timestamp = 12345\nmsg.num_coefficients = 4\nmsg.coefficients = [1, 0, 2, 5]  # 1 + 0x + 2x^2 + 5x^3\nbytes = encode(msg)\n\ndecoded = decode(bytes, polynomial_t)\n@assert decoded.timestamp == msg.timestamp\n@assert decoded.num_coefficients == msg.num_coefficients\n@assert decoded.coefficients == msg.coefficients"
},

{
    "location": "#Exported-Types-1",
    "page": "Readme",
    "title": "Exported Types",
    "category": "section",
    "text": "body_motion_data_t\nbody_wrench_data_t\ndrake_signal_t\ndriving_control_cmd_t\nexternal_force_torque_t\nfoot_flag_t\nforce_torque_t\njoint_pd_override_t\npiecewise_polynomial_t\npolynomial_t\npolynomial_matrix_t\nqp_controller_input_t\nquadrotor_input_t\nquadrotor_output_t\nrobot_state_t\nscope_data_t\nsimulation_command_t\nsupport_data_t\nwhole_body_data_t\nzmp_com_observer_state_t\nzmp_data_t"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DrakeLCMTypes.DrakeLCMTypesDrakeLCMTypes.body_motion_data_tDrakeLCMTypes.body_wrench_data_tDrakeLCMTypes.drake_signal_tDrakeLCMTypes.driving_control_cmd_tDrakeLCMTypes.evalDrakeLCMTypes.external_force_torque_tDrakeLCMTypes.foot_flag_tDrakeLCMTypes.force_torque_tDrakeLCMTypes.includeDrakeLCMTypes.joint_pd_override_tDrakeLCMTypes.piecewise_polynomial_tDrakeLCMTypes.polynomial_matrix_tDrakeLCMTypes.polynomial_tDrakeLCMTypes.qp_controller_input_tDrakeLCMTypes.quadrotor_input_tDrakeLCMTypes.quadrotor_output_tDrakeLCMTypes.robot_state_tDrakeLCMTypes.scope_data_tDrakeLCMTypes.simulation_command_tDrakeLCMTypes.support_data_tDrakeLCMTypes.whole_body_data_tDrakeLCMTypes.zmp_com_observer_state_tDrakeLCMTypes.zmp_data_t"
},

]}
