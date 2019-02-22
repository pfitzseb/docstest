var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SenseHat.jl-1",
    "page": "Readme",
    "title": "SenseHat.jl",
    "category": "section",
    "text": "SenseHat.jl is a Julia library for interacting with the Raspberry Pi Sense HAT.SenseHat.jl requires the Raspbian sense-hat package:sudo apt-get update\nsudo apt-get install sense-hat\nsudo reboot"
},

{
    "location": "#LED-matrix-1",
    "page": "Readme",
    "title": "LED matrix",
    "category": "section",
    "text": "The main interface is the led_matrix() function, which creates an 8&times;8 array of RGB values (from ColorTypes.jl) which is memory-mapped to the frame buffer of the LED matrix. led_clear() is a convenience function for resetting the LED matrix to black.using SenseHat\nusing ColorTypes\n\nconst LED = led_matrix()\n\nLED[:] = SenseHat.JULIA_LOGO\nsleep(3)\nled_clear()"
},

{
    "location": "#Joystick-1",
    "page": "Readme",
    "title": "Joystick",
    "category": "section",
    "text": "In the Stick module there is readstick() which will block until the joystick is manipulated, returning a StickEvent:using SenseHat\n\ne = readstick()For querying within a loop, use a Channel to create a buffer of StickEvent.using SenseHat\n\nc = Channel{StickEvent}(32)\n\n@async while true\n    put!(c, readstick())\nend"
},

{
    "location": "#Sensors-1",
    "page": "Readme",
    "title": "Sensors",
    "category": "section",
    "text": "humidity(), temperature() and pressure() will read values from the corresponding sensors.The inertial measurement unit (IMU) is not yet supported, but is coming soon. In the meantime, you can use the python library via PyCall.jl."
},

]}
